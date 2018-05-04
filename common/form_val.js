//File for all of the work required for the data_form.htm page

//../htm/authorship.txt
/*TOC
Sources
Variables
Functions
*/
/********Sources******/
/*
Matt Harrison:
//copy and paste this on to every function
/*	Purpose:
 *		Pre:
 *		Post:
*/
/********Variables******/


var time = new Date();
var expdate = time.getDate()+(60*60*24*1000*7);

/********Functions******/

/* create a regular expression to validate the first and last name fields to be sure that only letters are entered into these fields.  */
/*	Purpose:
 *		Pre:
 *		Post:
*/
function val_data(){
  var fn = document.getElementById("first").value;
  var ln = document.getElementById("last").value;
  var code = document.getElementById("num").value;

  var RegExpText = /^[A-Z a-z]+$/;
  var RegExpCode = /^(DEPT)[0-9]{1}[1-9]{1}$/;
if (!RegExpText.test(fn))
  {
    alert("Please enter your first name");
    document.getElementById("first").focus();
    document.getElementById("first").select();
    return false;
  }
else if(!RegExpText.test(ln))
  {
    alert("Please enter your last name.");
    document.getElementById("last").focus();
    document.getElementById("last").select();
    return false;
  }
/* Create a second regular expression for the department code.
It must be validated so that the first four characters are DEPT followed by a two digit value of 01 to 99.  */
/*	Purpose:
 *		Pre:
 *		Post:
*/
else if(!RegExpCode.test(code))
  {
    alert("Please enter your Department.");
    document.getElementById("num").focus();
    document.getElementById("num").select();
    return false;
  }
/* Validate the Project Assigned field as you see fit. You do not need to
use a regular expression for it.  */
/*	Purpose:
 *		Pre:
 *		Post:
*/
else if ((document.getElementsByName("qa")[0].checked == "") && (document.getElementsByName("test")[0].checked == "") && (document.getElementsByName("dev")[0].checked == ""))
  {
    alert("Please select at least one project assigned.");
    document.client.word.focus();
    return false;
  }
/* For the radio buttons, be sure that one and only one of the radio buttons is selected and that its value has been captured. */
/*	Purpose:
 *		Pre:
 *		Post:
*/
  emp = -1;
         for(i=0;i<document.getElementsByName("emp").length; i++)

              if(document.getElementsByName("emp")[i].checked)
                {
            emp = i;
            var empVal = document.getElementsByName("emp")[i].value;
                }

              if(empVal == -1)
            {
                  alert("Please select an employee category.");
                  return false;
                }
/*Create Javascript cookies for each value from the form. Exp 2 weeks.*/
/*	Purpose:
 *		Pre:
 *		Post:
*/
else //Cookie Checkbox modified from Kevin Law
	{

		var proj = new Array();
		var getEm= document.getElementsByTagName("*");
		for(i=0;i<getEm.length;i++)
		{
			if(getEm[i].type=="checkbox")
			{
				if (getEm[i].checked == 1 )
				{
					proj.push(getEm[i].value);
				}
			}
		}
    alert("Thank you for your information.");
		makeThoseCookies(fn,ln,code,empVal);

	}
}
function makeThoseCookies(fn,ln,code,empVal){
for (i = 0; i < arguments.length; i++)
{
document.cookie=Object.getOwnPropertyNames(arguments[i])+"="+arguments[i]+";expires="+expdate+"path='/'";

}
}
