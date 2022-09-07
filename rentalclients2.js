let carType;

function math2() {
  var price;
  var car;
  var day;
  var message;

  car = document.querySelector("input[name='carSelect']:checked").value;
  day = document.getElementById("rentDay").value;

  price = car * day;

  document.getElementById("price").innerHTML = "Order total is:  $" + price;



}




function loadDate()
{
	var current_datetime = new Date()
  
  const d = new Date(2018, 11, 24, 10, 33, 30, 0);
  document.getElementById("timee").innerHTML = d;

	var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() +" "+ current_datetime.getHours() +":" + current_datetime.getMinutes();
    document.getElementById("timee").innerHTML = formatted_date;
}
var xhr = new XMLHttpRequest(); //XMLHTTPRequest object
var parsedrecord; //parsed JSON file
//load pageSetup
window.onload = function(){pageSetup(), loadDate()}

function pageSetup() {
  //event listener
  document.getElementById("fullname").addEventListener(
    "keyup",
    function () {
      searchFullName(this.value);
    },
    false
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      parsedrecord = JSON.parse(xhr.responseText);
      //displayData(r);
    }
  };
  xhr.open("GET", "rentalclients.json", true);
  xhr.send();
}

function searchFullName(la) {
  //set up table
  var output = "<tr><th>First Name</th><th>Last Name</th></tr>";

  //modify bp to include
  //begin search
  for (var i = 0; i < parsedrecord.length; i++) {
    var record = parsedrecord[i];
    //check
    lname = record.last_name; //assign

    if (lname.toLowerCase().startsWith(la.toLowerCase())) {
      //partial match on string
      output += "<tr><td>";
      output += record.last_name;
      output += "</td><td>";
      output += record.first_name;
      output += "</td><td>";
      output +=
        "<input type= radio onchange='getMenu(" +
        i +
        ")' name=men>View Client Information</radio>";

      output += "</td><td>";
      document.getElementById("searchresults").innerHTML = output;
    }
    if (la == "") {
      document.getElementById("searchresults").innerHTML = "";
    }
  }
}

function getMenu(val) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("display").innerHTML = xhr.responseText;
      getClientMenu(val);
    }
  };
  xhr.open("GET", "rentalcarmenu.html", true);
  xhr.send();
  boo = true;
}

function getClientMenu(recDex) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var m = JSON.parse(xhr.responseText);
    var record = m[recDex];
    var output = "";
    output += "Hello! ";
    output += record.first_name;
    output += " ";
    output += record.last_name;
    output += "<br>";
    output += "Phone Number: ";
    output += record.phone;
    output += "<br>";
    output += "Email Address: ";
    output += record.email;
    output += "<br>";
    output += "Street Address: ";
    output += record.address;
    output += "<br>";
    output += "State/Province: ";
    output += record.state_prov;

    document.getElementById("dispRes").innerHTML = output;

    //displayData(r);
  }
}
xhr.open("GET", "rentalclients.json", true);
xhr.send();
