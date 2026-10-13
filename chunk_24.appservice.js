$gwx_XC_17 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];

        function gz$gwx_XC_17_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-067f364a'])
                Z([3, '6b4b36ba-1'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_17 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_17 = true;
        var x = ['./pages/login/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_17_1()
            var c7E = _mz(z, 'back-bg', ['bind:__l', 0, 'class', 1, 'vueId', 1], [], e, s, gg)
            _(r, c7E)
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
                g = "$gwx_XC_17";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_17();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/index.wxml'] = [$gwx_XC_17, './pages/login/index.wxml'];
else __wxAppCode__['pages/login/index.wxml'] = $gwx_XC_17('./pages/login/index.wxml');;
__wxRoute = "pages/login/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/login/index.js";
define("pages/login/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/login/index"], {
            "0de5": function(n, e, t) {
                "use strict";
                t.r(e);
                var o = t("7b8f"),
                    c = t.n(o);
                for (var i in o)["default"].indexOf(i) < 0 && function(n) {
                    t.d(e, n, (function() {
                        return o[n]
                    }))
                }(i);
                e.default = c.a
            },
            "6e33": function(n, e, t) {
                "use strict";
                var o = t("cdec");
                t.n(o).a
            },
            "7b8f": function(n, e, t) {
                "use strict";
                (function(n) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var t = {
                        data: function() {
                            return {
                                loginCode: ""
                            }
                        },
                        onLoad: function() {},
                        methods: {
                            getPhoneNumber: function(n) {
                                var e = {
                                    encryptedData: n.detail.encryptedData,
                                    iv: n.detail.iv,
                                    usercode: loginCode
                                };
                                console.log(e)
                            },
                            onHandleError: function(n) {
                                console.log("报错", n)
                            },
                            wxlogin: function() {
                                console.log("登录成功", code)
                            },
                            handleLoginSuccess: function(e) {
                                n.showToast({
                                    icon: "none",
                                    title: "登录成功"
                                }), n.setStorageSync("token", e), getApp().globalData.isLogin = !0, getApp().globalData.token = e, n.reLaunch({
                                    url: "/pages/index/index"
                                })
                            },
                            getLoginCode: function() {
                                n.login({
                                    provider: "weixin",
                                    success: function(n) {
                                        this.loginCode = n.code
                                    }
                                })
                            }
                        }
                    };
                    e.default = t
                }).call(this, t("df3c").default)
            },
            a00e: function(n, e, t) {
                "use strict";
                (function(n, e) {
                    var o = t("47a9");
                    t("94bc"), o(t("3240"));
                    var c = o(t("a74c"));
                    n.__webpack_require_UNI_MP_PLUGIN__ = t, e(c.default)
                }).call(this, t("3223").default, t("df3c").createPage)
            },
            a74c: function(n, e, t) {
                "use strict";
                t.r(e);
                var o = t("d748"),
                    c = t("0de5");
                for (var i in c)["default"].indexOf(i) < 0 && function(n) {
                    t.d(e, n, (function() {
                        return c[n]
                    }))
                }(i);
                t("6e33");
                var a = t("828b"),
                    u = Object(a.a)(c.default, o.b, o.c, !1, null, "067f364a", null, !1, o.a, void 0);
                e.default = u.exports
            },
            cdec: function(n, e, t) {},
            d748: function(n, e, t) {
                "use strict";
                t.d(e, "b", (function() {
                    return o
                })), t.d(e, "c", (function() {
                    return c
                })), t.d(e, "a", (function() {}));
                var o = function() {
                        this.$createElement;
                        this._self._c
                    },
                    c = []
            }
        },
        [
            ["a00e", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/login/index.js'
});
require("pages/login/index.js");