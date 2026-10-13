$gwx_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];

        function gz$gwx_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space data-v-628b021a'])
                Z([3, '__l'])
                Z([3, 'data-v-628b021a'])
                Z([3, '401a237a-1'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'cityDesc']
                ])
                Z(z[1])
                Z([3, 'data-v-628b021a vue-ref'])
                Z([3, '#3B1912'])
                Z([3, 'uReadMore'])
                Z([1, 150])
                Z([1, true])
                Z([3, '401a237a-2'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
                Z([
                    [7],
                    [3, 'id']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'cityName']
                ])
                Z([3, '5'])
                Z(z[1])
                Z(z[2])
                Z([3, '作品'])
                Z([3, '401a237a-3'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_4 = true;
        var x = ['./pages/city/detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_4_1()
            var o0 = _n('view')
            _rz(z, o0, 'class', 0, e, s, gg)
            var oBB = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(o0, oBB)
            var cAB = _v()
            _(o0, cAB)
            if (_oz(z, 4, e, s, gg)) {
                cAB.wxVkey = 1
                var lCB = _mz(z, 'u-read-more', ['bind:__l', 5, 'class', 1, 'color', 2, 'data-ref', 3, 'showHeight', 4, 'toggle', 5, 'vueId', 6, 'vueSlots', 7], [], e, s, gg)
                _(cAB, lCB)
            }
            var aDB = _mz(z, 'data-bind', ['bindId', 13, 'bindName', 1, 'bindType', 2, 'bind:__l', 3, 'class', 4, 'title', 5, 'vueId', 6], [], e, s, gg)
            _(o0, aDB)
            cAB.wxXCkey = 1
            cAB.wxXCkey = 3
            _(r, o0)
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
                g = "$gwx_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/city/detail.wxml'] = [$gwx_XC_4, './pages/city/detail.wxml'];
else __wxAppCode__['pages/city/detail.wxml'] = $gwx_XC_4('./pages/city/detail.wxml');;
__wxRoute = "pages/city/detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/city/detail.js";
define("pages/city/detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/city/detail"], {
            "034f": function(t, e, n) {
                "use strict";
                (function(t, e) {
                    var a = n("47a9");
                    n("94bc"), a(n("3240"));
                    var i = a(n("269a"));
                    t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
                }).call(this, n("3223").default, n("df3c").createPage)
            },
            "1dfa": function(t, e, n) {
                "use strict";
                n.r(e);
                var a = n("a4a4"),
                    i = n.n(a);
                for (var o in a)["default"].indexOf(o) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return a[t]
                    }))
                }(o);
                e.default = i.a
            },
            "269a": function(t, e, n) {
                "use strict";
                n.r(e);
                var a = n("d115"),
                    i = n("1dfa");
                for (var o in i)["default"].indexOf(o) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return i[t]
                    }))
                }(o);
                n("4694");
                var r = n("828b"),
                    u = Object(r.a)(i.default, a.b, a.c, !1, null, "628b021a", null, !1, a.a, void 0);
                e.default = u.exports
            },
            4694: function(t, e, n) {
                "use strict";
                var a = n("eecf");
                n.n(a).a
            },
            a4a4: function(t, e, n) {
                "use strict";
                (function(t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var a = n("0c5d"),
                        i = {
                            components: {
                                dataBind: function() {
                                    n.e("components/dataBind").then(function() {
                                        return resolve(n("6805"))
                                    }.bind(null, n)).catch(n.oe)
                                }
                            },
                            data: function() {
                                return {
                                    id: "",
                                    info: {
                                        title: "",
                                        avatarUrl: "",
                                        cityDesc: ""
                                    },
                                    shareImage: "/static/logo.png"
                                }
                            },
                            onLoad: function(t) {
                                this.id = t.id, this.getDetail()
                            },
                            onShareAppMessage: function(t) {
                                return console.log(t), {
                                    title: t.target.dataset.title,
                                    path: "/pages/city/detail?id=" + t.target.dataset.id,
                                    imageUrl: t.target.dataset.image
                                }
                            },
                            onShareTimeline: function() {
                                return {
                                    title: this.info.cityName,
                                    query: "id=" + this.id,
                                    imageUrl: this.shareImage
                                }
                            },
                            methods: {
                                getDetail: function() {
                                    var e = this;
                                    (0, a.getCityDetail)(this.id).then((function(n) {
                                        e.info = n.data, t.setNavigationBarTitle({
                                            title: n.data.cityName || "城市详情"
                                        }), e.shareImage = e.info.avatarUrl || "/static/logo.png", e.$nextTick((function() {
                                            e.$refs.uReadMore.init()
                                        }))
                                    }))
                                }
                            }
                        };
                    e.default = i
                }).call(this, n("df3c").default)
            },
            d115: function(t, e, n) {
                "use strict";
                n.d(e, "b", (function() {
                    return i
                })), n.d(e, "c", (function() {
                    return o
                })), n.d(e, "a", (function() {
                    return a
                }));
                var a = {
                        uReadMore: function() {
                            return Promise.all([n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-read-more/u-read-more")]).then(n.bind(null, "77fb"))
                        }
                    },
                    i = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            },
            eecf: function(t, e, n) {}
        },
        [
            ["034f", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/city/detail.js'
});
require("pages/city/detail.js");