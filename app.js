var app = function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    return n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 131)
}([function(t, e, n) {
    var r = n(1),
        i = n(7),
        o = n(14),
        a = n(11),
        s = n(18),
        u = function(t, e, n) {
            var l, c, f, h, p = t & u.F,
                d = t & u.G,
                g = t & u.S,
                v = t & u.P,
                _ = t & u.B,
                m = d ? r : g ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                y = d ? i : i[e] || (i[e] = {}),
                b = y.prototype || (y.prototype = {});
            for (l in d && (n = e), n) f = ((c = !p && m && void 0 !== m[l]) ? m : n)[l], h = _ && c ? s(f, r) : v && "function" == typeof f ? s(Function.call, f) : f, m && a(m, l, f, t & u.U), y[l] != f && o(y, l, h), v && b[l] != f && (b[l] = f)
        };
    r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var r = n(4);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    var r = n(50)("wks"),
        i = n(30),
        o = n(1).Symbol,
        a = "function" == typeof o;
    (t.exports = function(t) {
        return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
    }).store = r
}, function(t, e, n) {
    var r = n(20),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    t.exports = !n(2)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(3),
        i = n(92),
        o = n(27),
        a = Object.defineProperty;
    e.f = n(8) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = o(e, !0), r(n), i) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(25);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(14),
        o = n(13),
        a = n(30)("src"),
        s = n(136),
        u = ("" + s).split("toString");
    n(7).inspectSource = function(t) {
        return s.call(t)
    }, (t.exports = function(t, e, n, s) {
        var l = "function" == typeof n;
        l && (o(n, "name") || i(n, "name", e)), t[e] !== n && (l && (o(n, a) || i(n, a, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && this[a] || s.call(this)
    }))
}, function(t, e, n) {
    var r = n(0),
        i = n(2),
        o = n(25),
        a = /"/g,
        s = function(t, e, n, r) {
            var i = String(o(t)),
                s = "<" + e;
            return "" !== n && (s += " " + n + '="' + String(r).replace(a, "&quot;") + '"'), s + ">" + i + "</" + e + ">"
        };
    t.exports = function(t, e) {
        var n = {};
        n[t] = e(s), r(r.P + r.F * i((function() {
            var e = "" [t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        })), "String", n)
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(29);
    t.exports = n(8) ? function(t, e, n) {
        return r.f(t, e, i(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(46),
        i = n(25);
    t.exports = function(t) {
        return r(i(t))
    }
}, function(t, e, n) {
    t.exports = function() {
        "use strict";
        var t = navigator.userAgent,
            e = navigator.platform,
            n = /gecko\/\d/i.test(t),
            r = /MSIE \d/.test(t),
            i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(t),
            o = /Edge\/(\d+)/.exec(t),
            a = r || i || o,
            s = a && (r ? document.documentMode || 6 : +(o || i)[1]),
            u = !o && /WebKit\//.test(t),
            l = u && /Qt\/\d+\.\d+/.test(t),
            c = !o && /Chrome\//.test(t),
            f = /Opera\//.test(t),
            h = /Apple Computer/.test(navigator.vendor),
            p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(t),
            d = /PhantomJS/.test(t),
            g = !o && /AppleWebKit/.test(t) && /Mobile\/\w+/.test(t),
            v = /Android/.test(t),
            _ = g || v || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(t),
            m = g || /Mac/.test(e),
            y = /\bCrOS\b/.test(t),
            b = /win/i.test(e),
            x = f && t.match(/Version\/(\d*\.\d*)/);
        x && (x = Number(x[1])), x && x >= 15 && (f = !1, u = !0);
        var w = m && (l || f && (null == x || x < 12.11)),
            k = n || a && s >= 9;

        function S(t) {
            return new RegExp("(^|\\s)" + t + "(?:$|\\s)\\s*")
        }
        var C, T = function(t, e) {
            var n = t.className,
                r = S(e).exec(n);
            if (r) {
                var i = n.slice(r.index + r[0].length);
                t.className = n.slice(0, r.index) + (i ? r[1] + i : "")
            }
        };

        function O(t) {
            for (var e = t.childNodes.length; e > 0; --e) t.removeChild(t.firstChild);
            return t
        }

        function E(t, e) {
            return O(t).appendChild(e)
        }

        function L(t, e, n, r) {
            var i = document.createElement(t);
            if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof e) i.appendChild(document.createTextNode(e));
            else if (e)
                for (var o = 0; o < e.length; ++o) i.appendChild(e[o]);
            return i
        }

        function M(t, e, n, r) {
            var i = L(t, e, n, r);
            return i.setAttribute("role", "presentation"), i
        }

        function A(t, e) {
            if (3 == e.nodeType && (e = e.parentNode), t.contains) return t.contains(e);
            do {
                if (11 == e.nodeType && (e = e.host), e == t) return !0
            } while (e = e.parentNode)
        }

        function N() {
            var t;
            try {
                t = document.activeElement
            } catch (e) {
                t = document.body || null
            }
            for (; t && t.shadowRoot && t.shadowRoot.activeElement;) t = t.shadowRoot.activeElement;
            return t
        }

        function R(t, e) {
            var n = t.className;
            S(e).test(n) || (t.className += (n ? " " : "") + e)
        }

        function P(t, e) {
            for (var n = t.split(" "), r = 0; r < n.length; r++) n[r] && !S(n[r]).test(e) && (e += " " + n[r]);
            return e
        }
        C = document.createRange ? function(t, e, n, r) {
            var i = document.createRange();
            return i.setEnd(r || t, n), i.setStart(t, e), i
        } : function(t, e, n) {
            var r = document.body.createTextRange();
            try {
                r.moveToElementText(t.parentNode)
            } catch (t) {
                return r
            }
            return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", e), r
        };
        var F = function(t) {
            t.select()
        };

        function D(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return function() {
                return t.apply(null, e)
            }
        }

        function I(t, e, n) {
            for (var r in e || (e = {}), t) !t.hasOwnProperty(r) || !1 === n && e.hasOwnProperty(r) || (e[r] = t[r]);
            return e
        }

        function W(t, e, n, r, i) {
            null == e && -1 == (e = t.search(/[^\s\u00a0]/)) && (e = t.length);
            for (var o = r || 0, a = i || 0;;) {
                var s = t.indexOf("\t", o);
                if (s < 0 || s >= e) return a + (e - o);
                a += s - o, a += n - a % n, o = s + 1
            }
        }
        g ? F = function(t) {
            t.selectionStart = 0, t.selectionEnd = t.value.length
        } : a && (F = function(t) {
            try {
                t.select()
            } catch (t) {}
        });
        var j = function() {
            this.id = null, this.f = null, this.time = 0, this.handler = D(this.onTimeout, this)
        };

        function H(t, e) {
            for (var n = 0; n < t.length; ++n)
                if (t[n] == e) return n;
            return -1
        }
        j.prototype.onTimeout = function(t) {
            t.id = 0, t.time <= +new Date ? t.f() : setTimeout(t.handler, t.time - +new Date)
        }, j.prototype.set = function(t, e) {
            this.f = e;
            var n = +new Date + t;
            (!this.id || n < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, t), this.time = n)
        };
        var z = {
                toString: function() {
                    return "CodeMirror.Pass"
                }
            },
            B = {
                scroll: !1
            },
            U = {
                origin: "*mouse"
            },
            V = {
                origin: "+move"
            };

        function K(t, e, n) {
            for (var r = 0, i = 0;;) {
                var o = t.indexOf("\t", r); - 1 == o && (o = t.length);
                var a = o - r;
                if (o == t.length || i + a >= e) return r + Math.min(a, e - i);
                if (i += o - r, r = o + 1, (i += n - i % n) >= e) return r
            }
        }
        var G = [""];

        function $(t) {
            for (; G.length <= t;) G.push(X(G) + " ");
            return G[t]
        }

        function X(t) {
            return t[t.length - 1]
        }

        function q(t, e) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = e(t[r], r);
            return n
        }

        function Y() {}

        function J(t, e) {
            var n;
            return Object.create ? n = Object.create(t) : (Y.prototype = t, n = new Y), e && I(e, n), n
        }
        var Q = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

        function Z(t) {
            return /\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Q.test(t))
        }

        function tt(t, e) {
            return e ? !!(e.source.indexOf("\\w") > -1 && Z(t)) || e.test(t) : Z(t)
        }

        function et(t) {
            for (var e in t)
                if (t.hasOwnProperty(e) && t[e]) return !1;
            return !0
        }
        var nt = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

        function rt(t) {
            return t.charCodeAt(0) >= 768 && nt.test(t)
        }

        function it(t, e, n) {
            for (;
                (n < 0 ? e > 0 : e < t.length) && rt(t.charAt(e));) e += n;
            return e
        }

        function ot(t, e, n) {
            for (var r = e > n ? -1 : 1;;) {
                if (e == n) return e;
                var i = (e + n) / 2,
                    o = r < 0 ? Math.ceil(i) : Math.floor(i);
                if (o == e) return t(o) ? e : n;
                t(o) ? n = o : e = o + r
            }
        }
        var at = null;

        function st(t, e, n) {
            var r;
            at = null;
            for (var i = 0; i < t.length; ++i) {
                var o = t[i];
                if (o.from < e && o.to > e) return i;
                o.to == e && (o.from != o.to && "before" == n ? r = i : at = i), o.from == e && (o.from != o.to && "before" != n ? r = i : at = i)
            }
            return null != r ? r : at
        }
        var ut = function() {
            var t = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                e = /[stwN]/,
                n = /[LRr]/,
                r = /[Lb1n]/,
                i = /[1n]/;

            function o(t, e, n) {
                this.level = t, this.from = e, this.to = n
            }
            return function(a, s) {
                var u = "ltr" == s ? "L" : "R";
                if (0 == a.length || "ltr" == s && !t.test(a)) return !1;
                for (var l, c = a.length, f = [], h = 0; h < c; ++h) f.push((l = a.charCodeAt(h)) <= 247 ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(l) : 1424 <= l && l <= 1524 ? "R" : 1536 <= l && l <= 1785 ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(l - 1536) : 1774 <= l && l <= 2220 ? "r" : 8192 <= l && l <= 8203 ? "w" : 8204 == l ? "b" : "L");
                for (var p = 0, d = u; p < c; ++p) {
                    var g = f[p];
                    "m" == g ? f[p] = d : d = g
                }
                for (var v = 0, _ = u; v < c; ++v) {
                    var m = f[v];
                    "1" == m && "r" == _ ? f[v] = "n" : n.test(m) && (_ = m, "r" == m && (f[v] = "R"))
                }
                for (var y = 1, b = f[0]; y < c - 1; ++y) {
                    var x = f[y];
                    "+" == x && "1" == b && "1" == f[y + 1] ? f[y] = "1" : "," != x || b != f[y + 1] || "1" != b && "n" != b || (f[y] = b), b = x
                }
                for (var w = 0; w < c; ++w) {
                    var k = f[w];
                    if ("," == k) f[w] = "N";
                    else if ("%" == k) {
                        var S = void 0;
                        for (S = w + 1; S < c && "%" == f[S]; ++S);
                        for (var C = w && "!" == f[w - 1] || S < c && "1" == f[S] ? "1" : "N", T = w; T < S; ++T) f[T] = C;
                        w = S - 1
                    }
                }
                for (var O = 0, E = u; O < c; ++O) {
                    var L = f[O];
                    "L" == E && "1" == L ? f[O] = "L" : n.test(L) && (E = L)
                }
                for (var M = 0; M < c; ++M)
                    if (e.test(f[M])) {
                        var A = void 0;
                        for (A = M + 1; A < c && e.test(f[A]); ++A);
                        for (var N = "L" == (M ? f[M - 1] : u), R = N == ("L" == (A < c ? f[A] : u)) ? N ? "L" : "R" : u, P = M; P < A; ++P) f[P] = R;
                        M = A - 1
                    } for (var F, D = [], I = 0; I < c;)
                    if (r.test(f[I])) {
                        var W = I;
                        for (++I; I < c && r.test(f[I]); ++I);
                        D.push(new o(0, W, I))
                    } else {
                        var j = I,
                            H = D.length,
                            z = "rtl" == s ? 1 : 0;
                        for (++I; I < c && "L" != f[I]; ++I);
                        for (var B = j; B < I;)
                            if (i.test(f[B])) {
                                j < B && (D.splice(H, 0, new o(1, j, B)), H += z);
                                var U = B;
                                for (++B; B < I && i.test(f[B]); ++B);
                                D.splice(H, 0, new o(2, U, B)), H += z, j = B
                            } else ++B;
                        j < I && D.splice(H, 0, new o(1, j, I))
                    } return "ltr" == s && (1 == D[0].level && (F = a.match(/^\s+/)) && (D[0].from = F[0].length, D.unshift(new o(0, 0, F[0].length))), 1 == X(D).level && (F = a.match(/\s+$/)) && (X(D).to -= F[0].length, D.push(new o(0, c - F[0].length, c)))), "rtl" == s ? D.reverse() : D
            }
        }();

        function lt(t, e) {
            var n = t.order;
            return null == n && (n = t.order = ut(t.text, e)), n
        }
        var ct = [],
            ft = function(t, e, n) {
                if (t.addEventListener) t.addEventListener(e, n, !1);
                else if (t.attachEvent) t.attachEvent("on" + e, n);
                else {
                    var r = t._handlers || (t._handlers = {});
                    r[e] = (r[e] || ct).concat(n)
                }
            };

        function ht(t, e) {
            return t._handlers && t._handlers[e] || ct
        }

        function pt(t, e, n) {
            if (t.removeEventListener) t.removeEventListener(e, n, !1);
            else if (t.detachEvent) t.detachEvent("on" + e, n);
            else {
                var r = t._handlers,
                    i = r && r[e];
                if (i) {
                    var o = H(i, n);
                    o > -1 && (r[e] = i.slice(0, o).concat(i.slice(o + 1)))
                }
            }
        }

        function dt(t, e) {
            var n = ht(t, e);
            if (n.length)
                for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r)
        }

        function gt(t, e, n) {
            return "string" == typeof e && (e = {
                type: e,
                preventDefault: function() {
                    this.defaultPrevented = !0
                }
            }), dt(t, n || e.type, t, e), xt(e) || e.codemirrorIgnore
        }

        function vt(t) {
            var e = t._handlers && t._handlers.cursorActivity;
            if (e)
                for (var n = t.curOp.cursorActivityHandlers || (t.curOp.cursorActivityHandlers = []), r = 0; r < e.length; ++r) - 1 == H(n, e[r]) && n.push(e[r])
        }

        function _t(t, e) {
            return ht(t, e).length > 0
        }

        function mt(t) {
            t.prototype.on = function(t, e) {
                ft(this, t, e)
            }, t.prototype.off = function(t, e) {
                pt(this, t, e)
            }
        }

        function yt(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function bt(t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        }

        function xt(t) {
            return null != t.defaultPrevented ? t.defaultPrevented : 0 == t.returnValue
        }

        function wt(t) {
            yt(t), bt(t)
        }

        function kt(t) {
            return t.target || t.srcElement
        }

        function St(t) {
            var e = t.which;
            return null == e && (1 & t.button ? e = 1 : 2 & t.button ? e = 3 : 4 & t.button && (e = 2)), m && t.ctrlKey && 1 == e && (e = 3), e
        }
        var Ct, Tt, Ot = function() {
            if (a && s < 9) return !1;
            var t = L("div");
            return "draggable" in t || "dragDrop" in t
        }();

        function Et(t) {
            if (null == Ct) {
                var e = L("span", "​");
                E(t, L("span", [e, document.createTextNode("x")])), 0 != t.firstChild.offsetHeight && (Ct = e.offsetWidth <= 1 && e.offsetHeight > 2 && !(a && s < 8))
            }
            var n = Ct ? L("span", "​") : L("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
            return n.setAttribute("cm-text", ""), n
        }

        function Lt(t) {
            if (null != Tt) return Tt;
            var e = E(t, document.createTextNode("AخA")),
                n = C(e, 0, 1).getBoundingClientRect(),
                r = C(e, 1, 2).getBoundingClientRect();
            return O(t), !(!n || n.left == n.right) && (Tt = r.right - n.right < 3)
        }
        var Mt, At = 3 != "\n\nb".split(/\n/).length ? function(t) {
                for (var e = 0, n = [], r = t.length; e <= r;) {
                    var i = t.indexOf("\n", e); - 1 == i && (i = t.length);
                    var o = t.slice(e, "\r" == t.charAt(i - 1) ? i - 1 : i),
                        a = o.indexOf("\r"); - 1 != a ? (n.push(o.slice(0, a)), e += a + 1) : (n.push(o), e = i + 1)
                }
                return n
            } : function(t) {
                return t.split(/\r\n?|\n/)
            },
            Nt = window.getSelection ? function(t) {
                try {
                    return t.selectionStart != t.selectionEnd
                } catch (t) {
                    return !1
                }
            } : function(t) {
                var e;
                try {
                    e = t.ownerDocument.selection.createRange()
                } catch (t) {}
                return !(!e || e.parentElement() != t) && 0 != e.compareEndPoints("StartToEnd", e)
            },
            Rt = "oncopy" in (Mt = L("div")) || (Mt.setAttribute("oncopy", "return;"), "function" == typeof Mt.oncopy),
            Pt = null,
            Ft = {},
            Dt = {};

        function It(t, e) {
            arguments.length > 2 && (e.dependencies = Array.prototype.slice.call(arguments, 2)), Ft[t] = e
        }

        function Wt(t) {
            if ("string" == typeof t && Dt.hasOwnProperty(t)) t = Dt[t];
            else if (t && "string" == typeof t.name && Dt.hasOwnProperty(t.name)) {
                var e = Dt[t.name];
                "string" == typeof e && (e = {
                    name: e
                }), (t = J(e, t)).name = e.name
            } else {
                if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return Wt("application/xml");
                if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+json$/.test(t)) return Wt("application/json")
            }
            return "string" == typeof t ? {
                name: t
            } : t || {
                name: "null"
            }
        }

        function jt(t, e) {
            e = Wt(e);
            var n = Ft[e.name];
            if (!n) return jt(t, "text/plain");
            var r = n(t, e);
            if (Ht.hasOwnProperty(e.name)) {
                var i = Ht[e.name];
                for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o])
            }
            if (r.name = e.name, e.helperType && (r.helperType = e.helperType), e.modeProps)
                for (var a in e.modeProps) r[a] = e.modeProps[a];
            return r
        }
        var Ht = {};

        function zt(t, e) {
            I(e, Ht.hasOwnProperty(t) ? Ht[t] : Ht[t] = {})
        }

        function Bt(t, e) {
            if (!0 === e) return e;
            if (t.copyState) return t.copyState(e);
            var n = {};
            for (var r in e) {
                var i = e[r];
                i instanceof Array && (i = i.concat([])), n[r] = i
            }
            return n
        }

        function Ut(t, e) {
            for (var n; t.innerMode && (n = t.innerMode(e)) && n.mode != t;) e = n.state, t = n.mode;
            return n || {
                mode: t,
                state: e
            }
        }

        function Vt(t, e, n) {
            return !t.startState || t.startState(e, n)
        }
        var Kt = function(t, e, n) {
            this.pos = this.start = 0, this.string = t, this.tabSize = e || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n
        };

        function Gt(t, e) {
            if ((e -= t.first) < 0 || e >= t.size) throw new Error("There is no line " + (e + t.first) + " in the document.");
            for (var n = t; !n.lines;)
                for (var r = 0;; ++r) {
                    var i = n.children[r],
                        o = i.chunkSize();
                    if (e < o) {
                        n = i;
                        break
                    }
                    e -= o
                }
            return n.lines[e]
        }

        function $t(t, e, n) {
            var r = [],
                i = e.line;
            return t.iter(e.line, n.line + 1, (function(t) {
                var o = t.text;
                i == n.line && (o = o.slice(0, n.ch)), i == e.line && (o = o.slice(e.ch)), r.push(o), ++i
            })), r
        }

        function Xt(t, e, n) {
            var r = [];
            return t.iter(e, n, (function(t) {
                r.push(t.text)
            })), r
        }

        function qt(t, e) {
            var n = e - t.height;
            if (n)
                for (var r = t; r; r = r.parent) r.height += n
        }

        function Yt(t) {
            if (null == t.parent) return null;
            for (var e = t.parent, n = H(e.lines, t), r = e.parent; r; e = r, r = r.parent)
                for (var i = 0; r.children[i] != e; ++i) n += r.children[i].chunkSize();
            return n + e.first
        }

        function Jt(t, e) {
            var n = t.first;
            t: do {
                for (var r = 0; r < t.children.length; ++r) {
                    var i = t.children[r],
                        o = i.height;
                    if (e < o) {
                        t = i;
                        continue t
                    }
                    e -= o, n += i.chunkSize()
                }
                return n
            } while (!t.lines);
            for (var a = 0; a < t.lines.length; ++a) {
                var s = t.lines[a].height;
                if (e < s) break;
                e -= s
            }
            return n + a
        }

        function Qt(t, e) {
            return e >= t.first && e < t.first + t.size
        }

        function Zt(t, e) {
            return String(t.lineNumberFormatter(e + t.firstLineNumber))
        }

        function te(t, e, n) {
            if (void 0 === n && (n = null), !(this instanceof te)) return new te(t, e, n);
            this.line = t, this.ch = e, this.sticky = n
        }

        function ee(t, e) {
            return t.line - e.line || t.ch - e.ch
        }

        function ne(t, e) {
            return t.sticky == e.sticky && 0 == ee(t, e)
        }

        function re(t) {
            return te(t.line, t.ch)
        }

        function ie(t, e) {
            return ee(t, e) < 0 ? e : t
        }

        function oe(t, e) {
            return ee(t, e) < 0 ? t : e
        }

        function ae(t, e) {
            return Math.max(t.first, Math.min(e, t.first + t.size - 1))
        }

        function se(t, e) {
            if (e.line < t.first) return te(t.first, 0);
            var n = t.first + t.size - 1;
            return e.line > n ? te(n, Gt(t, n).text.length) : function(t, e) {
                var n = t.ch;
                return null == n || n > e ? te(t.line, e) : n < 0 ? te(t.line, 0) : t
            }(e, Gt(t, e.line).text.length)
        }

        function ue(t, e) {
            for (var n = [], r = 0; r < e.length; r++) n[r] = se(t, e[r]);
            return n
        }
        Kt.prototype.eol = function() {
            return this.pos >= this.string.length
        }, Kt.prototype.sol = function() {
            return this.pos == this.lineStart
        }, Kt.prototype.peek = function() {
            return this.string.charAt(this.pos) || void 0
        }, Kt.prototype.next = function() {
            if (this.pos < this.string.length) return this.string.charAt(this.pos++)
        }, Kt.prototype.eat = function(t) {
            var e = this.string.charAt(this.pos);
            if ("string" == typeof t ? e == t : e && (t.test ? t.test(e) : t(e))) return ++this.pos, e
        }, Kt.prototype.eatWhile = function(t) {
            for (var e = this.pos; this.eat(t););
            return this.pos > e
        }, Kt.prototype.eatSpace = function() {
            for (var t = this.pos;
                /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
            return this.pos > t
        }, Kt.prototype.skipToEnd = function() {
            this.pos = this.string.length
        }, Kt.prototype.skipTo = function(t) {
            var e = this.string.indexOf(t, this.pos);
            if (e > -1) return this.pos = e, !0
        }, Kt.prototype.backUp = function(t) {
            this.pos -= t
        }, Kt.prototype.column = function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = W(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0)
        }, Kt.prototype.indentation = function() {
            return W(this.string, null, this.tabSize) - (this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0)
        }, Kt.prototype.match = function(t, e, n) {
            if ("string" != typeof t) {
                var r = this.string.slice(this.pos).match(t);
                return r && r.index > 0 ? null : (r && !1 !== e && (this.pos += r[0].length), r)
            }
            var i = function(t) {
                return n ? t.toLowerCase() : t
            };
            if (i(this.string.substr(this.pos, t.length)) == i(t)) return !1 !== e && (this.pos += t.length), !0
        }, Kt.prototype.current = function() {
            return this.string.slice(this.start, this.pos)
        }, Kt.prototype.hideFirstChars = function(t, e) {
            this.lineStart += t;
            try {
                return e()
            } finally {
                this.lineStart -= t
            }
        }, Kt.prototype.lookAhead = function(t) {
            var e = this.lineOracle;
            return e && e.lookAhead(t)
        }, Kt.prototype.baseToken = function() {
            var t = this.lineOracle;
            return t && t.baseToken(this.pos)
        };
        var le = function(t, e) {
                this.state = t, this.lookAhead = e
            },
            ce = function(t, e, n, r) {
                this.state = e, this.doc = t, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1
            };

        function fe(t, e, n, r) {
            var i = [t.state.modeGen],
                o = {};
            be(t, e.text, t.doc.mode, n, (function(t, e) {
                return i.push(t, e)
            }), o, r);
            for (var a = n.state, s = function(r) {
                    n.baseTokens = i;
                    var s = t.state.overlays[r],
                        u = 1,
                        l = 0;
                    n.state = !0, be(t, e.text, s.mode, n, (function(t, e) {
                        for (var n = u; l < t;) {
                            var r = i[u];
                            r > t && i.splice(u, 1, t, i[u + 1], r), u += 2, l = Math.min(t, r)
                        }
                        if (e)
                            if (s.opaque) i.splice(n, u - n, t, "overlay " + e), u = n + 2;
                            else
                                for (; n < u; n += 2) {
                                    var o = i[n + 1];
                                    i[n + 1] = (o ? o + " " : "") + "overlay " + e
                                }
                    }), o), n.state = a, n.baseTokens = null, n.baseTokenPos = 1
                }, u = 0; u < t.state.overlays.length; ++u) s(u);
            return {
                styles: i,
                classes: o.bgClass || o.textClass ? o : null
            }
        }

        function he(t, e, n) {
            if (!e.styles || e.styles[0] != t.state.modeGen) {
                var r = pe(t, Yt(e)),
                    i = e.text.length > t.options.maxHighlightLength && Bt(t.doc.mode, r.state),
                    o = fe(t, e, r);
                i && (r.state = i), e.stateAfter = r.save(!i), e.styles = o.styles, o.classes ? e.styleClasses = o.classes : e.styleClasses && (e.styleClasses = null), n === t.doc.highlightFrontier && (t.doc.modeFrontier = Math.max(t.doc.modeFrontier, ++t.doc.highlightFrontier))
            }
            return e.styles
        }

        function pe(t, e, n) {
            var r = t.doc,
                i = t.display;
            if (!r.mode.startState) return new ce(r, !0, e);
            var o = function(t, e, n) {
                    for (var r, i, o = t.doc, a = n ? -1 : e - (t.doc.mode.innerMode ? 1e3 : 100), s = e; s > a; --s) {
                        if (s <= o.first) return o.first;
                        var u = Gt(o, s - 1),
                            l = u.stateAfter;
                        if (l && (!n || s + (l instanceof le ? l.lookAhead : 0) <= o.modeFrontier)) return s;
                        var c = W(u.text, null, t.options.tabSize);
                        (null == i || r > c) && (i = s - 1, r = c)
                    }
                    return i
                }(t, e, n),
                a = o > r.first && Gt(r, o - 1).stateAfter,
                s = a ? ce.fromSaved(r, a, o) : new ce(r, Vt(r.mode), o);
            return r.iter(o, e, (function(n) {
                de(t, n.text, s);
                var r = s.line;
                n.stateAfter = r == e - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? s.save() : null, s.nextLine()
            })), n && (r.modeFrontier = s.line), s
        }

        function de(t, e, n, r) {
            var i = t.doc.mode,
                o = new Kt(e, t.options.tabSize, n);
            for (o.start = o.pos = r || 0, "" == e && ge(i, n.state); !o.eol();) ve(i, o, n.state), o.start = o.pos
        }

        function ge(t, e) {
            if (t.blankLine) return t.blankLine(e);
            if (t.innerMode) {
                var n = Ut(t, e);
                return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
            }
        }

        function ve(t, e, n, r) {
            for (var i = 0; i < 10; i++) {
                r && (r[0] = Ut(t, n).mode);
                var o = t.token(e, n);
                if (e.pos > e.start) return o
            }
            throw new Error("Mode " + t.name + " failed to advance stream.")
        }
        ce.prototype.lookAhead = function(t) {
            var e = this.doc.getLine(this.line + t);
            return null != e && t > this.maxLookAhead && (this.maxLookAhead = t), e
        }, ce.prototype.baseToken = function(t) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= t;) this.baseTokenPos += 2;
            var e = this.baseTokens[this.baseTokenPos + 1];
            return {
                type: e && e.replace(/( |^)overlay .*/, ""),
                size: this.baseTokens[this.baseTokenPos] - t
            }
        }, ce.prototype.nextLine = function() {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
        }, ce.fromSaved = function(t, e, n) {
            return e instanceof le ? new ce(t, Bt(t.mode, e.state), n, e.lookAhead) : new ce(t, Bt(t.mode, e), n)
        }, ce.prototype.save = function(t) {
            var e = !1 !== t ? Bt(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new le(e, this.maxLookAhead) : e
        };
        var _e = function(t, e, n) {
            this.start = t.start, this.end = t.pos, this.string = t.current(), this.type = e || null, this.state = n
        };

        function me(t, e, n, r) {
            var i, o, a = t.doc,
                s = a.mode,
                u = Gt(a, (e = se(a, e)).line),
                l = pe(t, e.line, n),
                c = new Kt(u.text, t.options.tabSize, l);
            for (r && (o = []);
                (r || c.pos < e.ch) && !c.eol();) c.start = c.pos, i = ve(s, c, l.state), r && o.push(new _e(c, i, Bt(a.mode, l.state)));
            return r ? o : new _e(c, i, l.state)
        }

        function ye(t, e) {
            if (t)
                for (;;) {
                    var n = t.match(/(?:^|\s+)line-(background-)?(\S+)/);
                    if (!n) break;
                    t = t.slice(0, n.index) + t.slice(n.index + n[0].length);
                    var r = n[1] ? "bgClass" : "textClass";
                    null == e[r] ? e[r] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(e[r]) || (e[r] += " " + n[2])
                }
            return t
        }

        function be(t, e, n, r, i, o, a) {
            var s = n.flattenSpans;
            null == s && (s = t.options.flattenSpans);
            var u, l = 0,
                c = null,
                f = new Kt(e, t.options.tabSize, r),
                h = t.options.addModeClass && [null];
            for ("" == e && ye(ge(n, r.state), o); !f.eol();) {
                if (f.pos > t.options.maxHighlightLength ? (s = !1, a && de(t, e, r, f.pos), f.pos = e.length, u = null) : u = ye(ve(n, f, r.state, h), o), h) {
                    var p = h[0].name;
                    p && (u = "m-" + (u ? p + " " + u : p))
                }
                if (!s || c != u) {
                    for (; l < f.start;) i(l = Math.min(f.start, l + 5e3), c);
                    c = u
                }
                f.start = f.pos
            }
            for (; l < f.pos;) {
                var d = Math.min(f.pos, l + 5e3);
                i(d, c), l = d
            }
        }
        var xe = !1,
            we = !1;

        function ke(t, e, n) {
            this.marker = t, this.from = e, this.to = n
        }

        function Se(t, e) {
            if (t)
                for (var n = 0; n < t.length; ++n) {
                    var r = t[n];
                    if (r.marker == e) return r
                }
        }

        function Ce(t, e) {
            for (var n, r = 0; r < t.length; ++r) t[r] != e && (n || (n = [])).push(t[r]);
            return n
        }

        function Te(t, e) {
            if (e.full) return null;
            var n = Qt(t, e.from.line) && Gt(t, e.from.line).markedSpans,
                r = Qt(t, e.to.line) && Gt(t, e.to.line).markedSpans;
            if (!n && !r) return null;
            var i = e.from.ch,
                o = e.to.ch,
                a = 0 == ee(e.from, e.to),
                s = function(t, e, n) {
                    var r;
                    if (t)
                        for (var i = 0; i < t.length; ++i) {
                            var o = t[i],
                                a = o.marker;
                            if (null == o.from || (a.inclusiveLeft ? o.from <= e : o.from < e) || o.from == e && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
                                var s = null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e);
                                (r || (r = [])).push(new ke(a, o.from, s ? null : o.to))
                            }
                        }
                    return r
                }(n, i, a),
                u = function(t, e, n) {
                    var r;
                    if (t)
                        for (var i = 0; i < t.length; ++i) {
                            var o = t[i],
                                a = o.marker;
                            if (null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e) || o.from == e && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
                                var s = null == o.from || (a.inclusiveLeft ? o.from <= e : o.from < e);
                                (r || (r = [])).push(new ke(a, s ? null : o.from - e, null == o.to ? null : o.to - e))
                            }
                        }
                    return r
                }(r, o, a),
                l = 1 == e.text.length,
                c = X(e.text).length + (l ? i : 0);
            if (s)
                for (var f = 0; f < s.length; ++f) {
                    var h = s[f];
                    if (null == h.to) {
                        var p = Se(u, h.marker);
                        p ? l && (h.to = null == p.to ? null : p.to + c) : h.to = i
                    }
                }
            if (u)
                for (var d = 0; d < u.length; ++d) {
                    var g = u[d];
                    null != g.to && (g.to += c), null == g.from ? Se(s, g.marker) || (g.from = c, l && (s || (s = [])).push(g)) : (g.from += c, l && (s || (s = [])).push(g))
                }
            s && (s = Oe(s)), u && u != s && (u = Oe(u));
            var v = [s];
            if (!l) {
                var _, m = e.text.length - 2;
                if (m > 0 && s)
                    for (var y = 0; y < s.length; ++y) null == s[y].to && (_ || (_ = [])).push(new ke(s[y].marker, null, null));
                for (var b = 0; b < m; ++b) v.push(_);
                v.push(u)
            }
            return v
        }

        function Oe(t) {
            for (var e = 0; e < t.length; ++e) {
                var n = t[e];
                null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && t.splice(e--, 1)
            }
            return t.length ? t : null
        }

        function Ee(t) {
            var e = t.markedSpans;
            if (e) {
                for (var n = 0; n < e.length; ++n) e[n].marker.detachLine(t);
                t.markedSpans = null
            }
        }

        function Le(t, e) {
            if (e) {
                for (var n = 0; n < e.length; ++n) e[n].marker.attachLine(t);
                t.markedSpans = e
            }
        }

        function Me(t) {
            return t.inclusiveLeft ? -1 : 0
        }

        function Ae(t) {
            return t.inclusiveRight ? 1 : 0
        }

        function Ne(t, e) {
            var n = t.lines.length - e.lines.length;
            if (0 != n) return n;
            var r = t.find(),
                i = e.find(),
                o = ee(r.from, i.from) || Me(t) - Me(e);
            if (o) return -o;
            var a = ee(r.to, i.to) || Ae(t) - Ae(e);
            return a || e.id - t.id
        }

        function Re(t, e) {
            var n, r = we && t.markedSpans;
            if (r)
                for (var i = void 0, o = 0; o < r.length; ++o)(i = r[o]).marker.collapsed && null == (e ? i.from : i.to) && (!n || Ne(n, i.marker) < 0) && (n = i.marker);
            return n
        }

        function Pe(t) {
            return Re(t, !0)
        }

        function Fe(t) {
            return Re(t, !1)
        }

        function De(t, e) {
            var n, r = we && t.markedSpans;
            if (r)
                for (var i = 0; i < r.length; ++i) {
                    var o = r[i];
                    o.marker.collapsed && (null == o.from || o.from < e) && (null == o.to || o.to > e) && (!n || Ne(n, o.marker) < 0) && (n = o.marker)
                }
            return n
        }

        function Ie(t, e, n, r, i) {
            var o = Gt(t, e),
                a = we && o.markedSpans;
            if (a)
                for (var s = 0; s < a.length; ++s) {
                    var u = a[s];
                    if (u.marker.collapsed) {
                        var l = u.marker.find(0),
                            c = ee(l.from, n) || Me(u.marker) - Me(i),
                            f = ee(l.to, r) || Ae(u.marker) - Ae(i);
                        if (!(c >= 0 && f <= 0 || c <= 0 && f >= 0) && (c <= 0 && (u.marker.inclusiveRight && i.inclusiveLeft ? ee(l.to, n) >= 0 : ee(l.to, n) > 0) || c >= 0 && (u.marker.inclusiveRight && i.inclusiveLeft ? ee(l.from, r) <= 0 : ee(l.from, r) < 0))) return !0
                    }
                }
        }

        function We(t) {
            for (var e; e = Pe(t);) t = e.find(-1, !0).line;
            return t
        }

        function je(t, e) {
            var n = Gt(t, e),
                r = We(n);
            return n == r ? e : Yt(r)
        }

        function He(t, e) {
            if (e > t.lastLine()) return e;
            var n, r = Gt(t, e);
            if (!ze(t, r)) return e;
            for (; n = Fe(r);) r = n.find(1, !0).line;
            return Yt(r) + 1
        }

        function ze(t, e) {
            var n = we && e.markedSpans;
            if (n)
                for (var r = void 0, i = 0; i < n.length; ++i)
                    if ((r = n[i]).marker.collapsed) {
                        if (null == r.from) return !0;
                        if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Be(t, e, r)) return !0
                    }
        }

        function Be(t, e, n) {
            if (null == n.to) {
                var r = n.marker.find(1, !0);
                return Be(t, r.line, Se(r.line.markedSpans, n.marker))
            }
            if (n.marker.inclusiveRight && n.to == e.text.length) return !0;
            for (var i = void 0, o = 0; o < e.markedSpans.length; ++o)
                if ((i = e.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Be(t, e, i)) return !0
        }

        function Ue(t) {
            for (var e = 0, n = (t = We(t)).parent, r = 0; r < n.lines.length; ++r) {
                var i = n.lines[r];
                if (i == t) break;
                e += i.height
            }
            for (var o = n.parent; o; o = (n = o).parent)
                for (var a = 0; a < o.children.length; ++a) {
                    var s = o.children[a];
                    if (s == n) break;
                    e += s.height
                }
            return e
        }

        function Ve(t) {
            if (0 == t.height) return 0;
            for (var e, n = t.text.length, r = t; e = Pe(r);) {
                var i = e.find(0, !0);
                r = i.from.line, n += i.from.ch - i.to.ch
            }
            for (r = t; e = Fe(r);) {
                var o = e.find(0, !0);
                n -= r.text.length - o.from.ch, n += (r = o.to.line).text.length - o.to.ch
            }
            return n
        }

        function Ke(t) {
            var e = t.display,
                n = t.doc;
            e.maxLine = Gt(n, n.first), e.maxLineLength = Ve(e.maxLine), e.maxLineChanged = !0, n.iter((function(t) {
                var n = Ve(t);
                n > e.maxLineLength && (e.maxLineLength = n, e.maxLine = t)
            }))
        }
        var Ge = function(t, e, n) {
            this.text = t, Le(this, e), this.height = n ? n(this) : 1
        };

        function $e(t) {
            t.parent = null, Ee(t)
        }
        Ge.prototype.lineNo = function() {
            return Yt(this)
        }, mt(Ge);
        var Xe = {},
            qe = {};

        function Ye(t, e) {
            if (!t || /^\s*$/.test(t)) return null;
            var n = e.addModeClass ? qe : Xe;
            return n[t] || (n[t] = t.replace(/\S+/g, "cm-$&"))
        }

        function Je(t, e) {
            var n = M("span", null, null, u ? "padding-right: .1px" : null),
                r = {
                    pre: M("pre", [n], "CodeMirror-line"),
                    content: n,
                    col: 0,
                    pos: 0,
                    cm: t,
                    trailingSpace: !1,
                    splitSpaces: t.getOption("lineWrapping")
                };
            e.measure = {};
            for (var i = 0; i <= (e.rest ? e.rest.length : 0); i++) {
                var o = i ? e.rest[i - 1] : e.line,
                    a = void 0;
                r.pos = 0, r.addToken = Ze, Lt(t.display.measure) && (a = lt(o, t.doc.direction)) && (r.addToken = tn(r.addToken, a)), r.map = [], nn(o, r, he(t, o, e != t.display.externalMeasured && Yt(o))), o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = P(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = P(o.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Et(t.display.measure))), 0 == i ? (e.measure.map = r.map, e.measure.cache = {}) : ((e.measure.maps || (e.measure.maps = [])).push(r.map), (e.measure.caches || (e.measure.caches = [])).push({}))
            }
            if (u) {
                var s = r.content.lastChild;
                (/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
            }
            return dt(t, "renderLine", t, e.line, r.pre), r.pre.className && (r.textClass = P(r.pre.className, r.textClass || "")), r
        }

        function Qe(t) {
            var e = L("span", "•", "cm-invalidchar");
            return e.title = "\\u" + t.charCodeAt(0).toString(16), e.setAttribute("aria-label", e.title), e
        }

        function Ze(t, e, n, r, i, o, u) {
            if (e) {
                var l, c = t.splitSpaces ? function(t, e) {
                        if (t.length > 1 && !/  /.test(t)) return t;
                        for (var n = e, r = "", i = 0; i < t.length; i++) {
                            var o = t.charAt(i);
                            " " != o || !n || i != t.length - 1 && 32 != t.charCodeAt(i + 1) || (o = " "), r += o, n = " " == o
                        }
                        return r
                    }(e, t.trailingSpace) : e,
                    f = t.cm.state.specialChars,
                    h = !1;
                if (f.test(e)) {
                    l = document.createDocumentFragment();
                    for (var p = 0;;) {
                        f.lastIndex = p;
                        var d = f.exec(e),
                            g = d ? d.index - p : e.length - p;
                        if (g) {
                            var v = document.createTextNode(c.slice(p, p + g));
                            a && s < 9 ? l.appendChild(L("span", [v])) : l.appendChild(v), t.map.push(t.pos, t.pos + g, v), t.col += g, t.pos += g
                        }
                        if (!d) break;
                        p += g + 1;
                        var _ = void 0;
                        if ("\t" == d[0]) {
                            var m = t.cm.options.tabSize,
                                y = m - t.col % m;
                            (_ = l.appendChild(L("span", $(y), "cm-tab"))).setAttribute("role", "presentation"), _.setAttribute("cm-text", "\t"), t.col += y
                        } else "\r" == d[0] || "\n" == d[0] ? ((_ = l.appendChild(L("span", "\r" == d[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", d[0]), t.col += 1) : ((_ = t.cm.options.specialCharPlaceholder(d[0])).setAttribute("cm-text", d[0]), a && s < 9 ? l.appendChild(L("span", [_])) : l.appendChild(_), t.col += 1);
                        t.map.push(t.pos, t.pos + 1, _), t.pos++
                    }
                } else t.col += e.length, l = document.createTextNode(c), t.map.push(t.pos, t.pos + e.length, l), a && s < 9 && (h = !0), t.pos += e.length;
                if (t.trailingSpace = 32 == c.charCodeAt(e.length - 1), n || r || i || h || o || u) {
                    var b = n || "";
                    r && (b += r), i && (b += i);
                    var x = L("span", [l], b, o);
                    if (u)
                        for (var w in u) u.hasOwnProperty(w) && "style" != w && "class" != w && x.setAttribute(w, u[w]);
                    return t.content.appendChild(x)
                }
                t.content.appendChild(l)
            }
        }

        function tn(t, e) {
            return function(n, r, i, o, a, s, u) {
                i = i ? i + " cm-force-border" : "cm-force-border";
                for (var l = n.pos, c = l + r.length;;) {
                    for (var f = void 0, h = 0; h < e.length && !((f = e[h]).to > l && f.from <= l); h++);
                    if (f.to >= c) return t(n, r, i, o, a, s, u);
                    t(n, r.slice(0, f.to - l), i, o, null, s, u), o = null, r = r.slice(f.to - l), l = f.to
                }
            }
        }

        function en(t, e, n, r) {
            var i = !r && n.widgetNode;
            i && t.map.push(t.pos, t.pos + e, i), !r && t.cm.display.input.needsContentAttribute && (i || (i = t.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (t.cm.display.input.setUneditable(i), t.content.appendChild(i)), t.pos += e, t.trailingSpace = !1
        }

        function nn(t, e, n) {
            var r = t.markedSpans,
                i = t.text,
                o = 0;
            if (r)
                for (var a, s, u, l, c, f, h, p = i.length, d = 0, g = 1, v = "", _ = 0;;) {
                    if (_ == d) {
                        u = l = c = s = "", h = null, f = null, _ = 1 / 0;
                        for (var m = [], y = void 0, b = 0; b < r.length; ++b) {
                            var x = r[b],
                                w = x.marker;
                            if ("bookmark" == w.type && x.from == d && w.widgetNode) m.push(w);
                            else if (x.from <= d && (null == x.to || x.to > d || w.collapsed && x.to == d && x.from == d)) {
                                if (null != x.to && x.to != d && _ > x.to && (_ = x.to, l = ""), w.className && (u += " " + w.className), w.css && (s = (s ? s + ";" : "") + w.css), w.startStyle && x.from == d && (c += " " + w.startStyle), w.endStyle && x.to == _ && (y || (y = [])).push(w.endStyle, x.to), w.title && ((h || (h = {})).title = w.title), w.attributes)
                                    for (var k in w.attributes)(h || (h = {}))[k] = w.attributes[k];
                                w.collapsed && (!f || Ne(f.marker, w) < 0) && (f = x)
                            } else x.from > d && _ > x.from && (_ = x.from)
                        }
                        if (y)
                            for (var S = 0; S < y.length; S += 2) y[S + 1] == _ && (l += " " + y[S]);
                        if (!f || f.from == d)
                            for (var C = 0; C < m.length; ++C) en(e, 0, m[C]);
                        if (f && (f.from || 0) == d) {
                            if (en(e, (null == f.to ? p + 1 : f.to) - d, f.marker, null == f.from), null == f.to) return;
                            f.to == d && (f = !1)
                        }
                    }
                    if (d >= p) break;
                    for (var T = Math.min(p, _);;) {
                        if (v) {
                            var O = d + v.length;
                            if (!f) {
                                var E = O > T ? v.slice(0, T - d) : v;
                                e.addToken(e, E, a ? a + u : u, c, d + E.length == _ ? l : "", s, h)
                            }
                            if (O >= T) {
                                v = v.slice(T - d), d = T;
                                break
                            }
                            d = O, c = ""
                        }
                        v = i.slice(o, o = n[g++]), a = Ye(n[g++], e.cm.options)
                    }
                } else
                    for (var L = 1; L < n.length; L += 2) e.addToken(e, i.slice(o, o = n[L]), Ye(n[L + 1], e.cm.options))
        }

        function rn(t, e, n) {
            this.line = e, this.rest = function(t) {
                for (var e, n; e = Fe(t);) t = e.find(1, !0).line, (n || (n = [])).push(t);
                return n
            }(e), this.size = this.rest ? Yt(X(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = ze(t, e)
        }

        function on(t, e, n) {
            for (var r, i = [], o = e; o < n; o = r) {
                var a = new rn(t.doc, Gt(t.doc, o), o);
                r = o + a.size, i.push(a)
            }
            return i
        }
        var an = null,
            sn = null;

        function un(t, e) {
            var n = ht(t, e);
            if (n.length) {
                var r, i = Array.prototype.slice.call(arguments, 2);
                an ? r = an.delayedCallbacks : sn ? r = sn : (r = sn = [], setTimeout(ln, 0));
                for (var o = function(t) {
                        r.push((function() {
                            return n[t].apply(null, i)
                        }))
                    }, a = 0; a < n.length; ++a) o(a)
            }
        }

        function ln() {
            var t = sn;
            sn = null;
            for (var e = 0; e < t.length; ++e) t[e]()
        }

        function cn(t, e, n, r) {
            for (var i = 0; i < e.changes.length; i++) {
                var o = e.changes[i];
                "text" == o ? pn(t, e) : "gutter" == o ? gn(t, e, n, r) : "class" == o ? dn(t, e) : "widget" == o && vn(t, e, r)
            }
            e.changes = null
        }

        function fn(t) {
            return t.node == t.text && (t.node = L("div", null, null, "position: relative"), t.text.parentNode && t.text.parentNode.replaceChild(t.node, t.text), t.node.appendChild(t.text), a && s < 8 && (t.node.style.zIndex = 2)), t.node
        }

        function hn(t, e) {
            var n = t.display.externalMeasured;
            return n && n.line == e.line ? (t.display.externalMeasured = null, e.measure = n.measure, n.built) : Je(t, e)
        }

        function pn(t, e) {
            var n = e.text.className,
                r = hn(t, e);
            e.text == e.node && (e.node = r.pre), e.text.parentNode.replaceChild(r.pre, e.text), e.text = r.pre, r.bgClass != e.bgClass || r.textClass != e.textClass ? (e.bgClass = r.bgClass, e.textClass = r.textClass, dn(t, e)) : n && (e.text.className = n)
        }

        function dn(t, e) {
            ! function(t, e) {
                var n = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
                if (n && (n += " CodeMirror-linebackground"), e.background) n ? e.background.className = n : (e.background.parentNode.removeChild(e.background), e.background = null);
                else if (n) {
                    var r = fn(e);
                    e.background = r.insertBefore(L("div", null, n), r.firstChild), t.display.input.setUneditable(e.background)
                }
            }(t, e), e.line.wrapClass ? fn(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
            var n = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
            e.text.className = n || ""
        }

        function gn(t, e, n, r) {
            if (e.gutter && (e.node.removeChild(e.gutter), e.gutter = null), e.gutterBackground && (e.node.removeChild(e.gutterBackground), e.gutterBackground = null), e.line.gutterClass) {
                var i = fn(e);
                e.gutterBackground = L("div", null, "CodeMirror-gutter-background " + e.line.gutterClass, "left: " + (t.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), t.display.input.setUneditable(e.gutterBackground), i.insertBefore(e.gutterBackground, e.text)
            }
            var o = e.line.gutterMarkers;
            if (t.options.lineNumbers || o) {
                var a = fn(e),
                    s = e.gutter = L("div", null, "CodeMirror-gutter-wrapper", "left: " + (t.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
                if (t.display.input.setUneditable(s), a.insertBefore(s, e.text), e.line.gutterClass && (s.className += " " + e.line.gutterClass), !t.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (e.lineNumber = s.appendChild(L("div", Zt(t.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + t.display.lineNumInnerWidth + "px"))), o)
                    for (var u = 0; u < t.display.gutterSpecs.length; ++u) {
                        var l = t.display.gutterSpecs[u].className,
                            c = o.hasOwnProperty(l) && o[l];
                        c && s.appendChild(L("div", [c], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[l] + "px; width: " + r.gutterWidth[l] + "px"))
                    }
            }
        }

        function vn(t, e, n) {
            e.alignable && (e.alignable = null);
            for (var r = S("CodeMirror-linewidget"), i = e.node.firstChild, o = void 0; i; i = o) o = i.nextSibling, r.test(i.className) && e.node.removeChild(i);
            mn(t, e, n)
        }

        function _n(t, e, n, r) {
            var i = hn(t, e);
            return e.text = e.node = i.pre, i.bgClass && (e.bgClass = i.bgClass), i.textClass && (e.textClass = i.textClass), dn(t, e), gn(t, e, n, r), mn(t, e, r), e.node
        }

        function mn(t, e, n) {
            if (yn(t, e.line, e, n, !0), e.rest)
                for (var r = 0; r < e.rest.length; r++) yn(t, e.rest[r], e, n, !1)
        }

        function yn(t, e, n, r, i) {
            if (e.widgets)
                for (var o = fn(n), a = 0, s = e.widgets; a < s.length; ++a) {
                    var u = s[a],
                        l = L("div", [u.node], "CodeMirror-linewidget" + (u.className ? " " + u.className : ""));
                    u.handleMouseEvents || l.setAttribute("cm-ignore-events", "true"), bn(u, l, n, r), t.display.input.setUneditable(l), i && u.above ? o.insertBefore(l, n.gutter || n.text) : o.appendChild(l), un(u, "redraw")
                }
        }

        function bn(t, e, n, r) {
            if (t.noHScroll) {
                (n.alignable || (n.alignable = [])).push(e);
                var i = r.wrapperWidth;
                e.style.left = r.fixedPos + "px", t.coverGutter || (i -= r.gutterTotalWidth, e.style.paddingLeft = r.gutterTotalWidth + "px"), e.style.width = i + "px"
            }
            t.coverGutter && (e.style.zIndex = 5, e.style.position = "relative", t.noHScroll || (e.style.marginLeft = -r.gutterTotalWidth + "px"))
        }

        function xn(t) {
            if (null != t.height) return t.height;
            var e = t.doc.cm;
            if (!e) return 0;
            if (!A(document.body, t.node)) {
                var n = "position: relative;";
                t.coverGutter && (n += "margin-left: -" + e.display.gutters.offsetWidth + "px;"), t.noHScroll && (n += "width: " + e.display.wrapper.clientWidth + "px;"), E(e.display.measure, L("div", [t.node], null, n))
            }
            return t.height = t.node.parentNode.offsetHeight
        }

        function wn(t, e) {
            for (var n = kt(e); n != t.wrapper; n = n.parentNode)
                if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == t.sizer && n != t.mover) return !0
        }

        function kn(t) {
            return t.lineSpace.offsetTop
        }

        function Sn(t) {
            return t.mover.offsetHeight - t.lineSpace.offsetHeight
        }

        function Cn(t) {
            if (t.cachedPaddingH) return t.cachedPaddingH;
            var e = E(t.measure, L("pre", "x", "CodeMirror-line-like")),
                n = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle,
                r = {
                    left: parseInt(n.paddingLeft),
                    right: parseInt(n.paddingRight)
                };
            return isNaN(r.left) || isNaN(r.right) || (t.cachedPaddingH = r), r
        }

        function Tn(t) {
            return 50 - t.display.nativeBarWidth
        }

        function On(t) {
            return t.display.scroller.clientWidth - Tn(t) - t.display.barWidth
        }

        function En(t) {
            return t.display.scroller.clientHeight - Tn(t) - t.display.barHeight
        }

        function Ln(t, e, n) {
            if (t.line == e) return {
                map: t.measure.map,
                cache: t.measure.cache
            };
            for (var r = 0; r < t.rest.length; r++)
                if (t.rest[r] == e) return {
                    map: t.measure.maps[r],
                    cache: t.measure.caches[r]
                };
            for (var i = 0; i < t.rest.length; i++)
                if (Yt(t.rest[i]) > n) return {
                    map: t.measure.maps[i],
                    cache: t.measure.caches[i],
                    before: !0
                }
        }

        function Mn(t, e, n, r) {
            return Rn(t, Nn(t, e), n, r)
        }

        function An(t, e) {
            if (e >= t.display.viewFrom && e < t.display.viewTo) return t.display.view[cr(t, e)];
            var n = t.display.externalMeasured;
            return n && e >= n.lineN && e < n.lineN + n.size ? n : void 0
        }

        function Nn(t, e) {
            var n = Yt(e),
                r = An(t, n);
            r && !r.text ? r = null : r && r.changes && (cn(t, r, n, or(t)), t.curOp.forceUpdate = !0), r || (r = function(t, e) {
                var n = Yt(e = We(e)),
                    r = t.display.externalMeasured = new rn(t.doc, e, n);
                r.lineN = n;
                var i = r.built = Je(t, r);
                return r.text = i.pre, E(t.display.lineMeasure, i.pre), r
            }(t, e));
            var i = Ln(r, e, n);
            return {
                line: e,
                view: r,
                rect: null,
                map: i.map,
                cache: i.cache,
                before: i.before,
                hasHeights: !1
            }
        }

        function Rn(t, e, n, r, i) {
            e.before && (n = -1);
            var o, u = n + (r || "");
            return e.cache.hasOwnProperty(u) ? o = e.cache[u] : (e.rect || (e.rect = e.view.text.getBoundingClientRect()), e.hasHeights || (function(t, e, n) {
                var r = t.options.lineWrapping,
                    i = r && On(t);
                if (!e.measure.heights || r && e.measure.width != i) {
                    var o = e.measure.heights = [];
                    if (r) {
                        e.measure.width = i;
                        for (var a = e.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                            var u = a[s],
                                l = a[s + 1];
                            Math.abs(u.bottom - l.bottom) > 2 && o.push((u.bottom + l.top) / 2 - n.top)
                        }
                    }
                    o.push(n.bottom - n.top)
                }
            }(t, e.view, e.rect), e.hasHeights = !0), (o = function(t, e, n, r) {
                var i, o = Dn(e.map, n, r),
                    u = o.node,
                    l = o.start,
                    c = o.end,
                    f = o.collapse;
                if (3 == u.nodeType) {
                    for (var h = 0; h < 4; h++) {
                        for (; l && rt(e.line.text.charAt(o.coverStart + l));) --l;
                        for (; o.coverStart + c < o.coverEnd && rt(e.line.text.charAt(o.coverStart + c));) ++c;
                        if ((i = a && s < 9 && 0 == l && c == o.coverEnd - o.coverStart ? u.parentNode.getBoundingClientRect() : In(C(u, l, c).getClientRects(), r)).left || i.right || 0 == l) break;
                        c = l, l -= 1, f = "right"
                    }
                    a && s < 11 && (i = function(t, e) {
                        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || ! function(t) {
                                if (null != Pt) return Pt;
                                var e = E(t, L("span", "x")),
                                    n = e.getBoundingClientRect(),
                                    r = C(e, 0, 1).getBoundingClientRect();
                                return Pt = Math.abs(n.left - r.left) > 1
                            }(t)) return e;
                        var n = screen.logicalXDPI / screen.deviceXDPI,
                            r = screen.logicalYDPI / screen.deviceYDPI;
                        return {
                            left: e.left * n,
                            right: e.right * n,
                            top: e.top * r,
                            bottom: e.bottom * r
                        }
                    }(t.display.measure, i))
                } else {
                    var p;
                    l > 0 && (f = r = "right"), i = t.options.lineWrapping && (p = u.getClientRects()).length > 1 ? p["right" == r ? p.length - 1 : 0] : u.getBoundingClientRect()
                }
                if (a && s < 9 && !l && (!i || !i.left && !i.right)) {
                    var d = u.parentNode.getClientRects()[0];
                    i = d ? {
                        left: d.left,
                        right: d.left + ir(t.display),
                        top: d.top,
                        bottom: d.bottom
                    } : Fn
                }
                for (var g = i.top - e.rect.top, v = i.bottom - e.rect.top, _ = (g + v) / 2, m = e.view.measure.heights, y = 0; y < m.length - 1 && !(_ < m[y]); y++);
                var b = y ? m[y - 1] : 0,
                    x = m[y],
                    w = {
                        left: ("right" == f ? i.right : i.left) - e.rect.left,
                        right: ("left" == f ? i.left : i.right) - e.rect.left,
                        top: b,
                        bottom: x
                    };
                return i.left || i.right || (w.bogus = !0), t.options.singleCursorHeightPerLine || (w.rtop = g, w.rbottom = v), w
            }(t, e, n, r)).bogus || (e.cache[u] = o)), {
                left: o.left,
                right: o.right,
                top: i ? o.rtop : o.top,
                bottom: i ? o.rbottom : o.bottom
            }
        }
        var Pn, Fn = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };

        function Dn(t, e, n) {
            for (var r, i, o, a, s, u, l = 0; l < t.length; l += 3)
                if (s = t[l], u = t[l + 1], e < s ? (i = 0, o = 1, a = "left") : e < u ? o = 1 + (i = e - s) : (l == t.length - 3 || e == u && t[l + 3] > e) && (i = (o = u - s) - 1, e >= u && (a = "right")), null != i) {
                    if (r = t[l + 2], s == u && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i)
                        for (; l && t[l - 2] == t[l - 3] && t[l - 1].insertLeft;) r = t[2 + (l -= 3)], a = "left";
                    if ("right" == n && i == u - s)
                        for (; l < t.length - 3 && t[l + 3] == t[l + 4] && !t[l + 5].insertLeft;) r = t[(l += 3) + 2], a = "right";
                    break
                } return {
                node: r,
                start: i,
                end: o,
                collapse: a,
                coverStart: s,
                coverEnd: u
            }
        }

        function In(t, e) {
            var n = Fn;
            if ("left" == e)
                for (var r = 0; r < t.length && (n = t[r]).left == n.right; r++);
            else
                for (var i = t.length - 1; i >= 0 && (n = t[i]).left == n.right; i--);
            return n
        }

        function Wn(t) {
            if (t.measure && (t.measure.cache = {}, t.measure.heights = null, t.rest))
                for (var e = 0; e < t.rest.length; e++) t.measure.caches[e] = {}
        }

        function jn(t) {
            t.display.externalMeasure = null, O(t.display.lineMeasure);
            for (var e = 0; e < t.display.view.length; e++) Wn(t.display.view[e])
        }

        function Hn(t) {
            jn(t), t.display.cachedCharWidth = t.display.cachedTextHeight = t.display.cachedPaddingH = null, t.options.lineWrapping || (t.display.maxLineChanged = !0), t.display.lineNumChars = null
        }

        function zn() {
            return c && v ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
        }

        function Bn() {
            return c && v ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
        }

        function Un(t) {
            var e = 0;
            if (t.widgets)
                for (var n = 0; n < t.widgets.length; ++n) t.widgets[n].above && (e += xn(t.widgets[n]));
            return e
        }

        function Vn(t, e, n, r, i) {
            if (!i) {
                var o = Un(e);
                n.top += o, n.bottom += o
            }
            if ("line" == r) return n;
            r || (r = "local");
            var a = Ue(e);
            if ("local" == r ? a += kn(t.display) : a -= t.display.viewOffset, "page" == r || "window" == r) {
                var s = t.display.lineSpace.getBoundingClientRect();
                a += s.top + ("window" == r ? 0 : Bn());
                var u = s.left + ("window" == r ? 0 : zn());
                n.left += u, n.right += u
            }
            return n.top += a, n.bottom += a, n
        }

        function Kn(t, e, n) {
            if ("div" == n) return e;
            var r = e.left,
                i = e.top;
            if ("page" == n) r -= zn(), i -= Bn();
            else if ("local" == n || !n) {
                var o = t.display.sizer.getBoundingClientRect();
                r += o.left, i += o.top
            }
            var a = t.display.lineSpace.getBoundingClientRect();
            return {
                left: r - a.left,
                top: i - a.top
            }
        }

        function Gn(t, e, n, r, i) {
            return r || (r = Gt(t.doc, e.line)), Vn(t, r, Mn(t, r, e.ch, i), n)
        }

        function $n(t, e, n, r, i, o) {
            function a(e, a) {
                var s = Rn(t, i, e, a ? "right" : "left", o);
                return a ? s.left = s.right : s.right = s.left, Vn(t, r, s, n)
            }
            r = r || Gt(t.doc, e.line), i || (i = Nn(t, r));
            var s = lt(r, t.doc.direction),
                u = e.ch,
                l = e.sticky;
            if (u >= r.text.length ? (u = r.text.length, l = "before") : u <= 0 && (u = 0, l = "after"), !s) return a("before" == l ? u - 1 : u, "before" == l);

            function c(t, e, n) {
                return a(n ? t - 1 : t, 1 == s[e].level != n)
            }
            var f = st(s, u, l),
                h = at,
                p = c(u, f, "before" == l);
            return null != h && (p.other = c(u, h, "before" != l)), p
        }

        function Xn(t, e) {
            var n = 0;
            e = se(t.doc, e), t.options.lineWrapping || (n = ir(t.display) * e.ch);
            var r = Gt(t.doc, e.line),
                i = Ue(r) + kn(t.display);
            return {
                left: n,
                right: n,
                top: i,
                bottom: i + r.height
            }
        }

        function qn(t, e, n, r, i) {
            var o = te(t, e, n);
            return o.xRel = i, r && (o.outside = r), o
        }

        function Yn(t, e, n) {
            var r = t.doc;
            if ((n += t.display.viewOffset) < 0) return qn(r.first, 0, null, -1, -1);
            var i = Jt(r, n),
                o = r.first + r.size - 1;
            if (i > o) return qn(r.first + r.size - 1, Gt(r, o).text.length, null, 1, 1);
            e < 0 && (e = 0);
            for (var a = Gt(r, i);;) {
                var s = tr(t, a, i, e, n),
                    u = De(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
                if (!u) return s;
                var l = u.find(1);
                if (l.line == i) return l;
                a = Gt(r, i = l.line)
            }
        }

        function Jn(t, e, n, r) {
            r -= Un(e);
            var i = e.text.length,
                o = ot((function(e) {
                    return Rn(t, n, e - 1).bottom <= r
                }), i, 0);
            return {
                begin: o,
                end: i = ot((function(e) {
                    return Rn(t, n, e).top > r
                }), o, i)
            }
        }

        function Qn(t, e, n, r) {
            return n || (n = Nn(t, e)), Jn(t, e, n, Vn(t, e, Rn(t, n, r), "line").top)
        }

        function Zn(t, e, n, r) {
            return !(t.bottom <= n) && (t.top > n || (r ? t.left : t.right) > e)
        }

        function tr(t, e, n, r, i) {
            i -= Ue(e);
            var o = Nn(t, e),
                a = Un(e),
                s = 0,
                u = e.text.length,
                l = !0,
                c = lt(e, t.doc.direction);
            if (c) {
                var f = (t.options.lineWrapping ? nr : er)(t, e, n, o, c, r, i);
                s = (l = 1 != f.level) ? f.from : f.to - 1, u = l ? f.to : f.from - 1
            }
            var h, p, d = null,
                g = null,
                v = ot((function(e) {
                    var n = Rn(t, o, e);
                    return n.top += a, n.bottom += a, !!Zn(n, r, i, !1) && (n.top <= i && n.left <= r && (d = e, g = n), !0)
                }), s, u),
                _ = !1;
            if (g) {
                var m = r - g.left < g.right - r,
                    y = m == l;
                v = d + (y ? 0 : 1), p = y ? "after" : "before", h = m ? g.left : g.right
            } else {
                l || v != u && v != s || v++, p = 0 == v ? "after" : v == e.text.length ? "before" : Rn(t, o, v - (l ? 1 : 0)).bottom + a <= i == l ? "after" : "before";
                var b = $n(t, te(n, v, p), "line", e, o);
                h = b.left, _ = i < b.top ? -1 : i >= b.bottom ? 1 : 0
            }
            return qn(n, v = it(e.text, v, 1), p, _, r - h)
        }

        function er(t, e, n, r, i, o, a) {
            var s = ot((function(s) {
                    var u = i[s],
                        l = 1 != u.level;
                    return Zn($n(t, te(n, l ? u.to : u.from, l ? "before" : "after"), "line", e, r), o, a, !0)
                }), 0, i.length - 1),
                u = i[s];
            if (s > 0) {
                var l = 1 != u.level,
                    c = $n(t, te(n, l ? u.from : u.to, l ? "after" : "before"), "line", e, r);
                Zn(c, o, a, !0) && c.top > a && (u = i[s - 1])
            }
            return u
        }

        function nr(t, e, n, r, i, o, a) {
            var s = Jn(t, e, r, a),
                u = s.begin,
                l = s.end;
            /\s/.test(e.text.charAt(l - 1)) && l--;
            for (var c = null, f = null, h = 0; h < i.length; h++) {
                var p = i[h];
                if (!(p.from >= l || p.to <= u)) {
                    var d = Rn(t, r, 1 != p.level ? Math.min(l, p.to) - 1 : Math.max(u, p.from)).right,
                        g = d < o ? o - d + 1e9 : d - o;
                    (!c || f > g) && (c = p, f = g)
                }
            }
            return c || (c = i[i.length - 1]), c.from < u && (c = {
                from: u,
                to: c.to,
                level: c.level
            }), c.to > l && (c = {
                from: c.from,
                to: l,
                level: c.level
            }), c
        }

        function rr(t) {
            if (null != t.cachedTextHeight) return t.cachedTextHeight;
            if (null == Pn) {
                Pn = L("pre", null, "CodeMirror-line-like");
                for (var e = 0; e < 49; ++e) Pn.appendChild(document.createTextNode("x")), Pn.appendChild(L("br"));
                Pn.appendChild(document.createTextNode("x"))
            }
            E(t.measure, Pn);
            var n = Pn.offsetHeight / 50;
            return n > 3 && (t.cachedTextHeight = n), O(t.measure), n || 1
        }

        function ir(t) {
            if (null != t.cachedCharWidth) return t.cachedCharWidth;
            var e = L("span", "xxxxxxxxxx"),
                n = L("pre", [e], "CodeMirror-line-like");
            E(t.measure, n);
            var r = e.getBoundingClientRect(),
                i = (r.right - r.left) / 10;
            return i > 2 && (t.cachedCharWidth = i), i || 10
        }

        function or(t) {
            for (var e = t.display, n = {}, r = {}, i = e.gutters.clientLeft, o = e.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
                var s = t.display.gutterSpecs[a].className;
                n[s] = o.offsetLeft + o.clientLeft + i, r[s] = o.clientWidth
            }
            return {
                fixedPos: ar(e),
                gutterTotalWidth: e.gutters.offsetWidth,
                gutterLeft: n,
                gutterWidth: r,
                wrapperWidth: e.wrapper.clientWidth
            }
        }

        function ar(t) {
            return t.scroller.getBoundingClientRect().left - t.sizer.getBoundingClientRect().left
        }

        function sr(t) {
            var e = rr(t.display),
                n = t.options.lineWrapping,
                r = n && Math.max(5, t.display.scroller.clientWidth / ir(t.display) - 3);
            return function(i) {
                if (ze(t.doc, i)) return 0;
                var o = 0;
                if (i.widgets)
                    for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
                return n ? o + (Math.ceil(i.text.length / r) || 1) * e : o + e
            }
        }

        function ur(t) {
            var e = t.doc,
                n = sr(t);
            e.iter((function(t) {
                var e = n(t);
                e != t.height && qt(t, e)
            }))
        }

        function lr(t, e, n, r) {
            var i = t.display;
            if (!n && "true" == kt(e).getAttribute("cm-not-content")) return null;
            var o, a, s = i.lineSpace.getBoundingClientRect();
            try {
                o = e.clientX - s.left, a = e.clientY - s.top
            } catch (t) {
                return null
            }
            var u, l = Yn(t, o, a);
            if (r && l.xRel > 0 && (u = Gt(t.doc, l.line).text).length == l.ch) {
                var c = W(u, u.length, t.options.tabSize) - u.length;
                l = te(l.line, Math.max(0, Math.round((o - Cn(t.display).left) / ir(t.display)) - c))
            }
            return l
        }

        function cr(t, e) {
            if (e >= t.display.viewTo) return null;
            if ((e -= t.display.viewFrom) < 0) return null;
            for (var n = t.display.view, r = 0; r < n.length; r++)
                if ((e -= n[r].size) < 0) return r
        }

        function fr(t, e, n, r) {
            null == e && (e = t.doc.first), null == n && (n = t.doc.first + t.doc.size), r || (r = 0);
            var i = t.display;
            if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > e) && (i.updateLineNumbers = e), t.curOp.viewChanged = !0, e >= i.viewTo) we && je(t.doc, e) < i.viewTo && pr(t);
            else if (n <= i.viewFrom) we && He(t.doc, n + r) > i.viewFrom ? pr(t) : (i.viewFrom += r, i.viewTo += r);
            else if (e <= i.viewFrom && n >= i.viewTo) pr(t);
            else if (e <= i.viewFrom) {
                var o = dr(t, n, n + r, 1);
                o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : pr(t)
            } else if (n >= i.viewTo) {
                var a = dr(t, e, e, -1);
                a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : pr(t)
            } else {
                var s = dr(t, e, e, -1),
                    u = dr(t, n, n + r, 1);
                s && u ? (i.view = i.view.slice(0, s.index).concat(on(t, s.lineN, u.lineN)).concat(i.view.slice(u.index)), i.viewTo += r) : pr(t)
            }
            var l = i.externalMeasured;
            l && (n < l.lineN ? l.lineN += r : e < l.lineN + l.size && (i.externalMeasured = null))
        }

        function hr(t, e, n) {
            t.curOp.viewChanged = !0;
            var r = t.display,
                i = t.display.externalMeasured;
            if (i && e >= i.lineN && e < i.lineN + i.size && (r.externalMeasured = null), !(e < r.viewFrom || e >= r.viewTo)) {
                var o = r.view[cr(t, e)];
                if (null != o.node) {
                    var a = o.changes || (o.changes = []); - 1 == H(a, n) && a.push(n)
                }
            }
        }

        function pr(t) {
            t.display.viewFrom = t.display.viewTo = t.doc.first, t.display.view = [], t.display.viewOffset = 0
        }

        function dr(t, e, n, r) {
            var i, o = cr(t, e),
                a = t.display.view;
            if (!we || n == t.doc.first + t.doc.size) return {
                index: o,
                lineN: n
            };
            for (var s = t.display.viewFrom, u = 0; u < o; u++) s += a[u].size;
            if (s != e) {
                if (r > 0) {
                    if (o == a.length - 1) return null;
                    i = s + a[o].size - e, o++
                } else i = s - e;
                e += i, n += i
            }
            for (; je(t.doc, n) != n;) {
                if (o == (r < 0 ? 0 : a.length - 1)) return null;
                n += r * a[o - (r < 0 ? 1 : 0)].size, o += r
            }
            return {
                index: o,
                lineN: n
            }
        }

        function gr(t) {
            for (var e = t.display.view, n = 0, r = 0; r < e.length; r++) {
                var i = e[r];
                i.hidden || i.node && !i.changes || ++n
            }
            return n
        }

        function vr(t) {
            t.display.input.showSelection(t.display.input.prepareSelection())
        }

        function _r(t, e) {
            void 0 === e && (e = !0);
            for (var n = t.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++)
                if (e || a != n.sel.primIndex) {
                    var s = n.sel.ranges[a];
                    if (!(s.from().line >= t.display.viewTo || s.to().line < t.display.viewFrom)) {
                        var u = s.empty();
                        (u || t.options.showCursorWhenSelecting) && mr(t, s.head, i), u || br(t, s, o)
                    }
                } return r
        }

        function mr(t, e, n) {
            var r = $n(t, e, "div", null, null, !t.options.singleCursorHeightPerLine),
                i = n.appendChild(L("div", " ", "CodeMirror-cursor"));
            if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * t.options.cursorHeight + "px", r.other) {
                var o = n.appendChild(L("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                o.style.display = "", o.style.left = r.other.left + "px", o.style.top = r.other.top + "px", o.style.height = .85 * (r.other.bottom - r.other.top) + "px"
            }
        }

        function yr(t, e) {
            return t.top - e.top || t.left - e.left
        }

        function br(t, e, n) {
            var r = t.display,
                i = t.doc,
                o = document.createDocumentFragment(),
                a = Cn(t.display),
                s = a.left,
                u = Math.max(r.sizerWidth, On(t) - r.sizer.offsetLeft) - a.right,
                l = "ltr" == i.direction;

            function c(t, e, n, r) {
                e < 0 && (e = 0), e = Math.round(e), r = Math.round(r), o.appendChild(L("div", null, "CodeMirror-selected", "position: absolute; left: " + t + "px;\n                             top: " + e + "px; width: " + (null == n ? u - t : n) + "px;\n                             height: " + (r - e) + "px"))
            }

            function f(e, n, r) {
                var o, a, f = Gt(i, e),
                    h = f.text.length;

                function p(n, r) {
                    return Gn(t, te(e, n), "div", f, r)
                }

                function d(e, n, r) {
                    var i = Qn(t, f, null, e),
                        o = "ltr" == n == ("after" == r) ? "left" : "right";
                    return p("after" == r ? i.begin : i.end - (/\s/.test(f.text.charAt(i.end - 1)) ? 2 : 1), o)[o]
                }
                var g = lt(f, i.direction);
                return function(t, e, n, r) {
                    if (!t) return r(e, n, "ltr", 0);
                    for (var i = !1, o = 0; o < t.length; ++o) {
                        var a = t[o];
                        (a.from < n && a.to > e || e == n && a.to == e) && (r(Math.max(a.from, e), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o), i = !0)
                    }
                    i || r(e, n, "ltr")
                }(g, n || 0, null == r ? h : r, (function(t, e, i, f) {
                    var v = "ltr" == i,
                        _ = p(t, v ? "left" : "right"),
                        m = p(e - 1, v ? "right" : "left"),
                        y = null == n && 0 == t,
                        b = null == r && e == h,
                        x = 0 == f,
                        w = !g || f == g.length - 1;
                    if (m.top - _.top <= 3) {
                        var k = (l ? b : y) && w,
                            S = (l ? y : b) && x ? s : (v ? _ : m).left,
                            C = k ? u : (v ? m : _).right;
                        c(S, _.top, C - S, _.bottom)
                    } else {
                        var T, O, E, L;
                        v ? (T = l && y && x ? s : _.left, O = l ? u : d(t, i, "before"), E = l ? s : d(e, i, "after"), L = l && b && w ? u : m.right) : (T = l ? d(t, i, "before") : s, O = !l && y && x ? u : _.right, E = !l && b && w ? s : m.left, L = l ? d(e, i, "after") : u), c(T, _.top, O - T, _.bottom), _.bottom < m.top && c(s, _.bottom, null, m.top), c(E, m.top, L - E, m.bottom)
                    }(!o || yr(_, o) < 0) && (o = _), yr(m, o) < 0 && (o = m), (!a || yr(_, a) < 0) && (a = _), yr(m, a) < 0 && (a = m)
                })), {
                    start: o,
                    end: a
                }
            }
            var h = e.from(),
                p = e.to();
            if (h.line == p.line) f(h.line, h.ch, p.ch);
            else {
                var d = Gt(i, h.line),
                    g = Gt(i, p.line),
                    v = We(d) == We(g),
                    _ = f(h.line, h.ch, v ? d.text.length + 1 : null).end,
                    m = f(p.line, v ? 0 : null, p.ch).start;
                v && (_.top < m.top - 2 ? (c(_.right, _.top, null, _.bottom), c(s, m.top, m.left, m.bottom)) : c(_.right, _.top, m.left - _.right, _.bottom)), _.bottom < m.top && c(s, _.bottom, null, m.top)
            }
            n.appendChild(o)
        }

        function xr(t) {
            if (t.state.focused) {
                var e = t.display;
                clearInterval(e.blinker);
                var n = !0;
                e.cursorDiv.style.visibility = "", t.options.cursorBlinkRate > 0 ? e.blinker = setInterval((function() {
                    t.hasFocus() || Cr(t), e.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                }), t.options.cursorBlinkRate) : t.options.cursorBlinkRate < 0 && (e.cursorDiv.style.visibility = "hidden")
            }
        }

        function wr(t) {
            t.state.focused || (t.display.input.focus(), Sr(t))
        }

        function kr(t) {
            t.state.delayingBlurEvent = !0, setTimeout((function() {
                t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1, Cr(t))
            }), 100)
        }

        function Sr(t, e) {
            t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1), "nocursor" != t.options.readOnly && (t.state.focused || (dt(t, "focus", t, e), t.state.focused = !0, R(t.display.wrapper, "CodeMirror-focused"), t.curOp || t.display.selForContextMenu == t.doc.sel || (t.display.input.reset(), u && setTimeout((function() {
                return t.display.input.reset(!0)
            }), 20)), t.display.input.receivedFocus()), xr(t))
        }

        function Cr(t, e) {
            t.state.delayingBlurEvent || (t.state.focused && (dt(t, "blur", t, e), t.state.focused = !1, T(t.display.wrapper, "CodeMirror-focused")), clearInterval(t.display.blinker), setTimeout((function() {
                t.state.focused || (t.display.shift = !1)
            }), 150))
        }

        function Tr(t) {
            for (var e = t.display, n = e.lineDiv.offsetTop, r = 0; r < e.view.length; r++) {
                var i = e.view[r],
                    o = t.options.lineWrapping,
                    u = void 0,
                    l = 0;
                if (!i.hidden) {
                    if (a && s < 8) {
                        var c = i.node.offsetTop + i.node.offsetHeight;
                        u = c - n, n = c
                    } else {
                        var f = i.node.getBoundingClientRect();
                        u = f.bottom - f.top, !o && i.text.firstChild && (l = i.text.firstChild.getBoundingClientRect().right - f.left - 1)
                    }
                    var h = i.line.height - u;
                    if ((h > .005 || h < -.005) && (qt(i.line, u), Or(i.line), i.rest))
                        for (var p = 0; p < i.rest.length; p++) Or(i.rest[p]);
                    if (l > t.display.sizerWidth) {
                        var d = Math.ceil(l / ir(t.display));
                        d > t.display.maxLineLength && (t.display.maxLineLength = d, t.display.maxLine = i.line, t.display.maxLineChanged = !0)
                    }
                }
            }
        }

        function Or(t) {
            if (t.widgets)
                for (var e = 0; e < t.widgets.length; ++e) {
                    var n = t.widgets[e],
                        r = n.node.parentNode;
                    r && (n.height = r.offsetHeight)
                }
        }

        function Er(t, e, n) {
            var r = n && null != n.top ? Math.max(0, n.top) : t.scroller.scrollTop;
            r = Math.floor(r - kn(t));
            var i = n && null != n.bottom ? n.bottom : r + t.wrapper.clientHeight,
                o = Jt(e, r),
                a = Jt(e, i);
            if (n && n.ensure) {
                var s = n.ensure.from.line,
                    u = n.ensure.to.line;
                s < o ? (o = s, a = Jt(e, Ue(Gt(e, s)) + t.wrapper.clientHeight)) : Math.min(u, e.lastLine()) >= a && (o = Jt(e, Ue(Gt(e, u)) - t.wrapper.clientHeight), a = u)
            }
            return {
                from: o,
                to: Math.max(a, o + 1)
            }
        }

        function Lr(t, e) {
            var n = t.display,
                r = rr(t.display);
            e.top < 0 && (e.top = 0);
            var i = t.curOp && null != t.curOp.scrollTop ? t.curOp.scrollTop : n.scroller.scrollTop,
                o = En(t),
                a = {};
            e.bottom - e.top > o && (e.bottom = e.top + o);
            var s = t.doc.height + Sn(n),
                u = e.top < r,
                l = e.bottom > s - r;
            if (e.top < i) a.scrollTop = u ? 0 : e.top;
            else if (e.bottom > i + o) {
                var c = Math.min(e.top, (l ? s : e.bottom) - o);
                c != i && (a.scrollTop = c)
            }
            var f = t.curOp && null != t.curOp.scrollLeft ? t.curOp.scrollLeft : n.scroller.scrollLeft,
                h = On(t) - (t.options.fixedGutter ? n.gutters.offsetWidth : 0),
                p = e.right - e.left > h;
            return p && (e.right = e.left + h), e.left < 10 ? a.scrollLeft = 0 : e.left < f ? a.scrollLeft = Math.max(0, e.left - (p ? 0 : 10)) : e.right > h + f - 3 && (a.scrollLeft = e.right + (p ? 0 : 10) - h), a
        }

        function Mr(t, e) {
            null != e && (Rr(t), t.curOp.scrollTop = (null == t.curOp.scrollTop ? t.doc.scrollTop : t.curOp.scrollTop) + e)
        }

        function Ar(t) {
            Rr(t);
            var e = t.getCursor();
            t.curOp.scrollToPos = {
                from: e,
                to: e,
                margin: t.options.cursorScrollMargin
            }
        }

        function Nr(t, e, n) {
            null == e && null == n || Rr(t), null != e && (t.curOp.scrollLeft = e), null != n && (t.curOp.scrollTop = n)
        }

        function Rr(t) {
            var e = t.curOp.scrollToPos;
            e && (t.curOp.scrollToPos = null, Pr(t, Xn(t, e.from), Xn(t, e.to), e.margin))
        }

        function Pr(t, e, n, r) {
            var i = Lr(t, {
                left: Math.min(e.left, n.left),
                top: Math.min(e.top, n.top) - r,
                right: Math.max(e.right, n.right),
                bottom: Math.max(e.bottom, n.bottom) + r
            });
            Nr(t, i.scrollLeft, i.scrollTop)
        }

        function Fr(t, e) {
            Math.abs(t.doc.scrollTop - e) < 2 || (n || ui(t, {
                top: e
            }), Dr(t, e, !0), n && ui(t), ri(t, 100))
        }

        function Dr(t, e, n) {
            e = Math.max(0, Math.min(t.display.scroller.scrollHeight - t.display.scroller.clientHeight, e)), (t.display.scroller.scrollTop != e || n) && (t.doc.scrollTop = e, t.display.scrollbars.setScrollTop(e), t.display.scroller.scrollTop != e && (t.display.scroller.scrollTop = e))
        }

        function Ir(t, e, n, r) {
            e = Math.max(0, Math.min(e, t.display.scroller.scrollWidth - t.display.scroller.clientWidth)), (n ? e == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - e) < 2) && !r || (t.doc.scrollLeft = e, fi(t), t.display.scroller.scrollLeft != e && (t.display.scroller.scrollLeft = e), t.display.scrollbars.setScrollLeft(e))
        }

        function Wr(t) {
            var e = t.display,
                n = e.gutters.offsetWidth,
                r = Math.round(t.doc.height + Sn(t.display));
            return {
                clientHeight: e.scroller.clientHeight,
                viewHeight: e.wrapper.clientHeight,
                scrollWidth: e.scroller.scrollWidth,
                clientWidth: e.scroller.clientWidth,
                viewWidth: e.wrapper.clientWidth,
                barLeft: t.options.fixedGutter ? n : 0,
                docHeight: r,
                scrollHeight: r + Tn(t) + e.barHeight,
                nativeBarWidth: e.nativeBarWidth,
                gutterWidth: n
            }
        }
        var jr = function(t, e, n) {
            this.cm = n;
            var r = this.vert = L("div", [L("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                i = this.horiz = L("div", [L("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
            r.tabIndex = i.tabIndex = -1, t(r), t(i), ft(r, "scroll", (function() {
                r.clientHeight && e(r.scrollTop, "vertical")
            })), ft(i, "scroll", (function() {
                i.clientWidth && e(i.scrollLeft, "horizontal")
            })), this.checkedZeroWidth = !1, a && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
        };
        jr.prototype.update = function(t) {
            var e = t.scrollWidth > t.clientWidth + 1,
                n = t.scrollHeight > t.clientHeight + 1,
                r = t.nativeBarWidth;
            if (n) {
                this.vert.style.display = "block", this.vert.style.bottom = e ? r + "px" : "0";
                var i = t.viewHeight - (e ? r : 0);
                this.vert.firstChild.style.height = Math.max(0, t.scrollHeight - t.clientHeight + i) + "px"
            } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
            if (e) {
                this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = t.barLeft + "px";
                var o = t.viewWidth - t.barLeft - (n ? r : 0);
                this.horiz.firstChild.style.width = Math.max(0, t.scrollWidth - t.clientWidth + o) + "px"
            } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
            return !this.checkedZeroWidth && t.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                right: n ? r : 0,
                bottom: e ? r : 0
            }
        }, jr.prototype.setScrollLeft = function(t) {
            this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
        }, jr.prototype.setScrollTop = function(t) {
            this.vert.scrollTop != t && (this.vert.scrollTop = t), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
        }, jr.prototype.zeroWidthHack = function() {
            var t = m && !p ? "12px" : "18px";
            this.horiz.style.height = this.vert.style.width = t, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new j, this.disableVert = new j
        }, jr.prototype.enableZeroWidthBar = function(t, e, n) {
            t.style.pointerEvents = "auto", e.set(1e3, (function r() {
                var i = t.getBoundingClientRect();
                ("vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != t ? t.style.pointerEvents = "none" : e.set(1e3, r)
            }))
        }, jr.prototype.clear = function() {
            var t = this.horiz.parentNode;
            t.removeChild(this.horiz), t.removeChild(this.vert)
        };
        var Hr = function() {};

        function zr(t, e) {
            e || (e = Wr(t));
            var n = t.display.barWidth,
                r = t.display.barHeight;
            Br(t, e);
            for (var i = 0; i < 4 && n != t.display.barWidth || r != t.display.barHeight; i++) n != t.display.barWidth && t.options.lineWrapping && Tr(t), Br(t, Wr(t)), n = t.display.barWidth, r = t.display.barHeight
        }

        function Br(t, e) {
            var n = t.display,
                r = n.scrollbars.update(e);
            n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && t.options.coverGutterNextToScrollbar && t.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = e.gutterWidth + "px") : n.gutterFiller.style.display = ""
        }
        Hr.prototype.update = function() {
            return {
                bottom: 0,
                right: 0
            }
        }, Hr.prototype.setScrollLeft = function() {}, Hr.prototype.setScrollTop = function() {}, Hr.prototype.clear = function() {};
        var Ur = {
            native: jr,
            null: Hr
        };

        function Vr(t) {
            t.display.scrollbars && (t.display.scrollbars.clear(), t.display.scrollbars.addClass && T(t.display.wrapper, t.display.scrollbars.addClass)), t.display.scrollbars = new Ur[t.options.scrollbarStyle]((function(e) {
                t.display.wrapper.insertBefore(e, t.display.scrollbarFiller), ft(e, "mousedown", (function() {
                    t.state.focused && setTimeout((function() {
                        return t.display.input.focus()
                    }), 0)
                })), e.setAttribute("cm-not-content", "true")
            }), (function(e, n) {
                "horizontal" == n ? Ir(t, e) : Fr(t, e)
            }), t), t.display.scrollbars.addClass && R(t.display.wrapper, t.display.scrollbars.addClass)
        }
        var Kr = 0;

        function Gr(t) {
            var e;
            t.curOp = {
                cm: t,
                viewChanged: !1,
                startHeight: t.doc.height,
                forceUpdate: !1,
                updateInput: 0,
                typing: !1,
                changeObjs: null,
                cursorActivityHandlers: null,
                cursorActivityCalled: 0,
                selectionChanged: !1,
                updateMaxLine: !1,
                scrollLeft: null,
                scrollTop: null,
                scrollToPos: null,
                focus: !1,
                id: ++Kr
            }, e = t.curOp, an ? an.ops.push(e) : e.ownsGroup = an = {
                ops: [e],
                delayedCallbacks: []
            }
        }

        function $r(t) {
            var e = t.curOp;
            e && function(t, e) {
                var n = t.ownsGroup;
                if (n) try {
                    ! function(t) {
                        var e = t.delayedCallbacks,
                            n = 0;
                        do {
                            for (; n < e.length; n++) e[n].call(null);
                            for (var r = 0; r < t.ops.length; r++) {
                                var i = t.ops[r];
                                if (i.cursorActivityHandlers)
                                    for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                            }
                        } while (n < e.length)
                    }(n)
                } finally {
                    an = null, e(n)
                }
            }(e, (function(t) {
                for (var e = 0; e < t.ops.length; e++) t.ops[e].cm.curOp = null;
                ! function(t) {
                    for (var e = t.ops, n = 0; n < e.length; n++) Xr(e[n]);
                    for (var r = 0; r < e.length; r++) qr(e[r]);
                    for (var i = 0; i < e.length; i++) Yr(e[i]);
                    for (var o = 0; o < e.length; o++) Jr(e[o]);
                    for (var a = 0; a < e.length; a++) Qr(e[a])
                }(t)
            }))
        }

        function Xr(t) {
            var e = t.cm,
                n = e.display;
            ! function(t) {
                var e = t.display;
                !e.scrollbarsClipped && e.scroller.offsetWidth && (e.nativeBarWidth = e.scroller.offsetWidth - e.scroller.clientWidth, e.heightForcer.style.height = Tn(t) + "px", e.sizer.style.marginBottom = -e.nativeBarWidth + "px", e.sizer.style.borderRightWidth = Tn(t) + "px", e.scrollbarsClipped = !0)
            }(e), t.updateMaxLine && Ke(e), t.mustUpdate = t.viewChanged || t.forceUpdate || null != t.scrollTop || t.scrollToPos && (t.scrollToPos.from.line < n.viewFrom || t.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && e.options.lineWrapping, t.update = t.mustUpdate && new oi(e, t.mustUpdate && {
                top: t.scrollTop,
                ensure: t.scrollToPos
            }, t.forceUpdate)
        }

        function qr(t) {
            t.updatedDisplay = t.mustUpdate && ai(t.cm, t.update)
        }

        function Yr(t) {
            var e = t.cm,
                n = e.display;
            t.updatedDisplay && Tr(e), t.barMeasure = Wr(e), n.maxLineChanged && !e.options.lineWrapping && (t.adjustWidthTo = Mn(e, n.maxLine, n.maxLine.text.length).left + 3, e.display.sizerWidth = t.adjustWidthTo, t.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + t.adjustWidthTo + Tn(e) + e.display.barWidth), t.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + t.adjustWidthTo - On(e))), (t.updatedDisplay || t.selectionChanged) && (t.preparedSelection = n.input.prepareSelection())
        }

        function Jr(t) {
            var e = t.cm;
            null != t.adjustWidthTo && (e.display.sizer.style.minWidth = t.adjustWidthTo + "px", t.maxScrollLeft < e.doc.scrollLeft && Ir(e, Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft), !0), e.display.maxLineChanged = !1);
            var n = t.focus && t.focus == N();
            t.preparedSelection && e.display.input.showSelection(t.preparedSelection, n), (t.updatedDisplay || t.startHeight != e.doc.height) && zr(e, t.barMeasure), t.updatedDisplay && ci(e, t.barMeasure), t.selectionChanged && xr(e), e.state.focused && t.updateInput && e.display.input.reset(t.typing), n && wr(t.cm)
        }

        function Qr(t) {
            var e = t.cm,
                n = e.display,
                r = e.doc;
            t.updatedDisplay && si(e, t.update), null == n.wheelStartX || null == t.scrollTop && null == t.scrollLeft && !t.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != t.scrollTop && Dr(e, t.scrollTop, t.forceScroll), null != t.scrollLeft && Ir(e, t.scrollLeft, !0, !0), t.scrollToPos && function(t, e) {
                if (!gt(t, "scrollCursorIntoView")) {
                    var n = t.display,
                        r = n.sizer.getBoundingClientRect(),
                        i = null;
                    if (e.top + r.top < 0 ? i = !0 : e.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !d) {
                        var o = L("div", "​", null, "position: absolute;\n                         top: " + (e.top - n.viewOffset - kn(t.display)) + "px;\n                         height: " + (e.bottom - e.top + Tn(t) + n.barHeight) + "px;\n                         left: " + e.left + "px; width: " + Math.max(2, e.right - e.left) + "px;");
                        t.display.lineSpace.appendChild(o), o.scrollIntoView(i), t.display.lineSpace.removeChild(o)
                    }
                }
            }(e, function(t, e, n, r) {
                var i;
                null == r && (r = 0), t.options.lineWrapping || e != n || (n = "before" == (e = e.ch ? te(e.line, "before" == e.sticky ? e.ch - 1 : e.ch, "after") : e).sticky ? te(e.line, e.ch + 1, "before") : e);
                for (var o = 0; o < 5; o++) {
                    var a = !1,
                        s = $n(t, e),
                        u = n && n != e ? $n(t, n) : s,
                        l = Lr(t, i = {
                            left: Math.min(s.left, u.left),
                            top: Math.min(s.top, u.top) - r,
                            right: Math.max(s.left, u.left),
                            bottom: Math.max(s.bottom, u.bottom) + r
                        }),
                        c = t.doc.scrollTop,
                        f = t.doc.scrollLeft;
                    if (null != l.scrollTop && (Fr(t, l.scrollTop), Math.abs(t.doc.scrollTop - c) > 1 && (a = !0)), null != l.scrollLeft && (Ir(t, l.scrollLeft), Math.abs(t.doc.scrollLeft - f) > 1 && (a = !0)), !a) break
                }
                return i
            }(e, se(r, t.scrollToPos.from), se(r, t.scrollToPos.to), t.scrollToPos.margin));
            var i = t.maybeHiddenMarkers,
                o = t.maybeUnhiddenMarkers;
            if (i)
                for (var a = 0; a < i.length; ++a) i[a].lines.length || dt(i[a], "hide");
            if (o)
                for (var s = 0; s < o.length; ++s) o[s].lines.length && dt(o[s], "unhide");
            n.wrapper.offsetHeight && (r.scrollTop = e.display.scroller.scrollTop), t.changeObjs && dt(e, "changes", e, t.changeObjs), t.update && t.update.finish()
        }

        function Zr(t, e) {
            if (t.curOp) return e();
            Gr(t);
            try {
                return e()
            } finally {
                $r(t)
            }
        }

        function ti(t, e) {
            return function() {
                if (t.curOp) return e.apply(t, arguments);
                Gr(t);
                try {
                    return e.apply(t, arguments)
                } finally {
                    $r(t)
                }
            }
        }

        function ei(t) {
            return function() {
                if (this.curOp) return t.apply(this, arguments);
                Gr(this);
                try {
                    return t.apply(this, arguments)
                } finally {
                    $r(this)
                }
            }
        }

        function ni(t) {
            return function() {
                var e = this.cm;
                if (!e || e.curOp) return t.apply(this, arguments);
                Gr(e);
                try {
                    return t.apply(this, arguments)
                } finally {
                    $r(e)
                }
            }
        }

        function ri(t, e) {
            t.doc.highlightFrontier < t.display.viewTo && t.state.highlight.set(e, D(ii, t))
        }

        function ii(t) {
            var e = t.doc;
            if (!(e.highlightFrontier >= t.display.viewTo)) {
                var n = +new Date + t.options.workTime,
                    r = pe(t, e.highlightFrontier),
                    i = [];
                e.iter(r.line, Math.min(e.first + e.size, t.display.viewTo + 500), (function(o) {
                    if (r.line >= t.display.viewFrom) {
                        var a = o.styles,
                            s = o.text.length > t.options.maxHighlightLength ? Bt(e.mode, r.state) : null,
                            u = fe(t, o, r, !0);
                        s && (r.state = s), o.styles = u.styles;
                        var l = o.styleClasses,
                            c = u.classes;
                        c ? o.styleClasses = c : l && (o.styleClasses = null);
                        for (var f = !a || a.length != o.styles.length || l != c && (!l || !c || l.bgClass != c.bgClass || l.textClass != c.textClass), h = 0; !f && h < a.length; ++h) f = a[h] != o.styles[h];
                        f && i.push(r.line), o.stateAfter = r.save(), r.nextLine()
                    } else o.text.length <= t.options.maxHighlightLength && de(t, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
                    if (+new Date > n) return ri(t, t.options.workDelay), !0
                })), e.highlightFrontier = r.line, e.modeFrontier = Math.max(e.modeFrontier, r.line), i.length && Zr(t, (function() {
                    for (var e = 0; e < i.length; e++) hr(t, i[e], "text")
                }))
            }
        }
        var oi = function(t, e, n) {
            var r = t.display;
            this.viewport = e, this.visible = Er(r, t.doc, e), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = On(t), this.force = n, this.dims = or(t), this.events = []
        };

        function ai(t, e) {
            var n = t.display,
                r = t.doc;
            if (e.editorIsHidden) return pr(t), !1;
            if (!e.force && e.visible.from >= n.viewFrom && e.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == gr(t)) return !1;
            hi(t) && (pr(t), e.dims = or(t));
            var i = r.first + r.size,
                o = Math.max(e.visible.from - t.options.viewportMargin, r.first),
                a = Math.min(i, e.visible.to + t.options.viewportMargin);
            n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)), we && (o = je(t.doc, o), a = He(t.doc, a));
            var s = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != e.wrapperHeight || n.lastWrapWidth != e.wrapperWidth;
            ! function(t, e, n) {
                var r = t.display;
                0 == r.view.length || e >= r.viewTo || n <= r.viewFrom ? (r.view = on(t, e, n), r.viewFrom = e) : (r.viewFrom > e ? r.view = on(t, e, r.viewFrom).concat(r.view) : r.viewFrom < e && (r.view = r.view.slice(cr(t, e))), r.viewFrom = e, r.viewTo < n ? r.view = r.view.concat(on(t, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, cr(t, n)))), r.viewTo = n
            }(t, o, a), n.viewOffset = Ue(Gt(t.doc, n.viewFrom)), t.display.mover.style.top = n.viewOffset + "px";
            var l = gr(t);
            if (!s && 0 == l && !e.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;
            var c = function(t) {
                if (t.hasFocus()) return null;
                var e = N();
                if (!e || !A(t.display.lineDiv, e)) return null;
                var n = {
                    activeElt: e
                };
                if (window.getSelection) {
                    var r = window.getSelection();
                    r.anchorNode && r.extend && A(t.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset)
                }
                return n
            }(t);
            return l > 4 && (n.lineDiv.style.display = "none"),
                function(t, e, n) {
                    var r = t.display,
                        i = t.options.lineNumbers,
                        o = r.lineDiv,
                        a = o.firstChild;

                    function s(e) {
                        var n = e.nextSibling;
                        return u && m && t.display.currentWheelTarget == e ? e.style.display = "none" : e.parentNode.removeChild(e), n
                    }
                    for (var l = r.view, c = r.viewFrom, f = 0; f < l.length; f++) {
                        var h = l[f];
                        if (h.hidden);
                        else if (h.node && h.node.parentNode == o) {
                            for (; a != h.node;) a = s(a);
                            var p = i && null != e && e <= c && h.lineNumber;
                            h.changes && (H(h.changes, "gutter") > -1 && (p = !1), cn(t, h, c, n)), p && (O(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(Zt(t.options, c)))), a = h.node.nextSibling
                        } else {
                            var d = _n(t, h, c, n);
                            o.insertBefore(d, a)
                        }
                        c += h.size
                    }
                    for (; a;) a = s(a)
                }(t, n.updateLineNumbers, e.dims), l > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view,
                function(t) {
                    if (t && t.activeElt && t.activeElt != N() && (t.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(t.activeElt.nodeName) && t.anchorNode && A(document.body, t.anchorNode) && A(document.body, t.focusNode))) {
                        var e = window.getSelection(),
                            n = document.createRange();
                        n.setEnd(t.anchorNode, t.anchorOffset), n.collapse(!1), e.removeAllRanges(), e.addRange(n), e.extend(t.focusNode, t.focusOffset)
                    }
                }(c), O(n.cursorDiv), O(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, s && (n.lastWrapHeight = e.wrapperHeight, n.lastWrapWidth = e.wrapperWidth, ri(t, 400)), n.updateLineNumbers = null, !0
        }

        function si(t, e) {
            for (var n = e.viewport, r = !0;; r = !1) {
                if (r && t.options.lineWrapping && e.oldDisplayWidth != On(t)) r && (e.visible = Er(t.display, t.doc, n));
                else if (n && null != n.top && (n = {
                        top: Math.min(t.doc.height + Sn(t.display) - En(t), n.top)
                    }), e.visible = Er(t.display, t.doc, n), e.visible.from >= t.display.viewFrom && e.visible.to <= t.display.viewTo) break;
                if (!ai(t, e)) break;
                Tr(t);
                var i = Wr(t);
                vr(t), zr(t, i), ci(t, i), e.force = !1
            }
            e.signal(t, "update", t), t.display.viewFrom == t.display.reportedViewFrom && t.display.viewTo == t.display.reportedViewTo || (e.signal(t, "viewportChange", t, t.display.viewFrom, t.display.viewTo), t.display.reportedViewFrom = t.display.viewFrom, t.display.reportedViewTo = t.display.viewTo)
        }

        function ui(t, e) {
            var n = new oi(t, e);
            if (ai(t, n)) {
                Tr(t), si(t, n);
                var r = Wr(t);
                vr(t), zr(t, r), ci(t, r), n.finish()
            }
        }

        function li(t) {
            var e = t.gutters.offsetWidth;
            t.sizer.style.marginLeft = e + "px"
        }

        function ci(t, e) {
            t.display.sizer.style.minHeight = e.docHeight + "px", t.display.heightForcer.style.top = e.docHeight + "px", t.display.gutters.style.height = e.docHeight + t.display.barHeight + Tn(t) + "px"
        }

        function fi(t) {
            var e = t.display,
                n = e.view;
            if (e.alignWidgets || e.gutters.firstChild && t.options.fixedGutter) {
                for (var r = ar(e) - e.scroller.scrollLeft + t.doc.scrollLeft, i = e.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++)
                    if (!n[a].hidden) {
                        t.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                        var s = n[a].alignable;
                        if (s)
                            for (var u = 0; u < s.length; u++) s[u].style.left = o
                    } t.options.fixedGutter && (e.gutters.style.left = r + i + "px")
            }
        }

        function hi(t) {
            if (!t.options.lineNumbers) return !1;
            var e = t.doc,
                n = Zt(t.options, e.first + e.size - 1),
                r = t.display;
            if (n.length != r.lineNumChars) {
                var i = r.measure.appendChild(L("div", [L("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                    o = i.firstChild.offsetWidth,
                    a = i.offsetWidth - o;
                return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1, r.lineNumWidth = r.lineNumInnerWidth + a, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", li(t.display), !0
            }
            return !1
        }

        function pi(t, e) {
            for (var n = [], r = !1, i = 0; i < t.length; i++) {
                var o = t[i],
                    a = null;
                if ("string" != typeof o && (a = o.style, o = o.className), "CodeMirror-linenumbers" == o) {
                    if (!e) continue;
                    r = !0
                }
                n.push({
                    className: o,
                    style: a
                })
            }
            return e && !r && n.push({
                className: "CodeMirror-linenumbers",
                style: null
            }), n
        }

        function di(t) {
            var e = t.gutters,
                n = t.gutterSpecs;
            O(e), t.lineGutter = null;
            for (var r = 0; r < n.length; ++r) {
                var i = n[r],
                    o = i.className,
                    a = i.style,
                    s = e.appendChild(L("div", null, "CodeMirror-gutter " + o));
                a && (s.style.cssText = a), "CodeMirror-linenumbers" == o && (t.lineGutter = s, s.style.width = (t.lineNumWidth || 1) + "px")
            }
            e.style.display = n.length ? "" : "none", li(t)
        }

        function gi(t) {
            di(t.display), fr(t), fi(t)
        }

        function vi(t, e, r, i) {
            var o = this;
            this.input = r, o.scrollbarFiller = L("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = L("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = M("div", null, "CodeMirror-code"), o.selectionDiv = L("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = L("div", null, "CodeMirror-cursors"), o.measure = L("div", null, "CodeMirror-measure"), o.lineMeasure = L("div", null, "CodeMirror-measure"), o.lineSpace = M("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
            var l = M("div", [o.lineSpace], "CodeMirror-lines");
            o.mover = L("div", [l], null, "position: relative"), o.sizer = L("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = L("div", null, null, "position: absolute; height: 50px; width: 1px;"), o.gutters = L("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = L("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = L("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), a && s < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), u || n && _ || (o.scroller.draggable = !0), t && (t.appendChild ? t.appendChild(o.wrapper) : t(o.wrapper)), o.viewFrom = o.viewTo = e.first, o.reportedViewFrom = o.reportedViewTo = e.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, o.gutterSpecs = pi(i.gutters, i.lineNumbers), di(o), r.init(o)
        }
        oi.prototype.signal = function(t, e) {
            _t(t, e) && this.events.push(arguments)
        }, oi.prototype.finish = function() {
            for (var t = 0; t < this.events.length; t++) dt.apply(null, this.events[t])
        };
        var _i = 0,
            mi = null;

        function yi(t) {
            var e = t.wheelDeltaX,
                n = t.wheelDeltaY;
            return null == e && t.detail && t.axis == t.HORIZONTAL_AXIS && (e = t.detail), null == n && t.detail && t.axis == t.VERTICAL_AXIS ? n = t.detail : null == n && (n = t.wheelDelta), {
                x: e,
                y: n
            }
        }

        function bi(t) {
            var e = yi(t);
            return e.x *= mi, e.y *= mi, e
        }

        function xi(t, e) {
            var r = yi(e),
                i = r.x,
                o = r.y,
                a = t.display,
                s = a.scroller,
                l = s.scrollWidth > s.clientWidth,
                c = s.scrollHeight > s.clientHeight;
            if (i && l || o && c) {
                if (o && m && u) t: for (var h = e.target, p = a.view; h != s; h = h.parentNode)
                    for (var d = 0; d < p.length; d++)
                        if (p[d].node == h) {
                            t.display.currentWheelTarget = h;
                            break t
                        } if (i && !n && !f && null != mi) return o && c && Fr(t, Math.max(0, s.scrollTop + o * mi)), Ir(t, Math.max(0, s.scrollLeft + i * mi)), (!o || o && c) && yt(e), void(a.wheelStartX = null);
                if (o && null != mi) {
                    var g = o * mi,
                        v = t.doc.scrollTop,
                        _ = v + a.wrapper.clientHeight;
                    g < 0 ? v = Math.max(0, v + g - 50) : _ = Math.min(t.doc.height, _ + g + 50), ui(t, {
                        top: v,
                        bottom: _
                    })
                }
                _i < 20 && (null == a.wheelStartX ? (a.wheelStartX = s.scrollLeft, a.wheelStartY = s.scrollTop, a.wheelDX = i, a.wheelDY = o, setTimeout((function() {
                    if (null != a.wheelStartX) {
                        var t = s.scrollLeft - a.wheelStartX,
                            e = s.scrollTop - a.wheelStartY,
                            n = e && a.wheelDY && e / a.wheelDY || t && a.wheelDX && t / a.wheelDX;
                        a.wheelStartX = a.wheelStartY = null, n && (mi = (mi * _i + n) / (_i + 1), ++_i)
                    }
                }), 200)) : (a.wheelDX += i, a.wheelDY += o))
            }
        }
        a ? mi = -.53 : n ? mi = 15 : c ? mi = -.7 : h && (mi = -1 / 3);
        var wi = function(t, e) {
            this.ranges = t, this.primIndex = e
        };
        wi.prototype.primary = function() {
            return this.ranges[this.primIndex]
        }, wi.prototype.equals = function(t) {
            if (t == this) return !0;
            if (t.primIndex != this.primIndex || t.ranges.length != this.ranges.length) return !1;
            for (var e = 0; e < this.ranges.length; e++) {
                var n = this.ranges[e],
                    r = t.ranges[e];
                if (!ne(n.anchor, r.anchor) || !ne(n.head, r.head)) return !1
            }
            return !0
        }, wi.prototype.deepCopy = function() {
            for (var t = [], e = 0; e < this.ranges.length; e++) t[e] = new ki(re(this.ranges[e].anchor), re(this.ranges[e].head));
            return new wi(t, this.primIndex)
        }, wi.prototype.somethingSelected = function() {
            for (var t = 0; t < this.ranges.length; t++)
                if (!this.ranges[t].empty()) return !0;
            return !1
        }, wi.prototype.contains = function(t, e) {
            e || (e = t);
            for (var n = 0; n < this.ranges.length; n++) {
                var r = this.ranges[n];
                if (ee(e, r.from()) >= 0 && ee(t, r.to()) <= 0) return n
            }
            return -1
        };
        var ki = function(t, e) {
            this.anchor = t, this.head = e
        };

        function Si(t, e, n) {
            var r = t && t.options.selectionsMayTouch,
                i = e[n];
            e.sort((function(t, e) {
                return ee(t.from(), e.from())
            })), n = H(e, i);
            for (var o = 1; o < e.length; o++) {
                var a = e[o],
                    s = e[o - 1],
                    u = ee(s.to(), a.from());
                if (r && !a.empty() ? u > 0 : u >= 0) {
                    var l = oe(s.from(), a.from()),
                        c = ie(s.to(), a.to()),
                        f = s.empty() ? a.from() == a.head : s.from() == s.head;
                    o <= n && --n, e.splice(--o, 2, new ki(f ? c : l, f ? l : c))
                }
            }
            return new wi(e, n)
        }

        function Ci(t, e) {
            return new wi([new ki(t, e || t)], 0)
        }

        function Ti(t) {
            return t.text ? te(t.from.line + t.text.length - 1, X(t.text).length + (1 == t.text.length ? t.from.ch : 0)) : t.to
        }

        function Oi(t, e) {
            if (ee(t, e.from) < 0) return t;
            if (ee(t, e.to) <= 0) return Ti(e);
            var n = t.line + e.text.length - (e.to.line - e.from.line) - 1,
                r = t.ch;
            return t.line == e.to.line && (r += Ti(e).ch - e.to.ch), te(n, r)
        }

        function Ei(t, e) {
            for (var n = [], r = 0; r < t.sel.ranges.length; r++) {
                var i = t.sel.ranges[r];
                n.push(new ki(Oi(i.anchor, e), Oi(i.head, e)))
            }
            return Si(t.cm, n, t.sel.primIndex)
        }

        function Li(t, e, n) {
            return t.line == e.line ? te(n.line, t.ch - e.ch + n.ch) : te(n.line + (t.line - e.line), t.ch)
        }

        function Mi(t) {
            t.doc.mode = jt(t.options, t.doc.modeOption), Ai(t)
        }

        function Ai(t) {
            t.doc.iter((function(t) {
                t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null)
            })), t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first, ri(t, 100), t.state.modeGen++, t.curOp && fr(t)
        }

        function Ni(t, e) {
            return 0 == e.from.ch && 0 == e.to.ch && "" == X(e.text) && (!t.cm || t.cm.options.wholeLineUpdateBefore)
        }

        function Ri(t, e, n, r) {
            function i(t) {
                return n ? n[t] : null
            }

            function o(t, n, i) {
                ! function(t, e, n, r) {
                    t.text = e, t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null), null != t.order && (t.order = null), Ee(t), Le(t, n);
                    var i = r ? r(t) : 1;
                    i != t.height && qt(t, i)
                }(t, n, i, r), un(t, "change", t, e)
            }

            function a(t, e) {
                for (var n = [], o = t; o < e; ++o) n.push(new Ge(l[o], i(o), r));
                return n
            }
            var s = e.from,
                u = e.to,
                l = e.text,
                c = Gt(t, s.line),
                f = Gt(t, u.line),
                h = X(l),
                p = i(l.length - 1),
                d = u.line - s.line;
            if (e.full) t.insert(0, a(0, l.length)), t.remove(l.length, t.size - l.length);
            else if (Ni(t, e)) {
                var g = a(0, l.length - 1);
                o(f, f.text, p), d && t.remove(s.line, d), g.length && t.insert(s.line, g)
            } else if (c == f)
                if (1 == l.length) o(c, c.text.slice(0, s.ch) + h + c.text.slice(u.ch), p);
                else {
                    var v = a(1, l.length - 1);
                    v.push(new Ge(h + c.text.slice(u.ch), p, r)), o(c, c.text.slice(0, s.ch) + l[0], i(0)), t.insert(s.line + 1, v)
                }
            else if (1 == l.length) o(c, c.text.slice(0, s.ch) + l[0] + f.text.slice(u.ch), i(0)), t.remove(s.line + 1, d);
            else {
                o(c, c.text.slice(0, s.ch) + l[0], i(0)), o(f, h + f.text.slice(u.ch), p);
                var _ = a(1, l.length - 1);
                d > 1 && t.remove(s.line + 1, d - 1), t.insert(s.line + 1, _)
            }
            un(t, "change", t, e)
        }

        function Pi(t, e, n) {
            ! function t(r, i, o) {
                if (r.linked)
                    for (var a = 0; a < r.linked.length; ++a) {
                        var s = r.linked[a];
                        if (s.doc != i) {
                            var u = o && s.sharedHist;
                            n && !u || (e(s.doc, u), t(s.doc, r, u))
                        }
                    }
            }(t, null, !0)
        }

        function Fi(t, e) {
            if (e.cm) throw new Error("This document is already in use.");
            t.doc = e, e.cm = t, ur(t), Mi(t), Di(t), t.options.lineWrapping || Ke(t), t.options.mode = e.modeOption, fr(t)
        }

        function Di(t) {
            ("rtl" == t.doc.direction ? R : T)(t.display.lineDiv, "CodeMirror-rtl")
        }

        function Ii(t) {
            this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = t || 1
        }

        function Wi(t, e) {
            var n = {
                from: re(e.from),
                to: Ti(e),
                text: $t(t, e.from, e.to)
            };
            return Ui(t, n, e.from.line, e.to.line + 1), Pi(t, (function(t) {
                return Ui(t, n, e.from.line, e.to.line + 1)
            }), !0), n
        }

        function ji(t) {
            for (; t.length && X(t).ranges;) t.pop()
        }

        function Hi(t, e, n, r) {
            var i = t.history;
            i.undone.length = 0;
            var o, a, s = +new Date;
            if ((i.lastOp == r || i.lastOrigin == e.origin && e.origin && ("+" == e.origin.charAt(0) && i.lastModTime > s - (t.cm ? t.cm.options.historyEventDelay : 500) || "*" == e.origin.charAt(0))) && (o = function(t, e) {
                    return e ? (ji(t.done), X(t.done)) : t.done.length && !X(t.done).ranges ? X(t.done) : t.done.length > 1 && !t.done[t.done.length - 2].ranges ? (t.done.pop(), X(t.done)) : void 0
                }(i, i.lastOp == r))) a = X(o.changes), 0 == ee(e.from, e.to) && 0 == ee(e.from, a.to) ? a.to = Ti(e) : o.changes.push(Wi(t, e));
            else {
                var u = X(i.done);
                for (u && u.ranges || Bi(t.sel, i.done), o = {
                        changes: [Wi(t, e)],
                        generation: i.generation
                    }, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
            }
            i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = s, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = e.origin, a || dt(t, "historyAdded")
        }

        function zi(t, e, n, r) {
            var i = t.history,
                o = r && r.origin;
            n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function(t, e, n, r) {
                var i = e.charAt(0);
                return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - t.history.lastSelTime <= (t.cm ? t.cm.options.historyEventDelay : 500)
            }(t, o, X(i.done), e)) ? i.done[i.done.length - 1] = e : Bi(e, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = n, r && !1 !== r.clearRedo && ji(i.undone)
        }

        function Bi(t, e) {
            var n = X(e);
            n && n.ranges && n.equals(t) || e.push(t)
        }

        function Ui(t, e, n, r) {
            var i = e["spans_" + t.id],
                o = 0;
            t.iter(Math.max(t.first, n), Math.min(t.first + t.size, r), (function(n) {
                n.markedSpans && ((i || (i = e["spans_" + t.id] = {}))[o] = n.markedSpans), ++o
            }))
        }

        function Vi(t) {
            if (!t) return null;
            for (var e, n = 0; n < t.length; ++n) t[n].marker.explicitlyCleared ? e || (e = t.slice(0, n)) : e && e.push(t[n]);
            return e ? e.length ? e : null : t
        }

        function Ki(t, e) {
            var n = function(t, e) {
                    var n = e["spans_" + t.id];
                    if (!n) return null;
                    for (var r = [], i = 0; i < e.text.length; ++i) r.push(Vi(n[i]));
                    return r
                }(t, e),
                r = Te(t, e);
            if (!n) return r;
            if (!r) return n;
            for (var i = 0; i < n.length; ++i) {
                var o = n[i],
                    a = r[i];
                if (o && a) t: for (var s = 0; s < a.length; ++s) {
                    for (var u = a[s], l = 0; l < o.length; ++l)
                        if (o[l].marker == u.marker) continue t;
                    o.push(u)
                } else a && (n[i] = a)
            }
            return n
        }

        function Gi(t, e, n) {
            for (var r = [], i = 0; i < t.length; ++i) {
                var o = t[i];
                if (o.ranges) r.push(n ? wi.prototype.deepCopy.call(o) : o);
                else {
                    var a = o.changes,
                        s = [];
                    r.push({
                        changes: s
                    });
                    for (var u = 0; u < a.length; ++u) {
                        var l = a[u],
                            c = void 0;
                        if (s.push({
                                from: l.from,
                                to: l.to,
                                text: l.text
                            }), e)
                            for (var f in l)(c = f.match(/^spans_(\d+)$/)) && H(e, Number(c[1])) > -1 && (X(s)[f] = l[f], delete l[f])
                    }
                }
            }
            return r
        }

        function $i(t, e, n, r) {
            if (r) {
                var i = t.anchor;
                if (n) {
                    var o = ee(e, i) < 0;
                    o != ee(n, i) < 0 ? (i = e, e = n) : o != ee(e, n) < 0 && (e = n)
                }
                return new ki(i, e)
            }
            return new ki(n || e, e)
        }

        function Xi(t, e, n, r, i) {
            null == i && (i = t.cm && (t.cm.display.shift || t.extend)), Zi(t, new wi([$i(t.sel.primary(), e, n, i)], 0), r)
        }

        function qi(t, e, n) {
            for (var r = [], i = t.cm && (t.cm.display.shift || t.extend), o = 0; o < t.sel.ranges.length; o++) r[o] = $i(t.sel.ranges[o], e[o], null, i);
            Zi(t, Si(t.cm, r, t.sel.primIndex), n)
        }

        function Yi(t, e, n, r) {
            var i = t.sel.ranges.slice(0);
            i[e] = n, Zi(t, Si(t.cm, i, t.sel.primIndex), r)
        }

        function Ji(t, e, n, r) {
            Zi(t, Ci(e, n), r)
        }

        function Qi(t, e, n) {
            var r = t.history.done,
                i = X(r);
            i && i.ranges ? (r[r.length - 1] = e, to(t, e, n)) : Zi(t, e, n)
        }

        function Zi(t, e, n) {
            to(t, e, n), zi(t, t.sel, t.cm ? t.cm.curOp.id : NaN, n)
        }

        function to(t, e, n) {
            (_t(t, "beforeSelectionChange") || t.cm && _t(t.cm, "beforeSelectionChange")) && (e = function(t, e, n) {
                var r = {
                    ranges: e.ranges,
                    update: function(e) {
                        this.ranges = [];
                        for (var n = 0; n < e.length; n++) this.ranges[n] = new ki(se(t, e[n].anchor), se(t, e[n].head))
                    },
                    origin: n && n.origin
                };
                return dt(t, "beforeSelectionChange", t, r), t.cm && dt(t.cm, "beforeSelectionChange", t.cm, r), r.ranges != e.ranges ? Si(t.cm, r.ranges, r.ranges.length - 1) : e
            }(t, e, n));
            var r = n && n.bias || (ee(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1);
            eo(t, ro(t, e, r, !0)), n && !1 === n.scroll || !t.cm || Ar(t.cm)
        }

        function eo(t, e) {
            e.equals(t.sel) || (t.sel = e, t.cm && (t.cm.curOp.updateInput = 1, t.cm.curOp.selectionChanged = !0, vt(t.cm)), un(t, "cursorActivity", t))
        }

        function no(t) {
            eo(t, ro(t, t.sel, null, !1))
        }

        function ro(t, e, n, r) {
            for (var i, o = 0; o < e.ranges.length; o++) {
                var a = e.ranges[o],
                    s = e.ranges.length == t.sel.ranges.length && t.sel.ranges[o],
                    u = oo(t, a.anchor, s && s.anchor, n, r),
                    l = oo(t, a.head, s && s.head, n, r);
                (i || u != a.anchor || l != a.head) && (i || (i = e.ranges.slice(0, o)), i[o] = new ki(u, l))
            }
            return i ? Si(t.cm, i, e.primIndex) : e
        }

        function io(t, e, n, r, i) {
            var o = Gt(t, e.line);
            if (o.markedSpans)
                for (var a = 0; a < o.markedSpans.length; ++a) {
                    var s = o.markedSpans[a],
                        u = s.marker,
                        l = "selectLeft" in u ? !u.selectLeft : u.inclusiveLeft,
                        c = "selectRight" in u ? !u.selectRight : u.inclusiveRight;
                    if ((null == s.from || (l ? s.from <= e.ch : s.from < e.ch)) && (null == s.to || (c ? s.to >= e.ch : s.to > e.ch))) {
                        if (i && (dt(u, "beforeCursorEnter"), u.explicitlyCleared)) {
                            if (o.markedSpans) {
                                --a;
                                continue
                            }
                            break
                        }
                        if (!u.atomic) continue;
                        if (n) {
                            var f = u.find(r < 0 ? 1 : -1),
                                h = void 0;
                            if ((r < 0 ? c : l) && (f = ao(t, f, -r, f && f.line == e.line ? o : null)), f && f.line == e.line && (h = ee(f, n)) && (r < 0 ? h < 0 : h > 0)) return io(t, f, e, r, i)
                        }
                        var p = u.find(r < 0 ? -1 : 1);
                        return (r < 0 ? l : c) && (p = ao(t, p, r, p.line == e.line ? o : null)), p ? io(t, p, e, r, i) : null
                    }
                }
            return e
        }

        function oo(t, e, n, r, i) {
            var o = r || 1,
                a = io(t, e, n, o, i) || !i && io(t, e, n, o, !0) || io(t, e, n, -o, i) || !i && io(t, e, n, -o, !0);
            return a || (t.cantEdit = !0, te(t.first, 0))
        }

        function ao(t, e, n, r) {
            return n < 0 && 0 == e.ch ? e.line > t.first ? se(t, te(e.line - 1)) : null : n > 0 && e.ch == (r || Gt(t, e.line)).text.length ? e.line < t.first + t.size - 1 ? te(e.line + 1, 0) : null : new te(e.line, e.ch + n)
        }

        function so(t) {
            t.setSelection(te(t.firstLine(), 0), te(t.lastLine()), B)
        }

        function uo(t, e, n) {
            var r = {
                canceled: !1,
                from: e.from,
                to: e.to,
                text: e.text,
                origin: e.origin,
                cancel: function() {
                    return r.canceled = !0
                }
            };
            return n && (r.update = function(e, n, i, o) {
                e && (r.from = se(t, e)), n && (r.to = se(t, n)), i && (r.text = i), void 0 !== o && (r.origin = o)
            }), dt(t, "beforeChange", t, r), t.cm && dt(t.cm, "beforeChange", t.cm, r), r.canceled ? (t.cm && (t.cm.curOp.updateInput = 2), null) : {
                from: r.from,
                to: r.to,
                text: r.text,
                origin: r.origin
            }
        }

        function lo(t, e, n) {
            if (t.cm) {
                if (!t.cm.curOp) return ti(t.cm, lo)(t, e, n);
                if (t.cm.state.suppressEdits) return
            }
            if (!(_t(t, "beforeChange") || t.cm && _t(t.cm, "beforeChange")) || (e = uo(t, e, !0))) {
                var r = xe && !n && function(t, e, n) {
                    var r = null;
                    if (t.iter(e.line, n.line + 1, (function(t) {
                            if (t.markedSpans)
                                for (var e = 0; e < t.markedSpans.length; ++e) {
                                    var n = t.markedSpans[e].marker;
                                    !n.readOnly || r && -1 != H(r, n) || (r || (r = [])).push(n)
                                }
                        })), !r) return null;
                    for (var i = [{
                            from: e,
                            to: n
                        }], o = 0; o < r.length; ++o)
                        for (var a = r[o], s = a.find(0), u = 0; u < i.length; ++u) {
                            var l = i[u];
                            if (!(ee(l.to, s.from) < 0 || ee(l.from, s.to) > 0)) {
                                var c = [u, 1],
                                    f = ee(l.from, s.from),
                                    h = ee(l.to, s.to);
                                (f < 0 || !a.inclusiveLeft && !f) && c.push({
                                    from: l.from,
                                    to: s.from
                                }), (h > 0 || !a.inclusiveRight && !h) && c.push({
                                    from: s.to,
                                    to: l.to
                                }), i.splice.apply(i, c), u += c.length - 3
                            }
                        }
                    return i
                }(t, e.from, e.to);
                if (r)
                    for (var i = r.length - 1; i >= 0; --i) co(t, {
                        from: r[i].from,
                        to: r[i].to,
                        text: i ? [""] : e.text,
                        origin: e.origin
                    });
                else co(t, e)
            }
        }

        function co(t, e) {
            if (1 != e.text.length || "" != e.text[0] || 0 != ee(e.from, e.to)) {
                var n = Ei(t, e);
                Hi(t, e, n, t.cm ? t.cm.curOp.id : NaN), po(t, e, n, Te(t, e));
                var r = [];
                Pi(t, (function(t, n) {
                    n || -1 != H(r, t.history) || (mo(t.history, e), r.push(t.history)), po(t, e, null, Te(t, e))
                }))
            }
        }

        function fo(t, e, n) {
            var r = t.cm && t.cm.state.suppressEdits;
            if (!r || n) {
                for (var i, o = t.history, a = t.sel, s = "undo" == e ? o.done : o.undone, u = "undo" == e ? o.undone : o.done, l = 0; l < s.length && (i = s[l], n ? !i.ranges || i.equals(t.sel) : i.ranges); l++);
                if (l != s.length) {
                    for (o.lastOrigin = o.lastSelOrigin = null;;) {
                        if (!(i = s.pop()).ranges) {
                            if (r) return void s.push(i);
                            break
                        }
                        if (Bi(i, u), n && !i.equals(t.sel)) return void Zi(t, i, {
                            clearRedo: !1
                        });
                        a = i
                    }
                    var c = [];
                    Bi(a, u), u.push({
                        changes: c,
                        generation: o.generation
                    }), o.generation = i.generation || ++o.maxGeneration;
                    for (var f = _t(t, "beforeChange") || t.cm && _t(t.cm, "beforeChange"), h = function(n) {
                            var r = i.changes[n];
                            if (r.origin = e, f && !uo(t, r, !1)) return s.length = 0, {};
                            c.push(Wi(t, r));
                            var o = n ? Ei(t, r) : X(s);
                            po(t, r, o, Ki(t, r)), !n && t.cm && t.cm.scrollIntoView({
                                from: r.from,
                                to: Ti(r)
                            });
                            var a = [];
                            Pi(t, (function(t, e) {
                                e || -1 != H(a, t.history) || (mo(t.history, r), a.push(t.history)), po(t, r, null, Ki(t, r))
                            }))
                        }, p = i.changes.length - 1; p >= 0; --p) {
                        var d = h(p);
                        if (d) return d.v
                    }
                }
            }
        }

        function ho(t, e) {
            if (0 != e && (t.first += e, t.sel = new wi(q(t.sel.ranges, (function(t) {
                    return new ki(te(t.anchor.line + e, t.anchor.ch), te(t.head.line + e, t.head.ch))
                })), t.sel.primIndex), t.cm)) {
                fr(t.cm, t.first, t.first - e, e);
                for (var n = t.cm.display, r = n.viewFrom; r < n.viewTo; r++) hr(t.cm, r, "gutter")
            }
        }

        function po(t, e, n, r) {
            if (t.cm && !t.cm.curOp) return ti(t.cm, po)(t, e, n, r);
            if (e.to.line < t.first) ho(t, e.text.length - 1 - (e.to.line - e.from.line));
            else if (!(e.from.line > t.lastLine())) {
                if (e.from.line < t.first) {
                    var i = e.text.length - 1 - (t.first - e.from.line);
                    ho(t, i), e = {
                        from: te(t.first, 0),
                        to: te(e.to.line + i, e.to.ch),
                        text: [X(e.text)],
                        origin: e.origin
                    }
                }
                var o = t.lastLine();
                e.to.line > o && (e = {
                    from: e.from,
                    to: te(o, Gt(t, o).text.length),
                    text: [e.text[0]],
                    origin: e.origin
                }), e.removed = $t(t, e.from, e.to), n || (n = Ei(t, e)), t.cm ? function(t, e, n) {
                    var r = t.doc,
                        i = t.display,
                        o = e.from,
                        a = e.to,
                        s = !1,
                        u = o.line;
                    t.options.lineWrapping || (u = Yt(We(Gt(r, o.line))), r.iter(u, a.line + 1, (function(t) {
                            if (t == i.maxLine) return s = !0, !0
                        }))), r.sel.contains(e.from, e.to) > -1 && vt(t), Ri(r, e, n, sr(t)), t.options.lineWrapping || (r.iter(u, o.line + e.text.length, (function(t) {
                            var e = Ve(t);
                            e > i.maxLineLength && (i.maxLine = t, i.maxLineLength = e, i.maxLineChanged = !0, s = !1)
                        })), s && (t.curOp.updateMaxLine = !0)),
                        function(t, e) {
                            if (t.modeFrontier = Math.min(t.modeFrontier, e), !(t.highlightFrontier < e - 10)) {
                                for (var n = t.first, r = e - 1; r > n; r--) {
                                    var i = Gt(t, r).stateAfter;
                                    if (i && (!(i instanceof le) || r + i.lookAhead < e)) {
                                        n = r + 1;
                                        break
                                    }
                                }
                                t.highlightFrontier = Math.min(t.highlightFrontier, n)
                            }
                        }(r, o.line), ri(t, 400);
                    var l = e.text.length - (a.line - o.line) - 1;
                    e.full ? fr(t) : o.line != a.line || 1 != e.text.length || Ni(t.doc, e) ? fr(t, o.line, a.line + 1, l) : hr(t, o.line, "text");
                    var c = _t(t, "changes"),
                        f = _t(t, "change");
                    if (f || c) {
                        var h = {
                            from: o,
                            to: a,
                            text: e.text,
                            removed: e.removed,
                            origin: e.origin
                        };
                        f && un(t, "change", t, h), c && (t.curOp.changeObjs || (t.curOp.changeObjs = [])).push(h)
                    }
                    t.display.selForContextMenu = null
                }(t.cm, e, r) : Ri(t, e, r), to(t, n, B), t.cantEdit && oo(t, te(t.firstLine(), 0)) && (t.cantEdit = !1)
            }
        }

        function go(t, e, n, r, i) {
            var o;
            r || (r = n), ee(r, n) < 0 && (n = (o = [r, n])[0], r = o[1]), "string" == typeof e && (e = t.splitLines(e)), lo(t, {
                from: n,
                to: r,
                text: e,
                origin: i
            })
        }

        function vo(t, e, n, r) {
            n < t.line ? t.line += r : e < t.line && (t.line = e, t.ch = 0)
        }

        function _o(t, e, n, r) {
            for (var i = 0; i < t.length; ++i) {
                var o = t[i],
                    a = !0;
                if (o.ranges) {
                    o.copied || ((o = t[i] = o.deepCopy()).copied = !0);
                    for (var s = 0; s < o.ranges.length; s++) vo(o.ranges[s].anchor, e, n, r), vo(o.ranges[s].head, e, n, r)
                } else {
                    for (var u = 0; u < o.changes.length; ++u) {
                        var l = o.changes[u];
                        if (n < l.from.line) l.from = te(l.from.line + r, l.from.ch), l.to = te(l.to.line + r, l.to.ch);
                        else if (e <= l.to.line) {
                            a = !1;
                            break
                        }
                    }
                    a || (t.splice(0, i + 1), i = 0)
                }
            }
        }

        function mo(t, e) {
            var n = e.from.line,
                r = e.to.line,
                i = e.text.length - (r - n) - 1;
            _o(t.done, n, r, i), _o(t.undone, n, r, i)
        }

        function yo(t, e, n, r) {
            var i = e,
                o = e;
            return "number" == typeof e ? o = Gt(t, ae(t, e)) : i = Yt(e), null == i ? null : (r(o, i) && t.cm && hr(t.cm, i, n), o)
        }

        function bo(t) {
            this.lines = t, this.parent = null;
            for (var e = 0, n = 0; n < t.length; ++n) t[n].parent = this, e += t[n].height;
            this.height = e
        }

        function xo(t) {
            this.children = t;
            for (var e = 0, n = 0, r = 0; r < t.length; ++r) {
                var i = t[r];
                e += i.chunkSize(), n += i.height, i.parent = this
            }
            this.size = e, this.height = n, this.parent = null
        }
        ki.prototype.from = function() {
            return oe(this.anchor, this.head)
        }, ki.prototype.to = function() {
            return ie(this.anchor, this.head)
        }, ki.prototype.empty = function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        }, bo.prototype = {
            chunkSize: function() {
                return this.lines.length
            },
            removeInner: function(t, e) {
                for (var n = t, r = t + e; n < r; ++n) {
                    var i = this.lines[n];
                    this.height -= i.height, $e(i), un(i, "delete")
                }
                this.lines.splice(t, e)
            },
            collapse: function(t) {
                t.push.apply(t, this.lines)
            },
            insertInner: function(t, e, n) {
                this.height += n, this.lines = this.lines.slice(0, t).concat(e).concat(this.lines.slice(t));
                for (var r = 0; r < e.length; ++r) e[r].parent = this
            },
            iterN: function(t, e, n) {
                for (var r = t + e; t < r; ++t)
                    if (n(this.lines[t])) return !0
            }
        }, xo.prototype = {
            chunkSize: function() {
                return this.size
            },
            removeInner: function(t, e) {
                this.size -= e;
                for (var n = 0; n < this.children.length; ++n) {
                    var r = this.children[n],
                        i = r.chunkSize();
                    if (t < i) {
                        var o = Math.min(e, i - t),
                            a = r.height;
                        if (r.removeInner(t, o), this.height -= a - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (e -= o)) break;
                        t = 0
                    } else t -= i
                }
                if (this.size - e < 25 && (this.children.length > 1 || !(this.children[0] instanceof bo))) {
                    var s = [];
                    this.collapse(s), this.children = [new bo(s)], this.children[0].parent = this
                }
            },
            collapse: function(t) {
                for (var e = 0; e < this.children.length; ++e) this.children[e].collapse(t)
            },
            insertInner: function(t, e, n) {
                this.size += e.length, this.height += n;
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r],
                        o = i.chunkSize();
                    if (t <= o) {
                        if (i.insertInner(t, e, n), i.lines && i.lines.length > 50) {
                            for (var a = i.lines.length % 25 + 25, s = a; s < i.lines.length;) {
                                var u = new bo(i.lines.slice(s, s += 25));
                                i.height -= u.height, this.children.splice(++r, 0, u), u.parent = this
                            }
                            i.lines = i.lines.slice(0, a), this.maybeSpill()
                        }
                        break
                    }
                    t -= o
                }
            },
            maybeSpill: function() {
                if (!(this.children.length <= 10)) {
                    var t = this;
                    do {
                        var e = new xo(t.children.splice(t.children.length - 5, 5));
                        if (t.parent) {
                            t.size -= e.size, t.height -= e.height;
                            var n = H(t.parent.children, t);
                            t.parent.children.splice(n + 1, 0, e)
                        } else {
                            var r = new xo(t.children);
                            r.parent = t, t.children = [r, e], t = r
                        }
                        e.parent = t.parent
                    } while (t.children.length > 10);
                    t.parent.maybeSpill()
                }
            },
            iterN: function(t, e, n) {
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r],
                        o = i.chunkSize();
                    if (t < o) {
                        var a = Math.min(e, o - t);
                        if (i.iterN(t, a, n)) return !0;
                        if (0 == (e -= a)) break;
                        t = 0
                    } else t -= o
                }
            }
        };
        var wo = function(t, e, n) {
            if (n)
                for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
            this.doc = t, this.node = e
        };

        function ko(t, e, n) {
            Ue(e) < (t.curOp && t.curOp.scrollTop || t.doc.scrollTop) && Mr(t, n)
        }
        wo.prototype.clear = function() {
            var t = this.doc.cm,
                e = this.line.widgets,
                n = this.line,
                r = Yt(n);
            if (null != r && e) {
                for (var i = 0; i < e.length; ++i) e[i] == this && e.splice(i--, 1);
                e.length || (n.widgets = null);
                var o = xn(this);
                qt(n, Math.max(0, n.height - o)), t && (Zr(t, (function() {
                    ko(t, n, -o), hr(t, r, "widget")
                })), un(t, "lineWidgetCleared", t, this, r))
            }
        }, wo.prototype.changed = function() {
            var t = this,
                e = this.height,
                n = this.doc.cm,
                r = this.line;
            this.height = null;
            var i = xn(this) - e;
            i && (ze(this.doc, r) || qt(r, r.height + i), n && Zr(n, (function() {
                n.curOp.forceUpdate = !0, ko(n, r, i), un(n, "lineWidgetChanged", n, t, Yt(r))
            })))
        }, mt(wo);
        var So = 0,
            Co = function(t, e) {
                this.lines = [], this.type = e, this.doc = t, this.id = ++So
            };

        function To(t, e, n, r, i) {
            if (r && r.shared) return function(t, e, n, r, i) {
                (r = I(r)).shared = !1;
                var o = [To(t, e, n, r, i)],
                    a = o[0],
                    s = r.widgetNode;
                return Pi(t, (function(t) {
                    s && (r.widgetNode = s.cloneNode(!0)), o.push(To(t, se(t, e), se(t, n), r, i));
                    for (var u = 0; u < t.linked.length; ++u)
                        if (t.linked[u].isParent) return;
                    a = X(o)
                })), new Oo(o, a)
            }(t, e, n, r, i);
            if (t.cm && !t.cm.curOp) return ti(t.cm, To)(t, e, n, r, i);
            var o = new Co(t, i),
                a = ee(e, n);
            if (r && I(r, o, !1), a > 0 || 0 == a && !1 !== o.clearWhenEmpty) return o;
            if (o.replacedWith && (o.collapsed = !0, o.widgetNode = M("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
                if (Ie(t, e.line, e, n, o) || e.line != n.line && Ie(t, n.line, e, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                we = !0
            }
            o.addToHistory && Hi(t, {
                from: e,
                to: n,
                origin: "markText"
            }, t.sel, NaN);
            var s, u = e.line,
                l = t.cm;
            if (t.iter(u, n.line + 1, (function(t) {
                    l && o.collapsed && !l.options.lineWrapping && We(t) == l.display.maxLine && (s = !0), o.collapsed && u != e.line && qt(t, 0),
                        function(t, e) {
                            t.markedSpans = t.markedSpans ? t.markedSpans.concat([e]) : [e], e.marker.attachLine(t)
                        }(t, new ke(o, u == e.line ? e.ch : null, u == n.line ? n.ch : null)), ++u
                })), o.collapsed && t.iter(e.line, n.line + 1, (function(e) {
                    ze(t, e) && qt(e, 0)
                })), o.clearOnEnter && ft(o, "beforeCursorEnter", (function() {
                    return o.clear()
                })), o.readOnly && (xe = !0, (t.history.done.length || t.history.undone.length) && t.clearHistory()), o.collapsed && (o.id = ++So, o.atomic = !0), l) {
                if (s && (l.curOp.updateMaxLine = !0), o.collapsed) fr(l, e.line, n.line + 1);
                else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                    for (var c = e.line; c <= n.line; c++) hr(l, c, "text");
                o.atomic && no(l.doc), un(l, "markerAdded", l, o)
            }
            return o
        }
        Co.prototype.clear = function() {
            if (!this.explicitlyCleared) {
                var t = this.doc.cm,
                    e = t && !t.curOp;
                if (e && Gr(t), _t(this, "clear")) {
                    var n = this.find();
                    n && un(this, "clear", n.from, n.to)
                }
                for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                    var a = this.lines[o],
                        s = Se(a.markedSpans, this);
                    t && !this.collapsed ? hr(t, Yt(a), "text") : t && (null != s.to && (i = Yt(a)), null != s.from && (r = Yt(a))), a.markedSpans = Ce(a.markedSpans, s), null == s.from && this.collapsed && !ze(this.doc, a) && t && qt(a, rr(t.display))
                }
                if (t && this.collapsed && !t.options.lineWrapping)
                    for (var u = 0; u < this.lines.length; ++u) {
                        var l = We(this.lines[u]),
                            c = Ve(l);
                        c > t.display.maxLineLength && (t.display.maxLine = l, t.display.maxLineLength = c, t.display.maxLineChanged = !0)
                    }
                null != r && t && this.collapsed && fr(t, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && no(t.doc)), t && un(t, "markerCleared", t, this, r, i), e && $r(t), this.parent && this.parent.clear()
            }
        }, Co.prototype.find = function(t, e) {
            var n, r;
            null == t && "bookmark" == this.type && (t = 1);
            for (var i = 0; i < this.lines.length; ++i) {
                var o = this.lines[i],
                    a = Se(o.markedSpans, this);
                if (null != a.from && (n = te(e ? o : Yt(o), a.from), -1 == t)) return n;
                if (null != a.to && (r = te(e ? o : Yt(o), a.to), 1 == t)) return r
            }
            return n && {
                from: n,
                to: r
            }
        }, Co.prototype.changed = function() {
            var t = this,
                e = this.find(-1, !0),
                n = this,
                r = this.doc.cm;
            e && r && Zr(r, (function() {
                var i = e.line,
                    o = Yt(e.line),
                    a = An(r, o);
                if (a && (Wn(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !ze(n.doc, i) && null != n.height) {
                    var s = n.height;
                    n.height = null;
                    var u = xn(n) - s;
                    u && qt(i, i.height + u)
                }
                un(r, "markerChanged", r, t)
            }))
        }, Co.prototype.attachLine = function(t) {
            if (!this.lines.length && this.doc.cm) {
                var e = this.doc.cm.curOp;
                e.maybeHiddenMarkers && -1 != H(e.maybeHiddenMarkers, this) || (e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = [])).push(this)
            }
            this.lines.push(t)
        }, Co.prototype.detachLine = function(t) {
            if (this.lines.splice(H(this.lines, t), 1), !this.lines.length && this.doc.cm) {
                var e = this.doc.cm.curOp;
                (e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this)
            }
        }, mt(Co);
        var Oo = function(t, e) {
            this.markers = t, this.primary = e;
            for (var n = 0; n < t.length; ++n) t[n].parent = this
        };

        function Eo(t) {
            return t.findMarks(te(t.first, 0), t.clipPos(te(t.lastLine())), (function(t) {
                return t.parent
            }))
        }

        function Lo(t) {
            for (var e = function(e) {
                    var n = t[e],
                        r = [n.primary.doc];
                    Pi(n.primary.doc, (function(t) {
                        return r.push(t)
                    }));
                    for (var i = 0; i < n.markers.length; i++) {
                        var o = n.markers[i]; - 1 == H(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1))
                    }
                }, n = 0; n < t.length; n++) e(n)
        }
        Oo.prototype.clear = function() {
            if (!this.explicitlyCleared) {
                this.explicitlyCleared = !0;
                for (var t = 0; t < this.markers.length; ++t) this.markers[t].clear();
                un(this, "clear")
            }
        }, Oo.prototype.find = function(t, e) {
            return this.primary.find(t, e)
        }, mt(Oo);
        var Mo = 0,
            Ao = function(t, e, n, r, i) {
                if (!(this instanceof Ao)) return new Ao(t, e, n, r, i);
                null == n && (n = 0), xo.call(this, [new bo([new Ge("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
                var o = te(n, 0);
                this.sel = Ci(o), this.history = new Ii(null), this.id = ++Mo, this.modeOption = e, this.lineSep = r, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof t && (t = this.splitLines(t)), Ri(this, {
                    from: o,
                    to: o,
                    text: t
                }), Zi(this, Ci(o), B)
            };
        Ao.prototype = J(xo.prototype, {
            constructor: Ao,
            iter: function(t, e, n) {
                n ? this.iterN(t - this.first, e - t, n) : this.iterN(this.first, this.first + this.size, t)
            },
            insert: function(t, e) {
                for (var n = 0, r = 0; r < e.length; ++r) n += e[r].height;
                this.insertInner(t - this.first, e, n)
            },
            remove: function(t, e) {
                this.removeInner(t - this.first, e)
            },
            getValue: function(t) {
                var e = Xt(this, this.first, this.first + this.size);
                return !1 === t ? e : e.join(t || this.lineSeparator())
            },
            setValue: ni((function(t) {
                var e = te(this.first, 0),
                    n = this.first + this.size - 1;
                lo(this, {
                    from: e,
                    to: te(n, Gt(this, n).text.length),
                    text: this.splitLines(t),
                    origin: "setValue",
                    full: !0
                }, !0), this.cm && Nr(this.cm, 0, 0), Zi(this, Ci(e), B)
            })),
            replaceRange: function(t, e, n, r) {
                go(this, t, e = se(this, e), n = n ? se(this, n) : e, r)
            },
            getRange: function(t, e, n) {
                var r = $t(this, se(this, t), se(this, e));
                return !1 === n ? r : r.join(n || this.lineSeparator())
            },
            getLine: function(t) {
                var e = this.getLineHandle(t);
                return e && e.text
            },
            getLineHandle: function(t) {
                if (Qt(this, t)) return Gt(this, t)
            },
            getLineNumber: function(t) {
                return Yt(t)
            },
            getLineHandleVisualStart: function(t) {
                return "number" == typeof t && (t = Gt(this, t)), We(t)
            },
            lineCount: function() {
                return this.size
            },
            firstLine: function() {
                return this.first
            },
            lastLine: function() {
                return this.first + this.size - 1
            },
            clipPos: function(t) {
                return se(this, t)
            },
            getCursor: function(t) {
                var e = this.sel.primary();
                return null == t || "head" == t ? e.head : "anchor" == t ? e.anchor : "end" == t || "to" == t || !1 === t ? e.to() : e.from()
            },
            listSelections: function() {
                return this.sel.ranges
            },
            somethingSelected: function() {
                return this.sel.somethingSelected()
            },
            setCursor: ni((function(t, e, n) {
                Ji(this, se(this, "number" == typeof t ? te(t, e || 0) : t), null, n)
            })),
            setSelection: ni((function(t, e, n) {
                Ji(this, se(this, t), se(this, e || t), n)
            })),
            extendSelection: ni((function(t, e, n) {
                Xi(this, se(this, t), e && se(this, e), n)
            })),
            extendSelections: ni((function(t, e) {
                qi(this, ue(this, t), e)
            })),
            extendSelectionsBy: ni((function(t, e) {
                qi(this, ue(this, q(this.sel.ranges, t)), e)
            })),
            setSelections: ni((function(t, e, n) {
                if (t.length) {
                    for (var r = [], i = 0; i < t.length; i++) r[i] = new ki(se(this, t[i].anchor), se(this, t[i].head));
                    null == e && (e = Math.min(t.length - 1, this.sel.primIndex)), Zi(this, Si(this.cm, r, e), n)
                }
            })),
            addSelection: ni((function(t, e, n) {
                var r = this.sel.ranges.slice(0);
                r.push(new ki(se(this, t), se(this, e || t))), Zi(this, Si(this.cm, r, r.length - 1), n)
            })),
            getSelection: function(t) {
                for (var e, n = this.sel.ranges, r = 0; r < n.length; r++) {
                    var i = $t(this, n[r].from(), n[r].to());
                    e = e ? e.concat(i) : i
                }
                return !1 === t ? e : e.join(t || this.lineSeparator())
            },
            getSelections: function(t) {
                for (var e = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                    var i = $t(this, n[r].from(), n[r].to());
                    !1 !== t && (i = i.join(t || this.lineSeparator())), e[r] = i
                }
                return e
            },
            replaceSelection: function(t, e, n) {
                for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = t;
                this.replaceSelections(r, e, n || "+input")
            },
            replaceSelections: ni((function(t, e, n) {
                for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                    var a = i.ranges[o];
                    r[o] = {
                        from: a.from(),
                        to: a.to(),
                        text: this.splitLines(t[o]),
                        origin: n
                    }
                }
                for (var s = e && "end" != e && function(t, e, n) {
                        for (var r = [], i = te(t.first, 0), o = i, a = 0; a < e.length; a++) {
                            var s = e[a],
                                u = Li(s.from, i, o),
                                l = Li(Ti(s), i, o);
                            if (i = s.to, o = l, "around" == n) {
                                var c = t.sel.ranges[a],
                                    f = ee(c.head, c.anchor) < 0;
                                r[a] = new ki(f ? l : u, f ? u : l)
                            } else r[a] = new ki(u, u)
                        }
                        return new wi(r, t.sel.primIndex)
                    }(this, r, e), u = r.length - 1; u >= 0; u--) lo(this, r[u]);
                s ? Qi(this, s) : this.cm && Ar(this.cm)
            })),
            undo: ni((function() {
                fo(this, "undo")
            })),
            redo: ni((function() {
                fo(this, "redo")
            })),
            undoSelection: ni((function() {
                fo(this, "undo", !0)
            })),
            redoSelection: ni((function() {
                fo(this, "redo", !0)
            })),
            setExtending: function(t) {
                this.extend = t
            },
            getExtending: function() {
                return this.extend
            },
            historySize: function() {
                for (var t = this.history, e = 0, n = 0, r = 0; r < t.done.length; r++) t.done[r].ranges || ++e;
                for (var i = 0; i < t.undone.length; i++) t.undone[i].ranges || ++n;
                return {
                    undo: e,
                    redo: n
                }
            },
            clearHistory: function() {
                var t = this;
                this.history = new Ii(this.history.maxGeneration), Pi(this, (function(e) {
                    return e.history = t.history
                }), !0)
            },
            markClean: function() {
                this.cleanGeneration = this.changeGeneration(!0)
            },
            changeGeneration: function(t) {
                return t && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
            },
            isClean: function(t) {
                return this.history.generation == (t || this.cleanGeneration)
            },
            getHistory: function() {
                return {
                    done: Gi(this.history.done),
                    undone: Gi(this.history.undone)
                }
            },
            setHistory: function(t) {
                var e = this.history = new Ii(this.history.maxGeneration);
                e.done = Gi(t.done.slice(0), null, !0), e.undone = Gi(t.undone.slice(0), null, !0)
            },
            setGutterMarker: ni((function(t, e, n) {
                return yo(this, t, "gutter", (function(t) {
                    var r = t.gutterMarkers || (t.gutterMarkers = {});
                    return r[e] = n, !n && et(r) && (t.gutterMarkers = null), !0
                }))
            })),
            clearGutter: ni((function(t) {
                var e = this;
                this.iter((function(n) {
                    n.gutterMarkers && n.gutterMarkers[t] && yo(e, n, "gutter", (function() {
                        return n.gutterMarkers[t] = null, et(n.gutterMarkers) && (n.gutterMarkers = null), !0
                    }))
                }))
            })),
            lineInfo: function(t) {
                var e;
                if ("number" == typeof t) {
                    if (!Qt(this, t)) return null;
                    if (e = t, !(t = Gt(this, t))) return null
                } else if (null == (e = Yt(t))) return null;
                return {
                    line: e,
                    handle: t,
                    text: t.text,
                    gutterMarkers: t.gutterMarkers,
                    textClass: t.textClass,
                    bgClass: t.bgClass,
                    wrapClass: t.wrapClass,
                    widgets: t.widgets
                }
            },
            addLineClass: ni((function(t, e, n) {
                return yo(this, t, "gutter" == e ? "gutter" : "class", (function(t) {
                    var r = "text" == e ? "textClass" : "background" == e ? "bgClass" : "gutter" == e ? "gutterClass" : "wrapClass";
                    if (t[r]) {
                        if (S(n).test(t[r])) return !1;
                        t[r] += " " + n
                    } else t[r] = n;
                    return !0
                }))
            })),
            removeLineClass: ni((function(t, e, n) {
                return yo(this, t, "gutter" == e ? "gutter" : "class", (function(t) {
                    var r = "text" == e ? "textClass" : "background" == e ? "bgClass" : "gutter" == e ? "gutterClass" : "wrapClass",
                        i = t[r];
                    if (!i) return !1;
                    if (null == n) t[r] = null;
                    else {
                        var o = i.match(S(n));
                        if (!o) return !1;
                        var a = o.index + o[0].length;
                        t[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null
                    }
                    return !0
                }))
            })),
            addLineWidget: ni((function(t, e, n) {
                return function(t, e, n, r) {
                    var i = new wo(t, n, r),
                        o = t.cm;
                    return o && i.noHScroll && (o.display.alignWidgets = !0), yo(t, e, "widget", (function(e) {
                        var n = e.widgets || (e.widgets = []);
                        if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = e, o && !ze(t, e)) {
                            var r = Ue(e) < t.scrollTop;
                            qt(e, e.height + xn(i)), r && Mr(o, i.height), o.curOp.forceUpdate = !0
                        }
                        return !0
                    })), o && un(o, "lineWidgetAdded", o, i, "number" == typeof e ? e : Yt(e)), i
                }(this, t, e, n)
            })),
            removeLineWidget: function(t) {
                t.clear()
            },
            markText: function(t, e, n) {
                return To(this, se(this, t), se(this, e), n, n && n.type || "range")
            },
            setBookmark: function(t, e) {
                var n = {
                    replacedWith: e && (null == e.nodeType ? e.widget : e),
                    insertLeft: e && e.insertLeft,
                    clearWhenEmpty: !1,
                    shared: e && e.shared,
                    handleMouseEvents: e && e.handleMouseEvents
                };
                return To(this, t = se(this, t), t, n, "bookmark")
            },
            findMarksAt: function(t) {
                var e = [],
                    n = Gt(this, (t = se(this, t)).line).markedSpans;
                if (n)
                    for (var r = 0; r < n.length; ++r) {
                        var i = n[r];
                        (null == i.from || i.from <= t.ch) && (null == i.to || i.to >= t.ch) && e.push(i.marker.parent || i.marker)
                    }
                return e
            },
            findMarks: function(t, e, n) {
                t = se(this, t), e = se(this, e);
                var r = [],
                    i = t.line;
                return this.iter(t.line, e.line + 1, (function(o) {
                    var a = o.markedSpans;
                    if (a)
                        for (var s = 0; s < a.length; s++) {
                            var u = a[s];
                            null != u.to && i == t.line && t.ch >= u.to || null == u.from && i != t.line || null != u.from && i == e.line && u.from >= e.ch || n && !n(u.marker) || r.push(u.marker.parent || u.marker)
                        }++i
                })), r
            },
            getAllMarks: function() {
                var t = [];
                return this.iter((function(e) {
                    var n = e.markedSpans;
                    if (n)
                        for (var r = 0; r < n.length; ++r) null != n[r].from && t.push(n[r].marker)
                })), t
            },
            posFromIndex: function(t) {
                var e, n = this.first,
                    r = this.lineSeparator().length;
                return this.iter((function(i) {
                    var o = i.text.length + r;
                    if (o > t) return e = t, !0;
                    t -= o, ++n
                })), se(this, te(n, e))
            },
            indexFromPos: function(t) {
                var e = (t = se(this, t)).ch;
                if (t.line < this.first || t.ch < 0) return 0;
                var n = this.lineSeparator().length;
                return this.iter(this.first, t.line, (function(t) {
                    e += t.text.length + n
                })), e
            },
            copy: function(t) {
                var e = new Ao(Xt(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                return e.scrollTop = this.scrollTop, e.scrollLeft = this.scrollLeft, e.sel = this.sel, e.extend = !1, t && (e.history.undoDepth = this.history.undoDepth, e.setHistory(this.getHistory())), e
            },
            linkedDoc: function(t) {
                t || (t = {});
                var e = this.first,
                    n = this.first + this.size;
                null != t.from && t.from > e && (e = t.from), null != t.to && t.to < n && (n = t.to);
                var r = new Ao(Xt(this, e, n), t.mode || this.modeOption, e, this.lineSep, this.direction);
                return t.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
                        doc: r,
                        sharedHist: t.sharedHist
                    }), r.linked = [{
                        doc: this,
                        isParent: !0,
                        sharedHist: t.sharedHist
                    }],
                    function(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n],
                                i = r.find(),
                                o = t.clipPos(i.from),
                                a = t.clipPos(i.to);
                            if (ee(o, a)) {
                                var s = To(t, o, a, r.primary, r.primary.type);
                                r.markers.push(s), s.parent = r
                            }
                        }
                    }(r, Eo(this)), r
            },
            unlinkDoc: function(t) {
                if (t instanceof Oa && (t = t.doc), this.linked)
                    for (var e = 0; e < this.linked.length; ++e)
                        if (this.linked[e].doc == t) {
                            this.linked.splice(e, 1), t.unlinkDoc(this), Lo(Eo(this));
                            break
                        } if (t.history == this.history) {
                    var n = [t.id];
                    Pi(t, (function(t) {
                        return n.push(t.id)
                    }), !0), t.history = new Ii(null), t.history.done = Gi(this.history.done, n), t.history.undone = Gi(this.history.undone, n)
                }
            },
            iterLinkedDocs: function(t) {
                Pi(this, t)
            },
            getMode: function() {
                return this.mode
            },
            getEditor: function() {
                return this.cm
            },
            splitLines: function(t) {
                return this.lineSep ? t.split(this.lineSep) : At(t)
            },
            lineSeparator: function() {
                return this.lineSep || "\n"
            },
            setDirection: ni((function(t) {
                var e;
                "rtl" != t && (t = "ltr"), t != this.direction && (this.direction = t, this.iter((function(t) {
                    return t.order = null
                })), this.cm && Zr(e = this.cm, (function() {
                    Di(e), fr(e)
                })))
            }))
        }), Ao.prototype.eachLine = Ao.prototype.iter;
        var No = 0;

        function Ro(t) {
            var e = this;
            if (Po(e), !gt(e, t) && !wn(e.display, t)) {
                yt(t), a && (No = +new Date);
                var n = lr(e, t, !0),
                    r = t.dataTransfer.files;
                if (n && !e.isReadOnly())
                    if (r && r.length && window.FileReader && window.File)
                        for (var i = r.length, o = Array(i), s = 0, u = function() {
                                ++s == i && ti(e, (function() {
                                    var t = {
                                        from: n = se(e.doc, n),
                                        to: n,
                                        text: e.doc.splitLines(o.filter((function(t) {
                                            return null != t
                                        })).join(e.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    lo(e.doc, t), Qi(e.doc, Ci(se(e.doc, n), se(e.doc, Ti(t))))
                                }))()
                            }, l = function(t, n) {
                                if (e.options.allowDropFileTypes && -1 == H(e.options.allowDropFileTypes, t.type)) u();
                                else {
                                    var r = new FileReader;
                                    r.onerror = function() {
                                        return u()
                                    }, r.onload = function() {
                                        var t = r.result;
                                        /[\x00-\x08\x0e-\x1f]{2}/.test(t) || (o[n] = t), u()
                                    }, r.readAsText(t)
                                }
                            }, c = 0; c < r.length; c++) l(r[c], c);
                    else {
                        if (e.state.draggingText && e.doc.sel.contains(n) > -1) return e.state.draggingText(t), void setTimeout((function() {
                            return e.display.input.focus()
                        }), 20);
                        try {
                            var f = t.dataTransfer.getData("Text");
                            if (f) {
                                var h;
                                if (e.state.draggingText && !e.state.draggingText.copy && (h = e.listSelections()), to(e.doc, Ci(n, n)), h)
                                    for (var p = 0; p < h.length; ++p) go(e.doc, "", h[p].anchor, h[p].head, "drag");
                                e.replaceSelection(f, "around", "paste"), e.display.input.focus()
                            }
                        } catch (t) {}
                    }
            }
        }

        function Po(t) {
            t.display.dragCursor && (t.display.lineSpace.removeChild(t.display.dragCursor), t.display.dragCursor = null)
        }

        function Fo(t) {
            if (document.getElementsByClassName) {
                for (var e = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < e.length; r++) {
                    var i = e[r].CodeMirror;
                    i && n.push(i)
                }
                n.length && n[0].operation((function() {
                    for (var e = 0; e < n.length; e++) t(n[e])
                }))
            }
        }
        var Do = !1;

        function Io() {
            var t;
            Do || (ft(window, "resize", (function() {
                null == t && (t = setTimeout((function() {
                    t = null, Fo(Wo)
                }), 100))
            })), ft(window, "blur", (function() {
                return Fo(Cr)
            })), Do = !0)
        }

        function Wo(t) {
            var e = t.display;
            e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null, e.scrollbarsClipped = !1, t.setSize()
        }
        for (var jo = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                224: "Mod",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
            }, Ho = 0; Ho < 10; Ho++) jo[Ho + 48] = jo[Ho + 96] = String(Ho);
        for (var zo = 65; zo <= 90; zo++) jo[zo] = String.fromCharCode(zo);
        for (var Bo = 1; Bo <= 12; Bo++) jo[Bo + 111] = jo[Bo + 63235] = "F" + Bo;
        var Uo = {};

        function Vo(t) {
            var e, n, r, i, o = t.split(/-(?!$)/);
            t = o[o.length - 1];
            for (var a = 0; a < o.length - 1; a++) {
                var s = o[a];
                if (/^(cmd|meta|m)$/i.test(s)) i = !0;
                else if (/^a(lt)?$/i.test(s)) e = !0;
                else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
                else {
                    if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
                    r = !0
                }
            }
            return e && (t = "Alt-" + t), n && (t = "Ctrl-" + t), i && (t = "Cmd-" + t), r && (t = "Shift-" + t), t
        }

        function Ko(t) {
            var e = {};
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var r = t[n];
                    if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                    if ("..." == r) {
                        delete t[n];
                        continue
                    }
                    for (var i = q(n.split(" "), Vo), o = 0; o < i.length; o++) {
                        var a = void 0,
                            s = void 0;
                        o == i.length - 1 ? (s = i.join(" "), a = r) : (s = i.slice(0, o + 1).join(" "), a = "...");
                        var u = e[s];
                        if (u) {
                            if (u != a) throw new Error("Inconsistent bindings for " + s)
                        } else e[s] = a
                    }
                    delete t[n]
                } for (var l in e) t[l] = e[l];
            return t
        }

        function Go(t, e, n, r) {
            var i = (e = Yo(e)).call ? e.call(t, r) : e[t];
            if (!1 === i) return "nothing";
            if ("..." === i) return "multi";
            if (null != i && n(i)) return "handled";
            if (e.fallthrough) {
                if ("[object Array]" != Object.prototype.toString.call(e.fallthrough)) return Go(t, e.fallthrough, n, r);
                for (var o = 0; o < e.fallthrough.length; o++) {
                    var a = Go(t, e.fallthrough[o], n, r);
                    if (a) return a
                }
            }
        }

        function $o(t) {
            var e = "string" == typeof t ? t : jo[t.keyCode];
            return "Ctrl" == e || "Alt" == e || "Shift" == e || "Mod" == e
        }

        function Xo(t, e, n) {
            var r = t;
            return e.altKey && "Alt" != r && (t = "Alt-" + t), (w ? e.metaKey : e.ctrlKey) && "Ctrl" != r && (t = "Ctrl-" + t), (w ? e.ctrlKey : e.metaKey) && "Mod" != r && (t = "Cmd-" + t), !n && e.shiftKey && "Shift" != r && (t = "Shift-" + t), t
        }

        function qo(t, e) {
            if (f && 34 == t.keyCode && t.char) return !1;
            var n = jo[t.keyCode];
            return null != n && !t.altGraphKey && (3 == t.keyCode && t.code && (n = t.code), Xo(n, t, e))
        }

        function Yo(t) {
            return "string" == typeof t ? Uo[t] : t
        }

        function Jo(t, e) {
            for (var n = t.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                for (var o = e(n[i]); r.length && ee(o.from, X(r).to) <= 0;) {
                    var a = r.pop();
                    if (ee(a.from, o.from) < 0) {
                        o.from = a.from;
                        break
                    }
                }
                r.push(o)
            }
            Zr(t, (function() {
                for (var e = r.length - 1; e >= 0; e--) go(t.doc, "", r[e].from, r[e].to, "+delete");
                Ar(t)
            }))
        }

        function Qo(t, e, n) {
            var r = it(t.text, e + n, n);
            return r < 0 || r > t.text.length ? null : r
        }

        function Zo(t, e, n) {
            var r = Qo(t, e.ch, n);
            return null == r ? null : new te(e.line, r, n < 0 ? "after" : "before")
        }

        function ta(t, e, n, r, i) {
            if (t) {
                "rtl" == e.doc.direction && (i = -i);
                var o = lt(n, e.doc.direction);
                if (o) {
                    var a, s = i < 0 ? X(o) : o[0],
                        u = i < 0 == (1 == s.level) ? "after" : "before";
                    if (s.level > 0 || "rtl" == e.doc.direction) {
                        var l = Nn(e, n);
                        a = i < 0 ? n.text.length - 1 : 0;
                        var c = Rn(e, l, a).top;
                        a = ot((function(t) {
                            return Rn(e, l, t).top == c
                        }), i < 0 == (1 == s.level) ? s.from : s.to - 1, a), "before" == u && (a = Qo(n, a, 1))
                    } else a = i < 0 ? s.to : s.from;
                    return new te(r, a, u)
                }
            }
            return new te(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after")
        }
        Uo.basic = {
            Left: "goCharLeft",
            Right: "goCharRight",
            Up: "goLineUp",
            Down: "goLineDown",
            End: "goLineEnd",
            Home: "goLineStartSmart",
            PageUp: "goPageUp",
            PageDown: "goPageDown",
            Delete: "delCharAfter",
            Backspace: "delCharBefore",
            "Shift-Backspace": "delCharBefore",
            Tab: "defaultTab",
            "Shift-Tab": "indentAuto",
            Enter: "newlineAndIndent",
            Insert: "toggleOverwrite",
            Esc: "singleSelection"
        }, Uo.pcDefault = {
            "Ctrl-A": "selectAll",
            "Ctrl-D": "deleteLine",
            "Ctrl-Z": "undo",
            "Shift-Ctrl-Z": "redo",
            "Ctrl-Y": "redo",
            "Ctrl-Home": "goDocStart",
            "Ctrl-End": "goDocEnd",
            "Ctrl-Up": "goLineUp",
            "Ctrl-Down": "goLineDown",
            "Ctrl-Left": "goGroupLeft",
            "Ctrl-Right": "goGroupRight",
            "Alt-Left": "goLineStart",
            "Alt-Right": "goLineEnd",
            "Ctrl-Backspace": "delGroupBefore",
            "Ctrl-Delete": "delGroupAfter",
            "Ctrl-S": "save",
            "Ctrl-F": "find",
            "Ctrl-G": "findNext",
            "Shift-Ctrl-G": "findPrev",
            "Shift-Ctrl-F": "replace",
            "Shift-Ctrl-R": "replaceAll",
            "Ctrl-[": "indentLess",
            "Ctrl-]": "indentMore",
            "Ctrl-U": "undoSelection",
            "Shift-Ctrl-U": "redoSelection",
            "Alt-U": "redoSelection",
            fallthrough: "basic"
        }, Uo.emacsy = {
            "Ctrl-F": "goCharRight",
            "Ctrl-B": "goCharLeft",
            "Ctrl-P": "goLineUp",
            "Ctrl-N": "goLineDown",
            "Alt-F": "goWordRight",
            "Alt-B": "goWordLeft",
            "Ctrl-A": "goLineStart",
            "Ctrl-E": "goLineEnd",
            "Ctrl-V": "goPageDown",
            "Shift-Ctrl-V": "goPageUp",
            "Ctrl-D": "delCharAfter",
            "Ctrl-H": "delCharBefore",
            "Alt-D": "delWordAfter",
            "Alt-Backspace": "delWordBefore",
            "Ctrl-K": "killLine",
            "Ctrl-T": "transposeChars",
            "Ctrl-O": "openLine"
        }, Uo.macDefault = {
            "Cmd-A": "selectAll",
            "Cmd-D": "deleteLine",
            "Cmd-Z": "undo",
            "Shift-Cmd-Z": "redo",
            "Cmd-Y": "redo",
            "Cmd-Home": "goDocStart",
            "Cmd-Up": "goDocStart",
            "Cmd-End": "goDocEnd",
            "Cmd-Down": "goDocEnd",
            "Alt-Left": "goGroupLeft",
            "Alt-Right": "goGroupRight",
            "Cmd-Left": "goLineLeft",
            "Cmd-Right": "goLineRight",
            "Alt-Backspace": "delGroupBefore",
            "Ctrl-Alt-Backspace": "delGroupAfter",
            "Alt-Delete": "delGroupAfter",
            "Cmd-S": "save",
            "Cmd-F": "find",
            "Cmd-G": "findNext",
            "Shift-Cmd-G": "findPrev",
            "Cmd-Alt-F": "replace",
            "Shift-Cmd-Alt-F": "replaceAll",
            "Cmd-[": "indentLess",
            "Cmd-]": "indentMore",
            "Cmd-Backspace": "delWrappedLineLeft",
            "Cmd-Delete": "delWrappedLineRight",
            "Cmd-U": "undoSelection",
            "Shift-Cmd-U": "redoSelection",
            "Ctrl-Up": "goDocStart",
            "Ctrl-Down": "goDocEnd",
            fallthrough: ["basic", "emacsy"]
        }, Uo.default = m ? Uo.macDefault : Uo.pcDefault;
        var ea = {
            selectAll: so,
            singleSelection: function(t) {
                return t.setSelection(t.getCursor("anchor"), t.getCursor("head"), B)
            },
            killLine: function(t) {
                return Jo(t, (function(e) {
                    if (e.empty()) {
                        var n = Gt(t.doc, e.head.line).text.length;
                        return e.head.ch == n && e.head.line < t.lastLine() ? {
                            from: e.head,
                            to: te(e.head.line + 1, 0)
                        } : {
                            from: e.head,
                            to: te(e.head.line, n)
                        }
                    }
                    return {
                        from: e.from(),
                        to: e.to()
                    }
                }))
            },
            deleteLine: function(t) {
                return Jo(t, (function(e) {
                    return {
                        from: te(e.from().line, 0),
                        to: se(t.doc, te(e.to().line + 1, 0))
                    }
                }))
            },
            delLineLeft: function(t) {
                return Jo(t, (function(t) {
                    return {
                        from: te(t.from().line, 0),
                        to: t.from()
                    }
                }))
            },
            delWrappedLineLeft: function(t) {
                return Jo(t, (function(e) {
                    var n = t.charCoords(e.head, "div").top + 5;
                    return {
                        from: t.coordsChar({
                            left: 0,
                            top: n
                        }, "div"),
                        to: e.from()
                    }
                }))
            },
            delWrappedLineRight: function(t) {
                return Jo(t, (function(e) {
                    var n = t.charCoords(e.head, "div").top + 5,
                        r = t.coordsChar({
                            left: t.display.lineDiv.offsetWidth + 100,
                            top: n
                        }, "div");
                    return {
                        from: e.from(),
                        to: r
                    }
                }))
            },
            undo: function(t) {
                return t.undo()
            },
            redo: function(t) {
                return t.redo()
            },
            undoSelection: function(t) {
                return t.undoSelection()
            },
            redoSelection: function(t) {
                return t.redoSelection()
            },
            goDocStart: function(t) {
                return t.extendSelection(te(t.firstLine(), 0))
            },
            goDocEnd: function(t) {
                return t.extendSelection(te(t.lastLine()))
            },
            goLineStart: function(t) {
                return t.extendSelectionsBy((function(e) {
                    return na(t, e.head.line)
                }), {
                    origin: "+move",
                    bias: 1
                })
            },
            goLineStartSmart: function(t) {
                return t.extendSelectionsBy((function(e) {
                    return ra(t, e.head)
                }), {
                    origin: "+move",
                    bias: 1
                })
            },
            goLineEnd: function(t) {
                return t.extendSelectionsBy((function(e) {
                    return function(t, e) {
                        var n = Gt(t.doc, e),
                            r = function(t) {
                                for (var e; e = Fe(t);) t = e.find(1, !0).line;
                                return t
                            }(n);
                        return r != n && (e = Yt(r)), ta(!0, t, n, e, -1)
                    }(t, e.head.line)
                }), {
                    origin: "+move",
                    bias: -1
                })
            },
            goLineRight: function(t) {
                return t.extendSelectionsBy((function(e) {
                    var n = t.cursorCoords(e.head, "div").top + 5;
                    return t.coordsChar({
                        left: t.display.lineDiv.offsetWidth + 100,
                        top: n
                    }, "div")
                }), V)
            },
            goLineLeft: function(t) {
                return t.extendSelectionsBy((function(e) {
                    var n = t.cursorCoords(e.head, "div").top + 5;
                    return t.coordsChar({
                        left: 0,
                        top: n
                    }, "div")
                }), V)
            },
            goLineLeftSmart: function(t) {
                return t.extendSelectionsBy((function(e) {
                    var n = t.cursorCoords(e.head, "div").top + 5,
                        r = t.coordsChar({
                            left: 0,
                            top: n
                        }, "div");
                    return r.ch < t.getLine(r.line).search(/\S/) ? ra(t, e.head) : r
                }), V)
            },
            goLineUp: function(t) {
                return t.moveV(-1, "line")
            },
            goLineDown: function(t) {
                return t.moveV(1, "line")
            },
            goPageUp: function(t) {
                return t.moveV(-1, "page")
            },
            goPageDown: function(t) {
                return t.moveV(1, "page")
            },
            goCharLeft: function(t) {
                return t.moveH(-1, "char")
            },
            goCharRight: function(t) {
                return t.moveH(1, "char")
            },
            goColumnLeft: function(t) {
                return t.moveH(-1, "column")
            },
            goColumnRight: function(t) {
                return t.moveH(1, "column")
            },
            goWordLeft: function(t) {
                return t.moveH(-1, "word")
            },
            goGroupRight: function(t) {
                return t.moveH(1, "group")
            },
            goGroupLeft: function(t) {
                return t.moveH(-1, "group")
            },
            goWordRight: function(t) {
                return t.moveH(1, "word")
            },
            delCharBefore: function(t) {
                return t.deleteH(-1, "codepoint")
            },
            delCharAfter: function(t) {
                return t.deleteH(1, "char")
            },
            delWordBefore: function(t) {
                return t.deleteH(-1, "word")
            },
            delWordAfter: function(t) {
                return t.deleteH(1, "word")
            },
            delGroupBefore: function(t) {
                return t.deleteH(-1, "group")
            },
            delGroupAfter: function(t) {
                return t.deleteH(1, "group")
            },
            indentAuto: function(t) {
                return t.indentSelection("smart")
            },
            indentMore: function(t) {
                return t.indentSelection("add")
            },
            indentLess: function(t) {
                return t.indentSelection("subtract")
            },
            insertTab: function(t) {
                return t.replaceSelection("\t")
            },
            insertSoftTab: function(t) {
                for (var e = [], n = t.listSelections(), r = t.options.tabSize, i = 0; i < n.length; i++) {
                    var o = n[i].from(),
                        a = W(t.getLine(o.line), o.ch, r);
                    e.push($(r - a % r))
                }
                t.replaceSelections(e)
            },
            defaultTab: function(t) {
                t.somethingSelected() ? t.indentSelection("add") : t.execCommand("insertTab")
            },
            transposeChars: function(t) {
                return Zr(t, (function() {
                    for (var e = t.listSelections(), n = [], r = 0; r < e.length; r++)
                        if (e[r].empty()) {
                            var i = e[r].head,
                                o = Gt(t.doc, i.line).text;
                            if (o)
                                if (i.ch == o.length && (i = new te(i.line, i.ch - 1)), i.ch > 0) i = new te(i.line, i.ch + 1), t.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), te(i.line, i.ch - 2), i, "+transpose");
                                else if (i.line > t.doc.first) {
                                var a = Gt(t.doc, i.line - 1).text;
                                a && (i = new te(i.line, 1), t.replaceRange(o.charAt(0) + t.doc.lineSeparator() + a.charAt(a.length - 1), te(i.line - 1, a.length - 1), i, "+transpose"))
                            }
                            n.push(new ki(i, i))
                        } t.setSelections(n)
                }))
            },
            newlineAndIndent: function(t) {
                return Zr(t, (function() {
                    for (var e = t.listSelections(), n = e.length - 1; n >= 0; n--) t.replaceRange(t.doc.lineSeparator(), e[n].anchor, e[n].head, "+input");
                    e = t.listSelections();
                    for (var r = 0; r < e.length; r++) t.indentLine(e[r].from().line, null, !0);
                    Ar(t)
                }))
            },
            openLine: function(t) {
                return t.replaceSelection("\n", "start")
            },
            toggleOverwrite: function(t) {
                return t.toggleOverwrite()
            }
        };

        function na(t, e) {
            var n = Gt(t.doc, e),
                r = We(n);
            return r != n && (e = Yt(r)), ta(!0, t, r, e, 1)
        }

        function ra(t, e) {
            var n = na(t, e.line),
                r = Gt(t.doc, n.line),
                i = lt(r, t.doc.direction);
            if (!i || 0 == i[0].level) {
                var o = Math.max(n.ch, r.text.search(/\S/)),
                    a = e.line == n.line && e.ch <= o && e.ch;
                return te(n.line, a ? 0 : o, n.sticky)
            }
            return n
        }

        function ia(t, e, n) {
            if ("string" == typeof e && !(e = ea[e])) return !1;
            t.display.input.ensurePolled();
            var r = t.display.shift,
                i = !1;
            try {
                t.isReadOnly() && (t.state.suppressEdits = !0), n && (t.display.shift = !1), i = e(t) != z
            } finally {
                t.display.shift = r, t.state.suppressEdits = !1
            }
            return i
        }
        var oa = new j;

        function aa(t, e, n, r) {
            var i = t.state.keySeq;
            if (i) {
                if ($o(e)) return "handled";
                if (/\'$/.test(e) ? t.state.keySeq = null : oa.set(50, (function() {
                        t.state.keySeq == i && (t.state.keySeq = null, t.display.input.reset())
                    })), sa(t, i + " " + e, n, r)) return !0
            }
            return sa(t, e, n, r)
        }

        function sa(t, e, n, r) {
            var i = function(t, e, n) {
                for (var r = 0; r < t.state.keyMaps.length; r++) {
                    var i = Go(e, t.state.keyMaps[r], n, t);
                    if (i) return i
                }
                return t.options.extraKeys && Go(e, t.options.extraKeys, n, t) || Go(e, t.options.keyMap, n, t)
            }(t, e, r);
            return "multi" == i && (t.state.keySeq = e), "handled" == i && un(t, "keyHandled", t, e, n), "handled" != i && "multi" != i || (yt(n), xr(t)), !!i
        }

        function ua(t, e) {
            var n = qo(e, !0);
            return !!n && (e.shiftKey && !t.state.keySeq ? aa(t, "Shift-" + n, e, (function(e) {
                return ia(t, e, !0)
            })) || aa(t, n, e, (function(e) {
                if ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion) return ia(t, e)
            })) : aa(t, n, e, (function(e) {
                return ia(t, e)
            })))
        }
        var la = null;

        function ca(t) {
            var e = this;
            if (!(t.target && t.target != e.display.input.getField() || (e.curOp.focus = N(), gt(e, t)))) {
                a && s < 11 && 27 == t.keyCode && (t.returnValue = !1);
                var r = t.keyCode;
                e.display.shift = 16 == r || t.shiftKey;
                var i = ua(e, t);
                f && (la = i ? r : null, i || 88 != r || Rt || !(m ? t.metaKey : t.ctrlKey) || e.replaceSelection("", null, "cut")), n && !m && !i && 46 == r && t.shiftKey && !t.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != r || /\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) || function(t) {
                    var e = t.display.lineDiv;

                    function n(t) {
                        18 != t.keyCode && t.altKey || (T(e, "CodeMirror-crosshair"), pt(document, "keyup", n), pt(document, "mouseover", n))
                    }
                    R(e, "CodeMirror-crosshair"), ft(document, "keyup", n), ft(document, "mouseover", n)
                }(e)
            }
        }

        function fa(t) {
            16 == t.keyCode && (this.doc.sel.shift = !1), gt(this, t)
        }

        function ha(t) {
            var e = this;
            if (!(t.target && t.target != e.display.input.getField() || wn(e.display, t) || gt(e, t) || t.ctrlKey && !t.altKey || m && t.metaKey)) {
                var n = t.keyCode,
                    r = t.charCode;
                if (f && n == la) return la = null, void yt(t);
                if (!f || t.which && !(t.which < 10) || !ua(e, t)) {
                    var i = String.fromCharCode(null == r ? n : r);
                    "\b" != i && (function(t, e, n) {
                        return aa(t, "'" + n + "'", e, (function(e) {
                            return ia(t, e, !0)
                        }))
                    }(e, t, i) || e.display.input.onKeyPress(t))
                }
            }
        }
        var pa, da, ga = function(t, e, n) {
            this.time = t, this.pos = e, this.button = n
        };

        function va(t) {
            var e = this,
                n = e.display;
            if (!(gt(e, t) || n.activeTouch && n.input.supportsTouch()))
                if (n.input.ensurePolled(), n.shift = t.shiftKey, wn(n, t)) u || (n.scroller.draggable = !1, setTimeout((function() {
                    return n.scroller.draggable = !0
                }), 100));
                else if (!ya(e, t)) {
                var r = lr(e, t),
                    i = St(t),
                    o = r ? function(t, e) {
                        var n = +new Date;
                        return da && da.compare(n, t, e) ? (pa = da = null, "triple") : pa && pa.compare(n, t, e) ? (da = new ga(n, t, e), pa = null, "double") : (pa = new ga(n, t, e), da = null, "single")
                    }(r, i) : "single";
                window.focus(), 1 == i && e.state.selectingText && e.state.selectingText(t), r && function(t, e, n, r, i) {
                    var o = "Click";
                    return "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o), aa(t, Xo(o = (1 == e ? "Left" : 2 == e ? "Middle" : "Right") + o, i), i, (function(e) {
                        if ("string" == typeof e && (e = ea[e]), !e) return !1;
                        var r = !1;
                        try {
                            t.isReadOnly() && (t.state.suppressEdits = !0), r = e(t, n) != z
                        } finally {
                            t.state.suppressEdits = !1
                        }
                        return r
                    }))
                }(e, i, r, o, t) || (1 == i ? r ? function(t, e, n, r) {
                    a ? setTimeout(D(wr, t), 0) : t.curOp.focus = N();
                    var i, o = function(t, e, n) {
                            var r = t.getOption("configureMouse"),
                                i = r ? r(t, e, n) : {};
                            if (null == i.unit) {
                                var o = y ? n.shiftKey && n.metaKey : n.altKey;
                                i.unit = o ? "rectangle" : "single" == e ? "char" : "double" == e ? "word" : "line"
                            }
                            return (null == i.extend || t.doc.extend) && (i.extend = t.doc.extend || n.shiftKey), null == i.addNew && (i.addNew = m ? n.metaKey : n.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(m ? n.altKey : n.ctrlKey)), i
                        }(t, n, r),
                        l = t.doc.sel;
                    t.options.dragDrop && Ot && !t.isReadOnly() && "single" == n && (i = l.contains(e)) > -1 && (ee((i = l.ranges[i]).from(), e) < 0 || e.xRel > 0) && (ee(i.to(), e) > 0 || e.xRel < 0) ? function(t, e, n, r) {
                        var i = t.display,
                            o = !1,
                            l = ti(t, (function(e) {
                                u && (i.scroller.draggable = !1), t.state.draggingText = !1, pt(i.wrapper.ownerDocument, "mouseup", l), pt(i.wrapper.ownerDocument, "mousemove", c), pt(i.scroller, "dragstart", f), pt(i.scroller, "drop", l), o || (yt(e), r.addNew || Xi(t.doc, n, null, null, r.extend), u && !h || a && 9 == s ? setTimeout((function() {
                                    i.wrapper.ownerDocument.body.focus({
                                        preventScroll: !0
                                    }), i.input.focus()
                                }), 20) : i.input.focus())
                            })),
                            c = function(t) {
                                o = o || Math.abs(e.clientX - t.clientX) + Math.abs(e.clientY - t.clientY) >= 10
                            },
                            f = function() {
                                return o = !0
                            };
                        u && (i.scroller.draggable = !0), t.state.draggingText = l, l.copy = !r.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop(), ft(i.wrapper.ownerDocument, "mouseup", l), ft(i.wrapper.ownerDocument, "mousemove", c), ft(i.scroller, "dragstart", f), ft(i.scroller, "drop", l), kr(t), setTimeout((function() {
                            return i.input.focus()
                        }), 20)
                    }(t, r, e, o) : function(t, e, n, r) {
                        var i = t.display,
                            o = t.doc;
                        yt(e);
                        var a, s, u = o.sel,
                            l = u.ranges;
                        if (r.addNew && !r.extend ? (s = o.sel.contains(n), a = s > -1 ? l[s] : new ki(n, n)) : (a = o.sel.primary(), s = o.sel.primIndex), "rectangle" == r.unit) r.addNew || (a = new ki(n, n)), n = lr(t, e, !0, !0), s = -1;
                        else {
                            var c = _a(t, n, r.unit);
                            a = r.extend ? $i(a, c.anchor, c.head, r.extend) : c
                        }
                        r.addNew ? -1 == s ? (s = l.length, Zi(o, Si(t, l.concat([a]), s), {
                            scroll: !1,
                            origin: "*mouse"
                        })) : l.length > 1 && l[s].empty() && "char" == r.unit && !r.extend ? (Zi(o, Si(t, l.slice(0, s).concat(l.slice(s + 1)), 0), {
                            scroll: !1,
                            origin: "*mouse"
                        }), u = o.sel) : Yi(o, s, a, U) : (s = 0, Zi(o, new wi([a], 0), U), u = o.sel);
                        var f = n;

                        function h(e) {
                            if (0 != ee(f, e))
                                if (f = e, "rectangle" == r.unit) {
                                    for (var i = [], l = t.options.tabSize, c = W(Gt(o, n.line).text, n.ch, l), h = W(Gt(o, e.line).text, e.ch, l), p = Math.min(c, h), d = Math.max(c, h), g = Math.min(n.line, e.line), v = Math.min(t.lastLine(), Math.max(n.line, e.line)); g <= v; g++) {
                                        var _ = Gt(o, g).text,
                                            m = K(_, p, l);
                                        p == d ? i.push(new ki(te(g, m), te(g, m))) : _.length > m && i.push(new ki(te(g, m), te(g, K(_, d, l))))
                                    }
                                    i.length || i.push(new ki(n, n)), Zi(o, Si(t, u.ranges.slice(0, s).concat(i), s), {
                                        origin: "*mouse",
                                        scroll: !1
                                    }), t.scrollIntoView(e)
                                } else {
                                    var y, b = a,
                                        x = _a(t, e, r.unit),
                                        w = b.anchor;
                                    ee(x.anchor, w) > 0 ? (y = x.head, w = oe(b.from(), x.anchor)) : (y = x.anchor, w = ie(b.to(), x.head));
                                    var k = u.ranges.slice(0);
                                    k[s] = function(t, e) {
                                        var n = e.anchor,
                                            r = e.head,
                                            i = Gt(t.doc, n.line);
                                        if (0 == ee(n, r) && n.sticky == r.sticky) return e;
                                        var o = lt(i);
                                        if (!o) return e;
                                        var a = st(o, n.ch, n.sticky),
                                            s = o[a];
                                        if (s.from != n.ch && s.to != n.ch) return e;
                                        var u, l = a + (s.from == n.ch == (1 != s.level) ? 0 : 1);
                                        if (0 == l || l == o.length) return e;
                                        if (r.line != n.line) u = (r.line - n.line) * ("ltr" == t.doc.direction ? 1 : -1) > 0;
                                        else {
                                            var c = st(o, r.ch, r.sticky),
                                                f = c - a || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
                                            u = c == l - 1 || c == l ? f < 0 : f > 0
                                        }
                                        var h = o[l + (u ? -1 : 0)],
                                            p = u == (1 == h.level),
                                            d = p ? h.from : h.to,
                                            g = p ? "after" : "before";
                                        return n.ch == d && n.sticky == g ? e : new ki(new te(n.line, d, g), r)
                                    }(t, new ki(se(o, w), y)), Zi(o, Si(t, k, s), U)
                                }
                        }
                        var p = i.wrapper.getBoundingClientRect(),
                            d = 0;

                        function g(e) {
                            t.state.selectingText = !1, d = 1 / 0, e && (yt(e), i.input.focus()), pt(i.wrapper.ownerDocument, "mousemove", v), pt(i.wrapper.ownerDocument, "mouseup", _), o.history.lastSelOrigin = null
                        }
                        var v = ti(t, (function(e) {
                                0 !== e.buttons && St(e) ? function e(n) {
                                    var a = ++d,
                                        s = lr(t, n, !0, "rectangle" == r.unit);
                                    if (s)
                                        if (0 != ee(s, f)) {
                                            t.curOp.focus = N(), h(s);
                                            var u = Er(i, o);
                                            (s.line >= u.to || s.line < u.from) && setTimeout(ti(t, (function() {
                                                d == a && e(n)
                                            })), 150)
                                        } else {
                                            var l = n.clientY < p.top ? -20 : n.clientY > p.bottom ? 20 : 0;
                                            l && setTimeout(ti(t, (function() {
                                                d == a && (i.scroller.scrollTop += l, e(n))
                                            })), 50)
                                        }
                                }(e) : g(e)
                            })),
                            _ = ti(t, g);
                        t.state.selectingText = _, ft(i.wrapper.ownerDocument, "mousemove", v), ft(i.wrapper.ownerDocument, "mouseup", _)
                    }(t, r, e, o)
                }(e, r, o, t) : kt(t) == n.scroller && yt(t) : 2 == i ? (r && Xi(e.doc, r), setTimeout((function() {
                    return n.input.focus()
                }), 20)) : 3 == i && (k ? e.display.input.onContextMenu(t) : kr(e)))
            }
        }

        function _a(t, e, n) {
            if ("char" == n) return new ki(e, e);
            if ("word" == n) return t.findWordAt(e);
            if ("line" == n) return new ki(te(e.line, 0), se(t.doc, te(e.line + 1, 0)));
            var r = n(t, e);
            return new ki(r.from, r.to)
        }

        function ma(t, e, n, r) {
            var i, o;
            if (e.touches) i = e.touches[0].clientX, o = e.touches[0].clientY;
            else try {
                i = e.clientX, o = e.clientY
            } catch (t) {
                return !1
            }
            if (i >= Math.floor(t.display.gutters.getBoundingClientRect().right)) return !1;
            r && yt(e);
            var a = t.display,
                s = a.lineDiv.getBoundingClientRect();
            if (o > s.bottom || !_t(t, n)) return xt(e);
            o -= s.top - a.viewOffset;
            for (var u = 0; u < t.display.gutterSpecs.length; ++u) {
                var l = a.gutters.childNodes[u];
                if (l && l.getBoundingClientRect().right >= i) return dt(t, n, t, Jt(t.doc, o), t.display.gutterSpecs[u].className, e), xt(e)
            }
        }

        function ya(t, e) {
            return ma(t, e, "gutterClick", !0)
        }

        function ba(t, e) {
            wn(t.display, e) || function(t, e) {
                return !!_t(t, "gutterContextMenu") && ma(t, e, "gutterContextMenu", !1)
            }(t, e) || gt(t, e, "contextmenu") || k || t.display.input.onContextMenu(e)
        }

        function xa(t) {
            t.display.wrapper.className = t.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + t.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Hn(t)
        }
        ga.prototype.compare = function(t, e, n) {
            return this.time + 400 > t && 0 == ee(e, this.pos) && n == this.button
        };
        var wa = {
                toString: function() {
                    return "CodeMirror.Init"
                }
            },
            ka = {},
            Sa = {};

        function Ca(t, e, n) {
            if (!e != !(n && n != wa)) {
                var r = t.display.dragFunctions,
                    i = e ? ft : pt;
                i(t.display.scroller, "dragstart", r.start), i(t.display.scroller, "dragenter", r.enter), i(t.display.scroller, "dragover", r.over), i(t.display.scroller, "dragleave", r.leave), i(t.display.scroller, "drop", r.drop)
            }
        }

        function Ta(t) {
            t.options.lineWrapping ? (R(t.display.wrapper, "CodeMirror-wrap"), t.display.sizer.style.minWidth = "", t.display.sizerWidth = null) : (T(t.display.wrapper, "CodeMirror-wrap"), Ke(t)), ur(t), fr(t), Hn(t), setTimeout((function() {
                return zr(t)
            }), 100)
        }

        function Oa(t, e) {
            var n = this;
            if (!(this instanceof Oa)) return new Oa(t, e);
            this.options = e = e ? I(e) : {}, I(ka, e, !1);
            var r = e.value;
            "string" == typeof r ? r = new Ao(r, e.mode, null, e.lineSeparator, e.direction) : e.mode && (r.modeOption = e.mode), this.doc = r;
            var i = new Oa.inputStyles[e.inputStyle](this),
                o = this.display = new vi(t, r, i, e);
            for (var l in o.wrapper.CodeMirror = this, xa(this), e.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Vr(this), this.state = {
                        keyMaps: [],
                        overlays: [],
                        modeGen: 0,
                        overwrite: !1,
                        delayingBlurEvent: !1,
                        focused: !1,
                        suppressEdits: !1,
                        pasteIncoming: -1,
                        cutIncoming: -1,
                        selectingText: !1,
                        draggingText: !1,
                        highlight: new j,
                        keySeq: null,
                        specialChars: null
                    }, e.autofocus && !_ && o.input.focus(), a && s < 11 && setTimeout((function() {
                        return n.display.input.reset(!0)
                    }), 20),
                    function(t) {
                        var e = t.display;
                        ft(e.scroller, "mousedown", ti(t, va)), ft(e.scroller, "dblclick", a && s < 11 ? ti(t, (function(e) {
                            if (!gt(t, e)) {
                                var n = lr(t, e);
                                if (n && !ya(t, e) && !wn(t.display, e)) {
                                    yt(e);
                                    var r = t.findWordAt(n);
                                    Xi(t.doc, r.anchor, r.head)
                                }
                            }
                        })) : function(e) {
                            return gt(t, e) || yt(e)
                        }), ft(e.scroller, "contextmenu", (function(e) {
                            return ba(t, e)
                        })), ft(e.input.getField(), "contextmenu", (function(n) {
                            e.scroller.contains(n.target) || ba(t, n)
                        }));
                        var n, r = {
                            end: 0
                        };

                        function i() {
                            e.activeTouch && (n = setTimeout((function() {
                                return e.activeTouch = null
                            }), 1e3), (r = e.activeTouch).end = +new Date)
                        }

                        function o(t, e) {
                            if (null == e.left) return !0;
                            var n = e.left - t.left,
                                r = e.top - t.top;
                            return n * n + r * r > 400
                        }
                        ft(e.scroller, "touchstart", (function(i) {
                            if (!gt(t, i) && ! function(t) {
                                    if (1 != t.touches.length) return !1;
                                    var e = t.touches[0];
                                    return e.radiusX <= 1 && e.radiusY <= 1
                                }(i) && !ya(t, i)) {
                                e.input.ensurePolled(), clearTimeout(n);
                                var o = +new Date;
                                e.activeTouch = {
                                    start: o,
                                    moved: !1,
                                    prev: o - r.end <= 300 ? r : null
                                }, 1 == i.touches.length && (e.activeTouch.left = i.touches[0].pageX, e.activeTouch.top = i.touches[0].pageY)
                            }
                        })), ft(e.scroller, "touchmove", (function() {
                            e.activeTouch && (e.activeTouch.moved = !0)
                        })), ft(e.scroller, "touchend", (function(n) {
                            var r = e.activeTouch;
                            if (r && !wn(e, n) && null != r.left && !r.moved && new Date - r.start < 300) {
                                var a, s = t.coordsChar(e.activeTouch, "page");
                                a = !r.prev || o(r, r.prev) ? new ki(s, s) : !r.prev.prev || o(r, r.prev.prev) ? t.findWordAt(s) : new ki(te(s.line, 0), se(t.doc, te(s.line + 1, 0))), t.setSelection(a.anchor, a.head), t.focus(), yt(n)
                            }
                            i()
                        })), ft(e.scroller, "touchcancel", i), ft(e.scroller, "scroll", (function() {
                            e.scroller.clientHeight && (Fr(t, e.scroller.scrollTop), Ir(t, e.scroller.scrollLeft, !0), dt(t, "scroll", t))
                        })), ft(e.scroller, "mousewheel", (function(e) {
                            return xi(t, e)
                        })), ft(e.scroller, "DOMMouseScroll", (function(e) {
                            return xi(t, e)
                        })), ft(e.wrapper, "scroll", (function() {
                            return e.wrapper.scrollTop = e.wrapper.scrollLeft = 0
                        })), e.dragFunctions = {
                            enter: function(e) {
                                gt(t, e) || wt(e)
                            },
                            over: function(e) {
                                gt(t, e) || (function(t, e) {
                                    var n = lr(t, e);
                                    if (n) {
                                        var r = document.createDocumentFragment();
                                        mr(t, n, r), t.display.dragCursor || (t.display.dragCursor = L("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), t.display.lineSpace.insertBefore(t.display.dragCursor, t.display.cursorDiv)), E(t.display.dragCursor, r)
                                    }
                                }(t, e), wt(e))
                            },
                            start: function(e) {
                                return function(t, e) {
                                    if (a && (!t.state.draggingText || +new Date - No < 100)) wt(e);
                                    else if (!gt(t, e) && !wn(t.display, e) && (e.dataTransfer.setData("Text", t.getSelection()), e.dataTransfer.effectAllowed = "copyMove", e.dataTransfer.setDragImage && !h)) {
                                        var n = L("img", null, null, "position: fixed; left: 0; top: 0;");
                                        n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", f && (n.width = n.height = 1, t.display.wrapper.appendChild(n), n._top = n.offsetTop), e.dataTransfer.setDragImage(n, 0, 0), f && n.parentNode.removeChild(n)
                                    }
                                }(t, e)
                            },
                            drop: ti(t, Ro),
                            leave: function(e) {
                                gt(t, e) || Po(t)
                            }
                        };
                        var u = e.input.getField();
                        ft(u, "keyup", (function(e) {
                            return fa.call(t, e)
                        })), ft(u, "keydown", ti(t, ca)), ft(u, "keypress", ti(t, ha)), ft(u, "focus", (function(e) {
                            return Sr(t, e)
                        })), ft(u, "blur", (function(e) {
                            return Cr(t, e)
                        }))
                    }(this), Io(), Gr(this), this.curOp.forceUpdate = !0, Fi(this, r), e.autofocus && !_ || this.hasFocus() ? setTimeout((function() {
                        n.hasFocus() && !n.state.focused && Sr(n)
                    }), 20) : Cr(this), Sa) Sa.hasOwnProperty(l) && Sa[l](this, e[l], wa);
            hi(this), e.finishInit && e.finishInit(this);
            for (var c = 0; c < Ea.length; ++c) Ea[c](this);
            $r(this), u && e.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
        }
        Oa.defaults = ka, Oa.optionHandlers = Sa;
        var Ea = [];

        function La(t, e, n, r) {
            var i, o = t.doc;
            null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = pe(t, e).state : n = "prev");
            var a = t.options.tabSize,
                s = Gt(o, e),
                u = W(s.text, null, a);
            s.stateAfter && (s.stateAfter = null);
            var l, c = s.text.match(/^\s*/)[0];
            if (r || /\S/.test(s.text)) {
                if ("smart" == n && ((l = o.mode.indent(i, s.text.slice(c.length), s.text)) == z || l > 150)) {
                    if (!r) return;
                    n = "prev"
                }
            } else l = 0, n = "not";
            "prev" == n ? l = e > o.first ? W(Gt(o, e - 1).text, null, a) : 0 : "add" == n ? l = u + t.options.indentUnit : "subtract" == n ? l = u - t.options.indentUnit : "number" == typeof n && (l = u + n), l = Math.max(0, l);
            var f = "",
                h = 0;
            if (t.options.indentWithTabs)
                for (var p = Math.floor(l / a); p; --p) h += a, f += "\t";
            if (h < l && (f += $(l - h)), f != c) return go(o, f, te(e, 0), te(e, c.length), "+input"), s.stateAfter = null, !0;
            for (var d = 0; d < o.sel.ranges.length; d++) {
                var g = o.sel.ranges[d];
                if (g.head.line == e && g.head.ch < c.length) {
                    var v = te(e, c.length);
                    Yi(o, d, new ki(v, v));
                    break
                }
            }
        }
        Oa.defineInitHook = function(t) {
            return Ea.push(t)
        };
        var Ma = null;

        function Aa(t) {
            Ma = t
        }

        function Na(t, e, n, r, i) {
            var o = t.doc;
            t.display.shift = !1, r || (r = o.sel);
            var a = +new Date - 200,
                s = "paste" == i || t.state.pasteIncoming > a,
                u = At(e),
                l = null;
            if (s && r.ranges.length > 1)
                if (Ma && Ma.text.join("\n") == e) {
                    if (r.ranges.length % Ma.text.length == 0) {
                        l = [];
                        for (var c = 0; c < Ma.text.length; c++) l.push(o.splitLines(Ma.text[c]))
                    }
                } else u.length == r.ranges.length && t.options.pasteLinesPerSelection && (l = q(u, (function(t) {
                    return [t]
                })));
            for (var f = t.curOp.updateInput, h = r.ranges.length - 1; h >= 0; h--) {
                var p = r.ranges[h],
                    d = p.from(),
                    g = p.to();
                p.empty() && (n && n > 0 ? d = te(d.line, d.ch - n) : t.state.overwrite && !s ? g = te(g.line, Math.min(Gt(o, g.line).text.length, g.ch + X(u).length)) : s && Ma && Ma.lineWise && Ma.text.join("\n") == u.join("\n") && (d = g = te(d.line, 0)));
                var v = {
                    from: d,
                    to: g,
                    text: l ? l[h % l.length] : u,
                    origin: i || (s ? "paste" : t.state.cutIncoming > a ? "cut" : "+input")
                };
                lo(t.doc, v), un(t, "inputRead", t, v)
            }
            e && !s && Pa(t, e), Ar(t), t.curOp.updateInput < 2 && (t.curOp.updateInput = f), t.curOp.typing = !0, t.state.pasteIncoming = t.state.cutIncoming = -1
        }

        function Ra(t, e) {
            var n = t.clipboardData && t.clipboardData.getData("Text");
            if (n) return t.preventDefault(), e.isReadOnly() || e.options.disableInput || Zr(e, (function() {
                return Na(e, n, 0, null, "paste")
            })), !0
        }

        function Pa(t, e) {
            if (t.options.electricChars && t.options.smartIndent)
                for (var n = t.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                    var i = n.ranges[r];
                    if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
                        var o = t.getModeAt(i.head),
                            a = !1;
                        if (o.electricChars) {
                            for (var s = 0; s < o.electricChars.length; s++)
                                if (e.indexOf(o.electricChars.charAt(s)) > -1) {
                                    a = La(t, i.head.line, "smart");
                                    break
                                }
                        } else o.electricInput && o.electricInput.test(Gt(t.doc, i.head.line).text.slice(0, i.head.ch)) && (a = La(t, i.head.line, "smart"));
                        a && un(t, "electricInput", t, i.head.line)
                    }
                }
        }

        function Fa(t) {
            for (var e = [], n = [], r = 0; r < t.doc.sel.ranges.length; r++) {
                var i = t.doc.sel.ranges[r].head.line,
                    o = {
                        anchor: te(i, 0),
                        head: te(i + 1, 0)
                    };
                n.push(o), e.push(t.getRange(o.anchor, o.head))
            }
            return {
                text: e,
                ranges: n
            }
        }

        function Da(t, e, n, r) {
            t.setAttribute("autocorrect", n ? "" : "off"), t.setAttribute("autocapitalize", r ? "" : "off"), t.setAttribute("spellcheck", !!e)
        }

        function Ia() {
            var t = L("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                e = L("div", [t], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
            return u ? t.style.width = "1000px" : t.setAttribute("wrap", "off"), g && (t.style.border = "1px solid black"), Da(t), e
        }

        function Wa(t, e, n, r, i) {
            var o = e,
                a = n,
                s = Gt(t, e.line),
                u = i && "rtl" == t.direction ? -n : n;

            function l(o) {
                var a, l;
                if ("codepoint" == r) {
                    var c = s.text.charCodeAt(e.ch + (r > 0 ? 0 : -1));
                    a = isNaN(c) ? null : new te(e.line, Math.max(0, Math.min(s.text.length, e.ch + n * (c >= 55296 && c < 56320 ? 2 : 1))), -n)
                } else a = i ? function(t, e, n, r) {
                    var i = lt(e, t.doc.direction);
                    if (!i) return Zo(e, n, r);
                    n.ch >= e.text.length ? (n.ch = e.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
                    var o = st(i, n.ch, n.sticky),
                        a = i[o];
                    if ("ltr" == t.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch)) return Zo(e, n, r);
                    var s, u = function(t, n) {
                            return Qo(e, t instanceof te ? t.ch : t, n)
                        },
                        l = function(n) {
                            return t.options.lineWrapping ? (s = s || Nn(t, e), Qn(t, e, s, n)) : {
                                begin: 0,
                                end: e.text.length
                            }
                        },
                        c = l("before" == n.sticky ? u(n, -1) : n.ch);
                    if ("rtl" == t.doc.direction || 1 == a.level) {
                        var f = 1 == a.level == r < 0,
                            h = u(n, f ? 1 : -1);
                        if (null != h && (f ? h <= a.to && h <= c.end : h >= a.from && h >= c.begin)) {
                            var p = f ? "before" : "after";
                            return new te(n.line, h, p)
                        }
                    }
                    var d = function(t, e, r) {
                            for (var o = function(t, e) {
                                    return e ? new te(n.line, u(t, 1), "before") : new te(n.line, t, "after")
                                }; t >= 0 && t < i.length; t += e) {
                                var a = i[t],
                                    s = e > 0 == (1 != a.level),
                                    l = s ? r.begin : u(r.end, -1);
                                if (a.from <= l && l < a.to) return o(l, s);
                                if (l = s ? a.from : u(a.to, -1), r.begin <= l && l < r.end) return o(l, s)
                            }
                        },
                        g = d(o + r, r, c);
                    if (g) return g;
                    var v = r > 0 ? c.end : u(c.begin, -1);
                    return null == v || r > 0 && v == e.text.length || !(g = d(r > 0 ? 0 : i.length - 1, r, l(v))) ? null : g
                }(t.cm, s, e, n) : Zo(s, e, n);
                if (null == a) {
                    if (o || (l = e.line + u) < t.first || l >= t.first + t.size || (e = new te(l, e.ch, e.sticky), !(s = Gt(t, l)))) return !1;
                    e = ta(i, t.cm, s, e.line, u)
                } else e = a;
                return !0
            }
            if ("char" == r || "codepoint" == r) l();
            else if ("column" == r) l(!0);
            else if ("word" == r || "group" == r)
                for (var c = null, f = "group" == r, h = t.cm && t.cm.getHelper(e, "wordChars"), p = !0; !(n < 0) || l(!p); p = !1) {
                    var d = s.text.charAt(e.ch) || "\n",
                        g = tt(d, h) ? "w" : f && "\n" == d ? "n" : !f || /\s/.test(d) ? null : "p";
                    if (!f || p || g || (g = "s"), c && c != g) {
                        n < 0 && (n = 1, l(), e.sticky = "after");
                        break
                    }
                    if (g && (c = g), n > 0 && !l(!p)) break
                }
            var v = oo(t, e, o, a, !0);
            return ne(o, v) && (v.hitSide = !0), v
        }

        function ja(t, e, n, r) {
            var i, o, a = t.doc,
                s = e.left;
            if ("page" == r) {
                var u = Math.min(t.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                    l = Math.max(u - .5 * rr(t.display), 3);
                i = (n > 0 ? e.bottom : e.top) + n * l
            } else "line" == r && (i = n > 0 ? e.bottom + 3 : e.top - 3);
            for (;
                (o = Yn(t, s, i)).outside;) {
                if (n < 0 ? i <= 0 : i >= a.height) {
                    o.hitSide = !0;
                    break
                }
                i += 5 * n
            }
            return o
        }
        var Ha = function(t) {
            this.cm = t, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new j, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
        };

        function za(t, e) {
            var n = An(t, e.line);
            if (!n || n.hidden) return null;
            var r = Gt(t.doc, e.line),
                i = Ln(n, r, e.line),
                o = lt(r, t.doc.direction),
                a = "left";
            o && (a = st(o, e.ch) % 2 ? "right" : "left");
            var s = Dn(i.map, e.ch, a);
            return s.offset = "right" == s.collapse ? s.end : s.start, s
        }

        function Ba(t, e) {
            return e && (t.bad = !0), t
        }

        function Ua(t, e, n) {
            var r;
            if (e == t.display.lineDiv) {
                if (!(r = t.display.lineDiv.childNodes[n])) return Ba(t.clipPos(te(t.display.viewTo - 1)), !0);
                e = null, n = 0
            } else
                for (r = e;; r = r.parentNode) {
                    if (!r || r == t.display.lineDiv) return null;
                    if (r.parentNode && r.parentNode == t.display.lineDiv) break
                }
            for (var i = 0; i < t.display.view.length; i++) {
                var o = t.display.view[i];
                if (o.node == r) return Va(o, e, n)
            }
        }

        function Va(t, e, n) {
            var r = t.text.firstChild,
                i = !1;
            if (!e || !A(r, e)) return Ba(te(Yt(t.line), 0), !0);
            if (e == r && (i = !0, e = r.childNodes[n], n = 0, !e)) {
                var o = t.rest ? X(t.rest) : t.line;
                return Ba(te(Yt(o), o.text.length), i)
            }
            var a = 3 == e.nodeType ? e : null,
                s = e;
            for (a || 1 != e.childNodes.length || 3 != e.firstChild.nodeType || (a = e.firstChild, n && (n = a.nodeValue.length)); s.parentNode != r;) s = s.parentNode;
            var u = t.measure,
                l = u.maps;

            function c(e, n, r) {
                for (var i = -1; i < (l ? l.length : 0); i++)
                    for (var o = i < 0 ? u.map : l[i], a = 0; a < o.length; a += 3) {
                        var s = o[a + 2];
                        if (s == e || s == n) {
                            var c = Yt(i < 0 ? t.line : t.rest[i]),
                                f = o[a] + r;
                            return (r < 0 || s != e) && (f = o[a + (r ? 1 : 0)]), te(c, f)
                        }
                    }
            }
            var f = c(a, s, n);
            if (f) return Ba(f, i);
            for (var h = s.nextSibling, p = a ? a.nodeValue.length - n : 0; h; h = h.nextSibling) {
                if (f = c(h, h.firstChild, 0)) return Ba(te(f.line, f.ch - p), i);
                p += h.textContent.length
            }
            for (var d = s.previousSibling, g = n; d; d = d.previousSibling) {
                if (f = c(d, d.firstChild, -1)) return Ba(te(f.line, f.ch + g), i);
                g += d.textContent.length
            }
        }
        Ha.prototype.init = function(t) {
            var e = this,
                n = this,
                r = n.cm,
                i = n.div = t.lineDiv;

            function o(t) {
                for (var e = t.target; e; e = e.parentNode) {
                    if (e == i) return !0;
                    if (/\bCodeMirror-(?:line)?widget\b/.test(e.className)) break
                }
                return !1
            }

            function a(t) {
                if (o(t) && !gt(r, t)) {
                    if (r.somethingSelected()) Aa({
                        lineWise: !1,
                        text: r.getSelections()
                    }), "cut" == t.type && r.replaceSelection("", null, "cut");
                    else {
                        if (!r.options.lineWiseCopyCut) return;
                        var e = Fa(r);
                        Aa({
                            lineWise: !0,
                            text: e.text
                        }), "cut" == t.type && r.operation((function() {
                            r.setSelections(e.ranges, 0, B), r.replaceSelection("", null, "cut")
                        }))
                    }
                    if (t.clipboardData) {
                        t.clipboardData.clearData();
                        var a = Ma.text.join("\n");
                        if (t.clipboardData.setData("Text", a), t.clipboardData.getData("Text") == a) return void t.preventDefault()
                    }
                    var s = Ia(),
                        u = s.firstChild;
                    r.display.lineSpace.insertBefore(s, r.display.lineSpace.firstChild), u.value = Ma.text.join("\n");
                    var l = document.activeElement;
                    F(u), setTimeout((function() {
                        r.display.lineSpace.removeChild(s), l.focus(), l == i && n.showPrimarySelection()
                    }), 50)
                }
            }
            Da(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize), ft(i, "paste", (function(t) {
                !o(t) || gt(r, t) || Ra(t, r) || s <= 11 && setTimeout(ti(r, (function() {
                    return e.updateFromDOM()
                })), 20)
            })), ft(i, "compositionstart", (function(t) {
                e.composing = {
                    data: t.data,
                    done: !1
                }
            })), ft(i, "compositionupdate", (function(t) {
                e.composing || (e.composing = {
                    data: t.data,
                    done: !1
                })
            })), ft(i, "compositionend", (function(t) {
                e.composing && (t.data != e.composing.data && e.readFromDOMSoon(), e.composing.done = !0)
            })), ft(i, "touchstart", (function() {
                return n.forceCompositionEnd()
            })), ft(i, "input", (function() {
                e.composing || e.readFromDOMSoon()
            })), ft(i, "copy", a), ft(i, "cut", a)
        }, Ha.prototype.screenReaderLabelChanged = function(t) {
            t ? this.div.setAttribute("aria-label", t) : this.div.removeAttribute("aria-label")
        }, Ha.prototype.prepareSelection = function() {
            var t = _r(this.cm, !1);
            return t.focus = document.activeElement == this.div, t
        }, Ha.prototype.showSelection = function(t, e) {
            t && this.cm.display.view.length && ((t.focus || e) && this.showPrimarySelection(), this.showMultipleSelections(t))
        }, Ha.prototype.getSelection = function() {
            return this.cm.display.wrapper.ownerDocument.getSelection()
        }, Ha.prototype.showPrimarySelection = function() {
            var t = this.getSelection(),
                e = this.cm,
                r = e.doc.sel.primary(),
                i = r.from(),
                o = r.to();
            if (e.display.viewTo == e.display.viewFrom || i.line >= e.display.viewTo || o.line < e.display.viewFrom) t.removeAllRanges();
            else {
                var a = Ua(e, t.anchorNode, t.anchorOffset),
                    s = Ua(e, t.focusNode, t.focusOffset);
                if (!a || a.bad || !s || s.bad || 0 != ee(oe(a, s), i) || 0 != ee(ie(a, s), o)) {
                    var u = e.display.view,
                        l = i.line >= e.display.viewFrom && za(e, i) || {
                            node: u[0].measure.map[2],
                            offset: 0
                        },
                        c = o.line < e.display.viewTo && za(e, o);
                    if (!c) {
                        var f = u[u.length - 1].measure,
                            h = f.maps ? f.maps[f.maps.length - 1] : f.map;
                        c = {
                            node: h[h.length - 1],
                            offset: h[h.length - 2] - h[h.length - 3]
                        }
                    }
                    if (l && c) {
                        var p, d = t.rangeCount && t.getRangeAt(0);
                        try {
                            p = C(l.node, l.offset, c.offset, c.node)
                        } catch (t) {}
                        p && (!n && e.state.focused ? (t.collapse(l.node, l.offset), p.collapsed || (t.removeAllRanges(), t.addRange(p))) : (t.removeAllRanges(), t.addRange(p)), d && null == t.anchorNode ? t.addRange(d) : n && this.startGracePeriod()), this.rememberSelection()
                    } else t.removeAllRanges()
                }
            }
        }, Ha.prototype.startGracePeriod = function() {
            var t = this;
            clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout((function() {
                t.gracePeriod = !1, t.selectionChanged() && t.cm.operation((function() {
                    return t.cm.curOp.selectionChanged = !0
                }))
            }), 20)
        }, Ha.prototype.showMultipleSelections = function(t) {
            E(this.cm.display.cursorDiv, t.cursors), E(this.cm.display.selectionDiv, t.selection)
        }, Ha.prototype.rememberSelection = function() {
            var t = this.getSelection();
            this.lastAnchorNode = t.anchorNode, this.lastAnchorOffset = t.anchorOffset, this.lastFocusNode = t.focusNode, this.lastFocusOffset = t.focusOffset
        }, Ha.prototype.selectionInEditor = function() {
            var t = this.getSelection();
            if (!t.rangeCount) return !1;
            var e = t.getRangeAt(0).commonAncestorContainer;
            return A(this.div, e)
        }, Ha.prototype.focus = function() {
            "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && document.activeElement == this.div || this.showSelection(this.prepareSelection(), !0), this.div.focus())
        }, Ha.prototype.blur = function() {
            this.div.blur()
        }, Ha.prototype.getField = function() {
            return this.div
        }, Ha.prototype.supportsTouch = function() {
            return !0
        }, Ha.prototype.receivedFocus = function() {
            var t = this;
            this.selectionInEditor() ? this.pollSelection() : Zr(this.cm, (function() {
                return t.cm.curOp.selectionChanged = !0
            })), this.polling.set(this.cm.options.pollInterval, (function e() {
                t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e))
            }))
        }, Ha.prototype.selectionChanged = function() {
            var t = this.getSelection();
            return t.anchorNode != this.lastAnchorNode || t.anchorOffset != this.lastAnchorOffset || t.focusNode != this.lastFocusNode || t.focusOffset != this.lastFocusOffset
        }, Ha.prototype.pollSelection = function() {
            if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                var t = this.getSelection(),
                    e = this.cm;
                if (v && c && this.cm.display.gutterSpecs.length && function(t) {
                        for (var e = t; e; e = e.parentNode)
                            if (/CodeMirror-gutter-wrapper/.test(e.className)) return !0;
                        return !1
                    }(t.anchorNode)) return this.cm.triggerOnKeyDown({
                    type: "keydown",
                    keyCode: 8,
                    preventDefault: Math.abs
                }), this.blur(), void this.focus();
                if (!this.composing) {
                    this.rememberSelection();
                    var n = Ua(e, t.anchorNode, t.anchorOffset),
                        r = Ua(e, t.focusNode, t.focusOffset);
                    n && r && Zr(e, (function() {
                        Zi(e.doc, Ci(n, r), B), (n.bad || r.bad) && (e.curOp.selectionChanged = !0)
                    }))
                }
            }
        }, Ha.prototype.pollContent = function() {
            null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
            var t, e, n, r = this.cm,
                i = r.display,
                o = r.doc.sel.primary(),
                a = o.from(),
                s = o.to();
            if (0 == a.ch && a.line > r.firstLine() && (a = te(a.line - 1, Gt(r.doc, a.line - 1).length)), s.ch == Gt(r.doc, s.line).text.length && s.line < r.lastLine() && (s = te(s.line + 1, 0)), a.line < i.viewFrom || s.line > i.viewTo - 1) return !1;
            a.line == i.viewFrom || 0 == (t = cr(r, a.line)) ? (e = Yt(i.view[0].line), n = i.view[0].node) : (e = Yt(i.view[t].line), n = i.view[t - 1].node.nextSibling);
            var u, l, c = cr(r, s.line);
            if (c == i.view.length - 1 ? (u = i.viewTo - 1, l = i.lineDiv.lastChild) : (u = Yt(i.view[c + 1].line) - 1, l = i.view[c + 1].node.previousSibling), !n) return !1;
            for (var f = r.doc.splitLines(function(t, e, n, r, i) {
                    var o = "",
                        a = !1,
                        s = t.doc.lineSeparator(),
                        u = !1;

                    function l() {
                        a && (o += s, u && (o += s), a = u = !1)
                    }

                    function c(t) {
                        t && (l(), o += t)
                    }

                    function f(e) {
                        if (1 == e.nodeType) {
                            var n = e.getAttribute("cm-text");
                            if (n) return void c(n);
                            var o, h = e.getAttribute("cm-marker");
                            if (h) {
                                var p = t.findMarks(te(r, 0), te(i + 1, 0), (v = +h, function(t) {
                                    return t.id == v
                                }));
                                return void(p.length && (o = p[0].find(0)) && c($t(t.doc, o.from, o.to).join(s)))
                            }
                            if ("false" == e.getAttribute("contenteditable")) return;
                            var d = /^(pre|div|p|li|table|br)$/i.test(e.nodeName);
                            if (!/^br$/i.test(e.nodeName) && 0 == e.textContent.length) return;
                            d && l();
                            for (var g = 0; g < e.childNodes.length; g++) f(e.childNodes[g]);
                            /^(pre|p)$/i.test(e.nodeName) && (u = !0), d && (a = !0)
                        } else 3 == e.nodeType && c(e.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
                        var v
                    }
                    for (; f(e), e != n;) e = e.nextSibling, u = !1;
                    return o
                }(r, n, l, e, u)), h = $t(r.doc, te(e, 0), te(u, Gt(r.doc, u).text.length)); f.length > 1 && h.length > 1;)
                if (X(f) == X(h)) f.pop(), h.pop(), u--;
                else {
                    if (f[0] != h[0]) break;
                    f.shift(), h.shift(), e++
                } for (var p = 0, d = 0, g = f[0], v = h[0], _ = Math.min(g.length, v.length); p < _ && g.charCodeAt(p) == v.charCodeAt(p);) ++p;
            for (var m = X(f), y = X(h), b = Math.min(m.length - (1 == f.length ? p : 0), y.length - (1 == h.length ? p : 0)); d < b && m.charCodeAt(m.length - d - 1) == y.charCodeAt(y.length - d - 1);) ++d;
            if (1 == f.length && 1 == h.length && e == a.line)
                for (; p && p > a.ch && m.charCodeAt(m.length - d - 1) == y.charCodeAt(y.length - d - 1);) p--, d++;
            f[f.length - 1] = m.slice(0, m.length - d).replace(/^\u200b+/, ""), f[0] = f[0].slice(p).replace(/\u200b+$/, "");
            var x = te(e, p),
                w = te(u, h.length ? X(h).length - d : 0);
            return f.length > 1 || f[0] || ee(x, w) ? (go(r.doc, f, x, w, "+input"), !0) : void 0
        }, Ha.prototype.ensurePolled = function() {
            this.forceCompositionEnd()
        }, Ha.prototype.reset = function() {
            this.forceCompositionEnd()
        }, Ha.prototype.forceCompositionEnd = function() {
            this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
        }, Ha.prototype.readFromDOMSoon = function() {
            var t = this;
            null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout((function() {
                if (t.readDOMTimeout = null, t.composing) {
                    if (!t.composing.done) return;
                    t.composing = null
                }
                t.updateFromDOM()
            }), 80))
        }, Ha.prototype.updateFromDOM = function() {
            var t = this;
            !this.cm.isReadOnly() && this.pollContent() || Zr(this.cm, (function() {
                return fr(t.cm)
            }))
        }, Ha.prototype.setUneditable = function(t) {
            t.contentEditable = "false"
        }, Ha.prototype.onKeyPress = function(t) {
            0 == t.charCode || this.composing || (t.preventDefault(), this.cm.isReadOnly() || ti(this.cm, Na)(this.cm, String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), 0))
        }, Ha.prototype.readOnlyChanged = function(t) {
            this.div.contentEditable = String("nocursor" != t)
        }, Ha.prototype.onContextMenu = function() {}, Ha.prototype.resetPosition = function() {}, Ha.prototype.needsContentAttribute = !0;
        var Ka = function(t) {
            this.cm = t, this.prevInput = "", this.pollingFast = !1, this.polling = new j, this.hasSelection = !1, this.composing = null
        };
        Ka.prototype.init = function(t) {
                var e = this,
                    n = this,
                    r = this.cm;
                this.createField(t);
                var i = this.textarea;

                function o(t) {
                    if (!gt(r, t)) {
                        if (r.somethingSelected()) Aa({
                            lineWise: !1,
                            text: r.getSelections()
                        });
                        else {
                            if (!r.options.lineWiseCopyCut) return;
                            var e = Fa(r);
                            Aa({
                                lineWise: !0,
                                text: e.text
                            }), "cut" == t.type ? r.setSelections(e.ranges, null, B) : (n.prevInput = "", i.value = e.text.join("\n"), F(i))
                        }
                        "cut" == t.type && (r.state.cutIncoming = +new Date)
                    }
                }
                t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild), g && (i.style.width = "0px"), ft(i, "input", (function() {
                    a && s >= 9 && e.hasSelection && (e.hasSelection = null), n.poll()
                })), ft(i, "paste", (function(t) {
                    gt(r, t) || Ra(t, r) || (r.state.pasteIncoming = +new Date, n.fastPoll())
                })), ft(i, "cut", o), ft(i, "copy", o), ft(t.scroller, "paste", (function(e) {
                    if (!wn(t, e) && !gt(r, e)) {
                        if (!i.dispatchEvent) return r.state.pasteIncoming = +new Date, void n.focus();
                        var o = new Event("paste");
                        o.clipboardData = e.clipboardData, i.dispatchEvent(o)
                    }
                })), ft(t.lineSpace, "selectstart", (function(e) {
                    wn(t, e) || yt(e)
                })), ft(i, "compositionstart", (function() {
                    var t = r.getCursor("from");
                    n.composing && n.composing.range.clear(), n.composing = {
                        start: t,
                        range: r.markText(t, r.getCursor("to"), {
                            className: "CodeMirror-composing"
                        })
                    }
                })), ft(i, "compositionend", (function() {
                    n.composing && (n.poll(), n.composing.range.clear(), n.composing = null)
                }))
            }, Ka.prototype.createField = function(t) {
                this.wrapper = Ia(), this.textarea = this.wrapper.firstChild
            }, Ka.prototype.screenReaderLabelChanged = function(t) {
                t ? this.textarea.setAttribute("aria-label", t) : this.textarea.removeAttribute("aria-label")
            }, Ka.prototype.prepareSelection = function() {
                var t = this.cm,
                    e = t.display,
                    n = t.doc,
                    r = _r(t);
                if (t.options.moveInputWithCursor) {
                    var i = $n(t, n.sel.primary().head, "div"),
                        o = e.wrapper.getBoundingClientRect(),
                        a = e.lineDiv.getBoundingClientRect();
                    r.teTop = Math.max(0, Math.min(e.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(e.wrapper.clientWidth - 10, i.left + a.left - o.left))
                }
                return r
            }, Ka.prototype.showSelection = function(t) {
                var e = this.cm.display;
                E(e.cursorDiv, t.cursors), E(e.selectionDiv, t.selection), null != t.teTop && (this.wrapper.style.top = t.teTop + "px", this.wrapper.style.left = t.teLeft + "px")
            }, Ka.prototype.reset = function(t) {
                if (!this.contextMenuPending && !this.composing) {
                    var e = this.cm;
                    if (e.somethingSelected()) {
                        this.prevInput = "";
                        var n = e.getSelection();
                        this.textarea.value = n, e.state.focused && F(this.textarea), a && s >= 9 && (this.hasSelection = n)
                    } else t || (this.prevInput = this.textarea.value = "", a && s >= 9 && (this.hasSelection = null))
                }
            }, Ka.prototype.getField = function() {
                return this.textarea
            }, Ka.prototype.supportsTouch = function() {
                return !1
            }, Ka.prototype.focus = function() {
                if ("nocursor" != this.cm.options.readOnly && (!_ || N() != this.textarea)) try {
                    this.textarea.focus()
                } catch (t) {}
            }, Ka.prototype.blur = function() {
                this.textarea.blur()
            }, Ka.prototype.resetPosition = function() {
                this.wrapper.style.top = this.wrapper.style.left = 0
            }, Ka.prototype.receivedFocus = function() {
                this.slowPoll()
            }, Ka.prototype.slowPoll = function() {
                var t = this;
                this.pollingFast || this.polling.set(this.cm.options.pollInterval, (function() {
                    t.poll(), t.cm.state.focused && t.slowPoll()
                }))
            }, Ka.prototype.fastPoll = function() {
                var t = !1,
                    e = this;
                e.pollingFast = !0, e.polling.set(20, (function n() {
                    e.poll() || t ? (e.pollingFast = !1, e.slowPoll()) : (t = !0, e.polling.set(60, n))
                }))
            }, Ka.prototype.poll = function() {
                var t = this,
                    e = this.cm,
                    n = this.textarea,
                    r = this.prevInput;
                if (this.contextMenuPending || !e.state.focused || Nt(n) && !r && !this.composing || e.isReadOnly() || e.options.disableInput || e.state.keySeq) return !1;
                var i = n.value;
                if (i == r && !e.somethingSelected()) return !1;
                if (a && s >= 9 && this.hasSelection === i || m && /[\uf700-\uf7ff]/.test(i)) return e.display.input.reset(), !1;
                if (e.doc.sel == e.display.selForContextMenu) {
                    var o = i.charCodeAt(0);
                    if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
                }
                for (var u = 0, l = Math.min(r.length, i.length); u < l && r.charCodeAt(u) == i.charCodeAt(u);) ++u;
                return Zr(e, (function() {
                    Na(e, i.slice(u), r.length - u, null, t.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = t.prevInput = "" : t.prevInput = i, t.composing && (t.composing.range.clear(), t.composing.range = e.markText(t.composing.start, e.getCursor("to"), {
                        className: "CodeMirror-composing"
                    }))
                })), !0
            }, Ka.prototype.ensurePolled = function() {
                this.pollingFast && this.poll() && (this.pollingFast = !1)
            }, Ka.prototype.onKeyPress = function() {
                a && s >= 9 && (this.hasSelection = null), this.fastPoll()
            }, Ka.prototype.onContextMenu = function(t) {
                var e = this,
                    n = e.cm,
                    r = n.display,
                    i = e.textarea;
                e.contextMenuPending && e.contextMenuPending();
                var o = lr(n, t),
                    l = r.scroller.scrollTop;
                if (o && !f) {
                    n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(o) && ti(n, Zi)(n.doc, Ci(o), B);
                    var c, h = i.style.cssText,
                        p = e.wrapper.style.cssText,
                        d = e.wrapper.offsetParent.getBoundingClientRect();
                    if (e.wrapper.style.cssText = "position: static", i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (t.clientY - d.top - 5) + "px; left: " + (t.clientX - d.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", u && (c = window.scrollY), r.input.focus(), u && window.scrollTo(null, c), r.input.reset(), n.somethingSelected() || (i.value = e.prevInput = " "), e.contextMenuPending = _, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll), a && s >= 9 && v(), k) {
                        wt(t);
                        var g = function() {
                            pt(window, "mouseup", g), setTimeout(_, 20)
                        };
                        ft(window, "mouseup", g)
                    } else setTimeout(_, 50)
                }

                function v() {
                    if (null != i.selectionStart) {
                        var t = n.somethingSelected(),
                            o = "​" + (t ? i.value : "");
                        i.value = "⇚", i.value = o, e.prevInput = t ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, r.selForContextMenu = n.doc.sel
                    }
                }

                function _() {
                    if (e.contextMenuPending == _ && (e.contextMenuPending = !1, e.wrapper.style.cssText = p, i.style.cssText = h, a && s < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = l), null != i.selectionStart)) {
                        (!a || a && s < 9) && v();
                        var t = 0,
                            o = function() {
                                r.selForContextMenu == n.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == e.prevInput ? ti(n, so)(n) : t++ < 10 ? r.detectingSelectAll = setTimeout(o, 500) : (r.selForContextMenu = null, r.input.reset())
                            };
                        r.detectingSelectAll = setTimeout(o, 200)
                    }
                }
            }, Ka.prototype.readOnlyChanged = function(t) {
                t || this.reset(), this.textarea.disabled = "nocursor" == t, this.textarea.readOnly = !!t
            }, Ka.prototype.setUneditable = function() {}, Ka.prototype.needsContentAttribute = !1,
            function(t) {
                var e = t.optionHandlers;

                function n(n, r, i, o) {
                    t.defaults[n] = r, i && (e[n] = o ? function(t, e, n) {
                        n != wa && i(t, e, n)
                    } : i)
                }
                t.defineOption = n, t.Init = wa, n("value", "", (function(t, e) {
                    return t.setValue(e)
                }), !0), n("mode", null, (function(t, e) {
                    t.doc.modeOption = e, Mi(t)
                }), !0), n("indentUnit", 2, Mi, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, (function(t) {
                    Ai(t), Hn(t), fr(t)
                }), !0), n("lineSeparator", null, (function(t, e) {
                    if (t.doc.lineSep = e, e) {
                        var n = [],
                            r = t.doc.first;
                        t.doc.iter((function(t) {
                            for (var i = 0;;) {
                                var o = t.text.indexOf(e, i);
                                if (-1 == o) break;
                                i = o + e.length, n.push(te(r, o))
                            }
                            r++
                        }));
                        for (var i = n.length - 1; i >= 0; i--) go(t.doc, e, n[i], te(n[i].line, n[i].ch + e.length))
                    }
                })), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, (function(t, e, n) {
                    t.state.specialChars = new RegExp(e.source + (e.test("\t") ? "" : "|\t"), "g"), n != wa && t.refresh()
                })), n("specialCharPlaceholder", Qe, (function(t) {
                    return t.refresh()
                }), !0), n("electricChars", !0), n("inputStyle", _ ? "contenteditable" : "textarea", (function() {
                    throw new Error("inputStyle can not (yet) be changed in a running editor")
                }), !0), n("spellcheck", !1, (function(t, e) {
                    return t.getInputField().spellcheck = e
                }), !0), n("autocorrect", !1, (function(t, e) {
                    return t.getInputField().autocorrect = e
                }), !0), n("autocapitalize", !1, (function(t, e) {
                    return t.getInputField().autocapitalize = e
                }), !0), n("rtlMoveVisually", !b), n("wholeLineUpdateBefore", !0), n("theme", "default", (function(t) {
                    xa(t), gi(t)
                }), !0), n("keyMap", "default", (function(t, e, n) {
                    var r = Yo(e),
                        i = n != wa && Yo(n);
                    i && i.detach && i.detach(t, r), r.attach && r.attach(t, i || null)
                })), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, Ta, !0), n("gutters", [], (function(t, e) {
                    t.display.gutterSpecs = pi(e, t.options.lineNumbers), gi(t)
                }), !0), n("fixedGutter", !0, (function(t, e) {
                    t.display.gutters.style.left = e ? ar(t.display) + "px" : "0", t.refresh()
                }), !0), n("coverGutterNextToScrollbar", !1, (function(t) {
                    return zr(t)
                }), !0), n("scrollbarStyle", "native", (function(t) {
                    Vr(t), zr(t), t.display.scrollbars.setScrollTop(t.doc.scrollTop), t.display.scrollbars.setScrollLeft(t.doc.scrollLeft)
                }), !0), n("lineNumbers", !1, (function(t, e) {
                    t.display.gutterSpecs = pi(t.options.gutters, e), gi(t)
                }), !0), n("firstLineNumber", 1, gi, !0), n("lineNumberFormatter", (function(t) {
                    return t
                }), gi, !0), n("showCursorWhenSelecting", !1, vr, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, (function(t, e) {
                    "nocursor" == e && (Cr(t), t.display.input.blur()), t.display.input.readOnlyChanged(e)
                })), n("screenReaderLabel", null, (function(t, e) {
                    e = "" === e ? null : e, t.display.input.screenReaderLabelChanged(e)
                })), n("disableInput", !1, (function(t, e) {
                    e || t.display.input.reset()
                }), !0), n("dragDrop", !0, Ca), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, vr, !0), n("singleCursorHeightPerLine", !0, vr, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, Ai, !0), n("addModeClass", !1, Ai, !0), n("pollInterval", 100), n("undoDepth", 200, (function(t, e) {
                    return t.doc.history.undoDepth = e
                })), n("historyEventDelay", 1250), n("viewportMargin", 10, (function(t) {
                    return t.refresh()
                }), !0), n("maxHighlightLength", 1e4, Ai, !0), n("moveInputWithCursor", !0, (function(t, e) {
                    e || t.display.input.resetPosition()
                })), n("tabindex", null, (function(t, e) {
                    return t.display.input.getField().tabIndex = e || ""
                })), n("autofocus", null), n("direction", "ltr", (function(t, e) {
                    return t.doc.setDirection(e)
                }), !0), n("phrases", null)
            }(Oa),
            function(t) {
                var e = t.optionHandlers,
                    n = t.helpers = {};
                t.prototype = {
                    constructor: t,
                    focus: function() {
                        window.focus(), this.display.input.focus()
                    },
                    setOption: function(t, n) {
                        var r = this.options,
                            i = r[t];
                        r[t] == n && "mode" != t || (r[t] = n, e.hasOwnProperty(t) && ti(this, e[t])(this, n, i), dt(this, "optionChange", this, t))
                    },
                    getOption: function(t) {
                        return this.options[t]
                    },
                    getDoc: function() {
                        return this.doc
                    },
                    addKeyMap: function(t, e) {
                        this.state.keyMaps[e ? "push" : "unshift"](Yo(t))
                    },
                    removeKeyMap: function(t) {
                        for (var e = this.state.keyMaps, n = 0; n < e.length; ++n)
                            if (e[n] == t || e[n].name == t) return e.splice(n, 1), !0
                    },
                    addOverlay: ei((function(e, n) {
                        var r = e.token ? e : t.getMode(this.options, e);
                        if (r.startState) throw new Error("Overlays may not be stateful.");
                        ! function(t, e, n) {
                            for (var r = 0, i = n(e); r < t.length && n(t[r]) <= i;) r++;
                            t.splice(r, 0, e)
                        }(this.state.overlays, {
                            mode: r,
                            modeSpec: e,
                            opaque: n && n.opaque,
                            priority: n && n.priority || 0
                        }, (function(t) {
                            return t.priority
                        })), this.state.modeGen++, fr(this)
                    })),
                    removeOverlay: ei((function(t) {
                        for (var e = this.state.overlays, n = 0; n < e.length; ++n) {
                            var r = e[n].modeSpec;
                            if (r == t || "string" == typeof t && r.name == t) return e.splice(n, 1), this.state.modeGen++, void fr(this)
                        }
                    })),
                    indentLine: ei((function(t, e, n) {
                        "string" != typeof e && "number" != typeof e && (e = null == e ? this.options.smartIndent ? "smart" : "prev" : e ? "add" : "subtract"), Qt(this.doc, t) && La(this, t, e, n)
                    })),
                    indentSelection: ei((function(t) {
                        for (var e = this.doc.sel.ranges, n = -1, r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (i.empty()) i.head.line > n && (La(this, i.head.line, t, !0), n = i.head.line, r == this.doc.sel.primIndex && Ar(this));
                            else {
                                var o = i.from(),
                                    a = i.to(),
                                    s = Math.max(n, o.line);
                                n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                                for (var u = s; u < n; ++u) La(this, u, t);
                                var l = this.doc.sel.ranges;
                                0 == o.ch && e.length == l.length && l[r].from().ch > 0 && Yi(this.doc, r, new ki(o, l[r].to()), B)
                            }
                        }
                    })),
                    getTokenAt: function(t, e) {
                        return me(this, t, e)
                    },
                    getLineTokens: function(t, e) {
                        return me(this, te(t), e, !0)
                    },
                    getTokenTypeAt: function(t) {
                        t = se(this.doc, t);
                        var e, n = he(this, Gt(this.doc, t.line)),
                            r = 0,
                            i = (n.length - 1) / 2,
                            o = t.ch;
                        if (0 == o) e = n[2];
                        else
                            for (;;) {
                                var a = r + i >> 1;
                                if ((a ? n[2 * a - 1] : 0) >= o) i = a;
                                else {
                                    if (!(n[2 * a + 1] < o)) {
                                        e = n[2 * a + 2];
                                        break
                                    }
                                    r = a + 1
                                }
                            }
                        var s = e ? e.indexOf("overlay ") : -1;
                        return s < 0 ? e : 0 == s ? null : e.slice(0, s - 1)
                    },
                    getModeAt: function(e) {
                        var n = this.doc.mode;
                        return n.innerMode ? t.innerMode(n, this.getTokenAt(e).state).mode : n
                    },
                    getHelper: function(t, e) {
                        return this.getHelpers(t, e)[0]
                    },
                    getHelpers: function(t, e) {
                        var r = [];
                        if (!n.hasOwnProperty(e)) return r;
                        var i = n[e],
                            o = this.getModeAt(t);
                        if ("string" == typeof o[e]) i[o[e]] && r.push(i[o[e]]);
                        else if (o[e])
                            for (var a = 0; a < o[e].length; a++) {
                                var s = i[o[e][a]];
                                s && r.push(s)
                            } else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);
                        for (var u = 0; u < i._global.length; u++) {
                            var l = i._global[u];
                            l.pred(o, this) && -1 == H(r, l.val) && r.push(l.val)
                        }
                        return r
                    },
                    getStateAfter: function(t, e) {
                        var n = this.doc;
                        return pe(this, (t = ae(n, null == t ? n.first + n.size - 1 : t)) + 1, e).state
                    },
                    cursorCoords: function(t, e) {
                        var n = this.doc.sel.primary();
                        return $n(this, null == t ? n.head : "object" == typeof t ? se(this.doc, t) : t ? n.from() : n.to(), e || "page")
                    },
                    charCoords: function(t, e) {
                        return Gn(this, se(this.doc, t), e || "page")
                    },
                    coordsChar: function(t, e) {
                        return Yn(this, (t = Kn(this, t, e || "page")).left, t.top)
                    },
                    lineAtHeight: function(t, e) {
                        return t = Kn(this, {
                            top: t,
                            left: 0
                        }, e || "page").top, Jt(this.doc, t + this.display.viewOffset)
                    },
                    heightAtLine: function(t, e, n) {
                        var r, i = !1;
                        if ("number" == typeof t) {
                            var o = this.doc.first + this.doc.size - 1;
                            t < this.doc.first ? t = this.doc.first : t > o && (t = o, i = !0), r = Gt(this.doc, t)
                        } else r = t;
                        return Vn(this, r, {
                            top: 0,
                            left: 0
                        }, e || "page", n || i).top + (i ? this.doc.height - Ue(r) : 0)
                    },
                    defaultTextHeight: function() {
                        return rr(this.display)
                    },
                    defaultCharWidth: function() {
                        return ir(this.display)
                    },
                    getViewport: function() {
                        return {
                            from: this.display.viewFrom,
                            to: this.display.viewTo
                        }
                    },
                    addWidget: function(t, e, n, r, i) {
                        var o, a, s, u = this.display,
                            l = (t = $n(this, se(this.doc, t))).bottom,
                            c = t.left;
                        if (e.style.position = "absolute", e.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(e), u.sizer.appendChild(e), "over" == r) l = t.top;
                        else if ("above" == r || "near" == r) {
                            var f = Math.max(u.wrapper.clientHeight, this.doc.height),
                                h = Math.max(u.sizer.clientWidth, u.lineSpace.clientWidth);
                            ("above" == r || t.bottom + e.offsetHeight > f) && t.top > e.offsetHeight ? l = t.top - e.offsetHeight : t.bottom + e.offsetHeight <= f && (l = t.bottom), c + e.offsetWidth > h && (c = h - e.offsetWidth)
                        }
                        e.style.top = l + "px", e.style.left = e.style.right = "", "right" == i ? (c = u.sizer.clientWidth - e.offsetWidth, e.style.right = "0px") : ("left" == i ? c = 0 : "middle" == i && (c = (u.sizer.clientWidth - e.offsetWidth) / 2), e.style.left = c + "px"), n && (o = this, a = {
                            left: c,
                            top: l,
                            right: c + e.offsetWidth,
                            bottom: l + e.offsetHeight
                        }, null != (s = Lr(o, a)).scrollTop && Fr(o, s.scrollTop), null != s.scrollLeft && Ir(o, s.scrollLeft))
                    },
                    triggerOnKeyDown: ei(ca),
                    triggerOnKeyPress: ei(ha),
                    triggerOnKeyUp: fa,
                    triggerOnMouseDown: ei(va),
                    execCommand: function(t) {
                        if (ea.hasOwnProperty(t)) return ea[t].call(null, this)
                    },
                    triggerElectric: ei((function(t) {
                        Pa(this, t)
                    })),
                    findPosH: function(t, e, n, r) {
                        var i = 1;
                        e < 0 && (i = -1, e = -e);
                        for (var o = se(this.doc, t), a = 0; a < e && !(o = Wa(this.doc, o, i, n, r)).hitSide; ++a);
                        return o
                    },
                    moveH: ei((function(t, e) {
                        var n = this;
                        this.extendSelectionsBy((function(r) {
                            return n.display.shift || n.doc.extend || r.empty() ? Wa(n.doc, r.head, t, e, n.options.rtlMoveVisually) : t < 0 ? r.from() : r.to()
                        }), V)
                    })),
                    deleteH: ei((function(t, e) {
                        var n = this.doc.sel,
                            r = this.doc;
                        n.somethingSelected() ? r.replaceSelection("", null, "+delete") : Jo(this, (function(n) {
                            var i = Wa(r, n.head, t, e, !1);
                            return t < 0 ? {
                                from: i,
                                to: n.head
                            } : {
                                from: n.head,
                                to: i
                            }
                        }))
                    })),
                    findPosV: function(t, e, n, r) {
                        var i = 1,
                            o = r;
                        e < 0 && (i = -1, e = -e);
                        for (var a = se(this.doc, t), s = 0; s < e; ++s) {
                            var u = $n(this, a, "div");
                            if (null == o ? o = u.left : u.left = o, (a = ja(this, u, i, n)).hitSide) break
                        }
                        return a
                    },
                    moveV: ei((function(t, e) {
                        var n = this,
                            r = this.doc,
                            i = [],
                            o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                        if (r.extendSelectionsBy((function(a) {
                                if (o) return t < 0 ? a.from() : a.to();
                                var s = $n(n, a.head, "div");
                                null != a.goalColumn && (s.left = a.goalColumn), i.push(s.left);
                                var u = ja(n, s, t, e);
                                return "page" == e && a == r.sel.primary() && Mr(n, Gn(n, u, "div").top - s.top), u
                            }), V), i.length)
                            for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a]
                    })),
                    findWordAt: function(t) {
                        var e = Gt(this.doc, t.line).text,
                            n = t.ch,
                            r = t.ch;
                        if (e) {
                            var i = this.getHelper(t, "wordChars");
                            "before" != t.sticky && r != e.length || !n ? ++r : --n;
                            for (var o = e.charAt(n), a = tt(o, i) ? function(t) {
                                    return tt(t, i)
                                } : /\s/.test(o) ? function(t) {
                                    return /\s/.test(t)
                                } : function(t) {
                                    return !/\s/.test(t) && !tt(t)
                                }; n > 0 && a(e.charAt(n - 1));) --n;
                            for (; r < e.length && a(e.charAt(r));) ++r
                        }
                        return new ki(te(t.line, n), te(t.line, r))
                    },
                    toggleOverwrite: function(t) {
                        null != t && t == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? R(this.display.cursorDiv, "CodeMirror-overwrite") : T(this.display.cursorDiv, "CodeMirror-overwrite"), dt(this, "overwriteToggle", this, this.state.overwrite))
                    },
                    hasFocus: function() {
                        return this.display.input.getField() == N()
                    },
                    isReadOnly: function() {
                        return !(!this.options.readOnly && !this.doc.cantEdit)
                    },
                    scrollTo: ei((function(t, e) {
                        Nr(this, t, e)
                    })),
                    getScrollInfo: function() {
                        var t = this.display.scroller;
                        return {
                            left: t.scrollLeft,
                            top: t.scrollTop,
                            height: t.scrollHeight - Tn(this) - this.display.barHeight,
                            width: t.scrollWidth - Tn(this) - this.display.barWidth,
                            clientHeight: En(this),
                            clientWidth: On(this)
                        }
                    },
                    scrollIntoView: ei((function(t, e) {
                        null == t ? (t = {
                            from: this.doc.sel.primary().head,
                            to: null
                        }, null == e && (e = this.options.cursorScrollMargin)) : "number" == typeof t ? t = {
                            from: te(t, 0),
                            to: null
                        } : null == t.from && (t = {
                            from: t,
                            to: null
                        }), t.to || (t.to = t.from), t.margin = e || 0, null != t.from.line ? function(t, e) {
                            Rr(t), t.curOp.scrollToPos = e
                        }(this, t) : Pr(this, t.from, t.to, t.margin)
                    })),
                    setSize: ei((function(t, e) {
                        var n = this,
                            r = function(t) {
                                return "number" == typeof t || /^\d+$/.test(String(t)) ? t + "px" : t
                            };
                        null != t && (this.display.wrapper.style.width = r(t)), null != e && (this.display.wrapper.style.height = r(e)), this.options.lineWrapping && jn(this);
                        var i = this.display.viewFrom;
                        this.doc.iter(i, this.display.viewTo, (function(t) {
                            if (t.widgets)
                                for (var e = 0; e < t.widgets.length; e++)
                                    if (t.widgets[e].noHScroll) {
                                        hr(n, i, "widget");
                                        break
                                    }++ i
                        })), this.curOp.forceUpdate = !0, dt(this, "refresh", this)
                    })),
                    operation: function(t) {
                        return Zr(this, t)
                    },
                    startOperation: function() {
                        return Gr(this)
                    },
                    endOperation: function() {
                        return $r(this)
                    },
                    refresh: ei((function() {
                        var t = this.display.cachedTextHeight;
                        fr(this), this.curOp.forceUpdate = !0, Hn(this), Nr(this, this.doc.scrollLeft, this.doc.scrollTop), li(this.display), (null == t || Math.abs(t - rr(this.display)) > .5 || this.options.lineWrapping) && ur(this), dt(this, "refresh", this)
                    })),
                    swapDoc: ei((function(t) {
                        var e = this.doc;
                        return e.cm = null, this.state.selectingText && this.state.selectingText(), Fi(this, t), Hn(this), this.display.input.reset(), Nr(this, t.scrollLeft, t.scrollTop), this.curOp.forceScroll = !0, un(this, "swapDoc", this, e), e
                    })),
                    phrase: function(t) {
                        var e = this.options.phrases;
                        return e && Object.prototype.hasOwnProperty.call(e, t) ? e[t] : t
                    },
                    getInputField: function() {
                        return this.display.input.getField()
                    },
                    getWrapperElement: function() {
                        return this.display.wrapper
                    },
                    getScrollerElement: function() {
                        return this.display.scroller
                    },
                    getGutterElement: function() {
                        return this.display.gutters
                    }
                }, mt(t), t.registerHelper = function(e, r, i) {
                    n.hasOwnProperty(e) || (n[e] = t[e] = {
                        _global: []
                    }), n[e][r] = i
                }, t.registerGlobalHelper = function(e, r, i, o) {
                    t.registerHelper(e, r, o), n[e]._global.push({
                        pred: i,
                        val: o
                    })
                }
            }(Oa);
        var Ga = "iter insert remove copy getEditor constructor".split(" ");
        for (var $a in Ao.prototype) Ao.prototype.hasOwnProperty($a) && H(Ga, $a) < 0 && (Oa.prototype[$a] = function(t) {
            return function() {
                return t.apply(this.doc, arguments)
            }
        }(Ao.prototype[$a]));
        return mt(Ao), Oa.inputStyles = {
                textarea: Ka,
                contenteditable: Ha
            }, Oa.defineMode = function(t) {
                Oa.defaults.mode || "null" == t || (Oa.defaults.mode = t), It.apply(this, arguments)
            }, Oa.defineMIME = function(t, e) {
                Dt[t] = e
            }, Oa.defineMode("null", (function() {
                return {
                    token: function(t) {
                        return t.skipToEnd()
                    }
                }
            })), Oa.defineMIME("text/plain", "null"), Oa.defineExtension = function(t, e) {
                Oa.prototype[t] = e
            }, Oa.defineDocExtension = function(t, e) {
                Ao.prototype[t] = e
            }, Oa.fromTextArea = function(t, e) {
                if ((e = e ? I(e) : {}).value = t.value, !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex), !e.placeholder && t.placeholder && (e.placeholder = t.placeholder), null == e.autofocus) {
                    var n = N();
                    e.autofocus = n == t || null != t.getAttribute("autofocus") && n == document.body
                }

                function r() {
                    t.value = s.getValue()
                }
                var i;
                if (t.form && (ft(t.form, "submit", r), !e.leaveSubmitMethodAlone)) {
                    var o = t.form;
                    i = o.submit;
                    try {
                        var a = o.submit = function() {
                            r(), o.submit = i, o.submit(), o.submit = a
                        }
                    } catch (t) {}
                }
                e.finishInit = function(n) {
                    n.save = r, n.getTextArea = function() {
                        return t
                    }, n.toTextArea = function() {
                        n.toTextArea = isNaN, r(), t.parentNode.removeChild(n.getWrapperElement()), t.style.display = "", t.form && (pt(t.form, "submit", r), e.leaveSubmitMethodAlone || "function" != typeof t.form.submit || (t.form.submit = i))
                    }
                }, t.style.display = "none";
                var s = Oa((function(e) {
                    return t.parentNode.insertBefore(e, t.nextSibling)
                }), e);
                return s
            },
            function(t) {
                t.off = pt, t.on = ft, t.wheelEventPixels = bi, t.Doc = Ao, t.splitLines = At, t.countColumn = W, t.findColumn = K, t.isWordChar = Z, t.Pass = z, t.signal = dt, t.Line = Ge, t.changeEnd = Ti, t.scrollbarModel = Ur, t.Pos = te, t.cmpPos = ee, t.modes = Ft, t.mimeModes = Dt, t.resolveMode = Wt, t.getMode = jt, t.modeExtensions = Ht, t.extendMode = zt, t.copyState = Bt, t.startState = Vt, t.innerMode = Ut, t.commands = ea, t.keyMap = Uo, t.keyName = qo, t.isModifierKey = $o, t.lookupKey = Go, t.normalizeKeyMap = Ko, t.StringStream = Kt, t.SharedTextMarker = Oo, t.TextMarker = Co, t.LineWidget = wo, t.e_preventDefault = yt, t.e_stopPropagation = bt, t.e_stop = wt, t.addClass = R, t.contains = A, t.rmClass = T, t.keyNames = jo
            }(Oa), Oa.version = "5.58.0", Oa
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    t.exports = function(t, e) {
        return !!t && r((function() {
            e ? t.call(null, (function() {}), 1) : t.call(null)
        }))
    }
}, function(t, e, n) {
    var r = n(19);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e, n) {
    var r = n(47),
        i = n(29),
        o = n(15),
        a = n(27),
        s = n(13),
        u = n(92),
        l = Object.getOwnPropertyDescriptor;
    e.f = n(8) ? l : function(t, e) {
        if (t = o(t), e = a(e, !0), u) try {
            return l(t, e)
        } catch (t) {}
        if (s(t, e)) return i(!r.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(7),
        o = n(2);
    t.exports = function(t, e) {
        var n = (i.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), r(r.S + r.F * o((function() {
            n(1)
        })), "Object", a)
    }
}, function(t, e, n) {
    var r = n(18),
        i = n(46),
        o = n(10),
        a = n(6),
        s = n(108);
    t.exports = function(t, e) {
        var n = 1 == t,
            u = 2 == t,
            l = 3 == t,
            c = 4 == t,
            f = 6 == t,
            h = 5 == t || f,
            p = e || s;
        return function(e, s, d) {
            for (var g, v, _ = o(e), m = i(_), y = r(s, d, 3), b = a(m.length), x = 0, w = n ? p(e, b) : u ? p(e, 0) : void 0; b > x; x++)
                if ((h || x in m) && (v = y(g = m[x], x, _), t))
                    if (n) w[x] = v;
                    else if (v) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return g;
                case 6:
                    return x;
                case 2:
                    w.push(g)
            } else if (c) return !1;
            return f ? -1 : l || c ? c : w
        }
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    "use strict";
    if (n(8)) {
        var r = n(31),
            i = n(1),
            o = n(2),
            a = n(0),
            s = n(61),
            u = n(86),
            l = n(18),
            c = n(43),
            f = n(29),
            h = n(14),
            p = n(44),
            d = n(20),
            g = n(6),
            v = n(119),
            _ = n(33),
            m = n(27),
            y = n(13),
            b = n(48),
            x = n(4),
            w = n(10),
            k = n(78),
            S = n(34),
            C = n(36),
            T = n(35).f,
            O = n(80),
            E = n(30),
            L = n(5),
            M = n(23),
            A = n(51),
            N = n(49),
            R = n(82),
            P = n(41),
            F = n(54),
            D = n(42),
            I = n(81),
            W = n(110),
            j = n(9),
            H = n(21),
            z = j.f,
            B = H.f,
            U = i.RangeError,
            V = i.TypeError,
            K = i.Uint8Array,
            G = Array.prototype,
            $ = u.ArrayBuffer,
            X = u.DataView,
            q = M(0),
            Y = M(2),
            J = M(3),
            Q = M(4),
            Z = M(5),
            tt = M(6),
            et = A(!0),
            nt = A(!1),
            rt = R.values,
            it = R.keys,
            ot = R.entries,
            at = G.lastIndexOf,
            st = G.reduce,
            ut = G.reduceRight,
            lt = G.join,
            ct = G.sort,
            ft = G.slice,
            ht = G.toString,
            pt = G.toLocaleString,
            dt = L("iterator"),
            gt = L("toStringTag"),
            vt = E("typed_constructor"),
            _t = E("def_constructor"),
            mt = s.CONSTR,
            yt = s.TYPED,
            bt = s.VIEW,
            xt = M(1, (function(t, e) {
                return Tt(N(t, t[_t]), e)
            })),
            wt = o((function() {
                return 1 === new K(new Uint16Array([1]).buffer)[0]
            })),
            kt = !!K && !!K.prototype.set && o((function() {
                new K(1).set({})
            })),
            St = function(t, e) {
                var n = d(t);
                if (n < 0 || n % e) throw U("Wrong offset!");
                return n
            },
            Ct = function(t) {
                if (x(t) && yt in t) return t;
                throw V(t + " is not a typed array!")
            },
            Tt = function(t, e) {
                if (!x(t) || !(vt in t)) throw V("It is not a typed array constructor!");
                return new t(e)
            },
            Ot = function(t, e) {
                return Et(N(t, t[_t]), e)
            },
            Et = function(t, e) {
                for (var n = 0, r = e.length, i = Tt(t, r); r > n;) i[n] = e[n++];
                return i
            },
            Lt = function(t, e, n) {
                z(t, e, {
                    get: function() {
                        return this._d[n]
                    }
                })
            },
            Mt = function(t) {
                var e, n, r, i, o, a, s = w(t),
                    u = arguments.length,
                    c = u > 1 ? arguments[1] : void 0,
                    f = void 0 !== c,
                    h = O(s);
                if (null != h && !k(h)) {
                    for (a = h.call(s), r = [], e = 0; !(o = a.next()).done; e++) r.push(o.value);
                    s = r
                }
                for (f && u > 2 && (c = l(c, arguments[2], 2)), e = 0, n = g(s.length), i = Tt(this, n); n > e; e++) i[e] = f ? c(s[e], e) : s[e];
                return i
            },
            At = function() {
                for (var t = 0, e = arguments.length, n = Tt(this, e); e > t;) n[t] = arguments[t++];
                return n
            },
            Nt = !!K && o((function() {
                pt.call(new K(1))
            })),
            Rt = function() {
                return pt.apply(Nt ? ft.call(Ct(this)) : Ct(this), arguments)
            },
            Pt = {
                copyWithin: function(t, e) {
                    return W.call(Ct(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function(t) {
                    return Q(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function(t) {
                    return I.apply(Ct(this), arguments)
                },
                filter: function(t) {
                    return Ot(this, Y(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function(t) {
                    return Z(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function(t) {
                    return tt(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function(t) {
                    q(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function(t) {
                    return nt(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function(t) {
                    return et(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function(t) {
                    return lt.apply(Ct(this), arguments)
                },
                lastIndexOf: function(t) {
                    return at.apply(Ct(this), arguments)
                },
                map: function(t) {
                    return xt(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function(t) {
                    return st.apply(Ct(this), arguments)
                },
                reduceRight: function(t) {
                    return ut.apply(Ct(this), arguments)
                },
                reverse: function() {
                    for (var t, e = Ct(this).length, n = Math.floor(e / 2), r = 0; r < n;) t = this[r], this[r++] = this[--e], this[e] = t;
                    return this
                },
                some: function(t) {
                    return J(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function(t) {
                    return ct.call(Ct(this), t)
                },
                subarray: function(t, e) {
                    var n = Ct(this),
                        r = n.length,
                        i = _(t, r);
                    return new(N(n, n[_t]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, g((void 0 === e ? r : _(e, r)) - i))
                }
            },
            Ft = function(t, e) {
                return Ot(this, ft.call(Ct(this), t, e))
            },
            Dt = function(t) {
                Ct(this);
                var e = St(arguments[1], 1),
                    n = this.length,
                    r = w(t),
                    i = g(r.length),
                    o = 0;
                if (i + e > n) throw U("Wrong length!");
                for (; o < i;) this[e + o] = r[o++]
            },
            It = {
                entries: function() {
                    return ot.call(Ct(this))
                },
                keys: function() {
                    return it.call(Ct(this))
                },
                values: function() {
                    return rt.call(Ct(this))
                }
            },
            Wt = function(t, e) {
                return x(t) && t[yt] && "symbol" != typeof e && e in t && String(+e) == String(e)
            },
            jt = function(t, e) {
                return Wt(t, e = m(e, !0)) ? f(2, t[e]) : B(t, e)
            },
            Ht = function(t, e, n) {
                return !(Wt(t, e = m(e, !0)) && x(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable ? z(t, e, n) : (t[e] = n.value, t)
            };
        mt || (H.f = jt, j.f = Ht), a(a.S + a.F * !mt, "Object", {
            getOwnPropertyDescriptor: jt,
            defineProperty: Ht
        }), o((function() {
            ht.call({})
        })) && (ht = pt = function() {
            return lt.call(this)
        });
        var zt = p({}, Pt);
        p(zt, It), h(zt, dt, It.values), p(zt, {
            slice: Ft,
            set: Dt,
            constructor: function() {},
            toString: ht,
            toLocaleString: Rt
        }), Lt(zt, "buffer", "b"), Lt(zt, "byteOffset", "o"), Lt(zt, "byteLength", "l"), Lt(zt, "length", "e"), z(zt, gt, {
            get: function() {
                return this[yt]
            }
        }), t.exports = function(t, e, n, u) {
            var l = t + ((u = !!u) ? "Clamped" : "") + "Array",
                f = "get" + t,
                p = "set" + t,
                d = i[l],
                _ = d || {},
                m = d && C(d),
                y = !d || !s.ABV,
                w = {},
                k = d && d.prototype,
                O = function(t, n) {
                    z(t, n, {
                        get: function() {
                            return function(t, n) {
                                var r = t._d;
                                return r.v[f](n * e + r.o, wt)
                            }(this, n)
                        },
                        set: function(t) {
                            return function(t, n, r) {
                                var i = t._d;
                                u && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[p](n * e + i.o, r, wt)
                            }(this, n, t)
                        },
                        enumerable: !0
                    })
                };
            y ? (d = n((function(t, n, r, i) {
                c(t, d, l, "_d");
                var o, a, s, u, f = 0,
                    p = 0;
                if (x(n)) {
                    if (!(n instanceof $ || "ArrayBuffer" == (u = b(n)) || "SharedArrayBuffer" == u)) return yt in n ? Et(d, n) : Mt.call(d, n);
                    o = n, p = St(r, e);
                    var _ = n.byteLength;
                    if (void 0 === i) {
                        if (_ % e) throw U("Wrong length!");
                        if ((a = _ - p) < 0) throw U("Wrong length!")
                    } else if ((a = g(i) * e) + p > _) throw U("Wrong length!");
                    s = a / e
                } else s = v(n), o = new $(a = s * e);
                for (h(t, "_d", {
                        b: o,
                        o: p,
                        l: a,
                        e: s,
                        v: new X(o)
                    }); f < s;) O(t, f++)
            })), k = d.prototype = S(zt), h(k, "constructor", d)) : o((function() {
                d(1)
            })) && o((function() {
                new d(-1)
            })) && F((function(t) {
                new d, new d(null), new d(1.5), new d(t)
            }), !0) || (d = n((function(t, n, r, i) {
                var o;
                return c(t, d, l), x(n) ? n instanceof $ || "ArrayBuffer" == (o = b(n)) || "SharedArrayBuffer" == o ? void 0 !== i ? new _(n, St(r, e), i) : void 0 !== r ? new _(n, St(r, e)) : new _(n) : yt in n ? Et(d, n) : Mt.call(d, n) : new _(v(n))
            })), q(m !== Function.prototype ? T(_).concat(T(m)) : T(_), (function(t) {
                t in d || h(d, t, _[t])
            })), d.prototype = k, r || (k.constructor = d));
            var E = k[dt],
                L = !!E && ("values" == E.name || null == E.name),
                M = It.values;
            h(d, vt, !0), h(k, yt, l), h(k, bt, !0), h(k, _t, d), (u ? new d(1)[gt] == l : gt in k) || z(k, gt, {
                get: function() {
                    return l
                }
            }), w[l] = d, a(a.G + a.W + a.F * (d != _), w), a(a.S, l, {
                BYTES_PER_ELEMENT: e
            }), a(a.S + a.F * o((function() {
                _.of.call(d, 1)
            })), l, {
                from: Mt,
                of: At
            }), "BYTES_PER_ELEMENT" in k || h(k, "BYTES_PER_ELEMENT", e), a(a.P, l, Pt), D(l), a(a.P + a.F * kt, l, {
                set: Dt
            }), a(a.P + a.F * !L, l, It), r || k.toString == ht || (k.toString = ht), a(a.P + a.F * o((function() {
                new d(1).slice()
            })), l, {
                slice: Ft
            }), a(a.P + a.F * (o((function() {
                return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString()
            })) || !o((function() {
                k.toLocaleString.call([1, 2])
            }))), l, {
                toLocaleString: Rt
            }), P[l] = L ? E : M, r || L || h(k, dt, M)
        }
    } else t.exports = function() {}
}, function(t, e, n) {
    var r = n(4);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    var r = n(30)("meta"),
        i = n(4),
        o = n(13),
        a = n(9).f,
        s = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        l = !n(2)((function() {
            return u(Object.preventExtensions({}))
        })),
        c = function(t) {
            a(t, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        f = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, r)) {
                    if (!u(t)) return "F";
                    if (!e) return "E";
                    c(t)
                }
                return t[r].i
            },
            getWeak: function(t, e) {
                if (!o(t, r)) {
                    if (!u(t)) return !0;
                    if (!e) return !1;
                    c(t)
                }
                return t[r].w
            },
            onFreeze: function(t) {
                return l && f.NEED && u(t) && !o(t, r) && c(t), t
            }
        }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var r = n(94),
        i = n(65);
    t.exports = Object.keys || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(20),
        i = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
    }
}, function(t, e, n) {
    var r = n(3),
        i = n(95),
        o = n(65),
        a = n(64)("IE_PROTO"),
        s = function() {},
        u = function() {
            var t, e = n(62)("iframe"),
                r = o.length;
            for (e.style.display = "none", n(66).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[o[r]];
            return u()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = u(), void 0 === e ? n : i(n, e)
    }
}, function(t, e, n) {
    var r = n(94),
        i = n(65).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(13),
        i = n(10),
        o = n(64)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function(t, e, n) {
    var r = n(5)("unscopables"),
        i = Array.prototype;
    null == i[r] && n(14)(i, r, {}), t.exports = function(t) {
        i[r][t] = !0
    }
}, function(t, e, n) {
    var r = n(4);
    t.exports = function(t, e) {
        if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function(t, e, n) {
    var r = n(9).f,
        i = n(13),
        o = n(5)("toStringTag");
    t.exports = function(t, e, n) {
        t && !i(t = n ? t : t.prototype, o) && r(t, o, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var r = n(0),
        i = n(25),
        o = n(2),
        a = n(68),
        s = "[" + a + "]",
        u = RegExp("^" + s + s + "*"),
        l = RegExp(s + s + "*$"),
        c = function(t, e, n) {
            var i = {},
                s = o((function() {
                    return !!a[t]() || "​" != "​" [t]()
                })),
                u = i[t] = s ? e(f) : a[t];
            n && (i[n] = u), r(r.P + r.F * s, "String", i)
        },
        f = c.trim = function(t, e) {
            return t = String(i(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(l, "")), t
        };
    t.exports = c
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(9),
        o = n(8),
        a = n(5)("species");
    t.exports = function(t) {
        var e = r[t];
        o && e && !e[a] && i.f(e, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var r = n(11);
    t.exports = function(t, e, n) {
        for (var i in e) r(t, i, e[i], n);
        return t
    }
}, function(t, e, n) {
    var r;
    ! function(n, i) {
        i = function(t, e, n) {
            function r(e, n, i) {
                return i = Object.create(r.fn), e && i.push.apply(i, e.addEventListener ? [e] : "" + e === e ? /</.test(e) ? ((n = t.createElement(n)).innerHTML = e, n.children) : n ? (n = r(n)[0]) ? n.querySelectorAll(e) : i : t.querySelectorAll(e) : e), i
            }
            return r.fn = [], r.one = function(t, e) {
                return r(t, e)[0] || null
            }, r
        }(document);
        void 0 === (r = function() {
            return i
        }.apply(e, [])) || (t.exports = r)
    }()
}, function(t, e, n) {
    var r = n(24);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var r = n(24),
        i = n(5)("toStringTag"),
        o = "Arguments" == r(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, n) {
    var r = n(3),
        i = n(19),
        o = n(5)("species");
    t.exports = function(t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || null == (n = r(a)[o]) ? e : i(n)
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(1),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: r.version,
        mode: n(31) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e, n) {
    var r = n(15),
        i = n(6),
        o = n(33);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, u = r(e),
                l = i(u.length),
                c = o(a, l);
            if (t && n != n) {
                for (; l > c;)
                    if ((s = u[c++]) != s) return !0
            } else
                for (; l > c; c++)
                    if ((t || c in u) && u[c] === n) return t || c || 0;
            return !t && -1
        }
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var r = n(24);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, n) {
    var r = n(5)("iterator"),
        i = !1;
    try {
        var o = [7][r]();
        o.return = function() {
            i = !0
        }, Array.from(o, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
            var o = [7],
                a = o[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, o[r] = function() {
                return a
            }, t(o)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3);
    t.exports = function() {
        var t = r(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(48),
        i = RegExp.prototype.exec;
    t.exports = function(t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var o = n.call(t, e);
            if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return i.call(t, e)
    }
}, function(t, e, n) {
    "use strict";
    n(112);
    var r = n(11),
        i = n(14),
        o = n(2),
        a = n(25),
        s = n(5),
        u = n(83),
        l = s("species"),
        c = !o((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        f = function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
    t.exports = function(t, e, n) {
        var h = s(t),
            p = !o((function() {
                var e = {};
                return e[h] = function() {
                    return 7
                }, 7 != "" [t](e)
            })),
            d = p ? !o((function() {
                var e = !1,
                    n = /a/;
                return n.exec = function() {
                    return e = !0, null
                }, "split" === t && (n.constructor = {}, n.constructor[l] = function() {
                    return n
                }), n[h](""), !e
            })) : void 0;
        if (!p || !d || "replace" === t && !c || "split" === t && !f) {
            var g = /./ [h],
                v = n(a, h, "" [t], (function(t, e, n, r, i) {
                    return e.exec === u ? p && !i ? {
                        done: !0,
                        value: g.call(e, n, r)
                    } : {
                        done: !0,
                        value: t.call(n, e, r)
                    } : {
                        done: !1
                    }
                })),
                _ = v[0],
                m = v[1];
            r(String.prototype, t, _), i(RegExp.prototype, h, 2 == e ? function(t, e) {
                return m.call(t, this, e)
            } : function(t) {
                return m.call(t, this)
            })
        }
    }
}, function(t, e, n) {
    var r = n(18),
        i = n(107),
        o = n(78),
        a = n(3),
        s = n(6),
        u = n(80),
        l = {},
        c = {};
    (e = t.exports = function(t, e, n, f, h) {
        var p, d, g, v, _ = h ? function() {
                return t
            } : u(t),
            m = r(n, f, e ? 2 : 1),
            y = 0;
        if ("function" != typeof _) throw TypeError(t + " is not iterable!");
        if (o(_)) {
            for (p = s(t.length); p > y; y++)
                if ((v = e ? m(a(d = t[y])[0], d[1]) : m(t[y])) === l || v === c) return v
        } else
            for (g = _.call(t); !(d = g.next()).done;)
                if ((v = i(g, m, d.value, e)) === l || v === c) return v
    }).BREAK = l, e.RETURN = c
}, function(t, e, n) {
    var r = n(1).navigator;
    t.exports = r && r.userAgent || ""
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0),
        o = n(11),
        a = n(44),
        s = n(28),
        u = n(58),
        l = n(43),
        c = n(4),
        f = n(2),
        h = n(54),
        p = n(39),
        d = n(69);
    t.exports = function(t, e, n, g, v, _) {
        var m = r[t],
            y = m,
            b = v ? "set" : "add",
            x = y && y.prototype,
            w = {},
            k = function(t) {
                var e = x[t];
                o(x, t, "delete" == t || "has" == t ? function(t) {
                    return !(_ && !c(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return _ && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
        if ("function" == typeof y && (_ || x.forEach && !f((function() {
                (new y).entries().next()
            })))) {
            var S = new y,
                C = S[b](_ ? {} : -0, 1) != S,
                T = f((function() {
                    S.has(1)
                })),
                O = h((function(t) {
                    new y(t)
                })),
                E = !_ && f((function() {
                    for (var t = new y, e = 5; e--;) t[b](e, e);
                    return !t.has(-0)
                }));
            O || ((y = e((function(e, n) {
                l(e, y, t);
                var r = d(new m, e, y);
                return null != n && u(n, v, r[b], r), r
            }))).prototype = x, x.constructor = y), (T || E) && (k("delete"), k("has"), v && k("get")), (E || C) && k(b), _ && x.clear && delete x.clear
        } else y = g.getConstructor(e, t, v, b), a(y.prototype, n), s.NEED = !0;
        return p(y, t), w[t] = y, i(i.G + i.W + i.F * (y != m), w), _ || g.setStrong(y, t, v), y
    }
}, function(t, e, n) {
    for (var r, i = n(1), o = n(14), a = n(30), s = a("typed_array"), u = a("view"), l = !(!i.ArrayBuffer || !i.DataView), c = l, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = i[h[f++]]) ? (o(r.prototype, s, !0), o(r.prototype, u, !0)) : c = !1;
    t.exports = {
        ABV: l,
        CONSTR: c,
        TYPED: s,
        VIEW: u
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(1).document,
        o = r(i) && r(i.createElement);
    t.exports = function(t) {
        return o ? i.createElement(t) : {}
    }
}, function(t, e, n) {
    e.f = n(5)
}, function(t, e, n) {
    var r = n(50)("keys"),
        i = n(30);
    t.exports = function(t) {
        return r[t] || (r[t] = i(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var r = n(1).document;
    t.exports = r && r.documentElement
}, function(t, e, n) {
    var r = n(4),
        i = n(3),
        o = function(t, e) {
            if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
            try {
                (r = n(18)(Function.call, n(21).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return o(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0),
        check: o
    }
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
    var r = n(4),
        i = n(67).set;
    t.exports = function(t, e, n) {
        var o, a = e.constructor;
        return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(t, o), t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(20),
        i = n(25);
    t.exports = function(t) {
        var e = String(i(this)),
            n = "",
            o = r(t);
        if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
        for (; o > 0;
            (o >>>= 1) && (e += e)) 1 & o && (n += e);
        return n
    }
}, function(t, e) {
    t.exports = Math.sign || function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
}, function(t, e) {
    var n = Math.expm1;
    t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(t) {
        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
    } : n
}, function(t, e, n) {
    var r = n(20),
        i = n(25);
    t.exports = function(t) {
        return function(e, n) {
            var o, a, s = String(i(e)),
                u = r(n),
                l = s.length;
            return u < 0 || u >= l ? t ? "" : void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === l || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(31),
        i = n(0),
        o = n(11),
        a = n(14),
        s = n(41),
        u = n(106),
        l = n(39),
        c = n(36),
        f = n(5)("iterator"),
        h = !([].keys && "next" in [].keys()),
        p = function() {
            return this
        };
    t.exports = function(t, e, n, d, g, v, _) {
        u(n, e, d);
        var m, y, b, x = function(t) {
                if (!h && t in C) return C[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            w = e + " Iterator",
            k = "values" == g,
            S = !1,
            C = t.prototype,
            T = C[f] || C["@@iterator"] || g && C[g],
            O = T || x(g),
            E = g ? k ? x("entries") : O : void 0,
            L = "Array" == e && C.entries || T;
        if (L && (b = c(L.call(new t))) !== Object.prototype && b.next && (l(b, w, !0), r || "function" == typeof b[f] || a(b, f, p)), k && T && "values" !== T.name && (S = !0, O = function() {
                return T.call(this)
            }), r && !_ || !h && !S && C[f] || a(C, f, O), s[e] = O, s[w] = p, g)
            if (m = {
                    values: k ? O : x("values"),
                    keys: v ? O : x("keys"),
                    entries: E
                }, _)
                for (y in m) y in C || o(C, y, m[y]);
            else i(i.P + i.F * (h || S), e, m);
        return m
    }
}, function(t, e, n) {
    var r = n(76),
        i = n(25);
    t.exports = function(t, e, n) {
        if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(i(t))
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(24),
        o = n(5)("match");
    t.exports = function(t) {
        var e;
        return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
    }
}, function(t, e, n) {
    var r = n(5)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (n) {
            try {
                return e[r] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, n) {
    var r = n(41),
        i = n(5)("iterator"),
        o = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || o[i] === t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(9),
        i = n(29);
    t.exports = function(t, e, n) {
        e in t ? r.f(t, e, i(0, n)) : t[e] = n
    }
}, function(t, e, n) {
    var r = n(48),
        i = n(5)("iterator"),
        o = n(41);
    t.exports = n(7).getIteratorMethod = function(t) {
        if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
    }
}, function(t, e, n) {
    "use strict";
    var r = n(10),
        i = n(33),
        o = n(6);
    t.exports = function(t) {
        for (var e = r(this), n = o(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), u = a > 2 ? arguments[2] : void 0, l = void 0 === u ? n : i(u, n); l > s;) e[s++] = t;
        return e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(37),
        i = n(111),
        o = n(41),
        a = n(15);
    t.exports = n(74)(Array, "Array", (function(t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }), (function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function(t, e, n) {
    "use strict";
    var r, i, o = n(55),
        a = RegExp.prototype.exec,
        s = String.prototype.replace,
        u = a,
        l = (r = /a/, i = /b*/g, a.call(r, "a"), a.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
        c = void 0 !== /()??/.exec("")[1];
    (l || c) && (u = function(t) {
        var e, n, r, i, u = this;
        return c && (n = new RegExp("^" + u.source + "$(?!\\s)", o.call(u))), l && (e = u.lastIndex), r = a.call(u, t), l && r && (u.lastIndex = u.global ? r.index + r[0].length : e), c && r && r.length > 1 && s.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
        })), r
    }), t.exports = u
}, function(t, e, n) {
    "use strict";
    var r = n(73)(!0);
    t.exports = function(t, e, n) {
        return e + (n ? r(t, e).length : 1)
    }
}, function(t, e, n) {
    var r, i, o, a = n(18),
        s = n(100),
        u = n(66),
        l = n(62),
        c = n(1),
        f = c.process,
        h = c.setImmediate,
        p = c.clearImmediate,
        d = c.MessageChannel,
        g = c.Dispatch,
        v = 0,
        _ = {},
        m = function() {
            var t = +this;
            if (_.hasOwnProperty(t)) {
                var e = _[t];
                delete _[t], e()
            }
        },
        y = function(t) {
            m.call(t.data)
        };
    h && p || (h = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return _[++v] = function() {
            s("function" == typeof t ? t : Function(t), e)
        }, r(v), v
    }, p = function(t) {
        delete _[t]
    }, "process" == n(24)(f) ? r = function(t) {
        f.nextTick(a(m, t, 1))
    } : g && g.now ? r = function(t) {
        g.now(a(m, t, 1))
    } : d ? (o = (i = new d).port2, i.port1.onmessage = y, r = a(o.postMessage, o, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function(t) {
        c.postMessage(t + "", "*")
    }, c.addEventListener("message", y, !1)) : r = "onreadystatechange" in l("script") ? function(t) {
        u.appendChild(l("script")).onreadystatechange = function() {
            u.removeChild(this), m.call(t)
        }
    } : function(t) {
        setTimeout(a(m, t, 1), 0)
    }), t.exports = {
        set: h,
        clear: p
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(8),
        o = n(31),
        a = n(61),
        s = n(14),
        u = n(44),
        l = n(2),
        c = n(43),
        f = n(20),
        h = n(6),
        p = n(119),
        d = n(35).f,
        g = n(9).f,
        v = n(81),
        _ = n(39),
        m = r.ArrayBuffer,
        y = r.DataView,
        b = r.Math,
        x = r.RangeError,
        w = r.Infinity,
        k = m,
        S = b.abs,
        C = b.pow,
        T = b.floor,
        O = b.log,
        E = b.LN2,
        L = i ? "_b" : "buffer",
        M = i ? "_l" : "byteLength",
        A = i ? "_o" : "byteOffset";

    function N(t, e, n) {
        var r, i, o, a = new Array(n),
            s = 8 * n - e - 1,
            u = (1 << s) - 1,
            l = u >> 1,
            c = 23 === e ? C(2, -24) - C(2, -77) : 0,
            f = 0,
            h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for ((t = S(t)) != t || t === w ? (i = t != t ? 1 : 0, r = u) : (r = T(O(t) / E), t * (o = C(2, -r)) < 1 && (r--, o *= 2), (t += r + l >= 1 ? c / o : c * C(2, 1 - l)) * o >= 2 && (r++, o /= 2), r + l >= u ? (i = 0, r = u) : r + l >= 1 ? (i = (t * o - 1) * C(2, e), r += l) : (i = t * C(2, l - 1) * C(2, e), r = 0)); e >= 8; a[f++] = 255 & i, i /= 256, e -= 8);
        for (r = r << e | i, s += e; s > 0; a[f++] = 255 & r, r /= 256, s -= 8);
        return a[--f] |= 128 * h, a
    }

    function R(t, e, n) {
        var r, i = 8 * n - e - 1,
            o = (1 << i) - 1,
            a = o >> 1,
            s = i - 7,
            u = n - 1,
            l = t[u--],
            c = 127 & l;
        for (l >>= 7; s > 0; c = 256 * c + t[u], u--, s -= 8);
        for (r = c & (1 << -s) - 1, c >>= -s, s += e; s > 0; r = 256 * r + t[u], u--, s -= 8);
        if (0 === c) c = 1 - a;
        else {
            if (c === o) return r ? NaN : l ? -w : w;
            r += C(2, e), c -= a
        }
        return (l ? -1 : 1) * r * C(2, c - e)
    }

    function P(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function F(t) {
        return [255 & t]
    }

    function D(t) {
        return [255 & t, t >> 8 & 255]
    }

    function I(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function W(t) {
        return N(t, 52, 8)
    }

    function j(t) {
        return N(t, 23, 4)
    }

    function H(t, e, n) {
        g(t.prototype, e, {
            get: function() {
                return this[n]
            }
        })
    }

    function z(t, e, n, r) {
        var i = p(+n);
        if (i + e > t[M]) throw x("Wrong index!");
        var o = t[L]._b,
            a = i + t[A],
            s = o.slice(a, a + e);
        return r ? s : s.reverse()
    }

    function B(t, e, n, r, i, o) {
        var a = p(+n);
        if (a + e > t[M]) throw x("Wrong index!");
        for (var s = t[L]._b, u = a + t[A], l = r(+i), c = 0; c < e; c++) s[u + c] = l[o ? c : e - c - 1]
    }
    if (a.ABV) {
        if (!l((function() {
                m(1)
            })) || !l((function() {
                new m(-1)
            })) || l((function() {
                return new m, new m(1.5), new m(NaN), "ArrayBuffer" != m.name
            }))) {
            for (var U, V = (m = function(t) {
                    return c(this, m), new k(p(t))
                }).prototype = k.prototype, K = d(k), G = 0; K.length > G;)(U = K[G++]) in m || s(m, U, k[U]);
            o || (V.constructor = m)
        }
        var $ = new y(new m(2)),
            X = y.prototype.setInt8;
        $.setInt8(0, 2147483648), $.setInt8(1, 2147483649), !$.getInt8(0) && $.getInt8(1) || u(y.prototype, {
            setInt8: function(t, e) {
                X.call(this, t, e << 24 >> 24)
            },
            setUint8: function(t, e) {
                X.call(this, t, e << 24 >> 24)
            }
        }, !0)
    } else m = function(t) {
        c(this, m, "ArrayBuffer");
        var e = p(t);
        this._b = v.call(new Array(e), 0), this[M] = e
    }, y = function(t, e, n) {
        c(this, y, "DataView"), c(t, m, "DataView");
        var r = t[M],
            i = f(e);
        if (i < 0 || i > r) throw x("Wrong offset!");
        if (i + (n = void 0 === n ? r - i : h(n)) > r) throw x("Wrong length!");
        this[L] = t, this[A] = i, this[M] = n
    }, i && (H(m, "byteLength", "_l"), H(y, "buffer", "_b"), H(y, "byteLength", "_l"), H(y, "byteOffset", "_o")), u(y.prototype, {
        getInt8: function(t) {
            return z(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
            return z(this, 1, t)[0]
        },
        getInt16: function(t) {
            var e = z(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16
        },
        getUint16: function(t) {
            var e = z(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0]
        },
        getInt32: function(t) {
            return P(z(this, 4, t, arguments[1]))
        },
        getUint32: function(t) {
            return P(z(this, 4, t, arguments[1])) >>> 0
        },
        getFloat32: function(t) {
            return R(z(this, 4, t, arguments[1]), 23, 4)
        },
        getFloat64: function(t) {
            return R(z(this, 8, t, arguments[1]), 52, 8)
        },
        setInt8: function(t, e) {
            B(this, 1, t, F, e)
        },
        setUint8: function(t, e) {
            B(this, 1, t, F, e)
        },
        setInt16: function(t, e) {
            B(this, 2, t, D, e, arguments[2])
        },
        setUint16: function(t, e) {
            B(this, 2, t, D, e, arguments[2])
        },
        setInt32: function(t, e) {
            B(this, 4, t, I, e, arguments[2])
        },
        setUint32: function(t, e) {
            B(this, 4, t, I, e, arguments[2])
        },
        setFloat32: function(t, e) {
            B(this, 4, t, j, e, arguments[2])
        },
        setFloat64: function(t, e) {
            B(this, 8, t, W, e, arguments[2])
        }
    });
    _(m, "ArrayBuffer"), _(y, "DataView"), s(y.prototype, a.VIEW, !0), e.ArrayBuffer = m, e.DataView = y
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    t.exports = !n(124)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    ! function(t) {
        function e(e, n, r) {
            var i, o = e.getWrapperElement();
            return (i = o.appendChild(document.createElement("div"))).className = r ? "CodeMirror-dialog CodeMirror-dialog-bottom" : "CodeMirror-dialog CodeMirror-dialog-top", "string" == typeof n ? i.innerHTML = n : i.appendChild(n), t.addClass(o, "dialog-opened"), i
        }

        function n(t, e) {
            t.state.currentNotificationClose && t.state.currentNotificationClose(), t.state.currentNotificationClose = e
        }
        t.defineExtension("openDialog", (function(r, i, o) {
            o || (o = {}), n(this, null);
            var a = e(this, r, o.bottom),
                s = !1,
                u = this;

            function l(e) {
                if ("string" == typeof e) f.value = e;
                else {
                    if (s) return;
                    s = !0, t.rmClass(a.parentNode, "dialog-opened"), a.parentNode.removeChild(a), u.focus(), o.onClose && o.onClose(a)
                }
            }
            var c, f = a.getElementsByTagName("input")[0];
            return f ? (f.focus(), o.value && (f.value = o.value, !1 !== o.selectValueOnOpen && f.select()), o.onInput && t.on(f, "input", (function(t) {
                o.onInput(t, f.value, l)
            })), o.onKeyUp && t.on(f, "keyup", (function(t) {
                o.onKeyUp(t, f.value, l)
            })), t.on(f, "keydown", (function(e) {
                o && o.onKeyDown && o.onKeyDown(e, f.value, l) || ((27 == e.keyCode || !1 !== o.closeOnEnter && 13 == e.keyCode) && (f.blur(), t.e_stop(e), l()), 13 == e.keyCode && i(f.value, e))
            })), !1 !== o.closeOnBlur && t.on(a, "focusout", (function(t) {
                null !== t.relatedTarget && l()
            }))) : (c = a.getElementsByTagName("button")[0]) && (t.on(c, "click", (function() {
                l(), u.focus()
            })), !1 !== o.closeOnBlur && t.on(c, "blur", l), c.focus()), l
        })), t.defineExtension("openConfirm", (function(r, i, o) {
            n(this, null);
            var a = e(this, r, o && o.bottom),
                s = a.getElementsByTagName("button"),
                u = !1,
                l = this,
                c = 1;

            function f() {
                u || (u = !0, t.rmClass(a.parentNode, "dialog-opened"), a.parentNode.removeChild(a), l.focus())
            }
            s[0].focus();
            for (var h = 0; h < s.length; ++h) {
                var p = s[h];
                ! function(e) {
                    t.on(p, "click", (function(n) {
                        t.e_preventDefault(n), f(), e && e(l)
                    }))
                }(i[h]), t.on(p, "blur", (function() {
                    --c, setTimeout((function() {
                        c <= 0 && f()
                    }), 200)
                })), t.on(p, "focus", (function() {
                    ++c
                }))
            }
        })), t.defineExtension("openNotification", (function(r, i) {
            n(this, l);
            var o, a = e(this, r, i && i.bottom),
                s = !1,
                u = i && void 0 !== i.duration ? i.duration : 5e3;

            function l() {
                s || (s = !0, clearTimeout(o), t.rmClass(a.parentNode, "dialog-opened"), a.parentNode.removeChild(a))
            }
            return t.on(a, "click", (function(e) {
                t.e_preventDefault(e), l()
            })), u && (o = setTimeout(l, u)), l
        }))
    }(n(16))
}, function(t, e, n) {
    ! function(t) {
        "use strict";
        var e, n, r = t.Pos;

        function i(t, e) {
            for (var n = function(t) {
                    var e = t.flags;
                    return null != e ? e : (t.ignoreCase ? "i" : "") + (t.global ? "g" : "") + (t.multiline ? "m" : "")
                }(t), r = n, i = 0; i < e.length; i++) - 1 == r.indexOf(e.charAt(i)) && (r += e.charAt(i));
            return n == r ? t : new RegExp(t.source, r)
        }

        function o(t) {
            return /\\s|\\n|\n|\\W|\\D|\[\^/.test(t.source)
        }

        function a(t, e, n) {
            e = i(e, "g");
            for (var o = n.line, a = n.ch, s = t.lastLine(); o <= s; o++, a = 0) {
                e.lastIndex = a;
                var u = t.getLine(o),
                    l = e.exec(u);
                if (l) return {
                    from: r(o, l.index),
                    to: r(o, l.index + l[0].length),
                    match: l
                }
            }
        }

        function s(t, e, n) {
            if (!o(e)) return a(t, e, n);
            e = i(e, "gm");
            for (var s, u = 1, l = n.line, c = t.lastLine(); l <= c;) {
                for (var f = 0; f < u && !(l > c); f++) {
                    var h = t.getLine(l++);
                    s = null == s ? h : s + "\n" + h
                }
                u *= 2, e.lastIndex = n.ch;
                var p = e.exec(s);
                if (p) {
                    var d = s.slice(0, p.index).split("\n"),
                        g = p[0].split("\n"),
                        v = n.line + d.length - 1,
                        _ = d[d.length - 1].length;
                    return {
                        from: r(v, _),
                        to: r(v + g.length - 1, 1 == g.length ? _ + g[0].length : g[g.length - 1].length),
                        match: p
                    }
                }
            }
        }

        function u(t, e, n) {
            for (var r, i = 0; i <= t.length;) {
                e.lastIndex = i;
                var o = e.exec(t);
                if (!o) break;
                var a = o.index + o[0].length;
                if (a > t.length - n) break;
                (!r || a > r.index + r[0].length) && (r = o), i = o.index + 1
            }
            return r
        }

        function l(t, e, n) {
            e = i(e, "g");
            for (var o = n.line, a = n.ch, s = t.firstLine(); o >= s; o--, a = -1) {
                var l = t.getLine(o),
                    c = u(l, e, a < 0 ? 0 : l.length - a);
                if (c) return {
                    from: r(o, c.index),
                    to: r(o, c.index + c[0].length),
                    match: c
                }
            }
        }

        function c(t, e, n) {
            if (!o(e)) return l(t, e, n);
            e = i(e, "gm");
            for (var a, s = 1, c = t.getLine(n.line).length - n.ch, f = n.line, h = t.firstLine(); f >= h;) {
                for (var p = 0; p < s && f >= h; p++) {
                    var d = t.getLine(f--);
                    a = null == a ? d : d + "\n" + a
                }
                s *= 2;
                var g = u(a, e, c);
                if (g) {
                    var v = a.slice(0, g.index).split("\n"),
                        _ = g[0].split("\n"),
                        m = f + v.length,
                        y = v[v.length - 1].length;
                    return {
                        from: r(m, y),
                        to: r(m + _.length - 1, 1 == _.length ? y + _[0].length : _[_.length - 1].length),
                        match: g
                    }
                }
            }
        }

        function f(t, e, n, r) {
            if (t.length == e.length) return n;
            for (var i = 0, o = n + Math.max(0, t.length - e.length);;) {
                if (i == o) return i;
                var a = i + o >> 1,
                    s = r(t.slice(0, a)).length;
                if (s == n) return a;
                s > n ? o = a : i = a + 1
            }
        }

        function h(t, i, o, a) {
            if (!i.length) return null;
            var s = a ? e : n,
                u = s(i).split(/\r|\n\r?/);
            t: for (var l = o.line, c = o.ch, h = t.lastLine() + 1 - u.length; l <= h; l++, c = 0) {
                var p = t.getLine(l).slice(c),
                    d = s(p);
                if (1 == u.length) {
                    var g = d.indexOf(u[0]);
                    if (-1 == g) continue t;
                    return o = f(p, d, g, s) + c, {
                        from: r(l, f(p, d, g, s) + c),
                        to: r(l, f(p, d, g + u[0].length, s) + c)
                    }
                }
                var v = d.length - u[0].length;
                if (d.slice(v) == u[0]) {
                    for (var _ = 1; _ < u.length - 1; _++)
                        if (s(t.getLine(l + _)) != u[_]) continue t;
                    var m = t.getLine(l + u.length - 1),
                        y = s(m),
                        b = u[u.length - 1];
                    if (y.slice(0, b.length) == b) return {
                        from: r(l, f(p, d, v, s) + c),
                        to: r(l + u.length - 1, f(m, y, b.length, s))
                    }
                }
            }
        }

        function p(t, i, o, a) {
            if (!i.length) return null;
            var s = a ? e : n,
                u = s(i).split(/\r|\n\r?/);
            t: for (var l = o.line, c = o.ch, h = t.firstLine() - 1 + u.length; l >= h; l--, c = -1) {
                var p = t.getLine(l);
                c > -1 && (p = p.slice(0, c));
                var d = s(p);
                if (1 == u.length) {
                    var g = d.lastIndexOf(u[0]);
                    if (-1 == g) continue t;
                    return {
                        from: r(l, f(p, d, g, s)),
                        to: r(l, f(p, d, g + u[0].length, s))
                    }
                }
                var v = u[u.length - 1];
                if (d.slice(0, v.length) == v) {
                    var _ = 1;
                    for (o = l - u.length + 1; _ < u.length - 1; _++)
                        if (s(t.getLine(o + _)) != u[_]) continue t;
                    var m = t.getLine(l + 1 - u.length),
                        y = s(m);
                    if (y.slice(y.length - u[0].length) == u[0]) return {
                        from: r(l + 1 - u.length, f(m, y, m.length - u[0].length, s)),
                        to: r(l, f(p, d, v.length, s))
                    }
                }
            }
        }

        function d(t, e, n, o) {
            var u;
            this.atOccurrence = !1, this.doc = t, n = n ? t.clipPos(n) : r(0, 0), this.pos = {
                from: n,
                to: n
            }, "object" == typeof o ? u = o.caseFold : (u = o, o = null), "string" == typeof e ? (null == u && (u = !1), this.matches = function(n, r) {
                return (n ? p : h)(t, e, r, u)
            }) : (e = i(e, "gm"), o && !1 === o.multiline ? this.matches = function(n, r) {
                return (n ? l : a)(t, e, r)
            } : this.matches = function(n, r) {
                return (n ? c : s)(t, e, r)
            })
        }
        String.prototype.normalize ? (e = function(t) {
            return t.normalize("NFD").toLowerCase()
        }, n = function(t) {
            return t.normalize("NFD")
        }) : (e = function(t) {
            return t.toLowerCase()
        }, n = function(t) {
            return t
        }), d.prototype = {
            findNext: function() {
                return this.find(!1)
            },
            findPrevious: function() {
                return this.find(!0)
            },
            find: function(e) {
                for (var n = this.matches(e, this.doc.clipPos(e ? this.pos.from : this.pos.to)); n && 0 == t.cmpPos(n.from, n.to);) e ? n.from.ch ? n.from = r(n.from.line, n.from.ch - 1) : n = n.from.line == this.doc.firstLine() ? null : this.matches(e, this.doc.clipPos(r(n.from.line - 1))) : n.to.ch < this.doc.getLine(n.to.line).length ? n.to = r(n.to.line, n.to.ch + 1) : n = n.to.line == this.doc.lastLine() ? null : this.matches(e, r(n.to.line + 1, 0));
                if (n) return this.pos = n, this.atOccurrence = !0, this.pos.match || !0;
                var i = r(e ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
                return this.pos = {
                    from: i,
                    to: i
                }, this.atOccurrence = !1
            },
            from: function() {
                if (this.atOccurrence) return this.pos.from
            },
            to: function() {
                if (this.atOccurrence) return this.pos.to
            },
            replace: function(e, n) {
                if (this.atOccurrence) {
                    var i = t.splitLines(e);
                    this.doc.replaceRange(i, this.pos.from, this.pos.to, n), this.pos.to = r(this.pos.from.line + i.length - 1, i[i.length - 1].length + (1 == i.length ? this.pos.from.ch : 0))
                }
            }
        }, t.defineExtension("getSearchCursor", (function(t, e, n) {
            return new d(this.doc, t, e, n)
        })), t.defineDocExtension("getSearchCursor", (function(t, e, n) {
            return new d(this, t, e, n)
        })), t.defineExtension("selectMatches", (function(e, n) {
            for (var r = [], i = this.getSearchCursor(e, this.getCursor("from"), n); i.findNext() && !(t.cmpPos(i.to(), this.getCursor("to")) > 0);) r.push({
                anchor: i.from(),
                head: i.to()
            });
            r.length && this.setSelections(r, 0)
        }))
    }(n(16))
}, function(t, e, n) {
    t.exports = !n(8) && !n(2)((function() {
        return 7 != Object.defineProperty(n(62)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(1),
        i = n(7),
        o = n(31),
        a = n(63),
        s = n(9).f;
    t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
        })
    }
}, function(t, e, n) {
    var r = n(13),
        i = n(15),
        o = n(51)(!1),
        a = n(64)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = i(t),
            u = 0,
            l = [];
        for (n in s) n != a && r(s, n) && l.push(n);
        for (; e.length > u;) r(s, n = e[u++]) && (~o(l, n) || l.push(n));
        return l
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(3),
        o = n(32);
    t.exports = n(8) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var n, a = o(e), s = a.length, u = 0; s > u;) r.f(t, n = a[u++], e[n]);
        return t
    }
}, function(t, e, n) {
    var r = n(15),
        i = n(35).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return a && "[object Window]" == o.call(t) ? function(t) {
            try {
                return i(t)
            } catch (t) {
                return a.slice()
            }
        }(t) : i(r(t))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(32),
        o = n(52),
        a = n(47),
        s = n(10),
        u = n(46),
        l = Object.assign;
    t.exports = !l || n(2)((function() {
        var t = {},
            e = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return t[n] = 7, r.split("").forEach((function(t) {
            e[t] = t
        })), 7 != l({}, t)[n] || Object.keys(l({}, e)).join("") != r
    })) ? function(t, e) {
        for (var n = s(t), l = arguments.length, c = 1, f = o.f, h = a.f; l > c;)
            for (var p, d = u(arguments[c++]), g = f ? i(d).concat(f(d)) : i(d), v = g.length, _ = 0; v > _;) p = g[_++], r && !h.call(d, p) || (n[p] = d[p]);
        return n
    } : l
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(19),
        i = n(4),
        o = n(100),
        a = [].slice,
        s = {},
        u = function(t, e, n) {
            if (!(e in s)) {
                for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
                s[e] = Function("F,a", "return new F(" + r.join(",") + ")")
            }
            return s[e](t, n)
        };
    t.exports = Function.bind || function(t) {
        var e = r(this),
            n = a.call(arguments, 1),
            s = function() {
                var r = n.concat(a.call(arguments));
                return this instanceof s ? u(e, r.length, r) : o(e, r, t)
            };
        return i(e.prototype) && (s.prototype = e.prototype), s
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    var r = n(1).parseInt,
        i = n(40).trim,
        o = n(68),
        a = /^[-+]?0[xX]/;
    t.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function(t, e) {
        var n = i(String(t), 3);
        return r(n, e >>> 0 || (a.test(n) ? 16 : 10))
    } : r
}, function(t, e, n) {
    var r = n(1).parseFloat,
        i = n(40).trim;
    t.exports = 1 / r(n(68) + "-0") != -1 / 0 ? function(t) {
        var e = i(String(t), 3),
            n = r(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n
    } : r
}, function(t, e, n) {
    var r = n(24);
    t.exports = function(t, e) {
        if ("number" != typeof t && "Number" != r(t)) throw TypeError(e);
        return +t
    }
}, function(t, e, n) {
    var r = n(4),
        i = Math.floor;
    t.exports = function(t) {
        return !r(t) && isFinite(t) && i(t) === t
    }
}, function(t, e) {
    t.exports = Math.log1p || function(t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(34),
        i = n(29),
        o = n(39),
        a = {};
    n(14)(a, n(5)("iterator"), (function() {
        return this
    })), t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: i(1, n)
        }), o(t, e + " Iterator")
    }
}, function(t, e, n) {
    var r = n(3);
    t.exports = function(t, e, n, i) {
        try {
            return i ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && r(o.call(t)), e
        }
    }
}, function(t, e, n) {
    var r = n(226);
    t.exports = function(t, e) {
        return new(r(t))(e)
    }
}, function(t, e, n) {
    var r = n(19),
        i = n(10),
        o = n(46),
        a = n(6);
    t.exports = function(t, e, n, s, u) {
        r(e);
        var l = i(t),
            c = o(l),
            f = a(l.length),
            h = u ? f - 1 : 0,
            p = u ? -1 : 1;
        if (n < 2)
            for (;;) {
                if (h in c) {
                    s = c[h], h += p;
                    break
                }
                if (h += p, u ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; u ? h >= 0 : f > h; h += p) h in c && (s = e(s, c[h], h, l));
        return s
    }
}, function(t, e, n) {
    "use strict";
    var r = n(10),
        i = n(33),
        o = n(6);
    t.exports = [].copyWithin || function(t, e) {
        var n = r(this),
            a = o(n.length),
            s = i(t, a),
            u = i(e, a),
            l = arguments.length > 2 ? arguments[2] : void 0,
            c = Math.min((void 0 === l ? a : i(l, a)) - u, a - s),
            f = 1;
        for (u < s && s < u + c && (f = -1, u += c - 1, s += c - 1); c-- > 0;) u in n ? n[s] = n[u] : delete n[s], s += f, u += f;
        return n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(83);
    n(0)({
        target: "RegExp",
        proto: !0,
        forced: r !== /./.exec
    }, {
        exec: r
    })
}, function(t, e, n) {
    n(8) && "g" != /./g.flags && n(9).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(55)
    })
}, function(t, e, n) {
    "use strict";
    var r, i, o, a, s = n(31),
        u = n(1),
        l = n(18),
        c = n(48),
        f = n(0),
        h = n(4),
        p = n(19),
        d = n(43),
        g = n(58),
        v = n(49),
        _ = n(85).set,
        m = n(246)(),
        y = n(115),
        b = n(247),
        x = n(59),
        w = n(116),
        k = u.TypeError,
        S = u.process,
        C = S && S.versions,
        T = C && C.v8 || "",
        O = u.Promise,
        E = "process" == c(S),
        L = function() {},
        M = i = y.f,
        A = !! function() {
            try {
                var t = O.resolve(1),
                    e = (t.constructor = {})[n(5)("species")] = function(t) {
                        t(L, L)
                    };
                return (E || "function" == typeof PromiseRejectionEvent) && t.then(L) instanceof e && 0 !== T.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
            } catch (t) {}
        }(),
        N = function(t) {
            var e;
            return !(!h(t) || "function" != typeof(e = t.then)) && e
        },
        R = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                m((function() {
                    for (var r = t._v, i = 1 == t._s, o = 0, a = function(e) {
                            var n, o, a, s = i ? e.ok : e.fail,
                                u = e.resolve,
                                l = e.reject,
                                c = e.domain;
                            try {
                                s ? (i || (2 == t._h && D(t), t._h = 1), !0 === s ? n = r : (c && c.enter(), n = s(r), c && (c.exit(), a = !0)), n === e.promise ? l(k("Promise-chain cycle")) : (o = N(n)) ? o.call(n, u, l) : u(n)) : l(r)
                            } catch (t) {
                                c && !a && c.exit(), l(t)
                            }
                        }; n.length > o;) a(n[o++]);
                    t._c = [], t._n = !1, e && !t._h && P(t)
                }))
            }
        },
        P = function(t) {
            _.call(u, (function() {
                var e, n, r, i = t._v,
                    o = F(t);
                if (o && (e = b((function() {
                        E ? S.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({
                            promise: t,
                            reason: i
                        }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                    })), t._h = E || F(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
            }))
        },
        F = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        D = function(t) {
            _.call(u, (function() {
                var e;
                E ? S.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            }))
        },
        I = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), R(e, !0))
        },
        W = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw k("Promise can't be resolved itself");
                    (e = N(t)) ? m((function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, l(W, r, 1), l(I, r, 1))
                        } catch (t) {
                            I.call(r, t)
                        }
                    })): (n._v = t, n._s = 1, R(n, !1))
                } catch (t) {
                    I.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    A || (O = function(t) {
        d(this, O, "Promise", "_h"), p(t), r.call(this);
        try {
            t(l(W, this, 1), l(I, this, 1))
        } catch (t) {
            I.call(this, t)
        }
    }, (r = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(44)(O.prototype, {
        then: function(t, e) {
            var n = M(v(this, O));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = E ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && R(this, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), o = function() {
        var t = new r;
        this.promise = t, this.resolve = l(W, t, 1), this.reject = l(I, t, 1)
    }, y.f = M = function(t) {
        return t === O || t === a ? new o(t) : i(t)
    }), f(f.G + f.W + f.F * !A, {
        Promise: O
    }), n(39)(O, "Promise"), n(42)("Promise"), a = n(7).Promise, f(f.S + f.F * !A, "Promise", {
        reject: function(t) {
            var e = M(this);
            return (0, e.reject)(t), e.promise
        }
    }), f(f.S + f.F * (s || !A), "Promise", {
        resolve: function(t) {
            return w(s && this === a ? O : this, t)
        }
    }), f(f.S + f.F * !(A && n(54)((function(t) {
        O.all(t).catch(L)
    }))), "Promise", {
        all: function(t) {
            var e = this,
                n = M(e),
                r = n.resolve,
                i = n.reject,
                o = b((function() {
                    var n = [],
                        o = 0,
                        a = 1;
                    g(t, !1, (function(t) {
                        var s = o++,
                            u = !1;
                        n.push(void 0), a++, e.resolve(t).then((function(t) {
                            u || (u = !0, n[s] = t, --a || r(n))
                        }), i)
                    })), --a || r(n)
                }));
            return o.e && i(o.v), n.promise
        },
        race: function(t) {
            var e = this,
                n = M(e),
                r = n.reject,
                i = b((function() {
                    g(t, !1, (function(t) {
                        e.resolve(t).then(n.resolve, r)
                    }))
                }));
            return i.e && r(i.v), n.promise
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(19);

    function i(t) {
        var e, n;
        this.promise = new t((function(t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r
        })), this.resolve = r(e), this.reject = r(n)
    }
    t.exports.f = function(t) {
        return new i(t)
    }
}, function(t, e, n) {
    var r = n(3),
        i = n(4),
        o = n(115);
    t.exports = function(t, e) {
        if (r(t), i(e) && e.constructor === t) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function(t, e, n) {
    "use strict";
    var r = n(9).f,
        i = n(34),
        o = n(44),
        a = n(18),
        s = n(43),
        u = n(58),
        l = n(74),
        c = n(111),
        f = n(42),
        h = n(8),
        p = n(28).fastKey,
        d = n(38),
        g = h ? "_s" : "size",
        v = function(t, e) {
            var n, r = p(e);
            if ("F" !== r) return t._i[r];
            for (n = t._f; n; n = n.n)
                if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function(t, e, n, l) {
            var c = t((function(t, r) {
                s(t, c, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[g] = 0, null != r && u(r, n, t[l], t)
            }));
            return o(c.prototype, {
                clear: function() {
                    for (var t = d(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    t._f = t._l = void 0, t[g] = 0
                },
                delete: function(t) {
                    var n = d(this, e),
                        r = v(n, t);
                    if (r) {
                        var i = r.n,
                            o = r.p;
                        delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[g]--
                    }
                    return !!r
                },
                forEach: function(t) {
                    d(this, e);
                    for (var n, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (r(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(t) {
                    return !!v(d(this, e), t)
                }
            }), h && r(c.prototype, "size", {
                get: function() {
                    return d(this, e)[g]
                }
            }), c
        },
        def: function(t, e, n) {
            var r, i, o = v(t, e);
            return o ? o.v = n : (t._l = o = {
                i: i = p(e, !0),
                k: e,
                v: n,
                p: r = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = o), r && (r.n = o), t[g]++, "F" !== i && (t._i[i] = o)), t
        },
        getEntry: v,
        setStrong: function(t, e, n) {
            l(t, e, (function(t, n) {
                this._t = d(t, e), this._k = n, this._l = void 0
            }), (function() {
                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? c(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, c(1))
            }), n ? "entries" : "values", !n, !0), f(e)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(44),
        i = n(28).getWeak,
        o = n(3),
        a = n(4),
        s = n(43),
        u = n(58),
        l = n(23),
        c = n(13),
        f = n(38),
        h = l(5),
        p = l(6),
        d = 0,
        g = function(t) {
            return t._l || (t._l = new v)
        },
        v = function() {
            this.a = []
        },
        _ = function(t, e) {
            return h(t.a, (function(t) {
                return t[0] === e
            }))
        };
    v.prototype = {
        get: function(t) {
            var e = _(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!_(this, t)
        },
        set: function(t, e) {
            var n = _(this, t);
            n ? n[1] = e : this.a.push([t, e])
        },
        delete: function(t) {
            var e = p(this.a, (function(e) {
                return e[0] === t
            }));
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function(t, e, n, o) {
            var l = t((function(t, r) {
                s(t, l, e, "_i"), t._t = e, t._i = d++, t._l = void 0, null != r && u(r, n, t[o], t)
            }));
            return r(l.prototype, {
                delete: function(t) {
                    if (!a(t)) return !1;
                    var n = i(t);
                    return !0 === n ? g(f(this, e)).delete(t) : n && c(n, this._i) && delete n[this._i]
                },
                has: function(t) {
                    if (!a(t)) return !1;
                    var n = i(t);
                    return !0 === n ? g(f(this, e)).has(t) : n && c(n, this._i)
                }
            }), l
        },
        def: function(t, e, n) {
            var r = i(o(e), !0);
            return !0 === r ? g(t).set(e, n) : r[t._i] = n, t
        },
        ufstore: g
    }
}, function(t, e, n) {
    var r = n(20),
        i = n(6);
    t.exports = function(t) {
        if (void 0 === t) return 0;
        var e = r(t),
            n = i(e);
        if (e !== n) throw RangeError("Wrong length!");
        return n
    }
}, function(t, e, n) {
    var r = n(35),
        i = n(52),
        o = n(3),
        a = n(1).Reflect;
    t.exports = a && a.ownKeys || function(t) {
        var e = r.f(o(t)),
            n = i.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    var r = n(6),
        i = n(70),
        o = n(25);
    t.exports = function(t, e, n, a) {
        var s = String(o(t)),
            u = s.length,
            l = void 0 === n ? " " : String(n),
            c = r(e);
        if (c <= u || "" == l) return s;
        var f = c - u,
            h = i.call(l, Math.ceil(f / l.length));
        return h.length > f && (h = h.slice(0, f)), a ? h + s : s + h
    }
}, function(t, e, n) {
    var r = n(8),
        i = n(32),
        o = n(15),
        a = n(47).f;
    t.exports = function(t) {
        return function(e) {
            for (var n, s = o(e), u = i(s), l = u.length, c = 0, f = []; l > c;) n = u[c++], r && !a.call(s, n) || f.push(t ? [n, s[n]] : s[n]);
            return f
        }
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    ! function(t) {
        "use strict";

        function e(e, n, i, o) {
            if (i && i.call) {
                var a = i;
                i = null
            } else a = r(e, i, "rangeFinder");
            "number" == typeof n && (n = t.Pos(n, 0));
            var s = r(e, i, "minFoldSize");

            function u(t) {
                var r = a(e, n);
                if (!r || r.to.line - r.from.line < s) return null;
                for (var i = e.findMarksAt(r.from), u = 0; u < i.length; ++u)
                    if (i[u].__isFold && "fold" !== o) {
                        if (!t) return null;
                        r.cleared = !0, i[u].clear()
                    } return r
            }
            var l = u(!0);
            if (r(e, i, "scanUp"))
                for (; !l && n.line > e.firstLine();) n = t.Pos(n.line - 1, 0), l = u(!1);
            if (l && !l.cleared && "unfold" !== o) {
                var c = function(t, e, n) {
                    var i = r(t, e, "widget");
                    if ("function" == typeof i && (i = i(n.from, n.to)), "string" == typeof i) {
                        var o = document.createTextNode(i);
                        (i = document.createElement("span")).appendChild(o), i.className = "CodeMirror-foldmarker"
                    } else i && (i = i.cloneNode(!0));
                    return i
                }(e, i, l);
                t.on(c, "mousedown", (function(e) {
                    f.clear(), t.e_preventDefault(e)
                }));
                var f = e.markText(l.from, l.to, {
                    replacedWith: c,
                    clearOnEnter: r(e, i, "clearOnEnter"),
                    __isFold: !0
                });
                f.on("clear", (function(n, r) {
                    t.signal(e, "unfold", e, n, r)
                })), t.signal(e, "fold", e, l.from, l.to)
            }
        }
        t.newFoldFunction = function(t, n) {
            return function(r, i) {
                e(r, i, {
                    rangeFinder: t,
                    widget: n
                })
            }
        }, t.defineExtension("foldCode", (function(t, n, r) {
            e(this, t, n, r)
        })), t.defineExtension("isFolded", (function(t) {
            for (var e = this.findMarksAt(t), n = 0; n < e.length; ++n)
                if (e[n].__isFold) return !0
        })), t.commands.toggleFold = function(t) {
            t.foldCode(t.getCursor())
        }, t.commands.fold = function(t) {
            t.foldCode(t.getCursor(), null, "fold")
        }, t.commands.unfold = function(t) {
            t.foldCode(t.getCursor(), null, "unfold")
        }, t.commands.foldAll = function(e) {
            e.operation((function() {
                for (var n = e.firstLine(), r = e.lastLine(); n <= r; n++) e.foldCode(t.Pos(n, 0), null, "fold")
            }))
        }, t.commands.unfoldAll = function(e) {
            e.operation((function() {
                for (var n = e.firstLine(), r = e.lastLine(); n <= r; n++) e.foldCode(t.Pos(n, 0), null, "unfold")
            }))
        }, t.registerHelper("fold", "combine", (function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return function(e, n) {
                for (var r = 0; r < t.length; ++r) {
                    var i = t[r](e, n);
                    if (i) return i
                }
            }
        })), t.registerHelper("fold", "auto", (function(t, e) {
            for (var n = t.getHelpers(e, "fold"), r = 0; r < n.length; r++) {
                var i = n[r](t, e);
                if (i) return i
            }
        }));
        var n = {
            rangeFinder: t.fold.auto,
            widget: "↔",
            minFoldSize: 0,
            scanUp: !1,
            clearOnEnter: !0
        };

        function r(t, e, r) {
            if (e && void 0 !== e[r]) return e[r];
            var i = t.options.foldOptions;
            return i && void 0 !== i[r] ? i[r] : n[r]
        }
        t.defineOption("foldOptions", null), t.defineExtension("foldOption", (function(t, e) {
            return r(this, t, e)
        }))
    }(n(16))
}, function(t, e, n) {
    ! function(t) {
        "use strict";

        function e(t, e) {
            function n(t) {
                clearTimeout(r.doRedraw), r.doRedraw = setTimeout((function() {
                    r.redraw()
                }), t)
            }
            this.cm = t, this.options = e, this.buttonHeight = e.scrollButtonHeight || t.getOption("scrollButtonHeight"), this.annotations = [], this.doRedraw = this.doUpdate = null, this.div = t.getWrapperElement().appendChild(document.createElement("div")), this.div.style.cssText = "position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none", this.computeScale();
            var r = this;
            t.on("refresh", this.resizeHandler = function() {
                clearTimeout(r.doUpdate), r.doUpdate = setTimeout((function() {
                    r.computeScale() && n(20)
                }), 100)
            }), t.on("markerAdded", this.resizeHandler), t.on("markerCleared", this.resizeHandler), !1 !== e.listenForChanges && t.on("changes", this.changeHandler = function() {
                n(250)
            })
        }
        t.defineExtension("annotateScrollbar", (function(t) {
            return "string" == typeof t && (t = {
                className: t
            }), new e(this, t)
        })), t.defineOption("scrollButtonHeight", 0), e.prototype.computeScale = function() {
            var t = this.cm,
                e = (t.getWrapperElement().clientHeight - t.display.barHeight - 2 * this.buttonHeight) / t.getScrollerElement().scrollHeight;
            if (e != this.hScale) return this.hScale = e, !0
        }, e.prototype.update = function(t) {
            this.annotations = t, this.redraw()
        }, e.prototype.redraw = function(t) {
            !1 !== t && this.computeScale();
            var e = this.cm,
                n = this.hScale,
                r = document.createDocumentFragment(),
                i = this.annotations,
                o = e.getOption("lineWrapping"),
                a = o && 1.5 * e.defaultTextHeight(),
                s = null,
                u = null;

            function l(t, n) {
                if (s != t.line) {
                    s = t.line, u = e.getLineHandle(t.line);
                    var r = e.getLineHandleVisualStart(u);
                    r != u && (s = e.getLineNumber(r), u = r)
                }
                return u.widgets && u.widgets.length || o && u.height > a ? e.charCoords(t, "local")[n ? "top" : "bottom"] : e.heightAtLine(u, "local") + (n ? 0 : u.height)
            }
            var c = e.lastLine();
            if (e.display.barWidth)
                for (var f, h = 0; h < i.length; h++) {
                    var p = i[h];
                    if (!(p.to.line > c)) {
                        for (var d = f || l(p.from, !0) * n, g = l(p.to, !1) * n; h < i.length - 1 && !(i[h + 1].to.line > c) && !((f = l(i[h + 1].from, !0) * n) > g + .9);) g = l((p = i[++h]).to, !1) * n;
                        if (g != d) {
                            var v = Math.max(g - d, 3),
                                _ = r.appendChild(document.createElement("div"));
                            _.style.cssText = "position: absolute; right: 0px; width: " + Math.max(e.display.barWidth - 1, 2) + "px; top: " + (d + this.buttonHeight) + "px; height: " + v + "px", _.className = this.options.className, p.id && _.setAttribute("annotation-id", p.id)
                        }
                    }
                }
            this.div.textContent = "", this.div.appendChild(r)
        }, e.prototype.clear = function() {
            this.cm.off("refresh", this.resizeHandler), this.cm.off("markerAdded", this.resizeHandler), this.cm.off("markerCleared", this.resizeHandler), this.changeHandler && this.cm.off("changes", this.changeHandler), this.div.parentNode.removeChild(this.div)
        }
    }(n(16))
}, function(t, e, n) {
    (function(e) {
        var n = function() {
            var t = {},
                n = function() {
                    "use strict";
                    var t, e, n, r, i = {
                            '"': '"',
                            "\\": "\\",
                            "/": "/",
                            b: "\b",
                            f: "\f",
                            n: "\n",
                            r: "\r",
                            t: "\t"
                        },
                        o = function(e) {
                            throw {
                                name: "SyntaxError",
                                message: e,
                                at: t,
                                text: n
                            }
                        },
                        a = function(r) {
                            return r && r !== e && o("Expected '" + r + "' instead of '" + e + "'"), e = n.charAt(t), t += 1, e
                        },
                        s = function() {
                            var t, n = "";
                            for ("-" === e && (n = "-", a("-")); e >= "0" && e <= "9";) n += e, a();
                            if ("." === e)
                                for (n += "."; a() && e >= "0" && e <= "9";) n += e;
                            if ("e" === e || "E" === e)
                                for (n += e, a(), "-" !== e && "+" !== e || (n += e, a()); e >= "0" && e <= "9";) n += e, a();
                            if (t = +n, isFinite(t)) return t;
                            o("Bad number")
                        },
                        u = function() {
                            var t, n, r, s = "";
                            if ('"' === e)
                                for (; a();) {
                                    if ('"' === e) return a(), s;
                                    if ("\\" === e)
                                        if (a(), "u" === e) {
                                            for (r = 0, n = 0; n < 4 && (t = parseInt(a(), 16), isFinite(t)); n += 1) r = 16 * r + t;
                                            s += String.fromCharCode(r)
                                        } else {
                                            if ("string" != typeof i[e]) break;
                                            s += i[e]
                                        }
                                    else s += e
                                }
                            o("Bad string")
                        },
                        l = function() {
                            for (; e && e <= " ";) a()
                        };
                    return r = function() {
                            switch (l(), e) {
                                case "{":
                                    return function() {
                                        var t, n = {};
                                        if ("{" === e) {
                                            if (a("{"), l(), "}" === e) return a("}"), n;
                                            for (; e;) {
                                                if (t = u(), l(), a(":"), Object.hasOwnProperty.call(n, t) && o("Duplicate key '" + t + "'"), n[t] = r(), l(), "}" === e) return a("}"), n;
                                                a(","), l()
                                            }
                                        }
                                        o("Bad object")
                                    }();
                                case "[":
                                    return function() {
                                        var t = [];
                                        if ("[" === e) {
                                            if (a("["), l(), "]" === e) return a("]"), t;
                                            for (; e;) {
                                                if (t.push(r()), l(), "]" === e) return a("]"), t;
                                                a(","), l()
                                            }
                                        }
                                        o("Bad array")
                                    }();
                                case '"':
                                    return u();
                                case "-":
                                    return s();
                                default:
                                    return e >= "0" && e <= "9" ? s() : function() {
                                        switch (e) {
                                            case "t":
                                                return a("t"), a("r"), a("u"), a("e"), !0;
                                            case "f":
                                                return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
                                            case "n":
                                                return a("n"), a("u"), a("l"), a("l"), null
                                        }
                                        o("Unexpected '" + e + "'")
                                    }()
                            }
                        },
                        function(i, a) {
                            var s;
                            return n = i, t = 0, e = " ", s = r(), l(), e && o("Syntax error"), "function" == typeof a ? function t(e, n) {
                                var r, i, o = e[n];
                                if (o && "object" == typeof o)
                                    for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (i = t(o, r)) ? o[r] = i : delete o[r]);
                                return a.call(e, n, o)
                            }({
                                "": s
                            }, "") : s
                        }
                }();
            var r, i, o = (r = {
                    trace: function() {},
                    yy: {},
                    symbols_: {
                        error: 2,
                        JSONString: 3,
                        STRING: 4,
                        JSONNumber: 5,
                        NUMBER: 6,
                        JSONNullLiteral: 7,
                        NULL: 8,
                        JSONBooleanLiteral: 9,
                        TRUE: 10,
                        FALSE: 11,
                        JSONText: 12,
                        JSONValue: 13,
                        EOF: 14,
                        JSONObject: 15,
                        JSONArray: 16,
                        "{": 17,
                        "}": 18,
                        JSONMemberList: 19,
                        JSONMember: 20,
                        ":": 21,
                        ",": 22,
                        "[": 23,
                        "]": 24,
                        JSONElementList: 25,
                        $accept: 0,
                        $end: 1
                    },
                    terminals_: {
                        2: "error",
                        4: "STRING",
                        6: "NUMBER",
                        8: "NULL",
                        10: "TRUE",
                        11: "FALSE",
                        14: "EOF",
                        17: "{",
                        18: "}",
                        21: ":",
                        22: ",",
                        23: "[",
                        24: "]"
                    },
                    productions_: [0, [3, 1],
                        [5, 1],
                        [7, 1],
                        [9, 1],
                        [9, 1],
                        [12, 2],
                        [13, 1],
                        [13, 1],
                        [13, 1],
                        [13, 1],
                        [13, 1],
                        [13, 1],
                        [15, 2],
                        [15, 3],
                        [20, 3],
                        [19, 1],
                        [19, 3],
                        [16, 2],
                        [16, 3],
                        [25, 1],
                        [25, 3]
                    ],
                    performAction: function(t, e, n, r, i, o, a) {
                        var s = o.length - 1;
                        switch (i) {
                            case 1:
                                this.$ = t.replace(/\\(\\|")/g, "$1").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\v/g, "\v").replace(/\\f/g, "\f").replace(/\\b/g, "\b");
                                break;
                            case 2:
                                this.$ = Number(t);
                                break;
                            case 3:
                                this.$ = null;
                                break;
                            case 4:
                                this.$ = !0;
                                break;
                            case 5:
                                this.$ = !1;
                                break;
                            case 6:
                                return this.$ = o[s - 1];
                            case 13:
                                this.$ = {};
                                break;
                            case 14:
                                this.$ = o[s - 1];
                                break;
                            case 15:
                                this.$ = [o[s - 2], o[s]];
                                break;
                            case 16:
                                this.$ = {}, this.$[o[s][0]] = o[s][1];
                                break;
                            case 17:
                                this.$ = o[s - 2], o[s - 2][o[s][0]] = o[s][1];
                                break;
                            case 18:
                                this.$ = [];
                                break;
                            case 19:
                                this.$ = o[s - 1];
                                break;
                            case 20:
                                this.$ = [o[s]];
                                break;
                            case 21:
                                this.$ = o[s - 2], o[s - 2].push(o[s])
                        }
                    },
                    table: [{
                        3: 5,
                        4: [1, 12],
                        5: 6,
                        6: [1, 13],
                        7: 3,
                        8: [1, 9],
                        9: 4,
                        10: [1, 10],
                        11: [1, 11],
                        12: 1,
                        13: 2,
                        15: 7,
                        16: 8,
                        17: [1, 14],
                        23: [1, 15]
                    }, {
                        1: [3]
                    }, {
                        14: [1, 16]
                    }, {
                        14: [2, 7],
                        18: [2, 7],
                        22: [2, 7],
                        24: [2, 7]
                    }, {
                        14: [2, 8],
                        18: [2, 8],
                        22: [2, 8],
                        24: [2, 8]
                    }, {
                        14: [2, 9],
                        18: [2, 9],
                        22: [2, 9],
                        24: [2, 9]
                    }, {
                        14: [2, 10],
                        18: [2, 10],
                        22: [2, 10],
                        24: [2, 10]
                    }, {
                        14: [2, 11],
                        18: [2, 11],
                        22: [2, 11],
                        24: [2, 11]
                    }, {
                        14: [2, 12],
                        18: [2, 12],
                        22: [2, 12],
                        24: [2, 12]
                    }, {
                        14: [2, 3],
                        18: [2, 3],
                        22: [2, 3],
                        24: [2, 3]
                    }, {
                        14: [2, 4],
                        18: [2, 4],
                        22: [2, 4],
                        24: [2, 4]
                    }, {
                        14: [2, 5],
                        18: [2, 5],
                        22: [2, 5],
                        24: [2, 5]
                    }, {
                        14: [2, 1],
                        18: [2, 1],
                        21: [2, 1],
                        22: [2, 1],
                        24: [2, 1]
                    }, {
                        14: [2, 2],
                        18: [2, 2],
                        22: [2, 2],
                        24: [2, 2]
                    }, {
                        3: 20,
                        4: [1, 12],
                        18: [1, 17],
                        19: 18,
                        20: 19
                    }, {
                        3: 5,
                        4: [1, 12],
                        5: 6,
                        6: [1, 13],
                        7: 3,
                        8: [1, 9],
                        9: 4,
                        10: [1, 10],
                        11: [1, 11],
                        13: 23,
                        15: 7,
                        16: 8,
                        17: [1, 14],
                        23: [1, 15],
                        24: [1, 21],
                        25: 22
                    }, {
                        1: [2, 6]
                    }, {
                        14: [2, 13],
                        18: [2, 13],
                        22: [2, 13],
                        24: [2, 13]
                    }, {
                        18: [1, 24],
                        22: [1, 25]
                    }, {
                        18: [2, 16],
                        22: [2, 16]
                    }, {
                        21: [1, 26]
                    }, {
                        14: [2, 18],
                        18: [2, 18],
                        22: [2, 18],
                        24: [2, 18]
                    }, {
                        22: [1, 28],
                        24: [1, 27]
                    }, {
                        22: [2, 20],
                        24: [2, 20]
                    }, {
                        14: [2, 14],
                        18: [2, 14],
                        22: [2, 14],
                        24: [2, 14]
                    }, {
                        3: 20,
                        4: [1, 12],
                        20: 29
                    }, {
                        3: 5,
                        4: [1, 12],
                        5: 6,
                        6: [1, 13],
                        7: 3,
                        8: [1, 9],
                        9: 4,
                        10: [1, 10],
                        11: [1, 11],
                        13: 30,
                        15: 7,
                        16: 8,
                        17: [1, 14],
                        23: [1, 15]
                    }, {
                        14: [2, 19],
                        18: [2, 19],
                        22: [2, 19],
                        24: [2, 19]
                    }, {
                        3: 5,
                        4: [1, 12],
                        5: 6,
                        6: [1, 13],
                        7: 3,
                        8: [1, 9],
                        9: 4,
                        10: [1, 10],
                        11: [1, 11],
                        13: 31,
                        15: 7,
                        16: 8,
                        17: [1, 14],
                        23: [1, 15]
                    }, {
                        18: [2, 17],
                        22: [2, 17]
                    }, {
                        18: [2, 15],
                        22: [2, 15]
                    }, {
                        22: [2, 21],
                        24: [2, 21]
                    }],
                    defaultActions: {
                        16: [2, 6]
                    },
                    parseError: function(t, e) {
                        throw new Error(t)
                    },
                    parse: function(t) {
                        var e = this,
                            n = [0],
                            r = [null],
                            i = [],
                            o = this.table,
                            a = "",
                            s = 0,
                            u = 0,
                            l = 0;
                        this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
                        var c = this.lexer.yylloc;

                        function f() {
                            var t;
                            return "number" != typeof(t = e.lexer.lex() || 1) && (t = e.symbols_[t] || t), t
                        }
                        i.push(c), "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                        for (var h, p, d, g, v, _, m, y, b, x, w = {};;) {
                            if (d = n[n.length - 1], this.defaultActions[d] ? g = this.defaultActions[d] : (null == h && (h = f()), g = o[d] && o[d][h]), void 0 === g || !g.length || !g[0]) {
                                if (!l) {
                                    for (_ in b = [], o[d]) this.terminals_[_] && _ > 2 && b.push("'" + this.terminals_[_] + "'");
                                    var k = "";
                                    k = this.lexer.showPosition ? "Parse error on line " + (s + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + b.join(", ") + ", got '" + this.terminals_[h] + "'" : "Parse error on line " + (s + 1) + ": Unexpected " + (1 == h ? "end of input" : "'" + (this.terminals_[h] || h) + "'"), this.parseError(k, {
                                        text: this.lexer.match,
                                        token: this.terminals_[h] || h,
                                        line: this.lexer.yylineno,
                                        loc: c,
                                        expected: b
                                    })
                                }
                                if (3 == l) {
                                    if (1 == h) throw new Error(k || "Parsing halted.");
                                    u = this.lexer.yyleng, a = this.lexer.yytext, s = this.lexer.yylineno, c = this.lexer.yylloc, h = f()
                                }
                                for (; !(2..toString() in o[d]);) {
                                    if (0 == d) throw new Error(k || "Parsing halted.");
                                    x = 1, n.length = n.length - 2 * x, r.length = r.length - x, i.length = i.length - x, d = n[n.length - 1]
                                }
                                p = h, h = 2, g = o[d = n[n.length - 1]] && o[d][2], l = 3
                            }
                            if (g[0] instanceof Array && g.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + d + ", token: " + h);
                            switch (g[0]) {
                                case 1:
                                    n.push(h), r.push(this.lexer.yytext), i.push(this.lexer.yylloc), n.push(g[1]), h = null, p ? (h = p, p = null) : (u = this.lexer.yyleng, a = this.lexer.yytext, s = this.lexer.yylineno, c = this.lexer.yylloc, l > 0 && l--);
                                    break;
                                case 2:
                                    if (m = this.productions_[g[1]][1], w.$ = r[r.length - m], w._$ = {
                                            first_line: i[i.length - (m || 1)].first_line,
                                            last_line: i[i.length - 1].last_line,
                                            first_column: i[i.length - (m || 1)].first_column,
                                            last_column: i[i.length - 1].last_column
                                        }, void 0 !== (v = this.performAction.call(w, a, u, s, this.yy, g[1], r, i))) return v;
                                    m && (n = n.slice(0, -1 * m * 2), r = r.slice(0, -1 * m), i = i.slice(0, -1 * m)), n.push(this.productions_[g[1]][0]), r.push(w.$), i.push(w._$), y = o[n[n.length - 2]][n[n.length - 1]], n.push(y);
                                    break;
                                case 3:
                                    return !0
                            }
                        }
                        return !0
                    }
                }, i = function() {
                    var t = {
                        EOF: 1,
                        parseError: function(t, e) {
                            if (!this.yy.parseError) throw new Error(t);
                            this.yy.parseError(t, e)
                        },
                        setInput: function(t) {
                            return this._input = t, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            }, this
                        },
                        input: function() {
                            var t = this._input[0];
                            return this.yytext += t, this.yyleng++, this.match += t, this.matched += t, t.match(/\n/) && this.yylineno++, this._input = this._input.slice(1), t
                        },
                        unput: function(t) {
                            return this._input = t + this._input, this
                        },
                        more: function() {
                            return this._more = !0, this
                        },
                        less: function(t) {
                            this._input = this.match.slice(t) + this._input
                        },
                        pastInput: function() {
                            var t = this.matched.substr(0, this.matched.length - this.match.length);
                            return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                        },
                        upcomingInput: function() {
                            var t = this.match;
                            return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                        },
                        showPosition: function() {
                            var t = this.pastInput(),
                                e = new Array(t.length + 1).join("-");
                            return t + this.upcomingInput() + "\n" + e + "^"
                        },
                        next: function() {
                            if (this.done) return this.EOF;
                            var t, e, n, r, i;
                            this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
                            for (var o = this._currentRules(), a = 0; a < o.length && (!(n = this._input.match(this.rules[o[a]])) || e && !(n[0].length > e[0].length) || (e = n, r = a, this.options.flex)); a++);
                            return e ? ((i = e[0].match(/\n.*/g)) && (this.yylineno += i.length), this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: i ? i[i.length - 1].length - 1 : this.yylloc.last_column + e[0].length
                            }, this.yytext += e[0], this.match += e[0], this.yyleng = this.yytext.length, this._more = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], t = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), t || void 0) : "" === this._input ? this.EOF : void this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            })
                        },
                        lex: function() {
                            var t = this.next();
                            return void 0 !== t ? t : this.lex()
                        },
                        begin: function(t) {
                            this.conditionStack.push(t)
                        },
                        popState: function() {
                            return this.conditionStack.pop()
                        },
                        _currentRules: function() {
                            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                        },
                        topState: function() {
                            return this.conditionStack[this.conditionStack.length - 2]
                        },
                        pushState: function(t) {
                            this.begin(t)
                        },
                        options: {},
                        performAction: function(t, e, n, r) {
                            switch (n) {
                                case 0:
                                    break;
                                case 1:
                                    return 6;
                                case 2:
                                    return e.yytext = e.yytext.substr(1, e.yyleng - 2), 4;
                                case 3:
                                    return 17;
                                case 4:
                                    return 18;
                                case 5:
                                    return 23;
                                case 6:
                                    return 24;
                                case 7:
                                    return 22;
                                case 8:
                                    return 21;
                                case 9:
                                    return 10;
                                case 10:
                                    return 11;
                                case 11:
                                    return 8;
                                case 12:
                                    return 14;
                                case 13:
                                    return "INVALID"
                            }
                        },
                        rules: [/^(?:\s+)/, /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/, /^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/, /^(?:\{)/, /^(?:\})/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?::)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/, /^(?:$)/, /^(?:.)/],
                        conditions: {
                            INITIAL: {
                                rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                                inclusive: !0
                            }
                        }
                    };
                    return t
                }(), r.lexer = i, r),
                a = o.parse;
            return o.parse = function(t) {
                var e = a.call(o, t),
                    r = void 0 === n ? (!0)("./doug-json-parse") : n;
                try {
                    r(t)
                } catch (e) {
                    if (/Duplicate key|Bad string|Unexpected/.test(e.message)) {
                        var i = t.substring(0, e.at).split("\n"),
                            s = i.length,
                            u = i[s - 1].length - 1;
                        throw this.parseError(e.message, {
                            line: s,
                            col: u,
                            message: e.message.replace(/./, (function(t) {
                                return t.toLowerCase()
                            }))
                        }), SyntaxError(e.message + " on line " + s)
                    }
                }
                return e
            }, void 0 !== t && (t.parser = o, t.parse = function() {
                return o.parse.apply(o, arguments)
            }, t.main = function(n) {
                if (!n[1]) throw new Error("Usage: " + n[0] + " FILE");
                if (void 0 !== e) var r = (!0)("fs").readFileSync((!0)("path").join(e.cwd(), n[1]), "utf8");
                else r = (!0)("file").path((!0)("file").cwd()).join(n[1]).read({
                    charset: "utf-8"
                });
                return t.parser.parse(r)
            }, !1 === (!0).main && t.main(void 0 !== e ? e.argv.slice(1) : (!0)("system").args)), t
        }();
        t.exports && (t.exports = n)
    }).call(this, n(318))
}, function(t, e, n) {
    var r, i;
    i = function(t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var i in t) n.d(r, i, function(e) {
                    return t[e]
                }.bind(null, i));
            return r
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 0)
    }([function(t, e, n) {
        "use strict";
        var r = n(1).Beautifier,
            i = n(5).Options;
        t.exports = function(t, e) {
            return new r(t, e).beautify()
        }, t.exports.defaultOptions = function() {
            return new i
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2).Output,
            i = n(3).Token,
            o = n(4),
            a = n(5).Options,
            s = n(7).Tokenizer,
            u = n(7).line_starters,
            l = n(7).positionable_operators,
            c = n(7).TOKEN;

        function f(t, e) {
            return -1 !== e.indexOf(t)
        }

        function h(t, e) {
            return t && t.type === c.RESERVED && t.text === e
        }

        function p(t, e) {
            return t && t.type === c.RESERVED && f(t.text, e)
        }
        var d = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"],
            g = function(t) {
                for (var e = {}, n = 0; n < t.length; n++) e[t[n].replace(/-/g, "_")] = t[n];
                return e
            }(["before-newline", "after-newline", "preserve-newline"]),
            v = [g.before_newline, g.preserve_newline],
            _ = "BlockStatement",
            m = "Statement",
            y = "ObjectLiteral",
            b = "ArrayLiteral",
            x = "ForInitializer",
            w = "Conditional",
            k = "Expression";

        function S(t, e) {
            e.multiline_frame || e.mode === x || e.mode === w || t.remove_indent(e.start_line_index)
        }

        function C(t) {
            return t === b
        }

        function T(t) {
            return f(t, [k, x, w])
        }

        function O(t, e) {
            e = e || {}, this._source_text = t || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new a(e)
        }
        O.prototype.create_flags = function(t, e) {
            var n = 0;
            return t && (n = t.indentation_level, !this._output.just_added_newline() && t.line_indent_level > n && (n = t.line_indent_level)), {
                mode: e,
                parent: t,
                last_token: t ? t.last_token : new i(c.START_BLOCK, ""),
                last_word: t ? t.last_word : "",
                declaration_statement: !1,
                declaration_assignment: !1,
                multiline_frame: !1,
                inline_frame: !1,
                if_block: !1,
                else_block: !1,
                do_block: !1,
                do_while: !1,
                import_block: !1,
                in_case_statement: !1,
                in_case: !1,
                case_body: !1,
                indentation_level: n,
                alignment: 0,
                line_indent_level: t ? t.line_indent_level : n,
                start_line_index: this._output.get_line_number(),
                ternary_depth: 0
            }
        }, O.prototype._reset = function(t) {
            var e = t.match(/^[\t ]*/)[0];
            this._last_last_text = "", this._output = new r(this._options, e), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(_);
            var n = new s(t, this._options);
            return this._tokens = n.tokenize(), t
        }, O.prototype.beautify = function() {
            if (this._options.disabled) return this._source_text;
            var t = this._reset(this._source_text),
                e = this._options.eol;
            "auto" === this._options.eol && (e = "\n", t && o.lineBreak.test(t || "") && (e = t.match(o.lineBreak)[0]));
            for (var n = this._tokens.next(); n;) this.handle_token(n), this._last_last_text = this._flags.last_token.text, this._flags.last_token = n, n = this._tokens.next();
            return this._output.get_code(e)
        }, O.prototype.handle_token = function(t, e) {
            t.type === c.START_EXPR ? this.handle_start_expr(t) : t.type === c.END_EXPR ? this.handle_end_expr(t) : t.type === c.START_BLOCK ? this.handle_start_block(t) : t.type === c.END_BLOCK ? this.handle_end_block(t) : t.type === c.WORD || t.type === c.RESERVED ? this.handle_word(t) : t.type === c.SEMICOLON ? this.handle_semicolon(t) : t.type === c.STRING ? this.handle_string(t) : t.type === c.EQUALS ? this.handle_equals(t) : t.type === c.OPERATOR ? this.handle_operator(t) : t.type === c.COMMA ? this.handle_comma(t) : t.type === c.BLOCK_COMMENT ? this.handle_block_comment(t, e) : t.type === c.COMMENT ? this.handle_comment(t, e) : t.type === c.DOT ? this.handle_dot(t) : t.type === c.EOF ? this.handle_eof(t) : (t.type, c.UNKNOWN, this.handle_unknown(t, e))
        }, O.prototype.handle_whitespace_and_comments = function(t, e) {
            var n = t.newlines,
                r = this._options.keep_array_indentation && C(this._flags.mode);
            if (t.comments_before)
                for (var i = t.comments_before.next(); i;) this.handle_whitespace_and_comments(i, e), this.handle_token(i, e), i = t.comments_before.next();
            if (r)
                for (var o = 0; o < n; o += 1) this.print_newline(o > 0, e);
            else if (this._options.max_preserve_newlines && n > this._options.max_preserve_newlines && (n = this._options.max_preserve_newlines), this._options.preserve_newlines && n > 1) {
                this.print_newline(!1, e);
                for (var a = 1; a < n; a += 1) this.print_newline(!0, e)
            }
        };
        var E = ["async", "break", "continue", "return", "throw", "yield"];
        O.prototype.allow_wrap_or_preserved_newline = function(t, e) {
            if (e = void 0 !== e && e, !this._output.just_added_newline()) {
                var n = this._options.preserve_newlines && t.newlines || e;
                if (f(this._flags.last_token.text, l) || f(t.text, l)) {
                    var r = f(this._flags.last_token.text, l) && f(this._options.operator_position, v) || f(t.text, l);
                    n = n && r
                }
                if (n) this.print_newline(!1, !0);
                else if (this._options.wrap_line_length) {
                    if (p(this._flags.last_token, E)) return;
                    this._output.set_wrap_point()
                }
            }
        }, O.prototype.print_newline = function(t, e) {
            if (!e && ";" !== this._flags.last_token.text && "," !== this._flags.last_token.text && "=" !== this._flags.last_token.text && (this._flags.last_token.type !== c.OPERATOR || "--" === this._flags.last_token.text || "++" === this._flags.last_token.text))
                for (var n = this._tokens.peek(); !(this._flags.mode !== m || this._flags.if_block && h(n, "else") || this._flags.do_block);) this.restore_mode();
            this._output.add_new_line(t) && (this._flags.multiline_frame = !0)
        }, O.prototype.print_token_line_indentation = function(t) {
            this._output.just_added_newline() && (this._options.keep_array_indentation && t.newlines && ("[" === t.text || C(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(t.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level))
        }, O.prototype.print_token = function(t) {
            if (this._output.raw) this._output.add_raw_token(t);
            else {
                if (this._options.comma_first && t.previous && t.previous.type === c.COMMA && this._output.just_added_newline() && "," === this._output.previous_line.last()) {
                    var e = this._output.previous_line.pop();
                    this._output.previous_line.is_empty() && (this._output.previous_line.push(e), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(t), this._output.add_token(","), this._output.space_before_token = !0
                }
                this.print_token_line_indentation(t), this._output.non_breaking_space = !0, this._output.add_token(t.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0)
            }
        }, O.prototype.indent = function() {
            this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment)
        }, O.prototype.deindent = function() {
            this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment))
        }, O.prototype.set_mode = function(t) {
            this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, t), this._flags = this.create_flags(this._previous_flags, t), this._output.set_indent(this._flags.indentation_level, this._flags.alignment)
        }, O.prototype.restore_mode = function() {
            this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === m && S(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment))
        }, O.prototype.start_of_object_property = function() {
            return this._flags.parent.mode === y && this._flags.mode === m && (":" === this._flags.last_token.text && 0 === this._flags.ternary_depth || p(this._flags.last_token, ["get", "set"]))
        }, O.prototype.start_of_statement = function(t) {
            var e = !1;
            return !!(e = (e = (e = (e = (e = (e = (e = e || p(this._flags.last_token, ["var", "let", "const"]) && t.type === c.WORD) || h(this._flags.last_token, "do")) || !(this._flags.parent.mode === y && this._flags.mode === m) && p(this._flags.last_token, E) && !t.newlines) || h(this._flags.last_token, "else") && !(h(t, "if") && !t.comments_before)) || this._flags.last_token.type === c.END_EXPR && (this._previous_flags.mode === x || this._previous_flags.mode === w)) || this._flags.last_token.type === c.WORD && this._flags.mode === _ && !this._flags.in_case && !("--" === t.text || "++" === t.text) && "function" !== this._last_last_text && t.type !== c.WORD && t.type !== c.RESERVED) || this._flags.mode === y && (":" === this._flags.last_token.text && 0 === this._flags.ternary_depth || p(this._flags.last_token, ["get", "set"]))) && (this.set_mode(m), this.indent(), this.handle_whitespace_and_comments(t, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t, p(t, ["do", "for", "if", "while"])), !0)
        }, O.prototype.handle_start_expr = function(t) {
            this.start_of_statement(t) || this.handle_whitespace_and_comments(t);
            var e = k;
            if ("[" === t.text) {
                if (this._flags.last_token.type === c.WORD || ")" === this._flags.last_token.text) return p(this._flags.last_token, u) && (this._output.space_before_token = !0), this.print_token(t), this.set_mode(e), this.indent(), void(this._options.space_in_paren && (this._output.space_before_token = !0));
                e = b, C(this._flags.mode) && ("[" !== this._flags.last_token.text && ("," !== this._flags.last_token.text || "]" !== this._last_last_text && "}" !== this._last_last_text) || this._options.keep_array_indentation || this.print_newline()), f(this._flags.last_token.type, [c.START_EXPR, c.END_EXPR, c.WORD, c.OPERATOR]) || (this._output.space_before_token = !0)
            } else {
                if (this._flags.last_token.type === c.RESERVED) "for" === this._flags.last_token.text ? (this._output.space_before_token = this._options.space_before_conditional, e = x) : f(this._flags.last_token.text, ["if", "while"]) ? (this._output.space_before_token = this._options.space_before_conditional, e = w) : f(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : "import" === this._flags.last_token.text && "" === t.whitespace_before ? this._output.space_before_token = !1 : (f(this._flags.last_token.text, u) || "catch" === this._flags.last_token.text) && (this._output.space_before_token = !0);
                else if (this._flags.last_token.type === c.EQUALS || this._flags.last_token.type === c.OPERATOR) this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t);
                else if (this._flags.last_token.type === c.WORD) {
                    this._output.space_before_token = !1;
                    var n = this._tokens.peek(-3);
                    if (this._options.space_after_named_function && n) {
                        var r = this._tokens.peek(-4);
                        p(n, ["async", "function"]) || "*" === n.text && p(r, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === y && ("{" !== n.text && "," !== n.text && ("*" !== n.text || "{" !== r.text && "," !== r.text) || (this._output.space_before_token = !0))
                    }
                } else this.allow_wrap_or_preserved_newline(t);
                (this._flags.last_token.type === c.RESERVED && ("function" === this._flags.last_word || "typeof" === this._flags.last_word) || "*" === this._flags.last_token.text && (f(this._last_last_text, ["function", "yield"]) || this._flags.mode === y && f(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function)
            }
            ";" === this._flags.last_token.text || this._flags.last_token.type === c.START_BLOCK ? this.print_newline() : this._flags.last_token.type !== c.END_EXPR && this._flags.last_token.type !== c.START_EXPR && this._flags.last_token.type !== c.END_BLOCK && "." !== this._flags.last_token.text && this._flags.last_token.type !== c.COMMA || this.allow_wrap_or_preserved_newline(t, t.newlines), this.print_token(t), this.set_mode(e), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent()
        }, O.prototype.handle_end_expr = function(t) {
            for (; this._flags.mode === m;) this.restore_mode();
            this.handle_whitespace_and_comments(t), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(t, "]" === t.text && C(this._flags.mode) && !this._options.keep_array_indentation), this._options.space_in_paren && (this._flags.last_token.type !== c.START_EXPR || this._options.space_in_empty_paren ? this._output.space_before_token = !0 : (this._output.trim(), this._output.space_before_token = !1)), this.deindent(), this.print_token(t), this.restore_mode(), S(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === w && (this._previous_flags.mode = k, this._flags.do_block = !1, this._flags.do_while = !1)
        }, O.prototype.handle_start_block = function(t) {
            this.handle_whitespace_and_comments(t);
            var e = this._tokens.peek(),
                n = this._tokens.peek(1);
            "switch" === this._flags.last_word && this._flags.last_token.type === c.END_EXPR ? (this.set_mode(_), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(_) : n && (f(n.text, [":", ","]) && f(e.type, [c.STRING, c.WORD, c.RESERVED]) || f(e.text, ["get", "set", "..."]) && f(n.type, [c.WORD, c.RESERVED])) ? f(this._last_last_text, ["class", "interface"]) ? this.set_mode(_) : this.set_mode(y) : this._flags.last_token.type === c.OPERATOR && "=>" === this._flags.last_token.text ? this.set_mode(_) : f(this._flags.last_token.type, [c.EQUALS, c.START_EXPR, c.COMMA, c.OPERATOR]) || p(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(y) : this.set_mode(_);
            var r = !e.comments_before && "}" === e.text,
                i = r && "function" === this._flags.last_word && this._flags.last_token.type === c.END_EXPR;
            if (this._options.brace_preserve_inline) {
                var o = 0,
                    a = null;
                this._flags.inline_frame = !0;
                do {
                    if (o += 1, (a = this._tokens.peek(o - 1)).newlines) {
                        this._flags.inline_frame = !1;
                        break
                    }
                } while (a.type !== c.EOF && (a.type !== c.END_BLOCK || a.opened !== t))
            }("expand" === this._options.brace_style || "none" === this._options.brace_style && t.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== c.OPERATOR && (i || this._flags.last_token.type === c.EQUALS || p(this._flags.last_token, d) && "else" !== this._flags.last_token.text) ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (!C(this._previous_flags.mode) || this._flags.last_token.type !== c.START_EXPR && this._flags.last_token.type !== c.COMMA || ((this._flags.last_token.type === c.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === c.COMMA || this._flags.last_token.type === c.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(t), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== c.OPERATOR && this._flags.last_token.type !== c.START_EXPR && (this._flags.last_token.type !== c.START_BLOCK || this._flags.inline_frame ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(t), this.indent(), r || this._options.brace_preserve_inline && this._flags.inline_frame || this.print_newline()
        }, O.prototype.handle_end_block = function(t) {
            for (this.handle_whitespace_and_comments(t); this._flags.mode === m;) this.restore_mode();
            var e = this._flags.last_token.type === c.START_BLOCK;
            this._flags.inline_frame && !e ? this._output.space_before_token = !0 : "expand" === this._options.brace_style ? e || this.print_newline() : e || (C(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(t)
        }, O.prototype.handle_word = function(t) {
            if (t.type === c.RESERVED && (f(t.text, ["set", "get"]) && this._flags.mode !== y || "import" === t.text && "(" === this._tokens.peek().text || f(t.text, ["as", "from"]) && !this._flags.import_block || this._flags.mode === y && ":" === this._tokens.peek().text) && (t.type = c.WORD), this.start_of_statement(t) ? p(this._flags.last_token, ["var", "let", "const"]) && t.type === c.WORD && (this._flags.declaration_statement = !0) : !t.newlines || T(this._flags.mode) || this._flags.last_token.type === c.OPERATOR && "--" !== this._flags.last_token.text && "++" !== this._flags.last_token.text || this._flags.last_token.type === c.EQUALS || !this._options.preserve_newlines && p(this._flags.last_token, ["var", "let", "const", "set", "get"]) ? this.handle_whitespace_and_comments(t) : (this.handle_whitespace_and_comments(t), this.print_newline()), this._flags.do_block && !this._flags.do_while) {
                if (h(t, "while")) return this._output.space_before_token = !0, this.print_token(t), this._output.space_before_token = !0, void(this._flags.do_while = !0);
                this.print_newline(), this._flags.do_block = !1
            }
            if (this._flags.if_block)
                if (!this._flags.else_block && h(t, "else")) this._flags.else_block = !0;
                else {
                    for (; this._flags.mode === m;) this.restore_mode();
                    this._flags.if_block = !1, this._flags.else_block = !1
                } if (this._flags.in_case_statement && p(t, ["case", "default"])) return this.print_newline(), this._flags.last_token.type !== c.END_BLOCK && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(t), void(this._flags.in_case = !0);
            if (this._flags.last_token.type !== c.COMMA && this._flags.last_token.type !== c.START_EXPR && this._flags.last_token.type !== c.EQUALS && this._flags.last_token.type !== c.OPERATOR || this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t), h(t, "function")) return (f(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !f(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) && this._flags.last_token.type !== c.OPERATOR) && (this._output.just_added_blankline() || t.comments_before || (this.print_newline(), this.print_newline(!0))), this._flags.last_token.type === c.RESERVED || this._flags.last_token.type === c.WORD ? p(this._flags.last_token, ["get", "set", "new", "export"]) || p(this._flags.last_token, E) || h(this._flags.last_token, "default") && "export" === this._last_last_text || "declare" === this._flags.last_token.text ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === c.OPERATOR || "=" === this._flags.last_token.text ? this._output.space_before_token = !0 : (this._flags.multiline_frame || !T(this._flags.mode) && !C(this._flags.mode)) && this.print_newline(), this.print_token(t), void(this._flags.last_word = t.text);
            var e = "NONE";
            this._flags.last_token.type === c.END_BLOCK ? this._previous_flags.inline_frame ? e = "SPACE" : p(t, ["else", "catch", "finally", "from"]) ? "expand" === this._options.brace_style || "end-expand" === this._options.brace_style || "none" === this._options.brace_style && t.newlines ? e = "NEWLINE" : (e = "SPACE", this._output.space_before_token = !0) : e = "NEWLINE" : this._flags.last_token.type === c.SEMICOLON && this._flags.mode === _ ? e = "NEWLINE" : this._flags.last_token.type === c.SEMICOLON && T(this._flags.mode) ? e = "SPACE" : this._flags.last_token.type === c.STRING ? e = "NEWLINE" : this._flags.last_token.type === c.RESERVED || this._flags.last_token.type === c.WORD || "*" === this._flags.last_token.text && (f(this._last_last_text, ["function", "yield"]) || this._flags.mode === y && f(this._last_last_text, ["{", ","])) ? e = "SPACE" : this._flags.last_token.type === c.START_BLOCK ? e = this._flags.inline_frame ? "SPACE" : "NEWLINE" : this._flags.last_token.type === c.END_EXPR && (this._output.space_before_token = !0, e = "NEWLINE"), p(t, u) && ")" !== this._flags.last_token.text && (e = this._flags.inline_frame || "else" === this._flags.last_token.text || "export" === this._flags.last_token.text ? "SPACE" : "NEWLINE"), p(t, ["else", "catch", "finally"]) ? (this._flags.last_token.type !== c.END_BLOCK || this._previous_flags.mode !== _ || "expand" === this._options.brace_style || "end-expand" === this._options.brace_style || "none" === this._options.brace_style && t.newlines) && !this._flags.inline_frame ? this.print_newline() : (this._output.trim(!0), "}" !== this._output.current_line.last() && this.print_newline(), this._output.space_before_token = !0) : "NEWLINE" === e ? p(this._flags.last_token, d) || "declare" === this._flags.last_token.text && p(t, ["var", "let", "const"]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== c.END_EXPR ? this._flags.last_token.type === c.START_EXPR && p(t, ["var", "let", "const"]) || ":" === this._flags.last_token.text || (h(t, "if") && h(t.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : p(t, u) && ")" !== this._flags.last_token.text && this.print_newline() : this._flags.multiline_frame && C(this._flags.mode) && "," === this._flags.last_token.text && "}" === this._last_last_text ? this.print_newline() : "SPACE" === e && (this._output.space_before_token = !0), !t.previous || t.previous.type !== c.WORD && t.previous.type !== c.RESERVED || (this._output.space_before_token = !0), this.print_token(t), this._flags.last_word = t.text, t.type === c.RESERVED && ("do" === t.text ? this._flags.do_block = !0 : "if" === t.text ? this._flags.if_block = !0 : "import" === t.text ? this._flags.import_block = !0 : this._flags.import_block && h(t, "from") && (this._flags.import_block = !1))
        }, O.prototype.handle_semicolon = function(t) {
            this.start_of_statement(t) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(t);
            for (var e = this._tokens.peek(); !(this._flags.mode !== m || this._flags.if_block && h(e, "else") || this._flags.do_block);) this.restore_mode();
            this._flags.import_block && (this._flags.import_block = !1), this.print_token(t)
        }, O.prototype.handle_string = function(t) {
            this.start_of_statement(t) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(t), this._flags.last_token.type === c.RESERVED || this._flags.last_token.type === c.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === c.COMMA || this._flags.last_token.type === c.START_EXPR || this._flags.last_token.type === c.EQUALS || this._flags.last_token.type === c.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t) : this.print_newline()), this.print_token(t)
        }, O.prototype.handle_equals = function(t) {
            this.start_of_statement(t) || this.handle_whitespace_and_comments(t), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(t), this._output.space_before_token = !0
        }, O.prototype.handle_comma = function(t) {
            this.handle_whitespace_and_comments(t, !0), this.print_token(t), this._output.space_before_token = !0, this._flags.declaration_statement ? (T(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(t)) : this._flags.mode === y || this._flags.mode === m && this._flags.parent.mode === y ? (this._flags.mode === m && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(t)
        }, O.prototype.handle_operator = function(t) {
            var e = "*" === t.text && (p(this._flags.last_token, ["function", "yield"]) || f(this._flags.last_token.type, [c.START_BLOCK, c.COMMA, c.END_BLOCK, c.SEMICOLON])),
                n = f(t.text, ["-", "+"]) && (f(this._flags.last_token.type, [c.START_BLOCK, c.START_EXPR, c.EQUALS, c.OPERATOR]) || f(this._flags.last_token.text, u) || "," === this._flags.last_token.text);
            if (this.start_of_statement(t));
            else {
                var r = !e;
                this.handle_whitespace_and_comments(t, r)
            }
            if (p(this._flags.last_token, d)) return this._output.space_before_token = !0, void this.print_token(t);
            if ("*" !== t.text || this._flags.last_token.type !== c.DOT)
                if ("::" !== t.text) {
                    if (this._flags.last_token.type === c.OPERATOR && f(this._options.operator_position, v) && this.allow_wrap_or_preserved_newline(t), ":" === t.text && this._flags.in_case) return this.print_token(t), this._flags.in_case = !1, this._flags.case_body = !0, void(this._tokens.peek().type !== c.START_BLOCK ? (this.indent(), this.print_newline()) : this._output.space_before_token = !0);
                    var i = !0,
                        o = !0,
                        a = !1;
                    if (":" === t.text ? 0 === this._flags.ternary_depth ? i = !1 : (this._flags.ternary_depth -= 1, a = !0) : "?" === t.text && (this._flags.ternary_depth += 1), !n && !e && this._options.preserve_newlines && f(t.text, l)) {
                        var s = ":" === t.text,
                            h = s && a,
                            y = s && !a;
                        switch (this._options.operator_position) {
                            case g.before_newline:
                                return this._output.space_before_token = !y, this.print_token(t), s && !h || this.allow_wrap_or_preserved_newline(t), void(this._output.space_before_token = !0);
                            case g.after_newline:
                                return this._output.space_before_token = !0, !s || h ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(t) : this._output.space_before_token = !1, this.print_token(t), void(this._output.space_before_token = !0);
                            case g.preserve_newline:
                                return y || this.allow_wrap_or_preserved_newline(t), i = !(this._output.just_added_newline() || y), this._output.space_before_token = i, this.print_token(t), void(this._output.space_before_token = !0)
                        }
                    }
                    if (e) {
                        this.allow_wrap_or_preserved_newline(t), i = !1;
                        var b = this._tokens.peek();
                        o = b && f(b.type, [c.WORD, c.RESERVED])
                    } else "..." === t.text ? (this.allow_wrap_or_preserved_newline(t), i = this._flags.last_token.type === c.START_BLOCK, o = !1) : (f(t.text, ["--", "++", "!", "~"]) || n) && (this._flags.last_token.type !== c.COMMA && this._flags.last_token.type !== c.START_EXPR || this.allow_wrap_or_preserved_newline(t), i = !1, o = !1, !t.newlines || "--" !== t.text && "++" !== t.text || this.print_newline(!1, !0), ";" === this._flags.last_token.text && T(this._flags.mode) && (i = !0), this._flags.last_token.type === c.RESERVED ? i = !0 : this._flags.last_token.type === c.END_EXPR ? i = !("]" === this._flags.last_token.text && ("--" === t.text || "++" === t.text)) : this._flags.last_token.type === c.OPERATOR && (i = f(t.text, ["--", "-", "++", "+"]) && f(this._flags.last_token.text, ["--", "-", "++", "+"]), f(t.text, ["+", "-"]) && f(this._flags.last_token.text, ["--", "++"]) && (o = !0)), (this._flags.mode !== _ || this._flags.inline_frame) && this._flags.mode !== m || "{" !== this._flags.last_token.text && ";" !== this._flags.last_token.text || this.print_newline());
                    this._output.space_before_token = this._output.space_before_token || i, this.print_token(t), this._output.space_before_token = o
                } else this.print_token(t);
            else this.print_token(t)
        }, O.prototype.handle_block_comment = function(t, e) {
            return this._output.raw ? (this._output.add_raw_token(t), void(t.directives && "end" === t.directives.preserve && (this._output.raw = this._options.test_output_raw))) : t.directives ? (this.print_newline(!1, e), this.print_token(t), "start" === t.directives.preserve && (this._output.raw = !0), void this.print_newline(!1, !0)) : o.newline.test(t.text) || t.newlines ? void this.print_block_commment(t, e) : (this._output.space_before_token = !0, this.print_token(t), void(this._output.space_before_token = !0))
        }, O.prototype.print_block_commment = function(t, e) {
            var n, r = function(t) {
                    for (var e = [], n = (t = t.replace(o.allLineBreaks, "\n")).indexOf("\n"); - 1 !== n;) e.push(t.substring(0, n)), n = (t = t.substring(n + 1)).indexOf("\n");
                    return t.length && e.push(t), e
                }(t.text),
                i = !1,
                a = !1,
                s = t.whitespace_before,
                u = s.length;
            if (this.print_newline(!1, e), this.print_token_line_indentation(t), this._output.add_token(r[0]), this.print_newline(!1, e), r.length > 1) {
                for (i = function(t, e) {
                        for (var n = 0; n < t.length; n++)
                            if (t[n].trim().charAt(0) !== e) return !1;
                        return !0
                    }(r = r.slice(1), "*"), a = function(t, e) {
                        for (var n, r = 0, i = t.length; r < i; r++)
                            if ((n = t[r]) && 0 !== n.indexOf(e)) return !1;
                        return !0
                    }(r, s), i && (this._flags.alignment = 1), n = 0; n < r.length; n++) i ? (this.print_token_line_indentation(t), this._output.add_token(r[n].replace(/^\s+/g, ""))) : a && r[n] ? (this.print_token_line_indentation(t), this._output.add_token(r[n].substring(u))) : (this._output.current_line.set_indent(-1), this._output.add_token(r[n])), this.print_newline(!1, e);
                this._flags.alignment = 0
            }
        }, O.prototype.handle_comment = function(t, e) {
            t.newlines ? this.print_newline(!1, e) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(t), this.print_newline(!1, e)
        }, O.prototype.handle_dot = function(t) {
            this.start_of_statement(t) || this.handle_whitespace_and_comments(t, !0), p(this._flags.last_token, d) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(t, ")" === this._flags.last_token.text && this._options.break_chained_methods), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(t)
        }, O.prototype.handle_unknown = function(t, e) {
            this.print_token(t), "\n" === t.text[t.text.length - 1] && this.print_newline(!1, e)
        }, O.prototype.handle_eof = function(t) {
            for (; this._flags.mode === m;) this.restore_mode();
            this.handle_whitespace_and_comments(t)
        }, t.exports.Beautifier = O
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            this.__parent = t, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = []
        }

        function i(t, e) {
            this.__cache = [""], this.__indent_size = t.indent_size, this.__indent_string = t.indent_char, t.indent_with_tabs || (this.__indent_string = new Array(t.indent_size + 1).join(t.indent_char)), e = e || "", t.indent_level > 0 && (e = new Array(t.indent_level + 1).join(this.__indent_string)), this.__base_string = e, this.__base_string_length = e.length
        }

        function o(t, e) {
            this.__indent_cache = new i(t, e), this.raw = !1, this._end_with_newline = t.end_with_newline, this.indent_size = t.indent_size, this.wrap_line_length = t.wrap_line_length, this.indent_empty_lines = t.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new r(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline()
        }
        r.prototype.clone_empty = function() {
            var t = new r(this.__parent);
            return t.set_indent(this.__indent_count, this.__alignment_count), t
        }, r.prototype.item = function(t) {
            return t < 0 ? this.__items[this.__items.length + t] : this.__items[t]
        }, r.prototype.has_match = function(t) {
            for (var e = this.__items.length - 1; e >= 0; e--)
                if (this.__items[e].match(t)) return !0;
            return !1
        }, r.prototype.set_indent = function(t, e) {
            this.is_empty() && (this.__indent_count = t || 0, this.__alignment_count = e || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count))
        }, r.prototype._set_wrap_point = function() {
            this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count)
        }, r.prototype._should_wrap = function() {
            return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count
        }, r.prototype._allow_wrap = function() {
            if (this._should_wrap()) {
                this.__parent.add_new_line();
                var t = this.__parent.current_line;
                return t.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), t.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), t.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, " " === t.__items[0] && (t.__items.splice(0, 1), t.__character_count -= 1), !0
            }
            return !1
        }, r.prototype.is_empty = function() {
            return 0 === this.__items.length
        }, r.prototype.last = function() {
            return this.is_empty() ? null : this.__items[this.__items.length - 1]
        }, r.prototype.push = function(t) {
            this.__items.push(t);
            var e = t.lastIndexOf("\n"); - 1 !== e ? this.__character_count = t.length - e : this.__character_count += t.length
        }, r.prototype.pop = function() {
            var t = null;
            return this.is_empty() || (t = this.__items.pop(), this.__character_count -= t.length), t
        }, r.prototype._remove_indent = function() {
            this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size)
        }, r.prototype._remove_wrap_indent = function() {
            this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1)
        }, r.prototype.trim = function() {
            for (;
                " " === this.last();) this.__items.pop(), this.__character_count -= 1
        }, r.prototype.toString = function() {
            var t = "";
            return this.is_empty() ? this.__parent.indent_empty_lines && (t = this.__parent.get_indent_string(this.__indent_count)) : (t = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), t += this.__items.join("")), t
        }, i.prototype.get_indent_size = function(t, e) {
            var n = this.__base_string_length;
            return e = e || 0, t < 0 && (n = 0), n += t * this.__indent_size, n += e
        }, i.prototype.get_indent_string = function(t, e) {
            var n = this.__base_string;
            return e = e || 0, t < 0 && (t = 0, n = ""), e += t * this.__indent_size, this.__ensure_cache(e), n += this.__cache[e]
        }, i.prototype.__ensure_cache = function(t) {
            for (; t >= this.__cache.length;) this.__add_column()
        }, i.prototype.__add_column = function() {
            var t = this.__cache.length,
                e = 0,
                n = "";
            this.__indent_size && t >= this.__indent_size && (t -= (e = Math.floor(t / this.__indent_size)) * this.__indent_size, n = new Array(e + 1).join(this.__indent_string)), t && (n += new Array(t + 1).join(" ")), this.__cache.push(n)
        }, o.prototype.__add_outputline = function() {
            this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line)
        }, o.prototype.get_line_number = function() {
            return this.__lines.length
        }, o.prototype.get_indent_string = function(t, e) {
            return this.__indent_cache.get_indent_string(t, e)
        }, o.prototype.get_indent_size = function(t, e) {
            return this.__indent_cache.get_indent_size(t, e)
        }, o.prototype.is_empty = function() {
            return !this.previous_line && this.current_line.is_empty()
        }, o.prototype.add_new_line = function(t) {
            return !(this.is_empty() || !t && this.just_added_newline() || (this.raw || this.__add_outputline(), 0))
        }, o.prototype.get_code = function(t) {
            this.trim(!0);
            var e = this.current_line.pop();
            e && ("\n" === e[e.length - 1] && (e = e.replace(/\n+$/g, "")), this.current_line.push(e)), this._end_with_newline && this.__add_outputline();
            var n = this.__lines.join("\n");
            return "\n" !== t && (n = n.replace(/[\n]/g, t)), n
        }, o.prototype.set_wrap_point = function() {
            this.current_line._set_wrap_point()
        }, o.prototype.set_indent = function(t, e) {
            return t = t || 0, e = e || 0, this.next_line.set_indent(t, e), this.__lines.length > 1 ? (this.current_line.set_indent(t, e), !0) : (this.current_line.set_indent(), !1)
        }, o.prototype.add_raw_token = function(t) {
            for (var e = 0; e < t.newlines; e++) this.__add_outputline();
            this.current_line.set_indent(-1), this.current_line.push(t.whitespace_before), this.current_line.push(t.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1
        }, o.prototype.add_token = function(t) {
            this.__add_space_before_token(), this.current_line.push(t), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap()
        }, o.prototype.__add_space_before_token = function() {
            this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "))
        }, o.prototype.remove_indent = function(t) {
            for (var e = this.__lines.length; t < e;) this.__lines[t]._remove_indent(), t++;
            this.current_line._remove_wrap_indent()
        }, o.prototype.trim = function(t) {
            for (t = void 0 !== t && t, this.current_line.trim(); t && this.__lines.length > 1 && this.current_line.is_empty();) this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
            this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null
        }, o.prototype.just_added_newline = function() {
            return this.current_line.is_empty()
        }, o.prototype.just_added_blankline = function() {
            return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty()
        }, o.prototype.ensure_empty_line_above = function(t, e) {
            for (var n = this.__lines.length - 2; n >= 0;) {
                var i = this.__lines[n];
                if (i.is_empty()) break;
                if (0 !== i.item(0).indexOf(t) && i.item(-1) !== e) {
                    this.__lines.splice(n + 1, 0, new r(this)), this.previous_line = this.__lines[this.__lines.length - 2];
                    break
                }
                n--
            }
        }, t.exports.Output = o
    }, function(t, e, n) {
        "use strict";
        t.exports.Token = function(t, e, n, r) {
            this.type = t, this.text = e, this.comments_before = null, this.newlines = n || 0, this.whitespace_before = r || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null
        }
    }, function(t, e, n) {
        "use strict";
        var r = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc",
            i = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f",
            o = "(?:\\\\u[0-9a-fA-F]{4}|[\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a" + r + "])";
        e.identifier = new RegExp(o + "(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f])*", "g"), e.identifierStart = new RegExp(o), e.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a" + r + i + "])+"), e.newline = /[\n\r\u2028\u2029]/, e.lineBreak = new RegExp("\r\n|" + e.newline.source), e.allLineBreaks = new RegExp(e.lineBreak.source, "g")
    }, function(t, e, n) {
        "use strict";
        var r = n(6).Options,
            i = ["before-newline", "after-newline", "preserve-newline"];

        function o(t) {
            r.call(this, t, "js");
            var e = this.raw_options.brace_style || null;
            "expand-strict" === e ? this.raw_options.brace_style = "expand" : "collapse-preserve-inline" === e ? this.raw_options.brace_style = "collapse,preserve-inline" : void 0 !== this.raw_options.braces_on_own_line && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
            var n = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
            this.brace_preserve_inline = !1, this.brace_style = "collapse";
            for (var o = 0; o < n.length; o++) "preserve-inline" === n[o] ? this.brace_preserve_inline = !0 : this.brace_style = n[o];
            this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", i), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0)
        }
        o.prototype = new r, t.exports.Options = o
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            this.raw_options = i(t, e), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", "\t" === this.indent_char), this.indent_with_tabs && (this.indent_char = "\t", 1 === this.indent_size && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php"], ["auto"])
        }

        function i(t, e) {
            var n, r = {};
            for (n in t = o(t)) n !== e && (r[n] = t[n]);
            if (e && t[e])
                for (n in t[e]) r[n] = t[e][n];
            return r
        }

        function o(t) {
            var e, n = {};
            for (e in t) n[e.replace(/-/g, "_")] = t[e];
            return n
        }
        r.prototype._get_array = function(t, e) {
            var n = this.raw_options[t],
                r = e || [];
            return "object" == typeof n ? null !== n && "function" == typeof n.concat && (r = n.concat()) : "string" == typeof n && (r = n.split(/[^a-zA-Z0-9_\/\-]+/)), r
        }, r.prototype._get_boolean = function(t, e) {
            var n = this.raw_options[t];
            return void 0 === n ? !!e : !!n
        }, r.prototype._get_characters = function(t, e) {
            var n = this.raw_options[t],
                r = e || "";
            return "string" == typeof n && (r = n.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "\t")), r
        }, r.prototype._get_number = function(t, e) {
            var n = this.raw_options[t];
            e = parseInt(e, 10), isNaN(e) && (e = 0);
            var r = parseInt(n, 10);
            return isNaN(r) && (r = e), r
        }, r.prototype._get_selection = function(t, e, n) {
            var r = this._get_selection_list(t, e, n);
            if (1 !== r.length) throw new Error("Invalid Option Value: The option '" + t + "' can only be one of the following values:\n" + e + "\nYou passed in: '" + this.raw_options[t] + "'");
            return r[0]
        }, r.prototype._get_selection_list = function(t, e, n) {
            if (!e || 0 === e.length) throw new Error("Selection list cannot be empty.");
            if (n = n || [e[0]], !this._is_valid_selection(n, e)) throw new Error("Invalid Default Value!");
            var r = this._get_array(t, n);
            if (!this._is_valid_selection(r, e)) throw new Error("Invalid Option Value: The option '" + t + "' can contain only the following values:\n" + e + "\nYou passed in: '" + this.raw_options[t] + "'");
            return r
        }, r.prototype._is_valid_selection = function(t, e) {
            return t.length && e.length && !t.some((function(t) {
                return -1 === e.indexOf(t)
            }))
        }, t.exports.Options = r, t.exports.normalizeOpts = o, t.exports.mergeOpts = i
    }, function(t, e, n) {
        "use strict";
        var r = n(8).InputScanner,
            i = n(9).Tokenizer,
            o = n(9).TOKEN,
            a = n(13).Directives,
            s = n(4),
            u = n(12).Pattern,
            l = n(14).TemplatablePattern;

        function c(t, e) {
            return -1 !== e.indexOf(t)
        }
        var f = {
                START_EXPR: "TK_START_EXPR",
                END_EXPR: "TK_END_EXPR",
                START_BLOCK: "TK_START_BLOCK",
                END_BLOCK: "TK_END_BLOCK",
                WORD: "TK_WORD",
                RESERVED: "TK_RESERVED",
                SEMICOLON: "TK_SEMICOLON",
                STRING: "TK_STRING",
                EQUALS: "TK_EQUALS",
                OPERATOR: "TK_OPERATOR",
                COMMA: "TK_COMMA",
                BLOCK_COMMENT: "TK_BLOCK_COMMENT",
                COMMENT: "TK_COMMENT",
                DOT: "TK_DOT",
                UNKNOWN: "TK_UNKNOWN",
                START: o.START,
                RAW: o.RAW,
                EOF: o.EOF
            },
            h = new a(/\/\*/, /\*\//),
            p = /0[xX][0123456789abcdefABCDEF]*|0[oO][01234567]*|0[bB][01]*|\d+n|(?:\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/,
            d = /[0-9]/,
            g = /[^\d\.]/,
            v = ">>> === !== << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "),
            _ = ">>>= ... >>= <<= === >>> !== **= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
        _ = (_ = "\\?\\.(?!\\d) " + (_ = _.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"))).replace(/ /g, "|");
        var m, y = new RegExp(_),
            b = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","),
            x = b.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as"]),
            w = new RegExp("^(?:" + x.join("|") + ")$"),
            k = function(t, e) {
                i.call(this, t, e), this._patterns.whitespace = this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source, /\u2028\u2029/.source);
                var n = new u(this._input),
                    r = new l(this._input).read_options(this._options);
                this.__patterns = {
                    template: r,
                    identifier: r.starting_with(s.identifier).matching(s.identifierMatch),
                    number: n.matching(p),
                    punct: n.matching(y),
                    comment: n.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
                    block_comment: n.starting_with(/\/\*/).until_after(/\*\//),
                    html_comment_start: n.matching(/<!--/),
                    html_comment_end: n.matching(/-->/),
                    include: n.starting_with(/#include/).until_after(s.lineBreak),
                    shebang: n.starting_with(/#!/).until_after(s.lineBreak),
                    xml: n.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/),
                    single_quote: r.until(/['\\\n\r\u2028\u2029]/),
                    double_quote: r.until(/["\\\n\r\u2028\u2029]/),
                    template_text: r.until(/[`\\$]/),
                    template_expression: r.until(/[`}\\]/)
                }
            };
        (k.prototype = new i)._is_comment = function(t) {
            return t.type === f.COMMENT || t.type === f.BLOCK_COMMENT || t.type === f.UNKNOWN
        }, k.prototype._is_opening = function(t) {
            return t.type === f.START_BLOCK || t.type === f.START_EXPR
        }, k.prototype._is_closing = function(t, e) {
            return (t.type === f.END_BLOCK || t.type === f.END_EXPR) && e && ("]" === t.text && "[" === e.text || ")" === t.text && "(" === e.text || "}" === t.text && "{" === e.text)
        }, k.prototype._reset = function() {
            m = !1
        }, k.prototype._get_next_token = function(t, e) {
            var n = null;
            this._readWhitespace();
            var r = this._input.peek();
            return null === r ? this._create_token(f.EOF, "") : n = (n = (n = (n = (n = (n = (n = (n = (n = n || this._read_non_javascript(r)) || this._read_string(r)) || this._read_word(t)) || this._read_singles(r)) || this._read_comment(r)) || this._read_regexp(r, t)) || this._read_xml(r, t)) || this._read_punctuation()) || this._create_token(f.UNKNOWN, this._input.next())
        }, k.prototype._read_word = function(t) {
            var e;
            return "" !== (e = this.__patterns.identifier.read()) ? (e = e.replace(s.allLineBreaks, "\n"), t.type !== f.DOT && (t.type !== f.RESERVED || "set" !== t.text && "get" !== t.text) && w.test(e) ? "in" === e || "of" === e ? this._create_token(f.OPERATOR, e) : this._create_token(f.RESERVED, e) : this._create_token(f.WORD, e)) : "" !== (e = this.__patterns.number.read()) ? this._create_token(f.WORD, e) : void 0
        }, k.prototype._read_singles = function(t) {
            var e = null;
            return "(" === t || "[" === t ? e = this._create_token(f.START_EXPR, t) : ")" === t || "]" === t ? e = this._create_token(f.END_EXPR, t) : "{" === t ? e = this._create_token(f.START_BLOCK, t) : "}" === t ? e = this._create_token(f.END_BLOCK, t) : ";" === t ? e = this._create_token(f.SEMICOLON, t) : "." === t && g.test(this._input.peek(1)) ? e = this._create_token(f.DOT, t) : "," === t && (e = this._create_token(f.COMMA, t)), e && this._input.next(), e
        }, k.prototype._read_punctuation = function() {
            var t = this.__patterns.punct.read();
            if ("" !== t) return "=" === t ? this._create_token(f.EQUALS, t) : "?." === t ? this._create_token(f.DOT, t) : this._create_token(f.OPERATOR, t)
        }, k.prototype._read_non_javascript = function(t) {
            var e = "";
            if ("#" === t) {
                if (this._is_first_token() && (e = this.__patterns.shebang.read())) return this._create_token(f.UNKNOWN, e.trim() + "\n");
                if (e = this.__patterns.include.read()) return this._create_token(f.UNKNOWN, e.trim() + "\n");
                t = this._input.next();
                var n = "#";
                if (this._input.hasNext() && this._input.testChar(d)) {
                    do {
                        n += t = this._input.next()
                    } while (this._input.hasNext() && "#" !== t && "=" !== t);
                    return "#" === t || ("[" === this._input.peek() && "]" === this._input.peek(1) ? (n += "[]", this._input.next(), this._input.next()) : "{" === this._input.peek() && "}" === this._input.peek(1) && (n += "{}", this._input.next(), this._input.next())), this._create_token(f.WORD, n)
                }
                this._input.back()
            } else if ("<" === t && this._is_first_token()) {
                if (e = this.__patterns.html_comment_start.read()) {
                    for (; this._input.hasNext() && !this._input.testChar(s.newline);) e += this._input.next();
                    return m = !0, this._create_token(f.COMMENT, e)
                }
            } else if (m && "-" === t && (e = this.__patterns.html_comment_end.read())) return m = !1, this._create_token(f.COMMENT, e);
            return null
        }, k.prototype._read_comment = function(t) {
            var e = null;
            if ("/" === t) {
                var n = "";
                if ("*" === this._input.peek(1)) {
                    n = this.__patterns.block_comment.read();
                    var r = h.get_directives(n);
                    r && "start" === r.ignore && (n += h.readIgnored(this._input)), n = n.replace(s.allLineBreaks, "\n"), (e = this._create_token(f.BLOCK_COMMENT, n)).directives = r
                } else "/" === this._input.peek(1) && (n = this.__patterns.comment.read(), e = this._create_token(f.COMMENT, n))
            }
            return e
        }, k.prototype._read_string = function(t) {
            if ("`" === t || "'" === t || '"' === t) {
                var e = this._input.next();
                return this.has_char_escapes = !1, e += "`" === t ? this._read_string_recursive("`", !0, "${") : this._read_string_recursive(t), this.has_char_escapes && this._options.unescape_strings && (e = function(t) {
                    for (var e = "", n = 0, i = new r(t), o = null; i.hasNext();)
                        if ((o = i.match(/([\s]|[^\\]|\\\\)+/g)) && (e += o[0]), "\\" === i.peek()) {
                            if (i.next(), "x" === i.peek()) o = i.match(/x([0-9A-Fa-f]{2})/g);
                            else {
                                if ("u" !== i.peek()) {
                                    e += "\\", i.hasNext() && (e += i.next());
                                    continue
                                }
                                o = i.match(/u([0-9A-Fa-f]{4})/g)
                            }
                            if (!o) return t;
                            if ((n = parseInt(o[1], 16)) > 126 && n <= 255 && 0 === o[0].indexOf("x")) return t;
                            if (n >= 0 && n < 32) {
                                e += "\\" + o[0];
                                continue
                            }
                            e += 34 === n || 39 === n || 92 === n ? "\\" + String.fromCharCode(n) : String.fromCharCode(n)
                        } return e
                }(e)), this._input.peek() === t && (e += this._input.next()), e = e.replace(s.allLineBreaks, "\n"), this._create_token(f.STRING, e)
            }
            return null
        }, k.prototype._allow_regexp_or_xml = function(t) {
            return t.type === f.RESERVED && c(t.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || t.type === f.END_EXPR && ")" === t.text && t.opened.previous.type === f.RESERVED && c(t.opened.previous.text, ["if", "while", "for"]) || c(t.type, [f.COMMENT, f.START_EXPR, f.START_BLOCK, f.START, f.END_BLOCK, f.OPERATOR, f.EQUALS, f.EOF, f.SEMICOLON, f.COMMA])
        }, k.prototype._read_regexp = function(t, e) {
            if ("/" === t && this._allow_regexp_or_xml(e)) {
                for (var n = this._input.next(), r = !1, i = !1; this._input.hasNext() && (r || i || this._input.peek() !== t) && !this._input.testChar(s.newline);) n += this._input.peek(), r ? r = !1 : (r = "\\" === this._input.peek(), "[" === this._input.peek() ? i = !0 : "]" === this._input.peek() && (i = !1)), this._input.next();
                return this._input.peek() === t && (n += this._input.next(), n += this._input.read(s.identifier)), this._create_token(f.STRING, n)
            }
            return null
        }, k.prototype._read_xml = function(t, e) {
            if (this._options.e4x && "<" === t && this._allow_regexp_or_xml(e)) {
                var n = "",
                    r = this.__patterns.xml.read_match();
                if (r) {
                    for (var i = r[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), o = 0 === i.indexOf("{"), a = 0; r;) {
                        var u = !!r[1],
                            l = r[2];
                        if (!(r[r.length - 1] || "![CDATA[" === l.slice(0, 8)) && (l === i || o && l.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (u ? --a : ++a), n += r[0], a <= 0) break;
                        r = this.__patterns.xml.read_match()
                    }
                    return r || (n += this._input.match(/[\s\S]*/g)[0]), n = n.replace(s.allLineBreaks, "\n"), this._create_token(f.STRING, n)
                }
            }
            return null
        }, k.prototype._read_string_recursive = function(t, e, n) {
            var r, i;
            "'" === t ? i = this.__patterns.single_quote : '"' === t ? i = this.__patterns.double_quote : "`" === t ? i = this.__patterns.template_text : "}" === t && (i = this.__patterns.template_expression);
            for (var o = i.read(), a = ""; this._input.hasNext();) {
                if ((a = this._input.next()) === t || !e && s.newline.test(a)) {
                    this._input.back();
                    break
                }
                "\\" === a && this._input.hasNext() ? ("x" === (r = this._input.peek()) || "u" === r ? this.has_char_escapes = !0 : "\r" === r && "\n" === this._input.peek(1) && this._input.next(), a += this._input.next()) : n && ("${" === n && "$" === a && "{" === this._input.peek() && (a += this._input.next()), n === a && (a += "`" === t ? this._read_string_recursive("}", e, "`") : this._read_string_recursive("`", e, "${"), this._input.hasNext() && (a += this._input.next()))), o += a += i.read()
            }
            return o
        }, t.exports.Tokenizer = k, t.exports.TOKEN = f, t.exports.positionable_operators = v.slice(), t.exports.line_starters = b.slice()
    }, function(t, e, n) {
        "use strict";
        var r = RegExp.prototype.hasOwnProperty("sticky");

        function i(t) {
            this.__input = t || "", this.__input_length = this.__input.length, this.__position = 0
        }
        i.prototype.restart = function() {
            this.__position = 0
        }, i.prototype.back = function() {
            this.__position > 0 && (this.__position -= 1)
        }, i.prototype.hasNext = function() {
            return this.__position < this.__input_length
        }, i.prototype.next = function() {
            var t = null;
            return this.hasNext() && (t = this.__input.charAt(this.__position), this.__position += 1), t
        }, i.prototype.peek = function(t) {
            var e = null;
            return t = t || 0, (t += this.__position) >= 0 && t < this.__input_length && (e = this.__input.charAt(t)), e
        }, i.prototype.__match = function(t, e) {
            t.lastIndex = e;
            var n = t.exec(this.__input);
            return !n || r && t.sticky || n.index !== e && (n = null), n
        }, i.prototype.test = function(t, e) {
            return e = e || 0, (e += this.__position) >= 0 && e < this.__input_length && !!this.__match(t, e)
        }, i.prototype.testChar = function(t, e) {
            var n = this.peek(e);
            return t.lastIndex = 0, null !== n && t.test(n)
        }, i.prototype.match = function(t) {
            var e = this.__match(t, this.__position);
            return e ? this.__position += e[0].length : e = null, e
        }, i.prototype.read = function(t, e, n) {
            var r, i = "";
            return t && (r = this.match(t)) && (i += r[0]), !e || !r && t || (i += this.readUntil(e, n)), i
        }, i.prototype.readUntil = function(t, e) {
            var n, r = this.__position;
            t.lastIndex = this.__position;
            var i = t.exec(this.__input);
            return i ? (r = i.index, e && (r += i[0].length)) : r = this.__input_length, n = this.__input.substring(this.__position, r), this.__position = r, n
        }, i.prototype.readUntilAfter = function(t) {
            return this.readUntil(t, !0)
        }, i.prototype.get_regexp = function(t, e) {
            var n = null,
                i = "g";
            return e && r && (i = "y"), "string" == typeof t && "" !== t ? n = new RegExp(t, i) : t && (n = new RegExp(t.source, i)), n
        }, i.prototype.get_literal_regexp = function(t) {
            return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
        }, i.prototype.peekUntilAfter = function(t) {
            var e = this.__position,
                n = this.readUntilAfter(t);
            return this.__position = e, n
        }, i.prototype.lookBack = function(t) {
            var e = this.__position - 1;
            return e >= t.length && this.__input.substring(e - t.length, e).toLowerCase() === t
        }, t.exports.InputScanner = i
    }, function(t, e, n) {
        "use strict";
        var r = n(8).InputScanner,
            i = n(3).Token,
            o = n(10).TokenStream,
            a = n(11).WhitespacePattern,
            s = {
                START: "TK_START",
                RAW: "TK_RAW",
                EOF: "TK_EOF"
            },
            u = function(t, e) {
                this._input = new r(t), this._options = e || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new a(this._input)
            };
        u.prototype.tokenize = function() {
            var t;
            this._input.restart(), this.__tokens = new o, this._reset();
            for (var e = new i(s.START, ""), n = null, r = [], a = new o; e.type !== s.EOF;) {
                for (t = this._get_next_token(e, n); this._is_comment(t);) a.add(t), t = this._get_next_token(e, n);
                a.isEmpty() || (t.comments_before = a, a = new o), t.parent = n, this._is_opening(t) ? (r.push(n), n = t) : n && this._is_closing(t, n) && (t.opened = n, n.closed = t, n = r.pop(), t.parent = n), t.previous = e, e.next = t, this.__tokens.add(t), e = t
            }
            return this.__tokens
        }, u.prototype._is_first_token = function() {
            return this.__tokens.isEmpty()
        }, u.prototype._reset = function() {}, u.prototype._get_next_token = function(t, e) {
            this._readWhitespace();
            var n = this._input.read(/.+/g);
            return n ? this._create_token(s.RAW, n) : this._create_token(s.EOF, "")
        }, u.prototype._is_comment = function(t) {
            return !1
        }, u.prototype._is_opening = function(t) {
            return !1
        }, u.prototype._is_closing = function(t, e) {
            return !1
        }, u.prototype._create_token = function(t, e) {
            return new i(t, e, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token)
        }, u.prototype._readWhitespace = function() {
            return this._patterns.whitespace.read()
        }, t.exports.Tokenizer = u, t.exports.TOKEN = s
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = t
        }
        r.prototype.restart = function() {
            this.__position = 0
        }, r.prototype.isEmpty = function() {
            return 0 === this.__tokens_length
        }, r.prototype.hasNext = function() {
            return this.__position < this.__tokens_length
        }, r.prototype.next = function() {
            var t = null;
            return this.hasNext() && (t = this.__tokens[this.__position], this.__position += 1), t
        }, r.prototype.peek = function(t) {
            var e = null;
            return t = t || 0, (t += this.__position) >= 0 && t < this.__tokens_length && (e = this.__tokens[t]), e
        }, r.prototype.add = function(t) {
            this.__parent_token && (t.parent = this.__parent_token), this.__tokens.push(t), this.__tokens_length += 1
        }, t.exports.TokenStream = r
    }, function(t, e, n) {
        "use strict";
        var r = n(12).Pattern;

        function i(t, e) {
            r.call(this, t, e), e ? this._line_regexp = this._input.get_regexp(e._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = ""
        }
        i.prototype = new r, i.prototype.__set_whitespace_patterns = function(t, e) {
            t += "\\t ", e += "\\n\\r", this._match_pattern = this._input.get_regexp("[" + t + e + "]+", !0), this._newline_regexp = this._input.get_regexp("\\r\\n|[" + e + "]")
        }, i.prototype.read = function() {
            this.newline_count = 0, this.whitespace_before_token = "";
            var t = this._input.read(this._match_pattern);
            if (" " === t) this.whitespace_before_token = " ";
            else if (t) {
                var e = this.__split(this._newline_regexp, t);
                this.newline_count = e.length - 1, this.whitespace_before_token = e[this.newline_count]
            }
            return t
        }, i.prototype.matching = function(t, e) {
            var n = this._create();
            return n.__set_whitespace_patterns(t, e), n._update(), n
        }, i.prototype._create = function() {
            return new i(this._input, this)
        }, i.prototype.__split = function(t, e) {
            t.lastIndex = 0;
            for (var n = 0, r = [], i = t.exec(e); i;) r.push(e.substring(n, i.index)), n = i.index + i[0].length, i = t.exec(e);
            return n < e.length ? r.push(e.substring(n, e.length)) : r.push(""), r
        }, t.exports.WhitespacePattern = i
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            this._input = t, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, e && (this._starting_pattern = this._input.get_regexp(e._starting_pattern, !0), this._match_pattern = this._input.get_regexp(e._match_pattern, !0), this._until_pattern = this._input.get_regexp(e._until_pattern), this._until_after = e._until_after)
        }
        r.prototype.read = function() {
            var t = this._input.read(this._starting_pattern);
            return this._starting_pattern && !t || (t += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), t
        }, r.prototype.read_match = function() {
            return this._input.match(this._match_pattern)
        }, r.prototype.until_after = function(t) {
            var e = this._create();
            return e._until_after = !0, e._until_pattern = this._input.get_regexp(t), e._update(), e
        }, r.prototype.until = function(t) {
            var e = this._create();
            return e._until_after = !1, e._until_pattern = this._input.get_regexp(t), e._update(), e
        }, r.prototype.starting_with = function(t) {
            var e = this._create();
            return e._starting_pattern = this._input.get_regexp(t, !0), e._update(), e
        }, r.prototype.matching = function(t) {
            var e = this._create();
            return e._match_pattern = this._input.get_regexp(t, !0), e._update(), e
        }, r.prototype._create = function() {
            return new r(this._input, this)
        }, r.prototype._update = function() {}, t.exports.Pattern = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            t = "string" == typeof t ? t : t.source, e = "string" == typeof e ? e : e.source, this.__directives_block_pattern = new RegExp(t + / beautify( \w+[:]\w+)+ /.source + e, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(t + /\sbeautify\signore:end\s/.source + e, "g")
        }
        r.prototype.get_directives = function(t) {
            if (!t.match(this.__directives_block_pattern)) return null;
            var e = {};
            this.__directive_pattern.lastIndex = 0;
            for (var n = this.__directive_pattern.exec(t); n;) e[n[1]] = n[2], n = this.__directive_pattern.exec(t);
            return e
        }, r.prototype.readIgnored = function(t) {
            return t.readUntilAfter(this.__directives_end_ignore_pattern)
        }, t.exports.Directives = r
    }, function(t, e, n) {
        "use strict";
        var r = n(12).Pattern,
            i = {
                django: !1,
                erb: !1,
                handlebars: !1,
                php: !1
            };

        function o(t, e) {
            r.call(this, t, e), this.__template_pattern = null, this._disabled = Object.assign({}, i), this._excluded = Object.assign({}, i), e && (this.__template_pattern = this._input.get_regexp(e.__template_pattern), this._excluded = Object.assign(this._excluded, e._excluded), this._disabled = Object.assign(this._disabled, e._disabled));
            var n = new r(t);
            this.__patterns = {
                handlebars_comment: n.starting_with(/{{!--/).until_after(/--}}/),
                handlebars_unescaped: n.starting_with(/{{{/).until_after(/}}}/),
                handlebars: n.starting_with(/{{/).until_after(/}}/),
                php: n.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),
                erb: n.starting_with(/<%[^%]/).until_after(/[^%]%>/),
                django: n.starting_with(/{%/).until_after(/%}/),
                django_value: n.starting_with(/{{/).until_after(/}}/),
                django_comment: n.starting_with(/{#/).until_after(/#}/)
            }
        }
        o.prototype = new r, o.prototype._create = function() {
            return new o(this._input, this)
        }, o.prototype._update = function() {
            this.__set_templated_pattern()
        }, o.prototype.disable = function(t) {
            var e = this._create();
            return e._disabled[t] = !0, e._update(), e
        }, o.prototype.read_options = function(t) {
            var e = this._create();
            for (var n in i) e._disabled[n] = -1 === t.templating.indexOf(n);
            return e._update(), e
        }, o.prototype.exclude = function(t) {
            var e = this._create();
            return e._excluded[t] = !0, e._update(), e
        }, o.prototype.read = function() {
            var t = "";
            t = this._match_pattern ? this._input.read(this._starting_pattern) : this._input.read(this._starting_pattern, this.__template_pattern);
            for (var e = this._read_template(); e;) this._match_pattern ? e += this._input.read(this._match_pattern) : e += this._input.readUntil(this.__template_pattern), t += e, e = this._read_template();
            return this._until_after && (t += this._input.readUntilAfter(this._until_pattern)), t
        }, o.prototype.__set_templated_pattern = function() {
            var t = [];
            this._disabled.php || t.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || t.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || t.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (t.push(this.__patterns.django._starting_pattern.source), t.push(this.__patterns.django_value._starting_pattern.source), t.push(this.__patterns.django_comment._starting_pattern.source)), this._until_pattern && t.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + t.join("|") + ")")
        }, o.prototype._read_template = function() {
            var t = "",
                e = this._input.peek();
            if ("<" === e) {
                var n = this._input.peek(1);
                this._disabled.php || this._excluded.php || "?" !== n || (t = t || this.__patterns.php.read()), this._disabled.erb || this._excluded.erb || "%" !== n || (t = t || this.__patterns.erb.read())
            } else "{" === e && (this._disabled.handlebars || this._excluded.handlebars || (t = (t = (t = t || this.__patterns.handlebars_comment.read()) || this.__patterns.handlebars_unescaped.read()) || this.__patterns.handlebars.read()), this._disabled.django || (this._excluded.django || this._excluded.handlebars || (t = t || this.__patterns.django_value.read()), this._excluded.django || (t = (t = t || this.__patterns.django_comment.read()) || this.__patterns.django.read())));
            return t
        }, t.exports.TemplatablePattern = o
    }]), void 0 === (r = function() {
        return {
            js_beautify: i
        }
    }.apply(e, [])) || (t.exports = r)
}, function(t, e, n) {
    /*! JSON.minify()
        v0.1 (c) Kyle Simpson
        MIT License
    */
    ! function(e) {
        "use strict";
        var n = function(t) {
            var e, n, r, i, o = /"|(\/\*)|(\*\/)|(\/\/)|\n|\r|\[|]/g,
                a = !1,
                s = !1,
                u = !1,
                l = [],
                c = 0,
                f = 0;
            for (o.lastIndex = 0; e = o.exec(t);) r = RegExp.leftContext, i = RegExp.rightContext, s || u || (n = r.substring(f), a || (n = n.replace(/(\n|\r|\s)*/g, "")), l[c++] = n), f = o.lastIndex, '"' !== e[0] || s || u ? "/*" !== e[0] || a || s || u ? "*/" !== e[0] || a || !s || u ? "//" !== e[0] || a || s || u ? "\n" !== e[0] && "\r" !== e[0] || a || s || !u ? s || u || /\n|\r|\s/.test(e[0]) || (l[c++] = e[0]) : u = !1 : u = !0 : s = !1 : s = !0 : (n = r.match(/(\\)*$/), a && n && n[0].length % 2 != 0 || (a = !a), f--, i = t.substring(f));
            return l[c++] = i, l.join("")
        };
        t.exports ? (t.exports = n, JSON.minify = n) : (void 0 !== e.JSON && e.JSON || (e.JSON = {}), e.JSON.minify = n)
    }(this)
}, function(t, e, n) {
    /*!
     * clipboard.js v2.0.6
     * https://clipboardjs.com/
     * 
     * Licensed MIT © Zeno Rocha
     */
    var r;
    r = function() {
        return function(t) {
            var e = {};

            function n(r) {
                if (e[r]) return e[r].exports;
                var i = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }
            return n.m = t, n.c = e, n.d = function(t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                })
            }, n.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, n.t = function(t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var i in t) n.d(r, i, function(e) {
                        return t[e]
                    }.bind(null, i));
                return r
            }, n.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "", n(n.s = 6)
        }([function(t, e) {
            t.exports = function(t) {
                var e;
                if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var n = t.hasAttribute("readonly");
                    n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var r = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(t), r.removeAllRanges(), r.addRange(i), e = r.toString()
                }
                return e
            }
        }, function(t, e) {
            function n() {}
            n.prototype = {
                on: function(t, e, n) {
                    var r = this.e || (this.e = {});
                    return (r[t] || (r[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function(t, e, n) {
                    var r = this;

                    function i() {
                        r.off(t, i), e.apply(n, arguments)
                    }
                    return i._ = e, this.on(t, i, n)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {}),
                        r = n[t],
                        i = [];
                    if (r && e)
                        for (var o = 0, a = r.length; o < a; o++) r[o].fn !== e && r[o].fn._ !== e && i.push(r[o]);
                    return i.length ? n[t] = i : delete n[t], this
                }
            }, t.exports = n, t.exports.TinyEmitter = n
        }, function(t, e, n) {
            var r = n(3),
                i = n(4);
            t.exports = function(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!r.string(e)) throw new TypeError("Second argument must be a String");
                if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
                if (r.node(t)) return function(t, e, n) {
                    return t.addEventListener(e, n), {
                        destroy: function() {
                            t.removeEventListener(e, n)
                        }
                    }
                }(t, e, n);
                if (r.nodeList(t)) return function(t, e, n) {
                    return Array.prototype.forEach.call(t, (function(t) {
                        t.addEventListener(e, n)
                    })), {
                        destroy: function() {
                            Array.prototype.forEach.call(t, (function(t) {
                                t.removeEventListener(e, n)
                            }))
                        }
                    }
                }(t, e, n);
                if (r.string(t)) return function(t, e, n) {
                    return i(document.body, t, e, n)
                }(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        }, function(t, e) {
            e.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, e.nodeList = function(t) {
                var n = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
            }, e.string = function(t) {
                return "string" == typeof t || t instanceof String
            }, e.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }, function(t, e, n) {
            var r = n(5);

            function i(t, e, n, r, i) {
                var a = o.apply(this, arguments);
                return t.addEventListener(n, a, i), {
                    destroy: function() {
                        t.removeEventListener(n, a, i)
                    }
                }
            }

            function o(t, e, n, i) {
                return function(n) {
                    n.delegateTarget = r(n.target, e), n.delegateTarget && i.call(t, n)
                }
            }
            t.exports = function(t, e, n, r, o) {
                return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function(t) {
                    return i(t, e, n, r, o)
                })))
            }
        }, function(t, e) {
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var n = Element.prototype;
                n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
            }
            t.exports = function(t, e) {
                for (; t && 9 !== t.nodeType;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        }, function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(0),
                i = n.n(r),
                o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                a = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                s = function() {
                    function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.resolveOptions(e), this.initSelection()
                    }
                    return a(t, [{
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var t = this,
                                e = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return t.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = i()(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = i()(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }
                    }, {
                        key: "handleResult",
                        value: function(t) {
                            this.emitter.emit(t ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake()
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function(t) {
                            if (void 0 !== t) {
                                if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = t
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]), t
                }(),
                u = n(1),
                l = n.n(u),
                c = n(2),
                f = n.n(c),
                h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                p = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                d = function(t) {
                    function e(t, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var r = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return r.resolveOptions(n), r.listenClick(t), r
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), p(e, [{
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === h(t.container) ? t.container : document.body
                        }
                    }, {
                        key: "listenClick",
                        value: function(t) {
                            var e = this;
                            this.listener = f()(t, "click", (function(t) {
                                return e.onClick(t)
                            }))
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            var e = t.delegateTarget || t.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s({
                                action: this.action(e),
                                target: this.target(e),
                                text: this.text(e),
                                container: this.container,
                                trigger: e,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction",
                        value: function(t) {
                            return g("action", t)
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(t) {
                            var e = g("target", t);
                            if (e) return document.querySelector(e)
                        }
                    }, {
                        key: "defaultText",
                        value: function(t) {
                            return g("text", t)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }], [{
                        key: "isSupported",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                e = "string" == typeof t ? [t] : t,
                                n = !!document.queryCommandSupported;
                            return e.forEach((function(t) {
                                n = n && !!document.queryCommandSupported(t)
                            })), n
                        }
                    }]), e
                }(l.a);

            function g(t, e) {
                var n = "data-clipboard-" + t;
                if (e.hasAttribute(n)) return e.getAttribute(n)
            }
            e.default = d
        }]).default
    }, t.exports = r()
}, function(t, e, n) {
    n(132), t.exports = n(331)
}, function(t, e, n) {
    "use strict";
    n(133);
    var r, i = (r = n(305)) && r.__esModule ? r : {
        default: r
    };
    i.default._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), i.default._babelPolyfill = !0
}, function(t, e, n) {
    "use strict";
    n(134), n(277), n(279), n(282), n(284), n(286), n(288), n(290), n(292), n(294), n(296), n(298), n(300), n(304)
}, function(t, e, n) {
    n(135), n(138), n(139), n(140), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(216), n(217), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(82), n(240), n(112), n(241), n(113), n(242), n(243), n(244), n(245), n(114), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(276), t.exports = n(7)
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(13),
        o = n(8),
        a = n(0),
        s = n(11),
        u = n(28).KEY,
        l = n(2),
        c = n(50),
        f = n(39),
        h = n(30),
        p = n(5),
        d = n(63),
        g = n(93),
        v = n(137),
        _ = n(53),
        m = n(3),
        y = n(4),
        b = n(10),
        x = n(15),
        w = n(27),
        k = n(29),
        S = n(34),
        C = n(96),
        T = n(21),
        O = n(52),
        E = n(9),
        L = n(32),
        M = T.f,
        A = E.f,
        N = C.f,
        R = r.Symbol,
        P = r.JSON,
        F = P && P.stringify,
        D = p("_hidden"),
        I = p("toPrimitive"),
        W = {}.propertyIsEnumerable,
        j = c("symbol-registry"),
        H = c("symbols"),
        z = c("op-symbols"),
        B = Object.prototype,
        U = "function" == typeof R && !!O.f,
        V = r.QObject,
        K = !V || !V.prototype || !V.prototype.findChild,
        G = o && l((function() {
            return 7 != S(A({}, "a", {
                get: function() {
                    return A(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(t, e, n) {
            var r = M(B, e);
            r && delete B[e], A(t, e, n), r && t !== B && A(B, e, r)
        } : A,
        $ = function(t) {
            var e = H[t] = S(R.prototype);
            return e._k = t, e
        },
        X = U && "symbol" == typeof R.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof R
        },
        q = function(t, e, n) {
            return t === B && q(z, e, n), m(t), e = w(e, !0), m(n), i(H, e) ? (n.enumerable ? (i(t, D) && t[D][e] && (t[D][e] = !1), n = S(n, {
                enumerable: k(0, !1)
            })) : (i(t, D) || A(t, D, k(1, {})), t[D][e] = !0), G(t, e, n)) : A(t, e, n)
        },
        Y = function(t, e) {
            m(t);
            for (var n, r = v(e = x(e)), i = 0, o = r.length; o > i;) q(t, n = r[i++], e[n]);
            return t
        },
        J = function(t) {
            var e = W.call(this, t = w(t, !0));
            return !(this === B && i(H, t) && !i(z, t)) && (!(e || !i(this, t) || !i(H, t) || i(this, D) && this[D][t]) || e)
        },
        Q = function(t, e) {
            if (t = x(t), e = w(e, !0), t !== B || !i(H, e) || i(z, e)) {
                var n = M(t, e);
                return !n || !i(H, e) || i(t, D) && t[D][e] || (n.enumerable = !0), n
            }
        },
        Z = function(t) {
            for (var e, n = N(x(t)), r = [], o = 0; n.length > o;) i(H, e = n[o++]) || e == D || e == u || r.push(e);
            return r
        },
        tt = function(t) {
            for (var e, n = t === B, r = N(n ? z : x(t)), o = [], a = 0; r.length > a;) !i(H, e = r[a++]) || n && !i(B, e) || o.push(H[e]);
            return o
        };
    U || (s((R = function() {
        if (this instanceof R) throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === B && e.call(z, n), i(this, D) && i(this[D], t) && (this[D][t] = !1), G(this, t, k(1, n))
            };
        return o && K && G(B, t, {
            configurable: !0,
            set: e
        }), $(t)
    }).prototype, "toString", (function() {
        return this._k
    })), T.f = Q, E.f = q, n(35).f = C.f = Z, n(47).f = J, O.f = tt, o && !n(31) && s(B, "propertyIsEnumerable", J, !0), d.f = function(t) {
        return $(p(t))
    }), a(a.G + a.W + a.F * !U, {
        Symbol: R
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) p(et[nt++]);
    for (var rt = L(p.store), it = 0; rt.length > it;) g(rt[it++]);
    a(a.S + a.F * !U, "Symbol", {
        for: function(t) {
            return i(j, t += "") ? j[t] : j[t] = R(t)
        },
        keyFor: function(t) {
            if (!X(t)) throw TypeError(t + " is not a symbol!");
            for (var e in j)
                if (j[e] === t) return e
        },
        useSetter: function() {
            K = !0
        },
        useSimple: function() {
            K = !1
        }
    }), a(a.S + a.F * !U, "Object", {
        create: function(t, e) {
            return void 0 === e ? S(t) : Y(S(t), e)
        },
        defineProperty: q,
        defineProperties: Y,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: tt
    });
    var ot = l((function() {
        O.f(1)
    }));
    a(a.S + a.F * ot, "Object", {
        getOwnPropertySymbols: function(t) {
            return O.f(b(t))
        }
    }), P && a(a.S + a.F * (!U || l((function() {
        var t = R();
        return "[null]" != F([t]) || "{}" != F({
            a: t
        }) || "{}" != F(Object(t))
    }))), "JSON", {
        stringify: function(t) {
            for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
            if (n = e = r[1], (y(e) || void 0 !== t) && !X(t)) return _(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !X(e)) return e
            }), r[1] = e, F.apply(P, r)
        }
    }), R.prototype[I] || n(14)(R.prototype, I, R.prototype.valueOf), f(R, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function(t, e, n) {
    t.exports = n(50)("native-function-to-string", Function.toString)
}, function(t, e, n) {
    var r = n(32),
        i = n(52),
        o = n(47);
    t.exports = function(t) {
        var e = r(t),
            n = i.f;
        if (n)
            for (var a, s = n(t), u = o.f, l = 0; s.length > l;) u.call(t, a = s[l++]) && e.push(a);
        return e
    }
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Object", {
        create: n(34)
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S + r.F * !n(8), "Object", {
        defineProperty: n(9).f
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S + r.F * !n(8), "Object", {
        defineProperties: n(95)
    })
}, function(t, e, n) {
    var r = n(15),
        i = n(21).f;
    n(22)("getOwnPropertyDescriptor", (function() {
        return function(t, e) {
            return i(r(t), e)
        }
    }))
}, function(t, e, n) {
    var r = n(10),
        i = n(36);
    n(22)("getPrototypeOf", (function() {
        return function(t) {
            return i(r(t))
        }
    }))
}, function(t, e, n) {
    var r = n(10),
        i = n(32);
    n(22)("keys", (function() {
        return function(t) {
            return i(r(t))
        }
    }))
}, function(t, e, n) {
    n(22)("getOwnPropertyNames", (function() {
        return n(96).f
    }))
}, function(t, e, n) {
    var r = n(4),
        i = n(28).onFreeze;
    n(22)("freeze", (function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, n) {
    var r = n(4),
        i = n(28).onFreeze;
    n(22)("seal", (function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, n) {
    var r = n(4),
        i = n(28).onFreeze;
    n(22)("preventExtensions", (function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, n) {
    var r = n(4);
    n(22)("isFrozen", (function(t) {
        return function(e) {
            return !r(e) || !!t && t(e)
        }
    }))
}, function(t, e, n) {
    var r = n(4);
    n(22)("isSealed", (function(t) {
        return function(e) {
            return !r(e) || !!t && t(e)
        }
    }))
}, function(t, e, n) {
    var r = n(4);
    n(22)("isExtensible", (function(t) {
        return function(e) {
            return !!r(e) && (!t || t(e))
        }
    }))
}, function(t, e, n) {
    var r = n(0);
    r(r.S + r.F, "Object", {
        assign: n(97)
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Object", {
        is: n(98)
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Object", {
        setPrototypeOf: n(67).set
    })
}, function(t, e, n) {
    "use strict";
    var r = n(48),
        i = {};
    i[n(5)("toStringTag")] = "z", i + "" != "[object z]" && n(11)(Object.prototype, "toString", (function() {
        return "[object " + r(this) + "]"
    }), !0)
}, function(t, e, n) {
    var r = n(0);
    r(r.P, "Function", {
        bind: n(99)
    })
}, function(t, e, n) {
    var r = n(9).f,
        i = Function.prototype,
        o = /^\s*function ([^ (]*)/;
    "name" in i || n(8) && r(i, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(o)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(36),
        o = n(5)("hasInstance"),
        a = Function.prototype;
    o in a || n(9).f(a, o, {
        value: function(t) {
            if ("function" != typeof this || !r(t)) return !1;
            if (!r(this.prototype)) return t instanceof this;
            for (; t = i(t);)
                if (this.prototype === t) return !0;
            return !1
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(101);
    r(r.G + r.F * (parseInt != i), {
        parseInt: i
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(102);
    r(r.G + r.F * (parseFloat != i), {
        parseFloat: i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(13),
        o = n(24),
        a = n(69),
        s = n(27),
        u = n(2),
        l = n(35).f,
        c = n(21).f,
        f = n(9).f,
        h = n(40).trim,
        p = r.Number,
        d = p,
        g = p.prototype,
        v = "Number" == o(n(34)(g)),
        _ = "trim" in String.prototype,
        m = function(t) {
            var e = s(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var n, r, i, o = (e = _ ? e.trim() : h(e, 3)).charCodeAt(0);
                if (43 === o || 45 === o) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === o) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, i = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, i = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var a, u = e.slice(2), l = 0, c = u.length; l < c; l++)
                        if ((a = u.charCodeAt(l)) < 48 || a > i) return NaN;
                    return parseInt(u, r)
                }
            }
            return +e
        };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                n = this;
            return n instanceof p && (v ? u((function() {
                g.valueOf.call(n)
            })) : "Number" != o(n)) ? a(new d(m(e)), n, p) : m(e)
        };
        for (var y, b = n(8) ? l(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; b.length > x; x++) i(d, y = b[x]) && !i(p, y) && f(p, y, c(d, y));
        p.prototype = g, g.constructor = p, n(11)(r, "Number", p)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(20),
        o = n(103),
        a = n(70),
        s = 1..toFixed,
        u = Math.floor,
        l = [0, 0, 0, 0, 0, 0],
        c = "Number.toFixed: incorrect invocation!",
        f = function(t, e) {
            for (var n = -1, r = e; ++n < 6;) r += t * l[n], l[n] = r % 1e7, r = u(r / 1e7)
        },
        h = function(t) {
            for (var e = 6, n = 0; --e >= 0;) n += l[e], l[e] = u(n / t), n = n % t * 1e7
        },
        p = function() {
            for (var t = 6, e = ""; --t >= 0;)
                if ("" !== e || 0 === t || 0 !== l[t]) {
                    var n = String(l[t]);
                    e = "" === e ? n : e + a.call("0", 7 - n.length) + n
                } return e
        },
        d = function(t, e, n) {
            return 0 === e ? n : e % 2 == 1 ? d(t, e - 1, n * t) : d(t * t, e / 2, n)
        };
    r(r.P + r.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(2)((function() {
        s.call({})
    }))), "Number", {
        toFixed: function(t) {
            var e, n, r, s, u = o(this, c),
                l = i(t),
                g = "",
                v = "0";
            if (l < 0 || l > 20) throw RangeError(c);
            if (u != u) return "NaN";
            if (u <= -1e21 || u >= 1e21) return String(u);
            if (u < 0 && (g = "-", u = -u), u > 1e-21)
                if (n = (e = function(t) {
                        for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                        for (; n >= 2;) e += 1, n /= 2;
                        return e
                    }(u * d(2, 69, 1)) - 69) < 0 ? u * d(2, -e, 1) : u / d(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                    for (f(0, n), r = l; r >= 7;) f(1e7, 0), r -= 7;
                    for (f(d(10, r, 1), 0), r = e - 1; r >= 23;) h(1 << 23), r -= 23;
                    h(1 << r), f(1, 1), h(2), v = p()
                } else f(0, n), f(1 << -e, 0), v = p() + a.call("0", l);
            return v = l > 0 ? g + ((s = v.length) <= l ? "0." + a.call("0", l - s) + v : v.slice(0, s - l) + "." + v.slice(s - l)) : g + v
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(2),
        o = n(103),
        a = 1..toPrecision;
    r(r.P + r.F * (i((function() {
        return "1" !== a.call(1, void 0)
    })) || !i((function() {
        a.call({})
    }))), "Number", {
        toPrecision: function(t) {
            var e = o(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t ? a.call(e) : a.call(e, t)
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Number", {
        EPSILON: Math.pow(2, -52)
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(1).isFinite;
    r(r.S, "Number", {
        isFinite: function(t) {
            return "number" == typeof t && i(t)
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Number", {
        isInteger: n(104)
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Number", {
        isNaN: function(t) {
            return t != t
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(104),
        o = Math.abs;
    r(r.S, "Number", {
        isSafeInteger: function(t) {
            return i(t) && o(t) <= 9007199254740991
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(102);
    r(r.S + r.F * (Number.parseFloat != i), "Number", {
        parseFloat: i
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(101);
    r(r.S + r.F * (Number.parseInt != i), "Number", {
        parseInt: i
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(105),
        o = Math.sqrt,
        a = Math.acosh;
    r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
        acosh: function(t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = Math.asinh;
    r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
        asinh: function t(e) {
            return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = Math.atanh;
    r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
        atanh: function(t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(71);
    r(r.S, "Math", {
        cbrt: function(t) {
            return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Math", {
        clz32: function(t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = Math.exp;
    r(r.S, "Math", {
        cosh: function(t) {
            return (i(t = +t) + i(-t)) / 2
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(72);
    r(r.S + r.F * (i != Math.expm1), "Math", {
        expm1: i
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Math", {
        fround: n(180)
    })
}, function(t, e, n) {
    var r = n(71),
        i = Math.pow,
        o = i(2, -52),
        a = i(2, -23),
        s = i(2, 127) * (2 - a),
        u = i(2, -126);
    t.exports = Math.fround || function(t) {
        var e, n, i = Math.abs(t),
            l = r(t);
        return i < u ? l * (i / u / a + 1 / o - 1 / o) * u * a : (n = (e = (1 + a / o) * i) - (e - i)) > s || n != n ? l * (1 / 0) : l * n
    }
}, function(t, e, n) {
    var r = n(0),
        i = Math.abs;
    r(r.S, "Math", {
        hypot: function(t, e) {
            for (var n, r, o = 0, a = 0, s = arguments.length, u = 0; a < s;) u < (n = i(arguments[a++])) ? (o = o * (r = u / n) * r + 1, u = n) : o += n > 0 ? (r = n / u) * r : n;
            return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o)
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = Math.imul;
    r(r.S + r.F * n(2)((function() {
        return -5 != i(4294967295, 5) || 2 != i.length
    })), "Math", {
        imul: function(t, e) {
            var n = +t,
                r = +e,
                i = 65535 & n,
                o = 65535 & r;
            return 0 | i * o + ((65535 & n >>> 16) * o + i * (65535 & r >>> 16) << 16 >>> 0)
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Math", {
        log10: function(t) {
            return Math.log(t) * Math.LOG10E
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Math", {
        log1p: n(105)
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Math", {
        log2: function(t) {
            return Math.log(t) / Math.LN2
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Math", {
        sign: n(71)
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(72),
        o = Math.exp;
    r(r.S + r.F * n(2)((function() {
        return -2e-17 != !Math.sinh(-2e-17)
    })), "Math", {
        sinh: function(t) {
            return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(72),
        o = Math.exp;
    r(r.S, "Math", {
        tanh: function(t) {
            var e = i(t = +t),
                n = i(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t))
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Math", {
        trunc: function(t) {
            return (t > 0 ? Math.floor : Math.ceil)(t)
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(33),
        o = String.fromCharCode,
        a = String.fromCodePoint;
    r(r.S + r.F * (!!a && 1 != a.length), "String", {
        fromCodePoint: function(t) {
            for (var e, n = [], r = arguments.length, a = 0; r > a;) {
                if (e = +arguments[a++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return n.join("")
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(15),
        o = n(6);
    r(r.S, "String", {
        raw: function(t) {
            for (var e = i(t.raw), n = o(e.length), r = arguments.length, a = [], s = 0; n > s;) a.push(String(e[s++])), s < r && a.push(String(arguments[s]));
            return a.join("")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(40)("trim", (function(t) {
        return function() {
            return t(this, 3)
        }
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(73)(!0);
    n(74)(String, "String", (function(t) {
        this._t = String(t), this._i = 0
    }), (function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(73)(!1);
    r(r.P, "String", {
        codePointAt: function(t) {
            return i(this, t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(6),
        o = n(75),
        a = "".endsWith;
    r(r.P + r.F * n(77)("endsWith"), "String", {
        endsWith: function(t) {
            var e = o(this, t, "endsWith"),
                n = arguments.length > 1 ? arguments[1] : void 0,
                r = i(e.length),
                s = void 0 === n ? r : Math.min(i(n), r),
                u = String(t);
            return a ? a.call(e, u, s) : e.slice(s - u.length, s) === u
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(75);
    r(r.P + r.F * n(77)("includes"), "String", {
        includes: function(t) {
            return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.P, "String", {
        repeat: n(70)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(6),
        o = n(75),
        a = "".startsWith;
    r(r.P + r.F * n(77)("startsWith"), "String", {
        startsWith: function(t) {
            var e = o(this, t, "startsWith"),
                n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                r = String(t);
            return a ? a.call(e, r, n) : e.slice(n, n + r.length) === r
        }
    })
}, function(t, e, n) {
    "use strict";
    n(12)("anchor", (function(t) {
        return function(e) {
            return t(this, "a", "name", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("big", (function(t) {
        return function() {
            return t(this, "big", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("blink", (function(t) {
        return function() {
            return t(this, "blink", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("bold", (function(t) {
        return function() {
            return t(this, "b", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("fixed", (function(t) {
        return function() {
            return t(this, "tt", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("fontcolor", (function(t) {
        return function(e) {
            return t(this, "font", "color", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("fontsize", (function(t) {
        return function(e) {
            return t(this, "font", "size", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("italics", (function(t) {
        return function() {
            return t(this, "i", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("link", (function(t) {
        return function(e) {
            return t(this, "a", "href", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("small", (function(t) {
        return function() {
            return t(this, "small", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("strike", (function(t) {
        return function() {
            return t(this, "strike", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("sub", (function(t) {
        return function() {
            return t(this, "sub", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(12)("sup", (function(t) {
        return function() {
            return t(this, "sup", "", "")
        }
    }))
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(10),
        o = n(27);
    r(r.P + r.F * n(2)((function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1
            }
        })
    })), "Date", {
        toJSON: function(t) {
            var e = i(this),
                n = o(e);
            return "number" != typeof n || isFinite(n) ? e.toISOString() : null
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(215);
    r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
        toISOString: i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = Date.prototype.getTime,
        o = Date.prototype.toISOString,
        a = function(t) {
            return t > 9 ? t : "0" + t
        };
    t.exports = r((function() {
        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-50000000000001))
    })) || !r((function() {
        o.call(new Date(NaN))
    })) ? function() {
        if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
        var t = this,
            e = t.getUTCFullYear(),
            n = t.getUTCMilliseconds(),
            r = e < 0 ? "-" : e > 9999 ? "+" : "";
        return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z"
    } : o
}, function(t, e, n) {
    var r = Date.prototype,
        i = r.toString,
        o = r.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(11)(r, "toString", (function() {
        var t = o.call(this);
        return t == t ? i.call(this) : "Invalid Date"
    }))
}, function(t, e, n) {
    var r = n(5)("toPrimitive"),
        i = Date.prototype;
    r in i || n(14)(i, r, n(218))
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(27);
    t.exports = function(t) {
        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
        return i(r(this), "number" != t)
    }
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Array", {
        isArray: n(53)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(18),
        i = n(0),
        o = n(10),
        a = n(107),
        s = n(78),
        u = n(6),
        l = n(79),
        c = n(80);
    i(i.S + i.F * !n(54)((function(t) {
        Array.from(t)
    })), "Array", {
        from: function(t) {
            var e, n, i, f, h = o(t),
                p = "function" == typeof this ? this : Array,
                d = arguments.length,
                g = d > 1 ? arguments[1] : void 0,
                v = void 0 !== g,
                _ = 0,
                m = c(h);
            if (v && (g = r(g, d > 2 ? arguments[2] : void 0, 2)), null == m || p == Array && s(m))
                for (n = new p(e = u(h.length)); e > _; _++) l(n, _, v ? g(h[_], _) : h[_]);
            else
                for (f = m.call(h), n = new p; !(i = f.next()).done; _++) l(n, _, v ? a(f, g, [i.value, _], !0) : i.value);
            return n.length = _, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(79);
    r(r.S + r.F * n(2)((function() {
        function t() {}
        return !(Array.of.call(t) instanceof t)
    })), "Array", {
        of: function() {
            for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) i(n, t, arguments[t++]);
            return n.length = e, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(15),
        o = [].join;
    r(r.P + r.F * (n(46) != Object || !n(17)(o)), "Array", {
        join: function(t) {
            return o.call(i(this), void 0 === t ? "," : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(66),
        o = n(24),
        a = n(33),
        s = n(6),
        u = [].slice;
    r(r.P + r.F * n(2)((function() {
        i && u.call(i)
    })), "Array", {
        slice: function(t, e) {
            var n = s(this.length),
                r = o(this);
            if (e = void 0 === e ? n : e, "Array" == r) return u.call(this, t, e);
            for (var i = a(t, n), l = a(e, n), c = s(l - i), f = new Array(c), h = 0; h < c; h++) f[h] = "String" == r ? this.charAt(i + h) : this[i + h];
            return f
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(19),
        o = n(10),
        a = n(2),
        s = [].sort,
        u = [1, 2, 3];
    r(r.P + r.F * (a((function() {
        u.sort(void 0)
    })) || !a((function() {
        u.sort(null)
    })) || !n(17)(s)), "Array", {
        sort: function(t) {
            return void 0 === t ? s.call(o(this)) : s.call(o(this), i(t))
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(23)(0),
        o = n(17)([].forEach, !0);
    r(r.P + r.F * !o, "Array", {
        forEach: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    var r = n(4),
        i = n(53),
        o = n(5)("species");
    t.exports = function(t) {
        var e;
        return i(t) && ("function" != typeof(e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), r(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(23)(1);
    r(r.P + r.F * !n(17)([].map, !0), "Array", {
        map: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(23)(2);
    r(r.P + r.F * !n(17)([].filter, !0), "Array", {
        filter: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(23)(3);
    r(r.P + r.F * !n(17)([].some, !0), "Array", {
        some: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(23)(4);
    r(r.P + r.F * !n(17)([].every, !0), "Array", {
        every: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(109);
    r(r.P + r.F * !n(17)([].reduce, !0), "Array", {
        reduce: function(t) {
            return i(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(109);
    r(r.P + r.F * !n(17)([].reduceRight, !0), "Array", {
        reduceRight: function(t) {
            return i(this, t, arguments.length, arguments[1], !0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(51)(!1),
        o = [].indexOf,
        a = !!o && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (a || !n(17)(o)), "Array", {
        indexOf: function(t) {
            return a ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(15),
        o = n(20),
        a = n(6),
        s = [].lastIndexOf,
        u = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (u || !n(17)(s)), "Array", {
        lastIndexOf: function(t) {
            if (u) return s.apply(this, arguments) || 0;
            var e = i(this),
                n = a(e.length),
                r = n - 1;
            for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                if (r in e && e[r] === t) return r || 0;
            return -1
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.P, "Array", {
        copyWithin: n(110)
    }), n(37)("copyWithin")
}, function(t, e, n) {
    var r = n(0);
    r(r.P, "Array", {
        fill: n(81)
    }), n(37)("fill")
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(23)(5),
        o = !0;
    "find" in [] && Array(1).find((function() {
        o = !1
    })), r(r.P + r.F * o, "Array", {
        find: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(37)("find")
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(23)(6),
        o = "findIndex",
        a = !0;
    o in [] && Array(1)[o]((function() {
        a = !1
    })), r(r.P + r.F * a, "Array", {
        findIndex: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(37)(o)
}, function(t, e, n) {
    n(42)("Array")
}, function(t, e, n) {
    var r = n(1),
        i = n(69),
        o = n(9).f,
        a = n(35).f,
        s = n(76),
        u = n(55),
        l = r.RegExp,
        c = l,
        f = l.prototype,
        h = /a/g,
        p = /a/g,
        d = new l(h) !== h;
    if (n(8) && (!d || n(2)((function() {
            return p[n(5)("match")] = !1, l(h) != h || l(p) == p || "/a/i" != l(h, "i")
        })))) {
        l = function(t, e) {
            var n = this instanceof l,
                r = s(t),
                o = void 0 === e;
            return !n && r && t.constructor === l && o ? t : i(d ? new c(r && !o ? t.source : t, e) : c((r = t instanceof l) ? t.source : t, r && o ? u.call(t) : e), n ? this : f, l)
        };
        for (var g = function(t) {
                t in l || o(l, t, {
                    configurable: !0,
                    get: function() {
                        return c[t]
                    },
                    set: function(e) {
                        c[t] = e
                    }
                })
            }, v = a(c), _ = 0; v.length > _;) g(v[_++]);
        f.constructor = l, l.prototype = f, n(11)(r, "RegExp", l)
    }
    n(42)("RegExp")
}, function(t, e, n) {
    "use strict";
    n(113);
    var r = n(3),
        i = n(55),
        o = n(8),
        a = /./.toString,
        s = function(t) {
            n(11)(RegExp.prototype, "toString", t, !0)
        };
    n(2)((function() {
        return "/a/b" != a.call({
            source: "a",
            flags: "b"
        })
    })) ? s((function() {
        var t = r(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
    })) : "toString" != a.name && s((function() {
        return a.call(this)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(6),
        o = n(84),
        a = n(56);
    n(57)("match", 1, (function(t, e, n, s) {
        return [function(n) {
            var r = t(this),
                i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
        }, function(t) {
            var e = s(n, t, this);
            if (e.done) return e.value;
            var u = r(t),
                l = String(this);
            if (!u.global) return a(u, l);
            var c = u.unicode;
            u.lastIndex = 0;
            for (var f, h = [], p = 0; null !== (f = a(u, l));) {
                var d = String(f[0]);
                h[p] = d, "" === d && (u.lastIndex = o(l, i(u.lastIndex), c)), p++
            }
            return 0 === p ? null : h
        }]
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(10),
        o = n(6),
        a = n(20),
        s = n(84),
        u = n(56),
        l = Math.max,
        c = Math.min,
        f = Math.floor,
        h = /\$([$&`']|\d\d?|<[^>]*>)/g,
        p = /\$([$&`']|\d\d?)/g;
    n(57)("replace", 2, (function(t, e, n, d) {
        return [function(r, i) {
            var o = t(this),
                a = null == r ? void 0 : r[e];
            return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
        }, function(t, e) {
            var i = d(n, t, this, e);
            if (i.done) return i.value;
            var f = r(t),
                h = String(this),
                p = "function" == typeof e;
            p || (e = String(e));
            var v = f.global;
            if (v) {
                var _ = f.unicode;
                f.lastIndex = 0
            }
            for (var m = [];;) {
                var y = u(f, h);
                if (null === y) break;
                if (m.push(y), !v) break;
                "" === String(y[0]) && (f.lastIndex = s(h, o(f.lastIndex), _))
            }
            for (var b, x = "", w = 0, k = 0; k < m.length; k++) {
                y = m[k];
                for (var S = String(y[0]), C = l(c(a(y.index), h.length), 0), T = [], O = 1; O < y.length; O++) T.push(void 0 === (b = y[O]) ? b : String(b));
                var E = y.groups;
                if (p) {
                    var L = [S].concat(T, C, h);
                    void 0 !== E && L.push(E);
                    var M = String(e.apply(void 0, L))
                } else M = g(S, h, C, T, E, e);
                C >= w && (x += h.slice(w, C) + M, w = C + S.length)
            }
            return x + h.slice(w)
        }];

        function g(t, e, r, o, a, s) {
            var u = r + t.length,
                l = o.length,
                c = p;
            return void 0 !== a && (a = i(a), c = h), n.call(s, c, (function(n, i) {
                var s;
                switch (i.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, r);
                    case "'":
                        return e.slice(u);
                    case "<":
                        s = a[i.slice(1, -1)];
                        break;
                    default:
                        var c = +i;
                        if (0 === c) return n;
                        if (c > l) {
                            var h = f(c / 10);
                            return 0 === h ? n : h <= l ? void 0 === o[h - 1] ? i.charAt(1) : o[h - 1] + i.charAt(1) : n
                        }
                        s = o[c - 1]
                }
                return void 0 === s ? "" : s
            }))
        }
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = n(98),
        o = n(56);
    n(57)("search", 1, (function(t, e, n, a) {
        return [function(n) {
            var r = t(this),
                i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
        }, function(t) {
            var e = a(n, t, this);
            if (e.done) return e.value;
            var s = r(t),
                u = String(this),
                l = s.lastIndex;
            i(l, 0) || (s.lastIndex = 0);
            var c = o(s, u);
            return i(s.lastIndex, l) || (s.lastIndex = l), null === c ? -1 : c.index
        }]
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(76),
        i = n(3),
        o = n(49),
        a = n(84),
        s = n(6),
        u = n(56),
        l = n(83),
        c = n(2),
        f = Math.min,
        h = [].push,
        p = "length",
        d = !c((function() {
            RegExp(4294967295, "y")
        }));
    n(57)("split", 2, (function(t, e, n, c) {
        var g;
        return g = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(t, e) {
            var i = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return n.call(i, t, e);
            for (var o, a, s, u = [], c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, d = void 0 === e ? 4294967295 : e >>> 0, g = new RegExp(t.source, c + "g");
                (o = l.call(g, i)) && !((a = g.lastIndex) > f && (u.push(i.slice(f, o.index)), o[p] > 1 && o.index < i[p] && h.apply(u, o.slice(1)), s = o[0][p], f = a, u[p] >= d));) g.lastIndex === o.index && g.lastIndex++;
            return f === i[p] ? !s && g.test("") || u.push("") : u.push(i.slice(f)), u[p] > d ? u.slice(0, d) : u
        } : "0".split(void 0, 0)[p] ? function(t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function(n, r) {
            var i = t(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : g.call(String(i), n, r)
        }, function(t, e) {
            var r = c(g, t, this, e, g !== n);
            if (r.done) return r.value;
            var l = i(t),
                h = String(this),
                p = o(l, RegExp),
                v = l.unicode,
                _ = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (d ? "y" : "g"),
                m = new p(d ? l : "^(?:" + l.source + ")", _),
                y = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === y) return [];
            if (0 === h.length) return null === u(m, h) ? [h] : [];
            for (var b = 0, x = 0, w = []; x < h.length;) {
                m.lastIndex = d ? x : 0;
                var k, S = u(m, d ? h : h.slice(x));
                if (null === S || (k = f(s(m.lastIndex + (d ? 0 : x)), h.length)) === b) x = a(h, x, v);
                else {
                    if (w.push(h.slice(b, x)), w.length === y) return w;
                    for (var C = 1; C <= S.length - 1; C++)
                        if (w.push(S[C]), w.length === y) return w;
                    x = b = k
                }
            }
            return w.push(h.slice(b)), w
        }]
    }))
}, function(t, e, n) {
    var r = n(1),
        i = n(85).set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        s = r.Promise,
        u = "process" == n(24)(a);
    t.exports = function() {
        var t, e, n, l = function() {
            var r, i;
            for (u && (r = a.domain) && r.exit(); t;) {
                i = t.fn, t = t.next;
                try {
                    i()
                } catch (r) {
                    throw t ? n() : e = void 0, r
                }
            }
            e = void 0, r && r.enter()
        };
        if (u) n = function() {
            a.nextTick(l)
        };
        else if (!o || r.navigator && r.navigator.standalone)
            if (s && s.resolve) {
                var c = s.resolve(void 0);
                n = function() {
                    c.then(l)
                }
            } else n = function() {
                i.call(r, l)
            };
        else {
            var f = !0,
                h = document.createTextNode("");
            new o(l).observe(h, {
                characterData: !0
            }), n = function() {
                h.data = f = !f
            }
        }
        return function(r) {
            var i = {
                fn: r,
                next: void 0
            };
            e && (e.next = i), t || (t = i, n()), e = i
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(117),
        i = n(38);
    t.exports = n(60)("Map", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        get: function(t) {
            var e = r.getEntry(i(this, "Map"), t);
            return e && e.v
        },
        set: function(t, e) {
            return r.def(i(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, r, !0)
}, function(t, e, n) {
    "use strict";
    var r = n(117),
        i = n(38);
    t.exports = n(60)("Set", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function(t) {
            return r.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, r)
}, function(t, e, n) {
    "use strict";
    var r, i = n(1),
        o = n(23)(0),
        a = n(11),
        s = n(28),
        u = n(97),
        l = n(118),
        c = n(4),
        f = n(38),
        h = n(38),
        p = !i.ActiveXObject && "ActiveXObject" in i,
        d = s.getWeak,
        g = Object.isExtensible,
        v = l.ufstore,
        _ = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        },
        m = {
            get: function(t) {
                if (c(t)) {
                    var e = d(t);
                    return !0 === e ? v(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                }
            },
            set: function(t, e) {
                return l.def(f(this, "WeakMap"), t, e)
            }
        },
        y = t.exports = n(60)("WeakMap", _, m, l, !0, !0);
    h && p && (u((r = l.getConstructor(_, "WeakMap")).prototype, m), s.NEED = !0, o(["delete", "has", "get", "set"], (function(t) {
        var e = y.prototype,
            n = e[t];
        a(e, t, (function(e, i) {
            if (c(e) && !g(e)) {
                this._f || (this._f = new r);
                var o = this._f[t](e, i);
                return "set" == t ? this : o
            }
            return n.call(this, e, i)
        }))
    })))
}, function(t, e, n) {
    "use strict";
    var r = n(118),
        i = n(38);
    n(60)("WeakSet", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function(t) {
            return r.def(i(this, "WeakSet"), t, !0)
        }
    }, r, !1, !0)
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(61),
        o = n(86),
        a = n(3),
        s = n(33),
        u = n(6),
        l = n(4),
        c = n(1).ArrayBuffer,
        f = n(49),
        h = o.ArrayBuffer,
        p = o.DataView,
        d = i.ABV && c.isView,
        g = h.prototype.slice,
        v = i.VIEW;
    r(r.G + r.W + r.F * (c !== h), {
        ArrayBuffer: h
    }), r(r.S + r.F * !i.CONSTR, "ArrayBuffer", {
        isView: function(t) {
            return d && d(t) || l(t) && v in t
        }
    }), r(r.P + r.U + r.F * n(2)((function() {
        return !new h(2).slice(1, void 0).byteLength
    })), "ArrayBuffer", {
        slice: function(t, e) {
            if (void 0 !== g && void 0 === e) return g.call(a(this), t);
            for (var n = a(this).byteLength, r = s(t, n), i = s(void 0 === e ? n : e, n), o = new(f(this, h))(u(i - r)), l = new p(this), c = new p(o), d = 0; r < i;) c.setUint8(d++, l.getUint8(r++));
            return o
        }
    }), n(42)("ArrayBuffer")
}, function(t, e, n) {
    var r = n(0);
    r(r.G + r.W + r.F * !n(61).ABV, {
        DataView: n(86).DataView
    })
}, function(t, e, n) {
    n(26)("Int8", 1, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(26)("Uint8", 1, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(26)("Uint8", 1, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }), !0)
}, function(t, e, n) {
    n(26)("Int16", 2, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(26)("Uint16", 2, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(26)("Int32", 4, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(26)("Uint32", 4, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(26)("Float32", 4, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(26)("Float64", 8, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    var r = n(0),
        i = n(19),
        o = n(3),
        a = (n(1).Reflect || {}).apply,
        s = Function.apply;
    r(r.S + r.F * !n(2)((function() {
        a((function() {}))
    })), "Reflect", {
        apply: function(t, e, n) {
            var r = i(t),
                u = o(n);
            return a ? a(r, e, u) : s.call(r, e, u)
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(34),
        o = n(19),
        a = n(3),
        s = n(4),
        u = n(2),
        l = n(99),
        c = (n(1).Reflect || {}).construct,
        f = u((function() {
            function t() {}
            return !(c((function() {}), [], t) instanceof t)
        })),
        h = !u((function() {
            c((function() {}))
        }));
    r(r.S + r.F * (f || h), "Reflect", {
        construct: function(t, e) {
            o(t), a(e);
            var n = arguments.length < 3 ? t : o(arguments[2]);
            if (h && !f) return c(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var r = [null];
                return r.push.apply(r, e), new(l.apply(t, r))
            }
            var u = n.prototype,
                p = i(s(u) ? u : Object.prototype),
                d = Function.apply.call(t, p, e);
            return s(d) ? d : p
        }
    })
}, function(t, e, n) {
    var r = n(9),
        i = n(0),
        o = n(3),
        a = n(27);
    i(i.S + i.F * n(2)((function() {
        Reflect.defineProperty(r.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    })), "Reflect", {
        defineProperty: function(t, e, n) {
            o(t), e = a(e, !0), o(n);
            try {
                return r.f(t, e, n), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(21).f,
        o = n(3);
    r(r.S, "Reflect", {
        deleteProperty: function(t, e) {
            var n = i(o(t), e);
            return !(n && !n.configurable) && delete t[e]
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(3),
        o = function(t) {
            this._t = i(t), this._i = 0;
            var e, n = this._k = [];
            for (e in t) n.push(e)
        };
    n(106)(o, "Object", (function() {
        var t, e = this._k;
        do {
            if (this._i >= e.length) return {
                value: void 0,
                done: !0
            }
        } while (!((t = e[this._i++]) in this._t));
        return {
            value: t,
            done: !1
        }
    })), r(r.S, "Reflect", {
        enumerate: function(t) {
            return new o(t)
        }
    })
}, function(t, e, n) {
    var r = n(21),
        i = n(36),
        o = n(13),
        a = n(0),
        s = n(4),
        u = n(3);
    a(a.S, "Reflect", {
        get: function t(e, n) {
            var a, l, c = arguments.length < 3 ? e : arguments[2];
            return u(e) === c ? e[n] : (a = r.f(e, n)) ? o(a, "value") ? a.value : void 0 !== a.get ? a.get.call(c) : void 0 : s(l = i(e)) ? t(l, n, c) : void 0
        }
    })
}, function(t, e, n) {
    var r = n(21),
        i = n(0),
        o = n(3);
    i(i.S, "Reflect", {
        getOwnPropertyDescriptor: function(t, e) {
            return r.f(o(t), e)
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(36),
        o = n(3);
    r(r.S, "Reflect", {
        getPrototypeOf: function(t) {
            return i(o(t))
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Reflect", {
        has: function(t, e) {
            return e in t
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(3),
        o = Object.isExtensible;
    r(r.S, "Reflect", {
        isExtensible: function(t) {
            return i(t), !o || o(t)
        }
    })
}, function(t, e, n) {
    var r = n(0);
    r(r.S, "Reflect", {
        ownKeys: n(120)
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(3),
        o = Object.preventExtensions;
    r(r.S, "Reflect", {
        preventExtensions: function(t) {
            i(t);
            try {
                return o && o(t), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var r = n(9),
        i = n(21),
        o = n(36),
        a = n(13),
        s = n(0),
        u = n(29),
        l = n(3),
        c = n(4);
    s(s.S, "Reflect", {
        set: function t(e, n, s) {
            var f, h, p = arguments.length < 4 ? e : arguments[3],
                d = i.f(l(e), n);
            if (!d) {
                if (c(h = o(e))) return t(h, n, s, p);
                d = u(0)
            }
            if (a(d, "value")) {
                if (!1 === d.writable || !c(p)) return !1;
                if (f = i.f(p, n)) {
                    if (f.get || f.set || !1 === f.writable) return !1;
                    f.value = s, r.f(p, n, f)
                } else r.f(p, n, u(0, s));
                return !0
            }
            return void 0 !== d.set && (d.set.call(p, s), !0)
        }
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(67);
    i && r(r.S, "Reflect", {
        setPrototypeOf: function(t, e) {
            i.check(t, e);
            try {
                return i.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    n(278), t.exports = n(7).Array.includes
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(51)(!0);
    r(r.P, "Array", {
        includes: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(37)("includes")
}, function(t, e, n) {
    n(280), t.exports = n(7).Array.flatMap
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(281),
        o = n(10),
        a = n(6),
        s = n(19),
        u = n(108);
    r(r.P, "Array", {
        flatMap: function(t) {
            var e, n, r = o(this);
            return s(t), e = a(r.length), n = u(r, 0), i(n, r, r, e, 0, 1, t, arguments[1]), n
        }
    }), n(37)("flatMap")
}, function(t, e, n) {
    "use strict";
    var r = n(53),
        i = n(4),
        o = n(6),
        a = n(18),
        s = n(5)("isConcatSpreadable");
    t.exports = function t(e, n, u, l, c, f, h, p) {
        for (var d, g, v = c, _ = 0, m = !!h && a(h, p, 3); _ < l;) {
            if (_ in u) {
                if (d = m ? m(u[_], _, n) : u[_], g = !1, i(d) && (g = void 0 !== (g = d[s]) ? !!g : r(d)), g && f > 0) v = t(e, n, d, o(d.length), v, f - 1) - 1;
                else {
                    if (v >= 9007199254740991) throw TypeError();
                    e[v] = d
                }
                v++
            }
            _++
        }
        return v
    }
}, function(t, e, n) {
    n(283), t.exports = n(7).String.padStart
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(121),
        o = n(59),
        a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    r(r.P + r.F * a, "String", {
        padStart: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}, function(t, e, n) {
    n(285), t.exports = n(7).String.padEnd
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(121),
        o = n(59),
        a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    r(r.P + r.F * a, "String", {
        padEnd: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}, function(t, e, n) {
    n(287), t.exports = n(7).String.trimLeft
}, function(t, e, n) {
    "use strict";
    n(40)("trimLeft", (function(t) {
        return function() {
            return t(this, 1)
        }
    }), "trimStart")
}, function(t, e, n) {
    n(289), t.exports = n(7).String.trimRight
}, function(t, e, n) {
    "use strict";
    n(40)("trimRight", (function(t) {
        return function() {
            return t(this, 2)
        }
    }), "trimEnd")
}, function(t, e, n) {
    n(291), t.exports = n(63).f("asyncIterator")
}, function(t, e, n) {
    n(93)("asyncIterator")
}, function(t, e, n) {
    n(293), t.exports = n(7).Object.getOwnPropertyDescriptors
}, function(t, e, n) {
    var r = n(0),
        i = n(120),
        o = n(15),
        a = n(21),
        s = n(79);
    r(r.S, "Object", {
        getOwnPropertyDescriptors: function(t) {
            for (var e, n, r = o(t), u = a.f, l = i(r), c = {}, f = 0; l.length > f;) void 0 !== (n = u(r, e = l[f++])) && s(c, e, n);
            return c
        }
    })
}, function(t, e, n) {
    n(295), t.exports = n(7).Object.values
}, function(t, e, n) {
    var r = n(0),
        i = n(122)(!1);
    r(r.S, "Object", {
        values: function(t) {
            return i(t)
        }
    })
}, function(t, e, n) {
    n(297), t.exports = n(7).Object.entries
}, function(t, e, n) {
    var r = n(0),
        i = n(122)(!0);
    r(r.S, "Object", {
        entries: function(t) {
            return i(t)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(114), n(299), t.exports = n(7).Promise.finally
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(7),
        o = n(1),
        a = n(49),
        s = n(116);
    r(r.P + r.R, "Promise", {
        finally: function(t) {
            var e = a(this, i.Promise || o.Promise),
                n = "function" == typeof t;
            return this.then(n ? function(n) {
                return s(e, t()).then((function() {
                    return n
                }))
            } : t, n ? function(n) {
                return s(e, t()).then((function() {
                    throw n
                }))
            } : t)
        }
    })
}, function(t, e, n) {
    n(301), n(302), n(303), t.exports = n(7)
}, function(t, e, n) {
    var r = n(1),
        i = n(0),
        o = n(59),
        a = [].slice,
        s = /MSIE .\./.test(o),
        u = function(t) {
            return function(e, n) {
                var r = arguments.length > 2,
                    i = !!r && a.call(arguments, 2);
                return t(r ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, i)
                } : e, n)
            }
        };
    i(i.G + i.B + i.F * s, {
        setTimeout: u(r.setTimeout),
        setInterval: u(r.setInterval)
    })
}, function(t, e, n) {
    var r = n(0),
        i = n(85);
    r(r.G + r.B, {
        setImmediate: i.set,
        clearImmediate: i.clear
    })
}, function(t, e, n) {
    for (var r = n(82), i = n(32), o = n(11), a = n(1), s = n(14), u = n(41), l = n(5), c = l("iterator"), f = l("toStringTag"), h = u.Array, p = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, d = i(p), g = 0; g < d.length; g++) {
        var v, _ = d[g],
            m = p[_],
            y = a[_],
            b = y && y.prototype;
        if (b && (b[c] || s(b, c, h), b[f] || s(b, f, _), u[_] = h, m))
            for (v in r) b[v] || o(b, v, r[v], !0)
    }
}, function(t, e, n) {
    var r = function(t) {
        "use strict";
        var e = Object.prototype,
            n = e.hasOwnProperty,
            r = "function" == typeof Symbol ? Symbol : {},
            i = r.iterator || "@@iterator",
            o = r.asyncIterator || "@@asyncIterator",
            a = r.toStringTag || "@@toStringTag";

        function s(t, e, n) {
            return Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            s({}, "")
        } catch (t) {
            s = function(t, e, n) {
                return t[e] = n
            }
        }

        function u(t, e, n, r) {
            var i = e && e.prototype instanceof f ? e : f,
                o = Object.create(i.prototype),
                a = new k(r || []);
            return o._invoke = function(t, e, n) {
                var r = "suspendedStart";
                return function(i, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw o;
                        return C()
                    }
                    for (n.method = i, n.arg = o;;) {
                        var a = n.delegate;
                        if (a) {
                            var s = b(a, n);
                            if (s) {
                                if (s === c) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = l(t, e, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield", u.arg === c) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            }
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                    }
                }
            }(t, n, a), o
        }

        function l(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = u;
        var c = {};

        function f() {}

        function h() {}

        function p() {}
        var d = {};
        d[i] = function() {
            return this
        };
        var g = Object.getPrototypeOf,
            v = g && g(g(S([])));
        v && v !== e && n.call(v, i) && (d = v);
        var _ = p.prototype = f.prototype = Object.create(d);

        function m(t) {
            ["next", "throw", "return"].forEach((function(e) {
                s(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function y(t, e) {
            var r;
            this._invoke = function(i, o) {
                function a() {
                    return new e((function(r, a) {
                        ! function r(i, o, a, s) {
                            var u = l(t[i], t, o);
                            if ("throw" !== u.type) {
                                var c = u.arg,
                                    f = c.value;
                                return f && "object" == typeof f && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                    r("next", t, a, s)
                                }), (function(t) {
                                    r("throw", t, a, s)
                                })) : e.resolve(f).then((function(t) {
                                    c.value = t, a(c)
                                }), (function(t) {
                                    return r("throw", t, a, s)
                                }))
                            }
                            s(u.arg)
                        }(i, o, r, a)
                    }))
                }
                return r = r ? r.then(a, a) : a()
            }
        }

        function b(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return c;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return c
            }
            var r = l(n, t.iterator, e.arg);
            if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, c;
            var i = r.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, c) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, c)
        }

        function x(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function w(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function k(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(x, this), this.reset(!0)
        }

        function S(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1,
                        o = function e() {
                            for (; ++r < t.length;)
                                if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return o.next = o
                }
            }
            return {
                next: C
            }
        }

        function C() {
            return {
                value: void 0,
                done: !0
            }
        }
        return h.prototype = _.constructor = p, p.constructor = h, h.displayName = s(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, a, "GeneratorFunction")), t.prototype = Object.create(_), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, m(y.prototype), y.prototype[o] = function() {
            return this
        }, t.AsyncIterator = y, t.async = function(e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new y(u(e, n, r, i), o);
            return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, m(_), s(_, a, "Generator"), _[i] = function() {
            return this
        }, _.toString = function() {
            return "[object Generator]"
        }, t.keys = function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e.reverse(),
                function n() {
                    for (; e.length;) {
                        var r = e.pop();
                        if (r in t) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, t.values = S, k.prototype = {
            constructor: k,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !t)
                    for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function r(n, r) {
                    return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var o = this.tryEntries[i],
                        a = o.completion;
                    if ("root" === o.tryLoc) return r("end");
                    if (o.tryLoc <= this.prev) {
                        var s = n.call(o, "catchLoc"),
                            u = n.call(o, "finallyLoc");
                        if (s && u) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                        } else if (s) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r];
                    if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var o = i;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, c) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), c
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), w(n), c
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            w(n)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, n) {
                return this.delegate = {
                    iterator: S(t),
                    resultName: e,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), c
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = r
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function(t, e, n) {
    n(306), t.exports = n(123).global
}, function(t, e, n) {
    var r = n(307);
    r(r.G, {
        global: n(87)
    })
}, function(t, e, n) {
    var r = n(87),
        i = n(123),
        o = n(308),
        a = n(310),
        s = n(317),
        u = function(t, e, n) {
            var l, c, f, h = t & u.F,
                p = t & u.G,
                d = t & u.S,
                g = t & u.P,
                v = t & u.B,
                _ = t & u.W,
                m = p ? i : i[e] || (i[e] = {}),
                y = m.prototype,
                b = p ? r : d ? r[e] : (r[e] || {}).prototype;
            for (l in p && (n = e), n)(c = !h && b && void 0 !== b[l]) && s(m, l) || (f = c ? b[l] : n[l], m[l] = p && "function" != typeof b[l] ? n[l] : v && c ? o(f, r) : _ && b[l] == f ? function(t) {
                var e = function(e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, r)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype, e
            }(f) : g && "function" == typeof f ? o(Function.call, f) : f, g && ((m.virtual || (m.virtual = {}))[l] = f, t & u.R && y && !y[l] && a(y, l, f)))
        };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function(t, e, n) {
    var r = n(309);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var r = n(311),
        i = n(316);
    t.exports = n(89) ? function(t, e, n) {
        return r.f(t, e, i(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(312),
        i = n(313),
        o = n(315),
        a = Object.defineProperty;
    e.f = n(89) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = o(e, !0), r(n), i) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(88);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e, n) {
    t.exports = !n(89) && !n(124)((function() {
        return 7 != Object.defineProperty(n(314)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(88),
        i = n(87).document,
        o = r(i) && r(i.createElement);
    t.exports = function(t) {
        return o ? i.createElement(t) : {}
    }
}, function(t, e, n) {
    var r = n(88);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e) {
    var n, r, i = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var u, l = [],
        c = !1,
        f = -1;

    function h() {
        c && u && (c = !1, u.length ? l = u.concat(l) : f = -1, l.length && p())
    }

    function p() {
        if (!c) {
            var t = s(h);
            c = !0;
            for (var e = l.length; e;) {
                for (u = l, l = []; ++f < e;) u && u[f].run();
                f = -1, e = l.length
            }
            u = null, c = !1,
                function(t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                    try {
                        r(t)
                    } catch (e) {
                        try {
                            return r.call(null, t)
                        } catch (e) {
                            return r.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function d(t, e) {
        this.fun = t, this.array = e
    }

    function g() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new d(t, e)), 1 !== l.length || c || s(p)
    }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function(t) {
        return []
    }, i.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(t, e, n) {
    ! function(t) {
        "use strict";
        t.defineMode("javascript", (function(e, n) {
            var r, i, o = e.indentUnit,
                a = n.statementIndent,
                s = n.jsonld,
                u = n.json || s,
                l = n.typescript,
                c = n.wordCharacters || /[\w$\xa1-\uffff]/,
                f = function() {
                    function t(t) {
                        return {
                            type: t,
                            style: "keyword"
                        }
                    }
                    var e = t("keyword a"),
                        n = t("keyword b"),
                        r = t("keyword c"),
                        i = t("keyword d"),
                        o = t("operator"),
                        a = {
                            type: "atom",
                            style: "atom"
                        };
                    return {
                        if: t("if"),
                        while: e,
                        with: e,
                        else: n,
                        do: n,
                        try: n,
                        finally: n,
                        return: i,
                        break: i,
                        continue: i,
                        new: t("new"),
                        delete: r,
                        void: r,
                        throw: r,
                        debugger: t("debugger"),
                        var: t("var"),
                        const: t("var"),
                        let: t("var"),
                        function: t("function"),
                        catch: t("catch"),
                        for: t("for"),
                        switch: t("switch"),
                        case: t("case"),
                        default: t("default"),
                        in: o,
                        typeof: o,
                        instanceof: o,
                        true: a,
                        false: a,
                        null: a,
                        undefined: a,
                        NaN: a,
                        Infinity: a,
                        this: t("this"),
                        class: t("class"),
                        super: t("atom"),
                        yield: r,
                        export: t("export"),
                        import: t("import"),
                        extends: r,
                        await: r
                    }
                }(),
                h = /[+\-*&%=<>!?|~^@]/,
                p = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

            function d(t, e, n) {
                return r = t, i = n, e
            }

            function g(t, e) {
                var n, r = t.next();
                if ('"' == r || "'" == r) return e.tokenize = (n = r, function(t, e) {
                    var r, i = !1;
                    if (s && "@" == t.peek() && t.match(p)) return e.tokenize = g, d("jsonld-keyword", "meta");
                    for (; null != (r = t.next()) && (r != n || i);) i = !i && "\\" == r;
                    return i || (e.tokenize = g), d("string", "string")
                }), e.tokenize(t, e);
                if ("." == r && t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return d("number", "number");
                if ("." == r && t.match("..")) return d("spread", "meta");
                if (/[\[\]{}\(\),;\:\.]/.test(r)) return d(r);
                if ("=" == r && t.eat(">")) return d("=>", "operator");
                if ("0" == r && t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return d("number", "number");
                if (/\d/.test(r)) return t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), d("number", "number");
                if ("/" == r) return t.eat("*") ? (e.tokenize = v, v(t, e)) : t.eat("/") ? (t.skipToEnd(), d("comment", "comment")) : $t(t, e, 1) ? (function(t) {
                    for (var e, n = !1, r = !1; null != (e = t.next());) {
                        if (!n) {
                            if ("/" == e && !r) return;
                            "[" == e ? r = !0 : r && "]" == e && (r = !1)
                        }
                        n = !n && "\\" == e
                    }
                }(t), t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), d("regexp", "string-2")) : (t.eat("="), d("operator", "operator", t.current()));
                if ("`" == r) return e.tokenize = _, _(t, e);
                if ("#" == r && "!" == t.peek()) return t.skipToEnd(), d("meta", "meta");
                if ("#" == r && t.eatWhile(c)) return d("variable", "property");
                if ("<" == r && t.match("!--") || "-" == r && t.match("->") && !/\S/.test(t.string.slice(0, t.start))) return t.skipToEnd(), d("comment", "comment");
                if (h.test(r)) return ">" == r && e.lexical && ">" == e.lexical.type || (t.eat("=") ? "!" != r && "=" != r || t.eat("=") : /[<>*+\-|&?]/.test(r) && (t.eat(r), ">" == r && t.eat(r))), "?" == r && t.eat(".") ? d(".") : d("operator", "operator", t.current());
                if (c.test(r)) {
                    t.eatWhile(c);
                    var i = t.current();
                    if ("." != e.lastType) {
                        if (f.propertyIsEnumerable(i)) {
                            var o = f[i];
                            return d(o.type, o.style, i)
                        }
                        if ("async" == i && t.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1)) return d("async", "keyword", i)
                    }
                    return d("variable", "variable", i)
                }
            }

            function v(t, e) {
                for (var n, r = !1; n = t.next();) {
                    if ("/" == n && r) {
                        e.tokenize = g;
                        break
                    }
                    r = "*" == n
                }
                return d("comment", "comment")
            }

            function _(t, e) {
                for (var n, r = !1; null != (n = t.next());) {
                    if (!r && ("`" == n || "$" == n && t.eat("{"))) {
                        e.tokenize = g;
                        break
                    }
                    r = !r && "\\" == n
                }
                return d("quasi", "string-2", t.current())
            }

            function m(t, e) {
                e.fatArrowAt && (e.fatArrowAt = null);
                var n = t.string.indexOf("=>", t.start);
                if (!(n < 0)) {
                    if (l) {
                        var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(t.string.slice(t.start, n));
                        r && (n = r.index)
                    }
                    for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
                        var s = t.string.charAt(a),
                            u = "([{}])".indexOf(s);
                        if (u >= 0 && u < 3) {
                            if (!i) {
                                ++a;
                                break
                            }
                            if (0 == --i) {
                                "(" == s && (o = !0);
                                break
                            }
                        } else if (u >= 3 && u < 6) ++i;
                        else if (c.test(s)) o = !0;
                        else if (/["'\/`]/.test(s))
                            for (;; --a) {
                                if (0 == a) return;
                                if (t.string.charAt(a - 1) == s && "\\" != t.string.charAt(a - 2)) {
                                    a--;
                                    break
                                }
                            } else if (o && !i) {
                                ++a;
                                break
                            }
                    }
                    o && !i && (e.fatArrowAt = a)
                }
            }
            var y = {
                atom: !0,
                number: !0,
                variable: !0,
                string: !0,
                regexp: !0,
                this: !0,
                "jsonld-keyword": !0
            };

            function b(t, e, n, r, i, o) {
                this.indented = t, this.column = e, this.type = n, this.prev = i, this.info = o, null != r && (this.align = r)
            }

            function x(t, e) {
                for (var n = t.localVars; n; n = n.next)
                    if (n.name == e) return !0;
                for (var r = t.context; r; r = r.prev)
                    for (n = r.vars; n; n = n.next)
                        if (n.name == e) return !0
            }
            var w = {
                state: null,
                column: null,
                marked: null,
                cc: null
            };

            function k() {
                for (var t = arguments.length - 1; t >= 0; t--) w.cc.push(arguments[t])
            }

            function S() {
                return k.apply(null, arguments), !0
            }

            function C(t, e) {
                for (var n = e; n; n = n.next)
                    if (n.name == t) return !0;
                return !1
            }

            function T(t) {
                var e = w.state;
                if (w.marked = "def", e.context)
                    if ("var" == e.lexical.info && e.context && e.context.block) {
                        var r = function t(e, n) {
                            if (n) {
                                if (n.block) {
                                    var r = t(e, n.prev);
                                    return r ? r == n.prev ? n : new E(r, n.vars, !0) : null
                                }
                                return C(e, n.vars) ? n : new E(n.prev, new L(e, n.vars), !1)
                            }
                            return null
                        }(t, e.context);
                        if (null != r) return void(e.context = r)
                    } else if (!C(t, e.localVars)) return void(e.localVars = new L(t, e.localVars));
                n.globalVars && !C(t, e.globalVars) && (e.globalVars = new L(t, e.globalVars))
            }

            function O(t) {
                return "public" == t || "private" == t || "protected" == t || "abstract" == t || "readonly" == t
            }

            function E(t, e, n) {
                this.prev = t, this.vars = e, this.block = n
            }

            function L(t, e) {
                this.name = t, this.next = e
            }
            var M = new L("this", new L("arguments", null));

            function A() {
                w.state.context = new E(w.state.context, w.state.localVars, !1), w.state.localVars = M
            }

            function N() {
                w.state.context = new E(w.state.context, w.state.localVars, !0), w.state.localVars = null
            }

            function R() {
                w.state.localVars = w.state.context.vars, w.state.context = w.state.context.prev
            }

            function P(t, e) {
                var n = function() {
                    var n = w.state,
                        r = n.indented;
                    if ("stat" == n.lexical.type) r = n.lexical.indented;
                    else
                        for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
                    n.lexical = new b(r, w.stream.column(), t, null, n.lexical, e)
                };
                return n.lex = !0, n
            }

            function F() {
                var t = w.state;
                t.lexical.prev && (")" == t.lexical.type && (t.indented = t.lexical.indented), t.lexical = t.lexical.prev)
            }

            function D(t) {
                return function e(n) {
                    return n == t ? S() : ";" == t || "}" == n || ")" == n || "]" == n ? k() : S(e)
                }
            }

            function I(t, e) {
                return "var" == t ? S(P("vardef", e), mt, D(";"), F) : "keyword a" == t ? S(P("form"), z, I, F) : "keyword b" == t ? S(P("form"), I, F) : "keyword d" == t ? w.stream.match(/^\s*$/, !1) ? S() : S(P("stat"), U, D(";"), F) : "debugger" == t ? S(D(";")) : "{" == t ? S(P("}"), N, ot, F, R) : ";" == t ? S() : "if" == t ? ("else" == w.state.lexical.info && w.state.cc[w.state.cc.length - 1] == F && w.state.cc.pop()(), S(P("form"), z, I, F, St)) : "function" == t ? S(Et) : "for" == t ? S(P("form"), Ct, I, F) : "class" == t || l && "interface" == e ? (w.marked = "keyword", S(P("form", "class" == t ? t : e), Rt, F)) : "variable" == t ? l && "declare" == e ? (w.marked = "keyword", S(I)) : l && ("module" == e || "enum" == e || "type" == e) && w.stream.match(/^\s*\w/, !1) ? (w.marked = "keyword", "enum" == e ? S(Kt) : "type" == e ? S(Mt, D("operator"), ct, D(";")) : S(P("form"), yt, D("{"), P("}"), ot, F, F)) : l && "namespace" == e ? (w.marked = "keyword", S(P("form"), j, I, F)) : l && "abstract" == e ? (w.marked = "keyword", S(I)) : S(P("stat"), Q) : "switch" == t ? S(P("form"), z, D("{"), P("}", "switch"), N, ot, F, F, R) : "case" == t ? S(j, D(":")) : "default" == t ? S(D(":")) : "catch" == t ? S(P("form"), A, W, I, F, R) : "export" == t ? S(P("stat"), It, F) : "import" == t ? S(P("stat"), jt, F) : "async" == t ? S(I) : "@" == e ? S(j, I) : k(P("stat"), j, D(";"), F)
            }

            function W(t) {
                if ("(" == t) return S(At, D(")"))
            }

            function j(t, e) {
                return B(t, e, !1)
            }

            function H(t, e) {
                return B(t, e, !0)
            }

            function z(t) {
                return "(" != t ? k() : S(P(")"), U, D(")"), F)
            }

            function B(t, e, n) {
                if (w.state.fatArrowAt == w.stream.start) {
                    var r = n ? q : X;
                    if ("(" == t) return S(A, P(")"), rt(At, ")"), F, D("=>"), r, R);
                    if ("variable" == t) return k(A, yt, D("=>"), r, R)
                }
                var i = n ? K : V;
                return y.hasOwnProperty(t) ? S(i) : "function" == t ? S(Et, i) : "class" == t || l && "interface" == e ? (w.marked = "keyword", S(P("form"), Nt, F)) : "keyword c" == t || "async" == t ? S(n ? H : j) : "(" == t ? S(P(")"), U, D(")"), F, i) : "operator" == t || "spread" == t ? S(n ? H : j) : "[" == t ? S(P("]"), Vt, F, i) : "{" == t ? it(tt, "}", null, i) : "quasi" == t ? k(G, i) : "new" == t ? S(function(t) {
                    return function(e) {
                        return "." == e ? S(t ? J : Y) : "variable" == e && l ? S(gt, t ? K : V) : k(t ? H : j)
                    }
                }(n)) : "import" == t ? S(j) : S()
            }

            function U(t) {
                return t.match(/[;\}\)\],]/) ? k() : k(j)
            }

            function V(t, e) {
                return "," == t ? S(U) : K(t, e, !1)
            }

            function K(t, e, n) {
                var r = 0 == n ? V : K,
                    i = 0 == n ? j : H;
                return "=>" == t ? S(A, n ? q : X, R) : "operator" == t ? /\+\+|--/.test(e) || l && "!" == e ? S(r) : l && "<" == e && w.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? S(P(">"), rt(ct, ">"), F, r) : "?" == e ? S(j, D(":"), i) : S(i) : "quasi" == t ? k(G, r) : ";" != t ? "(" == t ? it(H, ")", "call", r) : "." == t ? S(Z, r) : "[" == t ? S(P("]"), U, D("]"), F, r) : l && "as" == e ? (w.marked = "keyword", S(ct, r)) : "regexp" == t ? (w.state.lastType = w.marked = "operator", w.stream.backUp(w.stream.pos - w.stream.start - 1), S(i)) : void 0 : void 0
            }

            function G(t, e) {
                return "quasi" != t ? k() : "${" != e.slice(e.length - 2) ? S(G) : S(j, $)
            }

            function $(t) {
                if ("}" == t) return w.marked = "string-2", w.state.tokenize = _, S(G)
            }

            function X(t) {
                return m(w.stream, w.state), k("{" == t ? I : j)
            }

            function q(t) {
                return m(w.stream, w.state), k("{" == t ? I : H)
            }

            function Y(t, e) {
                if ("target" == e) return w.marked = "keyword", S(V)
            }

            function J(t, e) {
                if ("target" == e) return w.marked = "keyword", S(K)
            }

            function Q(t) {
                return ":" == t ? S(F, I) : k(V, D(";"), F)
            }

            function Z(t) {
                if ("variable" == t) return w.marked = "property", S()
            }

            function tt(t, e) {
                return "async" == t ? (w.marked = "property", S(tt)) : "variable" == t || "keyword" == w.style ? (w.marked = "property", "get" == e || "set" == e ? S(et) : (l && w.state.fatArrowAt == w.stream.start && (n = w.stream.match(/^\s*:\s*/, !1)) && (w.state.fatArrowAt = w.stream.pos + n[0].length), S(nt))) : "number" == t || "string" == t ? (w.marked = s ? "property" : w.style + " property", S(nt)) : "jsonld-keyword" == t ? S(nt) : l && O(e) ? (w.marked = "keyword", S(tt)) : "[" == t ? S(j, at, D("]"), nt) : "spread" == t ? S(H, nt) : "*" == e ? (w.marked = "keyword", S(tt)) : ":" == t ? k(nt) : void 0;
                var n
            }

            function et(t) {
                return "variable" != t ? k(nt) : (w.marked = "property", S(Et))
            }

            function nt(t) {
                return ":" == t ? S(H) : "(" == t ? k(Et) : void 0
            }

            function rt(t, e, n) {
                function r(i, o) {
                    if (n ? n.indexOf(i) > -1 : "," == i) {
                        var a = w.state.lexical;
                        return "call" == a.info && (a.pos = (a.pos || 0) + 1), S((function(n, r) {
                            return n == e || r == e ? k() : k(t)
                        }), r)
                    }
                    return i == e || o == e ? S() : n && n.indexOf(";") > -1 ? k(t) : S(D(e))
                }
                return function(n, i) {
                    return n == e || i == e ? S() : k(t, r)
                }
            }

            function it(t, e, n) {
                for (var r = 3; r < arguments.length; r++) w.cc.push(arguments[r]);
                return S(P(e, n), rt(t, e), F)
            }

            function ot(t) {
                return "}" == t ? S() : k(I, ot)
            }

            function at(t, e) {
                if (l) {
                    if (":" == t) return S(ct);
                    if ("?" == e) return S(at)
                }
            }

            function st(t, e) {
                if (l && (":" == t || "in" == e)) return S(ct)
            }

            function ut(t) {
                if (l && ":" == t) return w.stream.match(/^\s*\w+\s+is\b/, !1) ? S(j, lt, ct) : S(ct)
            }

            function lt(t, e) {
                if ("is" == e) return w.marked = "keyword", S()
            }

            function ct(t, e) {
                return "keyof" == e || "typeof" == e || "infer" == e ? (w.marked = "keyword", S("typeof" == e ? H : ct)) : "variable" == t || "void" == e ? (w.marked = "type", S(dt)) : "|" == e || "&" == e ? S(ct) : "string" == t || "number" == t || "atom" == t ? S(dt) : "[" == t ? S(P("]"), rt(ct, "]", ","), F, dt) : "{" == t ? S(P("}"), rt(ht, "}", ",;"), F, dt) : "(" == t ? S(rt(pt, ")"), ft, dt) : "<" == t ? S(rt(ct, ">"), ct) : void 0
            }

            function ft(t) {
                if ("=>" == t) return S(ct)
            }

            function ht(t, e) {
                return "variable" == t || "keyword" == w.style ? (w.marked = "property", S(ht)) : "?" == e || "number" == t || "string" == t ? S(ht) : ":" == t ? S(ct) : "[" == t ? S(D("variable"), st, D("]"), ht) : "(" == t ? k(Lt, ht) : void 0
            }

            function pt(t, e) {
                return "variable" == t && w.stream.match(/^\s*[?:]/, !1) || "?" == e ? S(pt) : ":" == t ? S(ct) : "spread" == t ? S(pt) : k(ct)
            }

            function dt(t, e) {
                return "<" == e ? S(P(">"), rt(ct, ">"), F, dt) : "|" == e || "." == t || "&" == e ? S(ct) : "[" == t ? S(ct, D("]"), dt) : "extends" == e || "implements" == e ? (w.marked = "keyword", S(ct)) : "?" == e ? S(ct, D(":"), ct) : void 0
            }

            function gt(t, e) {
                if ("<" == e) return S(P(">"), rt(ct, ">"), F, dt)
            }

            function vt() {
                return k(ct, _t)
            }

            function _t(t, e) {
                if ("=" == e) return S(ct)
            }

            function mt(t, e) {
                return "enum" == e ? (w.marked = "keyword", S(Kt)) : k(yt, at, wt, kt)
            }

            function yt(t, e) {
                return l && O(e) ? (w.marked = "keyword", S(yt)) : "variable" == t ? (T(e), S()) : "spread" == t ? S(yt) : "[" == t ? it(xt, "]") : "{" == t ? it(bt, "}") : void 0
            }

            function bt(t, e) {
                return "variable" != t || w.stream.match(/^\s*:/, !1) ? ("variable" == t && (w.marked = "property"), "spread" == t ? S(yt) : "}" == t ? k() : "[" == t ? S(j, D("]"), D(":"), bt) : S(D(":"), yt, wt)) : (T(e), S(wt))
            }

            function xt() {
                return k(yt, wt)
            }

            function wt(t, e) {
                if ("=" == e) return S(H)
            }

            function kt(t) {
                if ("," == t) return S(mt)
            }

            function St(t, e) {
                if ("keyword b" == t && "else" == e) return S(P("form", "else"), I, F)
            }

            function Ct(t, e) {
                return "await" == e ? S(Ct) : "(" == t ? S(P(")"), Tt, F) : void 0
            }

            function Tt(t) {
                return "var" == t ? S(mt, Ot) : "variable" == t ? S(Ot) : k(Ot)
            }

            function Ot(t, e) {
                return ")" == t ? S() : ";" == t ? S(Ot) : "in" == e || "of" == e ? (w.marked = "keyword", S(j, Ot)) : k(j, Ot)
            }

            function Et(t, e) {
                return "*" == e ? (w.marked = "keyword", S(Et)) : "variable" == t ? (T(e), S(Et)) : "(" == t ? S(A, P(")"), rt(At, ")"), F, ut, I, R) : l && "<" == e ? S(P(">"), rt(vt, ">"), F, Et) : void 0
            }

            function Lt(t, e) {
                return "*" == e ? (w.marked = "keyword", S(Lt)) : "variable" == t ? (T(e), S(Lt)) : "(" == t ? S(A, P(")"), rt(At, ")"), F, ut, R) : l && "<" == e ? S(P(">"), rt(vt, ">"), F, Lt) : void 0
            }

            function Mt(t, e) {
                return "keyword" == t || "variable" == t ? (w.marked = "type", S(Mt)) : "<" == e ? S(P(">"), rt(vt, ">"), F) : void 0
            }

            function At(t, e) {
                return "@" == e && S(j, At), "spread" == t ? S(At) : l && O(e) ? (w.marked = "keyword", S(At)) : l && "this" == t ? S(at, wt) : k(yt, at, wt)
            }

            function Nt(t, e) {
                return "variable" == t ? Rt(t, e) : Pt(t, e)
            }

            function Rt(t, e) {
                if ("variable" == t) return T(e), S(Pt)
            }

            function Pt(t, e) {
                return "<" == e ? S(P(">"), rt(vt, ">"), F, Pt) : "extends" == e || "implements" == e || l && "," == t ? ("implements" == e && (w.marked = "keyword"), S(l ? ct : j, Pt)) : "{" == t ? S(P("}"), Ft, F) : void 0
            }

            function Ft(t, e) {
                return "async" == t || "variable" == t && ("static" == e || "get" == e || "set" == e || l && O(e)) && w.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (w.marked = "keyword", S(Ft)) : "variable" == t || "keyword" == w.style ? (w.marked = "property", S(Dt, Ft)) : "number" == t || "string" == t ? S(Dt, Ft) : "[" == t ? S(j, at, D("]"), Dt, Ft) : "*" == e ? (w.marked = "keyword", S(Ft)) : l && "(" == t ? k(Lt, Ft) : ";" == t || "," == t ? S(Ft) : "}" == t ? S() : "@" == e ? S(j, Ft) : void 0
            }

            function Dt(t, e) {
                if ("?" == e) return S(Dt);
                if (":" == t) return S(ct, wt);
                if ("=" == e) return S(H);
                var n = w.state.lexical.prev;
                return k(n && "interface" == n.info ? Lt : Et)
            }

            function It(t, e) {
                return "*" == e ? (w.marked = "keyword", S(Ut, D(";"))) : "default" == e ? (w.marked = "keyword", S(j, D(";"))) : "{" == t ? S(rt(Wt, "}"), Ut, D(";")) : k(I)
            }

            function Wt(t, e) {
                return "as" == e ? (w.marked = "keyword", S(D("variable"))) : "variable" == t ? k(H, Wt) : void 0
            }

            function jt(t) {
                return "string" == t ? S() : "(" == t ? k(j) : k(Ht, zt, Ut)
            }

            function Ht(t, e) {
                return "{" == t ? it(Ht, "}") : ("variable" == t && T(e), "*" == e && (w.marked = "keyword"), S(Bt))
            }

            function zt(t) {
                if ("," == t) return S(Ht, zt)
            }

            function Bt(t, e) {
                if ("as" == e) return w.marked = "keyword", S(Ht)
            }

            function Ut(t, e) {
                if ("from" == e) return w.marked = "keyword", S(j)
            }

            function Vt(t) {
                return "]" == t ? S() : k(rt(H, "]"))
            }

            function Kt() {
                return k(P("form"), yt, D("{"), P("}"), rt(Gt, "}"), F, F)
            }

            function Gt() {
                return k(yt, wt)
            }

            function $t(t, e, n) {
                return e.tokenize == g && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(e.lastType) || "quasi" == e.lastType && /\{\s*$/.test(t.string.slice(0, t.pos - (n || 0)))
            }
            return R.lex = !0, F.lex = !0, {
                startState: function(t) {
                    var e = {
                        tokenize: g,
                        lastType: "sof",
                        cc: [],
                        lexical: new b((t || 0) - o, 0, "block", !1),
                        localVars: n.localVars,
                        context: n.localVars && new E(null, null, !1),
                        indented: t || 0
                    };
                    return n.globalVars && "object" == typeof n.globalVars && (e.globalVars = n.globalVars), e
                },
                token: function(t, e) {
                    if (t.sol() && (e.lexical.hasOwnProperty("align") || (e.lexical.align = !1), e.indented = t.indentation(), m(t, e)), e.tokenize != v && t.eatSpace()) return null;
                    var n = e.tokenize(t, e);
                    return "comment" == r ? n : (e.lastType = "operator" != r || "++" != i && "--" != i ? r : "incdec", function(t, e, n, r, i) {
                        var o = t.cc;
                        for (w.state = t, w.stream = i, w.marked = null, w.cc = o, w.style = e, t.lexical.hasOwnProperty("align") || (t.lexical.align = !0);;)
                            if ((o.length ? o.pop() : u ? j : I)(n, r)) {
                                for (; o.length && o[o.length - 1].lex;) o.pop()();
                                return w.marked ? w.marked : "variable" == n && x(t, r) ? "variable-2" : e
                            }
                    }(e, n, r, i, t))
                },
                indent: function(e, r) {
                    if (e.tokenize == v) return t.Pass;
                    if (e.tokenize != g) return 0;
                    var i, s = r && r.charAt(0),
                        u = e.lexical;
                    if (!/^\s*else\b/.test(r))
                        for (var l = e.cc.length - 1; l >= 0; --l) {
                            var c = e.cc[l];
                            if (c == F) u = u.prev;
                            else if (c != St) break
                        }
                    for (;
                        ("stat" == u.type || "form" == u.type) && ("}" == s || (i = e.cc[e.cc.length - 1]) && (i == V || i == K) && !/^[,\.=+\-*:?[\(]/.test(r));) u = u.prev;
                    a && ")" == u.type && "stat" == u.prev.type && (u = u.prev);
                    var f = u.type,
                        p = s == f;
                    return "vardef" == f ? u.indented + ("operator" == e.lastType || "," == e.lastType ? u.info.length + 1 : 0) : "form" == f && "{" == s ? u.indented : "form" == f ? u.indented + o : "stat" == f ? u.indented + (function(t, e) {
                        return "operator" == t.lastType || "," == t.lastType || h.test(e.charAt(0)) || /[,.]/.test(e.charAt(0))
                    }(e, r) ? a || o : 0) : "switch" != u.info || p || 0 == n.doubleIndentSwitch ? u.align ? u.column + (p ? 0 : 1) : u.indented + (p ? 0 : o) : u.indented + (/^(?:case|default)\b/.test(r) ? o : 2 * o)
                },
                electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                blockCommentStart: u ? null : "/*",
                blockCommentEnd: u ? null : "*/",
                blockCommentContinue: u ? null : " * ",
                lineComment: u ? null : "//",
                fold: "brace",
                closeBrackets: "()[]{}''\"\"``",
                helperType: u ? "json" : "javascript",
                jsonldMode: s,
                jsonMode: u,
                expressionAllowed: $t,
                skipExpression: function(t) {
                    var e = t.cc[t.cc.length - 1];
                    e != j && e != H || t.cc.pop()
                }
            }
        })), t.registerHelper("wordChars", "javascript", /[\w$]/), t.defineMIME("text/javascript", "javascript"), t.defineMIME("text/ecmascript", "javascript"), t.defineMIME("application/javascript", "javascript"), t.defineMIME("application/x-javascript", "javascript"), t.defineMIME("application/ecmascript", "javascript"), t.defineMIME("application/json", {
            name: "javascript",
            json: !0
        }), t.defineMIME("application/x-json", {
            name: "javascript",
            json: !0
        }), t.defineMIME("application/ld+json", {
            name: "javascript",
            jsonld: !0
        }), t.defineMIME("text/typescript", {
            name: "javascript",
            typescript: !0
        }), t.defineMIME("application/typescript", {
            name: "javascript",
            typescript: !0
        })
    }(n(16))
}, function(t, e, n) {
    ! function(t) {
        "use strict";
        t.defineOption("foldGutter", !1, (function(e, r, i) {
            var o;
            i && i != t.Init && (e.clearGutter(e.state.foldGutter.options.gutter), e.state.foldGutter = null, e.off("gutterClick", u), e.off("changes", l), e.off("viewportChange", c), e.off("fold", f), e.off("unfold", f), e.off("swapDoc", l)), r && (e.state.foldGutter = new n((!0 === (o = r) && (o = {}), null == o.gutter && (o.gutter = "CodeMirror-foldgutter"), null == o.indicatorOpen && (o.indicatorOpen = "CodeMirror-foldgutter-open"), null == o.indicatorFolded && (o.indicatorFolded = "CodeMirror-foldgutter-folded"), o)), s(e), e.on("gutterClick", u), e.on("changes", l), e.on("viewportChange", c), e.on("fold", f), e.on("unfold", f), e.on("swapDoc", l))
        }));
        var e = t.Pos;

        function n(t) {
            this.options = t, this.from = this.to = 0
        }

        function r(t, n) {
            for (var r = t.findMarks(e(n, 0), e(n + 1, 0)), i = 0; i < r.length; ++i)
                if (r[i].__isFold) {
                    var o = r[i].find(-1);
                    if (o && o.line === n) return r[i]
                }
        }

        function i(t) {
            if ("string" == typeof t) {
                var e = document.createElement("div");
                return e.className = t + " CodeMirror-guttermarker-subtle", e
            }
            return t.cloneNode(!0)
        }

        function o(t, n, o) {
            var s = t.state.foldGutter.options,
                u = n - 1,
                l = t.foldOption(s, "minFoldSize"),
                c = t.foldOption(s, "rangeFinder"),
                f = "string" == typeof s.indicatorFolded && a(s.indicatorFolded),
                h = "string" == typeof s.indicatorOpen && a(s.indicatorOpen);
            t.eachLine(n, o, (function(n) {
                ++u;
                var o = null,
                    a = n.gutterMarkers;
                if (a && (a = a[s.gutter]), r(t, u)) {
                    if (f && a && f.test(a.className)) return;
                    o = i(s.indicatorFolded)
                } else {
                    var p = e(u, 0),
                        d = c && c(t, p);
                    if (d && d.to.line - d.from.line >= l) {
                        if (h && a && h.test(a.className)) return;
                        o = i(s.indicatorOpen)
                    }
                }(o || a) && t.setGutterMarker(n, s.gutter, o)
            }))
        }

        function a(t) {
            return new RegExp("(^|\\s)" + t + "(?:$|\\s)\\s*")
        }

        function s(t) {
            var e = t.getViewport(),
                n = t.state.foldGutter;
            n && (t.operation((function() {
                o(t, e.from, e.to)
            })), n.from = e.from, n.to = e.to)
        }

        function u(t, n, i) {
            var o = t.state.foldGutter;
            if (o) {
                var a = o.options;
                if (i == a.gutter) {
                    var s = r(t, n);
                    s ? s.clear() : t.foldCode(e(n, 0), a)
                }
            }
        }

        function l(t) {
            var e = t.state.foldGutter;
            if (e) {
                var n = e.options;
                e.from = e.to = 0, clearTimeout(e.changeUpdate), e.changeUpdate = setTimeout((function() {
                    s(t)
                }), n.foldOnChangeTimeSpan || 600)
            }
        }

        function c(t) {
            var e = t.state.foldGutter;
            if (e) {
                var n = e.options;
                clearTimeout(e.changeUpdate), e.changeUpdate = setTimeout((function() {
                    var n = t.getViewport();
                    e.from == e.to || n.from - e.to > 20 || e.from - n.to > 20 ? s(t) : t.operation((function() {
                        n.from < e.from && (o(t, n.from, e.from), e.from = n.from), n.to > e.to && (o(t, e.to, n.to), e.to = n.to)
                    }))
                }), n.updateViewportTimeSpan || 400)
            }
        }

        function f(t, e) {
            var n = t.state.foldGutter;
            if (n) {
                var r = e.line;
                r >= n.from && r < n.to && o(t, r, r + 1)
            }
        }
    }(n(16), n(125))
}, function(t, e, n) {
    ! function(t) {
        "use strict";
        t.registerHelper("fold", "brace", (function(e, n) {
            var r, i = n.line,
                o = e.getLine(i);

            function a(a) {
                for (var s = n.ch, u = 0;;) {
                    var l = s <= 0 ? -1 : o.lastIndexOf(a, s - 1);
                    if (-1 != l) {
                        if (1 == u && l < n.ch) break;
                        if (r = e.getTokenTypeAt(t.Pos(i, l + 1)), !/^(comment|string)/.test(r)) return l + 1;
                        s = l - 1
                    } else {
                        if (1 == u) break;
                        u = 1, s = o.length
                    }
                }
            }
            var s = "{",
                u = "}",
                l = a("{");
            if (null == l && (s = "[", u = "]", l = a("[")), null != l) {
                var c, f, h = 1,
                    p = e.lastLine();
                t: for (var d = i; d <= p; ++d)
                    for (var g = e.getLine(d), v = d == i ? l : 0;;) {
                        var _ = g.indexOf(s, v),
                            m = g.indexOf(u, v);
                        if (_ < 0 && (_ = g.length), m < 0 && (m = g.length), (v = Math.min(_, m)) == g.length) break;
                        if (e.getTokenTypeAt(t.Pos(d, v + 1)) == r)
                            if (v == _) ++h;
                            else if (!--h) {
                            c = d, f = v;
                            break t
                        }++v
                    }
                if (null != c && i != c) return {
                    from: t.Pos(i, l),
                    to: t.Pos(c, f)
                }
            }
        })), t.registerHelper("fold", "import", (function(e, n) {
            function r(n) {
                if (n < e.firstLine() || n > e.lastLine()) return null;
                var r = e.getTokenAt(t.Pos(n, 1));
                if (/\S/.test(r.string) || (r = e.getTokenAt(t.Pos(n, r.end + 1))), "keyword" != r.type || "import" != r.string) return null;
                for (var i = n, o = Math.min(e.lastLine(), n + 10); i <= o; ++i) {
                    var a = e.getLine(i).indexOf(";");
                    if (-1 != a) return {
                        startCh: r.end,
                        end: t.Pos(i, a)
                    }
                }
            }
            var i, o = n.line,
                a = r(o);
            if (!a || r(o - 1) || (i = r(o - 2)) && i.end.line == o - 1) return null;
            for (var s = a.end;;) {
                var u = r(s.line + 1);
                if (null == u) break;
                s = u.end
            }
            return {
                from: e.clipPos(t.Pos(o, a.startCh + 1)),
                to: s
            }
        })), t.registerHelper("fold", "include", (function(e, n) {
            function r(n) {
                if (n < e.firstLine() || n > e.lastLine()) return null;
                var r = e.getTokenAt(t.Pos(n, 1));
                return /\S/.test(r.string) || (r = e.getTokenAt(t.Pos(n, r.end + 1))), "meta" == r.type && "#include" == r.string.slice(0, 8) ? r.start + 8 : void 0
            }
            var i = n.line,
                o = r(i);
            if (null == o || null != r(i - 1)) return null;
            for (var a = i; null != r(a + 1);) ++a;
            return {
                from: t.Pos(i, o + 1),
                to: e.clipPos(t.Pos(a))
            }
        }))
    }(n(16))
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
    ! function(t) {
        "use strict";

        function e() {
            this.posFrom = this.posTo = this.lastQuery = this.query = null, this.overlay = null
        }

        function n(t) {
            return t.state.search || (t.state.search = new e)
        }

        function r(t) {
            return "string" == typeof t && t == t.toLowerCase()
        }

        function i(t, e, n) {
            return t.getSearchCursor(e, n, {
                caseFold: r(e),
                multiline: !0
            })
        }

        function o(t, e, n, r, i) {
            t.openDialog ? t.openDialog(e, i, {
                value: r,
                selectValueOnOpen: !0
            }) : i(prompt(n, r))
        }

        function a(t) {
            return t.replace(/\\([nrt\\])/g, (function(t, e) {
                return "n" == e ? "\n" : "r" == e ? "\r" : "t" == e ? "\t" : "\\" == e ? "\\" : t
            }))
        }

        function s(t) {
            var e = t.match(/^\/(.*)\/([a-z]*)$/);
            if (e) try {
                t = new RegExp(e[1], -1 == e[2].indexOf("i") ? "" : "i")
            } catch (t) {} else t = a(t);
            return ("string" == typeof t ? "" == t : t.test("")) && (t = /x^/), t
        }

        function u(t, e, n) {
            e.queryText = n, e.query = s(n), t.removeOverlay(e.overlay, r(e.query)), e.overlay = function(t, e) {
                return "string" == typeof t ? t = new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), e ? "gi" : "g") : t.global || (t = new RegExp(t.source, t.ignoreCase ? "gi" : "g")), {
                    token: function(e) {
                        t.lastIndex = e.pos;
                        var n = t.exec(e.string);
                        if (n && n.index == e.pos) return e.pos += n[0].length || 1, "searching";
                        n ? e.pos = n.index : e.skipToEnd()
                    }
                }
            }(e.query, r(e.query)), t.addOverlay(e.overlay), t.showMatchesOnScrollbar && (e.annotate && (e.annotate.clear(), e.annotate = null), e.annotate = t.showMatchesOnScrollbar(e.query, r(e.query)))
        }

        function l(e, r, i, a) {
            var s = n(e);
            if (s.query) return c(e, r);
            var l = e.getSelection() || s.lastQuery;
            if (l instanceof RegExp && "x^" == l.source && (l = null), i && e.openDialog) {
                var p = null,
                    d = function(n, r) {
                        t.e_stop(r), n && (n != s.queryText && (u(e, s, n), s.posFrom = s.posTo = e.getCursor()), p && (p.style.opacity = 1), c(e, r.shiftKey, (function(t, n) {
                            var r;
                            n.line < 3 && document.querySelector && (r = e.display.wrapper.querySelector(".CodeMirror-dialog")) && r.getBoundingClientRect().bottom - 4 > e.cursorCoords(n, "window").top && ((p = r).style.opacity = .4)
                        })))
                    };
                ! function(t, e, n, r, i) {
                    t.openDialog(e, r, {
                        value: n,
                        selectValueOnOpen: !0,
                        closeOnEnter: !1,
                        onClose: function() {
                            f(t)
                        },
                        onKeyDown: i
                    })
                }(e, h(e), l, d, (function(r, i) {
                    var o = t.keyName(r),
                        a = e.getOption("extraKeys"),
                        s = a && a[o] || t.keyMap[e.getOption("keyMap")][o];
                    "findNext" == s || "findPrev" == s || "findPersistentNext" == s || "findPersistentPrev" == s ? (t.e_stop(r), u(e, n(e), i), e.execCommand(s)) : "find" != s && "findPersistent" != s || (t.e_stop(r), d(i, r))
                })), a && l && (u(e, s, l), c(e, r))
            } else o(e, h(e), "Search for:", l, (function(t) {
                t && !s.query && e.operation((function() {
                    u(e, s, t), s.posFrom = s.posTo = e.getCursor(), c(e, r)
                }))
            }))
        }

        function c(e, r, o) {
            e.operation((function() {
                var a = n(e),
                    s = i(e, a.query, r ? a.posFrom : a.posTo);
                (s.find(r) || (s = i(e, a.query, r ? t.Pos(e.lastLine()) : t.Pos(e.firstLine(), 0))).find(r)) && (e.setSelection(s.from(), s.to()), e.scrollIntoView({
                    from: s.from(),
                    to: s.to()
                }, 20), a.posFrom = s.from(), a.posTo = s.to(), o && o(s.from(), s.to()))
            }))
        }

        function f(t) {
            t.operation((function() {
                var e = n(t);
                e.lastQuery = e.query, e.query && (e.query = e.queryText = null, t.removeOverlay(e.overlay), e.annotate && (e.annotate.clear(), e.annotate = null))
            }))
        }

        function h(t) {
            return '<span class="CodeMirror-search-label">' + t.phrase("Search:") + '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' + t.phrase("(Use /re/ syntax for regexp search)") + "</span>"
        }

        function p(t, e, n) {
            t.operation((function() {
                for (var r = i(t, e); r.findNext();)
                    if ("string" != typeof e) {
                        var o = t.getRange(r.from(), r.to()).match(e);
                        r.replace(n.replace(/\$(\d)/g, (function(t, e) {
                            return o[e]
                        })))
                    } else r.replace(n)
            }))
        }

        function d(t, e) {
            if (!t.getOption("readOnly")) {
                var r = t.getSelection() || n(t).lastQuery,
                    u = '<span class="CodeMirror-search-label">' + (e ? t.phrase("Replace all:") : t.phrase("Replace:")) + "</span>";
                o(t, u + function(t) {
                    return ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' + t.phrase("(Use /re/ syntax for regexp search)") + "</span>"
                }(t), u, r, (function(n) {
                    n && (n = s(n), o(t, function(t) {
                        return '<span class="CodeMirror-search-label">' + t.phrase("With:") + '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/>'
                    }(t), t.phrase("Replace with:"), "", (function(r) {
                        if (r = a(r), e) p(t, n, r);
                        else {
                            f(t);
                            var o = i(t, n, t.getCursor("from")),
                                s = function() {
                                    var e, a = o.from();
                                    !(e = o.findNext()) && (o = i(t, n), !(e = o.findNext()) || a && o.from().line == a.line && o.from().ch == a.ch) || (t.setSelection(o.from(), o.to()), t.scrollIntoView({
                                        from: o.from(),
                                        to: o.to()
                                    }), function(t, e, n, r) {
                                        t.openConfirm ? t.openConfirm(e, r) : confirm(n) && r[0]()
                                    }(t, function(t) {
                                        return '<span class="CodeMirror-search-label">' + t.phrase("Replace?") + "</span> <button>" + t.phrase("Yes") + "</button> <button>" + t.phrase("No") + "</button> <button>" + t.phrase("All") + "</button> <button>" + t.phrase("Stop") + "</button> "
                                    }(t), t.phrase("Replace?"), [function() {
                                        u(e)
                                    }, s, function() {
                                        p(t, n, r)
                                    }]))
                                },
                                u = function(t) {
                                    o.replace("string" == typeof n ? r : r.replace(/\$(\d)/g, (function(e, n) {
                                        return t[n]
                                    }))), s()
                                };
                            s()
                        }
                    })))
                }))
            }
        }
        t.commands.find = function(t) {
            f(t), l(t)
        }, t.commands.findPersistent = function(t) {
            f(t), l(t, !1, !0)
        }, t.commands.findPersistentNext = function(t) {
            l(t, !1, !0, !0)
        }, t.commands.findPersistentPrev = function(t) {
            l(t, !0, !0, !0)
        }, t.commands.findNext = l, t.commands.findPrev = function(t) {
            l(t, !0)
        }, t.commands.clearSearch = f, t.commands.replace = d, t.commands.replaceAll = function(t) {
            d(t, !0)
        }
    }(n(16), n(91), n(90))
}, function(t, e, n) {
    ! function(t) {
        "use strict";

        function e(t, e, n, r) {
            this.cm = t, this.options = r;
            var i = {
                listenForChanges: !1
            };
            for (var o in r) i[o] = r[o];
            i.className || (i.className = "CodeMirror-search-match"), this.annotation = t.annotateScrollbar(i), this.query = e, this.caseFold = n, this.gap = {
                from: t.firstLine(),
                to: t.lastLine() + 1
            }, this.matches = [], this.update = null, this.findMatches(), this.annotation.update(this.matches);
            var a = this;
            t.on("change", this.changeHandler = function(t, e) {
                a.onChange(e)
            })
        }

        function n(t, e, n) {
            return t <= e ? t : Math.max(e, t + n)
        }
        t.defineExtension("showMatchesOnScrollbar", (function(t, n, r) {
            return "string" == typeof r && (r = {
                className: r
            }), r || (r = {}), new e(this, t, n, r)
        })), e.prototype.findMatches = function() {
            if (this.gap) {
                for (var e = 0; e < this.matches.length && !((i = this.matches[e]).from.line >= this.gap.to); e++) i.to.line >= this.gap.from && this.matches.splice(e--, 1);
                for (var n = this.cm.getSearchCursor(this.query, t.Pos(this.gap.from, 0), {
                        caseFold: this.caseFold,
                        multiline: this.options.multiline
                    }), r = this.options && this.options.maxMatches || 1e3; n.findNext();) {
                    var i;
                    if ((i = {
                            from: n.from(),
                            to: n.to()
                        }).from.line >= this.gap.to) break;
                    if (this.matches.splice(e++, 0, i), this.matches.length > r) break
                }
                this.gap = null
            }
        }, e.prototype.onChange = function(e) {
            var r = e.from.line,
                i = t.changeEnd(e).line,
                o = i - e.to.line;
            if (this.gap ? (this.gap.from = Math.min(n(this.gap.from, r, o), e.from.line), this.gap.to = Math.max(n(this.gap.to, r, o), e.from.line)) : this.gap = {
                    from: e.from.line,
                    to: i + 1
                }, o)
                for (var a = 0; a < this.matches.length; a++) {
                    var s = this.matches[a],
                        u = n(s.from.line, r, o);
                    u != s.from.line && (s.from = t.Pos(u, s.from.ch));
                    var l = n(s.to.line, r, o);
                    l != s.to.line && (s.to = t.Pos(l, s.to.ch))
                }
            clearTimeout(this.update);
            var c = this;
            this.update = setTimeout((function() {
                c.updateAfterChange()
            }), 250)
        }, e.prototype.updateAfterChange = function() {
            this.findMatches(), this.annotation.update(this.matches)
        }, e.prototype.clear = function() {
            this.cm.off("change", this.changeHandler), this.annotation.clear()
        }
    }(n(16), n(91), n(126))
}, function(t, e, n) {
    ! function(t) {
        "use strict";

        function e(t, e) {
            var n = Number(e);
            return /^[-+]/.test(e) ? t.getCursor().line + n : n - 1
        }
        t.commands.jumpToLine = function(t) {
            var n = t.getCursor();
            ! function(t, e, n, r, i) {
                t.openDialog ? t.openDialog(e, i, {
                    value: r,
                    selectValueOnOpen: !0
                }) : i(prompt(n, r))
            }(t, function(t) {
                return t.phrase("Jump to line:") + ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' + t.phrase("(Use line:column or scroll% syntax)") + "</span>"
            }(t), t.phrase("Jump to line:"), n.line + 1 + ":" + n.ch, (function(r) {
                var i;
                if (r)
                    if (i = /^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(r)) t.setCursor(e(t, i[1]), Number(i[2]));
                    else if (i = /^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(r)) {
                    var o = Math.round(t.lineCount() * Number(i[1]) / 100);
                    /^[-+]/.test(i[1]) && (o = n.line + o + 1), t.setCursor(o - 1, n.ch)
                } else(i = /^\s*\:?\s*([\+\-]?\d+)\s*/.exec(r)) && t.setCursor(e(t, i[1]), n.ch)
            }))
        }, t.keyMap.default["Alt-G"] = "jumpToLine"
    }(n(16), n(90))
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(16),
        i = n.n(r),
        o = n(127),
        a = n.n(o),
        s = n(128),
        u = n.n(s),
        l = n(129),
        c = n.n(l),
        f = n(130),
        h = n.n(f),
        p = n(45),
        d = n.n(p);
    n(319), n(125), n(320), n(321), n(322), n(323), n(324), n(90), n(91), n(325), n(126), n(326), n(327), n(328), n(329), n(330);

    function g(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || v(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function v(t, e) {
        if (t) {
            if ("string" == typeof t) return _(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(t, e) : void 0
        }
    }

    function _(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function m() {
        var t = window.location.search,
            e = {},
            n = t.replace("?", "").split("&");
        if (!t) return e;
        var r, i = function(t, e) {
            var n;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (n = v(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0,
                        i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0,
                s = !1;
            return {
                s: function() {
                    n = t[Symbol.iterator]()
                },
                n: function() {
                    var t = n.next();
                    return a = t.done, t
                },
                e: function(t) {
                    s = !0, o = t
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }(n);
        try {
            for (i.s(); !(r = i.n()).done;) {
                var o = g(r.value.split("="), 2),
                    a = o[0],
                    s = o[1];
                e[decodeURIComponent(a)] = decodeURIComponent(s || null)
            }
        } catch (t) {
            i.e(t)
        } finally {
            i.f()
        }
        return e
    }

    function y(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
            if (Array.isArray(t) || (n = function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return b(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
            s = !1;
        return {
            s: function() {
                n = t[Symbol.iterator]()
            },
            n: function() {
                var t = n.next();
                return a = t.done, t
            },
            e: function(t) {
                s = !0, o = t
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function x(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var w = window.document,
        k = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = this.form = w.forms.main,
                    n = this.query = m();
                this.initEditor().registerEvents(), Object.defineProperty(this, "code", {
                    get: function() {
                        return this.editor.getValue()
                    },
                    set: function(t) {
                        e.code.value = t, this.editor.setValue(t)
                    }
                });
                var r = void 0 !== window.localStorage.onloadJSONParameter ? window.localStorage.onloadJSONParameter : n.json;
                r && (this.code = r, window.localStorage.removeItem("onloadJSONParameter"), this.go())
            }
            var e, n, r;
            return e = t, (n = [{
                key: "registerEvents",
                value: function() {
                    var t = this,
                        e = d.a.one(".copy");
                    window.addEventListener("hashchange", (function() {
                        var e = t.query = m();
                        e.json && (t.code = e.json), t.go()
                    })), this.editor.on("change", (function() {
                        return t.highlightErrorLine(null)
                    })), this.form.addEventListener("submit", (function(e) {
                        e.preventDefault(), t.go()
                    })), this.form.addEventListener("reset", (function(e) {
                        e.preventDefault(), t.code = "", d.a.one("#result-container").classList.remove("shown")
                    })), w.addEventListener("keyup", (function(e) {
                        e.ctrlKey && 13 === e.keyCode && t.go()
                    })), e.addEventListener("click", (function(t) {
                        return t.preventDefault()
                    }));
                    var n, r = y(d()("[data-ga]"));
                    try {
                        var i = function() {
                            var t = n.value;
                            t.addEventListener("click", (function() {
                            }))
                        };
                        for (r.s(); !(n = r.n()).done;) i()
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    return new h.a(e, {
                        text: function() {
                            return t.code
                        }
                    }), this
                }
            }, {
                key: "initEditor",
                value: function() {
                    var t = this;
                    return this.editor = i.a.fromTextArea(this.form.code, {
                        lineNumbers: !0,
                        styleActiveLine: !0,
                        matchBrackets: !0,
                        indentWithTabs: !0,
                        autofocus: !0,
                        mode: "javascript",
                        foldGutter: !0,
                        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
                    }), this.editor.addKeyMap({
                        "Ctrl-Enter": function() {
                            return t.go()
                        }
                    }), this
                }
            }, {
                key: "go",
                value: function() {
                    var t, e, n, r, i = this,
                        o = this.code.trim();
                    return 0 === o.indexOf("http") ? (t = o, e = function(t) {
                        return i.validate(t)
                    }, n = function(t) {
                        return i.notify(!1, t)
                    }, (r = new window.XMLHttpRequest).onreadystatechange = function() {
                        if (r.readyState === window.XMLHttpRequest.DONE)
                            if (200 === r.status) {
                                var t = JSON.parse(r.responseText);
                                t.error ? n(t.result) : e(t.content)
                            } else n(r.statusText || "Unable to connect")
                    }, r.open("POST", "proxy.php"), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.send("url=".concat(encodeURIComponent(t)))) : this.validate(), this
                }
            }, {
                key: "reformat",
                value: function(t) {
                    var e = void 0 === t ? this.code : t;
                    return "compress" === this.query.reformat ? e = c()(e) || e : "no" !== this.query.reformat && (e = u.a.js_beautify(e, {
                        indent_with_tabs: !0
                    })), this.code = e, this
                }
            }, {
                key: "validate",
                value: function(t) {
                    var e;
                    this.reformat(t);
                    var n = this.code;
                    try {
                        a.a.parse(n), this.notify(!0, "Valid JSON")
                    } catch (t) {
                        (e = t.message.match(/line ([0-9]*)/)) && e.length > 1 && this.highlightErrorLine(+e[1] - 1), this.notify(!1, t)
                    }
                    return this
                }
            }, {
                key: "notify",
                value: function(t, e) {
                    var n = d.a.one("#result");
                    return d.a.one("#result-container").classList.add("shown"), n.classList[t ? "add" : "remove"]("success"), n.classList[t ? "remove" : "add"]("error"), n.textContent = e, this
                }
            }, {
                key: "highlightErrorLine",
                value: function(t) {
                    return "number" == typeof t ? (this.errorLine = this.editor.addLineClass(t, "background", "line-error"), this.editor.setCursor(t)) : this.errorLine && (this.editor.removeLineClass(this.errorLine, "background", "line-error"), this.errorLine = null), this
                }
            }]) && x(e.prototype, n), r && x(e, r), t
        }();
    e.default = new k
}]);