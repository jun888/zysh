import React,{Component} from 'react';

//左侧
class BannerLeft extends Component{
	render(){
		return (
			<div className="fl w650 pt10 pl10">
				<div id="fs_C2" className="w650 pr fs_C2">
				    <BannerMaximg/>
				    <Bannersmallimg/>
			     <span className="prev" style={{display:"none"}}></span> 
			     <span className="next" style={{display:"none"}}></span> 
    			</div>
			</div>
		);
	}
};

//banner大图
class BannerMaximg extends Component{
	render(){
		return(
			<div className="pr fPs">
		        <div id="C2fPic" className="pa">
				 	<div className="pr w650 fl" style={{position: "absolute",top: "0px",display: "none"}}> <a target="_blank" href="#"> <img alt="" src="http://img1.gtimg.com/hb/pics/hv1/184/251/2107/137071864.jpg"/></a> <span className="shadow"> <a target="_blank" href="#">捕捉到一只森林仙子</a> </span> </div>
				 	<div className="pr w650 fl" style={{position: "absolute",top: "0px",display: "none"}}> <a target="_blank" href="#"> <img alt="" src="http://img1.gtimg.com/hb/pics/hv1/83/22/2108/137078393.jpg"/></a> <span className="shadow"> <a target="_blank" href="#">游山玩水丨走进九古奇村——大冶“上冯村”</a> </span> </div> 
				 	<div className="pr w650 fl" style={{position: "absolute",top: "0px",display: "none"}}> <a target="_blank" href="#"> <img alt="" src="http://img1.gtimg.com/hb/pics/hv1/79/22/2108/137078389.jpg"/></a> <span className="shadow"> <a target="_blank" href="#">湖北奥运大盘点&amp;五洲美食福利</a> </span> </div>  
				 	<div className="pr w650 fl" style={{position: "absolute",top: "0px",display: "block"}}> <a target="_blank" href="#"> <img alt="" src="http://img1.gtimg.com/hb/pics/hv1/43/141/2105/136913623.jpg"/></a> <span className="shadow"> <a target="_blank" href="#">大楚龙虾节又双叒叕送福利，有车一族每人至少46元优惠到手！</a> </span> </div>  
				 	<div className="pr w650 fl" style={{position: "absolute",top: "0px",display: "none"}}> <a target="_blank" href="#"> <img alt="" src="http://img1.gtimg.com/hb/pics/hv1/217/218/2105/136933432.jpg"/></a> <span className="shadow"> <a target="_blank" href="#">捞旺猪肚鸡，不仅能喝汤，还有虾子等你来尝！</a></span> </div>    
		        </div>
			</div>
		);
	}
};

//banner缩略小图
class Bannersmallimg extends Component{
	render(){
		return (
		<div className="C2fBt">
	        <div className="fbtFix">
	          <ul className="count">
		          <li className=""> <img src="http://img1.gtimg.com/hb/pics/hv1/206/251/2107/137071886.jpg"/> </li>
		          <li className=""> <img src="http://img1.gtimg.com/hb/pics/hv1/76/22/2108/137078386.jpg"/> </li>
		          <li className=""> <img src="http://img1.gtimg.com/hb/pics/hv1/75/22/2108/137078385.jpg"/> </li>
		          <li className="current"> <img src="http://img1.gtimg.com/hb/pics/hv1/44/141/2105/136913624.jpg"/> </li>  
		          <li className="" > <img src="http://img1.gtimg.com/hb/pics/hv1/215/218/2105/136933430.jpg"/> </li> 
	          </ul>
	        </div>
      	</div>
		);
	}
};

//右侧
class BannerRight extends Component{
	render(){
		return (
			<div className="fr w500 pr10 titmain">
    			<BannerNews01/>
    			<BannerNews02/>
    			<TabTitle/>
    			<TabBox/>
  			</div>
		);
	}
};

//热点1
class BannerNews01 extends Component{
	render(){
		return (
			<div className="no1z">
         		<h2 className="cEF60C5"> <a href="#">武汉上周注定载入史册！</a></h2>
		 		<p>刚刚告别梅雨的武汉跟酷暑无缝对接，武汉人民眼睁睁看着暴雨预警变成了高温预警…<a href="#" className="cEF60C5 f14">[详细]</a></p>
    		</div>
		);
	}
};


//热点2
class BannerNews02 extends Component{
	render(){
		return (
			<div className="no2z">
		      <h2 className="cEF60C5">
		      	<a href="#" style={{color:"#1598e0"}}>偶遇一只掉地上的鸟宝宝</a>
		      </h2>
			  <p>前日下午，在武汉理工大学教学楼背后，听到一只鸟叫声，随着叫声望过去，发现是一只还不怎么会飞的小鸟...<a href="#" className="59914055 f14">[详细]</a></p>
            </div>
		);
	}
};

//tabTitle
class TabTitle extends Component{
	render(){
		return (
			<ul id="fsnav">
		      <li className="">福利活动</li>
		      <li className="choosezxb">热议话题</li>
		      <li className="">情感交友</li>
		      <li className="">大楚拍客</li>
		      <li className="">现金征文</li>
    		</ul>
		);
	}
};

//tabBox
class TabBox extends Component{
	render(){
		return (
			<ul id="zwcon">
		      <li className="">
		        <h3><a href="#">2016大楚龙虾节第六站</a></h3>
		        <p>幸福肥情侣甜蜜共品小许蒸虾~</p>
		      </li>

		      <li className="displayblock">
		        <h3><a href="#">分手不体面的后果就是吴亦凡这样鱼死网破</a></h3>
		        <p>当“小鲜肉”遇到“小网红”，风花雪月溅狗血。一大早就看了这场好戏。。。</p>
		      </li>
		      <li className="">
		        <h3><a href="#">忘不掉前女友的男人，是好还是渣？</a></h3>
		        <p>前两天《好先生》迎来小高潮，霸道颜王陆远在各种挽回求复合后，还是没能守住前女友甘敬。。。。。。</p>
		      </li>
		      <li className="">
		        <h3><a href="#">行人从没斑马线的地方过马路险象环生</a></h3>
		        <p>今日8时经过汉阳钟家村，看到地下商城，现在门还没开不能过马路。。。</p>
		      </li>
		      <li className="">
		        <h3><a href="#">十二月征文启动:50-100元现金等你来拿</a></h3>
		        <p>十二月我们继续征文，主题依然不限，只要是用心写的原创帖我们统统给予奖励！</p>
		      </li>
    		</ul>
		);
	}
}

class Banner extends Component{
	render(){
		return (
			<section className="w1200 h425 marauto mt10 fff box_soadow">
				<BannerLeft/>
				<BannerRight/>
			</section>
		);
	}
}

module.exports = {
	Banner
}
