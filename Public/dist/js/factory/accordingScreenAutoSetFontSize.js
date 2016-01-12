
// //页面的最大高度
// var originalHeight = 1217;
// //页面的html{font-size:***px}
// var rootFontSize = getComputedStyle(document.documentElement, null).getPropertyValue("font-size").replace('px','');
// //分辨率变化时等比例缩放文字和其他元素的大小
// //window.devicePixelRatio  像素比
// function recalc(){
	
//     var devicePixelRatio = 3;

// 	var clientWidth = document.documentElement.clientWidth;
// 	var clientHeight = document.documentElement.clientHeight;
// 	var oContainer = document.getElementById('J_share_container');
// 	// alert('w'+clientWidth+'--'+'h'+clientHeight);
// 	if (clientWidth > clientHeight) {

// 		if (oContainer) {
// 			oContainer.style.height = (document.documentElement.clientWidth * 1.155)+'px';
// 		}else{
// 			setTimeout(function(){
// 				document.getElementById('J_share_container').style.height = (document.documentElement.clientWidth * 1.155)+'px';
// 			},100)
// 		}

// 		clientHeight = clientHeight * 2;
// 	}else{
// 		if (oContainer) {
// 			document.getElementById('J_share_container').style.height = '';
// 		};
// 	}
	
//     document.documentElement.style.fontSize = clientHeight * devicePixelRatio / originalHeight * rootFontSize + 'px';
// }
// //加载页面是运行计算函数
// recalc();
// //当页面的大小变化时,运行计算函数
// window.onresize = function(){
// 	recalc();
// };

//页面的最大高度
var originalHeight = 1217;
//页面的html{font-size:***px}
var rootFontSize = getComputedStyle(document.documentElement, null).getPropertyValue("font-size").replace('px','');
//分辨率变化时等比例缩放文字和其他元素的大小
//window.devicePixelRatio  像素比
function recalc(){
	
    var devicePixelRatio = 3;

	var clientWidth = document.documentElement.clientWidth;
	var clientHeight = document.documentElement.clientHeight;
	var oStyle = document.getElementById('J_style');
	// alert('w'+clientWidth+'--'+'h'+clientHeight);
	if (clientWidth > clientHeight) {
		// alert('1')
		var cssStyleText = '.uui-share-header{display:none;}.uui-share-player-wrapper{height:52%;top:10%;}.uui-share-player-wrapper .uui-share-player{width:70%;height:100%;position:relative;}.uui-share-player-wrapper .uui-share-player .uui-player-img{position:absolute;top:0;left:0;height:2.11rem;width:2.11rem;border-radius:.08rem 0 0 0.08rem;}.uui-share-player-wrapper .uui-share-player .uui-player-img .uui-audio-name{position:absolute;top:.7rem;left:120%;width:100%;height:.16rem;line-height:.16rem;color:#666;font-size:.18rem;text-indent:0;background:none;}.h5p-normal{height:1.83rem;position:absolute;right:.2rem;top:0;width:2.56rem;}.uui-share-player-wrapper .uui-share-player .uui-player-control .uui-audio-progressbar{position:absolute;top:86%}.uui-share-player-wrapper .uui-share-player .uui-player-control .uui-audio-duration{position:absolute;top:92%;font-size:.14rem;}.uui-share-player-wrapper .uui-share-player .uui-player-control .uui-audio-switch{position:absolute;top:28%;text-align:right;}.uui-share-player-wrapper .uui-share-player .uui-player-control .uui-audio-switch .iconfont{font-size:.62rem;}.uui-share-shade .uui-barcode-box{height:2.85rem;width:2.4rem;}.uui-share-shade .uui-barcode-box .uui-shade-close{font-size:.3rem;}.uui-share-shade .uui-barcode-box .uui-shade-wrapper{width:1.6rem;height:2rem;margin:.4rem auto 0;}.uui-share-shade .uui-barcode-box .uui-shade-wrapper .uui-follow-txt{font-size:.12rem;}.uui-share-shade .uui-barcode-box .uui-shade-wrapper .uui-follow-direct{font-size:.1rem;}.uui-share-footer{height:26.5%;}.uui-share-footer .uui-footer-box{position:relative;}.uui-share-footer .uui-footer-box .uui-share-more{height:0.6rem;width:70%;margin-top:.25rem;margin-left:15%;background-color:#fff;color:#ea5404;font-size:.2rem;line-height:.6rem;border-radius:.6rem;}.uui-share-footer .uui-footer-box .uui-share-more .uui-more-erji{font-size:.3rem;}.uui-share-footer .uui-footer-box .uui-barcode-btn{font-size:.3rem;position:absolute;left:.2rem;top:.35rem;margin-top:0;}';
		var oStyleNode = document.createElement('style');
		oStyleNode.id = 'J_style';
		oStyleNode.innerHTML = cssStyleText;

		if (!document.getElementById('J_style') && clientWidth > clientHeight && navigator.userAgent.toLowerCase().match(/mobile/i) == 'mobile') {
			document.body.appendChild(oStyleNode);
		};
	}else{
		// alert('2')
		try{
			var oStyle = document.getElementById('J_style');
			oStyle.parentNode.removeChild(oStyle);
		}catch(e){
			console.log(e);
		}
	}
	
    document.documentElement.style.fontSize = clientHeight * devicePixelRatio / originalHeight * rootFontSize + 'px';
}
//加载页面是运行计算函数
recalc();
//当页面的大小变化时,运行计算函数
window.onresize = function(){
	recalc();
};


