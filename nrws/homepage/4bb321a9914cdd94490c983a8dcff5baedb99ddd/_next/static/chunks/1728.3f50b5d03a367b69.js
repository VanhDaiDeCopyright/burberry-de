"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1728], {
        9347: (t, e, o) => {
            o.r(e), o.d(e, {
                ContentCellAdapter: () => K
            });
            var i = o(71893),
                l = o(4418),
                n = o(93038),
                a = o(2445),
                r = o(96540),
                d = o(82393),
                c = o(66797),
                u = o(3502),
                s = o(55456),
                v = o(84577),
                m = o(69815),
                p = o(17437),
                g = o(48797),
                _ = o(70627),
                f = o(32618),
                y = o(26714),
                h = o(23793),
                b = o(72568),
                k = o(59367),
                x = o(14404),
                w = o(32738),
                A = o(41432),
                C = o(91942);

            function T() {
                var t = (0, v._)(["\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n\n    ", ";\n\n    ", ";\n  "]);
                return T = function() {
                    return t
                }, t
            }

            function S() {
                var t = (0, v._)(["\n    width: 100%;\n    max-height: 100%;\n    overflow: hidden;\n    pointer-events: all;\n    padding-left: 1.6rem;\n    padding-right: 1.6rem;\n    z-index: ", ";\n    transition: opacity 320ms cubic-bezier(0, 0, 0.2, 1);\n\n    ", " {\n      transition: opacity 360ms cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    ", " {\n      max-width: calc(63.095vw + 5.6rem);\n      padding-left: 2.8rem;\n      padding-right: 2.8rem;\n    }\n\n    ", " {\n      max-width: calc(46.744vw + 8rem);\n      padding-left: 4rem;\n      padding-right: 4rem;\n    }\n\n    ", " {\n      max-width: calc(46.634vw + 8.8rem);\n      padding-left: 4.4rem;\n      padding-right: 4.4rem;\n    }\n  "]);
                return S = function() {
                    return t
                }, t
            }
            var B = (0, m.default)("div", {
                    target: "eehltt00"
                })(function(t) {
                    var e = t.theme,
                        o = t.paddingTop,
                        i = t.paddingBottom;
                    return (0, p.css)(T(), o && (0, C.IR)(o, function(t) {
                        return "margin-top: ".concat("number" == typeof t ? "".concat(t / 10, "rem") : t, ";")
                    }, e.media), i && (0, C.IR)(i, function(t) {
                        return "margin-bottom: ".concat("number" == typeof t ? "".concat(t / 10, "rem") : t, ";")
                    }, e.media))
                }),
                Y = (0, m.default)(f.N_, {
                    target: "eehltt01"
                })("display:flex;width:100%;padding-bottom:0;min-height:0.1rem;"),
                z = (0, m.default)(y._, {
                    target: "eehltt02"
                })("width:100%;background-color:", function(t) {
                    var e, o = t.theme;
                    return null == o ? void 0 : null === (e = o.colors) || void 0 === e ? void 0 : e.grey01
                }, ";"),
                M = (0, m.default)("div", {
                    target: "eehltt03"
                })(function(t) {
                    var e = t.ratio,
                        o = t.theme;
                    return "\n    width: 100%;\n    ".concat((0, C.IR)(e, function(t) {
                        return "number" == typeof t ? "padding-bottom: ".concat(100 / t, "%") : "viewport-height" === t ? "padding-bottom: 100vh" : ""
                    }, null == o ? void 0 : o.media), ";\n  ")
                }),
                V = (0, m.default)(b.I, {
                    target: "eehltt04"
                })(function(t) {
                    var e, o, i, l, n, a = t.theme;
                    return (0, p.css)(S(), null === (e = a.layers) || void 0 === e ? void 0 : e.foreground, null === (o = a.media) || void 0 === o ? void 0 : o.gteMedium, null === (i = a.media) || void 0 === i ? void 0 : i.medium, null === (l = a.media) || void 0 === l ? void 0 : l.large, null === (n = a.media) || void 0 === n ? void 0 : n.extraLarge)
                }),
                P = function(t) {
                    var e = t.textPlacement,
                        o = t.alignment,
                        i = t.titleAlignment,
                        l = t.verticalAlignment,
                        n = {
                            order: "before" === e ? -1 : 0
                        };
                    return Object.assign(n, {
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
                    }[l], {
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
                    }[(void 0 === o ? "center" : o) || (void 0 === i ? "center" : i)]), "sticky" === e && Object.assign(n, {
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
                    }[l]), n
                },
                R = (0, r.forwardRef)(function(t, e) {
                    var o, d, u = t.image,
                        v = t.video,
                        m = t.poster,
                        f = t.autoplay,
                        y = t.playOnHover,
                        b = t.muted,
                        T = t.loop,
                        S = t.live,
                        R = t.controls,
                        H = t.controlsColor,
                        L = t.controlsShadow,
                        O = (t.loaderColor, t.imageSizes),
                        F = void 0 === O ? "100vw" : O,
                        j = t.alt,
                        I = t.url,
                        N = t.titleUrl,
                        W = t.ratio,
                        D = t.title,
                        E = t.subtitle,
                        U = t.ontitle,
                        K = t.body,
                        Q = t.textColor,
                        J = t.backgroundColor,
                        $ = t.textPlacement,
                        q = void 0 === $ ? "above" : $,
                        G = t.textShadow,
                        X = t.textShadowBlur,
                        Z = void 0 === X ? 0 : X,
                        tt = t.textShadowColor,
                        te = void 0 === tt ? "black" : tt,
                        to = t.mediaAlignment,
                        ti = t.alignment,
                        tl = void 0 === ti ? "center" : ti,
                        tn = t.titleAlignment,
                        ta = void 0 === tn ? "center" : tn,
                        tr = t.verticalAlignment,
                        td = void 0 === tr ? "center" : tr,
                        tc = t.callsToAction,
                        tu = t.callsToActionAlignment,
                        ts = t.callsToActionStacking,
                        tv = t.callsToActionVariant,
                        tm = t.paddingTop,
                        tp = t.paddingBottom,
                        tg = t.textVerticalSpacing,
                        t_ = t.lazy,
                        tf = void 0 === t_ || t_,
                        ty = t.iframe,
                        th = (0, l._)(t, ["image", "video", "poster", "autoplay", "playOnHover", "muted", "loop", "live", "controls", "controlsColor", "controlsShadow", "loaderColor", "imageSizes", "alt", "url", "titleUrl", "ratio", "title", "subtitle", "ontitle", "body", "textColor", "backgroundColor", "textPlacement", "textShadow", "textShadowBlur", "textShadowColor", "mediaAlignment", "alignment", "titleAlignment", "verticalAlignment", "callsToAction", "callsToActionAlignment", "callsToActionStacking", "callsToActionVariant", "paddingTop", "paddingBottom", "textVerticalSpacing", "lazy", "iframe"]),
                        tb = (0, A.F)(),
                        tk = tb.countryCode,
                        tx = tb.language,
                        tw = (0, r.useMemo)(function() {
                            return v && (!Array.isArray(v) || v.length > 0)
                        }, [v]),
                        tA = (0, n._)((0, r.useState)(!tw), 2),
                        tC = tA[0],
                        tT = tA[1],
                        tS = (0, c.u)(),
                        tB = (0, x.s)(),
                        tY = (0, k.x)({
                            enabled: "sticky" === q && "bottom" !== td
                        }),
                        tz = (0, r.useMemo)(function() {
                            return [P({
                                textPlacement: q,
                                alignment: tl,
                                titleAlignment: ta,
                                verticalAlignment: td
                            }), G ? {
                                textShadow: "0px 0px ".concat(14 + Z / 100 * 6, "px rgba(").concat("white" === te ? "255,255,255" : "0,0,0", " , ").concat(G / 100, ")")
                            } : void 0, "above" === q || "sticky" === q ? (0, p.css)("opacity:", tC ? 1 : 0, ";pointer-events:none;a,button{pointer-events:all;}") : void 0]
                        }, [tl, tC, q, G, Z, te, ta, td]),
                        tM = "above" === q || "sticky" === q ? null === (o = tS.colors) || void 0 === o ? void 0 : o.white : null === (d = tS.colors) || void 0 === d ? void 0 : d.black,
                        tV = "large" === (void 0 === tg ? "small" : tg) ? [32, 28, 40, 44] : [18, 18, 18, 28],
                        tP = (0, r.useMemo)(function() {
                            var t = u && (!Array.isArray(u) || u.length > 0);
                            if (ty && ty.length > 0) return (0, a.Y)(_.v, {
                                ratio: W,
                                source: ty,
                                image: u,
                                title: j,
                                fallbackText: j,
                                alignment: to,
                                countryCode: tk,
                                language: tx
                            });
                            if (t) {
                                var e = (0, a.Y)(z, {
                                    sources: u,
                                    sizes: F,
                                    alt: j,
                                    ratio: W,
                                    containment: "crop",
                                    alignment: to,
                                    lazy: tf
                                });
                                if (I) {
                                    var o = null,
                                        i = function(t) {
                                            if (t) {
                                                var e, o, i = "string" == typeof t ? null === (e = (0, g.parse)(t)) || void 0 === e ? void 0 : e.pathname : null === (o = (0, g.parse)(Object.values(t)[0])) || void 0 === o ? void 0 : o.pathname;
                                                return null == i ? void 0 : i.split("/").slice(-1)[0]
                                            }
                                        };
                                    return o = Array.isArray(u) ? u.map(function(t) {
                                        return {
                                            component: "ContentCell",
                                            description: i(t) || j || null,
                                            type: "image"
                                        }
                                    }) : {
                                        component: "ContentCell",
                                        description: i(u) || j || null,
                                        type: "image"
                                    }, (0, a.Y)(Y, {
                                        href: I,
                                        metadata: o,
                                        onClick: function() {
                                            var t = i((0, C.Q8)(u, tS.media));
                                            t && tB.navigation.asset({
                                                id: t,
                                                component: "ContentCell",
                                                context: D || j || void 0,
                                                title: D || j || null,
                                                type: "image"
                                            })
                                        },
                                        "aria-label": D || j,
                                        children: e
                                    })
                                }
                                return e
                            }
                            return tw && v ? (0, a.Y)(h.L9, {
                                src: v,
                                url: I,
                                lazy: tf,
                                loop: T,
                                live: S,
                                muted: b,
                                ratio: W,
                                autoplay: f,
                                color: H,
                                playOnHover: y,
                                containment: "crop",
                                poster: m ? (0, a.Y)(h.nT, {
                                    sources: m,
                                    ratio: W,
                                    lazy: tf,
                                    onLoad: function() {
                                        return tT(!0)
                                    }
                                }) : null,
                                alignment: to,
                                controls: R ? (0, a.Y)(h.H2, {
                                    shadow: L
                                }) : null,
                                a11yControls: (0, a.Y)(h.bi, {
                                    shadow: L,
                                    sticky: "bottom"
                                }),
                                onStart: function() {
                                    return tT(!1)
                                }
                            }) : (0, a.Y)(M, {
                                ratio: W,
                                css: {
                                    backgroundColor: J
                                }
                            })
                        }, [u, v, W, F, j, to, tf, I, tS.media, tB.navigation, D, f, y, T, S, b, m, R, H, L, tw, ty, J, tk, tx]);
                    return (0, a.Y)(w.ec.Provider, {
                        value: D || j || null,
                        children: (0, a.FD)(B, (0, s._)((0, i._)({
                            ref: e,
                            "data-testid": "content-cell",
                            paddingBottom: void 0 === tp ? [68, 68, 88, 124] : tp,
                            paddingTop: void 0 === tm ? 0 : tm,
                            css: {
                                color: Q || tM
                            }
                        }, th), {
                            children: ["before" !== q && tP, "sticky" === q || "above" === q ? (0, a.Y)("div", {
                                css: (0, p.css)("position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:flex-start;pointer-events:none;"),
                                children: (0, a.Y)(V, {
                                    ref: tY,
                                    title: D,
                                    url: N,
                                    subtitle: E,
                                    ontitle: U,
                                    body: K,
                                    alignment: tl,
                                    titleAlignment: ta,
                                    callsToAction: tc,
                                    callsToActionAlignment: tu,
                                    callsToActionStacking: ts,
                                    callsToActionVariant: tv,
                                    paddingTop: [32, 40, 44, 52],
                                    paddingBottom: [32, 40, 44, 52],
                                    css: tz
                                })
                            }) : (0, a.Y)(V, {
                                title: D,
                                url: N,
                                subtitle: E,
                                ontitle: U,
                                body: K,
                                alignment: tl,
                                titleAlignment: ta,
                                callsToAction: tc,
                                callsToActionAlignment: tu,
                                callsToActionStacking: ts,
                                callsToActionVariant: tv,
                                paddingTop: "before" === q ? 0 : tV,
                                paddingBottom: "after" === q ? 0 : tV,
                                css: tz
                            }), "before" === q && tP]
                        }))
                    })
                });
            R.displayName = "ContentCell";
            var H = o(57844),
                L = o(65636),
                O = o(65503),
                F = o(17025),
                j = o(55317),
                I = o(91804),
                N = o(1760),
                W = {
                    Left: "left",
                    Right: "right",
                    Centre: "center",
                    Justify: "justify"
                },
                D = {
                    Top: "top",
                    Middle: "center",
                    Bottom: "bottom"
                },
                E = {
                    Top: "center top",
                    Middle: "center center",
                    Bottom: "center bottom"
                },
                U = {
                    Primary: "tertiary",
                    Secondary: "secondary"
                },
                K = function(t) {
                    var e, o, s, v, m, p, g, _, f, y, h, b, k, T, S, B, Y, z, M, V, P = t.data,
                        K = t.css,
                        Q = t.metadata,
                        J = t.columns,
                        $ = t.offsetLeft,
                        q = t.offsetRight,
                        G = t.fullbleed,
                        X = t.forwardedRef,
                        Z = (0, l._)(t, ["data", "css", "metadata", "columns", "offsetLeft", "offsetRight", "fullbleed", "forwardedRef"]),
                        tt = (0, c.u)(),
                        te = (0, d.bl)().addDemandForTransparency,
                        to = (0, N.dJ)({
                            fullbleed: void 0 === G || G,
                            columns: J,
                            offsetLeft: $,
                            offsetRight: q
                        }),
                        ti = (0, x.s)(),
                        tl = (0, A.F)().language,
                        tn = "ja" === tl ? "jp" : tl;
                    (0, r.useEffect)(function() {
                        if (P) {
                            var t = P.media.type;
                            if ("Image" === t) {
                                var e = P.media.image,
                                    o = e.large_asset,
                                    i = e.small_asset,
                                    l = e.alt_text,
                                    n = e.link_url,
                                    a = P.copy,
                                    r = a.title_section,
                                    d = r.on_title,
                                    c = r.title,
                                    u = r.sub_title,
                                    s = r.title_link_url,
                                    v = a.cta,
                                    m = null;
                                o === i ? m = i : (i || o) && (m = (0, C.Q8)([i, o].filter(Boolean), tt.media));
                                var p = {
                                    title: c || l || u || d || null,
                                    links: v.map(function(t) {
                                        return {
                                            text: t.link_copy,
                                            url: t.link_url,
                                            type: "text"
                                        }
                                    }),
                                    type: "image",
                                    id: m
                                };
                                s && p.links.push({
                                    text: c || l || u || d || null,
                                    url: s,
                                    type: "text"
                                }), n && p.links.push({
                                    text: l || c || u || d || null,
                                    url: n,
                                    type: "image"
                                }), ti.impression.asset(p)
                            }
                            if ("Video" === t) {
                                var g = P.media.video,
                                    _ = g.mobile_video_id,
                                    f = g.desktop_video_id,
                                    y = g.link_url,
                                    h = P.copy,
                                    b = h.title_section,
                                    k = b.on_title,
                                    x = b.title,
                                    w = b.sub_title,
                                    A = b.title_link_url,
                                    T = h.cta,
                                    S = null;
                                f === _ ? S = _ : (f || _) && (S = (0, C.Q8)([_, f].filter(Boolean), tt.media));
                                var B = {
                                    title: x || w || k || null,
                                    links: T.map(function(t) {
                                        return {
                                            text: t.link_copy,
                                            url: t.link_url,
                                            type: "text"
                                        }
                                    }),
                                    type: "video",
                                    id: S
                                };
                                A && B.links.push({
                                    text: x || w || k || null,
                                    url: A,
                                    type: "text"
                                }), y && B.links.push({
                                    text: x || w || k || null,
                                    url: y,
                                    type: "video"
                                }), ti.impression.asset(B)
                            }
                        }
                    }, []), (0, r.useEffect)(function() {
                        var t, e, o, i;
                        if ((null == Q ? void 0 : Q.isFirstOnPage) && (null == P ? void 0 : null === (t = P.cell_configuration) || void 0 === t ? void 0 : t.transparent_nav)) return te((null == P ? void 0 : null === (e = P.cell_configuration.transparent_nav_config) || void 0 === e ? void 0 : e.nav_colour) === "Light" ? null === (o = tt.colors) || void 0 === o ? void 0 : o.white : null === (i = tt.colors) || void 0 === i ? void 0 : i.black)
                    }, [te, null == Q ? void 0 : Q.isFirstOnPage, null == P ? void 0 : null === (o = P.cell_configuration) || void 0 === o ? void 0 : null === (e = o.transparent_nav_config) || void 0 === e ? void 0 : e.nav_colour, null == P ? void 0 : null === (s = P.cell_configuration) || void 0 === s ? void 0 : s.transparent_nav, null === (v = tt.colors) || void 0 === v ? void 0 : v.white, null === (m = tt.colors) || void 0 === m ? void 0 : m.black]);
                    var ta = (0, r.useMemo)(function() {
                        var t, e, o, i, l;
                        return (null == P ? void 0 : null === (t = P.media) || void 0 === t ? void 0 : t.type) === "Video" ? (null == P ? void 0 : null === (o = P.media) || void 0 === o ? void 0 : o.video.video_loading_colour) === "Dark" ? null === (i = tt.colors) || void 0 === i ? void 0 : i.black : null === (l = tt.colors) || void 0 === l ? void 0 : l.white : (null == P ? void 0 : null === (e = P.media) || void 0 === e ? void 0 : e.background_colour) && (0, u.d)(P.media.background_colour)
                    }, [null == P ? void 0 : null === (p = P.media) || void 0 === p ? void 0 : p.background_colour, null == P ? void 0 : null === (g = P.media) || void 0 === g ? void 0 : g.type, null == P ? void 0 : null === (_ = P.media) || void 0 === _ ? void 0 : _.video.video_loading_colour, null === (f = tt.colors) || void 0 === f ? void 0 : f.black, null === (y = tt.colors) || void 0 === y ? void 0 : y.white]);
                    if (!P) return null;
                    var tr = P.copy,
                        td = tr.title_section,
                        tc = td.on_title,
                        tu = td.title,
                        ts = td.sub_title,
                        tv = td.title_link_url,
                        tm = tr.body.body_copy,
                        tp = tr.cta,
                        tg = P.media,
                        t_ = tg.type,
                        tf = tg.desktop_ratio,
                        ty = tg.desktop_height,
                        th = tg.desktop_width,
                        tb = tg.mobile_ratio,
                        tk = tg.mobile_width,
                        tx = tg.mobile_height,
                        tw = tg.mobile_position,
                        tA = tg.desktop_position,
                        tC = tg.video,
                        tT = tg.image,
                        tS = tT.large_asset,
                        tB = tT.small_asset,
                        tY = tT.alt_text,
                        tz = tT.link_url,
                        tM = tg.iframe,
                        tV = tM.desktop_url,
                        tP = tM.mobile_url,
                        tR = tM.fallback_desktop_asset,
                        tH = tM.fallback_mobile_asset,
                        tL = tM.fallback_text,
                        tO = P.cell_configuration,
                        tF = tO.copy_fixed,
                        tj = tO.copy_outside_media,
                        tI = tO.copy_outside_media_config,
                        tN = tO.copy_radial_gradient,
                        tW = tO.copy_radial_gradient_config,
                        tD = tO.copy_alignment,
                        tE = tO.title_alignment,
                        tU = tO.cta_alignment,
                        tK = tO.cta_style,
                        tQ = tO.copy_position,
                        tJ = tO.bottom_padding,
                        t$ = tO.stack_ctas_vertically_mobile,
                        tq = tO.stack_ctas_vertically_desktop,
                        tG = P.language_override,
                        tX = [{
                            ratio: tb,
                            customWidth: tk,
                            customHeight: tx
                        }, {
                            ratio: tf,
                            customWidth: th,
                            customHeight: ty
                        }].map(function(t) {
                            var e = t.ratio,
                                o = t.customWidth,
                                i = t.customHeight;
                            if (e) {
                                if ("Custom" === e && "number" == typeof o && "number" == typeof i) return o / i;
                                if ("100% Viewport Height" === e) return "viewport-height";
                                var l = (0, n._)(e.split(":").map(Number), 2);
                                return l[0] / l[1]
                            }
                        }),
                        tZ = (0, I.Kv)([{
                            id: tB,
                            widths: [200, 375, 420, 475, 600, 800, 1e3, 1200]
                        }, {
                            id: tS,
                            widths: [340, 480, 640, 950, 1024, 1280, 1366, 1440, 1920, 2200]
                        }]),
                        t0 = tC.poster_frame ? (0, I.Kv)([{
                            id: null === (h = tC.poster_frame) || void 0 === h ? void 0 : h.mobile_image,
                            widths: [320, 375, 420, 475, 600, 768, 850, 1e3, 1200]
                        }, {
                            id: null === (b = tC.poster_frame) || void 0 === b ? void 0 : b.desktop_image,
                            widths: [1024, 1280, 1366, 1440, 1920, 2200]
                        }]) : void 0,
                        t1 = (0, I.Kv)([{
                            id: tH,
                            widths: [320, 375, 420, 475, 600, 768, 850, 1023]
                        }, {
                            id: tR,
                            widths: [1024, 1280, 1366, 1440, 1920, 2200]
                        }]),
                        t4 = [tw, tA].map(function(t) {
                            return t ? E[t] : void 0
                        }),
                        t2 = "above";

                    function t8(t) {
                        return function() {
                            return ti.navigation.generic({
                                component: "CopyCell",
                                type: "text",
                                description: t || null
                            })
                        }
                    }
                    tF && (t2 = "sticky"), tj && (t2 = "Below" === tI.copy_placement ? "after" : "before");
                    var t3 = function() {
                            if (Array.isArray(tp)) return tp.map(function(t, e) {
                                switch (t.link_type) {
                                    case "modal":
                                        var o, i, l, n;
                                        return (0, a.Y)(F.RA, {
                                            index: e,
                                            variant: U[tK],
                                            text: t.link_copy,
                                            modalUid: null === (i = t.link_reference) || void 0 === i ? void 0 : null === (o = i[0]) || void 0 === o ? void 0 : o.uid,
                                            modalContentType: null === (n = t.link_reference) || void 0 === n ? void 0 : null === (l = n[0]) || void 0 === l ? void 0 : l._content_type_uid
                                        });
                                    case "AR":
                                        return (0, a.Y)(j.k, {
                                            arConfig: {
                                                glb: t.link_ar_glb,
                                                reality: t.link_ar_reality,
                                                usdz: t.link_ar_usdz
                                            },
                                            label: t.link_copy,
                                            textColor: (null == P ? void 0 : P.cell_configuration.copy_colour) === "White" ? "light" : "dark"
                                        });
                                    default:
                                        return "secondary" === U[tK] ? (0, a.Y)(H.$, {
                                            asChild: !0,
                                            variant: "secondary",
                                            children: (0, a.Y)(O.B, {
                                                href: t.link_url,
                                                onClick: t8(t.link_copy),
                                                children: t.link_copy
                                            })
                                        }) : (0, a.Y)(L.N, {
                                            href: t.link_url,
                                            onClick: t8(t.link_copy),
                                            variant: "tertiary",
                                            children: t.link_copy
                                        })
                                }
                            }).filter(Boolean)
                        }(),
                        t6 = null;
                    return "iFrame" === t_ && (t6 = tP && tV && tP !== tV ? [tP, tV] : [null != tP ? tP : tV]), (0, a.Y)(w.ec.Provider, {
                        value: "content cell",
                        children: (0, a.Y)(R, (0, i._)({
                            ref: X,
                            css: [K, to],
                            image: "iFrame" === t_ || "Image" === t_ ? t1 || tZ : void 0,
                            video: "Video" === t_ ? [tC.mobile_video_id, tC.desktop_video_id] : void 0,
                            poster: t0,
                            autoplay: "Autoplay" === tC.play_type || "Play when in Viewport" === tC.play_type,
                            playOnHover: "Hover to Play" === tC.play_type,
                            muted: tC.mute,
                            loop: tC.loop,
                            live: tC.live_video,
                            controls: tC.display_controls,
                            loaderColor: "Dark" === tC.video_loading_colour ? "white" : "black",
                            controlsShadow: Math.min(100, Math.max(0, tC.controls_gradient_opacity || 0)),
                            controlsColor: "Black" === tC.controls_colour ? "black" : "white",
                            alt: tL || tY,
                            url: "Video" === t_ && tC.link_url || tz,
                            lazy: !(null == Q ? void 0 : Q.isFirstMediaComponentOnPage),
                            ratio: tX,
                            title: tu,
                            titleUrl: tv,
                            ontitle: tc,
                            subtitle: ts,
                            textPlacement: t2,
                            textColor: (null == P ? void 0 : P.cell_configuration.copy_colour) === "White" ? null === (k = tt.colors) || void 0 === k ? void 0 : k.white : null === (T = tt.colors) || void 0 === T ? void 0 : T.black,
                            textShadow: Math.max(0, Math.min(100, tN && (null == tW ? void 0 : tW.text_shadow) || 0)),
                            textShadowBlur: Math.max(0, Math.min(100, tN && (null == tW ? void 0 : tW.text_blur) || 0)),
                            textShadowColor: tN && (null == tW ? void 0 : tW.gradient_colour) === "White" ? "white" : "black",
                            backgroundColor: ta,
                            body: tm,
                            callsToAction: t3,
                            alignment: W[null !== (z = null === (S = tG[tn]) || void 0 === S ? void 0 : S.copy_alignment) && void 0 !== z ? z : tD],
                            verticalAlignment: D[tQ],
                            titleAlignment: W[null !== (M = null === (B = tG[tn]) || void 0 === B ? void 0 : B.title_alignment) && void 0 !== M ? M : tE],
                            callsToActionAlignment: W[null !== (V = null === (Y = tG[tn]) || void 0 === Y ? void 0 : Y.cta_alignment) && void 0 !== V ? V : tU],
                            mediaAlignment: t4,
                            callsToActionVariant: U[tK],
                            callsToActionStacking: [t$ ? "vertical" : "natural", tq ? "vertical" : "natural"],
                            paddingBottom: tJ ? void 0 : 0,
                            textVerticalSpacing: (null == tI ? void 0 : tI.copy_padding) === "Big" ? "large" : "small",
                            iframe: t6 || void 0
                        }, Z))
                    })
                }
        }
    }
]);