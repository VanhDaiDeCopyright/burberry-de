"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8979], {
        28420: (t, n, e) => {
            e.d(n, {
                A: () => te
            });
            var o = e(71893),
                i = e(55456),
                r = e(4418),
                a = e(93038),
                l = e(84577),
                u = e(2445),
                c = e(96540),
                d = e(17437),
                s = e(66797),
                h = e(69815),
                f = e(28596),
                v = e(54417),
                p = e(12228),
                m = e(89315),
                g = e(26714),
                _ = e(74423),
                b = e(18659),
                w = e(11238);

            function y(t) {
                var n = t.intensity,
                    e = void 0 === n ? 100 : n,
                    o = t.blur,
                    i = void 0 === o ? 0 : o,
                    r = t.color,
                    a = void 0 === r ? "black" : r;
                return (0, c.useMemo)(function() {
                    if ("number" == typeof e) {
                        var t = Math.max(0, Math.min(100, e)),
                            n = Math.max(0, Math.min(100, i));
                        return (0, d.css)("text-shadow:0px 0px ", 14 + n / 100 * 6, "px\n        rgba(\n          ", "white" === a ? "255,255,255" : "0,0,0", ",", t / 100, "        );")
                    }
                }, [i, a, e])
            }

            function k() {
                var t = (0, l._)(["\n    width: 8.3rem;\n    opacity: ", ";\n\n    ", " {\n      display: none;\n    }\n\n    ", " {\n      width: 11rem;\n    }\n\n    ", " {\n      width: 11.6rem;\n    }\n  "]);
                return k = function() {
                    return t
                }, t
            }

            function C() {
                var t = (0, l._)(["\n      ::after {\n        content: '';\n        background: #00e0ff;\n        opacity: 0.4;\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 3.2rem;\n        height: 3.2rem;\n        transform: translate(-0.8rem, -0.8rem);\n      }\n    "]);
                return C = function() {
                    return t
                }, t
            }

            function x() {
                var t = (0, l._)(["\n    position: absolute;\n    top: ", "%;\n    left: ", "%;\n    pointer-events: none;\n    color: ", ";\n\n    display: flex;\n    align-items: flex-start;\n\n    transition: opacity 320ms cubic-bezier(0.42, 0, 0.01, 1);\n    filter: blur(0);\n\n    opacity: ", ";\n\n    ", "\n  "]);
                return x = function() {
                    return t
                }, t
            }

            function M() {
                var t = (0, l._)(["\n      background: rgba(255, 0, 214, 0.3);\n      border: 2px solid white;\n    "]);
                return M = function() {
                    return t
                }, t
            }

            function z() {
                var t = (0, l._)(["\n    position: absolute;\n\n    ", "\n\n    top: ", "%;\n    left: ", "%;\n    width: ", "%;\n    height: ", "%;\n    cursor: none;\n  "]);
                return z = function() {
                    return t
                }, t
            }
            var A = (0, h.default)(g._, {
                    target: "eepzowi0"
                })(function(t) {
                    var n, e, o, i = t.theme,
                        r = t.show;
                    return (0, d.css)(k(), r ? 1 : 0, null === (n = i.media) || void 0 === n ? void 0 : n.small, null === (e = i.media) || void 0 === e ? void 0 : e.large, null === (o = i.media) || void 0 === o ? void 0 : o.extraLarge)
                }),
                T = (0, h.default)(_.$, {
                    target: "eepzowi1"
                })("width:100%;height:100%;cursor:inherit;"),
                H = (0, h.default)("div", {
                    target: "eepzowi2"
                })(function(t) {
                    var n = t.top,
                        e = t.left,
                        o = t.show,
                        i = t.color;
                    return (0, d.css)(x(), n, e, i, o ? 1 : 0, w.y && (0, d.css)(C()))
                }),
                O = (0, h.default)("div", {
                    target: "eepzowi3"
                })(function(t) {
                    var n = t.top,
                        e = t.left,
                        o = t.width,
                        i = t.height;
                    return (0, d.css)(z(), w.y && (0, d.css)(M()), n, e, o, i)
                }),
                S = (0, h.default)(b.F, {
                    target: "eepzowi4"
                })("margin-right:1.2rem;"),
                Y = function(t) {
                    var n = t.area,
                        e = n.hotspot,
                        l = n.ctaCopyOnHover,
                        d = t.product,
                        s = t.onSetHovering,
                        h = t.onClick,
                        v = t.hoverable,
                        g = t.showMarker,
                        _ = t.isFocusedInModal,
                        b = (0, r._)(t.area, ["hotspot", "ctaCopyOnHover"]),
                        w = (0, c.useRef)(null),
                        k = (0, c.useRef)(null),
                        C = (0, a._)((0, c.useState)(!1), 2),
                        x = C[0],
                        M = C[1],
                        z = (0, p.useViewport)().isTouchDevice,
                        Y = (0, f.B)().t,
                        F = y({
                            blur: e.shadowBlur,
                            color: e.shadowColour,
                            intensity: e.shadowOpacity
                        }),
                        R = (0, c.useCallback)(function() {
                            null == s || s(!0, l), M(!0)
                        }, [s, l]),
                        B = (0, c.useCallback)(function() {
                            null == s || s(!1), M(!1), setTimeout(function() {
                                var t = w.current;
                                t && (t.style.transform = "translate3d(0, 0, 0)")
                            }, 320)
                        }, [s]),
                        E = (0, c.useCallback)(function(t) {
                            var n = w.current,
                                o = k.current,
                                i = null == n ? void 0 : n.parentElement;
                            if (!x) {
                                R();
                                return
                            }
                            if (n && o && i) {
                                var r = i.getBoundingClientRect(),
                                    a = r.left,
                                    l = r.top,
                                    u = o.clientWidth,
                                    c = o.clientHeight,
                                    d = t.clientX - (void 0 === u ? 0 : u) / 2 - (void 0 === a ? 0 : a),
                                    s = t.clientY - (void 0 === c ? 0 : c) / 2 - (void 0 === l ? 0 : l),
                                    h = 100 * d / (i.clientWidth || 1),
                                    f = 100 * s / (i.clientHeight || 1),
                                    v = (h - e.left) * (i.clientWidth || 1) / 100,
                                    p = (f - e.top) * (i.clientHeight || 1) / 100;
                                n.style.transform = "translate3d(".concat(v, "px, ").concat(p, "px, 0) scale(1, 1)")
                            }
                        }, [R, w, e, x]),
                        L = (0, c.useCallback)(function(t) {
                            t.stopPropagation(), (null == d ? void 0 : d.id) && h && (null == s || s(!1), M(!1), h(d.id))
                        }, [h, s, null == d ? void 0 : d.id]),
                        D = (void 0 === v || v) && !z;
                    return (0, u.FD)(u.FK, {
                        children: [(0, u.Y)(O, (0, i._)((0, o._)({}, b), {
                            onMouseEnter: D ? R : void 0,
                            onMouseLeave: D ? B : void 0,
                            onMouseMove: D ? E : void 0,
                            css: D ? void 0 : {
                                cursor: "pointer"
                            },
                            "data-testid": "hotspot-area-div",
                            children: (0, u.Y)(T, {
                                onClick: L,
                                "aria-label": Y("accessibility.action.openModal")
                            })
                        })), (0, u.FD)(H, (0, i._)((0, o._)({}, e), {
                            css: F,
                            ref: w,
                            show: x || g,
                            children: [(0, u.Y)(S, {
                                ref: k,
                                collapse: _
                            }), (0, u.Y)(m.j, {
                                cubicBezier: "0.42, 0, 0.01, 1",
                                animationDuration: "360ms",
                                alignment: "center",
                                direction: "left-right",
                                open: x,
                                children: (0, u.Y)(A, {
                                    sources: null == d ? void 0 : d.image,
                                    ratio: 83 / 111,
                                    show: x
                                })
                            })]
                        }))]
                    })
                },
                F = e(8234),
                R = e(14656),
                B = e(59367),
                E = e(38600),
                L = e(91942);

            function D() {
                var t = (0, l._)(["\n    width: 100%;\n    position: relative;\n\n    ", "\n\n    ", ";\n  "]);
                return D = function() {
                    return t
                }, t
            }

            function P() {
                var t = (0, l._)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n\n    pointer-events: none;\n\n    background-color: ", ";\n    opacity: ", ";\n\n    ", ";\n\n    transition: 640ms cubic-bezier(0.42, 0, 0.01, 1);\n  "]);
                return P = function() {
                    return t
                }, t
            }

            function I() {
                var t = (0, l._)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: flex-start;\n    pointer-events: none;\n\n    justify-content: ", ";\n\n    ", " {\n      font-size: 1.4rem;\n      line-height: 1.57;\n    }\n  "]);
                return I = function() {
                    return t
                }, t
            }

            function W() {
                var t = (0, l._)(["\n      position: ", ";\n      display: flex;\n      align-items: flex-start;\n\n      padding: 1.7rem 1.7rem;\n\n      ", " {\n        padding: 2.7rem 2.9rem;\n      }\n\n      ", " {\n        padding: 1.7rem 4.1rem;\n      }\n\n      ", " {\n        padding: 3.7rem 4.5rem;\n      }\n\n      ", ";\n    "]);
                return W = function() {
                    return t
                }, t
            }

            function V() {
                var t = (0, l._)(["\n    display: flex;\n    align-items: flex-start;\n    padding: 1rem;\n    font-weight: ", ";\n    font-size: 1.2rem;\n    line-height: 1.66;\n    text-shadow: inherit;\n    pointer-events: all;\n    cursor: pointer;\n\n    transform: translateZ(0);\n\n    color: inherit;\n    ", ";\n\n    ", " {\n      font-size: 1.4rem;\n      line-height: 1.57;\n    }\n  "]);
                return V = function() {
                    return t
                }, t
            }

            function Q() {
                var t = (0, l._)(["\n      animation-delay: 4.5s;\n      animation: 4s ", " linear;\n      animation-fill-mode: forwards;\n      animation-iteration-count: infinite;\n    "]);
                return Q = function() {
                    return t
                }, t
            }

            function j() {
                var t = (0, l._)(["\n    font-size: 1.4rem;\n    margin-top: 0.2rem;\n    margin-right: 1rem;\n\n    ", " {\n      margin-top: 0.3rem;\n    }\n\n    ", "\n  "]);
                return j = function() {
                    return t
                }, t
            }
            var K = (0, h.default)(g._, {
                    target: "etah5rn0"
                })("background:", function(t) {
                    var n;
                    return null === (n = t.theme.colors) || void 0 === n ? void 0 : n.grey01
                }, ";height:100%;"),
                N = (0, h.default)("div", {
                    target: "etah5rn1"
                })(function(t) {
                    var n = t.theme,
                        e = t.color,
                        o = t.paddingBottom;
                    return (0, d.css)(D(), e && "color: ".concat(e, ";"), o && (0, L.IR)(o, function(t) {
                        return "margin-bottom: ".concat("number" == typeof t ? "".concat(t / 10, "rem") : t, ";")
                    }, n.media))
                }),
                X = (0, h.default)("div", {
                    target: "etah5rn2"
                })(function(t) {
                    var n, e = t.theme,
                        o = t.color,
                        i = t.opacity,
                        r = t.show;
                    return (0, d.css)(P(), o || (null === (n = e.colors) || void 0 === n ? void 0 : n.black), "number" == typeof i ? i / 100 : .5, !r && "opacity: 0")
                }),
                $ = (0, h.default)("div", {
                    target: "etah5rn3"
                })("position:absolute;left:0;top:0;"),
                G = (0, h.default)("div", {
                    target: "etah5rn4"
                })("overflow:hidden;position:absolute;left:0;top:0;width:100%;height:100%;"),
                J = (0, h.default)("div", {
                    target: "etah5rn5"
                })(function(t) {
                    var n, e = t.theme,
                        o = t.horizontalAlignment;
                    return (0, d.css)(I(), {
                        left: "flex-start",
                        center: "center",
                        right: "flex-end"
                    }[o || "center"], null === (n = e.media) || void 0 === n ? void 0 : n.extraLarge)
                }),
                U = (0, h.default)("div", {
                    target: "etah5rn6"
                })(function(t) {
                    var n, e, o, i = t.theme,
                        r = t.verticalAlignment,
                        a = t.sticky;
                    return (0, d.css)(W(), a ? "sticky" : "static", null === (n = i.media) || void 0 === n ? void 0 : n.medium, null === (e = i.media) || void 0 === e ? void 0 : e.large, null === (o = i.media) || void 0 === o ? void 0 : o.extraLarge, {
                        top: "top: 0;",
                        bottom: "bottom: 0; align-self: flex-end;",
                        center: "top: 50%;"
                    }[r || "bottom"])
                }),
                Z = (0, h.default)(_.$, {
                    target: "etah5rn7"
                })(function(t) {
                    var n, e, o, i = t.theme,
                        r = t.color;
                    return (0, d.css)(V(), null === (e = i.font) || void 0 === e ? void 0 : null === (n = e.weight) || void 0 === n ? void 0 : n.medium, r && "color: ".concat(r), null === (o = i.media) || void 0 === o ? void 0 : o.extraLarge)
                }),
                q = (0, d.keyframes)("0%{opacity:1;}12.5%{opacity:0;}25%{opacity:1;}"),
                tt = (0, h.default)(b.F, {
                    shouldForwardProp: function(t) {
                        return !["animate"].includes(t)
                    },
                    target: "etah5rn8"
                })(function(t) {
                    var n, e = t.theme,
                        o = t.animate;
                    return (0, d.css)(j(), null === (n = e.media) || void 0 === n ? void 0 : n.extraLarge, o && (0, d.css)(Q(), q))
                }),
                tn = function(t) {
                    var n = t.imageSize,
                        e = t.containerSize,
                        i = t.horizontalAlignment,
                        r = t.verticalAlignment,
                        a = Math.round(n.width / n.height * 100),
                        l = Math.round(e.width / e.height * 100);
                    if (a > l) {
                        var u, c = n.width * e.height / n.height,
                            d = c - e.width;
                        return {
                            top: 0,
                            width: Math.ceil(c),
                            height: Math.ceil(e.height),
                            left: "center" === (u = void 0 === i ? "center" : i) ? Math.ceil(-(d / 2 * 1)) : "right" === u ? Math.ceil(-1 * d) : 0
                        }
                    }
                    if (a < l) {
                        var s, h = n.height * e.width / n.width,
                            f = h - e.height;
                        return {
                            left: 0,
                            width: Math.ceil(e.width),
                            height: Math.ceil(h),
                            top: "center" === (s = void 0 === r ? "center" : r) ? Math.ceil(-(f / 2 * 1)) : "bottom" === s ? Math.ceil(-1 * f) : 0
                        }
                    }
                    return (0, o._)({
                        top: 0,
                        left: 0
                    }, e)
                },
                te = (0, c.forwardRef)(function(t, n) {
                    var e, l, d, h, g, _, b, w, k, C, x, M, z, A = t.image,
                        T = t.imageSizes,
                        H = t.hotspots,
                        O = void 0 === H ? [] : H,
                        S = t.callToActionColor,
                        D = t.callToActionText,
                        P = t.callToActionHoverText,
                        I = t.verticalAlignment,
                        W = t.horizontalAlignment,
                        V = t.mediaHorizontalAlignment,
                        Q = t.mediaVerticalAlignment,
                        j = t.sticky,
                        q = t.colour,
                        te = t.products,
                        to = void 0 === te ? [] : te,
                        ti = t.shadowOpacity,
                        tr = t.shadowColour,
                        ta = t.shadowRadius,
                        tl = t.carouselTitle,
                        tu = t.hoverable,
                        tc = void 0 === tu || tu,
                        td = t.paddingBottom,
                        ts = t.overlayColor,
                        th = t.overlayOpacity,
                        tf = t.ratio,
                        tv = t.imageAltText,
                        tp = t.lazy,
                        tm = (0, r._)(t, ["image", "imageSizes", "hotspots", "callToActionColor", "callToActionText", "callToActionHoverText", "verticalAlignment", "horizontalAlignment", "mediaHorizontalAlignment", "mediaVerticalAlignment", "sticky", "colour", "products", "shadowOpacity", "shadowColour", "shadowRadius", "carouselTitle", "hoverable", "paddingBottom", "overlayColor", "overlayOpacity", "ratio", "imageAltText", "lazy"]),
                        tg = (0, R.Gg)(),
                        t_ = tg.pushModal,
                        tb = tg.isModalOpen,
                        tw = (0, p.useViewport)(),
                        ty = (0, v.useHydrationRender)(),
                        tk = (0, s.u)(),
                        tC = (0, f.B)().t,
                        tx = (0, a._)((0, F.C)(), 2),
                        tM = tx[0],
                        tz = tx[1],
                        tA = (0, a._)((0, c.useState)(!1), 2),
                        tT = tA[0],
                        tH = tA[1],
                        tO = (0, a._)((0, c.useState)(!1), 2),
                        tS = tO[0],
                        tY = tO[1],
                        tF = (0, a._)((d = void 0 === (l = (e = {
                            disabled: tS || !tz,
                            threshold: .2
                        }).threshold) ? 0 : l, g = void 0 === (h = e.rootMargin) ? "0px" : h, _ = e.root, b = e.disabled, k = (w = (0, a._)((0, c.useState)(!1), 2))[0], C = w[1], M = (x = (0, a._)((0, c.useState)(), 2))[0], z = x[1], (0, c.useEffect)(function() {
                            if (!b) {
                                var t = new IntersectionObserver(function(t) {
                                    C(t[t.length - 1].isIntersecting)
                                }, {
                                    threshold: d,
                                    rootMargin: g,
                                    root: _
                                });
                                return M && t.observe(M),
                                    function() {
                                        return t.disconnect()
                                    }
                            }
                        }, [M, d, b, g, _]), [(0, c.useCallback)(function(t) {
                            z(t)
                        }, []), k]), 2),
                        tR = tF[0],
                        tB = tF[1],
                        tE = (0, E.O)([n, tM, tR]),
                        tL = (0, B.x)({
                            enabled: "top" === I
                        }),
                        tD = (0, c.useRef)(null),
                        tP = (0, c.useRef)(null),
                        tI = tb("HOTSPOT"),
                        tW = (0, a._)((0, c.useState)(!1), 2),
                        tV = tW[0],
                        tQ = tW[1],
                        tj = (0, a._)((0, c.useState)(), 2),
                        tK = tj[0],
                        tN = tj[1],
                        tX = (0, a._)((0, c.useState)(!1), 2),
                        t$ = tX[0],
                        tG = tX[1],
                        tJ = (0, a._)((0, c.useState)(), 2),
                        tU = tJ[0],
                        tZ = tJ[1],
                        tq = (0, c.useMemo)(function() {
                            return ty ? "center" : (0, L.Q8)(V, tk.media)
                        }, [ty, tk.media, tw, V]),
                        t0 = (0, c.useMemo)(function() {
                            return ty ? "center" : (0, L.Q8)(Q, tk.media)
                        }, [ty, tk.media, tw, Q]),
                        t1 = (0, c.useMemo)(function() {
                            return ty ? [] : (0, L.Q8)(O, tk.media)
                        }, [ty, O, tk.media, tw]),
                        t2 = (0, c.useCallback)(function() {
                            var t = tP.current,
                                n = tD.current;
                            if (t && n) {
                                var e = tn({
                                        imageSize: {
                                            height: n.naturalHeight || 0,
                                            width: n.naturalWidth || 0
                                        },
                                        containerSize: {
                                            height: n.clientHeight || 0,
                                            width: n.clientWidth || 0
                                        },
                                        horizontalAlignment: tq,
                                        verticalAlignment: t0
                                    }),
                                    o = e.width,
                                    i = e.height,
                                    r = e.top,
                                    a = e.left;
                                t.setAttribute("style", "width: ".concat(o, "px; height: ").concat(i, "px; transform: translate(").concat(a, "px, ").concat(r, "px);"))
                            }
                        }, [tq, t0]);
                    (0, c.useEffect)(function() {
                        tz && tT && t2()
                    }, [tz, tT, t2]);
                    var t4 = (0, c.useCallback)(function() {
                            tZ(void 0)
                        }, [tZ]),
                        t5 = (0, c.useCallback)(function() {
                            t_("HOTSPOT", {
                                onClose: t4,
                                overlayOpacity: th,
                                carouselTitle: tl,
                                products: to,
                                highlightedProduct: tU
                            })
                        }, [t4, th, tl, to, tU, t_]),
                        t3 = (0, c.useCallback)(function() {
                            tH(!0)
                        }, []),
                        t8 = (0, c.useCallback)(function(t) {
                            null == t || t.stopPropagation(), tY(!0), t5()
                        }, [t5]);
                    (0, c.useEffect)(function() {
                        tU && t8()
                    }, [tU]);
                    var t6 = (0, c.useCallback)(function(t) {
                            tZ(t)
                        }, [tZ]),
                        t7 = (0, c.useCallback)(function(t, n) {
                            tQ(t), tN(n)
                        }, []);
                    (0, c.useEffect)(function() {
                        if (tz) return window.addEventListener("resize", t2),
                            function() {
                                return window.removeEventListener("resize", t2)
                            }
                    }, [tz, t2]), (0, c.useEffect)(function() {
                        tG(!0)
                    }, [tz, tG]);
                    var t9 = (0, c.useCallback)(function() {
                        var t = !1,
                            n = setTimeout(function() {
                                t || tG(!1)
                            }, 4500);
                        return function() {
                            t = !0, clearTimeout(n)
                        }
                    }, []);
                    (0, c.useEffect)(function() {
                        if (t$) return t9()
                    }, [t$, t9]), (0, c.useEffect)(function() {
                        tB && !tS && tG(!0)
                    }, [tB, tS]);
                    var nt = (0, c.useMemo)(function() {
                            return tz && tT ? t1.map(function(t) {
                                return (0, u.Y)(Y, {
                                    area: t,
                                    product: null == to ? void 0 : to.find(function(n) {
                                        return n.id === t.hotspot.productId
                                    }),
                                    onSetHovering: t7,
                                    onClick: t6,
                                    hoverable: !tI && !t$ && tc,
                                    showMarker: t$ || tI,
                                    isFocusedInModal: t.hotspot.productId === tU
                                }, "hotspot-".concat(t.left, "-").concat(t.top))
                            }) : []
                        }, [t6, t7, tz, t1, tc, tT, t$, to, tI, tU]),
                        nn = y({
                            blur: ta,
                            color: tr,
                            intensity: ti
                        }),
                        ne = (0, c.useMemo)(function() {
                            return tV ? tK || P : D
                        }, [tV, tK, P, D]);
                    return (0, u.FD)(N, (0, i._)((0, o._)({
                        ref: tE,
                        css: nn,
                        paddingBottom: void 0 === td ? [68, 68, 88, 124] : td,
                        color: q,
                        onClick: tI ? void 0 : function() {
                            return t8()
                        }
                    }, tm), {
                        children: [(0, u.Y)(K, {
                            ref: tD,
                            onLoad: t3,
                            containment: "crop",
                            sources: A,
                            sizes: T,
                            ratio: tf,
                            lazy: void 0 === tp || tp,
                            alignment: "".concat(tq, " ").concat(t0),
                            alt: tv
                        }), (0, u.Y)(X, {
                            color: ts,
                            opacity: th,
                            show: tT && (t$ || tI)
                        }), tz && (0, u.FD)(u.FK, {
                            children: [(0, u.Y)(G, {
                                children: (0, u.Y)($, {
                                    ref: tP,
                                    children: nt
                                })
                            }), D && (0, u.Y)(J, {
                                horizontalAlignment: W,
                                children: (0, u.Y)(U, {
                                    ref: tL,
                                    verticalAlignment: I,
                                    sticky: j,
                                    children: (0, u.Y)(m.j, {
                                        alignment: "center",
                                        animationDuration: "640ms",
                                        cubicBezier: "0.42, 0, 0.01, 1",
                                        open: !0,
                                        direction: "left-right",
                                        children: (0, u.FD)(Z, {
                                            "aria-label": tC("accessibility.action.openModal"),
                                            onClick: t8,
                                            color: S,
                                            children: [(0, u.Y)(tt, {
                                                collapse: t$ && tS || tI,
                                                animate: !tS
                                            }), (0, u.Y)("span", {
                                                children: ne
                                            })]
                                        })
                                    }, ne)
                                })
                            })]
                        })]
                    }))
                })
        },
        8979: (t, n, e) => {
            e.r(n), e.d(n, {
                HotspotCellAdapter: () => T
            });
            var o = e(50467),
                i = e(71893),
                r = e(55456),
                a = e(4418),
                l = e(93038),
                u = e(68101),
                c = e(2445),
                d = e(96540),
                s = e(82393),
                h = e(66797),
                f = e(12228),
                v = e(54417),
                p = e(28420),
                m = e(1760),
                g = e(8234),
                _ = e(82433),
                b = e(38600),
                w = e(3502),
                y = e(91804),
                k = {
                    Left: "left",
                    Right: "right",
                    Centre: "center"
                },
                C = {
                    Top: "top",
                    Bottom: "bottom",
                    Centre: "center"
                },
                x = {
                    Dark: "black",
                    Light: "white"
                },
                M = {
                    White: "white",
                    Black: "black"
                },
                z = function(t, n, e) {
                    return function(o) {
                        var i, r;
                        return {
                            height: o.height,
                            width: o.width,
                            left: o.coordinate_x,
                            top: o.coordinate_y,
                            ctaCopyOnHover: o.copy_on_cta_hover,
                            hotspot: {
                                productId: o.product[0].title,
                                color: x[o.hotspot.colour],
                                left: o.hotspot.coordinate_x,
                                top: o.hotspot.coordinate_y,
                                shadowColour: x[o.drop_shadow.colour || t] || "black",
                                shadowOpacity: null !== (i = o.drop_shadow.opacity) && void 0 !== i ? i : n,
                                shadowBlur: null !== (r = o.drop_shadow.blur) && void 0 !== r ? r : e
                            }
                        }
                    }
                },
                A = {
                    1: 1,
                    "1/2": .5,
                    "1/3": 1 / 3,
                    "1/4": 1 / 4,
                    "2/3": 2 / 3,
                    "3/4": 3 / 4
                },
                T = function(t) {
                    var n, e, T, H, O, S, Y, F = t.data,
                        R = t.css,
                        B = t.metadata,
                        E = t.fullbleed,
                        L = t.columns,
                        D = t.disabled,
                        P = t.forwardedRef,
                        I = (0, a._)(t, ["data", "css", "metadata", "fullbleed", "columns", "disabled", "forwardedRef"]),
                        W = (0, v.useHydrationRender)(),
                        V = (0, f.useViewport)(),
                        Q = (0, l._)((0, g.C)({}), 2),
                        j = Q[0],
                        K = Q[1],
                        N = (0, h.u)(),
                        X = (0, b.O)([P, j]),
                        $ = (0, d.useMemo)(function() {
                            var t, n;
                            return (null !== (n = null == F ? void 0 : null === (t = F.small_asset_hotspots) || void 0 === t ? void 0 : t.hotspot_areas) && void 0 !== n ? n : []).filter(function(t) {
                                var n;
                                return t.product.length > 0 && !!(null === (n = t.product[0]) || void 0 === n ? void 0 : n.title)
                            })
                        }, [null == F ? void 0 : null === (n = F.small_asset_hotspots) || void 0 === n ? void 0 : n.hotspot_areas]),
                        G = (0, d.useMemo)(function() {
                            var t, n;
                            return (null !== (n = null == F ? void 0 : null === (t = F.large_asset_hotspots) || void 0 === t ? void 0 : t.hotspot_areas) && void 0 !== n ? n : []).filter(function(t) {
                                var n;
                                return t.product.length > 0 && !!(null === (n = t.product[0]) || void 0 === n ? void 0 : n.title)
                            })
                        }, [null == F ? void 0 : null === (e = F.large_asset_hotspots) || void 0 === e ? void 0 : e.hotspot_areas]),
                        J = (0, d.useMemo)(function() {
                            return W || !F ? [] : (V.small ? $ : G).reduce(function(t, n) {
                                return t.includes(n.product[0].title) ? t : (0, u._)(t).concat([n.product[0].title])
                            }, [])
                        }, [W, N.media, V]),
                        U = (0, _.Q)(J, {
                            enabled: K
                        }).data,
                        Z = (0, d.useMemo)(function() {
                            if (F) {
                                var t = F.desktop_vertical_asset_alignment;
                                return [C[F.mobile_vertical_asset_alignment], C[t]]
                            }
                        }, [F]),
                        q = (0, d.useMemo)(function() {
                            if (F) {
                                var t = F.mobile_horizontal_asset_alignment,
                                    n = F.desktop_horizontal_asset_alignment;
                                return [k[t], k[n]]
                            }
                        }, [F]),
                        tt = (0, s.bl)().addDemandForTransparency,
                        tn = (0, d.useMemo)(function() {
                            return (null == F ? void 0 : F.overlay_colour) ? (0, w.d)(F.overlay_colour) : ""
                        }, [null == F ? void 0 : F.overlay_colour]);
                    (0, d.useEffect)(function() {
                        var t, n, e, o;
                        if ((null == B ? void 0 : B.isFirstOnPage) && (null == F ? void 0 : null === (t = F.cell_configuration) || void 0 === t ? void 0 : t.transparent_nav)) return tt((null == F ? void 0 : null === (n = F.cell_configuration.transparent_nav_config) || void 0 === n ? void 0 : n.nav_colour) === "Light" ? null === (e = N.colors) || void 0 === e ? void 0 : e.white : null === (o = N.colors) || void 0 === o ? void 0 : o.black)
                    }, [tt, null == B ? void 0 : B.isFirstOnPage, null == F ? void 0 : null === (H = F.cell_configuration) || void 0 === H ? void 0 : null === (T = H.transparent_nav_config) || void 0 === T ? void 0 : T.nav_colour, null == F ? void 0 : null === (O = F.cell_configuration) || void 0 === O ? void 0 : O.transparent_nav, null === (S = N.colors) || void 0 === S ? void 0 : S.white, null === (Y = N.colors) || void 0 === Y ? void 0 : Y.black]);
                    var te = (null == F ? void 0 : F.mobile_width) || "1",
                        to = (null == F ? void 0 : F.mobile_full_bleed) || !1,
                        ti = 12 * A[te],
                        tr = (null == F ? void 0 : F.desktop_width) || "1",
                        ta = (null == F ? void 0 : F.desktop_full_bleed) || !1,
                        tl = 12 * A[tr],
                        tu = (0, m.dJ)({
                            disabled: void 0 !== D && D,
                            columns: void 0 !== L ? L : [ti, tl],
                            fullbleed: void 0 !== E ? E : [to, ta]
                        });
                    if (!F) return null;
                    var tc = F.cta,
                        td = F.small_asset,
                        ts = F.large_asset,
                        th = F.cell_configuration,
                        tf = th.bottom_padding,
                        tv = th.copy_colour,
                        tp = F.hover_area_enabled,
                        tm = F.overlay_opacity,
                        tg = F.drop_shadow_blur,
                        t_ = F.drop_shadow_colour,
                        tb = F.drop_shadow_opacity,
                        tw = F.display_title,
                        ty = F.mobile_ratio,
                        tk = F.mobile_ratio_width,
                        tC = F.mobile_ratio_height,
                        tx = F.desktop_ratio,
                        tM = F.desktop_ratio_width,
                        tz = F.desktop_ratio_height,
                        tA = F.alt_text,
                        tT = (0, y.Kv)([{
                            id: td || ts || "",
                            widths: [200, 375, 420, 475, 600, 800, 1e3, 1200]
                        }, {
                            id: ts || td || "",
                            widths: [340, 480, 640, 950, 1024, 1280, 1366, 1440, 1920, 2200]
                        }]),
                        tH = (U || []).map(function(t) {
                            return (0, r._)((0, i._)({}, t), {
                                image: [500, 450, 400, 350, 260, 140].reduce(function(n, e) {
                                    return (0, r._)((0, i._)({}, n), (0, o._)({}, e, (0, y.pA)(t.image, [{
                                        preset: "3:4"
                                    }, {
                                        width: e,
                                        height: Math.ceil(1.34 * e)
                                    }])))
                                }, {})
                            })
                        }),
                        tO = [{
                            ratio: ty,
                            customWidth: tk,
                            customHeight: tC
                        }, {
                            ratio: tx,
                            customWidth: tM,
                            customHeight: tz
                        }].map(function(t) {
                            var n = t.ratio,
                                e = t.customWidth,
                                o = t.customHeight;
                            if (n) {
                                if ("Custom" === n && "number" == typeof e && "number" == typeof o) return e / o;
                                if ("100% Viewport Height" === n) return "viewport-height";
                                var i = (0, l._)(n.split(":").map(Number), 2);
                                return i[0] / i[1]
                            }
                        });
                    return (0, c.Y)(p.A, (0, i._)({
                        ref: X,
                        css: [R, tu],
                        hotspots: [$.map(z(t_, tb, tg)), G.map(z(t_, tb, tg))],
                        hoverable: !!tp,
                        paddingBottom: tf ? void 0 : 0,
                        callToActionColor: x[tc.colour],
                        callToActionText: tc.copy,
                        callToActionHoverText: tc.copy_on_hover,
                        verticalAlignment: C[tc.vertical_alignment],
                        horizontalAlignment: k[tc.horizontal_alignment],
                        mediaHorizontalAlignment: q,
                        mediaVerticalAlignment: Z,
                        colour: M[tv],
                        sticky: tc.sticky,
                        shadowColour: x[tc.drop_shadow_colour] || x[t_],
                        shadowOpacity: tc.drop_shadow_opacity || tb,
                        shadowRadius: tc.drop_shadow_blur || tg,
                        image: tT,
                        imageAltText: tA,
                        overlayColor: tn,
                        overlayOpacity: tm,
                        products: tH,
                        carouselTitle: tw,
                        ratio: tO,
                        lazy: !(null == B ? void 0 : B.isFirstMediaComponentOnPage)
                    }, I))
                }
        },
        82433: (t, n, e) => {
            e.d(n, {
                Q: () => h
            });
            var o = e(41374),
                i = e(71893),
                r = e(87218),
                a = e(94335),
                l = e(32964),
                u = e.n(l),
                c = e(75942),
                d = e(41432);

            function s() {
                return (s = (0, o._)(function(t) {
                    var n, e, o, i;
                    return (0, r.YH)(this, function(r) {
                        return n = t.ids, e = t.countryCode, o = t.language, i = u()().publicRuntimeConfig.X360_PRODUCTS_API, [2, a.A.get("".concat(i, "?").concat(n.map(function(t) {
                            return "id[]=".concat(t)
                        }).join("&")), {
                            params: {
                                country: e,
                                language: o
                            }
                        }).then(function(t) {
                            return t.data
                        }).catch(function() {
                            return []
                        })]
                    })
                })).apply(this, arguments)
            }

            function h(t, n) {
                var e = (0, d.F)(),
                    o = e.countryCode,
                    r = e.language,
                    a = null != t ? t : [];
                return (0, c.useQuery)(["products", a, o, r], function() {
                    return function(t) {
                        return s.apply(this, arguments)
                    }({
                        ids: a,
                        countryCode: o,
                        language: r
                    })
                }, (0, i._)({
                    enabled: !!a,
                    staleTime: 1 / 0
                }, n))
            }
        }
    }
]);