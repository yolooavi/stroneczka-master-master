function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  var mylist =document.getElementById("myDropdown");
  document.getElementById("favourite").value = myDropdown.options[myDropdown.selectedIndex].text;
}


function myFunction1() {
  document.getElementById("myHours").classList.toggle("show");
  var mylist1 =document.getElementById("myHours");
  document.getElementById("favourite1").value = myHours.options[myHours.selectedIndex].text;

}
function myFunction2() {
  document.getElementById("myData").classList.toggle("show");
  var mylist2 =document.getElementById("myData");
  document.getElementById("favourite2").value = myData.options[myData.selectedIndex].text;

}




function valueSender1() {
var mylist =document.getElementById("favourite").value = myDropdown.options[myDropdown.selectedIndex].text;
localStorage.setItem("favourite", mylist);
var mylist1 =document.getElementById("favourite1").value = myHours.options[myHours.selectedIndex].text;
localStorage.setItem("favourite1", mylist1);
window.location.href = "podsumowanie-dariusz.html";
var mylist2 =document.getElementById("favourite2").value = myData.options[myData.selectedIndex].text;
localStorage.setItem("favourite2", mylist2);
window.location.href = "podsumowanie-dariusz.html";
}

// function valueSender2() {
// var mylist =document.getElementById("favourite1").value = myHours.options[myHours.selectedIndex].text;
  
// localStorage.setItem("favourite1", mylist);
// window.location.href = "podsumowanie-dariusz.html";
    
//   }
  