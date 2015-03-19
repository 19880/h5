
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
	<title>30秒，告诉你淘宝到底有多万能</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
	<style type="text/css">
	html {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	body {
		position: relative;
		width: 100%;
		height: 100%;
		min-width: 320px;
		max-width: 414px;
		margin: 0 auto;
		font-size: 0;
	}
	#container {
		width: 100%;
		height: 100%;
		border: 0;
	}
	</style>
</head>
<body -webkit-touch-callout="none" id="body-parent"><script type="text/javascript">
with(document)with(body)with(insertBefore(createElement("script"),firstChild))setAttribute("exparams","req_url=http%3a%2f%2fm%2eetao%2ecom%2fgo%2fmarket%2fetao%2fwndtb%2d2014%2ephp&amp;category=&amp;userid=&amp;b2c_orid=&amp;b2c_auction=&amp;at_isb=&amp;atp_isdpp=&amp;at_ssid=&amp;bbid=&amp;aplus&amp;at_cart=&amp;at_udid=",id="tb-beacon-aplus",src=(location>"https"?"//s":"//a")+".tbcdn.cn/s/aplus_wap.js")
</script>

	<iframe id="container"></iframe>
	<script>
		window.addEventListener("load", function() {
			if (((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) && (window.screen.height > 480)) {
				document.getElementById("container").src="http://m.etao.com/go/market/etao/wndtb-2014-ios.php";
			} else {
				document.getElementById("container").src="http://m.etao.com/go/market/etao/wndtb-2014-android.php";
			}
		});

		function onBridgeReady() {
		    var mainTitle="30秒，告诉你淘宝到底有多万能",
		        mainDesc="2014淘宝1212万能盛典 开启用想象力淘宝的时代 （建议WiFi环境下浏览）",
		        mainURL="http://m.etao.com/go/market/etao/wndtb-2014.php",
		        mainImgUrl="http://gtms02.alicdn.com/tps/i2/TB10BSyGVXXXXamXVXXrywt4VXX-120-120.png";

		    //转发朋友圈
		    WeixinJSBridge.on("menu:share:timeline", function(e) {
		        var data = {
		            img_url:mainImgUrl,
		            img_width: "120",
		            img_height: "120",
		            link: mainURL,
		            //desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
		            desc: mainDesc,
		            title: mainTitle
		        };
		        WeixinJSBridge.invoke("shareTimeline", data, function(res) {
		            WeixinJSBridge.log(res.err_msg)
		        });
		    });
		    //同步到微博
		    WeixinJSBridge.on("menu:share:weibo", function() {
		        WeixinJSBridge.invoke("shareWeibo", {
		            "content": mainDesc,
		            "url": mainURL
		        }, function(res) {
		            WeixinJSBridge.log(res.err_msg);
		        });
		    });
		    //分享给朋友
		    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
		        WeixinJSBridge.invoke("sendAppMessage", {
		            img_url: mainImgUrl,
		            img_width: "120",
		            img_height: "120",
		            link: mainURL,
		            desc: mainDesc,
		            title: mainTitle
		        }, function(res) {
		            WeixinJSBridge.log(res.err_msg)
		        });
		    });
		};
		//执行
		document.addEventListener('WeixinJSBridgeReady', function() {
		    onBridgeReady();
		    WeixinJSBridge.call('hideToolbar');
		});
	</script>
</body>
</html>