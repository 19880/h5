$(function(){

    var win = $(window);
    var screenWidth = win.width();
    var screenHeight = win.height();
    var isAndroid = navigator.userAgent.indexOf('Android') > -1;

    var scripts = {
        'part6': function(){
            var documentNode = $(document);
            var containerNode = $('.part6 .container');
            var viewNode = $('.viewport');
            var containerOffsetY;
            var bg = $('.part6 .bg');
            var bg2 = $('.part6 .bg2');
            var txt_01 = $('.part6 .txt_01');
            var txt_02 = $('.part6 .txt_02');
            var txt_03 = $('.part6 .txt_03');
            var txt_04 = $('.part6 .txt_04');
            var txt_05 = $('.part6 .txt_05');
            var txt_06 = $('.part6 .txt_06');
            var txt_07 = $('.part6 .txt_07');
            var txt_08 = $('.part6 .txt_08');
            var p1 = $('.part6 .p1');
            var p1_1 = $('.part6 .p1_1');
            var p1_2 = $('.part6 .p1_2');
            var p1_3 = $('.part6 .p1_3');
            var p2 = $('.part6 .p2');
            var p2_1 = $('.part6 .p2_1');
            var p3 = $('.part6 .p3');
            var p3_1 = $('.part6 .p3_1');
            var wrap = $('.part6 .wrap');
            var circle_tip = $('.part6 .circle_tip');
            var step = 0;
            var oriX;
            var oriY;
            var offsetX;
            var offsetY;
            var lastX = 0;
            var deltaX = 0;
            var containerWidth = containerNode.width();
            var maxOffsetX = -(1134 - containerWidth);
            var currentOffsetX = maxOffsetX;
            var oriOffsetX = currentOffsetX;
            var slideObj = {x:0};
            var p1status = 0;
            var p2status = 0;
            var p3status = 0;
            var isTip = true;

            init();
            function init(){
                documentNode.off('touchstart').on('touchstart', startHandle);
                TweenLite.to($('.spinners'), 0.4, {opacity:0, onComplete:function(){
                    $('.spinners').remove();
                }});
                $('.part6').show();

                containerOffsetY = -(568 * utils.globalScale - $(window).height()) / 2;
                TweenLite.set(containerNode, {y:containerOffsetY});
                TweenLite.set(containerNode, {scale:$(window).width() / 320});
                TweenLite.set(viewNode,{display:'block',opacity:0});
                TweenLite.to(viewNode,0.6,{opacity:1, ease:Power1.easeInOut, onComplete:function(){

                    magicShow(txt_01, function(){
                        TweenLite.set(circle_tip, {x:160, left:'0%', top:'62%', opacity:0, scale:1.1});
                        TweenLite.to(circle_tip, 0.6, {opacity:1, scale:0.9});
                        TweenMax.to(circle_tip, 0.6, {scale:1.1, yoyo: true, repeat:-1, delay: 0.6, ease:Power1.easeInOut});

                        step = 1;
                    }, 2, 1)

                }});
                TweenLite.set(bg2, {display:'none', opacity:0});
                TweenLite.set(p1, {display:'none', opacity:0});
                TweenLite.set(p2, {display:'none', opacity:0});
                TweenLite.set(p3, {display:'none', opacity:0});

            }

            function startHandle(e){
                e.preventDefault();
                switch (step){
                    case 1:
                        TweenLite.killTweensOf(circle_tip);
                        TweenLite.to(circle_tip, 0.5, {opacity:0});
                        TweenLite.to(txt_01, 0.5, {opacity:0});
                        TweenLite.set(bg2, {display:'block'});
                        TweenLite.to(bg2, 1, {opacity:1, onComplete: function(){
                            TweenLite.set(bg, {display:'none'});

                            TweenLite.to(wrap, 3, {x:-(1134 - containerWidth), ease:Power1.easeInOut, onComplete:function(){
                                magicShow(txt_02, function (){
                                    TweenLite.set(txt_03, {display:'block', opacity:1});
                                    TweenLite.set(txt_04, {display:'block', opacity:1});
                                    TweenLite.set(txt_05, {display:'block', opacity:1});
                                    TweenLite.set(txt_06, {display:'block', opacity:1});
                                    TweenLite.set(txt_07, {display:'block', opacity:1});
                                    TweenLite.set(txt_08, {display:'block', opacity:1});
                                    TweenLite.set(p1_2, {rotationZ:-180});
                                    TweenLite.set(p1_3, {rotationZ:180});

                                }, 1.5);
                                step = 3;
                            }});

                        }});
                        step = 2;
                        break;
                    case 3:
                        documentNode.off('touchmove').on('touchmove', moveHandle);
                        documentNode.off('touchend').on('touchend', endHandle);
                        TweenLite.killTweensOf(slideObj);
                        deltaX = 0;
                        lastX = 0;
                        offsetX = 0;
                        lastX = e.originalEvent.touches[0].clientX;
                        oriX = e.originalEvent.touches[0].clientX;
                        oriY = e.originalEvent.touches[0].clientY - containerOffsetY;

                        break;
                }
            }

            function moveHandle(e){
                if (step != 3) return;
                offsetX = e.originalEvent.touches[0].clientX - oriX;
                offsetY = e.originalEvent.touches[0].clientY - containerOffsetY - oriY;
                currentOffsetX = oriOffsetX + offsetX;
                currentOffsetX = Math.max(Math.min(currentOffsetX,0), -(1134 - containerWidth));
                deltaX = e.originalEvent.touches[0].clientX - lastX;
                lastX = e.originalEvent.touches[0].clientX;
//                currentOffsetX = Math.min(Math.max(currentOffsetX,0),-(1134 - containerWidth));
                TweenLite.set(wrap, {x:currentOffsetX});

                control(currentOffsetX);

                if (0 == currentOffsetX){
                    TweenLite.to(viewNode,1,{opacity:0, ease:Power2.easeInOut, onComplete:function(){
                        //TODO
                        $('.part6').remove();
                        reload();
                    }});
                }

                console.log(currentOffsetX);
            }

            function endHandle(e){
                if (step != 3) return;

                var tmpX = currentOffsetX + deltaX * 10;
                tmpX = Math.max(Math.min(tmpX,0), -(1134 - containerWidth));
                slideObj.x = currentOffsetX;
                TweenLite.to(slideObj, 1, {x:tmpX, onUpdate:function(){
                    oriOffsetX = slideObj.x;
                    TweenLite.set(wrap, {x:oriOffsetX});
                    control(oriOffsetX);
                }});


            }

            var controlTimer;
            var lock = false;
            function control(x){

                if (x >-300 && x<-50){
                    showP1();
                }else{
                    hideP1();
                }
                if (x >-600 && x<-100){
                    showP2();
                    if (!lock && x <-190 && x > -480){
                        TweenLite.killTweensOf(txt_06);
//                        TweenLite.to(txt_06, 0.3, {x: -190 - x, ease:Power2.easeOut});
//                        TweenLite.to(txt_07, 0.3, {x: -190 - x, ease:Power2.easeOut});
                        TweenLite.set(txt_06, {x: -190 - x, ease:Power2.easeOut});
                        TweenLite.set(txt_07, {x: -190 - x, ease:Power2.easeOut});
//                        lock = true;
//                        clearTimeout(controlTimer);
//                        controlTimer = setTimeout(function(){
//                            lock = false;
//                        },50);
                    }
                }else{
                    hideP2();
                }
                if (x >-450 && x<-240){
                    showP3();
                }else{
                    hideP3();
                }

            }

            var obj = {v:0};
            function showP1(){
                if (p1status != 1){
                    TweenLite.set(p1, {display:'block', opacity:0});
                    TweenLite.to(p1, 1, {opacity:1});
                    TweenLite.to(p1_2, 1, {rotationZ:0});
                    TweenLite.to(p1_3, 1, {rotationZ:0});
                    obj.v = 0;
                    TweenLite.to(obj, 1, {v:53.5, onUpdate:function(){
                        txt_04.html(obj.v.toFixed(1)+'<sub>mm</sub>');
                    }});
                    p1status = 1;
                }
                if (isTip){
                    TweenLite.to(txt_02, 0.5, {opacity:0});
                    isTip = false;
                }
            }

            function hideP1(){
                if (p1status == 1){
//                    TweenLite.set(p1, {display:'block', opacity:0});
                    TweenLite.to(p1, 1, {opacity:0});
                    TweenLite.to(p1_2, 1, {rotationZ:-180});
                    TweenLite.to(p1_3, 1, {rotationZ:180});

                    p1status = 0;

                }
            }

            function showP2(){
                if (p2status != 1){
                    TweenLite.set(p2, {display:'block', opacity:0});
                    TweenLite.to(p2, 1, {opacity:1});
                    p2status = 1;
                }
                if (isTip){
                    TweenLite.to(txt_02, 0.5, {opacity:0});
                    isTip = false;
                }
            }

            function hideP2(){
                if (p2status == 1){
//                    TweenLite.set(p1, {display:'block', opacity:0});
                    TweenLite.to(p2, 1, {opacity:0});
                    p2status = 0;

                }
            }

            function showP3(){
                if (p3status != 1){
                    TweenLite.set(p3, {display:'block', opacity:0});
                    TweenLite.to(p3, 1, {opacity:1});
                    p3status = 1;
                    isTip = false;
                }
                if (isTip){
                    TweenLite.to(txt_02, 0.5, {opacity:0});
                }
            }

            function hideP3(){
                if (p3status == 1){
                    TweenLite.to(p3, 1, {opacity:0});
                    p3status = 0;

                }
            }

            function moveWrap(percent){
                var maxOffsetX = 1134 - containerNode.width();
                var x = percent * -maxOffsetX;

                TweenLite.to(wrap, 1, {x:x});

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
        scripts.part6();
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
        location.href='./index.html#d=6';
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
            name: 'part6',
            imgArr: [
                'assets/demo2/part6/bg.jpg',
                'assets/demo2/part6/bg2.jpg',
                'assets/demo2/part6/p1_1.png',
                'assets/demo2/part6/p1_2.png',
                'assets/demo2/part6/p1_3.png',
                'assets/demo2/part6/p2.png',
                'assets/demo2/part6/p3.png'
            ]
        });
        imgLoader.loadGroup('part6');

    }

    preload(function(){
        var doc = $(document);
        doc.off('touchstart');
        init();
    });


});