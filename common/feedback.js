//File for all of the work required for the feedback.htm page
//../htm/authorship.txt
/*TOC
Sources
Functions
Variables
*/
/********Sources******/
//foreach
//https://www.w3schools.com/jsref/jsref_forEach.asp
//forloop
//https://www.w3schools.com/js/js_loop_for.asp
/*
Matt Harrison:
//copy and paste this on to every function
/*	Purpose:
 *		Pre:
 *		Post:
*/
/********Functions******/
function findCookie(val) {
    var cookie = null;
    var findVal = val + "=";
    var dc = document.cookie;
    if (dc.length > 0)
    {
       var start = dc.indexOf(findVal);
       if (start >= 0)
       {
          start += findVal.length;
          lastVal = dc.indexOf(";", start);
          if (lastVal == -1)
          {
             lastVal = dc.length;
          }
          cookie = (dc.substring(start, lastVal));
          }
          else
          {
             return cookie;
          }
        }
    console.log(cookie);
		return cookie;
}


/********Variables******/
var fn = findCookie("fn");
var ln = findCookie("ln");
var code = findCookie("code");
var empVal = findCookie("empVal");
var proj = findCookie("proj");

/********Functions******/
function writeCookies(){
//   for(i=0; i < 5 ; i++){
//  document.getElementsByClassName("target")[i].innerHTML += cookies[i];
// }
document.getElementById("fn").innerHTML += fn;
document.getElementById("ln").innerHTML += ln;
document.getElementById("code").innerHTML += code;
document.getElementById("empVal").innerHTML += empVal;
document.getElementById("proj").innerHTML += proj;
}
