$gwx_XC_20 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];

        function gz$gwx_XC_20_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-7006c484'])
                Z([3, '7a7c4536-1'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_20 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_20 = true;
        var x = ['./pages/mine/info.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_20_1()
            var bIG = _mz(z, 'back-bg', ['bind:__l', 0, 'class', 1, 'vueId', 1], [], e, s, gg)
            _(r, bIG)
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
                g = "$gwx_XC_20";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_20();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/info.wxml'] = [$gwx_XC_20, './pages/mine/info.wxml'];
else __wxAppCode__['pages/mine/info.wxml'] = $gwx_XC_20('./pages/mine/info.wxml');;
__wxRoute = "pages/mine/info";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/mine/info.js";
define("pages/mine/info.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/mine/info"], {
            "1a50": function(n, t, a) {
                "use strict";
                a.r(t);
                var e = a("a2f4"),
                    o = a("8971");
                for (var f in o)["default"].indexOf(f) < 0 && function(n) {
                    a.d(t, n, (function() {
                        return o[n]
                    }))
                }(f);
                a("5770");
                var i = a("828b"),
                    r = Object(i.a)(o.default, e.b, e.c, !1, null, "7006c484", null, !1, e.a, void 0);
                t.default = r.exports
            },
            "1efc": function(n, t, a) {},
            5770: function(n, t, a) {
                "use strict";
                var e = a("1efc");
                a.n(e).a
            },
            "5fff": function(n, t, a) {
                "use strict";
                (function(n, t) {
                    var e = a("47a9");
                    a("94bc"), e(a("3240"));
                    var o = e(a("1a50"));
                    n.__webpack_require_UNI_MP_PLUGIN__ = a, t(o.default)
                }).call(this, a("3223").default, a("df3c").createPage)
            },
            8971: function(n, t, a) {
                "use strict";
                a.r(t);
                var e = a("ba5f"),
                    o = a.n(e);
                for (var f in e)["default"].indexOf(f) < 0 && function(n) {
                    a.d(t, n, (function() {
                        return e[n]
                    }))
                }(f);
                t.default = o.a
            },
            a2f4: function(n, t, a) {
                "use strict";
                a.d(t, "b", (function() {
                    return e
                })), a.d(t, "c", (function() {
                    return o
                })), a.d(t, "a", (function() {}));
                var e = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            },
            ba5f: function(n, t, a) {
                "use strict";
                (function(n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var e = a("0c5d"),
                        o = {
                            data: function() {
                                return {
                                    form: {
                                        avatarUrl: "",
                                        phone: "",
                                        nikeName: ""
                                    }
                                }
                            },
                            onLoad: function() {
                                this.getInfo()
                            },
                            methods: {
                                onChooseAvatar: function(n) {
                                    console.log(n.detail), this.form.avatarUrl = n.detail.avatarUrl
                                },
                                getInfo: function() {
                                    var n = this;
                                    (0, e.getUserInfo)().then((function(t) {
                                        n.form.avatarUrl = t.data.avatarUrl || "", n.form.phone = t.data.phone || "", n.form.nikeName = t.data.nikeName || ""
                                    }))
                                },
                                updateInfo: function() {
                                    n.showLoading(), (0, e.updateUserInfo)(this.form).then((function(t) {
                                        n.hideLoading(), n.showToast({
                                            icon: "none",
                                            title: "更新成功"
                                        }), n.navigateBack()
                                    })).catch((function() {
                                        n.hideLoading()
                                    }))
                                }
                            }
                        };
                    t.default = o
                }).call(this, a("df3c").default)
            }
        },
        [
            ["5fff", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/mine/info.js'
});
require("pages/mine/info.js");