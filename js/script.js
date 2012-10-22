var refreshIntervalId;
var flag = true;

$(window).on("load", ready);

function youCanGo(){
	clearInterval(refreshIntervalId);
	clearInterval(refreshIntervalId);
	$("#upgrade").hide();
	$("#upgrade")[0].pause();
	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();
	progress = $("#thanks-a-lot").show().typewriter();
	progress[0];
	setTimeout(
		function(){
			$(".animate, .shirt").hide();
			$(".speech").hide();
			$("#steps")[0].play();

			setTimeout(
				function(){
					$("#steps")[0].pause();
					$("#crash")[0].play();

				setTimeout(
					function(){
						$("#sorry").show().typewriter()[0];
					}
				,2000);
				},
			2000);
		}
	,7000);
}

function ready(){
	$(".animate").hide();

	$("#steps").preload();
	$("#crash").preload();
	$("#steps")[0].volume = 0.5;
	$("#steps")[0].play();

	$("#jump-over").on("click", jumpOver);
	refreshIntervalId = setTimeout(function(){frame1()},2000);
}

function frame1()
{
	$("#steps")[0].pause();
	$("#crash")[0].volume = 0.5;
	$("#crash")[0].play();

	refreshIntervalId = setTimeout(function(){frame2()},2000);
}

function frame2()
{
	progress = $("#sorry").show().typewriter();
	progress[0];

	refreshIntervalId = setTimeout(function(){frame3()},2000);
	
}

function frame3()
{
	$(".speech").hide();
	$("#talking-normal, #max").show();
	progress = $("#is-this-valve").show().typewriter();
	progress[0];
	refreshIntervalId = setTimeout(function(){frame4()},progress[1]);
	$("#max").off().on("click", samAndMax);
}

function frame4()
{
	$("#is-this-valve-options").show();
	idle();
	$("#yes-congrats").on("click",yesCongrats1);
	$("#no-sadness").on("click", noSadness1);

	refreshIntervalId = setInterval(function(){idle()},10000);
}

function idle(){
	i = Math.floor(Math.random()*10)

	$(".animate").hide();
	if(i < 10){
		$("#idle-blink img").attr("src", "gifs/idle/blink.gif")
		$("#idle-blink").show();
	}else if(i==10){
		$("#idle-spying img").attr("src", "gifs/idle/spying.gif")
		$("#idle-spying").show();
	}
}

function noSadness1()
{
	clearInterval(refreshIntervalId);
	$("#dominated")[0].volume = 0.5;
	$("#dominated")[0].play();
	$(".animate").hide();
	$("#surprised").show();

	setTimeout(function(){yesCongrats2()},5000);
}

function yesCongrats1()
{
	clearInterval(refreshIntervalId);
	$("#yay")[0].volume = 0.5;
	$("#yay")[0].play();
	$(".animate").hide();
	$("#happy").show();

	setTimeout(function(){yesCongrats2()},5000);
}

function yesCongrats2()
{
	$(".speech").hide();
	$(".animate").hide();
	$("#talking-normal").show();
	progress = $("#i-came-for-a-job-interview").show().typewriter();
	progress[0];
	setTimeout(function(){yesCongrats3()},progress[1]);
}

function yesCongrats3()
{
	$("#i-came-for-a-job-interview-options").show();
	idle();
	refreshIntervalId = setInterval(function(){idle()},15000);
	$("#of-course").on("click",jobinterviewOptions);
	$("#job-interview").on("click", sad);
}

function sad()
{
	$(".speech").hide();
	$(".animate").hide();
	$("#sadness").show();
	$("#ok-ok-ok").show();
	$("#of-course-2").on("click",jobinterviewOptions);
}

function jumpOver()
{
	$("#yay")[0].pause();
	$("#steps")[0].pause();
	$("#crash")[0].pause();
	$("#dominated")[0].pause();

	$(".speech").hide();
	$("#talking-normal, #max").show();
	$("#max").off().on("click", samAndMax);

	jobinterviewOptions();
}

function jobinterviewOptions()
{
	clearInterval(refreshIntervalId);
	
	$("#jump-over").hide();
	$(".speech").hide();
	$("#curriculum-options").show();
	$("#upgrade").show();
	if(flag){
		$("#upgrade")[0].volume = 0.5;
		$("#upgrade")[0].play();
		flag = false;
	}
	$("#why").off().on("click",why1);
	$("#goal").off().on("click",goal1);
	$("#personal").off().on("click",personal1);
	$("#work").off().on("click",showWorkExperience);
	$("#technical").off().on("click", showCoding);
	$("#education").off().on("click", showEducation);
	$("#you-can-go").off().on("click",youCanGo);

	idle();
	refreshIntervalId = setInterval(function(){idle()},15000);
}


function samAndMax()
{
	clearInterval(refreshIntervalId);
	$("#max").off();
	$(".speech").hide();
	$(".animate").hide();
	$("#talking-normal").show();
	progress = $("#max-shirt").show().typewriter();
	progress[0];
	setTimeout(function(){shirtRand($("#max"))},progress[1]+1000);
}
function jimmy()
{
	clearInterval(refreshIntervalId);
	$("#jimmy").off();
	$(".speech").hide();
	$(".animate").hide();
	$("#talking-normal").show();
	progress = $("#jimmy-shirt").show().typewriter();
	progress[0];
	setTimeout(function(){shirtRand($("#jimmy"))},progress[1]+1000);
}
function engie()
{
	clearInterval(refreshIntervalId);
	$("#engie").off();
	$(".speech").hide();
	$(".animate").hide();
	$("#talking-normal").show();
	progress = $("#engie-shirt").show().typewriter();
	progress[0];
	setTimeout(function(){shirtRand($("#engie"))},progress[1]+1000);
}
function peace()
{
	clearInterval(refreshIntervalId);
	$("#peace").off();
	$(".speech").hide();
	$(".animate").hide();
	$("#talking-normal").show();
	progress = $("#peace-shirt").show().typewriter();
	progress[0];
	setTimeout(function(){shirtRand($("#peace"))},progress[1]+1000);
}
function shirtRand(shirt)
{

	j = Math.floor(Math.random()*4);
	$(".shirt").off().hide();

	jobinterviewOptions();

	if(j == 0){
		if($(shirt).attr("id") == "max" )
			$("#peace").show().off().on("click", peace);
		else
			$("#max").show().off().on("click", samAndMax);
	}
	else if(j == 1){
		if($(shirt).attr("id") == "jimmy" )
			$("#max").show().off().on("click", samAndMax);
		else
			$("#jimmy").show().off().on("click", jimmy);
	}
	else if(j == 2)
		if($(shirt).attr("id") == "engie" )
			$("#jimmy").show().off().on("click", jimmy);
		else
			$("#engie").show().off().on("click", engie);
	else if(j == 3)
		if($(shirt).attr("id") == "peace" )
			$("#engie").show().off().on("click", engie);
		else
			$("#peace").show().off().on("click", peace);
}
