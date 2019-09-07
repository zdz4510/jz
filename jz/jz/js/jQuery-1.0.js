var $={
	get : function(url,handler){
		var xhr=XMLHttpRequest();
		xhr.open("GET",url);
		xhr.responseType="json";
		xhr.send();
		xhr.onreadystatechange=function(){
			if(xhr.readyState===4){
				if(xhr.status===200){
					var response=this.response;
					handler.call(this.response);
				}
			}
		}
	},
	post:function(url,date,handler,content-type){
		var xhr=XMLHttpRequest();
		xhr.open("POST",url);
		xhr.responseType="json";
		if(!content-type){
			content-type="application/x-www-form-urlencode"
		}
		xhr.setRequestHeader("Content-Type",);
		xhr.send();
		xhr.onreadystatechange=function(){
			if(xhr.readyState===4){
				if(xhr.status===200){
					var response=this.response;
					handler.call(this,response,this.statusTexrt);
				}
			}
		}
	}
}