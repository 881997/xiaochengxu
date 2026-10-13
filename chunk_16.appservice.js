$gwx_XC_8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];

        function gz$gwx_XC_8_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app creation data-v-3fa043be'])
                Z([3, '__l'])
                Z([3, 'data-v-3fa043be'])
                Z([3, '1974f171-1'])
                Z([3, 'info-view data-v-3fa043be'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'author']
                ])
                Z([
                    [7],
                    [3, 'specStr']
                ])
                Z(z[1])
                Z(z[2])
                Z([3, '#f56c6c'])
                Z([3, '联系'])
                Z(z[9])
                Z([3, 'bottom'])
                Z([3, 'server-fill'])
                Z([3, '20'])
                Z([3, '1974f171-2'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_8 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_8 = true;
        var x = ['./pages/index/creation.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_8_1()
            var t7B = _n('view')
            _rz(z, t7B, 'class', 0, e, s, gg)
            var e8B = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(t7B, e8B)
            var b9B = _n('view')
            _rz(z, b9B, 'class', 4, e, s, gg)
            var o0B = _v()
            _(b9B, o0B)
            if (_oz(z, 5, e, s, gg)) {
                o0B.wxVkey = 1
            }
            var xAC = _v()
            _(b9B, xAC)
            if (_oz(z, 6, e, s, gg)) {
                xAC.wxVkey = 1
            }
            o0B.wxXCkey = 1
            xAC.wxXCkey = 1
            _(t7B, b9B)
            var oBC = _mz(z, 'u-icon', ['bind:__l', 7, 'class', 1, 'color', 2, 'label', 3, 'labelColor', 4, 'labelPos', 5, 'name', 6, 'size', 7, 'vueId', 8], [], e, s, gg)
            _(t7B, oBC)
            _(r, t7B)
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
                g = "$gwx_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/creation.wxml'] = [$gwx_XC_8, './pages/index/creation.wxml'];
else __wxAppCode__['pages/index/creation.wxml'] = $gwx_XC_8('./pages/index/creation.wxml');;
__wxRoute = "pages/index/creation";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/creation.js";
define("pages/index/creation.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/index/creation"], {
            "0c3b": function(t, e, n) {
                "use strict";
                n.d(e, "b", (function() {
                    return a
                })), n.d(e, "c", (function() {
                    return c
                })), n.d(e, "a", (function() {
                    return i
                }));
                var i = {
                        uIcon: function() {
                            return Promise.all([n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null, "48cf"))
                        }
                    },
                    a = function() {
                        var t = this;
                        t.$createElement;
                        t._self._c, t._isMounted || (t.e0 = function(e) {
                            return t.$utils.previewImage(t.imageUrl)
                        })
                    },
                    c = []
            },
            "11e5": function(t, e, n) {
                "use strict";
                n.r(e);
                var i = n("0c3b"),
                    a = n("2511");
                for (var c in a)["default"].indexOf(c) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return a[t]
                    }))
                }(c);
                n("ae74");
                var r = n("828b"),
                    u = Object(r.a)(a.default, i.b, i.c, !1, null, "3fa043be", null, !1, i.a, void 0);
                e.default = u.exports
            },
            "14ad": function(t, e, n) {
                "use strict";
                (function(t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var i = n("0c5d"),
                        a = {
                            data: function() {
                                return {
                                    id: "",
                                    imageUrl: "",
                                    specStr: "",
                                    title: "",
                                    info: {}
                                }
                            },
                            onLoad: function(t) {
                                this.id = t.id, this.getDetail()
                            },
                            onShareAppMessage: function(t) {
                                return {
                                    title: this.title,
                                    path: "/pages/index/creation?id=" + this.id,
                                    imageUrl: this.imageUrl
                                }
                            },
                            onShareTimeline: function() {
                                return {
                                    title: this.title,
                                    query: "id=" + this.id,
                                    imageUrl: this.imageUrl
                                }
                            },
                            methods: {
                                getDetail: function() {
                                    var e = this;
                                    (0, i.getCreationData)(this.id).then((function(n) {
                                        t.setNavigationBarTitle({
                                            title: n.data.cpName
                                        }), e.info = n.data;
                                        var i = e.info,
                                            a = i.age,
                                            c = i.spec;
                                        e.specStr = a && c ? "材质:".concat(c, " | 年代:").concat(a) : a ? "年代:".concat(a) : c ? "材质:".concat(c) : "", e.imageUrl = n.data.fileUrl
                                    }))
                                }
                            }
                        };
                    e.default = a
                }).call(this, n("df3c").default)
            },
            2511: function(t, e, n) {
                "use strict";
                n.r(e);
                var i = n("14ad"),
                    a = n.n(i);
                for (var c in i)["default"].indexOf(c) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return i[t]
                    }))
                }(c);
                e.default = a.a
            },
            ae74: function(t, e, n) {
                "use strict";
                var i = n("d0d8");
                n.n(i).a
            },
            c6ac: function(t, e, n) {
                "use strict";
                (function(t, e) {
                    var i = n("47a9");
                    n("94bc"), i(n("3240"));
                    var a = i(n("11e5"));
                    t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
                }).call(this, n("3223").default, n("df3c").createPage)
            },
            d0d8: function(t, e, n) {}
        },
        [
            ["c6ac", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/index/creation.js'
});
require("pages/index/creation.js");