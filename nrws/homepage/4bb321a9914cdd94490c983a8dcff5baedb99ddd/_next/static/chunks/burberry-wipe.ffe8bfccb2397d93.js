"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8406], {
        34164: (e, t, n) => {
            n.r(t), n.d(t, {
                BurberryWipe: () => m
            });
            var a = n(93038),
                r = n(2445),
                i = n(96540),
                o = n(69815),
                l = n(33144),
                u = n(70708),
                s = n(12228),
                c = (0, o.default)(l.P.div, {
                    target: "e1qe54bl0"
                })("top:-6rem;bottom:-6rem;left:0;right:0;width:100%;position:fixed;background-color:", function(e) {
                    return e.theme.colors.accent
                }, ";z-index:", function(e) {
                    var t;
                    return null === (t = e.theme.layers) || void 0 === t ? void 0 : t.nprogress
                }, ";");

            function d(e) {
                var t = e.y;
                return "translateY(".concat(t, ")")
            }
            var m = function() {
                var e = (0, s.useViewport)().small,
                    t = (0, u.I)(),
                    n = (0, a._)((0, i.useState)(""), 2),
                    o = n[0],
                    l = n[1],
                    m = (0, a._)((0, i.useState)(!0), 2),
                    f = m[0],
                    v = m[1];

                function p() {
                    v(!1)
                }
                if ((0, i.useEffect)(function() {
                        if (!t) return document.addEventListener("click", n), window.addEventListener("pageshow", p),
                            function() {
                                document.removeEventListener("click", n), window.removeEventListener("pageshow", p)
                            };

                        function e(e) {
                            return "a" === e.toLowerCase()
                        }

                        function n(t) {
                            v(!0);
                            var n, a = e((n = t.target).tagName) ? n : n.parentElement && e(n.parentElement.tagName) ? n.parentElement : null,
                                r = null == a ? void 0 : a.dataset.jumplink,
                                i = null == a ? void 0 : a.getAttribute("href"),
                                o = null == i ? void 0 : i.startsWith("#"),
                                u = null == i ? void 0 : i.startsWith("{{");
                            !i || r || o || u || (t.preventDefault(), l(i))
                        }
                    }, [t]), t) return null;
                var h = [.2, 1, .24, 1],
                    w = e ? .7 : .8,
                    g = !!o && "animate";
                return (0, r.Y)(r.FK, {
                    children: f ? (0, r.FD)(r.FK, {
                        children: [(0, r.Y)(c, {
                            initial: {
                                y: "100%"
                            },
                            variants: {
                                animate: {
                                    y: "-100%"
                                }
                            },
                            animate: g,
                            transition: {
                                duration: w,
                                delay: .1,
                                ease: h
                            },
                            transformTemplate: d,
                            onAnimationComplete: function() {
                                window.location.href = o
                            }
                        }, "blue"), (0, r.Y)(c, {
                            initial: {
                                y: "100%"
                            },
                            variants: {
                                animate: {
                                    y: 0
                                }
                            },
                            animate: g,
                            transition: {
                                duration: w,
                                delay: .1,
                                ease: h
                            },
                            transformTemplate: d,
                            style: {
                                backgroundColor: "white"
                            }
                        }, "white")]
                    }) : null
                })
            }
        }
    }
]);