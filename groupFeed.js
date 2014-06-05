/* This code adds in the 'Group Feed' button to the nav bar of Codecademy.  */

var groupUpdate = function() {
	$("menu#me div.grid-row div.grid-col-4 a.no-underline:nth-child(4)").append("<a href='http://www.codecademy.com/dashboard/groups' class='no-underline'><li class='panel__item'><h5>Groups Feed</h5></li></a>");
}
 
var script = document.createElement("script");
script.textContent = "(" + groupUpdate.toString() + "())";
document.documentElement.appendChild(script);
