function showAlert()
{
    var frname;
    var lname;
    frname = document.getElementById("uname").value;
    lname = document.getElementById("usurname").value;
    alert("THIS IS "+frname+" "+lname+" homework");
    document.getElementById("someone").innerHTML="THIS IS "+frname+" "+lname+" homework";
    console.log("wutt");
}
function deleteOutput()
{
  document.getElementById("someone").innerHTML="";
}
function printmessage()
{
  document.getElementById("message").innerHTML="Click on me";
}
function delmessage()
{
  document.getElementById("message").innerHTML="";
}
function generator()
{
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var name = document.getElementById("uname").value;
  var surname = document.getElementById("usurname").value;
  var age = document.getElementById("uage").value;
  var sex;
  if (document.getElementById("opt1").checked == true)
  {
    sex = document.getElementById("opt1").value;
  }
  else if (document.getElementById("opt2").checked == true)
  {
    sex = document.getElementById("opt2").value;
  }
  else
  {
    sex = document.getElementById("opt3").value;
  }
  cell1.innerHTML = name;
  cell2.innerHTML = surname;
  cell3.innerHTML = age;
  cell4.innerHTML = sex;
  deltable();

}
function doSumm()
{
  var a = parseInt(document.getElementById("uname").value, 10);
  var b = parseInt(document.getElementById("usurname").value, 10);
  var y = parseInt( a + b);
  if (a == 0 && b == 0) {
    y = 0;
  }
  document.getElementById("message").innerHTML=parseInt(y);
}

function deltable()
{
  var frm = document.getElementsByName("myTable");
  //frm.submit(); // Submit the form
  frm.reset();  // Reset all form data
  return false;
}
