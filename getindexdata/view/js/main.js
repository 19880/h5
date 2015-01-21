!function ($) {
    var QPAGE = {
        CURKEY:0,
        FDATAKEYS:[],
        /**
         * 获取数组Keys
         * @param arr
         * @returns {Array}
         */
        'getArrayKeys': function( arr, hash ){
            var _this = this;
            var _keys = [];
            var i = 0;
            $.each(arr, function(key, value){
                _keys.push(key);

                // 初始hash当前位置
                if(hash == key){
                    _this.CURKEY = i;
                }
                i++;
            });
            return _keys;
        },
        /**
         * 获取真实地址
         * @param sUrl
         * @param fName
         * @returns {XML|string|void}
         */
        'getURL': function( sUrl, fName ){
            return sUrl.replace(/{{}}/g, encodeURI(fName));
        },
        /**
         * 初始化数据主键
         */
        'initFdataKeys' : function(){
            var _hash = window.location.hash.substr(1);
            this.FDATAKEYS = this.getArrayKeys(FDATA, _hash);
        },
        /**
         * 刷新内容
         */
        'refreshContent': function(){
            var _this =this;
            var _key = _this.CURKEY;
            var _fCode = _this.FDATAKEYS[_key];
            var _fName = FDATA[_fCode];
            window.location.hash = _fCode;
            //document.title = _fName;
            console.log(_this.getURL(FURL['360'], _fName));
            $('#contentFrame').attr('src', _this.getURL(FURL['360'], _fName));
            _this.refreshSelectList();
        },
        /**
         * 初始化下拉列表
         */
        'initSelectList': function(){
            var _this = this;
            var $selectList =  $('#selectList');
            $.each(_this.FDATAKEYS,function(key,value ){
                $selectList.append('<option value="'+ key +'">'+ FDATA[value] +'</option>');
            });
            _this.refreshSelectList();
            $selectList.change(function(){
                _this.CURKEY = this.value;
                _this.refreshContent();
            });
        },
        'refreshSelectList': function(){
            $('#selectList')[0].value = this.CURKEY;
        }
    }

    var wHeight = $(window).height();
    $('#contentFrame').height(wHeight-20);

    /**
     * 初始化iframe默认显示
     */
    QPAGE.initFdataKeys();
    QPAGE.initSelectList();
    QPAGE.refreshContent();

    /**
     * 上一条
     */
    $('#btnPrev').click(function(){
        if( QPAGE.CURKEY == 0 ) return;
        QPAGE.refreshContent(--QPAGE.CURKEY);
    });

    /**
     * 下一条
     */
    $('#btnNext').click(function(){
        if( QPAGE.CURKEY == QPAGE.FDATAKEYS.length ) return;
        QPAGE.refreshContent(++QPAGE.CURKEY);
    });

}(window.jQuery);