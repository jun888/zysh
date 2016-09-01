require("../../css/common/common.css");
require("../../css/page/index.css");
require("../lib/jquery/jquery.jcarousellite.min.js");

import React from 'react';
import {render} from 'react-dom';
import {CommonHeader} from '../components/CommonHead';
import {CommonFoot} from '../components/CommonFoot';
import {Banner} from '../components/Index_banner';
import {Content1,Content2,Content3} from '../components/Index_content';
import {HuodongList} from '../components/Index_huodong_imgGroup';

render(
		<div>
			<CommonHeader/>
			<Banner/>
			<Content1/>
			<HuodongList/>
			<Content2/>
			<Content3/>
			<CommonFoot/>
		</div>,
		document.getElementById("pageindex")
	);

$("#fsnav li").hover(function(){
		$("#fsnav li").removeClass("choosezxb");
		$(this).addClass("choosezxb");
		var numzxb=$(this).index();
		
		$("#zwcon li").removeClass("displayblock");
		
		$("#zwcon li:eq("+numzxb+")").addClass("displayblock");
		},function(){
		
		})

$("#botton-scroll").jCarouselLite({
btnNext: ".next",
btnPrev: ".prev",
	scroll:1,
	auto:0,
	visible:5
});
