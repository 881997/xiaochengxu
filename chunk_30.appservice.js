$gwx_XC_24 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_24 || [];

        function gz$gwx_XC_24_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space app-tool data-v-3cc1dc56'])
                Z([3, '__l'])
                Z([3, 'data-v-3cc1dc56'])
                Z([3, '8dfccbe8-1'])
                Z(z[1])
                Z(z[2])
                Z([3, '360rpx'])
                Z([1, true])
                Z([3, 'filePath'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'fileList']
                ])
                Z([3, '10'])
                Z([3, '8dfccbe8-2'])
                Z([3, '100%'])
                Z(z[1])
                Z([3, 'data-v-3cc1dc56 vue-ref'])
                Z([3, '#3B1912'])
                Z([3, 'uReadMore'])
                Z([1, 150])
                Z(z[7])
                Z([3, '8dfccbe8-3'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, '$root']
                        ],
                        [3, 'g0']
                    ],
                    [1, 0]
                ])
                Z(z[1])
                Z([3, '__e'])
                Z(z[2])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [5],
                                    [1, '^all']
                                ],
                                [
                                    [4],
                                    [
                                        [5],
                                        [
                                            [4],
                                            [
                                                [5],
                                                [1, 'pushResearchList']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'researchs']
                ])
                Z([3, '8dfccbe8-4'])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, '$root']
                        ],
                        [3, 'g1']
                    ],
                    [1, 0]
                ])
                Z(z[1])
                Z([
                    [7],
                    [3, 'id']
                ])
                Z([3, '4'])
                Z(z[2])
                Z([
                    [7],
                    [3, 'shareImage']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'title']
                ])
                Z([3, '8dfccbe8-5'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_24 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_24 = true;
        var x = ['./pages/show/detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_24_1()
            var fEH = _n('view')
            _rz(z, fEH, 'class', 0, e, s, gg)
            var oHH = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(fEH, oHH)
            var cIH = _mz(z, 'u-swiper', ['bind:__l', 4, 'class', 1, 'height', 2, 'indicator', 3, 'keyName', 4, 'list', 5, 'radius', 6, 'vueId', 7, 'width', 8], [], e, s, gg)
            _(fEH, cIH)
            var oJH = _mz(z, 'u-read-more', ['bind:__l', 13, 'class', 1, 'color', 2, 'data-ref', 3, 'showHeight', 4, 'toggle', 5, 'vueId', 6, 'vueSlots', 7], [], e, s, gg)
            _(fEH, oJH)
            var cFH = _v()
            _(fEH, cFH)
            if (_oz(z, 21, e, s, gg)) {
                cFH.wxVkey = 1
                var lKH = _mz(z, 'research-view', ['bind:__l', 22, 'bind:all', 1, 'class', 2, 'data-event-opts', 3, 'list', 4, 'vueId', 5], [], e, s, gg)
                _(cFH, lKH)
            }
            var hGH = _v()
            _(fEH, hGH)
            if (_oz(z, 28, e, s, gg)) {
                hGH.wxVkey = 1
            }
            var aLH = _mz(z, 'tool-bar', ['bind:__l', 29, 'bindId', 1, 'bindType', 2, 'class', 3, 'image', 4, 'title', 5, 'vueId', 6], [], e, s, gg)
            _(fEH, aLH)
            cFH.wxXCkey = 1
            cFH.wxXCkey = 3
            hGH.wxXCkey = 1
            _(r, fEH)
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_24";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_24();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/show/detail.wxml'] = [$gwx_XC_24, './pages/show/detail.wxml'];
else __wxAppCode__['pages/show/detail.wxml'] = $gwx_XC_24('./pages/show/detail.wxml');;
__wxRoute = "pages/show/detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/show/detail.js";
define("pages/show/detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/show/detail"], {
            "02f8": function(e, t, n) {
                "use strict";
                (function(e, t) {
                    var i = n("47a9");
                    n("94bc"), i(n("3240"));
                    var r = i(n("e734"));
                    e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
                }).call(this, n("3223").default, n("df3c").createPage)
            },
            "91f2": function(e, t, n) {
                "use strict";
                n.d(t, "b", (function() {
                    return r
                })), n.d(t, "c", (function() {
                    return a
                })), n.d(t, "a", (function() {
                    return i
                }));
                var i = {
                        uSwiper: function() {
                            return Promise.all([n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-swiper/u-swiper")]).then(n.bind(null, "219d"))
                        },
                        uReadMore: function() {
                            return Promise.all([n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-read-more/u-read-more")]).then(n.bind(null, "77fb"))
                        }
                    },
                    r = function() {
                        var e = this,
                            t = (e.$createElement, e._self._c, e.researchs.length),
                            n = e.list.length;
                        e._isMounted || (e.e0 = function(t, n) {
                            var i = arguments[arguments.length - 1].currentTarget.dataset,
                                r = i.eventParams || i["event-params"];
                            return n = r.item, e.$utils.openParts(n.id)
                        }), e.$mp.data = Object.assign({}, {
                            $root: {
                                g0: t,
                                g1: n
                            }
                        })
                    },
                    a = []
            },
            "92a2": function(e, t, n) {
                "use strict";
                n.r(t);
                var i = n("cdab"),
                    r = n.n(i);
                for (var a in i)["default"].indexOf(a) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return i[e]
                    }))
                }(a);
                t.default = r.a
            },
            c3a0: function(e, t, n) {},
            cdab: function(e, t, n) {
                "use strict";
                (function(e) {
                    var i = n("47a9");
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var r = i(n("7ca3")),
                        a = n("0c5d");

                    function o(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), n.push.apply(n, i)
                        }
                        return n
                    }

                    function c(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(Object(n), !0).forEach((function(t) {
                                (0, r.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }
                    var s = {
                        components: {
                            researchView: function() {
                                n.e("components/researchView").then(function() {
                                    return resolve(n("1abc"))
                                }.bind(null, n)).catch(n.oe)
                            }
                        },
                        data: function() {
                            return {
                                info: {
                                    fileList: []
                                },
                                list: [],
                                researchs: [],
                                collections: [],
                                id: "",
                                shareImage: "/static/logo.png"
                            }
                        },
                        onLoad: function(e) {
                            this.id = e.id, this.getDetail(), this.getCreationList()
                        },
                        onShareAppMessage: function(e) {
                            return {
                                title: e.target.dataset.title,
                                path: "/pages/show/detail?id=" + e.target.dataset.id,
                                imageUrl: e.target.dataset.image
                            }
                        },
                        onShareTimeline: function() {
                            return {
                                title: this.info.title,
                                query: "id=" + this.id,
                                imageUrl: this.shareImage
                            }
                        },
                        methods: {
                            getDetail: function() {
                                var t = this;
                                (0, a.getShowDetail)(this.id).then((function(n) {
                                    t.info = n.data, e.setNavigationBarTitle({
                                        title: n.data.title || "展览详情"
                                    }), t.info.fileList.length && (t.shareImage = t.info.fileList[0].filePath), t.$nextTick((function() {
                                        t.$refs.uReadMore.init()
                                    }))
                                })), (0, a.partList)({
                                    type: "4",
                                    id: this.id
                                }).then((function(e) {
                                    t.list = e.data || []
                                }))
                            },
                            pushResearchList: function() {
                                e.navigateTo({
                                    url: "/pages/index/researchList"
                                })
                            },
                            getCreationList: function() {
                                var e = this;
                                (0, a.getBindData)({
                                    bindId: this.id,
                                    bindType: "4"
                                }).then((function(t) {
                                    t.data.researchStudies && (e.researchs = t.data.researchStudies.map((function(e) {
                                        return c(c({}, e), {}, {
                                            imageUrl: e.fileList.length ? e.fileList[0].filePath : ""
                                        })
                                    }))), getApp().globalData.dataBind = {
                                        researchStudies: e.researchs
                                    }
                                }))
                            }
                        }
                    };
                    t.default = s
                }).call(this, n("df3c").default)
            },
            e734: function(e, t, n) {
                "use strict";
                n.r(t);
                var i = n("91f2"),
                    r = n("92a2");
                for (var a in r)["default"].indexOf(a) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return r[e]
                    }))
                }(a);
                n("f61b");
                var o = n("828b"),
                    c = Object(o.a)(r.default, i.b, i.c, !1, null, "3cc1dc56", null, !1, i.a, void 0);
                t.default = c.exports
            },
            f61b: function(e, t, n) {
                "use strict";
                var i = n("c3a0");
                n.n(i).a
            }
        },
        [
            ["02f8", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/show/detail.js'
});
require("pages/show/detail.js");