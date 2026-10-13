$gwx_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];

        function gz$gwx_XC_5_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space data-v-19cb1a67'])
                Z([3, '__l'])
                Z([3, 'data-v-19cb1a67'])
                Z([3, '45489f02-1'])
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
                Z([3, '45489f02-2'])
                Z([3, 'city-list data-v-19cb1a67'])
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z(z[10])
                Z(z[1])
                Z([
                    [7],
                    [3, 'item']
                ])
                Z(z[2])
                Z([3, '335rpx'])
                Z([
                    [2, '+'],
                    [1, '45489f02-3-'],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
                Z(z[17])
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
                Z([3, '45489f02-4'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
        var x = ['./pages/city/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_5_1()
            var oNC = _n('view')
            _rz(z, oNC, 'class', 0, e, s, gg)
            var oPC = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(oNC, oPC)
            var fQC = _mz(z, 'search-bar', ['bind:__l', 4, 'bind:search', 1, 'class', 2, 'data-event-opts', 3, 'vueId', 4], [], e, s, gg)
            _(oNC, fQC)
            var cRC = _n('view')
            _rz(z, cRC, 'class', 9, e, s, gg)
            var hSC = _v()
            _(cRC, hSC)
            var oTC = function(oVC, cUC, lWC, gg) {
                var tYC = _mz(z, 'city', ['bind:__l', 14, 'city', 1, 'class', 2, 'height', 3, 'vueId', 4, 'width', 5], [], oVC, cUC, gg)
                _(lWC, tYC)
                return lWC
            }
            hSC.wxXCkey = 4
            _2z(z, 12, oTC, e, s, gg, hSC, 'item', 'index', 'index')
            _(oNC, cRC)
            var xOC = _v()
            _(oNC, xOC)
            if (_oz(z, 20, e, s, gg)) {
                xOC.wxVkey = 1
                var eZC = _mz(z, 'empty', ['bind:__l', 21, 'class', 1, 'vueId', 2], [], e, s, gg)
                _(xOC, eZC)
            }
            xOC.wxXCkey = 1
            xOC.wxXCkey = 3
            _(r, oNC)
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
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_5";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/city/index.wxml'] = [$gwx_XC_5, './pages/city/index.wxml'];
else __wxAppCode__['pages/city/index.wxml'] = $gwx_XC_5('./pages/city/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/city/index.wxss'] = setCssToHead([".", [1], "sticky.", [1], "data-v-19cb1a67{position:-webkit-sticky;position:sticky;top:", [0, 24], "}\n.", [1], "city-list.", [1], "data-v-19cb1a67{grid-gap:", [0, 30], ";display:grid;grid-template-columns:1fr 1fr;margin-top:", [0, 30], "}\n", ], undefined, {
        path: "./pages/city/index.wxss"
    });
}