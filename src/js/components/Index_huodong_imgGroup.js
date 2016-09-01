import React,{Component} from 'react';

class HuodongListImg extends Component{
	render(){
		return (
			<div className="tonglan4">
			  <div className="w960zxb jjh">
			    <div id="botton-scroll">
			      <Oul data={this.props.data}/>
			    </div>
			    <a className="prev" href="javascript:void();"></a>
			    <a className="next" href="javascript:void();"></a> 
			  </div>
			</div>
		);
	}
};

class Oul extends Component{
	render(){
		var items = [];
		this.props.data.forEach(function(ele, index, array){
						items.push(<Oli imgsrc={ele.img} title={ele.title}/>);
					})
		return (
			<ul className="featureUL">
				{
					items
			    }
			</ul>
		);
	}
}

class Oli extends Component{
	render(){
		return (
			<li className="featureBox">
	          <div className="box">
	            <div className="imgarea"><a href="http://myhb.qq.com/t-6791033-1.htm" target="_blank"><img src={this.props.imgsrc}/></a></div>
	            <div className="txtarea">{this.props.title}</div>
	          </div>
	        </li>
		);
	}
}

//分割标题
class FengGeTitle extends Component{
	render(){
		return (
			<div className="lx1">
  				<div className="lx2">{this.props.title}</div>
  				<div className="morelx1"><a href="#">更多..</a></div>
			</div>	
		);
	}
}

class HuodongList extends Component{
	
	render(){
		var datajson = [
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/66/139/2082/135417561.jpg",
					title:"抢到它，“洪荒少女”再也不担心游歪泳池啦！"
				},
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/45/229/2117/137716365.jpg",
					title:"晒你家的“宜家风” 赢取VR智能眼镜"
				},
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/163/207/2104/136865548.png",
					title:"第二届德国啤酒节，跟着光谷浪起来！"
				},
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/171/139/2082/135417666.jpg",
					title:"中国小海军海豹突击队“走向海洋”夏令营开营啦！"
				},
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/148/202/2098/136474108.jpg",
					title:"收房不验房，装修算白忙！大楚免费帮你验新房！"
				},
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/16/0/2113/137397841.jpg",
					title:"【免费福利】爱家团免费为你的新家测甲醛啦！"
				},
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/249/57/2109/137152509.png",
					title:"抢工长装修与装饰公司装修到底有啥差别？如何选靠谱装修？"
				},
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/112/85/2105/136899412.jpg",
					title:"胡杏儿来武汉啦！8.20相约徐东欧亚达梦想星卖场！"
				},
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/66/139/2082/135417561.jpg",
					title:"抢到它，“洪荒少女”再也不担心游歪泳池啦！"
				},
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/236/218/1852/120482126.jpg",
					title:"腾讯房产武汉“买房返现”：买房送红包 最高送3000元！"
				},
				{
					img:"http://img1.gtimg.com/hb/pics/hv1/69/58/1854/120571209.jpg",
					title:"【名医连连看】大楚网络义诊即将开始啦！ "
				}
		     ];
		return (
			<section className="w1200 marauto mt10">
				<FengGeTitle title="活动推荐"/>
				<HuodongListImg data={datajson}/>
			</section>
		);
	}
}

module.exports = {
	HuodongList
};