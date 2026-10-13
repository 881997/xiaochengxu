$gwx_XC_11 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];

        function gz$gwx_XC_11_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space data-v-1a8a04f4'])
                Z([3, '__l'])
                Z([3, 'data-v-1a8a04f4'])
                Z([3, '17856c5f-1'])
                Z([3, 'guide-list data-v-1a8a04f4'])
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z(z[5])
                Z([3, '__e'])
                Z([3, 'guide-item data-v-1a8a04f4'])
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
                                                    [1, 'e0']
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
                                                        [1, '$event']
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
                Z([
                    [8], 'item', [
                        [7],
                        [3, 'item']
                    ]
                ])
                Z([3, 'info data-v-1a8a04f4'])
                Z([3, 'title data-v-1a8a04f4'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'partName']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_11 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_11 = true;
        var x = ['./pages/index/partList.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_11_1()
            var cYF = _n('view')
            _rz(z, cYF, 'class', 0, e, s, gg)
            var oZF = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(cYF, oZF)
            var l1F = _n('view')
            _rz(z, l1F, 'class', 4, e, s, gg)
            var a2F = _v()
            _(l1F, a2F)
            var t3F = function(b5F, e4F, o6F, gg) {
                var o8F = _mz(z, 'view', ['bindtap', 9, 'class', 1, 'data-event-opts', 2, 'data-event-params', 3], [], b5F, e4F, gg)
                var f9F = _n('view')
                _rz(z, f9F, 'class', 13, b5F, e4F, gg)
                var c0F = _n('text')
                _rz(z, c0F, 'class', 14, b5F, e4F, gg)
                var hAG = _oz(z, 15, b5F, e4F, gg)
                _(c0F, hAG)
                _(f9F, c0F)
                _(o8F, f9F)
                _(o6F, o8F)
                return o6F
            }
            a2F.wxXCkey = 2
            _2z(z, 7, t3F, e, s, gg, a2F, 'item', 'index', 'index')
            _(cYF, l1F)
            _(r, cYF)
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
                g = "$gwx_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_11();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/partList.wxml'] = [$gwx_XC_11, './pages/index/partList.wxml'];
else __wxAppCode__['pages/index/partList.wxml'] = $gwx_XC_11('./pages/index/partList.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/index/partList.wxss'] = setCssToHead([".", [1], "guide-list .", [1], "guide-item.", [1], "data-v-1a8a04f4{background:#fff;border-radius:10px;box-shadow:", [0, 0], " ", [0, 0], " ", [0, 15], " ", [0, 0], " hsla(0,0%,88%,.57);margin-bottom:", [0, 30], ";overflow:hidden;position:relative}\n.", [1], "guide-list .", [1], "guide-item wx-image.", [1], "data-v-1a8a04f4{height:", [0, 360], ";width:100%}\n.", [1], "guide-list .", [1], "guide-item .", [1], "info.", [1], "data-v-1a8a04f4{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 20], " ", [0, 32], "}\n.", [1], "guide-list .", [1], "guide-item .", [1], "info .", [1], "title.", [1], "data-v-1a8a04f4{color:#000;font-size:", [0, 32], ";font-weight:700}\n.", [1], "guide-list .", [1], "guide-item .", [1], "info .", [1], "desc.", [1], "data-v-1a8a04f4{color:#666;font-size:", [0, 22], ";margin-bottom:1px;margin-top:3px}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/index/partList.wxss:1:205)", {
        path: "./pages/index/partList.wxss"
    });
}