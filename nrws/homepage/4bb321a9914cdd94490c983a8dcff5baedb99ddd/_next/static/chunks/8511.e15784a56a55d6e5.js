(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8511], {
        19853: e => {
            var t = "function" == typeof Float32Array;

            function o(e, t, o) {
                return (((1 - 3 * o + 3 * t) * e + (3 * o - 6 * t)) * e + 3 * t) * e
            }

            function l(e, t, o) {
                return 3 * (1 - 3 * o + 3 * t) * e * e + 2 * (3 * o - 6 * t) * e + 3 * t
            }

            function r(e) {
                return e
            }
            e.exports = function(e, n, i, c) {
                if (!(0 <= e && e <= 1 && 0 <= i && i <= 1)) throw Error("bezier x values must be in [0, 1] range");
                if (e === n && i === c) return r;
                for (var s = t ? new Float32Array(11) : Array(11), a = 0; a < 11; ++a) s[a] = o(.1 * a, e, i);
                return function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : o(function(t) {
                        for (var r = 0, n = 1; 10 !== n && s[n] <= t; ++n) r += .1;
                        var c = r + (t - s[--n]) / (s[n + 1] - s[n]) * .1,
                            a = l(c, e, i);
                        return a >= .001 ? function(e, t, r, n) {
                            for (var i = 0; i < 4; ++i) {
                                var c = l(t, r, n);
                                if (0 === c) break;
                                var s = o(t, r, n) - e;
                                t -= s / c
                            }
                            return t
                        }(t, c, e, i) : 0 === a ? c : function(e, t, l, r, n) {
                            var i, c, s = 0;
                            do(i = o(c = t + (l - t) / 2, r, n) - e) > 0 ? l = c : t = c; while (Math.abs(i) > 1e-7 && ++s < 10);
                            return c
                        }(t, r, r + .1, e, i)
                    }(t), n, c)
                }
            }
        },
        3109: (e, t, o) => {
            "use strict";
            o.d(t, {
                A: () => x
            });
            var l = o(71893),
                r = o(55456),
                n = o(4418),
                i = o(84577),
                c = o(2445),
                s = o(96540),
                a = o(69815),
                u = o(66797),
                f = o(17437),
                m = o(28596),
                d = o(74423),
                h = o(50610),
                v = o(30494),
                b = o(19853),
                E = o.n(b)()(0, 0, .2, 1),
                T = function e(t) {
                    var o = this;
                    (0, v._)(this, e), this.autoscrollDirection = 1, this.isAutoscrollEnabled = !1, this.resumeAutoscroll = function() {
                        if (o.autoscrollSpeed && o.scrollableElementRef.current) {
                            o.stopScrollTo(), o.isAutoscrollEnabled = !0;
                            var e = o.scrollableElementRef.current.scrollLeft,
                                t = Date.now(),
                                l = function() {
                                    if (o.scrollableElementRef.current) {
                                        var r = Date.now(),
                                            n = (r - t) / 1e3,
                                            i = o.scrollableElementRef.current.scrollWidth - o.scrollableElementRef.current.offsetWidth,
                                            c = Math.min(i, Math.max(0, e += o.autoscrollSpeed * n * o.autoscrollDirection));
                                        if (o.scrollableElementRef.current.scrollLeft = c, 0 === c && -1 === o.autoscrollDirection || c === i && 1 === o.autoscrollDirection) {
                                            o.autoscrollDirection = 0 === c ? 1 : -1, o.stopAutoscroll(), clearTimeout(o.resumeAutoscrollTimeoutHandle), o.resumeAutoscrollTimeoutHandle = setTimeout(function() {
                                                return o.resumeAutoscroll()
                                            }, o.autoscrollTimeout);
                                            return
                                        }
                                        o.isAutoscrollEnabled && (t = r, o.autoscrollAnimationHandle = requestAnimationFrame(l))
                                    }
                                };
                            o.autoscrollAnimationHandle = requestAnimationFrame(l)
                        }
                    }, this.stopAutoscroll = function() {
                        o.isAutoscrollEnabled = !1, cancelAnimationFrame(o.autoscrollAnimationHandle), clearTimeout(o.resumeAutoscrollTimeoutHandle)
                    }, this.stopScrollTo = function() {
                        var e;
                        cancelAnimationFrame(null === (e = o.scrollToAnimation) || void 0 === e ? void 0 : e.handle), o.scrollToAnimation = void 0
                    }, this.scrollTo = function(e) {
                        if (o.stopAutoscroll(), o.scrollableElementRef.current) {
                            var t = function() {
                                var e = o.scrollableElementRef.current;
                                if (e && o.scrollToAnimation) {
                                    var l = o.scrollToAnimation,
                                        r = l.startTimestamp,
                                        n = l.from,
                                        i = l.to,
                                        c = Date.now();
                                    if (1 >= Math.abs(i - Math.max(0, Math.min(e.scrollWidth - e.offsetWidth, e.scrollLeft)))) {
                                        e.scrollLeft = i, o.scrollToAnimation = void 0;
                                        return
                                    }
                                    var s = i - n,
                                        a = Math.min(1, Math.max(0, (c - r) / 360));
                                    e.scrollLeft = n + s * E(a), Object.assign(o.scrollToAnimation, {
                                        handle: requestAnimationFrame(t)
                                    })
                                }
                            };
                            if (o.scrollToAnimation) {
                                Object.assign(o.scrollToAnimation, {
                                    startTimestamp: Date.now(),
                                    from: o.scrollableElementRef.current.scrollLeft,
                                    to: e
                                });
                                return
                            }
                            o.scrollToAnimation = {
                                handle: requestAnimationFrame(t),
                                startTimestamp: Date.now(),
                                from: o.scrollableElementRef.current.scrollLeft,
                                to: e
                            }
                        }
                    }, this.scrollToIndex = function(e) {
                        if (o.scrollableElementRef.current && o.scrollableElementRef.current.firstElementChild) {
                            var t = Math.min(o.scrollableElementRef.current.firstElementChild.getBoundingClientRect().width * Math.min(o.scrollableElementRef.current.childElementCount - 1, Math.max(0, e)), o.scrollableElementRef.current.scrollWidth - o.scrollableElementRef.current.clientWidth);
                            o.scrollTo(t)
                        }
                    }, this.scrollToPrevious = function() {
                        if (o.scrollableElementRef.current && o.scrollableElementRef.current.firstElementChild) {
                            var e = o.scrollableElementRef.current.firstElementChild.getBoundingClientRect().width,
                                t = o.scrollableElementRef.current.scrollLeft - 1;
                            o.scrollToAnimation && o.scrollToAnimation.from > o.scrollToAnimation.to && (t = o.scrollToAnimation.to);
                            var l = Math.floor(t / e),
                                r = Math.max(0, t % e != 0 ? l : l - 1);
                            o.scrollTo(e * r)
                        }
                    }, this.scrollToNext = function() {
                        if (o.scrollableElementRef.current && o.scrollableElementRef.current.firstElementChild) {
                            var e = o.scrollableElementRef.current.offsetWidth,
                                t = o.scrollableElementRef.current.firstElementChild.getBoundingClientRect().width,
                                l = o.scrollableElementRef.current.scrollLeft + 1;
                            o.scrollToAnimation && o.scrollToAnimation.from < o.scrollToAnimation.to && (l = o.scrollToAnimation.to);
                            var r = Math.floor((l + e) / t - 1),
                                n = Math.min(o.scrollableElementRef.current.childElementCount - 1, r + 1),
                                i = o.scrollableElementRef.current.scrollWidth - o.scrollableElementRef.current.offsetWidth;
                            o.scrollTo(Math.min(t * n - e + t, i))
                        }
                    };
                    var l = t.autoscrollSpeed,
                        r = t.autoscrollTimeout,
                        n = t.scrollableElementRef;
                    this.autoscrollSpeed = l, this.autoscrollTimeout = r, this.scrollableElementRef = n
                },
                p = o(85118),
                A = o(91942);

            function w() {
                var e = (0, i._)(["\n                ", "\n              "]);
                return w = function() {
                    return e
                }, e
            }
            var R = (0, a.default)("section", {
                    target: "e18ojr8k0"
                })("width:100%;position:relative;"),
                g = (0, a.default)("div", {
                    target: "e18ojr8k1"
                })("width:100%;display:flex;flex-wrap:no-wrap;overflow-y:hidden;overflow-x:auto;", p.T, ";"),
                C = (0, a.default)("div", {
                    target: "e18ojr8k2"
                })("flex-shrink:0;"),
                x = function(e) {
                    var t = e.itemsPerPage,
                        o = void 0 === t ? 4 : t,
                        i = e.autoscroll,
                        a = void 0 !== i && i,
                        v = e.autoscrollSpeed,
                        b = void 0 === v ? 30 : v,
                        E = e.autoscrollTimeout,
                        p = void 0 === E ? 2e3 : E,
                        x = e.showControls,
                        k = void 0 === x || x,
                        M = e.alignment,
                        L = void 0 === M ? "left" : M,
                        y = e.controllerRef,
                        D = e.children,
                        S = e.label,
                        F = e.onScroll,
                        P = e.initialIndex,
                        _ = (e.slideBackgroundColor, (0, n._)(e, ["itemsPerPage", "autoscroll", "autoscrollSpeed", "autoscrollTimeout", "showControls", "alignment", "controllerRef", "children", "label", "onScroll", "initialIndex", "slideBackgroundColor"])),
                        H = (0, u.u)(),
                        W = (0, m.B)().t,
                        Y = (0, s.useRef)(null),
                        j = (0, s.useRef)(null),
                        B = (0, s.useRef)(),
                        I = (0, s.useRef)(null),
                        N = (0, s.useMemo)(function() {
                            return new T({
                                autoscrollSpeed: b,
                                autoscrollTimeout: p,
                                scrollableElementRef: j
                            })
                        }, [b, p]);

                    function q(e) {
                        B.current && clearTimeout(B.current), B.current = window.setTimeout(function() {
                            return I.current = e
                        }, 150)
                    }

                    function X(e) {
                        I.current && e.currentTarget === Y.current && (e.preventDefault(), e.stopPropagation())
                    }

                    function z(e) {
                        I.current || (q(e.clientX), e.preventDefault(), e.stopPropagation())
                    }

                    function K(e) {
                        I.current && (q(null), e.preventDefault(), e.stopPropagation())
                    }(0, s.useEffect)(function() {
                        y && (y.current = N)
                    }, [N, y]), (0, s.useEffect)(function() {
                        if (a) return N.resumeAutoscroll(), N.stopAutoscroll
                    }, [N, a]), (0, s.useEffect)(function() {
                        "number" == typeof P && N.scrollToIndex(P)
                    }, [N, P]), (0, s.useEffect)(function() {
                        return function() {
                            clearTimeout(B.current)
                        }
                    }, []), (0, s.useEffect)(function() {
                        function e(e) {
                            I.current && (j.current.scrollLeft -= -I.current + e.clientX, I.current = e.clientX)
                        }
                        return window.addEventListener("mouseup", K), window.addEventListener("mousemove", e),
                            function() {
                                window.removeEventListener("mouseup", K), window.removeEventListener("mousemove", e)
                            }
                    }, [j, I]);
                    var O = (0, s.useMemo)(function() {
                            return {
                                onMouseEnter: function() {
                                    N.stopAutoscroll()
                                },
                                onMouseLeave: function() {
                                    a && N.resumeAutoscroll()
                                },
                                onTouchStart: function() {
                                    N.stopAutoscroll()
                                },
                                onFocus: function() {
                                    N.stopAutoscroll()
                                },
                                onKeyUp: function(e) {
                                    switch (e.key) {
                                        case "ArrowRight":
                                            k && N.scrollToNext();
                                            break;
                                        case "ArrowLeft":
                                            k && N.scrollToPrevious()
                                    }
                                },
                                onClickCapture: X,
                                onMouseDown: z,
                                onMouseUp: K
                            }
                        }, [a, N, k]),
                        U = (0, s.useCallback)(function() {
                            N.scrollToPrevious()
                        }, [N]),
                        $ = (0, s.useCallback)(function() {
                            N.scrollToNext()
                        }, [N]),
                        G = (0, A.IR)(o, function(e) {
                            return "width: ".concat(100 / e, "%;")
                        }, null == H ? void 0 : H.media),
                        J = (0, s.useMemo)(function() {
                            return (0, A.IR)(o, function(e) {
                                if (!Array.isArray(D) || !(D.length > e)) {
                                    var t = {
                                        left: "flex-start",
                                        center: "center",
                                        right: "flex-end"
                                    }[L || "left"] || "flex-start";
                                    return "justify-content: ".concat(t, ";")
                                }
                            }, null == H ? void 0 : H.media)
                        }, [L, D, o, null == H ? void 0 : H.media]);
                    return (0, c.FD)(R, (0, r._)((0, l._)({
                        ref: Y,
                        "aria-label": S,
                        "aria-roledescription": "carousel"
                    }, O, _), {
                        children: [(0, c.Y)(g, {
                            ref: j,
                            "aria-live": "off",
                            onScroll: F,
                            css: (0, f.css)(J),
                            children: s.Children.map(D, function(e, t) {
                                return e ? (0, c.Y)(C, {
                                    role: "group",
                                    "aria-roledescription": "slide",
                                    css: (0, f.css)(w(), G),
                                    children: e
                                }, t) : null
                            })
                        }), k && (0, c.FD)(c.FK, {
                            children: [(0, c.Y)(d.$, {
                                css: {
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    transform: "translateY(-50%)"
                                },
                                "aria-label": W("accessibility.action.previous"),
                                "data-testid": "next-slide",
                                onClick: U,
                                children: (0, c.Y)(h.JG, {})
                            }), (0, c.Y)(d.$, {
                                css: {
                                    position: "absolute",
                                    right: 0,
                                    top: "50%",
                                    transform: "translateY(-50%)"
                                },
                                "aria-label": W("accessibility.action.next"),
                                "data-testid": "next-slide",
                                onClick: $,
                                children: (0, c.Y)(h.c_, {})
                            })]
                        })]
                    }))
                }
        },
        80049: (e, t, o) => {
            "use strict";
            o.d(t, {
                b: () => r
            });
            var l = o(96540);

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                    t = (0, l.useRef)({
                        callbacks: [],
                        timeoutHandle: null
                    });
                return (0, l.useCallback)(function(o) {
                    var l = t.current,
                        r = l.callbacks,
                        n = l.timeoutHandle;
                    r.push(o), clearTimeout(n), t.current.timeoutHandle = setTimeout(function() {
                        t.current.callbacks = [], r.forEach(function(e) {
                            return e()
                        })
                    }, e)
                }, [e])
            }
        },
        28291: (e, t, o) => {
            "use strict";
            o.d(t, {
                j: () => r
            });
            var l = o(96540),
                r = function(e, t, o) {
                    var r = (o || {}).disabled;
                    (0, l.useEffect)(function() {
                        if (!r) {
                            var o = null == e ? void 0 : e.current;
                            if (o && t) {
                                var l = function(e) {
                                    var l;
                                    (null == o ? void 0 : null === (l = o.contains) || void 0 === l ? void 0 : l.call(o, e.target)) || t()
                                };
                                return window.addEventListener("mousedown", l),
                                    function() {
                                        window.removeEventListener("mousedown", l)
                                    }
                            }
                        }
                    }, [e, t, r])
                }
        },
        85118: (e, t, o) => {
            "use strict";
            o.d(t, {
                T: () => l
            });
            var l = (0, o(17437).css)("overflow:-moz-scrollbars-none;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{width:0;height:0;display:none;}")
        }
    }
]);