"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8993], {
        26714: (e, t, r) => {
            r.d(t, {
                _: () => h
            });
            var n = r(71893),
                i = r(4418),
                o = r(93038),
                a = r(2445),
                l = r(96540),
                c = r(13368),
                u = r.n(c),
                d = r(33201),
                s = r(66823),
                f = r(46827),
                v = r(28922),
                m = r(91942),
                p = function(e) {
                    var t = e.sources,
                        r = e.sizes,
                        n = (0, l.useMemo)(function() {
                            var e = (0, m.pD)(t);
                            return (0, m.tS)(e)
                        }, [t]);
                    return (0, a.Y)(u(), {
                        children: Object.entries(n).map(function(e, t) {
                            var n, i = (0, o._)(e, 2),
                                l = i[0],
                                c = i[1];
                            if (!c) return null;
                            var u = "string" == typeof c ? c : (0, v.F)(c),
                                d = (0, f.T)({
                                    sources: c,
                                    srcSet: u
                                });
                            return (0, a.Y)("link", {
                                rel: "preload",
                                as: "image",
                                href: d,
                                imageSrcSet: u,
                                imageSizes: r,
                                media: null === (n = s.w.media) || void 0 === n ? void 0 : n.query[l]
                            }, t)
                        })
                    })
                },
                h = (0, l.forwardRef)(function(e, t) {
                    var r = e.preload,
                        o = void 0 !== r && r,
                        l = (0, i._)(e, ["preload"]);
                    return (0, a.FD)(a.FK, {
                        children: [o ? (0, a.Y)(p, (0, n._)({}, l)) : null, (0, a.Y)(d._, (0, n._)({
                            ref: t,
                            fetchPriority: o ? "high" : "auto",
                            fade: !o
                        }, l))]
                    })
                });
            h.displayName = "Image"
        },
        34448: (e, t, r) => {
            r.d(t, {
                A: () => _
            });
            var n = r(71893),
                i = r(55456),
                o = r(4418),
                a = r(2445),
                l = r(96540),
                c = r(69815),
                u = r(38600),
                d = r(14404),
                s = r(26714),
                f = r(32618),
                v = (0, c.default)("p", {
                    target: "eaw6uaw0"
                })(function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.bodySmall
                }, "  display:flex;flex-wrap:wrap;justify-content:flex-start;", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.gteMedium
                }, "{", function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.bodyMedium
                }, "}"),
                m = (0, c.default)("span", {
                    target: "eaw6uaw1"
                })("color:", function(e) {
                    var t;
                    return null === (t = e.theme.colors) || void 0 === t ? void 0 : t.black
                }, ";"),
                p = (0, c.default)("span", {
                    target: "eaw6uaw2"
                })("margin:0 0 0 0.8rem;text-decoration:line-through;color:", function(e) {
                    var t;
                    return null === (t = e.theme.colors) || void 0 === t ? void 0 : t.grey04
                }, ";"),
                h = function(e) {
                    var t = e.regularPrice,
                        r = e.salePrice;
                    return (0, a.FD)(v, {
                        children: [(0, a.Y)(m, {
                            "data-ge-price": "",
                            children: null != r ? r : t
                        }), r && (0, a.Y)(p, {
                            "data-ge-price": "",
                            children: t
                        })]
                    })
                },
                g = r(66797),
                y = (0, c.default)(f.N_, {
                    target: "e74rha30"
                })("text-decoration:none;&:hover{text-decoration:none;}"),
                b = (0, c.default)("article", {
                    target: "e74rha31"
                })("overflow:hidden;transform:translate3d(0,0,0);", y, "{display:block;text-decoration:none;-webkit-tap-highlight-color:", function(e) {
                    var t;
                    return null === (t = e.theme.colors) || void 0 === t ? void 0 : t.transparent
                }, ";}"),
                w = (0, c.default)("div", {
                    target: "e74rha32"
                })("overflow:hidden;padding:1.2rem 1.2rem 4.8rem;display:flex;flex-direction:column;column-gap:0.8rem;", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.gteMedium
                }, "{flex-direction:", function(e) {
                    return e.stacked ? "column" : "row"
                }, ";padding:1.2rem 2rem 4.8rem;}", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.gteLarge
                }, "{padding:1.2rem 2rem 6.4rem;}", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.extraLarge
                }, "{padding:1.6rem 3.2rem 6.4rem;}"),
                k = (0, c.default)("h1", {
                    target: "e74rha33"
                })(function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.bodySmall
                }, "  flex-grow:1;margin:0;max-height:4rem;overflow:hidden;text-align:left;text-overflow:ellipsis;color:", function(e) {
                    var t;
                    return null === (t = e.theme.colors) || void 0 === t ? void 0 : t.black
                }, ";display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.gteMedium
                }, "{", function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.bodyMedium
                }, "}"),
                x = (0, c.default)(s._, {
                    target: "e74rha34"
                })("top:0;left:0;right:0;opacity:1;width:100%;position:absolute;display:table-cell;pointer-events:none;"),
                C = (0, c.default)("div", {
                    target: "e74rha35"
                })("position:relative;background-color:", function(e) {
                    var t;
                    return null === (t = e.theme.colors) || void 0 === t ? void 0 : t.grey01
                }, ";&::before{content:'';width:100%;display:block;padding-bottom:", 100 / (5 / 7), "%;", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.gteLarge
                }, "{padding-bottom:", 100 / (40 / 51), "%;}}&::after{content:'';position:absolute;top:0;width:100%;height:100%;display:block;background:linear-gradient(\n        270deg,transparent 36.98%,transparent 68.7%,rgba(0,0,0,0.02) 97.45%\n      ),linear-gradient(\n        179.26deg,transparent 19.37%,transparent 64.08%,rgba(0,0,0,0.02) 99.36%\n      ),0 0;}"),
                _ = (0, l.forwardRef)(function(e, t) {
                    var r, c, s = e.id,
                        f = e.url,
                        v = e.title,
                        m = e.imageAltText,
                        p = e.price,
                        _ = e.salePrice,
                        Y = e.formattedPrice,
                        z = e.formattedSalePrice,
                        P = e.primaryImage,
                        S = e.secondaryImage,
                        A = e.imageSizes,
                        R = void 0 === A ? "100vw" : A,
                        j = e.autoHideDetails,
                        D = e.lazy,
                        F = void 0 === D || D,
                        I = e.onProductClick,
                        M = e.omitDetails,
                        L = (0, o._)(e, ["id", "url", "title", "imageAltText", "price", "salePrice", "formattedPrice", "formattedSalePrice", "primaryImage", "secondaryImage", "imageSizes", "autoHideDetails", "lazy", "onProductClick", "omitDetails"]),
                        N = (0, l.useRef)(null),
                        O = (0, u.O)([t, N]),
                        E = (0, l.useRef)(),
                        T = (0, l.useRef)(!0),
                        H = (0, l.useRef)(null),
                        q = (0, l.useRef)(null),
                        $ = (0, g.u)(),
                        B = (0, d.s)(),
                        G = (0, l.useMemo)(function() {
                            var e, t, r = null === (t = $.media) || void 0 === t ? void 0 : null === (e = t.query) || void 0 === e ? void 0 : e.small;
                            if (void 0 !== r) {
                                var n = window.matchMedia(r);
                                return function() {
                                    return n.matches
                                }
                            }
                            return function() {
                                return !0
                            }
                        }, [null === (c = $.media) || void 0 === c ? void 0 : null === (r = c.query) || void 0 === r ? void 0 : r.small]),
                        J = !!G() || void 0 !== j && j,
                        K = (0, l.useCallback)(function() {
                            var e;
                            null === (e = q.current) || void 0 === e || e.setAttribute("style", "opacity: 1;")
                        }, []),
                        W = (0, l.useCallback)(function() {
                            var e;
                            null === (e = q.current) || void 0 === e || e.setAttribute("style", "opacity: 0;")
                        }, []),
                        Q = (0, l.useCallback)(function() {
                            var e;
                            null === (e = H.current) || void 0 === e || e.setAttribute("style", "opacity: 1;")
                        }, []),
                        U = (0, l.useCallback)(function() {
                            var e, t;
                            if (G()) {
                                T.current || null === (t = H.current) || void 0 === t || t.setAttribute("style", "opacity: 0;");
                                return
                            }
                            null === (e = H.current) || void 0 === e || e.setAttribute("style", "opacity: 0;")
                        }, [G]),
                        V = (0, l.useCallback)(function() {
                            E.current || (K(), Q())
                        }, [Q, K]),
                        X = (0, l.useCallback)(function() {
                            W(), J && U()
                        }, [J, U, W]),
                        Z = (0, l.useCallback)(function() {
                            E.current || (K(), Q())
                        }, [Q, K]),
                        ee = (0, l.useCallback)(function() {
                            W(), J && U()
                        }, [J, U, W]),
                        et = (0, l.useCallback)(function() {
                            I && I({
                                id: String(s),
                                title: v,
                                price: p,
                                markdown: void 0 !== _ || !!z
                            }), B.navigation.product({
                                id: "".concat(s),
                                colour: null,
                                name: v,
                                component: "ProductCard",
                                type: "image",
                                price: p || null,
                                isOnSale: void 0 !== _ || !!z
                            })
                        }, [z, p, _, v, s, B.navigation, I]);
                    return (0, l.useEffect)(function() {
                        if (J && !M) {
                            var e = new IntersectionObserver(function(e) {
                                e[e.length - 1].intersectionRatio >= .6 ? (T.current = !0, G() && Q()) : (T.current = !1, U())
                            }, {
                                threshold: .6
                            });
                            return e.observe(N.current),
                                function() {
                                    return e.disconnect()
                                }
                        }
                    }, [J, U, G, Q, M]), (0, a.Y)(b, (0, i._)((0, n._)({
                        ref: O,
                        onFocus: V,
                        onBlur: X,
                        onMouseEnter: Z,
                        onMouseLeave: ee
                    }, L), {
                        children: (0, a.FD)(y, {
                            href: f,
                            onClick: et,
                            metadata: {
                                component: "ProductCard",
                                description: v,
                                type: "image"
                            },
                            children: [(0, a.FD)(C, {
                                children: [(0, a.Y)(x, {
                                    alt: m || v,
                                    sizes: R,
                                    sources: P,
                                    lazy: F
                                }), S && (0, a.Y)(x, {
                                    ref: q,
                                    alt: m || v,
                                    sizes: R,
                                    sources: S,
                                    css: {
                                        transition: "opacity 360ms ease-out",
                                        backgroundColor: "transparent"
                                    },
                                    style: {
                                        opacity: 0
                                    },
                                    lazy: F
                                })]
                            }), !M && (0, a.FD)(w, {
                                "data-testid": "product-details",
                                ref: H,
                                css: J && {
                                    transition: "opacity 360ms ease-out"
                                },
                                style: J ? {
                                    opacity: 0
                                } : void 0,
                                stacked: !!z,
                                children: [(0, a.Y)(k, {
                                    children: v
                                }), (Y || z) && (0, a.Y)(h, {
                                    regularPrice: Y,
                                    salePrice: z
                                })]
                            })]
                        })
                    }))
                });
            _.displayName = "ProductCard"
        },
        31572: (e, t, r) => {
            r.d(t, {
                q: () => Y
            });
            var n = r(71893),
                i = r(55456),
                o = r(4418),
                a = r(93038),
                l = r(2445),
                c = r(96540),
                u = r(17437),
                d = r(69815),
                s = r(73700),
                f = r(74423),
                v = r(50610),
                m = r(3109),
                p = r(14404),
                h = r(28291),
                g = r(91942),
                y = r(80049),
                b = r(32738),
                w = r(38600),
                k = (0, d.default)("section", {
                    target: "e1dz0drj0"
                })(),
                x = (0, d.default)("h1", {
                    target: "e1dz0drj1"
                })(function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.titleMedium
                }, "  text-align:left;margin:0;padding:2.4rem 1.2rem 2.4rem;color:", function(e) {
                    var t;
                    return null === (t = e.theme.colors) || void 0 === t ? void 0 : t.black
                }, ";", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.gteMedium
                }, "{padding:2.4rem 2rem 2.4rem;}", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.gteLarge
                }, "{padding:3.2rem 2rem 3.2rem;}", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.extraLarge
                }, "{padding:3.2rem;}"),
                C = (0, d.default)("div", {
                    target: "e1dz0drj2"
                })("position:absolute;right:2.46rem;bottom:calc(100% + 2.6rem);display:flex;font-size:1.2rem;opacity:0;transition:opacity 360ms ease-in-out;", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.small
                }, "{display:none;}", k, ":hover &{opacity:1;}"),
                _ = (0, d.default)("div", {
                    target: "e1dz0drj3"
                })("position:absolute;top:0;left:0;width:100%;z-index:", function(e) {
                    var t;
                    return null === (t = e.theme.layers) || void 0 === t ? void 0 : t.foreground
                }, ";opacity:0;transition:opacity 360ms ease-in-out;font-size:1.6rem;pointer-events:none;", k, ":hover &{opacity:1;}", function(e) {
                    var t;
                    return null === (t = e.theme.media) || void 0 === t ? void 0 : t.small
                }, "{display:none;}"),
                Y = (0, c.forwardRef)(function(e, t) {
                    var r = e.title,
                        d = e.showTitle,
                        Y = e.visibleItems,
                        z = void 0 === Y ? [2.21893, 4] : Y,
                        P = e.controlsPosition,
                        S = void 0 === P ? "above" : P,
                        A = e.alignment,
                        R = e.autoscroll,
                        j = void 0 !== R && R,
                        D = e.animateAppearance,
                        F = void 0 !== D && D,
                        I = e.children,
                        M = e.onArrowClick,
                        L = e.initialIndex,
                        N = e.eventContext,
                        O = (0, o._)(e, ["title", "showTitle", "visibleItems", "controlsPosition", "alignment", "autoscroll", "animateAppearance", "children", "onArrowClick", "initialIndex", "eventContext"]),
                        E = (0, c.useRef)(null),
                        T = (0, c.useRef)(),
                        H = (0, c.useRef)(null),
                        q = (0, c.useRef)(null),
                        $ = (0, w.O)([E, t]),
                        B = (0, c.useRef)({
                            eventDispatchers: [],
                            timeoutHandle: null
                        }),
                        G = (0, p.s)(),
                        J = (0, y.b)(1e3),
                        K = (0, a._)((0, c.useState)(!1), 2),
                        W = K[0],
                        Q = K[1],
                        U = Array.isArray(I) && I.length > 4;
                    (0, c.useEffect)(function() {
                        clearTimeout(B.current.timeoutHandle)
                    }, []), (0, c.useEffect)(function() {
                        if (!W || j) {
                            var e = new IntersectionObserver(function(e) {
                                var t, r;
                                e[e.length - 1].intersectionRatio >= .2 ? (W || Q(!0), j && (null === (t = T.current) || void 0 === t || t.resumeAutoscroll())) : null === (r = T.current) || void 0 === r || r.stopAutoscroll()
                            }, {
                                threshold: .2
                            });
                            return E.current && e.observe(E.current),
                                function() {
                                    return e.disconnect()
                                }
                        }
                    }, [F, j, W]);
                    var V = (0, c.useCallback)(function() {
                            var e;
                            M && M("left"), J(function() {
                                G.click.generic({
                                    component: "Product Carousel",
                                    context: r,
                                    description: "left"
                                })
                            }), null === (e = T.current) || void 0 === e || e.scrollToPrevious()
                        }, [G.click, J, r, M]),
                        X = (0, c.useCallback)(function() {
                            var e;
                            M && M("right"), J(function() {
                                G.click.generic({
                                    component: "Product Carousel",
                                    context: r,
                                    description: "right"
                                })
                            }), null === (e = T.current) || void 0 === e || e.scrollToNext()
                        }, [G.click, J, r, M]);
                    (0, c.useEffect)(function() {
                        H.current && (H.current.style.display = "none")
                    }, []);
                    var Z = (0, c.useMemo)(function() {
                            var e = (0, s.n)(100, function(e) {
                                var t = e.scrollLeft <= 0,
                                    r = e.scrollLeft >= e.scrollWidth - e.offsetWidth;
                                H.current && (t ? H.current.style.display = "none" : H.current.style.display = "initial"), q.current && (r ? q.current.style.display = "none" : q.current.style.display = "initial")
                            });
                            return function(t) {
                                return e(t.target)
                            }
                        }, []),
                        ee = (0, c.useCallback)(function() {
                            if (j && T.current && E.current) {
                                var e = window.innerHeight,
                                    t = E.current.getBoundingClientRect(),
                                    r = t.y,
                                    n = r + t.height;
                                (r > 0 && r < e || n > 0 && n < e || r < 0 && n > e) && T.current.resumeAutoscroll()
                            }
                        }, [j]);
                    (0, h.j)(E, ee);
                    var et = (0, c.useMemo)(function() {
                            return F ? (0, u.css)("opacity:", W ? 1 : 0, ";transition:opacity 360ms ease-in-out;") : null
                        }, [F, W]),
                        er = (0, c.useMemo)(function() {
                            return U ? "top-right" === S ? (0, l.FD)(C, {
                                children: [(0, l.Y)(f.$, {
                                    css: (0, u.css)("display:flex;justify-content:center;align-items:center;width:3.2rem;height:3.2rem;"),
                                    ref: H,
                                    onClick: V,
                                    "aria-label": "previous product",
                                    children: (0, l.Y)(v.JG, {})
                                }), (0, l.Y)(f.$, {
                                    css: (0, u.css)("display:flex;justify-content:center;align-items:center;width:3.2rem;height:3.2rem;"),
                                    ref: q,
                                    onClick: X,
                                    "aria-label": "next product",
                                    children: (0, l.Y)(v.c_, {})
                                })]
                            }) : (0, l.FD)(_, {
                                children: [(0, l.Y)("div", {
                                    css: function(e) {
                                        return (0, u.css)("width:100%;", (0, g.IR)(z, function(e) {
                                            return "padding-bottom: ".concat(133.33 / e, "%;")
                                        }, e.media))
                                    }
                                }), (0, l.Y)(f.$, {
                                    css: function(e) {
                                        var t;
                                        return (0, u.css)("display:flex;justify-content:center;align-items:center;position:absolute;padding:0 2rem;top:50%;left:0;transform:translateY(-50%);pointer-events:all;", null === (t = e.media) || void 0 === t ? void 0 : t.extraLarge, "{padding:0 3.2rem;}")
                                    },
                                    ref: H,
                                    onClick: V,
                                    "aria-label": "previous product",
                                    children: (0, l.Y)(v.JG, {})
                                }), (0, l.Y)(f.$, {
                                    css: function(e) {
                                        var t;
                                        return (0, u.css)("display:flex;justify-content:center;align-items:center;width:5rem;height:5.6rem;position:absolute;top:50%;right:0;transform:translateY(-50%);pointer-events:all;", null === (t = e.media) || void 0 === t ? void 0 : t.extraLarge, "{margin-right:1.2rem;}")
                                    },
                                    ref: q,
                                    onClick: X,
                                    "aria-label": "next product",
                                    children: (0, l.Y)(v.c_, {})
                                })]
                            }) : null
                        }, [S, X, V, U, z]),
                        en = (void 0 === d || d) && r;
                    return (0, l.Y)(b.ec.Provider, {
                        value: r || N || "",
                        children: (0, l.FD)(k, (0, i._)((0, n._)({
                            "data-testid": "product-carousel",
                            ref: $,
                            css: et,
                            "aria-label": en ? void 0 : r
                        }, O), {
                            children: [en && (0, l.Y)(x, {
                                children: r
                            }), (0, l.FD)("div", {
                                css: {
                                    position: "relative"
                                },
                                children: [er, (0, l.Y)(m.A, {
                                    autoscroll: W && j,
                                    itemsPerPage: z,
                                    showControls: !1,
                                    controllerRef: T,
                                    onScroll: Z,
                                    alignment: void 0 === A ? "left" : A,
                                    initialIndex: L,
                                    label: "product",
                                    children: I
                                })]
                            })]
                        }))
                    })
                });
            Y.displayName = "ProductCarousel"
        },
        38600: (e, t, r) => {
            r.d(t, {
                O: () => i
            });
            var n = r(96540);

            function i(e) {
                return (0, n.useCallback)(function(t) {
                    var r = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var o, a = e.filter(Boolean)[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
                            var l = o.value;
                            "function" == typeof l ? l(t) : l.current = t
                        }
                    } catch (e) {
                        n = !0, i = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (n) throw i
                        }
                    }
                }, e)
            }
        },
        46827: (e, t, r) => {
            r.d(t, {
                T: () => o
            });
            var n = r(93038),
                i = r(61642);

            function o(e) {
                var t = e.sources,
                    r = e.srcSet;
                if (!r && !t) return "";
                if ("string" == typeof t) return t;
                if (Array.isArray(t)) {
                    var o = t[0];
                    return "string" == typeof o ? o : (void 0 === o ? "undefined" : (0, i._)(o)) === "object" ? Object.values(o)[0] : ""
                }
                var a = r.split(",")[0];
                return (0, n._)(a.trim().split(" "), 1)[0]
            }
        },
        28922: (e, t, r) => {
            r.d(t, {
                F: () => i
            });
            var n = r(93038);

            function i(e) {
                return Object.entries(e).reduce(function(e, t) {
                    var r = (0, n._)(t, 2),
                        i = r[0],
                        o = r[1];
                    return "".concat(e, ", ").concat(o, " ").concat(i, "w")
                }, "").substring(2)
            }
        },
        33201: (e, t, r) => {
            r.d(t, {
                _: () => C
            });
            var n, i = r(71893),
                o = r(4418),
                a = r(93038),
                l = r(84577),
                c = r(61642),
                u = r(2445),
                d = r(96540),
                s = r(69815),
                f = r(17437),
                v = r(54417),
                m = r(66797),
                p = r(28922),
                h = r(91942),
                g = function(e) {
                    var t = e.sources,
                        r = e.sizes,
                        n = (0, m.u)(),
                        i = (0, d.useMemo)(function() {
                            var e = (0, h.pD)(t);
                            return (0, h.tS)(e)
                        }, [t]);
                    return (0, u.Y)(u.FK, {
                        children: Object.entries(i).map(function(e) {
                            var t, i = (0, a._)(e, 2),
                                o = i[0],
                                l = i[1];
                            if (!l) return null;
                            var c = "string" == typeof l ? l : (0, p.F)(l);
                            return (0, u.Y)("source", {
                                sizes: r,
                                srcSet: c,
                                media: null === (t = n.media) || void 0 === t ? void 0 : t.query[o]
                            }, "".concat(o, "-").concat(c))
                        })
                    })
                },
                y = r(91071),
                b = "undefined" != typeof document && void 0 !== (null === (n = document.createElement("img")) || void 0 === n ? void 0 : n.loading),
                w = r(46827);

            function k() {
                var e = (0, l._)(["\n      ::before {\n        content: '';\n        display: flex;\n        width: 100%;\n\n        ", ";\n      }\n    "]);
                return k = function() {
                    return e
                }, e
            }
            var x = (0, s.default)("div", {
                    target: "euj9whz0"
                })("position:relative;display:flex;background-color:", function(e) {
                    var t;
                    return null === (t = e.theme.colors) || void 0 === t ? void 0 : t.grey01
                }, ";", function(e) {
                    var t = e.ratio,
                        r = e.theme;
                    return t && (0, f.css)(k(), (0, h.IR)(t, function(e) {
                        return "number" == typeof e ? "padding-bottom: ".concat(100 / e, "%") : "viewport-height" === e ? "padding-bottom: 100vh" : ""
                    }, null == r ? void 0 : r.media))
                }, "  > picture,> noscript > picture{width:100%;> img{width:100%;height:100%;position:relative;display:flex;color:transparent;object-fit:", function(e) {
                    var t = e.containment;
                    return ({
                        crop: "cover",
                        "maintain-ratio": "contain",
                        stretch: "auto"
                    })[void 0 === t ? "crop" : t]
                }, ";font-family:'object-fit:cover;';", function(e) {
                    var t = e.ratio,
                        r = e.theme;
                    return t && (0, h.IR)(t, function(e) {
                        return void 0 !== e ? "position: absolute; top: 0; left: 0;" : ""
                    }, r.media)
                }, ";", function(e) {
                    var t = e.alignment,
                        r = e.theme;
                    return t && (0, h.IR)(t, function(e) {
                        return "object-position: ".concat(e, ";")
                    }, r.media)
                }, ";}}"),
                C = (0, d.forwardRef)(function(e, t) {
                    var r = e.sources,
                        n = e.ratio,
                        l = e.src,
                        s = e.srcSet,
                        f = e.alt,
                        m = e.sizes,
                        h = void 0 === m ? "100vw" : m,
                        k = e.fade,
                        C = e.lazy,
                        _ = void 0 === C || C,
                        Y = e.alignment,
                        z = e.containment,
                        P = e.fetchPriority,
                        S = e.className,
                        A = e.style,
                        R = e.onLoad,
                        j = (0, o._)(e, ["sources", "ratio", "src", "srcSet", "alt", "sizes", "fade", "lazy", "alignment", "containment", "fetchPriority", "className", "style", "onLoad"]),
                        D = (0, d.useRef)(null),
                        F = (0, y.s)(D, t),
                        I = (0, a._)((0, d.useState)(!1), 2),
                        M = I[0],
                        L = I[1],
                        N = (0, a._)((0, d.useState)(!_), 2),
                        O = N[0],
                        E = N[1],
                        T = (0, v.useHydrationRender)();
                    (0, d.useEffect)(function() {
                        if (_ && !b) {
                            var e = new IntersectionObserver(function(t) {
                                (0, a._)(t, 1)[0].isIntersecting && (E(!0), e.disconnect())
                            }, {
                                rootMargin: "250px 250px 250px 250px"
                            });
                            return D.current && e.observe(D.current),
                                function() {
                                    e.disconnect()
                                }
                        }
                    }, [_]), (0, d.useEffect)(function() {
                        D.current && D.current.currentSrc && D.current.complete && (null == R || R(), L(!0))
                    }, [R]);
                    var H = Array.isArray(r) && 1 === r.length ? r[0] : r,
                        q = (0, d.useMemo)(function() {
                            if ((void 0 === H ? "undefined" : (0, c._)(H)) === "object" && !Array.isArray(H)) return (0, p.F)(H)
                        }, [H]),
                        $ = s || q,
                        B = (0, d.useMemo)(function() {
                            return (0, w.T)({
                                sources: H,
                                srcSet: $ || ""
                            })
                        }, [H, $]),
                        G = _ && T || _ && !b && !O;
                    return (0, u.FD)(x, {
                        ratio: n,
                        alignment: Y,
                        containment: z,
                        className: S,
                        style: A,
                        children: [(0, u.FD)("picture", {
                            children: [!G && H ? (0, u.Y)(g, {
                                sources: H,
                                sizes: h
                            }) : null, (0, u.Y)("img", (0, i._)({
                                ref: F,
                                alt: f,
                                src: G ? void 0 : l || B,
                                srcSet: G ? void 0 : $,
                                sizes: h,
                                loading: _ ? "lazy" : "eager",
                                fetchPriority: P,
                                style: {
                                    transition: void 0 === k || k ? "opacity 200ms" : void 0,
                                    opacity: G || "high" !== P && !M ? 0 : 1
                                },
                                onLoad: function() {
                                    null == R || R(), L(!0)
                                }
                            }, j))]
                        }), (0, u.Y)("noscript", {
                            children: (0, u.FD)("picture", {
                                children: [H ? (0, u.Y)(g, {
                                    sources: H,
                                    sizes: h
                                }) : null, (0, u.Y)("img", {
                                    ref: F,
                                    src: l || B,
                                    srcSet: $,
                                    alt: f,
                                    sizes: h,
                                    fetchPriority: P
                                })]
                            })
                        })]
                    })
                });
            C.displayName = "Image"
        }
    }
]);