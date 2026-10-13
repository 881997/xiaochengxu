$gwx_XC_17 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];

        function gz$gwx_XC_17_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'app app-space data-v-067f364a'])
                Z([3, '__l'])
                Z([3, 'data-v-067f364a'])
                Z([3, '6b4b36ba-1'])
                Z([3, 'login data-v-067f364a'])
                Z(z[2])
                Z([3, '/static/logo.png'])
                Z(z[2])
                Z([3, '云志影藏'])
                Z([3, '__e'])
                Z(z[9])
                Z(z[2])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [4],
                                [
                                    [5],
                                    [
                                        [5],
                                        [1, 'getphonenumber']
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
                                                        [1, 'getPhoneNumber']
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
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [5],
                                    [1, 'error']
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
                                                    [1, 'onHandleError']
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
                Z([3, 'getPhoneNumber'])
                Z([3, 'background:#4A2921;width:90%;'])
                Z([3, 'primary'])
                Z([3, '手机号一键登录'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_17 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_17 = true;
        var x = ['./pages/login/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_17_1()
            var o8J = _n('view')
            _rz(z, o8J, 'class', 0, e, s, gg)
            var c9J = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(o8J, c9J)
            var o0J = _n('view')
            _rz(z, o0J, 'class', 4, e, s, gg)
            var lAK = _mz(z, 'image', ['class', 5, 'src', 1], [], e, s, gg)
            _(o0J, lAK)
            var aBK = _n('text')
            _rz(z, aBK, 'class', 7, e, s, gg)
            var tCK = _oz(z, 8, e, s, gg)
            _(aBK, tCK)
            _(o0J, aBK)
            var eDK = _mz(z, 'button', ['binderror', 9, 'bindgetphonenumber', 1, 'class', 2, 'data-event-opts', 3, 'openType', 4, 'style', 5, 'type', 6], [], e, s, gg)
            var bEK = _oz(z, 16, e, s, gg)
            _(eDK, bEK)
            _(o0J, eDK)
            _(o8J, o0J)
            _(r, o8J)
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
                g = "$gwx_XC_17";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_17();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/index.wxml'] = [$gwx_XC_17, './pages/login/index.wxml'];
else __wxAppCode__['pages/login/index.wxml'] = $gwx_XC_17('./pages/login/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/login/index.wxss'] = setCssToHead([".", [1], "login.", [1], "data-v-067f364a{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;margin-top:40%;width:100%}\n.", [1], "login wx-image.", [1], "data-v-067f364a{height:80px;margin-bottom:20px;margin-left:10px;width:100px}\n.", [1], "login wx-text.", [1], "data-v-067f364a{color:#4a2921;font-size:18px;font-weight:700;margin-bottom:30px}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/login/index.wxss:1:332)", {
        path: "./pages/login/index.wxss"
    });
}