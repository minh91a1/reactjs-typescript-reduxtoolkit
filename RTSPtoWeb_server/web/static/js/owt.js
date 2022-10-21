/*
 * Intel WebRTC SDK version 5.0.0
 * Copyright (c) 2020 Intel <http://webrtc.intel.com>
 * Homepage: http://webrtc.intel.com
 */


!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Owt = e()
    }
}(function () {
    return function () {
        return function e(t, r, n) {
            function i(o, s) {
                if (!r[o]) {
                    if (!t[o]) {
                        var u = "function" == typeof require && require;
                        if (!s && u) return u(o, !0);
                        if (a) return a(o, !0);
                        var c = new Error("Cannot find module '" + o + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var l = r[o] = {exports: {}};
                    t[o][0].call(l.exports, function (e) {
                        return i(t[o][1][e] || e)
                    }, l, l.exports, e, t, r, n)
                }
                return r[o].exports
            }

            for (var a = "function" == typeof require && require, o = 0; o < n.length; o++) i(n[o]);
            return i
        }
    }()({
        1: [function (e, t, r) {
            t.exports = function (e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
        }, {}],
        2: [function (e, t, r) {
            t.exports = function (e) {
                if (Array.isArray(e)) return e
            }
        }, {}],
        3: [function (e, t, r) {
            t.exports = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
        }, {}],
        4: [function (e, t, r) {
            function n(e, t, r, n, i, a, o) {
                try {
                    var s = e[a](o), u = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(u) : Promise.resolve(u).then(n, i)
            }

            t.exports = function (e) {
                return function () {
                    var t = this, r = arguments;
                    return new Promise(function (i, a) {
                        var o = e.apply(t, r);

                        function s(e) {
                            n(o, i, a, s, u, "next", e)
                        }

                        function u(e) {
                            n(o, i, a, s, u, "throw", e)
                        }

                        s(void 0)
                    })
                }
            }
        }, {}],
        5: [function (e, t, r) {
            t.exports = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
        }, {}],
        6: [function (e, t, r) {
            var n = e("./setPrototypeOf"), i = e("./isNativeReflectConstruct");

            function a(e, r, o) {
                return i() ? t.exports = a = Reflect.construct : t.exports = a = function (e, t, r) {
                    var i = [null];
                    i.push.apply(i, t);
                    var a = new (Function.bind.apply(e, i));
                    return r && n(a, r.prototype), a
                }, a.apply(null, arguments)
            }

            t.exports = a
        }, {"./isNativeReflectConstruct": 13, "./setPrototypeOf": 17}],
        7: [function (e, t, r) {
            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            t.exports = function (e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }
        }, {}],
        8: [function (e, t, r) {
            function n(e) {
                return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, n(e)
            }

            t.exports = n
        }, {}],
        9: [function (e, t, r) {
            var n = e("./setPrototypeOf");
            t.exports = function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && n(e, t)
            }
        }, {"./setPrototypeOf": 17}],
        10: [function (e, t, r) {
            t.exports = function (e) {
                return e && e.__esModule ? e : {default: e}
            }
        }, {}],
        11: [function (e, t, r) {
            var n = e("@babel/runtime/helpers/typeof");

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function () {
                    return e
                }, e
            }

            t.exports = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n(e) && "function" != typeof e) return {default: e};
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = e[o]
                }
                return r.default = e, t && t.set(e, r), r
            }
        }, {"@babel/runtime/helpers/typeof": 19}],
        12: [function (e, t, r) {
            t.exports = function (e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }
        }, {}],
        13: [function (e, t, r) {
            t.exports = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    })), !0
                } catch (e) {
                    return !1
                }
            }
        }, {}],
        14: [function (e, t, r) {
            t.exports = function (e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var r = [], n = !0, i = !1, a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0) ;
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }
            }
        }, {}],
        15: [function (e, t, r) {
            t.exports = function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        }, {}],
        16: [function (e, t, r) {
            var n = e("@babel/runtime/helpers/typeof"), i = e("./assertThisInitialized");
            t.exports = function (e, t) {
                return !t || "object" !== n(t) && "function" != typeof t ? i(e) : t
            }
        }, {"./assertThisInitialized": 3, "@babel/runtime/helpers/typeof": 19}],
        17: [function (e, t, r) {
            function n(e, r) {
                return t.exports = n = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, n(e, r)
            }

            t.exports = n
        }, {}],
        18: [function (e, t, r) {
            var n = e("./arrayWithHoles"), i = e("./iterableToArrayLimit"), a = e("./unsupportedIterableToArray"),
                o = e("./nonIterableRest");
            t.exports = function (e, t) {
                return n(e) || i(e, t) || a(e, t) || o()
            }
        }, {
            "./arrayWithHoles": 2,
            "./iterableToArrayLimit": 14,
            "./nonIterableRest": 15,
            "./unsupportedIterableToArray": 20
        }],
        19: [function (e, t, r) {
            function n(e) {
                "@babel/helpers - typeof";
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function (e) {
                    return typeof e
                } : t.exports = n = function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }

            t.exports = n
        }, {}],
        20: [function (e, t, r) {
            var n = e("./arrayLikeToArray");
            t.exports = function (e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }
        }, {"./arrayLikeToArray": 1}],
        21: [function (e, t, r) {
            var n = e("./getPrototypeOf"), i = e("./setPrototypeOf"), a = e("./isNativeFunction"), o = e("./construct");

            function s(e) {
                var r = "function" == typeof Map ? new Map : void 0;
                return t.exports = s = function (e) {
                    if (null === e || !a(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== r) {
                        if (r.has(e)) return r.get(e);
                        r.set(e, t)
                    }

                    function t() {
                        return o(e, arguments, n(this).constructor)
                    }

                    return t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), i(t, e)
                }, s(e)
            }

            t.exports = s
        }, {"./construct": 6, "./getPrototypeOf": 8, "./isNativeFunction": 12, "./setPrototypeOf": 17}],
        22: [function (e, t, r) {
            t.exports = e("regenerator-runtime")
        }, {"regenerator-runtime": 23}],
        23: [function (e, t, r) {
            var n = function (e) {
                "use strict";
                var t, r = Object.prototype, n = r.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator", o = i.asyncIterator || "@@asyncIterator",
                    s = i.toStringTag || "@@toStringTag";

                function u(e, t, r) {
                    return Object.defineProperty(e, t, {value: r, enumerable: !0, configurable: !0, writable: !0}), e[t]
                }

                try {
                    u({}, "")
                } catch (e) {
                    u = function (e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var i = t && t.prototype instanceof m ? t : m, a = Object.create(i.prototype), o = new T(n || []);
                    return a._invoke = function (e, t, r) {
                        var n = d;
                        return function (i, a) {
                            if (n === p) throw new Error("Generator is already running");
                            if (n === h) {
                                if ("throw" === i) throw a;
                                return O()
                            }
                            for (r.method = i, r.arg = a; ;) {
                                var o = r.delegate;
                                if (o) {
                                    var s = E(o, r);
                                    if (s) {
                                        if (s === v) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                                    if (n === d) throw n = h, r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = p;
                                var u = l(e, t, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? h : f, u.arg === v) continue;
                                    return {value: u.arg, done: r.done}
                                }
                                "throw" === u.type && (n = h, r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(e, r, o), a
                }

                function l(e, t, r) {
                    try {
                        return {type: "normal", arg: e.call(t, r)}
                    } catch (e) {
                        return {type: "throw", arg: e}
                    }
                }

                e.wrap = c;
                var d = "suspendedStart", f = "suspendedYield", p = "executing", h = "completed", v = {};

                function m() {
                }

                function b() {
                }

                function g() {
                }

                var _ = {};
                _[a] = function () {
                    return this
                };
                var y = Object.getPrototypeOf, S = y && y(y(I([])));
                S && S !== r && n.call(S, a) && (_ = S);
                var P = g.prototype = m.prototype = Object.create(_);

                function C(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                        u(e, t, function (e) {
                            return this._invoke(t, e)
                        })
                    })
                }

                function w(e, t) {
                    var r;
                    this._invoke = function (i, a) {
                        function o() {
                            return new t(function (r, o) {
                                !function r(i, a, o, s) {
                                    var u = l(e[i], e, a);
                                    if ("throw" !== u.type) {
                                        var c = u.arg, d = c.value;
                                        return d && "object" == typeof d && n.call(d, "__await") ? t.resolve(d.__await).then(function (e) {
                                            r("next", e, o, s)
                                        }, function (e) {
                                            r("throw", e, o, s)
                                        }) : t.resolve(d).then(function (e) {
                                            c.value = e, o(c)
                                        }, function (e) {
                                            return r("throw", e, o, s)
                                        })
                                    }
                                    s(u.arg)
                                }(i, a, r, o)
                            })
                        }

                        return r = r ? r.then(o, o) : o()
                    }
                }

                function E(e, r) {
                    var n = e.iterator[r.method];
                    if (n === t) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (e.iterator.return && (r.method = "return", r.arg = t, E(e, r), "throw" === r.method)) return v;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return v
                    }
                    var i = l(n, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                }

                function k(e) {
                    var t = {tryLoc: e[0]};
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function R(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function T(e) {
                    this.tryEntries = [{tryLoc: "root"}], e.forEach(k, this), this.reset(!0)
                }

                function I(e) {
                    if (e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var i = -1, o = function r() {
                                for (; ++i < e.length;) if (n.call(e, i)) return r.value = e[i], r.done = !1, r;
                                return r.value = t, r.done = !0, r
                            };
                            return o.next = o
                        }
                    }
                    return {next: O}
                }

                function O() {
                    return {value: t, done: !0}
                }

                return b.prototype = P.constructor = g, g.constructor = b, b.displayName = u(g, s, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, u(e, s, "GeneratorFunction")), e.prototype = Object.create(P), e
                }, e.awrap = function (e) {
                    return {__await: e}
                }, C(w.prototype), w.prototype[o] = function () {
                    return this
                }, e.AsyncIterator = w, e.async = function (t, r, n, i, a) {
                    void 0 === a && (a = Promise);
                    var o = new w(c(t, r, n, i), a);
                    return e.isGeneratorFunction(r) ? o : o.next().then(function (e) {
                        return e.done ? e.value : o.next()
                    })
                }, C(P), u(P, s, "Generator"), P[a] = function () {
                    return this
                }, P.toString = function () {
                    return "[object Generator]"
                }, e.keys = function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(), function r() {
                        for (; t.length;) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
                }, e.values = I, T.prototype = {
                    constructor: T, reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(R), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    }, stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    }, dispatchException: function (e) {
                        if (this.done) throw e;
                        var r = this;

                        function i(n, i) {
                            return s.type = "throw", s.arg = e, r.next = n, i && (r.method = "next", r.arg = t), !!i
                        }

                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a], s = o.completion;
                            if ("root" === o.tryLoc) return i("end");
                            if (o.tryLoc <= this.prev) {
                                var u = n.call(o, "catchLoc"), c = n.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var a = i;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, v) : this.complete(o)
                    }, complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
                    }, finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), R(r), v
                        }
                    }, catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    R(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (e, r, n) {
                        return this.delegate = {
                            iterator: I(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), v
                    }
                }, e
            }("object" == typeof t ? t.exports : {});
            try {
                regeneratorRuntime = n
            } catch (e) {
                Function("r", "regeneratorRuntime = r")(n)
            }
        }, {}],
        24: [function (e, t, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {value: !0}), r.Base64 = void 0;
            var n = function () {
                var e, t, r,
                    n = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"],
                    i = [];
                for (r = 0; r < n.length; r += 1) i[n[r]] = r;
                var a = function (r) {
                    e = r, t = 0
                }, o = function () {
                    if (!e) return -1;
                    if (t >= e.length) return -1;
                    var r = 255 & e.charCodeAt(t);
                    return t += 1, r
                }, s = function () {
                    if (!e) return -1;
                    for (; ;) {
                        if (t >= e.length) return -1;
                        var r = e.charAt(t);
                        if (t += 1, i[r]) return i[r];
                        if ("A" === r) return 0
                    }
                }, u = function (e) {
                    return 1 === (e = e.toString(16)).length && (e = "0" + e), e = "%" + e, unescape(e)
                };
                return {
                    encodeBase64: function (e) {
                        var t, r;
                        a(e), t = "";
                        var i = new Array(3);
                        for (r = !1; !r && -1 !== (i[0] = o());) i[1] = o(), i[2] = o(), t += n[i[0] >> 2], -1 !== i[1] ? (t += n[i[0] << 4 & 48 | i[1] >> 4], -1 !== i[2] ? (t += n[i[1] << 2 & 60 | i[2] >> 6], t += n[63 & i[2]]) : (t += n[i[1] << 2 & 60], t += "=", r = !0)) : (t += n[i[0] << 4 & 48], t += "=", t += "=", r = !0);
                        return t
                    }, decodeBase64: function (e) {
                        var t, r;
                        a(e), t = "";
                        var n = new Array(4);
                        for (r = !1; !r && -1 !== (n[0] = s()) && -1 !== (n[1] = s());) n[2] = s(), n[3] = s(), t += u(n[0] << 2 & 255 | n[1] >> 4), -1 !== n[2] ? (t += u(n[1] << 4 & 255 | n[2] >> 2), -1 !== n[3] ? t += u(n[2] << 6 & 255 | n[3]) : r = !0) : r = !0;
                        return t
                    }
                }
            }();
            r.Base64 = n
        }, {}],
        25: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.VideoEncodingParameters = r.VideoCodecParameters = r.VideoCodec = r.AudioEncodingParameters = r.AudioCodecParameters = r.AudioCodec = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck"));
            r.AudioCodec = {
                PCMU: "pcmu",
                PCMA: "pcma",
                OPUS: "opus",
                G722: "g722",
                ISAC: "iSAC",
                ILBC: "iLBC",
                AAC: "aac",
                AC3: "ac3",
                NELLYMOSER: "nellymoser"
            };
            r.AudioCodecParameters = function e(t, r, n) {
                (0, i.default)(this, e), this.name = t, this.channelCount = r, this.clockRate = n
            };
            r.AudioEncodingParameters = function e(t, r) {
                (0, i.default)(this, e), this.codec = t, this.maxBitrate = r
            };
            r.VideoCodec = {VP8: "vp8", VP9: "vp9", H264: "h264", H265: "h265"};
            r.VideoCodecParameters = function e(t, r) {
                (0, i.default)(this, e), this.name = t, this.profile = r
            };
            r.VideoEncodingParameters = function e(t, r) {
                (0, i.default)(this, e), this.codec = t, this.maxBitrate = r
            }
        }, {"@babel/runtime/helpers/classCallCheck": 5, "@babel/runtime/helpers/interopRequireDefault": 10}],
        26: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.MuteEvent = r.ErrorEvent = r.MessageEvent = r.OwtEvent = r.EventDispatcher = void 0;
            var i = n(e("@babel/runtime/helpers/inherits")),
                a = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                o = n(e("@babel/runtime/helpers/getPrototypeOf")), s = n(e("@babel/runtime/helpers/classCallCheck"));

            function u(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, o.default)(e);
                    if (t) {
                        var i = (0, o.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, a.default)(this, r)
                }
            }

            r.EventDispatcher = function () {
                var e = {dispatcher: {}};
                e.dispatcher.eventListeners = {}, this.addEventListener = function (t, r) {
                    void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []), e.dispatcher.eventListeners[t].push(r)
                }, this.removeEventListener = function (t, r) {
                    if (e.dispatcher.eventListeners[t]) {
                        var n = e.dispatcher.eventListeners[t].indexOf(r);
                        -1 !== n && e.dispatcher.eventListeners[t].splice(n, 1)
                    }
                }, this.clearEventListener = function (t) {
                    e.dispatcher.eventListeners[t] = []
                }, this.dispatchEvent = function (t) {
                    e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].map(function (e) {
                        e(t)
                    })
                }
            };
            var c = function e(t) {
                (0, s.default)(this, e), this.type = t
            };
            r.OwtEvent = c;
            var l = function (e) {
                (0, i.default)(r, e);
                var t = u(r);

                function r(e, n) {
                    var i;
                    return (0, s.default)(this, r), (i = t.call(this, e)).origin = n.origin, i.message = n.message, i.to = n.to, i
                }

                return r
            }(c);
            r.MessageEvent = l;
            var d = function (e) {
                (0, i.default)(r, e);
                var t = u(r);

                function r(e, n) {
                    var i;
                    return (0, s.default)(this, r), (i = t.call(this, e)).error = n.error, i
                }

                return r
            }(c);
            r.ErrorEvent = d;
            var f = function (e) {
                (0, i.default)(r, e);
                var t = u(r);

                function r(e, n) {
                    var i;
                    return (0, s.default)(this, r), (i = t.call(this, e)).kind = n.kind, i
                }

                return r
            }(c);
            r.MuteEvent = f
        }, {
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/possibleConstructorReturn": 16
        }],
        27: [function (e, t, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {value: !0});
            var n = e("./mediastream-factory.js");
            Object.keys(n).forEach(function (e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                    enumerable: !0, get: function () {
                        return n[e]
                    }
                })
            });
            var i = e("./stream.js");
            Object.keys(i).forEach(function (e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                    enumerable: !0, get: function () {
                        return i[e]
                    }
                })
            });
            var a = e("./mediaformat.js");
            Object.keys(a).forEach(function (e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                    enumerable: !0, get: function () {
                        return a[e]
                    }
                })
            });
            var o = e("./transport.js");
            Object.keys(o).forEach(function (e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                    enumerable: !0, get: function () {
                        return o[e]
                    }
                })
            })
        }, {"./mediaformat.js": 29, "./mediastream-factory.js": 30, "./stream.js": 33, "./transport.js": 34}],
        28: [function (e, t, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var n, i, a, o, s = (n = function () {
            }, i = {
                DEBUG: 0, TRACE: 1, INFO: 2, WARNING: 3, ERROR: 4, NONE: 5, log: function () {
                    for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    (e = window.console).log.apply(e, [(new Date).toISOString()].concat(r))
                }
            }, a = function (e) {
                return "function" == typeof window.console[e] ? function () {
                    for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    (t = window.console)[e].apply(t, [(new Date).toISOString()].concat(n))
                } : i.log
            }, (o = function (e) {
                i.debug = e <= 0 ? a("debug") : n, i.trace = e <= 1 ? a("trace") : n, i.info = e <= 2 ? a("info") : n, i.warning = e <= 3 ? a("warn") : n, i.error = e <= 4 ? a("error") : n
            })(0), i.setLogLevel = o, i);
            r.default = s
        }, {}],
        29: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.Resolution = r.TrackKind = r.VideoSourceInfo = r.AudioSourceInfo = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck"));
            r.AudioSourceInfo = {MIC: "mic", SCREENCAST: "screen-cast", FILE: "file", MIXED: "mixed"};
            r.VideoSourceInfo = {CAMERA: "camera", SCREENCAST: "screen-cast", FILE: "file", MIXED: "mixed"};
            r.TrackKind = {AUDIO: "audio", VIDEO: "video", AUDIO_AND_VIDEO: "av"};
            r.Resolution = function e(t, r) {
                (0, i.default)(this, e), this.width = t, this.height = r
            }
        }, {"@babel/runtime/helpers/classCallCheck": 5, "@babel/runtime/helpers/interopRequireDefault": 10}],
        30: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.MediaStreamFactory = r.StreamConstraints = r.VideoTrackConstraints = r.AudioTrackConstraints = void 0;
            var a = i(e("@babel/runtime/helpers/createClass")), o = i(e("@babel/runtime/helpers/typeof")),
                s = i(e("@babel/runtime/helpers/classCallCheck")), u = n(e("./utils.js")), c = n(e("./mediaformat.js"));
            r.AudioTrackConstraints = function e(t) {
                if ((0, s.default)(this, e), !Object.values(c.AudioSourceInfo).some(function (e) {
                    return e === t
                })) throw new TypeError("Invalid source.");
                this.source = t, this.deviceId = void 0
            };
            r.VideoTrackConstraints = function e(t) {
                if ((0, s.default)(this, e), !Object.values(c.VideoSourceInfo).some(function (e) {
                    return e === t
                })) throw new TypeError("Invalid source.");
                this.source = t, this.deviceId = void 0, this.resolution = void 0, this.frameRate = void 0
            };

            function l(e) {
                return "object" === (0, o.default)(e.video) && e.video.source === c.VideoSourceInfo.SCREENCAST
            }

            r.StreamConstraints = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                (0, s.default)(this, e), this.audio = t, this.video = r
            };
            var d = function () {
                function e() {
                    (0, s.default)(this, e)
                }

                return (0, a.default)(e, null, [{
                    key: "createMediaStream", value: function (e) {
                        if ("object" !== (0, o.default)(e) || !e.audio && !e.video) return Promise.reject(new TypeError("Invalid constrains"));
                        if (!l(e) && "object" === (0, o.default)(e.audio) && e.audio.source === c.AudioSourceInfo.SCREENCAST) return Promise.reject(new TypeError("Cannot share screen without video."));
                        if (l(e) && "object" === (0, o.default)(e.audio) && e.audio.source !== c.AudioSourceInfo.SCREENCAST) return Promise.reject(new TypeError("Cannot capture video from screen cast while capture audio from other source."));
                        if (!e.audio && !e.video) return Promise.reject(new TypeError("At least one of audio and video must be requested."));
                        var t = Object.create({});
                        return "object" === (0, o.default)(e.audio) && e.audio.source === c.AudioSourceInfo.MIC ? (t.audio = Object.create({}), u.isEdge() ? t.audio.deviceId = e.audio.deviceId : t.audio.deviceId = {exact: e.audio.deviceId}) : e.audio.source === c.AudioSourceInfo.SCREENCAST ? t.audio = !0 : t.audio = e.audio, "object" === (0, o.default)(e.video) ? (t.video = Object.create({}), "number" == typeof e.video.frameRate && (t.video.frameRate = e.video.frameRate), e.video.resolution && e.video.resolution.width && e.video.resolution.height && (e.video.source === c.VideoSourceInfo.SCREENCAST ? (t.video.width = e.video.resolution.width, t.video.height = e.video.resolution.height) : (t.video.width = Object.create({}), t.video.width.exact = e.video.resolution.width, t.video.height = Object.create({}), t.video.height.exact = e.video.resolution.height)), "string" == typeof e.video.deviceId && (t.video.deviceId = {exact: e.video.deviceId}), u.isFirefox() && e.video.source === c.VideoSourceInfo.SCREENCAST && (t.video.mediaSource = "screen")) : t.video = e.video, l(e) ? navigator.mediaDevices.getDisplayMedia(t) : navigator.mediaDevices.getUserMedia(t)
                    }
                }]), e
            }();
            r.MediaStreamFactory = d
        }, {
            "./mediaformat.js": 29,
            "./utils.js": 35,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/createClass": 7,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11,
            "@babel/runtime/helpers/typeof": 19
        }],
        31: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.PublishOptions = r.Publication = r.PublicationSettings = r.VideoPublicationSettings = r.AudioPublicationSettings = void 0;
            var a = i(e("@babel/runtime/helpers/assertThisInitialized")), o = i(e("@babel/runtime/helpers/inherits")),
                s = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
                u = i(e("@babel/runtime/helpers/getPrototypeOf")), c = i(e("@babel/runtime/helpers/classCallCheck")),
                l = n(e("./utils.js")), d = e("../base/event.js");

            function f(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, u.default)(e);
                    if (t) {
                        var i = (0, u.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, s.default)(this, r)
                }
            }

            r.AudioPublicationSettings = function e(t) {
                (0, c.default)(this, e), this.codec = t
            };
            r.VideoPublicationSettings = function e(t, r, n, i, a, o) {
                (0, c.default)(this, e), this.codec = t, this.resolution = r, this.frameRate = n, this.bitrate = i, this.keyFrameInterval = a, this.rid = o
            };
            r.PublicationSettings = function e(t, r) {
                (0, c.default)(this, e), this.audio = t, this.video = r
            };
            var p = function (e) {
                (0, o.default)(r, e);
                var t = f(r);

                function r(e, n, i, o, s) {
                    var u;
                    return (0, c.default)(this, r), u = t.call(this), Object.defineProperty((0, a.default)(u), "id", {
                        configurable: !1,
                        writable: !1,
                        value: e || l.createUuid()
                    }), u.stop = n, u.getStats = i, u.mute = o, u.unmute = s, u
                }

                return r
            }(d.EventDispatcher);
            r.Publication = p;
            r.PublishOptions = function e(t, r, n) {
                (0, c.default)(this, e), this.audio = t, this.video = r, this.transport = n
            }
        }, {
            "../base/event.js": 26,
            "./utils.js": 35,
            "@babel/runtime/helpers/assertThisInitialized": 3,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 16
        }],
        32: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.reorderCodecs = function (e, t, r, n) {
                if (!r || 0 === r.length) return e;
                r = "audio" === t ? r.concat(p) : r.concat(h);
                var a = e.split("\r\n"), o = null, u = null;
                if ("string" == typeof n) {
                    var c = m(a, n);
                    if (c) {
                        var b = c.start, g = c.end;
                        o = a.slice(0, b), u = a.slice(g), a = a.slice(b, g)
                    }
                }
                var _ = l(a, "m=", t);
                if (null === _) return e;
                var y = a[_].split(" ");
                y.splice(0, 3);
                var S, P = [], C = i(r);
                try {
                    for (C.s(); !(S = C.n()).done;) for (var w = S.value, E = 0; E < a.length; E++) {
                        var k = d(a, E, -1, "a=rtpmap", w);
                        if (null !== k) {
                            var R = f(a[k]);
                            R && (P.push(R), E = k)
                        }
                    }
                } catch (e) {
                    C.e(e)
                } finally {
                    C.f()
                }
                P = function (e, t) {
                    var r, n = i(t);
                    try {
                        for (n.s(); !(r = n.n()).done;) {
                            var a = r.value, o = l(e, "a=fmtp", "apt=" + a);
                            if (null !== o) {
                                var u = s(e[o]);
                                t.push(u.pt)
                            }
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return t
                }(a, P), a[_] = function (e, t) {
                    var r = e.split(" ").slice(0, 3);
                    return (r = r.concat(t)).join(" ")
                }(a[_], P);
                var T, I = i(y);
                try {
                    for (I.s(); !(T = I.n()).done;) {
                        var O = T.value;
                        -1 === P.indexOf(O) && (a = v(a, O))
                    }
                } catch (e) {
                    I.e(e)
                } finally {
                    I.f()
                }
                o && (a = o.concat(a).concat(u));
                return e = a.join("\r\n")
            }, r.addLegacySimulcast = function (e, t, r, n) {
                var i, a;
                if (!(r && r > 1)) return e;
                var o = e.split("\r\n"), s = null, u = null;
                if ("string" == typeof n) {
                    var c = m(o, n);
                    if (c) {
                        var f = c.start, p = c.end;
                        s = o.slice(0, f), u = o.slice(p), o = o.slice(f, p)
                    }
                }
                var h = l(o, "m=", t);
                if (null === h) return e;
                var v = d(o, h + 1, -1, "m=");
                null === v && (v = o.length);
                var b = function (e) {
                    var t = e.split(" "), r = t[0].split(":")[1];
                    return r
                }, g = new Set, _ = new Set, y = new Set, S = [], P = [], C = h + 1;
                for (; C < v;) {
                    var w = o[C];
                    if ("" === w) break;
                    if (w.indexOf("a=ssrc:") > -1) {
                        var E = b(o[C]);
                        if (_.add(E), w.indexOf("cname") > -1 || w.indexOf("msid") > -1) for (var k = 1; k < r; k++) {
                            var R = parseInt(E) + k + "";
                            S.push(w.replace(E, R))
                        } else g.add(w)
                    }
                    if (w.indexOf("a=ssrc-group:FID") > -1) {
                        var T = w.split(" ");
                        y.add(T[2]);
                        for (var I = 1; I < r; I++) {
                            var O = parseInt(T[1]) + I + "", j = parseInt(T[2]) + I + "";
                            P.push(w.replace(T[1], O).replace(T[2], j))
                        }
                    }
                    C++
                }
                var x = C;
                _.forEach(function (e) {
                    if (!y.has(e)) {
                        var t = "a=ssrc-group:SIM";
                        t = t + " " + e;
                        for (var n = 1; n < r; n++) t = t + " " + (parseInt(e) + n);
                        P.push(t)
                    }
                }), S.sort(), (i = o).splice.apply(i, [x, 0].concat(P)), (a = o).splice.apply(a, [x, 0].concat(S)), o = o.filter(function (e) {
                    return !g.has(e)
                }), s && (o = s.concat(o).concat(u));
                return e = o.join("\r\n")
            }, r.setMaxBitrate = function (e, t, r) {
                var n, a = i(t);
                try {
                    for (a.s(); !(n = a.n()).done;) {
                        var s = n.value;
                        s.maxBitrate && (e = o(e, s.codec.name, "x-google-max-bitrate", s.maxBitrate.toString(), r))
                    }
                } catch (e) {
                    a.e(e)
                } finally {
                    a.f()
                }
                return e
            };
            n(e("./logger.js"));

            function i(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return a(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0, i = function () {
                        };
                        return {
                            s: i, n: function () {
                                return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                            }, e: function (e) {
                                throw e
                            }, f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, s = !0, u = !1;
                return {
                    s: function () {
                        r = e[Symbol.iterator]()
                    }, n: function () {
                        var e = r.next();
                        return s = e.done, e
                    }, e: function (e) {
                        u = !0, o = e
                    }, f: function () {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function o(e, t, r, n, i) {
                var a = e.split("\r\n"), o = null, d = null;
                if ("string" == typeof i) {
                    var p = m(a, i);
                    if (p) {
                        var h = p.start, v = p.end;
                        o = a.slice(0, h), d = a.slice(v), a = a.slice(h, v)
                    }
                }
                a.length <= 1 && (a = e.split("\n"));
                var b = c(a, t), g = {};
                if (null === b) {
                    var _ = l(a, "a=rtpmap", t);
                    if (null === _) return e;
                    var y = f(a[_]);
                    g.pt = y.toString(), g.params = {}, g.params[r] = n, a.splice(_ + 1, 0, u(g))
                } else (g = s(a[b])).params[r] = n, a[b] = u(g);
                return o && (a = o.concat(a).concat(d)), e = a.join("\r\n")
            }

            function s(e) {
                var t = {}, r = e.indexOf(" "), n = e.substring(r + 1).split(";"), i = new RegExp("a=fmtp:(\\d+)"),
                    a = e.match(i);
                if (!a || 2 !== a.length) return null;
                t.pt = a[1];
                for (var o = {}, s = 0; s < n.length; ++s) {
                    var u = n[s].split("=");
                    2 === u.length && (o[u[0]] = u[1])
                }
                return t.params = o, t
            }

            function u(e) {
                if (!e.hasOwnProperty("pt") || !e.hasOwnProperty("params")) return null;
                var t = e.pt, r = e.params, n = [], i = 0;
                for (var a in r) n[i] = a + "=" + r[a], ++i;
                return 0 === i ? null : "a=fmtp:" + t.toString() + " " + n.join(";")
            }

            function c(e, t) {
                var r = function (e, t) {
                    var r = l(e, "a=rtpmap", t);
                    return r ? f(e[r]) : null
                }(e, t);
                return r ? l(e, "a=fmtp:" + r.toString()) : null
            }

            function l(e, t, r) {
                return d(e, 0, -1, t, r)
            }

            function d(e, t, r, n, i) {
                for (var a = -1 !== r ? r : e.length, o = t; o < a; ++o) if (0 === e[o].indexOf(n) && (!i || -1 !== e[o].toLowerCase().indexOf(i.toLowerCase()))) return o;
                return null
            }

            function f(e) {
                var t = new RegExp("a=rtpmap:(\\d+) [a-zA-Z0-9-]+\\/\\d+"), r = e.match(t);
                return r && 2 === r.length ? r[1] : null
            }

            var p = ["CN", "telephone-event"], h = ["red", "ulpfec", "flexfec"];

            function v(e, t) {
                for (var r = new RegExp("a=(rtpmap|rtcp-fb|fmtp):" + t + "\\s"), n = e.length - 1; n > 0; n--) e[n].match(r) && e.splice(n, 1);
                return e
            }

            function m(e, t) {
                for (var r = "a=mid:" + t, n = l(e, r); n >= 0 && e[n] !== r;) n = d(e, n, -1, r);
                if (n >= 0) {
                    for (var i = d(e, n, -1, "m=") || -1, a = -1, o = n; o >= 0; o--) if (e[o].indexOf("m=") >= 0) {
                        a = o;
                        break
                    }
                    if (a >= 0) return {start: a, end: i}
                }
                return null
            }
        }, {"./logger.js": 28, "@babel/runtime/helpers/interopRequireDefault": 10}],
        33: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.StreamEvent = r.RemoteStream = r.LocalStream = r.Stream = r.StreamSourceInfo = void 0;
            var a = i(e("@babel/runtime/helpers/typeof")), o = i(e("@babel/runtime/helpers/assertThisInitialized")),
                s = i(e("@babel/runtime/helpers/inherits")),
                u = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
                c = i(e("@babel/runtime/helpers/getPrototypeOf")), l = i(e("@babel/runtime/helpers/classCallCheck")),
                d = n(e("./utils.js")), f = e("./event.js");

            function p(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, c.default)(e);
                    if (t) {
                        var i = (0, c.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, u.default)(this, r)
                }
            }

            function h(e, t) {
                return t.some(function (t) {
                    return t === e
                })
            }

            r.StreamSourceInfo = function e(t, r, n) {
                if ((0, l.default)(this, e), !h(t, [void 0, "mic", "screen-cast", "file", "mixed"])) throw new TypeError("Incorrect value for audioSourceInfo");
                if (!h(r, [void 0, "camera", "screen-cast", "file", "encoded-file", "raw-file", "mixed"])) throw new TypeError("Incorrect value for videoSourceInfo");
                this.audio = t, this.video = r, this.data = n
            };
            var v = function (e) {
                (0, s.default)(r, e);
                var t = p(r);

                function r(e, n, i) {
                    var s;
                    if ((0, l.default)(this, r), s = t.call(this), e && !(e instanceof MediaStream) && !(e instanceof SendStream) && !(e instanceof BidirectionalStream) || "object" !== (0, a.default)(n)) throw new TypeError("Invalid stream or sourceInfo.");
                    if (e && e instanceof MediaStream && (e.getAudioTracks().length > 0 && !n.audio || e.getVideoTracks().length > 0 && !n.video)) throw new TypeError("Missing audio source info or video source info.");
                    return e instanceof MediaStream && Object.defineProperty((0, o.default)(s), "mediaStream", {
                        configurable: !1,
                        writable: !0,
                        value: e
                    }), Object.defineProperty((0, o.default)(s), "stream", {
                        configurable: !1,
                        writable: !0,
                        value: e
                    }), Object.defineProperty((0, o.default)(s), "source", {
                        configurable: !1,
                        writable: !1,
                        value: n
                    }), Object.defineProperty((0, o.default)(s), "attributes", {
                        configurable: !0,
                        writable: !1,
                        value: i
                    }), s
                }

                return r
            }(f.EventDispatcher);
            r.Stream = v;
            var m = function (e) {
                (0, s.default)(r, e);
                var t = p(r);

                function r(e, n, i) {
                    var a;
                    if ((0, l.default)(this, r), !e) throw new TypeError("Stream cannot be null.");
                    return a = t.call(this, e, n, i), Object.defineProperty((0, o.default)(a), "id", {
                        configurable: !1,
                        writable: !1,
                        value: d.createUuid()
                    }), a
                }

                return r
            }(v);
            r.LocalStream = m;
            var b = function (e) {
                (0, s.default)(r, e);
                var t = p(r);

                function r(e, n, i, a, s) {
                    var u;
                    return (0, l.default)(this, r), u = t.call(this, i, a, s), Object.defineProperty((0, o.default)(u), "id", {
                        configurable: !1,
                        writable: !1,
                        value: e || d.createUuid()
                    }), Object.defineProperty((0, o.default)(u), "origin", {
                        configurable: !1,
                        writable: !1,
                        value: n
                    }), u.settings = void 0, u.extraCapabilities = void 0, u
                }

                return r
            }(v);
            r.RemoteStream = b;
            var g = function (e) {
                (0, s.default)(r, e);
                var t = p(r);

                function r(e, n) {
                    var i;
                    return (0, l.default)(this, r), (i = t.call(this, e)).stream = n.stream, i
                }

                return r
            }(f.OwtEvent);
            r.StreamEvent = g
        }, {
            "./event.js": 26,
            "./utils.js": 35,
            "@babel/runtime/helpers/assertThisInitialized": 3,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 16,
            "@babel/runtime/helpers/typeof": 19
        }],
        34: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.TransportSettings = r.TransportConstraints = r.TransportType = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck"));
            r.TransportType = {QUIC: "quic", WEBRTC: "webrtc"};
            r.TransportConstraints = function e(t, r) {
                (0, i.default)(this, e), this.type = t, this.id = r
            };
            r.TransportSettings = function e(t, r) {
                (0, i.default)(this, e), this.type = t, this.id = r
            }
        }, {"@babel/runtime/helpers/classCallCheck": 5, "@babel/runtime/helpers/interopRequireDefault": 10}],
        35: [function (e, t, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {value: !0}), r.isFirefox = function () {
                return null !== window.navigator.userAgent.match("Firefox")
            }, r.isChrome = function () {
                return null !== window.navigator.userAgent.match("Chrome")
            }, r.isSafari = i, r.isEdge = function () {
                return null !== window.navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)
            }, r.createUuid = function () {
                return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = 16 * Math.random() | 0, r = "x" === e ? t : 3 & t | 8;
                    return r.toString(16)
                })
            }, r.sysInfo = function () {
                var e = Object.create({});
                e.sdk = {version: n, type: "JavaScript"};
                var t = navigator.userAgent, r = /Chrome\/([0-9.]+)/.exec(t);
                r ? e.runtime = {
                    name: "Chrome",
                    version: r[1]
                } : (r = /Firefox\/([0-9.]+)/.exec(t)) ? e.runtime = {
                    name: "Firefox",
                    version: r[1]
                } : (r = /Edge\/([0-9.]+)/.exec(t)) ? e.runtime = {
                    name: "Edge",
                    version: r[1]
                } : i() ? (r = /Version\/([0-9.]+) Safari/.exec(t), e.runtime = {name: "Safari"}, e.runtime.version = r ? r[1] : "Unknown") : e.runtime = {
                    name: "Unknown",
                    version: "Unknown"
                };
                (r = /Windows NT ([0-9.]+)/.exec(t)) ? e.os = {
                    name: "Windows NT",
                    version: r[1]
                } : (r = /Intel Mac OS X ([0-9_.]+)/.exec(t)) ? e.os = {
                    name: "Mac OS X",
                    version: r[1].replace(/_/g, ".")
                } : (r = /iPhone OS ([0-9_.]+)/.exec(t)) ? e.os = {
                    name: "iPhone OS",
                    version: r[1].replace(/_/g, ".")
                } : (r = /X11; Linux/.exec(t)) ? e.os = {
                    name: "Linux",
                    version: "Unknown"
                } : (r = /Android( ([0-9.]+))?/.exec(t)) ? e.os = {
                    name: "Android",
                    version: r[1] || "Unknown"
                } : (r = /CrOS/.exec(t)) ? e.os = {name: "Chrome OS", version: "Unknown"} : e.os = {
                    name: "Unknown",
                    version: "Unknown"
                };
                return e.capabilities = {
                    continualIceGathering: !1,
                    unifiedPlan: !0,
                    streamRemovable: "Firefox" !== e.runtime.name,
                    ignoreDataChannelAcks: !0
                }, e
            };
            var n = "5.0";

            function i() {
                return /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent)
            }
        }, {}],
        36: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.ConferencePeerConnectionChannel = void 0;
            var a = i(e("@babel/runtime/helpers/slicedToArray")), o = i(e("@babel/runtime/regenerator")),
                s = i(e("@babel/runtime/helpers/typeof")), u = i(e("@babel/runtime/helpers/asyncToGenerator")),
                c = i(e("@babel/runtime/helpers/classCallCheck")), l = i(e("@babel/runtime/helpers/createClass")),
                d = i(e("@babel/runtime/helpers/inherits")),
                f = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
                p = i(e("@babel/runtime/helpers/getPrototypeOf")), h = i(e("../base/logger.js")),
                v = e("../base/event.js"), m = e("../base/mediaformat.js"), b = e("../base/publication.js"),
                g = e("./subscription.js"), _ = e("./error.js"), y = n(e("../base/utils.js")),
                S = n(e("../base/sdputils.js"));

            function P(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return C(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0, i = function () {
                        };
                        return {
                            s: i, n: function () {
                                return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                            }, e: function (e) {
                                throw e
                            }, f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0, s = !1;
                return {
                    s: function () {
                        r = e[Symbol.iterator]()
                    }, n: function () {
                        var e = r.next();
                        return o = e.done, e
                    }, e: function (e) {
                        s = !0, a = e
                    }, f: function () {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function w(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, p.default)(e);
                    if (t) {
                        var i = (0, p.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, f.default)(this, r)
                }
            }

            var E = function (e) {
                (0, d.default)(r, e);
                var t = w(r);

                function r(e, n) {
                    var i;
                    return (0, c.default)(this, r), (i = t.call(this))._config = e, i._videoCodecs = void 0, i._options = null, i._videoCodecs = void 0, i._signaling = n, i._pc = null, i._internalId = null, i._pendingCandidates = [], i._subscribePromises = new Map, i._publishPromises = new Map, i._subscribedStreams = new Map, i._publications = new Map, i._subscriptions = new Map, i._publishTransceivers = new Map, i._subscribeTransceivers = new Map, i._reverseIdMap = new Map, i._disconnectTimer = null, i._ended = !1, i._stopped = !1, i._id = void 0, i._internalCount = 0, i._sdpPromise = Promise.resolve(), i._sdpResolverMap = new Map, i._sdpResolvers = [], i._sdpResolveNum = 0, i
                }

                return (0, l.default)(r, [{
                    key: "onMessage", value: function (e, t) {
                        switch (e) {
                            case"progress":
                                "soac" === t.status ? this._sdpHandler(t.data) : "ready" === t.status ? this._readyHandler(t.sessionId) : "error" === t.status && this._errorHandler(t.sessionId, t.data);
                                break;
                            case"stream":
                                this._onStreamEvent(t);
                                break;
                            default:
                                h.default.warning("Unknown notification from MCU.")
                        }
                    }
                }, {
                    key: "publish", value: function () {
                        var e = (0, u.default)(o.default.mark(function e(t, r, n) {
                            var i, a, u, c, l, d, f, p, m, b, g, S, C, w, E, k, R, T, I, O, j, x, A, D, M = this;
                            return o.default.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this._ended) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject("Connection closed"));
                                    case 2:
                                        if (void 0 === r && (r = {
                                            audio: !!t.mediaStream.getAudioTracks().length,
                                            video: !!t.mediaStream.getVideoTracks().length
                                        }), "object" === (0, s.default)(r)) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new TypeError("Options should be an object.")));
                                    case 5:
                                        if (!(this._isRtpEncodingParameters(r.audio) && this._isOwtEncodingParameters(r.video) || this._isOwtEncodingParameters(r.audio) && this._isRtpEncodingParameters(r.video))) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new _.ConferenceError("Mixing RTCRtpEncodingParameters and AudioEncodingParameters/VideoEncodingParameters is not allowed.")));
                                    case 7:
                                        if (void 0 === r.audio && (r.audio = !!t.mediaStream.getAudioTracks().length), void 0 === r.video && (r.video = !!t.mediaStream.getVideoTracks().length), !(r.audio && !t.mediaStream.getAudioTracks().length || r.video && !t.mediaStream.getVideoTracks().length)) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new _.ConferenceError("options.audio/video is inconsistent with tracks presented in the MediaStream.")));
                                    case 11:
                                        if (!1 !== r.audio && null !== r.audio || !1 !== r.video && null !== r.video) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new _.ConferenceError("Cannot publish a stream without audio and video.")));
                                    case 13:
                                        if ("object" !== (0, s.default)(r.audio)) {
                                            e.next = 33;
                                            break
                                        }
                                        if (Array.isArray(r.audio)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new TypeError("options.audio should be a boolean or an array.")));
                                    case 16:
                                        i = P(r.audio), e.prev = 17, i.s();
                                    case 19:
                                        if ((a = i.n()).done) {
                                            e.next = 25;
                                            break
                                        }
                                        if ((u = a.value).codec && "string" == typeof u.codec.name && (void 0 === u.maxBitrate || "number" == typeof u.maxBitrate)) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new TypeError("options.audio has incorrect parameters.")));
                                    case 23:
                                        e.next = 19;
                                        break;
                                    case 25:
                                        e.next = 30;
                                        break;
                                    case 27:
                                        e.prev = 27, e.t0 = e.catch(17), i.e(e.t0);
                                    case 30:
                                        return e.prev = 30, i.f(), e.finish(30);
                                    case 33:
                                        if ("object" !== (0, s.default)(r.video) || Array.isArray(r.video)) {
                                            e.next = 35;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new TypeError("options.video should be a boolean or an array.")));
                                    case 35:
                                        if (!this._isOwtEncodingParameters(r.video)) {
                                            e.next = 53;
                                            break
                                        }
                                        c = P(r.video), e.prev = 37, c.s();
                                    case 39:
                                        if ((l = c.n()).done) {
                                            e.next = 45;
                                            break
                                        }
                                        if (!(!(d = l.value).codec || "string" != typeof d.codec.name || void 0 !== d.maxBitrate && "number" != typeof d.maxBitrate || void 0 !== d.codec.profile && "string" != typeof d.codec.profile)) {
                                            e.next = 43;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new TypeError("options.video has incorrect parameters.")));
                                    case 43:
                                        e.next = 39;
                                        break;
                                    case 45:
                                        e.next = 50;
                                        break;
                                    case 47:
                                        e.prev = 47, e.t1 = e.catch(37), c.e(e.t1);
                                    case 50:
                                        return e.prev = 50, c.f(), e.finish(50);
                                    case 53:
                                        if (f = {}, this._createPeerConnection(), !(t.mediaStream.getAudioTracks().length > 0 && !1 !== r.audio && null !== r.audio)) {
                                            e.next = 63;
                                            break
                                        }
                                        if (t.mediaStream.getAudioTracks().length > 1 && h.default.warning("Publishing a stream with multiple audio tracks is not fully supported."), "boolean" == typeof r.audio || "object" === (0, s.default)(r.audio)) {
                                            e.next = 59;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new _.ConferenceError("Type of audio options should be boolean or an object.")));
                                    case 59:
                                        f.audio = {}, f.audio.source = t.source.audio, e.next = 64;
                                        break;
                                    case 63:
                                        f.audio = !1;
                                    case 64:
                                        return t.mediaStream.getVideoTracks().length > 0 && !1 !== r.video && null !== r.video ? (t.mediaStream.getVideoTracks().length > 1 && h.default.warning("Publishing a stream with multiple video tracks is not fully supported."), f.video = {}, f.video.source = t.source.video, p = t.mediaStream.getVideoTracks()[0].getSettings(), f.video.parameters = {
                                            resolution: {
                                                width: p.width,
                                                height: p.height
                                            }, framerate: p.frameRate
                                        }) : f.video = !1, m = this._createInternalId(), e.next = 68, this._chainSdpPromise(m);
                                    case 68:
                                        if (b = {}, g = [], "function" != typeof this._pc.addTransceiver) {
                                            e.next = 93;
                                            break
                                        }
                                        if (!(f.audio && t.mediaStream.getAudioTracks().length > 0)) {
                                            e.next = 81;
                                            break
                                        }
                                        if (S = {
                                            direction: "sendonly",
                                            streams: [t.mediaStream]
                                        }, this._isRtpEncodingParameters(r.audio) && (S.sendEncodings = r.audio), C = this._pc.addTransceiver(t.mediaStream.getAudioTracks()[0], S), g.push({
                                            type: "audio",
                                            transceiver: C,
                                            source: f.audio.source,
                                            option: {audio: r.audio}
                                        }), !y.isFirefox()) {
                                            e.next = 81;
                                            break
                                        }
                                        return (w = C.sender.getParameters()).encodings = S.sendEncodings, e.next = 81, C.sender.setParameters(w);
                                    case 81:
                                        if (!(f.video && t.mediaStream.getVideoTracks().length > 0)) {
                                            e.next = 91;
                                            break
                                        }
                                        if (E = {
                                            direction: "sendonly",
                                            streams: [t.mediaStream]
                                        }, this._isRtpEncodingParameters(r.video) && (E.sendEncodings = r.video, this._videoCodecs = n), k = this._pc.addTransceiver(t.mediaStream.getVideoTracks()[0], E), g.push({
                                            type: "video",
                                            transceiver: k,
                                            source: f.video.source,
                                            option: {video: r.video}
                                        }), !y.isFirefox()) {
                                            e.next = 91;
                                            break
                                        }
                                        return (R = k.sender.getParameters()).encodings = E.sendEncodings, e.next = 91, k.sender.setParameters(R);
                                    case 91:
                                        e.next = 97;
                                        break;
                                    case 93:
                                        if (f.audio && t.mediaStream.getAudioTracks().length > 0) {
                                            T = P(t.mediaStream.getAudioTracks());
                                            try {
                                                for (T.s(); !(I = T.n()).done;) O = I.value, this._pc.addTrack(O, t.mediaStream)
                                            } catch (e) {
                                                T.e(e)
                                            } finally {
                                                T.f()
                                            }
                                        }
                                        if (f.video && t.mediaStream.getVideoTracks().length > 0) {
                                            j = P(t.mediaStream.getVideoTracks());
                                            try {
                                                for (j.s(); !(x = j.n()).done;) A = x.value, this._pc.addTrack(A, t.mediaStream)
                                            } catch (e) {
                                                j.e(e)
                                            } finally {
                                                j.f()
                                            }
                                        }
                                        b.offerToReceiveAudio = !1, b.offerToReceiveVideo = !1;
                                    case 97:
                                        return this._publishTransceivers.set(m, {transceivers: g}), this._pc.createOffer(b).then(function (e) {
                                            return D = e, M._pc.setLocalDescription(e)
                                        }).then(function () {
                                            var e = [];
                                            return g.forEach(function (t) {
                                                var r = t.type, n = t.transceiver, i = t.source;
                                                e.push({type: r, mid: n.mid, source: i})
                                            }), M._signaling.sendSignalingMessage("publish", {
                                                media: {tracks: e},
                                                attributes: t.attributes,
                                                transport: {id: M._id, type: "webrtc"}
                                            }).catch(function (e) {
                                                throw M._signaling.sendSignalingMessage("soac", {
                                                    id: M._id,
                                                    signaling: D
                                                }), e
                                            })
                                        }).then(function (e) {
                                            var t = e.id,
                                                n = new v.MessageEvent("id", {message: t, origin: M._remoteId});
                                            M.dispatchEvent(n), M._publishTransceivers.get(m).id = t, M._reverseIdMap.set(t, m), M._id && M._id !== e.transportId && h.default.warning("Server returns conflict ID: " + e.transportId), M._id = e.transportId, r && g.forEach(function (e) {
                                                e.type;
                                                var t = e.transceiver, r = e.option;
                                                D.sdp = M._setRtpReceiverOptions(D.sdp, r, t.mid), D.sdp = M._setRtpSenderOptions(D.sdp, r, t.mid)
                                            }), M._signaling.sendSignalingMessage("soac", {id: M._id, signaling: D})
                                        }).catch(function (e) {
                                            h.default.error("Failed to create offer or set SDP. Message: " + e.message), M._publishTransceivers.get(m).id ? (M._unpublish(m), M._rejectPromise(e), M._fireEndedEventOnPublicationOrSubscription()) : M._unpublish(m)
                                        }), e.abrupt("return", new Promise(function (e, t) {
                                            M._publishPromises.set(m, {resolve: e, reject: t})
                                        }));
                                    case 100:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this, [[17, 27, 30, 33], [37, 47, 50, 53]])
                        }));
                        return function (t, r, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "subscribe", value: function () {
                        var e = (0, u.default)(o.default.mark(function e(t, r) {
                            var n, i, a, u, c, l, d, f, p = this;
                            return o.default.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this._ended) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject("Connection closed"));
                                    case 2:
                                        if (void 0 === r && (r = {
                                            audio: !!t.settings.audio,
                                            video: !!t.settings.video
                                        }), "object" === (0, s.default)(r)) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new TypeError("Options should be an object.")));
                                    case 5:
                                        if (void 0 === r.audio && (r.audio = !!t.settings.audio), void 0 === r.video && (r.video = !!t.settings.video), !(void 0 !== r.audio && "object" !== (0, s.default)(r.audio) && "boolean" != typeof r.audio && null !== r.audio || void 0 !== r.video && "object" !== (0, s.default)(r.video) && "boolean" != typeof r.video && null !== r.video)) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new TypeError("Invalid options type.")));
                                    case 9:
                                        if (!(r.audio && !t.settings.audio || r.video && !t.settings.video)) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new _.ConferenceError("options.audio/video cannot be true or an object if there is no audio/video track in remote stream.")));
                                    case 11:
                                        if (!1 !== r.audio || !1 !== r.video) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new _.ConferenceError("Cannot subscribe a stream without audio and video.")));
                                    case 13:
                                        if (n = {}, !r.audio) {
                                            e.next = 22;
                                            break
                                        }
                                        if ("object" !== (0, s.default)(r.audio) || !Array.isArray(r.audio.codecs)) {
                                            e.next = 18;
                                            break
                                        }
                                        if (0 !== r.audio.codecs.length) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new TypeError("Audio codec cannot be an empty array.")));
                                    case 18:
                                        n.audio = {}, n.audio.from = t.id, e.next = 23;
                                        break;
                                    case 22:
                                        n.audio = !1;
                                    case 23:
                                        if (!r.video) {
                                            e.next = 33;
                                            break
                                        }
                                        if ("object" !== (0, s.default)(r.video) || !Array.isArray(r.video.codecs)) {
                                            e.next = 27;
                                            break
                                        }
                                        if (0 !== r.video.codecs.length) {
                                            e.next = 27;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(new TypeError("Video codec cannot be an empty array.")));
                                    case 27:
                                        n.video = {}, n.video.from = t.id, (r.video.resolution || r.video.frameRate || r.video.bitrateMultiplier && 1 !== r.video.bitrateMultiplier || r.video.keyFrameInterval) && (n.video.parameters = {
                                            resolution: r.video.resolution,
                                            framerate: r.video.frameRate,
                                            bitrate: r.video.bitrateMultiplier ? "x" + r.video.bitrateMultiplier.toString() : void 0,
                                            keyFrameInterval: r.video.keyFrameInterval
                                        }), r.video.rid && ((i = t.settings.video.find(function (e) {
                                            return e.rid === r.video.rid
                                        })) && i._trackId && (n.video.from = i._trackId, delete n.video.parameters), r.video = !0), e.next = 34;
                                        break;
                                    case 33:
                                        n.video = !1;
                                    case 34:
                                        return a = this._createInternalId(), e.next = 37, this._chainSdpPromise(a);
                                    case 37:
                                        return u = {}, c = [], this._createPeerConnection(), "function" == typeof this._pc.addTransceiver ? (n.audio && (l = this._pc.addTransceiver("audio", {direction: "recvonly"}), c.push({
                                            type: "audio",
                                            transceiver: l,
                                            from: n.audio.from,
                                            option: {audio: r.audio}
                                        })), n.video && (d = this._pc.addTransceiver("video", {direction: "recvonly"}), c.push({
                                            type: "video",
                                            transceiver: d,
                                            from: n.video.from,
                                            parameters: n.video.parameters,
                                            option: {video: r.video}
                                        }))) : (u.offerToReceiveAudio = !!r.audio, u.offerToReceiveVideo = !!r.video), this._subscribeTransceivers.set(a, {transceivers: c}), this._subscribedStreams.set(a, t), this._pc.createOffer(u).then(function (e) {
                                            return f = e, p._pc.setLocalDescription(e).catch(function (e) {
                                                throw h.default.error("Set local description failed. Message: " + JSON.stringify(e)), e
                                            })
                                        }, function (e) {
                                            throw h.default.error("Create offer failed. Error info: " + JSON.stringify(e)), e
                                        }).then(function () {
                                            var e = [];
                                            return c.forEach(function (t) {
                                                var r = t.type, n = t.transceiver, i = t.from, a = t.parameters;
                                                t.option;
                                                e.push({type: r, mid: n.mid, from: i, parameters: a})
                                            }), p._signaling.sendSignalingMessage("subscribe", {
                                                media: {tracks: e},
                                                transport: {id: p._id, type: "webrtc"}
                                            }).catch(function (e) {
                                                throw p._signaling.sendSignalingMessage("soac", {
                                                    id: p._id,
                                                    signaling: f
                                                }), e
                                            })
                                        }).then(function (e) {
                                            var t = e.id,
                                                n = new v.MessageEvent("id", {message: t, origin: p._remoteId});
                                            p.dispatchEvent(n), p._subscribeTransceivers.get(a).id = t, p._reverseIdMap.set(t, a), p._id && p._id !== e.transportId && h.default.warning("Server returns conflict ID: " + e.transportId), p._id = e.transportId, r && c.forEach(function (e) {
                                                e.type;
                                                var t = e.transceiver, r = e.option;
                                                f.sdp = p._setRtpReceiverOptions(f.sdp, r, t.mid)
                                            }), p._signaling.sendSignalingMessage("soac", {id: p._id, signaling: f})
                                        }).catch(function (e) {
                                            h.default.error("Failed to create offer or set SDP. Message: " + e.message), p._subscribeTransceivers.get(a).id ? (p._unsubscribe(a), p._rejectPromise(e), p._fireEndedEventOnPublicationOrSubscription()) : p._unsubscribe(a)
                                        }), e.abrupt("return", new Promise(function (e, t) {
                                            p._subscribePromises.set(a, {resolve: e, reject: t})
                                        }));
                                    case 45:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "close", value: function () {
                        this._pc && "closed" !== this._pc.signalingState && this._pc.close()
                    }
                }, {
                    key: "_chainSdpPromise", value: function (e) {
                        var t = this, r = this._sdpPromise;
                        return this._sdpPromise = r.then(function () {
                            return new Promise(function (r, n) {
                                var i = {finish: !1, resolve: r, reject: n};
                                t._sdpResolvers.push(i), t._sdpResolverMap.set(e, i), setTimeout(function () {
                                    return n("Timeout to get SDP answer")
                                }, 1e4)
                            })
                        }), r.catch(function (e) {
                        })
                    }
                }, {
                    key: "_nextSdpPromise", value: function () {
                        for (var e = !1; this._sdpResolveNum < this._sdpResolvers.length;) {
                            var t = this._sdpResolvers[this._sdpResolveNum];
                            this._sdpResolveNum++, t.finish || (t.resolve(), t.finish = !0, e = !0)
                        }
                        return e
                    }
                }, {
                    key: "_createInternalId", value: function () {
                        return this._internalCount++
                    }
                }, {
                    key: "_unpublish", value: function (e) {
                        var t = this;
                        if (this._publishTransceivers.has(e)) {
                            var r = this._publishTransceivers.get(e), n = r.id, i = r.transceivers;
                            if (n && (this._signaling.sendSignalingMessage("unpublish", {id: n}).catch(function (e) {
                                h.default.warning("MCU returns negative ack for unpublishing, " + e)
                            }), this._reverseIdMap.delete(n)), i.forEach(function (e) {
                                var r = e.transceiver;
                                "stable" === t._pc.signalingState && (r.sender.replaceTrack(null), t._pc.removeTrack(r.sender))
                            }), this._publishTransceivers.delete(e), this._publications.has(n)) {
                                var a = new v.OwtEvent("ended");
                                this._publications.get(n).dispatchEvent(a), this._publications.delete(n)
                            } else h.default.warning("Invalid publication to unpublish: " + n), this._publishPromises.has(e) && this._publishPromises.get(e).reject(new _.ConferenceError("Failed to publish"));
                            if (this._sdpResolverMap.has(e)) {
                                var o = this._sdpResolverMap.get(e);
                                o.finish || (o.resolve(), o.finish = !0), this._sdpResolverMap.delete(e)
                            }
                        }
                    }
                }, {
                    key: "_unsubscribe", value: function (e) {
                        if (this._subscribeTransceivers.has(e)) {
                            var t = this._subscribeTransceivers.get(e), r = t.id, n = t.transceivers;
                            if (r && this._signaling.sendSignalingMessage("unsubscribe", {id: r}).catch(function (e) {
                                h.default.warning("MCU returns negative ack for unsubscribing, " + e)
                            }), n.forEach(function (e) {
                                e.transceiver.receiver.track.stop()
                            }), this._subscribeTransceivers.delete(e), this._subscriptions.has(r)) {
                                var i = new v.OwtEvent("ended");
                                this._subscriptions.get(r).dispatchEvent(i), this._subscriptions.delete(r)
                            } else h.default.warning("Invalid subscription to unsubscribe: " + r), this._subscribePromises.has(e) && this._subscribePromises.get(e).reject(new _.ConferenceError("Failed to subscribe"));
                            if (this._subscribedStreams.has(e) && (this._subscribedStreams.get(e).mediaStream = null, this._subscribedStreams.delete(e)), this._sdpResolverMap.has(e)) {
                                var a = this._sdpResolverMap.get(e);
                                a.finish || (a.resolve(), a.finish = !0), this._sdpResolverMap.delete(e)
                            }
                        }
                    }
                }, {
                    key: "_muteOrUnmute", value: function (e, t, r, n) {
                        var i = this, a = r ? "stream-control" : "subscription-control", o = t ? "pause" : "play";
                        return this._signaling.sendSignalingMessage(a, {
                            id: e,
                            operation: o,
                            data: n
                        }).then(function () {
                            if (!r) {
                                var a = t ? "mute" : "unmute";
                                i._subscriptions.get(e).dispatchEvent(new v.MuteEvent(a, {kind: n}))
                            }
                        })
                    }
                }, {
                    key: "_applyOptions", value: function (e, t) {
                        if ("object" !== (0, s.default)(t) || "object" !== (0, s.default)(t.video)) return Promise.reject(new _.ConferenceError("Options should be an object."));
                        var r = {};
                        return r.resolution = t.video.resolution, r.framerate = t.video.frameRate, r.bitrate = t.video.bitrateMultiplier ? "x" + t.video.bitrateMultiplier.toString() : void 0, r.keyFrameInterval = t.video.keyFrameInterval, this._signaling.sendSignalingMessage("subscription-control", {
                            id: e,
                            operation: "update",
                            data: {video: {parameters: r}}
                        }).then()
                    }
                }, {
                    key: "_onRemoteStreamAdded", value: function (e) {
                        h.default.debug("Remote stream added.");
                        var t, r = !1, n = P(this._subscribeTransceivers);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var i = (0, a.default)(t.value, 2), o = i[0], s = i[1], u = s.id;
                                if (s.transceivers.find(function (t) {
                                    return t.transceiver === e.transceiver
                                })) {
                                    r = !0;
                                    var c = this._subscribedStreams.get(o);
                                    if (c.mediaStream) c.mediaStream.addTrack(e.track); else {
                                        this._subscribedStreams.get(o).mediaStream = e.streams[0];
                                        var l = this._subscriptions.get(u);
                                        l && this._subscribePromises.get(o).resolve(l)
                                    }
                                }
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        r || h.default.warning("Received remote stream without subscription.")
                    }
                }, {
                    key: "_onLocalIceCandidate", value: function (e) {
                        e.candidate ? "stable" !== this._pc.signalingState ? this._pendingCandidates.push(e.candidate) : this._sendCandidate(e.candidate) : h.default.debug("Empty candidate.")
                    }
                }, {
                    key: "_fireEndedEventOnPublicationOrSubscription", value: function () {
                        if (!this._ended) {
                            this._ended = !0;
                            var e, t = new v.OwtEvent("ended"), r = P(this._publications);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = (0, a.default)(e.value, 2)[1];
                                    n.dispatchEvent(t), n.stop()
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var i, o = P(this._subscriptions);
                            try {
                                for (o.s(); !(i = o.n()).done;) {
                                    var s = (0, a.default)(i.value, 2)[1];
                                    s.dispatchEvent(t), s.stop()
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            this.dispatchEvent(t), this.close()
                        }
                    }
                }, {
                    key: "_rejectPromise", value: function (e) {
                        e || (e = new _.ConferenceError("Connection failed or closed.")), this._pc && "closed" !== this._pc.iceConnectionState && this._pc.close();
                        var t, r = P(this._publishPromises);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                (0, a.default)(t.value, 2)[1].reject(e)
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        this._publishPromises.clear();
                        var n, i = P(this._subscribePromises);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                (0, a.default)(n.value, 2)[1].reject(e)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this._subscribePromises.clear()
                    }
                }, {
                    key: "_onIceConnectionStateChange", value: function (e) {
                        e && e.currentTarget && (h.default.debug("ICE connection state changed to " + e.currentTarget.iceConnectionState), "closed" !== e.currentTarget.iceConnectionState && "failed" !== e.currentTarget.iceConnectionState || ("failed" === e.currentTarget.iceConnectionState ? this._handleError("connection failed.") : this._fireEndedEventOnPublicationOrSubscription()))
                    }
                }, {
                    key: "_onConnectionStateChange", value: function (e) {
                        "closed" !== this._pc.connectionState && "failed" !== this._pc.connectionState || ("failed" === this._pc.connectionState ? this._handleError("connection failed.") : this._fireEndedEventOnPublicationOrSubscription())
                    }
                }, {
                    key: "_sendCandidate", value: function (e) {
                        this._signaling.sendSignalingMessage("soac", {
                            id: this._id,
                            signaling: {
                                type: "candidate",
                                candidate: {
                                    candidate: "a=" + e.candidate,
                                    sdpMid: e.sdpMid,
                                    sdpMLineIndex: e.sdpMLineIndex
                                }
                            }
                        })
                    }
                }, {
                    key: "_createPeerConnection", value: function () {
                        var e = this;
                        if (!this._pc) {
                            var t = this._config.rtcConfiguration || {};
                            y.isChrome() && (t.sdpSemantics = "unified-plan", t.bundlePolicy = "max-bundle"), this._pc = new RTCPeerConnection(t), this._pc.onicecandidate = function (t) {
                                e._onLocalIceCandidate.apply(e, [t])
                            }, this._pc.ontrack = function (t) {
                                e._onRemoteStreamAdded.apply(e, [t])
                            }, this._pc.oniceconnectionstatechange = function (t) {
                                e._onIceConnectionStateChange.apply(e, [t])
                            }, this._pc.onconnectionstatechange = function (t) {
                                e._onConnectionStateChange.apply(e, [t])
                            }
                        }
                    }
                }, {
                    key: "_getStats", value: function () {
                        return this._pc ? this._pc.getStats() : Promise.reject(new _.ConferenceError("PeerConnection is not available."))
                    }
                }, {
                    key: "_readyHandler", value: function (e) {
                        var t = this, r = this._reverseIdMap.get(e);
                        if (this._subscribePromises.has(r)) {
                            var n = new g.Subscription(e, function () {
                                t._unsubscribe(r)
                            }, function () {
                                return t._getStats()
                            }, function (r) {
                                return t._muteOrUnmute(e, !0, !1, r)
                            }, function (r) {
                                return t._muteOrUnmute(e, !1, !1, r)
                            }, function (r) {
                                return t._applyOptions(e, r)
                            });
                            this._subscriptions.set(e, n), this._subscribedStreams.get(r).addEventListener("ended", function () {
                                t._subscriptions.has(e) && t._subscriptions.get(e).dispatchEvent("ended", new v.OwtEvent("ended"))
                            }), this._subscribedStreams.get(r).mediaStream && this._subscribePromises.get(r).resolve(n)
                        } else if (this._publishPromises.has(r)) {
                            var i = new b.Publication(e, function () {
                                return t._unpublish(r), Promise.resolve()
                            }, function () {
                                return t._getStats()
                            }, function (r) {
                                return t._muteOrUnmute(e, !0, !0, r)
                            }, function (r) {
                                return t._muteOrUnmute(e, !1, !0, r)
                            });
                            this._publications.set(e, i), this._publishPromises.get(r).resolve(i)
                        }
                    }
                }, {
                    key: "_sdpHandler", value: function (e) {
                        var t = this;
                        "answer" === e.type && this._pc.setRemoteDescription(e).then(function () {
                            if (t._pendingCandidates.length > 0) {
                                var e, r = P(t._pendingCandidates);
                                try {
                                    for (r.s(); !(e = r.n()).done;) {
                                        var n = e.value;
                                        t._sendCandidate(n)
                                    }
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                            }
                        }, function (e) {
                            h.default.error("Set remote description failed: " + e), t._rejectPromise(e), t._fireEndedEventOnPublicationOrSubscription()
                        }).then(function () {
                            t._nextSdpPromise() || h.default.warning("Unexpected SDP promise state")
                        })
                    }
                }, {
                    key: "_errorHandler", value: function (e, t) {
                        if (!e) return this._handleError(t);
                        var r = new v.ErrorEvent("error", {error: new _.ConferenceError(t)});
                        this._publications.has(e) && this._publications.get(e).dispatchEvent(r), this._subscriptions.has(e) && this._subscriptions.get(e).dispatchEvent(r);
                        var n = this._reverseIdMap.get(e);
                        this._publishTransceivers.has(n) && this._unpublish(n), this._subscribeTransceivers.has(n) && this._unsubscribe(n)
                    }
                }, {
                    key: "_handleError", value: function (e) {
                        var t = new _.ConferenceError(e);
                        if (!this._ended) {
                            var r, n = new v.ErrorEvent("error", {error: t}), i = P(this._publications);
                            try {
                                for (i.s(); !(r = i.n()).done;) {
                                    (0, a.default)(r.value, 2)[1].dispatchEvent(n)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            var o, s = P(this._subscriptions);
                            try {
                                for (s.s(); !(o = s.n()).done;) {
                                    (0, a.default)(o.value, 2)[1].dispatchEvent(n)
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            this._fireEndedEventOnPublicationOrSubscription()
                        }
                    }
                }, {
                    key: "_setCodecOrder", value: function (e, t, r) {
                        if (t.audio) if (t.audio.codecs) {
                            var n = Array.from(t.audio.codecs, function (e) {
                                return e.name
                            });
                            e = S.reorderCodecs(e, "audio", n, r)
                        } else {
                            var i = Array.from(t.audio, function (e) {
                                return e.codec.name
                            });
                            e = S.reorderCodecs(e, "audio", i, r)
                        }
                        if (t.video) if (t.video.codecs) {
                            var a = Array.from(t.video.codecs, function (e) {
                                return e.name
                            });
                            e = S.reorderCodecs(e, "video", a, r)
                        } else {
                            var o = Array.from(t.video, function (e) {
                                return e.codec.name
                            });
                            e = S.reorderCodecs(e, "video", o, r)
                        }
                        return e
                    }
                }, {
                    key: "_setMaxBitrate", value: function (e, t, r) {
                        return "object" === (0, s.default)(t.audio) && (e = S.setMaxBitrate(e, t.audio, r)), "object" === (0, s.default)(t.video) && (e = S.setMaxBitrate(e, t.video, r)), e
                    }
                }, {
                    key: "_setRtpSenderOptions", value: function (e, t, r) {
                        return this._isRtpEncodingParameters(t.audio) || this._isRtpEncodingParameters(t.video) ? e : e = this._setMaxBitrate(e, t, r)
                    }
                }, {
                    key: "_setRtpReceiverOptions", value: function (e, t, r) {
                        return this._isRtpEncodingParameters(t.video) && y.isSafari() && t.video.length > 1 && (e = S.addLegacySimulcast(e, "video", t.video.length, r)), this._isRtpEncodingParameters(t.video) && this._videoCodecs ? e = S.reorderCodecs(e, "video", this._videoCodecs, r) : this._isRtpEncodingParameters(t.audio) || this._isRtpEncodingParameters(t.video) ? e : e = this._setCodecOrder(e, t, r)
                    }
                }, {
                    key: "_onStreamEvent", value: function (e) {
                        var t = [];
                        this._publications.has(e.id) && t.push(this._publications.get(e.id));
                        var r, n, i = P(this._subscribedStreams);
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var o = (0, a.default)(r.value, 2), s = o[0], u = o[1];
                                if (e.id === u.id) {
                                    var c = this._subscribeTransceivers.get(s).id;
                                    t.push(this._subscriptions.get(c));
                                    break
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        t.length && ("audio.status" === e.data.field ? n = m.TrackKind.AUDIO : "video.status" === e.data.field ? n = m.TrackKind.VIDEO : h.default.warning("Invalid data field for stream update info."), "active" === e.data.value ? t.forEach(function (e) {
                            return e.dispatchEvent(new v.MuteEvent("unmute", {kind: n}))
                        }) : "inactive" === e.data.value ? t.forEach(function (e) {
                            return e.dispatchEvent(new v.MuteEvent("mute", {kind: n}))
                        }) : h.default.warning("Invalid data value for stream update info."))
                    }
                }, {
                    key: "_isRtpEncodingParameters", value: function (e) {
                        if (!Array.isArray(e)) return !1;
                        var t = e[0];
                        return t.codecPayloadType || t.dtx || t.active || t.ptime || t.maxFramerate || t.scaleResolutionDownBy || t.rid
                    }
                }, {
                    key: "_isOwtEncodingParameters", value: function (e) {
                        return !!Array.isArray(e) && !!e[0].codec
                    }
                }]), r
            }(v.EventDispatcher);
            r.ConferencePeerConnectionChannel = E
        }, {
            "../base/event.js": 26,
            "../base/logger.js": 28,
            "../base/mediaformat.js": 29,
            "../base/publication.js": 31,
            "../base/sdputils.js": 32,
            "../base/utils.js": 35,
            "./error.js": 38,
            "./subscription.js": 46,
            "@babel/runtime/helpers/asyncToGenerator": 4,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/createClass": 7,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 16,
            "@babel/runtime/helpers/slicedToArray": 18,
            "@babel/runtime/helpers/typeof": 19,
            "@babel/runtime/regenerator": 22
        }],
        37: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.ConferenceClient = void 0;
            var a = i(e("@babel/runtime/regenerator")), o = i(e("@babel/runtime/helpers/asyncToGenerator")),
                s = (i(e("@babel/runtime/helpers/classCallCheck")), n(e("../base/event.js"))), u = e("./signaling.js"),
                c = i(e("../base/logger.js")), l = e("../base/base64.js"), d = e("./error.js"),
                f = n(e("../base/utils.js")), p = n(e("../base/stream.js")), h = e("./participant.js"),
                v = e("./info.js"), m = e("./channel.js"), b = e("./quicconnection.js"), g = e("./mixedstream.js"),
                _ = n(e("./streamutils.js"));

            function y(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return S(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0, i = function () {
                        };
                        return {
                            s: i, n: function () {
                                return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                            }, e: function (e) {
                                throw e
                            }, f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0, s = !1;
                return {
                    s: function () {
                        r = e[Symbol.iterator]()
                    }, n: function () {
                        var e = r.next();
                        return o = e.done, e
                    }, e: function (e) {
                        s = !0, a = e
                    }, f: function () {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            var P = 1, C = 2, w = 3, E = function (e, t) {
                var r = new s.OwtEvent(e, t);
                return r.participant = t.participant, r
            };
            r.ConferenceClient = function (e, t) {
                Object.setPrototypeOf(this, new s.EventDispatcher), e = e || {};
                var r, n, i, S = this, k = P, R = t || new u.SioSignaling, T = new Map, I = new Map, O = new Map,
                    j = new Map, x = null;

                function A(e, t) {
                    "soac" !== e && "progress" !== e ? "stream" === e ? "add" === t.status ? function (e) {
                        var t = D(e);
                        T.set(t.id, t);
                        var r = new p.StreamEvent("streamadded", {stream: t});
                        S.dispatchEvent(r)
                    }(t.data) : "remove" === t.status ? function (e) {
                        if (T.has(e.id)) {
                            var t = T.get(e.id), r = new s.OwtEvent("ended");
                            T.delete(t.id), t.dispatchEvent(r)
                        } else c.default.warning("Cannot find specific remote stream.")
                    }(t) : "update" === t.status && ("audio.status" === t.data.field || "video.status" === t.data.field ? j.forEach(function (r) {
                        r.onMessage(e, t)
                    }) : "activeInput" === t.data.field ? function (e) {
                        if (T.has(e.id)) {
                            var t = T.get(e.id),
                                r = new g.ActiveAudioInputChangeEvent("activeaudioinputchange", {activeAudioInputStreamId: e.data.value});
                            t.dispatchEvent(r)
                        } else c.default.warning("Cannot find specific remote stream.")
                    }(t) : "video.layout" === t.data.field ? function (e) {
                        if (T.has(e.id)) {
                            var t = T.get(e.id), r = new g.LayoutChangeEvent("layoutchange", {layout: e.data.value});
                            t.dispatchEvent(r)
                        } else c.default.warning("Cannot find specific remote stream.")
                    }(t) : "." === t.data.field ? function (e) {
                        if (T.has(e.id)) {
                            var t = T.get(e.id);
                            t.settings = _.convertToPublicationSettings(e.media), t.extraCapabilities = _.convertToSubscriptionCapabilities(e.media);
                            var r = new s.OwtEvent("updated");
                            t.dispatchEvent(r)
                        } else c.default.warning("Cannot find specific remote stream.")
                    }(t.data.value) : c.default.warning("Unknown stream event from MCU.")) : "text" === e ? function (e) {
                        var t = new s.MessageEvent("messagereceived", {message: e.message, origin: e.from, to: e.to});
                        S.dispatchEvent(t)
                    }(t) : "participant" === e && function (e) {
                        if ("join" === e.action) {
                            e = e.data;
                            var t = new h.Participant(e.id, e.role, e.user);
                            I.set(e.id, t);
                            var r = new E("participantjoined", {participant: t});
                            S.dispatchEvent(r)
                        } else if ("leave" === e.action) {
                            var n = e.data;
                            if (!I.has(n)) return void c.default.warning("Received leave message from MCU for an unknown participant.");
                            var i = I.get(n);
                            I.delete(n), i.dispatchEvent(new s.OwtEvent("left"))
                        }
                    }(t) : j.has(t.id) ? j.get(t.id).onMessage(e, t) : i && i.hasContentSessionId(t.id) ? i.onMessage(e, t) : c.default.warning("Cannot find a channel for incoming data.")
                }

                function D(e) {
                    if ("mixed" === e.type) return new g.RemoteMixedStream(e);
                    var t, r, n = e.media.tracks.find(function (e) {
                        return "audio" === e.type
                    }), i = e.media.tracks.find(function (e) {
                        return "video" === e.type
                    });
                    n && (t = n.source), i && (r = i.source);
                    var a = e.data,
                        o = new p.RemoteStream(e.id, e.info.owner, void 0, new p.StreamSourceInfo(t, r, a), e.info.attributes);
                    return o.settings = _.convertToPublicationSettings(e.media), o.extraCapabilities = _.convertToSubscriptionCapabilities(e.media), o
                }

                function M(e, t) {
                    return R.send(e, t)
                }

                function N() {
                    var e = Object.create(s.EventDispatcher);
                    return e.sendSignalingMessage = M, e
                }

                function L(t) {
                    var r = N(), n = new m.ConferencePeerConnectionChannel(e, r);
                    return n.addEventListener("id", function (e) {
                        j.has(e.message) ? c.default.warning("Channel already exists", e.message) : j.set(e.message, n)
                    }), n
                }

                function U() {
                    I.clear(), T.clear()
                }

                R.addEventListener("data", function (e) {
                    A(e.message.notification, e.message.data)
                }), R.addEventListener("disconnect", function () {
                    U(), k = P, S.dispatchEvent(new s.OwtEvent("serverdisconnected"))
                }), Object.defineProperty(this, "info", {
                    configurable: !1, get: function () {
                        return n ? new v.ConferenceInfo(n.id, Array.from(I, function (e) {
                            return e[1]
                        }), Array.from(T, function (e) {
                            return e[1]
                        }), r) : null
                    }
                }), this.join = function (t) {
                    return new Promise(function (a, o) {
                        var s = JSON.parse(l.Base64.decodeBase64(t)), u = !0 === s.secure, c = s.host;
                        if ("string" == typeof c) if (-1 === c.indexOf("http") && (c = u ? "https://" + c : "http://" + c), k === P) {
                            k = C;
                            var p = {token: t, userAgent: f.sysInfo(), protocol: "1.2"};
                            R.connect(c, u, p).then(function (t) {
                                if (k = w, void 0 !== (n = t.room).streams) {
                                    var o, u = y(n.streams);
                                    try {
                                        for (u.s(); !(o = u.n()).done;) {
                                            var c = o.value;
                                            "mixed" === c.type && (c.viewport = c.info.label), T.set(c.id, D(c))
                                        }
                                    } catch (e) {
                                        u.e(e)
                                    } finally {
                                        u.f()
                                    }
                                }
                                if (t.room && void 0 !== t.room.participants) {
                                    var l, d = y(t.room.participants);
                                    try {
                                        for (d.s(); !(l = d.n()).done;) {
                                            var f = l.value;
                                            I.set(f.id, new h.Participant(f.id, f.role, f.user)), f.id === t.id && (r = I.get(f.id))
                                        }
                                    } catch (e) {
                                        d.e(e)
                                    } finally {
                                        d.f()
                                    }
                                }
                                "function" == typeof QuicTransport && s.webTransportUrl && (i = new b.QuicConnection(s.webTransportUrl, t.webTransportToken, N(), e.webTransportConfiguration)), a(new v.ConferenceInfo(t.room.id, Array.from(I.values()), Array.from(T.values()), r))
                            }, function (e) {
                                k = P, o(new d.ConferenceError(e))
                            })
                        } else o(new d.ConferenceError("connection state invalid")); else o(new d.ConferenceError("Invalid host."))
                    })
                }, this.publish = function (e, t, r) {
                    return e instanceof p.LocalStream ? e.source.data ? i.publish(e) : O.has(e.mediaStream.id) ? Promise.reject(new d.ConferenceError("Cannot publish a published stream.")) : (x || (x = L()).addEventListener("ended", function () {
                        x = null
                    }), x.publish(e, t, r)) : Promise.reject(new d.ConferenceError("Invalid stream."))
                }, this.subscribe = function (e, t) {
                    return e instanceof p.RemoteStream ? e.source.data ? e.source.audio || e.source.video ? Promise.reject(new TypeError("Invalid source info. A remote stream is either a data stream or a media stream.")) : i ? i.subscribe(e) : Promise.reject(new TypeError("WebTransport is not supported.")) : (x || (x = L()).addEventListener("ended", function () {
                        x = null
                    }), x.subscribe(e, t)) : Promise.reject(new d.ConferenceError("Invalid stream."))
                }, this.send = function (e, t) {
                    return void 0 === t && (t = "all"), M("text", {to: t, message: e})
                }, this.leave = function () {
                    return R.disconnect().then(function () {
                        U(), k = P
                    })
                }, b.QuicConnection && (this.createSendStream = (0, o.default)(a.default.mark(function e() {
                    return a.default.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (i) {
                                    e.next = 2;
                                    break
                                }
                                throw new d.ConferenceError("No QUIC connection available.");
                            case 2:
                                return e.abrupt("return", i.createSendStream());
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }, e)
                })))
            }
        }, {
            "../base/base64.js": 24,
            "../base/event.js": 26,
            "../base/logger.js": 28,
            "../base/stream.js": 33,
            "../base/utils.js": 35,
            "./channel.js": 36,
            "./error.js": 38,
            "./info.js": 40,
            "./mixedstream.js": 41,
            "./participant.js": 42,
            "./quicconnection.js": 43,
            "./signaling.js": 44,
            "./streamutils.js": 45,
            "@babel/runtime/helpers/asyncToGenerator": 4,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11,
            "@babel/runtime/regenerator": 22
        }],
        38: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.ConferenceError = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), a = n(e("@babel/runtime/helpers/inherits")),
                o = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                s = n(e("@babel/runtime/helpers/getPrototypeOf"));

            function u(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, s.default)(e);
                    if (t) {
                        var i = (0, s.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, o.default)(this, r)
                }
            }

            var c = function (e) {
                (0, a.default)(r, e);
                var t = u(r);

                function r(e) {
                    return (0, i.default)(this, r), t.call(this, e)
                }

                return r
            }((0, n(e("@babel/runtime/helpers/wrapNativeSuper")).default)(Error));
            r.ConferenceError = c
        }, {
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/possibleConstructorReturn": 16,
            "@babel/runtime/helpers/wrapNativeSuper": 21
        }],
        39: [function (e, t, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {value: !0}), Object.defineProperty(r, "ConferenceClient", {
                enumerable: !0,
                get: function () {
                    return n.ConferenceClient
                }
            }), Object.defineProperty(r, "SioSignaling", {
                enumerable: !0, get: function () {
                    return i.SioSignaling
                }
            });
            var n = e("./client.js"), i = e("./signaling.js")
        }, {"./client.js": 37, "./signaling.js": 44}],
        40: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.ConferenceInfo = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck"));
            r.ConferenceInfo = function e(t, r, n, a) {
                (0, i.default)(this, e), this.id = t, this.participants = r, this.remoteStreams = n, this.self = a
            }
        }, {"@babel/runtime/helpers/classCallCheck": 5, "@babel/runtime/helpers/interopRequireDefault": 10}],
        41: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.LayoutChangeEvent = r.ActiveAudioInputChangeEvent = r.RemoteMixedStream = void 0;
            var a = i(e("@babel/runtime/helpers/classCallCheck")), o = i(e("@babel/runtime/helpers/inherits")),
                s = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
                u = i(e("@babel/runtime/helpers/getPrototypeOf")), c = n(e("../base/stream.js")),
                l = n(e("./streamutils.js")), d = e("../base/event.js");

            function f(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, u.default)(e);
                    if (t) {
                        var i = (0, u.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, s.default)(this, r)
                }
            }

            var p = function (e) {
                (0, o.default)(r, e);
                var t = f(r);

                function r(e) {
                    var n;
                    if ((0, a.default)(this, r), "mixed" !== e.type) throw new TypeError("Not a mixed stream");
                    return (n = t.call(this, e.id, void 0, void 0, new c.StreamSourceInfo("mixed", "mixed"))).settings = l.convertToPublicationSettings(e.media), n.extraCapabilities = l.convertToSubscriptionCapabilities(e.media), n
                }

                return r
            }(c.RemoteStream);
            r.RemoteMixedStream = p;
            var h = function (e) {
                (0, o.default)(r, e);
                var t = f(r);

                function r(e, n) {
                    var i;
                    return (0, a.default)(this, r), (i = t.call(this, e)).activeAudioInputStreamId = n.activeAudioInputStreamId, i
                }

                return r
            }(d.OwtEvent);
            r.ActiveAudioInputChangeEvent = h;
            var v = function (e) {
                (0, o.default)(r, e);
                var t = f(r);

                function r(e, n) {
                    var i;
                    return (0, a.default)(this, r), (i = t.call(this, e)).layout = n.layout, i
                }

                return r
            }(d.OwtEvent);
            r.LayoutChangeEvent = v
        }, {
            "../base/event.js": 26,
            "../base/stream.js": 33,
            "./streamutils.js": 45,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 16
        }],
        42: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.Participant = void 0;
            var a = i(e("@babel/runtime/helpers/classCallCheck")),
                o = i(e("@babel/runtime/helpers/assertThisInitialized")), s = i(e("@babel/runtime/helpers/inherits")),
                u = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
                c = i(e("@babel/runtime/helpers/getPrototypeOf"));

            function l(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, c.default)(e);
                    if (t) {
                        var i = (0, c.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, u.default)(this, r)
                }
            }

            var d = function (e) {
                (0, s.default)(r, e);
                var t = l(r);

                function r(e, n, i) {
                    var s;
                    return (0, a.default)(this, r), s = t.call(this), Object.defineProperty((0, o.default)(s), "id", {
                        configurable: !1,
                        writable: !1,
                        value: e
                    }), Object.defineProperty((0, o.default)(s), "role", {
                        configurable: !1,
                        writable: !1,
                        value: n
                    }), Object.defineProperty((0, o.default)(s), "userId", {
                        configurable: !1,
                        writable: !1,
                        value: i
                    }), s
                }

                return r
            }(n(e("../base/event.js")).EventDispatcher);
            r.Participant = d
        }, {
            "../base/event.js": 26,
            "@babel/runtime/helpers/assertThisInitialized": 3,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 16
        }],
        43: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.QuicConnection = void 0;
            var i = n(e("@babel/runtime/regenerator")), a = n(e("@babel/runtime/helpers/asyncToGenerator")),
                o = n(e("@babel/runtime/helpers/classCallCheck")), s = n(e("@babel/runtime/helpers/createClass")),
                u = n(e("@babel/runtime/helpers/inherits")),
                c = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                l = n(e("@babel/runtime/helpers/getPrototypeOf")), d = n(e("../base/logger.js")),
                f = e("../base/event.js"), p = e("../base/publication.js"), h = e("./subscription.js"),
                v = e("../base/base64.js");

            function m(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return b(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0, i = function () {
                        };
                        return {
                            s: i, n: function () {
                                return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                            }, e: function (e) {
                                throw e
                            }, f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0, s = !1;
                return {
                    s: function () {
                        r = e[Symbol.iterator]()
                    }, n: function () {
                        var e = r.next();
                        return o = e.done, e
                    }, e: function (e) {
                        s = !0, a = e
                    }, f: function () {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function g(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, l.default)(e);
                    if (t) {
                        var i = (0, l.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, c.default)(this, r)
                }
            }

            var _ = function (e) {
                (0, u.default)(r, e);
                var t = g(r);

                function r(e, n, i, a) {
                    var s;
                    return (0, o.default)(this, r), (s = t.call(this))._token = JSON.parse(v.Base64.decodeBase64(n)), s._signaling = i, s._ended = !1, s._quicStreams = new Map, s._quicTransport = new QuicTransport(e, a), s._subscribePromises = new Map, s._transportId = s._token.transportId, s._init(), s._authenticate(n), s
                }

                return (0, s.default)(r, [{
                    key: "onMessage", value: function (e, t) {
                        switch (e) {
                            case"progress":
                                "soac" === t.status ? this._soacHandler(t.data) : "ready" === t.status ? this._readyHandler() : "error" === t.status && this._errorHandler(t.data);
                                break;
                            case"stream":
                                this._onStreamEvent(t);
                                break;
                            default:
                                d.default.warning("Unknown notification from MCU.")
                        }
                    }
                }, {
                    key: "_init", value: function () {
                        var e = (0, a.default)(i.default.mark(function e() {
                            var t, r, n, a, o, s, u, c, l, f;
                            return i.default.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        t = this._quicTransport.receiveStreams().getReader(), d.default.info("Reader: " + t), r = !1;
                                    case 3:
                                        if (r) {
                                            e.next = 31;
                                            break
                                        }
                                        return e.next = 6, t.read();
                                    case 6:
                                        if (n = e.sent, a = n.value, o = n.done, d.default.info("New stream received"), !o) {
                                            e.next = 13;
                                            break
                                        }
                                        return r = !0, e.abrupt("break", 31);
                                    case 13:
                                        return s = a.readable.getReader(), e.next = 16, s.read();
                                    case 16:
                                        if (u = e.sent, c = u.value, !u.done) {
                                            e.next = 22;
                                            break
                                        }
                                        return d.default.error("Stream closed unexpectedly."), e.abrupt("return");
                                    case 22:
                                        if (16 == c.length) {
                                            e.next = 25;
                                            break
                                        }
                                        return d.default.error("Unexpected length for UUID."), e.abrupt("return");
                                    case 25:
                                        s.releaseLock(), l = this._uint8ArrayToUuid(c), this._quicStreams.set(l, a), this._subscribePromises.has(l) && (f = this._createSubscription(l, a), this._subscribePromises.get(l).resolve(f)), e.next = 3;
                                        break;
                                    case 31:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_createSubscription", value: function (e, t) {
                        var r = new h.Subscription(e, function () {
                            t.abortReading()
                        });
                        return r.stream = t, r
                    }
                }, {
                    key: "_authenticate", value: function () {
                        var e = (0, a.default)(i.default.mark(function e(t) {
                            var r, n, a, o, s;
                            return i.default.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._quicTransport.ready;
                                    case 2:
                                        return e.next = 4, this._quicTransport.createBidirectionalStream();
                                    case 4:
                                        return r = e.sent, n = r.readable.getReader(), a = r.writable.getWriter(), e.next = 9, a.ready;
                                    case 9:
                                        return a.write(new Uint8Array(16)), o = new TextEncoder, s = o.encode(t), a.write(Uint32Array.of(s.length)), a.write(s), e.next = 16, n.read();
                                    case 16:
                                        d.default.info("Authentication success.");
                                    case 17:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "createSendStream", value: function () {
                        var e = (0, a.default)(i.default.mark(function e() {
                            var t;
                            return i.default.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._quicTransport.ready;
                                    case 2:
                                        return e.next = 4, this._quicTransport.createSendStream();
                                    case 4:
                                        return t = e.sent, e.abrupt("return", t);
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "createSendStream1", value: function () {
                        var e = (0, a.default)(i.default.mark(function e(t) {
                            var r, n, a;
                            return i.default.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return d.default.info("Create stream."), e.next = 3, this._quicTransport.ready;
                                    case 3:
                                        return e.next = 5, this._initiatePublication();
                                    case 5:
                                        return r = e.sent, e.next = 8, this._quicTransport.createSendStream();
                                    case 8:
                                        return n = e.sent, a = n.writable.getWriter(), e.next = 12, a.ready;
                                    case 12:
                                        return a.write(this._uuidToUint8Array(r)), a.releaseLock(), this._quicStreams.set(r, n), e.abrupt("return", n);
                                    case 16:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "publish", value: function () {
                        var e = (0, a.default)(i.default.mark(function e(t) {
                            var r, n, a, o, s = this;
                            return i.default.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._initiatePublication();
                                    case 2:
                                        return r = e.sent, n = t.stream, a = n.writable.getWriter(), e.next = 7, a.ready;
                                    case 7:
                                        return a.write(this._uuidToUint8Array(r)), a.releaseLock(), d.default.info("publish id"), this._quicStreams.set(r, n), o = new p.Publication(r, function () {
                                            s._signaling.sendSignalingMessage("unpublish", {id: o}).catch(function (e) {
                                                d.default.warning("MCU returns negative ack for unpublishing, " + e)
                                            })
                                        }), e.abrupt("return", o);
                                    case 13:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "hasContentSessionId", value: function (e) {
                        return this._quicStreams.has(e)
                    }
                }, {
                    key: "_uuidToUint8Array", value: function (e) {
                        if (32 != e.length) throw new TypeError("Incorrect UUID.");
                        for (var t = new Uint8Array(16), r = 0; r < 16; r++) t[r] = parseInt(e.substring(2 * r, 2 * r + 2), 16);
                        return t
                    }
                }, {
                    key: "_uint8ArrayToUuid", value: function (e) {
                        var t, r = "", n = m(e);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                r += t.value.toString(16).padStart(2, "0")
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return r
                    }
                }, {
                    key: "subscribe", value: function (e) {
                        var t = this;
                        return new Promise(function (r, n) {
                            t._signaling.sendSignalingMessage("subscribe", {
                                media: null,
                                data: {from: e.id},
                                transport: {type: "quic", id: t._transportId}
                            }).then(function (e) {
                                if (t._quicStreams.has(e.id)) {
                                    var i = t._createSubscription(e.id, t._quicStreams.get(e.id));
                                    r(i)
                                } else t._quicStreams.set(e.id, null), t._subscribePromises.set(e.id, {
                                    resolve: r,
                                    reject: n
                                })
                            })
                        })
                    }
                }, {
                    key: "_readAndPrint", value: function () {
                        var e = this;
                        this._quicStreams[0].waitForReadable(5).then(function () {
                            var t = new Uint8Array(e._quicStreams[0].readBufferedAmount);
                            e._quicStreams[0].readInto(t), d.default.info("Read data: " + t), e._readAndPrint()
                        })
                    }
                }, {
                    key: "_initiatePublication", value: function () {
                        var e = (0, a.default)(i.default.mark(function e() {
                            var t;
                            return i.default.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._signaling.sendSignalingMessage("publish", {
                                            media: null,
                                            data: !0,
                                            transport: {type: "quic", id: this._transportId}
                                        });
                                    case 2:
                                        if (t = e.sent, this._transportId === t.transportId) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error("Transport ID not match.");
                                    case 5:
                                        return e.abrupt("return", t.id);
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_readyHandler", value: function () {
                    }
                }]), r
            }(f.EventDispatcher);
            r.QuicConnection = _
        }, {
            "../base/base64.js": 24,
            "../base/event.js": 26,
            "../base/logger.js": 28,
            "../base/publication.js": 31,
            "./subscription.js": 46,
            "@babel/runtime/helpers/asyncToGenerator": 4,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/createClass": 7,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/possibleConstructorReturn": 16,
            "@babel/runtime/regenerator": 22
        }],
        44: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.SioSignaling = void 0;
            var a = i(e("@babel/runtime/helpers/classCallCheck")), o = i(e("@babel/runtime/helpers/createClass")),
                s = i(e("@babel/runtime/helpers/inherits")),
                u = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
                c = i(e("@babel/runtime/helpers/getPrototypeOf")), l = i(e("../base/logger.js")),
                d = n(e("../base/event.js")), f = e("./error.js"), p = e("../base/base64.js");

            function h(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, c.default)(e);
                    if (t) {
                        var i = (0, c.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, u.default)(this, r)
                }
            }

            function v(e, t, r, n) {
                "ok" === e || "success" === e ? r(t) : "error" === e ? n(t) : l.default.error("MCU returns unknown ack.")
            }

            var m = function (e) {
                (0, s.default)(r, e);
                var t = h(r);

                function r() {
                    var e;
                    return (0, a.default)(this, r), (e = t.call(this))._socket = null, e._loggedIn = !1, e._reconnectTimes = 0, e._reconnectionTicket = null, e._refreshReconnectionTicket = null, e
                }

                return (0, o.default)(r, [{
                    key: "connect", value: function (e, t, r) {
                        var n = this;
                        return new Promise(function (t, i) {
                            var a = {reconnection: !0, reconnectionAttempts: 10, "force new connection": !0};
                            n._socket = io(e, a), ["participant", "text", "stream", "progress"].forEach(function (e) {
                                n._socket.on(e, function (t) {
                                    n.dispatchEvent(new d.MessageEvent("data", {message: {notification: e, data: t}}))
                                })
                            }), n._socket.on("reconnecting", function () {
                                n._reconnectTimes++
                            }), n._socket.on("reconnect_failed", function () {
                                n._reconnectTimes >= 10 && n.dispatchEvent(new d.OwtEvent("disconnect"))
                            }), n._socket.on("connect_error", function (t) {
                                i("connect_error:".concat(e))
                            }), n._socket.on("drop", function () {
                                n._reconnectTimes = 10
                            }), n._socket.on("disconnect", function () {
                                n._clearReconnectionTask(), n._reconnectTimes >= 10 && (n._loggedIn = !1, n.dispatchEvent(new d.OwtEvent("disconnect")))
                            }), n._socket.emit("login", r, function (e, r) {
                                "ok" === e && (n._loggedIn = !0, n._onReconnectionTicket(r.reconnectionTicket), n._socket.on("connect", function () {
                                    n._socket.emit("relogin", n._reconnectionTicket, function (e, t) {
                                        "ok" === e ? (n._reconnectTimes = 0, n._onReconnectionTicket(t)) : n.dispatchEvent(new d.OwtEvent("disconnect"))
                                    })
                                })), v(e, r, t, i)
                            })
                        })
                    }
                }, {
                    key: "disconnect", value: function () {
                        var e = this;
                        return !this._socket || this._socket.disconnected ? Promise.reject(new f.ConferenceError("Portal is not connected.")) : new Promise(function (t, r) {
                            e._socket.emit("logout", function (n, i) {
                                e._reconnectTimes = 10, e._socket.disconnect(), v(n, i, t, r)
                            })
                        })
                    }
                }, {
                    key: "send", value: function (e, t) {
                        var r = this;
                        return new Promise(function (n, i) {
                            r._socket.emit(e, t, function (e, t) {
                                v(e, t, n, i)
                            })
                        })
                    }
                }, {
                    key: "_onReconnectionTicket", value: function (e) {
                        var t = this;
                        this._reconnectionTicket = e;
                        var r = JSON.parse(p.Base64.decodeBase64(e)), n = Date.now();
                        if (r.notAfter <= n - 1e4) l.default.warning("Reconnection ticket expires too soon."); else {
                            var i = r.notAfter - n - 6e4;
                            i < 0 && (i = r.notAfter - n - 1e4), this._clearReconnectionTask(), this._refreshReconnectionTicket = setTimeout(function () {
                                t._socket.emit("refreshReconnectionTicket", function (e, r) {
                                    "ok" === e ? t._onReconnectionTicket(r) : l.default.warning("Failed to refresh reconnection ticket.")
                                })
                            }, i)
                        }
                    }
                }, {
                    key: "_clearReconnectionTask", value: function () {
                        clearTimeout(this._refreshReconnectionTicket), this._refreshReconnectionTicket = null
                    }
                }]), r
            }(d.EventDispatcher);
            r.SioSignaling = m
        }, {
            "../base/base64.js": 24,
            "../base/event.js": 26,
            "../base/logger.js": 28,
            "./error.js": 38,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/createClass": 7,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 16
        }],
        45: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault"),
                i = e("@babel/runtime/helpers/interopRequireWildcard");
            Object.defineProperty(r, "__esModule", {value: !0}), r.convertToPublicationSettings = function (e) {
                var t, r, n, i, u, c, d, f, p = [], h = [], v = l(e.tracks);
                try {
                    for (v.s(); !(f = v.n()).done;) {
                        var m = f.value;
                        if ("audio" === m.type) {
                            m.format && (t = new s.AudioCodecParameters(m.format.codec, m.format.channelNum, m.format.sampleRate));
                            var b = new a.AudioPublicationSettings(t);
                            b._trackId = m.id, p.push(b)
                        } else if ("video" === m.type) {
                            m.format && (r = new s.VideoCodecParameters(m.format.codec, m.format.profile)), m.parameters && (m.parameters.resolution && (n = new o.Resolution(m.parameters.resolution.width, m.parameters.resolution.height)), i = m.parameters.framerate, u = 1e3 * m.parameters.bitrate, c = m.parameters.keyFrameInterval), m.rid && (d = m.rid);
                            var g = new a.VideoPublicationSettings(r, n, i, u, c, d);
                            g._trackId = m.id, h.push(g)
                        }
                    }
                } catch (e) {
                    v.e(e)
                } finally {
                    v.f()
                }
                return new a.PublicationSettings(p, h)
            }, r.convertToSubscriptionCapabilities = function (e) {
                var t, r, n, i = l(e.tracks);
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        var a = n.value;
                        if ("audio" === a.type) {
                            var c = [];
                            if (a.optional && a.optional.format) {
                                var d, v = l(a.optional.format);
                                try {
                                    for (v.s(); !(d = v.n()).done;) {
                                        var m = d.value,
                                            b = new s.AudioCodecParameters(m.codec, m.channelNum, m.sampleRate);
                                        c.push(b)
                                    }
                                } catch (e) {
                                    v.e(e)
                                } finally {
                                    v.f()
                                }
                            }
                            c.sort(), t = new u.AudioSubscriptionCapabilities(c)
                        } else if ("video" === a.type) {
                            var g = [];
                            if (a.optional && a.optional.format) {
                                var _, y = l(a.optional.format);
                                try {
                                    for (y.s(); !(_ = y.n()).done;) {
                                        var S = _.value, P = new s.VideoCodecParameters(S.codec, S.profile);
                                        g.push(P)
                                    }
                                } catch (e) {
                                    y.e(e)
                                } finally {
                                    y.f()
                                }
                            }
                            g.sort();
                            var C = Array.from(a.optional.parameters.resolution, function (e) {
                                return new o.Resolution(e.width, e.height)
                            });
                            C.sort(h);
                            var w = Array.from(a.optional.parameters.bitrate, function (e) {
                                return f(e)
                            });
                            w.push(1), w.sort(p);
                            var E = JSON.parse(JSON.stringify(a.optional.parameters.framerate));
                            E.sort(p);
                            var k = JSON.parse(JSON.stringify(a.optional.parameters.keyFrameInterval));
                            k.sort(p), r = new u.VideoSubscriptionCapabilities(g, C, E, w, k)
                        }
                    }
                } catch (e) {
                    i.e(e)
                } finally {
                    i.f()
                }
                return new u.SubscriptionCapabilities(t, r)
            };
            var a = i(e("../base/publication.js")), o = i(e("../base/mediaformat.js")), s = i(e("../base/codec.js")),
                u = i(e("./subscription.js")), c = n(e("../base/logger.js"));

            function l(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return d(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0, i = function () {
                        };
                        return {
                            s: i, n: function () {
                                return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                            }, e: function (e) {
                                throw e
                            }, f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0, s = !1;
                return {
                    s: function () {
                        r = e[Symbol.iterator]()
                    }, n: function () {
                        var e = r.next();
                        return o = e.done, e
                    }, e: function (e) {
                        s = !0, a = e
                    }, f: function () {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function f(e) {
                return "string" == typeof e && e.startsWith("x") ? Number.parseFloat(e.replace(/^x/, "")) : (c.default.warning("Invalid bitrate multiplier input."), 0)
            }

            function p(e, t) {
                return e - t
            }

            function h(e, t) {
                return e.width !== t.width ? e.width - t.width : e.height - t.height
            }
        }, {
            "../base/codec.js": 25,
            "../base/logger.js": 28,
            "../base/mediaformat.js": 29,
            "../base/publication.js": 31,
            "./subscription.js": 46,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11
        }],
        46: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.Subscription = r.SubscriptionUpdateOptions = r.VideoSubscriptionUpdateOptions = r.SubscribeOptions = r.VideoSubscriptionConstraints = r.AudioSubscriptionConstraints = r.SubscriptionCapabilities = r.VideoSubscriptionCapabilities = r.AudioSubscriptionCapabilities = void 0;
            var i = n(e("@babel/runtime/helpers/assertThisInitialized")), a = n(e("@babel/runtime/helpers/inherits")),
                o = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                s = n(e("@babel/runtime/helpers/getPrototypeOf")), u = n(e("@babel/runtime/helpers/classCallCheck")),
                c = e("../base/event.js");

            function l(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, s.default)(e);
                    if (t) {
                        var i = (0, s.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, o.default)(this, r)
                }
            }

            r.AudioSubscriptionCapabilities = function e(t) {
                (0, u.default)(this, e), this.codecs = t
            };
            r.VideoSubscriptionCapabilities = function e(t, r, n, i, a) {
                (0, u.default)(this, e), this.codecs = t, this.resolutions = r, this.frameRates = n, this.bitrateMultipliers = i, this.keyFrameIntervals = a
            };
            r.SubscriptionCapabilities = function e(t, r) {
                (0, u.default)(this, e), this.audio = t, this.video = r
            };
            r.AudioSubscriptionConstraints = function e(t) {
                (0, u.default)(this, e), this.codecs = t
            };
            r.VideoSubscriptionConstraints = function e(t, r, n, i, a, o) {
                (0, u.default)(this, e), this.codecs = t, this.resolution = r, this.frameRate = n, this.bitrateMultiplier = i, this.keyFrameInterval = a, this.rid = o
            };
            r.SubscribeOptions = function e(t, r, n) {
                (0, u.default)(this, e), this.audio = t, this.video = r, this.transport = n
            };
            r.VideoSubscriptionUpdateOptions = function e() {
                (0, u.default)(this, e), this.resolution = void 0, this.frameRate = void 0, this.bitrateMultipliers = void 0, this.keyFrameInterval = void 0
            };
            r.SubscriptionUpdateOptions = function e() {
                (0, u.default)(this, e), this.video = void 0
            };
            var d = function (e) {
                (0, a.default)(r, e);
                var t = l(r);

                function r(e, n, a, o, s, c) {
                    var l;
                    if ((0, u.default)(this, r), l = t.call(this), !e) throw new TypeError("ID cannot be null or undefined.");
                    return Object.defineProperty((0, i.default)(l), "id", {
                        configurable: !1,
                        writable: !1,
                        value: e
                    }), l.stop = n, l.getStats = a, l.mute = o, l.unmute = s, l.applyOptions = c, l
                }

                return r
            }(c.EventDispatcher);
            r.Subscription = d
        }, {
            "../base/event.js": 26,
            "@babel/runtime/helpers/assertThisInitialized": 3,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/possibleConstructorReturn": 16
        }],
        47: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard");
            Object.defineProperty(r, "__esModule", {value: !0}), r.Conference = r.P2P = r.Base = void 0;
            var i = n(e("./base/export.js")), a = n(e("./p2p/export.js")), o = n(e("./conference/export.js")), s = i;
            r.Base = s;
            var u = a;
            r.P2P = u;
            var c = o;
            r.Conference = c
        }, {
            "./base/export.js": 27,
            "./conference/export.js": 39,
            "./p2p/export.js": 49,
            "@babel/runtime/helpers/interopRequireWildcard": 11
        }],
        48: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.getErrorByCode = function (e) {
                return {
                    2100: l.P2P_CONN_SERVER_UNKNOWN,
                    2101: l.P2P_CONN_SERVER_UNAVAILABLE,
                    2102: l.P2P_CONN_SERVER_BUSY,
                    2103: l.P2P_CONN_SERVER_NOT_SUPPORTED,
                    2110: l.P2P_CONN_CLIENT_UNKNOWN,
                    2111: l.P2P_CONN_CLIENT_NOT_INITIALIZED,
                    2120: l.P2P_CONN_AUTH_UNKNOWN,
                    2121: l.P2P_CONN_AUTH_FAILED,
                    2201: l.P2P_MESSAGING_TARGET_UNREACHABLE,
                    2400: l.P2P_CLIENT_UNKNOWN,
                    2401: l.P2P_CLIENT_UNSUPPORTED_METHOD,
                    2402: l.P2P_CLIENT_ILLEGAL_ARGUMENT,
                    2403: l.P2P_CLIENT_INVALID_STATE,
                    2404: l.P2P_CLIENT_NOT_ALLOWED,
                    2500: l.P2P_WEBRTC_UNKNOWN,
                    2501: l.P2P_WEBRTC_SDP
                }[e]
            }, r.P2PError = r.errors = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")), a = n(e("@babel/runtime/helpers/inherits")),
                o = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
                s = n(e("@babel/runtime/helpers/getPrototypeOf")), u = n(e("@babel/runtime/helpers/wrapNativeSuper"));

            function c(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, s.default)(e);
                    if (t) {
                        var i = (0, s.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, o.default)(this, r)
                }
            }

            var l = {
                P2P_CONN_SERVER_UNKNOWN: {code: 2100, message: "Server unknown error."},
                P2P_CONN_SERVER_UNAVAILABLE: {code: 2101, message: "Server is unavaliable."},
                P2P_CONN_SERVER_BUSY: {code: 2102, message: "Server is too busy."},
                P2P_CONN_SERVER_NOT_SUPPORTED: {code: 2103, message: "Method has not been supported by server."},
                P2P_CONN_CLIENT_UNKNOWN: {code: 2110, message: "Client unknown error."},
                P2P_CONN_CLIENT_NOT_INITIALIZED: {code: 2111, message: "Connection is not initialized."},
                P2P_CONN_AUTH_UNKNOWN: {code: 2120, message: "Authentication unknown error."},
                P2P_CONN_AUTH_FAILED: {code: 2121, message: "Wrong username or token."},
                P2P_MESSAGING_TARGET_UNREACHABLE: {code: 2201, message: "Remote user cannot be reached."},
                P2P_CLIENT_DENIED: {code: 2202, message: "User is denied."},
                P2P_CLIENT_UNKNOWN: {code: 2400, message: "Unknown errors."},
                P2P_CLIENT_UNSUPPORTED_METHOD: {code: 2401, message: "This method is unsupported in current browser."},
                P2P_CLIENT_ILLEGAL_ARGUMENT: {code: 2402, message: "Illegal argument."},
                P2P_CLIENT_INVALID_STATE: {code: 2403, message: "Invalid peer state."},
                P2P_CLIENT_NOT_ALLOWED: {code: 2404, message: "Remote user is not allowed."},
                P2P_WEBRTC_UNKNOWN: {code: 2500, message: "WebRTC error."},
                P2P_WEBRTC_SDP: {code: 2502, message: "SDP error."}
            };
            r.errors = l;
            var d = function (e) {
                (0, a.default)(r, e);
                var t = c(r);

                function r(e, n) {
                    var a;
                    return (0, i.default)(this, r), (a = t.call(this, n)).code = "number" == typeof e ? e : e.code, a
                }

                return r
            }((0, u.default)(Error));
            r.P2PError = d
        }, {
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/possibleConstructorReturn": 16,
            "@babel/runtime/helpers/wrapNativeSuper": 21
        }],
        49: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), Object.defineProperty(r, "P2PClient", {
                enumerable: !0,
                get: function () {
                    return i.default
                }
            }), Object.defineProperty(r, "P2PError", {
                enumerable: !0, get: function () {
                    return a.P2PError
                }
            });
            var i = n(e("./p2pclient.js")), a = e("./error.js")
        }, {"./error.js": 48, "./p2pclient.js": 50, "@babel/runtime/helpers/interopRequireDefault": 10}],
        50: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
            var a = i(e("../base/logger.js")), o = e("../base/event.js"), s = n(e("./error.js")),
                u = i(e("./peerconnection-channel.js")), c = 1, l = 2, d = 3, f = function (e, t) {
                    Object.setPrototypeOf(this, new o.EventDispatcher);
                    var r, n = e, i = t, f = new Map, p = this, h = c;
                    i.onMessage = function (e, t) {
                        a.default.debug("Received signaling message from " + e + ": " + t);
                        var r = JSON.parse(t);
                        "chat-closed" !== r.type ? p.allowedRemoteIds.indexOf(e) >= 0 ? m(e, !1).onMessage(r) : v(e, "chat-closed", s.errors.P2P_CLIENT_DENIED) : f.has(e) && (m(e, !1).onMessage(r), f.delete(e))
                    }, i.onServerDisconnected = function () {
                        h = c, p.dispatchEvent(new o.OwtEvent("serverdisconnected"))
                    }, this.allowedRemoteIds = [], this.connect = function (e) {
                        return h !== c ? (a.default.warning("Invalid connection state: " + h), Promise.reject(new s.P2PError(s.errors.P2P_CLIENT_INVALID_STATE))) : (h = l, new Promise(function (t, n) {
                            i.connect(e).then(function (e) {
                                h = d, t(r = e)
                            }, function (e) {
                                n(new s.P2PError(s.getErrorByCode(e)))
                            })
                        }))
                    }, this.disconnect = function () {
                        h != c && (f.forEach(function (e) {
                            e.stop()
                        }), f.clear(), i.disconnect())
                    }, this.publish = function (e, t) {
                        return h !== d ? Promise.reject(new s.P2PError(s.errors.P2P_CLIENT_INVALID_STATE, "P2P Client is not connected to signaling channel.")) : this.allowedRemoteIds.indexOf(e) < 0 ? Promise.reject(new s.P2PError(s.errors.P2P_CLIENT_NOT_ALLOWED)) : Promise.resolve(m(e, !0).publish(t))
                    }, this.send = function (e, t) {
                        return h !== d ? Promise.reject(new s.P2PError(s.errors.P2P_CLIENT_INVALID_STATE, "P2P Client is not connected to signaling channel.")) : this.allowedRemoteIds.indexOf(e) < 0 ? Promise.reject(new s.P2PError(s.errors.P2P_CLIENT_NOT_ALLOWED)) : Promise.resolve(m(e, !0).send(t))
                    }, this.stop = function (e) {
                        f.has(e) ? (f.get(e).stop(), f.delete(e)) : a.default.warning("No PeerConnection between current endpoint and specific remote endpoint.")
                    }, this.getStats = function (e) {
                        return f.has(e) ? f.get(e).getStats() : Promise.reject(new s.P2PError(s.errors.P2P_CLIENT_INVALID_STATE, "No PeerConnection between current endpoint and specific remote endpoint."))
                    };
                    var v = function (e, t, r) {
                        var n = {type: t};
                        return r && (n.data = r), i.send(e, JSON.stringify(n)).catch(function (e) {
                            if ("number" == typeof e) throw s.getErrorByCode(e)
                        })
                    }, m = function (e, t) {
                        if (!f.has(e)) {
                            var i = Object.create(o.EventDispatcher);
                            i.sendSignalingMessage = v;
                            var a = new u.default(n, r, e, i, t);
                            a.addEventListener("streamadded", function (e) {
                                p.dispatchEvent(e)
                            }), a.addEventListener("messagereceived", function (e) {
                                p.dispatchEvent(e)
                            }), a.addEventListener("ended", function () {
                                f.delete(e)
                            }), f.set(e, a)
                        }
                        return f.get(e)
                    }
                };
            r.default = f
        }, {
            "../base/event.js": 26,
            "../base/logger.js": 28,
            "./error.js": 48,
            "./peerconnection-channel.js": 51,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11
        }],
        51: [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireWildcard"),
                i = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {value: !0}), r.default = r.P2PPeerConnectionChannelEvent = void 0;
            var a = i(e("@babel/runtime/helpers/slicedToArray")), o = i(e("@babel/runtime/helpers/typeof")),
                s = i(e("@babel/runtime/helpers/createClass")), u = i(e("@babel/runtime/helpers/classCallCheck")),
                c = i(e("@babel/runtime/helpers/inherits")),
                l = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
                d = i(e("@babel/runtime/helpers/getPrototypeOf")), f = i(e("@babel/runtime/helpers/wrapNativeSuper")),
                p = i(e("../base/logger.js")), h = e("../base/event.js"), v = e("../base/publication.js"),
                m = n(e("../base/utils.js")), b = n(e("./error.js")), g = n(e("../base/stream.js")),
                _ = n(e("../base/sdputils.js"));

            function y(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return S(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0, i = function () {
                        };
                        return {
                            s: i, n: function () {
                                return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                            }, e: function (e) {
                                throw e
                            }, f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0, s = !1;
                return {
                    s: function () {
                        r = e[Symbol.iterator]()
                    }, n: function () {
                        var e = r.next();
                        return o = e.done, e
                    }, e: function (e) {
                        s = !0, a = e
                    }, f: function () {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function P(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = (0, d.default)(e);
                    if (t) {
                        var i = (0, d.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, l.default)(this, r)
                }
            }

            var C = function (e) {
                (0, c.default)(r, e);
                var t = P(r);

                function r(e) {
                    var n;
                    return (0, u.default)(this, r), (n = t.call(this, e)).stream = e.stream, n
                }

                return r
            }((0, f.default)(Event));
            r.P2PPeerConnectionChannelEvent = C;
            var w = "message", E = {
                DENIED: "chat-denied",
                CLOSED: "chat-closed",
                NEGOTIATION_NEEDED: "chat-negotiation-needed",
                TRACK_SOURCES: "chat-track-sources",
                STREAM_INFO: "chat-stream-info",
                SDP: "chat-signal",
                TRACKS_ADDED: "chat-tracks-added",
                TRACKS_REMOVED: "chat-tracks-removed",
                DATA_RECEIVED: "chat-data-received",
                UA: "chat-ua"
            }, k = m.sysInfo(), R = function (e) {
                (0, c.default)(r, e);
                var t = P(r);

                function r(e, n, i, a, o) {
                    var s;
                    return (0, u.default)(this, r), (s = t.call(this))._config = e, s._localId = n, s._remoteId = i, s._signaling = a, s._pc = null, s._publishedStreams = new Map, s._pendingStreams = [], s._publishingStreams = [], s._pendingUnpublishStreams = [], s._remoteStreamInfo = new Map, s._remoteStreams = [], s._remoteTrackSourceInfo = new Map, s._publishPromises = new Map, s._unpublishPromises = new Map, s._publishingStreamTracks = new Map, s._publishedStreamTracks = new Map, s._isNegotiationNeeded = !1, s._remoteSideSupportsRemoveStream = !0, s._remoteSideSupportsPlanB = !0, s._remoteSideSupportsUnifiedPlan = !0, s._remoteSideIgnoresDataChannelAcks = !1, s._remoteIceCandidates = [], s._dataChannels = new Map, s._pendingMessages = [], s._dataSeq = 1, s._sendDataPromises = new Map, s._addedTrackIds = [], s._isCaller = !0, s._infoSent = !1, s._disposed = !1, s._createPeerConnection(), o && s._sendSignalingMessage(E.CLOSED), s._sendSignalingMessage(E.UA, k), s
                }

                return (0, s.default)(r, [{
                    key: "publish", value: function (e) {
                        var t = this;
                        return e instanceof g.LocalStream ? this._publishedStreams.has(e) ? Promise.reject(new b.P2PError(b.errors.P2P_CLIENT_ILLEGAL_ARGUMENT, "Duplicated stream.")) : this._areAllTracksEnded(e.mediaStream) ? Promise.reject(new b.P2PError(b.errors.P2P_CLIENT_INVALID_STATE, "All tracks are ended.")) : this._sendStreamInfo(e).then(function () {
                            return new Promise(function (r, n) {
                                var i, a = y(e.mediaStream.getTracks());
                                try {
                                    for (a.s(); !(i = a.n()).done;) {
                                        var o = i.value;
                                        t._pc.addTrack(o, e.mediaStream)
                                    }
                                } catch (e) {
                                    a.e(e)
                                } finally {
                                    a.f()
                                }
                                t._onNegotiationneeded(), t._publishingStreams.push(e);
                                var s = Array.from(e.mediaStream.getTracks(), function (e) {
                                    return e.id
                                });
                                t._publishingStreamTracks.set(e.mediaStream.id, s), t._publishPromises.set(e.mediaStream.id, {
                                    resolve: r,
                                    reject: n
                                })
                            })
                        }) : Promise.reject(new TypeError("Invalid stream."))
                    }
                }, {
                    key: "send", value: function (e) {
                        var t = this;
                        if ("string" != typeof e) return Promise.reject(new TypeError("Invalid message."));
                        var r = {id: this._dataSeq++, data: e};
                        return this._dataChannels.has(w) || this._createDataChannel(w), "open" === this._dataChannels.get(w).readyState ? (this._dataChannels.get(w).send(JSON.stringify(r)), Promise.resolve()) : (this._pendingMessages.push(r), new Promise(function (e, n) {
                            t._sendDataPromises.set(r.id, {resolve: e, reject: n})
                        }))
                    }
                }, {
                    key: "stop", value: function () {
                        this._stop(void 0, !0)
                    }
                }, {
                    key: "getStats", value: function (e) {
                        var t = this;
                        if (this._pc) {
                            if (void 0 === e) return this._pc.getStats();
                            var r = [];
                            return Promise.all([e.getTracks().forEach(function (e) {
                                t._getStats(e, r)
                            })]).then(function () {
                                return new Promise(function (e, t) {
                                    e(r)
                                })
                            })
                        }
                        return Promise.reject(new b.P2PError(b.errors.P2P_CLIENT_INVALID_STATE))
                    }
                }, {
                    key: "_getStats", value: function (e, t) {
                        return this._pc.getStats(e).then(function (e) {
                            t.push(e)
                        })
                    }
                }, {
                    key: "onMessage", value: function (e) {
                        this._SignalingMesssageHandler(e)
                    }
                }, {
                    key: "_sendSdp", value: function (e) {
                        return this._signaling.sendSignalingMessage(this._remoteId, E.SDP, e)
                    }
                }, {
                    key: "_sendSignalingMessage", value: function (e, t) {
                        return this._signaling.sendSignalingMessage(this._remoteId, e, t)
                    }
                }, {
                    key: "_SignalingMesssageHandler", value: function (e) {
                        switch (p.default.debug("Channel received message: " + e), e.type) {
                            case E.UA:
                                this._handleRemoteCapability(e.data);
                                break;
                            case E.TRACK_SOURCES:
                                this._trackSourcesHandler(e.data);
                                break;
                            case E.STREAM_INFO:
                                this._streamInfoHandler(e.data);
                                break;
                            case E.SDP:
                                this._sdpHandler(e.data);
                                break;
                            case E.TRACKS_ADDED:
                                this._tracksAddedHandler(e.data);
                                break;
                            case E.TRACKS_REMOVED:
                                this._tracksRemovedHandler(e.data);
                                break;
                            case E.DATA_RECEIVED:
                                this._dataReceivedHandler(e.data);
                                break;
                            case E.CLOSED:
                                this._chatClosedHandler(e.data);
                                break;
                            default:
                                p.default.error("Invalid signaling message received. Type: " + e.type)
                        }
                    }
                }, {
                    key: "_tracksAddedHandler", value: function (e) {
                        var t, r = this, n = y(e);
                        try {
                            var i = function () {
                                var e = t.value;
                                r._publishingStreamTracks.forEach(function (t, n) {
                                    for (var i = 0; i < t.length; i++) {
                                        if (t[i] === e && (r._publishedStreamTracks.has(n) || r._publishedStreamTracks.set(n, []), r._publishedStreamTracks.get(n).push(t[i]), t.splice(i, 1)), 0 == t.length) if ("continue" === function () {
                                            if (!r._publishPromises.has(n)) return p.default.warning("Cannot find the promise for publishing " + n), "continue";
                                            var t = r._publishingStreams.findIndex(function (e) {
                                                return e.mediaStream.id == n
                                            }), i = r._publishingStreams[t];
                                            r._publishingStreams.splice(t, 1);
                                            var a = new v.Publication(e, function () {
                                                r._unpublish(i).then(function () {
                                                    a.dispatchEvent(new h.OwtEvent("ended"))
                                                }, function (e) {
                                                    p.default.debug("Something wrong happened during stopping a publication. " + e.message)
                                                })
                                            }, function () {
                                                return i && i.mediaStream ? r.getStats(i.mediaStream) : Promise.reject(new b.P2PError(b.errors.P2P_CLIENT_INVALID_STATE, "Publication is not available."))
                                            });
                                            r._publishedStreams.set(i, a), r._publishPromises.get(n).resolve(a), r._publishPromises.delete(n)
                                        }()) continue
                                    }
                                })
                            };
                            for (n.s(); !(t = n.n()).done;) i()
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }
                }, {
                    key: "_tracksRemovedHandler", value: function (e) {
                        var t, r = this, n = y(e);
                        try {
                            var i = function () {
                                var e = t.value;
                                r._publishedStreamTracks.forEach(function (t, r) {
                                    for (var n = 0; n < t.length; n++) t[n] === e && t.splice(n, 1)
                                })
                            };
                            for (n.s(); !(t = n.n()).done;) i()
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }
                }, {
                    key: "_dataReceivedHandler", value: function (e) {
                        this._sendDataPromises.has(e) ? this._sendDataPromises.get(e).resolve() : p.default.warning("Received unknown data received message. ID: " + e)
                    }
                }, {
                    key: "_sdpHandler", value: function (e) {
                        "offer" === e.type ? this._onOffer(e) : "answer" === e.type ? this._onAnswer(e) : "candidates" === e.type && this._onRemoteIceCandidate(e)
                    }
                }, {
                    key: "_trackSourcesHandler", value: function (e) {
                        var t, r = y(e);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var n = t.value;
                                this._remoteTrackSourceInfo.set(n.id, n.source)
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }
                }, {
                    key: "_streamInfoHandler", value: function (e) {
                        e ? this._remoteStreamInfo.set(e.id, {
                            source: e.source,
                            attributes: e.attributes,
                            stream: null,
                            mediaStream: null,
                            trackIds: e.tracks
                        }) : p.default.warning("Unexpected stream info.")
                    }
                }, {
                    key: "_chatClosedHandler", value: function (e) {
                        this._disposed = !0, this._stop(e, !1)
                    }
                }, {
                    key: "_onOffer", value: function (e) {
                        var t = this;
                        p.default.debug("About to set remote description. Signaling state: " + this._pc.signalingState), e.sdp = this._setRtpSenderOptions(e.sdp, this._config), m.isFirefox() && (e.sdp = this._setCodecOrder(e.sdp));
                        var r = new RTCSessionDescription(e);
                        this._pc.setRemoteDescription(r).then(function () {
                            t._createAndSendAnswer()
                        }, function (e) {
                            p.default.debug("Set remote description failed. Message: " + e.message), t._stop(e, !0)
                        })
                    }
                }, {
                    key: "_onAnswer", value: function (e) {
                        var t = this;
                        p.default.debug("About to set remote description. Signaling state: " + this._pc.signalingState), e.sdp = this._setRtpSenderOptions(e.sdp, this._config);
                        var r = new RTCSessionDescription(e);
                        this._pc.setRemoteDescription(new RTCSessionDescription(r)).then(function () {
                            p.default.debug("Set remote descripiton successfully."), t._drainPendingMessages()
                        }, function (e) {
                            p.default.debug("Set remote description failed. Message: " + e.message), t._stop(e, !0)
                        })
                    }
                }, {
                    key: "_onLocalIceCandidate", value: function (e) {
                        e.candidate ? this._sendSdp({
                            type: "candidates",
                            candidate: e.candidate.candidate,
                            sdpMid: e.candidate.sdpMid,
                            sdpMLineIndex: e.candidate.sdpMLineIndex
                        }).catch(function (e) {
                            p.default.warning("Failed to send candidate.")
                        }) : p.default.debug("Empty candidate.")
                    }
                }, {
                    key: "_onRemoteTrackAdded", value: function (e) {
                        p.default.debug("Remote track added.");
                        var t, r = y(e.streams);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var n = t.value;
                                if (!this._remoteStreamInfo.has(n.id)) return void p.default.warning("Missing stream info.");
                                this._remoteStreamInfo.get(n.id).stream || this._setStreamToRemoteStreamInfo(n)
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        "connected" === this._pc.iceConnectionState || "completed" === this._pc.iceConnectionState ? this._checkIceConnectionStateAndFireEvent() : this._addedTrackIds.concat(e.track.id)
                    }
                }, {
                    key: "_onRemoteStreamAdded", value: function (e) {
                        if (p.default.debug("Remote stream added."), this._remoteStreamInfo.has(e.stream.id)) {
                            "connected" === this._pc.iceConnectionState || "completed" === this._pc.iceConnectionState ? this._sendSignalingMessage(E.TRACKS_ADDED, this._remoteStreamInfo.get(e.stream.id).trackIds) : this._addedTrackIds = this._addedTrackIds.concat(this._remoteStreamInfo.get(e.stream.id).trackIds);
                            var t = this._remoteStreamInfo.get(e.stream.id).source.audio,
                                r = this._remoteStreamInfo.get(e.stream.id).source.video,
                                n = new g.StreamSourceInfo(t, r);
                            m.isSafari() && (n.audio || e.stream.getAudioTracks().forEach(function (t) {
                                e.stream.removeTrack(t)
                            }), n.video || e.stream.getVideoTracks().forEach(function (t) {
                                e.stream.removeTrack(t)
                            }));
                            var i = this._remoteStreamInfo.get(e.stream.id).attributes,
                                a = new g.RemoteStream(void 0, this._remoteId, e.stream, n, i);
                            if (a) {
                                this._remoteStreams.push(a);
                                var o = new g.StreamEvent("streamadded", {stream: a});
                                this.dispatchEvent(o)
                            }
                        } else p.default.warning("Cannot find source info for stream " + e.stream.id)
                    }
                }, {
                    key: "_onRemoteStreamRemoved", value: function (e) {
                        p.default.debug("Remote stream removed.");
                        var t = this._remoteStreams.findIndex(function (t) {
                            return t.mediaStream.id === e.stream.id
                        });
                        if (-1 !== t) {
                            var r = this._remoteStreams[t];
                            this._streamRemoved(r), this._remoteStreams.splice(t, 1)
                        }
                    }
                }, {
                    key: "_onNegotiationneeded", value: function () {
                        p.default.debug("On negotiation needed."), "stable" === this._pc.signalingState ? this._doNegotiate() : this._isNegotiationNeeded = !0
                    }
                }, {
                    key: "_onRemoteIceCandidate", value: function (e) {
                        var t = new RTCIceCandidate({
                            candidate: e.candidate,
                            sdpMid: e.sdpMid,
                            sdpMLineIndex: e.sdpMLineIndex
                        });
                        this._pc.remoteDescription && "" !== this._pc.remoteDescription.sdp ? (p.default.debug("Add remote ice candidates."), this._pc.addIceCandidate(t).catch(function (e) {
                            p.default.warning("Error processing ICE candidate: " + e)
                        })) : (p.default.debug("Cache remote ice candidates."), this._remoteIceCandidates.push(t))
                    }
                }, {
                    key: "_onSignalingStateChange", value: function (e) {
                        p.default.debug("Signaling state changed: " + this._pc.signalingState), "have-remote-offer" !== this._pc.signalingState && "stable" !== this._pc.signalingState || this._drainPendingRemoteIceCandidates(), "stable" === this._pc.signalingState && (this._negotiating = !1, this._isNegotiationNeeded ? this._onNegotiationneeded() : (this._drainPendingStreams(), this._drainPendingMessages()))
                    }
                }, {
                    key: "_onIceConnectionStateChange", value: function (e) {
                        if ("closed" === e.currentTarget.iceConnectionState || "failed" === e.currentTarget.iceConnectionState) {
                            var t = new b.P2PError(b.errors.P2P_WEBRTC_UNKNOWN, "ICE connection failed or closed.");
                            this._stop(t, !0)
                        } else "connected" !== e.currentTarget.iceConnectionState && "completed" !== e.currentTarget.iceConnectionState || (this._sendSignalingMessage(E.TRACKS_ADDED, this._addedTrackIds), this._addedTrackIds = [], this._checkIceConnectionStateAndFireEvent())
                    }
                }, {
                    key: "_onDataChannelMessage", value: function (e) {
                        var t = JSON.parse(e.data);
                        this._remoteSideIgnoresDataChannelAcks || this._sendSignalingMessage(E.DATA_RECEIVED, t.id);
                        var r = new h.MessageEvent("messagereceived", {message: t.data, origin: this._remoteId});
                        this.dispatchEvent(r)
                    }
                }, {
                    key: "_onDataChannelOpen", value: function (e) {
                        p.default.debug("Data Channel is opened."), e.target.label === w && (p.default.debug("Data channel for messages is opened."), this._drainPendingMessages())
                    }
                }, {
                    key: "_onDataChannelClose", value: function (e) {
                        p.default.debug("Data Channel is closed.")
                    }
                }, {
                    key: "_streamRemoved", value: function (e) {
                        this._remoteStreamInfo.has(e.mediaStream.id) || p.default.warning("Cannot find stream info."), this._sendSignalingMessage(E.TRACKS_REMOVED, this._remoteStreamInfo.get(e.mediaStream.id).trackIds);
                        var t = new h.OwtEvent("ended");
                        e.dispatchEvent(t)
                    }
                }, {
                    key: "_isUnifiedPlan", value: function () {
                        if (m.isFirefox()) return !0;
                        var e = new RTCPeerConnection({sdpSemantics: "unified-plan"});
                        return e.getConfiguration() && "plan-b" === e.getConfiguration().sdpSemantics
                    }
                }, {
                    key: "_createPeerConnection", value: function () {
                        var e = this, t = this._config.rtcConfiguration || {};
                        m.isChrome() && (t.sdpSemantics = "unified-plan"), this._pc = new RTCPeerConnection(t), "function" == typeof this._pc.addTransceiver && m.isSafari() && (this._pc.addTransceiver("audio"), this._pc.addTransceiver("video")), this._isUnifiedPlan() || m.isSafari() ? this._pc.ontrack = function (t) {
                            e._onRemoteTrackAdded.apply(e, [t])
                        } : (this._pc.onaddstream = function (t) {
                            e._onRemoteStreamAdded.apply(e, [t])
                        }, this._pc.onremovestream = function (t) {
                            e._onRemoteStreamRemoved.apply(e, [t])
                        }), this._pc.onicecandidate = function (t) {
                            e._onLocalIceCandidate.apply(e, [t])
                        }, this._pc.onsignalingstatechange = function (t) {
                            e._onSignalingStateChange.apply(e, [t])
                        }, this._pc.ondatachannel = function (t) {
                            p.default.debug("On data channel."), e._dataChannels.has(t.channel.label) || (e._dataChannels.set(t.channel.label, t.channel), p.default.debug("Save remote created data channel.")), e._bindEventsToDataChannel(t.channel)
                        }, this._pc.oniceconnectionstatechange = function (t) {
                            e._onIceConnectionStateChange.apply(e, [t])
                        }
                    }
                }, {
                    key: "_drainPendingStreams", value: function () {
                        var e = !1;
                        if (p.default.debug("Draining pending streams."), this._pc && "stable" === this._pc.signalingState) {
                            p.default.debug("Peer connection is ready for draining pending streams.");
                            for (var t = 0; t < this._pendingStreams.length; t++) {
                                var r = this._pendingStreams[t];
                                if (this._pendingStreams.shift(), r.mediaStream) {
                                    var n, i = y(r.mediaStream.getTracks());
                                    try {
                                        for (i.s(); !(n = i.n()).done;) {
                                            var a = n.value;
                                            this._pc.addTrack(a, r.mediaStream), e = !0
                                        }
                                    } catch (e) {
                                        i.e(e)
                                    } finally {
                                        i.f()
                                    }
                                    p.default.debug("Added stream to peer connection."), this._publishingStreams.push(r)
                                }
                            }
                            this._pendingStreams.length = 0;
                            for (var o = 0; o < this._pendingUnpublishStreams.length; o++) this._pendingUnpublishStreams[o].mediaStream && (this._pc.removeStream(this._pendingUnpublishStreams[o].mediaStream), e = !0, this._unpublishPromises.get(this._pendingUnpublishStreams[o].mediaStream.id).resolve(), this._publishedStreams.delete(this._pendingUnpublishStreams[o]), p.default.debug("Remove stream."));
                            this._pendingUnpublishStreams.length = 0
                        }
                        e && this._onNegotiationneeded()
                    }
                }, {
                    key: "_drainPendingRemoteIceCandidates", value: function () {
                        for (var e = 0; e < this._remoteIceCandidates.length; e++) p.default.debug("Add candidate"), this._pc.addIceCandidate(this._remoteIceCandidates[e]).catch(function (e) {
                            p.default.warning("Error processing ICE candidate: " + e)
                        });
                        this._remoteIceCandidates.length = 0
                    }
                }, {
                    key: "_drainPendingMessages", value: function () {
                        if (p.default.debug("Draining pending messages."), 0 != this._pendingMessages.length) {
                            var e = this._dataChannels.get(w);
                            if (e && "open" === e.readyState) {
                                for (var t = 0; t < this._pendingMessages.length; t++) {
                                    p.default.debug("Sending message via data channel: " + this._pendingMessages[t]), e.send(JSON.stringify(this._pendingMessages[t]));
                                    var r = this._pendingMessages[t].id;
                                    this._sendDataPromises.has(r) && this._sendDataPromises.get(r).resolve()
                                }
                                this._pendingMessages.length = 0
                            } else this._pc && !e && this._createDataChannel(w)
                        }
                    }
                }, {
                    key: "_sendStreamInfo", value: function (e) {
                        if (!e || !e.mediaStream) return new b.P2PError(b.errors.P2P_CLIENT_ILLEGAL_ARGUMENT);
                        var t = [];
                        return e.mediaStream.getTracks().map(function (r) {
                            t.push({id: r.id, source: e.source[r.kind]})
                        }), Promise.all([this._sendSignalingMessage(E.TRACK_SOURCES, t), this._sendSignalingMessage(E.STREAM_INFO, {
                            id: e.mediaStream.id,
                            attributes: e.attributes,
                            tracks: Array.from(t, function (e) {
                                return e.id
                            }),
                            source: e.source
                        })])
                    }
                }, {
                    key: "_handleRemoteCapability", value: function (e) {
                        e.sdk && e.sdk && "JavaScript" === e.sdk.type && e.runtime && "Firefox" === e.runtime.name ? (this._remoteSideSupportsRemoveStream = !1, this._remoteSideSupportsPlanB = !1, this._remoteSideSupportsUnifiedPlan = !0) : (this._remoteSideSupportsRemoveStream = !0, this._remoteSideSupportsPlanB = !0, this._remoteSideSupportsUnifiedPlan = !1), e.capabilities && (this._remoteSideIgnoresDataChannelAcks = e.capabilities.ignoreDataChannelAcks)
                    }
                }, {
                    key: "_doNegotiate", value: function () {
                        this._createAndSendOffer()
                    }
                }, {
                    key: "_setCodecOrder", value: function (e) {
                        if (this._config.audioEncodings) {
                            var t = Array.from(this._config.audioEncodings, function (e) {
                                return e.codec.name
                            });
                            e = _.reorderCodecs(e, "audio", t)
                        }
                        if (this._config.videoEncodings) {
                            var r = Array.from(this._config.videoEncodings, function (e) {
                                return e.codec.name
                            });
                            e = _.reorderCodecs(e, "video", r)
                        }
                        return e
                    }
                }, {
                    key: "_setMaxBitrate", value: function (e, t) {
                        return "object" === (0, o.default)(t.audioEncodings) && (e = _.setMaxBitrate(e, t.audioEncodings)), "object" === (0, o.default)(t.videoEncodings) && (e = _.setMaxBitrate(e, t.videoEncodings)), e
                    }
                }, {
                    key: "_setRtpSenderOptions", value: function (e, t) {
                        return e = this._setMaxBitrate(e, t)
                    }
                }, {
                    key: "_setRtpReceiverOptions", value: function (e) {
                        return e = this._setCodecOrder(e)
                    }
                }, {
                    key: "_createAndSendOffer", value: function () {
                        var e, t = this;
                        this._pc ? (this._isNegotiationNeeded = !1, this._isCaller = !0, this._pc.createOffer().then(function (r) {
                            if (r.sdp = t._setRtpReceiverOptions(r.sdp), e = r, "stable" === t._pc.signalingState) return t._pc.setLocalDescription(r).then(function () {
                                return t._sendSdp(e)
                            })
                        }).catch(function (e) {
                            p.default.error(e.message + " Please check your codec settings.");
                            var r = new b.P2PError(b.errors.P2P_WEBRTC_SDP, e.message);
                            t._stop(r, !0)
                        })) : p.default.error("Peer connection have not been created.")
                    }
                }, {
                    key: "_createAndSendAnswer", value: function () {
                        var e, t = this;
                        this._drainPendingStreams(), this._isNegotiationNeeded = !1, this._isCaller = !1, this._pc.createAnswer().then(function (r) {
                            return r.sdp = t._setRtpReceiverOptions(r.sdp), e = r, t._logCurrentAndPendingLocalDescription(), t._pc.setLocalDescription(r)
                        }).then(function () {
                            return t._sendSdp(e)
                        }).catch(function (e) {
                            p.default.error(e.message + " Please check your codec settings.");
                            var r = new b.P2PError(b.errors.P2P_WEBRTC_SDP, e.message);
                            t._stop(r, !0)
                        })
                    }
                }, {
                    key: "_logCurrentAndPendingLocalDescription", value: function () {
                        p.default.info("Current description: " + this._pc.currentLocalDescription), p.default.info("Pending description: " + this._pc.pendingLocalDescription)
                    }
                }, {
                    key: "_getAndDeleteTrackSourceInfo", value: function (e) {
                        if (e.length > 0) {
                            var t = e[0].id;
                            if (this._remoteTrackSourceInfo.has(t)) {
                                var r = this._remoteTrackSourceInfo.get(t);
                                return this._remoteTrackSourceInfo.delete(t), r
                            }
                            p.default.warning("Cannot find source info for " + t)
                        }
                    }
                }, {
                    key: "_unpublish", value: function (e) {
                        var t = this;
                        return navigator.mozGetUserMedia || !this._remoteSideSupportsRemoveStream ? (p.default.error("Stopping a publication is not supported on Firefox. Please use P2PClient.stop() to stop the connection with remote endpoint."), Promise.reject(new b.P2PError(b.errors.P2P_CLIENT_UNSUPPORTED_METHOD))) : this._publishedStreams.has(e) ? (this._pendingUnpublishStreams.push(e), new Promise(function (r, n) {
                            t._unpublishPromises.set(e.mediaStream.id, {
                                resolve: r,
                                reject: n
                            }), t._drainPendingStreams()
                        })) : Promise.reject(new b.P2PError(b.errors.P2P_CLIENT_ILLEGAL_ARGUMENT))
                    }
                }, {
                    key: "_createDataChannel", value: function (e) {
                        if (this._dataChannels.has(e)) p.default.warning("Data channel labeled " + e + " already exists."); else if (this._pc) {
                            p.default.debug("Create data channel.");
                            var t = this._pc.createDataChannel(e);
                            this._bindEventsToDataChannel(t), this._dataChannels.set(w, t), this._onNegotiationneeded()
                        } else p.default.debug("PeerConnection is not available before creating DataChannel.")
                    }
                }, {
                    key: "_bindEventsToDataChannel", value: function (e) {
                        var t = this;
                        e.onmessage = function (e) {
                            t._onDataChannelMessage.apply(t, [e])
                        }, e.onopen = function (e) {
                            t._onDataChannelOpen.apply(t, [e])
                        }, e.onclose = function (e) {
                            t._onDataChannelClose.apply(t, [e])
                        }, e.onerror = function (e) {
                            p.default.debug("Data Channel Error: " + e)
                        }
                    }
                }, {
                    key: "_getStreamByTrack", value: function (e) {
                        var t, r = [], n = y(this._remoteStreamInfo);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var i = (0, a.default)(t.value, 2)[1];
                                if (i.stream && i.stream.mediaStream) {
                                    var o, s = y(i.stream.mediaStream.getTracks());
                                    try {
                                        for (s.s(); !(o = s.n()).done;) {
                                            e === o.value && r.push(i.stream.mediaStream)
                                        }
                                    } catch (e) {
                                        s.e(e)
                                    } finally {
                                        s.f()
                                    }
                                }
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return r
                    }
                }, {
                    key: "_areAllTracksEnded", value: function (e) {
                        var t, r = y(e.getTracks());
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                if ("live" === t.value.readyState) return !1
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        return !0
                    }
                }, {
                    key: "_stop", value: function (e, t) {
                        var r = e;
                        r || (r = new b.P2PError(b.errors.P2P_CLIENT_UNKNOWN));
                        var n, i = y(this._dataChannels);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                (0, a.default)(n.value, 2)[1].close()
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this._dataChannels.clear(), this._pc && "closed" !== this._pc.iceConnectionState && this._pc.close();
                        var o, s = y(this._publishPromises);
                        try {
                            for (s.s(); !(o = s.n()).done;) {
                                (0, a.default)(o.value, 2)[1].reject(r)
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        this._publishPromises.clear();
                        var u, c = y(this._unpublishPromises);
                        try {
                            for (c.s(); !(u = c.n()).done;) {
                                (0, a.default)(u.value, 2)[1].reject(r)
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        this._unpublishPromises.clear();
                        var l, d = y(this._sendDataPromises);
                        try {
                            for (d.s(); !(l = d.n()).done;) {
                                (0, a.default)(l.value, 2)[1].reject(r)
                            }
                        } catch (e) {
                            d.e(e)
                        } finally {
                            d.f()
                        }
                        if (this._sendDataPromises.clear(), this._publishedStreams.forEach(function (e) {
                            e.dispatchEvent(new h.OwtEvent("ended"))
                        }), this._publishedStreams.clear(), this._remoteStreams.forEach(function (e) {
                            e.dispatchEvent(new h.OwtEvent("ended"))
                        }), this._remoteStreams = [], !this._disposed) {
                            var f;
                            if (t) e && ((f = JSON.parse(JSON.stringify(e))).message = "Error happened at remote side."), this._sendSignalingMessage(E.CLOSED, f).catch(function (e) {
                                p.default.debug("Failed to send close." + e.message)
                            });
                            this.dispatchEvent(new Event("ended"))
                        }
                    }
                }, {
                    key: "_setStreamToRemoteStreamInfo", value: function (e) {
                        var t = this._remoteStreamInfo.get(e.id), r = t.attributes,
                            n = new g.StreamSourceInfo(this._remoteStreamInfo.get(e.id).source.audio, this._remoteStreamInfo.get(e.id).source.video);
                        t.stream = new g.RemoteStream(void 0, this._remoteId, e, n, r), t.mediaStream = e;
                        var i = t.stream;
                        i ? this._remoteStreams.push(i) : p.default.warning("Failed to create RemoteStream.")
                    }
                }, {
                    key: "_checkIceConnectionStateAndFireEvent", value: function () {
                        var e = this;
                        if ("connected" === this._pc.iceConnectionState || "completed" === this._pc.iceConnectionState) {
                            var t, r = y(this._remoteStreamInfo);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var n = (0, a.default)(t.value, 2)[1];
                                    if (n.mediaStream) {
                                        var i = new g.StreamEvent("streamadded", {stream: n.stream});
                                        if (this._isUnifiedPlan()) {
                                            var o, s = y(n.mediaStream.getTracks());
                                            try {
                                                for (s.s(); !(o = s.n()).done;) {
                                                    o.value.addEventListener("ended", function (t) {
                                                        var r, n = y(e._getStreamByTrack(t.target));
                                                        try {
                                                            for (n.s(); !(r = n.n()).done;) {
                                                                var i = r.value;
                                                                e._areAllTracksEnded(i) && e._onRemoteStreamRemoved({stream: i})
                                                            }
                                                        } catch (e) {
                                                            n.e(e)
                                                        } finally {
                                                            n.f()
                                                        }
                                                    })
                                                }
                                            } catch (e) {
                                                s.e(e)
                                            } finally {
                                                s.f()
                                            }
                                        }
                                        this._sendSignalingMessage(E.TRACKS_ADDED, n.trackIds), this._remoteStreamInfo.get(n.mediaStream.id).mediaStream = null, this.dispatchEvent(i)
                                    }
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                        }
                    }
                }]), r
            }(h.EventDispatcher);
            r.default = R
        }, {
            "../base/event.js": 26,
            "../base/logger.js": 28,
            "../base/publication.js": 31,
            "../base/sdputils.js": 32,
            "../base/stream.js": 33,
            "../base/utils.js": 35,
            "./error.js": 48,
            "@babel/runtime/helpers/classCallCheck": 5,
            "@babel/runtime/helpers/createClass": 7,
            "@babel/runtime/helpers/getPrototypeOf": 8,
            "@babel/runtime/helpers/inherits": 9,
            "@babel/runtime/helpers/interopRequireDefault": 10,
            "@babel/runtime/helpers/interopRequireWildcard": 11,
            "@babel/runtime/helpers/possibleConstructorReturn": 16,
            "@babel/runtime/helpers/slicedToArray": 18,
            "@babel/runtime/helpers/typeof": 19,
            "@babel/runtime/helpers/wrapNativeSuper": 21
        }]
    }, {}, [47])(47)
});