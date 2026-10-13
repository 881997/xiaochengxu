$gwx_XC_10 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];

        function gz$gwx_XC_10_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app creation data-v-e0b18e70'])
                Z([3, '__l'])
                Z([3, 'data-v-e0b18e70'])
                Z([3, 'd3cbcc46-1'])
                Z([3, 'creation-list data-v-e0b18e70'])
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z(z[5])
                Z([3, '__e'])
                Z([3, 'creation-item data-v-e0b18e70'])
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
                Z(z[2])
                Z([3, 'widthFix'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'fileUrl']
                ])
                Z([3, 'title data-v-e0b18e70'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'cpNo']
                ]])
                Z([3, 'desc data-v-e0b18e70'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'remark']
                ]])
                Z([3, 'customer-button data-v-e0b18e70'])
                Z(z[1])
                Z(z[2])
                Z([3, '#f56c6c'])
                Z([3, '联系'])
                Z(z[23])
                Z([3, 'bottom'])
                Z([3, 'server-fill'])
                Z([3, '20'])
                Z([3, 'd3cbcc46-2'])
                Z(z[2])
                Z([3, 'contact'])
                Z([3, '联系客服'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_10 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_10 = true;
        var x = ['./pages/index/part.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_10_1()
            var xEF = _n('view')
            _rz(z, xEF, 'class', 0, e, s, gg)
            var oFF = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(xEF, oFF)
            var fGF = _n('view')
            _rz(z, fGF, 'class', 4, e, s, gg)
            var cHF = _v()
            _(fGF, cHF)
            var hIF = function(cKF, oJF, oLF, gg) {
                var aNF = _mz(z, 'view', ['bindtap', 9, 'class', 1, 'data-event-opts', 2, 'data-event-params', 3], [], cKF, oJF, gg)
                var tOF = _mz(z, 'image', ['class', 13, 'mode', 1, 'src', 2], [], cKF, oJF, gg)
                _(aNF, tOF)
                var ePF = _n('view')
                _rz(z, ePF, 'class', 16, cKF, oJF, gg)
                var bQF = _oz(z, 17, cKF, oJF, gg)
                _(ePF, bQF)
                _(aNF, ePF)
                var oRF = _n('view')
                _rz(z, oRF, 'class', 18, cKF, oJF, gg)
                var xSF = _oz(z, 19, cKF, oJF, gg)
                _(oRF, xSF)
                _(aNF, oRF)
                _(oLF, aNF)
                return oLF
            }
            cHF.wxXCkey = 2
            _2z(z, 7, hIF, e, s, gg, cHF, 'item', 'index', 'index')
            _(xEF, fGF)
            var oTF = _n('view')
            _rz(z, oTF, 'class', 20, e, s, gg)
            var fUF = _mz(z, 'u-icon', ['bind:__l', 21, 'class', 1, 'color', 2, 'label', 3, 'labelColor', 4, 'labelPos', 5, 'name', 6, 'size', 7, 'vueId', 8], [], e, s, gg)
            _(oTF, fUF)
            var cVF = _mz(z, 'button', ['class', 30, 'openType', 1], [], e, s, gg)
            var hWF = _oz(z, 32, e, s, gg)
            _(cVF, hWF)
            _(oTF, cVF)
            _(xEF, oTF)
            _(r, xEF)
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
                g = "$gwx_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/part.wxml'] = [$gwx_XC_10, './pages/index/part.wxml'];
else __wxAppCode__['pages/index/part.wxml'] = $gwx_XC_10('./pages/index/part.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/index/part.wxss'] = setCssToHead([".", [1], "creation.", [1], "data-v-e0b18e70{margin-left:20px;margin-right:20px}\n.", [1], "creation-image.", [1], "data-v-e0b18e70{margin-top:10px;width:100%}\n.", [1], "info-view .", [1], "author.", [1], "data-v-e0b18e70{color:#333;font-size:18px;font-weight:700;margin-top:20px}\n.", [1], "info-view .", [1], "spec.", [1], "data-v-e0b18e70{color:#333;font-size:14px;margin-top:10px}\n.", [1], "image-desc.", [1], "data-v-e0b18e70{color:#333;font-size:16px;font-weight:400;line-height:30px;margin-top:20px;text-indent:2em}\n.", [1], "creation-list .", [1], "creation-item.", [1], "data-v-e0b18e70{margin-top:20px}\n.", [1], "creation-list .", [1], "creation-item wx-image.", [1], "data-v-e0b18e70{width:100%}\n.", [1], "creation-list .", [1], "creation-item wx-view.", [1], "data-v-e0b18e70{color:#333;font-weight:400;line-height:30px;margin-top:10px}\n.", [1], "customer-button.", [1], "data-v-e0b18e70{-webkit-align-items:center;align-items:center;background:#fff;border-radius:50%;bottom:200px;display:-webkit-flex;display:flex;height:60px;-webkit-justify-content:center;justify-content:center;position:fixed;right:20px;width:60px}\n.", [1], "customer-button wx-button.", [1], "data-v-e0b18e70{height:100%;opacity:0;position:absolute;width:100%}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/index/part.wxss:1:924)", {
        path: "./pages/index/part.wxss"
    });
}