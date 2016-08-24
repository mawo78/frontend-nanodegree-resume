/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* var formattedName = "Marcin";
 var formattedRole = "Developer";
 HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
 HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);
 $("#header").prepend(HTMLheaderRole);
 $("#header").prepend(HTMLheaderName);
*/

var work = {
 	"jobs" : [
 	{
		"employer": "Software Inn",
		"title": "Developer",
		"location" :"Szczecin",
		"dates": "2013-2016",
		"description" :"Java, PHP and Drupal development."
 	},
 	{
		"employer": "Unizeto SA",
		"title": "Developer",
		"location": "Szczecin",
		"dates" :"2002-2011",
		"description" :"Java, C++ development."
 	}
 	]
 };
var projects = {
	"projects" : [
	{
		"title": "proCertum API",
		"dates" :"2002-2009",
		"description" :"Digital signature API",
		"images": []
	},
	{
		"title" :"proCertum Form",
		"dates": "2004-2009",
		"description": "Data delivery service with digital signature and encryption",
		"images" : []
	}
	]
}

var bio = {
 "name" : "Marcin Wojciechowski",
 "role" : "Developer",
 "welcomeMessage" : "Hello world!",
 "contacts" : { 
 		"mobile" : "505271165",
 		"email" : "mawo78@gmail.com",
 		"github" : "mawo78",
 		"twitter" : "@mawo78",
 		"location" : "Szczecin"
	},
 "biopic" : "images/fry.jpg",
 "skills" : ["C++", "Java", "SQL"]
 };
/* $("#main").append(bio.skills);
 $("#main").append(bio.pictureURL);
 $("#main").append(bio.contactInfo);
 $("#main").append(bio.role);
 $("#main").append(bio.name);*/


var education = {
	"schools" : [
	{
	 "name" : "Technical Univ",
	 "location" : "Szczecin",
	 "degree dates" : "1997-2002",
	 "url" : "",
	 "majors" : ["Software Engineering"]
	},
	{
	 "name" : "Technical Univ",
	 "years" : "1997-2002",
	 "city" : "Szczecin"
	}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript",
			"school" : "Udacity",
			"dates" : "2016-08",
			"url" : "https://www.udacity.com/courses/ud804"
		},
		{
			"title" : "Git",
			"school" : "Udacity",
			"dates" : "2016-07",
			"url" : "https://www.udacity.com/"
		}
	]
 };

// $("#main").append(work["position"]);
// $("#main").append(education.name);

var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
 $("#header").prepend(name);
 $("#header").prepend(role);

 if(bio.skills.length > 0) {
 	$("#header").append(HTMLskillsStart);
 	$("#header").append(HTMLskills.replace("%data%", bio.skills));
 }

 for(var i in work.jobs) {
 	$('#workExperience').append(HTMLworkStart);
 	var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
 	var title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
 	var job = employer + " " + title;
 	console.log(job);
 	//document.getElementsByClassName('work-entry').append(job);
 	$('.work-entry:last').append(job+"<br>");
 }
