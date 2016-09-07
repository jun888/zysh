require("../../css/lib/bootstrap.min.css");
require("../../css/common/common.css");
require("../../css/page/fabu.css");

import React from 'react';
import {render} from 'react-dom';
import {CommonHeader} from '../components/CommonHead';
import {CommonFoot} from '../components/CommonFoot';

render(
		<div>
			<CommonHeader/>
			<CommonFoot/>
		</div>,
		document.getElementById("pageindex")
	);

$(function(){
	/*切换选择*/
	$(".spread-lib").on('click',function(){
		if($(this).hasClass('spread-lib-hover')){
			RemoveSpread();
		}else
		{
			RemoveSpread();
			$(this).addClass('spread-lib-hover');
		}
	});
	
	//移除样式 
	function RemoveSpread(){
		$(".spread-lib").each(function(num,ele){
				$(ele).removeClass('spread-lib-hover');
		});
	};
	
	//判断 阅读是否选中
	$("#isyuedu").on('click',function(){
		isCheck();
	});
	isCheck();
	
	function isCheck(){
		if(!$("#isyuedu").is(':checked'))
		{
			$("#fabu-from-submit").css({"border":"none","backgroundColor":"buttonface"});
			$("#fabu-from-submit").unbind( "click" )
		}else
		{
			$("#fabu-from-submit").css({"border":"1px solid #f46","backgroundColor":"#f46"});
			$("#fabu-from-submit").bind('click',function(){
				//如果登录了就直接发布 
				
				//如果没有登录，那么弹出登录框登录后直接发布
				$("#dialog").animate({opacity: 'show',display:""},200);
			});
		}
	}
	
	//关闭弹层
	$("#close").on('click',function(){
			$("#dialog").animate({opacity: 'hide',display:"none"},300);
	});
	
	
})




