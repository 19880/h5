(function() {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        var share_config = {
            general_config:{
                img_url: 'http://static.diditaxi.com.cn/site/pages/thank-2014/globle-logo.png',
                sharetitle:"谢谢你，陌生人",//share,
                //sharedesc:share,
                sharedesc:"一句问候，一个微笑，一次关心，虽来自陌生人，却足以温暖人心",//'滴滴打车给我' + number + '个红包，分你1个，拿去打车领更大红包～',
                //link: gloBlink
                link:location.href
            }
        };
        var obj = share_config.general_config;
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {         
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid": "wx69b6673576ec5a65",
                "img_url": obj.img_url,
                "img_width": "",
                "img_height": "",
                "link": obj.link,
                "title": obj.sharetitle,
                "desc": obj.sharedesc               
            }, function(res) {
                
            });
        });
        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function(argv) {                      
            WeixinJSBridge.invoke('shareTimeline', {
                    "img_url": obj.img_url,
                    "img_width": "",
                    "img_height": "",
                    "link": obj.link,
                    "title": obj.sharetitle,
                    "desc": obj.sharedesc
                }, function(res) {                   
            });
        });
    });
    var docuH = document.documentElement.clientHeight,
        firLoadImg = document.getElementsByClassName('firLoad');
        secLoadImg = document.getElementsByClassName('secLoad');
        allMoveBox = document.getElementsByClassName('swiper-slide');
        aStory = document.getElementsByClassName('story');
        aButton = document.getElementsByClassName('button');
        oShare = document.getElementsByClassName('share')[0];
    document.getElementsByClassName('swiper-container')[0].style.height = docuH + 'px';
    var addClass = function(ele, strClass) {
        var reg = new RegExp("(^| )" + strClass + "( |$)");
        if (reg.test(ele.className)) {
            //如果此类样式已经存在，则什么也不需要做
        } else { //不存在
            ele.className = ele.className.trim() + " " + strClass;
        }
    };
    var removeClass = function(ele, strClass) {
        if (!(ele && ele.nodeType == 1)) {
            alert('第一参数ele需要是一个DOM元素对象');
            throw new Error('第一参数ele需要是一个DOM元素对象');
        }
        if (typeof strClass != 'string') {
            alert('第二参数必须为string类型');
            throw new Error('第二参数必须为string类型');
        }
        var reg = new RegExp("(?:^| )" + strClass + "(?: |$)", "g");
        ele.className = ele.className.replace(reg, '').trim();
    };
    var getIndex = function(ele) {
        var nIndex = 0;
        var p = ele.previousSibling
        while (p) {
            if (p.nodeType == 1) {
                nIndex++; //让累加一次
            }
            p = p.previousSibling; //继续判断它的下一个哥哥       
        }
        return nIndex;
    };
    for (var i = 0; i < firLoadImg.length; i++) {
        firLoadImg[i].style.backgroundImage = firLoadImg[i].dataset.url;
        addClass(allMoveBox[0], 'slide-move');          
    }
    var imgObj = new Image();
    imgObj.src = "img/page-1.jpg";
    imgObj.onload = function() {
        for (var i = 0; i < secLoadImg.length; i++) {
            secLoadImg[i].style.backgroundImage = secLoadImg[i].dataset.url;
        }
        document.getElementsByClassName('loading')[0].style.display = 'none';
        addClass(allMoveBox[0], 'slide-move');  
    }
    for(var i=0;i<aStory.length;i++)
        {
            (function(index){
                aButton[i].onclick=function()
                {
                    addClass(aStory[index],'storyShow');
                    aStory[index].style.display = 'block';
                };
                aStory[i].onclick = function(){
                    removeClass(aStory[index],'storyShow');
                    window.setTimeout(function(){
                        aStory[index].style.display = 'none';   
                    },300);
                }
            })(i);
        }
    aButton[5].onclick = function(){
        oShare.style.display = 'block';
    }   
    oShare.onclick = function(){
        oShare.style.display = 'none';
    }
    var mySwiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        mode: 'vertical',
        onSlideChangeEnd: function() { //当滑块滑到下一块时
            var thisDiv = mySwiper.activeSlide(),
                thisIndex = getIndex(thisDiv);
            for (var i = 0; i < allMoveBox.length; i++) {
                removeClass(allMoveBox[i], 'slide-move');
            }
            for (var i = 0; i < aStory.length; i++) {
                removeClass(aStory[i],'storyShow');
                aStory[i].style.display = 'none'; 
            };
            addClass(thisDiv, 'slide-move');          
        }
    });
})()
