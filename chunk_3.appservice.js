$gwx_XC_23 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];

        function gz$gwx_XC_23_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
        }

        function gz$gwx_XC_23_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_23_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_23_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space data-v-03c1cb1c'])
                Z([3, '__l'])
                Z([3, 'data-v-03c1cb1c'])
                Z([3, 'c86c9a62-1'])
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z(z[4])
                Z(z[1])
                Z(z[2])
                Z([3, '335rpx'])
                Z([
                    [7],
                    [3, 'item']
                ])
                Z([
                    [2, '+'],
                    [1, 'c86c9a62-2-'],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
                Z(z[10])
                Z([
                    [2, '=='],
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
                Z(z[2])
                Z([3, 'c86c9a62-3'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_23 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_23 = true;
        var x = ['./components/research.wxml', './pages/research/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_23_1()
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[1]] = {}
        var m1 = function(e, s, r, gg) {
            var z = gz$gwx_XC_23_2()
            var h3G = _n('view')
            _rz(z, h3G, 'class', 0, e, s, gg)
            var c5G = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(h3G, c5G)
            var o6G = _v()
            _(h3G, o6G)
            var l7G = function(t9G, a8G, e0G, gg) {
                var oBH = _mz(z, 'research', ['bind:__l', 8, 'class', 1, 'height', 2, 'info', 3, 'vueId', 4, 'width', 5], [], t9G, a8G, gg)
                _(e0G, oBH)
                return e0G
            }
            o6G.wxXCkey = 4
            _2z(z, 6, l7G, e, s, gg, o6G, 'item', 'index', 'index')
            var o4G = _v()
            _(h3G, o4G)
            if (_oz(z, 14, e, s, gg)) {
                o4G.wxVkey = 1
                var xCH = _mz(z, 'empty', ['bind:__l', 15, 'class', 1, 'vueId', 2], [], e, s, gg)
                _(o4G, xCH)
            }
            o4G.wxXCkey = 1
            o4G.wxXCkey = 3
            _(r, h3G)
            return r
        }
        e_[x[1]] = {
            f: m1,
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
                g = "$gwx_XC_23";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_23();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/research.wxml'] = [$gwx_XC_23, './components/research.wxml'];
else __wxAppCode__['components/research.wxml'] = $gwx_XC_23('./components/research.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/research/index.wxml'] = [$gwx_XC_23, './pages/research/index.wxml'];
else __wxAppCode__['pages/research/index.wxml'] = $gwx_XC_23('./pages/research/index.wxml');;
__wxRoute = "components/research";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/research.js";
define("components/research.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["components/research"], {
            "3cc9": function(e, t, n) {},
            8857: function(e, t, n) {
                "use strict";
                n.d(t, "b", (function() {
                    return c
                })), n.d(t, "c", (function() {
                    return o
                })), n.d(t, "a", (function() {}));
                var c = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            },
            "9b61": function(e, t, n) {
                "use strict";
                (function(e) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var n = {
                        props: {
                            width: {
                                type: String,
                                default: "300rpx"
                            },
                            height: {
                                type: String,
                                default: "300rpx"
                            },
                            left: {
                                type: String,
                                default: "0rpx"
                            },
                            info: {
                                type: Object,
                                default: function() {}
                            }
                        },
                        methods: {
                            pushDetail: function(t) {
                                e.navigateTo({
                                    url: "/pages/index/researchList?isAll=1&category=" + t
                                })
                            }
                        }
                    };
                    t.default = n
                }).call(this, n("df3c").default)
            },
            ba6c: function(e, t, n) {
                "use strict";
                var c = n("3cc9");
                n.n(c).a
            },
            c981: function(e, t, n) {
                "use strict";
                n.r(t);
                var c = n("8857"),
                    o = n("ed22");
                for (var a in o)["default"].indexOf(a) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return o[e]
                    }))
                }(a);
                n("ba6c");
                var r = n("828b"),
                    u = Object(r.a)(o.default, c.b, c.c, !1, null, "627754de", null, !1, c.a, void 0);
                t.default = u.exports
            },
            ed22: function(e, t, n) {
                "use strict";
                n.r(t);
                var c = n("9b61"),
                    o = n.n(c);
                for (var a in c)["default"].indexOf(a) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return c[e]
                    }))
                }(a);
                t.default = o.a
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/research-create-component", {
            "components/research-create-component": function(e, t, n) {
                n("df3c").createComponent(n("c981"))
            }
        },
        [
            ["components/research-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/research.js'
});
require("components/research.js");;
__wxRoute = "pages/research/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/research/index.js";
define("pages/research/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/research/index"], {
            1943: function(t, n, e) {
                "use strict";
                (function(t, n) {
                    var c = e("47a9");
                    e("94bc"), c(e("3240"));
                    var r = c(e("c0a5"));
                    t.__webpack_require_UNI_MP_PLUGIN__ = e, n(r.default)
                }).call(this, e("3223").default, e("df3c").createPage)
            },
            "40dc": function(t, n, e) {
                "use strict";
                e.d(n, "b", (function() {
                    return c
                })), e.d(n, "c", (function() {
                    return r
                })), e.d(n, "a", (function() {}));
                var c = function() {
                        this.$createElement;
                        var t = (this._self._c, this.list.length);
                        this.$mp.data = Object.assign({}, {
                            $root: {
                                g0: t
                            }
                        })
                    },
                    r = []
            },
            "53c5": function(t, n, e) {
                "use strict";
                e.r(n);
                var c = e("bb83"),
                    r = e.n(c);
                for (var i in c)["default"].indexOf(i) < 0 && function(t) {
                    e.d(n, t, (function() {
                        return c[t]
                    }))
                }(i);
                n.default = r.a
            },
            "5e87": function(t, n, e) {},
            bb83: function(t, n, e) {
                "use strict";
                (function(t) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.default = void 0;
                    var c = e("0c5d"),
                        r = {
                            components: {
                                searchBar: function() {
                                    e.e("components/searchBar").then(function() {
                                        return resolve(e("9c76"))
                                    }.bind(null, e)).catch(e.oe)
                                },
                                Research: function() {
                                    e.e("components/research").then(function() {
                                        return resolve(e("c981"))
                                    }.bind(null, e)).catch(e.oe)
                                }
                            },
                            data: function() {
                                return {
                                    current: 1,
                                    searchStr: "",
                                    list: []
                                }
                            },
                            onLoad: function(t) {
                                this.getList()
                            },
                            onPullDownRefresh: function() {
                                this.current = 1, this.getList()
                            },
                            methods: {
                                onSearch: function(t) {
                                    this.current = 1, this.searchStr = t, this.getList()
                                },
                                pushDetail: function(n) {
                                    t.navigateTo({
                                        url: "/pages/subject/detail?id=" + n
                                    })
                                },
                                getList: function() {
                                    var n = this;
                                    (0, c.categoryList)({
                                        current: 1,
                                        size: 99
                                    }).then((function(e) {
                                        t.stopPullDownRefresh(), n.list = e.data || []
                                    }))
                                }
                            }
                        };
                    n.default = r
                }).call(this, e("df3c").default)
            },
            c0a5: function(t, n, e) {
                "use strict";
                e.r(n);
                var c = e("40dc"),
                    r = e("53c5");
                for (var i in r)["default"].indexOf(i) < 0 && function(t) {
                    e.d(n, t, (function() {
                        return r[t]
                    }))
                }(i);
                e("cd1d");
                var u = e("828b"),
                    a = Object(u.a)(r.default, c.b, c.c, !1, null, "03c1cb1c", null, !1, c.a, void 0);
                n.default = a.exports
            },
            cd1d: function(t, n, e) {
                "use strict";
                var c = e("5e87");
                e.n(c).a
            }
        },
        [
            ["1943", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/research/index.js'
});
require("pages/research/index.js");