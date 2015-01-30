/// <reference path="../Cmn.js" />

var WechatShareUrl = window.location.href;
var WechatShareImgUrl = "";
var WechatShareTitle = "";
var WechatShareContent = "";
var WechatShareSuccessCallBack = undefined;

//发送给朋友
var WechatShareFriendTitle = "";
var WechatShareFriendContent = "";

//发送给朋友圈
var WechatShareTimelineTitle = "";
var WechatShareTimelineContent = "";


/// <summary>微信分享类型</summary>
WechatShareType = {
    /// <field name="appmessage" type="String">发送给好友</field>
    appmessage: "appmessage",
    /// <field name="timeline" type="String">分享到朋友圈</field>
    timeline: "timeline",
    /// <field name="weibo" type="String">分享到微博</field>
    weibo: "weibo",
    /// <field name="facebook" type="String">分享到facebook</field>
    facebook: "facebook"
}

function SetWechatShare(title, content, url, imgUrl,shareSuccessCallBack) {
    /// <summary>设置微信分享内容</summary>
    /// <param name="title" type="String">标题</param>
    /// <param name="content" type="String">分享内容</param>
    /// <param name="url" type="String">分享网址</param>
    /// <param name="imgUrl" type="String">图片地址</param>
    /// <param name="shareSuccessCallBack" type="func">分享成功回调函数,参数为微信分享类型WechatShareType </param>

    WechatShareTitle = title;
    WechatShareContent = content;
    WechatShareUrl = url;
    WechatShareImgUrl = imgUrl;
    WechatShareSuccessCallBack = shareSuccessCallBack;

    WechatShareFriendTitle = title;
    WechatShareFriendContent = content;

    WechatShareTimelineTitle = title;
    WechatShareTimelineContent = content;

    if (WechatShareUrl == "" || WechatShareUrl == undefined) { WechatShareUrl = window.location.href; }
    else {
        if (WechatShareUrl.indexOf("http:") < 0) { //不是绝对路径
            WechatShareUrl = Cmn.Func.GetAbsoluteUrl(WechatShareUrl);
        }
    }

    if (WechatShareImgUrl!=undefined && WechatShareImgUrl.indexOf("http:") < 0) {//不是绝对路径
        WechatShareImgUrl = Cmn.Func.GetAbsoluteUrl(imgUrl);
    }
}

function SetWechatShareToFriend(title, content) {
    /// <summary>设置微信分享给朋友的内容</summary>
    /// <param name="title" type="String">标题</param>
    /// <param name="content" type="String">分享内容</param>

    WechatShareFriendTitle = title;
    WechatShareFriendContent = content;
}

function SetWechatShareToTimeline(title, content) {
    /// <summary>设置微信分享朋友圈的内容</summary>
    /// <param name="title" type="String">标题</param>
    /// <param name="content" type="String">分享内容</param>

    WechatShareTimelineTitle = title;
    WechatShareTimelineContent = content;
}

(function () {
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }

    function onBridgeReady() {
        var img_url = "http://wechatplatform.tuiyouyou.com/tol/Lottery/ZSS2/images/share.jpg",
			url = WechatShareUrl,
			title = "F-TYPE COUPE告白日 终于鼓起勇气向你告白......",
			content = "F-TYPE COUPE告白日";

        WeixinJSBridge.call('showOptionMenu'); //显示右上角菜单

        // 发送给好友; 
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url": WechatShareImgUrl,
                "img_width": "640",
                "img_height": "640",
                "link": WechatShareUrl,
                "desc": WechatShareFriendContent,
                "title": WechatShareFriendTitle
            }, function (res) {
                if (res.err_msg.indexOf(":ok") > 0) {
                    if (WechatShareSuccessCallBack != undefined) { WechatShareSuccessCallBack(WechatShareType.appmessage); }
                }

                //Cmn.DebugLog("appmessage：" + Cmn.Func.JsonToStr(res));
            });
        });

        // 分享到朋友圈;
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": WechatShareImgUrl,
                "img_width": "640",
                "img_height": "640",
                "link": WechatShareUrl,
                "desc": WechatShareTimelineContent,
                "title": WechatShareTimelineTitle
            }, function (res) {
                //alert("timeline：" + Cmn.Func.JsonToStr(res));

                if (res.err_msg.indexOf(":ok") > 0) {
                    if (WechatShareSuccessCallBack != undefined) { WechatShareSuccessCallBack(WechatShareType.timeline); }
                }
            });
        });

        // 分享到微博;
        var weiboContent = '';
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content": WechatShareTitle + WechatShareContent,
                "url": WechatShareUrl
            }, function (res) {
                //alert("weibo：" + Cmn.Func.JsonToStr(res));

                if (res.err_msg.indexOf(":ok") > 0) {
                    if (WechatShareSuccessCallBack != undefined) { WechatShareSuccessCallBack(WechatShareType.weibo); }
                }
            });
        });

        // 分享到Facebook
        WeixinJSBridge.on('menu:share:facebook', function (argv) {
            WeixinJSBridge.invoke('shareFB', {
                "img_url": WechatShareImgUrl,
                "img_width": "640",
                "img_height": "640",
                "link": WechatShareUrl,
                "desc": WechatShareContent,
                "title": WechatShareTitle
            }, function (res) {
                //alert("facebook：" + Cmn.Func.JsonToStr(res));

                if (res.err_msg.indexOf(":ok") > 0) {
                    if (WechatShareSuccessCallBack != undefined) { WechatShareSuccessCallBack(WechatShareType.facebook); }
                }
            });
        });

        // 新的接口
        WeixinJSBridge.on('menu:general:share', function (argv) {
            var _scene = 0;
            var _title = WechatShareTitle;
            var _content = WechatShareContent;

            switch (argv.shareTo) {
                case 'friend':
                    _scene = 1;
                    _title = WechatShareFriendTitle;
                    _content = WechatShareFriendContent;
                    break;
                case 'timeline':
                    _scene = 2;
                    _title = WechatShareTimelineTitle;
                    _content = WechatShareTimelineContent;
                    break;
                case 'weibo': _scene = 3; break;
            }

            argv.generalShare({
                "appid": "",
                "img_url": WechatShareImgUrl,
                "img_width": "640",
                "img_height": "640",
                "link": WechatShareUrl,
                "desc": _content,
                "title": _title
            }, function (res) {
                //alert("新接口：" + Cmn.Func.JsonToStr(res));

                if (res.err_msg.indexOf(":ok") > 0) {
                    if (WechatShareSuccessCallBack != undefined) {
                        if (_scene == 1) { WechatShareSuccessCallBack(WechatShareType.appmessage); }
                        else if (_scene == 2) { WechatShareSuccessCallBack(WechatShareType.timeline); }
                        else if (_scene == 3) { WechatShareSuccessCallBack(WechatShareType.weibo); }
                    }
                }
            });
        });

        // get network type
        var nettype_map = {
            "network_type:fail": "fail",
            "network_type:edge": "2g",
            "network_type:wwan": "3g",
            "network_type:wifi": "wifi"
        };
        /*
		if (typeof WeixinJSBridge != "undefined" && WeixinJSBridge.invoke){
			WeixinJSBridge.invoke('getNetworkType',{}, function(res) {
				var networkType = nettype_map[res.err_msg];
				if(networkType=="2g"){
					alert("请使用3G或wifi浏览本网页。");
				}
			});
		}
		*/
    }
})();


function viewProfile(userName) {
    if (typeof WeixinJSBridge != "undefined" && WeixinJSBridge.invoke) {
        WeixinJSBridge.invoke("profile", {
            username: userName,
            scene: "57"
        });
    } else {
    }
}