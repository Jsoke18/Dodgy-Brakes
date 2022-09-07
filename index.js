function loadDate()
{
	var current_datetime = new Date()
  
  const d = new Date(2018, 11, 24, 10, 33, 30, 0);
  document.getElementById("timee").innerHTML = d;

	var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() +" "+ current_datetime.getHours() +":" + current_datetime.getMinutes();
    document.getElementById("timee").innerHTML = formatted_date;
}

window.onload = function() {loadDate()}
