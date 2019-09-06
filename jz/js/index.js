$(function(){
	//加载顾客
	$("ul").on("click","li",function(){
		var url = $(this).attr("url");
		$("#wrapper").load(url)
	})
});