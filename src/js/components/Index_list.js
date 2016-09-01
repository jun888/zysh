import React,{Component} from 'react';

//纯文本列表
class TextList1 extends Component{
	render(){
		var _this= this.props; //接收传过来的组件 props
		return (
			<dl className={_this.className}>
		        <CommonDt title={_this.title}/>
		    	 {
					[1,2,3,4,5].map(function(v){
			     			return (
				     			<dd key={v}>
					     			<a href="#" className="mr15">[生活服务]</a>
									<a href="#" class="titzxb3">武汉夜行公交体系9月试运行！</a>
									<span className="fr gray">08-2{v}</span>
								</dd>
							)
			     	})
				 } 
		    </dl>
		);
	}
};

class TextList2 extends Component{
	render(){
		var _this= this.props; //接收传过来的组件 props
		return (
			<dl className={_this.className}>
			        <CommonDt title={_this.title}/>
					{
						[1,2,3,4,5].map(function(v){
				     			return (
					     			<dd key={v}>
						     			<span className="mr15">[广信生态农业发展有限公司]</span>
						     			<span className="red">聘：</span>
						     			<a href="#" className="titzxb3">百香果销售</a>
						     			<span className="fr gray">08-28</span>
									</dd>
								)
				     	})
				    }
			</dl>
			
		);
	}
};

class TextList3 extends Component{
	render(){
		var _this= this.props; //接收传过来的组件 props
		return (
			<dl className={_this.className}>
					<CommonDt title={_this.title}/>
					{
						[1,2,3,4,5].map(function(v){
				     			return (
					     			<dd key={v}>
						     			<a href="#" className="titzxb3">徐春燕 </a>
						     			<span>（女）</span>
						     			<span className="red">求职：</span>
						     			<a href="#" className="titzxb3">会计助理</a>
						     			<span className="fr gray">08-28</span>
									</dd>
								)
				     	})
				    }
			</dl>
			
		);
	}
};


class TextList4 extends Component{
	render(){
		var _this= this.props; //接收传过来的组件 props
		return (
			<dl className={_this.className}>
		        <CommonDt title={_this.title}/>
		    	 {
					[1,2,3,4,5].map(function(v){
			     			return (
				     			<dd key={v} className="c1BA1E2">
									<a href="#" class="titzxb3">武汉夜行公交体系9月试运行！</a>
									<span className="fr gray">08-2{v}</span>
								</dd>
							)
			     	})
				 } 
		    </dl>
		);
	}
};

//公共dt标题
class CommonDt extends Component{
	render(){
		return (
			<dt className="cEF60C5">{this.props.title}<a className="fr f14 fn" href="#" target="_blank">更多&gt;&gt;</a></dt>
		);
	}
}

//带图片列表
class ImgList extends Component{
	render(){
		return (
			<div className="fr w357 p15 fff right2 box_soadow">
			 <div className="right2-title">
					<span className="cGreen fl">{this.props.title} </span>
        			<div className="fr">
        				<a className="cGreen pr50" href="#" target="_blank">我也要发布</a>
        				<a className="f14" href="#" target="_blank">更多&gt;&gt;</a>
        			</div>
				</div>
		<ul>
		{
			[1,2,3,4,5,6,7].map(function(v){
				return (
					<li key={v}>
						<div className="fl right2-img">
						<a href="#" target="_blank" title="">
					 	 <img src="http://www.sh34.com/upload/images/2016-8-28/2016828113534122h17f5_120x120.jpg"/>
						</a></div>
				        <div className="fl r-right">
				            <p className="r-title"><a href="http://www.sh34.com/info/info-100847.html" target="_blank">浦东区北蔡清理化粪池抽粪隔油池清理长期承包</a></p>
				            <p className="lx"><span className="cBlack name1">姜浩</span>
				            <span className="cBlack phone">18917554033</span>
							<span className="cRed money">
							{/*1000元*/}
							</span>
							<span className="cgray time">22小时前</span></p>
				        </div>
        			</li>
				)
			})
		}
	    
      </ul>
      </div>
		);
	}
};

module.exports = {
	TextList1,
	TextList2,
	TextList3,
	TextList4,
	ImgList
};

