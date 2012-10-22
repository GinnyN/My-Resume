function why1()
{
	clearInterval(refreshIntervalId);

	$(".animate").hide();
	$(".speech").hide();
	$("#talking-normal").show();

	$("#why-I-want-to-work-there").show().typewriter();
}