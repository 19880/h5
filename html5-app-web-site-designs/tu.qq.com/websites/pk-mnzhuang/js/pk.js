function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var mCookies = document.cookie.split(";");
        for (var i in mCookies) {
            var mCookie = mCookies[i];
            var mCookiePair = mCookie.split("=");
            if (mCookiePair.length >= 2) {
                var mCookieName = mCookiePair[0].trim();
                if (mCookieName == c_name) {
                    return unescape(mCookiePair[1]);
                }
            }
        }
    }
    return "";
}
function setCookie(c_name, c_value) {
    document.cookie = c_name + "=" + escape(c_value);
}

function getParam(pKey) {
    var queryStr = window.location.search;
    if (queryStr.length > 0) {
        var qMark = queryStr.indexOf("?");
        if (qMark >= 0) {
            queryStr = queryStr.substr(qMark+1);
            var queryList = queryStr.split("&");
            for (var queryIndex in queryList) {
                var queryRow = queryList[queryIndex];
                var queryPair = queryRow.split("=");
                if (queryPair.length >= 2) {
                    var queryKey = queryPair[0];
                    if (queryKey == pKey) {
                        var queryVal = decodeURIComponent(queryPair[1]);
                        return queryVal;
                    }
                }
            }
        }
    }
    return "";
}

function loadingStart(showTipsIcon, hideBg, hideMask) {
    if (hideMask) {
        $("#loadingMask").css("display", "none");
        $("#loadingIcon").css("display", "");
    } else {
        if (showTipsIcon) {
            $("#loadingMask > div.loading-tips").css("display", "");
        } else {
            $("#loadingMask > div.loading-tips").css("display", "none");
        }
        if (hideBg) {
            $("#loadingMask > div.loading-bg").css("display", "none");
        } else {
            $("#loadingMask > div.loading-bg").css("display", "");
        }
        
        $("#loadingIcon").css("display", "none");
        $("#loadingMask").css("display", "");
    }
}
function loadingStop() {
    $("#errBtn").unbind(supportTouch ? "touchend" : "click");
    $("#errTips").css("display", "none");
    $("#loadingMask").css("display", "none");
    $("#loadingIcon").css("display", "none");
}

function cropStart(evt) {
    // $("#followSection").unbind(supportTouch ? "touchend" : "click");
    $("#pkBtn").unbind(supportTouch ? "touchend" : "click");
    $("#pkLayer").css("display", "none");
    $("#pkCover").css("display", "none");
    
    $("#cancelBtn").unbind(supportTouch ? "touchend" : "click");
    $("#cancelBtn").one(supportTouch ? "touchend" : "click", cropStop);
    $("#cropLayer").css("display", "");
    $("#cropCover").css("display", "");
    
    var $upload = $("#uploadInput");
    $upload.unbind("change");
    $upload.one("change", uploadOnChange);
    $upload.trigger("click");
    
    loadingStart(false, true, true);
    
    return preventEventPropagation(evt);
}
function cropStop(evt) {
    $("#confirmBtn").unbind(supportTouch ? "touchend" : "click");
    var $cropLayer = $("#cropLayer");
    if (supportTouch) {
        $cropLayer.unbind("touchstart");
        $cropLayer.unbind("touchmove");
        $cropLayer.unbind("touchend");
    } else {
        $cropLayer.unbind("mousedown");
        $cropLayer.unbind("mousemove");
        $cropLayer.unbind("mouseup");
    }
    $("#cancelBtn").unbind(supportTouch ? "touchend" : "click");
    $cropLayer.css("display", "none");
    $("#cropCover").css("display", "none");
    $("#myPic").attr("src", "");
    $("#myPic").css("visibility", "hidden");
    
    $("#pkBtn").unbind(supportTouch ? "touchend" : "click");
    $("#pkBtn").one(supportTouch ? "touchend" : "click", cropStart);
    // $("#followSection").unbind(supportTouch ? "touchend" : "click");
    // $("#followSection").on(supportTouch ? "touchend" : "click", followOnClick);
    $("#pkLayer").css("display", "");
    $("#pkCover").css("display", "");
    
    loadingStop();
    
    return preventEventPropagation(evt);
}

function getUser(callback) {
    var ptUin = getCookie("uin");
    if (ptUin.length <= 0) {
        callback("");
        return;
    }

    var pkUin = getCookie("pk-uin");
    if (pkUin == ptUin) {
        var pkNick = getCookie("pk-nick");
        if (pkNick.length > 0) {
            callback(pkNick);
            return;
        }
    }

    var curDate = new Date();
    $.getJSON("user.php", {r:curDate.getTime()}, function(data, status){
        if (status == "success") {
            if (data.ret == 0) {
                setCookie("pk-uin", ptUin);
                setCookie("pk-nick", data.nickName);
                callback(data.nickName);
                return;
            }
        }

        callback("");
    });
}

function followOnClick() {
    if ($("#followSection").attr("status") == "on") {
        $("#followSection .follow-checkbox").css("background", "url(http://res.tu.qq.com/assets/opwumeiniang_img/btns.png) no-repeat -78px -133px");
        $("#followSection").attr("status", "off");
    } else {
        $("#followSection .follow-checkbox").css("background", "url(http://res.tu.qq.com/assets/opwumeiniang_img/btns.png) no-repeat -46px -133px");
        $("#followSection").attr("status", "on");
    }
    
    return preventEventPropagation(evt);
}

function uploadOnChange(evt) {
    if (this.files.length <= 0) {
        cropStop();
        return preventEventPropagation(evt);
    }
    
    loadingStart(false, true);
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function() {
        // 转换二进制数据
        var binary = this.result;
        var binaryData = new BinaryFile(binary);
        // 获取exif信息
        var imgExif = EXIF.readFromBinaryFile(binaryData);

        var img2 = new Image();
        img2.onload = function(){
            var $cropLayer = $("#cropLayer");

            var imgWidth = this.width;
            var imgHeight = this.height;
            var ratioWidth = $cropLayer.width() / imgWidth;
            var ratioHeight = $cropLayer.height() / imgHeight;
            var ratio = ratioWidth > ratioHeight ? ratioWidth : ratioHeight;

            imgMinWidth = imgWidth * ratio;
            imgMinHeight = imgHeight * ratio;

            var imgOriginX = ($cropLayer.width() - imgMinWidth) * 0.5;
            var imgOriginY = ($cropLayer.height() - imgMinHeight) * 0.5;
            
            var $myPic = $("#myPic");
            $myPic.width(imgMinWidth);
            $myPic.height(imgMinHeight);
            $myPic.css("left", [imgOriginX, "px"].join(""));
            $myPic.css("top", [imgOriginY, "px"].join(""));
            $myPic[0].src = this.src;
            $("#myPic").css("visibility", "visible");
            
            if (supportTouch) {
                $cropLayer.unbind("touchstart");
                $cropLayer.unbind("touchmove");
                $cropLayer.unbind("touchend");
                $cropLayer.on("touchstart", cropTouchStart);
                $cropLayer.on("touchmove", cropTouchMove);
                $cropLayer.on("touchend", cropTouchEnd);
            } else {
                $cropLayer.unbind("mousedown");
                $cropLayer.unbind("mousemove");
                $cropLayer.unbind("mouseup");
                $cropLayer.on("mousedown", cropMouseDown);
                $cropLayer.on("mousemove", cropMouseMove);
                $cropLayer.on("mouseup", cropMouseUp);
            }
            $("#confirmBtn").unbind(supportTouch ? "touchend" : "click");
            $("#confirmBtn").one(supportTouch ? "touchend" : "click", confirmOnClick);
            loadingStop(true);
        }
        var mpImg = new MegaPixImage(file);
        mpImg.render(img2, {maxWidth:960, maxHeight:960, orientation:imgExif.Orientation});
    }
    reader.readAsBinaryString(file);
    
    return preventEventPropagation(evt);
}
function errOnClick(evt) {
//    window.location.href = "index.html";
    cropStop();
    return preventEventPropagation(evt);
}
function confirmOnClick(evt) {
    var canvasScale = canvasDom.height / $("#cropLayer").height();
    var $myPic = $("#myPic");
    var imgOrigin = {x:parseInt($myPic.css("left")), y:parseInt($myPic.css("top"))};
    var imgSize = {width:$myPic.width(), height:$myPic.height()};
    canvasCtx.drawImage($myPic[0], imgOrigin.x * canvasScale, imgOrigin.y * canvasScale, imgSize.width * canvasScale, imgSize.height * canvasScale);
    var dataURL = "";
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)){
        var imgEncoder = new JPEGEncoder();
        dataURL = imgEncoder.encode(canvasCtx.getImageData(0, 0, canvasDom.width, canvasDom.height), 85, true);
    } else {
        dataURL = canvasDom.toDataURL("image/jpeg", 0.85);
    }
    var dataComponent = dataURL.split(",");
    if (dataComponent.length >= 2) {
        var dataBase64 = dataComponent[1];
        if (dataBase64.length > 0) {
            loadingStart(true);
            var uploadUrl = "http://"+window.location.host+"/cgi/doWumeiniangCos.php";
            // var uploadUrl = "up.php";
            $.ajax(uploadUrl, {
                type:"POST",
                data:dataBase64,
                dataType:"json",
                timeout:30000,
                success:function(data, textStatus){
                    if (textStatus == "success") {
                        if (data.ret == 0 && data.id.length > 0) {
                            setCookie("pk-id", data.id);
                            if (data.cosurl.length > 0 && data.score.length > 0) {
                                setCookie("pk-cosurl", data.cosurl);
                                setCookie("pk-score", data.score);
                            }
                            var pkUrl = "pk.php?id=" + data.id + "&pf=" + getParam("pf") + "&_wv=" + getParam("_wv");
                            var pkSid = getParam("sid");
                            if (pkSid.length > 0) {
                                pkUrl += "&sid=" + pkSid;
                            }
                            location.href = pkUrl;
                            return;
                        }
                    }
                    $("#errBtn").unbind(supportTouch ? "touchend" : "click");
                    $("#errBtn").one(supportTouch ? "touchend" : "click", errOnClick);
                    $("#errTips").css("display", "");
                },
                error:function(req, textStatus){
                    $("#errBtn").unbind(supportTouch ? "touchend" : "click");
                    $("#errBtn").one(supportTouch ? "touchend" : "click", errOnClick);
                    $("#errTips").css("display", "");
                    window.alert("服务器错误，上妆失败!");
                }
            });
        }
    }
    
    return preventEventPropagation(evt);
}

function preventEventPropagation(evt) {
    var e = evt || window.event;
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    return false;
}

function cropTouchStart(evt) {
    var touches = evt.touches || evt.originalEvent.touches;
    var touch = touches[0];
    var offset = {
        "x": touch.pageX,
        "y": touch.pageY
    };
    if (touches.length >= 2) {
        var touch2 = touches[1];
        var offset2 = {
            "x": touch2.pageX,
            "y": touch2.pageY
        };
        cropPinchStart([offset, offset2]);
    } else {
        cropPanStart(offset);
    }

    return preventEventPropagation(evt);
}
function cropTouchMove(evt) {
    var touches = evt.touches || evt.originalEvent.touches;
    var touch = touches[0];
    var offset = {
        "x": touch.pageX,
        "y": touch.pageY
    };
    if (touches.length >= 2) {
        var touch2 = touches[1];
        var offset2 = {
            "x": touch2.pageX,
            "y": touch2.pageY
        };
        cropPinchChange([offset, offset2]);
    } else {
        cropPanMove(offset);
    }

    return preventEventPropagation(evt);
}
function cropTouchEnd(evt) {
    if (cropPanEnabled) {
        cropPanEnabled = false;
        cropPanEnd();
    }
    if (cropPinchEnabled) {
        cropPinchEnabled = false;
        cropPinchEnd();
    }

    return preventEventPropagation(evt);
}

function cropMouseDown(evt) {
    var offset = {
        "x": evt.clientX,
        "y": evt.clientY
    };
    cropPanStart(offset);

    return preventEventPropagation(evt);
}
function cropMouseMove(evt) {
    var offset = {
        "x": evt.clientX,
        "y": evt.clientY
    };
    cropPanMove(offset);

    return preventEventPropagation(evt);
}
function cropMouseUp(evt) {
    if (cropPanEnabled) {
        cropPanEnabled = false;
        cropPanEnd();
    }

    return preventEventPropagation(evt);
}

function cropPanStart(offset) {
    cropPinchEnabled = false;

    var $myPic = $("#myPic");
    cropPanOrigin.x = parseInt($myPic.css("left"));
    cropPanOrigin.y = parseInt($myPic.css("top"));

    cropPanFrom = offset;

    cropPanEnabled = true;

    return false;
}
function cropPanMove(offset) {
    if (cropPanEnabled) {
        var $myPic = $("#myPic");
        var imgOriginX = cropPanOrigin.x + offset.x - cropPanFrom.x;
        var imgOriginY = cropPanOrigin.y + offset.y - cropPanFrom.y;

        $myPic.css("left", [imgOriginX, "px"].join(""));
        $myPic.css("top", [imgOriginY, "px"].join(""));
    }
    return false;
}
function cropPanEnd() {
    var $myPic = $("#myPic");
    var imgOriginX = parseInt($myPic.css("left"));
    var imgOriginY = parseInt($myPic.css("top"));

    var $cropLayer = $("#cropLayer");

    if (imgOriginX > 0) {
        imgOriginX = 0;
    } else {
        var imgWidth = $myPic.width();
        if ((imgOriginX + imgWidth) < $cropLayer.width()) {
            imgOriginX = $cropLayer.width() - imgWidth;
        }
    }

    if (imgOriginY > 0) {
        imgOriginY = 0;
    } else {
        var imgHeight = $myPic.height();
        if ((imgOriginY + imgHeight) < $cropLayer.height()) {
            imgOriginY = $cropLayer.height() - imgHeight;
        }
    }

    $myPic.css("left", [imgOriginX, "px"].join(""));
    $myPic.css("top", [imgOriginY, "px"].join(""));
}

function cropPinchStart(offsets) {
    cropPanEnabled = false;

    var distanceX = Math.abs(offsets[1].x - offsets[0].x);
    var distanceY = Math.abs(offsets[1].y - offsets[0].y);
    cropPinchFrom = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (cropPinchFrom > 0) {
        var $cropLayer = $("#cropLayer");
        var cropOffset = $cropLayer.offset();
        var centerX = (offsets[0].x + offsets[1].x) * 0.5 - cropOffset.left;
        var centerY = (offsets[0].y + offsets[1].y) * 0.5 - cropOffset.top;

        var $myPic = $("#myPic");
        cropPinchOrigin.x = (centerX - parseInt($myPic.css("left"))) / $myPic.width();
        cropPinchOrigin.y = (centerY - parseInt($myPic.css("top"))) / $myPic.height();

        cropPinchSize.width = $myPic.width();
        cropPinchSize.height = $myPic.height();

        cropPinchEnabled = true;
    }
}
function cropPinchChange(offsets) {
    if (cropPinchEnabled) {
        var distanceX = Math.abs(offsets[1].x - offsets[0].x);
        var distanceY = Math.abs(offsets[1].y - offsets[0].y);
        var cropPinchTo = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        var scale = cropPinchTo / cropPinchFrom;
        var imgWidth = cropPinchSize.width * scale;
        var imgHeight = cropPinchSize.height * scale;

        var $cropLayer = $("#cropLayer");
        var cropOffset = $cropLayer.offset();
        var centerX = (offsets[0].x + offsets[1].x) * 0.5 - cropOffset.left;
        var centerY = (offsets[0].y + offsets[1].y) * 0.5 - cropOffset.top;

        var $myPic = $("#myPic");
        var imgOriginX = centerX - imgWidth * cropPinchOrigin.x;
        var imgOriginY = centerY - imgHeight * cropPinchOrigin.y;

        $myPic.width(imgWidth);
        $myPic.height(imgHeight);
        $myPic.css("left", [imgOriginX, "px"].join(""));
        $myPic.css("top", [imgOriginY, "px"].join(""));
    }
}
function cropPinchEnd() {
    var $myPic = $("#myPic");
    var imgWidth = $myPic.width();
    var imgHeight = $myPic.height();
    var imgOriginX = parseInt($myPic.css("left"));
    var imgOriginY = parseInt($myPic.css("top"));

    if (imgWidth < imgMinWidth || imgHeight < imgMinHeight) {
        imgWidth = imgMinWidth;
        imgHeight = imgMinHeight;
    }

    var $cropLayer = $("#cropLayer");

    if (imgOriginX > 0) {
        imgOriginX = 0;
    } else {
        if ((imgOriginX + imgWidth) < $cropLayer.width()) {
            imgOriginX = $cropLayer.width() - imgWidth;
        }
    }

    if (imgOriginY > 0) {
        imgOriginY = 0;
    } else {
        if ((imgOriginY + imgHeight) < $cropLayer.height()) {
            imgOriginY = $cropLayer.height() - imgHeight;
        }
    }

    $myPic.width(imgWidth);
    $myPic.height(imgHeight);
    $myPic.css("left", [imgOriginX, "px"].join(""));
    $myPic.css("top", [imgOriginY, "px"].join(""));
}

(function(){
    function getShareInfo() {
        var $shareBtn = $("#shareBtn");
        if ($shareBtn.length > 0) {
            var shareData = $shareBtn.attr("shareData");
            if (shareData.length > 0) {
                return shareData;
            }
        }
        return "";
    }

    var pituBridge = function(){};
    pituBridge.prototype.getShareInfo = getShareInfo;
    
    window.pituBridge = new pituBridge();
})();
