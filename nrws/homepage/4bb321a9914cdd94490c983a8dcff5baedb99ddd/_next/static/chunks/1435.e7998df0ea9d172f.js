(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1435], {
        58263: (e, t, n) => {
            "use strict";
            var r = n(48175),
                o = n(6873),
                a = n(16596),
                s = n(90148),
                i = n(70214);
            (e.exports = function(e, t) {
                var n, o, u, l, c;
                return arguments.length < 2 || "string" != typeof e ? (l = t, t = e, e = null) : l = arguments[2], r(e) ? (n = i.call(e, "c"), o = i.call(e, "e"), u = i.call(e, "w")) : (n = u = !0, o = !1), c = {
                    value: t,
                    configurable: n,
                    enumerable: o,
                    writable: u
                }, l ? a(s(l), c) : c
            }).gs = function(e, t, n) {
                var u, l, c, f;
                return "string" != typeof e ? (c = n, n = t, t = e, e = null) : c = arguments[3], r(t) ? o(t) ? r(n) ? o(n) || (c = n, n = void 0) : n = void 0 : (c = t, t = n = void 0) : t = void 0, r(e) ? (u = i.call(e, "c"), l = i.call(e, "e")) : (u = !0, l = !1), f = {
                    get: t,
                    set: n,
                    configurable: u,
                    enumerable: l
                }, c ? a(s(c), f) : f
            }
        },
        46011: e => {
            "use strict";
            e.exports = function() {}
        },
        16596: (e, t, n) => {
            "use strict";
            e.exports = n(5339)() ? Object.assign : n(33595)
        },
        5339: e => {
            "use strict";
            e.exports = function() {
                var e, t = Object.assign;
                return "function" == typeof t && (t(e = {
                    foo: "raz"
                }, {
                    bar: "dwa"
                }, {
                    trzy: "trzy"
                }), e.foo + e.bar + e.trzy === "razdwatrzy")
            }
        },
        33595: (e, t, n) => {
            "use strict";
            var r = n(2093),
                o = n(67134),
                a = Math.max;
            e.exports = function(e, t) {
                var n, s, i, u = a(arguments.length, 2);
                for (s = 1, e = Object(o(e)), i = function(r) {
                        try {
                            e[r] = t[r]
                        } catch (e) {
                            n || (n = e)
                        }
                    }; s < u; ++s) t = arguments[s], r(t).forEach(i);
                if (void 0 !== n) throw n;
                return e
            }
        },
        89762: (e, t, n) => {
            "use strict";
            var r = n(46011)();
            e.exports = function(e) {
                return e !== r && null !== e
            }
        },
        2093: (e, t, n) => {
            "use strict";
            e.exports = n(63380)() ? Object.keys : n(64232)
        },
        63380: e => {
            "use strict";
            e.exports = function() {
                try {
                    return Object.keys("primitive"), !0
                } catch (e) {
                    return !1
                }
            }
        },
        64232: (e, t, n) => {
            "use strict";
            var r = n(89762),
                o = Object.keys;
            e.exports = function(e) {
                return o(r(e) ? Object(e) : e)
            }
        },
        90148: (e, t, n) => {
            "use strict";
            var r = n(89762),
                o = Array.prototype.forEach,
                a = Object.create,
                s = function(e, t) {
                    var n;
                    for (n in e) t[n] = e[n]
                };
            e.exports = function(e) {
                var t = a(null);
                return o.call(arguments, function(e) {
                    r(e) && s(Object(e), t)
                }), t
            }
        },
        47880: e => {
            "use strict";
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function");
                return e
            }
        },
        67134: (e, t, n) => {
            "use strict";
            var r = n(89762);
            e.exports = function(e) {
                if (!r(e)) throw TypeError("Cannot use null or undefined");
                return e
            }
        },
        70214: (e, t, n) => {
            "use strict";
            e.exports = n(40525)() ? String.prototype.contains : n(71521)
        },
        40525: e => {
            "use strict";
            var t = "razdwatrzy";
            e.exports = function() {
                return "function" == typeof t.contains && !0 === t.contains("dwa") && !1 === t.contains("foo")
            }
        },
        71521: e => {
            "use strict";
            var t = String.prototype.indexOf;
            e.exports = function(e) {
                return t.call(this, e, arguments[1]) > -1
            }
        },
        53068: (e, t, n) => {
            "use strict";
            var r, o, a, s, i, u, l, c = n(58263),
                f = n(47880),
                d = Function.prototype.apply,
                h = Function.prototype.call,
                p = Object.create,
                g = Object.defineProperty,
                S = Object.defineProperties,
                m = Object.prototype.hasOwnProperty,
                y = {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                };
            r = function(e, t) {
                var n;
                return f(t), m.call(this, "__ee__") ? n = this.__ee__ : (n = y.value = p(null), g(this, "__ee__", y), y.value = null), n[e] ? "object" == typeof n[e] ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this
            }, o = function(e, t) {
                var n, o;
                return f(t), o = this, r.call(this, e, n = function() {
                    a.call(o, e, n), d.call(t, this, arguments)
                }), n.__eeOnceListener__ = t, this
            }, i = {
                on: r,
                once: o,
                off: a = function(e, t) {
                    var n, r, o, a;
                    if (f(t), !m.call(this, "__ee__") || !(n = this.__ee__)[e]) return this;
                    if ("object" == typeof(r = n[e]))
                        for (a = 0; o = r[a]; ++a)(o === t || o.__eeOnceListener__ === t) && (2 === r.length ? n[e] = r[a ? 0 : 1] : r.splice(a, 1));
                    else(r === t || r.__eeOnceListener__ === t) && delete n[e];
                    return this
                },
                emit: s = function(e) {
                    var t, n, r, o, a;
                    if (m.call(this, "__ee__") && (o = this.__ee__[e])) {
                        if ("object" == typeof o) {
                            for (t = 1, n = arguments.length, a = Array(n - 1); t < n; ++t) a[t - 1] = arguments[t];
                            for (t = 0, o = o.slice(); r = o[t]; ++t) d.call(r, this, a)
                        } else switch (arguments.length) {
                            case 1:
                                h.call(o, this);
                                break;
                            case 2:
                                h.call(o, this, arguments[1]);
                                break;
                            case 3:
                                h.call(o, this, arguments[1], arguments[2]);
                                break;
                            default:
                                for (t = 1, n = arguments.length, a = Array(n - 1); t < n; ++t) a[t - 1] = arguments[t];
                                d.call(o, this, a)
                        }
                    }
                }
            }, l = S({}, u = {
                on: c(r),
                once: c(o),
                off: c(a),
                emit: c(s)
            }), e.exports = t = function(e) {
                return null == e ? p(l) : S(Object(e), u)
            }, t.methods = i
        },
        25858: (e, t, n) => {
            var r = "Expected a function",
                o = 0 / 0,
                a = /^\s+|\s+$/g,
                s = /^[-+]0x[0-9a-f]+$/i,
                i = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                l = parseInt,
                c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                f = "object" == typeof self && self && self.Object === Object && self,
                d = c || f || Function("return this")(),
                h = Object.prototype.toString,
                p = Math.max,
                g = Math.min,
                S = function() {
                    return d.Date.now()
                };

            function m(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function y(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == typeof(t = e) || t && "object" == typeof t && "[object Symbol]" == h.call(t)) return o;
                if (m(e)) {
                    var t, n = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = m(n) ? n + "" : n
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(a, "");
                var r = i.test(e);
                return r || u.test(e) ? l(e.slice(2), r ? 2 : 8) : s.test(e) ? o : +e
            }
            e.exports = function(e, t, n) {
                var o = !0,
                    a = !0;
                if ("function" != typeof e) throw TypeError(r);
                return m(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a),
                    function(e, t, n) {
                        var o, a, s, i, u, l, c = 0,
                            f = !1,
                            d = !1,
                            h = !0;
                        if ("function" != typeof e) throw TypeError(r);

                        function v(t) {
                            var n = o,
                                r = a;
                            return o = a = void 0, c = t, i = e.apply(r, n)
                        }

                        function E(e) {
                            var n = e - l,
                                r = e - c;
                            return void 0 === l || n >= t || n < 0 || d && r >= s
                        }

                        function _() {
                            var e, n, r, o = S();
                            if (E(o)) return A(o);
                            u = setTimeout(_, (e = o - l, n = o - c, r = t - e, d ? g(r, s - n) : r))
                        }

                        function A(e) {
                            return (u = void 0, h && o) ? v(e) : (o = a = void 0, i)
                        }

                        function T() {
                            var e, n = S(),
                                r = E(n);
                            if (o = arguments, a = this, l = n, r) {
                                if (void 0 === u) return c = e = l, u = setTimeout(_, t), f ? v(e) : i;
                                if (d) return u = setTimeout(_, t), v(l)
                            }
                            return void 0 === u && (u = setTimeout(_, t)), i
                        }
                        return t = y(t) || 0, m(n) && (f = !!n.leading, s = (d = "maxWait" in n) ? p(y(n.maxWait) || 0, t) : s, h = "trailing" in n ? !!n.trailing : h), T.cancel = function() {
                            void 0 !== u && clearTimeout(u), c = 0, o = l = a = u = void 0
                        }, T.flush = function() {
                            return void 0 === u ? i : A(S())
                        }, T
                    }(e, t, {
                        leading: o,
                        maxWait: t,
                        trailing: a
                    })
            }
        },
        75164: (e, t, n) => {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(void 0);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                            i && (i.get || i.set) ? Object.defineProperty(o, s, i) : o[s] = e[s]
                        }
                    return o.default = e, n && n.set(e, o), o
                }(n(96540)),
                a = h(n(5556)),
                s = h(n(20053)),
                i = h(n(68001)),
                u = h(n(18927)),
                l = h(n(61198)),
                c = n(42925),
                f = n(89325);
            n(18883);
            var d = n(56184);

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (p = function(e) {
                    return e ? n : t
                })(e)
            }

            function g(e, t) {
                return (g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var y = c.CHAT_THEMES.DEFAULT_THEME,
                v = c.CHAT_THEMES.SALES_ASSOCIATE_THEME,
                E = function(e) {
                    return function(t) {
                        var n;
                        return {
                            root: (0, s.default)((m(n = {}, e, !0), m(n, t.className, !!t.className), m(n, "".concat(e, "--right-bottom"), "right-bottom" === t.position), m(n, "".concat(e, "--above-cta"), t.aboveCTA), n)),
                            button: "".concat(e, "__button"),
                            messageBox: "".concat(e, "__message")
                        }
                    }
                }("chat-panel"),
                _ = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && g(e, t)
                    }(s, e);
                    var t, n, a = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = S(s);
                        return e = t ? Reflect.construct(n, arguments, S(this).constructor) : n.apply(this, arguments),
                            function(e, t) {
                                if (t && ("object" === r(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                                return function(e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e
                                }(e)
                            }(this, e)
                    });

                    function s(e) {
                        var t;
                        return ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, s), (t = a.call(this, e)).handleButtonDisplay = function(e) {
                            var n = e.shouldShowChatButton,
                                r = e.chatType,
                                o = t.props,
                                a = o.shouldShowChatButton,
                                s = o.chatType,
                                i = o.dataGroup,
                                u = t.state.isButtonShown,
                                l = c.CHAT_NAMES[s] === c.CHAT_NAMES.LIVE_PERSON_CHAT_TYPE;
                            s !== r && t.chatsStorage.getChatType() !== s && ((0, d.triggerAnalyticsEvent)((0, d.createChatLoadEvent)(c.CHAT_NAMES[s]), l ? i : ""), t.chatsStorage.setChatType(s)), n || !a || u || t.toggleButton(!0), n && !a && u && t.toggleButton(!1)
                        }, t.handleMessageDisplay = function(e) {
                            var n = e.message,
                                r = e.forceMessageShownFlag,
                                o = e.hasOpenedChat,
                                a = e.shouldShowChatMessage,
                                s = t.props,
                                i = s.message,
                                u = s.shouldShowChatMessage,
                                l = s.forceMessageShownFlag,
                                c = s.hasOpenedChat,
                                f = s.theme,
                                d = t.state,
                                h = d.isMessageShown,
                                p = d.hasInteractedWithMessage;
                            !a && u && !h && t.checkIfNewMessageCome(n) && t.toggleMessage(!0), f !== v || !c || o || p || i || (t.chatsStorage.setHasInteractedWithMessage(), t.setState({
                                hasInteractedWithMessage: !0
                            })), f === v && n && !h && t.setState({
                                isCampaignMessageOpened: !0
                            }), a && !u && h && t.toggleMessage(!1), r !== l && i && t.toggleMessage(!0)
                        }, t.toggleButton = function(e) {
                            t.setState({
                                isButtonShown: e
                            })
                        }, t.toggleSalesAssociateMessage = function(e) {
                            t.state.hasInteractedWithMessage || t.setState({
                                showSalesAssociateMessage: e
                            })
                        }, t.toggleMessage = function(e) {
                            t.setState({
                                isMessageShown: e
                            })
                        }, t.captureChatClickAnalytics = function() {
                            var e = t.props,
                                n = e.chatType,
                                r = e.dataGroup,
                                o = c.CHAT_NAMES[n] === c.CHAT_NAMES.LIVE_PERSON_CHAT_TYPE;
                            (0, d.triggerAnalyticsEvent)((0, d.createChatClickEvent)(c.CHAT_NAMES[n], o ? r : ""))
                        }, t.onButtonClick = function(e) {
                            var n = t.props,
                                r = n.startChatHandler,
                                o = n.onStartChat,
                                a = n.theme;
                            t.toggleMessage(!1), a === v && t.toggleSalesAssociateMessage(!1), r && (t.captureChatClickAnalytics(), r(e), o(e))
                        }, t.onMessageClick = function(e) {
                            var n = t.props,
                                r = n.startChatHandler,
                                o = n.onStartChat;
                            (0, n.messageClickHandler)(e), t.captureChatClickAnalytics(), r(e), o(e)
                        }, t.onSalesAssociateMessageDismiss = function() {
                            t.state.hasInteractedWithMessage || (t.chatsStorage.setHasInteractedWithMessage(), t.setState({
                                hasInteractedWithMessage: !0
                            }))
                        }, t.onDismissMessageClick = function(e) {
                            var n = t.props,
                                r = n.dismissMessageHandler;
                            n.theme === v && t.setState({
                                showSalesAssociateButtonAnimation: !0
                            }), r(e)
                        }, t.chatsStorage = new u.default, t.state = {
                            isButtonShown: !!e.shouldShowChatButton,
                            isMessageShown: !!e.shouldShowChatMessage && !!e.message,
                            showSalesAssociateMessage: !1,
                            showSalesAssociateButtonAnimation: !1,
                            isCampaignMessageOpened: !1,
                            hasInteractedWithMessage: !!t.chatsStorage.getHasInteractedWithMessage()
                        }, t
                    }
                    return n = [{
                            key: "componentDidUpdate",
                            value: function(e) {
                                this.handleButtonDisplay(e), this.handleMessageDisplay(e), !e.hasRedirectionTriggered && this.props.hasRedirectionTriggered && this.props.startChatHandler()
                            }
                        }, {
                            key: "checkIfNewMessageCome",
                            value: function(e) {
                                var t = this.props.message;
                                return t && e !== t
                            }
                        }, {
                            key: "getButton",
                            value: function(e) {
                                var t = this.props,
                                    n = t.theme,
                                    r = t.title,
                                    a = t.locale,
                                    s = this.state,
                                    i = s.isButtonShown,
                                    u = s.showSalesAssociateButtonAnimation,
                                    c = s.isMessageShown,
                                    f = s.isCampaignMessageOpened;
                                return n === v ? o.default.createElement(l.default, {
                                    className: e.button,
                                    title: r,
                                    isButtonShown: i,
                                    locale: a,
                                    theme: n,
                                    onButtonClick: this.onButtonClick,
                                    toggleSalesAssociateMessage: this.toggleSalesAssociateMessage,
                                    showSalesAssociateButtonAnimation: u,
                                    isMessageShown: c || f
                                }) : o.default.createElement(l.default, {
                                    className: e.button,
                                    title: r,
                                    isButtonShown: i,
                                    locale: a,
                                    theme: n,
                                    onButtonClick: this.onButtonClick
                                })
                            }
                        }, {
                            key: "getMessageBox",
                            value: function(e) {
                                var t = this.props,
                                    n = t.theme,
                                    r = t.message,
                                    a = t.locale,
                                    s = t.messageType,
                                    u = t.shouldShowSalesAssociateThumbnails,
                                    l = this.state,
                                    d = l.isMessageShown,
                                    h = l.isButtonShown,
                                    p = l.showSalesAssociateMessage,
                                    g = c.CHAT_MESSAGE_DISMISS_TIMEOUT[n] || null;
                                return n === v && h && p ? o.default.createElement(i.default, {
                                    className: e.messageBox,
                                    theme: n,
                                    message: f.SALES_ASSOCIATE_FIRST_CUSTOM_MESSAGE_MAP[a],
                                    locale: a,
                                    onDismissMessageClick: this.onSalesAssociateMessageDismiss,
                                    onMessageClick: this.onMessageClick,
                                    isMessageShown: p,
                                    showSalesAssociateThumbnails: u,
                                    toggleMessage: this.toggleSalesAssociateMessage
                                }) : o.default.createElement(i.default, {
                                    className: e.messageBox,
                                    theme: n,
                                    message: r,
                                    messageType: s,
                                    dismissTimeout: g,
                                    onDismissMessageClick: this.onDismissMessageClick,
                                    onMessageClick: this.onMessageClick,
                                    isMessageShown: d,
                                    toggleMessage: this.toggleMessage,
                                    locale: a
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.position,
                                    n = e.className,
                                    r = e.isShown,
                                    a = e.aboveCTA;
                                if (!r) return null;
                                var s = E({
                                        position: t,
                                        className: n,
                                        aboveCTA: a
                                    }),
                                    i = this.getButton(s),
                                    u = this.getMessageBox(s);
                                return o.default.createElement("div", {
                                    className: s.root
                                }, u, i)
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(s.prototype, n), Object.defineProperty(s, "prototype", {
                            writable: !1
                        }), s
                }(o.PureComponent);
            _.propTypes = {
                title: a.default.string,
                message: a.default.string,
                messageType: a.default.string,
                dismissMessageHandler: a.default.func,
                messageClickHandler: a.default.func,
                startChatHandler: a.default.func,
                position: a.default.oneOf(["right-bottom"]),
                className: a.default.string,
                isShown: a.default.bool,
                hasRedirectionTriggered: a.default.bool,
                shouldShowChatButton: a.default.bool,
                shouldShowChatMessage: a.default.bool,
                shouldShowSalesAssociateThumbnails: a.default.bool,
                onStartChat: a.default.func,
                onDismissMessage: a.default.func,
                locale: a.default.string,
                theme: a.default.string,
                chatType: a.default.string
            }, _.defaultProps = {
                title: "",
                message: "",
                messageType: "",
                chatType: "",
                dismissMessageHandler: function() {
                    return null
                },
                messageClickHandler: function() {
                    return null
                },
                startChatHandler: function() {
                    return null
                },
                position: "",
                className: "",
                isShown: !0,
                hasRedirectionTriggered: !1,
                shouldShowChatButton: !1,
                shouldShowChatMessage: !1,
                shouldShowSalesAssociateThumbnails: !1,
                onStartChat: function() {
                    return null
                },
                onDismissMessage: function() {
                    return null
                },
                locale: "",
                theme: y
            }, t.default = _
        },
        1396: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(35830),
                o = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(75164)),
                a = (0, r.withChats)(o.default);
            t.default = a
        },
        61198: (e, t, n) => {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = h(void 0);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                            i && (i.get || i.set) ? Object.defineProperty(o, s, i) : o[s] = e[s]
                        }
                    return o.default = e, n && n.set(e, o), o
                }(n(96540)),
                a = d(n(5556)),
                s = d(n(20053)),
                i = d(n(79347)),
                u = d(n(42925)),
                l = d(n(13157)),
                c = n(32107),
                f = n(89325);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function S(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n(94495);
            var m = u.default.CHAT_THEMES,
                y = m.DEFAULT_THEME,
                v = m.SALES_ASSOCIATE_THEME,
                E = u.default.CHINESE_LOCALE,
                _ = function(e) {
                    return function(t) {
                        var n;
                        return {
                            root: (0, s.default)((S(n = {}, e, !0), S(n, t.className, !!t.className), S(n, "".concat(e, "--show"), !!t.isButtonShown), S(n, "".concat(e, "--expanded"), t.isExpanded), S(n, "".concat(e, "--default-theme"), !t.theme || t.theme === y), S(n, "".concat(e, "--sales-associate-theme"), t.theme === v), S(n, "".concat(e, "--locale-zh"), t.locale === E), S(n, "".concat(e, "--locale-en"), t.locale !== E), n)),
                            title: "".concat(e, "__title"),
                            salesAssociateTitle: "".concat(e, "__sales-associate-title"),
                            salesAssociateTitleText: "".concat(e, "__sales-associate-title-text"),
                            titleWrapper: "".concat(e, "__title-wrapper"),
                            startCta: "".concat(e, "__start-cta"),
                            salesAssociateButton: "".concat(e, "__sales-associate-button"),
                            salesAssociateButtonMessage: "".concat(e, "__sales-associate-button-message"),
                            salesAssociateMessageIcon: "".concat(e, "__sales-associate-button-message-icon"),
                            salesAssociateButtonMessagePro: "".concat(e, "__sales-associate-button-message-pro-active"),
                            salesAssociate1: "".concat(e, "__sales-associate-button-sales-associate1"),
                            salesAssociate2: "".concat(e, "__sales-associate-button-sales-associate2"),
                            salesAssociate3: "".concat(e, "__sales-associate-button-sales-associate3"),
                            firstAnimationSalesAssociate: "".concat(e, "__sales-associate-button-first-animation"),
                            firstAnimationMessageIcon: "".concat(e, "__sales-associate-button-message-first-animation"),
                            secondAnimationSalesAssociate: "".concat(e, "__sales-associate-button-second-animation"),
                            secondAnimationMessageIcon: "".concat(e, "__sales-associate-button-message-second-animation"),
                            messageIcon: "".concat(e, "__message-icon")
                        }
                    }
                }("public-chat-button"),
                A = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && p(e, t)
                    }(s, e);
                    var t, n, a = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = g(s);
                        return e = t ? Reflect.construct(n, arguments, g(this).constructor) : n.apply(this, arguments),
                            function(e, t) {
                                if (t && ("object" === r(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                                return function(e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e
                                }(e)
                            }(this, e)
                    });

                    function s(e) {
                        var t;
                        return ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, s), (t = a.call(this, e)).toggleResizeEventListener = function() {
                            var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                n = "resize",
                                r = {
                                    passive: !0
                                };
                            e ? window.addEventListener(n, t.updateStartCtaMaxWidth, r) : window.removeEventListener(n, t.updateStartCtaMaxWidth, r)
                        }, t.setIsExpandedTemporarily = function() {
                            t.setState({
                                isExpanded: !0
                            });
                            var e = setTimeout(function() {
                                t.setState({
                                    isExpanded: !1
                                })
                            }, 8480);
                            t.expandTimeoutId = e
                        }, t.updateStartCtaMaxWidth = function() {
                            try {
                                var e = t.startCtaRef.current,
                                    n = t.startCtaIconRef.current,
                                    r = t.startCtaTitleWrapperRef.current;
                                if (!e || !n || !r) return null;
                                var o = parseInt(window.getComputedStyle(r).maxWidth, 10),
                                    a = parseInt(r.getBoundingClientRect().right, 10),
                                    s = window.getComputedStyle(e),
                                    i = parseInt(s.paddingRight, 10),
                                    u = parseInt(s.paddingLeft, 10),
                                    l = parseInt(window.getComputedStyle(n.parentElement).marginRight, 10),
                                    f = a - c.SIDE_OFFSET - u - i - n.clientWidth - l;
                                f <= o ? r.style.maxWidth = "".concat(f, "px") : r.style.removeProperty("max-width")
                            } catch (e) {
                                console.error("Error occured while updating start cta max width: ", e)
                            }
                        }, t.onButtonClick = function(e) {
                            (0, t.props.onButtonClick)(e)
                        }, t.state = {
                            isExpanded: !!e.title
                        }, t.startCtaRef = o.default.createRef(), t.startCtaIconRef = o.default.createRef(), t.startCtaTitleWrapperRef = o.default.createRef(), t.updateStartCtaMaxWidthTimeoutId = null, t.expandTimeoutId = null, t
                    }
                    return n = [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this.props,
                                    t = e.title;
                                e.theme === y && (t && this.setIsExpandedTemporarily(), this.updateStartCtaMaxWidth(), this.toggleResizeEventListener(!0))
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(e) {
                                var t = this,
                                    n = e.title,
                                    r = e.isButtonShown,
                                    o = e.theme,
                                    a = this.props,
                                    s = a.isButtonShown,
                                    i = a.theme,
                                    u = this.state.isExpanded;
                                i === y && (this.checkIfThemeChanged(o) && (this.toggleResizeEventListener(!1), this.toggleResizeEventListener(!0)), s && this.checkIfNewTitleCome(n) && (r ? this.updateStartCtaMaxWidth() : this.updateStartCtaMaxWidthTimeoutId = setTimeout(function() {
                                    t.updateStartCtaMaxWidth()
                                }, c.BUTTON_WIDTH_RECALCULATE_DELAY)), !u && this.checkIfNewTitleCome(n) && this.setIsExpandedTemporarily())
                            }
                        }, {
                            key: "checkIfNewTitleCome",
                            value: function(e) {
                                var t = this.props.title;
                                return t && e !== t
                            }
                        }, {
                            key: "checkIfThemeChanged",
                            value: function(e) {
                                var t = this.props.theme;
                                return t && e !== t
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                clearTimeout(this.expandTimeoutId), clearTimeout(this.updateStartCtaMaxWidthTimeoutId), this.toggleResizeEventListener(!1)
                            }
                        }, {
                            key: "getButton",
                            value: function(e) {
                                var t, n = this.props,
                                    r = n.title,
                                    a = n.theme,
                                    s = n.locale,
                                    u = n.toggleSalesAssociateMessage,
                                    c = n.showSalesAssociateButtonAnimation,
                                    d = n.showSalesAssociateThumbnails,
                                    h = n.isMessageShown,
                                    p = n.isButtonShown;
                                return t = a === v ? o.default.createElement(l.default, {
                                    toggleSalesAssociateMessage: u,
                                    showSalesAssociateButtonAnimation: c,
                                    showSalesAssociateThumbnails: d,
                                    className: e,
                                    isButtonShown: p,
                                    title: r,
                                    isMessageShown: h
                                }) : o.default.createElement(o.default.Fragment, null, o.default.createElement(i.default, {
                                    iconRef: this.startCtaIconRef,
                                    iconName: "message",
                                    title: "Chat with us",
                                    className: e.messageIcon,
                                    "aria-hidden": "true"
                                }), o.default.createElement("span", {
                                    ref: this.startCtaTitleWrapperRef,
                                    className: e.titleWrapper
                                }, o.default.createElement("span", {
                                    className: e.title
                                }, r))), o.default.createElement("button", {
                                    className: e.startCta,
                                    ref: this.startCtaRef,
                                    onClick: this.onButtonClick,
                                    "aria-label": f.CHAT_BUTTON_ARIA_LABEL_MESSAGE_MAP[s]
                                }, t)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.className,
                                    n = e.isButtonShown,
                                    r = e.theme,
                                    a = e.locale,
                                    s = _({
                                        isButtonShown: n,
                                        className: t,
                                        isExpanded: this.state.isExpanded,
                                        theme: r,
                                        locale: a
                                    }),
                                    i = this.getButton(s);
                                return o.default.createElement("div", {
                                    className: s.root
                                }, i)
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(s.prototype, n), Object.defineProperty(s, "prototype", {
                            writable: !1
                        }), s
                }(o.PureComponent);
            A.propTypes = {
                title: a.default.string,
                className: a.default.string,
                isButtonShown: a.default.bool,
                locale: a.default.string,
                theme: a.default.string,
                onButtonClick: a.default.func,
                toggleSalesAssociateMessage: a.default.func,
                isMessageShown: a.default.bool,
                showSalesAssociateButtonAnimation: a.default.bool
            }, A.defaultProps = {
                title: "",
                onButtonClick: function() {
                    return null
                },
                className: "",
                isButtonShown: !1,
                locale: "",
                theme: y,
                toggleSalesAssociateMessage: function() {
                    return null
                },
                isMessageShown: !1,
                showSalesAssociateButtonAnimation: !1
            }, t.default = A
        },
        83150: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(96540));

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.default = function(e) {
                return r.default.createElement("svg", o({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), r.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.3622 3.36223L12.5373 2.53727L8 7.07454L3.46273 2.53727L2.63777 3.36223L7.17504 7.89949L2.63777 12.4368L3.46273 13.2617L8 8.72445L12.5373 13.2617L13.3622 12.4368L8.82496 7.89949L13.3622 3.36223Z",
                    fill: "currentColor"
                }))
            }
        },
        68001: (e, t, n) => {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = h(void 0);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                            i && (i.get || i.set) ? Object.defineProperty(o, s, i) : o[s] = e[s]
                        }
                    return o.default = e, n && n.set(e, o), o
                }(n(96540)),
                a = d(n(5556)),
                s = d(n(20053)),
                i = d(n(25858)),
                u = d(n(83150)),
                l = n(42925),
                c = n(32107),
                f = n(89325);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function S(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n(13706);
            var m = l.CHAT_THEMES.DEFAULT_THEME,
                y = l.CHAT_THEMES.SALES_ASSOCIATE_THEME,
                v = function(e) {
                    return function(t) {
                        var n;
                        return {
                            root: (0, s.default)((S(n = {}, e, !0), S(n, "".concat(e, "--show"), t.isMessageShown), S(n, "".concat(e, "--default-theme"), !t.theme || t.theme === m), S(n, "".concat(e, "--sales-associate-theme"), t.theme === y), S(n, t.className, !!t.className), n)),
                            closeCta: "".concat(e, "__close-cta"),
                            closeIcon: "".concat(e, "__close-icon"),
                            messageText: "".concat(e, "__message-text"),
                            salesAssociateMessageText: "".concat(e, "__sa-message-text"),
                            salesAssociateCustomText: "".concat(e, "__sa-custom-text"),
                            salesAssociateCloseIcon: "".concat(e, "__sa-close-icon"),
                            salesAssociateIconsWrapper: "".concat(e, "__sales-associate-icons-wrapper"),
                            salesAssociateIcons: "".concat(e, "__sales-associate-icons")
                        }
                    }
                }("message"),
                E = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && p(e, t)
                    }(s, e);
                    var t, n, a = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = g(s);
                        return e = t ? Reflect.construct(n, arguments, g(this).constructor) : n.apply(this, arguments),
                            function(e, t) {
                                if (t && ("object" === r(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                                return function(e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e
                                }(e)
                            }(this, e)
                    });

                    function s(e) {
                        var t;
                        return ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, s), (t = a.call(this, e)).toggleResizeEventListener = function() {
                            var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                n = "resize",
                                r = {
                                    passive: !0
                                };
                            e ? window.addEventListener(n, t.updateMessageMaxSize, r) : window.removeEventListener(n, t.updateMessageMaxSize, r)
                        }, t.updateMessageMaxSize = function() {
                            try {
                                var e = t.messageRef.current;
                                if (!e) return;
                                var n = window.getComputedStyle(e),
                                    r = parseInt(n.maxWidth, 10),
                                    o = parseInt(n.height, 10),
                                    a = e.getBoundingClientRect(),
                                    s = parseInt(a.right, 10),
                                    i = parseInt(a.bottom, 10),
                                    u = s - c.SIDE_OFFSET,
                                    l = i - c.SIDE_OFFSET;
                                u <= r ? e.style.maxWidth = "".concat(u, "px") : e.style.removeProperty("max-width"), l <= o ? e.style.maxHeight = "".concat(l, "px") : e.style.removeProperty("max-height")
                            } catch (e) {
                                console.error("Error occured while updating start cta max width: ", e)
                            }
                        }, t.onDismissMessageClick = function(e) {
                            e.stopPropagation();
                            var n = t.props.onDismissMessageClick;
                            t.hideMessage(), n(e)
                        }, t.onMessageClick = function(e) {
                            var n = t.props.onMessageClick;
                            t.hideMessage(), n(e)
                        }, t.messageRef = o.default.createRef(), t.updateMessageMaxSize = (0, i.default)(t.updateMessageMaxSize, 50), t.updateMessageMaxSizeTimeoutId = null, t.dismissTimeoutId = null, t
                    }
                    return n = [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this.props,
                                    t = e.isMessageShown,
                                    n = e.dismissTimeout;
                                t && n && this.toggleMessageDismissTimer(n), this.toggleResizeEventListener(!0), this.updateMessageMaxSize()
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(e) {
                                var t = this,
                                    n = e.isMessageShown,
                                    r = this.props,
                                    o = r.isMessageShown,
                                    a = r.dismissTimeout;
                                o && !n && a && this.toggleMessageDismissTimer(a), o && !n && (this.updateMessageMaxSizeTimeoutId = setTimeout(function() {
                                    t.updateMessageMaxSize()
                                }, c.MESSAGE_WIDTH_RECALCULATE_DELAY))
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.toggleResizeEventListener(!1), clearTimeout(this.dismissTimeoutId)
                            }
                        }, {
                            key: "hideMessage",
                            value: function() {
                                (0, this.props.toggleMessage)(!1), clearTimeout(this.dismissTimeoutId)
                            }
                        }, {
                            key: "toggleMessageDismissTimer",
                            value: function(e) {
                                var t = this;
                                "number" == typeof e && (this.dismissTimeoutId = setTimeout(function() {
                                    t.hideMessage()
                                }, e))
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.theme,
                                    n = e.message,
                                    r = e.className,
                                    a = e.isMessageShown,
                                    s = e.locale,
                                    i = e.showSalesAssociateThumbnails,
                                    c = v({
                                        theme: t,
                                        isMessageShown: a,
                                        className: r
                                    });
                                return o.default.createElement("div", {
                                    className: c.root,
                                    role: "button",
                                    onClick: this.onMessageClick,
                                    ref: this.messageRef
                                }, t === y ? o.default.createElement(o.default.Fragment, null, i ? o.default.createElement("div", {
                                    className: c.salesAssociateIconsWrapper
                                }, l.SALES_ASSOCIATE_URLS.map(function(e) {
                                    var t = e.id,
                                        n = e.url;
                                    return o.default.createElement("img", {
                                        alt: t,
                                        key: t,
                                        src: n,
                                        className: c.salesAssociateIcons
                                    })
                                })) : null, o.default.createElement("div", {
                                    className: c.salesAssociateMessageText
                                }, n), o.default.createElement("div", {
                                    className: c.salesAssociateCustomText
                                }, f.SALES_ASSOCIATE_SECOND_CUSTOM_MESSAGE_MAP[s]), o.default.createElement("button", {
                                    className: c.closeCta,
                                    type: "button",
                                    onClick: this.onDismissMessageClick
                                }, o.default.createElement(u.default, {
                                    className: c.salesAssociateCloseIcon
                                }))) : o.default.createElement(o.default.Fragment, null, o.default.createElement("div", {
                                    className: c.messageText
                                }, n), o.default.createElement("button", {
                                    className: c.closeCta,
                                    type: "button",
                                    onClick: this.onDismissMessageClick
                                }, o.default.createElement(u.default, {
                                    className: c.closeIcon
                                }))))
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(s.prototype, n), Object.defineProperty(s, "prototype", {
                            writable: !1
                        }), s
                }(o.PureComponent);
            E.propTypes = {
                theme: a.default.oneOf([m, y]),
                message: a.default.string,
                dismissTimeout: a.default.number,
                onDismissMessageClick: a.default.func,
                onMessageClick: a.default.func,
                className: a.default.string,
                toggleMessage: a.default.func,
                isMessageShown: a.default.bool,
                locale: a.default.string
            }, E.defaultProps = {
                message: "",
                dismissTimeout: null,
                onDismissMessageClick: function() {
                    return null
                },
                onMessageClick: function() {
                    return null
                },
                className: "",
                toggleMessage: function() {
                    return null
                },
                isMessageShown: !1,
                locale: ""
            }, t.default = E
        },
        43217: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(96540));

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.default = function(e) {
                return r.default.createElement("svg", o({
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none"
                }, e), r.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1 3.00001L19 3V16.0018H12.2305L10 18.1211L7.78125 15.9991H1V3.00001ZM8 15.0079L10 16.6427L12 15.0039H18.0039V4.00836H2.00608V15.0079H8Z",
                    fill: "white"
                }), r.default.createElement("line", {
                    x1: "5",
                    y1: "7.5",
                    x2: "15",
                    y2: "7.5",
                    stroke: "white"
                }), r.default.createElement("line", {
                    x1: "5",
                    y1: "11.5",
                    x2: "15",
                    y2: "11.5",
                    stroke: "white"
                }))
            }
        },
        93254: (e, t, n) => {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = l(void 0);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                            i && (i.get || i.set) ? Object.defineProperty(o, s, i) : o[s] = e[s]
                        }
                    return o.default = e, n && n.set(e, o), o
                }(n(96540)),
                a = n(33632),
                s = n(42925),
                i = n(24529),
                u = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(43217));

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (l = function(e) {
                    return e ? n : t
                })(e)
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            s = !0,
                            i = !1;
                        try {
                            for (o = o.call(e); !(s = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
                        } catch (e) {
                            i = !0, r = e
                        } finally {
                            try {
                                s || null == o.return || o.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return f(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            t.default = function(e) {
                var t = e.className,
                    n = e.salesAssociateUrls,
                    r = e.showSalesAssociateButtonAnimation,
                    l = c((0, o.useState)(!1), 2),
                    f = l[0],
                    d = l[1],
                    h = c((0, a.useSequencer)({
                        steps: s.PROACTIVE_CAMPAIGN_ANIMATION_STEPS,
                        endMode: "end"
                    }), 2),
                    p = h[0],
                    g = h[1].play,
                    S = c(s.PROACTIVE_CAMPAIGN_ANIMATION_STEPS.map(function(e) {
                        return p.current === e[0]
                    }), 10),
                    m = S[2],
                    y = S[3],
                    v = S[4],
                    E = S[5],
                    _ = S[6],
                    A = S[7],
                    T = S[8],
                    b = S[9];
                return (0, o.useEffect)(function() {
                    var e;
                    return r && (e = setTimeout(function() {
                            d(!0)
                        }, s.SALES_ASSOCIATE_ANIMATION_DELAY)),
                        function() {
                            return clearTimeout(e)
                        }
                }, [r]), (0, o.useEffect)(function() {
                    !b && f && g()
                }, [f]), o.default.createElement(o.default.Fragment, null, f ? o.default.createElement(o.default.Fragment, null, o.default.createElement("div", {
                    className: "".concat(t.salesAssociateButton, " ").concat((0, i.generateSalesAssociateAnimation)(m, y, v, E, _, A, T, b, t), " ").concat((0, i.generateSalesAssociateUrl)(t, n, y, v, E, _), " ")
                }), o.default.createElement("div", {
                    className: "".concat(t.salesAssociateButton, " ").concat((0, i.generateMessageAnimation)(m, y, v, E, _, A, T, b, t), "  ").concat(t.salesAssociateButtonMessage)
                }, o.default.createElement(u.default, {
                    className: t.salesAssociateMessageIcon
                }))) : o.default.createElement("div", {
                    className: "".concat(t.salesAssociateButton, " ").concat(t.salesAssociateButtonMessagePro)
                }, o.default.createElement(u.default, {
                    className: t.salesAssociateMessageIcon
                })))
            }
        },
        13157: (e, t, n) => {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(void 0);
                    if (n && n.has(e)) return n.get(e);
                    var o = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                            i && (i.get || i.set) ? Object.defineProperty(o, s, i) : o[s] = e[s]
                        }
                    return o.default = e, n && n.set(e, o), o
                }(n(96540)),
                a = n(33632),
                s = h(n(5556)),
                i = h(n(43217)),
                u = n(42925),
                l = n(24529),
                c = h(n(93254)),
                f = h(n(89574)),
                d = h(n(27723));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (p = function(e) {
                    return e ? n : t
                })(e)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            s = !0,
                            i = !1;
                        try {
                            for (o = o.call(e); !(s = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
                        } catch (e) {
                            i = !0, r = e
                        } finally {
                            try {
                                s || null == o.return || o.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return S(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var m = function(e) {
                var t = e.className,
                    n = e.title,
                    r = e.salesAssociateUrls,
                    s = e.toggleSalesAssociateMessage,
                    f = e.showSalesAssociateThumbnails,
                    h = e.showSalesAssociateButtonAnimation,
                    p = e.isMessageShown,
                    S = e.isButtonShown,
                    m = new d.default,
                    y = p || h,
                    v = m.getSession(u.SALES_ASSOCIATE_SESSION_KEY),
                    E = u.SALES_ASSOCIATE_ANIMATION_STEPS;
                v && !y && (E = u.SALES_ASSOCIATE_ANIMATION_STEPS.slice(u.SALES_ASSOCIATE_STEP_MAPPING[v.animationSeq.current]));
                var _ = g((0, a.useSequencer)({
                        steps: E,
                        endMode: "end"
                    }), 2),
                    A = _[0],
                    T = _[1].play,
                    b = g(u.SALES_ASSOCIATE_ANIMATION_STEPS.map(function(e) {
                        return A.current === e[0]
                    }), 10),
                    C = b[0],
                    O = b[2],
                    I = b[3],
                    M = b[4],
                    P = b[5],
                    w = b[6],
                    L = b[7],
                    N = b[8],
                    j = b[9];
                return !S || j || y || T(), (0, o.useEffect)(function() {
                    j && !y && s(!0)
                }, [j]), (0, o.useEffect)(function() {
                    null != A && A.current && !y && m.session(u.SALES_ASSOCIATE_SESSION_KEY, JSON.stringify({
                        animationSeq: A,
                        salesAssociateUrls: r
                    }))
                }, [A]), o.default.createElement(o.default.Fragment, null, y ? o.default.createElement(c.default, {
                    salesAssociateUrls: r,
                    className: t,
                    showSalesAssociateButtonAnimation: h && !f
                }) : o.default.createElement(o.default.Fragment, null, C && S && o.default.createElement("div", {
                    className: t.salesAssociateTitle
                }, o.default.createElement("span", {
                    className: t.salesAssociateTitleText
                }, n)), f ? o.default.createElement(o.default.Fragment, null, o.default.createElement("div", {
                    className: "".concat(t.salesAssociateButton, " ").concat((0, l.generateSalesAssociateAnimation)(O, I, M, P, w, L, N, j, t), " ").concat((0, l.generateSalesAssociateUrl)(t, r, I, M, P, w), " ")
                }), o.default.createElement("div", {
                    className: "".concat(t.salesAssociateButton, " ").concat((0, l.generateMessageAnimation)(O, I, M, P, w, L, N, j, t), "  ").concat(t.salesAssociateButtonMessage)
                }, o.default.createElement(i.default, {
                    className: t.salesAssociateMessageIcon,
                    "aria-hidden": "true"
                }))) : o.default.createElement("div", {
                    className: "".concat(t.salesAssociateButton, " ").concat(t.salesAssociateButtonMessagePro)
                }, o.default.createElement(i.default, {
                    className: t.salesAssociateMessageIcon
                }))))
            };
            m.propTypes = {
                title: s.default.string,
                className: s.default.shape({}).isRequired,
                salesAssociateUrls: s.default.arrayOf(s.default.string).isRequired,
                toggleSalesAssociateMessage: s.default.func,
                showSalesAssociateButtonAnimation: s.default.bool
            }, m.defaultProps = {
                title: "",
                toggleSalesAssociateMessage: function() {
                    return null
                },
                showSalesAssociateButtonAnimation: !1
            };
            var y = (0, f.default)(m);
            t.default = y
        },
        32107: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SIDE_OFFSET = t.MESSAGE_WIDTH_RECALCULATE_DELAY = t.BUTTON_WIDTH_RECALCULATE_DELAY = void 0, t.BUTTON_WIDTH_RECALCULATE_DELAY = 3100, t.MESSAGE_WIDTH_RECALCULATE_DELAY = 660, t.SIDE_OFFSET = 10
        },
        50490: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(1396))
        },
        53382: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChatsProvider = t.ChatsContext = t.ChatsConsumer = void 0;
            var r, o = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== v(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = p(void 0);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
                        }
                    return r.default = e, n && n.set(e, r), r
                }(n(96540)),
                a = h(n(5556)),
                s = h(n(8511)),
                i = h(n(98249)),
                u = h(n(18927)),
                l = h(n(42925)),
                c = n(93673),
                f = n(56184),
                d = n(89845);

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (p = function(e) {
                    return e ? n : t
                })(e)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            s = !0,
                            i = !1;
                        try {
                            for (o = o.call(e); !(s = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
                        } catch (e) {
                            i = !0, r = e
                        } finally {
                            try {
                                s || null == o.return || o.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return S(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach(function(t) {
                        A(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _(e) {
                return (_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function A(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n(25855);
            var T = l.default.LIVE_PERSON_DEFAULT_PLACEHOLDER_ID,
                b = l.default.HERO_DEFAULT_PRIORITY,
                C = l.default.LIVE_PERSON_DEFAULT_PRIORITY,
                O = l.default.CHAT_TYPES,
                I = O.LIVE_PERSON_CHAT_TYPE,
                M = O.HERO_CHAT_TYPE,
                P = l.default.CHAT_NAMES,
                w = l.default.CHAT_THEMES,
                L = w.DEFAULT_THEME,
                N = w.SALES_ASSOCIATE_THEME,
                j = l.default.CHAT_SERVICES_EVENTS,
                R = j.LP_EVENT,
                D = j.HERO_EVENT,
                H = l.default.SUBEVENTS,
                x = H.AVAILABLE,
                B = H.UNAVAILABLE,
                k = H.CHAT_AVAILABLE,
                U = H.CHAT_UNAVAILABLE,
                W = H.CHAT_MAXIMIZED,
                V = H.CHAT_MINIMIZED,
                F = H.LP_AGENT_STATE_CHANGED,
                G = H.HERO_TO_LP_REDIRECTION,
                z = H.LP_END_WAIT_TIME,
                Y = l.default.CHATS_RENDER_PAGE_ACTION,
                q = (A(r = {}, I, {
                    shouldShowChatButton: !0,
                    shouldShowChatMessage: !0
                }), A(r, M, {
                    shouldShowChatButton: !1,
                    shouldShowChatMessage: !1
                }), r),
                Z = o.default.createContext();
            t.ChatsContext = Z;
            var J = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && E(e, t)
                }(a, e);
                var t, n, r = (t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = _(a);
                    return e = t ? Reflect.construct(n, arguments, _(this).constructor) : n.apply(this, arguments),
                        function(e, t) {
                            if (t && ("object" === v(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(e)
                        }(this, e)
                });

                function a(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, a), (n = r.call(this, e)).getChatPriority = function(e) {
                        var t;
                        return (null === (t = n.state.chats[e]) || void 0 === t ? void 0 : t.priority) || 0
                    }, n.lpEventHandler = function(e, t) {
                        var r = "object" === v(t) ? t : {};
                        if (e === x) n.setState(function(e) {
                            return {
                                chats: y(y({}, e.chats), {}, A({}, I, y(y(y({}, e.chats[I]), r), {}, {
                                    isAvailable: !0,
                                    isEngagementTriggered: !0
                                })))
                            }
                        });
                        else if (e === B) {
                            var o, a = (null === (o = n.state.chats[I]) || void 0 === o ? void 0 : o.isChatAvailable) ? {} : (0, c.getRequiredChatProps)();
                            n.setState(function(e) {
                                return {
                                    chats: y(y({}, e.chats), {}, A({}, I, y(y(y({}, e.chats[I]), a), {}, {
                                        isAvailable: !1,
                                        isEngagementTriggered: !0
                                    })))
                                }
                            })
                        } else if (e === k) n.setState(function(e) {
                            return {
                                chats: y(y({}, e.chats), {}, A({}, I, y(y(y({}, e.chats[I]), r), {}, {
                                    isChatAvailable: !0
                                })))
                            }
                        });
                        else if (e === z) n.setState(function(e) {
                            return {
                                chats: y(y({}, e.chats), {}, A({}, I, y(y({}, e.chats[I]), {}, {
                                    hasNoEngagements: !0
                                })))
                            }
                        });
                        else if (e === U) {
                            var s, i = (null === (s = n.state.chats[I]) || void 0 === s ? void 0 : s.isAvailable) ? {} : (0, c.getRequiredChatProps)();
                            n.setState(function(e) {
                                return {
                                    chats: y(y({}, e.chats), {}, A({}, I, y(y(y({}, e.chats[I]), i), {}, {
                                        isChatAvailable: !1
                                    })))
                                }
                            })
                        } else if (e === W) n.setState(function(e) {
                            return {
                                chats: y(y({}, e.chats), {}, A({}, I, y(y({}, e.chats[I]), {}, {
                                    isChatOpened: !0,
                                    isAvailable: !0
                                })))
                            }
                        });
                        else if (e === V) {
                            var u = r.isChatInProgress,
                                l = n.state.chats[M].hasRedirectionTriggered,
                                d = n.state.chats[I].dataGroup,
                                h = l && u;
                            (0, f.triggerAnalyticsEvent)((0, f.createChatCloseEvent)(P.LIVE_PERSON_CHAT_TYPE, d)), n.setState(function(e) {
                                var t;
                                return {
                                    chats: y(y({}, e.chats), {}, (A(t = {}, I, y(y(y({}, e.chats[I]), r), {}, {
                                        isChatOpened: !1,
                                        isAvailable: !0
                                    })), A(t, M, y(y({}, e.chats[M]), {}, {
                                        priority: h ? 0 : b,
                                        hasRedirectionTriggered: h
                                    })), t))
                                }
                            })
                        } else if (e === F) {
                            var p = r.state;
                            n.setState(function(e) {
                                return {
                                    chats: y(y({}, e.chats), {}, A({}, I, y(y({}, e.chats[I]), {}, {
                                        csState: p
                                    })))
                                }
                            })
                        }
                    }, n.heroEventHandler = function(e, t) {
                        var r, o = t && "object" === v(t) ? t : {};
                        if (e === x) n.setState(function(e) {
                            return {
                                chats: y(y({}, e.chats), {}, A({}, M, y(y(y({}, e.chats[M]), o), {}, {
                                    isAvailable: !0
                                })))
                            }
                        });
                        else if (e === B) n.setState(function(e) {
                            return {
                                chats: y(y({}, e.chats), {}, A({}, M, y(y({}, e.chats[M]), {}, {
                                    isAvailable: !1
                                })))
                            }
                        });
                        else if (e === W) n.setState(function(e) {
                            return {
                                chats: y(y({}, e.chats), {}, A({}, M, y(y(y({}, e.chats[M]), o), {}, {
                                    isChatOpened: !0
                                })))
                            }
                        });
                        else if (e === V)(0, f.triggerAnalyticsEvent)((0, f.createChatCloseEvent)(P.HERO_CHAT_TYPE)), n.setState(function(e) {
                            return {
                                chats: y(y({}, e.chats), {}, A({}, M, y(y({}, e.chats[M]), {}, {
                                    isChatOpened: !1
                                })))
                            }
                        });
                        else if (e === G) {
                            if (!(null === (r = n.state.chats[I]) || void 0 === r ? void 0 : r.isAvailable)) {
                                window.open(o.customerServiceUrl, "_blank");
                                return
                            }
                            n.setState(function(e) {
                                return {
                                    chats: y(y({}, e.chats), {}, A({}, M, y(y({}, e.chats[M]), {}, {
                                        priority: 0,
                                        isChatOpened: !1,
                                        hasRedirectionTriggered: !0
                                    })))
                                }
                            })
                        }
                    }, n.reportRenderPageAction = function(e) {
                        var t = {
                                activeChat: P[e],
                                liveperson: (0, d.getReportedFields)(n.state.chats[I]),
                                hero: (0, d.getReportedFields)(n.state.chats[M])
                            },
                            r = (0, d.convertToPlainJson)(t);
                        (0, d.reportPageAction)(Y, r)
                    };
                    var t, n, o = e.livePersonPlaceholderId,
                        l = e.locale,
                        h = e.showSalesAssociateIcon,
                        p = e.contextualText;
                    return n.state = {
                        chats: (A(t = {}, I, y(y({}, (0, c.getRequiredChatProps)()), {}, {
                            isAvailable: !1,
                            isChatAvailable: !1,
                            isChatOpened: !1,
                            isChatInProgress: !1,
                            priority: C,
                            csState: null,
                            isEngagementTriggered: !1,
                            hasNoEngagements: !1,
                            dataGroup: null
                        })), A(t, M, y(y({}, (0, c.getRequiredChatProps)()), {}, {
                            isAvailable: !1,
                            isChatOpened: !1,
                            isChatInProgress: !1,
                            priority: b,
                            hasRedirectionTriggered: !1
                        })), t)
                    }, n.chatsStorage = new u.default, n.chatsStorage.removeLpAgentState(), n.livePerson = new s.default({
                        placeholderId: o,
                        getLpEngagementGroupData: n.chatsStorage.getLpEngagementGroupData,
                        setLpEngagementGroupData: n.chatsStorage.setLpEngagementGroupData,
                        setLpAgentState: n.chatsStorage.setLpAgentState,
                        setLpChatState: n.chatsStorage.setLpChatState,
                        removeLpChatState: n.chatsStorage.removeLpChatState,
                        showSalesAssociateIcon: h,
                        contextualText: p,
                        locale: l
                    }), n.livePerson.subscribe(R, n.lpEventHandler), n.hero = new i.default({
                        locale: l,
                        contextualText: p
                    }), n.hero.subscribe(D, n.heroEventHandler), n
                }
                return n = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.livePerson,
                                t = this.hero;
                            e.initPlaceholderObserver(), t.subscribeToHeroScript()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.livePerson,
                                t = this.hero;
                            e.removeSubscriptions(), t.removeSubscriptions()
                        }
                    }, {
                        key: "handleCurrentChatUpdate",
                        value: function(e) {
                            var t = this.props.shouldRenderChatButton;
                            if ("undefined" != typeof document) {
                                if (!t) {
                                    this.hideHero();
                                    return
                                }
                                e === M ? this.showHero() : this.hideHero()
                            }
                        }
                    }, {
                        key: "getShouldShowChatButton",
                        value: function(e) {
                            var t, n, r, o = this.props,
                                a = o.shouldRenderLivePersonButton,
                                s = o.showSalesAssociateIcon,
                                i = this.state.chats[I],
                                u = i.isEngagementTriggered,
                                l = i.csState,
                                c = i.hasNoEngagements;
                            switch (e) {
                                case I:
                                    r = (null === (t = this.state.chats[I]) || void 0 === t ? void 0 : t.isChatInProgress) || a;
                                    break;
                                case M:
                                    if (s) {
                                        r = u || null !== l && !l || c, q[M].shouldShowChatButton = r;
                                        break
                                    }
                                    r = !0;
                                    break;
                                default:
                                    r = !0
                            }
                            return r && !!(null === (n = q[e]) || void 0 === n ? void 0 : n.shouldShowChatButton)
                        }
                    }, {
                        key: "getShouldShowChatMessage",
                        value: function(e) {
                            var t;
                            return !!(null === (t = q[e]) || void 0 === t ? void 0 : t.shouldShowChatMessage)
                        }
                    }, {
                        key: "getCurrentChatProps",
                        value: function() {
                            var e = this.state.chats,
                                t = this.props.shouldRenderChatButton,
                                n = [null, (0, c.getRequiredChatProps)()],
                                r = Object.keys(e).map(function(t) {
                                    return [t, e[t]]
                                }).filter(function(e) {
                                    return e[1].isAvailable || e[1].isChatAvailable
                                }).sort(function(e, t) {
                                    return t[1].priority - e[1].priority
                                }),
                                o = r.some(function(e) {
                                    return !!e[1].isChatOpened && (n = e, !0)
                                });
                            !o && r.length && (n = g(r, 1)[0]);
                            var a = g(n, 2),
                                s = a[0],
                                i = a[1],
                                u = this.getShouldShowChatButton(s) && !o,
                                l = this.getShouldShowChatMessage(s) && !o;
                            return {
                                chatType: s,
                                chatData: i,
                                shouldShowChatPanel: t,
                                shouldShowChatButton: u,
                                shouldShowChatMessage: l,
                                hasOpenedChat: o,
                                forceMessageShownFlag: !!(null != i && i.forceMessageShownFlag)
                            }
                        }
                    }, {
                        key: "getButtonTheme",
                        value: function(e) {
                            var t = this.props.showSalesAssociateIcon;
                            return [I, M].includes(e) && t ? N : L
                        }
                    }, {
                        key: "showHero",
                        value: function() {
                            var e = this.hero,
                                t = this.props.showSalesAssociateIcon;
                            e.showHeroPanel(t)
                        }
                    }, {
                        key: "hideHero",
                        value: function() {
                            this.hero.hideHeroPanel()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = t.children,
                                r = t.locale,
                                a = this.state.chats[M].hasRedirectionTriggered,
                                s = this.state.chats[I].dataGroup,
                                i = this.getCurrentChatProps(),
                                u = i.chatType,
                                l = i.chatData,
                                c = i.shouldShowChatPanel,
                                f = i.shouldShowChatButton,
                                d = i.shouldShowChatMessage,
                                h = i.forceMessageShownFlag,
                                p = i.hasOpenedChat,
                                g = this.getButtonTheme(u);
                            this.handleCurrentChatUpdate(u);
                            var S = y(y({
                                shouldShowChatPanel: c,
                                shouldShowChatButton: f,
                                shouldShowChatMessage: d,
                                forceMessageShownFlag: h,
                                hasOpenedChat: p,
                                locale: r,
                                theme: g,
                                dataGroup: s
                            }, l), {}, (A(e = {
                                chatType: u,
                                hasRedirectionTriggered: a
                            }, u, l), A(e, "livePersonService", this.livePerson), e));
                            return this.reportRenderPageAction(u), o.default.createElement(Z.Provider, {
                                value: S
                            }, n)
                        }
                    }],
                    function(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(a.prototype, n), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), a
            }(o.PureComponent);
            t.ChatsProvider = J, J.propTypes = {
                children: a.default.oneOfType([a.default.element, a.default.arrayOf(a.default.element)]),
                livePersonPlaceholderId: a.default.string,
                locale: a.default.string,
                shouldRenderChatButton: a.default.bool,
                shouldRenderLivePersonButton: a.default.bool,
                showSalesAssociateIcon: a.default.bool,
                contextualText: a.default.string
            }, J.defaultProps = {
                livePersonPlaceholderId: T,
                locale: "en",
                shouldRenderChatButton: !0,
                shouldRenderLivePersonButton: !0,
                showSalesAssociateIcon: !1,
                contextualText: ""
            };
            var $ = Z.Consumer;
            t.ChatsConsumer = $
        },
        55088: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ChatsConsumer", {
                enumerable: !0,
                get: function() {
                    return r.ChatsConsumer
                }
            }), Object.defineProperty(t, "ChatsContext", {
                enumerable: !0,
                get: function() {
                    return r.ChatsContext
                }
            }), Object.defineProperty(t, "ChatsProvider", {
                enumerable: !0,
                get: function() {
                    return r.ChatsProvider
                }
            });
            var r = n(53382)
        },
        36084: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ChatButton", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "ChatsConsumer", {
                enumerable: !0,
                get: function() {
                    return o.ChatsConsumer
                }
            }), Object.defineProperty(t, "ChatsProvider", {
                enumerable: !0,
                get: function() {
                    return o.ChatsProvider
                }
            });
            var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(50490)),
                o = n(55088)
        },
        26749: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.SUBEVENTS = t.SALES_ASSOCIATE_URLS = t.SALES_ASSOCIATE_STEP_MAPPING = t.SALES_ASSOCIATE_SESSION_KEY = t.SALES_ASSOCIATE_LIST = t.SALES_ASSOCIATE_ANIMATION_STEPS = t.SALES_ASSOCIATE_ANIMATION_DELAY = t.PROACTIVE_CAMPAIGN_ANIMATION_STEPS = t.LP_WAIT_TIMEOUT = t.LP_CHAT_ID = t.LIVE_PERSON_REMOVE_BUTTON_TIMEOUT = t.LIVE_PERSON_DEFAULT_PRIORITY = t.LIVE_PERSON_DEFAULT_PLACEHOLDER_ID = t.LIVE_PERSON_CHAT_ENDED_STATES = t.HIDE_DEFAULT_BUTTON_BODY_CLASS = t.HERO_IFRAME_CONTAINER_ID = t.HERO_DEFAULT_PRIORITY = t.CHINESE_LOCALE = t.CHAT_TYPES = t.CHAT_THEMES = t.CHAT_SERVICES_EVENTS = t.CHAT_SCRIPT_POLL_TIMEOUT = t.CHAT_SCRIPT_POLL_INTERVAL = t.CHAT_NAMES = t.CHAT_MESSAGE_DISMISS_TIMEOUT = t.CHATS_RENDER_PAGE_ACTION = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(25499));

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var a = "hide-chat-icon";
            t.HIDE_DEFAULT_BUTTON_BODY_CLASS = a;
            var s = "hero-iframe-container";
            t.HERO_IFRAME_CONTAINER_ID = s;
            var i = "nrw-liveperson-message";
            t.LIVE_PERSON_DEFAULT_PLACEHOLDER_ID = i, t.LIVE_PERSON_DEFAULT_PRIORITY = 50, t.LIVE_PERSON_REMOVE_BUTTON_TIMEOUT = 2500, t.HERO_DEFAULT_PRIORITY = 60;
            var u = (0, r.default)({
                LIVE_PERSON_CHAT_TYPE: null,
                HERO_CHAT_TYPE: null
            });
            t.CHAT_TYPES = u;
            var l = {
                LIVE_PERSON_CHAT_TYPE: "liveperson",
                HERO_CHAT_TYPE: "hero"
            };
            t.CHAT_NAMES = l;
            var c = (0, r.default)({
                DEFAULT_THEME: null,
                SALES_ASSOCIATE_THEME: null
            });
            t.CHAT_THEMES = c;
            var f = (0, r.default)({
                LP_EVENT: null,
                HERO_EVENT: null
            });
            t.CHAT_SERVICES_EVENTS = f;
            var d = (0, r.default)({
                AVAILABLE: null,
                UNAVAILABLE: null,
                CHAT_AVAILABLE: null,
                CHAT_UNAVAILABLE: null,
                CHAT_MAXIMIZED: null,
                CHAT_MINIMIZED: null,
                HERO_TO_LP_REDIRECTION: null,
                LP_AGENT_STATE_CHANGED: null,
                LAUNCH_CS: null,
                BUTTON_CLICKED: null,
                SWITCH_STORE_CHOICE_MADE: null,
                LP_END_WAIT_TIME: null,
                DISPLAY_MESSAGE: null
            });
            t.SUBEVENTS = d;
            var h = {
                DEFAULT_THEME: null
            };
            t.CHAT_MESSAGE_DISMISS_TIMEOUT = h, t.CHAT_SCRIPT_POLL_TIMEOUT = 6e4, t.LP_WAIT_TIMEOUT = 2e4, t.CHAT_SCRIPT_POLL_INTERVAL = 500;
            var p = "lpChat";
            t.LP_CHAT_ID = p, t.CHINESE_LOCALE = "zh";
            var g = ["ended", "postChat"];
            t.LIVE_PERSON_CHAT_ENDED_STATES = g;
            var S = ["salesAssociate1", "salesAssociate2", "salesAssociate3"];
            t.SALES_ASSOCIATE_LIST = S, t.SALES_ASSOCIATE_ANIMATION_DELAY = 18e4;
            var m = [{
                id: S[0],
                url: "https://s7g10.scene7.com/is/image/Burberryltd/CB3EEF99-AE5B-488F-B944-BCA362E5E233"
            }, {
                id: S[1],
                url: "https://s7g10.scene7.com/is/image/Burberryltd/0A440F55-42AD-438D-9616-1F0EF990A131"
            }, {
                id: S[2],
                url: "https://s7g10.scene7.com/is/image/Burberryltd/C2EA0D9C-5B97-4560-BC5C-A062F94C7204"
            }];
            t.SALES_ASSOCIATE_URLS = m;
            var y = [
                ["start", 9e3],
                ["first", 3e3],
                ["second", 5e3],
                ["third", 5e3],
                ["fourth", 5e3],
                ["fifth", 5e3],
                ["sixth", 8e3],
                ["seventh", 8e3],
                ["eighth", 18e4],
                ["final", 1e4]
            ];
            t.SALES_ASSOCIATE_ANIMATION_STEPS = y;
            var v = [
                ["start", 0],
                ["first", 5e3],
                ["second", 5e3],
                ["third", 5e3],
                ["fourth", 5e3],
                ["fifth", 5e3],
                ["sixth", 8e3],
                ["seventh", 8e3],
                ["final", 1e4]
            ];
            t.PROACTIVE_CAMPAIGN_ANIMATION_STEPS = v;
            var E = Object.fromEntries(y.map(function(e, t) {
                return [(function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            s = !0,
                            i = !1;
                        try {
                            for (o = o.call(e); !(s = (n = o.next()).done) && (a.push(n.value), 1 !== a.length); s = !0);
                        } catch (e) {
                            i = !0, r = e
                        } finally {
                            try {
                                s || null == o.return || o.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return a
                    }
                }(e, 1) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, 1);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, 1)
                    }
                }(e, 1) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[0], t]
            }));
            t.SALES_ASSOCIATE_STEP_MAPPING = E;
            var _ = "@boss/chats render";
            t.CHATS_RENDER_PAGE_ACTION = _;
            var A = "sales_associate";
            t.SALES_ASSOCIATE_SESSION_KEY = A, t.default = {
                HIDE_DEFAULT_BUTTON_BODY_CLASS: a,
                HERO_IFRAME_CONTAINER_ID: s,
                LIVE_PERSON_DEFAULT_PLACEHOLDER_ID: i,
                LIVE_PERSON_DEFAULT_PRIORITY: 50,
                LIVE_PERSON_REMOVE_BUTTON_TIMEOUT: 2500,
                HERO_DEFAULT_PRIORITY: 60,
                CHAT_TYPES: u,
                CHAT_NAMES: l,
                CHAT_THEMES: c,
                CHAT_SERVICES_EVENTS: f,
                SUBEVENTS: d,
                CHAT_MESSAGE_DISMISS_TIMEOUT: h,
                CHAT_SCRIPT_POLL_TIMEOUT: 6e4,
                CHAT_SCRIPT_POLL_INTERVAL: 500,
                LP_CHAT_ID: p,
                CHINESE_LOCALE: "zh",
                LIVE_PERSON_CHAT_ENDED_STATES: g,
                SALES_ASSOCIATE_LIST: S,
                SALES_ASSOCIATE_ANIMATION_STEPS: y,
                SALES_ASSOCIATE_STEP_MAPPING: E,
                CHATS_RENDER_PAGE_ACTION: _,
                SALES_ASSOCIATE_SESSION_KEY: A,
                SALES_ASSOCIATE_URLS: m,
                PROACTIVE_CAMPAIGN_ANIMATION_STEPS: v,
                SALES_ASSOCIATE_ANIMATION_DELAY: 18e4,
                LP_WAIT_TIMEOUT: 2e4
            }
        },
        42925: (e, t, n) => {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = {};
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            });
            var a = function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                    default: e
                };
                var n = s(void 0);
                if (n && n.has(e)) return n.get(e);
                var o = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var u = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        u && (u.get || u.set) ? Object.defineProperty(o, i, u) : o[i] = e[i]
                    }
                return o.default = e, n && n.set(e, o), o
            }(n(26749));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }
            Object.keys(a).forEach(function(e) {
                !("default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(o, e)) && (e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                }))
            })
        },
        24529: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getRequiredChatProps = t.generateSalesAssociateUrl = t.generateSalesAssociateAnimation = t.generateMessageAnimation = t.createClickEvent = void 0, t.createClickEvent = function() {
                return new MouseEvent("click", {
                    bubbles: !0
                })
            };
            var n = function() {
                return null
            };
            t.getRequiredChatProps = function() {
                return {
                    title: "",
                    message: "",
                    dismissMessageHandler: n,
                    startChatHandler: n
                }
            }, t.generateSalesAssociateAnimation = function(e, t, n, r, o, a, s, i, u) {
                return e || n || o || s || i ? u.secondAnimationSalesAssociate : t || r || a ? u.firstAnimationSalesAssociate : ""
            }, t.generateMessageAnimation = function(e, t, n, r, o, a, s, i, u) {
                return e || n || o || s || i ? u.secondAnimationMessageIcon : t || r || a ? u.firstAnimationMessageIcon : ""
            }, t.generateSalesAssociateUrl = function(e, t, n, r, o, a) {
                return o || a ? e[t[2]] : n || r ? e[t[1]] : e[t[0]]
            }
        },
        56184: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.triggerAnalyticsEvent = t.createChatLoadEvent = t.createChatCloseEvent = t.createChatClickEvent = void 0, t.triggerAnalyticsEvent = function(e) {
                Array.isArray(window.dataLayer) && window.dataLayer.push(e)
            }, t.createChatLoadEvent = function(e, t) {
                return {
                    event: "action",
                    data: {
                        component: "@boss/chats",
                        context: t || "chat bubble",
                        interaction: "load",
                        description: "".concat(e, " chat loaded")
                    }
                }
            }, t.createChatClickEvent = function(e, t) {
                return {
                    event: "action",
                    data: {
                        component: "@boss/chats",
                        context: t || "chat bubble",
                        interaction: "select",
                        description: "".concat(e, " chat start")
                    }
                }
            }, t.createChatCloseEvent = function(e, t) {
                return {
                    event: "action",
                    data: {
                        component: "@boss/chats",
                        context: t || "chat bubble",
                        interaction: "select",
                        description: "".concat(e, " chat closed")
                    }
                }
            }
        },
        93673: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "createClickEvent", {
                enumerable: !0,
                get: function() {
                    return r.createClickEvent
                }
            }), Object.defineProperty(t, "getRequiredChatProps", {
                enumerable: !0,
                get: function() {
                    return r.getRequiredChatProps
                }
            });
            var r = n(24529)
        },
        35830: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "withChats", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(24274))
        },
        24274: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(96540)),
                o = n(36084),
                a = ["children", "aboveCTA"];

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.default = function(e) {
                var t = function(t) {
                    return r.default.createElement(o.ChatsConsumer, null, function(n) {
                        var o = t.children,
                            i = t.aboveCTA,
                            u = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = function(e, t) {
                                    if (null == e) return {};
                                    var n, r, o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                }
                                return o
                            }(t, a),
                            l = n.title,
                            c = n.message,
                            f = n.messageType,
                            d = n.dismissMessageHandler,
                            h = n.messageClickHandler,
                            p = n.startChatHandler,
                            g = n.locale,
                            S = n.theme,
                            m = n.shouldShowChatPanel,
                            y = n.shouldShowChatButton,
                            v = n.shouldShowChatMessage,
                            E = n.forceMessageShownFlag,
                            _ = n.hasOpenedChat,
                            A = n.hasRedirectionTriggered,
                            T = n.chatType,
                            b = n.dataGroup;
                        return r.default.createElement(e, s({
                            aboveCTA: i,
                            title: l,
                            message: c,
                            messageType: f,
                            dismissMessageHandler: d,
                            messageClickHandler: h,
                            startChatHandler: p,
                            locale: g,
                            theme: S,
                            hasOpenedChat: _,
                            isShown: m,
                            shouldShowChatButton: y,
                            shouldShowChatMessage: v,
                            forceMessageShownFlag: E,
                            hasRedirectionTriggered: A,
                            chatType: T,
                            dataGroup: b
                        }, u), o)
                    })
                };
                return t.displayName = "WithChats(".concat(e.displayName || e.name, ")"), t
            }
        },
        89574: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = s(n(96540)),
                o = s(n(42925)),
                a = s(n(27723));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var u = o.default.SALES_ASSOCIATE_LIST,
                l = o.default.SALES_ASSOCIATE_SESSION_KEY;
            t.default = function(e) {
                var t = new a.default().getSession(l),
                    n = (null == t ? void 0 : t.salesAssociateUrls) || u.sort(function() {
                        return .5 - Math.random()
                    }),
                    o = function(t) {
                        return r.default.createElement(e, i({
                            salesAssociateUrls: n
                        }, t))
                    };
                return o.displayName = "withSalesAssociateUrls(".concat(e.displayName || e.name, ")"), o
            }
        },
        41435: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "VV", {
                enumerable: !0,
                get: function() {
                    return r.ChatButton
                }
            }), Object.defineProperty(t, "dc", {
                enumerable: !0,
                get: function() {
                    return r.ChatsProvider
                }
            });
            var r = n(36084)
        },
        89325: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SALES_ASSOCIATE_SECOND_CUSTOM_MESSAGE_MAP = t.SALES_ASSOCIATE_FIRST_CUSTOM_MESSAGE_MAP = t.CHAT_BUTTON_TITLE_TRANSLATIONS_MAP = t.CHAT_BUTTON_ARIA_LABEL_MESSAGE_MAP = void 0, t.CHAT_BUTTON_TITLE_TRANSLATIONS_MAP = {
                de: "Sprechen Sie live mit uns",
                en: "Speak to us live",
                es: "Chatea con nosotros",
                fr: "Discutez avec nous",
                it: "Parla con noi in tempo reale",
                ja: "オンラインで直接お問い合わせください。",
                ko: "실시간 채팅 상담",
                pt: "Fale com a gente ao vivo",
                ru: "Начать общение в чате",
                zf: "與我們線上即時交談",
                zh: "与我们即时对话"
            }, t.SALES_ASSOCIATE_FIRST_CUSTOM_MESSAGE_MAP = {
                en: "Looking for something? Let us help.",
                fr: "Vous cherchez quelque chose ? Nous serions ravis de vous aider",
                de: "Sie suchen nach etwas? Wir helfen Ihnen gern.",
                it: "Cerchi qualcosa? Ti aiutiamo noi.",
                zh: "正在寻找某件商品？让我们来帮您。",
                ja: "何かお探しですか？お手伝いいたします。",
                ko: "도움이 필요하신가요? 버버리 상담원에게 문의하세요.",
                es: "\xbfNo encuentras lo que buscas? Perm\xedtenos ayudarte.",
                pt: "Procurando alguma coisa? Deixe-nos ajudar.",
                zf: "您想購買什麼樣的商品？讓我們來幫您。",
                ru: "Нужен совет в выборе товаров? Мы будет рады помочь."
            }, t.SALES_ASSOCIATE_SECOND_CUSTOM_MESSAGE_MAP = {
                en: "Start chat",
                fr: "D\xe9marrer le chat",
                de: "Chat beginnen",
                it: "Avvia chat",
                zh: "开启对话",
                ja: "チャットをスタート",
                ko: "채팅 상담 시작하기",
                es: "Iniciar chat",
                pt: "Iniciar bate-papo",
                zf: "開始線上交談",
                ru: "Начать чат"
            }, t.CHAT_BUTTON_ARIA_LABEL_MESSAGE_MAP = {
                en: "Live chat: Speak with an advisor",
                fr: "Live chat : parlez \xe0 un conseiller",
                de: "Live-Chat: Lassen Sie sich beraten",
                it: "Live chat: parla con un consulente",
                zh: "与销售顾问即时对话",
                ja: "ライブチャット：アドバイザーと話す",
                ko: "라이브 채팅: 상담원에 문의하세요",
                es: "Habla por chat con nuestro servicio de atenci\xf3n al cliente",
                pt: "Chat ao vivo: fale com um consultor",
                zf: "線上即時交談：與銷售顧問對話",
                ru: "Чат в режиме реального времени: поговорите с нашим сотрудником"
            }
        },
        12076: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = s(n(53068)),
                o = s(n(42925)),
                a = n(89325);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = o.default.HIDE_DEFAULT_BUTTON_BODY_CLASS,
                u = o.default.HERO_IFRAME_CONTAINER_ID,
                l = o.default.CHAT_SCRIPT_POLL_TIMEOUT,
                c = o.default.CHAT_SCRIPT_POLL_INTERVAL,
                f = o.default.CHAT_SERVICES_EVENTS.HERO_EVENT,
                d = o.default.SUBEVENTS,
                h = d.AVAILABLE,
                p = d.UNAVAILABLE,
                g = d.CHAT_MAXIMIZED,
                S = d.CHAT_MINIMIZED,
                m = d.HERO_TO_LP_REDIRECTION,
                y = function() {
                    return "undefined" == typeof document ? null : document.getElementById(u)
                },
                v = function(e, t, n) {
                    return Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }(function e(t) {
                    var n = this,
                        o = t.locale,
                        s = t.contextualText;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, e), this.subscribe = function(e, t) {
                        if ("string" != typeof e || "function" != typeof t) return null;
                        n.emitter.on(e, t)
                    }, this.toggleChatDefaultIcon = function() {
                        var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                        if ("undefined" == typeof document) return null;
                        document.body.classList.toggle(i, !e)
                    }, this.showHeroPanel = function(e) {
                        var t = y();
                        t && (t.style.display = "block", e || n.toggleChatDefaultIcon(!0))
                    }, this.hideHeroPanel = function() {
                        var e = y();
                        e && (e.style.display = "none")
                    }, this.subscribeToHeroScript = function() {
                        n.toggleChatDefaultIcon(!1), n.heroIntervalId = setInterval(function() {
                            window.hero && (clearInterval(n.heroIntervalId), n.subscribeToHeroEvents())
                        }, c), n.heroTimeoutId = setTimeout(function() {
                            n.heroIntervalId && clearInterval(n.heroIntervalId)
                        }, l)
                    }, this.subscribeToHeroEvents = function() {
                        window.hero("onReady", function(e) {
                            var t = {
                                title: n.contextualText || a.CHAT_BUTTON_TITLE_TRANSLATIONS_MAP[n.locale],
                                startChatHandler: n.getHeroStartChatHandler
                            };
                            n.emitter.emit(f, h, t), e.messengerInUse && n.emitter.emit(f, g, t)
                        }), window.hero("onShutdown", function() {
                            n.emitter.emit(f, p)
                        }), window.hero("onShow", function() {
                            n.emitter.emit(f, g)
                        }), window.hero("onHide", function() {
                            n.emitter.emit(f, S)
                        }), window.hero("onCustomerServiceRedirect", function(e) {
                            n.closeHeroChatHandler(), n.emitter.emit(f, m, e)
                        })
                    }, this.getHeroStartChatHandler = function() {
                        window.hero("show")
                    }, this.closeHeroChatHandler = function() {
                        window.hero("hide")
                    }, this.removeSubscriptions = function() {
                        clearInterval(n.heroIntervalId), clearTimeout(n.heroTimeoutId)
                    }, this.emitter = new r.default, this.heroIntervalId = null, this.heroTimeoutId = null, this.contextualText = s, this.locale = o
                });
            t.default = v
        },
        98249: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(12076))
        },
        8511: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(41630))
        },
        41630: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n(53068)),
                o = n(93673),
                a = i(n(42925)),
                s = n(89325);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = a.default.CHAT_SERVICES_EVENTS.LP_EVENT,
                l = a.default.SUBEVENTS,
                c = l.AVAILABLE,
                f = l.UNAVAILABLE,
                d = l.CHAT_AVAILABLE,
                h = l.CHAT_UNAVAILABLE,
                p = l.CHAT_MAXIMIZED,
                g = l.CHAT_MINIMIZED,
                S = l.LP_AGENT_STATE_CHANGED,
                m = l.LP_END_WAIT_TIME,
                y = a.default.CHAT_SCRIPT_POLL_TIMEOUT,
                v = a.default.CHAT_SCRIPT_POLL_INTERVAL,
                E = a.default.LIVE_PERSON_REMOVE_BUTTON_TIMEOUT,
                _ = a.default.LP_WAIT_TIMEOUT,
                A = "lpChat",
                T = "lp-engagement",
                b = "data-LP-event",
                C = "[".concat(b, '="close"]'),
                O = "[".concat(b, '="click"]'),
                I = "[".concat("data-LP-point", '="maximize"]'),
                M = "lpUnifiedWindow",
                P = function() {
                    var e;

                    function t(e) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, t), this.subscribe = function(e, t) {
                            if ("string" != typeof e || "function" != typeof t) return null;
                            n.emitter.on(e, t)
                        }, this.onChatWindowStateChanged = function(e) {
                            var t = e.state,
                                r = void 0 === t ? "" : t,
                                o = "init" === r,
                                a = "ended" === r;
                            n.setLpChatState(r), o && (n.emitter.emit(u, d, {
                                dismissMessageHandler: n.getDismissMessageHandler(),
                                startChatHandler: n.getStartChatHandler()
                            }), n.checkIfChatWindowMinimized() ? (n.isStartCTAMaximizesChatWindow = !0, n.emitter.emit(u, g, {
                                isChatInProgress: !0
                            })) : n.emitter.emit(u, p, {
                                isChatInProgress: !0
                            })), a && n.emitter.emit(u, h)
                        }, this.checkIfChatWindowMinimized = function() {
                            var e = document.getElementById(A);
                            if (e) {
                                var t = e.querySelector(".lp_minimized");
                                return t && "none" !== t.style.display
                            }
                            return !1
                        }, this.onChatWindowClosed = function() {
                            n.emitter.emit(u, g, {
                                isChatInProgress: !1
                            }), n.removeLpChatState()
                        }, this.onChatMinimized = function() {
                            n.isStartCTAMaximizesChatWindow = !0, n.emitter.emit(u, g, {
                                isChatInProgress: !0
                            })
                        }, this.onChatMaximized = function() {
                            n.emitter.emit(u, p)
                        }, this.onDisplayOffer = function(e) {
                            clearTimeout(n.lpTagWaitTimeoutId);
                            var t = e.state,
                                r = Number.isFinite(t) && (1 === t || 4 === t);
                            n.setLpAgentState(r), n.emitter.emit(u, S, {
                                state: r
                            })
                        }, this.subscribeToLPTagEvents = function() {
                            n.lpTagChatWindowStateListenerId = window.lpTag.events.bind(M, "state", n.onChatWindowStateChanged), n.lpTagChatWindowClosedListenerId = window.lpTag.events.bind(M, "windowClosed", n.onChatWindowClosed), n.lpTagChatWindowMinimisedListenerId = window.lpTag.events.bind(M, "minimized", n.onChatMinimized), n.lpTagChatWindowMaximisedListenerId = window.lpTag.events.bind(M, "maximized", n.onChatMaximized), n.lpTagOfferDisplayListenerId = window.lpTag.events.bind("LP_OFFERS", "OFFER_DISPLAY", n.onDisplayOffer)
                        }, this.subscribeToLPTag = function() {
                            n.lpTagIntervalId = setInterval(function() {
                                window.lpTag && window.lpTag.events && (clearInterval(n.lpTagIntervalId), n.subscribeToLPTagEvents())
                            }, v), n.lpTagTimeoutId = setTimeout(function() {
                                clearInterval(n.lpTagIntervalId)
                            }, y), n.lpTagWaitTimeoutId = setTimeout(function() {
                                n.emitter.emit(u, m)
                            }, _)
                        }, this.maximiseChatWindow = function() {
                            n.isStartCTAMaximizesChatWindow = !1;
                            var e = n.getMaximiseChatCtaEl();
                            if (e) {
                                var t = (0, o.createClickEvent)();
                                e.dispatchEvent(t)
                            }
                        }, this.closeChatWindow = function() {
                            var e = n.getCloseChatCtaEl();
                            if (e) {
                                var t = (0, o.createClickEvent)();
                                e.dispatchEvent(t)
                            }
                        }, this.dispatchEventOnPlaceholderChild = function(e) {
                            n.isStartCTAMaximizesChatWindow && e === O && n.maximiseChatWindow();
                            var t = document.getElementById(n.placeholderId);
                            t && (n.placeholderChildClickIntervalId = setInterval(function() {
                                var r;
                                if (e === O) {
                                    if (!(r = t.querySelector(O))) {
                                        var a = document.getElementById(A);
                                        a && (r = a.querySelector(".lp_minimized .lp_header-content-wrapper"))
                                    }
                                } else r = t.querySelector(e);
                                if (r) {
                                    clearInterval(n.placeholderChildClickIntervalId);
                                    var s = (0, o.createClickEvent)();
                                    r.dispatchEvent(s)
                                }
                            }, 200), n.placeholderChildClickTimeoutId = setTimeout(function() {
                                clearInterval(n.placeholderChildClickIntervalId)
                            }, E))
                        }, this.onLPDataUpdate = function(e) {
                            n.emitter.emit(u, c, e)
                        }, this.onLPDataRemove = function() {
                            n.emitter.emit(u, f)
                        }, this.closeMessage = function(e) {
                            n.onLPDataUpdate({
                                message: ""
                            });
                            var t = Date.now();
                            n.setLpEngagementGroupData(e, {
                                timeStampMs: t
                            })
                        }, this.getDismissMessageHandler = function(e) {
                            return function() {
                                e && n.closeMessage(e), n.dispatchEventOnPlaceholderChild(C)
                            }
                        }, this.getStartChatHandler = function(e) {
                            return function() {
                                e && n.closeMessage(e), n.dispatchEventOnPlaceholderChild(O)
                            }
                        }, this.getShouldShowMessage = function(e) {
                            var t = n.getLpEngagementGroupData(e);
                            if (t) {
                                var r = t.timeStampMs;
                                return "number" != typeof r || Date.now() - r > 864e5
                            }
                            return !0
                        }, this.handleLPContentRemoved = function() {
                            n.removeLPButtonTimeoutId = setTimeout(n.onLPDataRemove, E)
                        }, this.handleLPContentAdded = function(e) {
                            clearTimeout(n.removeLPButtonTimeoutId);
                            try {
                                var t = document.createElement("div");
                                Array.prototype.forEach.call(e, function(e) {
                                    t.appendChild(e.cloneNode(!0))
                                });
                                var r = t.querySelector(".".concat(T));
                                if (r) {
                                    var o = r.dataset.group,
                                        a = +r.dataset.priority,
                                        i = n.contextualText || s.CHAT_BUTTON_TITLE_TRANSLATIONS_MAP[n.locale];
                                    if (!n.showSalesAssociateIcon) {
                                        var u = r.querySelector(".".concat(T, "__title"));
                                        i = u && u.innerText || ""
                                    }
                                    var l = r.querySelector(".".concat(T, "__message")),
                                        c = l && l.innerText || "",
                                        f = !!c && n.getShouldShowMessage(o);
                                    n.onLPDataUpdate({
                                        title: i,
                                        message: f ? c : "",
                                        priority: a,
                                        dataGroup: o,
                                        dismissMessageHandler: n.getDismissMessageHandler(o),
                                        startChatHandler: n.getStartChatHandler(o)
                                    })
                                }
                            } catch (e) {
                                console.error("Parsing liveperson updated markup content failed with error: ", e)
                            }
                        }, this.initPlaceholderObserver = function() {
                            if (!(window && window.document)) return null;
                            try {
                                n.subscribeToLPTag();
                                var e = document.createElement("div");
                                e.id = n.placeholderId, e.style.display = "none", document.body.appendChild(e);
                                var t = new MutationObserver(function(t) {
                                    Array.prototype.forEach.call(t, function(t) {
                                        var r = "childList" === t.type,
                                            o = e.children,
                                            a = !!o.length;
                                        r && a ? n.handleLPContentAdded(o) : r && !a && n.handleLPContentRemoved()
                                    })
                                });
                                return t.observe(e, {
                                    childList: !0,
                                    subtree: !0,
                                    characterData: !0
                                }), n.mutationObserver = t, t
                            } catch (e) {
                                return console.error("Initializating livePerson placeholder mutation observer failed with error: ", e), null
                            }
                        }, this.removeSubscriptions = function() {
                            n.mutationObserver && (n.mutationObserver.disconnect(), n.mutationObserver = null), clearInterval(n.lpTagIntervalId), clearTimeout(n.lpTagTimeoutId), clearTimeout(n.lpTagWaitTimeoutId), clearTimeout(n.removeLPButtonTimeoutId), clearInterval(n.placeholderChildClickIntervalId), clearTimeout(n.placeholderChildClickTimeoutId)
                        };
                        var a = e.placeholderId,
                            i = e.getLpEngagementGroupData,
                            l = e.setLpEngagementGroupData,
                            b = e.setLpAgentState,
                            I = e.setLpChatState,
                            P = e.removeLpChatState,
                            w = e.showSalesAssociateIcon,
                            L = e.contextualText,
                            N = e.locale;
                        this.placeholderId = a, this.getLpEngagementGroupData = i, this.setLpEngagementGroupData = l, this.setLpAgentState = b, this.setLpChatState = I, this.removeLpChatState = P, this.emitter = new r.default, this.mutationObserver = null, this.lpTagChatWindowStateListenerId = null, this.lpTagChatWindowClosedListenerId = null, this.lpTagChatWindowMinimisedListenerId = null, this.lpTagChatWindowMaximisedListenerId = null, this.lpTagOfferDisplayListenerId = null, this.lpTagIntervalId = null, this.lpTagTimeoutId = null, this.lpTagWaitTimeoutId = null, this.placeholderChildClickIntervalId = null, this.placeholderChildClickTimeoutId = null, this.removeLPButtonTimeoutId = null, this.isStartCTAMaximizesChatWindow = !1, this.showSalesAssociateIcon = w, this.contextualText = L, this.locale = N
                    }
                    return e = [{
                            key: "getMaximiseChatCtaEl",
                            value: function() {
                                if (!document) return null;
                                var e = document.getElementById(A);
                                return e ? e.querySelector(I) : null
                            }
                        }, {
                            key: "getCloseChatCtaEl",
                            value: function() {
                                if (!document) return null;
                                var e = document.getElementById(A);
                                return e ? e.querySelector(".lpc_maximized-header__close-button") : null
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(t.prototype, e), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                }();
            t.default = P
        },
        52849: (e, t) => {
            "use strict";

            function n(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach(function(t) {
                        o(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.reportPageAction = t.getReportedFields = t.convertToPlainJson = void 0;
            var s = /^(\w{2,3})(?:\..+)?\.burberry\.com$/i,
                i = ["isAvailable", "isChatOpened", "isChatInProgress", "priority"];
            t.getReportedFields = function(e) {
                return e && "object" === a(e) ? Object.keys(e).reduce(function(t, n) {
                    return "" !== e[n] && null !== e[n] && void 0 !== e[n] && i.indexOf(n) > -1 && (t[n] = e[n]), t
                }, {}) : {}
            }, t.convertToPlainJson = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return t && "object" === a(t) && Object.keys(t).forEach(function(o) {
                    var s = n ? "".concat(n, ".").concat(o) : o;
                    switch (a(t[o])) {
                        case "object":
                            Array.isArray(t[o]) ? r[s] = t[o].toString() : e(t[o], s, r);
                            break;
                        case "number":
                        case "string":
                        case "boolean":
                            r[s] = t[o]
                    }
                }), r
            }, t.reportPageAction = function(e, t) {
                if (window.newrelic && "function" == typeof window.newrelic.addPageAction && e && "object" === a(t) && Object.keys(t).length) {
                    window.lpTag && Array.isArray(window.lpTag.section) && (n = window.lpTag.section.join());
                    var n, i = s.exec(window.location.host),
                        u = r(r({}, t), {}, o({
                            lpTags: n
                        }, "currentDomain", (null == i ? void 0 : i[1]) || ""));
                    window.newrelic.addPageAction(e, u)
                }
            }
        },
        89845: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "convertToPlainJson", {
                enumerable: !0,
                get: function() {
                    return r.convertToPlainJson
                }
            }), Object.defineProperty(t, "getReportedFields", {
                enumerable: !0,
                get: function() {
                    return r.getReportedFields
                }
            }), Object.defineProperty(t, "reportPageAction", {
                enumerable: !0,
                get: function() {
                    return r.reportPageAction
                }
            });
            var r = n(52849)
        },
        27723: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(49440));

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach(function(t) {
                        s(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var i = "chat_type",
                u = "lp-engagement-groups",
                l = "has-interacted-with-sa-message",
                c = "LIVE_PERSON_AGENT_STATE",
                f = "LIVE_PERSON_CHAT_STATE",
                d = function() {
                    var e;

                    function t() {
                        var e = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, t), this.getLpEngagementGroupData = function(t) {
                            var n = e.getLpEngagementGroupsDomain();
                            return n ? n[t] : null
                        }, this.setLpEngagementGroupData = function(t, n) {
                            var r = a(a({}, e.getLpEngagementGroupsDomain() || {}), {}, s({}, t, n));
                            e.set(u, r)
                        }, this.setLpAgentState = function(t) {
                            e.setGlobal(c, t)
                        }, this.getLpAgentState = function() {
                            return e.getGlobal(c)
                        }, this.removeLpAgentState = function() {
                            e.setGlobal(c)
                        }, this.setLpChatState = function(t) {
                            e.setGlobal(f, t)
                        }, this.getLpChatState = function() {
                            return e.getGlobal(f)
                        }, this.removeLpChatState = function() {
                            e.setGlobal(f)
                        }, this.setHasInteractedWithMessage = function() {
                            e.session(l, !0)
                        }, this.setChatType = function(t) {
                            e.session(i, t)
                        }, this.getChatType = function() {
                            return e.getSession(i)
                        }, this.getHasInteractedWithMessage = function() {
                            return e.getSession(l)
                        }, this.localStorage = new r.default({
                            namespace: "chats"
                        })
                    }
                    return e = [{
                            key: "get",
                            value: function(e) {
                                return this.localStorage.get(e)
                            }
                        }, {
                            key: "set",
                            value: function(e, t) {
                                this.localStorage.set(e, t)
                            }
                        }, {
                            key: "getGlobal",
                            value: function(e) {
                                var t, n;
                                if ("undefined" != typeof Storage) {
                                    try {
                                        t = localStorage.getItem(e)
                                    } catch (e) {
                                        console.error("Error occured when trying to access localStorage", e);
                                        return
                                    }
                                    try {
                                        n = JSON.parse(t)
                                    } catch (e) {
                                        n = t
                                    }
                                    return n
                                }
                            }
                        }, {
                            key: "setGlobal",
                            value: function(e, t) {
                                if ("undefined" != typeof Storage) {
                                    if (void 0 === t) {
                                        try {
                                            localStorage.removeItem(e)
                                        } catch (e) {
                                            console.error("Error occured when trying to access localStorage", e)
                                        }
                                        return
                                    }
                                    var n = t;
                                    "string" != typeof t && (n = JSON.stringify(n));
                                    try {
                                        localStorage.setItem(e, n)
                                    } catch (e) {
                                        console.error("Error occured when trying to access localStorage", e)
                                    }
                                }
                            }
                        }, {
                            key: "session",
                            value: function(e, t) {
                                this.localStorage.session(e, t)
                            }
                        }, {
                            key: "getSession",
                            value: function(e) {
                                var t, n;
                                if ("undefined" != typeof Storage) {
                                    try {
                                        t = this.localStorage.getSession(e)
                                    } catch (e) {
                                        console.error("Error occured when trying to access sessionStorage", e);
                                        return
                                    }
                                    try {
                                        n = JSON.parse(t)
                                    } catch (e) {
                                        n = t
                                    }
                                    return n
                                }
                            }
                        }, {
                            key: "getLpEngagementGroupsDomain",
                            value: function() {
                                return this.get(u)
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(t.prototype, e), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                }();
            t.default = d
        },
        18927: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(27723))
        },
        33632: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                Sequencer: () => f,
                useSequencer: () => c
            });
            var r, o, a, s = n(96540),
                i = function() {
                    return (i = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };
            if (! function(e) {
                    e.IDLE = "STATUS_IDLE", e.PLAYING = "STATUS_PLAYING"
                }(r || (r = {})), "undefined" != typeof window && "function" == typeof window.requestAnimationFrame) o = window.requestAnimationFrame, a = window.cancelAnimationFrame;
            else if ("function" == typeof setTimeout) o = function(e) {
                return setTimeout(e, 15)
            }, a = clearTimeout;
            else throw Error("React sequencer depends on requestAnimationFrame, please use a polyfill if not available in the browser.");
            var u = new(function() {
                    function e() {
                        var e = this;
                        this.startLoop = function() {
                            e.isActive || (e.isActive = !0, e.currentTimeStamp = Date.now(), e.requestID = o(e._onLoop))
                        }, this.stopLoop = function() {
                            e.isActive && (e.isActive = !1, a(e.requestID))
                        }, this._onLoop = function() {
                            e.currentTimeStamp = Date.now();
                            for (var t = 0; t < e.subscriptions.length; t++)(0, e.subscriptions[t])(e.currentTimeStamp);
                            e.isActive && (e.requestID = o(e._onLoop))
                        }, this.currentTimeStamp = Date.now(), this.isActive = !1, this.requestID = null, this.subscriptions = []
                    }
                    return e.prototype.onTick = function(e) {
                        0 === this.subscriptions.length && this.startLoop(), this.subscriptions.push(e)
                    }, e.prototype.offTick = function(e) {
                        var t = this.subscriptions.indexOf(e); - 1 !== t && this.subscriptions.splice(t, 1), 0 === this.subscriptions.length && this.stopLoop()
                    }, e
                }()),
                l = function() {
                    function e(e) {
                        var t = this;
                        this.onLoop = function(e) {
                            if (t.status === r.PLAYING) {
                                t.currentTimeIn = e - t.startedAt;
                                var n = t.getCurrentStep().endPos;
                                if (t.currentTimeIn >= n) {
                                    if (t.currentStepIndex === t.steps.length - 1) {
                                        if ("start" === t.endMode) {
                                            t.stop();
                                            return
                                        }
                                        if ("end" === t.endMode) {
                                            t.complete();
                                            return
                                        }
                                        "loop" === t.endMode && (t.startedAt = e, t.goToStepByIndex(0), t.notifyChange())
                                    } else t.currentStepIndex++, t.notifyChange()
                                }
                            }
                        }, this.onChange = function(e) {
                            return t.subscriptions.push(e),
                                function() {
                                    var n = t.subscriptions.findIndex(function(t) {
                                        return t === e
                                    }); - 1 !== n && t.subscriptions.splice(n, 1)
                                }
                        }, this.play = function() {
                            t.status !== r.PLAYING && (t.isComplete() && t.goToStepByIndex(0), t.status = r.PLAYING, u.onTick(t.onLoop), t.startedAt = u.currentTimeStamp - t.currentTimeIn, t.notifyChange())
                        }, this.pause = function() {
                            t.status === r.PLAYING && (t.status = r.IDLE, u.offTick(t.onLoop), t.notifyChange())
                        }, this.stop = function() {
                            t.goToStepByIndex(0), t.status = r.IDLE, u.offTick(t.onLoop), t.notifyChange()
                        }, this.complete = function() {
                            t.currentStepIndex = t.steps.length - 1, t.currentTimeIn = t.totalDuration, t.status = r.IDLE, u.offTick(t.onLoop), t.notifyChange()
                        }, this.isStopped = function() {
                            return 0 === t.currentTimeIn && t.status === r.IDLE
                        }, this.isComplete = function() {
                            return t.currentTimeIn >= t.totalDuration
                        }, this.isPlaying = function() {
                            return t.status === r.PLAYING
                        }, this.isBefore = function(e) {
                            var n = t.steps.findIndex(function(t) {
                                return t.name === e
                            });
                            if (-1 === n) throw Error("Sequencer step " + e + " not found.");
                            return t.currentStepIndex < n
                        }, this.isAfter = function(e) {
                            var n = t.steps.findIndex(function(t) {
                                return t.name === e
                            });
                            if (-1 === n) throw Error("Sequencer step " + e + " not found.");
                            return t.currentStepIndex > n
                        }, this.getState = function() {
                            return {
                                current: t.steps[t.currentStepIndex].name,
                                index: t.currentStepIndex,
                                isPlaying: t.isPlaying(),
                                isComplete: t.isComplete(),
                                isStopped: t.isStopped()
                            }
                        }, this.getApi = function() {
                            return {
                                play: t.play,
                                pause: t.pause,
                                stop: t.stop,
                                complete: t.complete,
                                isBefore: t.isBefore,
                                isAfter: t.isAfter
                            }
                        };
                        var n = i(i({}, {
                            steps: [],
                            loop: !1,
                            complete: !1,
                            endMode: "end",
                            autoplay: !1
                        }), e);
                        if (0 === n.steps.length) throw Error("React Sequencer: At least one step required in options");
                        this.steps = this.generateSteps(n.steps), this.totalDuration = this.steps[this.steps.length - 1].endPos, this.currentStepIndex = 0, this.currentTimeIn = 0, this.startedAt = 0, this.endMode = n.loop ? "loop" : n.endMode, this.status = r.IDLE, this.subscriptions = [], !0 === n.complete && this.goToStepByIndex(this.steps.length - 1), !0 === n.autoplay && this.play(), this.prevState = this.getState()
                    }
                    return e.prototype.generateSteps = function(e) {
                        if (!e) throw Error("Invalid format.");
                        var t = 0;
                        return e.map(function(e) {
                            if (!Array.isArray(e) || 2 !== e.length) throw Error("Invalid format. See docs for correct structure.");
                            var n = t,
                                r = e[1] + t;
                            return t = r, {
                                startPos: n,
                                endPos: r,
                                name: e[0]
                            }
                        })
                    }, e.prototype.notifyChange = function() {
                        var e = this.getState();
                        this.prevState && e.index === this.prevState.index && e.isPlaying === this.prevState.isPlaying || this.subscriptions.forEach(function(t) {
                            t(e)
                        }), this.prevState = e
                    }, e.prototype.goToStepByIndex = function(e) {
                        this.currentStepIndex = e, this.currentTimeIn = this.steps[e].startPos
                    }, e.prototype.getCurrentStep = function() {
                        return this.steps[this.currentStepIndex]
                    }, e
                }();

            function c(e) {
                var t = (0, s.useRef)(new l(e)),
                    n = (0, s.useRef)(t.current.getApi()),
                    r = (0, s.useState)(t.current.getState()),
                    o = r[0],
                    a = r[1];
                return (0, s.useEffect)(function() {
                    return t.current.onChange(function(e) {
                        a(e)
                    })
                }, []), [o, n.current]
            }
            var f = function(e) {
                var t = e.children,
                    n = c(function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                        return n
                    }(e, ["children"]));
                return t(n[0], n[1])
            }
        },
        94080: (e, t, n) => {
            "use strict";
            var r = n(19202);
            e.exports = function(e) {
                if ("function" != typeof e || !hasOwnProperty.call(e, "length")) return !1;
                try {
                    if ("number" != typeof e.length || "function" != typeof e.call || "function" != typeof e.apply) return !1
                } catch (e) {
                    return !1
                }
                return !r(e)
            }
        },
        40181: (e, t, n) => {
            "use strict";
            var r = n(48175),
                o = {
                    object: !0,
                    function: !0,
                    undefined: !0
                };
            e.exports = function(e) {
                return !!r(e) && hasOwnProperty.call(o, typeof e)
            }
        },
        6873: (e, t, n) => {
            "use strict";
            var r = n(94080),
                o = /^\s*class[\s{/}]/,
                a = Function.prototype.toString;
            e.exports = function(e) {
                return !(!r(e) || o.test(a.call(e)))
            }
        },
        19202: (e, t, n) => {
            "use strict";
            var r = n(40181);
            e.exports = function(e) {
                if (!r(e)) return !1;
                try {
                    if (!e.constructor) return !1;
                    return e.constructor.prototype === e
                } catch (e) {
                    return !1
                }
            }
        },
        48175: e => {
            "use strict";
            var t = void 0;
            e.exports = function(e) {
                return e !== t && null !== e
            }
        }
    }
]);