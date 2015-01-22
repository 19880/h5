(function () {
    var j = "iVBORw0KGgoAAAANSUhEUgAAAGUAAAAnCAMAAAAhMnaaAAAC/VBMVEUAAADQyLPg2s24rIy3qom3qon8/Pr///+3qor///7////BtZm3qor///+2qYj///+3qon+/v38/Pvi3dDBtpr///7//v66rY63qoq9spT9/fy4q4u4rIz///////+4rIy4q4v+/v3+/v27r5HSyrbTzLj////Mw6z///63qoq3qoq4rIy2qYm4rIz////OxrDEuqC8sJK/tJe+s5a9spS5rI3///79/PvWz73t6uK5rY65rY7CuJzRybTNxa66ro+5rY3+/v24q4v////8/Pv9/fv8/Pr//v7////m4tbMxK3Lw6zq593HvaS6ro/Px7LFu6D5+PbSybX18u7y7+nq593v7OTSyrbGvKP08u3u7OS4rIy3q4q4q4u3qom2qYn9/fz////Y0b/r596/tJj////////////e2MnDuJ3b1cTx7ufWz73HvaXBt5y8sJLq5ty6ro/Wz73Mw6z////EuZ/Jv6b59/S4rIz39fG/s5bPx7L+/v3X0L7Qx7L+/v25rY7////GvaP9/Pv08+7PxrH+/v3////r6N////////+2qYjHvqXJwKfHvqX9/Pvl4NXu6+P////h3M7Z08Ld18jY0sHJwKfh3M/Fu6Hf2cr+/v3l4db18+/5+PX////c1cXn49jBtpvHvaTLwqvY0sD+/v7s6eC9spX39fHx7+nt6uL///+6ro/////Kwam7r5D////Y0sD39fG+s5W5rY76+fbZ0sH////r59/FuqD08u3IvqX9/fzUzLjf2svi3tHZ0sHg283DuZ3g283y7+nu7OTt6uL////i3dDMw6zJwKjKwKnl4dX29PC+s5bg2szPx7Hk4NTWzrzHvaO6ro/Px7He2crSyrbc1sfNxK3////j3tH6+fbr6N/f2cvUzbrTy7jSy7fPx7LMxK3UzbnHvqXDuJ3QyLPKwqr49/TVzrzRybXOxq/Y0sHJwKjb1MS/s5f7+vjGvKLBtprd18fo5Nrf2szEup/w7ebj39LX0L7z8uzx7+js6eBUyNMAAAAA4HRSTlMAAQMLBhMIuj0lBPcZqR/MOBwW/OfAoFkj/OyrmHtPQy0Z/v338O3r5HtrZmEoDvz35t7XyMUsIPnt3dXSysm8sYl1c1M5KRQL/vz79vTz7Ozo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";

    function h(a) {
        return document.getElementById(a)
    }
    function q() {
        function a() {
            "number" == typeof window.orientation && 0 !== window.orientation || "function" != typeof q || location.reload()
        }
        window.onorientationchange = a;
        if ("number" == typeof window.orientation && 0 !== window.orientation) alert(k.a1 || "\u8bf7\u65cb\u8f6c\u60a8\u7684\u624b\u673a\u4e3a\u7ad6\u7acb\u72b6\u6001\uff0c\u5728\u6a2a\u5c4f\u754c\u9762\u4e0b\u65e0\u6cd5\u64cd\u4f5c\uff01"),
        a();
        else {
            q = null;
            var b = document.body.clientWidth,
                c = b / 640;
            document.body.style.fontSize = 32 * c + "px";
            document.body.style.width = b + "px";
            var d = h("canvas"),
                e = h("paperLogo");
            d.width = 590 * c;
            d.height = 590 * c;
            var f = new u(d);
            f.b = b;
            window.PENSIZE && (f.c = window.PENSIZE);
            document.getElementById("clearCanvas").onclick = function () {
                f.A();
                r = 0;
                n = ""
            };
            e.src = "data:image/png;base64," + j;
            document.ontouchmove = function (a) {
                a.preventDefault()
            };
            var l = 0,
                p = h("palette"),
                x = h("penColor");
            h("btnPenColor").onclick = function () {
                l ? (l = 0, p.style.display = "none") : (l = 1, p.style.display = "block")
            };
            p.onclick = function (a) {
                a = a.target;
                if ("LI" == a.tagName) {
                    var b = a.getAttribute("value");
                    f.color = b;
                    x.style.background = a.style.background;
                    l = 0;
                    p.style.display = "none"
                }
            };
            h("shareBtn").onclick = function () {
                if (0 == f.k) alert(k.a2 || "\u522b\u9017\u4e86\uff0c\u6211\u600e\u4e48\u4ec0\u4e48\u90fd\u6ca1\u770b\u5230\u54ea\uff01");
                else if (20 > f.k) alert(k.a3 || "\u4e0d\u8981\u8fd9\u4e48\u4efb\u6027\uff0c\u8fd9\u4e5f\u592a\u7b80\u6d01\u4e86\uff01");
                else if (r == f.k && "" != n) g("share");
                else {
                    r = f.k;
                    g("upload", "<p>" + (k.a4 || "\u751f\u6210\u56fe\u7247\u4e2d") + "...</p>");
                    var a, b, e = "";
                    b = f.B("jpeg", .6);
                    "data:image/png" == b.substr(0, 14) ? (b = b.substr(22), a = "png") : (b = b.substr(23), a = "jpg");
                    e = "jpg" == a ? f.C("jpeg", .6).substr(23) : "";
                    "png" != a || y || !v || confirm((k.a5 || "\u751f\u6210\u7684\u56fe\u7247\u4e3a{$num}k\uff0c\u662f\u5426\u4e0a\u4f20\uff1f").replace("{$num}", Math.round((b.length + e.length) / 1024))) ? (g("upload", "<p>" + (k.a6 || "\u56fe\u7247\u4e0a\u4f20\u4e2d") + "(" + Math.round((b.length + e.length) / 1024) + ")</p>"), z(b, a, e)) : g("editor")
                }
            };
            h("toEditorBtn").onclick = function () {
                g("editor")
            };
            (b = location.href.match(/\/(\d+)($|\?)/)) ? (g("show", s(b[1])), window.localStorage && localStorage.onewordId == b[1] && (setShareData(k.c1 || "\u4e00\u4e2a\u5b57\u5f62\u5bb9\u8fd9\u4e00\u5e74\uff0c\u6211\u5b57\u5199\u5f97\u600e\u6837\uff1f\u4e5f\u6765\u6652\u4e00\u4e0b\u4f60\u7684\u4e66\u6cd5\u5427\uff01", "http://t.people.com.cn/wx/oneword/" + b[1], s(b[1], "s_")), g("share"), localStorage.onewordId = "")) : g("editor")
        }
    }
    function s(a, b) {
        b = b || "";
        if (25 == a.length) return "http://i0.peopleurl.cn/msgimage/weixin/" + a.substr(0, 8) + "/" + b + a + ".jpg";
        if (27 == a.length) return "http://i0.peopleurl.cn/msgimage/weixin/" + a.substr(0, 10) + "/" + b + a + ".jpg";
        if (28 == a.length) return "http://i0.peopleurl.cn/nmsgimage/wx/" + a.substr(0, 10) + "/" + b + a + ".jpg"
    }
    function z(a, b, c) {
        var d = new XMLHttpRequest;
        b = b || "jpg";
        d.onreadystatechange = function () {
            if (4 == d.readyState && 200 == d.status) {
                var a = d.responseText;
                a && /^\d+$/.test(a) ? (n = s(a, "s_"), setShareData(k.c1 || "\u4e00\u4e2a\u5b57\u5f62\u5bb9\u8fd9\u4e00\u5e74\uff0c\u6211\u5b57\u5199\u5f97\u600e\u6837\uff1f\u4e5f\u6765\u6652\u4e00\u4e0b\u4f60\u7684\u4e66\u6cd5\u5427\uff01", "http://t.people.com.cn/wx/oneword/" + a, n), window.localStorage && (localStorage.onewordId = a), a = window.H ? getRandomPath(a) : "http://t.people.com.cn/wx/oneword/" + a, window.location.href = a) : (alert(k.a7 || "\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01"), g("editor"))
            } else 4 == d.readyState && 200 !== d.status && (alert(k.a8 || "\u7f51\u7edc\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01code:" + d.status), g("editor"))
        };
        d.ontimeout = function () {
            alert(k.a9 || "\u4e0a\u4f20\u8d85\u65f6\uff0c\u8bf7\u5728\u8f83\u597d\u7684\u7f51\u7edc\u73af\u5883\u4e2d\u518d\u8bd5\uff01");
            g("editor")
        };
        d.upload && (d.upload.onprogress = function (a) {
            a.lengthComputable && g("upload", "<p>" + (k.a6 || "\u56fe\u7247\u4e0a\u4f20\u4e2d") + "<span>(" + Math.round(a.total / 1024) + "k/" + Math.round(a.loaded / a.total * 100) + "%)</span></p>")
        });
        d.open("POST", "/weixinImageUpload.action", !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        a = "dataStr=" + encodeURIComponent(a) + "&type=" + b + "&dataSmall=" + encodeURIComponent(c);
        g("upload", "<p>" + (k.a6 || "\u56fe\u7247\u4e0a\u4f20\u4e2d") + "(" + Math.round(a.length / 1024) + "k)...</p>");
        d.send(a)
    }
    function g(a, b) {
        "upload" == a && "" != b ? (t(), h("editorPage").style.display = "block", h("uploadPage").style.display = "block", h("uploadPage").innerHTML = b) : "editor" == a ? -1 !== navigator.userAgent.indexOf("MSIE") ? document.write('<div style="font-size:2em;text-align:center;padding:2em;">' + (k.a10 || "\u9700\u8981\u4f7f\u7528IE 11\u4ee5\u4e0a\u7248\u672c\u6d4f\u89c8\u5668\uff0c\u6216\u8005\u4f7f\u7528Chrome\u3001Firefox\u7b49\u652f\u6301HTML5\u7684\u6d4f\u89c8\u5668\u3002") + "</div>") : (t(), h("editorPage").style.display = "block") : "show" == a && "" != b ? (t(), h("showPage").style.display = "block", h("showImg").src = b) : "share" == a && (h("uploadPage").style.display = "none", h("shareAlert").style.display = "block", setTimeout(function () {
            h("shareAlert").style.display = "none"
        },
        15E3))
    }
    function t() {
        h("editorPage").style.display = h("uploadPage").style.display = h("showPage").style.display = "none"
    }
    function u(a) {
        if (a.nodeType) this.canvas = a;
        else if ("string" == typeof a) this.canvas = document.getElementById(a);
        else return;
        this.D()
    }
    function w(a, b, c, d) {
        if (!c.p.complete || !c.o.complete) return "";
        d = d || 590;
        a = a || "png";
        b = b || .7;
        var e = document.createElement("canvas");
        e.width = e.height = d;
        var f, l, h, k, g = c.canvas.width,
            m = c.canvas.height;
        if (1.8 < g / d) for (f = document.createElement("canvas"), l = document.createElement("canvas"), h = f.getContext("2d"), k = l.getContext("2d"), f.width = g, f.height = m, h.drawImage(c.canvas, 0, 0, g, m); 1.8 < g / d;) g = Math.round(.6 * g),
        m = Math.round(.6 * m),
        l.width = g,
        l.height = m,
        k.drawImage(f, 0, 0, g, m),
        f.width = g,
        f.height = m,
        h.drawImage(l, 0, 0, g, m);
        else f = c.canvas;
        l = e.getContext("2d");
        l.drawImage(c.o, 0, 0, d, d);
        l.drawImage(f, 0, 0, d, d);
        l.drawImage(c.p, d / 590 * 19, d / 590 * 16, d / 590 * 101, d / 590 * 39);
        return e.toDataURL("image/" + a, b)
    }
    var A = navigator.userAgent.match(/ OS (\d+).*? Mac OS/) || !1,
        n = "",
        r = 0,
        y = -1 !== navigator.userAgent.indexOf("NetType/WIFI"),
        v = -1 !== navigator.userAgent.indexOf("Messenger"),
        k = window.LANG || {};
    v && "t.people.com.cn" != location.host ? location.href = "http://t.people.com.cn/wx/oneword" : (window.console && window.console.log && console.log("Copyright by people.cn"), u.prototype = {
        lineWidth: 1,
        color: "rgba(0,0,0, .6)",
        c: 8,
        b: 320,
        v: "images/paper.jpg",
        k: 0,
        D: function () {
            var a = this;
            if (this.canvas.getContext) {
                this.a = this.canvas.getContext("2d");
                this.a.strokeStyle = this.color;
                this.a.fillStyle = this.color;
                this.h(this.canvas, "selectstart", function () {
                    return !1
                });
                this.o = new Image;
                this.o.src = this.v;
                this.p = new Image;
                this.p.src = "data:image/png;base64," + j;
                var b = function (c) {
                    var d, e;
                    if ("touchstart" == c.type) {
                        if (2 <= c.touches.length) return;
                        d = c.touches[0].pageX;
                        e = c.touches[0].pageY;
                        a.f(a.canvas, "mousedown", b)
                    } else d = c.pageX,
                    e = c.pageY;
                    a.F(d, e, c.type);
                    c.preventDefault()
                };
                this.h(this.canvas, "touchstart", b);
                this.h(this.canvas, "mousedown", b)
            }
        },
        F: function (a, b, c) {
            var d = this;
            this.i = this.canvas.getBoundingClientRect();
            this.i = {
                left: this.i.left + (window.scrollX || window.pageXOffset),
                top: this.i.top + (window.scrollY || window.pageYOffset)
            };
            window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty();
            this.a.moveTo(a - this.i.left, b - this.i.top);
            this.e = null;
            this.s = 0;
            this.d = [];
            this.lineWidth = this.c / 2 * (this.b / 320);
            this.g && (this.f(document, "mousemove", this.g), this.f(document, "touchmove", this.g), this.f(document, "mouseup", this.j), this.f(document, "touchend", this.j));
            this.g = function (a) {
                var b, c;
                if ("touchmove" == a.type) {
                    if (2 <= a.touches.length) return;
                    b = a.touches[0].pageX;
                    c = a.touches[0].pageY
                } else b = a.pageX,
                c = a.pageY;
                d.t(b, c);
                a.preventDefault()
            };
            this.j = function () {
                d.G()
            };
            "touchstart" == c ? (this.h(document, "touchmove", this.g), this.h(document, "touchend", this.j)) : (this.h(document, "mousemove", this.g), this.h(document, "mouseup", this.j));
            this.w();
            this.t(a, b)
        },
        t: function (a, b) {
            var c;
            c = 0;
            a -= this.i.left;
            b -= this.i.top;
            if (this.d.length && (c = this.d[this.d.length - 1], c = Math.sqrt((c.x - a) * (c.x - a) + (c.y - b) * (c.y - b)), 0 == c)) return;
            this.k++;
            this.d.push({
                x: a,
                y: b,
                r: c
            });
            3 <= this.d.length && (c = this.d.shift(), this.q(c))
        },
        q: function (a, b) {
            var c = a.x,
                d = a.y,
                e = a.r,
                f = A ? 4 : 2;
            if (!this.e || 0 !== e) {
                var g = this.d.length ? this.d[0] : null;
                if (e) {
                    this.a.moveTo(this.e.x, this.e.y);
                    if (!this.s && (this.s = 1, g && e > g.r * f)) for (e /= 4, f = 1; 4 >= f; f++) this.u(c + f / 4 * (this.e.x - c), d + f / 4 * (this.e.y - d));
                    b || (b = e < .003125 * this.b ? this.b / 320 * this.c * 1.625 : e < .00625 * this.b ? this.b / 320 * this.c * 1.375 : e < .009375 * this.b ? this.b / 320 * this.c * 1.25 : e < .015625 * this.b ? this.b / 320 * this.c * 1.125 : e < .021875 * this.b ? this.b / 320 * this.c : e < .028125 * this.b ? this.b / 320 * this.c * .875 : e < .034375 * this.b ? this.b / 320 * this.c * .75 : e < .046875 * this.b ? this.b / 320 * this.c * .625 : e < .0625 * this.b ? this.b / 320 * this.c * .5 : this.b / 320 * this.c * .375);
                    this.n = b;
                    Math.abs(this.lineWidth - this.n) > this.b / 320 * this.c * .025 && (this.lineWidth -= (this.lineWidth - this.n) / 8, this.a.lineWidth = this.lineWidth)
                }
                this.e = a;
                this.u(c, d)
            }
        },
        G: function () {
            this.f(document, "mousemove", this.g);
            this.f(document, "touchmove", this.g);
            this.f(document, "mouseup", this.j);
            this.f(document, "touchend", this.j);
            --this.a.lineWidth;
            for (var a; this.d.length;) a = this.d.shift(),
            this.q(a, this.b / 320 * this.c / 4)
        },
        A: function () {
            this.e = null;
            this.k = 0;
            this.a.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.a.beginPath()
        },
        u: function (a, b) {
            var c, d, e;
            this.a.fillStyle = this.color;
            this.a.strokeStyle = this.color;
            this.a.lineTo(this.e.x, this.e.y);
            this.a.stroke();
            this.a.beginPath();
            this.a.strokeStyle = "rgba(0, 0, 0, 0)";
            if (this.l || this.m) if (c = this.l - a, d = this.m - b, e = Math.sqrt((this.l - a) * (this.l - a) + (this.m - b) * (this.m - b)), Math.abs(e) > this.lineWidth / 3) {
                e = Math.floor(Math.abs(e) / (this.lineWidth / 3));
                for (var f = 1; f <= e; f++) Math.abs(this.lineWidth - this.n) > this.b / 320 * this.c * .025 && (this.lineWidth -= Math.round(this.lineWidth - this.n) / 8, this.a.lineWidth = this.lineWidth),
                this.a.arc(this.l - f / e * c, this.m - f / e * d, this.lineWidth, 0, 2 * Math.PI),
                this.a.fill(),
                this.a.stroke(),
                this.a.beginPath()
            }
            this.a.arc(a, b, this.lineWidth, 0, 2 * Math.PI);
            this.a.fill();
            this.a.stroke();
            this.a.beginPath();
            this.l = a;
            this.m = b
        },
        w: function () {
            this.m = this.l = 0
        },
        h: function (a, b, c) {
            a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener(b, c, !1)
        },
        f: function (a, b, c) {
            a.detachEvent ? a.detachEvent("on" + b, c) : a.removeEventListener(b, c, !1)
        },
        B: function (a, b) {
            return w(a, b, this, 590)
        },
        C: function (a, b) {
            return w(a, b, this, 80)
        }
    },
    q())
})();