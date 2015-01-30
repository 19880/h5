/// <reference path="../../js/jquery-1.9.1.js" />
/// <reference path="../../js/Cmn.js" />
/// <reference path="animate/AnimateFrame.js" />
/// <reference path="../../js/CmnAjax.js" />
/// <reference path="../../js/CmnFuncExd.js" />
/// <reference path="WechatShare.js" />
$(document).ready(function () {

    Cmn.Func.ImageLazyLoading(".Wrap", function () { }, function () {
        $(".jscPreloader").hide();
    })



    if (window.location.href.indexOf("/classic/grandpagu/") > -1) {
        SetWechatShare("一条NB的广告", "", "/classic/grandpagu/index.html", "/classic/grandpagu/images/SharePic.jpg");
        SetWechatShareToTimeline("一条NB的广告", "");
        SetWechatShareToFriend("一条NB的广告", "顾爷跟你说个故事");
    }
    else {
        SetWechatShare("一条NB的广告", "", "/NBAnimationSites/Web/index.html", "/NBAnimationSites/Web/images/SharePic.jpg");
        SetWechatShareToTimeline("一条NB的广告", "");
        SetWechatShareToFriend("一条NB的广告", "顾爷跟你说个故事");
    }

    AnimateFrame.Init(600, SwitchMode.Reversal, Direction.Up, Direction.Down);


    //首页场景  
    AnimateFrame.allScenes[0].OnScenesShow = function () {
        $(".TopBg").css("display", "none");
        $(".BottomBg").css("display", "none");
    }

    AnimateFrame.allScenes[1].OnScenesShow = function () {
        $(".TopBg").css("display", "none");
        $(".BottomBg").css("display", "none");
    }

    AnimateFrame.allScenes[2].OnScenesShow = function () {
        $(".TopBg").css("display", "none");
        $(".BottomBg").css("display", "none");
    }

    AnimateFrame.OnBeforeScenesChange = function (s, h) {
        if (h.ScenesNo > 3) {
            $(".TopBg").css("display", "block");
            $(".BottomBg").css("display", "block");
        }

    }
    var _isRunScenes7Aniamte = false;
    AnimateFrame.allScenes[7].OnScenesShow = function () {
        $(".Page8 .DianChi").stop(true, false).removeAttr("style");
        _isRunScenes7Aniamte = true;
    }

    //AnimateFrame.allScenes[7].OnScenesAfterShow = function () {
    //        if (_isRunScenes7Aniamte) {

    //        }
    //}
    //AnimateFrame.allScenes[8].OnScenesShow = function () {
    //    _isRunScenes7Aniamte = false;

    //}
    //AnimateFrame.allScenes[8].OnScenesShow = function () {
    //    _isRunScenes7Aniamte = false;
    //    $(".Page8 .DianChi").stop(true, false).removeAttr("style");
    //}


    AnimateFrame.allScenes[7].AnimateMan.Add(
        new function () {
            BasAnimate.call(this);

            this.OnInit = function () {
                $(".Page8 .DianChi").stop(true, false).removeAttr("style");
            }

            this.OnStart = function () {
                var _sefl = this;
                $(".Page8 .DianChi").delay(1500).animate({ "top": "775px" }, 150).animate({ "top": "705px", "left": "510px" }, 120).animate({ "top": "775px", "left": "520px" }, 100).animate({ "top": "755px", "left": "530px" }, 150).animate({ "top": "775px", "left": "540px" }, 50);


            }
            this.OnStop = function () {
                $(".Page8 .DianChi").stop(true, false).removeAttr("style");
            }

            this.OnComplete = function () { }

        }
    );


}, 1)