function why1()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	progress = $("#why-I-want-to-work-there").show().typewriter();
	progress[0];
	setTimeout(function(){
		idle();
		refreshIntervalId = setInterval(function(){idle()},15000);
		$("#next").show().off().on("click", why2);
	},progress[1]);
}

function why2(){
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$("#talking-normal").show();

	$(".speech").hide();
	progress = $("#why-I-want-to-work-there-2").show().typewriter();
	progress[0];
	
	setTimeout(function(){
		idle();
		refreshIntervalId = setInterval(function(){idle()},15000);
		$("#next").show().off().on("click", why3);
	},progress[1]);
}

function why3(){
	
	clearInterval(refreshIntervalId);

	$(".speech").hide();
	$("#work-there").show();
	$("#resume-title").show();
	idle();
	jobinterviewOptions();
}

function goal1()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	progress = $("#my-goals-are").show().typewriter();
	progress[0];

	setTimeout(function(){
			idle();
			refreshIntervalId = setInterval(function(){idle()},15000);
			$("#next").show().off().on("click", goal2);
	},progress[1]);
}

function goal2()
{
	clearInterval(refreshIntervalId);

	$(".speech").hide();
	$("#goal-is").show();
	$("#resume-title").show();
	idle();
	jobinterviewOptions();
}

function personal1()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	progress = $("#personal-details").show().typewriter();
	progress[0];
	setTimeout(function(){
			$("#personal-details-options").show();
			$("#communication").show();
			$("#resume-title").show();
			$("#link-hobbies").on("click", showHobbies);
			idle();
			refreshIntervalId = setInterval(function(){idle()},15000);
	},progress[1]);

}

function showHobbies()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	progress = $("#my-hobbies-are-1").show().typewriter();
	progress[0];
	setTimeout(function(){

		idle();
			refreshIntervalId = setInterval(function(){idle()},15000);
			$("#next").show().off().on("click", showHobbies2);
		
	},progress[1]);
}

function showHobbies2()
{
	clearInterval(refreshIntervalId);
	
	$(".animate").hide();
		$(".speech").hide();
		$("#talking-normal").show();
		progress = $("#my-hobbies-are-2").show().typewriter();
		progress[0];
		setTimeout(function(){
			idle();
			refreshIntervalId = setInterval(function(){idle()},15000);
			$("#next").show().off().on("click", showHobbies3);
		},progress[1]);
}

function showHobbies3()
{
	clearInterval(refreshIntervalId);
	$(".speech").hide();
	$("#hobbies-are").show();
	$("#resume-title").show();
	idle();
	jobinterviewOptions();
}

function showWorkExperience()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	progress = $("#my-working-experience-is-1").show().typewriter();
	progress[0];
	setTimeout(function(){
		idle();
			refreshIntervalId = setInterval(function(){idle()},15000);
			$("#next").show().off().on("click", showWorkExperience2);
		
	},progress[1]);
}

function showWorkExperience2()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	progress =  $("#my-working-experience-is-2").show().typewriter();
	progress[0];

	setTimeout(function(){
		idle();
			refreshIntervalId = setInterval(function(){idle()},15000);
			$("#next").show().off().on("click", showWorkExperience3);
	},progress[1]);
}

function showWorkExperience3()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	progress = $("#my-working-experience-is-3").show().typewriter();
	progress[0];
	setTimeout(function(){
		idle();
			refreshIntervalId = setInterval(function(){idle()},15000);
			$("#next").show().off().on("click", showWorkExperience4);
	},progress[1]);
}

function showWorkExperience4()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	progress = $("#my-working-experience-is-4").show().typewriter();
	progress[0];
	setTimeout(function(){
		idle();
			refreshIntervalId = setInterval(function(){idle()},15000);
			$("#next").show().off().on("click", showWorkExperience5);
	},progress[1]);
}

function showWorkExperience5()
{
	clearInterval(refreshIntervalId);

	$(".speech").hide();
	$("#working-experience-is").show();
	$("#resume-title").show();
	idle();
	jobinterviewOptions();
}

function showCoding()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	progress = $("#technical-details-1").show().typewriter();
	progress[0];
	setTimeout(function(){
		idle();
		refreshIntervalId = setInterval(function(){idle()},15000);
		$("#next").show().off().on("click", showCoding1);
	},progress[1]);
}

function showCoding1()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();
	progress = $("#technical-details-2").show().typewriter();
	progress[0];

	setTimeout(function(){
		idle();
		refreshIntervalId = setInterval(function(){idle()},15000);
		$("#next").show().off().on("click", showCoding2);
	},progress[1]);
}

function showCoding2()
{
	clearInterval(refreshIntervalId);

	$(".speech").hide();
	$("#programming-languajes").show();
	$("#resume-title").show();
	idle();
	jobinterviewOptions();
}

function showEducation()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	progress = $("#education-details-1").show().typewriter();
	progress[0];
	setTimeout(function(){
		idle();
		refreshIntervalId = setInterval(function(){idle()},15000);
		$("#next").show().off().on("click", showEducation2);
	},progress[1]);
}

function showEducation2()
{
	clearInterval(refreshIntervalId);
	$(".speech").hide();
	$("#college").show();
	$("#resume-title").show();
	idle();
	jobinterviewOptions();
}