var refreshIntervalId;

$(document).on("ready", ready);

function ready(){
	$(".animate").hide();

	$("#steps")[0].play();

	setTimeout(function(){frame1()},2000);
}

function frame1()
{
	$("#steps")[0].pause();
	$("#crash")[0].play();

	setTimeout(function(){frame2()},2000);
}

function frame2()
{
	$("#sorry").show().typewriter();

	setTimeout(function(){frame3()},2000);
	
}

function frame3()
{
	$(".speech").hide();
	$("#talking-normal").show();
	$("#is-this-valve").show().typewriter();
	setTimeout(function(){frame4()},5000);
}

function frame4()
{
	$("#is-this-valve-options").show();
	idle();
	$("#yes-congrats").on("click",yesCongrats1)

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

function yesCongrats1()
{
	clearInterval(refreshIntervalId);
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
	$("#i-came-for-a-job-interview").show().typewriter();
	setTimeout(function(){yesCongrats3()},15000);
}

function yesCongrats3()
{
	$("#i-came-for-a-job-interview-options").show();
	idle();
	refreshIntervalId = setInterval(function(){idle()},15000);
	$("#of-course").on("click",jobinterviewOptions)
}

function jobinterviewOptions()
{
	$(".speech").hide();
	$("#curriculum-options").show();

	$("#why").on("click",why1);
	$("#goal").on("click",goal1);
	
	refreshIntervalId = setInterval(function(){idle()},15000);
}

