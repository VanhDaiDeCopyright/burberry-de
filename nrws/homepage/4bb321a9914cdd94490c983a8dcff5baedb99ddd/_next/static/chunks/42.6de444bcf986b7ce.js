"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [42], {
        95985: (t, n, e) => {
            e.r(n), e.d(n, {
                htmlToReact: () => r
            });
            var i = e(25232);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    }
                    return t
                }).apply(this, arguments)
            }
            var r = function(t, n) {
                if (0 === Object.keys(n).length) return t;
                var e = {
                    replace: function(t) {
                        if (t instanceof i.Hg && "tag" === t.type && Object.keys(n).includes(t.name)) {
                            var r = t.attributes.reduce(function(t, n) {
                                var e;
                                return o({}, t, ((e = {})[n.name] = n.value, e))
                            }, {});
                            return n[t.name](r, (0, i.zd)(t.children, e))
                        }
                        return t
                    }
                };
                return (0, i.Ay)(t, e)
            }
        },
        55317: (t, n, e) => {
            e.d(n, {
                k: () => b
            });
            var i, o = e(50467),
                r = e(93038),
                a = e(84577),
                l = e(2445),
                c = e(96540),
                d = e(69815),
                u = e(17437),
                s = e(72972),
                m = e(14404),
                v = e(9384),
                g = e(41432),
                f = e(28596);

            function p() {
                var t = (0, a._)(["\n            display: flex;\n            position: relative;\n            margin-left: -7px;\n            text-decoration: none;\n          "]);
                return p = function() {
                    return t
                }, t
            }

            function y() {
                var t = (0, a._)(["\n            position: absolute;\n            left: 0;\n            top: 50%;\n            transform: translateY(-50%);\n          "]);
                return y = function() {
                    return t
                }, t
            }
            var _ = (i = {}, (0, o._)(i, s.yj.MODEL_VIEWER, "3D model viewer"), (0, o._)(i, s.yj.NATIVE_AR_EXPERIENCE, "ar experience"), (0, o._)(i, s.yj.QR_MODAL, "QR code modal"), (0, o._)(i, s.WS.CUSTOM_AR_EXPERIENCE, "ar experience"), i),
                h = (0, d.default)("span", {
                    target: "e1wdqo6z0"
                })(function(t) {
                    var n;
                    return null === (n = t.theme.typography) || void 0 === n ? void 0 : n.bodyLarge
                }, ";position:relative;margin-left:2.8rem;"),
                b = function(t) {
                    var n = t.arConfig,
                        e = t.label,
                        i = t.textColor,
                        o = void 0 === i ? "dark" : i,
                        a = t.fallbackUrl,
                        d = t.clickInterceptor,
                        b = t.dataTest,
                        k = (0, m.s)(),
                        T = (0, g.F)().countryCode,
                        A = (0, f.B)().t,
                        w = (0, v.gN)(),
                        B = (0, r._)((0, c.useState)(""), 2),
                        x = B[0],
                        C = B[1],
                        R = function(t, n) {
                            t && C(_[n.description])
                        };

                    function Y(t) {
                        var n = w.get().page.pageType;
                        k.click.generic({
                            component: "@boss/ar-button",
                            context: "HOME" === n ? "home" : "campaign",
                            interaction: t,
                            description: x,
                            type: "cta"
                        })
                    }

                    function L() {
                        Y("open")
                    }

                    function j() {
                        Y("close")
                    }
                    return (0, l.Y)(u.ClassNames, {
                        children: function(t) {
                            var i = t.css;
                            return (0, l.Y)(s.Ay, {
                                arConfig: n,
                                isEnabled: !0,
                                onClick: L,
                                onQRModalCloseCb: j,
                                onModelViewerCloseCb: j,
                                modalTitle: A("modal.ar.fallback.title"),
                                modalBody: A("modal.ar.fallback.body"),
                                qrUrl: a,
                                forceAndroid3D: "cn" === T,
                                getARButtonAvailability: R,
                                clickInterceptor: d,
                                className: i(p()),
                                arIconClassName: i(y()),
                                arIconTheme: o,
                                dataTest: b,
                                children: (0, l.Y)(h, {
                                    children: e
                                })
                            })
                        }
                    })
                }
        },
        53152: (t, n, e) => {
            e.d(n, {
                U: () => C
            });
            var i = e(50467),
                o = e(71893),
                r = e(55456),
                a = e(4418),
                l = e(2445),
                c = e(69815),
                d = e(96540),
                u = e(95985),
                s = e(83303),
                m = e(65636),
                v = e(91942),
                g = (0, c.default)("article", {
                    target: "e4szjte0"
                })("display:flex;flex-direction:column;align-items:stretch;text-align:", function(t) {
                    return t.alignment
                }, ";overflow:hidden;", function(t) {
                    var n, e, i, o = t.theme;
                    return n = t.paddingTop, i = "", (0, v.W8)(n, "number") ? i = (0, v.IR)(n, function(t) {
                        return "\n      ".concat("number" == typeof t ? "padding-top: ".concat(t / 10, "rem") : "", ";\n      ")
                    }, o.media) : (void 0 === n || "string" == typeof n) && (i = "\n      padding-top: ".concat({
                        none: "0",
                        small: "5.2rem",
                        large: "9.6rem"
                    }[n || "none"], ";\n\n      ").concat(null === (e = o.media) || void 0 === e ? void 0 : e.extraLarge, " {\n        padding-top: ").concat({
                        none: "0",
                        small: "9.6rem",
                        large: "12.4rem"
                    }[n || "none"], ";\n      }\n    ")), i
                }, " ", function(t) {
                    var n = t.theme,
                        e = t.paddingBottom;
                    return (0, v.IR)(e, function(t) {
                        return "\n        ".concat(void 0 !== t ? "padding-bottom: ".concat(t / 10, "rem") : "", ";\n        ").concat(t ? "& > *:last-child { margin-bottom: 0; }" : "", "\n        ")
                    }, n.media)
                }, ";em{font-style:italic;}u{text-decoration:none;padding-bottom:0;}"),
                f = function(t) {
                    var n, e, i;
                    return "\n  a {\n    color: ".concat((null === (n = t.colors) || void 0 === n ? void 0 : n.accent) || "inherit", ";\n    text-decoration: none;\n    padding-bottom: 0;\n\n    &:active {\n      color: ").concat((null === (e = t.colors) || void 0 === e ? void 0 : e.accent) || "inherit", ";\n    }\n\n    &:hover {\n      color: ").concat((null === (i = t.colors) || void 0 === i ? void 0 : i.accent02) || "inherit", ";\n    }\n  }\n")
                },
                p = (0, c.default)("h3", {
                    target: "e4szjte1"
                })(function(t) {
                    var n;
                    return null === (n = t.theme.typography) || void 0 === n ? void 0 : n.titleSmall
                }, ";text-align:", function(t) {
                    var n = t.alignment;
                    return void 0 === n ? "center" : n
                }, ";", function(t) {
                    return f(t.theme)
                }, ";margin-bottom:1.2rem;"),
                y = (0, c.default)("h1", {
                    target: "e4szjte2"
                })(function(t) {
                    var n;
                    return null === (n = t.theme.typography) || void 0 === n ? void 0 : n.expressiveLarge
                }, ";text-align:", function(t) {
                    var n = t.alignment;
                    return void 0 === n ? "center" : n
                }, ";", function(t) {
                    return f(t.theme)
                }, ";", function(t) {
                    var n = t.marginBottom,
                        e = t.theme;
                    return void 0 !== n && (0, v.IR)(n, function(t) {
                        return "margin-bottom: ".concat(t / 10, "rem;")
                    }, e.media)
                }),
                _ = (0, c.default)("h2", {
                    target: "e4szjte3"
                })(function(t) {
                    var n;
                    return null === (n = t.theme.typography) || void 0 === n ? void 0 : n.expressiveMedium
                }, ";text-align:", function(t) {
                    var n = t.alignment;
                    return void 0 === n ? "center" : n
                }, ";margin-bottom:1.6rem;", function(t) {
                    return f(t.theme)
                }, ";"),
                h = (0, c.default)("div", {
                    target: "e4szjte4"
                })("margin-bottom:", function(t) {
                    return "tertiary" === t.variant ? "2rem" : "1.6rem"
                }, ";", function(t) {
                    var n, e, i, o = t.variant,
                        r = t.theme;
                    return "primary" === o ? null === (e = r.typography) || void 0 === e ? void 0 : e.titleMedium : "secondary" === o ? null === (i = r.typography) || void 0 === i ? void 0 : i.bodyLarge500 : null === (n = r.typography) || void 0 === n ? void 0 : n.bodyLarge
                }, " ", function(t) {
                    var n = t.variant,
                        e = t.theme;
                    return "primary" === n ? f(e) : void 0
                }),
                b = (0, c.default)("h4", {
                    target: "e4szjte5"
                })("margin-bottom:1.6rem;", function(t) {
                    var n;
                    return null === (n = t.theme.typography) || void 0 === n ? void 0 : n.bodyMedium500
                }, ";"),
                k = (0, c.default)("span", {
                    target: "e4szjte6"
                })("margin-bottom:2rem;", function(t) {
                    var n;
                    return null === (n = t.theme.typography) || void 0 === n ? void 0 : n.bodyMedium
                }, ";"),
                T = (0, c.default)("ul", {
                    target: "e4szjte7"
                })("display:flex;flex-wrap:wrap;margin:0;", function(t) {
                    var n;
                    return null === (n = t.theme.typography) || void 0 === n ? void 0 : n.bodyLarge
                }, ";", function(t) {
                    var n = t.theme,
                        e = t.stacking,
                        i = t.gap,
                        o = t.alignment,
                        r = void 0 === o ? "center" : o;
                    return (0, v.IR)(e, function(t) {
                        var n = {
                            left: "flex-start",
                            right: "flex-end",
                            center: "center",
                            justify: "flex-start"
                        }[r];
                        return "vertical" === t ? "\n        flex-direction: column;\n        align-items: ".concat(n, ";\n        gap: ").concat(i, "rem;\n      ") : "justify-content: ".concat(n, "; gap: 2rem;")
                    }, n.media)
                }, ";a,button{", function(t) {
                    return t.color
                }, ";}"),
                A = (0, c.default)("li", {
                    target: "e4szjte8"
                })("display:flex;align-items:center;justify-content:center;margin:0;padding:", function(t) {
                    return "tertiary" === t.variant ? "0.4rem 0" : 0
                }, ";"),
                w = function(t) {
                    var n;
                    return (0, i._)({}, (null === (n = t.media) || void 0 === n ? void 0 : n.small) || "", {
                        display: "none"
                    })
                },
                B = function(t) {
                    var n;
                    return (0, i._)({}, (null === (n = t.media) || void 0 === n ? void 0 : n.gteMedium) || "", {
                        display: "none"
                    })
                },
                x = {
                    a: function(t, n) {
                        return (0, l.Y)(m.N, (0, r._)((0, o._)({
                            variant: "primary"
                        }, t), {
                            children: n
                        }))
                    }
                },
                C = (0, d.forwardRef)(function(t, n) {
                    var e, i = t.ontitle,
                        c = t.firstTitle,
                        m = t.secondTitle,
                        v = t.firstBody,
                        f = t.secondBody,
                        C = t.thirdBody,
                        R = t.firstBodyVariant,
                        Y = void 0 === R ? "primary" : R,
                        L = t.secondBodyVariant,
                        j = t.thirdBodyVariant,
                        M = void 0 === j ? "tertiary" : j,
                        S = t.subheading,
                        E = t.caption,
                        I = t.callsToAction,
                        z = t.paddingTop,
                        N = t.paddingBottom,
                        O = t.alignment,
                        F = t.titleAlignment,
                        H = t.callsToActionAlignment,
                        V = t.callsToActionStacking,
                        P = t.callsToActionColour,
                        U = t.mobileFirstBody,
                        D = t.mobileThirdBody,
                        Q = t.mobileFirstTitle,
                        W = t.mobileSecondTitle,
                        q = (0, a._)(t, ["ontitle", "firstTitle", "secondTitle", "firstBody", "secondBody", "thirdBody", "firstBodyVariant", "secondBodyVariant", "thirdBodyVariant", "subheading", "caption", "callsToAction", "paddingTop", "paddingBottom", "alignment", "titleAlignment", "callsToActionAlignment", "callsToActionStacking", "callsToActionColour", "mobileFirstBody", "mobileThirdBody", "mobileFirstTitle", "mobileSecondTitle"]),
                        J = (0, s.vw)(i),
                        X = (0, s.vw)(c),
                        $ = (0, s.vw)(m),
                        G = (0, s.vw)(U),
                        K = (0, s.vw)(Q),
                        Z = (0, s.vw)(W),
                        tt = (0, s.vw)(D),
                        tn = (0, s.vw)(v),
                        te = (0, s.vw)(f),
                        ti = (0, s.vw)(C),
                        to = (0, s.vw)(S),
                        tr = (0, s.vw)(E),
                        ta = (0, u.htmlToReact)(te, x),
                        tl = (0, u.htmlToReact)((0, s.vw)(ti), x),
                        tc = (0, u.htmlToReact)((0, s.vw)(tt), x),
                        td = (0, u.htmlToReact)((0, s.vw)(to), x),
                        tu = (0, u.htmlToReact)((0, s.vw)(tr), x),
                        ts = Array.isArray(I) && I.length > 0,
                        tm = (0, d.useMemo)(function() {
                            if (X) return 16
                        }, [X]);
                    return (0, l.FD)(g, (0, r._)((0, o._)({
                        ref: n,
                        alignment: void 0 === O ? "center" : O,
                        paddingTop: z,
                        paddingBottom: N
                    }, q), {
                        children: [J ? (0, l.Y)(p, {
                            alignment: F,
                            dangerouslySetInnerHTML: {
                                __html: J
                            }
                        }) : null, X ? (0, l.Y)(y, {
                            marginBottom: tm,
                            alignment: F,
                            dangerouslySetInnerHTML: {
                                __html: X
                            },
                            css: K ? w : void 0
                        }) : null, K ? (0, l.Y)(y, {
                            alignment: F,
                            marginBottom: tm,
                            dangerouslySetInnerHTML: {
                                __html: K
                            },
                            css: B
                        }) : null, $ ? (0, l.Y)(_, {
                            alignment: F,
                            dangerouslySetInnerHTML: {
                                __html: $
                            },
                            css: Z ? w : void 0
                        }) : null, Z ? (0, l.Y)(_, {
                            alignment: F,
                            dangerouslySetInnerHTML: {
                                __html: Z
                            },
                            css: B
                        }) : null, tn ? (0, l.Y)(h, {
                            variant: Y,
                            dangerouslySetInnerHTML: {
                                __html: tn
                            },
                            css: G ? w : void 0
                        }) : null, G ? (0, l.Y)(h, {
                            variant: Y,
                            dangerouslySetInnerHTML: {
                                __html: G
                            },
                            css: B
                        }) : null, te ? (0, l.Y)(h, {
                            variant: void 0 === L ? "secondary" : L,
                            children: ta
                        }) : null, ti ? (0, l.Y)(h, {
                            variant: M,
                            css: tt ? w : void 0,
                            children: tl
                        }) : null, tt ? (0, l.Y)(h, {
                            variant: M,
                            css: B,
                            children: tc
                        }) : null, to ? (0, l.Y)(b, {
                            children: td
                        }) : null, tr ? (0, l.Y)(k, {
                            children: tu
                        }) : null, ts ? (0, l.Y)(T, {
                            stacking: V,
                            alignment: H,
                            color: P,
                            gap: (null === (e = I[0]) || void 0 === e ? void 0 : e.props.variant) === "tertiary" ? .8 : 2,
                            children: null == I ? void 0 : I.map(function(t, n) {
                                return (0, l.Y)(A, {
                                    variant: t.props.variant,
                                    children: t
                                }, n)
                            })
                        }) : null]
                    }))
                });
            C.displayName = "ExpressiveCopyCell"
        },
        90042: (t, n, e) => {
            e.r(n), e.d(n, {
                ExpressiveCopyCellAdapter: () => h
            });
            var i = e(71893),
                o = e(55456),
                r = e(4418),
                a = e(2445),
                l = e(96540),
                c = e(1760),
                d = e(14404),
                u = e(57844),
                s = e(65636),
                m = e(65503),
                v = e(17025),
                g = e(55317),
                f = e(41432),
                p = e(53152),
                y = {
                    Left: "left",
                    Right: "right",
                    Centre: "center",
                    Justify: "justify"
                },
                _ = {
                    1: 1,
                    "1/2": .5,
                    "1/3": 1 / 3,
                    "1/4": 1 / 4,
                    "2/3": 2 / 3,
                    "3/4": 3 / 4
                },
                h = function(t) {
                    var n, e, h, b = t.data,
                        k = t.metadata,
                        T = t.forwardedRef,
                        A = (0, r._)(t, ["data", "metadata", "forwardedRef"]),
                        w = 12 * _[(null == b ? void 0 : null === (n = b.cell_configuration) || void 0 === n ? void 0 : n.mobile_width) || "1"],
                        B = (null == b ? void 0 : null === (e = b.cell_configuration) || void 0 === e ? void 0 : e.desktop_width) || "1",
                        x = 12 * _[B],
                        C = (null == b ? void 0 : null === (h = b.cell_configuration) || void 0 === h ? void 0 : h.full_width) || !1,
                        R = (0, f.F)().language,
                        Y = (0, d.s)(),
                        L = (0, l.useMemo)(function() {
                            if (!b) return null;
                            if (["ja", "zf", "zh", "ko"].includes(R.toLowerCase())) return {
                                alignment: "left",
                                titleAlignment: "left",
                                callsToActionAlignment: "left"
                            };
                            var t = b.cell_configuration,
                                n = t.cell_alignment,
                                e = t.title_alignment,
                                i = t.cta_alignment;
                            return {
                                alignment: y[n],
                                titleAlignment: y[e],
                                callsToActionAlignment: y[i]
                            }
                        }, [b, R]),
                        j = (0, l.useMemo)(function() {
                            return C ? {
                                columns: [12, 12, 12],
                                offsetLeft: [0, 0, 0],
                                offsetRight: [0, 0, 0]
                            } : (null == k ? void 0 : k.isFirstOnPage) ? {
                                columns: [12, 10, 8],
                                offsetLeft: [0, 1, 2],
                                offsetRight: [0, 1, 2]
                            } : "1" !== B ? {
                                columns: [w, x]
                            } : {
                                columns: [w, 10, 10],
                                offsetLeft: [0, 1, 1],
                                offsetRight: [0, 1, 1]
                            }
                        }, [x, B, null == k ? void 0 : k.isFirstOnPage, w, C]),
                        M = (0, c.dJ)(j),
                        S = (0, l.useMemo)(function() {
                            var t, n, e;
                            if (Array.isArray(null == b ? void 0 : b.cta)) return null == b ? void 0 : b.cta.map(function(o, r) {
                                switch (o.link_type) {
                                    case "modal":
                                        var l;
                                        if (!(t = null === (l = o.link_reference) || void 0 === l ? void 0 : l[0])) return null;
                                        return "string" == typeof t ? (n = t, e = "email_sign_up_component") : (n = t.uid, e = t._content_type_uid), (0, a.Y)(v.RA, {
                                            index: r,
                                            variant: "Primary" === o.style ? "primary" : "tertiary",
                                            text: o.link_copy,
                                            modalUid: n,
                                            modalContentType: e
                                        });
                                    case "AR":
                                        return (0, a.Y)(g.k, {
                                            arConfig: {
                                                glb: o.link_ar_glb,
                                                reality: o.link_ar_reality,
                                                usdz: o.link_ar_usdz
                                            },
                                            label: o.link_copy
                                        });
                                    default:
                                        return "Primary" === o.style ? (0, a.Y)(u.$, {
                                            asChild: !0,
                                            variant: "secondary",
                                            children: (0, a.Y)(m.B, {
                                                href: o.link_url,
                                                target: "url" === o.link_type ? void 0 : "_blank",
                                                onClick: i(o.link_copy),
                                                children: o.link_copy
                                            })
                                        }) : (0, a.Y)(s.N, {
                                            href: o.link_url,
                                            target: "url" === o.link_type ? void 0 : "_blank",
                                            onClick: i(o.link_copy),
                                            variant: "tertiary",
                                            children: o.link_copy
                                        })
                                }
                            }).filter(Boolean);

                            function i(t) {
                                return function() {
                                    Y.navigation.generic({
                                        component: "ExpressiveCopyCell",
                                        type: "text",
                                        description: t || null
                                    })
                                }
                            }
                        }, [null == b ? void 0 : b.cta, Y.navigation]);
                    if (!b) return null;
                    var E = b.title_section,
                        I = E.on_title,
                        z = E.title_1,
                        N = E.title_2,
                        O = E.mobile_override_title_1,
                        F = E.mobile_override_title_2,
                        H = b.body,
                        V = H.copy_1,
                        P = H.copy_2,
                        U = H.copy_3,
                        D = H.mobile_override_copy_1,
                        Q = H.mobile_override_copy_3,
                        W = b.subheading,
                        q = b.caption,
                        J = b.cell_configuration,
                        X = J.stack_ctas_vertically_mobile,
                        $ = J.stack_ctas_vertically_desktop;
                    return (0, a.Y)(p.U, (0, i._)((0, o._)((0, i._)({
                        ref: T,
                        ontitle: I,
                        firstTitle: z,
                        secondTitle: N,
                        firstBody: V,
                        secondBody: P,
                        thirdBody: U,
                        mobileFirstBody: D,
                        mobileThirdBody: Q,
                        mobileFirstTitle: O,
                        mobileSecondTitle: F,
                        subheading: W,
                        caption: q,
                        callsToAction: S,
                        "data-testid": "expressive-copy-cell"
                    }, L), {
                        callsToActionStacking: [X ? "vertical" : "natural", $ ? "vertical" : "natural"],
                        paddingBottom: function(t) {
                            if (t) {
                                var n = t.bottom_padding,
                                    e = t.mobile_bottom_padding,
                                    i = [],
                                    o = {
                                        small: {
                                            mobile: [24],
                                            desktop: [20, 20, 32]
                                        },
                                        large: {
                                            mobile: [60],
                                            desktop: [80, 100, 120]
                                        }
                                    };
                                switch (null != e ? e : n) {
                                    case "Small":
                                        i = i.concat(o.small.mobile);
                                        break;
                                    case "Large":
                                        i = i.concat(o.large.mobile);
                                        break;
                                    default:
                                        i = i.concat([0])
                                }
                                switch (n) {
                                    case "Small":
                                        i = i.concat(o.small.desktop);
                                        break;
                                    case "Large":
                                        i = i.concat(o.large.desktop);
                                        break;
                                    default:
                                        i = i.concat([0])
                                }
                                return i
                            }
                        }(b),
                        paddingTop: function(t) {
                            if (null == t ? void 0 : t.top_padding) return ({
                                Small: [24, 20, 20, 32],
                                Large: [60, 80, 100, 120],
                                None: void 0
                            })[t.top_padding]
                        }(b),
                        css: M
                    }), A))
                }
        }
    }
]);