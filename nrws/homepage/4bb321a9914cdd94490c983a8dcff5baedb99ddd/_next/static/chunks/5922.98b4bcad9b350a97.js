(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5922], {
        67586: (i, e, o) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a, r = function(i) {
                    return i && i.__esModule ? i : {
                        default: i
                    }
                }(o(77232)),
                t = {
                    Phone: "mobile",
                    Tablet: "tablet",
                    Browser: void 0
                },
                n = null === (a = new r.default().getDevice()) || void 0 === a ? void 0 : a.type,
                s = function() {
                    var i;
                    return null === (i = window) || void 0 === i ? void 0 : i.navigator
                },
                b = n === t.Phone,
                w = n === t.Tablet || function(i) {
                    var e = s();
                    return (null == e ? void 0 : e.platform) && (-1 !== e.platform.indexOf(i) || "MacIntel" === e.platform && e.maxTouchPoints > 1 && !window.MSStream)
                }("iPad"),
                l = n === t.Browser;
            e.default = {
                isTablet: w,
                isPhone: b,
                isMobile: b || w,
                isDesktop: l
            }
        },
        45922: (i, e, o) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }(o(67586)).default;
            e.default = a
        },
        77232: function(i, e, o) {
            var a;
            ! function(r, t) {
                "use strict";
                var n = "function",
                    s = "undefined",
                    b = "object",
                    w = "string",
                    l = "model",
                    d = "name",
                    u = "type",
                    c = "vendor",
                    p = "version",
                    m = "architecture",
                    f = "console",
                    h = "mobile",
                    v = "tablet",
                    g = "smarttv",
                    x = "wearable",
                    k = "embedded",
                    y = "Amazon",
                    _ = "Apple",
                    T = "ASUS",
                    S = "BlackBerry",
                    q = "Browser",
                    N = "Chrome",
                    z = "Firefox",
                    A = "Google",
                    C = "Huawei",
                    E = "Microsoft",
                    O = "Motorola",
                    M = "Opera",
                    P = "Samsung",
                    j = "Sharp",
                    U = "Sony",
                    R = "Xiaomi",
                    B = "Zebra",
                    V = "Facebook",
                    D = function(i, e) {
                        var o = {};
                        for (var a in i) e[a] && e[a].length % 2 == 0 ? o[a] = e[a].concat(i[a]) : o[a] = i[a];
                        return o
                    },
                    I = function(i) {
                        for (var e = {}, o = 0; o < i.length; o++) e[i[o].toUpperCase()] = i[o];
                        return e
                    },
                    G = function(i, e) {
                        return typeof i === w && -1 !== L(e).indexOf(L(i))
                    },
                    L = function(i) {
                        return i.toLowerCase()
                    },
                    W = function(i, e) {
                        if (typeof i === w) return i = i.replace(/^\s\s*/, ""), typeof e === s ? i : i.substring(0, 350)
                    },
                    F = function(i, e) {
                        for (var o, a, r, s, w, l, d = 0; d < e.length && !w;) {
                            var u = e[d],
                                c = e[d + 1];
                            for (o = a = 0; o < u.length && !w;)
                                if (w = u[o++].exec(i))
                                    for (r = 0; r < c.length; r++) l = w[++a], typeof(s = c[r]) === b && s.length > 0 ? 2 === s.length ? typeof s[1] == n ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== n || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : void 0 : this[s[0]] = l ? s[1].call(this, l, s[2]) : void 0 : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : void 0) : this[s] = l || t;
                            d += 2
                        }
                    },
                    Z = function(i, e) {
                        for (var o in e)
                            if (typeof e[o] === b && e[o].length > 0) {
                                for (var a = 0; a < e[o].length; a++)
                                    if (G(e[o][a], i)) return "?" === o ? t : o
                            } else if (G(e[o], i)) return "?" === o ? t : o;
                        return i
                    },
                    H = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        "8.1": "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    $ = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [p, [d, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [p, [d, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [d, p],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [p, [d, M + " Mini"]],
                            [/\bopr\/([\w\.]+)/i],
                            [p, [d, M]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [d, p],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [p, [d, "UC" + q]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                            [p, [d, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [p, [d, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [p, [d, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [p, [d, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [p, [d, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Secure " + q], p
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [p, [d, z + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [p, [d, M + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [p, [d, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [p, [d, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [p, [d, M + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [p, [d, "MIUI " + q]],
                            [/fxios\/([-\w\.]+)/i],
                            [p, [d, z]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [d, "360 " + q]
                            ],
                            [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 " + q], p
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [d, /_/g, " "], p
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [d, p],
                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [d],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [d, V], p
                            ],
                            [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                            [d, p],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [p, [d, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [p, [d, N + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [d, N + " WebView"], p
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [p, [d, "Android " + q]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [d, p],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [p, [d, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [p, d],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [d, [p, Z, {
                                "1.0": "/8",
                                "1.2": "/1",
                                "1.3": "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [d, p],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [d, "Netscape"], p
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [p, [d, z + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                            [d, p],
                            [/(cobalt)\/([\w\.]+)/i],
                            [d, [p, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [m, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [m, L]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [m, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [m, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [m, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [m, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [m, /ower/, "", L]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [m, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [m, L]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [l, [c, P],
                                [u, v]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [l, [c, P],
                                [u, h]
                            ],
                            [/\((ip(?:hone|od)[\w ]*);/i],
                            [l, [c, _],
                                [u, h]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [l, [c, _],
                                [u, v]
                            ],
                            [/(macintosh);/i],
                            [l, [c, _]],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [l, [c, C],
                                [u, v]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [l, [c, C],
                                [u, h]
                            ],
                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [l, /_/g, " "],
                                [c, R],
                                [u, h]
                            ],
                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [l, /_/g, " "],
                                [c, R],
                                [u, v]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [l, [c, "OPPO"],
                                [u, h]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [l, [c, "Vivo"],
                                [u, h]
                            ],
                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                            [l, [c, "Realme"],
                                [u, h]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [l, [c, O],
                                [u, h]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [l, [c, O],
                                [u, v]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [l, [c, "LG"],
                                [u, v]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [l, [c, "LG"],
                                [u, h]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [l, [c, "Lenovo"],
                                [u, v]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [l, /_/g, " "],
                                [c, "Nokia"],
                                [u, h]
                            ],
                            [/(pixel c)\b/i],
                            [l, [c, A],
                                [u, v]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [l, [c, A],
                                [u, h]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [l, [c, U],
                                [u, h]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [l, "Xperia Tablet"],
                                [c, U],
                                [u, v]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [l, [c, "OnePlus"],
                                [u, h]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [l, [c, y],
                                [u, v]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [l, /(.+)/g, "Fire Phone $1"],
                                [c, y],
                                [u, h]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [l, c, [u, v]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [l, [c, S],
                                [u, h]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [l, [c, T],
                                [u, v]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [l, [c, T],
                                [u, h]
                            ],
                            [/(nexus 9)/i],
                            [l, [c, "HTC"],
                                [u, v]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [c, [l, /_/g, " "],
                                [u, h]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [l, [c, "Acer"],
                                [u, v]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [l, [c, "Meizu"],
                                [u, h]
                            ],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [l, [c, j],
                                [u, h]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [c, l, [u, h]],
                            [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [c, l, [u, v]],
                            [/(surface duo)/i],
                            [l, [c, E],
                                [u, v]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [l, [c, "Fairphone"],
                                [u, h]
                            ],
                            [/(u304aa)/i],
                            [l, [c, "AT&T"],
                                [u, h]
                            ],
                            [/\bsie-(\w*)/i],
                            [l, [c, "Siemens"],
                                [u, h]
                            ],
                            [/\b(rct\w+) b/i],
                            [l, [c, "RCA"],
                                [u, v]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [l, [c, "Dell"],
                                [u, v]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [l, [c, "Verizon"],
                                [u, v]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [l, [c, "Barnes & Noble"],
                                [u, v]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [l, [c, "NuVision"],
                                [u, v]
                            ],
                            [/\b(k88) b/i],
                            [l, [c, "ZTE"],
                                [u, v]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [l, [c, "ZTE"],
                                [u, h]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [l, [c, "Swiss"],
                                [u, h]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [l, [c, "Swiss"],
                                [u, v]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [l, [c, "Zeki"],
                                [u, v]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [c, "Dragon Touch"], l, [u, v]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [l, [c, "Insignia"],
                                [u, v]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [l, [c, "NextBook"],
                                [u, v]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [c, "Voice"], l, [u, h]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [c, "LvTel"], l, [u, h]
                            ],
                            [/\b(ph-1) /i],
                            [l, [c, "Essential"],
                                [u, h]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [l, [c, "Envizen"],
                                [u, v]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [l, [c, "MachSpeed"],
                                [u, v]
                            ],
                            [/\btu_(1491) b/i],
                            [l, [c, "Rotor"],
                                [u, v]
                            ],
                            [/(shield[\w ]+) b/i],
                            [l, [c, "Nvidia"],
                                [u, v]
                            ],
                            [/(sprint) (\w+)/i],
                            [c, l, [u, h]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [l, /\./g, " "],
                                [c, E],
                                [u, h]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [l, [c, B],
                                [u, v]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [l, [c, B],
                                [u, h]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [c, l, [u, f]],
                            [/droid.+; (shield) bui/i],
                            [l, [c, "Nvidia"],
                                [u, f]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [l, [c, U],
                                [u, f]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [l, [c, E],
                                [u, f]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [c, [u, g]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [l, /^/, "SmartTV"],
                                [c, P],
                                [u, g]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [c, "LG"],
                                [u, g]
                            ],
                            [/(apple) ?tv/i],
                            [c, [l, _ + " TV"],
                                [u, g]
                            ],
                            [/crkey/i],
                            [
                                [l, N + "cast"],
                                [c, A],
                                [u, g]
                            ],
                            [/droid.+aft(\w)( bui|\))/i],
                            [l, [c, y],
                                [u, g]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [l, [c, j],
                                [u, g]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [l, [c, U],
                                [u, g]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [l, [c, R],
                                [u, g]
                            ],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                            [
                                [c, W],
                                [l, W],
                                [u, g]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [u, g]
                            ],
                            [/((pebble))app/i],
                            [c, l, [u, x]],
                            [/droid.+; (glass) \d/i],
                            [l, [c, A],
                                [u, x]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [l, [c, B],
                                [u, x]
                            ],
                            [/(quest( 2)?)/i],
                            [l, [c, V],
                                [u, x]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [c, [u, k]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                            [l, [u, h]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [l, [u, v]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [u, v]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [u, h]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [l, [c, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [p, [d, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [p, [d, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                            [d, p],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [p, d]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [d, p],
                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                            [d, [p, Z, H]],
                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [d, "Windows"],
                                [p, Z, H]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [p, /_/g, "."],
                                [d, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [d, "Mac OS"],
                                [p, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [p, d],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [d, p],
                            [/\(bb(10);/i],
                            [p, [d, S]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [p, [d, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [p, [d, z + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [p, [d, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [p, [d, N + "cast"]],
                            [/(cros) [\w]+ ([\w\.]+\w)/i],
                            [
                                [d, "Chromium OS"], p
                            ],
                            [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [d, p],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [d, "Solaris"], p
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                            [d, p]
                        ]
                    },
                    X = function(i, e) {
                        if (typeof i === b && (e = i, i = t), !(this instanceof X)) return new X(i, e).getResult();
                        var o = i || (typeof r !== s && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                            a = e ? D($, e) : $;
                        return this.getBrowser = function() {
                            var i, e = {};
                            return e[d] = t, e[p] = t, F.call(e, o, a.browser), e.major = typeof(i = e.version) === w ? i.replace(/[^\d\.]/g, "").split(".")[0] : t, e
                        }, this.getCPU = function() {
                            var i = {};
                            return i[m] = t, F.call(i, o, a.cpu), i
                        }, this.getDevice = function() {
                            var i = {};
                            return i[c] = t, i[l] = t, i[u] = t, F.call(i, o, a.device), i
                        }, this.getEngine = function() {
                            var i = {};
                            return i[d] = t, i[p] = t, F.call(i, o, a.engine), i
                        }, this.getOS = function() {
                            var i = {};
                            return i[d] = t, i[p] = t, F.call(i, o, a.os), i
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return o
                        }, this.setUA = function(i) {
                            return o = typeof i === w && i.length > 350 ? W(i, 350) : i, this
                        }, this.setUA(o), this
                    };
                X.VERSION = "0.7.33", X.BROWSER = I([d, p, "major"]), X.CPU = I([m]), X.DEVICE = I([l, c, u, f, h, g, v, x, k]), X.ENGINE = X.OS = I([d, p]), typeof e !== s ? (i.exports && (e = i.exports = X), e.UAParser = X) : o.amdO ? t !== (a = (function() {
                    return X
                }).call(e, o, e, i)) && (i.exports = a) : typeof r !== s && (r.UAParser = X);
                var K = typeof r !== s && (r.jQuery || r.Zepto);
                if (K && !K.ua) {
                    var Q = new X;
                    K.ua = Q.getResult(), K.ua.get = function() {
                        return Q.getUA()
                    }, K.ua.set = function(i) {
                        Q.setUA(i);
                        var e = Q.getResult();
                        for (var o in e) K.ua[o] = e[o]
                    }
                }
            }("object" == typeof window ? window : this)
        }
    }
]);