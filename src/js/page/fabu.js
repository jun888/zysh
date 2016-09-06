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

/*切换选择*/
$(".spread-lib").on('click',function(){
	if($(this).hasClass('spread-lib-hover')){
		$(".spread-lib").each(function(num,ele){
			$(ele).removeClass('spread-lib-hover');
		});
	}else
	{
		$(".spread-lib").each(function(num,ele){
			$(ele).removeClass('spread-lib-hover');
		});
		$(this).addClass('spread-lib-hover');
	}
});