"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8012], {
        55317: (n, t, e) => {
            e.d(t, {
                k: () => _
            });
            var i, a = e(50467),
                r = e(93038),
                o = e(84577),
                l = e(2445),
                c = e(96540),
                u = e(69815),
                d = e(17437),
                s = e(72972),
                v = e(14404),
                f = e(9384),
                m = e(41432),
                g = e(28596);

            function p() {
                var n = (0, o._)(["\n            display: flex;\n            position: relative;\n            margin-left: -7px;\n            text-decoration: none;\n          "]);
                return p = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, o._)(["\n            position: absolute;\n            left: 0;\n            top: 50%;\n            transform: translateY(-50%);\n          "]);
                return h = function() {
                    return n
                }, n
            }
            var y = (i = {}, (0, a._)(i, s.yj.MODEL_VIEWER, "3D model viewer"), (0, a._)(i, s.yj.NATIVE_AR_EXPERIENCE, "ar experience"), (0, a._)(i, s.yj.QR_MODAL, "QR code modal"), (0, a._)(i, s.WS.CUSTOM_AR_EXPERIENCE, "ar experience"), i),
                b = (0, u.default)("span", {
                    target: "e1wdqo6z0"
                })(function(n) {
                    var t;
                    return null === (t = n.theme.typography) || void 0 === t ? void 0 : t.bodyLarge
                }, ";position:relative;margin-left:2.8rem;"),
                _ = function(n) {
                    var t = n.arConfig,
                        e = n.label,
                        i = n.textColor,
                        a = void 0 === i ? "dark" : i,
                        o = n.fallbackUrl,
                        u = n.clickInterceptor,
                        _ = n.dataTest,
                        k = (0, v.s)(),
                        C = (0, m.F)().countryCode,
                        x = (0, g.B)().t,
                        A = (0, f.gN)(),
                        w = (0, r._)((0, c.useState)(""), 2),
                        T = w[0],
                        E = w[1],
                        R = function(n, t) {
                            n && E(y[t.description])
                        };

                    function Y(n) {
                        var t = A.get().page.pageType;
                        k.click.generic({
                            component: "@boss/ar-button",
                            context: "HOME" === t ? "home" : "campaign",
                            interaction: n,
                            description: T,
                            type: "cta"
                        })
                    }

                    function I() {
                        Y("open")
                    }

                    function N() {
                        Y("close")
                    }
                    return (0, l.Y)(d.ClassNames, {
                        children: function(n) {
                            var i = n.css;
                            return (0, l.Y)(s.Ay, {
                                arConfig: t,
                                isEnabled: !0,
                                onClick: I,
                                onQRModalCloseCb: N,
                                onModelViewerCloseCb: N,
                                modalTitle: x("modal.ar.fallback.title"),
                                modalBody: x("modal.ar.fallback.body"),
                                qrUrl: o,
                                forceAndroid3D: "cn" === C,
                                getARButtonAvailability: R,
                                clickInterceptor: u,
                                className: i(p()),
                                arIconClassName: i(h()),
                                arIconTheme: a,
                                dataTest: _,
                                children: (0, l.Y)(b, {
                                    children: e
                                })
                            })
                        }
                    })
                }
        },
        72568: (n, t, e) => {
            e.d(t, {
                I: () => S
            });
            var i = e(71893),
                a = e(55456),
                r = e(4418),
                o = e(93038),
                l = e(84577),
                c = e(2445),
                u = e(96540),
                d = e(17437),
                s = e(69815),
                v = e(95985),
                f = e(65636),
                m = e(32618),
                g = e(91942),
                p = e(83303),
                h = e(38600);

            function y() {
                var n = (0, l._)(["\n    ", ";\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0;\n\n    ", "\n\n    a, button {\n      ", ";\n    }\n  "]);
                return y = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, l._)(["\n        opacity: ", ";\n        transition: opacity 640ms ease-in-out;\n      "]);
                return b = function() {
                    return n
                }, n
            }

            function _() {
                var n = (0, l._)(["\n          padding-left: 0;\n          margin-right: auto;\n        "]);
                return _ = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, l._)(["\n          padding-right: 0;\n          margin-left: auto;\n        "]);
                return k = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, l._)(["\n          padding-left: 0;\n          margin-right: auto;\n        "]);
                return C = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, l._)(["\n          margin-left: auto;\n          margin-right: auto;\n        "]);
                return x = function() {
                    return n
                }, n
            }
            var A = (0, s.default)("article", {
                    target: "elnbl6c0"
                })(function(n) {
                    var t = n.theme,
                        e = n.alignment,
                        i = n.paddingTop,
                        a = n.paddingBottom;
                    return "\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    text-align: ".concat(e || "center", ";\n    u {\n      text-decoration: none;\n      padding-bottom: 0;\n    }\n\n    ").concat(i && (0, g.IR)(i, function(n) {
                        return "padding-top: ".concat("number" == typeof n ? "".concat(n / 10, "rem") : n, ";")
                    }, t.media), ";\n\n    ").concat(a && (0, g.IR)(a, function(n) {
                        return "padding-bottom: ".concat("number" == typeof n ? "".concat(n / 10, "rem") : n, ";\n          ").concat(!!n && "\n          & > *:last-child {\n            margin-bottom: 0;\n          }\n          ", "\n          ")
                    }, t.media), ";\n  ")
                }),
                w = (0, s.default)(m.N_, {
                    target: "elnbl6c1"
                })("color:", function(n) {
                    return n.theme.colors.accent
                }, ";padding-bottom:0;&:active{color:", function(n) {
                    return n.theme.colors.accent
                }, ";}&:hover{color:", function(n) {
                    return n.theme.colors.accent02
                }, ";}"),
                T = (0, s.default)("h1", {
                    target: "elnbl6c2"
                })("margin-bottom:1.6rem;", function(n) {
                    var t;
                    return null === (t = n.theme.typography) || void 0 === t ? void 0 : t.expressiveLarge
                }, ";text-align:", function(n) {
                    return n.alignment
                }, ";"),
                E = (0, s.default)("h3", {
                    target: "elnbl6c3"
                })("margin-bottom:1.2rem;", function(n) {
                    var t;
                    return null === (t = n.theme.typography) || void 0 === t ? void 0 : t.titleSmall
                }, ";text-align:", function(n) {
                    return n.alignment
                }, ";"),
                R = (0, s.default)("h2", {
                    target: "elnbl6c4"
                })("margin-bottom:1.6rem;", function(n) {
                    var t;
                    return null === (t = n.theme.typography) || void 0 === t ? void 0 : t.titleMedium
                }, ";text-align:", function(n) {
                    return n.alignment
                }, ";"),
                Y = (0, s.default)("div", {
                    target: "elnbl6c5"
                })("margin-bottom:2rem;overflow-wrap:anywhere;", function(n) {
                    var t;
                    return null === (t = n.theme.typography) || void 0 === t ? void 0 : t.bodyLarge
                }, ";", function(n) {
                    var t, e = n.animate,
                        i = n.visible,
                        a = n.theme;
                    return e && "\n      opacity: ".concat(i ? 1 : 0, ";\n      transition: opacity 640ms ease-in-out;\n\n      ").concat(null === (t = a.media) || void 0 === t ? void 0 : t.small, " {\n        transition: opacity 320ms ease-in-out;\n      }\n    ")
                }),
                I = (0, s.default)("ul", {
                    target: "elnbl6c6"
                })(function(n) {
                    var t, e = n.theme,
                        i = n.color,
                        a = n.alignment,
                        r = n.stacking,
                        o = n.gap;
                    return (0, d.css)(y(), null === (t = e.typography) || void 0 === t ? void 0 : t.bodyLarge, (0, g.IR)(r, function(n) {
                        var t = {
                            left: "flex-start",
                            right: "flex-end",
                            center: "center",
                            justify: "flex-start"
                        }[a];
                        return "vertical" === n ? "\n            flex-direction: column;\n            align-items: ".concat(t, ";\n            gap: ").concat(o, "rem;\n          ") : "justify-content: ".concat(t, "; gap: 2rem;")
                    }, e.media), i)
                }),
                N = (0, s.default)("li", {
                    target: "elnbl6c7"
                })("margin:0;padding:", function(n) {
                    return "tertiary" === n.variant ? "0.4rem 0" : "0"
                }, ";"),
                B = function(n) {
                    var t = n.animate,
                        e = n.visible,
                        i = n.alignment;
                    return function(n) {
                        var a, r;
                        return (0, d.css)("margin-bottom:0;padding:0;", t && (0, d.css)(b(), e ? 1 : 0), " ", null === (a = n.media) || void 0 === a ? void 0 : a.small, "{transition:opacity 320ms ease-in-out;}", null == n ? void 0 : null === (r = n.media) || void 0 === r ? void 0 : r.extraLarge, "{margin-bottom:0;}", i && ({
                            left: (0, d.css)(_()),
                            right: (0, d.css)(k()),
                            justify: (0, d.css)(C()),
                            center: (0, d.css)(x())
                        })[i], ";")
                    }
                },
                L = {
                    a: function(n, t) {
                        return (0, c.Y)(f.N, (0, a._)((0, i._)({
                            variant: "primary"
                        }, n), {
                            children: t
                        }))
                    }
                },
                S = (0, u.forwardRef)(function(n, t) {
                    var e, l = n.title,
                        d = n.subtitle,
                        s = n.ontitle,
                        f = n.body,
                        m = n.url,
                        y = n.openLinkInNewTab,
                        b = n.animate,
                        _ = n.callsToAction,
                        k = n.paddingBottom,
                        C = n.alignment,
                        x = void 0 === C ? "center" : C,
                        S = n.titleAlignment,
                        D = n.callsToActionAlignment,
                        j = n.callsToActionStacking,
                        M = n.callsToActionColour,
                        O = (0, r._)(n, ["title", "subtitle", "ontitle", "body", "url", "openLinkInNewTab", "animate", "callsToAction", "paddingBottom", "alignment", "titleAlignment", "callsToActionAlignment", "callsToActionStacking", "callsToActionColour"]),
                        V = (0, o._)((0, u.useState)(!1), 2),
                        H = V[0],
                        Q = V[1],
                        q = (0, u.useRef)(),
                        z = (0, h.O)([q, t]),
                        P = (0, p.vw)(f, {
                            excludeContainerTag: !0
                        }),
                        U = n.paddingTop || [60, 80, 100, 120];
                    (0, u.useEffect)(function() {
                        var n = new IntersectionObserver(function(t) {
                            var e = t[t.length - 1].intersectionRatio >= .2;
                            Q(e), e && n.disconnect()
                        }, {
                            threshold: .2
                        });
                        return q.current && n.observe(q.current),
                            function() {
                                return n.disconnect()
                            }
                    }, []);
                    var X = (0, g.tj)(void 0 === j ? "natural" : j);
                    _ && _.length > 2 && (X[0] = "vertical");
                    var F = [s && (0, c.Y)(E, {
                            alignment: S,
                            children: s
                        }, "ontitle"), l && (0, c.Y)(T, {
                            alignment: S,
                            children: l
                        }, "title"), d && (0, c.Y)(R, {
                            alignment: S,
                            children: d
                        }, "subtitle")],
                        W = s || l || d;
                    return W || f || _ && 0 !== _.length ? (0, c.FD)(A, (0, a._)((0, i._)({
                        ref: z,
                        alignment: x,
                        paddingTop: U,
                        paddingBottom: void 0 === k ? [64, 64, 84, 120] : k
                    }, O), {
                        children: [W && (m ? (0, c.Y)(w, {
                            css: B({
                                visible: H,
                                animate: b,
                                alignment: S || x
                            }),
                            target: y ? "_blank" : void 0,
                            metadata: {
                                component: "CopyCell",
                                type: "text",
                                description: l || d || s || null
                            },
                            href: m,
                            children: F
                        }) : (0, c.Y)("div", {
                            css: B({
                                visible: H,
                                animate: b,
                                alignment: S || x
                            }),
                            children: F
                        })), f && (0, c.Y)(Y, {
                            animate: b,
                            visible: H,
                            children: (0, v.htmlToReact)(P, L)
                        }), _ && _.length > 0 && (0, c.Y)(I, {
                            alignment: D || x,
                            stacking: X,
                            color: M,
                            gap: (null === (e = _[0]) || void 0 === e ? void 0 : e.props.variant) === "secondary" ? 2 : .8,
                            children: _.map(function(n, t) {
                                return (0, c.Y)(N, {
                                    variant: null == n ? void 0 : n.props.variant,
                                    children: n
                                }, t)
                            })
                        })]
                    })) : null
                });
            S.displayName = "CopyCell"
        },
        32618: (n, t, e) => {
            e.d(t, {
                sp: () => _,
                N_: () => h
            });
            var i = e(71893),
                a = e(55456),
                r = e(4418),
                o = e(84577),
                l = e(2445),
                c = e(96540),
                u = e(69815),
                d = e(17437),
                s = e(66797),
                v = e(14404),
                f = e(32738),
                m = e(91942);

            function g() {
                var n = (0, o._)(["\n    color: inherit;\n    text-decoration: none;\n    ", "\n\n    ", "\n  "]);
                return g = function() {
                    return n
                }, n
            }
            var p = (0, u.default)("a", {
                    target: "e1mf7p730"
                })(function(n) {
                    var t, e, i = n.theme,
                        a = n.variant,
                        r = n.cursorHasDefaultBehaviour;
                    return (0, d.css)(g(), "primary" === a ? null === (t = i.typography) || void 0 === t ? void 0 : t.titleXS : null === (e = i.typography) || void 0 === e ? void 0 : e.copyMSansSerif, !r && "\n    cursor: pointer;\n    ")
                }),
                h = function(n) {
                    var t = n.metadata,
                        e = n.onClick,
                        o = n.target,
                        u = n.variant,
                        d = void 0 === u ? "default" : u,
                        g = n.cursorHasDefaultBehaviour,
                        h = void 0 !== g && g,
                        y = n.children,
                        b = (0, r._)(n, ["metadata", "onClick", "target", "variant", "cursorHasDefaultBehaviour", "children"]),
                        _ = (0, s.u)(),
                        k = (0, v.s)(),
                        C = (0, f.P9)(),
                        x = "_blank" === o,
                        A = (0, c.useCallback)(function(n) {
                            if (C) {
                                var r;
                                k.click.generic((0, a._)((0, i._)({}, C), {
                                    interaction: null == t ? void 0 : null === (r = t.description) || void 0 === r ? void 0 : r.toLowerCase()
                                }))
                            } else if (t) {
                                if (Array.isArray(t)) {
                                    var o = (0, m.Q8)(t, null == _ ? void 0 : _.media);
                                    k.navigation.generic(o)
                                } else k.navigation.generic(t)
                            }
                            null == e || e(n)
                        }, [k.click, k.navigation, t, e, null == _ ? void 0 : _.media, C]);
                    return ["primary", "secondary"].includes(d) ? (0, l.Y)(p, (0, a._)((0, i._)({}, b), {
                        variant: d,
                        target: x ? "_blank" : void 0,
                        cursorHasDefaultBehaviour: h,
                        onClick: A,
                        children: y
                    })) : (0, l.Y)(p, (0, a._)((0, i._)({}, b), {
                        variant: "default",
                        target: x ? "_blank" : void 0,
                        cursorHasDefaultBehaviour: h,
                        onClick: A,
                        children: y
                    }))
                };

            function y() {
                var n = (0, o._)(["\n    ", ";\n\n    letter-spacing: 0;\n    color: inherit;\n    font-family: ", ";\n\n    text-decoration: ", ";\n    font-size: ", "rem;\n    line-height: 2.4rem;\n    font-weight: ", ";\n    display: inline-flex;\n    align-items: center;\n    white-space: nowrap;\n\n    ", " {\n      font-size: ", "rem;\n      line-height: 2.8rem;\n    }\n  "]);
                return y = function() {
                    return n
                }, n
            }
            var b = (0, u.default)("a", {
                    target: "e1qesxyn0"
                })(function(n) {
                    var t, e, i, a, r, o, l, c, u = n.theme,
                        s = n.linkVariant;
                    return (0, d.css)(y(), null === (t = u.typography) || void 0 === t ? void 0 : t.lang, null === (i = u.font) || void 0 === i ? void 0 : null === (e = i.family) || void 0 === e ? void 0 : e.serif, "underline" === s ? "underline" : "none", "large" === s ? 1.6 : 1.4, "underline" === s ? null === (r = u.font) || void 0 === r ? void 0 : null === (a = r.weight) || void 0 === a ? void 0 : a.normal : null === (l = u.font) || void 0 === l ? void 0 : null === (o = l.weight) || void 0 === o ? void 0 : o.medium, null === (c = u.media) || void 0 === c ? void 0 : c.extraLarge, "large" === s ? 2 : 1.6)
                }),
                _ = function(n) {
                    var t = n.metadata,
                        e = n.onClick,
                        o = n.target,
                        u = n.linkVariant,
                        d = n.children,
                        f = (0, r._)(n, ["metadata", "onClick", "target", "linkVariant", "children"]),
                        g = (0, s.u)(),
                        p = (0, v.s)(),
                        h = (0, c.useCallback)(function(n) {
                            if (t) {
                                if (Array.isArray(t)) {
                                    var i = (0, m.Q8)(t, null == g ? void 0 : g.media);
                                    p.navigation.generic(i)
                                } else p.navigation.generic(t)
                            }
                            null == e || e(n)
                        }, [p.navigation, t, e, null == g ? void 0 : g.media]);
                    return (0, l.Y)(b, (0, a._)((0, i._)({}, f), {
                        linkVariant: u,
                        target: "_blank" === o ? "_blank" : void 0,
                        onClick: h,
                        children: d
                    }))
                }
        },
        38600: (n, t, e) => {
            e.d(t, {
                O: () => a
            });
            var i = e(96540);

            function a(n) {
                return (0, i.useCallback)(function(t) {
                    var e = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var r, o = n.filter(Boolean)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                            var l = r.value;
                            "function" == typeof l ? l(t) : l.current = t
                        }
                    } catch (n) {
                        i = !0, a = n
                    } finally {
                        try {
                            e || null == o.return || o.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                }, n)
            }
        }
    }
]);