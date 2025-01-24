"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9315], {
        89315: (n, i, t) => {
            t.d(i, {
                j: () => m
            });
            var a = t(29193),
                e = t(96540),
                r = t(17437),
                o = function(n, i) {
                    return (0, r.keyframes)({
                        from: "transform: translateX(" + n + "%);",
                        to: "transform: translateX(" + i + "%)"
                    })
                },
                c = (0, a.default)("div", {
                    target: "elewr4l2"
                })("width:100%;height:100%;overflow:hidden;", function(n) {
                    var i = n.open,
                        t = n.transitionInitial;
                    return !i && "transform: translateX(" + t + "%);"
                }, " ", function(n) {
                    var i = n.open,
                        t = n.close,
                        a = n.transitionFinal;
                    return i && t && "transform: translateX(" + a + "%);"
                }, " ", function(n) {
                    var i = n.animationDuration,
                        t = n.cubicBezier,
                        a = n.open,
                        e = n.transitionInitial,
                        c = n.transitionFinal;
                    return a && (0, r.css)("animation:", o(e, c), " ", i, " cubic-bezier(", t, ") alternate;", "", "")
                }, ";"),
                l = (0, a.default)("div", {
                    target: "elewr4l1"
                })("width:100%;height:100%;position:relative;overflow:hidden;", function(n) {
                    var i = n.open,
                        t = n.transitionInitial;
                    return !i && "transform: translateX(" + t + "%);"
                }, " ", function(n) {
                    var i = n.open,
                        t = n.close,
                        a = n.transitionFinal;
                    return i && t && "transform: translateX(" + a + "%);"
                }, " ", function(n) {
                    var i = n.animationDuration,
                        t = n.cubicBezier,
                        a = n.open,
                        e = n.transitionInitial,
                        c = n.transitionFinal;
                    return a && (0, r.css)("animation:", o(e, c), " ", i, " cubic-bezier(", t, ") alternate;", "", "")
                }, ";"),
                s = (0, a.default)("div", {
                    target: "elewr4l0"
                })("width:100%;height:100%;", function(n) {
                    var i = n.open,
                        t = n.transitionInitial;
                    return !i && "transform: translateX(" + t + "%);"
                }, " ", function(n) {
                    var i = n.open,
                        t = n.close,
                        a = n.transitionFinal;
                    return i && t && "transform: translateX(" + a + "%);"
                }, " ", function(n) {
                    return "center" === n.alignment && "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "
                }, " ", function(n) {
                    var i = n.animationDuration,
                        t = n.cubicBezier,
                        a = n.open,
                        e = n.transitionInitial,
                        c = n.transitionFinal;
                    return a && (0, r.css)("animation:", o(e, c), " ", i, " cubic-bezier(", t, ") alternate;", "", "")
                }, ";"),
                m = function(n) {
                    var i = n.alignment,
                        t = n.animationDuration,
                        a = n.children,
                        r = n.className,
                        o = n.close,
                        m = n.cubicBezier,
                        u = n.direction,
                        f = void 0 === u ? "center" : u,
                        d = n.open,
                        y = (0, e.useMemo)(function() {
                            switch (f) {
                                case "from-center":
                                    if (d) return o ? {
                                        initial: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        },
                                        final: {
                                            main: 50,
                                            secondary: -100,
                                            content: 50
                                        }
                                    } : {
                                        initial: {
                                            main: 50,
                                            secondary: -100,
                                            content: 50
                                        },
                                        final: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        }
                                    };
                                    return o ? {
                                        initial: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        },
                                        final: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        }
                                    } : {
                                        initial: {
                                            main: 50,
                                            secondary: -100,
                                            content: 50
                                        },
                                        final: {
                                            main: 50,
                                            secondary: -100,
                                            content: 50
                                        }
                                    };
                                case "left-right":
                                    if (d) return o ? {
                                        initial: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        },
                                        final: {
                                            main: -100,
                                            secondary: 0,
                                            content: 100
                                        }
                                    } : {
                                        initial: {
                                            main: -100,
                                            secondary: 0,
                                            content: 100
                                        },
                                        final: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        }
                                    };
                                    return o ? {
                                        initial: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        },
                                        final: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        }
                                    } : {
                                        initial: {
                                            main: -100,
                                            secondary: 0,
                                            content: 100
                                        },
                                        final: {
                                            main: -100,
                                            secondary: 0,
                                            content: 100
                                        }
                                    };
                                case "right-left":
                                    if (d) return o ? {
                                        initial: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        },
                                        final: {
                                            main: 100,
                                            secondary: 0,
                                            content: -100
                                        }
                                    } : {
                                        initial: {
                                            main: 100,
                                            secondary: 0,
                                            content: -100
                                        },
                                        final: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        }
                                    };
                                    return o ? {
                                        initial: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        },
                                        final: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        }
                                    } : {
                                        initial: {
                                            main: 100,
                                            secondary: 0,
                                            content: -100
                                        },
                                        final: {
                                            main: 100,
                                            secondary: 0,
                                            content: -100
                                        }
                                    };
                                default:
                                    if (d) return {
                                        initial: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        },
                                        final: {
                                            main: 0,
                                            secondary: 0,
                                            content: 0
                                        }
                                    };
                                    return {
                                        initial: {
                                            main: 50,
                                            secondary: -100,
                                            content: 50
                                        },
                                        final: {
                                            main: 50,
                                            secondary: -100,
                                            content: 50
                                        }
                                    }
                            }
                        }, [o, f, d]);
                    return e.createElement(c, {
                        className: r,
                        animationDuration: t,
                        open: d,
                        close: o,
                        cubicBezier: m,
                        transitionInitial: y.initial.main,
                        transitionFinal: y.final.main
                    }, e.createElement(l, {
                        animationDuration: t,
                        open: d,
                        close: o,
                        cubicBezier: m,
                        transitionInitial: y.initial.secondary,
                        transitionFinal: y.final.secondary
                    }, e.createElement(s, {
                        alignment: i,
                        animationDuration: t,
                        open: d,
                        close: o,
                        cubicBezier: m,
                        transitionInitial: y.initial.content,
                        transitionFinal: y.final.content
                    }, a)))
                }
        }
    }
]);