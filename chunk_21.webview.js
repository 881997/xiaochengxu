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
                Z([3, 'guide-list data-v-8d33f65e'])
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z(z[11])
                Z(z[6])
                Z([3, 'guide-item data-v-8d33f65e'])
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
                                                                                [
                                                                                    [5],
                                                                                    [1, 'list']
                                                                                ],
                                                                                [1, '']
                                                                            ],
                                                                            [
                                                                                [7],
                                                                                [3, 'index']
                                                                            ]
                                                                        ],
                                                                        [1, 'id']
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
                Z([3, 'info data-v-8d33f65e'])
                Z([3, 'title data-v-8d33f65e'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'rsName']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_14 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_14 = true;
        var x = ['./pages/index/researchList.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_14_1()
            var xAJ = _n('view')
            _rz(z, xAJ, 'class', 0, e, s, gg)
            var fCJ = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(xAJ, fCJ)
            var oBJ = _v()
            _(xAJ, oBJ)
            if (_oz(z, 4, e, s, gg)) {
                oBJ.wxVkey = 1
                var cDJ = _mz(z, 'search-bar', ['bind:__l', 5, 'bind:search', 1, 'class', 2, 'data-event-opts', 3, 'vueId', 4], [], e, s, gg)
                _(oBJ, cDJ)
            }
            var hEJ = _n('view')
            _rz(z, hEJ, 'class', 10, e, s, gg)
            var oFJ = _v()
            _(hEJ, oFJ)
            var cGJ = function(lIJ, oHJ, aJJ, gg) {
                var eLJ = _mz(z, 'view', ['bindtap', 15, 'class', 1, 'data-event-opts', 2], [], lIJ, oHJ, gg)
                var bMJ = _n('view')
                _rz(z, bMJ, 'class', 18, lIJ, oHJ, gg)
                var oNJ = _n('text')
                _rz(z, oNJ, 'class', 19, lIJ, oHJ, gg)
                var xOJ = _oz(z, 20, lIJ, oHJ, gg)
                _(oNJ, xOJ)
                _(bMJ, oNJ)
                _(eLJ, bMJ)
                _(aJJ, eLJ)
                return aJJ
            }
            oFJ.wxXCkey = 2
            _2z(z, 13, cGJ, e, s, gg, oFJ, 'item', 'index', 'index')
            _(xAJ, hEJ)
            oBJ.wxXCkey = 1
            oBJ.wxXCkey = 3
            _(r, xAJ)
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
                g = "$gwx_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_14();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/researchList.wxml'] = [$gwx_XC_14, './pages/index/researchList.wxml'];
else __wxAppCode__['pages/index/researchList.wxml'] = $gwx_XC_14('./pages/index/researchList.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/index/researchList.wxss'] = setCssToHead([".", [1], "guide-list .", [1], "guide-item.", [1], "data-v-8d33f65e{background:#fff;border-radius:10px;box-shadow:", [0, 0], " ", [0, 0], " ", [0, 15], " ", [0, 0], " hsla(0,0%,88%,.57);margin-top:10px;overflow:hidden;position:relative}\n.", [1], "guide-list .", [1], "guide-item wx-image.", [1], "data-v-8d33f65e{height:", [0, 360], ";width:100%}\n.", [1], "guide-list .", [1], "guide-item .", [1], "info.", [1], "data-v-8d33f65e{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 20], " ", [0, 32], "}\n.", [1], "guide-list .", [1], "guide-item .", [1], "info .", [1], "title.", [1], "data-v-8d33f65e{color:#000;font-size:", [0, 32], ";font-weight:700}\n.", [1], "guide-list .", [1], "guide-item .", [1], "info .", [1], "desc.", [1], "data-v-8d33f65e{color:#666;font-size:", [0, 22], ";margin-bottom:1px;margin-top:3px}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/index/researchList.wxss:1:201)", {
        path: "./pages/index/researchList.wxss"
    });
}