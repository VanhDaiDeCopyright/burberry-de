"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3793], {
        26714: (e, n, t) => {
            t.d(n, {
                _: () => h
            });
            var r = t(71893),
                o = t(4418),
                i = t(93038),
                a = t(2445),
                l = t(96540),
                u = t(13368),
                d = t.n(u),
                c = t(33201),
                s = t(66823),
                f = t(46827),
                v = t(28922),
                p = t(91942),
                m = function(e) {
                    var n = e.sources,
                        t = e.sizes,
                        r = (0, l.useMemo)(function() {
                            var e = (0, p.pD)(n);
                            return (0, p.tS)(e)
                        }, [n]);
                    return (0, a.Y)(d(), {
                        children: Object.entries(r).map(function(e, n) {
                            var r, o = (0, i._)(e, 2),
                                l = o[0],
                                u = o[1];
                            if (!u) return null;
                            var d = "string" == typeof u ? u : (0, v.F)(u),
                                c = (0, f.T)({
                                    sources: u,
                                    srcSet: d
                                });
                            return (0, a.Y)("link", {
                                rel: "preload",
                                as: "image",
                                href: c,
                                imageSrcSet: d,
                                imageSizes: t,
                                media: null === (r = s.w.media) || void 0 === r ? void 0 : r.query[l]
                            }, n)
                        })
                    })
                },
                h = (0, l.forwardRef)(function(e, n) {
                    var t = e.preload,
                        i = void 0 !== t && t,
                        l = (0, o._)(e, ["preload"]);
                    return (0, a.FD)(a.FK, {
                        children: [i ? (0, a.Y)(m, (0, r._)({}, l)) : null, (0, a.Y)(c._, (0, r._)({
                            ref: n,
                            fetchPriority: i ? "high" : "auto",
                            fade: !i
                        }, l))]
                    })
                });
            h.displayName = "Image"
        },
        23793: (e, n, t) => {
            t.d(n, {
                bi: () => nS,
                H2: () => nP,
                nT: () => nR,
                L9: () => nL,
                vT: () => nI,
                x$: () => nk,
                Y6: () => nx
            });
            var r = t(71893),
                o = t(55456),
                i = t(4418),
                a = t(2445),
                l = t(96540),
                u = t(32964),
                d = t.n(u),
                c = t(28596),
                s = t(26714),
                f = t(15370),
                v = t(65503),
                p = t(69815),
                m = t(33362),
                h = (0, l.forwardRef)(function(e, n) {
                    var t = e.asChild,
                        o = (0, i._)(e, ["asChild"]),
                        l = t ? m.DX : "span";
                    return (0, a.Y)(l, (0, r._)({
                        ref: n,
                        id: "title"
                    }, o))
                });
            h.displayName = "HeadlessTitle";
            var y = (0, p.default)(h, {
                    target: "e19l6ep40"
                })(function(e) {
                    var n;
                    return null === (n = e.theme.typography) || void 0 === n ? void 0 : n.titleXS
                }, ";margin-right:2.4rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;"),
                g = t(93038),
                b = t(19661),
                Y = (0, l.createContext)({
                    player: null,
                    setPlayer: function() {},
                    getVideoRef: function() {
                        return null
                    },
                    setVideoRef: function() {}
                });

            function _() {
                var e = (0, l.useContext)(Y);
                return (0, b.V)(e, "This hook needs to be used inside a <VideoPlayer.Root />"), e
            }
            var w = function(e) {
                    var n = e.children,
                        t = (0, l.useRef)(null),
                        r = (0, g._)((0, l.useState)(null), 2),
                        o = r[0],
                        i = r[1];
                    return (0, a.Y)(Y.Provider, {
                        value: {
                            player: o,
                            setPlayer: i,
                            getVideoRef: function() {
                                return t.current
                            },
                            setVideoRef: function(e) {
                                t.current = e
                            }
                        },
                        children: n
                    })
                },
                C = (0, l.createContext)(0);

            function x() {
                var e = (0, l.useContext)(C);
                return (0, b.V)(e, "This hook needs to be used inside a <VideoPlayer.Root />"), e
            }
            var P = function(e) {
                    var n = e.children,
                        t = _().player,
                        r = (0, g._)((0, l.useState)(0), 2),
                        o = r[0],
                        i = r[1];
                    return (0, l.useEffect)(function() {
                        if (t) return t.on("durationchange", e),
                            function() {
                                t.off("durationchange", e)
                            };

                        function e() {
                            t && i(t.duration())
                        }
                    }, [t]), (0, a.Y)(C.Provider, {
                        value: o,
                        children: n
                    })
                },
                S = t(68101),
                L = (0, l.createContext)(0),
                k = (0, l.createContext)([]);

            function R() {
                var e = (0, l.useContext)(L);
                return (0, b.V)(e, "This hook needs to be used inside a <VideoPlayer.Root />"), e
            }
            var I = function(e) {
                    var n = e.children,
                        t = e.onChange,
                        r = _().player,
                        o = (0, g._)((0, l.useState)(0), 2),
                        i = o[0],
                        u = o[1],
                        d = (0, g._)((0, l.useState)([]), 2),
                        c = d[0],
                        s = d[1];
                    return (0, l.useEffect)(function() {
                        if (r) return r.on("timeupdate", e),
                            function() {
                                r.off("timeupdate", e)
                            };

                        function e() {
                            if (r) {
                                var e = r.getCurrentTime();
                                u(e), null == t || t(e)
                            }
                        }
                    }, [r, t]), (0, l.useEffect)(function() {
                        if (r) return r.on("progress", e),
                            function() {
                                r.off("progress", e)
                            };

                        function e() {
                            r && s((0, S._)([{
                                start: 0,
                                end: r.bufferedEnd()
                            }]))
                        }
                    }, [r]), (0, a.Y)(L.Provider, {
                        value: i,
                        children: (0, a.Y)(k.Provider, {
                            value: c,
                            children: n
                        })
                    })
                },
                V = (0, p.default)("span", {
                    target: "e1ecn7hr0"
                })(function(e) {
                    var n;
                    return null === (n = e.theme.typography) || void 0 === n ? void 0 : n.bodyLarge
                }, ";font-variant-numeric:tabular-nums;color:var(--color);> span{font-variant-numeric:tabular-nums;}");

            function F(e) {
                var n = Math.floor(e);
                if (n < 3600) {
                    var t = Math.floor(n / 60);
                    return "".concat(t.toString().padStart(2, "0"), ":").concat((n % 60).toString().padStart(2, "0"))
                }
                var r = Math.floor(n / 3600),
                    o = Math.floor(n % 3600 / 60);
                return "".concat(r.toString().padStart(2, "0"), ":").concat(o.toString().padStart(2, "0"), ":").concat((n % 3600 % 60).toString().padStart(2, "0"))
            }
            var E = (0, l.forwardRef)(function(e, n) {
                var t = x(),
                    i = R(),
                    l = Number.isNaN(t) || Number.isNaN(i) ? null : t - i;
                return (0, a.Y)(V, (0, o._)((0, r._)({
                    ref: n,
                    id: "duration"
                }, e), {
                    children: t === 1 / 0 ? (0, a.Y)("span", {
                        children: F(i)
                    }) : (0, a.FD)(a.FK, {
                        children: [(0, a.Y)("span", {
                            children: F(i)
                        }), null != l ? (0, a.Y)("span", {
                            children: "/"
                        }) : null, null != l && l >= 0 ? (0, a.Y)("span", {
                            children: F(l)
                        }) : (0, a.Y)("span", {
                            children: "-00:00"
                        })]
                    })
                }))
            });
            E.displayName = "Duration";
            var D = (0, l.createContext)({
                volume: 1,
                muted: !1,
                mute: function() {},
                unmute: function() {},
                setVolume: function() {}
            });

            function H() {
                var e = (0, l.useContext)(D);
                return (0, b.V)(e, "This hook needs to be used inside a <VideoPlayer.Root />"), e
            }
            var M = function(e) {
                    var n = e.autoplay,
                        t = e.playOnHover,
                        r = e.muted,
                        o = e.children,
                        i = _().player,
                        u = (0, g._)((0, l.useState)(1), 2),
                        d = u[0],
                        c = u[1],
                        s = (0, g._)((0, l.useState)(r || n || t), 2),
                        f = s[0],
                        v = s[1];
                    return (0, a.Y)(D.Provider, {
                        value: {
                            volume: d,
                            muted: f,
                            mute: function() {
                                null == i || i.mute(), v(!0)
                            },
                            unmute: function() {
                                null == i || i.unmute(), v(!1)
                            },
                            setVolume: function(e) {
                                null == i || i.setVolume(e), c(e)
                            }
                        },
                        children: o
                    })
                },
                N = (0, l.createContext)(!1),
                j = (0, l.createContext)(!1);

            function z() {
                var e = (0, l.useContext)(N);
                return (0, b.V)(e, "This hook needs to be used inside a <VideoPlayer.Root />"), e
            }

            function B() {
                var e = (0, l.useContext)(j);
                return (0, b.V)(e, "This hook needs to be used inside a <VideoPlayer.Root />"), e
            }
            var T = function(e) {
                    var n = e.autoplay,
                        t = e.children,
                        r = e.onPlay,
                        o = e.onPause,
                        i = e.onStart,
                        u = _(),
                        d = u.player,
                        c = u.getVideoRef,
                        s = (0, g._)((0, l.useState)(!1), 2),
                        f = s[0],
                        v = s[1],
                        p = (0, g._)((0, l.useState)(!1), 2),
                        m = p[0],
                        h = p[1];
                    return (0, l.useEffect)(function() {
                        if (d) return d.on("play", e), d.on("pause", n),
                            function() {
                                d.off("play", e), d.off("pause", n)
                            };

                        function e() {
                            var e;
                            m || (null == i || i(), h(!0)), null == r || r(null !== (e = null == d ? void 0 : d.getSrc()) && void 0 !== e ? e : ""), v(!0)
                        }

                        function n() {
                            var e;
                            null == o || o(null !== (e = null == d ? void 0 : d.getSrc()) && void 0 !== e ? e : ""), v(!1)
                        }
                    }, [d, m, r, o, i]), (0, l.useEffect)(function() {
                        if (n) {
                            var e = c();
                            if (d && e) {
                                var t = new IntersectionObserver(function(e) {
                                    (0, g._)(e, 1)[0].isIntersecting ? d.play() : d.pause()
                                }, {
                                    threshold: .1
                                });
                                return t.observe(e),
                                    function() {
                                        t.disconnect()
                                    }
                            }
                        }
                    }, [d, n, c]), (0, a.Y)(N.Provider, {
                        value: f,
                        children: (0, a.Y)(j.Provider, {
                            value: m,
                            children: t
                        })
                    })
                },
                O = t(51916),
                U = t.n(O),
                K = t(11238);

            function A(e) {
                return e.indexOf("OS ") > -1 && e.indexOf("iPhone") > -1 && -1 === e.indexOf("iPad")
            }
            var Z = (0, l.createContext)({
                fullscreen: !1,
                enterFullscreen: function() {},
                exitFullscreen: function() {}
            });

            function X() {
                var e = (0, l.useContext)(Z);
                return (0, b.V)(e, "This hook needs to be used inside a <VideoPlayer.Root />"), e
            }

            function q(e) {
                if ("VIDEO" === e.tagName) return e;
                var n = e.firstChild;
                return "VIDEO" === n.tagName ? n : null
            }
            var G = function(e) {
                    var n = e.children,
                        t = _(),
                        r = t.player,
                        o = t.getVideoRef,
                        i = (0, l.useRef)(0),
                        u = (0, g._)((0, l.useState)(!1), 2),
                        d = u[0],
                        c = u[1];
                    return (0, l.useEffect)(function() {
                        var e, n = o(),
                            t = null == n ? void 0 : null === (e = n.parentElement) || void 0 === e ? void 0 : e.parentElement;
                        if (r && t && U().isEnabled) return U().on("change", a),
                            function() {
                                U().off("change", a)
                            };

                        function a() {
                            if (U().isEnabled) {
                                var e, n = U().isFullscreen && U().element === t;
                                n && (i.current = null !== (e = window.scrollY) && void 0 !== e ? e : window.pageYOffset), document.fullscreenElement || 0 === i.current || (window.scrollTo(0, i.current), i.current = 0), c(n)
                            }
                        }
                    }, [r, o]), (0, a.Y)(Z.Provider, {
                        value: {
                            fullscreen: d,
                            enterFullscreen: function() {
                                var e, n, t, r = o(),
                                    i = null == r ? void 0 : null === (e = r.parentElement) || void 0 === e ? void 0 : e.parentElement;
                                if (r && i) {
                                    if (A(navigator.userAgent)) try {
                                        null === (t = q(r)) || void 0 === t || null === (n = t.webkitEnterFullscreen) || void 0 === n || n.call(t)
                                    } catch (e) {
                                        K.y && console.log("\uD83D\uDCFA Could not open in fullscreen", e)
                                    } else U().isEnabled && U().request(i).catch(function(e) {
                                        K.y && console.log("\uD83D\uDCFA Could not open in fullscreen", e)
                                    })
                                }
                            },
                            exitFullscreen: function() {
                                var e, n, t = o();
                                if (t) {
                                    if (A(navigator.userAgent)) try {
                                        null === (n = q(t)) || void 0 === n || null === (e = n.webkitExitFullScreen) || void 0 === e || e.call(n)
                                    } catch (e) {
                                        K.y && console.log("\uD83D\uDCFA Could not exit from fullscreen", e)
                                    } else U().isEnabled && U().exit().catch(function(e) {
                                        K.y && console.log("\uD83D\uDCFA Could not exit from fullscreen", e)
                                    })
                                }
                            }
                        },
                        children: n
                    })
                },
                $ = function() {
                    var e = R(),
                        n = x(),
                        t = z(),
                        r = H(),
                        o = r.volume,
                        i = r.muted,
                        a = _(),
                        u = a.player,
                        d = a.getVideoRef,
                        c = X(),
                        s = c.fullscreen,
                        f = c.enterFullscreen,
                        v = c.exitFullscreen;
                    return (0, l.useEffect)(function() {
                        var r = d(),
                            a = null == r ? void 0 : r.parentElement;
                        if (u && a) {
                            var l = {
                                " ": function() {
                                    document.activeElement === a && c()
                                },
                                k: c,
                                m: function() {
                                    0 === o || i ? null == u || u.unmute() : null == u || u.mute()
                                },
                                f: function() {
                                    s ? v() : f()
                                },
                                ArrowDown: function() {
                                    var e = Math.max(0, o - 5);
                                    null == u || u.setVolume(e)
                                },
                                ArrowUp: function() {
                                    var e = Math.min(100, o + 5);
                                    null == u || u.setVolume(e)
                                },
                                ArrowRight: function() {
                                    var t = Math.max(0, Math.min(n || 0, e + .5));
                                    null == u || u.setCurrentTime(t)
                                },
                                ArrowLeft: function() {
                                    var t = Math.max(0, Math.min(n || 0, e - .5));
                                    null == u || u.setCurrentTime(t)
                                },
                                0: function() {
                                    return p(0)
                                },
                                1: function() {
                                    return p(10)
                                },
                                2: function() {
                                    return p(20)
                                },
                                3: function() {
                                    return p(30)
                                },
                                4: function() {
                                    return p(40)
                                },
                                5: function() {
                                    return p(50)
                                },
                                6: function() {
                                    return p(60)
                                },
                                7: function() {
                                    return p(70)
                                },
                                8: function() {
                                    return p(80)
                                },
                                9: function() {
                                    return p(90)
                                }
                            };
                            return a.addEventListener("keydown", m),
                                function() {
                                    a.removeEventListener("keydown", m)
                                }
                        }

                        function c() {
                            t ? null == u || u.pause() : null == u || u.play()
                        }

                        function p(e) {
                            var t = Math.min(100, Math.max(0, e)) / 100 * n;
                            null == u || u.setCurrentTime(t)
                        }

                        function m(e) {
                            e.key in l && (e.preventDefault(), e.stopPropagation(), l[e.key](e))
                        }
                    }, [u, t, o, i, s, e, n, f, v, d]), null
                },
                Q = (0, p.default)("div", {
                    target: "eby6tzt0"
                })("display:flex;flex-direction:column;pointer-events:all;::before{content:'';position:absolute;left:0;bottom:0;height:12.3rem;width:100%;background:linear-gradient(180deg,#000000 0%,rgba(0,0,0,0) 100%);mix-blend-mode:multiply;transform:rotate(-180deg);", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.gteMedium
                }, "{height:15.5rem;}", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.extraLarge
                }, "{height:18.9rem;}}"),
                W = {
                    top: {
                        position: "sticky",
                        top: 0
                    },
                    bottom: {
                        position: "sticky",
                        bottom: 0
                    }
                },
                J = {
                    start: "flex-start",
                    center: "center",
                    end: "flex-end"
                },
                ee = (0, l.forwardRef)(function(e, n) {
                    var t = e.alignment,
                        l = void 0 === t ? "end" : t,
                        u = e.sticky,
                        d = e.style,
                        c = (0, i._)(e, ["alignment", "sticky", "style"]);
                    return (0, a.Y)(Q, (0, r._)({
                        ref: n,
                        style: (0, o._)((0, r._)({}, d, u ? W[u] : {}), {
                            justifyContent: J[l],
                            alignSelf: J[l]
                        })
                    }, c))
                });
            ee.displayName = "Container";
            var en = (0, p.default)("div", {
                    target: "e1uktmmu0"
                })("display:flex;align-items:center;height:0.2rem;width:100%;position:relative;::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color);opacity:0.3;}#progress{position:absolute;top:0;left:0;width:100%;height:100%;transform-origin:left;background:var(--color);overflow:hidden;}#thumb{position:absolute;top:50%;width:100%;height:1rem;transform:translateY(-50%);pointer-events:none;overflow:hidden;div{position:absolute;top:0;left:0;height:100%;width:100%;opacity:0;transition:opacity 150ms;}}input{-webkit-appearance:none;color:var(--color);height:100%;width:100%;cursor:pointer;border:none;background:transparent;position:relative;::before{content:'';width:100%;height:100%;min-width:2.2rem;min-height:2.2rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:0.5rem;box-sizing:content-box;}::-webkit-slider-thumb{-webkit-appearance:none;height:1rem;width:0.2rem;background:var(--color);opacity:0;}::-moz-range-thumb{height:1rem;width:0.2rem;background:var(--color);border:none;opacity:0;}", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.small
                }, "{::-webkit-slider-thumb{height:3.2rem;width:3.2rem;}::-moz-range-thumb{height:3.2rem;width:3.2rem;}}}&:hover #thumb > div,&:focus-within #thumb > div{opacity:1;}"),
                et = (0, l.forwardRef)(function(e, n) {
                    var t = _().player,
                        o = R(),
                        i = x();
                    return i === 1 / 0 || i <= 0 ? null : (0, a.FD)(en, {
                        id: "scrubber-bar",
                        children: [(0, a.Y)("div", {
                            id: "progress",
                            style: {
                                transform: "scaleX(".concat(o / i, ")")
                            }
                        }), (0, a.Y)("div", {
                            id: "thumb",
                            children: (0, a.Y)("div", {
                                style: {
                                    transform: "translateX(".concat(100 * o, "%)")
                                }
                            })
                        }), (0, a.Y)("input", (0, r._)({
                            ref: n,
                            type: "range",
                            min: 0,
                            max: i,
                            step: .5,
                            value: o,
                            autoComplete: "off",
                            onChange: function(e) {
                                var n = Number(e.target.value);
                                Number.isNaN(n) || null == t || t.setCurrentTime(n)
                            }
                        }, e))]
                    })
                });
            et.displayName = "Progress";
            var er = (0, p.default)("div", {
                    target: "e1uktmmu1"
                })("height:100%;width:100%;background-color:var(--color);position:absolute;top:0;left:0;transform:scaleX(0);transform-origin:left;"),
                eo = function(e) {
                    var n, t = e.style,
                        u = (0, i._)(e, ["style"]),
                        d = (n = (0, l.useContext)(k), (0, b.V)(n, "This hook needs to be used inside a <VideoPlayer.Root />"), n),
                        c = x();
                    return c <= 0 ? null : (0, a.Y)(a.FK, {
                        children: d.map(function(e) {
                            var n = e.start,
                                i = e.end,
                                l = Math.min(1, Math.max(0, n / c * 100)),
                                d = Math.min(1, Math.max(0, (i - n) / c));
                            return (0, a.Y)(er, (0, o._)((0, r._)({}, u), {
                                style: (0, o._)((0, r._)({}, t), {
                                    opacity: .3,
                                    left: "".concat(l, "%"),
                                    transform: "scaleX(".concat(d, ")")
                                })
                            }), n)
                        })
                    })
                },
                ei = (0, p.default)("div", {
                    target: "e1uktmmu2"
                })("height:0.2rem;position:relative;margin:0 1.2rem;", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.gteMedium
                }, "{margin:0 2rem;}", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.extraLarge
                }, "{margin:0 3.2rem;}"),
                ea = (0, l.forwardRef)(function(e, n) {
                    var t = e.bufferProps,
                        l = e.progressProps,
                        u = (0, i._)(e, ["bufferProps", "progressProps"]);
                    return (0, a.FD)(ei, (0, o._)((0, r._)({
                        ref: n,
                        id: "scrubber-bar"
                    }, u), {
                        children: [(0, a.Y)(eo, (0, r._)({}, t)), (0, a.Y)(et, (0, r._)({}, l))]
                    }))
                });
            ea.displayName = "ScrubberBar";
            var el = (0, p.default)("span", {
                    target: "e1eoavdg0"
                })(function(e) {
                    var n;
                    return null === (n = e.theme.typography) || void 0 === n ? void 0 : n.titleXS
                }, ";position:relative;margin-left:2rem;align-self:center;color:var(--color);", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.gteMedium
                }, "{flex-direction:row;margin-right:1.6rem;}&::before{content:' ';position:absolute;top:50%;left:-2rem;width:1.2rem;height:1.2rem;border-radius:50%;margin-right:0.8rem;transform:translate(0,-50%);background-color:", function(e) {
                    var n;
                    return null === (n = e.theme.colors) || void 0 === n ? void 0 : n.red01
                }, ";}"),
                eu = (0, l.forwardRef)(function(e, n) {
                    return (0, a.Y)(el, (0, r._)({
                        id: "live-indicator",
                        ref: n,
                        "aria-hidden": !0
                    }, e))
                });
            eu.displayName = "LiveIndicator";
            var ed = (0, l.forwardRef)(function(e, n) {
                var t = e.asChild,
                    l = (0, i._)(e, ["asChild"]),
                    u = t ? m.DX : "svg";
                return (0, a.Y)(u, (0, o._)((0, r._)({
                    ref: n,
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, l), {
                    children: (0, a.Y)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 3L7 21L20 12L7 3ZM8.5 5.86285L8.5 18.1371L17.3648 12L8.5 5.86285Z",
                        fill: "currentColor"
                    })
                }))
            });
            ed.displayName = "PlayIcon";
            var ec = (0, l.forwardRef)(function(e, n) {
                var t = e.asChild,
                    l = (0, i._)(e, ["asChild"]),
                    u = t ? m.DX : "svg";
                return (0, a.FD)(u, (0, o._)((0, r._)({
                    ref: n,
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, l), {
                    children: [(0, a.Y)("path", {
                        d: "M8.5 21L8.5 3H7L7 21H8.5Z",
                        fill: "currentColor"
                    }), (0, a.Y)("path", {
                        d: "M17 21V3H15.5L15.5 21H17Z",
                        fill: "currentColor"
                    })]
                }))
            });
            ec.displayName = "PauseIcon";
            var es = t(19400),
                ef = (0, p.default)(es.p, {
                    target: "enlke260"
                })("position:relative;display:flex;align-items:center;pointer-events:all;::before{content:'';width:100%;height:100%;min-width:2.2rem;min-height:2.2rem;padding:0.5rem;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}> svg{width:2rem;height:2rem;", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.gteLarge
                }, "{width:2.4rem;height:2.4rem;}}"),
                ev = (0, l.forwardRef)(function(e, n) {
                    var t = e.playingProps,
                        l = e.pausedProps,
                        u = e.onClick,
                        d = (0, i._)(e, ["playingProps", "pausedProps", "onClick"]),
                        c = _().player,
                        s = z();
                    return (0, a.Y)(ef, (0, o._)((0, r._)({
                        ref: n,
                        id: "play-pause",
                        onClick: function(e) {
                            null == u || u(e), s ? null == c || c.pause() : null == c || c.play()
                        }
                    }, s ? t : l, d), {
                        children: s ? (0, a.Y)(ec, {}) : (0, a.Y)(ed, {})
                    }))
                });
            ev.displayName = "PlayPauseButton";
            var ep = (0, l.forwardRef)(function(e, n) {
                var t = e.asChild,
                    l = (0, i._)(e, ["asChild"]),
                    u = t ? m.DX : "svg";
                return (0, a.FD)(u, (0, o._)((0, r._)({
                    ref: n,
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, l), {
                    children: [(0, a.Y)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.4984 3.75H11.4135L5.90009 9.08009H2.99837L2.99872 14.9192H5.90006L11.4135 20.25H14.4984V3.75ZM6.50661 10.5801L12.02 5.25H12.9984V18.75H12.02L6.50664 13.4192H4.49863L4.49846 10.5801H6.50661Z",
                        fill: "currentColor"
                    }), (0, a.Y)("path", {
                        d: "M16.353 9.44734C16.7978 10.2162 17.046 11.0823 17.046 11.9982C17.046 12.9154 16.797 13.7828 16.3511 14.5525L17.6489 15.3045C18.2204 14.3182 18.546 13.193 18.546 11.9982C18.546 10.8052 18.2213 9.68151 17.6515 8.69629L16.353 9.44734Z",
                        fill: "currentColor"
                    })]
                }))
            });
            ep.displayName = "SoundOnIcon";
            var em = (0, l.forwardRef)(function(e, n) {
                var t = e.asChild,
                    l = (0, i._)(e, ["asChild"]),
                    u = t ? m.DX : "svg";
                return (0, a.Y)(u, (0, o._)((0, r._)({
                    ref: n,
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, l), {
                    children: (0, a.Y)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.14907 3L3 3.96418L6.66904 8.33678L5.90009 9.08016H2.99837L2.99872 14.9192H5.90006L11.4135 20.2501H14.4984V17.6675L17.302 21.0087L18.4511 20.0445L14.4984 15.3339V3.75007H11.4135L7.75015 7.29161L4.14907 3ZM7.63562 9.48869L6.50661 10.5802H4.49846L4.49863 13.4192H6.50664L12.02 18.7501H12.9984V15.8798L7.63562 9.48869ZM12.9984 13.5462L8.71673 8.44353L12.02 5.25007H12.9984V13.5462Z",
                        fill: "currentColor"
                    })
                }))
            });
            em.displayName = "SoundOffIcon";
            var eh = (0, l.forwardRef)(function(e, n) {
                var t = e.mutedProps,
                    l = e.unmutedProps,
                    u = e.onClick,
                    d = (0, i._)(e, ["mutedProps", "unmutedProps", "onClick"]),
                    c = H(),
                    s = c.volume,
                    f = c.muted,
                    v = c.mute,
                    p = c.unmute,
                    m = 0 === s || f;
                return (0, a.Y)(ef, (0, o._)((0, r._)({
                    ref: n,
                    id: "mute-unmute",
                    onClick: function(e) {
                        null == u || u(e), m ? p() : v()
                    }
                }, m ? t : l, d), {
                    children: m ? (0, a.Y)(em, {}) : (0, a.Y)(ep, {})
                }))
            });
            eh.displayName = "MuteUnmuteButton";
            var ey = (0, l.forwardRef)(function(e, n) {
                var t = e.asChild,
                    l = (0, i._)(e, ["asChild"]),
                    u = t ? m.DX : "svg";
                return (0, a.FD)(u, (0, o._)((0, r._)({
                    ref: n,
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, l), {
                    children: [(0, a.Y)("path", {
                        d: "M3 3V8.75H4.5L4.5 4.5L8.75 4.5V3H3Z",
                        fill: "currentColor"
                    }), (0, a.Y)("path", {
                        d: "M21 3L21 8.75H19.5V4.5L15.25 4.5V3H21Z",
                        fill: "currentColor"
                    }), (0, a.Y)("path", {
                        d: "M21 15.25L21 21L15.25 21V19.5H19.5V15.25H21Z",
                        fill: "currentColor"
                    }), (0, a.Y)("path", {
                        d: "M3 21V15.25L4.5 15.25L4.5 19.5H8.75V21H3Z",
                        fill: "currentColor"
                    })]
                }))
            });
            ey.displayName = "FullscreenIcon";
            var eg = (0, l.forwardRef)(function(e, n) {
                var t = e.asChild,
                    l = (0, i._)(e, ["asChild"]),
                    u = t ? m.DX : "svg";
                return (0, a.FD)(u, (0, o._)((0, r._)({
                    ref: n,
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, l), {
                    children: [(0, a.Y)("path", {
                        d: "M8.75 8.75L8.75 3H7.25L7.25 7.25L3 7.25V8.75L8.75 8.75Z",
                        fill: "currentColor"
                    }), (0, a.Y)("path", {
                        d: "M15.25 8.75L15.25 3H16.75L16.75 7.25L21 7.25L21 8.75L15.25 8.75Z",
                        fill: "currentColor"
                    }), (0, a.Y)("path", {
                        d: "M15.25 21L15.25 15.25L21 15.25L21 16.75L16.75 16.75L16.75 21L15.25 21Z",
                        fill: "currentColor"
                    }), (0, a.Y)("path", {
                        d: "M8.75 15.25L8.75 21H7.25L7.25 16.75H3V15.25L8.75 15.25Z",
                        fill: "currentColor"
                    })]
                }))
            });
            eg.displayName = "NormalScreenIcon";
            var eb = (0, l.forwardRef)(function(e, n) {
                var t = e.fullscreenProps,
                    l = e.normalscreenProps,
                    u = e.onClick,
                    d = (0, i._)(e, ["fullscreenProps", "normalscreenProps", "onClick"]),
                    c = X(),
                    s = c.fullscreen,
                    f = c.enterFullscreen,
                    v = c.exitFullscreen;
                return (0, a.Y)(ef, (0, o._)((0, r._)({
                    ref: n,
                    id: "fullscreen",
                    onClick: function(e) {
                        null == u || u(e), s ? v() : f()
                    }
                }, s ? t : l, d), {
                    children: s ? (0, a.Y)(eg, {}) : (0, a.Y)(ey, {})
                }))
            });
            eb.displayName = "FullscreenButton";
            var eY = Object.assign(ee, {
                    Title: y,
                    Duration: E,
                    Keyboard: $,
                    ScrubberBar: ea,
                    LiveIndicator: eu,
                    PlayPause: ev,
                    MuteUnmute: eh,
                    Fullscreen: eb
                }),
                e_ = t(91942),
                ew = (0, p.default)("div", {
                    target: "ehmnru0"
                })("position:relative;width:100%;display:flex;", function(e) {
                    var n = e.theme,
                        t = e.ratio;
                    return t ? "\n      ::before {\n        content: '';\n        display: flex;\n        width: 100%;\n\n        ".concat((0, e_.IR)(t, function(e) {
                        return "number" == typeof e ? "padding-bottom: ".concat(100 / e, "%") : "viewport-height" === e ? "padding-bottom: 100vh" : ""
                    }, null == n ? void 0 : n.media), ";\n      }\n    ") : ""
                }, ":fullscreen{padding-bottom:100vh;background:black;}:-webkit-full-screen{padding-bottom:100vh;background:black;}:fullscreen video{object-fit:contain;object-position:center center;}:-webkit-full-screen video{object-fit:contain;object-position:center center;}"),
                eC = (0, l.forwardRef)(function(e, n) {
                    return (0, a.Y)(ew, (0, r._)({
                        ref: n
                    }, e))
                });
            eC.displayName = "ContainerPrimitive";
            var ex = (0, l.forwardRef)(function(e, n) {
                var t = _().player;
                return (0, l.useImperativeHandle)(n, function() {
                    return {
                        play: function() {
                            return null == t ? void 0 : t.play()
                        },
                        pause: function() {
                            return null == t ? void 0 : t.pause()
                        },
                        reset: function() {
                            return null == t ? void 0 : t.setCurrentTime(0)
                        },
                        duration: function() {
                            return (null == t ? void 0 : t.duration()) || 0
                        }
                    }
                }, [t]), null
            });
            ex.displayName = "ImperativeHandlePrimitive";
            var eP = (0, l.createContext)(!1);

            function eS() {
                var e = (0, l.useContext)(eP);
                return (0, b.V)(e, "This hook needs to be used inside a <VideoPlayer.Root />"), e
            }
            var eL = function(e) {
                    var n = e.children,
                        t = e.onLoad,
                        r = _().player,
                        o = (0, g._)((0, l.useState)(!1), 2),
                        i = o[0],
                        u = o[1];
                    return (0, l.useEffect)(function() {
                        if (r && !i) return r.on("loadeddata", e),
                            function() {
                                r.off("loadeddata", e)
                            };

                        function e() {
                            r.readyState() >= 2 && (u(!0), null == t || t(), r.off("loadeddata", e))
                        }
                    }, [r, i, t]), (0, a.Y)(eP.Provider, {
                        value: i,
                        children: n
                    })
                },
                ek = function(e) {
                    var n = e.children,
                        t = eS();
                    return "function" == typeof n ? (0, a.Y)(a.FK, {
                        children: n({
                            loaded: t
                        })
                    }) : t ? null : (0, a.Y)(a.FK, {
                        children: n
                    })
                },
                eR = (0, l.createContext)({
                    loop: !1,
                    live: !1,
                    autoplay: !1
                });

            function eI() {
                var e = (0, l.useContext)(eR);
                return (0, b.V)(e, "This hook needs to be used inside a <VideoPlayer.Root />"), e
            }
            var eV = function(e) {
                    var n = e.loop,
                        t = e.live,
                        r = e.autoplay,
                        o = e.children;
                    return (0, a.Y)(eR.Provider, {
                        value: {
                            loop: n,
                            live: t,
                            autoplay: r
                        },
                        children: o
                    })
                },
                eF = (0, p.default)("div", {
                    target: "e1oni1rs0"
                })("inset:0;position:absolute;display:flex;z-index:", function(e) {
                    var n;
                    return null === (n = e.theme.layers) || void 0 === n ? void 0 : n.foreground
                }, ";"),
                eE = (0, l.forwardRef)(function(e, n) {
                    var t = e.poster,
                        l = (e.autoplay, e.playOnHover),
                        u = e.children,
                        d = e.onPointerEnter,
                        c = e.onPointerUp,
                        s = (0, i._)(e, ["poster", "autoplay", "playOnHover", "children", "onPointerEnter", "onPointerUp"]),
                        f = z(),
                        v = B(),
                        p = _(),
                        m = p.player,
                        h = p.getVideoRef;
                    return (0, a.Y)(eF, (0, o._)((0, r._)({
                        ref: n,
                        id: "viewport",
                        onPointerEnter: function(e) {
                            null == d || d(e), l && (null == m || m.play())
                        },
                        onPointerUp: function(e) {
                            var n, t, r, o = h(),
                                i = null == o ? void 0 : null === (n = o.parentElement) || void 0 === n ? void 0 : n.parentElement;
                            null == c || c(e);
                            var a = null == i ? void 0 : null === (t = i.querySelector("#scrubber-bar")) || void 0 === t ? void 0 : t.contains(e.target),
                                l = null == i ? void 0 : null === (r = i.querySelector("#controls-bar")) || void 0 === r ? void 0 : r.contains(e.target);
                            a || l || (f ? null == m || m.pause() : null == m || m.play())
                        }
                    }, s), {
                        children: !t || v ? (0, a.Y)(a.FK, {
                            children: u
                        }) : null
                    }))
                });
            eE.displayName = "ViewportPrimitive";
            var eD = {
                    Root: function(e) {
                        var n = e.loop,
                            t = e.live,
                            r = e.autoplay,
                            o = void 0 !== r && r,
                            i = e.playOnHover,
                            l = e.muted,
                            u = e.children,
                            d = e.onLoad,
                            c = e.onPlay,
                            s = e.onPause,
                            f = e.onStart,
                            v = e.onProgressChange;
                        return (0, a.Y)(eV, {
                            loop: void 0 !== n && n,
                            live: void 0 !== t && t,
                            autoplay: o,
                            children: (0, a.Y)(w, {
                                children: (0, a.Y)(eL, {
                                    onLoad: d,
                                    children: (0, a.Y)(T, {
                                        autoplay: o,
                                        onPlay: c,
                                        onPause: s,
                                        onStart: f,
                                        children: (0, a.Y)(M, {
                                            muted: void 0 === l || l,
                                            autoplay: o,
                                            playOnHover: void 0 !== i && i,
                                            children: (0, a.Y)(P, {
                                                children: (0, a.Y)(I, {
                                                    onChange: v,
                                                    children: (0, a.Y)(G, {
                                                        children: u
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    },
                    Container: eC,
                    Viewport: eE,
                    ImperativeHandle: ex
                },
                eH = (0, p.default)(v.B, {
                    target: "e1v8z9mm0"
                })("inset:0;position:absolute;z-index:", function(e) {
                    var n;
                    return null === (n = e.theme.layers) || void 0 === n ? void 0 : n.foreground
                }, ";"),
                eM = (0, p.default)(eD.Viewport, {
                    target: "e1v8z9mm1"
                })("--color:", function(e) {
                    return e.color
                }, ";--blend-mode:", function(e) {
                    return e.blend ? "difference" : "normal"
                }, ";@supports (mix-blend-mode:var(--blend-mode)){mix-blend-mode:var(--blend-mode);}"),
                eN = (0, l.forwardRef)(function(e, n) {
                    var t = e.ratio,
                        l = e.url,
                        u = e.loop,
                        d = e.live,
                        c = e.muted,
                        s = e.autoplay,
                        f = e.loader,
                        v = e.color,
                        p = e.blend,
                        m = e.playOnHover,
                        h = e.controls,
                        y = e.a11yControls,
                        g = e.poster,
                        b = e.viewportSlot,
                        Y = e.children,
                        _ = e.onLoad,
                        w = e.onPlay,
                        C = e.onPause,
                        x = e.onStart,
                        P = e.onProgressChange,
                        S = (0, i._)(e, ["ratio", "url", "loop", "live", "muted", "autoplay", "loader", "color", "blend", "playOnHover", "controls", "a11yControls", "poster", "viewportSlot", "children", "onLoad", "onPlay", "onPause", "onStart", "onProgressChange"]),
                        L = !!l && (m || s) && !h;
                    return (0, a.Y)(eD.Root, {
                        loop: u,
                        live: d,
                        muted: c,
                        autoplay: s,
                        playOnHover: m,
                        onLoad: _,
                        onPlay: w,
                        onPause: C,
                        onStart: x,
                        onProgressChange: P,
                        children: (0, a.FD)(eD.Container, (0, o._)((0, r._)({
                            ratio: t
                        }, S), {
                            children: [(0, a.Y)(eD.ImperativeHandle, {
                                ref: n
                            }), f && !g ? (0, a.Y)(a.FK, {
                                children: f
                            }) : null, Y, g ? (0, a.Y)(a.FK, {
                                children: g
                            }) : null, (0, a.FD)(eM, {
                                color: void 0 === v ? "white" : v,
                                blend: p,
                                autoplay: s,
                                playOnHover: m,
                                poster: !!g,
                                children: [L ? (0, a.Y)(eH, {
                                    href: l,
                                    target: "_blank",
                                    "aria-label": l
                                }) : null, b ? (0, a.Y)(a.FK, {
                                    children: b
                                }) : null, h ? (0, a.Y)(a.FK, {
                                    children: h
                                }) : null, s && !h && y ? (0, a.Y)(a.FK, {
                                    children: y
                                }) : null]
                            })]
                        }))
                    })
                });
            eN.displayName = "GenericVideoPlayer";
            var ej = t(8234),
                ez = (0, p.default)("div", {
                    target: "ewpykv80"
                })("width:100%;height:100%;.video-js{position:absolute;top:0;left:0;background:none;padding:0;width:100%;height:100%;video{width:100%;height:100%;object-fit:", function(e) {
                    var n = e.containment;
                    return ({
                        crop: "cover",
                        "maintain-ratio": "contain",
                        stretch: "fill"
                    })[void 0 === n ? "crop" : n]
                }, ";object-position:center center;", function(e) {
                    var n = e.theme,
                        t = e.alignment;
                    return t ? (0, e_.IR)(t, function(e) {
                        return "object-position: ".concat(e, ";")
                    }, null == n ? void 0 : n.media) : ""
                }, ";}.vjs-loading-spinner,.vjs-modal-dialog,.vjs-control-bar,.vjs-big-play-button,.vjs-text-track-display,.vjs-poster,.vjs-player-info-modal,.vjs-menu{display:none;}}"),
                eB = {},
                eT = function(e) {
                    var n = e.src,
                        t = e.accountId,
                        r = e.playerId,
                        o = e.brightcoveSrcUrl,
                        i = e.videoPrefix,
                        u = e.deliveryConfigId,
                        d = e.containment,
                        c = e.alignment,
                        s = (0, l.useRef)(null),
                        f = H().muted,
                        v = eI(),
                        p = v.loop,
                        m = v.autoplay,
                        h = _(),
                        y = h.player,
                        b = h.setPlayer,
                        Y = h.setVideoRef,
                        w = (0, g._)((0, ej.C)(), 2),
                        C = w[0],
                        x = w[1],
                        P = (0, l.useCallback)(function(e) {
                            e && (s.current = e, Y(e))
                        }, [Y]),
                        S = (0, l.useCallback)(function() {
                            if (t && r && o) return (function(e) {
                                    var n = e.accountId,
                                        t = e.playerId,
                                        r = e.brightcoveSrcUrl,
                                        o = "".concat(n, "-").concat(t);
                                    if (o in eB) return eB[o];
                                    var i = new Promise(function(e, n) {
                                        var t = document.createElement("script");
                                        t.src = r, t.addEventListener("load", function() {
                                            e(window.bc)
                                        }), t.addEventListener("error", function() {
                                            return n(Error("Error loading BrightCove Player"))
                                        }), document.body.appendChild(t)
                                    });
                                    return eB[o] = i, i
                                })({
                                    accountId: t,
                                    playerId: r,
                                    brightcoveSrcUrl: o
                                }).then(function(e) {
                                    if (s.current) {
                                        var t = (0, e_.Q8)(n),
                                            r = !!RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(t);
                                        !r && (s.current.setAttribute("data-video-id", "".concat(i).concat(t)), u && s.current.setAttribute("data-delivery-config-id", u));
                                        var o = e(s.current);
                                        r && o.loadMedia({
                                            src: t
                                        }), b({
                                            play: function() {
                                                o.play()
                                            },
                                            pause: function() {
                                                o.pause()
                                            },
                                            mute: function() {
                                                o.muted(!0)
                                            },
                                            unmute: function() {
                                                o.muted(!1)
                                            },
                                            duration: function() {
                                                return o.duration()
                                            },
                                            getVolume: function() {
                                                return o.volume()
                                            },
                                            setVolume: function(e) {
                                                o.volume(e)
                                            },
                                            isMuted: function() {
                                                return o.muted()
                                            },
                                            getCurrentTime: function() {
                                                return o.currentTime()
                                            },
                                            setCurrentTime: function(e) {
                                                o.currentTime(e)
                                            },
                                            bufferedEnd: function() {
                                                return o.bufferedEnd()
                                            },
                                            getSrc: function() {
                                                return o.contentEl().getAttribute("data-video-id") || ""
                                            },
                                            readyState: function() {
                                                return o.readyState()
                                            },
                                            dispose: function() {
                                                o.dispose()
                                            },
                                            on: function(e, n) {
                                                o.on(e, n)
                                            },
                                            off: function(e, n) {
                                                o.off(e, n)
                                            },
                                            one: function(e, n) {
                                                o.one(e, n)
                                            }
                                        })
                                    }
                                }).catch(function(e) {
                                    console.error(e)
                                }),
                                function() {
                                    null == y || y.dispose()
                                }
                        }, [n, t, r, o, i, u, y, b]);
                    return (0, l.useEffect)(function() {
                        if (x && !y) return S()
                    }, [x, y, S]), (0, a.Y)(ez, {
                        ref: C,
                        containment: void 0 === d ? "crop" : d,
                        alignment: void 0 === c ? "center center" : c,
                        children: (0, a.Y)("video-js", {
                            ref: P,
                            "data-account": t,
                            "data-player": r,
                            autoplay: m || void 0,
                            loop: p || void 0,
                            muted: f || void 0,
                            poster: "",
                            playsinline: !0
                        })
                    })
                },
                eO = (0, l.forwardRef)(function(e, n) {
                    var t = e.src,
                        l = e.playerId,
                        u = e.accountId,
                        d = e.videoPrefix,
                        c = e.deliveryConfigId,
                        s = e.brightcoveSrcUrl,
                        f = e.containment,
                        v = e.alignment,
                        p = (0, i._)(e, ["src", "playerId", "accountId", "videoPrefix", "deliveryConfigId", "brightcoveSrcUrl", "containment", "alignment"]);
                    return (0, a.Y)(eN, (0, o._)((0, r._)({
                        ref: n
                    }, p), {
                        children: (0, a.Y)(eT, {
                            src: t,
                            playerId: l,
                            accountId: u,
                            videoPrefix: d,
                            deliveryConfigId: c,
                            brightcoveSrcUrl: s,
                            containment: f,
                            alignment: v
                        })
                    }))
                });
            eO.displayName = "BrightcovePlayer";
            var eU = function(e) {
                    var n = e.video,
                        t = e.children,
                        r = (0, g._)((0, l.useState)(!!n), 2),
                        o = r[0],
                        i = r[1];
                    return (0, a.Y)(a.FK, {
                        children: o && (0, l.isValidElement)(n) ? (0, l.cloneElement)(n, {
                            onClose: function() {
                                return i(!1)
                            }
                        }) : t
                    })
                },
                eK = (0, l.forwardRef)(function(e, n) {
                    var t = e.videoPoster,
                        l = (0, i._)(e, ["videoPoster"]);
                    return (0, a.Y)(eU, {
                        video: t,
                        children: (0, a.Y)(eO, (0, o._)((0, r._)({}, l), {
                            ref: n
                        }))
                    })
                });
            eK.displayName = "VideoPlayer";
            var eA = t(65636),
                eZ = t(17437),
                eX = function(e) {
                    var n;
                    return (0, eZ.css)("#scrubber-bar{opacity:0;transition:opacity 360ms cubic-bezier(0.4,0,0.6,1);}#fullscreen,#play-pause{display:none;}#duration span{visibility:hidden;}#viewport:hover &,#viewport:focus &{#title-container{&.hidden-on-hover{display:none;", null === (n = e.media) || void 0 === n ? void 0 : n.gteLarge, "{display:-webkit-box;}}}#scrubber-bar{opacity:1;}#fullscreen,#play-pause,#mute-unmute{display:flex;}#duration{flex:1;}#duration span{visibility:visible;}}")
                },
                eq = (0, p.default)(ee, {
                    target: "e1jnfqnq0"
                })("width:100%;position:relative;z-index:", function(e) {
                    var n;
                    return null === (n = e.theme.layers) || void 0 === n ? void 0 : n.foreground
                }, ";color:var(--color);pointer-events:none;#fullscreen,#play-pause,#mute-unmute,#scrubber-bar{pointer-events:all;}::before{content:'';position:absolute;left:0;bottom:0;height:12.3rem;width:100%;background:linear-gradient(180deg,#000000 0%,rgba(0,0,0,0) 100%);mix-blend-mode:multiply;opacity:", function(e) {
                    var n = e.shadow;
                    return null != n ? n / 100 : 0
                }, ";transform:rotate(-180deg);z-index:-1;", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.gteMedium
                }, "{height:15.5rem;}", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.extraLarge
                }, "{height:18.9rem;}}", function(e) {
                    var n = e.theme;
                    return e.fixedPositions ? "" : eX(n)
                }, ";a,button{color:var(--color);@supports (mix-blend-mode:var(--blend-mode)){mix-blend-mode:var(--blend-mode);}}"),
                eG = (0, p.default)("div", {
                    target: "e1jnfqnq1"
                })("width:100%;display:flex;align-items:flex-end;justify-content:flex-end;padding:2.4rem 1.2rem;", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.gteMedium
                }, "{padding:2rem;}", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.extraLarge
                }, "{padding:3.2rem;}"),
                e$ = (0, p.default)("div", {
                    target: "e1jnfqnq2"
                })("display:flex;", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.gteLarge
                }, "{flex-grow:1;}"),
                eQ = (0, p.default)("div", {
                    target: "e1jnfqnq3"
                })("display:flex;flex-direction:row;flex-grow:1;justify-content:flex-end;gap:2.4rem;", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.gteMedium
                }, "{gap:3.2rem;}", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.gteLarge
                }, "{flex-grow:0;}"),
                eW = function(e) {
                    var n = e.show,
                        t = e.defaultSlot,
                        r = e.children;
                    return n ? l.Children.count(r) > 0 ? (0, a.Y)(a.FK, {
                        children: r
                    }) : (0, a.Y)(a.FK, {
                        children: t
                    }) : null
                },
                eJ = function(e) {
                    var n = e.title,
                        t = e.playPause,
                        l = e.playPauseSlot,
                        u = e.muteUnmute,
                        d = e.muteUnmuteSlot,
                        c = e.fullscreen,
                        s = void 0 === c || c,
                        f = e.fullscreenSlot,
                        v = e.scrubberBar,
                        p = void 0 === v || v,
                        m = e.scrubberBarSlot,
                        h = e.durationSlot,
                        y = e.live,
                        g = e.liveSlot,
                        b = e.keyboard,
                        Y = e.shadow,
                        _ = e.fixedPositions,
                        w = (e.onClick, (0, i._)(e, ["title", "playPause", "playPauseSlot", "muteUnmute", "muteUnmuteSlot", "fullscreen", "fullscreenSlot", "scrubberBar", "scrubberBarSlot", "durationSlot", "live", "liveSlot", "keyboard", "shadow", "fixedPositions", "onClick"])),
                        C = eI().live,
                        x = null != y ? y : C;
                    return (0, a.FD)(a.FK, {
                        children: [void 0 === b || b ? (0, a.Y)($, {}) : null, (0, a.FD)(eq, (0, o._)((0, r._)({
                            tabIndex: 0,
                            shadow: Y,
                            fixedPositions: void 0 !== _ && _
                        }, w), {
                            children: [(0, a.Y)(eW, {
                                show: !!p,
                                defaultSlot: (0, a.Y)(ea, {}),
                                children: m
                            }), (0, a.FD)(eG, {
                                id: "controls-bar",
                                children: [(0, a.Y)(e$, {
                                    id: "title-container",
                                    className: p || s ? "hidden-on-hover" : void 0,
                                    children: n ? (0, a.Y)(a.FK, {
                                        children: n
                                    }) : null
                                }), (0, a.FD)(eQ, {
                                    children: [(0, a.Y)(eW, {
                                        show: x && C,
                                        defaultSlot: (0, a.Y)(eu, {}),
                                        children: g
                                    }), (0, a.Y)(eW, {
                                        show: !!(void 0 === t || t),
                                        defaultSlot: (0, a.Y)(ev, {}),
                                        children: l
                                    }), (0, a.Y)(eW, {
                                        show: !!p,
                                        defaultSlot: (0, a.Y)(E, {}),
                                        children: h
                                    }), (0, a.Y)(eW, {
                                        show: !!s,
                                        defaultSlot: (0, a.Y)(eb, {}),
                                        children: f
                                    }), (0, a.Y)(eW, {
                                        show: !!(void 0 === u || u),
                                        defaultSlot: (0, a.Y)(eh, {}),
                                        children: d
                                    })]
                                })]
                            })]
                        }))]
                    })
                },
                e0 = (0, p.default)(es.p, {
                    target: "em77cjp0"
                })("inset:0;position:absolute;z-index:", function(e) {
                    var n;
                    return null === (n = e.theme.layers) || void 0 === n ? void 0 : n.foreground
                }, ";"),
                e1 = (0, p.default)(eA.N, {
                    target: "em77cjp1"
                })(function(e) {
                    var n;
                    return null === (n = e.theme.typography) || void 0 === n ? void 0 : n.bodyLarge
                }, ";color:var(--color);cursor:pointer;padding:0.2rem 0;width:fit-content;@supports (mix-blend-mode:var(--blend-mode)){mix-blend-mode:var(--blend-mode);}"),
                e2 = (0, p.default)(y, {
                    target: "em77cjp2"
                })("color:var(--color);@supports (mix-blend-mode:var(--blend-mode)){mix-blend-mode:var(--blend-mode);}"),
                e5 = function(e) {
                    var n = e.title,
                        t = e.cta,
                        l = (0, i._)(e, ["title", "cta"]);
                    return (0, a.Y)(eJ, (0, o._)((0, r._)({}, l), {
                        id: "video-poster-controls",
                        alignment: "end",
                        scrubberBar: !1,
                        fullscreen: !1,
                        fixedPositions: !0,
                        title: n || t ? (0, a.FD)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.4rem"
                            },
                            children: [n ? (0, a.Y)(e2, {
                                children: n
                            }) : null, t ? (0, a.Y)(e1, {
                                asChild: !0,
                                variant: "tertiary",
                                children: (0, a.Y)("span", {
                                    children: t
                                })
                            }) : null]
                        }) : null
                    }))
                },
                e4 = function(e) {
                    var n = e.onClose,
                        t = (0, i._)(e, ["onClose"]);
                    return (0, a.Y)(eK, (0, o._)((0, r._)({}, t), {
                        controls: !1,
                        viewportSlot: (0, a.Y)(e0, {
                            onClick: n,
                            onPointerUp: function(e) {
                                e.stopPropagation(), e.preventDefault()
                            }
                        })
                    }))
                },
                e8 = t(33201),
                e3 = function(e) {
                    var n, t;
                    return (0, eZ.css)("inset:0;position:absolute;z-index:", null === (n = e.layers) || void 0 === n ? void 0 : n.foreground, ";cursor:pointer;transition:opacity 360ms cubic-bezier(0,0,0.2,1);", null === (t = e.media) || void 0 === t ? void 0 : t.small, "{transition:opacity 320ms cubic-bezier(0,0,0.2,1);}")
                },
                e9 = (0, l.forwardRef)(function(e, n) {
                    var t = e.asChild,
                        l = e.css,
                        u = e.style,
                        d = (0, i._)(e, ["asChild", "css", "style"]),
                        c = eS(),
                        s = B(),
                        f = t ? m.DX : e8._,
                        v = c && s;
                    return (0, a.Y)(f, (0, o._)((0, r._)({
                        ref: n
                    }, d), {
                        css: [l, e3],
                        style: (0, o._)((0, r._)({}, u), {
                            opacity: v ? 0 : 1,
                            pointerEvents: v ? "none" : "all"
                        })
                    }))
                });
            e9.displayName = "PosterImage";
            var e6 = function(e) {
                    return (0, a.Y)(eJ, (0, r._)({
                        id: "controls"
                    }, e))
                },
                e7 = (0, p.default)(eJ, {
                    target: "e1xrtlne0"
                })("> div > div{gap:0.8rem;", function(e) {
                    var n;
                    return null === (n = e.theme.media) || void 0 === n ? void 0 : n.gteMedium
                }, "{gap:3.2rem;}}"),
                ne = function(e) {
                    var n = e.muteUnmute,
                        t = (0, i._)(e, ["muteUnmute"]);
                    return (0, a.Y)(e7, (0, r._)({
                        id: "a11y-controls",
                        sticky: "bottom",
                        live: !1,
                        fullscreen: !1,
                        scrubberBar: !1,
                        muteUnmute: void 0 !== n && n,
                        keyboard: !0,
                        fixedPositions: !0
                    }, t))
                },
                nn = (0, eZ.keyframes)("0%,85%,100%{opacity:0;}5%,80%{opacity:1;}"),
                nt = (0, eZ.css)("animation:1s ease 0s infinite normal none running ", nn, ";"),
                nr = (0, eZ.keyframes)("0%,25%,85%,100%{opacity:0;}30%,80%{opacity:1;}"),
                no = (0, eZ.css)("animation:1s ease 0s infinite normal none running ", nr, ";"),
                ni = (0, eZ.keyframes)("0%,50%,85%,100%{opacity:0;}55%,80%{opacity:1;}"),
                na = (0, eZ.css)("animation:1s ease 0s infinite normal none running ", ni, ";"),
                nl = (0, l.forwardRef)(function(e, n) {
                    var t = e.asChild,
                        l = (0, i._)(e, ["asChild"]),
                        u = t ? m.DX : "svg";
                    return (0, a.Y)(u, (0, o._)((0, r._)({
                        ref: n,
                        width: "48px",
                        height: "18px",
                        viewBox: "0 0 48 18"
                    }, l), {
                        children: (0, a.FD)("g", {
                            stroke: "none",
                            strokeWidth: "0",
                            fillRule: "evenodd",
                            children: [(0, a.Y)("circle", {
                                cx: "8",
                                cy: "10",
                                r: "4",
                                opacity: "0",
                                fill: "#000f9f",
                                css: nt
                            }), (0, a.Y)("circle", {
                                cx: "24",
                                cy: "10",
                                r: "4",
                                opacity: "0",
                                fill: "#000f9f",
                                css: no
                            }), (0, a.Y)("circle", {
                                cx: "40",
                                cy: "10",
                                r: "4",
                                opacity: "0",
                                fill: "#000f9f",
                                css: na
                            })]
                        })
                    }))
                });
            nl.displayName = "DotsLoaderIcon";
            var nu = (0, p.default)(nl, {
                    target: "e1pa818j0"
                })("position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:opacity 200ms;"),
                nd = {
                    Dots: function(e) {
                        var n = e.style,
                            t = (0, i._)(e, ["style"]);
                        return (0, a.Y)(ek, {
                            children: function(e) {
                                var i = e.loaded;
                                return (0, a.Y)(nu, (0, o._)((0, r._)({}, t), {
                                    style: (0, o._)((0, r._)({}, n), {
                                        opacity: i ? 0 : 1
                                    })
                                }))
                            }
                        })
                    }
                },
                nc = t(14404),
                ns = t(72485),
                nf = (d()() || {
                    publicRuntimeConfig: {}
                }).publicRuntimeConfig,
                nv = nf.APP_ENV,
                np = nf.BRIGHTCOVE_ACCOUNT_ID,
                nm = nf.BRIGHTCOVE_PLAYER_ID,
                nh = nf.BRIGHTCOVE_PREFIX,
                ny = nf.BRIGHTCOVE_DELIVERY_CONFIG_ID,
                ng = (0, ns.H)({
                    appEnv: nv,
                    accountId: np,
                    playerId: nm
                }),
                nb = function() {
                    var e = (0, c.B)().t;
                    return (0, a.Y)(eY.PlayPause, {
                        playingProps: {
                            "aria-label": e("videoplayer.controls.pause")
                        },
                        pausedProps: {
                            "aria-label": e("videoplayer.controls.play")
                        }
                    })
                },
                nY = function() {
                    var e = (0, c.B)().t;
                    return (0, a.Y)(eY.MuteUnmute, {
                        mutedProps: {
                            "aria-label": e("videoplayer.controls.sound")
                        },
                        unmutedProps: {
                            "aria-label": e("videoplayer.controls.soundoff")
                        }
                    })
                },
                n_ = function() {
                    var e = (0, c.B)().t;
                    return (0, a.Y)(eY.Fullscreen, {
                        fullscreenProps: {
                            "aria-label": e("videoplayer.controls.close")
                        },
                        normalscreenProps: {
                            "aria-label": e("videoplayer.controls.fullscreen")
                        }
                    })
                },
                nw = function() {
                    var e = (0, c.B)().t;
                    return (0, a.Y)(eY.ScrubberBar, {
                        "aria-label": e("videoplayer.controls.progress")
                    })
                },
                nC = function() {
                    var e = (0, c.B)().t;
                    return (0, a.Y)(eY.LiveIndicator, {
                        children: e("videoplayer.controls.live")
                    })
                },
                nx = function(e) {
                    var n = e.url,
                        t = e.rolodex,
                        o = (0, i._)(e, ["url", "rolodex"]),
                        l = (0, a.Y)(eY.Title, (0, r._)({}, o));
                    return n && (l = (0, a.Y)(v.B, {
                        href: n,
                        children: l
                    })), t && (l = (0, a.Y)(f.Y, {
                        children: l
                    })), (0, a.Y)(a.FK, {
                        children: l
                    })
                },
                nP = function(e) {
                    return (0, a.Y)(e6, (0, o._)((0, r._)({}, e), {
                        playPause: !1,
                        playPauseSlot: (0, a.Y)(nb, {}),
                        muteUnmuteSlot: (0, a.Y)(nY, {}),
                        fullscreenSlot: (0, a.Y)(n_, {}),
                        scrubberBarSlot: (0, a.Y)(nw, {}),
                        liveSlot: (0, a.Y)(nC, {}),
                        keyboard: !0
                    }))
                },
                nS = function(e) {
                    return (0, a.Y)(ne, (0, o._)((0, r._)({}, e), {
                        playPauseSlot: (0, a.Y)(nb, {}),
                        muteUnmuteSlot: (0, a.Y)(nY, {})
                    }))
                },
                nL = (0, l.forwardRef)(function(e, n) {
                    var t = e.loader,
                        o = e.controls,
                        l = e.a11yControls,
                        u = e.onPlay,
                        d = e.onPause,
                        c = (0, i._)(e, ["loader", "controls", "a11yControls", "onPlay", "onPause"]),
                        s = (0, nc.s)();
                    return (0, a.Y)(eK, (0, r._)({
                        ref: n,
                        id: "video-player",
                        playerId: nm,
                        accountId: np,
                        videoPrefix: nh,
                        deliveryConfigId: ny,
                        brightcoveSrcUrl: ng,
                        loader: t ? (0, a.Y)(a.FK, {
                            children: t
                        }) : (0, a.Y)(nd.Dots, {}),
                        controls: o ? (0, a.Y)(a.FK, {
                            children: o
                        }) : null,
                        a11yControls: l ? (0, a.Y)(a.FK, {
                            children: l
                        }) : (0, a.Y)(nS, {}),
                        onPlay: function(e) {
                            null == u || u(e), s.video.play({
                                component: "BrightcovePlayer",
                                description: e
                            })
                        },
                        onPause: function(e) {
                            null == d || d(e), s.video.pause({
                                component: "BrightcovePlayer",
                                description: e
                            })
                        }
                    }, c))
                }),
                nk = function(e) {
                    return (0, a.Y)(e5, (0, r._)({}, e))
                },
                nR = function(e) {
                    return (0, a.Y)(e9, (0, o._)((0, r._)({
                        asChild: !0
                    }, e), {
                        children: (0, a.Y)(s._, {})
                    }))
                },
                nI = function(e) {
                    var n = e.a11yControls,
                        t = (0, i._)(e, ["a11yControls"]);
                    return (0, a.Y)(e4, (0, o._)((0, r._)({}, t), {
                        playerId: nm,
                        accountId: np,
                        videoPrefix: nh,
                        deliveryConfigId: ny,
                        brightcoveSrcUrl: ng,
                        a11yControls: n ? (0, a.Y)(a.FK, {
                            children: n
                        }) : (0, a.Y)(nk, {})
                    }))
                };
            nL.displayName = "VideoPlayer"
        },
        8234: (e, n, t) => {
            t.d(n, {
                C: () => l
            });
            var r = t(71893),
                o = t(4418),
                i = t(93038),
                a = t(96540);

            function l(e) {
                var n, t, l, u, d, c, s, f, v, p, m, h, y = e || {},
                    g = y.onIntersect,
                    b = (0, o._)(y, ["onIntersect"]),
                    Y = (0, i._)((0, a.useState)(!1), 2),
                    _ = Y[0],
                    w = Y[1];
                return [(t = (n = (0, r._)({
                    onIntersect: (0, a.useCallback)(function(e, n) {
                        var t = (0, i._)(e, 1)[0].isIntersecting;
                        t && (w(t), n.disconnect()), null == g || g(e, n)
                    }, [g])
                }, b)).root, l = n.onIntersect, d = void 0 === (u = n.threshold) ? 0 : u, s = void 0 === (c = n.rootMargin) ? "0px" : c, v = void 0 !== (f = n.disabled) && f, m = (p = (0, i._)((0, a.useState)(), 2))[0], h = p[1], (0, a.useEffect)(function() {
                    if (!v && m) {
                        var e = new IntersectionObserver(l, {
                            root: t,
                            rootMargin: s,
                            threshold: d
                        });
                        return e.observe(m),
                            function() {
                                e.unobserve(m)
                            }
                    }
                }, [v, l, t, s, m, d]), (0, a.useCallback)(function(e) {
                    h(e)
                }, [])), _]
            }
        },
        46827: (e, n, t) => {
            t.d(n, {
                T: () => i
            });
            var r = t(93038),
                o = t(61642);

            function i(e) {
                var n = e.sources,
                    t = e.srcSet;
                if (!t && !n) return "";
                if ("string" == typeof n) return n;
                if (Array.isArray(n)) {
                    var i = n[0];
                    return "string" == typeof i ? i : (void 0 === i ? "undefined" : (0, o._)(i)) === "object" ? Object.values(i)[0] : ""
                }
                var a = t.split(",")[0];
                return (0, r._)(a.trim().split(" "), 1)[0]
            }
        },
        28922: (e, n, t) => {
            t.d(n, {
                F: () => o
            });
            var r = t(93038);

            function o(e) {
                return Object.entries(e).reduce(function(e, n) {
                    var t = (0, r._)(n, 2),
                        o = t[0],
                        i = t[1];
                    return "".concat(e, ", ").concat(i, " ").concat(o, "w")
                }, "").substring(2)
            }
        },
        33201: (e, n, t) => {
            t.d(n, {
                _: () => C
            });
            var r, o = t(71893),
                i = t(4418),
                a = t(93038),
                l = t(84577),
                u = t(61642),
                d = t(2445),
                c = t(96540),
                s = t(69815),
                f = t(17437),
                v = t(54417),
                p = t(66797),
                m = t(28922),
                h = t(91942),
                y = function(e) {
                    var n = e.sources,
                        t = e.sizes,
                        r = (0, p.u)(),
                        o = (0, c.useMemo)(function() {
                            var e = (0, h.pD)(n);
                            return (0, h.tS)(e)
                        }, [n]);
                    return (0, d.Y)(d.FK, {
                        children: Object.entries(o).map(function(e) {
                            var n, o = (0, a._)(e, 2),
                                i = o[0],
                                l = o[1];
                            if (!l) return null;
                            var u = "string" == typeof l ? l : (0, m.F)(l);
                            return (0, d.Y)("source", {
                                sizes: t,
                                srcSet: u,
                                media: null === (n = r.media) || void 0 === n ? void 0 : n.query[i]
                            }, "".concat(i, "-").concat(u))
                        })
                    })
                },
                g = t(91071),
                b = "undefined" != typeof document && void 0 !== (null === (r = document.createElement("img")) || void 0 === r ? void 0 : r.loading),
                Y = t(46827);

            function _() {
                var e = (0, l._)(["\n      ::before {\n        content: '';\n        display: flex;\n        width: 100%;\n\n        ", ";\n      }\n    "]);
                return _ = function() {
                    return e
                }, e
            }
            var w = (0, s.default)("div", {
                    target: "euj9whz0"
                })("position:relative;display:flex;background-color:", function(e) {
                    var n;
                    return null === (n = e.theme.colors) || void 0 === n ? void 0 : n.grey01
                }, ";", function(e) {
                    var n = e.ratio,
                        t = e.theme;
                    return n && (0, f.css)(_(), (0, h.IR)(n, function(e) {
                        return "number" == typeof e ? "padding-bottom: ".concat(100 / e, "%") : "viewport-height" === e ? "padding-bottom: 100vh" : ""
                    }, null == t ? void 0 : t.media))
                }, "  > picture,> noscript > picture{width:100%;> img{width:100%;height:100%;position:relative;display:flex;color:transparent;object-fit:", function(e) {
                    var n = e.containment;
                    return ({
                        crop: "cover",
                        "maintain-ratio": "contain",
                        stretch: "auto"
                    })[void 0 === n ? "crop" : n]
                }, ";font-family:'object-fit:cover;';", function(e) {
                    var n = e.ratio,
                        t = e.theme;
                    return n && (0, h.IR)(n, function(e) {
                        return void 0 !== e ? "position: absolute; top: 0; left: 0;" : ""
                    }, t.media)
                }, ";", function(e) {
                    var n = e.alignment,
                        t = e.theme;
                    return n && (0, h.IR)(n, function(e) {
                        return "object-position: ".concat(e, ";")
                    }, t.media)
                }, ";}}"),
                C = (0, c.forwardRef)(function(e, n) {
                    var t = e.sources,
                        r = e.ratio,
                        l = e.src,
                        s = e.srcSet,
                        f = e.alt,
                        p = e.sizes,
                        h = void 0 === p ? "100vw" : p,
                        _ = e.fade,
                        C = e.lazy,
                        x = void 0 === C || C,
                        P = e.alignment,
                        S = e.containment,
                        L = e.fetchPriority,
                        k = e.className,
                        R = e.style,
                        I = e.onLoad,
                        V = (0, i._)(e, ["sources", "ratio", "src", "srcSet", "alt", "sizes", "fade", "lazy", "alignment", "containment", "fetchPriority", "className", "style", "onLoad"]),
                        F = (0, c.useRef)(null),
                        E = (0, g.s)(F, n),
                        D = (0, a._)((0, c.useState)(!1), 2),
                        H = D[0],
                        M = D[1],
                        N = (0, a._)((0, c.useState)(!x), 2),
                        j = N[0],
                        z = N[1],
                        B = (0, v.useHydrationRender)();
                    (0, c.useEffect)(function() {
                        if (x && !b) {
                            var e = new IntersectionObserver(function(n) {
                                (0, a._)(n, 1)[0].isIntersecting && (z(!0), e.disconnect())
                            }, {
                                rootMargin: "250px 250px 250px 250px"
                            });
                            return F.current && e.observe(F.current),
                                function() {
                                    e.disconnect()
                                }
                        }
                    }, [x]), (0, c.useEffect)(function() {
                        F.current && F.current.currentSrc && F.current.complete && (null == I || I(), M(!0))
                    }, [I]);
                    var T = Array.isArray(t) && 1 === t.length ? t[0] : t,
                        O = (0, c.useMemo)(function() {
                            if ((void 0 === T ? "undefined" : (0, u._)(T)) === "object" && !Array.isArray(T)) return (0, m.F)(T)
                        }, [T]),
                        U = s || O,
                        K = (0, c.useMemo)(function() {
                            return (0, Y.T)({
                                sources: T,
                                srcSet: U || ""
                            })
                        }, [T, U]),
                        A = x && B || x && !b && !j;
                    return (0, d.FD)(w, {
                        ratio: r,
                        alignment: P,
                        containment: S,
                        className: k,
                        style: R,
                        children: [(0, d.FD)("picture", {
                            children: [!A && T ? (0, d.Y)(y, {
                                sources: T,
                                sizes: h
                            }) : null, (0, d.Y)("img", (0, o._)({
                                ref: E,
                                alt: f,
                                src: A ? void 0 : l || K,
                                srcSet: A ? void 0 : U,
                                sizes: h,
                                loading: x ? "lazy" : "eager",
                                fetchPriority: L,
                                style: {
                                    transition: void 0 === _ || _ ? "opacity 200ms" : void 0,
                                    opacity: A || "high" !== L && !H ? 0 : 1
                                },
                                onLoad: function() {
                                    null == I || I(), M(!0)
                                }
                            }, V))]
                        }), (0, d.Y)("noscript", {
                            children: (0, d.FD)("picture", {
                                children: [T ? (0, d.Y)(y, {
                                    sources: T,
                                    sizes: h
                                }) : null, (0, d.Y)("img", {
                                    ref: E,
                                    src: l || K,
                                    srcSet: U,
                                    alt: f,
                                    sizes: h,
                                    fetchPriority: L
                                })]
                            })
                        })]
                    })
                });
            C.displayName = "Image"
        },
        15370: (e, n, t) => {
            t.d(n, {
                Y: () => d
            });
            var r = t(71893),
                o = t(55456),
                i = t(4418),
                a = t(2445),
                l = t(96540),
                u = (0, t(69815).default)("div", {
                    target: "e1ynvex10"
                })("top:0;left:0;position:relative;transition:all 0.25s ease-out;transform-style:preserve-3d;backface-visibility:hidden;will-change:transform;> span{position:relative;display:block;padding-top:1rem;margin-top:-1rem;}> div{position:absolute;bottom:0px;left:0px;right:0px;top:0px;padding:1rem 0;transform-origin:bottom center;transform:rotateX(90deg) rotateY(180deg) rotateZ(180deg) translateY(100%);opacity:1;transition:all 0.25s ease-out;backface-visibility:hidden;will-change:transform;}@media (prefers-reduced-motion:no-preference){&:hover{transform:translateY(-50%) rotateX(90deg);}&:hover > div{transform:rotateX(90deg) rotateY(180deg) rotateZ(180deg)\n        translateY(calc(100% - 1rem));}}"),
                d = (0, l.forwardRef)(function(e, n) {
                    var t = e.children,
                        l = (0, i._)(e, ["children"]);
                    return (0, a.FD)(u, (0, o._)((0, r._)({
                        ref: n
                    }, l), {
                        children: [(0, a.Y)("span", {
                            children: t
                        }), (0, a.Y)("div", {
                            "aria-hidden": !0,
                            children: t
                        })]
                    }))
                });
            d.displayName = "Rolodex"
        }
    }
]);