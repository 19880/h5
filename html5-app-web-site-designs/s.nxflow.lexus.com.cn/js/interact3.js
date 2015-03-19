$(function(){

    var win = $(window);
    var screenWidth = win.width();
    var screenHeight = win.height();
    var isAndroid = navigator.userAgent.indexOf('Android') > -1;

    var scripts = {
        'part3': function(){

            var documentNode = $(document);
            var containerNode = $('.part3 .container');
            var viewNode = $('.viewport');
            var containerOffsetY;
            var bg3 = $('.part3 .bg3');
            var bg4 = $('.part3 .bg4');
            var bg5 = $('.part3 .bg5');
            var txt_01 = $('.part3 .txt_01');
            var txt_02 = $('.part3 .txt_02');
            var txt_03 = $('.part3 .txt_03');
            var circle_tip = $('.part3 .circle_tip');
            var shadow = $('.part3 .shadow');
            var step = 0;

            init();
            function init(){
                documentNode.off('touchstart').on('touchstart', startHandle);
                TweenLite.to($('.spinners'), 0.4, {opacity:0, onComplete:function(){
                    $('.spinners').remove();
                }});
                $('.part3').show();

                containerOffsetY = -(568 * utils.globalScale - $(window).height()) / 2;
                TweenLite.set(containerNode, {y:containerOffsetY});
                TweenLite.set(containerNode, {scale:$(window).width() / 320});
                TweenLite.set(viewNode,{display:'block',opacity:0});
                TweenLite.to(viewNode,0.6,{opacity:1, ease:Power1.easeInOut, onComplete:function(){
                    magicShow(txt_01, function(){
                        TweenLite.set(circle_tip, {x:255, top:'62%', opacity:0, scale:1.1});
                        TweenLite.to(circle_tip, 0.5, {opacity:1, scale:0.9});
                        TweenMax.to(circle_tip, 0.5, {scale:1.1, yoyo: true, repeat:-1, delay: 0.5, ease:Power1.easeInOut});
                        step = 1;
                    }, 1.5, 2);
                }});

                TweenLite.set(bg3, {display:'none'});
                TweenLite.set(bg4, {display:'none'});
                TweenLite.set(bg5, {display:'none'});

                eraserInit();

            }

            function startHandle(e){
                e.preventDefault();
                switch (step){
                    case 1:
                        TweenLite.killTweensOf(circle_tip);
                        TweenLite.to(circle_tip, 0.5, {opacity:0});
                        TweenLite.to(txt_01, 0.5, {opacity:0});
                        TweenLite.set(bg3, {display:'block', opacity: 0});
                        TweenLite.to(bg3, 0.6, {opacity:1, onComplete: function(){
                            magicShow(txt_02, function moveCir(){
                                TweenLite.set(circle_tip, {opacity:0, x:0, left:'60%', top:'30%'});
                                TweenLite.fromTo(circle_tip, 0.8, {opacity:0}, {opacity:1, delay:1});
                                TweenLite.fromTo(circle_tip, 1.8, {left:'60%', top:'30%'}, {left:'20%', top:'60%', delay:1.8, ease:Power1.easeInOut});
                                TweenLite.to(circle_tip, 0.6, {opacity:0, delay: 3, onComplete: moveCir});
                            }, 2);
                            step = 3;
                        }});

                        step = 2;
                        break;
                    case 5:
                        TweenLite.set(bg4, {display:'block', opacity: 1});
                        TweenLite.to(txt_03, 0.5, {opacity:0});
                        TweenLite.to(bg3, 0.6, {opacity:0, onComplete: function(){
                            TweenLite.set(bg3, {display:'none', opacity: 0});
                            magicShow(txt_01, function(){
                                TweenLite.set(circle_tip, {x:120, left:'0%', top:'43%', opacity:0, scale:1.1});
                                TweenLite.to(circle_tip, 0.6, {opacity:1, scale:0.9});
                                TweenMax.to(circle_tip, 0.6, {scale:1.1, yoyo: true, repeat:-1, delay: 0.6, ease:Power1.easeInOut});
                                step = 7;
                            }, 1.5, 2);
                        }});
                        step = 6;
                        break;
                    case 7:
                        TweenLite.killTweensOf(circle_tip);
                        TweenLite.to(circle_tip, 0.4, {opacity: 0});
                        TweenLite.to(txt_01, 0.5, {opacity:0});
                        TweenLite.set(bg5, {display:'block', opacity: 0});
                        TweenLite.to(bg5, 0.6, {opacity:1, onComplete: function(){
                            TweenLite.set(bg4, {display:'none', opacity: 0});
                            magicShow(txt_02, function(){
                                TweenLite.set(circle_tip, {x:120, left:'0%', top:'41%', opacity:0, scale:1.1});
                                TweenLite.to(circle_tip, 0.6, {opacity:1, scale:0.9});
                                TweenMax.to(circle_tip, 0.6, {scale:1.1, yoyo: true, repeat:-1, delay: 0.6, ease:Power1.easeInOut});
                                step = 9;
                            }, 2, 2);
                        }});
                        step = 8;
                        break;
                    case 9:
                        TweenLite.to(circle_tip, 0.4, {opacity: 0});
                        TweenLite.to(txt_01, 0.5, {opacity:0});
                        TweenLite.to(txt_02, 0.5, {opacity:0});
                        TweenLite.to(shadow, 2, {opacity:0});
                        TweenLite.to(bg5, 2, {x:-67,y:-75,ease:Power1.easeInOut, onComplete:function(){
                            magicShow(txt_03, null, 1.5, 2);
                            step = 11;
                        }});
                        step = 10;
                        break;
                    case 11:
                        TweenLite.to(viewNode,1,{opacity:0, ease:Power2.easeInOut, onComplete:function(){
                            //TODO
                            $('.part3').remove();
                            reload();
                        }});
                        step = 12;
                        break;
                }

            }

            function eraserInit(){

                var canvas = document.getElementById("cas"),ctx = canvas.getContext("2d");
                var x1,y1,a=30,timeout,totimes = 100,jiange = 30;
                canvas.width = $('.part3 .container').width();
                canvas.height = $('.part3 .container').height();
                var img = new Image();
                img.src = "assets/demo2/part3/bg2.jpg";
                img.onload = function(){
                    ctx.drawImage(img,0,0,canvas.width,canvas.height)
                    tapClip()
                };

                //通过修改globalCompositeOperation来达到擦除的效果
                function tapClip(){
                    var hastouch = "ontouchstart" in window?true:false,
                        tapstart = hastouch?"touchstart":"mousedown",
                        tapmove = hastouch?"touchmove":"mousemove",
                        tapend = hastouch?"touchend":"mouseup";

                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    ctx.lineWidth = a*2;
                    ctx.globalCompositeOperation = "destination-out";

                    canvas.addEventListener(tapstart , function(e){
                        if (step != 3) {return;}
                        TweenLite.killTweensOf(circle_tip);
                        TweenLite.to(circle_tip, 0.4, {opacity: 0});
                        clearTimeout(timeout)
                        e.preventDefault();

                        x1 = hastouch?e.targetTouches[0].pageX / utils.globalScale:e.clientX-canvas.offsetLeft;
                        y1 = hastouch?e.targetTouches[0].pageY / utils.globalScale-containerOffsetY:e.clientY-canvas.offsetTop-containerOffsetY;


                        ctx.save();
                        ctx.beginPath()
                        ctx.arc(x1,y1,1,0,2*Math.PI);
                        ctx.fill();
                        ctx.restore();

                        canvas.addEventListener(tapmove , tapmoveHandler);
                        canvas.addEventListener(tapend , function(){
                            canvas.removeEventListener(tapmove , tapmoveHandler);
                            TweenLite.killTweensOf(circle_tip);
                            TweenLite.to(circle_tip, 0.4, {opacity: 0});

                            timeout = setTimeout(function(){
                                if (step != 3) {return;}
                                var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
                                var dd = 0;
                                for(var x=0;x<imgData.width;x+=jiange){
                                    for(var y=0;y<imgData.height;y+=jiange){
                                        var i = (y*imgData.width + x)*4;
                                        if(imgData.data[i+3] >0){
                                            dd++
                                        }
                                    }
                                }
                                if(dd/(imgData.width*imgData.height/(jiange*jiange))<0.8){
                                    TweenLite.to(canvas, 0.8, {opacity:0});
                                    TweenLite.to(txt_02, 0.8, {opacity:0, onComplete: function(){
                                        magicShow(txt_03, null, 1, 2);
                                        step = 5;
                                    }});
                                    step = 4;
                                    console.log('over');
                                }
                            },totimes)
                        });
                        function tapmoveHandler(e){
                            clearTimeout(timeout)
                            e.preventDefault()

                            x2 = hastouch?e.targetTouches[0].pageX / utils.globalScale:e.clientX-canvas.offsetLeft;
                            y2 = hastouch?e.targetTouches[0].pageY / utils.globalScale-containerOffsetY:e.clientY-canvas.offsetTop-containerOffsetY;

                            ctx.save();
                            ctx.moveTo(x1,y1);
                            ctx.lineTo(x2,y2);
                            ctx.stroke();
                            ctx.restore();

                            x1 = x2;
                            y1 = y2;
                        }
                    })
                }
            }
        }

    };


    function init(){

//        var list = $('<ul>' +
//            '<li></li>' +
//            '<li></li>' +
//            '<li></li>' +
//            '<li></li>' +
//            '<li></li>' +
//            '<li></li>' +
//            '<li></li>' +
//            '</ul>');
//        $('.spinners p').html('').append(list);
//
//        $('.spinners p ul li').eq(0).html('轻触演示小动：刻画NX').on('touchstart', function(){scripts.part1();});
//        $('.spinners p ul li').eq(1).html('轻触演示小动：开启虫洞').on('touchstart', function(){scripts.part2();});
//        $('.spinners p ul li').eq(2).html('轻触演示小动：质感').on('touchstart', function(){scripts.part3();});
//        $('.spinners p ul li').eq(3).html('轻触演示小动：HUD').on('touchstart', function(){scripts.part4();});
//        $('.spinners p ul li').eq(4).html('轻触演示小动：缝线').on('touchstart', function(){scripts.part5();});
//        $('.spinners p ul li').eq(5).html('轻触演示小动：乘坐空间').on('touchstart', function(){scripts.part6();});
//        $('.spinners p ul li').eq(6).html('轻触演示小动：后备箱空间').on('touchstart', function(){scripts.part7();});

        initG();
        scripts.part3();
    }

    var bodyNode = $('body');

    function FlyCard(x, y){
//        return;

        this.wrap = $('<div class="cardWrap"><div class="card"></div></div>');
        this.card = this.wrap.find('.card');

        var me = this;
        var addRound = 1;
        var minRound = 1;
        var rz = Math.random()*360*addRound+360*minRound;
        var rx = Math.random()*360*addRound+360*minRound;
        var ry = Math.random()*360*addRound+360*minRound;
        rz = rz /2 - rz;
        rx = rx /2 - rx;
        ry = ry /2 - ry;
        var offsetLeft = Math.random() * 90 - 45;
        var offsetTop = Math.random() * 90;// - 45;

        TweenLite.set(this.card, {backgroundColor:['#ffff66','#ffff00'][Math.floor(Math.random()*2)]});
        TweenLite.set(this.wrap,{x:x,y:y,z:100,rotationZ:Math.random()*360,rotationX:Math.random()*360,rotationY:Math.random()*360,display:'block'});
        TweenLite.to(this.wrap,0.6,{x:x + offsetLeft, ease:Power1.easeOut});
        TweenLite.to(this.wrap,0.6,{y:y + offsetTop, ease:Back.easeIn});
        TweenLite.to(this.card,0.6,{backgroundColor:'#660000', ease:Power2.easeInOut});
//        TweenLite.fromTo(this.wrap,1,{z:100},{});
//        TweenLite.to(this.wrap,1,{opacity:0,delay:1});
        TweenLite.to(this.wrap,0.6,{rotationZ:rz,rotationX:rx,rotationY:ry,onComplete:function(){
            me.wrap.remove();
        }});

        bodyNode.append(this.wrap);

    }


    function reload(){
        location.href='./index.html#d=3';
    }

    function magicShow(textNode, callback, speed, mode){
        speed = speed || 1;
        TweenLite.set(textNode, {display:'block',opacity:1});
        var mySplitText = new SplitText(textNode, {type:"words"});
        var splitTextTimeline = new TimelineLite({paused:true,onComplete:callback||null});

        switch (mode){
            case undefined:
            case 0:
                mySplitText.split({type:"chars, words"});
                splitTextTimeline.staggerFrom(mySplitText.chars, 0.6 * speed, {scale:4, autoAlpha:0,  rotationX:-270,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.02 * speed);
                break;
            case 0.5:
                mySplitText.split({type:"chars, words"});
                splitTextTimeline.staggerFrom(mySplitText.chars, 0.6 * speed, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.02 * speed);
                break;
            case 1:
                mySplitText.split({type:"words"})
                $(mySplitText.words).each(function(index,el){
                    splitTextTimeline.from($(el), 0.6 * speed, {opacity:0, force3D:true}, index * 0.01 * speed);
                    splitTextTimeline.from($(el), 0.6 * speed, {scale:index % 2 == 0  ? 0 : 2, ease:Back.easeOut}, index * 0.01 * speed);
                });
                break;
            case 2:
                mySplitText.split({type:"lines"})
                splitTextTimeline.staggerFrom(mySplitText.lines, 0.5 * speed, {opacity:0, scale:0.95}, 0.5 * speed);
                splitTextTimeline.play();
                break;
            case 3:
                mySplitText.split({type:"lines"})
                splitTextTimeline.staggerFrom(mySplitText.lines, 0.5 * speed, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -150"}, 0.1 * speed);
                splitTextTimeline.play();
                break;
        }
        splitTextTimeline.play();

    }

    function initG(){
        var timer;
        var lastX;
        var maxAngle = 10;
        var txt = $('.txt');
        var me = this;
        function handle(event){
            if (timer) return;
            timer = setTimeout(function(){
                var x = +event['accelerationIncludingGravity'].x;
                if (lastX === undefined || Math.abs(x-lastX) >= 0.05){
                    var angle = x / 5 * maxAngle;
                    angle = Math.max(Math.min(angle, maxAngle), -maxAngle);
                    TweenLite.to(txt, 1, {x: angle,  ease:Linear.easeNone});
                    lastX = x;
                }
                timer = 0;
            }, 100);
        }
        window.addEventListener("devicemotion", handle, true);

    }

    /**
     * 预加载
     */
    var imgLoader;
    function preload(cb) {
        var doc = $(document);
        doc.off('touchstart').on('touchstart', function(e){
            return false;
        });

        imgLoader = new ImgLoader({
            loadingHTML: 'Loading<br>{%}',
            nodeLoading: $('.spinners p')[0],
            onPercent: function(percent){
            },
            onAllReady: cb
        });
        imgLoader.addGroup({
            name: 'part3',
            imgArr: [
                'assets/demo2/part3/bg.jpg',
                'assets/demo2/part3/bg2.jpg',
                'assets/demo2/part3/bg3.jpg',
                'assets/demo2/part3/bg4.jpg',
                'assets/demo2/part3/bg5.jpg'
            ]
        });
        imgLoader.loadGroup('part3');

    }

    preload(function(){
        var doc = $(document);
        doc.off('touchstart');
        init();
    });


});