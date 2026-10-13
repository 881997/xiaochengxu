$gwx_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];

        function gz$gwx_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space data-v-5013f15a'])
                Z([3, '__l'])
                Z([3, 'data-v-5013f15a'])
                Z([3, '24256d2e-1'])
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
                Z([3, '24256d2e-2'])
                Z([3, '__i0__'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z([3, 'id'])
                Z(z[5])
                Z([3, 'celebrity-item data-v-5013f15a'])
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
                                                        [1, 'pushDetail']
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
                                                                            [1, 'id']
                                                                        ],
                                                                        [
                                                                            [6],
                                                                            [
                                                                                [7],
                                                                                [3, 'item']
                                                                            ],
                                                                            [3, 'id']
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
                Z([
                    [2, '+'],
                    [1, '24256d2e-3-'],
                    [
                        [7],
                        [3, '__i0__']
                    ]
                ])
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
                Z([3, '24256d2e-4'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
        var x = ['./pages/celebrity/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_3_1()
            var oV = _n('view')
            _rz(z, oV, 'class', 0, e, s, gg)
            var oX = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(oV, oX)
            var lY = _mz(z, 'search-bar', ['bind:__l', 4, 'bind:search', 1, 'class', 2, 'data-event-opts', 3, 'vueId', 4], [], e, s, gg)
            _(oV, lY)
            var aZ = _v()
            _(oV, aZ)
            var t1 = function(b3, e2, o4, gg) {
                var o6 = _mz(z, 'view', ['bindtap', 13, 'class', 1, 'data-event-opts', 2], [], b3, e2, gg)
                var f7 = _mz(z, 'u-text', ['bind:__l', 16, 'class', 1, 'vueId', 2], [], b3, e2, gg)
                _(o6, f7)
                _(o4, o6)
                return o4
            }
            aZ.wxXCkey = 4
            _2z(z, 11, t1, e, s, gg, aZ, 'item', '__i0__', 'id')
            var cW = _v()
            _(oV, cW)
            if (_oz(z, 19, e, s, gg)) {
                cW.wxVkey = 1
                var c8 = _mz(z, 'empty', ['bind:__l', 20, 'class', 1, 'vueId', 2], [], e, s, gg)
                _(cW, c8)
            }
            cW.wxXCkey = 1
            cW.wxXCkey = 3
            _(r, oV)
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
                g = "$gwx_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/celebrity/index.wxml'] = [$gwx_XC_3, './pages/celebrity/index.wxml'];
else __wxAppCode__['pages/celebrity/index.wxml'] = $gwx_XC_3('./pages/celebrity/index.wxml');;
__wxRoute = "pages/celebrity/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/celebrity/index.js";
define("pages/celebrity/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/celebrity/index"], {
            "2e06": function(t, e, n) {
                "use strict";
                (function(t) {
                    var i = n("47a9");
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var r = i(n("af34")),
                        a = n("0c5d"),
                        c = {
                            components: {
                                searchBar: function() {
                                    n.e("components/searchBar").then(function() {
                                        return resolve(n("9c76"))
                                    }.bind(null, n)).catch(n.oe)
                                }
                            },
                            data: function() {
                                return {
                                    title: "",
                                    category: "",
                                    status: "nomore",
                                    current: 1,
                                    searchStr: "",
                                    queryData: {
                                        current: 1,
                                        size: 15,
                                        cnName: ""
                                    },
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
                                        url: "/pages/celebrity/detail?id=" + e.id
                                    })
                                },
                                getList: function() {
                                    var e = this,
                                        n = {
                                            current: this.current,
                                            size: 15,
                                            cnName: this.searchStr,
                                            category: this.category.length > 0 ? this.category : void 0
                                        };
                                    (0, a.getCelebrityData)(n).then((function(i) {
                                        var a;
                                        e.list = i.data.records || [], 1 === n.current && (e.list = []), t.stopPullDownRefresh();
                                        var c = i.data.records || [];
                                        (a = e.list).push.apply(a, (0, r.default)(c)), e.list.length < i.data.total ? e.status = "loadmore" : e.status = "nomore"
                                    }))
                                }
                            }
                        };
                    e.default = c
                }).call(this, n("df3c").default)
            },
            "42e0": function(t, e, n) {
                "use strict";
                n.d(e, "b", (function() {
                    return r
                })), n.d(e, "c", (function() {
                    return a
                })), n.d(e, "a", (function() {
                    return i
                }));
                var i = {
                        uText: function() {
                            return Promise.all([n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-text/u-text")]).then(n.bind(null, "f3f3"))
                        }
                    },
                    r = function() {
                        this.$createElement;
                        var t = (this._self._c, this.list.length);
                        this.$mp.data = Object.assign({}, {
                            $root: {
                                g0: t
                            }
                        })
                    },
                    a = []
            },
            "4cfc": function(t, e, n) {
                "use strict";
                n.r(e);
                var i = n("42e0"),
                    r = n("ce94");
                for (var a in r)["default"].indexOf(a) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return r[t]
                    }))
                }(a);
                n("8252");
                var c = n("828b"),
                    o = Object(c.a)(r.default, i.b, i.c, !1, null, "5013f15a", null, !1, i.a, void 0);
                e.default = o.exports
            },
            8252: function(t, e, n) {
                "use strict";
                var i = n("b119");
                n.n(i).a
            },
            b119: function(t, e, n) {},
            ce94: function(t, e, n) {
                "use strict";
                n.r(e);
                var i = n("2e06"),
                    r = n.n(i);
                for (var a in i)["default"].indexOf(a) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return i[t]
                    }))
                }(a);
                e.default = r.a
            },
            f619: function(t, e, n) {
                "use strict";
                (function(t, e) {
                    var i = n("47a9");
                    n("94bc"), i(n("3240"));
                    var r = i(n("4cfc"));
                    t.__webpack_require_UNI_MP_PLUGIN__ = n, e(r.default)
                }).call(this, n("3223").default, n("df3c").createPage)
            }
        },
        [
            ["f619", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/celebrity/index.js'
});
require("pages/celebrity/index.js");