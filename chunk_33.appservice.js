$gwx_XC_27 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_27 || [];

        function gz$gwx_XC_27_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space data-v-d6ef64ce'])
                Z([3, '__l'])
                Z([3, 'data-v-d6ef64ce'])
                Z([3, '3ed6c2c0-1'])
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
                                    [1, '^search']
                                ],
                                [
                                    [4],
                                    [
                                        [5],
                                        [
                                            [4],
                                            [
                                                [5],
                                                [1, 'onSearch']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([3, '3ed6c2c0-2'])
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z(z[9])
                Z(z[1])
                Z(z[2])
                Z([3, '335rpx'])
                Z([
                    [7],
                    [3, 'item']
                ])
                Z([
                    [2, '+'],
                    [1, '3ed6c2c0-3-'],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
                Z(z[15])
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
                Z([3, '3ed6c2c0-4'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_27 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_27 = true;
        var x = ['./pages/subject/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_27_1()
            var t1H = _n('view')
            _rz(z, t1H, 'class', 0, e, s, gg)
            var b3H = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(t1H, b3H)
            var o4H = _mz(z, 'search-bar', ['bind:__l', 4, 'bind:search', 1, 'class', 2, 'data-event-opts', 3, 'vueId', 4], [], e, s, gg)
            _(t1H, o4H)
            var x5H = _v()
            _(t1H, x5H)
            var o6H = function(c8H, f7H, h9H, gg) {
                var cAI = _mz(z, 'subject', ['bind:__l', 13, 'class', 1, 'height', 2, 'subject', 3, 'vueId', 4, 'width', 5], [], c8H, f7H, gg)
                _(h9H, cAI)
                return h9H
            }
            x5H.wxXCkey = 4
            _2z(z, 11, o6H, e, s, gg, x5H, 'item', 'index', 'index')
            var e2H = _v()
            _(t1H, e2H)
            if (_oz(z, 19, e, s, gg)) {
                e2H.wxVkey = 1
                var oBI = _mz(z, 'empty', ['bind:__l', 20, 'class', 1, 'vueId', 2], [], e, s, gg)
                _(e2H, oBI)
            }
            e2H.wxXCkey = 1
            e2H.wxXCkey = 3
            _(r, t1H)
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
                g = "$gwx_XC_27";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_27();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/subject/index.wxml'] = [$gwx_XC_27, './pages/subject/index.wxml'];
else __wxAppCode__['pages/subject/index.wxml'] = $gwx_XC_27('./pages/subject/index.wxml');;
__wxRoute = "pages/subject/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/subject/index.js";
define("pages/subject/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/subject/index"], {
            "093c": function(t, e, n) {
                "use strict";
                n.d(e, "b", (function() {
                    return a
                })), n.d(e, "c", (function() {
                    return i
                })), n.d(e, "a", (function() {}));
                var a = function() {
                        this.$createElement;
                        var t = (this._self._c, this.list.length);
                        this.$mp.data = Object.assign({}, {
                            $root: {
                                g0: t
                            }
                        })
                    },
                    i = []
            },
            "0a7e": function(t, e, n) {
                "use strict";
                n.r(e);
                var a = n("093c"),
                    i = n("efd3");
                for (var c in i)["default"].indexOf(c) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return i[t]
                    }))
                }(c);
                n("887e");
                var r = n("828b"),
                    o = Object(r.a)(i.default, a.b, a.c, !1, null, "d6ef64ce", null, !1, a.a, void 0);
                e.default = o.exports
            },
            "29c2": function(t, e, n) {
                "use strict";
                (function(t, e) {
                    var a = n("47a9");
                    n("94bc"), a(n("3240"));
                    var i = a(n("0a7e"));
                    t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
                }).call(this, n("3223").default, n("df3c").createPage)
            },
            "2f93": function(t, e, n) {},
            "887e": function(t, e, n) {
                "use strict";
                var a = n("2f93");
                n.n(a).a
            },
            efd3: function(t, e, n) {
                "use strict";
                n.r(e);
                var a = n("ffac"),
                    i = n.n(a);
                for (var c in a)["default"].indexOf(c) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return a[t]
                    }))
                }(c);
                e.default = i.a
            },
            ffac: function(t, e, n) {
                "use strict";
                (function(t) {
                    var a = n("47a9");
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var i = a(n("af34")),
                        c = n("0c5d"),
                        r = {
                            components: {
                                searchBar: function() {
                                    n.e("components/searchBar").then(function() {
                                        return resolve(n("9c76"))
                                    }.bind(null, n)).catch(n.oe)
                                },
                                Subject: function() {
                                    n.e("components/subject").then(function() {
                                        return resolve(n("87af"))
                                    }.bind(null, n)).catch(n.oe)
                                }
                            },
                            data: function() {
                                return {
                                    title: "",
                                    status: "nomore",
                                    current: 1,
                                    searchStr: "",
                                    category: "",
                                    list: []
                                }
                            },
                            onLoad: function(e) {
                                this.title = e.title || "名人名家", this.category = e.category || "", t.setNavigationBarTitle({
                                    title: this.title
                                }), this.getList()
                            },
                            onPullDownRefresh: function() {
                                this.current = 1, this.getList()
                            },
                            onReachBottom: function() {
                                "loadmore" === this.status && (this.current++, this.status = "loading", this.getList())
                            },
                            methods: {
                                onSearch: function(t) {
                                    this.current = 1, this.searchStr = t, this.getList()
                                },
                                pushDetail: function(e) {
                                    t.navigateTo({
                                        url: "/pages/subject/detail?id=" + e
                                    })
                                },
                                getList: function() {
                                    var e = this,
                                        n = {
                                            current: this.current,
                                            size: 10,
                                            title: this.searchStr,
                                            category: this.category.length > 0 ? this.category : void 0
                                        };
                                    (0, c.getSubjectData)(n).then((function(a) {
                                        var c;
                                        1 === n.current && (e.list = []), t.stopPullDownRefresh();
                                        var r = a.data.records || [];
                                        (c = e.list).push.apply(c, (0, i.default)(r)), e.list.length < a.data.total ? e.status = "loadmore" : e.status = "nomore"
                                    }))
                                }
                            }
                        };
                    e.default = r
                }).call(this, n("df3c").default)
            }
        },
        [
            ["29c2", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/subject/index.js'
});
require("pages/subject/index.js");