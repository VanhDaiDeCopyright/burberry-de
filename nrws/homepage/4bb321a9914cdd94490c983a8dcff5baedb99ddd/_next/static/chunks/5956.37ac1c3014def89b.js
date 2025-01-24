"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5956], {
        55956: (e, t, n) => {
            n.d(t, {
                F: () => C
            });
            var a = n(71893),
                i = n(55456),
                r = n(4418),
                u = n(93038),
                o = n(84577),
                l = n(68101),
                c = n(2445),
                d = n(96540),
                s = n(69815),
                f = n(66797),
                v = n(17437),
                m = n(33144),
                p = n(85940),
                h = n(19853),
                y = n.n(h),
                b = n(73700),
                A = n(49054),
                x = function(e) {
                    var t = e.children,
                        n = e.disabled,
                        a = d.Children.toArray(t),
                        i = {};
                    return a.forEach(function(e, t) {
                        (0, d.isValidElement)(e) && (i[t] = (0, d.createRef)())
                    }), ! function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.disabled,
                            a = void 0 !== n && n,
                            i = t.includeContainer,
                            r = void 0 === i || i,
                            u = Array.isArray(e) ? e : [e];
                        (0, d.useEffect)(function() {
                            if (!a && 0 !== u.length) {
                                var e = [],
                                    t = !0,
                                    n = !1,
                                    i = void 0;
                                try {
                                    for (var o, l = u[Symbol.iterator](); !(t = (o = l.next()).done); t = !0) {
                                        var c = o.value;
                                        c && c.current && (0, A.Kr)(c.current, {
                                            includeContainer: r
                                        }).forEach(function(t) {
                                            e.push({
                                                element: t,
                                                hadTabIndex: t.hasAttribute("tabindex"),
                                                tabIndex: t.getAttribute("tabindex")
                                            }), t.setAttribute("tabindex", "-1")
                                        })
                                    }
                                } catch (e) {
                                    n = !0, i = e
                                } finally {
                                    try {
                                        t || null == l.return || l.return()
                                    } finally {
                                        if (n) throw i
                                    }
                                }
                                return function() {
                                    var t = !0,
                                        n = !1,
                                        a = void 0;
                                    try {
                                        for (var i, r = e[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
                                            var u = i.value,
                                                o = u.element,
                                                l = u.hadTabIndex,
                                                c = u.tabIndex;
                                            l ? o.setAttribute("tabindex", "".concat(c)) : o.removeAttribute("tabindex")
                                        }
                                    } catch (e) {
                                        n = !0, a = e
                                    } finally {
                                        try {
                                            t || null == r.return || r.return()
                                        } finally {
                                            if (n) throw a
                                        }
                                    }
                                }
                            }
                        }, [a, r])
                    }(Object.values(i), {
                        disabled: n
                    }), (0, c.Y)(c.FK, {
                        children: a.map(function(e, t) {
                            return (0, d.isValidElement)(e) ? (0, d.cloneElement)(e, {
                                ref: i[t]
                            }) : e
                        })
                    })
                },
                w = n(91942),
                g = n(63295),
                R = n(69129);

            function _() {
                var e = (0, o._)(["\n              ", "\n            "]);
                return _ = function() {
                    return e
                }, e
            }
            var M = (0, s.default)("div", {
                    target: "e1v5ert0"
                })("width:100%;overflow:hidden;"),
                I = (0, s.default)(m.P.div, {
                    target: "e1v5ert1"
                })("overflow:visible;width:100%;display:flex;flex-wrap:nowrap;"),
                E = (0, s.default)("div", {
                    target: "e1v5ert2"
                })("flex-shrink:0;flex-grow:0;"),
                S = function(e, t) {
                    return (e % t + t) % t
                };

            function T(e, t) {
                switch (t.type) {
                    case "set":
                        return (0, i._)((0, a._)({}, e), {
                            value: t.value,
                            min: Math.floor(t.min),
                            max: Math.ceil(t.max),
                            awaitingAnimation: null !== (n = t.awaitingAnimation) && void 0 !== n && n
                        });
                    case "setValue":
                        return (0, i._)((0, a._)({}, e), {
                            value: t.value,
                            min: t.value - Math.ceil(t.visibleItems) - t.preloadRadix,
                            max: t.value + Math.ceil(t.visibleItems) + t.preloadRadix,
                            awaitingAnimation: null !== (r = t.awaitingAnimation) && void 0 !== r && r
                        });
                    case "increment":
                        var n, r, u = e.value + 1;
                        return (0, i._)((0, a._)({}, e), {
                            value: u,
                            max: u + Math.ceil(t.visibleItems) + t.preloadRadix,
                            awaitingAnimation: !0
                        });
                    case "decrement":
                        var o = e.value - 1;
                        return (0, i._)((0, a._)({}, e), {
                            value: o,
                            min: o - Math.ceil(t.visibleItems) - t.preloadRadix,
                            awaitingAnimation: !0
                        });
                    default:
                        return e
                }
            }
            var C = (0, d.memo)(function(e) {
                var t, n, o, s, m, h, A, C, Q, D, N, V, k = e.controllerRef,
                    Y = e.visibleItems,
                    F = void 0 === Y ? 2.3 : Y,
                    L = e.preloadVisibleItems,
                    P = void 0 === L ? 0 : L,
                    j = e.preloadRadix,
                    q = void 0 === j ? 2 : j,
                    K = e.autoplay,
                    O = void 0 !== K && K,
                    X = e.autoplayInterval,
                    G = void 0 === X ? 500 : X,
                    U = e.autoplayDelay,
                    W = void 0 === U ? 0 : U,
                    z = e.autoscroll,
                    B = void 0 !== z && z,
                    H = e.autoscrollSpeed,
                    J = void 0 === H ? 400 : H,
                    Z = e.animationDurationMs,
                    $ = e.animationEase,
                    ee = e.swipeable,
                    et = e.children,
                    en = e.onChange,
                    ea = e.onAutoplayStart,
                    ei = e.onAutoplayCancel,
                    er = e.onSwipeLeft,
                    eu = e.onSwipeRight,
                    eo = (0, r._)(e, ["controllerRef", "visibleItems", "preloadVisibleItems", "preloadRadix", "autoplay", "autoplayInterval", "autoplayDelay", "autoscroll", "autoscrollSpeed", "animationDurationMs", "animationEase", "swipeable", "children", "onChange", "onAutoplayStart", "onAutoplayCancel", "onSwipeLeft", "onSwipeRight"]),
                    el = (0, f.u)(),
                    ec = (0, d.useRef)(null),
                    ed = (0, u._)((0, d.useReducer)(T, null, function() {
                        return {
                            value: 0,
                            min: -q,
                            max: Math.ceil(Array.isArray(F) ? (V = Math).max.apply(V, (0, l._)(F)) : F) + q,
                            awaitingAnimation: !1
                        }
                    }), 2),
                    es = ed[0],
                    ef = ed[1],
                    ev = d.useLayoutEffect;
                (0, d.useEffect)(function() {
                    var e = d.Children.count(et),
                        t = S(es.value, e);
                    null == en || en(t)
                }, [et, en, es.value]);
                var em = (0, d.useRef)(es);
                ev(function() {
                    em.current = es
                });
                var ep = (0, d.useMemo)(function() {
                        return (0, b.s)(150, function() {
                            var e = (0, w.Q8)(F, el.media);
                            ef({
                                type: "set",
                                value: em.current.value,
                                min: em.current.value - q,
                                max: em.current.value + q + Math.ceil(e)
                            })
                        })
                    }, [q, el.media, F]),
                    eh = (t = {
                        duration: (0, w.Q8)(void 0 === Z ? [400, 640] : Z, el.media),
                        ease: y().apply(void 0, (0, l._)(void 0 === $ ? [.4, 0, .6, 1] : $))
                    }, n = (0, d.useRef)(null), o = (0, g.d)(0), (0, d.useMemo)(function() {
                        o.attach(function(e, i) {
                            n.current && n.current.stop(), n.current = (0, R.i)((0, a._)({
                                from: o.get(),
                                to: e,
                                onUpdate: i
                            }, t))
                        })
                    }, Object.values(t)), o),
                    ey = (0, p.G)(eh, function(e) {
                        ep();
                        var t = 200 * (0, w.Q8)(P, el.media),
                            n = 100 / (0, w.Q8)(F, el.media),
                            a = es.min * n - es.min * t + t / 2;
                        return "calc(".concat(-e, "% + ").concat(a, "%)")
                    });
                ev(function() {
                    eh.updateAndNotify(eh.get())
                }, [eh, es.min]), ev(function() {
                    if (es.awaitingAnimation) {
                        var e = 200 * (0, w.Q8)(P, el.media),
                            t = 100 / (0, w.Q8)(F, el.media);
                        eh.set(es.value * t - es.value * e)
                    }
                }, [eh, es.value, es.awaitingAnimation, el.media, F]);
                var eb = (0, d.useRef)(),
                    eA = (0, d.useRef)(O),
                    ex = (0, d.useRef)(),
                    ew = (0, d.useMemo)(function() {
                        return {
                            goToNext: function() {
                                ef({
                                    type: "increment",
                                    visibleItems: (0, w.Q8)(F, el.media),
                                    preloadRadix: q
                                })
                            },
                            goToPrevious: function() {
                                ef({
                                    type: "decrement",
                                    visibleItems: (0, w.Q8)(F, el.media),
                                    preloadRadix: q
                                })
                            },
                            goToSlide: function(e) {
                                ef({
                                    type: "setValue",
                                    value: e,
                                    visibleItems: (0, w.Q8)(F, el.media),
                                    preloadRadix: q,
                                    awaitingAnimation: !0
                                })
                            },
                            startAutoplay: function() {
                                eA.current && setTimeout(function() {
                                    clearTimeout(eb.current), eb.current = setTimeout(function() {
                                        ew.goToNext()
                                    }, G), null == ea || ea()
                                }, W)
                            },
                            cancelAutoplay: function() {
                                clearTimeout(eb.current), null == ei || ei()
                            },
                            enableAutoplay: function() {
                                !eA.current && (eA.current = !0, O && ew.startAutoplay())
                            },
                            disableAutoplay: function() {
                                eA.current && (eA.current = !1, ew.cancelAutoplay())
                            },
                            enableAutoscroll: function() {
                                if (!ex.current) {
                                    var e = Date.now();
                                    ex.current = requestAnimationFrame(function t() {
                                        if (ec.current) {
                                            var n = (Date.now() - e) / 1e3,
                                                a = 100 * J / ec.current.offsetWidth,
                                                i = eh.get(),
                                                r = 200 * (0, w.Q8)(P, el.media),
                                                u = Math.floor(i / (100 / (0, w.Q8)(F, el.media) - r));
                                            u !== em.current.value && setTimeout(function() {
                                                ef({
                                                    type: "setValue",
                                                    value: u,
                                                    visibleItems: (0, w.Q8)(F, el.media),
                                                    preloadRadix: q
                                                })
                                            }, 0), eh.updateAndNotify(i + a * n), e = Date.now(), ex.current = requestAnimationFrame(t)
                                        }
                                    })
                                }
                            },
                            disableAutoscroll: function() {
                                cancelAnimationFrame(ex.current), ex.current = void 0
                            }
                        }
                    }, [F, el.media, q, P, eh, O, G, W, J, ea, ei]);
                (0, d.useEffect)(function() {
                    k && (k.current = ew)
                }, [ew, k]), (0, d.useEffect)(function() {
                    if (O) return ew.startAutoplay(),
                        function() {
                            return ew.cancelAutoplay()
                        }
                }, [O, G, ew, es.value]), (0, d.useEffect)(function() {
                    if (B && ec.current) return ew.enableAutoscroll(),
                        function() {
                            ew.disableAutoscroll()
                        }
                }, [B, ew]);
                var eg = (m = (s = {
                        onSwipeLeft: (0, d.useCallback)(function() {
                            ew.goToNext(), null == er || er()
                        }, [ew, er]),
                        onSwipeRight: (0, d.useCallback)(function() {
                            ew.goToPrevious(), null == eu || eu()
                        }, [ew, eu])
                    }).onSwipeLeft, h = s.onSwipeRight, C = void 0 === (A = s.xMinimumDistance) ? 20 : A, D = void 0 === (Q = s.yMaximumDistance) ? 50 : Q, N = (0, d.useRef)({}), (0, d.useMemo)(function() {
                        return {
                            onTouchStart: function(e) {
                                var t = !0,
                                    n = !1,
                                    a = void 0;
                                try {
                                    for (var i, r = Array.from(e.changedTouches)[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
                                        var u = i.value;
                                        N.current[u.identifier] = u
                                    }
                                } catch (e) {
                                    n = !0, a = e
                                } finally {
                                    try {
                                        t || null == r.return || r.return()
                                    } finally {
                                        if (n) throw a
                                    }
                                }
                            },
                            onTouchEnd: function(e) {
                                var t = Array.from(e.changedTouches)[0];
                                if (t.identifier in N.current) {
                                    var n = N.current[t.identifier],
                                        a = t.screenX - n.screenX,
                                        i = t.screenY - n.screenY;
                                    Math.abs(a) > C && Math.abs(i) < D && (a > 0 ? null == h || h() : null == m || m()), N.current = {}
                                }
                            }
                        }
                    }, [m, h, C, D])),
                    eR = (0, d.useMemo)(function() {
                        var e = Array.from({
                                length: Math.abs(es.max - es.min)
                            }, function(e, t) {
                                return es.min + t
                            }),
                            t = d.Children.toArray(et);
                        return e.reduce(function(e, n) {
                            var r = S(n, t.length),
                                u = 200 * (0, w.Q8)(P, el.media),
                                o = (0, w.IR)(F, function(e) {
                                    return "width: ".concat(100 / e - u, "%;")
                                }, el.media),
                                l = t[r];
                            if ((0, d.isValidElement)(l)) {
                                var s, f, m = (null == l ? void 0 : null === (s = l.props) || void 0 === s ? void 0 : s.id) ? {
                                    id: null == l ? void 0 : null === (f = l.props) || void 0 === f ? void 0 : f.id
                                } : {};
                                e.push((0, c.Y)(E, (0, i._)((0, a._)({
                                    css: (0, v.css)(_(), o)
                                }, m), {
                                    children: l
                                }), n))
                            }
                            return e
                        }, [])
                    }, [et, es.max, es.min, el.media, F, P]);
                return (0, c.Y)(M, (0, i._)((0, a._)({}, eo), {
                    children: (0, c.Y)(I, (0, i._)((0, a._)({
                        ref: ec,
                        tabIndex: 0,
                        style: {
                            x: ey
                        }
                    }, void 0 === ee || ee ? eg : {}), {
                        children: (0, c.Y)(x, {
                            children: eR
                        })
                    }))
                }))
            });
            C.displayName = "Carousel"
        }
    }
]);