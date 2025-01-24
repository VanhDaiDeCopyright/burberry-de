"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2486, 9367], {
        92486: (e, t, o) => {
            o.r(t), o.d(t, {
                ContentCellAdapter: () => ep
            });
            var n = o(71893),
                i = o(4418),
                l = o(93038),
                r = o(2445),
                a = o(96540),
                d = o(66797),
                u = o(82393),
                c = o(57844),
                s = o(65636),
                v = o(65503),
                m = o(41432),
                p = o(84577),
                f = o(28596),
                g = o(17437),
                y = o(69815),
                _ = o(32618);

            function h() {
                var e = (0, p._)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    color: ", ";\n    margin-bottom: 2.4rem;\n\n    ", " {\n      margin-bottom: 2.8rem;\n    }\n\n    ", " {\n      margin-bottom: 4.4rem;\n    }\n  "]);
                return h = function() {
                    return e
                }, e
            }

            function w() {
                var e = (0, p._)(["\n    display: flex;\n    justify-content: center;\n\n    width: 5.3rem;\n    font-size: 4rem;\n    line-height: 4rem;\n\n    ", " {\n      width: 13.4rem;\n      font-size: 10rem;\n      line-height: 10rem;\n    }\n\n    ", " {\n      width: 14.8rem;\n      font-size: 11.2rem;\n      line-height: 11.2rem;\n    }\n\n    ", " {\n      width: 20rem;\n      font-size: 17.2rem;\n      line-height: 17.2rem;\n    }\n\n    & ~ div {\n      margin-left: 4.4rem;\n      ", " {\n        margin-left: 1.6rem;\n      }\n    }\n  "]);
                return w = function() {
                    return e
                }, e
            }

            function b() {
                var e = (0, p._)(["\n    position: relative;\n\n    top: 0.6rem;\n    font-size: 1.2rem;\n    line-height: 1.2rem;\n    margin-left: 0.6rem;\n\n    ", " {\n      top: 1.6rem;\n      font-size: 1.4rem;\n      line-height: 1.4rem;\n      margin-left: 1.6rem;\n    }\n\n    ", " {\n      top: 1.8rem;\n      font-size: 1.4rem;\n      line-height: 1.4rem;\n      margin-left: 1.6rem;\n    }\n\n    ", " {\n      top: 3.2rem;\n      font-size: 1.6rem;\n      line-height: 1.6rem;\n      margin-left: 1.6rem;\n    }\n  "]);
                return b = function() {
                    return e
                }, e
            }

            function k() {
                var e = (0, p._)(["\n    ", "\n    color: ", ";\n    pointer-events: all;\n    text-align: center;\n\n    max-width: 47rem;\n\n    ", " {\n      max-width: 41.7rem;\n    }\n\n    ", " {\n      ", "\n      max-width: 59rem;\n    }\n  "]);
                return k = function() {
                    return e
                }, e
            }
            var x = (0, y.default)("div", {
                    target: "e1wdhc1e0"
                })("width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;"),
                T = (0, y.default)("div", {
                    target: "e1wdhc1e1"
                })(function(e) {
                    var t, o, n = e.theme,
                        i = e.colour;
                    return (0, g.css)(h(), i, null === (t = n.media) || void 0 === t ? void 0 : t.medium, null === (o = n.media) || void 0 === o ? void 0 : o.gteLarge)
                }),
                A = (0, y.default)("div", {
                    target: "e1wdhc1e2"
                })(function(e) {
                    var t, o, n, i, l = e.theme;
                    return (0, g.css)(w(), null === (t = l.media) || void 0 === t ? void 0 : t.medium, null === (o = l.media) || void 0 === o ? void 0 : o.large, null === (n = l.media) || void 0 === n ? void 0 : n.extraLarge, null === (i = l.media) || void 0 === i ? void 0 : i.small)
                }),
                C = (0, y.default)("span", {
                    target: "e1wdhc1e3"
                })(function(e) {
                    var t, o, n, i = e.theme;
                    return (0, g.css)(b(), null === (t = i.media) || void 0 === t ? void 0 : t.medium, null === (o = i.media) || void 0 === o ? void 0 : o.large, null === (n = i.media) || void 0 === n ? void 0 : n.extraLarge)
                }),
                S = (0, y.default)("span", {
                    target: "e1wdhc1e4"
                })(function(e) {
                    var t, o, n, i, l = e.theme,
                        r = e.colour;
                    return (0, g.css)(k(), null === (t = l.typography) || void 0 === t ? void 0 : t.l2, r, null === (o = l.media) || void 0 === o ? void 0 : o.large, null === (n = l.media) || void 0 === n ? void 0 : n.extraLarge, null === (i = l.typography) || void 0 === i ? void 0 : i.l1)
                }),
                B = S.withComponent(_.N_);

            function Y(e, t) {
                return (e % t).toString().padStart(2, "0")
            }
            var P = function(e) {
                    var t = e.date,
                        o = e.colour,
                        n = e.pendingCopy,
                        i = e.pendingCopyUrl,
                        d = e.finishedCopy,
                        u = e.finishedCopyUrl,
                        c = (0, f.B)().t,
                        s = (0, l._)((0, a.useState)(!1), 2),
                        v = s[0],
                        m = s[1],
                        p = (0, l._)((0, a.useState)(0), 2),
                        g = p[0],
                        y = p[1],
                        _ = (0, a.useRef)(null);
                    if ((0, a.useEffect)(function() {
                            var e;
                            return y(Number.isNaN(e = new Date(t).getTime()) ? 0 : Math.ceil((e - new Date().getTime()) / 1e3)), m(!0), _.current = window.setInterval(function() {
                                    y(function(e) {
                                        return e - 1
                                    })
                                }, 1e3),
                                function() {
                                    _.current && window.clearInterval(_.current)
                                }
                        }, [t]), (0, a.useEffect)(function() {
                            v && _.current && g <= 0 && window.clearInterval(_.current)
                        }, [v, g]), !v) return null;
                    var h = g <= 0,
                        w = g <= 0 ? {
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        } : {
                            days: Math.floor(g / 24 / 60 / 60),
                            hours: Math.floor(g / 60 / 60),
                            minutes: Math.floor(g / 60),
                            seconds: g
                        },
                        b = w.days,
                        k = w.hours,
                        P = w.minutes,
                        M = w.seconds;
                    return (0, r.FD)(x, {
                        children: [(0, r.FD)(T, {
                            colour: o,
                            children: [(0, r.Y)(A, {
                                "data-testid": "countdown-days",
                                children: Y(b, 365)
                            }), (0, r.Y)(C, {
                                children: c("countdown.units.days")
                            }), (0, r.Y)(A, {
                                "data-testid": "countdown-hours",
                                children: Y(k, 24)
                            }), (0, r.Y)(C, {
                                children: c("countdown.units.hours")
                            }), (0, r.Y)(A, {
                                "data-testid": "countdown-minutes",
                                children: Y(P, 60)
                            }), (0, r.Y)(C, {
                                children: c("countdown.units.minutes")
                            }), (0, r.Y)(A, {
                                "data-testid": "countdown-seconds",
                                children: Y(M, 60)
                            }), (0, r.Y)(C, {
                                children: c("countdown.units.seconds")
                            })]
                        }), h && !u ? (0, r.Y)(S, {
                            "data-testid": "countdown-finished",
                            colour: o,
                            children: d
                        }) : null, h && u ? (0, r.Y)(B, {
                            "data-testid": "countdown-finished",
                            href: u,
                            colour: o,
                            metadata: {
                                type: "text",
                                component: "Countdown",
                                description: d
                            },
                            children: d
                        }) : null, h || i ? null : (0, r.Y)(S, {
                            colour: o,
                            "data-testid": "countdown-pending",
                            children: n
                        }), !h && i ? (0, r.Y)(B, {
                            "data-testid": "countdown-pending",
                            href: i,
                            colour: o,
                            metadata: {
                                type: "text",
                                component: "Countdown",
                                description: n
                            },
                            children: n
                        }) : null]
                    })
                },
                M = o(32738),
                I = function(e) {
                    var t, o, n = e.colour,
                        i = e.countdown_date,
                        l = e.pending_label,
                        a = l.page,
                        u = l.copy,
                        c = e.finished_label,
                        s = c.page,
                        v = c.copy,
                        m = (0, d.u)(),
                        p = Array.isArray(a) && a.length > 0 ? a[0].url : "",
                        f = Array.isArray(s) && s.length > 0 ? s[0].url : "";
                    return (0, r.Y)(M.ec.Provider, {
                        value: "countdown",
                        children: (0, r.Y)(P, {
                            date: i,
                            colour: "Dark" === n ? null === (t = m.colors) || void 0 === t ? void 0 : t.black : null === (o = m.colors) || void 0 === o ? void 0 : o.white,
                            pendingCopy: u,
                            pendingCopyUrl: p,
                            finishedCopy: v,
                            finishedCopyUrl: f
                        })
                    })
                },
                z = o(17025),
                L = o(1760),
                j = o(55456),
                R = o(55317),
                N = function(e) {
                    var t = e.textColor,
                        o = e.link_ar_glb,
                        n = e.link_ar_reality,
                        i = e.link_ar_usdz,
                        l = e.link_copy,
                        a = e.clickInterceptor,
                        d = e.dataTest;
                    return (0, r.Y)(R.k, {
                        arConfig: {
                            glb: o,
                            reality: n,
                            usdz: i
                        },
                        label: l,
                        textColor: t,
                        clickInterceptor: a,
                        dataTest: d
                    })
                },
                V = o(68101),
                H = function(e, t) {
                    return e.find(function(e) {
                        return RegExp(e, "i").test(t)
                    })
                },
                F = o(45922),
                O = o(4029),
                E = (0, a.memo)(function(e) {
                    var t, o, i, d, u, c = e.data,
                        s = e.cta,
                        v = e.dataTest,
                        p = (t = s.custom_ar_solution_config, o = (0, m.F)().countryCode, d = (i = (0, l._)((0, a.useState)(), 2))[0], u = i[1], (0, a.useEffect)(function() {
                            if (t) {
                                var e;
                                return u(null === (e = t.find(function(e) {
                                    var t, n, i, l, r, a, d, u, c;
                                    return t = e, n = o, a = t.countries, d = t.country_group, u = t.user_agents, c = t.custom_ar_solution_url, (0 === (l = Array.from(new Set((0, V._)((null == a ? void 0 : a.select) || []).concat((0, V._)((null == d ? void 0 : null === (i = d.map(function(e) {
                                        return e.countries.select
                                    })) || void 0 === i ? void 0 : i.flat()) || []))))).length || l.find(function(e) {
                                        return e && n && e.toLowerCase() === n.toLowerCase()
                                    })) && (r = window.navigator.userAgent, u.find(function(e) {
                                        var t = e.includes,
                                            o = e.excludes,
                                            n = H(t, r),
                                            i = H(o, r);
                                        return n && !i
                                    })) ? c : null
                                })) || void 0 === e ? void 0 : e.custom_ar_solution_url)
                            }
                        }, [o, t]), (0, a.useMemo)(function() {
                            if (t && d && F.default.isMobile) return function(e) {
                                return null == e || e.preventDefault(),
                                    function(e) {
                                        try {
                                            window.location.href = e
                                        } catch (e) {
                                            console.log("failed to redirect", e)
                                        }
                                    }((0, O.O$)(d, [{
                                        key: "return-url",
                                        value: window.location.href
                                    }])), !0
                            }
                        }, [d, t]));
                    return (0, r.Y)(N, (0, j._)((0, n._)({}, {
                        link_ar_glb: s.link_ar_glb,
                        link_ar_reality: s.link_ar_reality,
                        link_ar_usdz: s.link_ar_usdz,
                        link_copy: s.link_copy
                    }, {
                        textColor: "White" === c.cell_configuration.copy_colour ? "light" : "dark"
                    }), {
                        clickInterceptor: p,
                        dataTest: v
                    }))
                }),
                D = o(48797),
                U = o(70627),
                q = o(26714),
                W = o(72568),
                $ = o(23793),
                J = o(53152),
                K = o(59367),
                Q = o(14404),
                G = o(91942),
                X = (0, y.default)("div", {
                    target: "e1ohimju0"
                })("position:relative;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;", function(e) {
                    var t = e.theme,
                        o = e.paddingTop;
                    return o && (0, G.IR)(o, function(e) {
                        return "margin-top: ".concat("number" == typeof e ? "".concat(e / 10, "rem") : e, ";")
                    }, t.media)
                }, ";", function(e) {
                    var t = e.theme,
                        o = e.paddingBottom;
                    return o && (0, G.IR)(o, function(e) {
                        return "margin-bottom: ".concat("number" == typeof e ? "".concat(e / 10, "rem") : e, ";")
                    }, t.media)
                }, ";"),
                Z = (0, y.default)(_.N_, {
                    target: "e1ohimju1"
                })("display:flex;width:100%;padding-bottom:0;"),
                ee = (0, y.default)(q._, {
                    target: "e1ohimju2"
                })("width:100%;background-color:", function(e) {
                    var t, o = e.theme;
                    return null == o ? void 0 : null === (t = o.colors) || void 0 === t ? void 0 : t.grey01
                }, ";"),
                et = (0, y.default)("div", {
                    target: "e1ohimju3"
                })(function(e) {
                    var t = e.ratio,
                        o = e.theme;
                    return "\n    width: 100%;\n    ".concat((0, G.IR)(t, function(e) {
                        return "number" == typeof e ? "padding-bottom: ".concat(100 / e, "%") : "viewport-height" === e ? "padding-bottom: 100vh" : ""
                    }, null == o ? void 0 : o.media), ";\n  ")
                }),
                eo = function(e) {
                    var t, o, n, i, l, r = e.theme;
                    return (0, g.css)("width:100%;max-height:100%;overflow:hidden;pointer-events:all;padding-left:1.2rem;padding-right:1.2rem;z-index:", null === (t = r.layers) || void 0 === t ? void 0 : t.foreground, ";transition:opacity 320ms cubic-bezier(0,0,0.2,1);", null === (o = r.media) || void 0 === o ? void 0 : o.gteMedium, "{padding-left:2rem;padding-right:2rem;transition:opacity 360ms cubic-bezier(0,0,0.2,1);}", null === (n = r.media) || void 0 === n ? void 0 : n.medium, "{max-width:calc(63.095vw + 5.6rem);}", null === (i = r.media) || void 0 === i ? void 0 : i.large, "{max-width:calc(46.744vw + 8rem);}", null === (l = r.media) || void 0 === l ? void 0 : l.extraLarge, "{max-width:calc(46.634vw + 8.8rem);padding-left:3.2rem;padding-right:3.2rem;}")
                },
                en = (0, y.default)(W.I, {
                    target: "e1ohimju4"
                })(eo),
                ei = (0, y.default)(J.U, {
                    target: "e1ohimju5"
                })(eo),
                el = function(e) {
                    var t = e.textPlacement,
                        o = e.alignment,
                        n = e.titleAlignment,
                        i = e.verticalAlignment,
                        l = {
                            order: "before" === t ? -1 : 0
                        };
                    return Object.assign(l, {
                        top: {
                            marginBottom: "auto"
                        },
                        center: {
                            marginTop: "auto",
                            marginBottom: "auto"
                        },
                        bottom: {
                            marginTop: "auto"
                        }
                    }[i], {
                        left: {
                            left: 0
                        },
                        center: {
                            left: 0,
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        right: {
                            left: 0,
                            marginLeft: "auto"
                        },
                        justify: {
                            left: 0
                        }
                    }[(void 0 === o ? "center" : o) || (void 0 === n ? "center" : n)]), "sticky" === t && Object.assign(l, {
                        position: "sticky"
                    }, {
                        top: {
                            top: 0
                        },
                        center: {
                            top: 0
                        },
                        bottom: {
                            bottom: 0,
                            alignSelf: "flex-end"
                        }
                    }[i]), l
                },
                er = (0, a.forwardRef)(function(e, t) {
                    var o, u, c = e.image,
                        s = e.openImageInNewTab,
                        v = void 0 !== s && s,
                        p = e.openTitleInNewTab,
                        f = e.video,
                        y = e.poster,
                        _ = e.posterAltText,
                        h = e.autoplay,
                        w = e.playOnHover,
                        b = e.muted,
                        k = e.loop,
                        x = e.live,
                        T = e.controls,
                        A = e.controlsColor,
                        C = e.controlsShadow,
                        S = (e.loaderColor, e.imageSizes),
                        B = void 0 === S ? "100vw" : S,
                        Y = e.alt,
                        P = e.url,
                        I = e.ratio,
                        z = e.textColor,
                        L = e.backgroundColor,
                        R = e.textPlacement,
                        N = void 0 === R ? "above" : R,
                        V = e.textShadow,
                        H = e.textShadowBlur,
                        F = void 0 === H ? 0 : H,
                        O = e.textShadowColor,
                        E = void 0 === O ? "black" : O,
                        q = e.mediaAlignment,
                        W = e.alignment,
                        J = void 0 === W ? "center" : W,
                        eo = e.titleAlignment,
                        er = void 0 === eo ? "center" : eo,
                        ea = e.verticalAlignment,
                        ed = void 0 === ea ? "center" : ea,
                        eu = e.callsToAction,
                        ec = e.callsToActionAlignment,
                        es = e.callsToActionStacking,
                        ev = e.callsToActionVariant,
                        em = e.callsToActionColour,
                        ep = e.paddingTop,
                        ef = e.paddingBottom,
                        eg = e.textVerticalSpacing,
                        ey = e.lazy,
                        e_ = void 0 === ey || ey,
                        eh = e.iframe,
                        ew = e.iframeAllowAttribute,
                        eb = e.copy,
                        ek = e.countdown,
                        ex = e.expressiveCopy,
                        eT = e.copyAlwaysVisible,
                        eA = e.id,
                        eC = e.videoStickyA11yControls,
                        eS = void 0 !== eC && eC,
                        eB = e.videoA11ySoundControls,
                        eY = void 0 !== eB && eB,
                        eP = e.videoPoster,
                        eM = e.videoPosterLoop,
                        eI = e.videoPosterMuted,
                        ez = e.videoPosterAutoplay,
                        eL = e.videoPosterControlsShadow,
                        ej = e.videoPosterPlayOnHover,
                        eR = e.videoPosterStickyA11yControls,
                        eN = e.videoPosterShowA11ySoundControls,
                        eV = (0, i._)(e, ["image", "openImageInNewTab", "openTitleInNewTab", "video", "poster", "posterAltText", "autoplay", "playOnHover", "muted", "loop", "live", "controls", "controlsColor", "controlsShadow", "loaderColor", "imageSizes", "alt", "url", "ratio", "textColor", "backgroundColor", "textPlacement", "textShadow", "textShadowBlur", "textShadowColor", "mediaAlignment", "alignment", "titleAlignment", "verticalAlignment", "callsToAction", "callsToActionAlignment", "callsToActionStacking", "callsToActionVariant", "callsToActionColour", "paddingTop", "paddingBottom", "textVerticalSpacing", "lazy", "iframe", "iframeAllowAttribute", "copy", "countdown", "expressiveCopy", "copyAlwaysVisible", "id", "videoStickyA11yControls", "videoA11ySoundControls", "videoPoster", "videoPosterLoop", "videoPosterMuted", "videoPosterAutoplay", "videoPosterControlsShadow", "videoPosterPlayOnHover", "videoPosterStickyA11yControls", "videoPosterShowA11ySoundControls"]),
                        eH = (0, m.F)(),
                        eF = eH.countryCode,
                        eO = eH.language,
                        eE = (0, a.useMemo)(function() {
                            return f && (!Array.isArray(f) || f.length > 0)
                        }, [f]),
                        eD = (0, l._)((0, a.useState)(!eE || eT), 2),
                        eU = eD[0],
                        eq = eD[1],
                        eW = (0, d.u)(),
                        e$ = (0, Q.s)(),
                        eJ = (0, K.x)({
                            enabled: "sticky" === N && "bottom" !== ed
                        }),
                        eK = (null == eb ? void 0 : eb.title) || (null == ex ? void 0 : ex.firstTitle) || (null == ex ? void 0 : ex.secondTitle) || "",
                        eQ = (0, a.useMemo)(function() {
                            return [el({
                                textPlacement: N,
                                alignment: J,
                                titleAlignment: er,
                                verticalAlignment: ed
                            }), V ? {
                                textShadow: "0px 0px ".concat(14 + F / 100 * 6, "px rgba(").concat("white" === E ? "255,255,255" : "0,0,0", " , ").concat(V / 100, ")")
                            } : void 0, "above" === N || "sticky" === N ? (0, g.css)("opacity:", eU ? 1 : 0, ";pointer-events:none;a,button{pointer-events:all;}") : void 0]
                        }, [J, eU, N, V, F, E, er, ed]),
                        eG = "above" === N || "sticky" === N ? null === (o = eW.colors) || void 0 === o ? void 0 : o.white : null === (u = eW.colors) || void 0 === u ? void 0 : u.black,
                        eX = "large" === (void 0 === eg ? "small" : eg) ? [60, 80, 100, 120] : [24, 20, 20, 32],
                        eZ = (0, a.useMemo)(function() {
                            var e = c && (!Array.isArray(c) || c.length > 0);
                            if (eh && eh.length > 0) return (0, r.Y)(U.v, {
                                ratio: I,
                                source: eh,
                                image: c,
                                title: Y,
                                fallbackText: Y,
                                alignment: q,
                                allowAttribute: ew,
                                countryCode: eF,
                                language: eO
                            });
                            if (e) {
                                var t = (0, r.Y)(ee, {
                                    sources: c,
                                    sizes: B,
                                    alt: Y,
                                    ratio: I,
                                    containment: "crop",
                                    alignment: q,
                                    lazy: e_,
                                    preload: !e_
                                });
                                if (P) {
                                    var o = null,
                                        n = function(e) {
                                            if (e) {
                                                var t, o, n = "string" == typeof e ? null === (t = (0, D.parse)(e)) || void 0 === t ? void 0 : t.pathname : null === (o = (0, D.parse)(Object.values(e)[0])) || void 0 === o ? void 0 : o.pathname;
                                                return null == n ? void 0 : n.split("/").slice(-1)[0]
                                            }
                                        };
                                    return o = Array.isArray(c) ? c.map(function(e) {
                                        return {
                                            component: "ContentCell",
                                            description: n(e) || Y || null,
                                            type: "image"
                                        }
                                    }) : {
                                        component: "ContentCell",
                                        description: n(c) || Y || null,
                                        type: "image"
                                    }, (0, r.Y)(Z, {
                                        href: P,
                                        metadata: o,
                                        onClick: function() {
                                            var e = n((0, G.Q8)(c, eW.media));
                                            e && e$.navigation.asset({
                                                id: e,
                                                component: "ContentCell",
                                                context: eK || Y || void 0,
                                                title: eK || Y || null,
                                                type: "image"
                                            })
                                        },
                                        target: v ? "_blank" : void 0,
                                        "aria-label": eK || Y,
                                        children: t
                                    })
                                }
                                return t
                            }
                            return eE && f ? (0, r.Y)($.L9, {
                                src: f,
                                url: P,
                                loop: k,
                                live: x,
                                lazy: e_,
                                muted: b,
                                ratio: I,
                                autoplay: h,
                                playOnHover: w,
                                color: A,
                                alignment: q,
                                poster: !eP && y ? (0, r.Y)($.nT, {
                                    sources: y,
                                    alt: _,
                                    lazy: e_,
                                    preload: !e_,
                                    onLoad: function() {
                                        eq(!0)
                                    }
                                }) : null,
                                controls: T ? (0, r.Y)($.H2, {
                                    shadow: C
                                }) : null,
                                a11yControls: (0, r.Y)($.bi, {
                                    color: A,
                                    shadow: C,
                                    sticky: eS ? "bottom" : void 0,
                                    muteUnmute: eY
                                }),
                                videoPoster: eP ? (0, r.Y)($.vT, {
                                    src: eP,
                                    lazy: e_,
                                    ratio: I,
                                    loop: eM,
                                    muted: eI,
                                    color: A,
                                    autoplay: ez,
                                    playOnHover: ej,
                                    a11yControls: (0, r.Y)($.x$, {
                                        shadow: eL,
                                        sticky: eR ? "bottom" : void 0,
                                        muteUnmute: eN
                                    }),
                                    onLoad: function() {
                                        eq(!0)
                                    }
                                }) : null,
                                onStart: function() {
                                    eT || eq(!1)
                                }
                            }) : (0, r.Y)(et, {
                                ratio: I,
                                css: {
                                    backgroundColor: L
                                }
                            })
                        }, [c, v, f, I, B, Y, q, e_, P, eW.media, e$.navigation, h, w, k, x, b, y, _, T, A, C, eE, eh, ew, L, eK, eT, eF, eO, eS, eY, eP, eM, eI, ez, eL, ej, eR, eN]),
                        e0 = {
                            alignment: J,
                            titleAlignment: er,
                            callsToAction: eu,
                            callsToActionAlignment: ec,
                            callsToActionStacking: es,
                            callsToActionColour: void 0 === em ? "blue" : em,
                            css: eQ
                        };
                    "sticky" === N || "above" === N ? (e0.ref = eJ, e0.paddingTop = [24, 20, 20, 32], e0.paddingBottom = [24, 20, 20, 32]) : (e0.paddingTop = "before" === N ? 0 : eX, e0.paddingBottom = "after" === N ? 0 : eX);
                    var e1 = null;
                    return eb ? e1 = (0, r.Y)(en, (0, n._)({
                        theme: eW,
                        callsToActionVariant: ev,
                        openLinkInNewTab: void 0 !== p && p
                    }, eb, e0)) : ex ? e1 = (0, r.Y)(ei, (0, n._)({
                        theme: eW
                    }, ex, e0)) : ek && (e1 = ek), (0, r.Y)(M.ec.Provider, {
                        value: eK || Y || null,
                        children: (0, r.FD)(X, (0, j._)((0, n._)({
                            id: eA,
                            ref: t,
                            "data-testid": "content-cell",
                            paddingTop: void 0 === ep ? 0 : ep,
                            paddingBottom: void 0 === ef ? [48, 48, 64, 64] : ef,
                            style: {
                                color: z || eG
                            }
                        }, eV), {
                            children: ["before" !== N && eZ, "sticky" === N || "above" === N ? (0, r.Y)("div", {
                                css: (0, g.css)("position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:flex-start;pointer-events:none;"),
                                children: e1
                            }) : e1, "before" === N && eZ]
                        }))
                    })
                });
            er.displayName = "ContentCell";
            var ea = o(3502),
                ed = o(91804),
                eu = {
                    Left: "left",
                    Right: "right",
                    Centre: "center",
                    Justify: "justify"
                },
                ec = {
                    Top: "top",
                    Middle: "center",
                    Bottom: "bottom"
                },
                es = {
                    Top: "center top",
                    Middle: "center center",
                    Bottom: "center bottom"
                },
                ev = {
                    Primary: "tertiary",
                    Secondary: "secondary"
                },
                em = {
                    Blue: "blue",
                    Black: "black"
                },
                ep = function(e) {
                    var t, o, p, f, g, y, _, h, w, b, k, x, T, A, C, S, B, Y, P, j, R, N, V, H, F, O, D, U, q, W, $, J, K, X, Z, ee, et, eo, en, ei, el, ep, ef, eg, ey, e_, eh = e.forwardedRef,
                        ew = (0, i._)(e, ["forwardedRef"]),
                        eb = ew.data,
                        ek = ew.css,
                        ex = (ew.openImageInNewTab, ew.openTitleInNewTab, ew.metadata),
                        eT = ew.columns,
                        eA = ew.offsetLeft,
                        eC = ew.offsetRight,
                        eS = ew.fullbleed,
                        eB = ew.disableBoxStyles,
                        eY = ew.overrides,
                        eP = (0, i._)(ew, ["data", "css", "openImageInNewTab", "openTitleInNewTab", "metadata", "columns", "offsetLeft", "offsetRight", "fullbleed", "disableBoxStyles", "overrides"]),
                        eM = (0, d.u)(),
                        eI = (0, u.bl)().addDemandForTransparency,
                        ez = (0, L.dJ)({
                            fullbleed: void 0 === eS || eS,
                            columns: eT,
                            offsetLeft: eA,
                            offsetRight: eC,
                            disabled: void 0 !== eB && eB
                        }),
                        eL = (0, Q.s)(),
                        ej = (0, m.F)().language,
                        eR = "ja" === ej ? "jp" : ej,
                        eN = function(e) {
                            if ((null == eb ? void 0 : eb.copy_type) === "Copy") {
                                var t = eb.copy.title_section,
                                    o = t.title,
                                    n = t.on_title,
                                    i = t.sub_title;
                                return o || e || i || n || null
                            }
                            if ((null == eb ? void 0 : eb.copy_type) === "Expressive Copy") {
                                var l = eb.expressive_copy.title_section,
                                    r = l.title_1,
                                    a = l.title_2,
                                    d = l.on_title;
                                return r || e || a || d || null
                            }
                            return null
                        };
                    (0, a.useEffect)(function() {
                        if (eb) {
                            var e = eb.cta,
                                t = eb.media.type,
                                o = eb.copy.title_section.title_link_url;
                            if ("Image" === t) {
                                var n = eb.media.image,
                                    i = n.large_asset,
                                    l = n.small_asset,
                                    r = n.alt_text,
                                    a = n.link_url,
                                    d = eN(r),
                                    u = null;
                                i === l ? u = l : (l || i) && (u = (0, G.Q8)([l, i].filter(Boolean), eM.media));
                                var c = {
                                    title: d,
                                    links: e.map(function(e) {
                                        return {
                                            text: e.link_copy,
                                            url: e.link_url,
                                            type: "text"
                                        }
                                    }),
                                    type: "image",
                                    id: u
                                };
                                o && c.links.push({
                                    text: d,
                                    url: o,
                                    type: "text"
                                }), a && c.links.push({
                                    text: r || d,
                                    url: a,
                                    type: "image"
                                }), eL.impression.asset(c)
                            }
                            if ("Video" === t) {
                                var s = eN(),
                                    v = eb.media.video,
                                    m = v.mobile_video_id,
                                    p = v.desktop_video_id,
                                    f = v.link_url,
                                    g = null;
                                p === m ? g = m : (p || m) && (g = (0, G.Q8)([m, p].filter(Boolean), eM.media));
                                var y = {
                                    title: s,
                                    links: e.map(function(e) {
                                        return {
                                            text: e.link_copy,
                                            url: e.link_url,
                                            type: "text"
                                        }
                                    }),
                                    type: "video",
                                    id: g
                                };
                                o && y.links.push({
                                    text: s,
                                    url: o,
                                    type: "text"
                                }), f && y.links.push({
                                    text: s,
                                    url: f,
                                    type: "video"
                                }), eL.impression.asset(y)
                            }
                        }
                    }, []), (0, a.useEffect)(function() {
                        var e, t, o, n;
                        if ((null == ex ? void 0 : ex.isFirstOnPage) && (null == eb ? void 0 : null === (e = eb.cell_configuration) || void 0 === e ? void 0 : e.transparent_nav)) return eI((null == eb ? void 0 : null === (t = eb.cell_configuration.transparent_nav_config) || void 0 === t ? void 0 : t.nav_colour) === "Light" ? null === (o = eM.colors) || void 0 === o ? void 0 : o.white : null === (n = eM.colors) || void 0 === n ? void 0 : n.black)
                    }, [eI, null == ex ? void 0 : ex.isFirstOnPage, null == eb ? void 0 : null === (o = eb.cell_configuration) || void 0 === o ? void 0 : null === (t = o.transparent_nav_config) || void 0 === t ? void 0 : t.nav_colour, null == eb ? void 0 : null === (p = eb.cell_configuration) || void 0 === p ? void 0 : p.transparent_nav, null === (f = eM.colors) || void 0 === f ? void 0 : f.white, null === (g = eM.colors) || void 0 === g ? void 0 : g.black]);
                    var eV = (0, a.useMemo)(function() {
                        var e, t, o, n, i;
                        return (null == eb ? void 0 : null === (e = eb.media) || void 0 === e ? void 0 : e.type) === "Video" ? (null == eb ? void 0 : null === (o = eb.media) || void 0 === o ? void 0 : o.video.video_loading_colour) === "Dark" ? null === (n = eM.colors) || void 0 === n ? void 0 : n.black : null === (i = eM.colors) || void 0 === i ? void 0 : i.white : (null == eb ? void 0 : null === (t = eb.media) || void 0 === t ? void 0 : t.background_colour) && (0, ea.d)(eb.media.background_colour)
                    }, [null == eb ? void 0 : null === (y = eb.media) || void 0 === y ? void 0 : y.background_colour, null == eb ? void 0 : null === (_ = eb.media) || void 0 === _ ? void 0 : _.type, null == eb ? void 0 : null === (h = eb.media) || void 0 === h ? void 0 : h.video.video_loading_colour, null === (w = eM.colors) || void 0 === w ? void 0 : w.black, null === (b = eM.colors) || void 0 === b ? void 0 : b.white]);
                    if (!eb) return null;
                    var eH = eb.copy_type,
                        eF = eb.countdown,
                        eO = eb.media,
                        eE = eO.type,
                        eD = eO.desktop_ratio,
                        eU = eO.desktop_height,
                        eq = eO.desktop_width,
                        eW = eO.mobile_ratio,
                        e$ = eO.mobile_width,
                        eJ = eO.mobile_height,
                        eK = eO.mobile_position,
                        eQ = eO.desktop_position,
                        eG = eO.video,
                        eX = eO.image,
                        eZ = eX.large_asset,
                        e0 = eX.small_asset,
                        e1 = eX.alt_text,
                        e2 = eX.link_url,
                        e4 = eO.iframe,
                        e6 = e4.desktop_url,
                        e5 = e4.mobile_url,
                        e3 = e4.fallback_desktop_asset,
                        e8 = e4.fallback_mobile_asset,
                        e7 = e4.fallback_text,
                        e9 = e4.allow_attribute,
                        te = eb.cell_configuration,
                        tt = te.copy_fixed,
                        to = te.copy_outside_media,
                        tn = te.copy_outside_media_config,
                        ti = te.copy_radial_gradient,
                        tl = te.copy_radial_gradient_config,
                        tr = te.copy_alignment,
                        ta = te.title_alignment,
                        td = te.cta_alignment,
                        tu = te.cta_style,
                        tc = te.cta_colour,
                        ts = te.copy_position,
                        tv = te.bottom_padding,
                        tm = te.stack_ctas_vertically_mobile,
                        tp = te.stack_ctas_vertically_desktop,
                        tf = te.copy_always_visible,
                        tg = eb.cta,
                        ty = eb.language_override;
                    if ("Copy" === eH) {
                        var t_ = eb.copy,
                            th = t_.title_section,
                            tw = th.on_title,
                            tb = th.title,
                            tk = th.sub_title,
                            tx = th.title_link_url,
                            tT = t_.body;
                        en = {
                            title: tb,
                            subtitle: tk,
                            ontitle: tw,
                            url: tx,
                            body: (null == tT ? void 0 : tT.body_copy) || ""
                        }
                    }
                    if ("Expressive Copy" === eH) {
                        var tA = eb.expressive_copy,
                            tC = tA.caption,
                            tS = tA.subheading,
                            tB = tA.body,
                            tY = tB.copy_1,
                            tP = tB.copy_2,
                            tM = tB.copy_3,
                            tI = tB.mobile_override_copy_1,
                            tz = tB.mobile_override_copy_3,
                            tL = tA.title_section,
                            tj = tL.title_1,
                            tR = tL.title_2,
                            tN = tL.on_title;
                        ei = {
                            firstBody: tY,
                            secondBody: tP,
                            thirdBody: tM,
                            firstTitle: tj,
                            secondTitle: tR,
                            mobileFirstBody: tI,
                            mobileThirdBody: tz,
                            mobileFirstTitle: tL.mobile_override_title_1,
                            mobileSecondTitle: tL.mobile_override_title_2,
                            ontitle: tN,
                            caption: tC,
                            subheading: tS
                        }
                    }
                    var tV = null !== (el = null == eY ? void 0 : eY.ratio) && void 0 !== el ? el : [{
                            ratio: eW,
                            customWidth: e$,
                            customHeight: eJ
                        }, {
                            ratio: eD,
                            customWidth: eq,
                            customHeight: eU
                        }].map(function(e) {
                            var t = e.ratio,
                                o = e.customWidth,
                                n = e.customHeight;
                            if (t) {
                                if ("Custom" === t && "number" == typeof o && "number" == typeof n) return o / n;
                                if ("100% Viewport Height" === t) return "viewport-height";
                                var i = (0, l._)(t.split(":").map(Number), 2);
                                return i[0] / i[1]
                            }
                        }),
                        tH = (0, ed.Kv)([{
                            id: e0 || eZ || "",
                            widths: [200, 375, 420, 475, 600, 800, 1e3, 1200]
                        }, {
                            id: eZ || e0 || "",
                            widths: [340, 480, 640, 950, 1024, 1280, 1366, 1440, 1920, 2200]
                        }]),
                        tF = eG.poster_frame ? (0, ed.Kv)([{
                            id: eG.poster_frame.mobile_image || eG.poster_frame.desktop_image || "",
                            widths: [320, 375, 420, 475, 600, 768, 850, 1e3, 1200]
                        }, {
                            id: eG.poster_frame.desktop_image || eG.poster_frame.mobile_image || "",
                            widths: [1024, 1280, 1366, 1440, 1920, 2200]
                        }]) : void 0,
                        tO = (0, ed.Kv)([{
                            id: e8 || e3 || "",
                            widths: [320, 375, 420, 475, 600, 768, 850, 1023]
                        }, {
                            id: e3 || e8 || "",
                            widths: [1024, 1280, 1366, 1440, 1920, 2200]
                        }]),
                        tE = [eK || eQ || "Middle", eQ || eK || "Middle"].map(function(e) {
                            return e ? es[e] : void 0
                        }),
                        tD = "above";

                    function tU(e) {
                        return function() {
                            return eL.navigation.generic({
                                component: "CopyCell",
                                type: "text",
                                description: e || null
                            })
                        }
                    }
                    tt && (tD = "sticky"), to && (tD = "Below" === tn.copy_placement ? "after" : "before");
                    var tq = function() {
                        if (Array.isArray(tg)) return tg.map(function(e, t) {
                            switch (e.link_type) {
                                case "modal":
                                    var o, n, i, l;
                                    return (0, r.Y)(z.RA, {
                                        index: t,
                                        variant: ev[tu],
                                        text: e.link_copy,
                                        modalUid: null === (n = e.link_reference) || void 0 === n ? void 0 : null === (o = n[0]) || void 0 === o ? void 0 : o.uid,
                                        modalContentType: null === (l = e.link_reference) || void 0 === l ? void 0 : null === (i = l[0]) || void 0 === i ? void 0 : i._content_type_uid
                                    });
                                case "AR":
                                    return (0, r.Y)(E, {
                                        data: eb,
                                        cta: e
                                    });
                                default:
                                    return "secondary" === ev[tu] ? (0, r.Y)(c.$, {
                                        asChild: !0,
                                        variant: "secondary",
                                        children: (0, r.Y)(v.B, {
                                            href: e.link_url,
                                            target: "url" === e.link_type ? void 0 : "_blank",
                                            onClick: tU(e.link_copy),
                                            children: e.link_copy
                                        })
                                    }) : (0, r.Y)(s.N, {
                                        href: e.link_url,
                                        target: "url" === e.link_type ? void 0 : "_blank",
                                        onClick: tU(e.link_copy),
                                        variant: "tertiary",
                                        children: e.link_copy
                                    })
                            }
                        }).filter(Boolean)
                    }();
                    ep = (null == eY ? void 0 : eY.paddingBottom) || void 0 !== (null == eY ? void 0 : eY.paddingBottom) ? null == eY ? void 0 : eY.paddingBottom : tv ? [24, 20, 20, 32] : 0;
                    var tW = "after" === tD || "before" === tD;
                    null != ep && tW && (ep = [48, 48, 64, 64]);
                    var t$ = null;
                    "iFrame" === eE && (t$ = e5 && e6 && e5 !== e6 ? [e5, e6] : [null != e5 ? e5 : e6]);
                    var tJ = Array.isArray(eF) && eF.length > 0 ? (0, r.Y)(I, (0, n._)({}, eF[0])) : void 0;
                    return (0, r.Y)(M.ec.Provider, {
                        value: "content cell",
                        children: (0, r.Y)(er, (0, n._)({
                            ref: eh,
                            css: [ek, ez],
                            image: "iFrame" === eE || "Image" === eE ? tO || tH : void 0,
                            video: "Video" === eE ? [eG.mobile_video_id, eG.desktop_video_id] : void 0,
                            poster: tF,
                            posterAltText: null === (k = eG.poster_frame) || void 0 === k ? void 0 : k.alt_text,
                            autoplay: "Autoplay" === eG.play_type || "Play when in Viewport" === eG.play_type,
                            playOnHover: "Hover to Play" === eG.play_type,
                            muted: eG.mute,
                            loop: eG.loop,
                            live: eG.live_video,
                            controls: eG.display_controls,
                            loaderColor: "Dark" === eG.video_loading_colour ? "white" : "black",
                            controlsShadow: Math.min(100, Math.max(0, eG.controls_gradient_opacity || 0)),
                            controlsColor: "Black" === eG.controls_colour ? "black" : "white",
                            alt: e7 || e1,
                            url: "Video" === eE && eG.link_url || e2,
                            lazy: !(null == ex ? void 0 : ex.isFirstMediaComponentOnPage),
                            ratio: tV,
                            textPlacement: tD,
                            textColor: (null == eb ? void 0 : eb.cell_configuration.copy_colour) === "White" ? null === (x = eM.colors) || void 0 === x ? void 0 : x.white : null === (T = eM.colors) || void 0 === T ? void 0 : T.black,
                            textShadow: Math.max(0, Math.min(100, ti && (null == tl ? void 0 : tl.text_shadow) || 0)),
                            textShadowBlur: Math.max(0, Math.min(100, ti && (null == tl ? void 0 : tl.text_blur) || 0)),
                            textShadowColor: ti && (null == tl ? void 0 : tl.gradient_colour) === "White" ? "white" : "black",
                            backgroundColor: eV,
                            callsToAction: tq,
                            alignment: eu[null !== (ef = null === (A = ty[eR]) || void 0 === A ? void 0 : A.copy_alignment) && void 0 !== ef ? ef : tr],
                            verticalAlignment: ec[ts],
                            titleAlignment: eu[null !== (eg = null === (C = ty[eR]) || void 0 === C ? void 0 : C.title_alignment) && void 0 !== eg ? eg : ta],
                            callsToActionAlignment: eu[null !== (ey = null === (S = ty[eR]) || void 0 === S ? void 0 : S.cta_alignment) && void 0 !== ey ? ey : td],
                            mediaAlignment: tE,
                            callsToActionVariant: ev[tu],
                            callsToActionStacking: [tm ? "vertical" : "natural", tp ? "vertical" : "natural"],
                            callsToActionColour: em[tc || "Blue"],
                            paddingBottom: ep,
                            textVerticalSpacing: (null == tn ? void 0 : tn.copy_padding) === "Big" ? "large" : "small",
                            iframe: t$ || void 0,
                            iframeAllowAttribute: void 0 === e9 ? "fullscreen; gyroscope; accelerometer; camera *; autoplay *; web-share" : e9,
                            countdown: tJ,
                            copy: en,
                            expressiveCopy: ei,
                            copyAlwaysVisible: !!tf,
                            openImageInNewTab: null === (Y = eb.media) || void 0 === Y ? void 0 : null === (B = Y.image) || void 0 === B ? void 0 : B.open_link_in_new_tab,
                            openTitleInNewTab: null === (j = eb.copy) || void 0 === j ? void 0 : null === (P = j.title_section) || void 0 === P ? void 0 : P.open_link_in_new_tab,
                            videoStickyA11yControls: null == eb ? void 0 : null === (N = eb.media) || void 0 === N ? void 0 : null === (R = N.video) || void 0 === R ? void 0 : R.sticky_a11y_controls,
                            videoA11ySoundControls: null == eb ? void 0 : null === (H = eb.media) || void 0 === H ? void 0 : null === (V = H.video) || void 0 === V ? void 0 : V.show_a11y_sound_controls,
                            videoPoster: (null === (F = eG.poster_frame) || void 0 === F ? void 0 : F.mobile_video_id) || (null === (O = eG.poster_frame) || void 0 === O ? void 0 : O.desktop_video_id) ? [(null === (D = eG.poster_frame) || void 0 === D ? void 0 : D.mobile_video_id) || (null === (U = eG.poster_frame) || void 0 === U ? void 0 : U.desktop_video_id), (null === (q = eG.poster_frame) || void 0 === q ? void 0 : q.desktop_video_id) || (null === (W = eG.poster_frame) || void 0 === W ? void 0 : W.mobile_video_id)] : void 0,
                            videoPosterLoop: null === ($ = eG.poster_frame) || void 0 === $ ? void 0 : $.loop,
                            videoPosterMuted: null === (J = eG.poster_frame) || void 0 === J ? void 0 : J.mute,
                            videoPosterAutoplay: (null === (K = eG.poster_frame) || void 0 === K ? void 0 : K.play_type) === "Autoplay" || (null === (X = eG.poster_frame) || void 0 === X ? void 0 : X.play_type) === "Play when in Viewport",
                            videoPosterControlsShadow: null !== (e_ = null === (Z = eG.poster_frame) || void 0 === Z ? void 0 : Z.video_overlay_opacity) && void 0 !== e_ ? e_ : void 0,
                            videoPosterPlayOnHover: (null === (ee = eG.poster_frame) || void 0 === ee ? void 0 : ee.play_type) === "Hover to Play",
                            videoPosterStickyA11yControls: null === (et = eG.poster_frame) || void 0 === et ? void 0 : et.sticky_a11y_controls,
                            videoPosterShowA11ySoundControls: null === (eo = eG.poster_frame) || void 0 === eo ? void 0 : eo.show_a11y_sound_controls
                        }, eP))
                    })
                }
        },
        53152: (e, t, o) => {
            o.d(t, {
                U: () => S
            });
            var n = o(50467),
                i = o(71893),
                l = o(55456),
                r = o(4418),
                a = o(2445),
                d = o(69815),
                u = o(96540),
                c = o(95985),
                s = o(83303),
                v = o(65636),
                m = o(91942),
                p = (0, d.default)("article", {
                    target: "e4szjte0"
                })("display:flex;flex-direction:column;align-items:stretch;text-align:", function(e) {
                    return e.alignment
                }, ";overflow:hidden;", function(e) {
                    var t, o, n, i = e.theme;
                    return t = e.paddingTop, n = "", (0, m.W8)(t, "number") ? n = (0, m.IR)(t, function(e) {
                        return "\n      ".concat("number" == typeof e ? "padding-top: ".concat(e / 10, "rem") : "", ";\n      ")
                    }, i.media) : (void 0 === t || "string" == typeof t) && (n = "\n      padding-top: ".concat({
                        none: "0",
                        small: "5.2rem",
                        large: "9.6rem"
                    }[t || "none"], ";\n\n      ").concat(null === (o = i.media) || void 0 === o ? void 0 : o.extraLarge, " {\n        padding-top: ").concat({
                        none: "0",
                        small: "9.6rem",
                        large: "12.4rem"
                    }[t || "none"], ";\n      }\n    ")), n
                }, " ", function(e) {
                    var t = e.theme,
                        o = e.paddingBottom;
                    return (0, m.IR)(o, function(e) {
                        return "\n        ".concat(void 0 !== e ? "padding-bottom: ".concat(e / 10, "rem") : "", ";\n        ").concat(e ? "& > *:last-child { margin-bottom: 0; }" : "", "\n        ")
                    }, t.media)
                }, ";em{font-style:italic;}u{text-decoration:none;padding-bottom:0;}"),
                f = function(e) {
                    var t, o, n;
                    return "\n  a {\n    color: ".concat((null === (t = e.colors) || void 0 === t ? void 0 : t.accent) || "inherit", ";\n    text-decoration: none;\n    padding-bottom: 0;\n\n    &:active {\n      color: ").concat((null === (o = e.colors) || void 0 === o ? void 0 : o.accent) || "inherit", ";\n    }\n\n    &:hover {\n      color: ").concat((null === (n = e.colors) || void 0 === n ? void 0 : n.accent02) || "inherit", ";\n    }\n  }\n")
                },
                g = (0, d.default)("h3", {
                    target: "e4szjte1"
                })(function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.titleSmall
                }, ";text-align:", function(e) {
                    var t = e.alignment;
                    return void 0 === t ? "center" : t
                }, ";", function(e) {
                    return f(e.theme)
                }, ";margin-bottom:1.2rem;"),
                y = (0, d.default)("h1", {
                    target: "e4szjte2"
                })(function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.expressiveLarge
                }, ";text-align:", function(e) {
                    var t = e.alignment;
                    return void 0 === t ? "center" : t
                }, ";", function(e) {
                    return f(e.theme)
                }, ";", function(e) {
                    var t = e.marginBottom,
                        o = e.theme;
                    return void 0 !== t && (0, m.IR)(t, function(e) {
                        return "margin-bottom: ".concat(e / 10, "rem;")
                    }, o.media)
                }),
                _ = (0, d.default)("h2", {
                    target: "e4szjte3"
                })(function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.expressiveMedium
                }, ";text-align:", function(e) {
                    var t = e.alignment;
                    return void 0 === t ? "center" : t
                }, ";margin-bottom:1.6rem;", function(e) {
                    return f(e.theme)
                }, ";"),
                h = (0, d.default)("div", {
                    target: "e4szjte4"
                })("margin-bottom:", function(e) {
                    return "tertiary" === e.variant ? "2rem" : "1.6rem"
                }, ";", function(e) {
                    var t, o, n, i = e.variant,
                        l = e.theme;
                    return "primary" === i ? null === (o = l.typography) || void 0 === o ? void 0 : o.titleMedium : "secondary" === i ? null === (n = l.typography) || void 0 === n ? void 0 : n.bodyLarge500 : null === (t = l.typography) || void 0 === t ? void 0 : t.bodyLarge
                }, " ", function(e) {
                    var t = e.variant,
                        o = e.theme;
                    return "primary" === t ? f(o) : void 0
                }),
                w = (0, d.default)("h4", {
                    target: "e4szjte5"
                })("margin-bottom:1.6rem;", function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.bodyMedium500
                }, ";"),
                b = (0, d.default)("span", {
                    target: "e4szjte6"
                })("margin-bottom:2rem;", function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.bodyMedium
                }, ";"),
                k = (0, d.default)("ul", {
                    target: "e4szjte7"
                })("display:flex;flex-wrap:wrap;margin:0;", function(e) {
                    var t;
                    return null === (t = e.theme.typography) || void 0 === t ? void 0 : t.bodyLarge
                }, ";", function(e) {
                    var t = e.theme,
                        o = e.stacking,
                        n = e.gap,
                        i = e.alignment,
                        l = void 0 === i ? "center" : i;
                    return (0, m.IR)(o, function(e) {
                        var t = {
                            left: "flex-start",
                            right: "flex-end",
                            center: "center",
                            justify: "flex-start"
                        }[l];
                        return "vertical" === e ? "\n        flex-direction: column;\n        align-items: ".concat(t, ";\n        gap: ").concat(n, "rem;\n      ") : "justify-content: ".concat(t, "; gap: 2rem;")
                    }, t.media)
                }, ";a,button{", function(e) {
                    return e.color
                }, ";}"),
                x = (0, d.default)("li", {
                    target: "e4szjte8"
                })("display:flex;align-items:center;justify-content:center;margin:0;padding:", function(e) {
                    return "tertiary" === e.variant ? "0.4rem 0" : 0
                }, ";"),
                T = function(e) {
                    var t;
                    return (0, n._)({}, (null === (t = e.media) || void 0 === t ? void 0 : t.small) || "", {
                        display: "none"
                    })
                },
                A = function(e) {
                    var t;
                    return (0, n._)({}, (null === (t = e.media) || void 0 === t ? void 0 : t.gteMedium) || "", {
                        display: "none"
                    })
                },
                C = {
                    a: function(e, t) {
                        return (0, a.Y)(v.N, (0, l._)((0, i._)({
                            variant: "primary"
                        }, e), {
                            children: t
                        }))
                    }
                },
                S = (0, u.forwardRef)(function(e, t) {
                    var o, n = e.ontitle,
                        d = e.firstTitle,
                        v = e.secondTitle,
                        m = e.firstBody,
                        f = e.secondBody,
                        S = e.thirdBody,
                        B = e.firstBodyVariant,
                        Y = void 0 === B ? "primary" : B,
                        P = e.secondBodyVariant,
                        M = e.thirdBodyVariant,
                        I = void 0 === M ? "tertiary" : M,
                        z = e.subheading,
                        L = e.caption,
                        j = e.callsToAction,
                        R = e.paddingTop,
                        N = e.paddingBottom,
                        V = e.alignment,
                        H = e.titleAlignment,
                        F = e.callsToActionAlignment,
                        O = e.callsToActionStacking,
                        E = e.callsToActionColour,
                        D = e.mobileFirstBody,
                        U = e.mobileThirdBody,
                        q = e.mobileFirstTitle,
                        W = e.mobileSecondTitle,
                        $ = (0, r._)(e, ["ontitle", "firstTitle", "secondTitle", "firstBody", "secondBody", "thirdBody", "firstBodyVariant", "secondBodyVariant", "thirdBodyVariant", "subheading", "caption", "callsToAction", "paddingTop", "paddingBottom", "alignment", "titleAlignment", "callsToActionAlignment", "callsToActionStacking", "callsToActionColour", "mobileFirstBody", "mobileThirdBody", "mobileFirstTitle", "mobileSecondTitle"]),
                        J = (0, s.vw)(n),
                        K = (0, s.vw)(d),
                        Q = (0, s.vw)(v),
                        G = (0, s.vw)(D),
                        X = (0, s.vw)(q),
                        Z = (0, s.vw)(W),
                        ee = (0, s.vw)(U),
                        et = (0, s.vw)(m),
                        eo = (0, s.vw)(f),
                        en = (0, s.vw)(S),
                        ei = (0, s.vw)(z),
                        el = (0, s.vw)(L),
                        er = (0, c.htmlToReact)(eo, C),
                        ea = (0, c.htmlToReact)((0, s.vw)(en), C),
                        ed = (0, c.htmlToReact)((0, s.vw)(ee), C),
                        eu = (0, c.htmlToReact)((0, s.vw)(ei), C),
                        ec = (0, c.htmlToReact)((0, s.vw)(el), C),
                        es = Array.isArray(j) && j.length > 0,
                        ev = (0, u.useMemo)(function() {
                            if (K) return 16
                        }, [K]);
                    return (0, a.FD)(p, (0, l._)((0, i._)({
                        ref: t,
                        alignment: void 0 === V ? "center" : V,
                        paddingTop: R,
                        paddingBottom: N
                    }, $), {
                        children: [J ? (0, a.Y)(g, {
                            alignment: H,
                            dangerouslySetInnerHTML: {
                                __html: J
                            }
                        }) : null, K ? (0, a.Y)(y, {
                            marginBottom: ev,
                            alignment: H,
                            dangerouslySetInnerHTML: {
                                __html: K
                            },
                            css: X ? T : void 0
                        }) : null, X ? (0, a.Y)(y, {
                            alignment: H,
                            marginBottom: ev,
                            dangerouslySetInnerHTML: {
                                __html: X
                            },
                            css: A
                        }) : null, Q ? (0, a.Y)(_, {
                            alignment: H,
                            dangerouslySetInnerHTML: {
                                __html: Q
                            },
                            css: Z ? T : void 0
                        }) : null, Z ? (0, a.Y)(_, {
                            alignment: H,
                            dangerouslySetInnerHTML: {
                                __html: Z
                            },
                            css: A
                        }) : null, et ? (0, a.Y)(h, {
                            variant: Y,
                            dangerouslySetInnerHTML: {
                                __html: et
                            },
                            css: G ? T : void 0
                        }) : null, G ? (0, a.Y)(h, {
                            variant: Y,
                            dangerouslySetInnerHTML: {
                                __html: G
                            },
                            css: A
                        }) : null, eo ? (0, a.Y)(h, {
                            variant: void 0 === P ? "secondary" : P,
                            children: er
                        }) : null, en ? (0, a.Y)(h, {
                            variant: I,
                            css: ee ? T : void 0,
                            children: ea
                        }) : null, ee ? (0, a.Y)(h, {
                            variant: I,
                            css: A,
                            children: ed
                        }) : null, ei ? (0, a.Y)(w, {
                            children: eu
                        }) : null, el ? (0, a.Y)(b, {
                            children: ec
                        }) : null, es ? (0, a.Y)(k, {
                            stacking: O,
                            alignment: F,
                            color: E,
                            gap: (null === (o = j[0]) || void 0 === o ? void 0 : o.props.variant) === "tertiary" ? .8 : 2,
                            children: null == j ? void 0 : j.map(function(e, t) {
                                return (0, a.Y)(x, {
                                    variant: e.props.variant,
                                    children: e
                                }, t)
                            })
                        }) : null]
                    }))
                });
            S.displayName = "ExpressiveCopyCell"
        },
        59367: (e, t, o) => {
            o.d(t, {
                x: () => r
            });
            var n = o(96540),
                i = o(12228),
                l = o(73700);

            function r(e) {
                var t = e.enabled,
                    o = void 0 !== t && t,
                    r = (0, i.useViewport)().small,
                    a = (0, n.useRef)(),
                    d = (0, n.useRef)(),
                    u = (0, n.useRef)(0),
                    c = (0, n.useRef)(!0),
                    s = (0, n.useMemo)(function() {
                        return (0, l.n)(250, function() {
                            if (a.current) {
                                var e = Math.max(0, null !== (n = window.scrollY) && void 0 !== n ? n : window.pageYOffset),
                                    t = e >= u.current;
                                if (t && !c.current) {
                                    c.current = !0;
                                    var o = r ? 270 : 320;
                                    a.current.style.transition = "top ".concat(o, "ms cubic-bezier(0.4, 0.0, 0.6, 1.0)"), a.current.style.top = "0px"
                                }
                                if (!t && c.current) {
                                    c.current = !1;
                                    var n, i, l, d, s = null !== (d = null === (l = document) || void 0 === l ? void 0 : null === (i = l.getElementsByTagName("header")[0]) || void 0 === i ? void 0 : i.offsetHeight) && void 0 !== d ? d : 0,
                                        v = r ? 270 : 320;
                                    a.current.style.transition = "top ".concat(v, "ms cubic-bezier(0.4, 0.0, 0.6, 1.0)"), a.current.style.top = "".concat(s, "px")
                                }
                                u.current = e
                            }
                        })
                    }, [r]);
                return (0, n.useEffect)(function() {
                    if (o && !d.current) {
                        var e;
                        window.addEventListener("scroll", s), u.current = null !== (e = window.scrollY) && void 0 !== e ? e : window.pageYOffset, d.current = s, s()
                    }
                    return function() {
                        var e = d.current;
                        e && (window.removeEventListener("scroll", e), d.current = void 0)
                    }
                }, [o, s]), (0, n.useCallback)(function(e) {
                    if (e && (a.current = e, o)) {
                        var t;
                        u.current = null !== (t = window.scrollY) && void 0 !== t ? t : window.pageYOffset
                    }
                }, [o])
            }
        },
        4029: (e, t, o) => {
            o.d(t, {
                O$: () => s,
                bJ: () => u,
                qm: () => c,
                qn: () => d
            });
            var n = o(50467),
                i = o(71893),
                l = o(55456),
                r = o(48797),
                a = o.n(r),
                d = function(e) {
                    return a().parse(window.location.href, !0).query[e]
                },
                u = function(e, t) {
                    var o = a().parse(window.location.href, !0),
                        r = a().format((0, l._)((0, i._)({}, o), {
                            search: void 0,
                            query: (0, l._)((0, i._)({}, o.query), (0, n._)({}, e, t))
                        }));
                    window.history.pushState(null, document.title, r)
                },
                c = function(e) {
                    var t = a().parse(window.location.href, !0);
                    delete t.query[e];
                    var o = a().format(a().format((0, l._)((0, i._)({}, t), {
                        search: void 0
                    })));
                    window.history.pushState(null, document.title, o)
                },
                s = function(e, t) {
                    var o = a().parse(e, !0),
                        n = t.reduce(function(e, t) {
                            return e[t.key] = t.value, e
                        }, {});
                    return a().format((0, l._)((0, i._)({}, o), {
                        search: void 0,
                        query: (0, i._)({}, o.query, n)
                    }))
                }
        }
    }
]);