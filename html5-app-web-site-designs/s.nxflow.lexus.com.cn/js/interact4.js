$(function(){

    var win = $(window);
    var screenWidth = win.width();
    var screenHeight = win.height();
    var isAndroid = navigator.userAgent.indexOf('Android') > -1;

    var scripts = {
        'part4': function(){
            var documentNode = $(document);
            var containerNode = $('.part4 .container');
            var viewNode = $('.viewport');
            var containerOffsetY;
            var bg = $('.part4 .bg');
            var bg2 = $('.part4 .bg2');
            var bg3 = $('.part4 .bg3');
            var tip = $('.part4 .tip');
            var p1 = $('.part4 .p1');
            var p2 = $('.part4 .p2');
            var p3 = $('.part4 .p3');
            var txt_01 = $('.part4 .txt_01');
            var txt_02 = $('.part4 .txt_02');
            var txt_03 = $('.part4 .txt_03');
            var txt_04 = $('.part4 .txt_04');
            var step = 0;
            var oriY;
            var angle;
            var wh = $('.part4 .container').height();
            var tl = new TimelineMax({
                onComplete: function(){
                    tl.seek(0).play();
                },
                paused: true
            });
            var tl2 = new TimelineMax({
                onComplete: function(){
                    tl2.seek(0).play();
                },
                paused: true
            });

            init();
            function init(){
                documentNode.off('touchstart').on('touchstart', startHandle);
                TweenLite.to($('.spinners'), 0.4, {opacity:0, onComplete:function(){
                    $('.spinners').remove();
                }});
                $('.part4').show();

                containerOffsetY = -(568 * utils.globalScale - $(window).height()) / 2;
                TweenLite.set(containerNode, {y:containerOffsetY});
                TweenLite.set(containerNode, {scale:$(window).width() / 320});
                TweenLite.set(viewNode,{display:'block',opacity:0});
                TweenLite.to(viewNode,0.6,{opacity:1, ease:Power1.easeInOut, onComplete:function(){
                    magicShow(txt_01, function(){

                        (function abc(){
                            TweenLite.set(p1, {x:0, y:0, display:'block', opacity:0});
                            TweenLite.set(p2, {display:'block', opacity:0});
                            TweenLite.set(p3, {display:'block', opacity:1});
                            TweenLite.to(p1, 1, {opacity:1, delay: 0.5});
                            TweenLite.to(p2, 1, {opacity:1, delay: 1});
                            TweenLite.to(p1, 1, {y:-120, delay: 2, ease:Power1.easeOut});
                            TweenLite.to(p1, 1, {x:90, delay: 2, ease:Power1.easeIn});
                            TweenLite.to(p1, 1, {opacity:0, delay: 3.5});
                            TweenLite.to(p2, 1, {opacity:0, delay: 4, onComplete:abc});
                        })();
                        step = 1;
                    }, 1.5, 1)
                }});
                TweenLite.set(p1, {display:'block', opacity:0});
                TweenLite.set(p2, {display:'block', opacity:0});
                TweenLite.set(p3, {display:'block', opacity:1});
                TweenLite.set(bg2, {display:'none', opacity:0});
                TweenLite.set(bg3, {display:'block', opacity:0});

                tl.set(tip, {opacity:0, rotationX:45, z:50});
                tl.to(tip, 0.3, {opacity:1});
                tl.to(tip, 1.5, {rotationX:0, ease:Power2.easeInOut});
                tl.to(tip, 0.6, {opacity:0, delay:0.2});
                tl.to(tip, 0.5, {opacity:0});
                tip.hide();

                tl2.to(bg3, 0, {opacity:0});
                tl2.to(bg3, 0, {opacity:1, delay:0.05});
                tl2.to(bg3, 0.1, {opacity:1});
                tl2.seek(0).play();

            }


            function startHandle(e){
                e.preventDefault();

//                if (!isStart) return;
                switch (step){
                    case 1:
                        documentNode.off('touchmove').on('touchmove', moveHandle);
                        documentNode.off('touchend').on('touchend', endHandle);
                        oriY = e.originalEvent.touches[0].clientY;

                        TweenLite.killTweensOf(p1);
                        TweenLite.killTweensOf(p2);
                        TweenLite.to(p1, 0.5, {opacity:0});
                        TweenLite.to(p2, 0.5, {opacity:0});

                        break;
                    case 6:
                        TweenLite.to(viewNode,1,{opacity:0, ease:Power2.easeInOut, onComplete:function(){
                            //TODO
                            $('.part4').remove();
                            reload();
                        }});
                        step = 7;

                        break;
                }

            }

            function moveHandle(e){
                e.stopPropagation();
                e.preventDefault()

                var cx = e.originalEvent.touches[0].clientX;
                var cy = e.originalEvent.touches[0].clientY;
                angle = - (cy - oriY) * 1.2;

                if (angle > 120) {
                    angle = 120;
                }
                if (angle < 0) {
                    angle = 0;
                }

                TweenLite.to(p3, 0.4, {rotationZ: angle});

                console.log(angle);

            }

            function endHandle(e){
                if (angle < 100){
                    (function abc(){
                        TweenLite.set(p1, {x:0, y:0, display:'block', opacity:0});
                        TweenLite.set(p2, {display:'block', opacity:0});
                        TweenLite.set(p3, {display:'block', opacity:1});
                        TweenLite.to(p1, 1, {opacity:1, delay: 0.5});
                        TweenLite.to(p2, 1, {opacity:1, delay: 1});
                        TweenLite.to(p1, 1, {y:-120, delay: 2, ease:Power1.easeOut});
                        TweenLite.to(p1, 1, {x:90, delay: 2, ease:Power1.easeIn});
                        TweenLite.to(p1, 1, {opacity:0, delay: 3.5});
                        TweenLite.to(p2, 1, {opacity:0, delay: 4, onComplete:abc});
                    })();
                }else{
                    if (step == 1){
                        step = 2;
                        documentNode.off('touchmove');
                        documentNode.off('touchend');
                        TweenLite.set(bg2, {display:'block', opacity:0});
                        TweenLite.to(bg2, 0.6, {opacity:1, delay: 0.5, onComplete:function(){
                            magicShow(txt_02, function(){
                                initG2();
                                step = 3;
                                tip.show();
                                TweenLite.set(tip, {display:'block',opacity:0, rotationX:45});
                                tl.seek(0).play();
                            });
                        }});
                        TweenLite.to(txt_01, 0.5, {opacity:0, delay: 1});
                    }
                }

            }

            function initG2(){
                var timer;
                var lastY;
                var txt = $('.txt');
                var me = this;
//                TweenLite.set(bg3, {display:'none',opacity: 0});

                function handle(event){
                    if (timer) return;
                    timer = setTimeout(function(){
                        var y = +event['accelerationIncludingGravity'].y;
                        if (lastY === undefined || Math.abs(y-lastY) >= 0.05){
                            var percent = Math.abs(y) / 8;
                            percent = Math.max(Math.min(percent, 1), 0);
                            var oy = (720 - wh) * percent;
                            TweenLite.to(bg2, 0.2, {y: oy,  ease:Linear.easeNone});
//                            TweenLite.to(bg3, 0.2, {opacity: percent});
                            lastY = y;
                            if (percent == 1 && step == 3){
//                                window.removeEventListener("devicemotion", handle, true);
                                TweenLite.delayedCall(1, function(){
                                    magicShow(txt_03, function(){
                                        step = 6;
                                    },2,2);
//                                    TweenLite.set(txt_04, {opacity:0, display: 'block'});
                                    TweenLite.to(txt_04, 2, {opacity:1});
                                    var obj1 = {
                                        x: 0
                                    };
                                    TweenLite.to(obj1, 2, {x:120, ease:Power1.easeInOut, onUpdate: function(){
//                                        txt_04.html(obj1.x.toFixed(0));
                                    },onComplete:function(){
                                        step = 6;
                                    }});
                                    step = 5;
                                    tl.stop();
                                    TweenLite.to(tip, 0.3, {opacity:0});
                                });
                                TweenLite.to(txt_02, 0.2, {opacity:0, delay: 2});
                                step = 4;
                            }
                        }
                        timer = 0;
                    }, 100);
                }
                window.addEventListener("devicemotion", handle, true);

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
        scripts.part4();
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
        location.href='./index.html#d=4';
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
            name: 'part4',
            imgArr: [
                'assets/demo2/part4/bg.jpg',
                'assets/demo2/part4/bg2.jpg',
                'assets/demo2/part4/bg3.jpg',
                'assets/demo2/part4/p1_1.png',
                'assets/demo2/part4/p1_2.png',
                'assets/demo2/part4/p1_3.png'
            ]
        });
        imgLoader.loadGroup('part4');

    }

    preload(function(){
        var doc = $(document);
        doc.off('touchstart');
        init();
    });


});