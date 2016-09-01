import React,{Component} from 'react';
import {TextList1,TextList2,TextList3,TextList4,ImgList} from './Index_list';
class Content extends Component{
	render(){
		return (
			<section className="w1200 marauto mt10">
				<div className="fl w800">
					{this.props.children}
				</div>
				<ImgList title={this.props.title}/>
			</section>
		);
	}
}
//最新信息，吃喝玩乐购
class Content1 extends Component{
	render(){
		return (
			<Content title="生活服务">
				<TextList1 title="最新信息" className="cenzxb pt10 fff box_soadow"/>
				<TextList1 title="吃喝玩乐购" className="cenzxb pt10 fff box_soadow mt10"/>
			</Content>
		);
	}
}

class Content2 extends Component{
	render(){
		return (
			<Content title="跳蚤市场">
				<div className="cb fff pt10 box_soadow ov">
					<TextList2 title="最新招聘" className="cenzxb w400 fl"/>
					<TextList3 title="最新简历" className="cenzxb w400 fr"/>
				</div>
				<TextList1 title="户外旅游" className="cenzxb pt10 fff box_soadow mt10"/>
			</Content>
		);
	}
}


class Content3 extends Component{
	render(){
		return (
			<Content title="宠物用品">
				<div className="cb fff pt10 box_soadow ov">
					<TextList4 title="办公商务" className="cenzxb w400 fl"/>
					<TextList4 title="教育培训" className="cenzxb w400 fr"/>
				</div>
				<TextList1 title="车辆买卖" className="cenzxb mt10 pt10 fff box_soadow "/>
			</Content>
		);
	}
}

module.exports = {
	Content1,
	Content2,
	Content3
};
