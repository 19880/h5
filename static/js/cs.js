$(function(){


    var CSTM = {
        title: '你和真爱的缘分指数是多少',
        desc:'您好，我们是XXX，我们正在进行一项关于大学生消费观的调查，想邀请您用几分钟时间帮忙填答这份问卷。',
        ans: {
            1: {
                topic: '你更喜欢下面哪种色调的灯光？',
                opts: [
                    {text: '冷色调', next: 2},
                    {text: '暖色调', next: 3},
                    {text: '不确定', next: 4}
                ]
            },
            2: {
                topic: '如果给你一张纸来打发时间，你会？',
                opts: [
                    {text: '冷色调', next: 5},
                    {text: '暖色调', next: 6},
                    {text: '不确定', next: 7}
                ]
            },
            3: {
                topic: '你认为香水能提升一个人的魅力吗？',
                opts: [
                    {text: '不确定', next: 8},
                    {text: '能', next: 9},
                    {text: '不能', next: 2}
                ]
            },
            4: {
                topic: '如果一觉醒来发现自己在冰天雪地里，你第一反应会是？',
                opts: [
                    {text: '有没有企鹅', next: 3},
                    {text: '好冷', next: 2},
                    {text: '这是做梦吧', next: 5}
                ]
            },
            5: {
                topic: '你赞成吃回头草吗？',
                opts: [
                    {text: '不赞成', next: 6},
                    {text: '不确定', next: 8},
                    {text: '赞成', next: 7}
                ]
            },
            6: {
                topic: '买房你很看重风水吗？',
                opts: [
                    {text: '很看重', next: 7},
                    {text: '一般', next: 9},
                    {text: '不看重', next: 8}
                ]
            },
            7: {
                topic: '你方向感强吗？',
                opts: [
                    {text: '一般', next: 9},
                    {text: '不强', next: 10},
                    {text: '很强', next: 8}
                ]
            },
            8: {
                topic: '你喜欢喊朋友到家里来玩吗？',
                opts: [
                    {text: '看情况', next: 11},
                    {text: '不喜欢', next: 10},
                    {text: '喜欢', next: 9}
                ]
            },
            9: {
                topic: '头发出油和头皮屑，你更讨厌哪一种？',
                opts: [
                    {text: '起头皮屑', next: 10},
                    {text: '一样讨厌', next: 11},
                    {text: '出油', next: 10}
                ]
            },
            10: {
                topic: '你喜欢自己给手机贴膜吗？',
                opts: [
                    {text: '不喜欢', next: 11},
                    {text: '喜欢', next: 12},
                    {text: '从不贴膜的', next: 11}
                ]
            },
            11: {
                topic: '你更喜欢看韩剧，台剧，还是大陆剧？',
                opts: [
                    {text: '台剧', next: 12},
                    {text: '韩剧', result: 2},
                    {text: '大陆剧', next: 12}
                ]
            },
            12: {
                topic: '你出国最想去？',
                opts: [
                    {text: '学习', result: 3},
                    {text: '吃美食', result: 2},
                    {text: '旅游', result: 1}
                ]
            }
        },
        result: {
            1: {
                topic: 'A 遇到真爱的缘分指数：★',
                desc: "你之所以一直没有遇到对的那个人，之所以努力付出却没有获得爱情的嘉奖，那只是因为时间未来，这不是安慰，是你应该对未来充满美好期待的理由。爱情没有忘记你，也没有忽略你，只是预备着给你一份惊喜。<br>也许等待的时间久了一点，但你一定要对自己提起信心，你与爱情的缘分真的很深，也正是因为太深了，所以直接过渡了那些到不了最后，不靠谱的爱恋，等待那个对的人出现，一起地久天长。爱情的缘总是要到那个时间点上才会让你与对的人相遇，现在的你心态放平和一点，你一定能经历爱情的美。"
            },
            2: {
                topic: 'B 遇到真爱的缘分指数：★★            ',
                desc: '你看到身边的朋友总是出双入对的秀甜蜜，你羡慕，你期待，你总在幻想自己也能在一个晴朗的午后邂逅一段唯美的爱情。但是，现实和理想的距离实在令你感到无力。你以为你大概与爱情无缘，但实际上是因为你把得不到的美好记得太深，也看得太重，所以就有意无意忽略了很近的温暖，就算有幻想也没有努力的去行动过。<br>爱情其实一直都在等你，但需要你自己去用心抓住机会。那些得不到的不一定真的是最美好的，就算是也与你没有太大的关系了，不如把握住现在和未来的爱情。'
            },
            3: {
                topic: 'C 遇到真爱的缘分指数：★★★',
                desc: '你对爱情的期望很高，但也不是一定追求一见钟情的浪漫，只是你与爱情的缘分本来就属于来去匆匆的类型，如果还不在对的时间，把握住对的人，下一站爱情大概就真的要等很久了。比起轰轰烈烈的一见倾心，你更喜欢从朋友到恋人的方式，但是你面对喜欢的朋友，也只会等待萌芽，却不知道因为你没勇气主动跨进一步就错过，爱情的缘极易因此越来越浅的。<br>爱情的机会不是越多就越好的，只是在遇见心动的人时，就要积极主动一点，要知道爱情属于过了这个村就没有这个店的。'
            }
        }
    };

    //console.log(_ans);

    /* 监听hash */
    window.addEventListener('hashchange',_init);

    /* 生成首页 */
    function _genStart(){
        $('#csTitle').html(CSTM.title);
        $('#csDesc').html(CSTM.desc);
    }

    /* 生成选项 */
    function _genAns(_id){
        //var _id = window.location.hash?GetURLParameter('next'):1;
        var _html = template('anshtml',CSTM.ans[_id]);
        //console.log(_html);
        $('#ans_inner').html(_html);
        $('#ans_inner>ul.unstyled>li>a').click(function(){
            var _this = this;
            $(_this).parent().addClass('checked');

            setTimeout(function(){
                window.location.hash = $(_this).attr('href');
            },500);

            return false;
        });
    }

    /* 生成结果 */
    function _genResult(_id){
        var _html = template('reshtml',CSTM.result[_id]);
        $('#result_inner').html(_html);
    }


    /* 获取hash变量 */
    /*function GetURLParameter(sParam) {
        var sPageURL = window.location.hash.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            *//*
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
            *//*
            return (sParameterName[0] == sParam)?sParameterName[1]:false;
        }
    }*/

    function GetURLParams() {
        var sPageURL = window.location.hash.substring(1);
        var sURLVariables = sPageURL.split('&');
        var sParams = [];
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            sParams[sParameterName[0]] = sParameterName[1];
        }
        return sParams;
    }

    /* 设置body的class */
    function _setBodyClass(_cls){
        $('body').attr('class', _cls);
    }

    /* 分享朋友圈提示 */
    var $share = $('#share');
    function showShare(){
        $share.show();
    }
    function hideShare(){
        $share.hide();
    }
    $share.click(hideShare);
    $('#shareBtn').click(showShare);

    /* 初始化 */
    function _init(){
        var _hVals = GetURLParams();
        if(_hVals['next']){
            _setBodyClass('p_ans');
            _genAns(_hVals['next']);
        }
        else if(_hVals['result']){
            _setBodyClass('p_result');
            _genResult(_hVals['result']);
            showShare();
        }
        else {
            _setBodyClass('p_start');
            _genStart();
        }
    }
    _init();
});