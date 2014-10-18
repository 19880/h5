$(function(){
    var _ans = {
        1:{
            topic:'吃西红柿炒蛋时，你常烦恼该先吃西红柿还是先吃蛋吗？',
            opts:[
                {text:'是',next:2},
                {text:'否',next:3}
            ]
        },
        2:{
            topic:'你敢不惧他人的耻笑，牵着驼鸟去逛长安街吗？',
            opts:[
                {text:'是',result:1},
                {text:'否',result:2}
            ]
        },
        3:{
            topic:'你经常为了睡觉时，手要摆在哪里而失眠吗？',
            opts:[
                {text:'是',result:3},
                {text:'否',result:4}
            ]
        }
    }

    var _result = {
        1:{
            topic:'A 你是个不折不扣的神经病',
            desc:'你达到了全国精神病的四级水平！即使你不承认也没有用，因为光凭你有这麽大的耐心做完这些题目就足以证明了。希望你好好地在工作上发挥你的耐心美德及铁齿性格，将来不排除有出人头地的可能。'
        },
        2:{
            topic:'B 你是一群神经病中比较善良的那一个',
            desc:'你也达到了全国精神病四级水平，但你通过 这个等级测试多少有点运气的成分！但并不因此代表你的症状就比别人轻。反而你要担心的是，你是这一群神经病中，最有可能受到其他人的影响而使症状再加重的人。希望你没事少跟别人说话。'
        },
        3:{
            topic:'C 你是一个性格豪迈的神经病',
            desc:'你达到了全国精神病德六级水平！虽然现在的症状满 严重的，不过请不要心灰意冷，只要多接触一些有趣的事物，你的精神状态将会因你的乐观性格而逐渐正常化，恢复到四级水平。但是，要改掉参与危险活动的习惯。'
        },
        4:{
            topic:'D 你是神经病中的神经病',
            desc:'简直病入膏肓了！你达到了全国精神病的八级水平！更可怕的是，你虽然口口声声地说："我绝不是神经病！" 可是你的潜意识却告诉自己：“我是神经病中的王！”你该接受治疗了。 '
        }
    };

    //console.log(_ans);

    /* 监听hash */
    window.addEventListener('hashchange',_init);



    /* 生成选项 */
    function _genAns(_id){
        //var _id = window.location.hash?GetURLParameter('next'):1;
        var _html = template('anshtml',_ans[_id]);
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
        var _html = template('reshtml',_result[_id]);
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
        }
    }
    _init();
});