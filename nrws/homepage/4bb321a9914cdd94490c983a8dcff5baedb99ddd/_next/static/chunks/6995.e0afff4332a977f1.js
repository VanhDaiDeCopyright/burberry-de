"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6995], {
        95985: (t, e, r) => {
            r.r(e), r.d(e, {
                htmlToReact: () => i
            });
            var n = r(25232);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = function(t, e) {
                if (0 === Object.keys(e).length) return t;
                var r = {
                    replace: function(t) {
                        if (t instanceof n.Hg && "tag" === t.type && Object.keys(e).includes(t.name)) {
                            var i = t.attributes.reduce(function(t, e) {
                                var r;
                                return o({}, t, ((r = {})[e.name] = e.value, r))
                            }, {});
                            return e[t.name](i, (0, n.zd)(t.children, r))
                        }
                        return t
                    }
                };
                return (0, n.Ay)(t, r)
            }
        },
        70627: (t, e, r) => {
            r.d(e, {
                v: () => N
            });
            var n, o = r(61642),
                i = r(29193),
                a = r(96540),
                u = r(17437),
                c = r(66797),
                l = r(94335),
                s = r(20643),
                f = r(12228),
                h = r(54417),
                d = r(83535),
                p = r(70697),
                v = r(48797);

            function y() {
                y = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    i = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var o, i = Object.create((e && e.prototype instanceof h ? e : h).prototype),
                        a = new j(n || []);
                    return i._invoke = (o = "suspendedStart", function(e, n) {
                        if ("executing" === o) throw Error("Generator is already running");
                        if ("completed" === o) {
                            if ("throw" === e) throw n;
                            return k()
                        }
                        for (a.method = e, a.arg = n;;) {
                            var i = a.delegate;
                            if (i) {
                                var u = function t(e, r) {
                                    var n = e.iterator[r.method];
                                    if (void 0 === n) {
                                        if (r.delegate = null, "throw" === r.method) {
                                            if (e.iterator.return && (r.method = "return", r.arg = void 0, t(e, r), "throw" === r.method)) return f;
                                            r.method = "throw", r.arg = TypeError("The iterator does not provide a 'throw' method")
                                        }
                                        return f
                                    }
                                    var o = s(n, e.iterator, r.arg);
                                    if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, f;
                                    var i = o.arg;
                                    return i ? i.done ? (r[e.resultName] = i.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, f) : i : (r.method = "throw", r.arg = TypeError("iterator result is not an object"), r.delegate = null, f)
                                }(i, a);
                                if (u) {
                                    if (u === f) continue;
                                    return u
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === o) throw o = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            o = "executing";
                            var c = s(t, r, a);
                            if ("normal" === c.type) {
                                if (o = a.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                return {
                                    value: c.arg,
                                    done: a.done
                                }
                            }
                            "throw" === c.type && (o = "completed", a.method = "throw", a.arg = c.arg)
                        }
                    }), i
                }

                function s(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = l;
                var f = {};

                function h() {}

                function d() {}

                function p() {}
                var v = {};
                c(v, i, function() {
                    return this
                });
                var m = Object.getPrototypeOf,
                    g = m && m(m(O([])));
                g && g !== e && r.call(g, i) && (v = g);
                var w = p.prototype = h.prototype = Object.create(v);

                function b(t) {
                    ["next", "throw", "return"].forEach(function(e) {
                        c(t, e, function(t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function x(t, e) {
                    var n;
                    this._invoke = function(i, a) {
                        function u() {
                            return new e(function(n, u) {
                                ! function n(i, a, u, c) {
                                    var l = s(t[i], t, a);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            h = f.value;
                                        return h && "object" == (void 0 === h ? "undefined" : (0, o._)(h)) && r.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                                            n("next", t, u, c)
                                        }, function(t) {
                                            n("throw", t, u, c)
                                        }) : e.resolve(h).then(function(t) {
                                            f.value = t, u(f)
                                        }, function(t) {
                                            return n("throw", t, u, c)
                                        })
                                    }
                                    c(l.arg)
                                }(i, a, n, u)
                            })
                        }
                        return n = n ? n.then(u, u) : u()
                    }
                }

                function L(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(L, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: k
                    }
                }

                function k() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = p, c(w, "constructor", p), c(p, "constructor", d), d.displayName = c(p, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, u, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), c(x.prototype, a, function() {
                    return this
                }), t.AsyncIterator = x, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(l(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then(function(t) {
                        return t.done ? t.value : a.next()
                    })
                }, b(w), c(w, u, "Generator"), c(w, i, function() {
                    return this
                }), c(w, "toString", function() {
                    return "[object Generator]"
                }), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    E(r)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function m(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    r(t);
                    return
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function g() {
                return (g = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            var w = "undefined" != typeof document && void 0 !== (null == (n = document.createElement("iframe")) ? void 0 : n.loading),
                b = ["ratio", "source", "image", "fallbackText", "title", "lazy", "className", "alignment", "isDevelopment", "allowAttribute", "language", "countryCode"],
                x = ["creativetech.static.burberry.com", "creativetech.static.burberry.cn"],
                L = ["burberry.com", "burberry.cn"],
                E = (0, i.default)("div", {
                    target: "emxi7ie3"
                })(function(t) {
                    var e = t.ratio,
                        r = t.theme;
                    return (0, u.css)("width:100%;", (0, s.getStylesFromResponsiveValue)(e, function(t) {
                        return "number" == typeof t ? "padding-bottom: " + 100 / t + "%" : "viewport-height" === t ? "padding-bottom: 100vh; padding-bottom: 100dvh" : ""
                    }, null == r ? void 0 : r.media), ";position:relative;", "")
                }, ""),
                j = (0, i.default)("iframe", {
                    target: "emxi7ie2"
                })(function(t) {
                    var e = t.showIframe;
                    return (0, u.css)("width:100%;height:100%;border:none;position:absolute;top:0;left:0;display:", e ? "initial" : "none", ";opacity:", e ? "1" : "0", ";transition:opacity 360ms cubic-bezier(0, 0, 0.2, 1);", "")
                }, ""),
                O = (0, i.default)(p.Image, {
                    target: "emxi7ie1"
                })("width:100%;height:100%;position:absolute;top:0;left:0;background-color:", function(t) {
                    var e, r = t.theme;
                    return null == r ? void 0 : null == (e = r.colors) ? void 0 : e.grey01
                }, ";"),
                k = (0, i.default)("div", {
                    target: "emxi7ie0"
                })({
                    name: "1557lk6",
                    styles: "width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center"
                }),
                _ = function() {
                    var t, e = (t = y().mark(function t(e, r) {
                        var n, o, i;
                        return y().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = !0, t.prev = 1, t.next = 4, l.A.head(e);
                                case 4:
                                    t.next = 10;
                                    break;
                                case 6:
                                    t.prev = 6, t.t0 = t.catch(1), (i = null == (o = t.t0.response) ? void 0 : o.status) && i >= 400 ? n = !1 : r && console.warn('Failed to verify iframe source "' + e + "\".\nAssuming it's valid.");
                                case 10:
                                    return t.abrupt("return", n);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }, t, null, [
                            [1, 6]
                        ])
                    }), function() {
                        var e = this,
                            r = arguments;
                        return new Promise(function(n, o) {
                            var i = t.apply(e, r);

                            function a(t) {
                                m(i, n, o, a, u, "next", t)
                            }

                            function u(t) {
                                m(i, n, o, a, u, "throw", t)
                            }
                            a(void 0)
                        })
                    });
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = function(t) {
                    var e = t.ratio,
                        r = t.source,
                        n = t.image,
                        o = t.fallbackText,
                        i = t.title,
                        l = t.lazy,
                        p = void 0 === l || l,
                        y = t.className,
                        m = t.alignment,
                        N = t.isDevelopment,
                        S = t.allowAttribute,
                        P = t.language,
                        A = void 0 === P ? "" : P,
                        F = t.countryCode,
                        G = void 0 === F ? "" : F,
                        T = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                i = Object.keys(t);
                            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, b),
                        C = (0, a.useRef)(null),
                        I = (0, c.u)(),
                        z = (0, f.useViewport)(),
                        R = z.small,
                        V = z.medium,
                        q = z.large,
                        H = z.extraLarge,
                        D = (0, h.useHydrationRender)(),
                        Y = (0, d.useHasAppeared)(),
                        B = Y[0],
                        J = Y[1],
                        K = (0, a.useState)(!1),
                        M = K[0],
                        Q = K[1],
                        U = (0, a.useState)(!1),
                        W = U[0],
                        X = U[1],
                        Z = (0, a.useState)(!1),
                        $ = Z[0],
                        tt = Z[1],
                        te = (0, a.useState)(""),
                        tr = te[0],
                        tn = te[1];
                    return (0, a.useEffect)(function() {
                        if (tr) {
                            var t = L.find(function(t) {
                                return document.domain.includes(t)
                            });
                            x.find(function(t) {
                                return tr.includes(t)
                            }) && t && (document.domain = t)
                        }
                    }, [tr]), (0, a.useEffect)(function() {
                        if (r) {
                            var t = (0, s.getValueForCurrentViewport)(r, I.media),
                                e = (0, v.parse)(window.location.href, !0).query,
                                n = g({}, (0, v.parse)(t, !0), {
                                    search: null
                                });
                            n.query = g({}, e, n.query, {
                                lang: A,
                                country: "gb" === G.toLowerCase() ? "uk" : G
                            }), tn((0, v.format)(n))
                        }
                    }, [R, V, q, H, r, I.media, G, A]), (0, a.useEffect)(function() {
                        if (tr) {
                            var t = !1;
                            return _(tr, N).then(function(e) {
                                    t || (e ? (X(!0), tt(!1), Q(!0)) : (X(!1), tt(!0)))
                                }),
                                function() {
                                    t = !0
                                }
                        }
                    }, [tr, N]), (0, u.jsx)(E, {
                        ratio: e,
                        className: y,
                        ref: B
                    }, W ? null : (0, u.jsx)(O, {
                        sources: n,
                        alignment: m,
                        alt: i
                    }), $ ? (0, u.jsx)(k, null, o) : null, M && (0, u.jsx)(j, g({
                        "data-testid": "iframe",
                        showIframe: W,
                        ref: C,
                        src: p && !w && D || p && !w && !J ? "" : tr,
                        title: i,
                        loading: p ? "lazy" : void 0,
                        allow: S
                    }, T)))
                }
        }
    }
]);