$gwx_XC_14 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_14 || [];

        function gz$gwx_XC_14_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space data-v-8d33f65e'])
                Z([3, '__l'])
                Z([3, 'data-v-8d33f65e'])
                Z([3, '604d4a92-1'])
                Z([
                    [7],
                    [3, 'isAll']
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
                Z([3, '604d4a92-2'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_14 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_14 = true;
        var x = ['./pages/index/researchList.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_14_1()
            var lUE = _n('view')
            _rz(z, lUE, 'class', 0, e, s, gg)
            var tWE = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(lUE, tWE)
            var aVE = _v()
            _(lUE, aVE)
            if (_oz(z, 4, e, s, gg)) {
                aVE.wxVkey = 1
                var eXE = _mz(z, 'search-bar', ['bind:__l', 5, 'bind:search', 1, 'class', 2, 'data-event-opts', 3, 'vueId', 4], [], e, s, gg)
                _(aVE, eXE)
            }
            aVE.wxXCkey = 1
            aVE.wxXCkey = 3
            _(r, lUE)
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
                g = "$gwx_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_14();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/researchList.wxml'] = [$gwx_XC_14, './pages/index/researchList.wxml'];
else __wxAppCode__['pages/index/researchList.wxml'] = $gwx_XC_14('./pages/index/researchList.wxml');;
__wxRoute = "pages/index/researchList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/researchList.js";
define("pages/index/researchList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/index/researchList"], {
            "0070": function(t, e, n) {},
            "0124": function(t, e, n) {
                "use strict";
                n.r(e);
                var i = n("f28f"),
                    r = n("438b");
                for (var c in r)["default"].indexOf(c) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return r[t]
                    }))
                }(c);
                n("63dc");
                var a = n("828b"),
                    s = Object(a.a)(r.default, i.b, i.c, !1, null, "8d33f65e", null, !1, i.a, void 0);
                e.default = s.exports
            },
            4320: function(t, e, n) {
                "use strict";
                (function(t, e) {
                    var i = n("47a9");
                    n("94bc"), i(n("3240"));
                    var r = i(n("0124"));
                    t.__webpack_require_UNI_MP_PLUGIN__ = n, e(r.default)
                }).call(this, n("3223").default, n("df3c").createPage)
            },
            "438b": function(t, e, n) {
                "use strict";
                n.r(e);
                var i = n("e099"),
                    r = n.n(i);
                for (var c in i)["default"].indexOf(c) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return i[t]
                    }))
                }(c);
                e.default = r.a
            },
            "63dc": function(t, e, n) {
                "use strict";
                var i = n("0070");
                n.n(i).a
            },
            e099: function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = n("0c5d"),
                    r = {
                        data: function() {
                            return {
                                isAll: !1,
                                category: "",
                                searchStr: "",
                                list: []
                            }
                        },
                        components: {
                            searchBar: function() {
                                n.e("components/searchBar").then(function() {
                                    return resolve(n("9c76"))
                                }.bind(null, n)).catch(n.oe)
                            }
                        },
                        onLoad: function(t) {
                            this.isAll = "1" === t.isAll, this.isAll ? (this.category = t.category, this.getList()) : this.list = getApp().globalData.dataBind.researchStudies || []
                        },
                        methods: {
                            onSearch: function(t) {
                                this.current = 1, this.searchStr = t, this.getList()
                            },
                            pushDetail: function(t) {
                                this.$utils.openResearch(t)
                            },
                            getList: function() {
                                var t = this;
                                (0, i.researchList)({
                                    current: 1,
                                    size: 999,
                                    rsName: this.searchStr,
                                    category: this.category
                                }).then((function(e) {
                                    t.list = e.data.records || []
                                }))
                            }
                        }
                    };
                e.default = r
            },
            f28f: function(t, e, n) {
                "use strict";
                n.d(e, "b", (function() {
                    return i
                })), n.d(e, "c", (function() {
                    return r
                })), n.d(e, "a", (function() {}));
                var i = function() {
                        this.$createElement;
                        this._self._c
                    },
                    r = []
            }
        },
        [
            ["4320", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/index/researchList.js'
});
require("pages/index/researchList.js");