var bio = {
	"name": "Jaiden Fallo",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "773-964-8881",
		"email": "jaidenf@gmail.com",
		"github": "jaidenf",
		"twitter": "@teengeekgirl",
		"location": "Chicago"
	},
	"welcomeMessage": "Hi, I'm Jaiden! Here's a little bit about me!",
	"skills": ["HTML", "CSS", "Javascript", "JQuery", "Python"],
	"biopic": "images/biopic.jpg"
};
bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var bioPic = HTMLbioPic.replace("%data%", "images/biopic.jpg");
	$("#header").append(bioPic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedwelcomeMsg);
	var formmatedMobile= HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formmatedMobile);
	$("#footerContacts").append(formmatedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	//skills
	$("#header").append(HTMLskillsStart);
	for (var i in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	};
};


bio.display();
// End code for bio

//work section
var work = {
	"jobs": [
		{
		    "employer": "FEMcoders", 
		    "title": "Founder",
		    "dates": "In Progress",
		    "location": "Chicago, IL",
		    "description": "Program that helps women without traditional college degrees in computer science get into the industry."
		},
		{
		    "employer": "UIC Research Team", 
		    "title": "Oculus Coder",
		    "dates": "Fall 2015",
		    "location": "Chicago, IL",
		    "description": "Paid position with a research team at UIC studying neurosurgery techniques to assist them in building a virtual reality program to see the brain from all angles."
		},
		{
		    "employer": "CPS Web Development", 
		    "title": "Intern",
		    "dates": "In Progress",
		    "location": "Chicago, IL",
		    "description": "Creating and updating individual school websites."
		}
	] 
};

work.display = function(){
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedworkDates = HTMLworkDates.replace ("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedworkDates);
		var formattedworkLocation = HTMLworkLocation.replace ("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedworkLocation);
		var formattedworkDescription =HTMLworkDescription.replace ("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedworkDescription);
		}
};


work.display ();
//end of code for work section	

var education = {
	"schools": [
		{
	     	"name": "University of Pennsylvania",
	     	"city": "Philadelphia, PA",
		    "degree": "BA",
		    "majors": ["Computer Science", "Business"],
		    "dates": 2020
		}
	],
	"onlineCourses": [
    {
  		"title" : "Front-End Web Devoloper Nanodegree",
  		"school" : "Udacity",
  		"dates" : "2015-2016",
  		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  	}
    ]
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedCity);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajors);

    }

    $("#education").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedOnlineUrl);
    }
}
education.display();
//end of education section

var projects = {
	"projects": [{
		"title": "SafePath",
		"dates": "Summer 2015",
		"description": "App that allows the user to put in where they are and where they want to walk to and it calculates a path where the most businesses are open at that time and the crime history is the lowest to help assist you in choosing the safest path.",
		"images": [
			"images/save_path_main.jpg",
			"images/save_path2.jpg",
			"images/save_path3.jpg"
		]
	}]
};

projects.display = function(){
	for (var project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace ("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace ("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace ("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display ();
//end of projects section


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


$("#mapDiv").append(googleMap);
