//File for all of the work required for the feedback.htm page
//../htm/authorship.txt
/*TOC
Sources
Functions
Variables
*/
/********Sources******/
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
		return cookie;
}
/********Variables******/
