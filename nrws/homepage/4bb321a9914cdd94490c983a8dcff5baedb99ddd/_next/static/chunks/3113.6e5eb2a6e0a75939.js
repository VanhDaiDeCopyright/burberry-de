"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3113], {
        32618: (n, t, e) => {
            e.d(t, {
                sp: () => C,
                N_: () => h
            });
            var r = e(71893),
                i = e(55456),
                o = e(4418),
                u = e(84577),
                a = e(2445),
                l = e(96540),
                d = e(69815),
                c = e(17437),
                s = e(66797),
                f = e(14404),
                v = e(32738),
                p = e(91942);

            function m() {
                var n = (0, u._)(["\n    color: inherit;\n    text-decoration: none;\n    ", "\n\n    ", "\n  "]);
                return m = function() {
                    return n
                }, n
            }
            var g = (0, d.default)("a", {
                    target: "e1mf7p730"
                })(function(n) {
                    var t, e, r = n.theme,
                        i = n.variant,
                        o = n.cursorHasDefaultBehaviour;
                    return (0, c.css)(m(), "primary" === i ? null === (t = r.typography) || void 0 === t ? void 0 : t.titleXS : null === (e = r.typography) || void 0 === e ? void 0 : e.copyMSansSerif, !o && "\n    cursor: pointer;\n    ")
                }),
                h = function(n) {
                    var t = n.metadata,
                        e = n.onClick,
                        u = n.target,
                        d = n.variant,
                        c = void 0 === d ? "default" : d,
                        m = n.cursorHasDefaultBehaviour,
                        h = void 0 !== m && m,
                        _ = n.children,
                        y = (0, o._)(n, ["metadata", "onClick", "target", "variant", "cursorHasDefaultBehaviour", "children"]),
                        C = (0, s.u)(),
                        P = (0, f.s)(),
                        b = (0, v.P9)(),
                        w = "_blank" === u,
                        k = (0, l.useCallback)(function(n) {
                            if (b) {
                                var o;
                                P.click.generic((0, i._)((0, r._)({}, b), {
                                    interaction: null == t ? void 0 : null === (o = t.description) || void 0 === o ? void 0 : o.toLowerCase()
                                }))
                            } else if (t) {
                                if (Array.isArray(t)) {
                                    var u = (0, p.Q8)(t, null == C ? void 0 : C.media);
                                    P.navigation.generic(u)
                                } else P.navigation.generic(t)
                            }
                            null == e || e(n)
                        }, [P.click, P.navigation, t, e, null == C ? void 0 : C.media, b]);
                    return ["primary", "secondary"].includes(c) ? (0, a.Y)(g, (0, i._)((0, r._)({}, y), {
                        variant: c,
                        target: w ? "_blank" : void 0,
                        cursorHasDefaultBehaviour: h,
                        onClick: k,
                        children: _
                    })) : (0, a.Y)(g, (0, i._)((0, r._)({}, y), {
                        variant: "default",
                        target: w ? "_blank" : void 0,
                        cursorHasDefaultBehaviour: h,
                        onClick: k,
                        children: _
                    }))
                };

            function _() {
                var n = (0, u._)(["\n    ", ";\n\n    letter-spacing: 0;\n    color: inherit;\n    font-family: ", ";\n\n    text-decoration: ", ";\n    font-size: ", "rem;\n    line-height: 2.4rem;\n    font-weight: ", ";\n    display: inline-flex;\n    align-items: center;\n    white-space: nowrap;\n\n    ", " {\n      font-size: ", "rem;\n      line-height: 2.8rem;\n    }\n  "]);
                return _ = function() {
                    return n
                }, n
            }
            var y = (0, d.default)("a", {
                    target: "e1qesxyn0"
                })(function(n) {
                    var t, e, r, i, o, u, a, l, d = n.theme,
                        s = n.linkVariant;
                    return (0, c.css)(_(), null === (t = d.typography) || void 0 === t ? void 0 : t.lang, null === (r = d.font) || void 0 === r ? void 0 : null === (e = r.family) || void 0 === e ? void 0 : e.serif, "underline" === s ? "underline" : "none", "large" === s ? 1.6 : 1.4, "underline" === s ? null === (o = d.font) || void 0 === o ? void 0 : null === (i = o.weight) || void 0 === i ? void 0 : i.normal : null === (a = d.font) || void 0 === a ? void 0 : null === (u = a.weight) || void 0 === u ? void 0 : u.medium, null === (l = d.media) || void 0 === l ? void 0 : l.extraLarge, "large" === s ? 2 : 1.6)
                }),
                C = function(n) {
                    var t = n.metadata,
                        e = n.onClick,
                        u = n.target,
                        d = n.linkVariant,
                        c = n.children,
                        v = (0, o._)(n, ["metadata", "onClick", "target", "linkVariant", "children"]),
                        m = (0, s.u)(),
                        g = (0, f.s)(),
                        h = (0, l.useCallback)(function(n) {
                            if (t) {
                                if (Array.isArray(t)) {
                                    var r = (0, p.Q8)(t, null == m ? void 0 : m.media);
                                    g.navigation.generic(r)
                                } else g.navigation.generic(t)
                            }
                            null == e || e(n)
                        }, [g.navigation, t, e, null == m ? void 0 : m.media]);
                    return (0, a.Y)(y, (0, i._)((0, r._)({}, v), {
                        linkVariant: d,
                        target: "_blank" === u ? "_blank" : void 0,
                        onClick: h,
                        children: c
                    }))
                }
        },
        66938: (n, t, e) => {
            e.r(t), e.d(t, {
                ProductCarouselMainAdapter: () => O
            });
            var r = e(71893),
                i = e(55456),
                o = e(4418),
                u = e(2445),
                a = e(86715),
                l = e(64468),
                d = e(75584),
                c = (0, e(69815).default)("section", {
                    target: "ey3x1zr0"
                })("width:100%;margin-bottom:2.8rem;padding-bottom:calc(100.26% + 2.8rem);", function(n) {
                    var t;
                    return null === (t = n.theme.media) || void 0 === t ? void 0 : t.medium
                }, "{padding-bottom:calc(46.19% + 2.8rem);}", function(n) {
                    var t;
                    return null === (t = n.theme.media) || void 0 === t ? void 0 : t.large
                }, "{margin-bottom:4rem;padding-bottom:calc(41.84% + 4rem);}", function(n) {
                    var t;
                    return null === (t = n.theme.media) || void 0 === t ? void 0 : t.extraLarge
                }, "{margin-bottom:6rem;padding-bottom:calc(40.43% + 6rem);}"),
                s = e(31572),
                f = e(93038),
                v = e(68101),
                p = e(66797),
                m = e(96540),
                g = e(1760),
                h = e(82433),
                _ = e(14404),
                y = {
                    useProductCarousel: function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3,
                            t = (0, _.s)().impression,
                            e = (0, m.useMemo)(function() {
                                var t, e, r = setTimeout(function() {
                                        return e()
                                    }, n),
                                    i = new Promise(function(n) {
                                        t = function(t) {
                                            clearTimeout(r), n(t)
                                        }, e = function() {
                                            clearTimeout(r), n(null)
                                        }
                                    });
                                return {
                                    trigger: t,
                                    cancel: e,
                                    promise: i
                                }
                            }, [n]),
                            r = e.trigger,
                            i = e.cancel,
                            o = e.promise;
                        return (0, m.useEffect)(function() {
                            t.productCarousel(o)
                        }, [t, o]), [r, i]
                    }
                },
                C = e(82204),
                P = function(n) {
                    var t = n.data,
                        e = n.metadata,
                        a = n.forwardedRef,
                        l = n.onProductClick,
                        d = (0, o._)(n, ["data", "metadata", "forwardedRef", "onProductClick"]),
                        _ = (0, f._)(y.useProductCarousel(), 2),
                        P = _[0],
                        b = _[1],
                        w = (0, p.u)(),
                        k = (0, g.dJ)({
                            fullbleed: !0
                        }),
                        A = (0, m.useMemo)(function() {
                            return (null == t ? void 0 : t.products.reduce(function(n, t) {
                                var e = t.product;
                                return Array.isArray(e) && e[0] && e[0].title ? (0, v._)(n).concat([e[0].title]) : n
                            }, [])) || []
                        }, [null == t ? void 0 : t.products]),
                        M = (0, h.Q)(A, {
                            enabled: A.length > 1
                        }),
                        I = M.data,
                        Y = void 0 === I ? [] : I,
                        D = M.status,
                        R = A.map(function(n) {
                            var t, e = Y.find(function(t) {
                                return t.id === n
                            });
                            return e ? {
                                id: e.id,
                                name: e.name,
                                label: e.label,
                                color: null,
                                price: null === (t = e.price) || void 0 === t ? void 0 : t.current.value
                            } : null
                        });
                    (0, m.useEffect)(function() {
                        "success" === D && P({
                            name: (null == t ? void 0 : t.display_title) || null,
                            productsDisplayed: R.length,
                            productsId: R.map(function(n) {
                                return (null == n ? void 0 : n.id) || null
                            }),
                            productsName: R.map(function(n) {
                                return (null == n ? void 0 : n.name) || null
                            }),
                            productsPrice: R.map(function(n) {
                                return (null == n ? void 0 : n.price) || null
                            }),
                            productsColor: R.map(function() {
                                return null
                            }),
                            productsLabel: R.map(function(n) {
                                return (null == n ? void 0 : n.label) || null
                            })
                        }), "error" === D && b()
                    }, [D]);
                    var T = t.display_title,
                        N = t.show_product_details,
                        x = (0, m.useMemo)(function() {
                            return (0, C.i)({
                                theme: w,
                                products: Y,
                                showProductDetails: N,
                                lazy: !(null == e ? void 0 : e.isFirstMediaComponentOnPage),
                                onProductClick: l
                            })
                        }, [w, Y, N, e, l]);
                    return "loading" === D ? (0, u.Y)(c, {
                        id: d.id,
                        ref: a
                    }) : (0, u.Y)(s.q, (0, i._)((0, r._)({
                        ref: a,
                        css: k,
                        title: T
                    }, d), {
                        children: x
                    }))
                },
                b = e(41374),
                w = e(87218),
                k = e(94335),
                A = e(243),
                M = e(75942),
                I = e(32964),
                Y = e.n(I),
                D = e(96643),
                R = e(41432);

            function T() {
                return (T = (0, b._)(function(n) {
                    var t, e, r, i;
                    return (0, w.YH)(this, function(o) {
                        return t = n.countryCode, e = n.targetCode, r = n.preferredGender, i = Y()().publicRuntimeConfig.X360_NEW_IN_PRODUCTS_API, [2, k.A.get(i, {
                            params: {
                                country: t,
                                target_code: e,
                                preferred_gender: r
                            }
                        }).then(function(n) {
                            return n.data
                        }).catch(function() {
                            return []
                        })]
                    })
                })).apply(this, arguments)
            }
            var N = function(n) {
                    var t, e, a, l, d, v, h = n.data,
                        _ = n.metadata,
                        P = n.forwardedRef,
                        b = n.onProductClick,
                        w = (0, o._)(n, ["data", "metadata", "forwardedRef", "onProductClick"]),
                        k = (0, p.u)(),
                        I = (0, g.dJ)({
                            fullbleed: !0
                        }),
                        Y = h.display_title,
                        N = h.show_product_details,
                        x = h.api_configuration.new_in,
                        E = (0, f._)(y.useProductCarousel(), 2),
                        z = E[0],
                        F = E[1],
                        H = (t = x.gender, e = (0, R.F)().countryCode, l = (a = (0, A.parseBurberryId)(D.W.get("burberryId"))).uuid, v = ((d = a.customerId) !== A.EMPTY_COOKIE_PART ? d : l) || "", (0, M.useQuery)(["new-in-products", e, t, v], function() {
                            return function(n) {
                                return T.apply(this, arguments)
                            }({
                                targetCode: v,
                                countryCode: e,
                                preferredGender: t
                            })
                        }, (0, r._)({
                            staleTime: 1 / 0
                        }, void 0))),
                        O = H.data,
                        S = void 0 === O ? [] : O,
                        L = H.status;
                    (0, m.useEffect)(function() {
                        "success" === L && z({
                            name: Y || null,
                            productsDisplayed: S.length,
                            productsId: S.map(function(n) {
                                return n.id || null
                            }),
                            productsName: S.map(function(n) {
                                return n.name || null
                            }),
                            productsColor: S.map(function() {
                                return null
                            }),
                            productsLabel: S.map(function(n) {
                                return n.label || null
                            }),
                            productsPrice: S.map(function(n) {
                                var t;
                                return (null == n ? void 0 : null === (t = n.price) || void 0 === t ? void 0 : t.current.value) || null
                            })
                        }), "error" === L && F()
                    }, [L]);
                    var Q = (0, m.useMemo)(function() {
                        return (0, C.i)({
                            theme: k,
                            products: S,
                            showProductDetails: N,
                            lazy: !(null == _ ? void 0 : _.isFirstMediaComponentOnPage),
                            onProductClick: b
                        })
                    }, [k, S, N, _, b]);
                    return "loading" === L ? (0, u.Y)(c, {
                        id: w.id,
                        ref: P
                    }) : (0, u.Y)(s.q, (0, i._)((0, r._)({
                        ref: P,
                        css: I,
                        title: Y
                    }, w), {
                        children: Q
                    }))
                },
                x = e(46006);

            function E() {
                return (E = (0, b._)(function(n) {
                    var t, e, r, i;
                    return (0, w.YH)(this, function(o) {
                        return t = n.countryCode, e = n.category, r = n.limit, i = Y()().publicRuntimeConfig.X360_GIFTING_API, [2, k.A.get(i, {
                            params: {
                                country: t,
                                category: e,
                                limit: r
                            }
                        }).then(function(n) {
                            return n.data
                        }).catch(function() {
                            return []
                        })]
                    })
                })).apply(this, arguments)
            }
            var z = function(n) {
                var t, e, a, l = n.data,
                    d = n.metadata,
                    v = n.forwardedRef,
                    h = (0, o._)(n, ["data", "metadata", "forwardedRef"]),
                    _ = (0, f._)(y.useProductCarousel(), 2),
                    P = _[0],
                    b = _[1],
                    w = (0, p.u)(),
                    k = (0, g.dJ)({
                        fullbleed: !0
                    }),
                    A = (e = (0, R.F)().countryCode, a = (0, x.LM)(), (0, M.useQuery)(["gifting-products", e, ""], function() {
                        return function(n) {
                            return E.apply(this, arguments)
                        }({
                            countryCode: e,
                            category: a,
                            limit: t
                        })
                    }, (0, r._)({
                        staleTime: 1 / 0
                    }, void 0))),
                    I = A.data,
                    Y = void 0 === I ? [] : I,
                    D = A.status,
                    T = Y.map(function(n) {
                        var t;
                        return {
                            id: n.id,
                            name: n.name,
                            label: n.label,
                            color: null,
                            price: null === (t = n.price) || void 0 === t ? void 0 : t.current.value
                        }
                    });
                (0, m.useEffect)(function() {
                    "success" === D && P({
                        name: (null == l ? void 0 : l.display_title) || null,
                        productsDisplayed: T.length,
                        productsId: T.map(function(n) {
                            return (null == n ? void 0 : n.id) || null
                        }),
                        productsName: T.map(function(n) {
                            return (null == n ? void 0 : n.name) || null
                        }),
                        productsPrice: T.map(function(n) {
                            return (null == n ? void 0 : n.price) || null
                        }),
                        productsColor: T.map(function() {
                            return null
                        }),
                        productsLabel: T.map(function(n) {
                            return (null == n ? void 0 : n.label) || null
                        })
                    }), "error" === D && b()
                }, [D]);
                var N = l.display_title,
                    z = l.show_product_details,
                    F = (0, m.useMemo)(function() {
                        return (0, C.i)({
                            theme: w,
                            products: Y,
                            showProductDetails: z,
                            lazy: !(null == d ? void 0 : d.isFirstMediaComponentOnPage)
                        })
                    }, [w, Y, z, d]);
                return "loading" === D ? (0, u.Y)(c, {
                    id: h.id,
                    ref: v
                }) : (0, u.Y)(s.q, (0, i._)((0, r._)({
                    ref: v,
                    css: k,
                    title: N
                }, h), {
                    children: F
                }))
            };

            function F() {
                return (F = (0, b._)(function(n) {
                    var t, e, r, i;
                    return (0, w.YH)(this, function(o) {
                        return t = n.countryCode, e = n.limit, r = n.category, i = Y()().publicRuntimeConfig.X360_TRENDING_PRODUCTS_API, [2, k.A.get(i, {
                            params: {
                                category: r,
                                country: t,
                                limit: e
                            }
                        }).then(function(n) {
                            return n.data
                        }).catch(function() {
                            return []
                        })]
                    })
                })).apply(this, arguments)
            }
            var H = function(n) {
                    var t, e, a, l = n.data,
                        d = n.metadata,
                        v = n.forwardedRef,
                        h = n.onProductClick,
                        _ = (0, o._)(n, ["data", "metadata", "forwardedRef", "onProductClick"]),
                        P = (0, p.u)(),
                        b = (0, g.dJ)({
                            fullbleed: !0
                        }),
                        w = l.display_title,
                        k = l.show_product_details,
                        A = l.trending_api_limit,
                        I = l.trending_api_categories,
                        Y = (0, f._)(y.useProductCarousel(), 2),
                        D = Y[0],
                        T = Y[1],
                        N = (t = Math.max(8, Math.min(25, void 0 === A ? 10 : A)).toString(), e = void 0 === I ? "" : I, a = (0, R.F)().countryCode, (0, M.useQuery)(["trending-products", a, t, e], function() {
                            return function(n) {
                                return F.apply(this, arguments)
                            }({
                                limit: t,
                                category: e,
                                countryCode: a
                            })
                        }, (0, r._)({
                            staleTime: 1 / 0
                        }, void 0))),
                        x = N.data,
                        E = void 0 === x ? [] : x,
                        z = N.status;
                    (0, m.useEffect)(function() {
                        "success" === z && E.length >= 8 && D({
                            name: w || null,
                            productsDisplayed: E.length,
                            productsId: E.map(function(n) {
                                return n.id || null
                            }),
                            productsName: E.map(function(n) {
                                return n.name || null
                            }),
                            productsColor: E.map(function() {
                                return null
                            }),
                            productsLabel: E.map(function(n) {
                                return n.label || null
                            }),
                            productsPrice: E.map(function(n) {
                                var t;
                                return (null == n ? void 0 : null === (t = n.price) || void 0 === t ? void 0 : t.current.value) || null
                            })
                        }), "error" === z && T()
                    }, [z]);
                    var H = (0, m.useMemo)(function() {
                        return E.length >= 8 ? (0, C.i)({
                            theme: P,
                            products: E,
                            showProductDetails: k,
                            lazy: !(null == d ? void 0 : d.isFirstMediaComponentOnPage),
                            onProductClick: h
                        }) : []
                    }, [P, E, k, d, h]);
                    return "loading" === z ? (0, u.Y)(c, {
                        id: _.id,
                        ref: v
                    }) : E.length < 8 ? (0, u.Y)(u.FK, {}) : (0, u.Y)(s.q, (0, i._)((0, r._)({
                        ref: v,
                        css: b,
                        title: w
                    }, _), {
                        children: H
                    }))
                },
                O = function(n) {
                    var t, e, c = (0, a.useRouter)().asPath,
                        f = (0, l.useOptimizely)().experimentByKey,
                        v = (0, d.A)().trackEvent;
                    (null === (t = f["ab_".concat(c.slice(1, -1), "_testing")]) || void 0 === t ? void 0 : t.enabled) && (e = function() {
                        return v("product_carousel_click")
                    });
                    var p = n.data,
                        m = (n.forwardedRef, (0, o._)(n, ["data", "forwardedRef"]));
                    if (!p) return (0, u.Y)(s.q, (0, r._)({}, m));
                    switch (null == p ? void 0 : p.products_information_source) {
                        case "Gifting API":
                            return (0, u.Y)(z, (0, i._)((0, r._)({}, n), {
                                eventContext: "Gifting"
                            }));
                        case "New In API":
                            return (0, u.Y)(N, (0, i._)((0, r._)({}, n), {
                                eventContext: "New in",
                                onProductClick: e
                            }));
                        case "Trending API":
                            return (0, u.Y)(H, (0, i._)((0, r._)({}, n), {
                                eventContext: "Trending",
                                onProductClick: e
                            }));
                        default:
                            return (0, u.Y)(P, (0, i._)((0, r._)({}, n), {
                                eventContext: "Default products",
                                onProductClick: e
                            }))
                    }
                }
        },
        82204: (n, t, e) => {
            e.d(t, {
                b: () => a,
                i: () => l
            });
            var r = e(68101),
                i = e(2445),
                o = e(91804),
                u = e(34448),
                a = function(n) {
                    return [{
                        383: (0, o.pA)(n, [{
                            preset: "7:5"
                        }, {
                            width: 383,
                            height: Math.floor(383 * 1.4)
                        }]),
                        766: (0, o.pA)(n, [{
                            preset: "7:5"
                        }, {
                            width: 766,
                            height: Math.floor(766 * 1.4)
                        }])
                    }, {
                        370: (0, o.pA)(n, [{
                            preset: "7:5"
                        }, {
                            width: 370,
                            height: Math.floor(518)
                        }]),
                        740: (0, o.pA)(n, [{
                            preset: "7:5"
                        }, {
                            width: 740,
                            height: Math.floor(1036)
                        }])
                    }, {
                        479: (0, o.pA)(n, [{
                            preset: "51:40"
                        }, {
                            width: 479,
                            height: Math.floor(479 * 1.275)
                        }]),
                        958: (0, o.pA)(n, [{
                            preset: "51:40"
                        }, {
                            width: 958,
                            height: Math.floor(958 * 1.275)
                        }])
                    }, {
                        580: (0, o.pA)(n, [{
                            preset: "51:40"
                        }, {
                            width: 580,
                            height: Math.floor(739.5)
                        }]),
                        1160: (0, o.pA)(n, [{
                            preset: "51:40"
                        }, {
                            width: 1160,
                            height: Math.floor(1479)
                        }])
                    }]
                },
                l = function(n) {
                    var t = n.theme,
                        e = n.products,
                        o = n.showProductDetails,
                        l = n.lazy,
                        d = n.onProductClick;
                    return (void 0 === e ? [] : e).reduce(function(n, e, c) {
                        if (!e) return n;
                        var s, f, v, p, m, g, h = e.id,
                            _ = e.url,
                            y = e.price,
                            C = e.image,
                            P = e.modelImage,
                            b = e.name;
                        return (0, r._)(n).concat([(0, i.Y)(u.A, {
                            id: h,
                            url: _,
                            title: b,
                            onProductClick: d,
                            autoHideDetails: !o,
                            price: null !== (m = null == y ? void 0 : null === (s = y.old) || void 0 === s ? void 0 : s.value) && void 0 !== m ? m : null == y ? void 0 : y.current.value,
                            salePrice: (null == y ? void 0 : y.old) ? y.current.value : void 0,
                            formattedPrice: null !== (g = null == y ? void 0 : null === (f = y.old) || void 0 === f ? void 0 : f.formattedValue) && void 0 !== g ? g : null == y ? void 0 : null === (v = y.current) || void 0 === v ? void 0 : v.formattedValue,
                            formattedSalePrice: (null == y ? void 0 : y.old) ? null == y ? void 0 : null === (p = y.current) || void 0 === p ? void 0 : p.formattedValue : void 0,
                            imageSizes: "".concat(t.media.query.small, " 50vw, 30vw"),
                            lazy: l,
                            primaryImage: a(C),
                            secondaryImage: P ? a(P) : void 0
                        }, c)])
                    }, [])
                }
        },
        82433: (n, t, e) => {
            e.d(t, {
                Q: () => f
            });
            var r = e(41374),
                i = e(71893),
                o = e(87218),
                u = e(94335),
                a = e(32964),
                l = e.n(a),
                d = e(75942),
                c = e(41432);

            function s() {
                return (s = (0, r._)(function(n) {
                    var t, e, r, i;
                    return (0, o.YH)(this, function(o) {
                        return t = n.ids, e = n.countryCode, r = n.language, i = l()().publicRuntimeConfig.X360_PRODUCTS_API, [2, u.A.get("".concat(i, "?").concat(t.map(function(n) {
                            return "id[]=".concat(n)
                        }).join("&")), {
                            params: {
                                country: e,
                                language: r
                            }
                        }).then(function(n) {
                            return n.data
                        }).catch(function() {
                            return []
                        })]
                    })
                })).apply(this, arguments)
            }

            function f(n, t) {
                var e = (0, c.F)(),
                    r = e.countryCode,
                    o = e.language,
                    u = null != n ? n : [];
                return (0, d.useQuery)(["products", u, r, o], function() {
                    return function(n) {
                        return s.apply(this, arguments)
                    }({
                        ids: u,
                        countryCode: r,
                        language: o
                    })
                }, (0, i._)({
                    enabled: !!u,
                    staleTime: 1 / 0
                }, t))
            }
        }
    }
]);