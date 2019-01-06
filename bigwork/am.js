function animate(obj,json,callback){
			clearInterval(obj.timer);
			var timer = setInterval(
			function(){
				var isStop = true;
				for(var attr in json){
					
					if(attr=='opacity'){
						var now = parseInt(getStyle(obj,attr)*100);
					}else{
						var now = parseInt(getStyle(obj,attr));
					}
					//var now = parseInt(getStyle(obj,attr));
					var speed = (json[attr]-now)/5;
					speed = speed>0?Math.ceil(speed):Math.floor(speed);
					if(attr=='opacity'){
						obj.style[attr] = (now+speed)/100;
					}else{
						obj.style[attr] = now+speed+'px';
					}

					var current = now + speed;
					if(json[attr] != current){
						isStop = false;
					}
				}
				if(isStop == true){
					clearInterval(timer);
					callback&&callback();
				}		
			},10);

		//调用时传参直接返回元素的属性值
		function getStyle(obj,style){
			if(getComputedStyle(obj)){
				return getComputedStyle(obj)[style];
			}else{
				return obj.currentStyle[style];
			}
		}
	}