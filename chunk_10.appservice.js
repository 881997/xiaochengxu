$gwx_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];

        function gz$gwx_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space app-tool data-v-a5c8eaf0'])
                Z([3, '__l'])
                Z([3, 'data-v-a5c8eaf0'])
                Z([3, '41bba7d0-1'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'famousExpertsDesc']
                ])
                Z(z[1])
                Z([3, 'data-v-a5c8eaf0 vue-ref'])
                Z([3, '#3B1912'])
                Z([3, 'uReadMore'])
                Z([1, 150])
                Z([1, true])
                Z([3, '41bba7d0-2'])
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
                    [3, 'cnName']
                ])
                Z([3, '1'])
                Z(z[1])
                Z(z[2])
                Z([3, '41bba7d0-3'])
                Z(z[1])
                Z(z[13])
                Z(z[15])
                Z(z[2])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'avatarUrl']
                ])
                Z(z[14])
                Z([3, '41bba7d0-4'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_2 = true;
        var x = ['./pages/celebrity/detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_2_1()
            var bO = _n('view')
            _rz(z, bO, 'class', 0, e, s, gg)
            var xQ = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(bO, xQ)
            var oP = _v()
            _(bO, oP)
            if (_oz(z, 4, e, s, gg)) {
                oP.wxVkey = 1
                var oR = _mz(z, 'u-read-more', ['bind:__l', 5, 'class', 1, 'color', 2, 'data-ref', 3, 'showHeight', 4, 'toggle', 5, 'vueId', 6, 'vueSlots', 7], [], e, s, gg)
                _(oP, oR)
            }
            var fS = _mz(z, 'data-bind', ['bindId', 13, 'bindName', 1, 'bindType', 2, 'bind:__l', 3, 'class', 4, 'vueId', 5], [], e, s, gg)
            _(bO, fS)
            var cT = _mz(z, 'tool-bar', ['bind:__l', 19, 'bindId', 1, 'bindType', 2, 'class', 3, 'image', 4, 'title', 5, 'vueId', 6], [], e, s, gg)
            _(bO, cT)
            oP.wxXCkey = 1
            oP.wxXCkey = 3
            _(r, bO)
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
                g = "$gwx_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/celebrity/detail.wxml'] = [$gwx_XC_2, './pages/celebrity/detail.wxml'];
else __wxAppCode__['pages/celebrity/detail.wxml'] = $gwx_XC_2('./pages/celebrity/detail.wxml');;
__wxRoute = "pages/celebrity/detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/celebrity/detail.js";
define("pages/celebrity/detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/celebrity/detail"], {
            "4d09": function(e, t, n) {
                "use strict";
                n.r(t);
                var i = n("6046"),
                    a = n("89f5");
                for (var r in a)["default"].indexOf(r) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return a[e]
                    }))
                }(r);
                n("918a");
                var o = n("828b"),
                    u = Object(o.a)(a.default, i.b, i.c, !1, null, "a5c8eaf0", null, !1, i.a, void 0);
                t.default = u.exports
            },
            6046: function(e, t, n) {
                "use strict";
                n.d(t, "b", (function() {
                    return a
                })), n.d(t, "c", (function() {
                    return r
                })), n.d(t, "a", (function() {
                    return i
                }));
                var i = {
                        uReadMore: function() {
                            return Promise.all([n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-read-more/u-read-more")]).then(n.bind(null, "77fb"))
                        }
                    },
                    a = function() {
                        this.$createElement;
                        this._self._c
                    },
                    r = []
            },
            "89f5": function(e, t, n) {
                "use strict";
                n.r(t);
                var i = n("dee2"),
                    a = n.n(i);
                for (var r in i)["default"].indexOf(r) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return i[e]
                    }))
                }(r);
                t.default = a.a
            },
            "918a": function(e, t, n) {
                "use strict";
                var i = n("f35e");
                n.n(i).a
            },
            dee2: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = n("0c5d"),
                    a = {
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
                                    avatarUrl: "",
                                    cnName: "",
                                    enName: "",
                                    famousExpertsDesc: ""
                                }
                            }
                        },
                        onLoad: function(e) {
                            this.id = e.id, this.getDetail()
                        },
                        onShareAppMessage: function(e) {
                            return console.log(e), {
                                title: e.target.dataset.title,
                                path: "/pages/celebrity/detail?id=" + e.target.dataset.id,
                                imageUrl: e.target.dataset.image
                            }
                        },
                        onShareTimeline: function() {
                            return {
                                title: this.info.cnName,
                                query: "id=" + this.id,
                                imageUrl: this.info.avatarUrl
                            }
                        },
                        methods: {
                            getDetail: function() {
                                var e = this;
                                (0, i.getCelebrityDetail)(this.id).then((function(t) {
                                    e.info = t.data, e.$nextTick((function() {
                                        e.$refs.uReadMore.init()
                                    }))
                                }))
                            }
                        }
                    };
                t.default = a
            },
            f35e: function(e, t, n) {},
            f764: function(e, t, n) {
                "use strict";
                (function(e, t) {
                    var i = n("47a9");
                    n("94bc"), i(n("3240"));
                    var a = i(n("4d09"));
                    e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
                }).call(this, n("3223").default, n("df3c").createPage)
            }
        },
        [
            ["f764", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/celebrity/detail.js'
});
require("pages/celebrity/detail.js");