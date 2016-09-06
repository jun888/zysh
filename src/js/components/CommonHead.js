
import React,{Component} from 'react';

/*公共最顶部组件*/
class ComHead extends Component{
	render(){
		return (
			<div className="w h55 lh55 graybg cb">
				<div className="w1200 marauto toolbar">
					<div className="fl">
						<ul className="h55">
							<li><a href="#">微信版</a></li>
							<li><a href="#">APP</a></li>
						</ul>
					</div>
					<div className="fr">
						<ul className="h55">
							<li><a href="#">注册</a></li>
							<li><a href="#">登录</a></li>
							<li className="pr">
								<a href="#">商户推广</a>
								<ul className="dropdown-menu">
									<li><a href="#" target="_blank">付费推广</a></li>
									<li><a href="#" target="_blank">VIP会员-招聘版</a></li>
									<li><a href="#" target="_blank">VIP会员-车商版</a></li>
									<li><a href="#" target="_blank">VIP会员-房产版</a></li>
									<li><a href="#" target="_blank">VIP会员-服务版</a></li>
									<li><a href="#" target="_blank">VIP会员-宠物版</a></li>
								</ul>
							</li>
							<li><a href="#">合作及工具</a></li>
							<li><a href="#">帮助</a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

/*头部logo*/
class CommonLogo extends Component{
	render(){
		return (
			<div className="logo pr">
				<a href="#">logo</a>
				<span className="slogan pa">简单，快速，搞得定！</span>
			</div>
		);
	}
}
/*头部search*/
class HeardSeartch extends Component{
	render(){
		return (
			<div>
				 <form action="/search/" className="search">
				 	<input type="search" placeholder="请输入关键词或分类名" className="input search-query"/>
				 	<button type="submit" title="搜索" className="frontpage-search-trigger search-trigger icon-search"></button>
				 </form>
				<div className="newline">
					<a href="#" target="_blank">名企直招</a>&nbsp;
					<a href="#">临时工</a>&nbsp;
					<a href="#">日结临时工</a>&nbsp;
					<a href="#">电子厂</a>&nbsp;
					<a href="#">暑假工</a>
					<a href="#">更多</a>
				</div>
			</div>
		);
	}
}
/*头部发布信息按钮*/
class FabuBtn extends Component{
	render(){
		return (
			<div className="pull-right">
				<a href="#" className="post">免费发布信息</a>
				<a id="manage" href="#" >修改/删除信息</a>
			</div>
		);
	}
}
/*公共heard部分组件*/
class HomePageHead extends Component{
	render(){
		return (
			<div className="w fff">
				<div className="w1200 marauto location cb fff pr">
					<CommonLogo/>
					<HeardSeartch/>
					<FabuBtn/>
				</div>
			</div>
		);
	}
}
/*公共导航组件*/
class HeardNav extends Component{
	render(){
		return (
			<nav className="nav fff">
				<ul className="main-nav w1200">
					<li className="home"><a href="#">信息首页</a></li>
					<li><a href="#">生活服务</a></li>
					<li><a href="#">跳蚤市场</a></li>
					<li><a href="#">办公商务</a></li>
					<li><a href="#">教育培训</a></li>
					<li><a href="#">宠物用品</a></li>
					<li><a href="#">旅游户外</a></li>
					<li><a href="#">同城活动</a></li>
					<li><a href="#">车辆买卖</a></li>
				</ul>
			</nav>
		);
	}
}

/*公共头部*/
class CommonHeader extends Component{
	render(){
		return (
			<header id="header">
				<ComHead/>
				<HomePageHead/>
				<HeardNav/>
			</header>
		);
	}
}

module.exports = {
	CommonHeader
};
