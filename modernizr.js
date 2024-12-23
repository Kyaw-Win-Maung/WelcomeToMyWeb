/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundsize-cssanimations-csscalc-csscolumns-csstransforms-csstransforms3d-csstransitions-flexbox-formvalidation-inlinesvg-input-inputtypes-rgba-scriptasync-stylescoped-svg-svgclippaths-svgfilters-touchevents-video-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
 !function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }
    function a() {
        var e, t, n, a, o, i, s;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [],
                t = C[l],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn,
                o = 0; o < e.length; o++)
                    i = e[o],
                    s = i.split("."),
                    1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]]instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                    Modernizr[s[0]][s[1]] = a),
                    T.push((a ? "" : "no-") + s.join("-"))
            }
    }
    function o(e) {
        var t = w.className
          , n = Modernizr._config.classPrefix || "";
        if (x && (t = t.baseVal),
        Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n),
        x ? w.className.baseVal = t : w.className = t)
    }
    function i(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                k(e, n) && i(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split(".")
              , a = Modernizr[r[0]];
            if (2 == r.length && (a = a[r[1]]),
            "undefined" != typeof a)
                return Modernizr;
            t = "function" == typeof t ? t() : t,
            1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]]instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
            Modernizr[r[0]][r[1]] = t),
            o([(t && 0 != t ? "" : "no-") + r.join("-")]),
            Modernizr._trigger(e, t)
        }
        return Modernizr
    }
    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function l(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function c() {
        var e = t.body;
        return e || (e = s(x ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function u(e, n, r, a) {
        var o, i, l, u, d = "modernizr", f = s("div"), p = c();
        if (parseInt(r, 10))
            for (; r--; )
                l = s("div"),
                l.id = a ? a[r] : d + (r + 1),
                f.appendChild(l);
        return o = s("style"),
        o.type = "text/css",
        o.id = "s" + d,
        (p.fake ? p : f).appendChild(o),
        p.appendChild(f),
        o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)),
        f.id = d,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        u = w.style.overflow,
        w.style.overflow = "hidden",
        w.appendChild(p)),
        i = n(f, e),
        p.fake ? (p.parentNode.removeChild(p),
        w.style.overflow = u,
        w.offsetHeight) : f.parentNode.removeChild(f),
        !!i
    }
    function d(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function p(e, t, n) {
        var a;
        for (var o in e)
            if (e[o]in t)
                return n === !1 ? e[o] : (a = t[e[o]],
                r(a, "function") ? f(a, n || t) : a);
        return !1
    }
    function m(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function v(t, n, r) {
        var a;
        if ("getComputedStyle"in e) {
            a = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== a)
                r && (a = a.getPropertyValue(r));
            else if (o) {
                var i = o.error ? "error" : "log";
                o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            a = !n && t.currentStyle && t.currentStyle[r];
        return a
    }
    function h(t, r) {
        var a = t.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; a--; )
                if (e.CSS.supports(m(t[a]), r))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var o = []; a--; )
                o.push("(" + m(t[a]) + ":" + r + ")");
            return o = o.join(" or "),
            u("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == v(e, null, "position")
            })
        }
        return n
    }
    function g(e, t, a, o) {
        function i() {
            u && (delete U.style,
            delete U.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o,
        !r(a, "undefined")) {
            var c = h(e, a);
            if (!r(c, "undefined"))
                return c
        }
        for (var u, f, p, m, v, g = ["modernizr", "tspan", "samp"]; !U.style && g.length; )
            u = !0,
            U.modElem = s(g.shift()),
            U.style = U.modElem.style;
        for (p = e.length,
        f = 0; p > f; f++)
            if (m = e[f],
            v = U.style[m],
            d(m, "-") && (m = l(m)),
            U.style[m] !== n) {
                if (o || r(a, "undefined"))
                    return i(),
                    "pfx" == t ? m : !0;
                try {
                    U.style[m] = a
                } catch (y) {}
                if (U.style[m] != v)
                    return i(),
                    "pfx" == t ? m : !0
            }
        return i(),
        !1
    }
    function y(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1)
          , s = (e + " " + D.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(s, t, a, o) : (s = (e + " " + P.join(i + " ") + i).split(" "),
        p(s, t, n))
    }
    function b(e, t, r) {
        return y(e, n, n, t, r)
    }
    var T = []
      , C = []
      , S = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            C.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            C.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = S,
    Modernizr = new Modernizr,
    Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect),
    Modernizr.addTest("svgfilters", function() {
        var t = !1;
        try {
            t = "SVGFEColorMatrixElement"in e && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
        } catch (n) {}
        return t
    });
    var E = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    S._prefixes = E;
    var w = t.documentElement
      , x = "svg" === w.nodeName.toLowerCase();
    x || !function(e, t) {
        function n(e, t) {
            var n = e.createElement("p")
              , r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            r.insertBefore(n.lastChild, r.firstChild)
        }
        function r() {
            var e = b.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function a(e, t) {
            var n = b.elements;
            "string" != typeof n && (n = n.join(" ")),
            "string" != typeof e && (e = e.join(" ")),
            b.elements = n + " " + e,
            c(t)
        }
        function o(e) {
            var t = y[e[h]];
            return t || (t = {},
            g++,
            e[h] = g,
            y[g] = t),
            t
        }
        function i(e, n, r) {
            if (n || (n = t),
            d)
                return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : v.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e),
            !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }
        function s(e, n) {
            if (e || (e = t),
            d)
                return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++)
                a.createElement(s[i]);
            return a
        }
        function l(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return b.shivMethods ? i(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(b, t.frag)
        }
        function c(e) {
            e || (e = t);
            var r = o(e);
            return !b.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            d || l(e, r),
            e
        }
        var u, d, f = "3.7.3", p = e.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, v = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h = "_html5shiv", g = 0, y = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                u = "hidden"in e,
                d = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0,
                d = !0
            }
        }();
        var b = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: d,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = b,
        c(t),
        "object" == typeof module && module.exports && (module.exports = b)
    }("undefined" != typeof e ? e : this, t);
    var _ = "Moz O ms Webkit"
      , P = S._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    S._domPrefixes = P;
    var k;
    !function() {
        var e = {}.hasOwnProperty;
        k = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        }
        : function(t, n) {
            return e.call(t, n)
        }
    }(),
    S._l = {},
    S.on = function(e, t) {
        this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }
    ,
    S._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)
                    (r = n[e])(t)
            }, 0),
            delete this._l[e]
        }
    }
    ,
    Modernizr._q.push(function() {
        S.addTest = i
    });
    var N = function() {
        function e(e, t) {
            var a;
            return e ? (t && "string" != typeof t || (t = s(t || "div")),
            e = "on" + e,
            a = e in t,
            !a && r && (t.setAttribute || (t = s("div")),
            t.setAttribute(e, ""),
            a = "function" == typeof t[e],
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
            a) : !1
        }
        var r = !("onblur"in t.documentElement);
        return e
    }();
    S.hasEvent = N,
    Modernizr.addTest("audio", function() {
        var e = s("audio")
          , t = !1;
        try {
            t = !!e.canPlayType,
            t && (t = new Boolean(t),
            t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""),
            t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""),
            t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }),
    Modernizr.addTest("video", function() {
        var e = s("video")
          , t = !1;
        try {
            t = !!e.canPlayType,
            t && (t = new Boolean(t),
            t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""),
            t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""),
            t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }),
    Modernizr.addTest("csscalc", function() {
        var e = "width:"
          , t = "calc(10px);"
          , n = s("a");
        return n.style.cssText = e + E.join(t + e),
        !!n.style.length
    }),
    Modernizr.addTest("rgba", function() {
        var e = s("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)",
        ("" + e.backgroundColor).indexOf("rgba") > -1
    }),
    Modernizr.addTest("scriptasync", "async"in s("script")),
    Modernizr.addTest("stylescoped", "scoped"in s("style")),
    Modernizr.addTest("inlinesvg", function() {
        var e = s("div");
        return e.innerHTML = "<svg/>",
        "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var L = s("input")
      , z = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")
      , A = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++)
            A[t[n]] = !!(t[n]in L);
        return A.list && (A.list = !(!s("datalist") || !e.HTMLDataListElement)),
        A
    }(z);
    var M = "search tel url email datetime date month week time datetime-local number range color".split(" ")
      , $ = {};
    Modernizr.inputtypes = function(e) {
        for (var r, a, o, i = e.length, s = "1)", l = 0; i > l; l++)
            L.setAttribute("type", r = e[l]),
            o = "text" !== L.type && "style"in L,
            o && (L.value = s,
            L.style.cssText = "position:absolute;visibility:hidden;",
            /^range$/.test(r) && L.style.WebkitAppearance !== n ? (w.appendChild(L),
            a = t.defaultView,
            o = a.getComputedStyle && "textfield" !== a.getComputedStyle(L, null).WebkitAppearance && 0 !== L.offsetHeight,
            w.removeChild(L)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? L.checkValidity && L.checkValidity() === !1 : L.value != s)),
            $[e[l]] = !!o;
        return $
    }(M);
    var j = "CSS"in e && "supports"in e.CSS
      , R = "supportsCSS"in e;
    Modernizr.addTest("supports", j || R);
    var B = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    });
    var F = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        }
        : function(t) {
            var n = !1;
            return u("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }),
            n
        }
    }();
    S.mq = F;
    var V = S.testStyles = u;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch)
            n = !0;
        else {
            var r = ["@media (", E.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            V(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    }),
    Modernizr.addTest("formvalidation", function() {
        var t = s("form");
        if (!("checkValidity"in t && "addEventListener"in t))
            return !1;
        if ("reportValidity"in t)
            return !0;
        var n, r = !1;
        return Modernizr.formvalidationapi = !0,
        t.addEventListener("submit", function(t) {
            (!e.opera || e.operamini) && t.preventDefault(),
            t.stopPropagation()
        }, !1),
        t.innerHTML = '<input name="modTest" required="required" /><button></button>',
        V("#modernizr form{position:absolute;top:-99999em}", function(e) {
            e.appendChild(t),
            n = t.getElementsByTagName("input")[0],
            n.addEventListener("invalid", function(e) {
                r = !0,
                e.preventDefault(),
                e.stopPropagation()
            }, !1),
            Modernizr.formvalidationmessage = !!n.validationMessage,
            t.getElementsByTagName("button")[0].click()
        }),
        r
    });
    var D = S._config.usePrefixes ? _.split(" ") : [];
    S._cssomPrefixes = D;
    var O = function(t) {
        var r, a = E.length, o = e.CSSRule;
        if ("undefined" == typeof o)
            return n;
        if (!t)
            return !1;
        if (t = t.replace(/^@/, ""),
        r = t.replace(/-/g, "_").toUpperCase() + "_RULE",
        r in o)
            return "@" + t;
        for (var i = 0; a > i; i++) {
            var s = E[i]
              , l = s.toUpperCase() + "_" + r;
            if (l in o)
                return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    S.atRule = O;
    var q = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete q.elem
    });
    var U = {
        style: q.elem.style
    };
    Modernizr._q.unshift(function() {
        delete U.style
    });
    S.testProp = function(e, t, r) {
        return g([e], n, t, r)
    }
    ;
    S.testAllProps = y;
    S.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? O(e) : (-1 != e.indexOf("-") && (e = l(e)),
        t ? y(e, t, n) : y(e, "pfx"))
    }
    ;
    S.testAllProps = b,
    Modernizr.addTest("cssanimations", b("animationName", "a", !0)),
    Modernizr.addTest("backgroundsize", b("backgroundSize", "100%", !0)),
    function() {
        Modernizr.addTest("csscolumns", function() {
            var e = !1
              , t = b("columnCount");
            try {
                e = !!t,
                e && (e = new Boolean(e))
            } catch (n) {}
            return e
        });
        for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++)
            e = n[r].toLowerCase(),
            t = b("column" + n[r]),
            ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || b(n[r])),
            Modernizr.addTest("csscolumns." + e, t)
    }(),
    Modernizr.addTest("flexbox", b("flexBasis", "1px", !0)),
    Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && b("transform", "scale(1)", !0)
    }),
    Modernizr.addTest("csstransforms3d", function() {
        return !!b("perspective", "1px", !0)
    }),
    Modernizr.addTest("csstransitions", b("transition", "all", !0)),
    a(),
    o(T),
    delete S.addTest,
    delete S.addAsyncTest;
    for (var H = 0; H < Modernizr._q.length; H++)
        Modernizr._q[H]();
    e.Modernizr = Modernizr
}(window, document);
