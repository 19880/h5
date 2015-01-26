/*!  08-12 15:38 */
function start() {
    function a() {
        return navigator.userAgent.toLowerCase().indexOf("micromessenger") >= 0
    }
    function b() {
        var a = $("#tip-fixed"),
            b = f.getWrapperTranslate("x");
        if (-30 > b) {
            var c = -b - 240;
            0 > c && (c = 0),
            a.css("webkitTransform", "translate3d(" + c + "px, 0px, 0px)")
        }
    }
    function c(a) {
        switch (a) {
        case 0:
            break;
        case 1:
            Charts.get("donut").init();
            break;
        case 2:
            var c = $(".pie");
            c.height(c.width());
            var d = Charts.get("pie");
            d.init("pie-1", [47, 73], "通信&<br>社交"),
            d.init("pie-2", [33, 44], "娱乐"),
            d.init("pie-3", [44, 24], "工具"),
            d.init("pie-4", [19, 17], "其他");
            break;
        case 3:
            Utils.once(function () {
                Charts.get("column").init(),
                f = new Swiper(".scroll-container2", {
                    scrollContainer: !0,
                    onTouchEnd: b
                }),
                f.wrapperTransitionEnd(b, !0),
                setTimeout(function () {
                    $(".scroll-container2 .swiper-wrapper").css({
                        webkitTransition: "3.5s"
                    }),
                    f.setWrapperTranslate(-520, 0, 0)
                },
                800)
            })();
            break;
        case 4:
            Charts.get("bubble").init();
            break;
        case 5:
            Charts.get("p-donut").init();
            break;
        case 6:
            Charts.get("round").init();
            break;
        case 7:
            i()
        }
    }
    function d(a) {
        var b = a.accelerationIncludingGravity;
        if (Math.abs(b.x) < 2 && Math.abs(b.y) < 2) return !1;
        var c = 3 * -(0 | b.x);
        s.css({
            webkitTransform: "translate3d(" + c + "px,0px,0px)"
        },
        0),
        t.css({
            webkitTransform: "translate3d(" + c + "px,0px,0px)"
        },
        0);
        var d = -25 + 10 * b.x / Math.PI;
        u.css({
            webkitTransform: "rotateY(" + d + "deg)"
        })
    }
    var e = $("body").height();
    458 > e && (e = 458);
    var f, g = ["<h1>智能机大盘：</h1>指智能机全体保有量中的日活跃（当天发生过至少一次联网行为的）设备数量", "<h1>日使用时长：</h1>指用户一天24小时中使用各类智能机应用的累计时长，不含短信和电话", "<h1>说明：</h1>娱乐类应用：包括游戏、视频、音乐和阅读类应用<br/>工具类应用：包括搜索、浏览器、地图导航、应用分发、办公/学习/生活工具、系统/安全/优化工具等", "<h1>说明：</h1>阿里：除阿里自有应用外，UC浏览器、高德地图等收购公司的应用也被纳入统计<br/>搜狐：腾讯入股搜狗后，搜狗继续作为搜狐的子公司独立运营，故仍将其纳入搜狐进行统计<br/>新浪：阿里入股新浪微博后，微博继续作为新浪子公司独立运营，故仍将其纳入新浪进行统计", "<h1>百度移动搜索MAU</h1>当月通过手机百度客户端或手机浏览器等方式使用过百度移动搜索的用户（包括Android、iPhone及其他系统平台）"],
        h = [!1, !1, !1, !1, !1, !1, !1, !1],
        i = function () {
        $(".p8-content .g").css({
            webkitTransform: "translate3d(0px, 0px, 0px)",
            opacity: 1
        })
    },
        j = (new Swiper("#pages", {
        mode: "vertical",
        resistance: "100%",
        slidesPerView: "auto",
        moveStartThreshold: 80,
        speed: 1e3,
        onSlideChangeEnd: function (a) {
            var b = a.activeIndex;
            return h[b] ? !1 : (h[b] = !0, void c(b))
        }
    }), $("#alert")),
        k = $(".msg-window", j);
    $(".swiper-slide").on("touchstart", ".toggle-tips", function () {
        var a = $(this),
            b = a.data("n"),
            c = g[b];
        j.find(".msg-content").html(c),
        j.show(),
        setTimeout(function () {
            k.css({
                webkitTransition: "500ms",
                webkitTransform: "translate3d(0px, -149px, 0px)",
                opacity: 1
            })
        },
        0)
    }),
    j.on("touchstart", ".btn-ok", function () {
        k.css({
            webkitTransition: "200ms",
            webkitTransform: "translate3d(0px, 0px, 0px)",
            opacity: 0
        }),
        setTimeout(function () {
            j.hide()
        },
        200)
    }),
    $(document).ready(function () {
        function a(a) {
            a.preventDefault()
        }
        document.addEventListener("touchstart", a, !1),
        document.addEventListener("touchmove", a, !1)
    }),
    $(".swiper-slide").height(e);
    var l = 40;
    $("#area").height(300).width(800),
    $(".area-grid").width(l),
    $(".area-container").width(document.body.clientWidth - l).css({
        overflow: "hidden",
        marginLeft: l + "px"
    });
    var m = 40;
    $("#column").height(270).width(800),
    $(".column-grid").width(m),
    $(".column-container").width(document.body.clientWidth - m).css({
        overflow: "hidden",
        marginLeft: m + "px"
    });
    for (var n = $(".title"), o = [439, 439, 439, 499, 439, 439, 439, 439], p = 0; 8 > p; p++) $(n[p]).css({
        marginBottom: (e - o[p]) / 2
    });
    var q = $("#cover");
    q.hammer().bind("panup", function () {
        q.css({
            webkitTransition: "600ms",
            webkitTransform: "translate3d(0px, " + -e + "px, 0px)",
            zoom: 1
        }),
        setTimeout(function () {
            Utils.once(function () {
                Charts.get("area").init();
                var a = new Swiper(".scroll-container", {
                    scrollContainer: !0,
                    scrollbar: {
                        container: ".scroll-scrollbar"
                    }
                });
                setTimeout(function () {
                    $(".scroll-container .swiper-wrapper").css({
                        webkitTransition: "2s"
                    }),
                    a.setWrapperTranslate(-200, 0, 0),
                    setTimeout(function () {
                        a.setWrapperTranslate(-520, 0, 0)
                    },
                    1500)
                },
                800)
            })()
        },
        500)
    }),
    $("#page1").hammer().bind("pandown", function () {
        q.css({
            webkitTransform: "translate3d(0px, 0px, 0px)"
        })
    });
    var r = $("#pages");
    $("#page8").hammer().bind("panup", function () {
        r.css({
            webkitTransition: "500ms",
            webkitTransform: "translate3d(0px, " + -e + "px, 0px)"
        })
    }),
    $("#bcover").hammer().bind("pandown", function () {
        r.css({
            webkitTransform: "translate3d(0px, 0px, 0px)"
        })
    });
    var s = $("#img1"),
        t = $("#img2"),
        u = $("#img3");
    window.DeviceMotionEvent && window.addEventListener("devicemotion", d, !1),
    a() || ($(".weixin").hide(), $(".book").css({
        display: "block",
        margin: "25px auto 25px"
    })),
    $("#pdf-link").hammer().on("tap", function () {
        var a = "http://mp.weixin.qq.com/s?__biz=MzA5NjQ4MzkyMw==&mid=200884994&idx=1&sn=266858ef60ab2a26484c67076511c109&3rd=MzA3MDU4NTYzMw==&scene=6#rd";
        window.open(a, "_blank")
    }),
    document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.on("menu:share:appmessage", function () {
            WeixinJSBridge.invoke("sendAppMessage", {
                img_width: 300,
                img_height: 300,
                img_url: "http://shushuo.baidu.com/act/webtrend/img/weixin_pic.jpg",
                link: "http://shushuo.baidu.com/act/webtrend/",
                desc: "2014Q2百度移动互联网发展趋势报告",
                title: "2014Q2百度移动互联网发展趋势报告"
            })
        }),
        WeixinJSBridge.on("menu:share:timeline", function () {
            WeixinJSBridge.invoke("shareTimeline", {
                img_width: 300,
                img_height: 300,
                img_url: "http://shushuo.baidu.com/act/webtrend/img/weixin_pic.jpg",
                link: "http://shushuo.baidu.com/act/webtrend/",
                desc: "2014Q2百度移动互联网发展趋势报告",
                title: "2014Q2百度移动互联网发展趋势报告"
            })
        })
    })
} !
function () {
    window.animFx = !1;
    var a = navigator.userAgent,
        b = a.match(/Android[^]+?;/g);
    if (a.indexOf("iPhone") >= 0) window.animFx = !0;
    else if (a.indexOf("Android") >= 0 && b) {
        var c = b[0].substring(8, b[0].length - 1),
            d = c.split("."),
            e = d[0] + "." + d[1];
        e >= 4 && (window.animFx = !0)
    }
}(),


function (a, b) {
    function c(a) {
        var b = a.length,
            c = kb.type(a);
        return kb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    function d(a) {
        var b = zb[a] = {};
        return kb.each(a.match(mb) || [], function (a, c) {
            b[c] = !0
        }),
        b
    }
    function e(a, c, d, e) {
        if (kb.acceptData(a)) {
            var f, g, h = kb.expando,
                i = a.nodeType,
                j = i ? kb.cache : a,
            k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = bb.pop() || kb.guid++:h),
            j[k] || (j[k] = i ? {} : {
                toJSON: kb.noop
            }),
            ("object" == typeof c || "function" == typeof c) && (e ? j[k] = kb.extend(j[k], c) : j[k].data = kb.extend(j[k].data, c)),
            g = j[k],
            e || (g.data || (g.data = {}), g = g.data),
            d !== b && (g[kb.camelCase(c)] = d),
            "string" == typeof c ? (f = g[c], null == f && (f = g[kb.camelCase(c)])) : f = g,
            f
        }
    }
    function f(a, b, c) {
        if (kb.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? kb.cache : a,
            i = f ? a[kb.expando] : kb.expando;
            if (g[i]) {
                if (b && (d = c ? g[i] : g[i].data)) {
                    kb.isArray(b) ? b = b.concat(kb.map(b, kb.camelCase)) : b in d ? b = [b] : (b = kb.camelCase(b), b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !h(d) : !kb.isEmptyObject(d)) return
                }(c || (delete g[i].data, h(g[i]))) && (f ? kb.cleanData([a], !0) : kb.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null)
            }
        }
    }
    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(Bb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Ab.test(d) ? kb.parseJSON(d) : d
                } catch(f) {}
                kb.data(a, c, d)
            } else d = b
        }
        return d
    }
    function h(a) {
        var b;
        for (b in a) if (("data" !== b || !kb.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }
    function i() {
        return !0
    }
    function j() {
        return !1
    }
    function k() {
        try {
            return Y.activeElement
        } catch(a) {}
    }
    function l(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    function m(a, b, c) {
        if (kb.isFunction(b)) return kb.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return kb.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Qb.test(b)) return kb.filter(b, a, c);
            b = kb.filter(b, a)
        }
        return kb.grep(a, function (a) {
            return kb.inArray(a, b) >= 0 !== c
        })
    }
    function n(a) {
        var b = Ub.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) for (; b.length;) c.createElement(b.pop());
        return c
    }
    function o(a, b) {
        return kb.nodeName(a, "table") && kb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function p(a) {
        return a.type = (null !== kb.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function q(a) {
        var b = ec.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function r(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) kb._data(c, "globalEval", !b || kb._data(b[d], "globalEval"))
    }
    function s(a, b) {
        if (1 === b.nodeType && kb.hasData(a)) {
            var c, d, e, f = kb._data(a),
                g = kb._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) kb.event.add(b, c, h[c][d])
            }
            g.data && (g.data = kb.extend({},
            g.data))
        }
    }
    function t(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !kb.support.noCloneEvent && b[kb.expando]) {
                e = kb._data(b);
                for (d in e.events) kb.removeEvent(b, d, e.handle);
                b.removeAttribute(kb.expando)
            }
            "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), kb.support.html5Clone && a.innerHTML && !kb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    function u(a, c) {
        var d, e, f = 0,
            g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
        if (!g) for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) ! c || kb.nodeName(e, c) ? g.push(e) : kb.merge(g, u(e, c));
        return c === b || c && kb.nodeName(a, c) ? kb.merge([a], g) : g
    }
    function v(a) {
        bc.test(a.type) && (a.defaultChecked = a.checked)
    }
    function w(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--;) if (b = yc[e] + c, b in a) return b;
        return d
    }
    function x(a, b) {
        return a = b || a,
        "none" === kb.css(a, "display") || !kb.contains(a.ownerDocument, a)
    }
    function y(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g],
        d.style && (f[g] = kb._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = kb._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), (c && "none" !== c || !e) && kb._data(d, "olddisplay", e ? c : kb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g],
        d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function z(a, b, c) {
        var d = rc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function A(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += kb.css(a, c + xc[f], !0, e)),
        d ? ("content" === c && (g -= kb.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= kb.css(a, "border" + xc[f] + "Width", !0, e))) : (g += kb.css(a, "padding" + xc[f], !0, e), "padding" !== c && (g += kb.css(a, "border" + xc[f] + "Width", !0, e)));
        return g
    }
    function B(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = kc(a),
        g = kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
            d = g && (kb.support.boxSizingReliable || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function C(a) {
        var b = Y,
            c = uc[a];
        return c || (c = D(a, b), "none" !== c && c || (jc = (jc || kb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = D(a, b), jc.detach()), uc[a] = c),
        c
    }
    function D(a, b) {
        var c = kb(b.createElement(a)).appendTo(b.body),
            d = kb.css(c[0], "display");
        return c.remove(),
        d
    }
    function E(a, b, c, d) {
        var e;
        if (kb.isArray(b)) kb.each(b, function (b, e) {
            c || Ac.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== kb.type(b)) d(a, b);
        else for (e in b) E(a + "[" + e + "]", b[e], c, d)
    }
    function F(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(mb) || [];
            if (kb.isFunction(c)) for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function G(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0,
            kb.each(a[i] || [], function (a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), f(k), !1)
            }),
            j
        }
        var g = {},
            h = a === Rc;
        return f(c.dataTypes[0]) || !g["*"] && f("*")
    }
    function H(a, c) {
        var d, e, f = kb.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && kb.extend(!0, a, d),
        a
    }
    function I(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes;
        "*" === j[0];) j.shift(),
        f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f) for (h in i) if (i[h] && i[h].test(f)) {
            j.unshift(h);
            break
        }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break
                }
                e || (e = h)
            }
            g = g || e
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b
    }
    function J(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b);
            else try {
                b = g(b)
            } catch(l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    function K() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function L() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    function M() {
        return setTimeout(function () {
            $c = b
        }),
        $c = kb.now()
    }
    function N(a, b, c) {
        for (var d, e = (ed[b] || []).concat(ed["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function O(a, b, c) {
        var d, e, f = 0,
            g = dd.length,
            h = kb.Deferred().always(function () {
            delete i.elem
        }),
            i = function () {
            if (e) return !1;
            for (var b = $c || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        },
            j = h.promise({
            elem: a,
            props: kb.extend({},
            b),
            opts: kb.extend(!0, {
                specialEasing: {}
            },
            c),
            originalProperties: b,
            originalOptions: c,
            startTime: $c || M(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = kb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function (b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }),
            k = j.props;
        for (P(k, j.opts.specialEasing); g > f; f++) if (d = dd[f].call(j, a, k, j.opts)) return d;
        return kb.map(k, N, j),
        kb.isFunction(j.opts.start) && j.opts.start.call(a, j),
        kb.fx.timer(kb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function P(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = kb.camelCase(c), e = b[d], f = a[c], kb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = kb.cssHooks[d], g && "expand" in g) {
            f = g.expand(f),
            delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function Q(a, b, c) {
        var d, e, f, g, h, i, j = this,
            k = {},
            l = a.style,
            m = a.nodeType && x(a),
            n = kb._data(a, "fxshow");
        c.queue || (h = kb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, j.always(function () {
            j.always(function () {
                h.unqueued--,
                kb.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === kb.css(a, "display") && "none" === kb.css(a, "float") && (kb.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")),
        c.overflow && (l.overflow = "hidden", kb.support.shrinkWrapBlocks || j.always(function () {
            l.overflow = c.overflow[0],
            l.overflowX = c.overflow[1],
            l.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], ad.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
            k[d] = n && n[d] || kb.style(a, d)
        }
        if (!kb.isEmptyObject(k)) {
            n ? "hidden" in n && (m = n.hidden) : n = kb._data(a, "fxshow", {}),
            f && (n.hidden = !m),
            m ? kb(a).show() : j.done(function () {
                kb(a).hide()
            }),
            j.done(function () {
                var b;
                kb._removeData(a, "fxshow");
                for (b in k) kb.style(a, b, k[b])
            });
            for (d in k) g = N(m ? n[d] : 0, d, j),
            d in n || (n[d] = g.start, m && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function R(a, b, c, d, e) {
        return new R.prototype.init(a, b, c, d, e)
    }
    function S(a, b) {
        var c, d = {
            height: a
        },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e],
        d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function T(a) {
        return kb.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var U, V, W = typeof b,
        X = a.location,
        Y = a.document,
        Z = Y.documentElement,
        $ = a.jQuery,
        _ = a.$,
        ab = {},
        bb = [],
        cb = "1.10.1",
        db = bb.concat,
        eb = bb.push,
        fb = bb.slice,
        gb = bb.indexOf,
        hb = ab.toString,
        ib = ab.hasOwnProperty,
        jb = cb.trim,
        kb = function (a, b) {
        return new kb.fn.init(a, b, V)
    },
        lb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        mb = /\S+/g,
        nb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ob = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        pb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        qb = /^[\],:{}\s]*$/,
        rb = /(?:^|:|,)(?:\s*\[)+/g,
        sb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        tb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ub = /^-ms-/,
        vb = /-([\da-z])/gi,
        wb = function (a, b) {
        return b.toUpperCase()
    },
        xb = function (a) {
        (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (yb(), kb.ready())
    },
        yb = function () {
        Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xb, !1), a.removeEventListener("load", xb, !1)) : (Y.detachEvent("onreadystatechange", xb), a.detachEvent("onload", xb))
    };
    kb.fn = kb.prototype = {
        jquery: cb,
        constructor: kb,
        init: function (a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ob.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof kb ? c[0] : c, kb.merge(this, kb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), pb.test(e[1]) && kb.isPlainObject(c)) for (e in c) kb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                if (f = Y.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1,
                    this[0] = f
                }
                return this.context = Y,
                this.selector = a,
                this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : kb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), kb.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return fb.call(this)
        },
        get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function (a) {
            var b = kb.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function (a, b) {
            return kb.each(this, a, b)
        },
        ready: function (a) {
            return kb.ready.promise().done(a),
            this
        },
        slice: function () {
            return this.pushStack(fb.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function (a) {
            return this.pushStack(kb.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: eb,
        sort: [].sort,
        splice: [].splice
    },
    kb.fn.init.prototype = kb.fn,
    kb.extend = kb.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {},
        i = 2), "object" == typeof h || kb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e],
        d = f[e],
        h !== d && (k && d && (kb.isPlainObject(d) || (c = kb.isArray(d))) ? (c ? (c = !1, g = a && kb.isArray(a) ? a : []) : g = a && kb.isPlainObject(a) ? a : {},
        h[e] = kb.extend(k, g, d)) : d !== b && (h[e] = d));
        return h
    },
    kb.extend({
        expando: "jQuery" + (cb + Math.random()).replace(/\D/g, ""),
        noConflict: function (b) {
            return a.$ === kb && (a.$ = _),
            b && a.jQuery === kb && (a.jQuery = $),
            kb
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? kb.readyWait++:kb.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? !--kb.readyWait : !kb.isReady) {
                if (!Y.body) return setTimeout(kb.ready);
                kb.isReady = !0,
                a !== !0 && --kb.readyWait > 0 || (U.resolveWith(Y, [kb]), kb.fn.trigger && kb(Y).trigger("ready").off("ready"))
            }
        },
        isFunction: function (a) {
            return "function" === kb.type(a)
        },
        isArray: Array.isArray ||
        function (a) {
            return "array" === kb.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ab[hb.call(a)] || "object" : typeof a
        },
        isPlainObject: function (a) {
            var c;
            if (!a || "object" !== kb.type(a) || a.nodeType || kb.isWindow(a)) return !1;
            try {
                if (a.constructor && !ib.call(a, "constructor") && !ib.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch(d) {
                return !1
            }
            if (kb.support.ownLast) for (c in a) return ib.call(a, c);
            for (c in a);
            return c === b || ib.call(a, c)
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function (a) {
            throw Error(a)
        },
        parseHTML: function (a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1),
            b = b || Y;
            var d = pb.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = kb.buildFragment([a], b, e), e && kb(e).remove(), kb.merge([], d.childNodes))
        },
        parseJSON: function (c) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = kb.trim(c), c && qb.test(c.replace(sb, "@").replace(tb, "]").replace(rb, ""))) ? Function("return " + c)() : (kb.error("Invalid JSON: " + c), b)
        },
        parseXML: function (c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch(f) {
                d = b
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || kb.error("Invalid XML: " + c),
            d
        },
        noop: function () {},
        globalEval: function (b) {
            b && kb.trim(b) && (a.execScript ||
            function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(ub, "ms-").replace(vb, wb)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else for (f in a) if (e = b.apply(a[f], d), e === !1) break
            } else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: jb && !jb.call("﻿ ") ?
        function (a) {
            return null == a ? "" : jb.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(nb, "")
        },
        makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? kb.merge(d, "string" == typeof a ? [a] : a) : eb.call(d, a)),
            d
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (gb) return gb.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if ("number" == typeof d) for (; d > f; f++) a[e++] = c[f];
            else for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e,
            a
        },
        grep: function (a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f),
            c !== d && e.push(a[f]);
            return e
        },
        map: function (a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h) for (; g > f; f++) e = b(a[f], f, d),
            null != e && (i[i.length] = e);
            else for (f in a) e = b(a[f], f, d),
            null != e && (i[i.length] = e);
            return db.apply([], i)
        },
        guid: 1,
        proxy: function (a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f),
            kb.isFunction(a) ? (d = fb.call(arguments, 2), e = function () {
                return a.apply(c || this, d.concat(fb.call(arguments)))
            },
            e.guid = a.guid = a.guid || kb.guid++, e) : b
        },
        access: function (a, c, d, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == d;
            if ("object" === kb.type(d)) {
                f = !0;
                for (i in d) kb.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, kb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function (a, b, c) {
                return k.call(kb(a), c)
            })), c)) for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: function () {
            return (new Date).getTime()
        },
        swap: function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f],
            a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }
    }),
    kb.ready.promise = function (b) {
        if (!U) if (U = kb.Deferred(), "complete" === Y.readyState) setTimeout(kb.ready);
        else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xb, !1),
        a.addEventListener("load", xb, !1);
        else {
            Y.attachEvent("onreadystatechange", xb),
            a.attachEvent("onload", xb);
            var c = !1;
            try {
                c = null == a.frameElement && Y.documentElement
            } catch(d) {}
            c && c.doScroll &&
            function e() {
                if (!kb.isReady) {
                    try {
                        c.doScroll("left")
                    } catch(a) {
                        return setTimeout(e, 50)
                    }
                    yb(),
                    kb.ready()
                }
            }()
        }
        return U.promise(b)
    },
    kb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        ab["[object " + b + "]"] = b.toLowerCase()
    }),
    V = kb(Y),


    function (a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n;
            if ((b ? b.ownerDocument || b : S) !== K && J(b), b = b || K, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (M && !d) {
                if (e = xb.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f),
                        c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && Q(b, f) && f.id === g) return c.push(f),
                    c
                } else {
                    if (e[2]) return eb.apply(c, b.getElementsByTagName(a)),
                    c;
                    if ((g = e[3]) && B.getElementsByClassName && b.getElementsByClassName) return eb.apply(c, b.getElementsByClassName(g)),
                    c
                }
                if (B.qsa && (!N || !N.test(a))) {
                    if (l = k = R, m = b, n = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = p(a), (k = b.getAttribute("id")) ? l = k.replace(Ab, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + q(j[i]);
                        m = rb.test(a) && b.parentNode || b,
                        n = j.join(",")
                    }
                    if (n) try {
                        return eb.apply(c, m.querySelectorAll(n)),
                        c
                    } catch(o) {} finally {
                        k || b.removeAttribute("id")
                    }
                }
            }
            return y(a.replace(ob, "$1"), b, c, d)
        }
        function d(a) {
            return wb.test(a + "")
        }
        function e() {
            function a(c, d) {
                return b.push(c += " ") > D.cacheLength && delete a[b.shift()],
                a[c] = d
            }
            var b = [];
            return a
        }
        function f(a) {
            return a[R] = !0,
            a
        }
        function g(a) {
            var b = K.createElement("div");
            try {
                return !!a(b)
            } catch(c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function h(a, b, c) {
            a = a.split("|");
            for (var d, e = a.length, f = c ? null : b; e--;)(d = D.attrHandle[a[e]]) && d !== b || (D.attrHandle[a[e]] = f)
        }
        function i(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : a[b] === !0 ? b.toLowerCase() : null
        }
        function j(a, b) {
            return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }
        function k(a) {
            return "input" === a.nodeName.toLowerCase() ? a.defaultValue : b
        }
        function l(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || _) - (~a.sourceIndex || _);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return -1;
            return a ? 1 : -1
        }
        function m(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function n(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function o(a) {
            return f(function (b) {
                return b = +b,
                f(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function p(a, b) {
            var d, e, f, g, h, i, j, k = W[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = D.preFilter; h;) {
                (!d || (e = pb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
                d = !1,
                (e = qb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ob, " ")
                }), h = h.slice(d.length));
                for (g in D.filter) ! (e = vb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return b ? h.length : h ? c.error(a) : W(a, i).slice(0)
        }
        function q(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function r(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = U++;
            return b.first ?
            function (b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = T + " " + f;
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else for (; b = b[d];) if (1 === b.nodeType || e) if (j = b[R] || (b[R] = {}), (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === C) return h === !0
                } else if (i = j[d] = [k], i[1] = a(b, c, g) || C, i[1] === !0) return !0
            }
        }
        function s(a) {
            return a.length > 1 ?
            function (b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }
        function t(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function u(a, b, c, d, e, g) {
            return d && !d[R] && (d = u(d)),
            e && !e[R] && (e = u(e, g)),
            f(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || x(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : t(p, m, a, h, i),
                r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = t(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k]) && (j = e ? gb.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = t(r === g ? r.splice(o, r.length) : r),
                e ? e(null, g, r, i) : eb.apply(g, r)
            })
        }
        function v(a) {
            for (var b, c, d, e = a.length, f = D.relative[a[0].type], g = f || D.relative[" "], h = f ? 1 : 0, i = r(function (a) {
                return a === b
            },
            g, !0), j = r(function (a) {
                return gb.call(b, a) > -1
            },
            g, !0), k = [function (a, c, d) {
                return !f && (d || c !== H) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
            }]; e > h; h++) if (c = D.relative[a[h].type]) k = [r(s(k), c)];
            else {
                if (c = D.filter[a[h].type].apply(null, a[h].matches), c[R]) {
                    for (d = ++h; e > d && !D.relative[a[d].type]; d++);
                    return u(h > 1 && s(k), h > 1 && q(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ob, "$1"), c, d > h && v(a.slice(h, d)), e > d && v(a = a.slice(d)), e > d && q(a))
                }
                k.push(c)
            }
            return s(k)
        }
        function w(a, b) {
            var d = 0,
                e = b.length > 0,
                g = a.length > 0,
                h = function (f, h, i, j, k) {
                var l, m, n, o = [],
                    p = 0,
                    q = "0",
                    r = f && [],
                    s = null != k,
                    u = H,
                    v = f || g && D.find.TAG("*", k && h.parentNode || h),
                    w = T += null == u ? 1 : Math.random() || .1;
                for (s && (H = h !== K && h, C = d); null != (l = v[q]); q++) {
                    if (g && l) {
                        for (m = 0; n = a[m++];) if (n(l, h, i)) {
                            j.push(l);
                            break
                        }
                        s && (T = w, C = ++d)
                    }
                    e && ((l = !n && l) && p--, f && r.push(l))
                }
                if (p += q, e && q !== p) {
                    for (m = 0; n = b[m++];) n(r, o, h, i);
                    if (f) {
                        if (p > 0) for (; q--;) r[q] || o[q] || (o[q] = cb.call(j));
                        o = t(o)
                    }
                    eb.apply(j, o),
                    s && !f && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                }
                return s && (T = w, H = u),
                r
            };
            return e ? f(h) : h
        }
        function x(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d
        }
        function y(a, b, c, d) {
            var e, f, g, h, i, j = p(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && B.getById && 9 === b.nodeType && M && D.relative[f[1].type]) {
                    if (b = (D.find.ID(g.matches[0].replace(Bb, Cb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = vb.needsContext.test(a) ? 0 : f.length; e--&&(g = f[e], !D.relative[h = g.type]);) if ((i = D.find[h]) && (d = i(g.matches[0].replace(Bb, Cb), rb.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && q(f), !a) return eb.apply(c, d),
                    c;
                    break
                }
            }
            return G(a, j)(d, b, !M, c, rb.test(a)),
            c
        }
        function z() {}
        var A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R = "sizzle" + -new Date,
            S = a.document,
            T = 0,
            U = 0,
            V = e(),
            W = e(),
            X = e(),
            Y = !1,
            Z = function () {
            return 0
        },
            $ = typeof b,
            _ = 1 << 31,
            ab = {}.hasOwnProperty,
            bb = [],
            cb = bb.pop,
            db = bb.push,
            eb = bb.push,
            fb = bb.slice,
            gb = bb.indexOf ||
        function (a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
            return -1
        },
            hb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ib = "[\\x20\\t\\r\\n\\f]",
            jb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            lb = jb.replace("w", "w#"),
            mb = "\\[" + ib + "*(" + jb + ")" + ib + "*(?:([*^$|!~]?=)" + ib + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + lb + ")|)|)" + ib + "*\\]",
            nb = ":(" + jb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + mb.replace(3, 8) + ")*)|.*)\\)|)",
            ob = RegExp("^" + ib + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ib + "+$", "g"),
            pb = RegExp("^" + ib + "*," + ib + "*"),
            qb = RegExp("^" + ib + "*([>+~]|" + ib + ")" + ib + "*"),
            rb = RegExp(ib + "*[+~]"),
            sb = RegExp("=" + ib + "*([^\\]'\"]*)" + ib + "*\\]", "g"),
            tb = RegExp(nb),
            ub = RegExp("^" + lb + "$"),
            vb = {
            ID: RegExp("^#(" + jb + ")"),
            CLASS: RegExp("^\\.(" + jb + ")"),
            TAG: RegExp("^(" + jb.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + mb),
            PSEUDO: RegExp("^" + nb),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ib + "*(even|odd|(([+-]|)(\\d*)n|)" + ib + "*(?:([+-]|)" + ib + "*(\\d+)|))" + ib + "*\\)|)", "i"),
            bool: RegExp("^(?:" + hb + ")$", "i"),
            needsContext: RegExp("^" + ib + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ib + "*((?:-\\d)?\\d*)" + ib + "*\\)|)(?=[^-]|$)", "i")
        },
            wb = /^[^{]+\{\s*\[native \w/,
            xb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yb = /^(?:input|select|textarea|button)$/i,
            zb = /^h\d$/i,
            Ab = /'|\\/g,
            Bb = RegExp("\\\\([\\da-f]{1,6}" + ib + "?|(" + ib + ")|.)", "ig"),
            Cb = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d)
        };
        try {
            eb.apply(bb = fb.call(S.childNodes), S.childNodes),
            bb[S.childNodes.length].nodeType
        } catch(Db) {
            eb = {
                apply: bb.length ?
                function (a, b) {
                    db.apply(a, fb.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        F = c.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        },
        B = c.support = {},
        J = c.setDocument = function (a) {
            var c = a ? a.ownerDocument || a : S,
            e = c.parentWindow;
            return c !== K && 9 === c.nodeType && c.documentElement ? (K = c, L = c.documentElement, M = !F(c), e && e.frameElement && e.attachEvent("onbeforeunload", function () {
                J()
            }), B.attributes = g(function (a) {
                return a.innerHTML = "<a href='#'></a>",
                h("type|href|height|width", j, "#" === a.firstChild.getAttribute("href")),
                h(hb, i, null == a.getAttribute("disabled")),
                a.className = "i",
                !a.getAttribute("className")
            }), B.input = g(function (a) {
                return a.innerHTML = "<input>",
                a.firstChild.setAttribute("value", ""),
                "" === a.firstChild.getAttribute("value")
            }), h("value", k, B.attributes && B.input), B.getElementsByTagName = g(function (a) {
                return a.appendChild(c.createComment("")),
                !a.getElementsByTagName("*").length
            }), B.getElementsByClassName = g(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }), B.getById = g(function (a) {
                return L.appendChild(a).id = R,
                !c.getElementsByName || !c.getElementsByName(R).length
            }), B.getById ? (D.find.ID = function (a, b) {
                if (typeof b.getElementById !== $ && M) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            },
            D.filter.ID = function (a) {
                var b = a.replace(Bb, Cb);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete D.find.ID, D.filter.ID = function (a) {
                var b = a.replace(Bb, Cb);
                return function (a) {
                    var c = typeof a.getAttributeNode !== $ && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), D.find.TAG = B.getElementsByTagName ?
            function (a, c) {
                return typeof c.getElementsByTagName !== $ ? c.getElementsByTagName(a) : b
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            },
            D.find.CLASS = B.getElementsByClassName &&
            function (a, c) {
                return typeof c.getElementsByClassName !== $ && M ? c.getElementsByClassName(a) : b
            },
            O = [], N = [], (B.qsa = d(c.querySelectorAll)) && (g(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>",
                a.querySelectorAll("[selected]").length || N.push("\\[" + ib + "*(?:value|" + hb + ")"),
                a.querySelectorAll(":checked").length || N.push(":checked")
            }), g(function (a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("t", ""),
                a.querySelectorAll("[t^='']").length && N.push("[*^$]=" + ib + "*(?:''|\"\")"),
                a.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                N.push(",.*:")
            })), (B.matchesSelector = d(P = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && g(function (a) {
                B.disconnectedMatch = P.call(a, "div"),
                P.call(a, "[s!='']:x"),
                O.push("!=", nb)
            }), N = N.length && RegExp(N.join("|")), O = O.length && RegExp(O.join("|")), Q = d(L.contains) || L.compareDocumentPosition ?
            function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return !0;
                return !1
            },
            B.sortDetached = g(function (a) {
                return 1 & a.compareDocumentPosition(c.createElement("div"))
            }), Z = L.compareDocumentPosition ?
            function (a, b) {
                if (a === b) return Y = !0,
                0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return d ? 1 & d || !B.sortDetached && b.compareDocumentPosition(a) === d ? a === c || Q(S, a) ? -1 : b === c || Q(S, b) ? 1 : I ? gb.call(I, a) - gb.call(I, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function (a, b) {
                var d, e = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (a === b) return Y = !0,
                0;
                if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : I ? gb.call(I, a) - gb.call(I, b) : 0;
                if (f === g) return l(a, b);
                for (d = a; d = d.parentNode;) h.unshift(d);
                for (d = b; d = d.parentNode;) i.unshift(d);
                for (; h[e] === i[e];) e++;
                return e ? l(h[e], i[e]) : h[e] === S ? -1 : i[e] === S ? 1 : 0
            },
            c) : K
        },
        c.matches = function (a, b) {
            return c(a, null, null, b)
        },
        c.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== K && J(a), b = b.replace(sb, "='$1']"), !(!B.matchesSelector || !M || O && O.test(b) || N && N.test(b))) try {
                var d = P.call(a, b);
                if (d || B.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch(e) {}
            return c(b, K, null, [a]).length > 0
        },
        c.contains = function (a, b) {
            return (a.ownerDocument || a) !== K && J(a),
            Q(a, b)
        },
        c.attr = function (a, c) {
            (a.ownerDocument || a) !== K && J(a);
            var d = D.attrHandle[c.toLowerCase()],
                e = d && ab.call(D.attrHandle, c.toLowerCase()) ? d(a, c, !M) : b;
            return e === b ? B.attributes || !M ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
        },
        c.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " + a)
        },
        c.uniqueSort = function (a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (Y = !B.detectDuplicates, I = !B.sortStable && a.slice(0), a.sort(Z), Y) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return a
        },
        E = c.getText = function (a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += E(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d]; d++) c += E(b);
            return c
        },
        D = c.selectors = {
            cacheLength: 50,
            createPseudo: f,
            match: vb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(Bb, Cb),
                    a[3] = (a[4] || a[5] || "").replace(Bb, Cb),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]),
                    a
                },
                PSEUDO: function (a) {
                    var c, d = !a[5] && a[2];
                    return vb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && tb.test(d) && (c = p(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(Bb, Cb).toLowerCase();
                    return "*" === a ?
                    function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = V[a + " "];
                    return b || (b = RegExp("(^|" + ib + ")" + a + "(" + ib + "|$)")) && V(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== $ && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, d) {
                    return function (e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ?
                    function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[R] || (q[R] = {}), j = k[a] || [], n = j[0] === T && j[1], m = j[0] === T && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [T, n, m];
                                    break
                                }
                            } else if (s && (j = (b[R] || (b[R] = {}))[a]) && j[0] === T) m = j[1];
                            else for (;
                            (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[R] || (l[R] = {}))[a] = [T, m]), l !== b)););
                            return m -= e,
                            m === d || 0 === m % d && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var d, e = D.pseudos[a] || D.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[R] ? e(b) : e.length > 1 ? (d = [a, a, "", b], D.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function (a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = gb.call(a, f[g]),
                        a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, d)
                    }) : e
                }
            },
            pseudos: {
                not: f(function (a) {
                    var b = [],
                        c = [],
                        d = G(a.replace(ob, "$1"));
                    return d[R] ? f(function (a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: f(function (a) {
                    return function (b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: f(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || E(b)).indexOf(a) > -1
                    }
                }),
                lang: f(function (a) {
                    return ub.test(a || "") || c.error("unsupported lang: " + a),
                    a = a.replace(Bb, Cb).toLowerCase(),


                    function (b) {
                        var c;
                        do
                        if (c = M ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === L
                },
                focus: function (a) {
                    return a === K.activeElement && (!K.hasFocus || K.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0
                },
                parent: function (a) {
                    return !D.pseudos.empty(a)
                },
                header: function (a) {
                    return zb.test(a.nodeName)
                },
                input: function (a) {
                    return yb.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: o(function () {
                    return [0]
                }),
                last: o(function (a, b) {
                    return [b - 1]
                }),
                eq: o(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: o(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: o(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: o(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: o(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; b > ++d;) a.push(d);
                    return a
                })
            }
        };
        for (A in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) D.pseudos[A] = m(A);
        for (A in {
            submit: !0,
            reset: !0
        }) D.pseudos[A] = n(A);
        G = c.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = X[a + " "];
            if (!f) {
                for (b || (b = p(a)), c = b.length; c--;) f = v(b[c]),
                f[R] ? d.push(f) : e.push(f);
                f = X(a, w(e, d))
            }
            return f
        },
        D.pseudos.nth = D.pseudos.eq,
        z.prototype = D.filters = D.pseudos,
        D.setFilters = new z,
        B.sortStable = R.split("").sort(Z).join("") === R,
        J(),
        [0, 0].sort(Z),
        B.detectDuplicates = Y,
        kb.find = c,
        kb.expr = c.selectors,
        kb.expr[":"] = kb.expr.pseudos,
        kb.unique = c.uniqueSort,
        kb.text = c.getText,
        kb.isXMLDoc = c.isXML,
        kb.contains = c.contains
    }(a);
    var zb = {};
    kb.Callbacks = function (a) {
        a = "string" == typeof a ? zb[a] || d(a) : kb.extend({},
        a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function (b) {
            for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++) if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                e = !1;
                break
            }
            c = !1,
            j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
        },
            m = {
            add: function () {
                if (j) {
                    var b = j.length; !
                    function d(b) {
                        kb.each(b, function (b, c) {
                            var e = kb.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                        })
                    }(arguments),
                    c ? g = j.length : e && (i = b, l(e))
                }
                return this
            },
            remove: function () {
                return j && kb.each(arguments, function (a, b) {
                    for (var d;
                    (d = kb.inArray(b, j, d)) > -1;) j.splice(d, 1),
                    c && (g >= d && g--, h >= d && h--)
                }),
                this
            },
            has: function (a) {
                return a ? kb.inArray(a, j) > -1 : !(!j || !j.length)
            },
            empty: function () {
                return j = [],
                g = 0,
                this
            },
            disable: function () {
                return j = k = e = b,
                this
            },
            disabled: function () {
                return !j
            },
            lock: function () {
                return k = b,
                e || m.disable(),
                this
            },
            locked: function () {
                return !k
            },
            fireWith: function (a, b) {
                return b = b || [],
                b = [a, b.slice ? b.slice() : b],
                !j || f && !k || (c ? k.push(b) : l(b)),
                this
            },
            fire: function () {
                return m.fireWith(this, arguments),
                this
            },
            fired: function () {
                return !!f
            }
        };
        return m
    },
    kb.extend({
        Deferred: function (a) {
            var b = [
                ["resolve", "done", kb.Callbacks("once memory"), "resolved"],
                ["reject", "fail", kb.Callbacks("once memory"), "rejected"],
                ["notify", "progress", kb.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                state: function () {
                    return c
                },
                always: function () {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function () {
                    var a = arguments;
                    return kb.Deferred(function (c) {
                        kb.each(b, function (b, f) {
                            var g = f[0],
                                h = kb.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = h && h.apply(this, arguments);
                                a && kb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function (a) {
                    return null != a ? kb.extend(a, d) : d
                }
            },
                e = {};
            return d.pipe = d.then,
            kb.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add,
                h && g.add(function () {
                    c = h
                },
                b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                },
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function (a) {
            var b, c, d, e = 0,
                f = fb.call(arguments),
                g = f.length,
                h = 1 !== g || a && kb.isFunction(a.promise) ? g : 0,
            i = 1 === h ? a : kb.Deferred(),
            j = function (a, c, d) {
                return function (e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? fb.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1) for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && kb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    }),
    kb.support = function (b) {
        var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
        f = Y.createElement("select"),
        h = f.appendChild(Y.createElement("option")),
        e = l.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px;float:left;opacity:.5",
        b.getSetAttribute = "t" !== l.className,
        b.leadingWhitespace = 3 === l.firstChild.nodeType,
        b.tbody = !l.getElementsByTagName("tbody").length,
        b.htmlSerialize = !!l.getElementsByTagName("link").length,
        b.style = /top/.test(d.getAttribute("style")),
        b.hrefNormalized = "/a" === d.getAttribute("href"),
        b.opacity = /^0.5/.test(d.style.opacity),
        b.cssFloat = !!d.style.cssFloat,
        b.checkOn = !!e.value,
        b.optSelected = h.selected,
        b.enctype = !!Y.createElement("form").enctype,
        b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
        b.inlineBlockNeedsLayout = !1,
        b.shrinkWrapBlocks = !1,
        b.pixelPosition = !1,
        b.deleteExpando = !0,
        b.noCloneEvent = !0,
        b.reliableMarginRight = !0,
        b.boxSizingReliable = !0,
        e.checked = !0,
        b.noCloneChecked = e.cloneNode(!0).checked,
        f.disabled = !0,
        b.optDisabled = !h.disabled;
        try {
            delete l.test
        } catch(m) {
            b.deleteExpando = !1
        }
        e = Y.createElement("input"),
        e.setAttribute("value", ""),
        b.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        b.radioValue = "t" === e.value,
        e.setAttribute("checked", "t"),
        e.setAttribute("name", "t"),
        g = Y.createDocumentFragment(),
        g.appendChild(e),
        b.appendChecked = e.checked,
        b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked,
        l.attachEvent && (l.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), l.cloneNode(!0).click());
        for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l.setAttribute(i = "on" + k, "t"),
        b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        b.clearCloneStyle = "content-box" === l.style.backgroundClip;
        for (k in kb(b)) break;
        return b.ownLast = "0" !== k,
        kb(function () {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                g = Y.getElementsByTagName("body")[0];
            g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", kb.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {},


            function () {
                b.boxSizing = 4 === l.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
        }),
        c = f = g = h = d = e = null,
        b
    }({});
    var Ab = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Bb = /([A-Z])/g;
    kb.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? kb.cache[a[kb.expando]] : a[kb.expando],
            !!a && !h(a)
        },
        data: function (a, b, c) {
            return e(a, b, c)
        },
        removeData: function (a, b) {
            return f(a, b)
        },
        _data: function (a, b, c) {
            return e(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return f(a, b, !0)
        },
        acceptData: function (a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && kb.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }),
    kb.fn.extend({
        data: function (a, c) {
            var d, e, f = null,
                h = 0,
                i = this[0];
            if (a === b) {
                if (this.length && (f = kb.data(i), 1 === i.nodeType && !kb._data(i, "parsedAttrs"))) {
                    for (d = i.attributes; d.length > h; h++) e = d[h].name,
                    0 === e.indexOf("data-") && (e = kb.camelCase(e.slice(5)), g(i, e, f[e]));
                    kb._data(i, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function () {
                kb.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                kb.data(this, a, c)
            }) : i ? g(i, a, kb.data(i, a)) : null
        },
        removeData: function (a) {
            return this.each(function () {
                kb.removeData(this, a)
            })
        }
    }),
    kb.extend({
        queue: function (a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = kb._data(a, c), d && (!e || kb.isArray(d) ? e = kb._data(a, c, kb.makeArray(d)) : e.push(d)), e || []) : b
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = kb.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = kb._queueHooks(a, b),
                g = function () {
                kb.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--),
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return kb._data(a, c) || kb._data(a, c, {
                empty: kb.Callbacks("once memory").add(function () {
                    kb._removeData(a, b + "queue"),
                    kb._removeData(a, c)
                })
            })
        }
    }),
    kb.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--),
            d > arguments.length ? kb.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = kb.queue(this, a, c);
                kb._queueHooks(this, a),
                "fx" === a && "inprogress" !== b[0] && kb.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                kb.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            return a = kb.fx ? kb.fx.speeds[a] || a : a,
            b = b || "fx",
            this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            var d, e = 1,
                f = kb.Deferred(),
                g = this,
                h = this.length,
                i = function () {
                --e || f.resolveWith(g, [g])
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = kb._data(g[h], a + "queueHooks"),
            d && d.empty && (e++, d.empty.add(i));
            return i(),
            f.promise(c)
        }
    });
    var Cb, Db, Eb = /[\t\r\n\f]/g,
        Fb = /\r/g,
        Gb = /^(?:input|select|textarea|button|object)$/i,
        Hb = /^(?:a|area)$/i,
        Ib = /^(?:checked|selected)$/i,
        Jb = kb.support.getSetAttribute,
        Kb = kb.support.input;
    kb.fn.extend({
        attr: function (a, b) {
            return kb.access(this, kb.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                kb.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return kb.access(this, kb.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = kb.propFix[a] || a,
            this.each(function () {
                try {
                    this[a] = b,
                    delete this[a]
                } catch(c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function (b) {
                kb(this).addClass(a.call(this, b, this.className))
            });
            if (i) for (b = (a || "").match(mb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
                for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                c.className = kb.trim(d)
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function (b) {
                kb(this).removeClass(a.call(this, b, this.className))
            });
            if (i) for (b = (a || "").match(mb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
                for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                c.className = a ? kb.trim(d) : ""
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return this.each(kb.isFunction(a) ?
            function (c) {
                kb(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) for (var e, f = 0, g = kb(this), h = b, i = a.match(mb) || []; e = i[f++];) h = d ? h : !g.hasClass(e),
                g[h ? "addClass" : "removeClass"](e);
                else(c === W || "boolean" === c) && (this.className && kb._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : kb._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = kb.isFunction(a), this.each(function (c) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, c, kb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : kb.isArray(f) && (f = kb.map(f, function (a) {
                    return null == a ? "" : a + ""
                })), d = kb.valHooks[this.type] || kb.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
            })) : f ? (d = kb.valHooks[f.type] || kb.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Fb, "") : null == c ? "" : c)) : void 0
        }
    }),
    kb.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = kb.find.attr(a, "value");
                    return null != b ? b : a.text
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (kb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && kb.nodeName(c.parentNode, "optgroup"))) {
                        if (b = kb(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                },
                set: function (a, b) {
                    for (var c, d, e = a.options, f = kb.makeArray(b), g = e.length; g--;) d = e[g],
                    (d.selected = kb.inArray(kb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        },
        attr: function (a, c, d) {
            var e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === W ? kb.prop(a, c, d) : (1 === g && kb.isXMLDoc(a) || (c = c.toLowerCase(), e = kb.attrHooks[c] || (kb.expr.match.bool.test(c) ? Db : Cb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = kb.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : (kb.removeAttr(a, c), b)) : void 0
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(mb);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = kb.propFix[c] || c,
            kb.expr.match.bool.test(c) ? Kb && Jb || !Ib.test(c) ? a[d] = !1 : a[kb.camelCase("default-" + c)] = a[d] = !1 : kb.attr(a, c, ""),
            a.removeAttribute(Jb ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!kb.support.radioValue && "radio" === b && kb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !kb.isXMLDoc(a), g && (c = kb.propFix[c] || c, f = kb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = kb.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Gb.test(a.nodeName) || Hb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    Db = {
        set: function (a, b, c) {
            return b === !1 ? kb.removeAttr(a, c) : Kb && Jb || !Ib.test(c) ? a.setAttribute(!Jb && kb.propFix[c] || c, c) : a[kb.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    kb.each(kb.expr.match.bool.source.match(/\w+/g), function (a, c) {
        var d = kb.expr.attrHandle[c] || kb.find.attr;
        kb.expr.attrHandle[c] = Kb && Jb || !Ib.test(c) ?
        function (a, c, e) {
            var f = kb.expr.attrHandle[c],
                g = e ? b : (kb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return kb.expr.attrHandle[c] = f,
            g
        } : function (a, c, d) {
            return d ? b : a[kb.camelCase("default-" + c)] ? c.toLowerCase() : null
        }
    }),
    Kb && Jb || (kb.attrHooks.value = {
        set: function (a, c, d) {
            return kb.nodeName(a, "input") ? (a.defaultValue = c, b) : Cb && Cb.set(a, c, d)
        }
    }),
    Jb || (Cb = {
        set: function (a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)),
            e.value = c += "",
            "value" === d || c === a.getAttribute(d) ? c : b
        }
    },
    kb.expr.attrHandle.id = kb.expr.attrHandle.name = kb.expr.attrHandle.coords = function (a, c, d) {
        var e;
        return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null
    },
    kb.valHooks.button = {
        get: function (a, c) {
            var d = a.getAttributeNode(c);
            return d && d.specified ? d.value : b
        },
        set: Cb.set
    },
    kb.attrHooks.contenteditable = {
        set: function (a, b, c) {
            Cb.set(a, "" === b ? !1 : b, c)
        }
    },
    kb.each(["width", "height"], function (a, c) {
        kb.attrHooks[c] = {
            set: function (a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b
            }
        }
    })),
    kb.support.hrefNormalized || kb.each(["href", "src"], function (a, b) {
        kb.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    kb.support.style || (kb.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || b
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    }),
    kb.support.optSelected || (kb.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    kb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        kb.propFix[this.toLowerCase()] = this
    }),
    kb.support.enctype || (kb.propFix.enctype = "encoding"),
    kb.each(["radio", "checkbox"], function () {
        kb.valHooks[this] = {
            set: function (a, c) {
                return kb.isArray(c) ? a.checked = kb.inArray(kb(a).val(), c) >= 0 : b
            }
        },
        kb.support.checkOn || (kb.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Lb = /^(?:input|select|textarea)$/i,
        Mb = /^key/,
        Nb = /^(?:mouse|contextmenu)|click/,
        Ob = /^(?:focusinfocus|focusoutblur)$/,
        Pb = /^([^.]*)(?:\.(.+)|)$/;
    kb.event = {
        global: {},
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = kb._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = kb.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function (a) {
                    return typeof kb === W || a && kb.event.triggered === a.type ? b : kb.event.dispatch.apply(l.elem, arguments)
                },
                l.elem = a), c = (c || "").match(mb) || [""], i = c.length; i--;) g = Pb.exec(c[i]) || [],
                o = q = g[1],
                p = (g[2] || "").split(".").sort(),
                o && (k = kb.event.special[o] || {},
                o = (f ? k.delegateType : k.bindType) || o, k = kb.event.special[o] || {},
                m = kb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && kb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                },
                j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), kb.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = kb.hasData(a) && kb._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(mb) || [""], j = b.length; j--;) if (h = Pb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = kb.event.special[n] || {},
                    n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f],
                    !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || kb.removeEvent(a, n, q.handle), delete k[n])
                } else for (n in k) kb.event.remove(a, n + b[j], c, d, !0);
                kb.isEmptyObject(k) && (delete q.handle, kb._removeData(a, "events"))
            }
        },
        trigger: function (c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || Y],
                o = ib.call(c, "type") ? c.type : c,
            p = ib.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Ob.test(o + kb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[kb.expando] ? c : new kb.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : kb.makeArray(d, [c]), k = kb.event.special[o] || {},
            f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !kb.isWindow(e)) {
                    for (j = k.delegateType || o, Ob.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i),
                    l = i;
                    l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a)
                }
                for (m = 0;
                (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o,
                g = (kb._data(i, "events") || {})[c.type] && kb._data(i, "handle"),
                g && g.apply(i, d),
                g = h && i[h],
                g && kb.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && kb.acceptData(e) && h && e[o] && !kb.isWindow(e)) {
                    l = e[h],
                    l && (e[h] = null),
                    kb.event.triggered = o;
                    try {
                        e[o]()
                    } catch(q) {}
                    kb.event.triggered = b,
                    l && (e[h] = l)
                }
                return c.result
            }
        },
        dispatch: function (a) {
            a = kb.event.fix(a);
            var c, d, e, f, g, h = [],
                i = fb.call(arguments),
                j = (kb._data(this, "events") || {})[a.type] || [],
                k = kb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = kb.event.handlers.call(this, a, j), c = 0;
                (f = h[c++]) && !a.isPropagationStopped();) for (a.currentTarget = f.elem, g = 0;
                (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((kb.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function (a, c) {
            var d, e, f, g, h = [],
                i = c.delegateCount,
                j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (; j != this; j = j.parentNode || this) if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                for (f = [], g = 0; i > g; g++) e = c[g],
                d = e.selector + " ",
                f[d] === b && (f[d] = e.needsContext ? kb(d, this).index(j) >= 0 : kb.find(d, this, null, [j]).length),
                f[d] && f.push(e);
                f.length && h.push({
                    elem: j,
                    handlers: f
                })
            }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }),
            h
        },
        fix: function (a) {
            if (a[kb.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Nb.test(e) ? this.mouseHooks : Mb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new kb.Event(f), b = d.length; b--;) c = d[b],
            a[c] = f[c];
            return a.target || (a.target = f.srcElement || Y),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, e, f, g = c.button,
                    h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h),
                a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== k() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === k() && this.blur ? (this.blur(), !1) : b
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return kb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b
                },
                _default: function (a) {
                    return kb.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = kb.extend(new kb.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? kb.event.trigger(e, null, b) : kb.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    kb.removeEvent = Y.removeEventListener ?
    function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c))
    },
    kb.Event = function (a, c) {
        return this instanceof kb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, c && kb.extend(this, c), this.timeStamp = a && a.timeStamp || kb.now(), this[kb.expando] = !0, b) : new kb.Event(a, c)
    },
    kb.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = i,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = i,
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = i,
            this.stopPropagation()
        }
    },
    kb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },


    function (a, b) {
        kb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !kb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    kb.support.submitBubbles || (kb.event.special.submit = {
        setup: function () {
            return kb.nodeName(this, "form") ? !1 : (kb.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = kb.nodeName(c, "input") || kb.nodeName(c, "button") ? c.form : b;
                d && !kb._data(d, "submitBubbles") && (kb.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), kb._data(d, "submitBubbles", !0))
            }), b)
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && kb.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return kb.nodeName(this, "form") ? !1 : (kb.event.remove(this, "._submit"), b)
        }
    }),
    kb.support.changeBubbles || (kb.event.special.change = {
        setup: function () {
            return Lb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (kb.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), kb.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                kb.event.simulate("change", this, a, !0)
            })), !1) : (kb.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Lb.test(b.nodeName) && !kb._data(b, "changeBubbles") && (kb.event.add(b, "change._change", function (a) { ! this.parentNode || a.isSimulated || a.isTrigger || kb.event.simulate("change", this.parentNode, a, !0)
                }), kb._data(b, "changeBubbles", !0))
            }), b)
        },
        handle: function (a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b
        },
        teardown: function () {
            return kb.event.remove(this, "._change"),
            !Lb.test(this.nodeName)
        }
    }),
    kb.support.focusinBubbles || kb.each({
        focus: "focusin",
        blur: "focusout"
    },


    function (a, b) {
        var c = 0,
            d = function (a) {
            kb.event.simulate(b, a.target, kb.event.fix(a), !0)
        };
        kb.event.special[b] = {
            setup: function () {
                0 === c++&&Y.addEventListener(a, d, !0)
            },
            teardown: function () {
                0 === --c && Y.removeEventListener(a, d, !0)
            }
        }
    }),
    kb.fn.extend({
        on: function (a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
            else if (!e) return this;
            return 1 === f && (h = e, e = function (a) {
                return kb().off(a),
                h.apply(this, arguments)
            },
            e.guid = h.guid || (h.guid = kb.guid++)),
            this.each(function () {
                kb.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj,
            kb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler),
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b),
            d === !1 && (d = j),
            this.each(function () {
                kb.event.remove(this, a, d, c)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                kb.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, c) {
            var d = this[0];
            return d ? kb.event.trigger(a, c, d, !0) : b
        }
    });
    var Qb = /^.[^:#\[\.,]*$/,
        Rb = /^(?:parents|prev(?:Until|All))/,
        Sb = kb.expr.match.needsContext,
        Tb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    kb.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(kb(a).filter(function () {
                for (b = 0; e > b; b++) if (kb.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) kb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? kb.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        has: function (a) {
            var b, c = kb(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++) if (kb.contains(this, c[b])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(m(this, a || [], !0))
        },
        filter: function (a) {
            return this.pushStack(m(this, a || [], !1))
        },
        is: function (a) {
            return !!m(this, "string" == typeof a && Sb.test(a) ? kb(a) : a || [], !1).length
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sb.test(a) || "string" != typeof a ? kb(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && kb.find.matchesSelector(c, a))) {
                c = f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? kb.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? kb.inArray(this[0], kb(a)) : kb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            var c = "string" == typeof a ? kb(a, b) : kb.makeArray(a && a.nodeType ? [a] : a),
            d = kb.merge(this.get(), c);
            return this.pushStack(kb.unique(d))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    kb.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return kb.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return kb.dir(a, "parentNode", c)
        },
        next: function (a) {
            return l(a, "nextSibling")
        },
        prev: function (a) {
            return l(a, "previousSibling")
        },
        nextAll: function (a) {
            return kb.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return kb.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return kb.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return kb.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return kb.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return kb.sibling(a.firstChild)
        },
        contents: function (a) {
            return kb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : kb.merge([], a.childNodes)
        }
    },


    function (a, b) {
        kb.fn[a] = function (c, d) {
            var e = kb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = kb.filter(d, e)),
            this.length > 1 && (Tb[a] || (e = kb.unique(e)), Rb.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    }),
    kb.extend({
        filter: function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? kb.find.matchesSelector(d, a) ? [d] : [] : kb.find.matches(a, kb.grep(b, function (a) {
                return 1 === a.nodeType
            }))
        },
        dir: function (a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !kb(f).is(d));) 1 === f.nodeType && e.push(f),
            f = f[c];
            return e
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vb = / jQuery\d+="(?:null|\d+)"/g,
        Wb = RegExp("<(?:" + Ub + ")[\\s/>]", "i"),
        Xb = /^\s+/,
        Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Zb = /<([\w:]+)/,
        $b = /<tbody/i,
        _b = /<|&#?\w+;/,
        ac = /<(?:script|style|link)/i,
        bc = /^(?:checkbox|radio)$/i,
        cc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dc = /^$|\/(?:java|ecma)script/i,
        ec = /^true\/(.*)/,
        fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gc = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: kb.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
        hc = n(Y),
        ic = hc.appendChild(Y.createElement("div"));
    gc.optgroup = gc.option,
    gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead,
    gc.th = gc.td,
    kb.fn.extend({
        text: function (a) {
            return kb.access(this, function (a) {
                return a === b ? kb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a))
            },
            null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? kb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || kb.cleanData(u(c)),
            c.parentNode && (b && kb.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && kb.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && kb.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function () {
                return kb.clone(this, a, b)
            })
        },
        html: function (a) {
            return kb.access(this, function (a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                if (! ("string" != typeof a || ac.test(a) || !kb.support.htmlSerialize && Wb.test(a) || !kb.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Yb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {},
                        1 === c.nodeType && (kb.cleanData(u(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch(f) {}
                }
                c && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function () {
            var a = kb.map(this, function (a) {
                return [a.nextSibling, a.parentNode]
            }),
                b = 0;
            return this.domManip(arguments, function (c) {
                var d = a[b++],
                    e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), kb(this).remove(), e.insertBefore(c, d))
            },
            !0),
            b ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b, c) {
            a = db.apply([], a);
            var d, e, f, g, h, i, j = 0,
                k = this.length,
                l = this,
                m = k - 1,
                n = a[0],
                o = kb.isFunction(n);
            if (o || !(1 >= k || "string" != typeof n || kb.support.checkClone) && cc.test(n)) return this.each(function (d) {
                var e = l.eq(d);
                o && (a[0] = n.call(this, d, e.html())),
                e.domManip(a, b, c)
            });
            if (k && (i = kb.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
                for (g = kb.map(u(i, "script"), p), f = g.length; k > j; j++) e = i,
                j !== m && (e = kb.clone(e, !0, !0), f && kb.merge(g, u(e, "script"))),
                b.call(this[j], e, j);
                if (f) for (h = g[g.length - 1].ownerDocument, kb.map(g, q), j = 0; f > j; j++) e = g[j],
                dc.test(e.type || "") && !kb._data(e, "globalEval") && kb.contains(h, e) && (e.src ? kb._evalUrl(e.src) : kb.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fc, "")));
                i = d = null
            }
            return this
        }
    }),
    kb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },


    function (a, b) {
        kb.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = kb(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0),
            kb(f[d])[b](c),
            eb.apply(e, c.get());
            return this.pushStack(e)
        }
    }),
    kb.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = kb.contains(a.ownerDocument, a);
            if (kb.support.html5Clone || kb.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, ic.removeChild(f = ic.firstChild)), !(kb.support.noCloneEvent && kb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || kb.isXMLDoc(a))) for (d = u(f), h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
            if (b) if (c) for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]);
            else s(a, f);
            return d = u(f, "script"),
            d.length > 0 && r(d, !i && u(a, "script")),
            d = h = e = null,
            f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++) if (f = a[p], f || 0 === f) if ("object" === kb.type(f)) kb.merge(o, f.nodeType ? [f] : f);
            else if (_b.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Zb.exec(f) || ["", ""])[1].toLowerCase(), k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!kb.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), !kb.support.tbody) for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) kb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (kb.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else o.push(b.createTextNode(f));
            for (h && m.removeChild(h), kb.support.appendChecked || kb.grep(u(o, "input"), v), p = 0; f = o[p++];) if ((!d || -1 === kb.inArray(f, d)) && (g = kb.contains(f.ownerDocument, f), h = u(m.appendChild(f), "script"), g && r(h), c)) for (e = 0; f = h[e++];) dc.test(f.type || "") && c.push(f);
            return h = null,
            m
        },
        cleanData: function (a, b) {
            for (var c, d, e, f, g = 0, h = kb.expando, i = kb.cache, j = kb.support.deleteExpando, k = kb.event.special; null != (c = a[g]); g++) if ((b || kb.acceptData(c)) && (e = c[h], f = e && i[e])) {
                if (f.events) for (d in f.events) k[d] ? kb.event.remove(c, d) : kb.removeEvent(c, d, f.handle);
                i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, bb.push(e))
            }
        },
        _evalUrl: function (a) {
            return kb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    kb.fn.extend({
        wrapAll: function (a) {
            if (kb.isFunction(a)) return this.each(function (b) {
                kb(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = kb(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return this.each(kb.isFunction(a) ?
            function (b) {
                kb(this).wrapInner(a.call(this, b))
            } : function () {
                var b = kb(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = kb.isFunction(a);
            return this.each(function (c) {
                kb(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                kb.nodeName(this, "body") || kb(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var jc, kc, lc, mc = /alpha\([^)]*\)/i,
        nc = /opacity\s*=\s*([^)]*)/,
        oc = /^(top|right|bottom|left)$/,
        pc = /^(none|table(?!-c[ea]).+)/,
        qc = /^margin/,
        rc = RegExp("^(" + lb + ")(.*)$", "i"),
        sc = RegExp("^(" + lb + ")(?!px)[a-z%]+$", "i"),
        tc = RegExp("^([+-])=(" + lb + ")", "i"),
        uc = {
        BODY: "block"
    },
        vc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
        wc = {
        letterSpacing: 0,
        fontWeight: 400
    },
        xc = ["Top", "Right", "Bottom", "Left"],
        yc = ["Webkit", "O", "Moz", "ms"];
    kb.fn.extend({
        css: function (a, c) {
            return kb.access(this, function (a, c, d) {
                var e, f, g = {},
                    h = 0;
                if (kb.isArray(c)) {
                    for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = kb.css(a, c[h], !1, f);
                    return g
                }
                return d !== b ? kb.style(a, c, d) : kb.css(a, c)
            },
            a, c, arguments.length > 1)
        },
        show: function () {
            return y(this, !0)
        },
        hide: function () {
            return y(this)
        },
        toggle: function (a) {
            var b = "boolean" == typeof a;
            return this.each(function () {
                (b ? a : x(this)) ? kb(this).show() : kb(this).hide()
            })
        }
    }),
    kb.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = lc(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": kb.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = kb.camelCase(c),
                    j = a.style;
                if (c = kb.cssProps[i] || (kb.cssProps[i] = w(j, i)), h = kb.cssHooks[c] || kb.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(kb.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || kb.cssNumber[i] || (d += "px"), kb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch(k) {}
            }
        },
        css: function (a, c, d, e) {
            var f, g, h, i = kb.camelCase(c);
            return c = kb.cssProps[i] || (kb.cssProps[i] = w(a.style, i)),
            h = kb.cssHooks[c] || kb.cssHooks[i],
            h && "get" in h && (g = h.get(a, !0, d)),
            g === b && (g = lc(a, c, e)),
            "normal" === g && c in wc && (g = wc[c]),
            "" === d || d ? (f = parseFloat(g), d === !0 || kb.isNumeric(f) ? f || 0 : g) : g
        }
    }),
    a.getComputedStyle ? (kc = function (b) {
        return a.getComputedStyle(b, null)
    },
    lc = function (a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
        j = a.style;
        return h && ("" !== i || kb.contains(a.ownerDocument, a) || (i = kb.style(a, c)), sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)),
        i
    }) : Y.documentElement.currentStyle && (kc = function (a) {
        return a.currentStyle
    },
    lc = function (a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h[c] : b,
        j = a.style;
        return null == i && j && j[c] && (i = j[c]),
        sc.test(i) && !oc.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)),
        "" === i ? "auto" : i
    }),
    kb.each(["height", "width"], function (a, c) {
        kb.cssHooks[c] = {
            get: function (a, d, e) {
                return d ? 0 === a.offsetWidth && pc.test(kb.css(a, "display")) ? kb.swap(a, vc, function () {
                    return B(a, c, e)
                }) : B(a, c, e) : b
            },
            set: function (a, b, d) {
                var e = d && kc(a);
                return z(a, b, d ? A(a, c, d, kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    kb.support.opacity || (kb.cssHooks.opacity = {
        get: function (a, b) {
            return nc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = kb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === kb.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e)
        }
    }),
    kb(function () {
        kb.support.reliableMarginRight || (kb.cssHooks.marginRight = {
            get: function (a, c) {
                return c ? kb.swap(a, {
                    display: "inline-block"
                },
                lc, [a, "marginRight"]) : b
            }
        }),
        !kb.support.pixelPosition && kb.fn.position && kb.each(["top", "left"], function (a, c) {
            kb.cssHooks[c] = {
                get: function (a, d) {
                    return d ? (d = lc(a, c), sc.test(d) ? kb(a).position()[c] + "px" : d) : b
                }
            }
        })
    }),
    kb.expr && kb.expr.filters && (kb.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !kb.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || kb.css(a, "display"))
    },
    kb.expr.filters.visible = function (a) {
        return !kb.expr.filters.hidden(a)
    }),
    kb.each({
        margin: "",
        padding: "",
        border: "Width"
    },


    function (a, b) {
        kb.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        qc.test(a) || (kb.cssHooks[a + b].set = z)
    });
    var zc = /%20/g,
        Ac = /\[\]$/,
        Bc = /\r?\n/g,
        Cc = /^(?:submit|button|image|reset|file)$/i,
        Dc = /^(?:input|select|textarea|keygen)/i;
    kb.fn.extend({
        serialize: function () {
            return kb.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = kb.prop(this, "elements");
                return a ? kb.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !kb(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a))
            }).map(function (a, b) {
                var c = kb(this).val();
                return null == c ? null : kb.isArray(c) ? kb.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Bc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Bc, "\r\n")
                }
            }).get()
        }
    }),
    kb.param = function (a, c) {
        var d, e = [],
            f = function (a, b) {
            b = kb.isFunction(b) ? b() : null == b ? "" : b,
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = kb.ajaxSettings && kb.ajaxSettings.traditional), kb.isArray(a) || a.jquery && !kb.isPlainObject(a)) kb.each(a, function () {
            f(this.name, this.value)
        });
        else for (d in a) E(d, a[d], c, f);
        return e.join("&").replace(zc, "+")
    },
    kb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        kb.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    kb.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Ec, Fc, Gc = kb.now(),
        Hc = /\?/,
        Ic = /#.*$/,
        Jc = /([?&])_=[^&]*/,
        Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mc = /^(?:GET|HEAD)$/,
        Nc = /^\/\//,
        Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pc = kb.fn.load,
        Qc = {},
        Rc = {},
        Sc = "*/".concat("*");
    try {
        Fc = X.href
    } catch(Tc) {
        Fc = Y.createElement("a"),
        Fc.href = "",
        Fc = Fc.href
    }
    Ec = Oc.exec(Fc.toLowerCase()) || [],
    kb.fn.load = function (a, c, d) {
        if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)),
        kb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"),
        h.length > 0 && kb.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function (a) {
            f = arguments,
            h.html(e ? kb("<div>").append(kb.parseHTML(a)).find(e) : a)
        }).complete(d &&
        function (a, b) {
            h.each(d, f || [a.responseText, b, a])
        }),
        this
    },
    kb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        kb.fn[b] = function (a) {
            return this.on(b, a)
        }
    }),
    kb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fc,
            type: "GET",
            isLocal: Lc.test(Ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": kb.parseJSON,
                "text xml": kb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? H(H(a, kb.ajaxSettings), b) : H(kb.ajaxSettings, a)
        },
        ajaxPrefilter: F(Qc),
        ajaxTransport: F(Rc),
        ajax: function (a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (kb.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (kb.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --kb.active || kb.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b),
            c = c || {};
            var e, f, g, h, i, j, k, l, m = kb.ajaxSetup({},
            c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? kb(n) : kb.event,
            p = kb.Deferred(),
            q = kb.Callbacks("once memory"),
            r = m.statusCode || {},
            s = {},
            t = {},
            u = 0,
            v = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === u) {
                        if (!l) for (l = {}; b = Kc.exec(h);) l[b[1].toLowerCase()] = b[2];
                        b = l[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === u ? h : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b),
                    this
                },
                overrideMimeType: function (a) {
                    return u || (m.mimeType = a),
                    this
                },
                statusCode: function (a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                    else w.always(a[w.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || v;
                    return k && k.abort(b),
                    d(0, b),
                    this
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = kb.trim(m.dataType || "*").toLowerCase().match(mb) || [""], null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Ec[3] || ("http:" === Ec[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = kb.param(m.data, m.traditional)), G(Qc, m, c, w), 2 === u) return w;
            j = m.global,
            j && 0 === kb.active++&&kb.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !Mc.test(m.type),
            g = m.url,
            m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&" : "?") + "_=" + Gc++)),
            m.ifModified && (kb.lastModified[g] && w.setRequestHeader("If-Modified-Since", kb.lastModified[g]), kb.etag[g] && w.setRequestHeader("If-None-Match", kb.etag[g])),
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = G(Rc, m, c, w)) {
                w.readyState = 1,
                j && o.trigger("ajaxSend", [w, m]),
                m.async && m.timeout > 0 && (i = setTimeout(function () {
                    w.abort("timeout")
                },
                m.timeout));
                try {
                    u = 1,
                    k.send(s, d)
                } catch(x) {
                    if (! (2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function (a, b, c) {
            return kb.get(a, b, c, "json")
        },
        getScript: function (a, c) {
            return kb.get(a, b, c, "script")
        }
    }),
    kb.each(["get", "post"], function (a, c) {
        kb[c] = function (a, d, e, f) {
            return kb.isFunction(d) && (f = f || e, e = d, d = b),
            kb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }),
    kb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return kb.globalEval(a),
                a
            }
        }
    }),
    kb.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    kb.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = Y.head || kb("head")[0] || Y.documentElement;
            return {
                send: function (b, e) {
                    c = Y.createElement("script"),
                    c.async = !0,
                    a.scriptCharset && (c.charset = a.scriptCharset),
                    c.src = a.url,
                    c.onload = c.onreadystatechange = function (a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                    },
                    d.insertBefore(c, d.firstChild)
                },
                abort: function () {
                    c && c.onload(b, !0)
                }
            }
        }
    });
    var Uc = [],
        Vc = /(=)\?(?=&|$)|\?\?/;
    kb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Uc.pop() || kb.expando + "_" + Gc++;
            return this[a] = !0,
            a
        }
    }),
    kb.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = kb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || kb.error(f + " was not called"),
            h[0]
        },
        c.dataTypes[0] = "json", g = a[f], a[f] = function () {
            h = arguments
        },
        e.always(function () {
            a[f] = g,
            c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)),
            h && kb.isFunction(g) && g(h[0]),
            h = g = b
        }), "script") : b
    });
    var Wc, Xc, Yc = 0,
        Zc = a.ActiveXObject &&
    function () {
        var a;
        for (a in Wc) Wc[a](b, !0)
    };
    kb.ajaxSettings.xhr = a.ActiveXObject ?
    function () {
        return !this.isLocal && K() || L()
    } : K,
    Xc = kb.ajaxSettings.xhr(),
    kb.support.cors = !!Xc && "withCredentials" in Xc,
    Xc = kb.support.ajax = !!Xc,
    Xc && kb.ajaxTransport(function (c) {
        if (!c.crossDomain || kb.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                    c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch(j) {}
                    i.send(c.hasContent && c.data || null),
                    d = function (a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = kb.noop, Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort();
                            else {
                                l = {},
                                h = i.status,
                                j = i.getAllResponseHeaders(),
                                "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    k = i.statusText
                                } catch(m) {
                                    k = ""
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                            }
                        } catch(n) {
                            e || f(-1, n)
                        }
                        l && f(h, k, l, j)
                    },
                    c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {},
                    kb(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function () {
                    d && d(b, !0)
                }
            }
        }
    });
    var $c, _c, ad = /^(?:toggle|show|hide)$/,
        bd = RegExp("^(?:([+-])=|)(" + lb + ")([a-z%]*)$", "i"),
        cd = /queueHooks$/,
        dd = [Q],
        ed = {
        "*": [function (a, b) {
            var c = this.createTween(a, b),
                d = c.cur(),
                e = bd.exec(b),
                f = e && e[3] || (kb.cssNumber[a] ? "" : "px"),
                g = (kb.cssNumber[a] || "px" !== f && +d) && bd.exec(kb.css(c.elem, a)),
                h = 1,
                i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do h = h || ".5",
                g /= h,
                kb.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }]
    };
    kb.Animation = kb.extend(O, {
        tweener: function (a, b) {
            kb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d],
            ed[c] = ed[c] || [],
            ed[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? dd.unshift(a) : dd.push(a)
        }
    }),
    kb.Tween = R,
    R.prototype = {
        constructor: R,
        init: function (a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (kb.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = R.propHooks[this.prop];
            return a && a.get ? a.get(this) : R.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = R.propHooks[this.prop];
            return this.pos = b = this.options.duration ? kb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : R.propHooks._default.set(this),
            this
        }
    },
    R.prototype.init.prototype = R.prototype,
    R.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = kb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                kb.fx.step[a.prop] ? kb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[kb.cssProps[a.prop]] || kb.cssHooks[a.prop]) ? kb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    kb.each(["toggle", "show", "hide"], function (a, b) {
        var c = kb.fn[b];
        kb.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e)
        }
    }),
    kb.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = kb.isEmptyObject(a),
                f = kb.speed(b, c, d),
                g = function () {
                var b = O(this, kb.extend({},
                a), f);
                (e || kb._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop,
                b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b),
            c && a !== !1 && this.queue(a || "fx", []),
            this.each(function () {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = kb.timers,
                    g = kb._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && kb.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function () {
                var b, c = kb._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = kb.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, kb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    kb.each({
        slideDown: S("show"),
        slideUp: S("hide"),
        slideToggle: S("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },


    function (a, b) {
        kb.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    kb.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? kb.extend({},
        a) : {
            complete: c || !c && b || kb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !kb.isFunction(b) && b
        };
        return d.duration = kb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in kb.fx.speeds ? kb.fx.speeds[d.duration] : kb.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function () {
            kb.isFunction(d.old) && d.old.call(this),
            d.queue && kb.dequeue(this, d.queue)
        },
        d
    },
    kb.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return.5 - Math.cos(a * Math.PI) / 2
        }
    },
    kb.timers = [],
    kb.fx = R.prototype.init,
    kb.fx.tick = function () {
        var a, c = kb.timers,
            d = 0;
        for ($c = kb.now(); c.length > d; d++) a = c[d],
        a() || c[d] !== a || c.splice(d--, 1);
        c.length || kb.fx.stop(),
        $c = b
    },
    kb.fx.timer = function (a) {
        a() && kb.timers.push(a) && kb.fx.start()
    },
    kb.fx.interval = 13,
    kb.fx.start = function () {
        _c || (_c = setInterval(kb.fx.tick, kb.fx.interval))
    },
    kb.fx.stop = function () {
        clearInterval(_c),
        _c = null
    },
    kb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    kb.fx.step = {},
    kb.expr && kb.expr.filters && (kb.expr.filters.animated = function (a) {
        return kb.grep(kb.timers, function (b) {
            return a === b.elem
        }).length
    }),
    kb.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            kb.offset.setOffset(this, a, b)
        });
        var c, d, e = {
            top: 0,
            left: 0
        },
            f = this[0],
            g = f && f.ownerDocument;
        return g ? (c = g.documentElement, kb.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), d = T(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e) : void 0
    },
    kb.offset = {
        setOffset: function (a, b, c) {
            var d = kb.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = kb(a),
                h = g.offset(),
                i = kb.css(a, "top"),
                j = kb.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && kb.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0),
            kb.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (l.top = b.top - h.top + e),
            null != b.left && (l.left = b.left - h.left + f),
            "using" in b ? b.using.call(a, l) : g.css(l)
        }
    },
    kb.fn.extend({
        position: function () {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                },
                    d = this[0];
                return "fixed" === kb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), kb.nodeName(a[0], "html") || (c = a.offset()), c.top += kb.css(a[0], "borderTopWidth", !0), c.left += kb.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - kb.css(d, "marginTop", !0),
                    left: b.left - c.left - kb.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Z; a && !kb.nodeName(a, "html") && "static" === kb.css(a, "position");) a = a.offsetParent;
                return a || Z
            })
        }
    }),
    kb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },


    function (a, c) {
        var d = /Y/.test(c);
        kb.fn[a] = function (e) {
            return kb.access(this, function (a, e, f) {
                var g = T(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? kb(g).scrollLeft() : f, d ? f : kb(g).scrollTop()) : a[e] = f, b)
            },
            a, e, arguments.length, null)
        }
    }),
    kb.each({
        Height: "height",
        Width: "width"
    },


    function (a, c) {
        kb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        },


        function (d, e) {
            kb.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return kb.access(this, function (c, d, e) {
                    var f;
                    return kb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? kb.css(c, d, h) : kb.style(c, d, e, h)
                },
                c, g ? e : b, g, null)
            }
        })
    }),
    kb.fn.size = function () {
        return this.length
    },
    kb.fn.andSelf = kb.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = kb : (a.jQuery = a.$ = kb, "function" == typeof define && define.amd && define("jquery", [], function () {
        return kb
    }))
}(window);
var Swiper = function (a, b) {
    "use strict";

    function c(a, b) {
        return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b)
    }
    function d(a) {
        return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1
    }
    function e() {
        var a = F - I;
        return b.freeMode && (a = F - I),
        b.slidesPerView > C.slides.length && !b.centeredSlides && (a = 0),
        0 > a && (a = 0),
        a
    }
    function f() {
        function a(a) {
            var c = new Image;
            c.onload = function () {
                C && void 0 !== C.imagesLoaded && C.imagesLoaded++,
                C.imagesLoaded === C.imagesToLoad.length && (C.reInit(), b.onImagesReady && C.fireCallback(b.onImagesReady, C))
            },
            c.src = a
        }
        var d = C.h.addEventListener,
            e = "wrapper" === b.eventTarget ? C.wrapper : C.container;
        if (C.browser.ie10 || C.browser.ie11 ? (d(e, C.touchEvents.touchStart, p), d(document, C.touchEvents.touchMove, q), d(document, C.touchEvents.touchEnd, r)) : (C.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", C.resizeFix), g(), C._wheelEvent = !1, b.mousewheelControl) {
            if (void 0 !== document.onmousewheel && (C._wheelEvent = "mousewheel"), !C._wheelEvent) try {
                new WheelEvent("wheel"),
                C._wheelEvent = "wheel"
            } catch(f) {}
            C._wheelEvent || (C._wheelEvent = "DOMMouseScroll"),
            C._wheelEvent && d(C.container, C._wheelEvent, j)
        }
        if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
            C.imagesToLoad = c("img", C.container);
            for (var h = 0; h < C.imagesToLoad.length; h++) a(C.imagesToLoad[h].getAttribute("src"))
        }
    }
    function g() {
        var a, d = C.h.addEventListener;
        if (b.preventLinks) {
            var e = c("a", C.container);
            for (a = 0; a < e.length; a++) d(e[a], "click", n)
        }
        if (b.releaseFormElements) {
            var f = c("input, textarea, select", C.container);
            for (a = 0; a < f.length; a++) d(f[a], C.touchEvents.touchStart, o, !0)
        }
        if (b.onSlideClick) for (a = 0; a < C.slides.length; a++) d(C.slides[a], "click", k);
        if (b.onSlideTouch) for (a = 0; a < C.slides.length; a++) d(C.slides[a], C.touchEvents.touchStart, l)
    }
    function h() {
        var a, d = C.h.removeEventListener;
        if (b.onSlideClick) for (a = 0; a < C.slides.length; a++) d(C.slides[a], "click", k);
        if (b.onSlideTouch) for (a = 0; a < C.slides.length; a++) d(C.slides[a], C.touchEvents.touchStart, l);
        if (b.releaseFormElements) {
            var e = c("input, textarea, select", C.container);
            for (a = 0; a < e.length; a++) d(e[a], C.touchEvents.touchStart, o, !0)
        }
        if (b.preventLinks) {
            var f = c("a", C.container);
            for (a = 0; a < f.length; a++) d(f[a], "click", n)
        }
    }
    function i(a) {
        var b = a.keyCode || a.charCode;
        if (! (a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
            if (37 === b || 39 === b || 38 === b || 40 === b) {
                for (var c = !1, d = C.h.getOffset(C.container), e = C.h.windowScroll().left, f = C.h.windowScroll().top, g = C.h.windowWidth(), h = C.h.windowHeight(), i = [
                    [d.left, d.top],
                    [d.left + C.width, d.top],
                    [d.left, d.top + C.height],
                    [d.left + C.width, d.top + C.height]
                ], j = 0; j < i.length; j++) {
                    var k = i[j];
                    k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0)
                }
                if (!c) return
            }
            M ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && C.swipeNext(), 37 === b && C.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && C.swipeNext(), 38 === b && C.swipePrev())
        }
    }
    function j(a) {
        var c = C._wheelEvent,
            d = 0;
        if (a.detail) d = -a.detail;
        else if ("mousewheel" === c) if (b.mousewheelControlForceToAxis) if (M) {
            if (! (Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
            d = a.wheelDeltaX
        } else {
            if (! (Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
            d = a.wheelDeltaY
        } else d = a.wheelDelta;
        else if ("DOMMouseScroll" === c) d = -a.detail;
        else if ("wheel" === c) if (b.mousewheelControlForceToAxis) if (M) {
            if (! (Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
            d = -a.deltaX
        } else {
            if (! (Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
            d = -a.deltaY
        } else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
        if (b.freeMode) {
            var f = C.getWrapperTranslate() + d;
            if (f > 0 && (f = 0), f < -e() && (f = -e()), C.setWrapperTransition(0), C.setWrapperTranslate(f), C.updateActiveSlide(f), 0 === f || f === -e()) return
        } else(new Date).getTime() - U > 60 && (0 > d ? C.swipeNext() : C.swipePrev()),
        U = (new Date).getTime();
        return b.autoplay && C.stopAutoplay(!0),
        a.preventDefault ? a.preventDefault() : a.returnValue = !1,
        !1
    }
    function k(a) {
        C.allowSlideClick && (m(a), C.fireCallback(b.onSlideClick, C, a))
    }
    function l(a) {
        m(a),
        C.fireCallback(b.onSlideTouch, C, a)
    }
    function m(a) {
        if (a.currentTarget) C.clickedSlide = a.currentTarget;
        else {
            var c = a.srcElement;
            do {
                if (c.className.indexOf(b.slideClass) > -1) break;
                c = c.parentNode
            } while (c);
            C.clickedSlide = c
        }
        C.clickedSlideIndex = C.slides.indexOf(C.clickedSlide),
        C.clickedSlideLoopIndex = C.clickedSlideIndex - (C.loopedSlides || 0)
    }
    function n(a) {
        return C.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in a && a.stopPropagation(), !1)
    }
    function o(a) {
        return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1,
        !1
    }
    function p(a) {
        if (b.preventLinks && (C.allowLinks = !0), C.isTouched || b.onlyExternal) return !1;
        if (b.noSwiping && (a.target || a.srcElement) && s(a.target || a.srcElement)) return !1;
        if ($ = !1, C.isTouched = !0, Z = "touchstart" === a.type, !Z || 1 === a.targetTouches.length) {
            C.callPlugins("onTouchStartBegin"),
            Z || C.isAndroid || (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            var c = Z ? a.targetTouches[0].pageX : a.pageX || a.clientX,
            d = Z ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            C.touches.startX = C.touches.currentX = c,
            C.touches.startY = C.touches.currentY = d,
            C.touches.start = C.touches.current = M ? c : d,
            C.setWrapperTransition(0),
            C.positions.start = C.positions.current = C.getWrapperTranslate(),
            C.setWrapperTranslate(C.positions.start),
            C.times.start = (new Date).getTime(),
            H = void 0,
            b.moveStartThreshold > 0 && (W = !1),
            b.onTouchStart && C.fireCallback(b.onTouchStart, C),
            C.callPlugins("onTouchStartEnd")
        }
    }
    function q(a) {
        if (C.isTouched && !b.onlyExternal && (!Z || "mousemove" !== a.type)) {
            var c = Z ? a.targetTouches[0].pageX : a.pageX || a.clientX,
            d = Z ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            if ("undefined" == typeof H && M && (H = !!(H || Math.abs(d - C.touches.startY) > Math.abs(c - C.touches.startX))), "undefined" != typeof H || M || (H = !!(H || Math.abs(d - C.touches.startY) < Math.abs(c - C.touches.startX))), H) return void(C.isTouched = !1);
            if (a.assignedToSwiper) return void(C.isTouched = !1);
            if (a.assignedToSwiper = !0, b.preventLinks && (C.allowLinks = !1), b.onSlideClick && (C.allowSlideClick = !1), b.autoplay && C.stopAutoplay(!0), !Z || 1 === a.touches.length) {
                if (C.isMoved || (C.callPlugins("onTouchMoveStart"), b.loop && (C.fixLoop(), C.positions.start = C.getWrapperTranslate()), b.onTouchMoveStart && C.fireCallback(b.onTouchMoveStart, C)), C.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, C.touches.current = M ? c : d, C.positions.current = (C.touches.current - C.touches.start) * b.touchRatio + C.positions.start, C.positions.current > 0 && b.onResistanceBefore && C.fireCallback(b.onResistanceBefore, C, C.positions.current), C.positions.current < -e() && b.onResistanceAfter && C.fireCallback(b.onResistanceAfter, C, Math.abs(C.positions.current + e())), b.resistance && "100%" !== b.resistance) {
                    var f;
                    if (C.positions.current > 0 && (f = 1 - C.positions.current / I / 2, C.positions.current = .5 > f ? I / 2 : C.positions.current * f), C.positions.current < -e()) {
                        var g = (C.touches.current - C.touches.start) * b.touchRatio + (e() + C.positions.start);
                        f = (I + g) / I;
                        var h = C.positions.current - g * (1 - f) / 2,
                            i = -e() - I / 2;
                        C.positions.current = i > h || 0 >= f ? i : h
                    }
                }
                if (b.resistance && "100%" === b.resistance && (C.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (C.positions.current = 0), C.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (C.positions.current = -e())), !b.followFinger) return;
                if (b.moveStartThreshold) if (Math.abs(C.touches.current - C.touches.start) > b.moveStartThreshold || W) {
                    if (!W) return W = !0,
                    void(C.touches.start = C.touches.current);
                    C.setWrapperTranslate(C.positions.current)
                } else C.positions.current = C.positions.start;
                else C.setWrapperTranslate(C.positions.current);
                return (b.freeMode || b.watchActiveIndex) && C.updateActiveSlide(C.positions.current),
                b.grabCursor && (C.container.style.cursor = "move", C.container.style.cursor = "grabbing", C.container.style.cursor = "-moz-grabbin", C.container.style.cursor = "-webkit-grabbing"),
                X || (X = C.touches.current),
                Y || (Y = (new Date).getTime()),
                C.velocity = (C.touches.current - X) / ((new Date).getTime() - Y) / 2,
                Math.abs(C.touches.current - X) < 2 && (C.velocity = 0),
                X = C.touches.current,
                Y = (new Date).getTime(),
                C.callPlugins("onTouchMoveEnd"),
                b.onTouchMove && C.fireCallback(b.onTouchMove, C),
                !1
            }
        }
    }
    function r() {
        if (H && C.swipeReset(), !b.onlyExternal && C.isTouched) {
            C.isTouched = !1,
            b.grabCursor && (C.container.style.cursor = "move", C.container.style.cursor = "grab", C.container.style.cursor = "-moz-grab", C.container.style.cursor = "-webkit-grab"),
            C.positions.current || 0 === C.positions.current || (C.positions.current = C.positions.start),
            b.followFinger && C.setWrapperTranslate(C.positions.current),
            C.times.end = (new Date).getTime(),
            C.touches.diff = C.touches.current - C.touches.start,
            C.touches.abs = Math.abs(C.touches.diff),
            C.positions.diff = C.positions.current - C.positions.start,
            C.positions.abs = Math.abs(C.positions.diff);
            var a = C.positions.diff,
                c = C.positions.abs,
                d = C.times.end - C.times.start;
            5 > c && 300 > d && C.allowLinks === !1 && (b.freeMode || 0 === c || C.swipeReset(), b.preventLinks && (C.allowLinks = !0), b.onSlideClick && (C.allowSlideClick = !0)),
            setTimeout(function () {
                b.preventLinks && (C.allowLinks = !0),
                b.onSlideClick && (C.allowSlideClick = !0)
            },
            100);
            var f = e();
            if (!C.isMoved && b.freeMode) return C.isMoved = !1,
            b.onTouchEnd && C.fireCallback(b.onTouchEnd, C),
            void C.callPlugins("onTouchEnd");
            if (!C.isMoved || C.positions.current > 0 || C.positions.current < -f) return C.swipeReset(),
            b.onTouchEnd && C.fireCallback(b.onTouchEnd, C),
            void C.callPlugins("onTouchEnd");
            if (C.isMoved = !1, b.freeMode) {
                if (b.freeModeFluid) {
                    var g, h = 1e3 * b.momentumRatio,
                        i = C.velocity * h,
                        j = C.positions.current + i,
                        k = !1,
                        l = 20 * Math.abs(C.velocity) * b.momentumBounceRatio; - f > j && (b.momentumBounce && C.support.transitions ? (-l > j + f && (j = -f - l), g = -f, k = !0, $ = !0) : j = -f),
                    j > 0 && (b.momentumBounce && C.support.transitions ? (j > l && (j = l), g = 0, k = !0, $ = !0) : j = 0),
                    0 !== C.velocity && (h = Math.abs((j - C.positions.current) / C.velocity)),
                    C.setWrapperTranslate(j),
                    C.setWrapperTransition(h),
                    b.momentumBounce && k && C.wrapperTransitionEnd(function () {
                        $ && (b.onMomentumBounce && C.fireCallback(b.onMomentumBounce, C), C.callPlugins("onMomentumBounce"), C.setWrapperTranslate(g), C.setWrapperTransition(300))
                    }),
                    C.updateActiveSlide(j)
                }
                return (!b.freeModeFluid || d >= 300) && C.updateActiveSlide(C.positions.current),
                b.onTouchEnd && C.fireCallback(b.onTouchEnd, C),
                void C.callPlugins("onTouchEnd")
            }
            G = 0 > a ? "toNext" : "toPrev",
            "toNext" === G && 300 >= d && (30 > c || !b.shortSwipes ? C.swipeReset() : C.swipeNext(!0)),
            "toPrev" === G && 300 >= d && (30 > c || !b.shortSwipes ? C.swipeReset() : C.swipePrev(!0));
            var m = 0;
            if ("auto" === b.slidesPerView) {
                for (var n, o = Math.abs(C.getWrapperTranslate()), p = 0, q = 0; q < C.slides.length; q++) if (n = M ? C.slides[q].getWidth(!0, b.roundLengths) : C.slides[q].getHeight(!0, b.roundLengths), p += n, p > o) {
                    m = n;
                    break
                }
                m > I && (m = I)
            } else m = E * b.slidesPerView;
            "toNext" === G && d > 300 && (c >= m * b.longSwipesRatio ? C.swipeNext(!0) : C.swipeReset()),
            "toPrev" === G && d > 300 && (c >= m * b.longSwipesRatio ? C.swipePrev(!0) : C.swipeReset()),
            b.onTouchEnd && C.fireCallback(b.onTouchEnd, C),
            C.callPlugins("onTouchEnd")
        }
    }
    function s(a) {
        var c = !1;
        do a.className.indexOf(b.noSwipingClass) > -1 && (c = !0),
        a = a.parentElement;
        while (!c && a.parentElement && -1 === a.className.indexOf(b.wrapperClass));
        return !c && a.className.indexOf(b.wrapperClass) > -1 && a.className.indexOf(b.noSwipingClass) > -1 && (c = !0),
        c
    }
    function t(a, b) {
        var c, d = document.createElement("div");
        return d.innerHTML = b,
        c = d.firstChild,
        c.className += " " + a,
        c.outerHTML
    }
    function u(a, c, d) {
        function e() {
            var f = +new Date,
                l = f - g;
            h += i * l / (1e3 / 60),
            k = "toNext" === j ? h > a : a > h,
            k ? (C.setWrapperTranslate(Math.round(h)), C._DOMAnimating = !0, window.setTimeout(function () {
                e()
            },
            1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && C.fireCallback(b.onSlideChangeEnd, C) : C.fireCallback(b.onSlideChangeEnd, C)), C.setWrapperTranslate(a), C._DOMAnimating = !1)
        }
        var f = "to" === c && d.speed >= 0 ? d.speed : b.speed,
        g = +new Date;
        if (C.support.transitions || !b.DOMAnimation) C.setWrapperTranslate(a),
        C.setWrapperTransition(f);
        else {
            var h = C.getWrapperTranslate(),
                i = Math.ceil((a - h) / f * (1e3 / 60)),
                j = h > a ? "toNext" : "toPrev",
            k = "toNext" === j ? h > a : a > h;
            if (C._DOMAnimating) return;
            e()
        }
        C.updateActiveSlide(a),
        b.onSlideNext && "next" === c && C.fireCallback(b.onSlideNext, C, a),
        b.onSlidePrev && "prev" === c && C.fireCallback(b.onSlidePrev, C, a),
        b.onSlideReset && "reset" === c && C.fireCallback(b.onSlideReset, C, a),
        ("next" === c || "prev" === c || "to" === c && d.runCallbacks === !0) && v(c)
    }
    function v(a) {
        if (C.callPlugins("onSlideChangeStart"), b.onSlideChangeStart) if (b.queueStartCallbacks && C.support.transitions) {
            if (C._queueStartCallbacks) return;
            C._queueStartCallbacks = !0,
            C.fireCallback(b.onSlideChangeStart, C, a),
            C.wrapperTransitionEnd(function () {
                C._queueStartCallbacks = !1
            })
        } else C.fireCallback(b.onSlideChangeStart, C, a);
        if (b.onSlideChangeEnd) if (C.support.transitions) if (b.queueEndCallbacks) {
            if (C._queueEndCallbacks) return;
            C._queueEndCallbacks = !0,
            C.wrapperTransitionEnd(function (c) {
                C.fireCallback(b.onSlideChangeEnd, c, a)
            })
        } else C.wrapperTransitionEnd(function (c) {
            C.fireCallback(b.onSlideChangeEnd, c, a)
        });
        else b.DOMAnimation || setTimeout(function () {
            C.fireCallback(b.onSlideChangeEnd, C, a)
        },
        10)
    }
    function w() {
        var a = C.paginationButtons;
        if (a) for (var b = 0; b < a.length; b++) C.h.removeEventListener(a[b], "click", y)
    }
    function x() {
        var a = C.paginationButtons;
        if (a) for (var b = 0; b < a.length; b++) C.h.addEventListener(a[b], "click", y)
    }
    function y(a) {
        for (var b, c = a.target || a.srcElement, d = C.paginationButtons, e = 0; e < d.length; e++) c === d[e] && (b = e);
        C.swipeTo(b)
    }
    function z() {
        _ = setTimeout(function () {
            b.loop ? (C.fixLoop(), C.swipeNext(!0)) : C.swipeNext(!0) || (b.autoplayStopOnLast ? (clearTimeout(_), _ = void 0) : C.swipeTo(0)),
            C.wrapperTransitionEnd(function () {
                "undefined" != typeof _ && z()
            })
        },
        b.autoplay)
    }
    function A() {
        C.calcSlides(),
        b.loader.slides.length > 0 && 0 === C.slides.length && C.loadSlides(),
        b.loop && C.createLoop(),
        C.init(),
        f(),
        b.pagination && C.createPagination(!0),
        b.loop || b.initialSlide > 0 ? C.swipeTo(b.initialSlide, 0, !1) : C.updateActiveSlide(0),
        b.autoplay && C.startAutoplay(),
        C.centerIndex = C.activeIndex,
        b.onSwiperCreated && C.fireCallback(b.onSwiperCreated, C),
        C.callPlugins("onSwiperCreated")
    }
    if (document.body.__defineGetter__ && HTMLElement) {
        var B = HTMLElement.prototype;
        B.__defineGetter__ && B.__defineGetter__("outerHTML", function () {
            return (new XMLSerializer).serializeToString(this)
        })
    }
    if (window.getComputedStyle || (window.getComputedStyle = function (a) {
        return this.el = a,
        this.getPropertyValue = function (b) {
            var c = /(\-([a-z]){1})/g;
            return "float" === b && (b = "styleFloat"),
            c.test(b) && (b = b.replace(c, function () {
                return arguments[2].toUpperCase()
            })),
            a.currentStyle[b] ? a.currentStyle[b] : null
        },
        this
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
        for (var c = b || 0, d = this.length; d > c; c++) if (this[c] === a) return c;
        return -1
    }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
        var C = this;
        C.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        },
        C.positions = {
            start: 0,
            abs: 0,
            diff: 0,
            current: 0
        },
        C.times = {
            start: 0,
            end: 0
        },
        C.id = (new Date).getTime(),
        C.container = a.nodeType ? a : c(a)[0],
        C.isTouched = !1,
        C.isMoved = !1,
        C.activeIndex = 0,
        C.centerIndex = 0,
        C.activeLoaderIndex = 0,
        C.activeLoopIndex = 0,
        C.previousIndex = null,
        C.velocity = 0,
        C.snapGrid = [],
        C.slidesGrid = [],
        C.imagesToLoad = [],
        C.imagesLoaded = 0,
        C.wrapperLeft = 0,
        C.wrapperRight = 0,
        C.wrapperTop = 0,
        C.wrapperBottom = 0,
        C.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
        var D, E, F, G, H, I, J = {
            eventTarget: "wrapper",
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerViewFit: !0,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            longSwipesRatio: .5,
            moveStartThreshold: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            preventLinksPropagation: !1,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelControlForceToAxis: !1,
            useCSS3Transforms: !0,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            roundLengths: !1,
            calculateHeight: !1,
            cssWidthAndHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {
                slides: [],
                slidesHTMLType: "inner",
                surroundGroups: 1,
                logic: "reload",
                loadAllSlides: !1
            },
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        b = b || {};
        for (var K in J) if (K in b && "object" == typeof b[K]) for (var L in J[K]) L in b[K] || (b[K][L] = J[K][L]);
        else K in b || (b[K] = J[K]);
        C.params = b,
        b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0),
        b.loop && (b.resistance = "100%");
        var M = "horizontal" === b.mode,
            N = ["mousedown", "mousemove", "mouseup"];
        C.browser.ie10 && (N = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
        C.browser.ie11 && (N = ["pointerdown", "pointermove", "pointerup"]),
        C.touchEvents = {
            touchStart: C.support.touch || !b.simulateTouch ? "touchstart" : N[0],
            touchMove: C.support.touch || !b.simulateTouch ? "touchmove" : N[1],
            touchEnd: C.support.touch || !b.simulateTouch ? "touchend" : N[2]
        };
        for (var O = C.container.childNodes.length - 1; O >= 0; O--) if (C.container.childNodes[O].className) for (var P = C.container.childNodes[O].className.split(/\s+/), Q = 0; Q < P.length; Q++) P[Q] === b.wrapperClass && (D = C.container.childNodes[O]);
        C.wrapper = D,
        C._extendSwiperSlide = function (a) {
            return a.append = function () {
                return b.loop ? a.insertAfter(C.slides.length - C.loopedSlides) : (C.wrapper.appendChild(a), C.reInit()),
                a
            },
            a.prepend = function () {
                return b.loop ? (C.wrapper.insertBefore(a, C.slides[C.loopedSlides]), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : C.wrapper.insertBefore(a, C.wrapper.firstChild),
                C.reInit(),
                a
            },
            a.insertAfter = function (c) {
                if ("undefined" == typeof c) return !1;
                var d;
                return b.loop ? (d = C.slides[c + 1 + C.loopedSlides], d ? C.wrapper.insertBefore(a, d) : C.wrapper.appendChild(a), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : (d = C.slides[c + 1], C.wrapper.insertBefore(a, d)),
                C.reInit(),
                a
            },
            a.clone = function () {
                return C._extendSwiperSlide(a.cloneNode(!0))
            },
            a.remove = function () {
                C.wrapper.removeChild(a),
                C.reInit()
            },
            a.html = function (b) {
                return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a)
            },
            a.index = function () {
                for (var b, c = C.slides.length - 1; c >= 0; c--) a === C.slides[c] && (b = c);
                return b
            },
            a.isActive = function () {
                return a.index() === C.activeIndex ? !0 : !1
            },
            a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}),
            a.getData = function (b) {
                return a.swiperSlideDataStorage[b]
            },
            a.setData = function (b, c) {
                return a.swiperSlideDataStorage[b] = c,
                a
            },
            a.data = function (b, c) {
                return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a)
            },
            a.getWidth = function (b, c) {
                return C.h.getWidth(a, b, c)
            },
            a.getHeight = function (b, c) {
                return C.h.getHeight(a, b, c)
            },
            a.getOffset = function () {
                return C.h.getOffset(a)
            },
            a
        },
        C.calcSlides = function (a) {
            var c = C.slides ? C.slides.length : !1;
            C.slides = [],
            C.displaySlides = [];
            for (var d = 0; d < C.wrapper.childNodes.length; d++) if (C.wrapper.childNodes[d].className) for (var e = C.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++) f[i] === b.slideClass && C.slides.push(C.wrapper.childNodes[d]);
            for (d = C.slides.length - 1; d >= 0; d--) C._extendSwiperSlide(C.slides[d]);
            c !== !1 && (c !== C.slides.length || a) && (h(), g(), C.updateActiveSlide(), C.params.pagination && C.createPagination(), C.callPlugins("numberOfSlidesChanged"))
        },
        C.createSlide = function (a, c, d) {
            c = c || C.params.slideClass,
            d = d || b.slideElement;
            var e = document.createElement(d);
            return e.innerHTML = a || "",
            e.className = c,
            C._extendSwiperSlide(e)
        },
        C.appendSlide = function (a, b, c) {
            return a ? a.nodeType ? C._extendSwiperSlide(a).append() : C.createSlide(a, b, c).append() : void 0
        },
        C.prependSlide = function (a, b, c) {
            return a ? a.nodeType ? C._extendSwiperSlide(a).prepend() : C.createSlide(a, b, c).prepend() : void 0
        },
        C.insertSlideAfter = function (a, b, c, d) {
            return "undefined" == typeof a ? !1 : b.nodeType ? C._extendSwiperSlide(b).insertAfter(a) : C.createSlide(b, c, d).insertAfter(a)
        },
        C.removeSlide = function (a) {
            if (C.slides[a]) {
                if (b.loop) {
                    if (!C.slides[a + C.loopedSlides]) return !1;
                    C.slides[a + C.loopedSlides].remove(),
                    C.removeLoopedSlides(),
                    C.calcSlides(),
                    C.createLoop()
                } else C.slides[a].remove();
                return !0
            }
            return !1
        },
        C.removeLastSlide = function () {
            return C.slides.length > 0 ? (b.loop ? (C.slides[C.slides.length - 1 - C.loopedSlides].remove(), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : C.slides[C.slides.length - 1].remove(), !0) : !1
        },
        C.removeAllSlides = function () {
            for (var a = C.slides.length - 1; a >= 0; a--) C.slides[a].remove()
        },
        C.getSlide = function (a) {
            return C.slides[a]
        },
        C.getLastSlide = function () {
            return C.slides[C.slides.length - 1]
        },
        C.getFirstSlide = function () {
            return C.slides[0]
        },
        C.activeSlide = function () {
            return C.slides[C.activeIndex]
        },
        C.fireCallback = function () {
            var a = arguments[0];
            if ("[object Array]" === Object.prototype.toString.call(a)) for (var c = 0; c < a.length; c++)"function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            else "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && C.fireCallback(b["on" + a]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
        },
        C.addCallback = function (a, b) {
            var c, e = this;
            return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b))
        },
        C.removeCallbacks = function (a) {
            C.params["on" + a] && (C.params["on" + a] = null)
        };
        var R = [];
        for (var S in C.plugins) if (b[S]) {
            var T = C.plugins[S](C, b[S]);
            T && R.push(T)
        }
        C.callPlugins = function (a, b) {
            b || (b = {});
            for (var c = 0; c < R.length; c++) a in R[c] && R[c][a](b)
        },
        !C.browser.ie10 && !C.browser.ie11 || b.onlyExternal || C.wrapper.classList.add("swiper-wp8-" + (M ? "horizontal" : "vertical")),
        b.freeMode && (C.container.className += " swiper-free-mode"),
        C.initialized = !1,
        C.init = function (a, c) {
            var d = C.h.getWidth(C.container, !1, b.roundLengths),
                e = C.h.getHeight(C.container, !1, b.roundLengths);
            if (d !== C.width || e !== C.height || a) {
                C.width = d,
                C.height = e;
                var f, g, h, i, j, k, l;
                I = M ? d : e;
                var m = C.wrapper;
                if (a && C.calcSlides(c), "auto" === b.slidesPerView) {
                    var n = 0,
                        o = 0;
                    b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""),
                    m.style.width = "",
                    m.style.height = "",
                    b.offsetPxBefore > 0 && (M ? C.wrapperLeft = b.offsetPxBefore : C.wrapperTop = b.offsetPxBefore),
                    b.offsetPxAfter > 0 && (M ? C.wrapperRight = b.offsetPxAfter : C.wrapperBottom = b.offsetPxAfter),
                    b.centeredSlides && (M ? (C.wrapperLeft = (I - this.slides[0].getWidth(!0, b.roundLengths)) / 2, C.wrapperRight = (I - C.slides[C.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (C.wrapperTop = (I - C.slides[0].getHeight(!0, b.roundLengths)) / 2, C.wrapperBottom = (I - C.slides[C.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)),
                    M ? (C.wrapperLeft >= 0 && (m.style.paddingLeft = C.wrapperLeft + "px"), C.wrapperRight >= 0 && (m.style.paddingRight = C.wrapperRight + "px")) : (C.wrapperTop >= 0 && (m.style.paddingTop = C.wrapperTop + "px"), C.wrapperBottom >= 0 && (m.style.paddingBottom = C.wrapperBottom + "px")),
                    k = 0;
                    var p = 0;
                    for (C.snapGrid = [], C.slidesGrid = [], h = 0, l = 0; l < C.slides.length; l++) {
                        f = C.slides[l].getWidth(!0, b.roundLengths),
                        g = C.slides[l].getHeight(!0, b.roundLengths),
                        b.calculateHeight && (h = Math.max(h, g));
                        var q = M ? f : g;
                        if (b.centeredSlides) {
                            var r = l === C.slides.length - 1 ? 0 : C.slides[l + 1].getWidth(!0, b.roundLengths),
                            s = l === C.slides.length - 1 ? 0 : C.slides[l + 1].getHeight(!0, b.roundLengths),
                            t = M ? r : s;
                            if (q > I) {
                                if (b.slidesPerViewFit) C.snapGrid.push(k + C.wrapperLeft),
                                C.snapGrid.push(k + q - I + C.wrapperLeft);
                                else for (var u = 0; u <= Math.floor(q / (I + C.wrapperLeft)); u++) C.snapGrid.push(0 === u ? k + C.wrapperLeft : k + C.wrapperLeft + I * u);
                                C.slidesGrid.push(k + C.wrapperLeft)
                            } else C.snapGrid.push(p),
                            C.slidesGrid.push(p);
                            p += q / 2 + t / 2
                        } else {
                            if (q > I) if (b.slidesPerViewFit) C.snapGrid.push(k),
                            C.snapGrid.push(k + q - I);
                            else if (0 !== I) for (var v = 0; v <= Math.floor(q / I); v++) C.snapGrid.push(k + I * v);
                            else C.snapGrid.push(k);
                            else C.snapGrid.push(k);
                            C.slidesGrid.push(k)
                        }
                        k += q,
                        n += f,
                        o += g
                    }
                    b.calculateHeight && (C.height = h),
                    M ? (F = n + C.wrapperRight + C.wrapperLeft, m.style.width = n + "px", m.style.height = C.height + "px") : (F = o + C.wrapperTop + C.wrapperBottom, m.style.width = C.width + "px", m.style.height = o + "px")
                } else if (b.scrollContainer) m.style.width = "",
                m.style.height = "",
                i = C.slides[0].getWidth(!0, b.roundLengths),
                j = C.slides[0].getHeight(!0, b.roundLengths),
                F = M ? i : j,
                m.style.width = i + "px",
                m.style.height = j + "px",
                E = M ? i : j;
                else {
                    if (b.calculateHeight) {
                        for (h = 0, j = 0, M || (C.container.style.height = ""), m.style.height = "", l = 0; l < C.slides.length; l++) C.slides[l].style.height = "",
                        h = Math.max(C.slides[l].getHeight(!0), h),
                        M || (j += C.slides[l].getHeight(!0));
                        g = h,
                        C.height = g,
                        M ? j = g : (I = g, C.container.style.height = I + "px")
                    } else g = M ? C.height : C.height / b.slidesPerView,
                    b.roundLengths && (g = Math.round(g)),
                    j = M ? C.height : C.slides.length * g;
                    for (f = M ? C.width / b.slidesPerView : C.width, b.roundLengths && (f = Math.round(f)), i = M ? C.slides.length * f : C.width, E = M ? f : g, b.offsetSlidesBefore > 0 && (M ? C.wrapperLeft = E * b.offsetSlidesBefore : C.wrapperTop = E * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (M ? C.wrapperRight = E * b.offsetSlidesAfter : C.wrapperBottom = E * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (M ? C.wrapperLeft = b.offsetPxBefore : C.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (M ? C.wrapperRight = b.offsetPxAfter : C.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (M ? (C.wrapperLeft = (I - E) / 2, C.wrapperRight = (I - E) / 2) : (C.wrapperTop = (I - E) / 2, C.wrapperBottom = (I - E) / 2)), M ? (C.wrapperLeft > 0 && (m.style.paddingLeft = C.wrapperLeft + "px"), C.wrapperRight > 0 && (m.style.paddingRight = C.wrapperRight + "px")) : (C.wrapperTop > 0 && (m.style.paddingTop = C.wrapperTop + "px"), C.wrapperBottom > 0 && (m.style.paddingBottom = C.wrapperBottom + "px")), F = M ? i + C.wrapperRight + C.wrapperLeft : j + C.wrapperTop + C.wrapperBottom, b.cssWidthAndHeight || (parseFloat(i) > 0 && (m.style.width = i + "px"), parseFloat(j) > 0 && (m.style.height = j + "px")), k = 0, C.snapGrid = [], C.slidesGrid = [], l = 0; l < C.slides.length; l++) C.snapGrid.push(k),
                    C.slidesGrid.push(k),
                    k += E,
                    b.cssWidthAndHeight || (parseFloat(f) > 0 && (C.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (C.slides[l].style.height = g + "px"))
                }
                C.initialized ? (C.callPlugins("onInit"), b.onInit && C.fireCallback(b.onInit, C)) : (C.callPlugins("onFirstInit"), b.onFirstInit && C.fireCallback(b.onFirstInit, C)),
                C.initialized = !0
            }
        },
        C.reInit = function (a) {
            C.init(!0, a)
        },
        C.resizeFix = function (a) {
            C.callPlugins("beforeResizeFix"),
            C.init(b.resizeReInit || a),
            b.freeMode ? C.getWrapperTranslate() < -e() && (C.setWrapperTransition(0), C.setWrapperTranslate(-e())) : (C.swipeTo(b.loop ? C.activeLoopIndex : C.activeIndex, 0, !1), b.autoplay && (C.support.transitions && "undefined" != typeof _ ? "undefined" != typeof _ && (clearTimeout(_), _ = void 0, C.startAutoplay()) : "undefined" != typeof ab && (clearInterval(ab), ab = void 0, C.startAutoplay()))),
            C.callPlugins("afterResizeFix")
        },
        C.destroy = function () {
            var a = C.h.removeEventListener,
                c = "wrapper" === b.eventTarget ? C.wrapper : C.container;
            C.browser.ie10 || C.browser.ie11 ? (a(c, C.touchEvents.touchStart, p), a(document, C.touchEvents.touchMove, q), a(document, C.touchEvents.touchEnd, r)) : (C.support.touch && (a(c, "touchstart", p), a(c, "touchmove", q), a(c, "touchend", r)), b.simulateTouch && (a(c, "mousedown", p), a(document, "mousemove", q), a(document, "mouseup", r))),
            b.autoResize && a(window, "resize", C.resizeFix),
            h(),
            b.paginationClickable && w(),
            b.mousewheelControl && C._wheelEvent && a(C.container, C._wheelEvent, j),
            b.keyboardControl && a(document, "keydown", i),
            b.autoplay && C.stopAutoplay(),
            C.callPlugins("onDestroy"),
            C = null
        },
        C.disableKeyboardControl = function () {
            b.keyboardControl = !1,
            C.h.removeEventListener(document, "keydown", i)
        },
        C.enableKeyboardControl = function () {
            b.keyboardControl = !0,
            C.h.addEventListener(document, "keydown", i)
        };
        var U = (new Date).getTime();
        if (b.grabCursor) {
            var V = C.container.style;
            V.cursor = "move",
            V.cursor = "grab",
            V.cursor = "-moz-grab",
            V.cursor = "-webkit-grab"
        }
        C.allowSlideClick = !0,
        C.allowLinks = !0;
        var W, X, Y, Z = !1,
            $ = !0;
        C.swipeNext = function (a) { ! a && b.loop && C.fixLoop(),
            !a && b.autoplay && C.stopAutoplay(!0),
            C.callPlugins("onSwipeNext");
            var c = C.getWrapperTranslate(),
                d = c;
            if ("auto" === b.slidesPerView) {
                for (var f = 0; f < C.snapGrid.length; f++) if (-c >= C.snapGrid[f] && -c < C.snapGrid[f + 1]) {
                    d = -C.snapGrid[f + 1];
                    break
                }
            } else {
                var g = E * b.slidesPerGroup;
                d = -(Math.floor(Math.abs(c) / Math.floor(g)) * g + g)
            }
            return d < -e() && (d = -e()),
            d === c ? !1 : (u(d, "next"), !0)
        },
        C.swipePrev = function (a) { ! a && b.loop && C.fixLoop(),
            !a && b.autoplay && C.stopAutoplay(!0),
            C.callPlugins("onSwipePrev");
            var c, d = Math.ceil(C.getWrapperTranslate());
            if ("auto" === b.slidesPerView) {
                c = 0;
                for (var e = 1; e < C.snapGrid.length; e++) {
                    if (-d === C.snapGrid[e]) {
                        c = -C.snapGrid[e - 1];
                        break
                    }
                    if (-d > C.snapGrid[e] && -d < C.snapGrid[e + 1]) {
                        c = -C.snapGrid[e];
                        break
                    }
                }
            } else {
                var f = E * b.slidesPerGroup;
                c = -(Math.ceil(-d / f) - 1) * f
            }
            return c > 0 && (c = 0),
            c === d ? !1 : (u(c, "prev"), !0)
        },
        C.swipeReset = function () {
            C.callPlugins("onSwipeReset"); {
                var a, c = C.getWrapperTranslate(),
                    d = E * b.slidesPerGroup; - e()
            }
            if ("auto" === b.slidesPerView) {
                a = 0;
                for (var f = 0; f < C.snapGrid.length; f++) {
                    if (-c === C.snapGrid[f]) return;
                    if (-c >= C.snapGrid[f] && -c < C.snapGrid[f + 1]) {
                        a = C.positions.diff > 0 ? -C.snapGrid[f + 1] : -C.snapGrid[f];
                        break
                    }
                } - c >= C.snapGrid[C.snapGrid.length - 1] && (a = -C.snapGrid[C.snapGrid.length - 1]),
                c <= -e() && (a = -e())
            } else a = 0 > c ? Math.round(c / d) * d : 0;
            return b.scrollContainer && (a = 0 > c ? c : 0),
            a < -e() && (a = -e()),
            b.scrollContainer && I > E && (a = 0),
            a === c ? !1 : (u(a, "reset"), !0)
        },
        C.swipeTo = function (a, c, d) {
            a = parseInt(a, 10),
            C.callPlugins("onSwipeTo", {
                index: a,
                speed: c
            }),
            b.loop && (a += C.loopedSlides);
            var f = C.getWrapperTranslate();
            if (! (a > C.slides.length - 1 || 0 > a)) {
                var g;
                return g = "auto" === b.slidesPerView ? -C.slidesGrid[a] : -a * E,
                g < -e() && (g = -e()),
                g === f ? !1 : (d = d === !1 ? !1 : !0, u(g, "to", {
                    index: a,
                    speed: c,
                    runCallbacks: d
                }), !0)
            }
        },
        C._queueStartCallbacks = !1,
        C._queueEndCallbacks = !1,
        C.updateActiveSlide = function (a) {
            if (C.initialized && 0 !== C.slides.length) {
                C.previousIndex = C.activeIndex,
                "undefined" == typeof a && (a = C.getWrapperTranslate()),
                a > 0 && (a = 0);
                var c;
                if ("auto" === b.slidesPerView) {
                    if (C.activeIndex = C.slidesGrid.indexOf(-a), C.activeIndex < 0) {
                        for (c = 0; c < C.slidesGrid.length - 1 && !(-a > C.slidesGrid[c] && -a < C.slidesGrid[c + 1]); c++);
                        var d = Math.abs(C.slidesGrid[c] + a),
                            e = Math.abs(C.slidesGrid[c + 1] + a);
                        C.activeIndex = e >= d ? c : c + 1
                    }
                } else C.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / E);
                if (C.activeIndex === C.slides.length && (C.activeIndex = C.slides.length - 1), C.activeIndex < 0 && (C.activeIndex = 0), C.slides[C.activeIndex]) {
                    if (C.calcVisibleSlides(a), C.support.classList) {
                        var f;
                        for (c = 0; c < C.slides.length; c++) f = C.slides[c],
                        f.classList.remove(b.slideActiveClass),
                        C.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
                        C.slides[C.activeIndex].classList.add(b.slideActiveClass)
                    } else {
                        var g = new RegExp("\\s*" + b.slideActiveClass),
                            h = new RegExp("\\s*" + b.slideVisibleClass);
                        for (c = 0; c < C.slides.length; c++) C.slides[c].className = C.slides[c].className.replace(g, "").replace(h, ""),
                        C.visibleSlides.indexOf(C.slides[c]) >= 0 && (C.slides[c].className += " " + b.slideVisibleClass);
                        C.slides[C.activeIndex].className += " " + b.slideActiveClass
                    }
                    if (b.loop) {
                        var i = C.loopedSlides;
                        C.activeLoopIndex = C.activeIndex - i,
                        C.activeLoopIndex >= C.slides.length - 2 * i && (C.activeLoopIndex = C.slides.length - 2 * i - C.activeLoopIndex),
                        C.activeLoopIndex < 0 && (C.activeLoopIndex = C.slides.length - 2 * i + C.activeLoopIndex),
                        C.activeLoopIndex < 0 && (C.activeLoopIndex = 0)
                    } else C.activeLoopIndex = C.activeIndex;
                    b.pagination && C.updatePagination(a)
                }
            }
        },
        C.createPagination = function (a) {
            if (b.paginationClickable && C.paginationButtons && w(), C.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
                var d = "",
                    e = C.slides.length,
                    f = e;
                b.loop && (f -= 2 * C.loopedSlides);
                for (var g = 0; f > g; g++) d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
                C.paginationContainer.innerHTML = d
            }
            C.paginationButtons = c("." + b.paginationElementClass, C.paginationContainer),
            a || C.updatePagination(),
            C.callPlugins("onCreatePagination"),
            b.paginationClickable && x()
        },
        C.updatePagination = function (a) {
            if (b.pagination && !(C.slides.length < 1)) {
                var d = c("." + b.paginationActiveClass, C.paginationContainer);
                if (d) {
                    var e = C.paginationButtons;
                    if (0 !== e.length) {
                        for (var f = 0; f < e.length; f++) e[f].className = b.paginationElementClass;
                        var g = b.loop ? C.loopedSlides : 0;
                        if (b.paginationAsRange) {
                            C.visibleSlides || C.calcVisibleSlides(a);
                            var h, i = [];
                            for (h = 0; h < C.visibleSlides.length; h++) {
                                var j = C.slides.indexOf(C.visibleSlides[h]) - g;
                                b.loop && 0 > j && (j = C.slides.length - 2 * C.loopedSlides + j),
                                b.loop && j >= C.slides.length - 2 * C.loopedSlides && (j = C.slides.length - 2 * C.loopedSlides - j, j = Math.abs(j)),
                                i.push(j)
                            }
                            for (h = 0; h < i.length; h++) e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
                            b.loop ? void 0 !== e[C.activeLoopIndex] && (e[C.activeLoopIndex].className += " " + b.paginationActiveClass) : e[C.activeIndex].className += " " + b.paginationActiveClass
                        } else b.loop ? e[C.activeLoopIndex] && (e[C.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[C.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass
                    }
                }
            }
        },
        C.calcVisibleSlides = function (a) {
            var c = [],
                d = 0,
                e = 0,
                f = 0;
            M && C.wrapperLeft > 0 && (a += C.wrapperLeft),
            !M && C.wrapperTop > 0 && (a += C.wrapperTop);
            for (var g = 0; g < C.slides.length; g++) {
                d += e,
                e = "auto" === b.slidesPerView ? M ? C.h.getWidth(C.slides[g], !0, b.roundLengths) : C.h.getHeight(C.slides[g], !0, b.roundLengths) : E,
                f = d + e;
                var h = !1;
                b.visibilityFullFit ? (d >= -a && -a + I >= f && (h = !0), -a >= d && f >= -a + I && (h = !0)) : (f > -a && -a + I >= f && (h = !0), d >= -a && -a + I > d && (h = !0), -a > d && f > -a + I && (h = !0)),
                h && c.push(C.slides[g])
            }
            0 === c.length && (c = [C.slides[C.activeIndex]]),
            C.visibleSlides = c
        };
        var _, ab;
        C.startAutoplay = function () {
            if (C.support.transitions) {
                if ("undefined" != typeof _) return !1;
                if (!b.autoplay) return;
                C.callPlugins("onAutoplayStart"),
                b.onAutoplayStart && C.fireCallback(b.onAutoplayStart, C),
                z()
            } else {
                if ("undefined" != typeof ab) return !1;
                if (!b.autoplay) return;
                C.callPlugins("onAutoplayStart"),
                b.onAutoplayStart && C.fireCallback(b.onAutoplayStart, C),
                ab = setInterval(function () {
                    b.loop ? (C.fixLoop(), C.swipeNext(!0)) : C.swipeNext(!0) || (b.autoplayStopOnLast ? (clearInterval(ab), ab = void 0) : C.swipeTo(0))
                },
                b.autoplay)
            }
        },
        C.stopAutoplay = function (a) {
            if (C.support.transitions) {
                if (!_) return;
                _ && clearTimeout(_),
                _ = void 0,
                a && !b.autoplayDisableOnInteraction && C.wrapperTransitionEnd(function () {
                    z()
                }),
                C.callPlugins("onAutoplayStop"),
                b.onAutoplayStop && C.fireCallback(b.onAutoplayStop, C)
            } else ab && clearInterval(ab),
            ab = void 0,
            C.callPlugins("onAutoplayStop"),
            b.onAutoplayStop && C.fireCallback(b.onAutoplayStop, C)
        },
        C.loopCreated = !1,
        C.removeLoopedSlides = function () {
            if (C.loopCreated) for (var a = 0; a < C.slides.length; a++) C.slides[a].getData("looped") === !0 && C.wrapper.removeChild(C.slides[a])
        },
        C.createLoop = function () {
            if (0 !== C.slides.length) {
                C.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : b.slidesPerView + b.loopAdditionalSlides,
                C.loopedSlides > C.slides.length && (C.loopedSlides = C.slides.length);
                var a, c = "",
                    d = "",
                    e = "",
                    f = C.slides.length,
                    g = Math.floor(C.loopedSlides / f),
                    h = C.loopedSlides % f;
                for (a = 0; g * f > a; a++) {
                    var i = a;
                    if (a >= f) {
                        var j = Math.floor(a / f);
                        i = a - f * j
                    }
                    e += C.slides[i].outerHTML
                }
                for (a = 0; h > a; a++) d += t(b.slideDuplicateClass, C.slides[a].outerHTML);
                for (a = f - h; f > a; a++) c += t(b.slideDuplicateClass, C.slides[a].outerHTML);
                var k = c + e + D.innerHTML + e + d;
                for (D.innerHTML = k, C.loopCreated = !0, C.calcSlides(), a = 0; a < C.slides.length; a++)(a < C.loopedSlides || a >= C.slides.length - C.loopedSlides) && C.slides[a].setData("looped", !0);
                C.callPlugins("onCreateLoop")
            }
        },
        C.fixLoop = function () {
            var a;
            C.activeIndex < C.loopedSlides ? (a = C.slides.length - 3 * C.loopedSlides + C.activeIndex, C.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && C.activeIndex >= 2 * C.loopedSlides || C.activeIndex > C.slides.length - 2 * b.slidesPerView) && (a = -C.slides.length + C.activeIndex + C.loopedSlides, C.swipeTo(a, 0, !1))
        },
        C.loadSlides = function () {
            var a = "";
            C.activeLoaderIndex = 0;
            for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++) a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
            C.wrapper.innerHTML = a,
            C.calcSlides(!0),
            b.loader.loadAllSlides || C.wrapperTransitionEnd(C.reloadSlides, !0)
        },
        C.reloadSlides = function () {
            var a = b.loader.slides,
                c = parseInt(C.activeSlide().data("swiperindex"), 10);
            if (! (0 > c || c > a.length - 1)) {
                C.activeLoaderIndex = c;
                var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
                    e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
                if (c > 0) {
                    var f = -E * (c - d);
                    C.setWrapperTranslate(f),
                    C.setWrapperTransition(0)
                }
                var g;
                if ("reload" === b.loader.logic) {
                    C.wrapper.innerHTML = "";
                    var h = "";
                    for (g = d; e >= g; g++) h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
                    C.wrapper.innerHTML = h
                } else {
                    var i = 1e3,
                        j = 0;
                    for (g = 0; g < C.slides.length; g++) {
                        var k = C.slides[g].data("swiperindex");
                        d > k || k > e ? C.wrapper.removeChild(C.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j))
                    }
                    for (g = d; e >= g; g++) {
                        var l;
                        i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], C.wrapper.insertBefore(l, C.wrapper.firstChild)),
                        g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], C.wrapper.appendChild(l))
                    }
                }
                C.reInit(!0)
            }
        },
        A()
    }
};
Swiper.prototype = {
    plugins: {},
    wrapperTransitionEnd: function (a, b) {
        "use strict";

        function c() {
            if (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b) for (d = 0; d < g.length; d++) e.h.removeEventListener(f, g[d], c)
        }
        var d, e = this,
            f = e.wrapper,
            g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (a) for (d = 0; d < g.length; d++) e.h.addEventListener(f, g[d], c)
    },
    getWrapperTranslate: function (a) {
        "use strict";
        var b, c, d, e, f = this.wrapper;
        return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"),
        this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix(d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)),
        c || 0
    },
    setWrapperTranslate: function (a, b, c) {
        "use strict";
        var d, e = this.wrapper.style,
            f = {
            x: 0,
            y: 0,
            z: 0
        };
        3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a),
        this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"),
        this.callPlugins("onSetWrapperTransform", f),
        this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f)
    },
    setWrapperTransition: function (a) {
        "use strict";
        var b = this.wrapper.style;
        b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s",
        this.callPlugins("onSetWrapperTransition", {
            duration: a
        }),
        this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a)
    },
    h: {
        getWidth: function (a, b, c) {
            "use strict";
            var d = window.getComputedStyle(a, null).getPropertyValue("width"),
                e = parseFloat(d);
            return (isNaN(e) || d.indexOf("%") > 0) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))),
            b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))),
            c ? Math.round(e) : e
        },
        getHeight: function (a, b, c) {
            "use strict";
            if (b) return a.offsetHeight;
            var d = window.getComputedStyle(a, null).getPropertyValue("height"),
                e = parseFloat(d);
            return (isNaN(e) || d.indexOf("%") > 0) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))),
            b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))),
            c ? Math.round(e) : e
        },
        getOffset: function (a) {
            "use strict";
            var b = a.getBoundingClientRect(),
                c = document.body,
                d = a.clientTop || c.clientTop || 0,
                e = a.clientLeft || c.clientLeft || 0,
                f = window.pageYOffset || a.scrollTop,
                g = window.pageXOffset || a.scrollLeft;
            return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft),
            {
                top: b.top + f - d,
                left: b.left + g - e
            }
        },
        windowWidth: function () {
            "use strict";
            return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
        },
        windowHeight: function () {
            "use strict";
            return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
        },
        windowScroll: function () {
            "use strict";
            return "undefined" != typeof pageYOffset ? {
                left: window.pageXOffset,
                top: window.pageYOffset
            } : document.documentElement ? {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            } : void 0
        },
        addEventListener: function (a, b, c, d) {
            "use strict";
            "undefined" == typeof d && (d = !1),
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        removeEventListener: function (a, b, c, d) {
            "use strict";
            "undefined" == typeof d && (d = !1),
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    },
    setTransform: function (a, b) {
        "use strict";
        var c = a.style;
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b
    },
    setTranslate: function (a, b) {
        "use strict";
        var c = a.style,
            d = {
            x: b.x || 0,
            y: b.y || 0,
            z: b.z || 0
        },
            e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e,
        this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px")
    },
    setTransition: function (a, b) {
        "use strict";
        var c = a.style;
        c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms"
    },
    support: {
        touch: window.Modernizr && Modernizr.touch === !0 ||
        function () {
            "use strict";
            return !! ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(),
        transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 ||
        function () {
            "use strict";
            var a = document.createElement("div").style;
            return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
        }(),
        transforms: window.Modernizr && Modernizr.csstransforms === !0 ||
        function () {
            "use strict";
            var a = document.createElement("div").style;
            return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a
        }(),
        transitions: window.Modernizr && Modernizr.csstransitions === !0 ||
        function () {
            "use strict";
            var a = document.createElement("div").style;
            return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a
        }(),
        classList: function () {
            "use strict";
            var a = document.createElement("div").style;
            return "classList" in a
        }()
    },
    browser: {
        ie8: function () {
            "use strict";
            var a = -1;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var b = navigator.userAgent,
                    c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                null !== c.exec(b) && (a = parseFloat(RegExp.$1))
            }
            return -1 !== a && 9 > a
        }(),
        ie10: window.navigator.msPointerEnabled,
        ie11: window.navigator.pointerEnabled
    }
},
(window.jQuery || window.Zepto) && !
function (a) {
    "use strict";
    a.fn.swiper = function (b) {
        var c = new Swiper(a(this)[0], b);
        return a(this).data("swiper", c),
        c
    }
}(window.jQuery || window.Zepto),
"undefined" != typeof module && (module.exports = Swiper),
"function" == typeof define && define.amd && define([], function () {
    "use strict";
    return Swiper
}),
!
function (a, b, c, d) {
    "use strict";

    function e(a, b, c) {
        return setTimeout(k(a, c), b)
    }
    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }
    function g(a, b, c) {
        var e, f;
        if (a) if (a.forEach) a.forEach(b, c);
        else if (a.length !== d) for (e = 0, f = a.length; f > e; e++) b.call(c, a[e], e, a);
        else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }
    function h(a, b, c) {
        for (var e = Object.keys(b), f = 0, g = e.length; g > f; f++)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]);
        return a
    }
    function i(a, b) {
        return h(a, b, !0)
    }
    function j(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e),
        d.constructor = a,
        d._super = e,
        c && h(d, c)
    }
    function k(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }
    function l(a, b) {
        return typeof a == hb ? a.apply(b ? b[0] || d : d, b) : a
    }
    function m(a, b) {
        return a === d ? b : a
    }
    function n(a, b, c) {
        g(r(b), function (b) {
            a.addEventListener(b, c, !1)
        })
    }
    function o(a, b, c) {
        g(r(b), function (b) {
            a.removeEventListener(b, c, !1)
        })
    }
    function p(a, b) {
        for (; a;) {
            if (a == b) return !0;
            a = a.parentNode
        }
        return !1
    }
    function q(a, b) {
        return a.indexOf(b) > -1
    }
    function r(a) {
        return a.trim().split(/\s+/g)
    }
    function s(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0, e = a.length; e > d; d++) if (c && a[d][c] == b || !c && a[d] === b) return d;
        return -1
    }
    function t(a) {
        return Array.prototype.slice.call(a, 0)
    }
    function u(a, b, c) {
        for (var d = [], e = [], f = 0, g = a.length; g > f; f++) {
            var h = b ? a[f][b] : a[f];
            s(e, h) < 0 && d.push(a[f]),
            e[f] = h
        }
        return c && (d = b ? d.sort(function (a, c) {
            return a[b] > c[b]
        }) : d.sort()),
        d
    }
    function v(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0, h = fb.length; h > g; g++) if (c = fb[g], e = c ? c + f : b, e in a) return e;
        return d
    }
    function w() {
        return lb++
    }
    function x(b, c) {
        var d = this;
        this.manager = b,
        this.callback = c,
        this.element = b.element,
        this.target = b.options.inputTarget,
        this.domHandler = function (a) {
            l(b.options.enable, [b]) && d.handler(a)
        },
        this.evEl && n(this.element, this.evEl, this.domHandler),
        this.evTarget && n(this.target, this.evTarget, this.domHandler),
        this.evWin && n(a, this.evWin, this.domHandler)
    }
    function y(a) {
        var b;
        return new(b = ob ? M : pb ? N : nb ? P : L)(a, z)
    }
    function z(a, b, c) {
        var d = c.pointers.length,
            e = c.changedPointers.length,
            f = b & vb && d - e === 0,
            g = b & (xb | yb) && d - e === 0;
        c.isFirst = !!f,
        c.isFinal = !!g,
        f && (a.session = {}),
        c.eventType = b,
        A(a, c),
        a.emit("hammer.input", c),
        a.recognize(c),
        a.session.prevInput = c
    }
    function A(a, b) {
        var c = a.session,
            d = b.pointers,
            e = d.length;
        c.firstInput || (c.firstInput = D(b)),
        e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput,
            g = c.firstMultiple,
            h = g ? g.center : f.center,
        i = b.center = E(d);
        b.timeStamp = kb(),
        b.deltaTime = b.timeStamp - f.timeStamp,
        b.angle = I(h, i),
        b.distance = H(h, i),
        B(c, b),
        b.offsetDirection = G(b.deltaX, b.deltaY),
        b.scale = g ? K(g.pointers, d) : 1,
        b.rotation = g ? J(g.pointers, d) : 0,
        C(c, b);
        var j = a.element;
        p(b.srcEvent.target, j) && (j = b.srcEvent.target),
        b.target = j
    }
    function B(a, b) {
        var c = b.center,
            d = a.offsetDelta || {},
            e = a.prevDelta || {},
            f = a.prevInput || {};
        (b.eventType === vb || f.eventType === xb) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        },
        d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }),
        b.deltaX = e.x + (c.x - d.x),
        b.deltaY = e.y + (c.y - d.y)
    }
    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b,
            i = b.timeStamp - h.timeStamp;
        if (b.eventType != yb && (i > ub || h.velocity === d)) {
            var j = h.deltaX - b.deltaX,
                k = h.deltaY - b.deltaY,
                l = F(i, j, k);
            e = l.x,
            f = l.y,
            c = jb(l.x) > jb(l.y) ? l.x : l.y,
            g = G(j, k),
            a.lastInterval = b
        } else c = h.velocity,
        e = h.velocityX,
        f = h.velocityY,
        g = h.direction;
        b.velocity = c,
        b.velocityX = e,
        b.velocityY = f,
        b.direction = g
    }
    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length; c++) b[c] = {
            clientX: ib(a.pointers[c].clientX),
            clientY: ib(a.pointers[c].clientY)
        };
        return {
            timeStamp: kb(),
            pointers: b,
            center: E(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }
    function E(a) {
        var b = a.length;
        if (1 === b) return {
            x: ib(a[0].clientX),
            y: ib(a[0].clientY)
        };
        for (var c = 0, d = 0, e = 0; b > e; e++) c += a[e].clientX,
        d += a[e].clientY;
        return {
            x: ib(c / b),
            y: ib(d / b)
        }
    }
    function F(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        }
    }
    function G(a, b) {
        return a === b ? zb : jb(a) >= jb(b) ? a > 0 ? Ab : Bb : b > 0 ? Cb : Db
    }
    function H(a, b, c) {
        c || (c = Hb);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }
    function I(a, b, c) {
        c || (c = Hb);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }
    function J(a, b) {
        return I(b[1], b[0], Ib) - I(a[1], a[0], Ib)
    }
    function K(a, b) {
        return H(b[0], b[1], Ib) / H(a[0], a[1], Ib)
    }
    function L() {
        this.evEl = Kb,
        this.evWin = Lb,
        this.allow = !0,
        this.pressed = !1,
        x.apply(this, arguments)
    }
    function M() {
        this.evEl = Ob,
        this.evWin = Pb,
        x.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function N() {
        this.evTarget = Rb,
        this.targetIds = {},
        x.apply(this, arguments)
    }
    function O(a, b) {
        var c = t(a.touches),
            d = this.targetIds;
        if (b & (vb | wb) && 1 === c.length) return d[c[0].identifier] = !0,
        [c, c];
        var e, f, g = t(a.targetTouches),
            h = t(a.changedTouches),
            i = [];
        if (b === vb) for (e = 0, f = g.length; f > e; e++) d[g[e].identifier] = !0;
        for (e = 0, f = h.length; f > e; e++) d[h[e].identifier] && i.push(h[e]),
        b & (xb | yb) && delete d[h[e].identifier];
        return i.length ? [u(g.concat(i), "identifier", !0), i] : void 0
    }
    function P() {
        x.apply(this, arguments);
        var a = k(this.handler, this);
        this.touch = new N(this.manager, a),
        this.mouse = new L(this.manager, a)
    }
    function Q(a, b) {
        this.manager = a,
        this.set(b)
    }
    function R(a) {
        if (q(a, Xb)) return Xb;
        var b = q(a, Yb),
            c = q(a, Zb);
        return b && c ? Yb + " " + Zb : b || c ? b ? Yb : Zb : q(a, Wb) ? Wb : Vb
    }
    function S(a) {
        this.id = w(),
        this.manager = null,
        this.options = i(a || {},
        this.defaults),
        this.options.enable = m(this.options.enable, !0),
        this.state = $b,
        this.simultaneous = {},
        this.requireFail = []
    }
    function T(a) {
        return a & dc ? "cancel" : a & bc ? "end" : a & ac ? "move" : a & _b ? "start" : ""
    }
    function U(a) {
        return a == Db ? "down" : a == Cb ? "up" : a == Ab ? "left" : a == Bb ? "right" : ""
    }
    function V(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }
    function W() {
        S.apply(this, arguments)
    }
    function X() {
        W.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function Y() {
        W.apply(this, arguments)
    }
    function Z() {
        S.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function $() {
        W.apply(this, arguments)
    }
    function _() {
        W.apply(this, arguments)
    }
    function ab() {
        S.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function bb(a, b) {
        return b = b || {},
        b.recognizers = m(b.recognizers, bb.defaults.preset),
        new cb(a, b)
    }
    function cb(a, b) {
        b = b || {},
        this.options = i(b, bb.defaults),
        this.options.inputTarget = this.options.inputTarget || a,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.element = a,
        this.input = y(this),
        this.touchAction = new Q(this, this.options.touchAction),
        db(this, !0),
        g(b.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]),
            a[3] && b.requireFailure(a[2])
        },
        this)
    }
    function db(a, b) {
        var c = a.element;
        g(a.options.cssProps, function (a, d) {
            c.style[v(c.style, d)] = b ? a : ""
        })
    }
    function eb(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0),
        d.gesture = c,
        c.target.dispatchEvent(d)
    }
    var fb = ["", "webkit", "moz", "MS", "ms", "o"],
        gb = b.createElement("div"),
        hb = "function",
        ib = Math.round,
        jb = Math.abs,
        kb = Date.now,
        lb = 1,
        mb = /mobile|tablet|ip(ad|hone|od)|android/i,
        nb = "ontouchstart" in a,
        ob = v(a, "PointerEvent") !== d,
        pb = nb && mb.test(navigator.userAgent),
        qb = "touch",
        rb = "pen",
        sb = "mouse",
        tb = "kinect",
        ub = 25,
        vb = 1,
        wb = 2,
        xb = 4,
        yb = 8,
        zb = 1,
        Ab = 2,
        Bb = 4,
        Cb = 8,
        Db = 16,
        Eb = Ab | Bb,
        Fb = Cb | Db,
        Gb = Eb | Fb,
        Hb = ["x", "y"],
        Ib = ["clientX", "clientY"];
    x.prototype = {
        handler: function () {},
        destroy: function () {
            this.evEl && o(this.element, this.evEl, this.domHandler),
            this.evTarget && o(this.target, this.evTarget, this.domHandler),
            this.evWin && o(a, this.evWin, this.domHandler)
        }
    };
    var Jb = {
        mousedown: vb,
        mousemove: wb,
        mouseup: xb
    },
        Kb = "mousedown",
        Lb = "mousemove mouseup";
    j(L, x, {
        handler: function (a) {
            var b = Jb[a.type];
            b & vb && 0 === a.button && (this.pressed = !0),
            b & wb && 1 !== a.which && (b = xb),
            this.pressed && this.allow && (b & xb && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: sb,
                srcEvent: a
            }))
        }
    });
    var Mb = {
        pointerdown: vb,
        pointermove: wb,
        pointerup: xb,
        pointercancel: yb,
        pointerout: yb
    },
        Nb = {
        2: qb,
        3: rb,
        4: sb,
        5: tb
    },
        Ob = "pointerdown",
        Pb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (Ob = "MSPointerDown", Pb = "MSPointerMove MSPointerUp MSPointerCancel"),
    j(M, x, {
        handler: function (a) {
            var b = this.store,
                c = !1,
                d = a.type.toLowerCase().replace("ms", ""),
                e = Mb[d],
                f = Nb[a.pointerType] || a.pointerType,
                g = f == qb;
            e & vb && (0 === a.button || g) ? b.push(a) : e & (xb | yb) && (c = !0);
            var h = s(b, a.pointerId, "pointerId");
            0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var Qb = {
        touchstart: vb,
        touchmove: wb,
        touchend: xb,
        touchcancel: yb
    },
        Rb = "touchstart touchmove touchend touchcancel";
    j(N, x, {
        handler: function (a) {
            var b = Qb[a.type],
                c = O.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: qb,
                srcEvent: a
            })
        }
    }),
    j(P, x, {
        handler: function (a, b, c) {
            var d = c.pointerType == qb,
                e = c.pointerType == sb;
            if (d) this.mouse.allow = !1;
            else if (e && !this.mouse.allow) return;
            b & (xb | yb) && (this.mouse.allow = !0),
            this.callback(a, b, c)
        },
        destroy: function () {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var Sb = v(gb.style, "touchAction"),
        Tb = Sb !== d,
        Ub = "compute",
        Vb = "auto",
        Wb = "manipulation",
        Xb = "none",
        Yb = "pan-x",
        Zb = "pan-y";
    Q.prototype = {
        set: function (a) {
            a == Ub && (a = this.compute()),
            Tb && (this.manager.element.style[Sb] = a),
            this.actions = a.toLowerCase().trim()
        },
        update: function () {
            this.set(this.manager.options.touchAction)
        },
        compute: function () {
            var a = [];
            return g(this.manager.recognizers, function (b) {
                l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }),
            R(a.join(" "))
        },
        preventDefaults: function (a) {
            if (!Tb) {
                var b = a.srcEvent,
                    c = a.offsetDirection;
                if (this.manager.session.prevented) return void b.preventDefault();
                var d = this.actions,
                    e = q(d, Xb),
                    f = q(d, Zb),
                    g = q(d, Yb);
                return e || f && g || f && c & Eb || g && c & Fb ? this.preventSrc(b) : void 0
            }
        },
        preventSrc: function (a) {
            this.manager.session.prevented = !0,
            a.preventDefault()
        }
    };
    var $b = 1,
        _b = 2,
        ac = 4,
        bc = 8,
        cc = bc,
        dc = 16,
        ec = 32;
    S.prototype = {
        defaults: {},
        set: function (a) {
            return h(this.options, a),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function (a) {
            if (f(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            return a = V(a, this),
            b[a.id] || (b[a.id] = a, a.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function (a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = V(a, this), delete this.simultaneous[a.id], this)
        },
        requireFailure: function (a) {
            if (f(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            return a = V(a, this),
            -1 === s(b, a) && (b.push(a), a.requireFailure(this)),
            this
        },
        dropRequireFailure: function (a) {
            if (f(a, "dropRequireFailure", this)) return this;
            a = V(a, this);
            var b = s(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1),
            this
        },
        hasRequireFailures: function () {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function (a) {
            return !!this.simultaneous[a.id]
        },
        emit: function (a) {
            function b(b) {
                c.manager.emit(c.options.event + (b ? T(d) : ""), a)
            }
            var c = this,
                d = this.state;
            bc > d && b(!0),
            b(),
            d >= bc && b(!0)
        },
        tryEmit: function (a) {
            return this.canEmit() ? this.emit(a) : void(this.state = ec)
        },
        canEmit: function () {
            for (var a = 0; a < this.requireFail.length; a++) if (! (this.requireFail[a].state & (ec | $b))) return !1;
            return !0
        },
        recognize: function (a) {
            var b = h({},
            a);
            return l(this.options.enable, [this, b]) ? (this.state & (cc | dc | ec) && (this.state = $b), this.state = this.process(b), void(this.state & (_b | ac | bc | dc) && this.tryEmit(b))) : (this.reset(), void(this.state = ec))
        },
        process: function () {},
        getTouchAction: function () {},
        reset: function () {}
    },
    j(W, S, {
        defaults: {
            pointers: 1
        },
        attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        },
        process: function (a) {
            var b = this.state,
                c = a.eventType,
                d = b & (_b | ac),
                e = this.attrTest(a);
            return d && (c & yb || !e) ? b | dc : d || e ? c & xb ? b | bc : b & _b ? b | ac : _b : ec
        }
    }),
    j(X, W, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Gb
        },
        getTouchAction: function () {
            var a = this.options.direction;
            if (a === Gb) return [Xb];
            var b = [];
            return a & Eb && b.push(Zb),
            a & Fb && b.push(Yb),
            b
        },
        directionTest: function (a) {
            var b = this.options,
                c = !0,
                d = a.distance,
                e = a.direction,
                f = a.deltaX,
                g = a.deltaY;
            return e & b.direction || (b.direction & Eb ? (e = 0 === f ? zb : 0 > f ? Ab : Bb, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? zb : 0 > g ? Cb : Db, c = g != this.pY, d = Math.abs(a.deltaY))),
            a.direction = e,
            c && d > b.threshold && e & b.direction
        },
        attrTest: function (a) {
            return W.prototype.attrTest.call(this, a) && (this.state & _b || !(this.state & _b) && this.directionTest(a))
        },
        emit: function (a) {
            this.pX = a.deltaX,
            this.pY = a.deltaY;
            var b = U(a.direction);
            b && this.manager.emit(this.options.event + b, a),
            this._super.emit.call(this, a)
        }
    }),
    j(Y, W, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [Xb]
        },
        attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & _b)
        },
        emit: function (a) {
            if (this._super.emit.call(this, a), 1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + b, a)
            }
        }
    }),
    j(Z, S, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function () {
            return [Vb]
        },
        process: function (a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (xb | yb) && !f) this.reset();
            else if (a.eventType & vb) this.reset(),
            this._timer = e(function () {
                this.state = cc,
                this.tryEmit()
            },
            b.time, this);
            else if (a.eventType & xb) return cc;
            return ec
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function (a) {
            this.state === cc && (a && a.eventType & xb ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = kb(), this.manager.emit(this.options.event, this._input)))
        }
    }),
    j($, W, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [Xb]
        },
        attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & _b)
        }
    }),
    j(_, W, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: Eb | Fb,
            pointers: 1
        },
        getTouchAction: function () {
            return X.prototype.getTouchAction.call(this)
        },
        attrTest: function (a) {
            var b, c = this.options.direction;
            return c & (Eb | Fb) ? b = a.velocity : c & Eb ? b = a.velocityX : c & Fb && (b = a.velocityY),
            this._super.attrTest.call(this, a) && c & a.direction && jb(b) > this.options.velocity && a.eventType & xb
        },
        emit: function (a) {
            var b = U(a.direction);
            b && this.manager.emit(this.options.event + b, a),
            this.manager.emit(this.options.event, a)
        }
    }),
    j(ab, S, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function () {
            return [Wb]
        },
        process: function (a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & vb && 0 === this.count) return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != xb) return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp,
                this.pCenter = a.center,
                h && g ? this.count += 1 : this.count = 1,
                this._input = a;
                var i = this.count % b.taps;
                if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
                    this.state = cc,
                    this.tryEmit()
                },
                b.interval, this), _b) : cc
            }
            return ec
        },
        failTimeout: function () {
            return this._timer = e(function () {
                this.state = ec
            },
            this.options.interval, this),
            ec
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function () {
            this.state == cc && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }),
    bb.VERSION = "2.0.2",
    bb.defaults = {
        domEvents: !1,
        touchAction: Ub,
        inputTarget: null,
        enable: !0,
        preset: [
            [$, {
                enable: !1
            }],
            [Y, {
                enable: !1
            },
            ["rotate"]],
            [_, {
                direction: Eb
            }],
            [X, {
                direction: Eb
            },
            ["swipe"]],
            [ab],
            [ab, {
                event: "doubletap",
                taps: 2
            },
            ["tap"]],
            [Z]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var fc = 1,
        gc = 2;
    cb.prototype = {
        set: function (a) {
            return h(this.options, a),
            this
        },
        stop: function (a) {
            this.session.stopped = a ? gc : fc
        },
        recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers,
                    e = b.curRecognizer;
                (!e || e && e.state & cc) && (e = b.curRecognizer = null);
                for (var f = 0, g = d.length; g > f; f++) c = d[f],
                b.stopped === gc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a),
                !e && c.state & (_b | ac | bc) && (e = b.curRecognizer = c)
            }
        },
        get: function (a) {
            if (a instanceof S) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++) if (b[c].options.event == a) return b[c];
            return null
        },
        add: function (a) {
            if (f(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b),
            this.recognizers.push(a),
            a.manager = this,
            this.touchAction.update(),
            a
        },
        remove: function (a) {
            if (f(a, "remove", this)) return this;
            var b = this.recognizers;
            return a = this.get(a),
            b.splice(s(b, a), 1),
            this.touchAction.update(),
            this
        },
        on: function (a, b) {
            var c = this.handlers;
            return g(r(a), function (a) {
                c[a] = c[a] || [],
                c[a].push(b)
            }),
            this
        },
        off: function (a, b) {
            var c = this.handlers;
            return g(r(a), function (a) {
                b ? c[a].splice(s(c[a], b), 1) : delete c[a]
            }),
            this
        },
        emit: function (a, b) {
            this.options.domEvents && eb(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a,
                b.preventDefault = function () {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0, e = c.length; e > d; d++) c[d](b)
            }
        },
        destroy: function () {
            this.element && db(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    h(bb, {
        INPUT_START: vb,
        INPUT_MOVE: wb,
        INPUT_END: xb,
        INPUT_CANCEL: yb,
        STATE_POSSIBLE: $b,
        STATE_BEGAN: _b,
        STATE_CHANGED: ac,
        STATE_ENDED: bc,
        STATE_RECOGNIZED: cc,
        STATE_CANCELLED: dc,
        STATE_FAILED: ec,
        DIRECTION_NONE: zb,
        DIRECTION_LEFT: Ab,
        DIRECTION_RIGHT: Bb,
        DIRECTION_UP: Cb,
        DIRECTION_DOWN: Db,
        DIRECTION_HORIZONTAL: Eb,
        DIRECTION_VERTICAL: Fb,
        DIRECTION_ALL: Gb,
        Manager: cb,
        Input: x,
        TouchAction: Q,
        Recognizer: S,
        AttrRecognizer: W,
        Tap: ab,
        Pan: X,
        Swipe: _,
        Pinch: Y,
        Rotate: $,
        Press: Z,
        on: n,
        off: o,
        each: g,
        merge: i,
        extend: h,
        inherit: j,
        bindFn: k,
        prefixed: v
    }),
    typeof define == hb && define.amd ? define(function () {
        return bb
    }) : "undefined" != typeof module && module.exports ? module.exports = bb : a[c] = bb
}(window, document, "Hammer"),


function (a, b, c) {
    function d(d, e) {
        var f = a(d);
        f.data(c) || f.data(c, new b(f[0], e))
    }
    a.fn.hammer = function (a) {
        return this.each(function () {
            d(this, a)
        })
    },
    b.Manager.prototype.emit = function (a) {
        return function (b, c) {
            a.call(this, b, c),
            jQuery(this.element).triggerHandler({
                type: b,
                gesture: c
            })
        }
    }(b.Manager.prototype.emit)
}(jQuery, Hammer, "hammer"),
!
function () {
    function define(a, b, c) {
        if (_modules[a] = {
            exports: {},
            value: null,
            factory: null
        },
        2 === arguments.length && (c = b), "[object Object]" === _modules.toString.call(c)) _modules[a].value = c;
        else {
            if ("function" != typeof c) throw new Error("define函数未定义的行为");
            _modules[a].factory = c
        }
    }
    function require(a) {
        var b = _modules[a],
            c = null;
        return b ? b.value ? b.value : (c = b.factory.call(null, require, b.exports, b), c && (b.exports = c), b.value = b.exports, b.value) : null
    }
    function use(a) {
        return require(a)
    }
    var _modules = {};
    define("animate/animator", ["animate/timeline", "graphic/eventhandler", "animate/frame", "core/utils", "core/class", "animate/easing", "graphic/shape", "graphic/svg", "graphic/styled", "graphic/data", "graphic/matrix", "graphic/pen", "graphic/box"], function (a) {
        function b(a) {
            var b = parseFloat(a, 10);
            return /ms/.test(a) ? b : /s/.test(a) ? 1e3 * b : /min/.test(a) ? 60 * b * 1e3 : b
        }
        var c = a("animate/timeline"),
            d = a("animate/easing"),
            e = a("core/class").createClass("Animator", {
            constructor: function (a, b, c) {
                if (1 == arguments.length) {
                    var d = arguments[0];
                    this.beginValue = d.beginValue,
                    this.finishValue = d.finishValue,
                    this.setter = d.setter
                } else this.beginValue = a,
                this.finishValue = b,
                this.setter = c
            },
            start: function (a, c, d, e, f) {
                4 === arguments.length && "function" == typeof e && (f = e, e = 0);
                var g = this.create(a, c, d, f);
                return e = b(e),
                e > 0 ? setTimeout(function () {
                    g.play()
                },
                e) : g.play(),
                g
            },
            create: function (a, f, g, h) {
                var i;
                return f = f && b(f) || e.DEFAULT_DURATION,
                g = g || e.DEFAULT_EASING,
                "string" == typeof g && (g = d[g]),
                i = new c(this, a, f, g),
                "function" == typeof h && i.on("finish", h),
                i
            },
            reverse: function () {
                return new e(this.finishValue, this.beginValue, this.setter)
            }
        });
        e.DEFAULT_DURATION = 300,
        e.DEFAULT_EASING = "linear";
        var f = a("graphic/shape");
        return a("core/class").extendClass(f, {
            animate: function (a, b, c, d, e) {
                function f() {
                    g.shift(),
                    g.length && setTimeout(g[0].t.play.bind(g[0].t), g[0].d)
                }
                var g = this._KityAnimateQueue = this._KityAnimateQueue || [],
                    h = a.create(this, b, c, e);
                return h.on("finish", f),
                g.push({
                    t: h,
                    d: d
                }),
                1 == g.length && setTimeout(h.play.bind(h), d),
                this
            },
            stop: function () {
                var a = this._KityAnimateQueue;
                if (a) for (; a.length;) a.shift().stop()
            }
        }),
        e
    }),
    define("animate/easing", [], function () {
        var a = {
            linear: function (a, b, c, d) {
                return c * (a / d) + b
            },
            swing: function (b, c, d, e) {
                return a.easeOutQuad(b, c, d, e)
            },
            ease: function (b, c, d, e) {
                return a.easeInOutCubic(b, c, d, e)
            },
            easeInQuad: function (a, b, c, d) {
                return c * (a /= d) * a + b
            },
            easeOutQuad: function (a, b, c, d) {
                return -c * (a /= d) * (a - 2) + b
            },
            easeInOutQuad: function (a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
            },
            easeInCubic: function (a, b, c, d) {
                return c * (a /= d) * a * a + b
            },
            easeOutCubic: function (a, b, c, d) {
                return c * ((a = a / d - 1) * a * a + 1) + b
            },
            easeInOutCubic: function (a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
            },
            easeInQuart: function (a, b, c, d) {
                return c * (a /= d) * a * a * a + b
            },
            easeOutQuart: function (a, b, c, d) {
                return -c * ((a = a / d - 1) * a * a * a - 1) + b
            },
            easeInOutQuart: function (a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
            },
            easeInQuint: function (a, b, c, d) {
                return c * (a /= d) * a * a * a * a + b
            },
            easeOutQuint: function (a, b, c, d) {
                return c * ((a = a / d - 1) * a * a * a * a + 1) + b
            },
            easeInOutQuint: function (a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
            },
            easeInSine: function (a, b, c, d) {
                return -c * Math.cos(a / d * (Math.PI / 2)) + c + b
            },
            easeOutSine: function (a, b, c, d) {
                return c * Math.sin(a / d * (Math.PI / 2)) + b
            },
            easeInOutSine: function (a, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b
            },
            easeInExpo: function (a, b, c, d) {
                return 0 === a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b
            },
            easeOutExpo: function (a, b, c, d) {
                return a == d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b
            },
            easeInOutExpo: function (a, b, c, d) {
                return 0 === a ? b : a == d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
            },
            easeInCirc: function (a, b, c, d) {
                return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b
            },
            easeOutCirc: function (a, b, c, d) {
                return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
            },
            easeInOutCirc: function (a, b, c, d) {
                return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
            },
            easeInElastic: function (a, b, c, d) {
                var e = 1.70158,
                    f = 0,
                    g = c;
                return 0 === a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), g < Math.abs(c) ? (g = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / g), -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f)) + b)
            },
            easeOutElastic: function (a, b, c, d) {
                var e = 1.70158,
                    f = 0,
                    g = c;
                return 0 === a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), g < Math.abs(c) ? (g = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / g), g * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - e) * Math.PI / f) + c + b)
            },
            easeInOutElastic: function (a, b, c, d) {
                var e = 1.70158,
                    f = 0,
                    g = c;
                if (0 === a) return b;
                if (2 == (a /= d / 2)) return b + c;
                if (f || (f = .3 * d * 1.5), g < Math.abs(c)) {
                    g = c;
                    var e = f / 4
                } else var e = f / (2 * Math.PI) * Math.asin(c / g);
                return 1 > a ? -.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f) + b : g * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f) * .5 + c + b
            },
            easeInBack: function (a, b, c, d, e) {
                return void 0 == e && (e = 1.70158),
                c * (a /= d) * a * ((e + 1) * a - e) + b
            },
            easeOutBack: function (a, b, c, d, e) {
                return void 0 == e && (e = 1.70158),
                c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b
            },
            easeInOutBack: function (a, b, c, d, e) {
                return void 0 == e && (e = 1.70158),
                (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b
            },
            easeInBounce: function (b, c, d, e) {
                return d - a.easeOutBounce(e - b, 0, d, e) + c
            },
            easeOutBounce: function (a, b, c, d) {
                return (a /= d) < 1 / 2.75 ? 7.5625 * c * a * a + b : 2 / 2.75 > a ? c * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : 2.5 / 2.75 > a ? c * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
            },
            easeInOutBounce: function (b, c, d, e) {
                return e / 2 > b ? .5 * a.easeInBounce(2 * b, 0, d, e) + c : .5 * a.easeOutBounce(2 * b - e, 0, d, e) + .5 * d + c
            }
        };
        return a
    }),
    define("animate/frame", [], function (a, b) {
        function c(a) {
            1 === j.push(a) && i(d)
        }
        function d() {
            var a = j;
            for (j = []; a.length;) h(a.pop())
        }
        function e(a) {
            var b = g(a);
            return c(b),
            b
        }
        function f(a) {
            var b = j.indexOf(a);~b && j.splice(b, 1)
        }
        function g(a) {
            var b = {
                index: 0,
                time: +new Date,
                elapsed: 0,
                action: a,
                next: function () {
                    c(b)
                }
            };
            return b
        }
        function h(a) {
            var b = +new Date,
                c = b - a.time;
            c > 200 && (c = 1e3 / 60),
            a.dur = c,
            a.elapsed += c,
            a.time = b,
            a.action.call(null, a),
            a.index++
        }
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (a) {
            return setTimeout(a, 1e3 / 60)
        },
            j = [];
        b.requestFrame = e,
        b.releaseFrame = f
    }),
    define("animate/opacityanimator", ["animate/animator", "animate/timeline", "animate/easing", "core/class", "graphic/shape", "graphic/svg", "core/utils", "graphic/eventhandler", "graphic/styled", "graphic/data", "graphic/matrix", "graphic/pen", "graphic/box"], function (a) {
        var b = a("animate/animator"),
            c = a("core/class").createClass("OpacityAnimator", {
            base: b,
            constructor: function (a) {
                this.callBase({
                    beginValue: function (a) {
                        return a.getOpacity()
                    },
                    finishValue: a,
                    setter: function (a, b) {
                        a.setOpacity(b)
                    }
                })
            }
        }),
            d = a("graphic/shape");
        return a("core/class").extendClass(d, {
            fxOpacity: function (a, b, d, e, f) {
                return this.animate(new c(a), b, d, e, f)
            },
            fadeTo: function () {
                return this.fxOpacity.apply(this, arguments)
            },
            fadeIn: function () {
                return this.fxOpacity.apply(this, [1].concat([].slice.call(arguments)))
            },
            fadeOut: function () {
                return this.fxOpacity.apply(this, [0].concat([].slice.call(arguments)))
            }
        }),
        c
    }),
    define("animate/pathanimator", ["animate/animator", "animate/timeline", "animate/easing", "core/class", "graphic/shape", "graphic/geometry", "core/utils", "graphic/point", "graphic/vector", "graphic/matrix", "graphic/path", "graphic/svg"], function (a) {
        var b = a("animate/animator"),
            c = a("graphic/geometry"),
            d = a("core/class").createClass("OpacityAnimator", {
            base: b,
            constructor: function (a) {
                this.callBase({
                    beginValue: function (a) {
                        return this.beginPath = a.getPathData(),
                        0
                    },
                    finishValue: 1,
                    setter: function (b, d) {
                        b.setPathData(c.pathTween(this.beginPath, a, d))
                    }
                })
            }
        }),
            e = a("graphic/path");
        return a("core/class").extendClass(e, {
            fxPath: function (a, b, c, e, f) {
                return this.animate(new d(a), b, c, e, f)
            }
        }),
        d
    }),
    define("animate/timeline", ["graphic/eventhandler", "core/utils", "graphic/shapeevent", "core/class", "animate/frame"], function (a) {
        function b(a, b, c) {
            return g.paralle(a, b, function (a, b) {
                return a + (b - a) * c
            })
        }
        function c(a, b) {
            return g.paralle(a, b, function (a, b) {
                return b - a
            })
        }
        function d(a, b, c) {
            this.timeline = a,
            this.target = a.target,
            this.type = b;
            for (var d in c) c.hasOwnProperty(d) && (this[d] = c[d])
        }
        var e = a("graphic/eventhandler"),
            f = a("animate/frame"),
            g = a("core/utils"),
            h = a("core/class").createClass("Timeline", {
            mixins: [e],
            constructor: function (a, b, c, d) {
                this.callMixin(),
                this.target = b,
                this.time = 0,
                this.duration = c,
                this.easing = d,
                this.animator = a,
                this.beginValue = a.beginValue,
                this.finishValue = a.finishValue,
                this.setter = a.setter,
                this.status = "ready"
            },
            nextFrame: function (a) {
                "playing" == this.status && (this.time += a.dur, this.setValue(this.getValue()), this.time >= this.duration && this.timeUp(), a.next())
            },
            getPlayTime: function () {
                return this.rollbacking ? this.duration - this.time : this.time
            },
            getTimeProportion: function () {
                return this.getPlayTime() / this.duration
            },
            getValueProportion: function () {
                return this.easing(this.getPlayTime(), 0, 1, this.duration)
            },
            getValue: function () {
                var a = this.beginValue,
                    c = this.finishValue,
                    d = this.getValueProportion();
                return b(a, c, d)
            },
            setValue: function (a) {
                this.lastValue = this.currentValue,
                this.currentValue = a,
                this.setter.call(this.target, this.target, a, this)
            },
            getDelta: function () {
                return this.lastValue = void 0 === this.lastValue ? this.beginValue : this.lastValue,
                c(this.lastValue, this.currentValue)
            },
            play: function () {
                var a = this.status;
                switch (this.status = "playing", a) {
                case "ready":
                    g.isFunction(this.beginValue) && (this.beginValue = this.beginValue.call(this.target, this.target)),
                    g.isFunction(this.finishValue) && (this.finishValue = this.finishValue.call(this.target, this.target)),
                    this.time = 0,
                    this.frame = f.requestFrame(this.nextFrame.bind(this));
                    break;
                case "finished":
                case "stoped":
                    this.time = 0,
                    this.frame = f.requestFrame(this.nextFrame.bind(this));
                    break;
                case "paused":
                    this.frame.next()
                }
                return this.fire("play", new d(this, "play", {
                    lastStatus: a
                })),
                this
            },
            pause: function () {
                return this.status = "paused",
                this.fire("pause", new d(this, "pause")),
                f.releaseFrame(this.frame),
                this
            },
            stop: function () {
                return this.status = "stoped",
                this.setValue(this.finishValue),
                this.rollbacking = !1,
                this.fire("stop", new d(this, "stop")),
                f.releaseFrame(this.frame),
                this
            },
            timeUp: function () {
                this.repeatOption ? (this.time = 0, this.rollback ? this.rollbacking ? (this.decreaseRepeat(), this.rollbacking = !1) : (this.rollbacking = !0, this.fire("rollback", new d(this, "rollback"))) : this.decreaseRepeat(), this.repeatOption ? this.fire("repeat", new d(this, "repeat")) : this.finish()) : this.finish()
            },
            finish: function () {
                this.setValue(this.finishValue),
                this.status = "finished",
                this.fire("finish", new d(this, "finish")),
                f.releaseFrame(this.frame)
            },
            decreaseRepeat: function () {
                this.repeatOption !== !0 && this.repeatOption--
            },
            repeat: function (a, b) {
                return this.repeatOption = a,
                this.rollback = b,
                this
            }
        });
        return h.requestFrame = f.requestFrame,
        h.releaseFrame = f.releaseFrame,
        h
    }),
    define("core/class", [], function (require, exports) {
        function Class() {}
        function checkBaseConstructorCall(a, b) {
            var c = a.toString();
            if (!/this\.callBase/.test(c)) throw new Error(b + " : 类构造函数没有调用父类的构造函数！为了安全，请调用父类的构造函数")
        }
        function inherit(constructor, BaseClass, classname) {
            var KityClass = eval("(function " + classname + "( __inherit__flag ) {if( __inherit__flag != KITY_INHERIT_FLAG ) {KityClass.__KityConstructor.apply(this, arguments);}this.__KityClassName = KityClass.__KityClassName;})");
            KityClass.__KityConstructor = constructor,
            KityClass.prototype = new BaseClass(KITY_INHERIT_FLAG);
            for (var methodName in BaseClass.prototype) BaseClass.prototype.hasOwnProperty(methodName) && 0 !== methodName.indexOf("__Kity") && (KityClass.prototype[methodName] = BaseClass.prototype[methodName]);
            return KityClass.prototype.constructor = KityClass,
            KityClass
        }
        function mixin(a, b) {
            if (0 == b instanceof Array) return a;
            var c, d, e, f = b.length;
            for (a.__KityMixins = {
                constructor: []
            },
            c = 0; f > c; c++) {
                d = b[c].prototype;
                for (e in d) ! 1 !== d.hasOwnProperty(e) && 0 !== e.indexOf("__Kity") && ("constructor" === e ? a.__KityMixins.constructor.push(d[e]) : a.prototype[e] = a.__KityMixins[e] = d[e])
            }
            return a
        }
        function extend(a, b) {
            b.__KityClassName && (b = b.prototype);
            for (var c in b) if (b.hasOwnProperty(c) && c.indexOf("__Kity") && "constructor" != c) {
                var d = a.prototype[c] = b[c];
                d.__KityMethodClass = a,
                d.__KityMethodName = c
            }
            return a
        }
        Function.prototype.bind = Function.prototype.bind ||
        function (a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.apply(a, b)
        },
        Class.__KityClassName = "Class",
        Class.prototype.base = function (a) {
            var b = arguments.callee.caller,
                c = b.__KityMethodClass.__KityBaseClass.prototype[a];
            return c.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        Class.prototype.callBase = function () {
            var a = arguments.callee.caller,
                b = a.__KityMethodClass.__KityBaseClass.prototype[a.__KityMethodName];
            return b.apply(this, arguments)
        },
        Class.prototype.mixin = function (a) {
            var b = arguments.callee.caller,
                c = b.__KityMethodClass.__KityMixins;
            if (!c) return this;
            var d = c[a];
            return d.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        Class.prototype.callMixin = function () {
            var a = arguments.callee.caller,
                b = a.__KityMethodName,
                c = a.__KityMethodClass.__KityMixins;
            if (!c) return this;
            var d = c[b];
            if ("constructor" == b) {
                for (var e = 0, f = d.length; f > e; e++) d[e].call(this);
                return this
            }
            return d.apply(this, arguments)
        },
        Class.prototype.pipe = function (a) {
            return "function" == typeof a && a.call(this, this),
            this
        },
        Class.prototype.getType = function () {
            return this.__KityClassName
        },
        Class.prototype.getClass = function () {
            return this.constructor
        };
        var KITY_INHERIT_FLAG = "__KITY_INHERIT_FLAG_" + +new Date;
        Class.prototype._accessProperty = function () {
            return this._propertyRawData || (this._propertyRawData = {})
        },
        exports.createClass = function (a, b) {
            var c, d, e;
            return 1 === arguments.length && (b = arguments[0], a = "AnonymousClass"),
            e = b.base || Class,
            b.hasOwnProperty("constructor") ? (c = b.constructor, e != Class && checkBaseConstructorCall(c, a)) : c = function () {
                this.callBase.apply(this, arguments),
                this.callMixin.apply(this, arguments)
            },
            d = inherit(c, e, a),
            d = mixin(d, b.mixins),
            d.__KityClassName = c.__KityClassName = a,
            d.__KityBaseClass = c.__KityBaseClass = e,
            d.__KityMethodName = c.__KityMethodName = "constructor",
            d.__KityMethodClass = c.__KityMethodClass = d,
            delete b.mixins,
            delete b.constructor,
            delete b.base,
            d = extend(d, b)
        },
        exports.extendClass = extend
    }),
    define("core/utils", [], function () {
        var a = {
            each: function (a, b, c) {
                if (null !== a) if (a.length === +a.length) {
                    for (var d = 0, e = a.length; e > d; d++) if (b.call(c, a[d], d, a) === !1) return !1
                } else for (var f in a) if (a.hasOwnProperty(f) && b.call(c, a[f], f, a) === !1) return !1
            },
            extend: function (a) {
                for (var b = arguments, c = this.isBoolean(b[b.length - 1]) ? b[b.length - 1] : !1, d = this.isBoolean(b[b.length - 1]) ? b.length - 1 : b.length, e = 1; d > e; e++) {
                    var f = b[e];
                    for (var g in f) c && a.hasOwnProperty(g) || (a[g] = f[g])
                }
                return a
            },
            deepExtend: function (a) {
                for (var b = arguments, c = this.isBoolean(b[b.length - 1]) ? b[b.length - 1] : !1, d = this.isBoolean(b[b.length - 1]) ? b.length - 1 : b.length, e = 1; d > e; e++) {
                    var f = b[e];
                    for (var g in f) c && a.hasOwnProperty(g) || (this.isObject(a[g]) && this.isObject(f[g]) ? this.deepExtend(a[g], f[g], c) : a[g] = f[g])
                }
                return a
            },
            clone: function (a) {
                var b = {};
                for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
                return b
            },
            copy: function (a) {
                return "object" != typeof a ? a : "function" == typeof a ? null : JSON.parse(JSON.stringify(a))
            },
            queryPath: function (a, b) {
                for (var c = a.split("."), d = 0, e = b, f = c.length; f > d;) {
                    if (! (c[d] in e)) return void 0;
                    if (e = e[c[d]], d++, d >= f || void 0 === e) return e
                }
            },
            getValue: function (a, b) {
                return void 0 !== a ? a : b
            },
            flatten: function (b) {
                var c, d = [],
                    e = b.length;
                for (c = 0; e > c; c++) b[c] instanceof Array ? d = d.concat(a.flatten(b[c])) : d.push(b[c]);
                return d
            },
            paralle: function (b, c, d) {
                var e, f, g, h;
                if (!1 === isNaN(parseFloat(b))) return d(b, c);
                if (b instanceof Array) {
                    for (h = [], g = 0; g < b.length; g++) h.push(a.paralle(b[g], c[g], d));
                    return h
                }
                if (b instanceof Object) {
                    h = {},
                    e = b.getClass && b.getClass(),
                    e && e.parse && (b = b.valueOf(), c = c.valueOf());
                    for (f in b) b.hasOwnProperty(f) && c.hasOwnProperty(f) && (h[f] = a.paralle(b[f], c[f], d));
                    return e && e.parse && (h = e.parse(h)),
                    h
                }
                return h
            },
            parallelize: function (b) {
                return function (c, d) {
                    return a.paralle(c, d, b)
                }
            }
        };
        return a.each(["String", "Function", "Array", "Number", "RegExp", "Object", "Boolean"], function (b) {
            a["is" + b] = function (a) {
                return Object.prototype.toString.apply(a) == "[object " + b + "]"
            }
        }),
        a
    }),
    define("graphic/box", ["core/class"], function (a) {
        var b = a("core/class").createClass("Box", {
            constructor: function (a, b, c, d) {
                var e = arguments[0];
                e && "object" == typeof e && (a = e.x, b = e.y, c = e.width, d = e.height),
                0 > c && (a -= c = -c),
                0 > d && (b -= d = -d),
                this.x = a,
                this.y = b,
                this.width = c,
                this.height = d
            },
            getLeft: function () {
                return this.x
            },
            getRight: function () {
                return this.x + this.width
            },
            getTop: function () {
                return this.y
            },
            getBottom: function () {
                return this.y + this.height
            },
            getRangeX: function () {
                return [this.x, this.x + this.width]
            },
            getRangeY: function () {
                return [this.y, this.y + this.height]
            },
            merge: function (a) {
                var c = Math.min(this.x, a.x),
                    d = Math.max(this.x + this.width, a.x + a.width),
                    e = Math.min(this.y, a.y),
                    f = Math.max(this.y + this.height, a.y + a.height);
                return new b(c, e, d - c, f - e)
            },
            valueOf: function () {
                return [this.x, this.y, this.width, this.height]
            },
            toString: function () {
                return this.valueOf().join(" ")
            }
        });
        return b
    }),
    define("graphic/circle", ["core/class", "graphic/ellipse", "core/utils", "graphic/point", "graphic/path"], function (a) {
        return a("core/class").createClass("Circle", {
            base: a("graphic/ellipse"),
            constructor: function (a, b, c) {
                this.callBase(a, a, b, c)
            },
            getRadius: function () {
                return this.getRadiusX()
            },
            setRadius: function (a) {
                return this.callBase(a, a)
            }
        })
    }),
    define("graphic/color", ["core/utils", "graphic/standardcolor", "core/class"], function (a) {
        var b = a("core/utils"),
            c = a("graphic/standardcolor"),
            d = {},
            e = a("core/class").createClass("Color", {
            constructor: function () {
                var a = null;
                "string" == typeof arguments[0] ? (a = d.parseToValue(arguments[0]), null === a && (a = {
                    r: 0,
                    g: 0,
                    b: 0,
                    h: 0,
                    s: 0,
                    l: 0,
                    a: 1
                })) : (a = {
                    r: 0 | arguments[0],
                    g: 0 | arguments[1],
                    b: 0 | arguments[2],
                    a: parseFloat(arguments[3]) || 1
                },
                a = d.overflowFormat(a), a = b.extend(a, d.rgbValueToHslValue(a))),
                this._color = a
            },
            set: function (a, c) {
                if (!e._MAX_VALUE[a]) throw new Error("Color set(): Illegal parameter");
                return "a" !== a && (c = Math.floor(c)),
                "h" == a && (c = (c + 360) % 360),
                this._color[a] = Math.max(e._MIN_VALUE[a], Math.min(e._MAX_VALUE[a], c)),
                -1 !== "rgb".indexOf(a) ? this._color = b.extend(this._color, d.rgbValueToHslValue(this._color)) : -1 !== "hsl".indexOf(a) && (this._color = b.extend(this._color, d.hslValueToRGBValue(this._color))),
                this
            },
            inc: function (a, b) {
                return b = this.get(a) + b,
                "h" == a ? b = (b + 360) % 360 : (b = Math.min(e._MAX_VALUE[a], b), b = Math.max(e._MIN_VALUE[a], b)),
                this.clone().set(a, b)
            },
            dec: function (a, b) {
                return this.inc(a, -b)
            },
            clone: function () {
                return new e(this.toRGBA())
            },
            get: function (a) {
                return e._MAX_VALUE[a] ? this._color[a] : null
            },
            getValues: function () {
                return b.clone(this._color)
            },
            valueOf: function () {
                return this.getValues()
            },
            toRGB: function () {
                return d.toString(this._color, "rgb")
            },
            toRGBA: function () {
                return d.toString(this._color, "rgba")
            },
            toHEX: function () {
                return d.toString(this._color, "hex")
            },
            toHSL: function () {
                return d.toString(this._color, "hsl")
            },
            toHSLA: function () {
                return d.toString(this._color, "hsla")
            },
            toString: function () {
                return 1 === this._color.a ? this.toRGB() : this.toRGBA()
            }
        });
        return b.extend(e, {
            _MAX_VALUE: {
                r: 255,
                g: 255,
                b: 255,
                h: 360,
                s: 100,
                l: 100,
                a: 1
            },
            _MIN_VALUE: {
                r: 0,
                g: 0,
                b: 0,
                h: 0,
                s: 0,
                l: 0,
                a: 0
            },
            R: "r",
            G: "g",
            B: "b",
            H: "h",
            S: "s",
            L: "l",
            A: "a",
            parse: function (a) {
                var c;
                return b.isString(a) && (c = d.parseToValue(a)),
                b.isObject(a) && "r" in a && (c = a),
                null === c ? new e : new e(c.r, c.g, c.b, c.a)
            },
            createHSL: function (a, b, c) {
                return e.createHSLA(a, b, c, 1)
            },
            createHSLA: function (a, b, c, d) {
                var f = null;
                return b += "%",
                c += "%",
                f = ["hsla(" + a, b, c, d + ")"],
                e.parse(f.join(", "))
            },
            createRGB: function (a, b, c) {
                return e.createRGBA(a, b, c, 1)
            },
            createRGBA: function (a, b, c, d) {
                return new e(a, b, c, d)
            }
        }),
        b.extend(d, {
            parseToValue: function (a) {
                var b = {};
                if (a = c.EXTEND_STANDARD[a] || c.COLOR_STANDARD[a] || a, /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(a)) b = d.hexToValue(a);
                else if (/^(rgba?)/i.test(a)) b = d.rgbaToValue(a);
                else {
                    if (!/^(hsla?)/i.test(a)) return null;
                    b = d.hslaToValue(a)
                }
                return d.overflowFormat(b)
            },
            hexToValue: function (a) {
                var c = {},
                    e = ["r", "g", "b"];
                return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(a) ? (a = RegExp.$1.split(""), b.each(e, function (b, e) {
                    c[b] = d.toNumber(3 === a.length ? a[e] + a[e] : a[2 * e] + a[2 * e + 1])
                }), c = b.extend(c, d.rgbValueToHslValue(c)), c.a = 1, c) : null
            },
            rgbaToValue: function (a) {
                var c = {},
                    e = !1,
                    f = ["r", "g", "b"];
                return /^(rgba?)/i.test(a) ? (e = 4 === RegExp.$1.length, a = a.replace(/^rgba?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(","), b.each(f, function (b, d) {
                    c[b] = 0 | a[d]
                }), c = b.extend(c, d.rgbValueToHslValue(c)), c.a = e ? parseFloat(a[3]) : 1, c) : null
            },
            hslaToValue: function (a) {
                var c = {},
                    e = !1;
                return /^(hsla?)/i.test(a) ? (e = 4 === RegExp.$1.length, a = a.replace(/^hsla?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(","), c.h = 0 | a[0], c.s = 0 | a[1], c.l = 0 | a[2], c = b.extend(c, d.hslValueToRGBValue(c)), c = d.hslValueToRGBValue(c), c.a = e ? parseFloat(a[3]) : 1, c) : null
            },
            hslValueToRGBValue: function (a) {
                function c(a, b, c) {
                    return 0 > c ? c += 1 : c > 1 && (c -= 1),
                    1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
                }
                var d = null,
                    e = null,
                    f = {};
                return a = b.extend({},
                a),
                a.h = a.h / 360,
                a.s = a.s / 100,
                a.l = a.l / 100,
                0 === a.s ? f.r = f.g = f.b = a.l : (d = a.l < .5 ? a.l * (1 + a.s) : a.l + a.s - a.l * a.s, e = 2 * a.l - d, f.r = c(e, d, a.h + 1 / 3), f.g = c(e, d, a.h), f.b = c(e, d, a.h - 1 / 3)),
                f.r = Math.min(Math.round(255 * f.r), 255),
                f.g = Math.min(Math.round(255 * f.g), 255),
                f.b = Math.min(Math.round(255 * f.b), 255),
                f
            },
            rgbValueToHslValue: function (a) {
                var c = null,
                    d = null,
                    e = {};
                return a = b.extend({},
                a),
                a.r = a.r / 255,
                a.g = a.g / 255,
                a.b = a.b / 255,
                c = Math.max(a.r, a.g, a.b),
                d = Math.min(a.r, a.g, a.b),
                c === d ? e.h = 0 : c === a.r ? e.h = a.g >= a.b ? 60 * (a.g - a.b) / (c - d) : 60 * (a.g - a.b) / (c - d) + 360 : c === a.g ? e.h = 60 * (a.b - a.r) / (c - d) + 120 : c === a.b && (e.h = 60 * (a.r - a.g) / (c - d) + 240),
                e.l = (c + d) / 2,
                e.s = 0 === e.l || c === d ? 0 : e.l > 0 && e.l <= .5 ? (c - d) / (c + d) : (c - d) / (2 - c - d),
                e.h = Math.round(e.h),
                e.s = Math.round(100 * e.s),
                e.l = Math.round(100 * e.l),
                e
            },
            toString: function (a, c) {
                var e = [];
                return a = b.extend({},
                a),
                -1 !== c.indexOf("hsl") && (a.s += "%", a.l += "%"),
                "hex" !== c ? (b.each(c.split(""), function (b) {
                    e.push(a[b])
                }), (c + "(" + e.join(", ") + ")").toLowerCase()) : (e.push(d.toHexValue(+a.r)), e.push(d.toHexValue(+a.g)), e.push(d.toHexValue(+a.b)), ("#" + e.join("")).toLowerCase())
            },
            toNumber: function (a) {
                return 0 | Number("0x" + a)
            },
            toHexValue: function (a) {
                var b = a.toString(16);
                return 1 === b.length ? "0" + b : b
            },
            overflowFormat: function (a) {
                var c = b.extend({},
                a),
                    d = "rgba";
                return b.each(d.split(""), function (a) {
                    c.hasOwnProperty(a) && (c[a] = Math.min(e._MAX_VALUE[a], c[a]), c[a] = Math.max(e._MIN_VALUE[a], c[a]))
                }),
                c
            }
        }),
        e
    }),
    define("graphic/container", ["core/class"], function (a) {
        function b() {
            return this.container.removeItem(this),
            this
        }
        return a("core/class").createClass("Container", {
            getItems: function () {
                return this.items || (this.items = [])
            },
            getItem: function (a) {
                return this.getItems()[a]
            },
            getFirstItem: function () {
                return this.getItem(0)
            },
            getLastItem: function () {
                return this.getItem(this.getItems().length - 1)
            },
            indexOf: function (a) {
                return this.getItems().indexOf(a)
            },
            eachItem: function (a) {
                var b, c = this.getItems(),
                    d = c.length;
                for (b = 0; d > b; b++) a.call(this, b, c[b]);
                return this
            },
            addItem: function (a, c, d) {
                var e = this.getItems(),
                    f = e.length;
                return~e.indexOf(a) ? this : (c >= 0 && f > c || (c = f), e.splice(c, 0, a), "object" == typeof a && (a.container = this, a.remove = b), this.handleAdd(a, c), d || this.onContainerChanged("add", [a]), this)
            },
            addItems: function (a) {
                for (var b = 0, c = a.length; c > b; b++) this.addItem(a[b], -1, !0);
                return this.onContainerChanged("add", a),
                this
            },
            setItems: function (a) {
                return this.clear().addItems(a)
            },
            appendItem: function (a) {
                return this.addItem(a)
            },
            prependItem: function (a) {
                return this.addItem(a, 0)
            },
            removeItem: function (a, b) {
                if ("number" != typeof a) return this.removeItem(this.indexOf(a));
                var c = this.getItems(),
                    d = (c.length, c[a]);
                return void 0 === d ? this : (c.splice(a, 1), d.container && delete d.container, d.remove && delete d.remove, this.handleRemove(d, a), b || this.onContainerChanged("remove", [d]), this)
            },
            clear: function () {
                for (var a, b = []; a = this.getFirstItem();) b.push(a),
                this.removeItem(0, !0);
                return this.onContainerChanged("remove", b),
                this
            },
            onContainerChanged: function () {},
            handleAdd: function () {},
            handleRemove: function () {}
        })
    }),
    define("graphic/data", ["core/class"], function (a) {
        return a("core/class").createClass("Data", {
            constructor: function () {
                this._data = {}
            },
            setData: function (a, b) {
                return this._data[a] = b,
                this
            },
            getData: function (a) {
                return this._data[a]
            },
            removeData: function (a) {
                return delete this._data[a],
                this
            }
        })
    }),
    define("graphic/defbrush", ["core/class", "graphic/resource", "graphic/svg"], function (a) {
        return a("core/class").createClass("GradientBrush", {
            base: a("graphic/resource"),
            constructor: function (a) {
                this.callBase(a)
            }
        })
    }),
    define("graphic/ellipse", ["core/utils", "graphic/point", "core/class", "graphic/path", "graphic/shape", "graphic/svg", "graphic/geometry"], function (a) {
        var b = (a("core/utils"), a("graphic/point"));
        return a("core/class").createClass("Ellipse", {
            base: a("graphic/path"),
            constructor: function (a, b, c, d) {
                this.callBase(),
                this.rx = a || 0,
                this.ry = b || 0,
                this.cx = c || 0,
                this.cy = d || 0,
                this.update()
            },
            update: function () {
                var a = this.rx,
                    b = this.ry,
                    c = this.cx + a,
                    d = this.cx - a,
                    e = this.cy,
                    f = this.getDrawer();
                return f.clear(),
                f.moveTo(c, e),
                f.arcTo(a, b, 0, 1, 1, d, e),
                f.arcTo(a, b, 0, 1, 1, c, e),
                this
            },
            getRadius: function () {
                return {
                    x: this.rx,
                    y: this.ry
                }
            },
            getRadiusX: function () {
                return this.rx
            },
            getRadiusY: function () {
                return this.ry
            },
            getCenter: function () {
                return new b(this.cx, this.cy)
            },
            getCenterX: function () {
                return this.cx
            },
            getCenterY: function () {
                return this.cy
            },
            setRadius: function (a, b) {
                return this.rx = a,
                this.ry = b,
                this.update()
            },
            setRadiusX: function (a) {
                return this.rx = a,
                this.update()
            },
            setRadiusY: function (a) {
                return this.ry = a,
                this.update()
            },
            setCenter: function (a, c) {
                if (1 == arguments.length) {
                    var d = b.parse(arguments[0]);
                    a = d.x,
                    c = d.y
                }
                return this.cx = a,
                this.cy = c,
                this.update()
            },
            setCenterX: function (a) {
                return this.cx = a,
                this.update()
            },
            setCenterY: function (a) {
                return this.cy = a,
                this.update()
            }
        })
    }),
    define("graphic/eventhandler", ["core/utils", "graphic/shapeevent", "graphic/matrix", "graphic/point", "core/class"], function (a) {
        function b(a, b, c) {
            return c = !!c,
            i.isString(a) && (a = a.match(/\S+/g)),
            i.each(a, function (a) {
                d.call(this, this.node, a, b, c)
            },
            this),
            this
        }
        function c(a, b) {
            var c = null,
                d = this._EVNET_UID,
                e = void 0 === b;
            try {
                c = l[d][a]
            } catch(g) {
                return
            }
            return e || (e = !0, i.each(c, function (a, d) {
                a === b ? delete c[d] : e = !1
            })),
            e && (f(this.node, a, k[d][a]), delete l[d][a], delete k[d][a]),
            this
        }
        function d(a, b, c, d) {
            var f = this._EVNET_UID,
                g = this;
            k[f] || (k[f] = {}),
            k[f][b] || (k[f][b] = function (a) {
                a = new j(a || window.event),
                i.each(l[f][b], function (c) {
                    var e;
                    return c && (e = c.call(g, a), d && g.off(b, c)),
                    e
                },
                g)
            }),
            l[f] || (l[f] = {}),
            l[f][b] ? l[f][b].push(c) : (l[f][b] = [c], a && e(a, b, k[f][b]))
        }
        function e(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
        }
        function f(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent(b, c)
        }
        function g(a, b, c) {
            var d = new CustomEvent(b, {
                bubbles: !0,
                cancelable: !0
            });
            d._kityParam = c,
            a.dispatchEvent(d)
        }
        function h(a, b, c) {
            var d = null,
                e = null;
            try {
                if (e = k[a._EVNET_UID][b], !e) return
            } catch(f) {
                return
            }
            d = i.extend({
                type: b,
                target: a
            },
            c || {}),
            e.call(a, d)
        } !
        function () {
            function a(a, b) {
                b = b || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var c = document.createEvent("CustomEvent");
                return c.initCustomEvent(a, b.bubbles, b.cancelable, b.detail),
                c
            }
            a.prototype = window.Event.prototype,
            window.CustomEvent = a
        }();
        var i = a("core/utils"),
            j = a("graphic/shapeevent"),
            k = {},
            l = {},
            m = 0;
        return a("core/class").createClass("EventHandler", {
            constructor: function () {
                this._EVNET_UID = ++m
            },
            addEventListener: function (a, c) {
                return b.call(this, a, c, !1)
            },
            addOnceEventListener: function (a, c) {
                return b.call(this, a, c, !0)
            },
            removeEventListener: function (a, b) {
                return c.call(this, a, b)
            },
            on: function () {
                return this.addEventListener.apply(this, arguments)
            },
            once: function () {
                return this.addOnceEventListener.apply(this, arguments)
            },
            off: function () {
                return this.removeEventListener.apply(this, arguments)
            },
            fire: function () {
                return this.trigger.apply(this, arguments)
            },
            trigger: function (a, b) {
                return this.node ? g(this.node, a, b) : h(this, a, b),
                this
            }
        })
    }),
    define("graphic/geometry", ["core/utils", "graphic/point", "core/class", "graphic/vector", "graphic/matrix", "graphic/box"], function (a) {
        function b(a) {
            var b, c, d, e, f;
            for (b = [], c = 0; c < a.length; c++) for (e = a[c], b.push(f = []), d = 0; d < e.length; d++) f.push(e[d]);
            return a.isUniform && (b.isUniform = !0),
            a.isAbsolute && (b.isAbsolute = !0),
            a.isCurve && (b.isCurve = !0),
            b
        }
        function c(a, b, c) {
            function d(a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return a.push(a.splice(c, 1)[0])
            }
            function e() {
                var f = Array.prototype.slice.call(arguments, 0),
                    g = f.join("␀"),
                    h = e.cache = e.cache || {},
                    i = e.count = e.count || [];
                return h.hasOwnProperty(g) ? (d(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a.apply(b, f), c ? c(h[g]) : h[g])
            }
            return e
        }
        function d(a, b, c, e, f, g, h, i, j, k) {
            var l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q = Math,
                R = Q.PI,
                S = Math.abs,
                T = 120 * R / 180,
                U = R / 180 * (+f || 0),
                V = [],
                W = function (a, b, c) {
                var d = a * Q.cos(c) - b * Q.sin(c),
                    e = a * Q.sin(c) + b * Q.cos(c);
                return {
                    x: d,
                    y: e
                }
            };
            if (k ? (w = k[0], x = k[1], u = k[2], v = k[3]) : (l = W(a, b, -U), a = l.x, b = l.y, l = W(i, j, -U), i = l.x, j = l.y, m = Q.cos(R / 180 * f), n = Q.sin(R / 180 * f), p = (a - i) / 2, q = (b - j) / 2, o = p * p / (c * c) + q * q / (e * e), o > 1 && (o = Q.sqrt(o), c = o * c, e = o * e), r = c * c, s = e * e, t = (g == h ? -1 : 1) * Q.sqrt(S((r * s - r * q * q - s * p * p) / (r * q * q + s * p * p))), u = t * c * q / e + (a + i) / 2, v = t * -e * p / c + (b + j) / 2, w = Q.asin(((b - v) / e).toFixed(9)), x = Q.asin(((j - v) / e).toFixed(9)), w = u > a ? R - w : w, x = u > i ? R - x : x, 0 > w && (w = 2 * R + w), 0 > x && (x = 2 * R + x), h && w > x && (w -= 2 * R), !h && x > w && (x -= 2 * R)), y = x - w, S(y) > T && (z = x, A = i, B = j, x = w + T * (h && x > w ? 1 : -1), i = u + c * Q.cos(x), j = v + e * Q.sin(x), V = d(i, j, c, e, f, 0, h, A, B, [x, z, u, v])), y = x - w, C = Q.cos(w), D = Q.sin(w), E = Q.cos(x), F = Q.sin(x), G = Q.tan(y / 4), H = 4 / 3 * c * G, I = 4 / 3 * e * G, J = [a, b], K = [a + H * D, b - I * C], L = [i + H * F, j - I * E], M = [i, j], K[0] = 2 * J[0] - K[0], K[1] = 2 * J[1] - K[1], k) return [K, L, M].concat(V);
            for (V = [K, L, M].concat(V).join().split(","), N = [], O = 0, P = V.length; P > O; O++) N[O] = O % 2 ? W(V[O - 1], V[O], U).y : W(V[O], V[O + 1], U).x;
            return N
        }
        function e(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }
        function f(a, b) {
            function c(a) {
                return function (b, c) {
                    return b + a * (c - b)
                }
            }
            var d = c(b || .5),
                e = a,
                f = e[0],
                g = e[1],
                h = e[2],
                i = e[3],
                j = e[4],
                k = e[5],
                l = e[6],
                m = e[7],
                n = d(f, h),
                o = d(g, i),
                p = d(h, j),
                q = d(i, k),
                r = d(j, l),
                s = d(k, m),
                t = d(n, p),
                u = d(o, q),
                v = d(p, r),
                w = d(q, s),
                x = d(t, v),
                y = d(u, w);
            return [[f, g, n, o, t, u, x, y], [x, y, v, w, r, s, l, m]]
        }
        var g = a("core/utils"),
            h = a("graphic/point"),
            i = a("graphic/vector"),
            j = a("graphic/matrix"),
            k = {},
            l = /([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?\s*)+)/gi,
            m = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/gi,
            n = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        };
        k.pathToString = function (a) {
            return a = a || this,
            "string" == typeof a ? a : a instanceof Array ? (a = g.flatten(a), a.join(",").replace(/,?([achlmqrstvxz]),?/gi, "$1")) : void 0
        },
        k.parsePathString = c(function (a) {
            var b = [];
            return a.replace(l, function (a, c, d) {
                var e = [],
                    f = c.toLowerCase();
                if (d.replace(m, function (a, b) {
                    b && e.push(+b)
                }), "m" == f && e.length > 2 && (b.push([c].concat(e.splice(0, 2))), f = "l", c = "m" == c ? "l" : "L"), "r" == f) b.push([c].concat(e));
                else for (; e.length >= n[f] && (b.push([c].concat(e.splice(0, n[f]))), n[f]););
            }),
            b.isUniform = !0,
            b.toString = k.pathToString,
            b
        }),
        k.pathToAbsolute = c(function (a) {
            var b, c, d, e, f, g, h, i, j = a.isUniform ? a : k.parsePathString(k.pathToString(a)),
            l = [],
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0;
            for ("M" == j[0][0] && (m = +j[0][1], n = +j[0][2], o = m, p = n, q++, l[0] = ["M", m, n]), d = q, g = j.length; g > d; d++) {
                if (l.push(b = []), c = j[d], c[0] != c[0].toUpperCase()) switch (b[0] = c[0].toUpperCase(), b[0]) {
                case "A":
                    b[1] = c[1],
                    b[2] = c[2],
                    b[3] = c[3],
                    b[4] = c[4],
                    b[5] = c[5],
                    b[6] = +(c[6] + m),
                    b[7] = +(c[7] + n);
                    break;
                case "V":
                    b[1] = +c[1] + n;
                    break;
                case "H":
                    b[1] = +c[1] + m;
                    break;
                case "M":
                    o = +c[1] + m,
                    p = +c[2] + n;
                    break;
                default:
                    for (e = 1, h = c.length; h > e; e++) b[e] = +c[e] + (e % 2 ? m : n)
                } else for (f = 0, i = c.length; i > f; f++) b[f] = c[f];
                switch (b[0]) {
                case "Z":
                    m = o,
                    n = p;
                    break;
                case "H":
                    m = b[1];
                    break;
                case "V":
                    n = b[1];
                    break;
                case "M":
                    o = b[b.length - 2],
                    p = b[b.length - 1];
                    break;
                default:
                    m = b[b.length - 2],
                    n = b[b.length - 1]
                }
            }
            return l.isUniform = !0,
            l.isAbsolute = !0,
            l.toString = k.pathToString,
            l
        }),
        k.pathToCurve = c(function (a) {
            var b, c, f, g, h, i, j, l, m, n, o, p = [];
            for (a.isAbsolute || (a = k.pathToAbsolute(a)), b = 0; b < a.length; b++) if (c = a[b][0], f = a[b].slice(1), "M" != c) {
                switch ("Z" == c && (j = !0, c = "L", f = g), i = f.slice(f.length - 2), "H" == c && (i = [f[0], h[1]], c = "L"), "V" == c && (i = [h[0], f[0]], c = "L"), ("S" == c || "T" == c) && (m = [h[0] + (h[0] - l[0]), h[1] + (h[1] - l[1])]), c) {
                case "L":
                    n = h,
                    o = i;
                    break;
                case "C":
                    n = f.slice(0, 2),
                    o = f.slice(2, 4);
                    break;
                case "S":
                    n = m.slice(),
                    o = f.slice(0, 2);
                    break;
                case "Q":
                    l = f.slice(0, 2),
                    f = e.apply(null, h.concat(f)),
                    n = f.slice(0, 2),
                    o = f.slice(2, 4);
                    break;
                case "T":
                    f = e.apply(null, h.concat(m).concat(f)),
                    n = f.slice(0, 2),
                    o = f.slice(2, 4);
                    break;
                case "A":
                    f = d.apply(null, h.concat(f)),
                    n = f.slice(0, 2),
                    o = f.slice(2, 4)
                }
                p.push(["C"].concat(n).concat(o).concat(i)),
                h = i,
                "Q" != c && (l = o),
                j && (p.push(["Z"]), j = !1)
            } else g = l = h = f,
            p.push(a[b]);
            return p.isUniform = !0,
            p.isAbsolute = !0,
            p.isCurve = !0,
            p.toString = k.pathToString,
            p
        }),
        k.cutBezier = c(f),
        k.subBezier = function (a, b, c) {
            var d = f(a, b)[0];
            return c ? f(d, c / b)[1] : d
        },
        k.pointAtBezier = function (a, b) {
            var c = f(a, b)[0],
                d = h.parse(c.slice(6)),
                e = h.parse(c.slice(4, 2));
            return d.tan = i.fromPoints(e, d).normalize(),
            d
        },
        k.bezierLength = c(function q(a, b) {
            function c(a, b) {
                var c = a[0] - b[0],
                    d = a[1] - b[1];
                return Math.sqrt(c * c + d * d)
            }
            b = Math.max(b || .1, 1e-9);
            var d, e, g, h, i;
            return d = f(a),
            e = a.slice(0, 2),
            g = a.slice(6),
            h = d[1].slice(0, 2),
            i = c(e, h) + c(h, g),
            i - c(e, g) < b ? i : q(d[0], b / 2) + q(d[1], b / 3)
        });
        var o = c(function (a) {
            var b, c, d, e, f, g, h;
            for (g = [], h = 0, b = 0, c = a.length; c > b; b++) d = a[b],
            "M" != d[0] ? "Z" != d[0] ? (f = k.bezierLength(e.concat(d.slice(1))), g.push([h, h + f]), h += f, e = d.slice(4)) : g.push(null) : (e = d.slice(1), g.push(null));
            return g.totalLength = h,
            g
        });
        k.subPath = function (a, b, c) {
            var d;
            if (c = c || 0, d = b - c, d -= 0 | d, c -= 0 | c, b = c + d, b > 1) return k.subPath(a, 1, c).concat(k.subPath(a, b - 1));
            a.isCurve || (a = k.pathToCurve(a));
            var e, f, g, h, i, j, l, m, n, p = o(a),
                q = p.totalLength,
                r = q * b,
                s = q * (c || 0),
                t = [];
            for (e = 0, f = a.length; f > e; e++) if ("M" != a[e][0]) {
                if ("Z" != a[e][0]) if (g = p[e][0], h = p[e][1], i = h - g, l = j.concat(a[e].slice(1)), s > h) j = l.slice(l.length - 2);
                else {
                    if (s >= g) m = k.subBezier(l, Math.min((r - g) / i, 1), (s - g) / i),
                    n = !0,
                    j = m.slice(0, 2),
                    t.push(["M"].concat(m.slice(0, 2))),
                    t.push(["C"].concat(m.slice(2)));
                    else if (r >= h) t.push(a[e].slice());
                    else {
                        if (! (r >= g)) break;
                        m = k.subBezier(l, (r - g) / i),
                        t.push(["C"].concat(m.slice(2))),
                        n = !1
                    }
                    j = l.slice(l.length - 2)
                }
            } else j = a[e].slice(1),
            n && t.push(a[e].slice());
            return t.isAbsolute = !0,
            t.isCurve = !0,
            t.isUniform = !0,
            t.toString = k.pathToString,
            t
        },
        k.pointAtPath = function (a, b) {
            a.isCurve || (a = k.pathToCurve(a));
            var c = k.subPath(a, b),
                d = "Z" == c[c.length - 1][0] ? c[c.length - 2] : c[c.length - 1];
            d = d.slice(1);
            var e = h.parse(d.slice(4)),
                f = h.parse(d.slice(2, 4));
            return e.tan = i.fromPoints(f, e).normalize(),
            e
        },
        k.pathLength = c(function (a) {
            a.isCurve || (a = k.pathToCurve(a));
            var b = o(a);
            return b.totalLength
        }),
        k.pathKeyPoints = c(function (a) {
            var b, c, d;
            for (a.isCurve || (a = k.pathToCurve(a)), d = [], b = 0, c = a.length; c > b; b++)"z" != a[b][0] && d.push(a[b].slice(a[b].length - 2));
            return d
        });
        var p = c(function (a, c) {
            function d(a, b) {
                return a[b || a.i] && a[b || a.i][0]
            }
            function e(a, b) {
                return a[b || a.i] && a[b || a.i].slice(1)
            }
            function f(a, b) {
                var c = e(a, b);
                return c && c.slice(-2)
            }
            function g(a) {
                return "Z" == d(a) ? (a.splice(a.i, 1), !0) : !1
            }
            function h(a) {
                return "M" == d(a) ? (a.o.splice(a.o.i, 0, ["M"].concat(f(a.o, a.o.i - 1))), a.i++, a.o.i++, !0) : !1
            }
            function i(a) {
                for (var b, c = 1; ! b;) b = f(a, a.length - c++);
                for (a.o.i = a.i; a.length < a.o.length;) g(a.o) || h(a.o) || (a.push(["C"].concat(b).concat(b).concat(b)), a.i++, a.o.i++)
            }
            a.isCurve || (a = k.pathToCurve(a)),
            c.isCurve || (c = k.pathToCurve(c));
            var j = b(a),
                l = b(c);
            for (j.i = 0, l.i = 0, j.o = l, l.o = j; j.i < j.length && l.i < l.length;) g(j) || g(l) || (d(j) != d(l) ? h(j) || h(l) || (j.i++, l.i++) : (j.i++, l.i++));
            return j.i == j.length && i(j),
            l.i == l.length && i(l),
            delete j.i,
            delete j.o,
            delete l.i,
            delete l.o,
            [j, l]
        });
        return k.alignCurve = p,
        k.pathTween = function (a, b, c) {
            var d, e, f, g = p(a, b),
                h = [];
            for (a = g[0], b = g[1], e = 0; e < a.length; e++) for (h.push(d = []), d.push(a[e][0]), f = 1; f < a[e].length; f++) d.push(a[e][f] + c * (b[e][f] - a[e][f]));
            return h.isUniform = h.isCurve = h.isAbsolute = !0,
            h
        },
        k.transformPath = c(function (a, b) {
            var c, d, e, f, g, i;
            for (a.isCurve || (a = k.pathToCurve(a)), f = [], c = 0, d = a.length; d > c; c++) for (f.push(g = [a[c][0]]), e = 1; e < a[c].length; e += 2) i = a[c].slice(e, e + 2),
            i = b.transformPoint(h.parse(i)),
            f.push(i);
            return f
        }),
        a("core/class").extendClass(j, {
            transformPath: function (a) {
                return k.transformPath(a, this)
            }
        }),
        k
    }),
    define("graphic/gradientbrush", ["graphic/svg", "graphic/defbrush", "core/class", "graphic/resource", "graphic/color", "core/utils", "graphic/standardcolor"], function (a) {
        var b = a("graphic/svg"),
            c = a("graphic/defbrush"),
            d = a("graphic/color");
        return a("core/class").createClass("GradientBrush", {
            base: c,
            constructor: function (a) {
                this.callBase(a),
                this.stops = []
            },
            addStop: function (a, c, e) {
                var f = b.createNode("stop");
                return c instanceof d || (c = d.parse(c)),
                void 0 === e && (e = c.get("a")),
                f.setAttribute("offset", a),
                f.setAttribute("stop-color", c.toRGB()),
                1 > e && f.setAttribute("stop-opacity", e),
                this.node.appendChild(f),
                this
            }
        })
    }),
    define("graphic/group", ["graphic/shapecontainer", "graphic/container", "core/utils", "core/class", "graphic/shape", "graphic/svg", "graphic/eventhandler", "graphic/styled", "graphic/data", "graphic/matrix", "graphic/pen", "graphic/box"], function (a) {
        var b = a("graphic/shapecontainer");
        return a("core/class").createClass("Group", {
            mixins: [b],
            base: a("graphic/shape"),
            constructor: function () {
                this.callBase("g")
            }
        })
    }),
    define("graphic/line", ["core/class", "graphic/path", "core/utils", "graphic/shape", "graphic/svg", "graphic/geometry"], function (a) {
        return a("core/class").createClass("Line", {
            base: a("graphic/path"),
            constructor: function (a, b, c, d) {
                this.callBase(),
                this.point1 = {
                    x: a || 0,
                    y: b || 0
                },
                this.point2 = {
                    x: c || 0,
                    y: d || 0
                },
                this.update()
            },
            setPoint1: function (a, b) {
                return this.point1.x = a,
                this.point1.y = b,
                this.update()
            },
            setPoint2: function (a, b) {
                return this.point2.x = a,
                this.point2.y = b,
                this.update()
            },
            getPoint1: function () {
                return {
                    x: this.point1.x,
                    y: this.point1.y
                }
            },
            getPoint2: function () {
                return {
                    x: this.point2.x,
                    y: this.point2.y
                }
            },
            update: function () {
                var a = this.getDrawer();
                return a.clear(),
                a.moveTo(this.point1.x, this.point1.y),
                a.lineTo(this.point2.x, this.point2.y),
                this
            }
        })
    }),
    define("graphic/lineargradientbrush", ["graphic/svg", "graphic/gradientbrush", "graphic/defbrush", "graphic/color", "core/class"], function (a) {
        var b = "LinearGradientBrush",
            c = (a("graphic/svg"), a("graphic/gradientbrush"));
        return a("core/class").createClass(b, {
            base: c,
            constructor: function (a) {
                this.callBase("linearGradient"),
                this.setStartPosition(0, 0),
                this.setEndPosition(1, 0),
                "function" == typeof a && a.call(this, this)
            },
            setStartPosition: function (a, b) {
                return this.node.setAttribute("x1", a),
                this.node.setAttribute("y1", b),
                this
            },
            setEndPosition: function (a, b) {
                return this.node.setAttribute("x2", a),
                this.node.setAttribute("y2", b),
                this
            },
            getStartPosition: function () {
                return {
                    x: +this.node.getAttribute("x1"),
                    y: +this.node.getAttribute("y1")
                }
            },
            getEndPosition: function () {
                return {
                    x: +this.node.getAttribute("x2"),
                    y: +this.node.getAttribute("y2")
                }
            }
        })
    }),
    define("graphic/matrix", ["core/utils", "graphic/box", "core/class", "graphic/point"], function (a) {
        function b(a, b) {
            return {
                a: b.a * a.a + b.c * a.b,
                b: b.b * a.a + b.d * a.b,
                c: b.a * a.c + b.c * a.d,
                d: b.b * a.c + b.d * a.d,
                e: b.a * a.e + b.c * a.f + b.e,
                f: b.b * a.e + b.d * a.f + b.f
            }
        }
        function c(a) {
            return a * Math.PI / 180
        }
        var d = a("core/utils"),
            e = a("graphic/box"),
            f = /matrix\((.+)\)/i,
            g = a("graphic/point"),
            h = a("core/class").createClass("Matrix", {
            constructor: function () {
                arguments.length ? this.setMatrix.apply(this, arguments) : this.setMatrix(1, 0, 0, 1, 0, 0)
            },
            translate: function (a, c) {
                return this.m = b(this.m, {
                    a: 1,
                    c: 0,
                    e: a,
                    b: 0,
                    d: 1,
                    f: c
                }),
                this
            },
            rotate: function (a) {
                var d = c(a),
                    e = Math.sin(d),
                    f = Math.cos(d);
                return this.m = b(this.m, {
                    a: f,
                    c: -e,
                    e: 0,
                    b: e,
                    d: f,
                    f: 0
                }),
                this
            },
            scale: function (a, c) {
                return void 0 === c && (c = a),
                this.m = b(this.m, {
                    a: a,
                    c: 0,
                    e: 0,
                    b: 0,
                    d: c,
                    f: 0
                }),
                this
            },
            skew: function (a, d) {
                void 0 === d && (d = a);
                var e = Math.tan(c(a)),
                    f = Math.tan(c(d));
                return this.m = b(this.m, {
                    a: 1,
                    c: e,
                    e: 0,
                    b: f,
                    d: 1,
                    f: 0
                }),
                this
            },
            inverse: function () {
                var a, b, c, d, e, f, g, i = this.m,
                    j = i.a,
                    k = i.b,
                    l = i.c,
                    m = i.d,
                    n = i.e,
                    o = i.f;
                return a = j * m - k * l,
                b = m / a,
                c = -k / a,
                d = -l / a,
                e = j / a,
                f = (l * o - n * m) / a,
                g = (k * n - j * o) / a,
                new h(b, c, d, e, f, g)
            },
            setMatrix: function (a, b, c, e, f, g) {
                return this.m = 1 === arguments.length ? d.clone(arguments[0]) : {
                    a: a,
                    b: b,
                    c: c,
                    d: e,
                    e: f,
                    f: g
                },
                this
            },
            getMatrix: function () {
                return d.clone(this.m)
            },
            getTranslate: function () {
                var a = this.m;
                return {
                    x: a.e / a.a,
                    y: a.f / a.d
                }
            },
            mergeMatrix: function (a) {
                return new h(b(this.m, a.m))
            },
            merge: function (a) {
                return this.mergeMatrix(a)
            },
            toString: function () {
                return this.valueOf().join(" ")
            },
            valueOf: function () {
                var a = this.m;
                return [a.a, a.b, a.c, a.d, a.e, a.f]
            },
            transformPoint: function () {
                return h.transformPoint.apply(null, [].slice.call(arguments).concat([this.m]))
            },
            transformBox: function (a) {
                return h.transformBox(a, this.m)
            }
        });
        return h.parse = function (a) {
            var b, c = parseFloat;
            if (b = f.exec(a)) {
                var d = b[1].split(",");
                return 6 != d.length && (d = b[1].split(" ")),
                new h({
                    a: c(d[0]),
                    b: c(d[1]),
                    c: c(d[2]),
                    d: c(d[3]),
                    e: c(d[4]),
                    f: c(d[5])
                })
            }
            return new h
        },
        h.transformPoint = function (a, b, c) {
            return 2 === arguments.length && (c = b, b = a.y, a = a.x),
            new g(c.a * a + c.c * b + c.e, c.b * a + c.d * b + c.f)
        },
        h.transformBox = function (a, b) {
            for (var c, f, g = Number.MAX_VALUE, i = -Number.MAX_VALUE, j = Number.MAX_VALUE, k = -Number.MAX_VALUE, l = [
                [a.x, a.y],
                [a.x + a.width, a.y],
                [a.x, a.y + a.height],
                [a.x + a.width, a.y + a.height]
            ], m = []; c = l.pop();) f = h.transformPoint(c[0], c[1], b),
            m.push(f),
            g = Math.min(g, f.x),
            i = Math.max(i, f.x),
            j = Math.min(j, f.y),
            k = Math.max(k, f.y);
            return a = new e({
                x: g,
                y: j,
                width: i - g,
                height: k - j
            }),
            d.extend(a, {
                closurePoints: m,
                left: g,
                right: i,
                top: j,
                bottom: k
            }),
            a
        },
        h.getCTM = function (a, b) {
            var c = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            switch (b = b || "parent") {
            case "screen":
                c = a.node.getScreenCTM();
                break;
            case "doc":
            case "paper":
                c = a.node.getCTM();
                break;
            case "view":
            case "top":
                a.getPaper() && (c = a.node.getTransformToElement(a.getPaper().shapeNode));
                break;
            case "parent":
                a.node.parentNode && (c = a.node.getTransformToElement(a.node.parentNode));
                break;
            default:
                b.node && (c = a.node.getTransformToElement(b.shapeNode || b.node))
            }
            return new h(c.a, c.b, c.c, c.d, c.e, c.f)
        },
        h
    }),
    define("graphic/paper", ["core/class", "core/utils", "graphic/svg", "graphic/container", "graphic/shapecontainer", "graphic/shape", "graphic/viewbox", "graphic/eventhandler", "graphic/shapeevent", "graphic/styled", "graphic/matrix", "graphic/box", "graphic/point", "graphic/data", "graphic/pen"], function (a) {
        var b = a("core/class"),
            c = a("core/utils"),
            d = a("graphic/svg"),
            e = a("graphic/container"),
            f = a("graphic/shapecontainer"),
            g = a("graphic/viewbox"),
            h = a("graphic/eventhandler"),
            i = a("graphic/styled"),
            j = a("graphic/matrix"),
            k = b.createClass("Paper", {
            mixins: [f, h, i, g],
            constructor: function (a) {
                this.callBase(),
                this.node = this.createSVGNode(),
                this.node.paper = this,
                this.node.appendChild(this.resourceNode = d.createNode("defs")),
                this.node.appendChild(this.shapeNode = d.createNode("g")),
                this.resources = new e,
                this.setWidth("100%").setHeight("100%"),
                a && this.renderTo(a),
                this.callMixin()
            },
            renderTo: function (a) {
                c.isString(a) && (a = document.getElementById(a)),
                this.container = a,
                a.appendChild(this.node)
            },
            createSVGNode: function () {
                var a = d.createNode("svg");
                return a.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                a.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
                a
            },
            getNode: function () {
                return this.node
            },
            getContainer: function () {
                return this.container
            },
            getWidth: function () {
                return this.node.clientWidth
            },
            setWidth: function (a) {
                return this.node.setAttribute("width", a),
                this
            },
            getHeight: function () {
                return this.node.clientHeight
            },
            setHeight: function (a) {
                return this.node.setAttribute("height", a),
                this
            },
            setViewPort: function (a, b, c) {
                var d, e;
                1 == arguments.length && (d = arguments[0], a = d.center.x, b = d.center.y, c = d.zoom),
                c = c || 1,
                e = this.getViewBox();
                var f = new j,
                    g = e.x + e.width / 2 - a,
                    h = e.y + e.height / 2 - b;
                return f.translate(-a, -b),
                f.scale(c),
                f.translate(a, b),
                f.translate(g, h),
                this.shapeNode.setAttribute("transform", "matrix(" + f + ")"),
                this.viewport = {
                    center: {
                        x: a,
                        y: b
                    },
                    offset: {
                        x: g,
                        y: h
                    },
                    zoom: c
                },
                this
            },
            getViewPort: function () {
                if (!this.viewport) {
                    var a = this.getViewBox();
                    return {
                        zoom: 1,
                        center: {
                            x: a.x + a.width / 2,
                            y: a.y + a.height / 2
                        },
                        offset: {
                            x: 0,
                            y: 0
                        }
                    }
                }
                return this.viewport
            },
            getViewPortTransform: function () {
                var a = this.shapeNode.getCTM();
                return new j(a.a, a.b, a.c, a.d, a.e, a.f)
            },
            getTransform: function () {
                return this.getViewPortTransform().reverse()
            },
            addResource: function (a) {
                return this.resources.appendItem(a),
                a.node && this.resourceNode.appendChild(a.node),
                this
            },
            removeResource: function (a) {
                return a.remove && a.remove(),
                a.node && this.resourceNode.removeChild(a.node),
                this
            },
            getPaper: function () {
                return this
            }
        }),
            l = a("graphic/shape");
        return b.extendClass(l, {
            getPaper: function () {
                for (var a = this.container; a && a instanceof k == 0;) a = a.container;
                return a
            },
            whenPaperReady: function (a) {
                function b() {
                    var b = c.getPaper();
                    return b && a && a.call(c, b),
                    b
                }
                var c = this;
                return b() || this.on("add treeadd", function d() {
                    b() && (c.off("add", d), c.off("treeadd", d))
                }),
                this
            }
        }),
        k
    }),
    define("graphic/path", ["core/utils", "core/class", "graphic/shape", "graphic/svg", "graphic/eventhandler", "graphic/styled", "graphic/data", "graphic/matrix", "graphic/pen", "graphic/box", "graphic/geometry", "graphic/point", "graphic/vector"], function (a) {
        var b = a("core/utils"),
            c = a("core/class").createClass,
            d = a("graphic/shape"),
            e = a("graphic/svg"),
            f = a("graphic/geometry"),
            g = Array.prototype.slice,
            h = (b.flatten, c("PathDrawer", {
            constructor: function (a) {
                this.segment = [],
                this.path = a,
                this.__clear = !1
            },
            getPath: function () {
                return this.path
            },
            redraw: function () {
                return this._transation = this._transation || [],
                this.clear()
            },
            done: function () {
                var a = this._transation;
                return this._transation = null,
                this.push(a),
                this
            },
            clear: function () {
                return this._transation ? this._transation = [] : this.path.setPathData("M 0 0"),
                this._clear = !0,
                this
            },
            push: function () {
                var a, b = g.call(arguments);
                return this._transation ? (this._transation.push(b), this) : (this._clear ? (a = "", this._clear = !1) : a = this.path.getPathData(), a = a || "", this.path.setPathData(a + f.pathToString(b)), this)
            },
            moveTo: function () {
                return this.push("M", g.call(arguments))
            },
            moveBy: function () {
                return this.push("m", g.call(arguments))
            },
            lineTo: function () {
                return this.push("L", g.call(arguments))
            },
            lineBy: function () {
                return this.push("l", g.call(arguments))
            },
            arcTo: function () {
                return this.push("A", g.call(arguments))
            },
            arcBy: function () {
                return this.push("a", arguments)
            },
            carcTo: function (a) {
                return this.push("A", [a, a, 0].concat(g.call(arguments, 1)))
            },
            carcBy: function (a) {
                return this.push("a", [a, a, 0].concat(g.call(arguments, 1)))
            },
            bezierTo: function () {
                return this.push("C", g.call(arguments))
            },
            bezierBy: function () {
                return this.push("c", g.call(arguments))
            },
            close: function () {
                return this.push("z")
            }
        }));
        return c("Path", {
            base: d,
            constructor: function (a) {
                this.callBase("path"),
                a && this.setPathData(a),
                this.node.setAttribute("fill", e.defaults.fill),
                this.node.setAttribute("stroke", e.defaults.stroke)
            },
            setPathData: function (a) {
                return a ? (this.pathdata = f.pathToString(a), this.node.setAttribute("d", this.pathdata), this.trigger("shapeupdate", {
                    type: "pathdata"
                }), this) : void 0
            },
            getPathData: function () {
                return this.pathdata || ""
            },
            getDrawer: function () {
                return new h(this)
            },
            isClosed: function () {
                var a = this.getPathData();
                return !!~a.indexOf("z") || !!~a.indexOf("Z")
            }
        })
    }),
    define("graphic/pen", ["graphic/color", "core/utils", "graphic/standardcolor", "core/class"], function (a) {
        var b = a("graphic/color");
        return a("core/class").createClass("Pen", {
            constructor: function (a, b) {
                this.brush = a,
                this.width = b || 1,
                this.linecap = null,
                this.linejoin = null,
                this.dashArray = null,
                this.opacity = 1
            },
            getBrush: function () {
                return this.brush
            },
            setBrush: function (a) {
                return this.brush = a,
                this
            },
            setColor: function (a) {
                return this.setBrush(a)
            },
            getColor: function () {
                return this.brush instanceof b ? this.brush : null
            },
            getWidth: function () {
                return this.width
            },
            setWidth: function (a) {
                return this.width = a,
                this
            },
            getOpacity: function () {
                return this.opacity
            },
            setOpacity: function (a) {
                this.opacity = a
            },
            getLineCap: function () {
                return this.linecap
            },
            setLineCap: function (a) {
                return this.linecap = a,
                this
            },
            getLineJoin: function () {
                return this.linejoin
            },
            setLineJoin: function (a) {
                return this.linejoin = a,
                this
            },
            getDashArray: function () {
                return this.dashArray
            },
            setDashArray: function (a) {
                return this.dashArray = a,
                this
            },
            stroke: function (a) {
                var b = a.node;
                b.setAttribute("stroke", this.brush.toString()),
                b.setAttribute("stroke-width", this.getWidth()),
                this.getOpacity() < 1 && b.setAttribute("stroke-opacity", this.getOpacity()),
                this.getLineCap() && b.setAttribute("stroke-linecap", this.getLineCap()),
                this.getLineJoin() && b.setAttribute("stroke-linejoin", this.getLineJoin()),
                this.getDashArray() && b.setAttribute("stroke-dasharray", this.getDashArray())
            }
        })
    }),
    define("graphic/pie", ["core/class", "graphic/sweep", "graphic/point", "graphic/path"], function (a) {
        return a("core/class").createClass({
            base: a("graphic/sweep"),
            constructor: function (a, b, c) {
                this.callBase([0, a], b, c)
            },
            getRadius: function () {
                return this.getSectionArray()[1]
            },
            setRadius: function (a) {
                this.setSectionArray([0, a])
            }
        })
    }),
    define("graphic/point", ["core/class"], function (a) {
        var b = a("core/class").createClass("Point", {
            constructor: function (a, b) {
                this.x = a || 0,
                this.y = b || 0
            },
            offset: function (a, c) {
                return 1 == arguments.length && (c = a.y, a = a.x),
                new b(this.x + a, this.y + c)
            },
            valueOf: function () {
                return [this.x, this.y]
            },
            toString: function () {
                return this.valueOf().join(" ")
            },
            spof: function () {
                return new b((0 | this.x) + .5, (0 | this.y) + .5)
            }
        });
        return b.fromPolar = function (a, c, d) {
            return "rad" != d && (c = c / 180 * Math.PI),
            new b(a * Math.cos(c), a * Math.sin(c))
        },
        b.parse = function (a) {
            return a instanceof b ? a : "string" == typeof a ? b.parse(a.split(/\s*[\s,]\s*/)) : "0" in a && "1" in a ? new b(a[0], a[1]) : void 0
        },
        b
    }),
    define("graphic/pointcontainer", ["core/class", "graphic/container"], function (a) {
        return a("core/class").createClass("PointContainer", {
            base: a("graphic/container"),
            constructor: function () {
                this.callBase()
            },
            addPoint: function () {
                return this.addItem.apply(this, arguments)
            },
            prependPoint: function () {
                return this.prependItem.apply(this, arguments)
            },
            appendPoint: function () {
                return this.appendItem.apply(this, arguments)
            },
            removePoint: function () {
                return this.removeItem.apply(this, arguments)
            },
            addPoints: function () {
                return this.addItems.apply(this, arguments)
            },
            setPoints: function () {
                return this.setItems.apply(this, arguments)
            },
            getPoint: function () {
                return this.getItem.apply(this, arguments)
            },
            getPoints: function () {
                return this.getItems.apply(this, arguments)
            },
            getFirstPoint: function () {
                return this.getFirstItem.apply(this, arguments)
            },
            getLastPoint: function () {
                return this.getLastItem.apply(this, arguments)
            }
        })
    }),
    define("graphic/poly", ["core/utils", "core/class", "graphic/path", "graphic/shape", "graphic/svg", "graphic/geometry", "graphic/pointcontainer", "graphic/container"], function (a) {
        return a("core/utils"),
        a("core/class").createClass("Poly", {
            base: a("graphic/path"),
            mixins: [a("graphic/pointcontainer")],
            constructor: function (a, b) {
                this.callBase(),
                this.closeable = !!b,
                this.setPoints(a || []),
                this.changeable = !0,
                this.update()
            },
            onContainerChanged: function () {
                this.changeable && this.update()
            },
            update: function () {
                var a = this.getDrawer(),
                    b = this.getPoints();
                if (a.clear(), !b.length) return this;
                a.moveTo(b[0]);
                for (var c, d = 1, e = b.length; e > d; d++) c = b[d],
                a.lineTo(c);
                return this.closeable && b.length > 2 && a.close(),
                this
            }
        })
    }),
    define("graphic/resource", ["graphic/svg", "core/class"], function (a) {
        var b = a("graphic/svg");
        return a("core/class").createClass("Resource", {
            constructor: function (a) {
                this.callBase(),
                this.node = b.createNode(a)
            },
            toString: function () {
                return "url(#" + this.node.id + ")"
            }
        })
    }),
    define("graphic/shape", ["graphic/svg", "core/utils", "graphic/eventhandler", "graphic/shapeevent", "core/class", "graphic/styled", "graphic/data", "graphic/matrix", "graphic/box", "graphic/point", "graphic/pen", "graphic/color"], function (a) {
        var b = a("graphic/svg"),
            c = a("core/utils"),
            d = a("graphic/eventhandler"),
            e = a("graphic/styled"),
            f = a("graphic/data"),
            g = a("graphic/matrix"),
            h = (a("graphic/pen"), Array.prototype.slice),
            i = a("graphic/box"),
            j = a("core/class").createClass("Shape", {
            mixins: [d, e, f],
            constructor: function (a) {
                this.node = b.createNode(a),
                this.node.shape = this,
                this.transform = {
                    translate: null,
                    rotate: null,
                    scale: null,
                    matrix: null
                },
                this.callMixin()
            },
            getId: function () {
                return this.node.id
            },
            setId: function (a) {
                return this.node.id = a,
                this
            },
            getNode: function () {
                return this.node
            },
            getBoundaryBox: function () {
                var a;
                try {
                    a = this.node.getBBox()
                } catch(b) {
                    a = {
                        x: this.node.clientLeft,
                        y: this.node.clientTop,
                        width: this.node.clientWidth,
                        height: this.node.clientHeight
                    }
                }
                return new i(a)
            },
            getRenderBox: function (a) {
                var b = this.getBoundaryBox(),
                    c = this.getTransform(a);
                return c.transformBox(b)
            },
            getWidth: function () {
                return this.getRenderBox().width
            },
            getHeight: function () {
                return this.getRenderBox().height
            },
            getSize: function () {
                var a = this.getRenderBox();
                return delete a.x,
                delete a.y,
                a
            },
            setOpacity: function (a) {
                return this.node.setAttribute("opacity", a),
                this
            },
            getOpacity: function () {
                var a = this.node.getAttribute("opacity");
                return a ? +a : 1
            },
            setVisible: function (a) {
                return a ? this.node.removeAttribute("display") : this.node.setAttribute("display", "none"),
                this
            },
            getVisible: function () {
                this.node.getAttribute("display")
            },
            hasAncestor: function (a) {
                for (var b = this.container; b;) {
                    if (b === a) return !0;
                    b = b.container
                }
                return !1
            },
            getTransform: function (a) {
                return g.getCTM(this, a)
            },
            clearTransform: function () {
                return this.node.removeAttribute("transform"),
                this.transform = {
                    translate: null,
                    rotate: null,
                    scale: null,
                    matrix: null
                },
                this.trigger("shapeupdate", {
                    type: "transform"
                }),
                this
            },
            _applyTransform: function () {
                var a = this.transform,
                    b = [];
                return a.translate && b.push(["translate(", a.translate, ")"]),
                a.rotate && b.push(["rotate(", a.rotate, ")"]),
                a.scale && b.push(["scale(", a.scale, ")"]),
                a.matrix && b.push(["matrix(", a.matrix, ")"]),
                this.node.setAttribute("transform", c.flatten(b).join(" ")),
                this
            },
            setMatrix: function (a) {
                return this.transform.matrix = a,
                this._applyTransform()
            },
            setTranslate: function (a) {
                return this.transform.translate = null !== a && h.call(arguments) || null,
                this._applyTransform()
            },
            setRotate: function (a) {
                return this.transform.rotate = null !== a && h.call(arguments) || null,
                this._applyTransform()
            },
            setScale: function (a) {
                return this.transform.scale = null !== a && h.call(arguments) || null,
                this._applyTransform()
            },
            translate: function (a, b) {
                var c = this.transform.matrix || new g;
                return void 0 === b && (b = 0),
                this.transform.matrix = c.translate(a, b),
                this._applyTransform()
            },
            rotate: function (a) {
                var b = this.transform.matrix || new g;
                return this.transform.matrix = b.rotate(a),
                this._applyTransform()
            },
            scale: function (a, b) {
                var c = this.transform.matrix || new g;
                return void 0 === b && (b = a),
                this.transform.matrix = c.scale(a, b),
                this._applyTransform()
            },
            skew: function (a, b) {
                var c = this.transform.matrix || new g;
                return void 0 === b && (b = a),
                this.transform.matrix = c.skew(a, b),
                this._applyTransform()
            },
            stroke: function (a, b) {
                return a && a.stroke ? a.stroke(this) : (this.node.setAttribute("stroke", a.toString()), b && this.node.setAttribute("stroke-width", b)),
                this
            },
            fill: function (a) {
                return this.node.setAttribute("fill", a.toString()),
                this
            },
            setAttr: function (a, b) {
                var d = this;
                c.isObject(a) && c.each(a, function (a, b) {
                    d.setAttr(b, a)
                }),
                void 0 === b || null === b || "" === b ? this.node.removeAttribute(a) : this.node.setAttribute(a, b)
            },
            getAttr: function (a) {
                return this.node.getAttribute(a)
            }
        });
        return j
    }),
    define("graphic/shapecontainer", ["graphic/container", "core/class", "core/utils", "graphic/shape", "graphic/svg", "graphic/eventhandler", "graphic/styled", "graphic/data", "graphic/matrix", "graphic/pen", "graphic/box"], function (a) {
        var b = a("graphic/container"),
            c = a("core/utils"),
            d = a("core/class").createClass("ShapeContainer", {
            base: b,
            isShapeContainer: !0,
            handleAdd: function (a, b) {
                var c = this.getShapeNode();
                c.insertBefore(a.node, c.childNodes[b] || null),
                a.trigger("add", {
                    container: this
                }),
                a.notifyTreeModification && a.notifyTreeModification("treeadd", this)
            },
            handleRemove: function (a) {
                var b = this.getShapeNode();
                b.removeChild(a.node),
                a.trigger("remove", {
                    container: this
                }),
                a.notifyTreeModification && a.notifyTreeModification("treeremove", this)
            },
            notifyTreeModification: function (a, b) {
                this.eachItem(function (c, d) {
                    d.notifyTreeModification && d.notifyTreeModification(a, b),
                    d.trigger(a, {
                        container: b
                    })
                })
            },
            getShape: function (a) {
                return this.getItem(a)
            },
            addShape: function (a, b) {
                return this.addItem(a, b)
            },
            appendShape: function (a) {
                return this.addShape(a)
            },
            prependShape: function (a) {
                return this.addShape(a, 0)
            },
            replaceShape: function (a, b) {
                var c = this.indexOf(b);
                return -1 !== c ? (this.removeShape(c), this.addShape(a, c), this) : void 0
            },
            addShapeBefore: function (a, b) {
                var c = this.indexOf(b);
                return this.addShape(a, c)
            },
            addShapeAfter: function (a, b) {
                var c = this.indexOf(b);
                return this.addShape(a, -1 === c ? void 0 : c + 1)
            },
            addShapes: function (a) {
                return this.addItems(a)
            },
            removeShape: function (a) {
                return this.removeItem(a)
            },
            getShapes: function () {
                return this.getItems()
            },
            getShapesByType: function (a) {
                function b(e) {
                    a.toLowerCase() == e.getType().toLowerCase() && d.push(e),
                    e.isShapeContainer && c.each(e.getShapes(), function (a) {
                        b(a)
                    })
                }
                var d = [];
                return b(this),
                d
            },
            getShapeById: function (a) {
                return this.getShapeNode().getElementById(a).shape
            },
            arrangeShape: function (a, b) {
                return this.removeShape(a).addShape(a, b)
            },
            getShapeNode: function () {
                return this.shapeNode || this.node
            }
        }),
            e = a("graphic/shape");
        return a("core/class").extendClass(e, {
            bringTo: function (a) {
                return this.container.arrangeShape(this, a),
                this
            },
            bringFront: function () {
                return this.bringTo(this.container.indexOf(this) + 1)
            },
            bringBack: function () {
                return this.bringTo(this.container.indexOf(this) - 1)
            },
            bringTop: function () {
                return this.container.removeShape(this).addShape(this),
                this
            },
            bringRear: function () {
                return this.bringTo(0)
            },
            bringRefer: function (a, b) {
                return a.container && (this.remove && this.remove(), a.container.addShape(this, a.container.indexOf(a) + (b || 0))),
                this
            },
            bringAbove: function (a) {
                return this.bringRefer(a)
            },
            bringBelow: function (a) {
                return this.bringRefer(a, 1)
            },
            replaceBy: function (a) {
                return this.container && (a.bringAbove(this), this.remove()),
                this
            }
        }),
        d
    }),
    define("graphic/shapeevent", ["graphic/matrix", "core/utils", "graphic/box", "graphic/point", "core/class"], function (a) {
        var b = a("graphic/matrix"),
            c = a("core/utils");
        return a("graphic/point"),
        a("core/class").createClass("ShapeEvent", {
            constructor: function (a) {
                var b = null;
                c.isObject(a.target) ? c.extend(this, a) : (this.type = a.type, b = a.target, b.correspondingUseElement && (b = b.correspondingUseElement), this.originEvent = a, this.targetShape = b.shape || b.paper || a.currentTarget && (a.currentTarget.shape || a.currentTarget.paper), a._kityParam && c.extend(this, a._kityParam))
            },
            preventDefault: function () {
                var a = this.originEvent;
                return a ? a.preventDefault ? (a.preventDefault(), a.cancelable) : (a.returnValue = !1, !0) : !0
            },
            getPosition: function (a, c) {
                if (!this.originEvent) return null;
                var d = this.originEvent.touches ? this.originEvent.touches[c || 0] : this.originEvent,
                e = d && d.clientX || 0,
                f = d && d.clientY || 0,
                g = this.targetShape.shapeNode || this.targetShape.node,
                h = b.transformPoint(e, f, g.getScreenCTM().inverse());
                return b.getCTM(this.targetShape, a || "view").transformPoint(h)
            },
            stopPropagation: function () {
                var a = this.originEvent;
                return a ? void(a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !1) : !0
            }
        })
    }),
    define("graphic/standardcolor", [], {
        COLOR_STANDARD: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00"
        },
        EXTEND_STANDARD: {}
    }),
    define("graphic/styled", ["core/class"], function (a) {
        function b(a) {
            return a.classList || (a.classList = new c(a)),
            a.classList
        }
        var c = a("core/class").createClass("ClassList", {
            constructor: function (a) {
                this._node = a,
                this._list = a.className.toString().split(" ")
            },
            _update: function () {
                this._node.className = this._list.join(" ")
            },
            add: function (a) {
                this._list.push(a),
                this._update()
            },
            remove: function (a) {
                var b = this._list.indexOf(a);~b && this._list.splice(b, 1),
                this._update()
            },
            contains: function (a) {
                return !!~this._list.indexOf(a)
            }
        });
        return a("core/class").createClass("Styled", {
            addClass: function (a) {
                return b(this.node).add(a),
                this
            },
            removeClass: function (a) {
                return b(this.node).remove(a),
                this
            },
            hasClass: function (a) {
                return b(this.node).contains(a)
            },
            setStyle: function (a) {
                if (2 == arguments.length) return this.node.style[arguments[0]] = arguments[1],
                this;
                for (var b in a) a.hasOwnProperty(b) && (this.node.style[b] = a[b]);
                return this
            }
        })
    }),
    define("graphic/svg", [], function () {
        var a = document,
            b = 0,
            c = {
            createNode: function (d) {
                var e = a.createElementNS(c.ns, d);
                return e.id = "kity_" + d + "_" + b++,
                e
            },
            defaults: {
                stroke: "none",
                fill: "none"
            },
            xlink: "http://www.w3.org/1999/xlink",
            ns: "http://www.w3.org/2000/svg"
        };
        return c
    }),
    define("graphic/sweep", ["graphic/point", "core/class", "graphic/path", "core/utils", "graphic/shape", "graphic/svg", "graphic/geometry"], function (a) {
        var b = a("graphic/point");
        return a("core/class").createClass("Sweep", {
            base: a("graphic/path"),
            constructor: function (a, b, c) {
                this.callBase(),
                this.sectionArray = a || [],
                this.angle = b || 0,
                this.angleOffset = c || 0,
                this.draw()
            },
            getSectionArray: function () {
                return this.sectionArray
            },
            setSectionArray: function (a) {
                return this.sectionArray = a,
                this.draw()
            },
            getAngle: function () {
                return this.angle
            },
            setAngle: function (a) {
                return this.angle = a,
                this.draw()
            },
            getAngleOffset: function () {
                return this.angleOffset
            },
            setAngleOffset: function (a) {
                return this.angleOffset = a,
                this.draw()
            },
            draw: function () {
                var a, b = this.sectionArray;
                for (a = 0; a < b.length; a += 2) this.drawSection(b[a], b[a + 1]);
                return this
            },
            drawSection: function (a, c) {
                var d = this.angle && (this.angle % 360 ? this.angle % 360 : 360),
                    e = this.angleOffset,
                    f = e + d / 2,
                    g = e + d,
                    h = this.getDrawer();
                h.moveTo(b.fromPolar(a, e)),
                h.lineTo(b.fromPolar(c, e)),
                c && (h.carcTo(c, 0, 1, b.fromPolar(c, f)), h.carcTo(c, 0, 1, b.fromPolar(c, g))),
                h.lineTo(b.fromPolar(a, g)),
                a && (h.carcTo(a, 0, 1, b.fromPolar(a, f)), h.carcTo(a, 0, 1, b.fromPolar(a, e))),
                h.close()
            }
        })
    }),
    define("graphic/text", ["graphic/textcontent", "graphic/shape", "core/class", "graphic/shapecontainer", "graphic/container", "core/utils", "graphic/svg"], function (a) {
        function b(a) {
            var b = window.getComputedStyle(a.node),
                c = [b.fontFamily, b.fontSize, b.fontStretch, b.fontStyle, b.fontVariant, b.fontWeight].join("-");
            if (f[c]) return f[c];
            var d = a.getBoundaryBox(),
                e = a.getY() + +a.node.getAttribute("dy"),
                g = e - d.y,
                h = g - d.height;
            return f[c] = {
                top: g,
                bottom: h,
                middle: (g + h) / 2
            }
        }
        var c = a("graphic/textcontent"),
            d = a("graphic/shapecontainer"),
            e = a("graphic/svg"),
            f = {};
        return a("core/class").createClass("Text", {
            base: c,
            mixins: [d],
            constructor: function (a) {
                this.callBase("text"),
                void 0 !== a && this.setContent(a)
            },
            setX: function (a) {
                return this.node.setAttribute("x", a),
                this
            },
            setPosition: function (a, b) {
                return this.setX(a).setY(b)
            },
            setY: function (a) {
                return this.node.setAttribute("y", a),
                this
            },
            getX: function () {
                return +this.node.getAttribute("x") || 0
            },
            getY: function () {
                return +this.node.getAttribute("y") || 0
            },
            setFont: function (a) {
                return this.callBase(a),
                this.setVerticalAlign(this.getVerticalAlign())
            },
            setTextAnchor: function (a) {
                return this.node.setAttribute("text-anchor", a),
                this
            },
            getTextAnchor: function () {
                return this.node.getAttribute("text-anchor") || "start"
            },
            setVerticalAlign: function (a) {
                return this.whenPaperReady(function () {
                    var c;
                    switch (a) {
                    case "top":
                        c = b(this).top;
                        break;
                    case "bottom":
                        c = b(this).bottom;
                        break;
                    case "middle":
                        c = b(this).middle;
                        break;
                    default:
                        c = 0
                    }
                    this.node.setAttribute("dy", c)
                }),
                this.verticalAlign = a,
                this
            },
            getVerticalAlign: function () {
                return this.verticalAlign || "baseline"
            },
            setStartOffset: function (a) {
                this.shapeNode != this.node && this.shapeNode.setAttribute("startOffset", 100 * a + "%")
            },
            addSpan: function (a) {
                return this.addShape(a),
                this
            },
            setPath: function (a) {
                var b = this.shapeNode;
                if (this.shapeNode == this.node) {
                    for (b = this.shapeNode = e.createNode("textPath"); this.node.firstChild;) this.shapeNode.appendChild(this.node.firstChild);
                    this.node.appendChild(b)
                }
                return b.setAttributeNS(e.xlink, "xlink:href", "#" + a.node.id),
                this.setAnchor(this.getAnchor()),
                this
            }
        })
    }),
    define("graphic/textcontent", ["graphic/shape", "graphic/svg", "core/utils", "graphic/eventhandler", "graphic/styled", "graphic/data", "graphic/matrix", "graphic/pen", "graphic/box", "core/class"], function (a) {
        var b = a("graphic/shape");
        return a("core/class").createClass("TextContent", {
            base: b,
            constructor: function (a) {
                this.callBase(a),
                this.shapeNode = this.shapeNode || this.node
            },
            clearContent: function () {
                for (; this.shapeNode.firstChild;) this.shapeNode.removeChild(this.shapeNode.firstChild);
                return this
            },
            setContent: function (a) {
                return this.shapeNode.textContent = a,
                this
            },
            getContent: function () {
                return this.shapeNode.textContent
            },
            appendContent: function (a) {
                return this.shapeNode.textContent += a,
                this
            },
            setSize: function (a) {
                return this.setFontSize(a)
            },
            setFontSize: function (a) {
                return this.setFont({
                    size: a
                })
            },
            setFontFamily: function (a) {
                return this.setFont({
                    family: a
                })
            },
            setFontBold: function (a) {
                return this.setFont({
                    weight: a ? "bold" : "normal"
                })
            },
            setFontItalic: function (a) {
                return this.setFont({
                    style: a ? "italic" : "normal"
                })
            },
            setFont: function (a) {
                return a.family && this.node.setAttribute("font-family", a.family),
                a.size && this.node.setAttribute("font-size", a.size),
                a.weight && this.node.setAttribute("font-weight", a.weight),
                a.style && this.node.setAttribute("font-style", a.style),
                this
            },
            getExtentOfChar: function (a) {
                return this.node.getExtentOfChar(a)
            },
            getRotationOfChar: function (a) {
                return this.node.getRotationOfChar(a)
            },
            getCharNumAtPosition: function (a, b) {
                return this.node.getCharNumAtPosition(this.node.viewportElement.createSVGPoint(a, b))
            }
        })
    }),
    define("graphic/use", ["graphic/svg", "core/class", "graphic/shape", "core/utils", "graphic/eventhandler", "graphic/styled", "graphic/data", "graphic/matrix", "graphic/pen", "graphic/box"], function (a) {
        var b = a("graphic/svg"),
            c = a("core/class"),
            d = c.createClass("Use", {
            base: a("graphic/shape"),
            constructor: function (a) {
                var c = null;
                this.callBase("use"),
                c = a.getId(),
                c && this.node.setAttributeNS(b.xlink, "xlink:href", "#" + c),
                "none" === a.node.getAttribute("fill") && a.node.removeAttribute("fill"),
                "none" === a.node.getAttribute("stroke") && a.node.removeAttribute("stroke")
            }
        }),
            e = a("graphic/shape");
        return c.extendClass(e, {
            use: function () {
                return new d(this)
            }
        }),
        d
    }),
    define("graphic/vector", ["graphic/point", "core/class", "graphic/matrix", "core/utils", "graphic/box"], function (a) {
        var b = a("graphic/point"),
            c = a("graphic/matrix"),
            d = a("core/class").createClass("Vector", {
            base: b,
            constructor: function (a, b) {
                this.callBase(a, b)
            },
            square: function () {
                return this.x * this.x + this.y * this.y
            },
            length: function () {
                return Math.sqrt(this.square())
            },
            add: function (a) {
                return new d(this.x + a.x, this.y + a.y)
            },
            minus: function (a) {
                return new d(this.x - a.x, this.y - a.y)
            },
            dot: function (a) {
                return this.x * a.x + this.y * a.y
            },
            project: function (a) {
                return a.multipy(this.dot(a) / a.square())
            },
            normalize: function (a) {
                return void 0 === a && (a = 1),
                this.multipy(a / this.length())
            },
            multipy: function (a) {
                return new d(this.x * a, this.y * a)
            },
            rotate: function (a, b) {
                "rad" == b && (a = a / Math.PI * 180);
                var e = (new c).rotate(a).transformPoint(this);
                return new d(e.x, e.y)
            },
            vertical: function () {
                return new d(this.y, -this.x)
            },
            reverse: function () {
                return this.multipy(-1)
            },
            getAngle: function () {}
        });
        return d.fromPoints = function (a, b) {
            return new d(b.x - a.x, b.y - a.y)
        },
        a("core/class").extendClass(b, {
            asVector: function () {
                return new d(this.x, this.y)
            }
        }),
        d
    }),
    define("graphic/view", ["graphic/shapecontainer", "graphic/container", "core/utils", "core/class", "graphic/shape", "graphic/viewbox", "graphic/view"], function (a) {
        var b = a("graphic/shapecontainer"),
            c = a("graphic/viewbox");
        return a("core/class").createClass("View", {
            mixins: [b, c],
            base: a("graphic/view"),
            constructor: function () {
                this.callBase("view")
            }
        })
    }),
    define("graphic/viewbox", ["core/class"], function (a) {
        return a("core/class").createClass("ViewBox", {
            getViewBox: function () {
                var a = this.node.getAttribute("viewBox");
                return null === a ? {
                    x: 0,
                    y: 0,
                    width: this.node.clientWidth || this.node.parentNode.clientWidth,
                    height: this.node.clientHeight || this.node.parentNode.clientHeight
                } : (a = a.split(" "), {
                    x: +a[0],
                    y: +a[1],
                    width: +a[2],
                    height: +a[3]
                })
            },
            setViewBox: function (a, b, c, d) {
                return this.node.setAttribute("viewBox", [a, b, c, d].join(" ")),
                this
            }
        })
    }),
    define("kity", ["core/utils", "core/class", "graphic/circle", "graphic/ellipse", "graphic/color", "graphic/standardcolor", "graphic/container", "graphic/point", "graphic/path", "graphic/gradientbrush", "graphic/svg", "graphic/defbrush", "graphic/group", "graphic/shapecontainer", "graphic/shape", "graphic/line", "graphic/lineargradientbrush", "graphic/matrix", "graphic/box", "graphic/paper", "graphic/viewbox", "graphic/eventhandler", "graphic/styled", "graphic/geometry", "graphic/pen", "graphic/pie", "graphic/sweep", "graphic/data", "graphic/text", "graphic/textcontent", "graphic/use", "graphic/vector", "animate/animator", "animate/timeline", "animate/easing", "animate/opacityanimator", "animate/frame"], function (a) {
        var b = {},
            c = a("core/utils");
        return b.version = "2.0.0",
        c.extend(b, {
            createClass: a("core/class").createClass,
            extendClass: a("core/class").extendClass,
            Utils: c,
            Circle: a("graphic/circle"),
            Color: a("graphic/color"),
            Container: a("graphic/container"),
            Ellipse: a("graphic/ellipse"),
            GradientBrush: a("graphic/gradientbrush"),
            Group: a("graphic/group"),
            Line: a("graphic/line"),
            LinearGradientBrush: a("graphic/lineargradientbrush"),
            Matrix: a("graphic/matrix"),
            Paper: a("graphic/paper"),
            Path: a("graphic/path"),
            Pen: a("graphic/pen"),
            Point: a("graphic/point"),
            Pie: a("graphic/pie"),
            Shape: a("graphic/shape"),
            ShapeContainer: a("graphic/shapecontainer"),
            Sweep: a("graphic/sweep"),
            Text: a("graphic/text"),
            Use: a("graphic/use"),
            Vector: a("graphic/vector"),
            g: a("graphic/geometry"),
            Animator: a("animate/animator"),
            Easing: a("animate/easing"),
            OpacityAnimator: a("animate/opacityanimator"),
            Timeline: a("animate/timeline")
        }),
        window.kity = b
    }),


    function () {
        define("export", function (a) {
            return a("kity")
        }),
        use("export")
    }(this)
}(),


function (kity, window) {
    function getCamelName(a) {
        return a.replace(/_(\w)/gi, function (a) {
            return a[1].toUpperCase()
        })
    }
    var exports = exports || window,
        kc = {};
    kc.version = "1.0.1",
    kc.fx = !0,
    exports.kc = kc;
    var Ruler = kc.Ruler = kity.createClass("Ruler", {
        constructor: function (a, b) {
            this.ref_grid = [],
            this.map_grid = [],
            this.ref(a, b),
            this.map(a, b)
        },
        ref: function (a, b) {
            return arguments.length ? (this._ref = {
                from: +a,
                to: +b,
                dur: +b - +a
            },
            this) : this._ref
        },
        map: function (a, b) {
            return arguments.length ? (this._map = {
                from: +a,
                to: +b,
                dur: +b - +a
            },
            this) : this._map
        },
        reverse: function () {
            var a = this._ref,
                b = this._map;
            return new Ruler(b.from, b.to).map(a.from, a.to)
        },
        measure: function (a) {
            if (0 === this._ref.dur) return 0;
            var b = this._ref,
                c = this._map;
            return c.from + (a - b.from) / b.dur * c.dur
        },
        grid: function (a, b, c) {
            var d, e = this._ref,
                f = (this._map, []),
                g = [];
            if (kity.Utils.isArray(a)) f = a;
            else for (d = a; d < e.to + b; d += b) f.push(d);
            this.ref_grid = f,
            c && this.ref(f[0], f[f.length - 1]);
            for (var h = 0; h < f.length; h++) g.push(this.measure(f[h]));
            return this.map_grid = g,
            {
                ref: f,
                map: g
            }
        },
        gridBySize: function (a) {
            var b = this._ref,
                c = kc.sugar.snap(b.from, a, "right");
            return this.grid(c, a)
        },
        fagm: function (a) {
            for (var b = this._ref.dur, c = b / a, d = 1; c > 100;) c /= 10,
            d *= 10;
            for (; 10 > c;) c *= 10,
            d /= 10;
            return (0 | c) * d
        },
        align: function (a, b, c) {
            var d = a > 0 ? a - a % b : a - a % b - b,
            e = d + b;
            return "left" == c ? d : "right" == c ? e : e - a > a - d ? d : e
        },
        gridByCount: function (a, b, c, d) {
            b = b || this.fagm(a);
            var e = this._ref;
            d = kity.Utils.isNumber(d) ? d : this.align(e.from, b, "left");
            for (var f = b; f * a < e.dur;) f += b;
            return this.grid(d, f, c)
        },
        gridByArray: function (a) {
            return this.grid(a, null, !0)
        },
        gridByCategories: function (a) {
            var b, c = [],
                d = [];
            for (b = 0; a > b; b++) c.push(b);
            for (this.ref_grid = c, b = 0; b < c.length; b++) d.push(this.measure(c[b]));
            return this.map_grid = d,
            {
                ref: c,
                map: d
            }
        },
        checkOverflow: function (a) {
            return a < this._ref.from ? -1 : a > this._ref.to ? 1 : 0
        },
        leanTo: function (a, b) {
            var c = "map" == b ? this.map_grid : this.ref_grid;
            if (!c || 0 == c.length) return null;
            if (1 == c.length) return {
                value: c[0],
                index: 0
            };
            var d = c[0];
            if (d > a) return {
                value: d,
                index: 0
            };
            var e = c[c.length - 1];
            if (a > e) return {
                value: e,
                index: c.length - 1
            };
            var f = c[1] - c[0],
                g = this.align(a, f),
                h = Math.round(g / f);
            return {
                value: g,
                index: h
            }
        }
    });
    Ruler.from = function (a) {
        return {
            to: function (b) {
                return new Ruler(a, b)
            }
        }
    },
    kc.sharpen = function (a) {
        return "number" == typeof a ? (0 | a) + .5 : "x" in a && "y" in a ? {
            x: (0 | a.x) + .5,
            y: (0 | a.y) + .5
        } : void 0
    };
    var ChartEvent = kc.ChartEvent = kity.createClass("ChartEvent", {
        constructor: function (a, b) {
            b && (this.kityEvent = b),
            this.target = a
        },
        getTargetChartElement: function () {
            for (var a = this.kityEvent.targetShape; a && !a.host;) a = a.container;
            return a.host
        }
    }),
        EventHandler = kc.EventHandler = kity.createClass("EventHandler", function () {
        function a(a, b) {
            return function (c) {
                a.call(b, new kc.ChartEvent(b, c))
            }
        }
        var b = "click dblclick mousedown contextmenu mouseup mouseout mouseover mouseenter mouseleave mousemove mousewheel touchstart touchmove touchend".split(" ");
        return {
            constructor: function () {
                this._initEvents()
            },
            on: function (c, d) {
                for (var e = this._eventCallbacks, f = c.split(" "), g = 0; g < f.length; g++) {
                    var h = e[f[g]];
                    h || (e[f[g]] = []),
                    ~b.indexOf(f[g]) && this.canvas ? this.canvas.on(f[g], a(d, this)) : e[f[g]].push(d)
                }
            },
            off: function () {},
            trigger: function (a, c) {~b.indexOf(a) && this.canvas ? this.canvas.fire(a, c) : this._fire(a, c)
            },
            _fire: function (a, b) {
                var c, d = this;
                "string" == typeof a ? (c = new kc.ChartEvent(d), c.name = a) : c = a,
                c.data = b;
                var e = d._eventCallbacks[c.name];
                if (!e) return !1;
                for (var f = 0; f < e.length; f++) e[f].call(d, c)
            },
            _initEvents: function () {
                this._eventCallbacks = {}
            },
            _resetEvents: function () {
                this._bindEvents()
            }
        }
    }()),
        Data = kc.Data = kity.createClass("Data", {
        mixins: [kc.EventHandler],
        constructor: function (a) {
            this.origin = a || {},
            this.callMixin()
        },
        format: function () {
            return this.origin
        },
        update: function (a) {
            this.origin = kity.Utils.extend(this.origin, a),
            this.trigger("update")
        },
        clear: function () {
            this.origin = {},
            this.trigger("update")
        },
        reset: function (a) {
            this.origin = a
        }
    }),
        elementUUID = 0,
        ChartElement = kc.ChartElement = kity.createClass("ChartElement", {
        mixins: [kc.EventHandler],
        constructor: function (a) {
            this.canvas = new kity.Group,
            this.canvas.host = this,
            this.visible = !0,
            this.param = a || {},
            this._bindData(),
            this.elements = {},
            this.callMixin()
        },
        addElement: function (a, b) {
            return 1 === arguments.length && (b = a, a = "ChartElement_" + elementUUID++),
            this.elements[a] = b,
            this.canvas.addShape(b.canvas),
            b.container = this,
            b
        },
        getElement: function (a) {
            return this.elements[a] || null
        },
        removeElement: function (a) {
            var b = this.elements[a];
            if (b) delete b.container,
            this.canvas.removeShape(b.canvas),
            delete this.elements[a];
            else if (void 0 === a) for (var c in this.elements) b = this.elements[c],
            delete b.container,
            this.canvas.removeShape(b.canvas),
            delete this.elements[c]
        },
        setVisible: function (a) {
            return void 0 !== a && (this.visible = a, this.canvas.setStyle({
                display: a ? "inline" : "none"
            })),
            this
        },
        isVisible: function () {
            return this.visible
        },
        setPosition: function (a, b) {
            "object" == typeof a && "x" in a && "y" in a && (b = a.y || 0, a = a.x || 0),
            a = a || 0,
            b = b || 0;
            var c = a - (this.x || 0),
                d = b - (this.y || 0);
            this.x = a,
            this.y = b,
            this.canvas.translate(c, d)
        },
        getPosition: function () {
            return {
                x: this.param.x || 0,
                y: this.param.y || 0
            }
        },
        getInterestPoint: function () {
            return this.getPosition()
        },
        registerUpdateRules: function () {
            return {
                setPosition: ["x", "y"],
                setOpacity: ["opacity"],
                setVisible: ["visible"]
            }
        },
        updateByRule: function (a, b, c, d, e) {
            var f, g, h, i;
            for (g = this.param, h = 0; h < b.length; h++) if (i = b[h], i in c && (!this._firstUpdate || g[i] !== c[i])) {
                f = !0;
                break
            }
            if (f) {
                var j = b.map(function (a) {
                    return a in c ? c[a] : g[a]
                });
                j = j.concat([d, e]),
                this[a].apply(this, j)
            }
        },
        update: function (a, b, c) {
            var d, e, f, g;
            this._bindData(),
            this._updateRules || (this._updateRules = this.registerUpdateRules(), a = kity.Utils.extend(this.param, a)),
            e = this._updateRules,
            a || (a = this.param),
            g = [];
            for (f in e) this.updateByRule(f, e[f], a, b, c),
            g = g.concat(e[f]);
            a && a != this.param && kity.Utils.extend(this.param, a);
            for (d in a) ! ~g.indexOf(d) && this.elements[d] && this.elements[d].update(a[d]);
            return this._firstUpdate = this._firstUpdate || +new Date,
            this.trigger("update"),
            this
        },
        getBoundaryBox: function () {
            return this.canvas.getBoundaryBox()
        },
        getSize: function () {
            var a = this.getBoundaryBox();
            return {
                width: a.width,
                height: a.height
            }
        },
        flipX: function () {
            this.canvas.scale(-1, 1)
        },
        flipY: function () {
            this.canvas.scale(1, -1)
        },
        getParam: function (a) {
            return this.param[a]
        },
        setParam: function (a, b) {
            this.param[a] = b
        },
        setOpacity: function (a) {
            this.canvas.setOpacity(a)
        },
        _bindData: function () {
            void 0 !== this.param.bind && (this.canvas.bind = this.param.bind)
        },
        setBindData: function (a) {
            this.canvas.bind = a
        },
        getBindData: function () {
            return this.canvas.bind
        },
        getPaper: function () {
            for (var a = this.canvas; a && a.container && (a = a.container, !(a instanceof kity.Paper)););
            return a
        }
    }); !
    function (a, b) {
        a.AnimatedChartElement = b.createClass("AnimatedChartElement", {
            base: a.ChartElement,
            getAnimatedParam: function () {
                throw new Error("请实现接口: getAnimatedParam()")
            },
            fxEnabled: function () {
                return a.fx && "off" != this.param.fx
            },
            stop: function () {
                return this.timeline && this.timeline.stop(),
                this
            },
            animate: function (a, c, d, e) {
                if (!this.fxEnabled()) return this.update(a);
                var f, g = this.getAnimatedParam(),
                    h = this.param,
                    i = b.Utils.copy(h),
                    j = {},
                    k = {},
                    l = {};
                g.push("x"),
                g.push("y");
                for (var m in a) m in h && ~g.indexOf(m) ? (j[m] = h[m], k[m] = a[m]) : l[m] = a[m];
                return this.update(l),
                f = new b.Animator({
                    beginValue: j,
                    finishValue: k,
                    setter: function (a, b, c) {
                        var d = c.getValueProportion();
                        d > 1 && (d = 1),
                        a.update(b, i, d)
                    }
                }),
                this.timeline && this.timeline.stop(),
                this.timeline = f.start(this, c || this.param.fxTiming || this.fxTiming || 500, d || this.param.fxEasing || this.fxEasing || "ease", e),
                this
            }
        })
    }(kc, kity);
    var Chart = kc.Chart = kity.createClass("Chart", {
        base: kc.AnimatedChartElement,
        constructor: function (a, b) {
            this.callBase(b),
            this.setData({}),
            "string" == typeof a && (a = document.getElementById(a)),
            a.setAttribute("onselectstart", "return false"),
            this.paper = new kity.Paper(a),
            this.paper.addShape(this.canvas),
            this.container = a,
            a.paper = this.paper
        },
        getWidth: function () {
            return this.paper.getContainer().clientWidth
        },
        getHeight: function () {
            return this.paper.getContainer().clientHeight
        },
        setData: function (a) {
            this._dataBind && this.data.off("update", this._dataBind),
            this.data = a instanceof kc.Data ? a : new kc.Data(a),
            this.data.on("update", this._dataBind = function () {
                this.update()
            }.bind(this))
        },
        getData: function () {
            return this.data
        },
        update: function (a) {
            var b = this.data.format();
            this.callBase(a, b),
            this.updateChart && this.updateChart(this.param, b)
        }
    }),
        ConfigHandler = kc.ConfigHandler = kity.createClass("ConfigHandler", {
        constructor: function () {},
        getConfig: function () {
            return this.config
        },
        getOption: function (a) {
            return kity.Utils.queryPath(a, this.config)
        },
        setConfig: function (a) {
            this.config = a
        },
        setOption: function (path, value) {
            function getPath(a, b) {
                for (var c = [], d = 0; a >= d; d++) c.push(b[d]);
                return c.join(".")
            }
            if (path.indexOf("series") >= 0) return void console.log("该接口不支持设置series");
            var arr = path.split(".");
            arr.unshift("config");
            for (var i = 1, p, cur, exp; i < arr.length;) cur = arr[i],
            p = getPath(i - 1, arr),
            eval('"' + cur + '" in this.' + p) ? i == arr.length - 1 && (exp = "this." + p + "." + cur + " = value", eval(exp)) : (exp = "this." + p + "." + cur + " = " + (i == arr.length - 1 ? "value" : "{}"), eval(exp)),
            i++
        }
    }),
        Pie = kity.Pie = kity.createClass("Pie", {
        base: kity.Path,
        constructor: function (a, b, c, d) {
            this.callBase(),
            this.outerRadius = a || 100,
            this.pieAngle = b || 90,
            this.startAngle = c || 0,
            this.innerRadius = d || 0,
            this.draw()
        },
        draw: function () {
            var a = this.getDrawer().clear(),
                b = this.innerRadius,
                c = this.outerRadius,
                d = this.startAngle,
                e = this.pieAngle;
            e > 0 && e % 360 === 0 && (e = 359.99),
            0 > e && e % 360 === 0 && (e = -359.99);
            var f = kity.Point.fromPolar(b, d),
                g = kity.Point.fromPolar(c, d),
                h = kity.Point.fromPolar(c, d + e % 360),
                i = kity.Point.fromPolar(b, d + e % 360),
                j = Math.abs(e) > 180 ? 1 : 0,
            k = e > 0 ? 1 : 0;
            a.moveTo(f.x, f.y),
            a.lineTo(g.x, g.y),
            a.carcTo(c, j, k, h.x, h.y),
            a.lineTo(i.x, i.y),
            a.carcTo(b, j, k ? 0 : 1, f.x, f.y),
            a.close()
        }
    }),
        Line = kc.Line = kity.createClass("Line", {
        base: kc.AnimatedChartElement,
        constructor: function (a) {
            this.callBase(kity.Utils.extend({
                x1: 0,
                y1: 0,
                x2: 100,
                y2: 0,
                bound: null,
                width: 1,
                color: "black",
                dash: null
            },
            a)),
            this.line = new kity.Path,
            this.canvas.addShape(this.line)
        },
        getAnimatedParam: function () {
            return ["x1", "y1", "x2", "y2", "width"]
        },
        registerUpdateRules: function () {
            return kity.Utils.extend(this.callBase(), {
                draw: ["x1", "y1", "x2", "y2", "bound"],
                stroke: ["color", "width", "dash"]
            })
        },
        draw: function (a, b, c, d, e) {
            var f = this.line.getDrawer(),
                g = kc.sharpen;
            e && (e = this.boundTo(a, b, c, d, e)),
            e = e || [
                [a, b],
                [c, d]
            ],
            f.clear(),
            f.moveTo(g(e[0][0]), g(e[0][1])),
            f.lineTo(g(e[1][0]), g(e[1][1]))
        },
        stroke: function (a, b, c) {
            var d = new kity.Pen;
            d.setWidth(b),
            d.setColor(a),
            c && d.setDashArray(c),
            this.line.stroke(d)
        },
        boundTo: function (a, b, c, d, e) {
            function f(a, b, c) {
                return a >= b && c >= a || b >= a && a >= c
            }
            var g, h, i, j, k, l, m = e,
                n = m.x1,
                o = m.y1,
                p = m.x2,
                q = m.y2;
            if (a == c) return [[a, m.y1], [c, m.y2]];
            if (b == d) return [[m.x1, b], [m.x2, d]];
            g = (a - c) / (b - d),
            h = 1 / g,
            i = h * (n - a) + b,
            j = h * (p - a) + b,
            k = g * (o - b) + a,
            l = g * (q - b) + a;
            var r = [];
            return f(i, o, q) && r.push([n, i]),
            f(j, o, q) && r.push([p, j]),
            f(k, n, p) && r.push([k, o]),
            f(l, n, p) && r.push([l, q]),
            r.length > 1 ? r : void 0
        }
    }),
        Polyline = kc.Polyline = kity.createClass("Polyline", {
        base: kc.AnimatedChartElement,
        constructor: function (a) {
            this.callBase(kity.Utils.extend({
                points: [
                    [0, 0],
                    [0, 0]
                ],
                width: 3,
                color: "black",
                dash: null,
                animatedDir: "y",
                fxEasing: "ease",
                factor: 0,
                close: !1,
                fill: null
            },
            a)),
            this.polyline = new kity.Path,
            this.canvas.addShape(this.polyline)
        },
        getAnimatedParam: function () {
            return ["factor"]
        },
        registerUpdateRules: function () {
            return kity.Utils.extend(this.callBase(), {
                draw: ["points", "factor", "close", "fill"],
                stroke: ["color", "width", "dash"]
            })
        },
        parsePoint: function (a, b, c) {
            return c && c[a] ? c[a][b] : 0
        },
        draw: function (a, b, c, d, e, f) {
            var g = this.polyline.getDrawer(),
                h = kc.sharpen;
            if (a.length > 0) {
                g.clear();
                var i, j, k = this.param.animatedDir;
                if (("x" == k || "both" == k) && (i = !0), ("y" == k || "both" == k) && (j = !0), e) {
                    var l, m, n = e.points,
                        o = this.parsePoint(0, 0, n),
                        p = this.parsePoint(0, 1, n);
                    g.moveTo(h(i ? (a[0][0] - o) * f + o : a[0][0]), h(j ? (a[0][1] - p) * f + p : a[0][1]));
                    for (var q = 1; q < a.length; q++) i && (l = this.parsePoint(q, 0, n)),
                    j && (m = this.parsePoint(q, 1, n)),
                    g.lineTo(h(i ? (a[q][0] - l) * f + l : a[q][0]), h(j ? (a[q][1] - m) * f + m : a[q][1]))
                } else {
                    g.moveTo(h(a[0][0]), h(a[0][1]));
                    for (var q = 1; q < a.length; q++) g.lineTo(h(a[q][0]), h(a[q][1]))
                }
                if (c) {
                    g.close(); {
                        var r = d;
                        this.polyline
                    }
                    kity.Utils.isArray(d) && this.polyline.whenPaperReady(function (a) {
                        r = (new kity.LinearGradientBrush).pipe(function () {
                            for (var b, c = 0; c < d.length; c++) b = d[c],
                            this.addStop(b.pos, b.color || "#000", d[c].opacity);
                            this.setStartPosition(0, 0),
                            this.setEndPosition(0, 1),
                            a.addResource(this)
                        })
                    }),
                    this.polyline.fill(r)
                }
            }
        },
        stroke: function (a, b, c) {
            0 === b && (b = .001);
            var d = new kity.Pen;
            d.setWidth(b),
            d.setColor(a),
            c && d.setDashArray(c),
            this.polyline.stroke(d)
        }
    }),
        Label = kc.Label = kity.createClass("Label", {
        base: kc.AnimatedChartElement,
        constructor: function (a) {
            this.callBase(kity.Utils.extend({
                text: "",
                at: "center",
                margin: 0,
                style: {
                    fontFamily: "Arial",
                    fontSize: "auto"
                },
                color: "black",
                rotate: 0
            },
            a)),
            this.text = (new kity.Text).setFont({
                fontSize: "auto",
                fontFamily: "Arial"
            }),
            this.canvas.addShape(this.text)
        },
        registerUpdateRules: function () {
            return kity.Utils.extend(this.callBase(), {
                updateText: ["text"],
                updateAnchor: ["at", "margin", "rotate"],
                updateColor: ["color"],
                updateStyle: ["style"]
            })
        },
        getAnimatedParam: function () {
            return []
        },
        updateText: function (a) {
            this.text.setContent(a),
            this.updateSize(),
            this.updateAnchor(this.param.at, this.param.margin, this.param.rotate)
        },
        updateSize: function () {
            this.size = 0,
            this.size = this.getSize(),
            this.trigger("sizechanged")
        },
        getSize: function () {
            return this.size || this.callBase()
        },
        updateStyle: function (a) {
            this.text.setStyle(a),
            this.updateSize()
        },
        updateAnchor: function (a, b, c) {
            var d = this.size.height / 2;
            switch (a) {
            case "left":
                this.text.setTextAnchor("end").setPosition(b, d / 1.5);
                break;
            case "right":
                this.text.setTextAnchor("start").setPosition(b, d / 1.5);
                break;
            case "up":
            case "top":
                this.text.setTextAnchor("middle").setPosition(0, d - b);
                break;
            case "down":
            case "bottom":
                var e = "middle";
                0 !== c && (e = "end"),
                this.text.setTextAnchor(e).setPosition(0, d + b);
                break;
            default:
                this.text.setTextAnchor("middle").setPosition(0, .75 * d)
            }
            0 !== c && this.text.setRotate(c)
        },
        updateColor: function (a) {
            this.text.fill(a)
        }
    }); !
    function (a, b) {
        b.Bar = a.createClass("Bar", {
            base: b.AnimatedChartElement,
            constructor: function (c) {
                this.callBase(a.Utils.extend({
                    dir: -1,
                    offset: 0,
                    color: "#000",
                    width: 10,
                    height: 0,
                    rotate: 0,
                    label: {
                        at: "bottom",
                        color: "black",
                        text: null
                    }
                },
                c)),
                this.rect = new a.Path,
                this.canvas.addShape(this.rect),
                this.addElement("label", new b.Label)
            },
            registerUpdateRules: function () {
                return a.Utils.extend(this.callBase(), {
                    draw: ["width", "height", "dir", "offset", "rotate"],
                    fill: ["color"]
                })
            },
            getAnimatedParam: function () {
                return ["width", "height", "offset"]
            },
            fill: function (a) {
                this.rect.fill(a)
            },
            draw: function (a, b, c, d, e) {
                var f = a / 2,
                    g = [];
                g.push("M", -f, -d),
                g.push("L", -f, -d + c * b),
                g.push("L", f, -d + c * b),
                g.push("L", f, -d),
                g.push("L", f, -d),
                g.push("Z"),
                this.rect.setPathData(g).setRotate(e),
                this.interestPoint = {
                    x: 0,
                    y: c * b
                }
            },
            getInterestPoint: function () {
                return this.canvas.getTransform().transformPoint(this.interestPoint)
            }
        })
    }(kity, kc);
    var Coordinate = kc.Coordinate = kity.createClass("Coordinate", function () {
        return {
            base: kc.ChartElement
        }
    }()),
        CategoryCoordinate = kc.CategoryCoordinate = kity.createClass("CategoryCoordinate", function () {
        function a(a) {
            return a > 1e3 ? a / 1e3 + "K" : a = (10 * a | 0) / 10
        }
        var b = {
            w: 0,
            h: 1,
            a: 7,
            b: 2,
            c: 3,
            d: 0,
            t: 0
        },
            c = ["xMesh", "yMesh", "xCat", "yCat", "xAxis", "yAxis"],
            d = {
            xMesh: function () { ! this.getElement("xMesh") && this.addElement("xMesh", new kc.Mesh({
                    type: "vertical"
                }))
            },
            yMesh: function () { ! this.getElement("yMesh") && this.addElement("yMesh", new kc.Mesh({
                    type: "horizon",
                    dir: 1
                }))
            },
            xCat: function () { ! this.getElement("xCat") && this.addElement("xCat", new kc.Categories({
                    at: "bottom",
                    rotate: this.param.xLabelRotate
                }))
            },
            yCat: function () { ! this.getElement("yCat") && this.addElement("yCat", new kc.Categories({
                    at: "left",
                    rotate: this.param.yLabelRotate
                }))
            },
            xAxis: function () { ! this.getElement("xAxis") && this.addElement("xAxis", new kc.Line({
                    color: "#999"
                })),
                this.param.xAxisArrow && !this.xArrow && this.canvas.addShape(this.xArrow = new kity.Arrow(b).fill("#999"))
            },
            yAxis: function () { ! this.getElement("yAxis") && this.addElement("yAxis", new kc.Line({
                    color: "#999"
                })),
                this.param.yAxisArrow && !this.yArrow && this.canvas.addShape(this.yArrow = new kity.Arrow(b).fill("#999"))
            }
        };
        return {
            base: kc.Coordinate,
            constructor: function (a) {
                var b = kity.Utils.extend({
                    components: null,
                    dataSet: [],
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 90,
                        left: 100
                    },
                    padding: {
                        top: 20,
                        right: 20,
                        bottom: 0,
                        left: 0
                    },
                    unitX: null,
                    unitY: null,
                    meshX: !0,
                    meshY: !0,
                    formatX: null,
                    formatY: null,
                    rangeX: [0, 100],
                    rangeY: [0, 100],
                    minX: null,
                    minY: null,
                    xLabelsAt: null,
                    yLabelsAt: null,
                    labelMargin: 10,
                    xAxisArrow: null,
                    yAxisArrow: null,
                    xLabelRotate: 0,
                    yLabelRotate: 0,
                    xLabelFont: null,
                    yLabelFont: null,
                    xAxisStyle: null,
                    yAxisStyle: null
                },
                a);
                this.callBase(b),
                this._initRulers()
            },
            _initRulers: function () {
                this.xRuler = new kc.Ruler,
                this.yRuler = new kc.Ruler
            },
            _initElements: function (a) {
                a = a ? a : c,
                this._processComponents(a)
            },
            registerUpdateRules: function () {
                return kity.Utils.extend(this.callBase(), {
                    updateAll: ["components", "dataSet", "margin", "padding", "unitX", "unitY", "meshX", "meshY", "formatX", "formatY", "rangeX", "rangeY", "minX", "minY", "xLabelsAt", "yLabelsAt", "labelMargin", "xAxisArrow", "yAxisArrow", "xLabelRotate", "yLabelRotate", "xLabelFont", "yLabelFont", "xAxisStyle", "yAxisStyle"]
                })
            },
            getXRuler: function () {
                return this.xRuler
            },
            getYRuler: function () {
                return this.yRuler
            },
            _processComponents: function (a) {
                var b, e;
                for (b in c) e = c[b],
                ~a.indexOf(e) ? (func = d[e], func && func.bind(this)()) : this.removeElement(e)
            },
            getXLabels: function () {
                return this.xLabels
            },
            getYLabels: function () {
                return this.yLabels
            },
            measurePoint: function (a) {
                var b = this.param,
                    c = this.xRuler.measure(a[0]) + b.margin.left,
                    d = this.yRuler.measure(a[1]) + b.margin.top + b.padding.top;
                return [c, d]
            },
            measurePointX: function (a) {
                return this.xRuler.measure(a) + this.param.margin.left
            },
            measurePointY: function (a) {
                return this.yRuler.measure(a) + this.param.margin.top + this.param.padding.top
            },
            measureValueRange: function (a, b) {
                var c = "x" == b ? "measurePointX" : "measurePointY";
                return this[c](a) - this[c](0)
            },
            updateAll: function (b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
                this._initElements(b);
                var A, B, C, D, E, F, G = this.container.getWidth() - d.left - d.right,
                    H = this.container.getHeight() - d.top - d.bottom,
                    I = c.xAxis && c.xAxis.categories,
                    J = c.yAxis && c.yAxis.categories,
                    K = c.xAxis && c.xAxis.grid,
                    L = c.yAxis && c.yAxis.grid,
                    M = j || a,
                    N = k || a,
                    O = this.xRuler,
                    P = this.yRuler;
                I && (l = [0, I.length - 1]),
                A = kity.Utils.isNumber(n) ? n : l[0],
                B = l[1],
                J && (m = [0, J.length - 1]),
                D = kity.Utils.isNumber(o) ? o : m[0],
                E = m[1],
                O.ref(A, B).map(e.left, G - e.right),
                I ? xGrid = O.gridByCategories(I.length) : kity.Utils.isArray(K) ? xGrid = O.gridByArray(K) : (C = G / 60 | 0, xGrid = O.gridByCount(C, null, !0, n)),
                P.ref(D, E).map(H - e.top - e.bottom, 0),
                J ? yGrid = P.gridByCategories(J.length) : kity.Utils.isArray(L) ? yGrid = P.gridByArray(L) : (F = H / 40 | 0, yGrid = P.gridByCount(F, null, !0, o));
                for (var Q = 0; Q < yGrid.map.length; Q++) yGrid.map[Q] = yGrid.map[Q] + e.top;
                var R = this.getElement("xAxis"),
                    S = this.getElement("yAxis"),
                    T = this.getElement("xCat"),
                    U = this.getElement("yCat"),
                    V = this.getElement("xMesh"),
                    W = this.getElement("yMesh");
                R && R.update({
                    x1: 0,
                    y1: H,
                    x2: G,
                    y2: H,
                    width: y.width,
                    color: y.color
                }),
                S && S.update({
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: H,
                    width: z.width,
                    color: z.color
                }),
                f && (this.unitXLabel = this.unitXLabel || this.addElement("unitXLabel", new kc.Label), this.unitXLabel.update({
                    text: "(" + f + ")",
                    at: "right",
                    margin: 0,
                    style: w,
                    color: w.color || "#000",
                    x: G + 10,
                    y: H + 16
                })),
                g && (this.unitYLabel = this.unitYLabel || this.addElement("unitYLabel", new kc.Label), this.unitYLabel.update({
                    text: "(" + g + ")",
                    at: q,
                    margin: 0,
                    style: x,
                    color: x.color || "#000",
                    x: -8,
                    y: -14
                }));
                var X = I ? I : xGrid.ref.map(M);
                T && T.update({
                    rules: xGrid.map,
                    labels: X,
                    y: H,
                    step: c.xAxis && c.xAxis.step || 1,
                    at: p || "bottom",
                    font: w
                }),
                I && (this.xLabels = X);
                var Y = J ? J : yGrid.ref.map(N);
                U && (d = "right" == q ? O._map.to + r : r, U.update({
                    rules: yGrid.map,
                    labels: Y,
                    x: 0,
                    step: c.yAxis && c.yAxis.step || 1,
                    at: q || "left",
                    margin: d,
                    font: x
                })),
                J && (this.yLabels = Y),
                V && V.update({
                    rules: xGrid.map,
                    length: H,
                    y: H,
                    step: c.xAxis && c.xAxis.step || 1
                }),
                W && W.update({
                    rules: yGrid.map,
                    length: G,
                    x: 0,
                    y: 0,
                    step: c.yAxis && c.yAxis.step || 1
                }),
                this.xArrow && this.xArrow.setTranslate(G, H + .5),
                this.yArrow && this.yArrow.setRotate(-90).setTranslate(.5, 0)
            },
            setCoordinateConf: function (a) {
                var b = {},
                    c = [],
                    d = a.xAxis,
                    e = a.yAxis;
                d.axis.enabled && c.push("xAxis"),
                d.ticks.enabled && c.push("xMesh"),
                d.label.enabled && c.push("xCat"),
                e.axis.enabled && c.push("yAxis"),
                e.ticks.enabled && c.push("yMesh"),
                e.label.enabled && c.push("yCat"),
                b.components = c,
                b.xAxisArrow = d.axis.arrow,
                b.xAxisStyle = {
                    width: d.axis.width,
                    color: d.axis.color
                },
                b.yAxisArrow = e.axis.arrow,
                b.yAxisStyle = {
                    width: e.axis.width,
                    color: e.axis.color
                };
                var f = d.margin,
                    g = e.margin;
                b.margin = {
                    left: f.left || 0,
                    right: f.right || 0,
                    top: g.top || 0,
                    bottom: g.bottom || 0
                };
                var h = d.padding,
                    i = e.padding;
                b.padding = {
                    left: h.left || 0,
                    right: h.right || 0,
                    top: i.top || 0,
                    bottom: i.bottom || 0
                };
                var j = kity.Utils.queryPath("xAxis.min", a);
                kity.Utils.isNumber(j) && (b.minX = j);
                var k = kity.Utils.queryPath("yAxis.min", a);
                kity.Utils.isNumber(k) && (b.minY = k),
                a.rangeX && (b.rangeX = a.rangeX),
                a.rangeY && (b.rangeY = a.rangeY),
                b.xLabelRotate = d.label.rotate,
                b.xLabelFont = d.label.font,
                b.yLabelsAt = e.label.at || "left",
                b.yLabelRotate = e.label.rotate,
                b.yLabelFont = e.label.font,
                b.labelMargin = e.label.margin || 10,
                b.formatX = kity.Utils.queryPath("xAxis.label.format", a),
                b.formatY = kity.Utils.queryPath("yAxis.label.format", a),
                b.unitX = kity.Utils.queryPath("xAxis.unit.text", a) || "",
                b.unitY = kity.Utils.queryPath("yAxis.unit.text", a) || "",
                b.x = kity.Utils.queryPath("xAxis.margin.left", a) || 0,
                b.y = kity.Utils.queryPath("yAxis.margin.top", a) || 0;
                var l = kity.Utils.copy(a);
                return l.yAxis.inverted ? (l.yAxis.categories = l.xAxis.categories, delete l.xAxis.categories, b.minX = k, delete b.minY) : delete l.yAxis.categories,
                b.dataSet = l,
                b
            }
        }
    }()),
        ElementList = kc.ElementList = kity.createClass("ElementList", {
        base: kc.ChartElement,
        constructor: function (a) {
            this.callBase(kity.Utils.extend({
                list: [],
                fx: !0,
                common: {}
            },
            a)),
            this.elementList = [],
            this.updateClass(this.param.elementClass),
            this.fxTimers = []
        },
        getElementList: function () {
            return this.elementList
        },
        registerUpdateRules: function () {
            return kity.Utils.extend(this.callBase(), {
                updateClass: ["elementClass"],
                updateCommon: ["common"],
                updateList: ["list"]
            })
        },
        updateCommon: function (a) {
            this.elementList.forEach(function (b) {
                b.update(a)
            })
        },
        updateList: function (a) {
            function b() {
                k == j && c.trigger("listupdatefinish")
            }
            var c = this,
                d = this.elementList,
                e = a.length - d.length,
                f = kc.fx && this.param.fx,
                g = 0,
                h = 500 / a.length,
                i = this.fxTimers;
            for (this.adjust(e); i.length;) clearTimeout(this.fxTimers.pop());
            var j = d.length,
                k = 0,
                c = this;
            d.forEach(function (d, e) {
                f && "animate" in d ? (i.push(setTimeout(function () {
                    d.animate(a[e], c.param.animateDuration || 600, c.param.fxEasing || "ease").timeline.on("finish", function () {
                        k++,
                        b()
                    })
                },
                a[e].delay || g)), g += Math.random() * h) : (k++, b(), d.update(a[e]))
            })
        },
        updateClass: function (a) {
            a && this.elementClass != a && (this.elementClass = a, this.shrink(this.elementList.lenght))
        },
        adjust: function (a) {
            a > 0 ? this.grow(a) : 0 > a && this.shrink(-a)
        },
        grow: function (a) {
            for (var b; a--;) b = new this.elementClass,
            b.container = this,
            this.canvas.addShape(b.canvas),
            this.elementList.push(b),
            b.update(this.param.common),
            this.param.fx ? b.canvas.setOpacity(0).fadeIn(200, "ease") : b.canvas.setOpacity(1)
        },
        shrink: function (a) {
            for (var b = this.elementList.splice(-a); b.length;) this.canvas.removeShape(b.pop().canvas)
        },
        find: function (a) {
            for (var b = 0, c = this.elementList.length; c > b; b++) if (this.elementList[b].param.id == a) return this.elementList[b]
        }
    }),
        Pie = kc.Pie = kity.createClass("Pie", {
        base: kc.AnimatedChartElement,
        constructor: function (a) {
            this.callBase(kity.Utils.extend({
                labelText: null,
                labelColor: "#62a9dd",
                labelPosition: "inside",
                connectLineWidth: 1,
                connectLineColor: "#62a9dd",
                innerRadius: 0,
                outerRadius: 0,
                startAngle: 0,
                pieAngle: 0,
                strokeWidth: 1,
                strokeColor: "#FFF",
                color: "#62a9dd"
            },
            a)),
            this.pie = new kity.Pie,
            this.canvas.addShape(this.pie),
            this.label = this.addElement("label", new kc.Label),
            this.connectLine = this.addElement("connectLine", new kc.Line)
        },
        registerUpdateRules: function () {
            return kity.Utils.extend(this.callBase(), {
                updatePies: ["innerRadius", "outerRadius", "startAngle", "pieAngle", "strokeWidth", "strokeColor"],
                updatePiesColor: ["color"],
                updateLabel: ["labelText", "labelColor", "labelPosition", "outerRadius", "startAngle", "pieAngle"],
                updateConnectLine: ["labelText", "connectLineWidth", "connectLineColor", "labelPosition", "innerRadius", "outerRadius", "startAngle", "pieAngle"]
            })
        },
        getAnimatedParam: function () {
            return ["startAngle", "pieAngle"]
        },
        updatePiesColor: function (a) {
            this.pie.fill(a)
        },
        updatePies: function (a, b, c, d, e, f) {
            this.pie.innerRadius = a,
            this.pie.outerRadius = b,
            this.pie.startAngle = c - 90,
            this.pie.pieAngle = d,
            this.pie.draw(),
            0 === e && (e = .001);
            var g = new kity.Pen;
            g.setWidth(e),
            g.setColor(f),
            this.pie.stroke(g)
        },
        updateLabel: function (a, b, c, d, e, f) {
            if ("none" != c) {
                var g = "inside" == c ? d - 30 : d + 50,
                h = (e + f / 2) / 180 * Math.PI;
                this.label.setVisible(!0),
                this.label.update({
                    text: a,
                    color: b,
                    at: "bottom",
                    margin: 0,
                    x: g * Math.cos(h),
                    y: g * Math.sin(h)
                })
            }
        },
        updateConnectLine: function (a, b, c, d, e, f, g, h) {
            if ("outside" == d && a) {
                var i = f + 30,
                    j = (g + h / 2) / 180 * Math.PI;
                this.connectLine.update({
                    x1: (e + 2) * Math.cos(j),
                    y1: (e + 2) * Math.sin(j),
                    x2: i * Math.cos(j),
                    y2: i * Math.sin(j),
                    width: b,
                    color: c
                })
            }
        }
    }),
        Categories = kc.Categories = kity.createClass("Categories", {
        base: kc.ChartElement,
        constructor: function (a) {
            this.callBase(kity.Utils.extend({
                at: "bottom",
                rules: [],
                labels: [],
                color: "black",
                margin: 10,
                step: 1,
                rotate: 0,
                font: {}
            },
            a)),
            this.addElement("labels", new kc.ElementList({
                elementClass: kc.Label
            }))
        },
        registerUpdateRules: function () {
            return kity.Utils.extend(this.callBase(), {
                updateCategories: ["rules", "labels", "at", "margin", "rotate", "font", "step"],
                updateCommon: "common"
            })
        },
        updateCategories: function (a, b, c, d, e, f, g) {
            var h, i, j, k, l = [];
            for (h = 0; h < a.length; h += g) i = a[h],
            "left" == c ? (j = -d, k = i) : "bottom" == c ? (j = i, k = d) : "right" == c && (j = d, k = i),
            l.push({
                x: j,
                y: k,
                at: c,
                rotate: e,
                text: b[h],
                style: f,
                color: f && f.color || "black"
            });
            this.getElement("labels").update({
                list: l,
                fx: !0
            })
        }
    });
    kc.ChartsConfig = function () {
        function a(a, b) {
            c[a] = b
        }
        function b(a) {
            var b = kity.Utils.copy(c.base);
            return a in c ? kity.Utils.deepExtend(b, c[a]) : b
        }
        var c = {};
        return {
            add: a,
            init: b
        }
    }(),
    kc.ChartsConfig.add("base", {
        color: ["rgb(31, 119, 180)", "rgb(174, 199, 232)", "rgb(255, 127, 14)", "rgb(255, 187, 120)", "green"],
        finalColor: "rgb(255, 187, 120)",
        xAxis: {
            ticks: {
                enabled: !0,
                dash: null,
                width: 1,
                color: "#808080"
            },
            axis: {
                enabled: !0,
                arrow: !0,
                width: 1,
                color: "#000"
            },
            label: {
                enabled: !0,
                rotate: 0,
                font: {
                    color: "#000",
                    fontSize: 12,
                    family: "Arial"
                }
            },
            padding: {
                left: 0,
                right: 20
            },
            margin: {
                left: 80,
                right: 50
            }
        },
        yAxis: {
            categories: [],
            ticks: {
                enabled: !0,
                dash: null,
                value: 0,
                width: 1,
                color: "#808080"
            },
            axis: {
                enabled: !0,
                arrow: !0,
                width: 1,
                color: "#000"
            },
            label: {
                enabled: !0,
                rotate: 0,
                font: {
                    color: "#000",
                    fontSize: 12,
                    family: "Arial"
                }
            },
            padding: {
                top: 20,
                bottom: 0
            },
            margin: {
                top: 20,
                bottom: 60
            }
        },
        plotOptions: {
            label: {
                enabled: !1,
                text: {
                    color: "#333",
                    margin: -15
                }
            }
        },
        interaction: {
            indicatrix: {
                enabled: !1,
                color: "#BBB",
                width: 1,
                dash: [4, 2]
            },
            hover: {
                enabled: !1,
                circle: {
                    radius: 4,
                    stroke: {
                        width: 2,
                        color: "#FFF"
                    }
                }
            }
        },
        legend: {
            enabled: !0,
            level: "entry"
        },
        animation: {
            enabled: !0,
            duration: 600,
            mode: "ease"
        }
    }),
    kc.ChartsConfig.add("bar", {
        yAxis: {
            padding: {
                bottom: 30,
                top: 30
            },
            inverted: !0,
            min: 0
        },
        plotOptions: {
            bar: {
                width: 25,
                margin: 0
            }
        }
    }),
    kc.ChartsConfig.add("column", {
        xAxis: {
            margin: {
                right: 60,
                left: 60
            },
            padding: {
                left: 40,
                right: 40
            }
        },
        yAxis: {
            min: 0,
            padding: {
                top: 0,
                bottom: 0
            }
        },
        plotOptions: {
            column: {
                width: 8,
                margin: 1
            }
        }
    }),
    kc.ChartsConfig.add("area", {
        plotOptions: {
            area: {
                stroke: {
                    width: 1,
                    color: "#FFF"
                },
                label: {
                    enabled: !0,
                    radius: 3
                },
                fill: {
                    grandientStopOpacity: .5
                },
                dot: {
                    enabled: !0,
                    radius: 3
                }
            }
        }
    }),
    kc.ChartsConfig.add("pie", {
        plotOptions: {
            pie: {
                center: {
                    x: 200,
                    y: 200
                },
                stroke: {
                    width: 1,
                    color: "#FFF"
                },
                shadow: {
                    enabled: !1,
                    size: 2,
                    x: 1,
                    y: 1,
                    color: "rgba( 0, 0, 0, 0.3 )"
                },
                innerRadius: 40,
                outerRadius: 80,
                incrementRadius: 30
            }
        }
    }),
    kc.ChartData = kity.createClass("ChartData", {
        base: kc.Data,
        format: function () {
            function a(a, b) {
                var c, d, e, f = 0,
                    g = [],
                    h = {},
                    i = [],
                    j = {},
                    k = [],
                    l = [];
                for (c = 0; b > c; c++) {
                    for (l.push(0), f = 0, d = 0; d < a.length; d++) f += Number(a[d][c] || 0),
                    h[d + 1] = h[d + 1] || [],
                    h[d + 1][c] = f;
                    for (g.push(f), k = [], e = 0; e < a.length; e++) i[e] = i[e] || [],
                    i[e][c] = a[e][c] / f * 100,
                    j[e + 1] = j[e + 1] || [],
                    j[e + 1][c] = h[e + 1][c] / f * 100
                }
                return h[0] = j[0] = l,
                {
                    offset: h,
                    percentageOffsetLevel: j,
                    percentage: i
                }
            }
            var b, c, d, e, f, g, h, i, j, k, l = this.origin,
                m = kity.Utils.queryPath,
                n = [],
                o = 0,
                p = 100,
                q = l.series,
                r = "_" + +new Date,
                s = m("xAxis.categories.length", l) || m("yAxis.categories.length", l),
                t = m("yAxis.percentage", l),
                u = m("yAxis.stacked", l),
                v = {},
                w = {},
                x = 0;
            if (q) {
                for (e = q, v = {},
                w = {},
                b = 0; b < e.length; b++) e[b].index = b,
                e[b].group = u ? e[b].group || r : b,
                f = e[b].group,
                v[f] = v[f] || [],
                v[f].push(e[b].data),
                w[f] = w[f] || [],
                w[f].push(e[b]);
                x = 0;
                for (g in v) {
                    for (j = a(v[g], s), h = j.offset, i = w[g], c = 0; c < i.length; c++) k = i[c],
                    k.indexInGroup = c,
                    k.groupIndex = x,
                    k.offset = h[c],
                    k.allOffset = h,
                    k.sum = h[v[g].length],
                    k.percentage = j.percentage[c],
                    k.percentageOffset = j.percentageOffsetLevel[c],
                    k.allPercentageOffset = j.percentageOffsetLevel;
                    x++
                }
                for (l.yAxis = l.yAxis || {},
                l.yAxis.groupCount = x, b = 0; b < e.length; b++) d = u || t ? e[b].sum : e[b].data,
                n = n.concat(d);
                t || (o = n.length > 0 ? Math.min.apply([], n) : 0, p = n.length > 0 ? Math.max.apply([], n) : 100),
                (u || t) && (o = 0)
            }
            var y = {
                chart: l.chart || "line",
                xAxis: {
                    categories: m("xAxis.categories", l) || [],
                    step: m("xAxis.step", l) || 1
                },
                yAxis: m("yAxis", l) || {},
                plotOptions: l.plotOptions || {},
                series: l.series || [],
                rangeY: [o, p],
                rangeX: [o, p]
            };
            return y
        }
    }),
    kc.PieData = kity.createClass("PieData", {
        base: kc.Data,
        format: function () {
            function a(a) {
                var b, a, c = 0,
                    d = [];
                for (b = 0; b < a.length; b++) d.push(c),
                c += kity.Utils.isNumber(a[b].value) ? a[b].value : a[b];
                var e, f, g, h = 0;
                for (b = 0; b < a.length; b++) e = kity.Utils.isNumber(a[b].value) ? a[b].value : a[b],
                g = a[b] = kity.Utils.isObject(a[b]) ? a[b] : {},
                g.percent = f = e / c,
                g.angle = 360 * f,
                g.offsetAngle = h,
                g.index = b,
                h += g.angle;
                return a
            }
            var b, c = this.origin,
                d = kity.Utils.queryPath,
                e = c.series;
            if (e) for (b = 0; b < e.length; b++) e[b].index = b,
            a(e[b].data);
            var f = {
                chart: c.chart,
                xAxis: {
                    categories: d("xAxis.categories", c) || [],
                    step: d("xAxis.step", c) || 1
                },
                yAxis: d("yAxis", c) || {},
                plotOptions: c.plotOptions || {},
                series: c.series || []
            };
            return f
        }
    }),


    function () {
        kc.PiePlots = kity.createClass("PiePlots", {
            base: kc.ChartElement,
            constructor: function (a) {
                this.callBase(a),
                this.chartType = "pie",
                this.config = a || {},
                this.pies = this.addElement("pies", new kc.ElementList)
            },
            update: function (a) {
                this.config = kity.Utils.extend(this.config, a),
                this.drawPlots(this.config)
            },
            getEntryColor: function (a) {
                return a.color || this.config.color[a.index] || this.config.finalColor
            },
            getLabelColor: function (a) {
                var b = this.config.plotOptions,
                    c = b.pie.labelPosition,
                    d = b.label.text;
                return "outside" == c ? d.color : a ? "#FFF" : d.color
            },
            drawPlots: function (a) {
                var b = this,
                    c = [],
                    d = a.series,
                    e = a.plotOptions,
                    f = e.pie.outerRadius,
                    g = e.pie.innerRadius,
                    h = e.pie.incrementRadius;
                lpos = e.pie.labelPosition;
                for (var i = 0; i < d.length; i++) d[i].data.map(function (a) {
                    c.push({
                        labelText: e.label.enabled && a.angle > 10 ? a.label ? a.label : a.value : null,
                        labelColor: b.getLabelColor(0 == i),
                        labelPosition: lpos ? lpos : 0 == i ? "inside" : "none",
                        connectLineWidth: 1,
                        connectLineColor: b.getEntryColor(a),
                        innerRadius: 0 == i ? g : f + (i - 1) * h,
                        outerRadius: f + h * i,
                        startAngle: a.offsetAngle,
                        pieAngle: a.angle,
                        strokeWidth: e.pie.stroke.width,
                        strokeColor: e.pie.stroke.color,
                        color: b.getEntryColor(a),
                        x: e.pie.center.x,
                        y: e.pie.center.y
                    })
                });
                this.pies.update({
                    elementClass: kc.Pie,
                    list: c,
                    fx: a.animation.enabled,
                    animateDuration: a.animation.duration,
                    fxEasing: a.animation.mode
                });
                var j = a.plotOptions.pie.shadow;
                if (j.enabled) {
                    var k = new kity.ProjectionFilter(j.size, j.x, j.y);
                    k.setColor(j.color),
                    this.getPaper().addResource(k),
                    this.pies.getElementList().forEach(function (a, b) {
                        var d = c[b].color;
                        (0 != d.indexOf("rgba(") || d.indexOf("0)") != d.length - 2) && a.canvas.applyFilter(k)
                    })
                }
            }
        })
    }(),


    function () {
        kc.BasePlots = kity.createClass("BasePlots", {
            base: kc.ChartElement,
            constructor: function (a, b) {
                this.callBase(a, b),
                this.coordinate = a,
                this.config = b || {},
                this.plotsElements = this.addElement("plotsElements", new kc.ElementList),
                this.plotsAttrsInit()
            },
            getPlotsElements: function () {
                return this.plotsElements
            },
            getEntryColor: function (a, b) {
                var c = a.style && a.style[b];
                return c && c.color ? c.color : a.color || this.config.color[a.index] || this.config.finalColor
            },
            update: function (a, b) {
                this.coordinate = a || this.coordinate,
                this.config = kity.Utils.extend(this.config, b),
                this.drawPlots(this.coordinate, this.config)
            }
        })
    }(),


    function () {
        kc.StickPlots = kity.createClass("StickPlots", {
            base: kc.BasePlots,
            constructor: function (a, b) {
                this.callBase(a, b)
            },
            drawPlots: function (a, b) {
                var c = a,
                    d = b.plotOptions;
                rotateAngle = this.rotateAngle,
                measureCategoryMethod = this.measureCategoryMethod,
                measureValueMethod = this.measureValueMethod,
                g = this.stickDir;
                var e, f, g, h, i, j, k, l, m, n, o = (c.xRuler, c.yRuler, b.series),
                    p = [],
                    q = d[this.chartType].width,
                    r = 0,
                    s = 0,
                    t = b.chart.mirror ? 0 : q + d[this.chartType].margin,
                u = b.yAxis.percentage;
                for (e = 0; e < o.length; e++) for (i = o[e], h = u ? o[e].percentage : o[e].data, f = 0; f < h.length; f++) j = h[f],
                k = c[measureCategoryMethod](f),
                r = (b.yAxis.groupCount - 1) * t / 2,
                l = c.measureValueRange(j, this.valueAxis),
                m = u ? i.percentageOffset : i.offset,
                s = m ? m[f] : 0,
                n = l * g,
                stickParam = {
                    offset: c.measureValueRange(s, this.valueAxis) * g,
                    color: this.getEntryColor(i, f),
                    width: q,
                    height: n,
                    rotate: rotateAngle,
                    delay: b.animation.delayInterval * f,
                    bind: {
                        data: j,
                        indexInSeries: e,
                        indexInCategories: f
                    }
                },
                d.label.enabled && (stickParam.label = this.getStickLabelParam(n, j, b)),
                stickParam[this.valueAxis] = c[measureValueMethod](0),
                stickParam[this.categoryAxis] = k - r + t * i.groupIndex,
                p.unshift(stickParam);
                var v = b.animation;
                return this.getPlotsElements().update({
                    elementClass: kc.Bar,
                    list: p,
                    fx: v.enabled,
                    animateDuration: v.duration,
                    fxEasing: v.mode
                }),
                b
            }
        })
    }(),


    function () {
        kc.ColumnPlots = kity.createClass("ColumnPlots", {
            base: kc.StickPlots,
            constructor: function (a, b) {
                this.callBase(a, b)
            },
            plotsAttrsInit: function () {
                this.chartType = "column",
                this.stickDir = -1,
                this.rotateAngle = 0,
                this.categoryAxis = "x",
                this.valueAxis = "y",
                this.measureCategoryMethod = "measurePointX",
                this.measureValueMethod = "measurePointY"
            },
            getStickLabelParam: function (a, b, c) {
                return {
                    at: "bottom",
                    color: c.plotOptions.label.text.color,
                    text: b,
                    x: 0,
                    y: -a - c.plotOptions.label.text.margin
                }
            }
        })
    }(),


    function () {
        kc.LinearPlots = kity.createClass("LinearPlots", {
            base: kc.BasePlots,
            constructor: function (a, b) {
                this.callBase(a, b),
                this.lineDots = this.addElement("lineDots", new kc.ElementList)
            },
            drawPlots: function (a, b) {
                var c, d, e, f = b.series,
                    g = (b.plotOptions, []),
                    h = [],
                    i = (kity.Utils.queryPath, 0);
                for (this.dotArr = [], c = 0; c < f.length; c++) d = f[c],
                d.positions = [],
                this.renderLineByData(d),
                g = this.array2points(d.data, i),
                e = {
                    line: d,
                    currentData: d.data[c],
                    currentLabel: b.xAxis.categories[c]
                },
                h.push({
                    points: g,
                    color: this.getEntryColor(d),
                    dash: d.dash || null,
                    width: this.getLineWidth(),
                    animatedDir: "y",
                    defaultPos: a.param.height,
                    factor: +new Date,
                    bind: e
                }),
                d.positions = g,
                this.addLabels(d);
                this.getPlotsElements().update({
                    elementClass: kc.Polyline,
                    list: h,
                    fx: b.animation.enabled
                }),
                this.addDots()
            },
            renderLineByData: function () {},
            array2points: function (a, b) {
                for (var c, b = b || 0, d = [], e = 0; e < a.length; e++) c = this.coordinate.measurePoint([e, a[e]]),
                c[0] += b,
                d.push(c);
                return d
            },
            addLabels: function (a) {
                var b = this.config.plotOptions;
                if (b.label.enabled || b[this.chartType].dot.enabled) {
                    var c, d, e, f = 0;
                    for (e = 0; e < a.positions.length; e++) c = a.positions[e],
                    b[this.chartType].dot.enabled && (f = b[this.chartType].dot.radius),
                    d = {
                        color: this.getEntryColor(a),
                        radius: f,
                        x: c[0],
                        y: c[1]
                    },
                    b.label.enabled && (d.label = {
                        margin: b.label.text.margin,
                        color: b.label.text.color,
                        text: a.data[e]
                    }),
                    this.dotArr.push(d);
                    a.dots = this.dotArr
                }
            },
            addDots: function () {
                var a = this.config.plotOptions;
                if (a.label.enabled || a[this.chartType].dot.enabled) {
                    var b = this.getElement("lineDots");
                    b.update({
                        elementClass: kc.CircleDot,
                        list: this.dotArr,
                        fx: this.config.animation.enabled
                    })
                }
            }
        })
    }(),


    function () {
        kc.AreaPlots = kity.createClass("AreaPlots", {
            base: kc.LinearPlots,
            constructor: function (a, b) {
                this.callBase(a, b)
            },
            plotsAttrsInit: function () {
                this.chartType = "area"
            },
            getLineWidth: function () {
                return this.config.plotOptions.area.stroke.width
            },
            areas: [],
            renderLineByData: function (a) {
                var b, c, d, e = a.offsetX || 0;
                if (this.config.yAxis.stacked) {
                    var f = this.config.yAxis.percentage,
                        g = f ? "percentageOffset" : "offset",
                    h = f ? "allPercentageOffset" : "allOffset";
                    c = this.array2points(a[g], e),
                    d = this.array2points(kity.Utils.copy(a[h][a.indexInGroup + 1]), e).reverse()
                } else {
                    b = this.array2points(a.data, e);
                    for (var i = (kity.Utils.copy(b), this.coordinate), j = (i.measurePointX(0), i.measurePointY(i.yRuler._ref.from)), c = b.slice(0), d = [], k = b.length; k -->
                    0;) d.push([b[k][0], j])
                }
                var l = this.drawPolygon(c, d, a);
                this.areas.push(l)
            },
            drawPolygon: function (a, b, c) {
                var d, e, f = a.concat(b),
                    g = new kity.Polygon(f),
                    h = this.container.paper,
                    i = this.getEntryColor(c),
                    j = this;
                return d = kity.Utils.isNumber(e = this.config.plotOptions.area.fill.opacity) ? new kity.Color(i).set("a", e) : (new kity.LinearGradientBrush).pipe(function () {
                    for (var a, b = j.config.plotOptions.area.fill.grandient, c = 0; c < b.length; c++) a = b[c],
                    this.addStop(a.pos, a.color || i, b[c].opacity);
                    this.setStartPosition(0, 0),
                    this.setEndPosition(0, 1),
                    h.addResource(this)
                }),
                g.fill(d),
                this.canvas.addShape(g),
                g
            }
        })
    }(),


    function () {
        kc.BaseChart = kity.createClass("BaseChart", {
            mixins: [kc.ConfigHandler],
            base: kc.Chart,
            constructor: function (a, b) {
                this.callBase(a, b),
                this.config = this.param,
                this.callMixin(),
                this.bindAction(),
                this.initTooltip()
            },
            _setConfig: function (a, b) {
                var c, d = kity.Utils.deepExtend(this.config, a),
                    e = kc.ChartsConfig.init(this.chartType || "");
                this.config = kity.Utils.deepExtend(e, d),
                this.setData(new b(this.config)),
                c = this.data.format(),
                this.config = kity.Utils.deepExtend(this.config, c)
            },
            update: function (a) {
                var b = arguments[1] || kc.ChartData;
                this._setConfig(a, b),
                coordConf = this.coordinate.setCoordinateConf(this.config),
                this.coordinate.update(coordConf),
                this.getPlots().update(this.coordinate, this.config),
                this.getOption("legend.enabled") && this.addLegend()
            },
            getPlots: function () {
                return this.plots
            },
            setPlots: function (a) {
                this.plots = a
            },
            getXOffset: function () {
                var a = this.coordinate,
                    b = a.param.padding.left + a.param.margin.left;
                return b
            },
            isOutOfXRange: function (a) {
                var b = this.getXOffset(a),
                    c = this.coordinate;
                return a - b < c.param.padding.left || a - b + c.param.padding.left > c.xRuler.map_grid[c.xRuler.map_grid.length - 1]
            },
            getChartElementByShape: function (a) {
                return a.container.host
            },
            getXInfoByPosX: function (a) {
                var b = this.getXOffset(),
                    c = this.coordinate;
                if (0 == c.xRuler.map_grid.length) return {
                    index: 0,
                    posX: 0
                };
                var d = c.xRuler.leanTo(a - b, "map");
                return d.value += c.param.padding.left,
                {
                    index: d.index,
                    posX: d.value
                }
            },
            bindAction: function () {
                var a = this;
                this.currentIndex = -1,
                this.paper.on("mousemove", function (b) {
                    a.onmousemove && a.onmousemove(b)
                }),
                this.paper.on("click", function (b) {
                    var c = a.coordinate;
                    c && a.onclick && a.onclick(b)
                })
            },
            getEntryColor: function (a) {
                return a.color || this.config.color[a.index] || this.config.finalColor
            },
            initTooltip: function () {
                var a = $(this.container);~ ["absolute", "relative"].indexOf(a.css("position")) || a.css("position", "relative"),
                this.setTooltipContainer()
            },
            setTooltipContainer: function (a) {
                this.tooltip = a ? $(a).css({
                    position: "absolute",
                    left: "-3000px"
                }) : $("<div></div>").appendTo(this.container).css({
                    position: "absolute",
                    boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
                    borderRadius: "4px",
                    backgroundColor: "#FFF",
                    color: "#888",
                    padding: "6px 10px",
                    left: "-1000px",
                    marginLeft: "10px",
                    fontSize: "10px",
                    lineHeight: "16px"
                })
            },
            updateTooltip: function (a, b, c) {
                this.tooltip.html(a);
                var d = this.tooltip[0].clientWidth;
                b + d > $(this.container).width() && (b -= d + 15),
                this.tooltip.clearQueue().animate({
                    left: b,
                    top: c
                },
                100)
            },
            getTooltip: function () {
                return this.tooltip
            },
            addLegend: function () {
                var a, b, c, d, e, f, g = this.config.series || [];
                this.legend && this.legend.remove(),
                this.legend = $('<div class="kitycharts-legend"></div>').css({
                    position: "absolute",
                    bottom: "5px",
                    right: "30px",
                    height: "26px",
                    lineHeight: "26px"
                }).appendTo(this.container);
                var h = [],
                    i = [];
                for (a = 0; a < g.length; a++) if (b = g[a], "data" == this.config.legend.level) for (var a = 0; a < b.data.length; a++) f = b.data[a],
                h.push(f.name),
                i.push(this.getEntryColor(f));
                else c = b.name,
                d = this.getEntryColor(b),
                h.push(c),
                i.push(d);
                var j = this;
                h.forEach(function (a, b) {
                    e = $("<div></div>").css({
                        marginRight: "20px",
                        display: "inline-block"
                    }).appendTo(j.legend),
                    $('<div class="kitycharts-legend-color"></div>').css({
                        width: "12px",
                        height: "12px",
                        backgroundColor: i[b],
                        display: "inline-block",
                        marginRight: "5px",
                        position: "relative",
                        top: "1px"
                    }).appendTo(e),
                    $('<div class="kitycharts-legend-label">' + a + "</div>").css({
                        fontSize: "10px",
                        display: "inline-block"
                    }).appendTo(e)
                })
            }
        })
    }(),


    function () {
        kc.StickChart = kity.createClass("StickChart", {
            base: kc.BaseChart,
            constructor: function (a, b) {
                this.callBase(a, b),
                this.setData(new kc.ChartData(b)),
                this.coordinate = this.addElement("oxy", new kc.CategoryCoordinate)
            },
            isStick: function (a) {
                return a instanceof kc.Bar
            },
            onmousemove: function (a) {
                this.currentStick,
                this.currentStickParam;
                var b = this.getChartElementByShape(a.targetShape);
                this.isStick(b) ? this.currentStick != b ? this.onMouseOut(b) : this.onMouseIn(b) : this.onMouseOut(b)
            },
            getPosXByIndex: function (a) {
                return this.coordinate.measurePointX(a)
            },
            getPosYByValue: function (a) {
                return this.coordinate.measurePointY(a)
            },
            onMouseIn: function (a) {
                var b = new kity.Color(a.param.color);
                b.set("a", .7),
                a.update({
                    color: b.toRGBA()
                });
                var c = a.getBindData();
                this.processHover(c)
            },
            onMouseOut: function (a) {
                this.currentStickParam && this.currentStick.update({
                    color: this.currentStickParam.color
                }),
                this.isStick(a) && (this.currentStick = a, this.currentStickParam = kity.Utils.copy(a.param))
            },
            processHover: function (a) {
                this.currentMark != a.indexInSeries + a.indexInCategories && (this.currentMark = a.indexInSeries + a.indexInCategories, this.callHover(a))
            },
            callHover: function (a) {
                var b = this.config.interaction.onStickHover;
                "function" == typeof b ? b.call(this, a, this.currentStick) : null !== b && this.defaultCallHover(a)
            },
            defaultCallHover: function (a) {
                var b = this.config.series[a.indexInSeries].sum[a.indexInCategories],
                    c = this.setTooltipContent(a),
                    d = this.getTooltipPosition(b);
                this.updateTooltip(c, d.x, d.y)
            },
            setTooltipContent: function (a) {
                var b = a.indexInSeries,
                    c = a.indexInCategories,
                    d = kity.Utils.queryPath("tooltip.content", this.config);
                if (d) return d(c, b);
                var e = this.config.series,
                    f = this.config.xAxis.categories,
                    g = '<div style="font-weight:bold">' + f[c] + "</div>",
                    h = "x" == this.getPlots().valueAxis ? "xAxis" : "yAxis",
                i = this.config[h].unit && this.config[h].unit.text || "";
                return g += "<div>" + e[b].name + " : " + e[b].data[c] + i + "</div>",
                this.config.yAxis.stacked && (g += "<div> Total : " + e[b].sum[c] + "</div>"),
                g
            }
        })
    }(),


    function () {
        kc.ColumnChart = kity.createClass("ColumnChart", {
            base: kc.StickChart,
            constructor: function (a, b) {
                this.chartType = "column",
                this.callBase(a, b);
                var c = this.addElement("plots", new kc.ColumnPlots);
                this.setPlots(c)
            },
            getTooltipPosition: function (a) {
                return {
                    x: this.currentStick.param.x,
                    y: this.coordinate.measurePointY(a)
                }
            }
        })
    }(),


    function () {
        kc.LinearChart = kity.createClass("LinearChart", {
            base: kc.BaseChart,
            constructor: function (a, b) {
                this.callBase(a, b),
                this.hoverDots = this.addElement("hoverDots", new kc.ElementList),
                this.setData(new kc.ChartData(b)),
                this.coordinate = this.addElement("oxy", new kc.CategoryCoordinate)
            },
            onmousemove: function (a) {
                var b, c, d = this.coordinate,
                    e = (d.param, a.originEvent),
                    f = e.offsetX,
                    g = (e.offsetY, this),
                    h = 0,
                    i = g.config.series;
                if (!g.isOutOfXRange(f)) {
                    var j = g.getXInfoByPosX(f);
                    if (i && 0 != i.length && i[0].positions) {
                        for (b = 0; b < i.length; b++) c = i[b].positions.length,
                        c > h && (h = c); ! j || j.index > h || g.processHover(j)
                    }
                }
            },
            onclick: function (a) {
                var b = this,
                    c = (this.coordinate, b.config, a.targetShape);
                if (c instanceof kity.Circle && b.config.interaction.onCircleClick) {
                    var d = b.currentIndex,
                        e = b.getChartElementByShape(c),
                        f = e.param.bind,
                        g = {
                        data: f.data,
                        indexInCategories: d,
                        indexInSeries: f.indexInSeries,
                        position: e.getPosition()
                    };
                    b.callCircleClick(g, e)
                }
            },
            callCircleClick: function (a, b) {
                var c = this.config.interaction.onCircleClick;
                "function" == typeof c ? c(a, b) : null !== c && this.defaultCircleClick(a)
            },
            defaultCircleClick: function (a) {
                this.updateTooltip(this.config.xAxis.categories[a.indexInCategories] + " : " + a.data, a.position.x, a.position.y)
            },
            setCirclePosYByIndex: function (a) {
                var b, c = 0,
                    d = this,
                    e = d.config.series;
                for (d.circleArr = [], b = 0; b < e.length; b++) tmpPos = e[b].positions[a],
                tmpPos ? c = tmpPos[1] : pX = c = -100,
                d.circleArr.push({
                    color: "#FFF",
                    radius: 5,
                    strokeWidth: 3,
                    strokeColor: this.getEntryColor(e[b]),
                    x: d.currentPX,
                    y: c,
                    bind: {
                        data: e[b].data[a],
                        indexInSeries: b,
                        indexInCategories: a
                    }
                });
                d.hoverDots.update({
                    elementClass: kc.CircleDot,
                    list: d.circleArr,
                    fx: !1
                }),
                d.hoverDots.canvas.bringTop()
            },
            setTooltipContent: function (a) {
                var b = kity.Utils.queryPath("tooltip.content", this.config);
                if (b) return b(a);
                var c = this.config.series,
                    d = this.config.xAxis.categories,
                    e = '<div style="font-weight:bold">' + d[a] + "</div>";
                return c.forEach(function (b) {
                    e += "<div>" + b.name + " : " + b.data[a] + "</div>"
                }),
                e
            },
            defaultHover: function (a) {
                for (var b, c = a[0].bind.indexInCategories, d = this.config.series, e = [], f = 0, g = 0; g < d.length; g++) b = d[g].positions[c],
                f = b[0],
                e.push(b[1]);
                var h = Math.min.apply([], e),
                    i = Math.max.apply([], e);
                this.updateTooltip(this.setTooltipContent(c), f, (h + i) / 2)
            },
            callCircleHover: function () {
                var a = [];
                this.circleArr.forEach(function (b) {
                    a.push(b)
                });
                var b = this.config.interaction.onHover;
                "function" == typeof b ? b(a) : null !== b && this.defaultHover(a)
            },
            processHover: function (a) {
                if (this.config.interaction.hover.enabled) {
                    var b = this,
                        c = a.posX + this.coordinate.param.margin.left,
                        d = a.index;
                    b.currentPX = c,
                    d != b.currentIndex && (b.currentIndex = d, b.setCirclePosYByIndex(d), b.callCircleHover())
                }
            }
        })
    }(),


    function () {
        kc.AreaChart = kity.createClass("AreaChart", {
            base: kc.LinearChart,
            constructor: function (a, b) {
                this.chartType = "area",
                this.callBase(a, b);
                var c = this.addElement("plots", new kc.AreaPlots);
                this.setPlots(c)
            }
        })
    }(),


    function () {
        kc.PieChart = kity.createClass("PieChart", {
            base: kc.BaseChart,
            constructor: function (a, b) {
                this.chartType = "pie",
                this.callBase(a, b),
                this.config = this.param,
                this.setData(new kc.PieData(b));
                var c = this.addElement("plots", new kc.PiePlots);
                this.setPlots(c)
            },
            update: function (a) {
                this._setConfig(a, kc.PieData),
                this.getPlots().update(this.config),
                this.getOption("legend.enabled") && this.addLegend()
            },
            getCenter: function () {
                var a = this.config.plotOptions.pie.center;
                return {
                    x: a.x,
                    y: a.y
                }
            },
            getSeries: function () {
                return this.config.series
            },
            bindAction: function () {}
        })
    }(window)
}(kity, window),
$.fn.animClass = function (a) {
    var b = $(this).removeClass(a);
    setTimeout(function () {
        b.addClass(a)
    },
    50)
},
Utils = {
    addTip: function (a) {
        var b = a.hit === !1 ? "" : '<div class="hit" style="border-top-color: ' + a.bgColor + '"></div>';
        return $("<div " + (a.id ? "id=" + a.id : "") + ' class="tip" style="background-color:' + a.bgColor + '"><span class="content">' + a.content + "</span>" + b + "</div>").appendTo(a.container).css(a.style)
    },
    addTip2: function (a) {
        function b() {
            return $('<div class="tip-2 hit-' + a.pos + '">' + a.content + '<div class="hit" style="border-top-color: ' + a.bgColor + '"></div></div>').appendTo(a.container).css({
                left: a.left + "px",
                top: a.top + "px",
                right: a.right + "px",
                bottom: a.bottom + "px",
                backgroundColor: a.bgColor,
                color: a.color || "#000"
            }).addClass("tip-2-do-anim")
        }
        var c = a.delay || 0;
        return c ? void setTimeout(function () {
            b()
        },
        c) : b()
    },
    arraySum: function (a) {
        var b = 0;
        return a.forEach(function (a) {
            b += a
        }),
        b
    },
    angle2radian: function (a) {
        return a / 180 * Math.PI
    },
    once: function (a) {
        var b = a;
        return function () {
            b(),
            b = function () {
                return !1
            }
        }
    }
};
var Charts = {
    _all: {},
    add: function (a, b) {
        this._all[a] = b
    },
    get: function (a) {
        return this._all[a]
    }
}; !
function () {
    var a = {
        color: ["#87e0b7"],
        xAxis: {
            categories: ["12Q2", "12Q3", "12Q4", "13Q1", "13Q2", "13Q3", "13Q4", "14Q1", "14Q2"],
            ticks: {
                enabled: !1
            },
            margin: {
                right: 10,
                left: 5
            },
            axis: {
                enabled: !1
            },
            padding: {
                left: 10,
                right: 10
            },
            label: {
                enabled: !0,
                rotate: 0,
                font: {
                    color: "#FFF",
                    fontSize: 10
                }
            },
            min: 0
        },
        yAxis: {
            min: 0,
            grid: [0, 1, 2, 3, 4, 5],
            ticks: {
                enabled: !1
            },
            label: {
                enabled: !1,
                rotate: 0,
                font: {
                    color: "#FFF",
                    fontSize: 10
                }
            },
            axis: {
                enabled: !1
            },
            padding: {
                top: 0,
                bottom: 0
            }
        },
        plotOptions: {
            area: {
                stroke: {
                    width: 6
                },
                fill: {
                    grandient: [{
                        pos: 0,
                        opacity: 1,
                        color: "#d4c071"
                    },
                    {
                        pos: 1,
                        opacity: 0,
                        color: "#d4c071"
                    }]
                },
                dot: {
                    enabled: !1
                }
            },
            line: {
                width: 6,
                dot: {
                    enabled: !1
                }
            },
            label: {
                enabled: !1
            }
        },
        legend: {
            enabled: !1
        },
        interaction: {
            onHover: null
        },
        series: [{
            name: "中国智能手机",
            data: [1.2, 1.63, 2.33, 2.79, 2.88, 3.27, 3.85, 4.43, 4.63]
        }],
        animation: {
            enabled: !1
        }
    };
    Charts.add("area", {
        init: function () {
            function b(a, b) {
                var c = new kity.Path,
                    d = c.getDrawer(),
                    f = 0,
                    g = a.length;
                for (f = 0; g > f; f++) d.moveTo(a[f][0], a[f][1]),
                d.lineTo(b[g - f - 1][0], b[g - f - 1][1]);
                var h = (new kity.LinearGradientBrush).pipe(function () {
                    this.addStop(0, "#dccfa7", 1),
                    this.addStop(1, "#dccfa7", 0),
                    this.setStartPosition(0, 0),
                    this.setEndPosition(0, 1),
                    e.addResource(this)
                });
                c.stroke(h),
                e.addShape(c),
                c.bringRear()
            }
            var c = $('<div id="area-inner" style="position:relative;width:100%;height:100%"></div>');
            $("#area").append(c);
            var d = new kc.AreaChart("area-inner");
            d.getPlots().drawPolygon = function (a, c) {
                var d = this,
                    e = a.concat(a.slice(0).reverse()).slice(0),
                    f = a.concat(c).slice(0),
                    g = d.config.plotOptions.area.fill.grandient,
                    h = new kc.Polyline({
                    points: e,
                    color: "#ddd",
                    width: 0,
                    factor: +new Date,
                    animatedDir: "y",
                    close: !0,
                    fill: g
                });
                this.addElement("area", h),
                h.update(),
                setTimeout(function () {
                    h.update({
                        points: f,
                        color: "#ddd",
                        width: 0,
                        factor: +new Date,
                        animatedDir: "y",
                        close: !0,
                        fill: g
                    })
                }),
                b(a, c),
                h.polyline.container.bringRear()
            };
            var e = d.getPaper();
            d.update(a);
            var f = d.getPlots().getPlotsElements().getElementList()[0],
                g = (new kity.LinearGradientBrush).pipe(function () {
                this.addStop(0, "#a7df1e", 1),
                this.addStop(1, "#7be1f0", 1),
                this.setStartPosition(0, 0),
                this.setEndPosition(1, 0),
                e.addResource(this)
            }),
                h = new kity.Pen;
            h.setWidth(6),
            h.setColor(g),
            f.stroke(g, 6),
            Utils.addTip2({
                bgColor: "#e9df38",
                left: 25,
                top: 125,
                pos: "left",
                container: c,
                content: '普及率<div style="font-size:16px">10%</div>',
                delay: 500
            }),
            Utils.addTip2({
                bgColor: "#e9df38",
                left: 301,
                top: 60,
                pos: "left",
                container: c,
                content: '普及率<div style="font-size:16px">20%</div>',
                delay: 1600
            }),
            Utils.addTip2({
                bgColor: "#e9df38",
                left: 684,
                top: 0,
                pos: "left",
                container: c,
                content: '普及率<div style="font-size:16px">30%</div>',
                delay: 3300
            }),
            this.init = function () {
                return !1
            }
        }
    })
}(),


function () {
    function a(a) {
        var b = a.coordinate.param.margin,
            c = a.getWidth() - b.left - b.right,
            d = a.coordinate.param.x,
            e = a.coordinate.measurePointY(0);
        a.addElement("zero", new kc.Line({
            x1: d,
            y1: e,
            x2: d + c,
            y2: e,
            width: 1,
            color: "#FFF"
        })).update()
    }
    function b(a) {
        var b = a.coordinate.param.margin,
            c = a.getHeight() - b.top - b.bottom,
            d = a.coordinate.measurePointX(3.5),
            e = a.coordinate.param.y;
        a.addElement("separate", new kc.Line({
            x1: d,
            y1: e,
            x2: d,
            y2: e + c,
            width: 1,
            color: "#FFF",
            dash: [1]
        })).update()
    }
    var c = {
        color: ["#3ed58c", "#f4dd1a"],
        xAxis: {
            categories: ["浏览器", "生活娱乐", "社交&通信", "新闻", "地图导航", "音乐", "搜索", "视频", "阅读", "电商", "生活服务", "云存储", "游戏"],
            ticks: {
                enabled: !1
            },
            margin: {
                right: 10,
                left: 5
            },
            axis: {
                enabled: !1
            },
            padding: {
                left: 20,
                right: 20
            },
            label: {
                enabled: !0,
                rotate: 0,
                font: {
                    color: "#FFF",
                    fontSize: 10
                }
            },
            min: 0
        },
        yAxis: {
            min: 0,
            ticks: {
                enabled: !1
            },
            grid: [-.3, 0, .3, .6, .9],
            label: {
                enabled: !1,
                rotate: 0,
                font: {
                    color: "#FFF",
                    fontSize: 10
                },
                format: function (a) {
                    return parseInt(100 * a) + "%"
                }
            },
            axis: {
                enabled: !1
            },
            padding: {
                top: 0,
                bottom: 0
            }
        },
        plotOptions: {
            column: {
                width: 16,
                margin: 1
            },
            label: {
                enabled: !1
            }
        },
        legend: {
            enabled: !1
        },
        interaction: {
            onStickHover: null
        },
        animation: {
            enabled: window.animFx,
            duration: 1500,
            mode: "ease",
            delayInterval: 200
        },
        series: [{
            name: "Android",
            data: [-.230560572, -.116267018, -.022364046, -.055284462, .12, .144067376, .196909265, .237930968, .270339733, .45, .6, .106499724, .35]
        },
        {
            name: "iPhone",
            data: [-.24, -.12, -.1, -.05, .03, .175265871, .3, .31440714, .31440714, .384934529, .42, .51, .67]
        }]
    };
    Charts.add("column", {
        init: function () {
            var d = $("#column"),
                e = new kc.ColumnChart("column");
            e.update(c),
            a(e),
            b(e),
            Utils.addTip({
                hit: !1,
                container: d,
                content: "跑输大盘：<br />应用DAU增速<用户大盘增速",
                bgColor: "#1074c8",
                style: {
                    left: "35px",
                    top: "20px",
                    width: "160px"
                }
            }),
            Utils.addTip({
                hit: !1,
                id: "tip-fixed",
                container: d,
                content: "跑赢大盘：<br />应用DAU增速>用户大盘增速",
                bgColor: "#1074c8",
                style: {
                    left: "270px",
                    top: "20px",
                    width: "160px",
                    webkitTransition: "0.3s"
                }
            })
        }
    })
}(),


function () {
    function a(a) {
        b.plotOptions.pie.outerRadius = a,
        b.plotOptions.pie.innerRadius = a - 50
    }
    var b = {
        color: ["#3ed58c", "#f4dd1a", "#7dd5d6", "#a8e0df"],
        plotOptions: {
            pie: {
                shadow: {
                    enabled: !1,
                    size: 4,
                    x: 0,
                    y: 0,
                    color: "rgba( 0, 0, 0, 0.3 )"
                },
                innerRadius: 40,
                outerRadius: 90,
                incrementRadius: 30,
                stroke: {
                    width: 0
                }
            },
            label: {
                enabled: !1
            }
        },
        legend: {
            enabled: !1,
            level: "data"
        },
        animation: {
            enabled: window.animFx,
            duration: 600,
            mode: "ease"
        }
    },
        c = {
        "11Q2": {
            name: "11Q2",
            position: 0,
            data: [{
                name: "iPhone",
                value: 5
            },
            {
                name: "Android",
                value: 14
            },
            {
                name: "Windows",
                value: 8
            },
            {
                name: "Others",
                value: 73
            }]
        },
        "12Q2": {
            name: "12Q2",
            position: 1,
            data: [{
                name: "iPhone",
                value: 8
            },
            {
                name: "Android",
                value: 45
            },
            {
                name: "Windows",
                value: 3
            },
            {
                name: "Others",
                value: 43
            }]
        },
        "13Q2": {
            name: "13Q2",
            position: 2,
            data: [{
                name: "iPhone",
                value: 12
            },
            {
                name: "Android",
                value: 73
            },
            {
                name: "Windows",
                value: 1
            },
            {
                name: "Others",
                value: 14
            }]
        },
        "14Q2": {
            name: "14Q2",
            position: 3,
            data: [{
                name: "iPhone",
                value: 13
            },
            {
                name: "Android",
                value: 79
            },
            {
                name: "Windows",
                value: 2
            },
            {
                name: "Others",
                value: 6
            }]
        }
    };
    Charts.add("donut", {
        init: function () {
            function d(a) {
                b.series = [a],
                m.html(a.name).animClass("beat"),
                i.update(b);
                var c = document.getElementById("p2-highlight");
                c.style.webkitTransform = "translate3d(" + 49 * a.position + "px, 0px, 0px)";
                var d = i.getPlots().pies.param.list,
                    f = ["right", "left"];
                if (!j) {
                    j = [];
                    for (var g = 0; 2 > g; g++) j.push(Utils.addTip2({
                        bgColor: "#116165",
                        color: "#FFF",
                        left: l.x,
                        top: l.y,
                        pos: f[g],
                        container: e,
                        content: n[g] + '<div style="font-size:16px">4%</div>',
                        delay: 0
                    }).css({
                        webkitTransition: "0.5s"
                    }))
                }
                if (!k) {
                    k = [];
                    for (var g = 0; 2 > g; g++) k.push($('<div class="donut-label">11</div>').appendTo(e).css({
                        position: "absolute",
                        opacity: 0,
                        webkitTransition: "0.5s",
                        left: l.x + "px",
                        top: l.y + "px"
                    }))
                }
                setTimeout(function () {
                    d.forEach(function (b, c) {
                        var d, e = b.outerRadius + 4,
                            g = Math.min(b.startAngle + 25, b.startAngle + b.pieAngle / 2),
                            h = (g - 90) / 180 * Math.PI,
                            i = e * Math.cos(h),
                            l = e * Math.sin(h);
                        1 >= c && (d = j[c].html(n[c] + '<div style="font-size:16px">' + a.data[c].value + '%<div class="hit" style="border-top-color:#116165"></div></div></div>'), d.css({
                            webkitTransform: "translate3d(" + (i - ("left" == f[c] ? 0 : d.width())) + "px, " + (l - d.height() - 8) + "px, 0px)"
                        })),
                        c > 1 && (d = k[c - 2].html(n[c]), d.css({
                            webkitTransform: "translate3d(" + (g > 0 && 180 > g ? i : i - d.width()) + "px, " + (l - 8) + "px, 0px)",
                            opacity: 1
                        }))
                    })
                },
                b.animation.duration / Math.min(++o, 2))
            }
            var e = $("#donut"),
                f = e.width(),
                g = e.height(),
                h = 40,
                i = new kc.PieChart("donut");
            a(Math.min(f, g) / 2 - h),
            i.setConfig(b),
            i.setOption("plotOptions.pie.center", {
                x: f / 2,
                y: g / 2
            });
            var j, k, l = i.getCenter(),
                f = 100,
                g = 100,
                m = $("<div></div>").css({
                width: f + "px",
                height: g + "px",
                color: "#FFF",
                position: "absolute",
                left: l.x - f / 2 + "px",
                top: l.y - g / 2 + "px",
                textAlign: "center",
                lineHeight: g + "px"
            }).appendTo($("#donut")[0]),
                n = ["iPhone", "Android", "Windows", "其他"],
                o = 0;
            $(".qselect li").on("touchstart", function () {
                d(c[this.innerHTML])
            });
            var p = 0;
            for (var q in c) !
            function (a) {
                setTimeout(function () {
                    d(c[a])
                },
                1500 * p)
            }(q),
            p++
        }
    })
}(),


function () {
    function a(a) {
        return d * a
    }
    function b() {
        e = {
            plotOptions: {
                pie: {
                    innerRadius: a(26),
                    outerRadius: a(38),
                    incrementRadius: a(12),
                    stroke: {
                        width: 0
                    },
                    shadow: {
                        enabled: !1,
                        size: 1,
                        x: 0,
                        y: 0,
                        color: "rgba( 0, 0, 0, 0.3 )"
                    }
                },
                label: {
                    enabled: !1
                }
            },
            legend: {
                enabled: !1
            },
            animation: {
                enabled: window.animFx,
                duration: 1e3,
                mode: "ease"
            }
        }
    }
    function c(a, b, c) {
        var d = a.getCenter(),
            e = 40,
            f = 32,
            g = $("<div></div>").css({
            width: e + "px",
            height: f + "px",
            color: "#FFF",
            position: "absolute",
            left: d.x - e / 2 + "px",
            top: d.y - f / 2 + "px",
            textAlign: "center",
            lineHeight: c.indexOf("<br") >= 0 ? "16px" : "33px",
            fontSize: "10px"
        }).appendTo($("#" + b)[0]);
        g.html(c)
    }
    var d = 1,
        e = {};
    Charts.add("pie", {
        init: function (f, g, h) {
            var i = new kc.PieChart(f),
                j = $("#" + f),
                k = j.width(),
                l = j.height();
            d = j.width() / 100 * .95,
            j.css("backgroundSize", a(100)),
            b();
            var m = {
                x: k / 2,
                y: l / 2
            };
            e.plotOptions.pie.center = m,
            e.series = [{
                name: "Android",
                data: [{
                    value: g[0],
                    color: "#3ed58c"
                },
                {
                    value: 100 - g[0],
                    color: "rgba(0,0,0,0)"
                }]
            },
            {
                name: "iPhone",
                data: [{
                    value: g[1],
                    color: "#f4dd1a"
                },
                {
                    value: 100 - g[1],
                    color: "rgba(0,0,0,0)"
                }]
            }],
            i.update(e),
            c(i, f, h);
            var n = i.getPlots().pies.param.list;
            setTimeout(function () {
                n.forEach(function (a, b) {
                    if (b % 2 == 0) {
                        var c = (a.innerRadius + a.outerRadius) / 2,
                            d = (a.startAngle + a.pieAngle - 90) / 180 * Math.PI,
                            e = c * Math.cos(d) + m.x - 6,
                            f = c * Math.sin(d) + m.y - 6;
                        $('<div class="pie-num">' + g[b / 2] + "</div>").appendTo(j).css({
                            left: e + "px",
                            top: f + "px"
                        })
                    }
                })
            },
            e.animation.duration + 300)
        }
    })
}(),


function () {
    function a(a) {
        var b = a.container,
            c = a.side,
            d = a.topPos - 50,
            e = a.leftPos,
            f = 60,
            g = 50,
            h = [
            [.19, .25],
            [.43, .15],
            [.74, .05]
        ];
        Utils.addTip2({
            left: e + c * h[0][0] - f,
            top: d + c * h[0][1] - g,
            pos: "right",
            container: b,
            content: '偶尔使用<div style="font-size:16px">11%</div>',
            delay: 1e3
        }),
        Utils.addTip2({
            bgColor: "#fbf6f3",
            left: e + c * h[1][0] - f,
            top: d + c * h[1][1] - g,
            pos: "right",
            container: b,
            content: '从未使用<div style="font-size:16px">4%</div>',
            delay: 1100
        }),
        Utils.addTip2({
            bgColor: "#abd83e",
            left: e + c * h[2][0],
            top: d + c * h[2][1],
            pos: "left",
            container: b,
            content: '经常使用<div style="font-size:16px">85%</div>',
            delay: 1200
        })
    }
    function b(a, b) {
        setTimeout(function () {
            $(".p-donut-center").css(b)
        },
        a)
    }
    Charts.add("p-donut", {
        init: function () {
            var c = .9,
                d = $("#p-donut"),
                e = d.width(),
                f = d.height(),
                g = Math.min(e, f),
                h = g * c,
                i = f - h,
                j = (e - h) / 2;
            $('<img src="img/p-donut.png" width="' + h + '" />').css({
                marginLeft: j + "px",
                marginTop: i + "px"
            }).appendTo(d).addClass("p-donut-do-anim"),
            a({
                container: d,
                topPos: i,
                leftPos: j,
                side: h
            }),
            b(800, {
                opacity: 1,
                webkitTransform: "translate3d(0px, " + (f - h / 2 - $(".p-donut-center").height() / 2) + "px, 0px)"
            })
        }
    })
}(),


function () {
    function a(a) {
        var b = a.container,
            c = '<li class="bubble-num">' + a.values.join('</li><li class="bubble-num">') + "</li>",
            d = "<li>" + a.companies.join("</li><li>") + "</li>",
            e = [
            ["left", "right"],
            ["right", "left"]
        ],
            f = e[a.posType],
            g = $('<div class="bubble-container"><ul class="value ' + f[0] + '">' + c + '</ul><ul class="company ' + f[1] + '">' + d + "</ul></div>").css({
            height: a.values.length * a.lineHeight + "px",
            width: b.width() / 2 - 1 + "px"
        }).appendTo(b);
        g.find("li").css({
            height: a.lineHeight + "px",
            lineHeight: a.lineHeight + "px"
        });
        var h = a.values.length;
        return a.values.forEach(function (b) {
            var c = b * a.radiusBase;
            $('<div class="bubble"></div>').css({
                position: "absolute",
                width: c + "px",
                height: c + "px",
                left: (g.width() - c) / 2 + "px",
                top: (h - .5) * a.lineHeight - c / 2 + "px",
                webkitTransform: "scale(0.1)"
            }).appendTo(g).addClass(a.className)
        }),
        $('<div class="mobi-icon ' + a.iconType + '"></div>').appendTo(g).css(a.iconStyle),
        setTimeout(function () {
            var b = g.find(".bubble");
            a.values.forEach(function (c, d) {
                $(b[d]).css({
                    webkitTransform: "translate3d(0px, " + (d - h + 1) * a.lineHeight + "px, 0px) scale(1)"
                })
            })
        },
        500),
        g
    }
    Charts.add("bubble", {
        init: function () {
            var b = $("#bubble"),
                c = 5,
                d = (b.height() - 20) / c;
            a({
                container: b,
                values: [3.4, 2.8, .8, .8, .7],
                companies: ["腾讯", "百度", "阿里", "搜狐", "新浪"],
                radiusBase: 18,
                lineHeight: d,
                className: "color0",
                posType: 0,
                iconType: "android",
                iconStyle: {
                    right: "15px"
                }
            }).css({
                borderRight: "#FFF 1px dashed"
            }),
            a({
                container: b,
                values: [3.7, 2.1, .9, .5, .4],
                companies: ["腾讯", "百度", "阿里", "美图", "新浪"],
                radiusBase: 18,
                lineHeight: d,
                className: "color1",
                posType: 1,
                iconType: "iphone",
                iconStyle: {
                    left: "15px"
                }
            })
        }
    })
}(),


function () {
    function a() {
        var a = [],
            b = [],
            c = Utils.arraySum(j.value),
            d = 0;
        j.value.forEach(function (e) {
            var f = e / c * 360;
            a.push(f),
            b.push(d),
            d += f
        }),
        j.angles = a,
        j.start = b
    }
    function b(a, b, c) {
        var d = a.find(".label").css({
            position: "absolute",
            top: c / 2 - 50 + "px",
            color: "#388742",
            fontSize: "20px"
        });
        d.css({
            left: (b - d.width()) / 2 + "px"
        })
    }
    function c(a, b, c, d) {
        {
            var e = 164,
                f = 145,
                g = 71;
            a.find(".search-icon").css({
                width: b + "px",
                height: b / e * f + "px",
                backgroundSize: "343px",
                left: c / 2 - b / e * g + "px",
                top: d / 2 - .15 * b + "px"
            })
        }
    }
    function d(a, d) {
        var e = a.container,
            f = a.radius,
            h = $('<div class="center"><div class="label">' + a.label + '</div><div class="search-icon"></div></div>').css({
            position: "absolute",
            width: 2 * f + "px",
            height: 2 * f + "px",
            left: e.width() / 2 - f + "px",
            top: e.height() / 2 - f + "px",
            webkitTransform: "scale(" + a.startScale + ")",
            zIndex: 100
        }).appendTo(e),
            i = h.width(),
            j = h.height();
        return b(h, i, j),
        c(h, 80, i, j),
        setTimeout(function () {
            h.css({
                webkitTransform: "scale(1)"
            })
        },
        d),
        h.on("touchstart", function () {
            h.animClass("beat2"),
            g(m),
            m++,
            o()
        }),
        h
    }
    function e(a) {
        var b = a.container,
            c = new kc.PieChart("round");
        c.setConfig(l),
        c.setOption("plotOptions.pie.center", {
            x: b.width() / 2,
            y: b.height() / 2
        }),
        c.update(l),
        h = c.getPlots().getElement("pies").getElementList()
    }
    function f(a) {
        var b = a.container,
            c = Math.sin,
            d = Math.cos;
        j.angles.forEach(function (e, f) {
            var e = e / 2 + j.start[f] - 90,
                g = 90 > e && e > -90 || 360 > e && e > 270,
                h = j.name[f],
                i = 16 * h.length,
                k = a.r + 20,
                l = b.width() / 2,
                m = b.height() / 2,
                n = Utils.angle2radian(e),
                o = d(n),
                p = c(n);
            $('<div class="link-txt link-txt' + f + ' link" index="' + f + '">' + h + "</div>").css({
                top: m + (k + (g ? 0 : i)) * p - 6,
                left: l + (k + (g ? 0 : i)) * o,
                textAlign: g ? "left" : "right",
                width: i,
                webkitTransformOrigin: "0% 50%",
                webkitTransform: "rotate(" + (g ? e : e - 180) + "deg)"
            }).appendTo(b).attr({
                tl: l + (k - 10) * o,
                tt: m + (k - 10) * p
            })
        }),
        $("body").delegate(".link-txt, .link-dot", "touchstart", function () {
            var a = Number($(this).attr("index"));
            g(a),
            m = a + 1,
            o()
        }),
        setTimeout(function () {
            g(0)
        },
        500)
    }
    function g(a) {
        j.start[a],
        j.name.length;
        i && i.update({
            color: k[p]
        }),
        h[a].update({
            color: "#f3e50c"
        }),
        p = a,
        i = h[a],
        $(".link-txt").show();
        var b = $(".link-txt" + a).hide();
        q.css({
            top: parseInt(b.attr("tt") - 50) + "px",
            display: "block"
        }).find(".content").html(j.name[a] + '<br /><span style="font-size:16px">' + j.value[a] + "%</span>"),
        q.css({
            left: b.attr("tl") - q.width() / 2 + "px"
        }).removeClass("tip-anim"),
        setTimeout(function () {
            q.addClass("tip-anim")
        },
        0)
    }
    var h, i, j = {
        name: ["书籍文档", "生活服务", "在线工具服务", "健康保健", "教育", "成人", "人物", "影视动画", "新闻资讯", "商品购物", "音乐", "游戏", "其他"],
        value: [15.1, 14, 9.8, 9.7, 9.1, 8, 6.5, 4.9, 4.8, 3.3, 3, 2.9, 12.1]
    },
        k = ["#433769", "#333369", "#1f3164", "#0f376d", "#13426d", "#0f4d6c", "#125768", "#166164", "#1a6b5f", "#1e755a", "#238953", "#279350", "#29a54a"],
        l = {
        color: k,
        defaultColor: "#11722e",
        plotOptions: {
            pie: {
                shadow: {
                    enabled: !1,
                    size: 4,
                    x: 0,
                    y: 0,
                    color: "rgba( 0, 0, 0, 0.3 )"
                },
                innerRadius: 90,
                outerRadius: 110,
                incrementRadius: 20,
                stroke: {
                    width: 0
                }
            },
            label: {
                enabled: !1
            }
        },
        legend: {
            enabled: !1,
            level: "data"
        },
        animation: {
            enabled: !1,
            duration: 600,
            mode: "ease"
        },
        series: [{
            name: "搜索占比",
            data: [{
                name: "书籍文档",
                value: 15.1
            },
            {
                name: "生活服务",
                value: 14
            },
            {
                name: "在线工具服务",
                value: 9.8
            },
            {
                name: "健康保健",
                value: 9.7
            },
            {
                name: "教育",
                value: 9.1
            },
            {
                name: "成人",
                value: 8
            },
            {
                name: "人物",
                value: 6.5
            },
            {
                name: "影视动画",
                value: 4.9
            },
            {
                name: "新闻资讯",
                value: 4.8
            },
            {
                name: "商品购物",
                value: 3.3
            },
            {
                name: "音乐",
                value: 3
            },
            {
                name: "游戏",
                value: 2.9
            },
            {
                name: "其他",
                value: 12.1
            }]
        }]
    },
        m = 1,
        n = j.name.length,
        o = function () {
        m > n - 1 && (m = 0)
    },
        p = 0,
        q = Utils.addTip({
        container: $("#round"),
        bgColor: "#116165",
        content: "",
        style: {
            backgroundColor: "#116165",
            display: "none",
            zIndex: 600,
            textAlign: "center",
            minWidth: "40px"
        }
    });
    Charts.add("round", {
        init: function () {
            var b = $("#round"),
                c = {
                w: 4,
                h: 20,
                rectCount: 48,
                container: b,
                rectInterval: 15,
                centerStartR: .2,
                centerRadius: 80,
                centerTimer: 800
            };
            c.r = c.centerRadius + 10;
            var g = c.rectCount;
            a(g); {
                var h = c.centerTimer;
                d({
                    radius: c.centerRadius,
                    startScale: c.centerStartR,
                    container: b,
                    label: "14Q2"
                },
                h)
            }
            setTimeout(function () {
                e(c),
                setTimeout(function () {
                    f(c)
                },
                200)
            },
            h + 500)
        }
    })
}(),


function (a) {
    function b(a) {
        "100%" == a && 0 == i && (i = !0, d())
    }
    function c() {}
    function d() {
        $("#loading").hide(),
        a()
    }
    var e = ["img/1-bg.jpg", "img/back-cover.jpg", "img/book.png", "img/donuts.png", "img/logos.png", "img/numbers.png", "img/p-donut.png", "img/pics1.png", "img/pics2.png", "img/pie-bg.png", "img/share.png"],
        f = "0%",
        g = 0,
        h = e.length,
        i = !1,
        j = 3e3;
    e.forEach(function (a) {
        var d = new Image;
        d.onload = function () {
            g++,
            f = (g / h * 100).toFixed(0) + "%",
            b(f),
            c(f)
        },
        d.src = a
    }),
    setTimeout(function () {
        b("100%")
    },
    j)
}(start);