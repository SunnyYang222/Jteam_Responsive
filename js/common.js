
function $q(id){
	return document.getElementById(id);
}


/*回到顶部------------------------------------------------------------------*/
$q("header_backtop").onclick=function(){
		document.body.scrollTop=0;
}

/*------------------------------------------------------*/
window.onscroll=function(){
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var scrollTop01=document.body.scrollTop||document.documentElement.scrollTop;
	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
	/*顶部导航栏的消失与重现*/
	if(scrollTop>=100&&scrollTop<=800){
		document.getElementById("header").style.top="-100px";
	}else{
		document.getElementById("header").style.top="0";
	}
	/*回到顶部按钮*/
	if(scrollTop<=100){
		document.getElementById("header_backtop").style.display="none";
	}else{
		document.getElementById("header_backtop").style.display="block";
	}

}

/*------------------------------------------------------*/

/*---------侧边菜单显示与隐藏---------------------------------------------*/
$q("header_slide").onclick=function(){
	$q("header_sidebar").style.left="0";
}
$q("header_sidebartr").onclick=function(){
	$q("header_sidebar").style.left="-320px";
}
/*---------侧边菜单001---------------------------------------------*/
$q("hearer_btn01").onclick=function(){
	$q("header_sidebox01").style.left="0";
	$q("header_sidebartl1").style.display="block";
	$q("header_sidebartit1").style.display="block";
}
$q("header_sidebartl1").onclick=function(){
	$q("header_sidebox01").style.left="320px";
	$q("header_sidebartl1").style.display="none";
	$q("header_sidebartit1").style.display="none";
}
/*---------侧边菜单002---------------------------------------------*/
$q("hearer_btn02").onclick=function(){
	$q("header_sidebox02").style.left="0";
	$q("header_sidebartl2").style.display="block";
	$q("header_sidebartit2").style.display="block";
}
$q("header_sidebartl2").onclick=function(){
	$q("header_sidebox02").style.left="320px";
	$q("header_sidebartl2").style.display="none";
	$q("header_sidebartit2").style.display="none";
}
/*---------侧边菜单003---------------------------------------------*/
$q("hearer_btn03").onclick=function(){
	$q("header_sidebox03").style.left="0";
	$q("header_sidebartl3").style.display="block";
	$q("header_sidebartit3").style.display="block";
}
$q("header_sidebartl3").onclick=function(){
	$q("header_sidebox03").style.left="320px";
	$q("header_sidebartl3").style.display="none";
	$q("header_sidebartit3").style.display="none";
}
/*---------侧边菜单004---------------------------------------------*/
$q("hearer_btn04").onclick=function(){
	$q("header_sidebox04").style.left="0";
	$q("header_sidebartl4").style.display="block";
	$q("header_sidebartit4").style.display="block";
}
$q("header_sidebartl4").onclick=function(){
	$q("header_sidebox04").style.left="320px";
	$q("header_sidebartl4").style.display="none";
	$q("header_sidebartit4").style.display="none";
}