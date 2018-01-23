function jgg(n){
	var i = 0;//索引
	var j = 32;//基础步数	
	var z = j+n;//总步数；
	var speed = 100;
	start();
	function start(){
		clearInterval(jgg.timer);
		$("#chou_yes").css("display","block");
		jgg.timer = setInterval(function(){
			i++;
			z--;
			if(i==8){
				speed*=1.2;
				clearInterval(jgg.timer);
				$("#chou_yes").css("display","none");
				i=0;
				start();
			}
			if(z==3){
				speed = 600;
				clearInterval(jgg.timer);
				$("#chou_yes").css("display","none");
				start();
			}
			$("#box img").eq(i).css("border","solid 4px aqua");
			$("#box img").eq(i).siblings("img").css("border","solid 4px white");
			if(z==0){
				clearInterval(jgg.timer);
				$("#chou_yes").css("display","none");
				var $jiang0 = $("#zhongj_0");
				var $jiang1 = $("#zhongj_1");
				var $tab = $("#img_tab");
				if(i==0){
					$jiang0.css("display","block");
					$tab.attr("src","img/sudoku_01.jpg");
					$("#zhezhao").css("display","block");
					$("#jp_0").css("display","block");
					clearInterval(jgg.timer);
				}else if(i==1){
					$jiang0.css("display","block");
					$tab.attr("src","img/sudoku_02.jpg");
					$("#zhezhao").css("display","block");
					$("#jp_1").css("display","block");
					clearInterval(jgg.timer);
				}else if(i==2){
					$jiang0.css("display","block");
					$tab.attr("src","img/sudoku_03.jpg");
					$("#zhezhao").css("display","block");
					$("#jp_2").css("display","block");
					clearInterval(jgg.timer);
				}else if(i==3){
					$jiang0.css("display","block");
					$tab.attr("src","img/sudoku_04.jpg");
					$("#zhezhao").css("display","block");
					$("#jp_3").css("display","block");
					clearInterval(jgg.timer);
				}else if(i==4){
					$jiang0.css("display","block");
					$tab.attr("src","img/sudoku_06.jpg");
					$("#zhezhao").css("display","block");
					$("#jp_4").css("display","block");
					clearInterval(jgg.timer);
				}else if(i==5){
					$jiang0.css("display","block");
					$tab.attr("src","img/sudoku_07.jpg");
					$("#zhezhao").css("display","block");
					$("#jp_5").css("display","block");
					clearInterval(jgg.timer);
				}else if(i==6){
					$jiang0.css("display","block");
					$tab.attr("src","img/sudoku_08.jpg");
					$("#zhezhao").css("display","block");
					$("#jp_6").css("display","block");
					clearInterval(jgg.timer);
				}else if(i==7){
					$jiang1.css("display","block");
					$("#zhezhao").css("display","block");
					$("#jp_7").css("display","block");
					clearInterval(jgg.timer);
				}
			}
		},speed)
	}
}
