$gwx_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];

        function gz$gwx_XC_6_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space data-v-fd130044'])
                Z([3, '__l'])
                Z([3, 'data-v-fd130044'])
                Z([3, 'de5b0a2e-1'])
                Z(z[1])
                Z(z[2])
                Z([3, '360rpx'])
                Z([1, true])
                Z([3, 'filePath'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'fileList']
                ])
                Z([3, '10'])
                Z([3, 'de5b0a2e-2'])
                Z([3, '100%'])
                Z([3, 'pannel data-v-fd130044'])
                Z(z[1])
                Z([3, 'data-v-fd130044 vue-ref'])
                Z([3, '#3B1912'])
                Z([3, 'uReadMore'])
                Z([1, 150])
                Z(z[7])
                Z([3, 'de5b0a2e-3'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
                Z(z[1])
                Z(z[2])
                Z([3, 'de5b0a2e-4'])
                Z([
                    [2, '>'],
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_6 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_6 = true;
        var x = ['./pages/guide/detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_6_1()
            var tSB = _n('view')
            _rz(z, tSB, 'class', 0, e, s, gg)
            var bUB = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(tSB, bUB)
            var oVB = _mz(z, 'u-swiper', ['bind:__l', 4, 'class', 1, 'height', 2, 'indicator', 3, 'keyName', 4, 'list', 5, 'radius', 6, 'vueId', 7, 'width', 8], [], e, s, gg)
            _(tSB, oVB)
            var xWB = _n('view')
            _rz(z, xWB, 'class', 13, e, s, gg)
            var oXB = _mz(z, 'u-read-more', ['bind:__l', 14, 'class', 1, 'color', 2, 'data-ref', 3, 'showHeight', 4, 'toggle', 5, 'vueId', 6, 'vueSlots', 7], [], e, s, gg)
            _(xWB, oXB)
            var fYB = _mz(z, 'u-line', ['bind:__l', 22, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(xWB, fYB)
            _(tSB, xWB)
            var eTB = _v()
            _(tSB, eTB)
            if (_oz(z, 25, e, s, gg)) {
                eTB.wxVkey = 1
            }
            eTB.wxXCkey = 1
            _(r, tSB)
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
                g = "$gwx_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/guide/detail.wxml'] = [$gwx_XC_6, './pages/guide/detail.wxml'];
else __wxAppCode__['pages/guide/detail.wxml'] = $gwx_XC_6('./pages/guide/detail.wxml');;
__wxRoute = "pages/guide/detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/guide/detail.js";
define("pages/guide/detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/guide/detail"], {
            "1a4c": function(t, e, i) {
                "use strict";
                i.r(e);
                var n = i("4dac"),
                    a = i.n(n);
                for (var u in n)["default"].indexOf(u) < 0 && function(t) {
                    i.d(e, t, (function() {
                        return n[t]
                    }))
                }(u);
                e.default = a.a
            },
            "4dac": function(t, e, i) {
                "use strict";
                (function(t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var n = i("0c5d"),
                        a = {
                            data: function() {
                                return {
                                    info: {
                                        fileList: []
                                    },
                                    id: "",
                                    markers: [{
                                        id: 100,
                                        latitude: "35.960688",
                                        longitude: "120.197840",
                                        width: 20,
                                        height: 40
                                    }]
                                }
                            },
                            onLoad: function(t) {
                                this.id = t.id, this.getDetail()
                            },
                            onShareAppMessage: function(t) {
                                return {
                                    title: this.info.visitName,
                                    path: "/pages/guide/detail?id=" + this.id,
                                    imageUrl: this.info.fileList[0].filePath
                                }
                            },
                            onShareTimeline: function() {
                                return {
                                    title: this.info.visitName,
                                    query: "id=" + this.id,
                                    imageUrl: this.info.fileList[0].filePath
                                }
                            },
                            methods: {
                                getDetail: function() {
                                    var e = this;
                                    (0, n.getVisitDetail)(this.id).then((function(i) {
                                        e.info = i.data, t.setNavigationBarTitle({
                                            title: i.data.visitName || "参观详情"
                                        }), i.data.latitude && i.data.longitude && (e.markers = [{
                                            id: parseInt(e.id),
                                            latitude: i.data.latitude + "",
                                            longitude: i.data.longitude + "",
                                            width: 20,
                                            height: 30
                                        }]), e.$nextTick((function() {
                                            e.$refs.uReadMore.init()
                                        }))
                                    }))
                                }
                            }
                        };
                    e.default = a
                }).call(this, i("df3c").default)
            },
            "630c": function(t, e, i) {
                "use strict";
                i.d(e, "b", (function() {
                    return a
                })), i.d(e, "c", (function() {
                    return u
                })), i.d(e, "a", (function() {
                    return n
                }));
                var n = {
                        uSwiper: function() {
                            return Promise.all([i.e("common/vendor"), i.e("uni_modules/uview-ui/components/u-swiper/u-swiper")]).then(i.bind(null, "219d"))
                        },
                        uReadMore: function() {
                            return Promise.all([i.e("common/vendor"), i.e("uni_modules/uview-ui/components/u-read-more/u-read-more")]).then(i.bind(null, "77fb"))
                        },
                        uLine: function() {
                            return Promise.all([i.e("common/vendor"), i.e("uni_modules/uview-ui/components/u-line/u-line")]).then(i.bind(null, "0e9f"))
                        }
                    },
                    a = function() {
                        this.$createElement;
                        var t = (this._self._c, this.markers.length);
                        this.$mp.data = Object.assign({}, {
                            $root: {
                                g0: t
                            }
                        })
                    },
                    u = []
            },
            "77aa": function(t, e, i) {},
            8072: function(t, e, i) {
                "use strict";
                var n = i("77aa");
                i.n(n).a
            },
            "9b30": function(t, e, i) {
                "use strict";
                (function(t, e) {
                    var n = i("47a9");
                    i("94bc"), n(i("3240"));
                    var a = n(i("e12b"));
                    t.__webpack_require_UNI_MP_PLUGIN__ = i, e(a.default)
                }).call(this, i("3223").default, i("df3c").createPage)
            },
            e12b: function(t, e, i) {
                "use strict";
                i.r(e);
                var n = i("630c"),
                    a = i("1a4c");
                for (var u in a)["default"].indexOf(u) < 0 && function(t) {
                    i.d(e, t, (function() {
                        return a[t]
                    }))
                }(u);
                i("8072");
                var o = i("828b"),
                    r = Object(o.a)(a.default, n.b, n.c, !1, null, "fd130044", null, !1, n.a, void 0);
                e.default = r.exports
            }
        },
        [
            ["9b30", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/guide/detail.js'
});
require("pages/guide/detail.js");