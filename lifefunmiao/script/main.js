$(document).ready(function(){
    $("#close-btn").click(function(){
        /*
        if (myScroll != null) {
         //  myScroll.destroy();
         //  myScroll.disable();
         }
         */
        // $("#huise").css("display","none");
        $("#huise").css("display","none");
        $("#huise").css("visibility","hidden");
        $("#toptips").css("display","none");
        $("#righttips").css("display","none");
        clearpicnum();
        ghavezan=false;
    });
    $("#pinglun-btn").click(function(){
        if(!localStorage.picnum){
            TINY.box.show({html:"<div class='messege_content'>提交作品后<br>才可以吐槽哟</div>",boxid:"messege",animate:false});
        }else{
            TINY.box.show({html:"<div class='messege_content'>请尽情吐槽吧~</div> <input type='text' id='type-box' name='type-box' maxlength='140' style='width:80%;' />  <div style='margin: 7px;'><a onclick='Submitcomment()'>确定</a></div> ",width:150,height:100,boxid:"messege",animate:false});
        }
        // var comment =  $("#type-box").val();
        //alert(comment);
    });
    $("#zan-btn").click(function(){
        zan();
        // $("#bigpic").attr("src","http://nya.oss-cn-hangzhou.aliyuncs.com/nya/1.png");
    });
    $("#comment-btn").click(function(){
        Submitcomment();
        // $("#bigpic").attr("src","http://nya.oss-cn-hangzhou.aliyuncs.com/nya/1.png");
    });
    $("#searchconfirm").click(function(){
        TINY.box.show({html:"<div class='messege_content'>请输入作品编号!</div> <input  type='text' id='search-box' name='search-box' maxlength='10' style='width:80%;' />  <div style='margin: 7px;'><a onclick='searchpic()'>确定</a></div> ",width:150,height:100,boxid:"messege",animate:false,close:true});
    });
    var cuxi = 1;
    $("#yl_btn").click(function(){
        if(cuxi == 1){
            $("#yl_btn").attr("data-size","7");
            $("#yl_btn img").attr("src","imges/button01-2.gif");
            cuxi = 2;
        }else{
            $("#yl_btn").attr("data-size","15");
            $("#yl_btn img").attr("src","imges/button01-1.gif");
            cuxi = 1;
        }
    });
    // 先判断cookie看是否第一次访问，否则刷新
    /*
    var Sec = 3;
    var exp = new Date();
    exp.setTime(exp.getTime() + Sec*1000);

    if(!getCookie("indexfirst")||getCookie("indexfirst")=="0"){
        document.cookie="indexfirst=1;expires=" + exp.toGMTString();
        window.location.reload();
    }
    */
});

//点赞部分
var ghavezan=false;//全局点赞
function zan(){
    if(ghavezan)return;
    ghavezan=true;
    var file = gfile;
    $.ajax({
        type:"post",
        url:"zan.php",
        data:{
            picnum:file
        },
        success:function(msg){
            //接收PHP返回的信息,是否点赞成功,如果成功,前台JS进行特效转换来提醒用户点赞成功  如果未成功则提示原因等等
            if(msg=="已经赞过")
            {
                $.tipsBox({
                    obj: $(document.getElementById(file)),
                    str: "已赞过~",
                    startSize: "20px",  //动画开始的文字大小
                    endSize: "20px",    //动画结束的文字大小
                    interval: 1500,  //动画时间间隔
                    callback: function(){
                        //alert(5);
                    }
                });
            }else{
                //document.getElementById(file).innerHTML = parseInt(document.getElementById(file).innerHTML)+1;
                $("#"+file).text(parseInt($("#"+file).text())+1);
                $.tipsBox({
                    obj: $(document.getElementById(file)),
                    str: "+1",
                    callback: function(){
                        //alert(5);
                    }
                });
                // document.getElementById("zan"+file).innerHTML = parseInt(document.getElementById(document.getElementById("zan"+file).innerHTML).innerHTML)+1;
            }
        }
    });
}

//发表作品
function confirm(){
    if(pencount<3) TINY.box.show({html:"您画得太简单了啦！",boxid:"success",top:100,autohide:2,top:100});
    else TINY.box.show({html:"<div class='messege_content'>请留下您的大名!</div> <input type='text' id='name' name='name' maxlength='8' style='width:80%;' />  <div style='margin: 7px;'><a onclick='submit()'>确定</a></div> ",width:150,height:100,boxid:"messege",top:100});
}

function submit(){
    var name = document.getElementById('name').value;
    if(name==""){
        TINY.box.show({html:"对不起，姓名不能为空",boxid:"success",top:100,autohide:2,top:100});
    } else postdata(name);
}

function a(obj){
    var cc = document.getElementById("c");
    cc.setAttribute("data-color",obj.value);
    cc.style.cssText = "background-color:"+obj.value+";cursor:pointer";
    cc.click();
}

function b(obj){
    var ww = document.getElementById("w");
    ww.setAttribute("data-size",obj.value);
    ww.click();
}

function postdata(name){
    var pic = document.getElementById("colors_sketch");
    TINY.box.show({html:"<div style='text-align: center;' >正在提交图片<br>请耐心等待哟!<div>",animate:true,close:false,boxid:"success",top:100});
    setTimeout(function(){
        post('storage.php',name ,pic.toDataURL());
    }, 500);
}

function post(url, name ,picdate)
{
    $.ajax({
        type: "post",
        url: url,
        data:{
            name:name,
            picdata:picdate
        },
        success: function(result){
            if(result=="false"){
                TINY.box.show({html:"服务器异常，请稍后再试",animate:true,close:false,boxid:"success",top:100});
            } else if(result=="error1"){
                TINY.box.show({html:"不允许使用该名称",animate:true,close:false,boxid:"success",top:100});
            } else {
                var Day = 20;
                //  var Min = 60;
                var exp = new Date();
                exp.setTime(exp.getTime() + Day*24*60*60*1000);
                document.cookie="picnum="+result+";expires=" + exp.toGMTString();
                document.cookie="name="+name+";expires=" + exp.toGMTString();
                TINY.box.show({html:"<a href='piclist.php?picnum="+result+"' style='text-decoration:none; color: white;'>作品保存成功,<br>您的作品编号:"+result+"<br>2秒后跳转至作品！</a>",animate:true,close:false,boxid:"success",top:100,autohide:2,closejs:function(){gomypic()}});
            }
        },
        error: function(){
            TINY.box.show({html:"网络故障，请稍后再试",animate:true,close:false,boxid:"success",top:100});
        }
    });
}

function gomypic(){
    window.location.href="piclist.php?picnum="+getCookie("picnum");
}

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}

//点赞动画
(function($) {
    $.extend({
        tipsBox: function(options) {
            options = $.extend({
                obj: null,  //jq对象，要在那个html标签上显示
                str: "+1",  //字符串，要显示的内容;也可以传一段html，如: "<b style='font-family:Microsoft YaHei;'>+1</b>"
                startSize: "25px",  //动画开始的文字大小
                endSize: "25px",    //动画结束的文字大小
                interval: 1500,  //动画时间间隔
                color: "red",    //文字颜色
                callback: function() {}    //回调函数
            }, options);
            $("body").append("<span class='num'>"+ options.str +"</span>");
            var box = $(".num");
            var left = options.obj.offset().left + options.obj.width() / 2;
            var top = options.obj.offset().top - options.obj.height();
            box.css({
                "position": "absolute",
                "left": left + "px",
                "top": top + "px",
                "z-index": 9999,
                "font-size": options.startSize,
                "line-height": options.endSize,
                "color": options.color
            });
            box.animate({
                "font-size": options.endSize,
                "opacity": "0",
                "top": top - parseInt(options.endSize) + "px"
            }, options.interval , function() {
                box.remove();
                options.callback();
            });
        }
    });
})(jQuery);


/* 接口废弃
// 微信分享部分，需要分享的内容，请放到ready里
WeixinApi.ready(function(Api) {
    // 微信分享的数据，从页面的全局变量获取
    var wxData = {
        "appId": wxSharedData.appId,
        "imgUrl" : wxSharedData.imgUrl,
        "link" : wxSharedData.link,
        "desc" : wxSharedData.desc,
        "title" : wxSharedData.title
    };

    // 分享的回调
    var wxCallbacks = {
        // 收藏操作是否触发回调，默认是开启的
        favorite : false,

        // 用async模式，表示每次分享之前，都需要更新分享内容
        async:true,

        // 分享操作开始之前
        ready : function() {
            // 你可以在这里对分享的数据进行重组
            //alert("准备分享");
            //重载数据
            if(DataReload){
                //alert("重载数据中。。。");
                this.dataLoaded({
                    link : new_link,
                    title : new_title,
                    imgUrl : new_imgUrl
                });
                //alert(new_link);
                //alert(new_title);
                //alert(new_imgUrl);
                DataReload = false;//关闭数据重载
            }
        },
        // 分享被用户自动取消
        cancel : function(resp) {
            // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
            //alert("分享被取消，msg=" + resp.err_msg);
        },
        // 分享失败了
        fail : function(resp) {
            // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
            //alert("分享失败，msg=" + resp.err_msg);
        },
        // 分享成功
        confirm : function(resp) {
            // 分享成功了，我们是不是可以做一些分享统计呢？
            //alert("分享成功，msg=" + resp.err_msg);
            $.ajax({
                type: "post",
                url: "/function/sharedata.php",
                data: {
                    picnum: getCookie("picnum")>0?getCookie("picnum"):-1,
                    mode:resp.action=='shareTimeline'?1:2,
                    IndexOrPiclist:page_no,
                    targetpic:gfile
                }
            });
        },
        // 整个分享过程结束
        all : function(resp,shareTo) {
            // 如果你做的是一个鼓励用户进行分享的产品，在这里是不是可以给用户一些反馈了？
            //alert("分享" + (shareTo ? "到" + shareTo : "") + "结束，msg=" + resp.err_msg);
        }
    };

    // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
    Api.shareToFriend(wxData, wxCallbacks);

    // 点击分享到朋友圈，会执行下面这个代码
    Api.shareToTimeline(wxData, wxCallbacks);

    // 点击分享到腾讯微博，会执行下面这个代码
    Api.shareToWeibo(wxData, wxCallbacks);

    // iOS上，可以直接调用这个API进行分享，一句话搞定
    Api.generalShare(wxData,wxCallbacks);
});
 */