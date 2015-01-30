/// <reference path="../js/animate/AnimateFrame.js" />
/// <reference path="../js/animate/Scenes.js" />
/// <reference path="../js/jquery-1.8.3.js" />





 


AnimateFrame.CurScenes.AnimateMan.Add(
    new function () {
        BasAnimate.call(this);

        this.OnInit = function () {
            $(".jscTx1").removeAttr("style");
            $(".jscText1").removeAttr("style");
            $(".jscHandClick").hide();
            $("#Page18").off("touchend");
            $("#Page18").off("touchmove");
        }

        this.OnStart = function () {
            var _sefl = this;
            $(".jscTx5").css({ "scale": "0" });
            $(".jscTx1").delay(500).animate({ 'left': '245px', 'opacity': '1' },1000, "easeOutCirc")
       
            $(".jscText1").delay(500).animate({ 'right': '126px', 'opacity': '1' }, 1000, "easeOutCirc", function () { $(".jscHandClick").show(); })
            var _move = 0;
            $("#Page18").on("touchmove", function (e) {   _move++;  });
            $("#Page18").on("touchend", function (e) {
                if (_move < 2) {
                    $("#Page18").off("touchend");
                    $(".jscTx1").animate({ 'left': '-1001px', 'opacity': '0' }, 1800);
                    $(".jscText1").animate({ 'right': '-1001px', 'opacity': '0' }, 1800);
                    $(".jscHandClick").hide();
                    setTimeout(function () { _sefl.OnComplete(); }, 1200)
                }
               
            });
           
           
        }
        this.OnStop = function () {
            $(".jscTx1").stop(true, false).removeAttr("style");
            $(".jscText1").stop(true, false).removeAttr("style");
        }

        this.OnComplete = function () { }

    }
);


AnimateFrame.CurScenes.AnimateMan.Add(
    new function () {
        BasAnimate.call(this);

        this.OnInit = function () {
            $(".jscTx4").removeAttr("style");
            $(".jscTx3").removeAttr("style");
            $(".jscText2").removeAttr("style");
            $(".jscTx2").removeAttr("style");
        }

        this.OnStart = function () {
            var _sefl = this;
            var _count = 0;
            $(".jscTx2,.jscText2,.jscTx3,.jscTx4").animate({ 'opacity': '1' }, 1500, function () {
                $(this).delay(1500).animate({ 'opacity': '0' }, 300, function () {
                    if (++_count == 4) _sefl.OnComplete();
                });
            });

            

        }
        this.OnStop = function () {
            $(".jscTx4").stop(true, false).removeAttr("style");
            $(".jscTx3").stop(true, false).removeAttr("style");
            $(".jscText2").stop(true, false).removeAttr("style");
            $(".jscTx2").stop(true, false).removeAttr("style");
           
        }

        this.OnComplete = function () { }

    }
);


AnimateFrame.CurScenes.AnimateMan.Add(
    new function () {
        BasAnimate.call(this);

        this.OnInit = function () {
            $(".jscTx5").removeAttr("style");
            $(".jscTx6").removeAttr("style");
            $(".jscTx7").removeAttr("style");
            $(".jscTx8,.jscText3").removeAttr("style");

        }
        
        this.OnStart = function () {
            var _sefl = this;
            var _count = 0;

            $(".jscTx5").animate({ "scale": "1", 'opacity': '1' },900, "easeOutBack").delay(1600)
            .animate({ 'opacity': '0'}, 400, function () {
            })

            setTimeout(function () {
                $(".jscTx8,.jscTx6,.jscTx7,.jscText3").css({ "scale": "0.5" }).animate({ 'opacity': '1', "scale": "1" }, 900, "easeInOutBack", function () {
                    $(this).delay(1500).animate({ 'opacity': '0' },900, function () {
                        
                    });

                    if (++_count == 4) {
                        setTimeout(function () { _sefl.OnComplete(); }, 2500)
                    }

                });
            },2800)

            $(".jscTx9").css({ "top": "0px" });

        }
        this.OnStop = function () {
            $(".jscTx5").stop(true, false).removeAttr("style");
            $(".jscTx6").stop(true, false).removeAttr("style");
            $(".jscTx7").stop(true, false).removeAttr("style");
            $(".jscTx8,.jscText3").stop(true, false).removeAttr("style");
        }

        this.OnComplete = function () { }

    }
);

AnimateFrame.CurScenes.AnimateMan.Add(
    new function () {
        BasAnimate.call(this);

        this.OnInit = function () {
            $(".jscZuiHouNvTxWrap,.jscZuiHouNvText,.jscZuiHouNvSz,.jscZuiHouNanTx").removeAttr("style");
          
            $(".jscFingerPic").hide();
        }

        this.OnStart = function () {
            var _sefl = this;
            var _count = 0;

            $(".jscZuiHouNvTxWrap").animate({ "top": "319px", 'opacity': '1' }, 700, "easeOutBack", function () {
                setTimeout(function () { 
                    $(".jscZuiHouNvTxWrap").animate({ top: "264px", left: "318px" }, 1500, "easeOutBack")
                    $(".jscZuiHouNvSz").animate({ 'opacity': '1' }, 800);
                    $(".jscZuiHouNvText").animate({ 'left': '0px', 'opacity': '0' },600);
                    $(".jscZuiHouNanTx").delay(800).animate({ 'left': '189px', 'opacity': '1' }, 800, "easeOutBack")
                    
                    $(".jscFingerPic").show();

                }, 2500)

            })
           
            $(".jscZuiHouNvText").animate({ 'opacity': '1' }, 800);


        }
        this.OnStop = function () {
            $(".jscZuiHouNvTxWrap,.jscZuiHouNvText,.jscZuiHouNvSz,.jscZuiHouNanTx").stop(true, false).removeAttr("style");
        }

        this.OnComplete = function () { }

    }
);


AnimateFrame.CurScenes.OnScenesShow = function () {
 

}