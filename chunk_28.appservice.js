$gwx_XC_21 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_21 || [];

        function gz$gwx_XC_21_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app data-v-27a62048'])
                Z([3, '__l'])
                Z([3, 'data-v-27a62048'])
                Z([3, '64dd5b19-1'])
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z(z[4])
                Z([3, '__e'])
                Z([3, 'menu-item data-v-27a62048'])
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
                                    [1, 'tap']
                                ],
                                [
                                    [4],
                                    [
                                        [5],
                                        [
                                            [4],
                                            [
                                                [5],
                                                [
                                                    [5],
                                                    [
                                                        [5],
                                                        [1, 'menuClick']
                                                    ],
                                                    [
                                                        [4],
                                                        [
                                                            [5],
                                                            [1, '$0']
                                                        ]
                                                    ]
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
                                                        [
                                                            [4],
                                                            [
                                                                [5],
                                                                [
                                                                    [4],
                                                                    [
                                                                        [5],
                                                                        [
                                                                            [5],
                                                                            [
                                                                                [5],
                                                                                [1, 'list']
                                                                            ],
                                                                            [1, '']
                                                                        ],
                                                                        [
                                                                            [7],
                                                                            [3, 'index']
                                                                        ]
                                                                    ]
                                                                ]
                                                            ]
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z(z[1])
                Z(z[2])
                Z([3, 'arrow-right'])
                Z([
                    [2, '+'],
                    [1, '64dd5b19-2-'],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_21 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_21 = true;
        var x = ['./pages/mine/setting.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_21_1()
            var xKG = _n('view')
            _rz(z, xKG, 'class', 0, e, s, gg)
            var oLG = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(xKG, oLG)
            var fMG = _v()
            _(xKG, fMG)
            var cNG = function(oPG, hOG, cQG, gg) {
                var lSG = _mz(z, 'view', ['bindtap', 8, 'class', 1, 'data-event-opts', 2], [], oPG, hOG, gg)
                var aTG = _mz(z, 'u-icon', ['bind:__l', 11, 'class', 1, 'name', 2, 'vueId', 3], [], oPG, hOG, gg)
                _(lSG, aTG)
                _(cQG, lSG)
                return cQG
            }
            fMG.wxXCkey = 4
            _2z(z, 6, cNG, e, s, gg, fMG, 'item', 'index', 'index')
            _(r, xKG)
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
                g = "$gwx_XC_21";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_21();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/setting.wxml'] = [$gwx_XC_21, './pages/mine/setting.wxml'];
else __wxAppCode__['pages/mine/setting.wxml'] = $gwx_XC_21('./pages/mine/setting.wxml');;
__wxRoute = "pages/mine/setting";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/mine/setting.js";
define("pages/mine/setting.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/mine/setting"], {
            6924: function(n, t, e) {
                "use strict";
                var c = e("7cce");
                e.n(c).a
            },
            "6b8c": function(n, t, e) {
                "use strict";
                e.r(t);
                var c = e("88a6"),
                    u = e.n(c);
                for (var i in c)["default"].indexOf(i) < 0 && function(n) {
                    e.d(t, n, (function() {
                        return c[n]
                    }))
                }(i);
                t.default = u.a
            },
            "7c31": function(n, t, e) {
                "use strict";
                e.r(t);
                var c = e("d11c"),
                    u = e("6b8c");
                for (var i in u)["default"].indexOf(i) < 0 && function(n) {
                    e.d(t, n, (function() {
                        return u[n]
                    }))
                }(i);
                e("6924");
                var a = e("828b"),
                    o = Object(a.a)(u.default, c.b, c.c, !1, null, "27a62048", null, !1, c.a, void 0);
                t.default = o.exports
            },
            "7cce": function(n, t, e) {},
            "88a6": function(n, t, e) {
                "use strict";
                (function(n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var e = {
                        data: function() {
                            return {
                                list: ["隐私政策", "权限管理"]
                            }
                        },
                        methods: {
                            menuClick: function(t) {
                                "隐私政策" === t && (getApp().globalData.linkUrl = "https://yunzhiyingcang.com/privacy", n.navigateTo({
                                    url: "/pages/index/webview"
                                }))
                            },
                            logout: function() {
                                n.setStorageSync("token", ""), getApp().globalData.isLogin = !1, getApp().globalData.token = "", n.reLaunch({
                                    url: "/pages/mine/index"
                                })
                            }
                        }
                    };
                    t.default = e
                }).call(this, e("df3c").default)
            },
            b8dc: function(n, t, e) {
                "use strict";
                (function(n, t) {
                    var c = e("47a9");
                    e("94bc"), c(e("3240"));
                    var u = c(e("7c31"));
                    n.__webpack_require_UNI_MP_PLUGIN__ = e, t(u.default)
                }).call(this, e("3223").default, e("df3c").createPage)
            },
            d11c: function(n, t, e) {
                "use strict";
                e.d(t, "b", (function() {
                    return u
                })), e.d(t, "c", (function() {
                    return i
                })), e.d(t, "a", (function() {
                    return c
                }));
                var c = {
                        uIcon: function() {
                            return Promise.all([e.e("common/vendor"), e.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(e.bind(null, "48cf"))
                        }
                    },
                    u = function() {
                        this.$createElement;
                        this._self._c
                    },
                    i = []
            }
        },
        [
            ["b8dc", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/mine/setting.js'
});
require("pages/mine/setting.js");