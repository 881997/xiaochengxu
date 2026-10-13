$gwx_XC_9 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];

        function gz$gwx_XC_9_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-99fad666'])
                Z([3, '3bc259f3-1'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_9 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_9 = true;
        var x = ['./pages/index/creationList.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_9_1()
            var cDC = _mz(z, 'back-bg', ['bind:__l', 0, 'class', 1, 'vueId', 1], [], e, s, gg)
            _(r, cDC)
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
                g = "$gwx_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_9();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/creationList.wxml'] = [$gwx_XC_9, './pages/index/creationList.wxml'];
else __wxAppCode__['pages/index/creationList.wxml'] = $gwx_XC_9('./pages/index/creationList.wxml');;
__wxRoute = "pages/index/creationList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/creationList.js";
define("pages/index/creationList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/index/creationList"], {
            "1f6d": function(t, n, e) {
                "use strict";
                var c = e("ec2f");
                e.n(c).a
            },
            2566: function(t, n, e) {
                "use strict";
                e.r(n);
                var c = e("dcc4"),
                    a = e("ea35");
                for (var i in a)["default"].indexOf(i) < 0 && function(t) {
                    e.d(n, t, (function() {
                        return a[t]
                    }))
                }(i);
                e("1f6d");
                var u = e("828b"),
                    o = Object(u.a)(a.default, c.b, c.c, !1, null, "99fad666", null, !1, c.a, void 0);
                n.default = o.exports
            },
            4584: function(t, n, e) {
                "use strict";
                (function(t, n) {
                    var c = e("47a9");
                    e("94bc"), c(e("3240"));
                    var a = c(e("2566"));
                    t.__webpack_require_UNI_MP_PLUGIN__ = e, n(a.default)
                }).call(this, e("3223").default, e("df3c").createPage)
            },
            "5c82": function(t, n, e) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var c = {
                    data: function() {
                        return {
                            list: []
                        }
                    },
                    onLoad: function() {
                        this.list = getApp().globalData.dataBind.collectionItems || []
                    },
                    methods: {
                        pushDetail: function(t) {
                            this.$utils.openCreation(t)
                        }
                    }
                };
                n.default = c
            },
            dcc4: function(t, n, e) {
                "use strict";
                e.d(n, "b", (function() {
                    return c
                })), e.d(n, "c", (function() {
                    return a
                })), e.d(n, "a", (function() {}));
                var c = function() {
                        this.$createElement;
                        this._self._c
                    },
                    a = []
            },
            ea35: function(t, n, e) {
                "use strict";
                e.r(n);
                var c = e("5c82"),
                    a = e.n(c);
                for (var i in c)["default"].indexOf(i) < 0 && function(t) {
                    e.d(n, t, (function() {
                        return c[t]
                    }))
                }(i);
                n.default = a.a
            },
            ec2f: function(t, n, e) {}
        },
        [
            ["4584", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/index/creationList.js'
});
require("pages/index/creationList.js");