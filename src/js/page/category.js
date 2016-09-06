require("../../css/common/common.css");
require("../../css/page/category.css");

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