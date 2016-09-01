import React,{Component} from 'react';
class CommonFoot extends Component{
	render(){
		return (
			<footer id="footer" className="footer-home">
			<div>
				<a href="#" target="_blank">百姓网公约</a>
				<i className="sep">|</i>
				<a href="#" target="_blank">付费推广</a>
				<i className="sep">|</i>
				<a href="#" target="_blank">客户合作</a>
				<i className="sep">|</i>
				<a href="#" target="_blank">号码被冒用</a>
				<i className="sep">|</i>
				<a href="#" target="_blank">联系我们</a>
				<i className="sep">|</i>
				<a href="#" target="_blank">开放API</a>
				<i className="sep">|</i>
				<a href="#" target="_blank">诚招线下服务点</a>
				<i className="sep">|</i>
				<a href="#" target="_blank">品牌网络推广</a>
				<i className="sep">|</i>
				<a href="#" target="_blank">诚信建设</a>
				<i className="sep">|</i>
				<a href="#">手机版</a>
			</div>
			<div>
				<span className="copyright" id="ssx">© 2016 百姓网 (上海客齐集信息技术有限公司)</span>
				<span className="cs-tel">客服电话：4000363650（周一至周日，9:00-18:00）</span>
			</div>
			</footer>

		);
	}
}
module.exports = {
	CommonFoot
};
