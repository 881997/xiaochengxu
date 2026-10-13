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
                Z([3, 'bigImage data-v-a5c8eaf0'])
                Z([3, 'aspectFill'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'avatarUrl']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'famousExpertsDesc']
                ])
                Z([3, 'pannel data-v-a5c8eaf0'])
                Z([3, 'title data-v-a5c8eaf0'])
                Z([3, '作家简介'])
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
                Z([3, 'rictContent _div data-v-a5c8eaf0'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'info']
                    ],
                    [3, 'famousExpertsDesc']
                ]])
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
                Z(z[21])
                Z(z[23])
                Z(z[2])
                Z(z[6])
                Z(z[22])
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
            var tEB = _n('view')
            _rz(z, tEB, 'class', 0, e, s, gg)
            var bGB = _mz(z, 'back-bg', ['bind:__l', 1, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(tEB, bGB)
            var oHB = _mz(z, 'image', ['class', 4, 'mode', 1, 'src', 2], [], e, s, gg)
            _(tEB, oHB)
            var eFB = _v()
            _(tEB, eFB)
            if (_oz(z, 7, e, s, gg)) {
                eFB.wxVkey = 1
                var xIB = _n('view')
                _rz(z, xIB, 'class', 8, e, s, gg)
                var oJB = _n('view')
                _rz(z, oJB, 'class', 9, e, s, gg)
                var fKB = _oz(z, 10, e, s, gg)
                _(oJB, fKB)
                _(xIB, oJB)
                var cLB = _mz(z, 'u-read-more', ['bind:__l', 11, 'class', 1, 'color', 2, 'data-ref', 3, 'showHeight', 4, 'toggle', 5, 'vueId', 6, 'vueSlots', 7], [], e, s, gg)
                var hMB = _n('view')
                _rz(z, hMB, 'class', 19, e, s, gg)
                var oNB = _oz(z, 20, e, s, gg)
                _(hMB, oNB)
                _(cLB, hMB)
                _(xIB, cLB)
                _(eFB, xIB)
            }
            var cOB = _mz(z, 'data-bind', ['bindId', 21, 'bindName', 1, 'bindType', 2, 'bind:__l', 3, 'class', 4, 'vueId', 5], [], e, s, gg)
            _(tEB, cOB)
            var oPB = _mz(z, 'tool-bar', ['bind:__l', 27, 'bindId', 1, 'bindType', 2, 'class', 3, 'image', 4, 'title', 5, 'vueId', 6], [], e, s, gg)
            _(tEB, oPB)
            eFB.wxXCkey = 1
            eFB.wxXCkey = 3
            _(r, tEB)
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
                g = "$gwx_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/celebrity/detail.wxml'] = [$gwx_XC_2, './pages/celebrity/detail.wxml'];
else __wxAppCode__['pages/celebrity/detail.wxml'] = $gwx_XC_2('./pages/celebrity/detail.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/celebrity/detail.wxss'] = setCssToHead([".", [1], "info-view.", [1], "data-v-a5c8eaf0{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;margin-top:", [0, 40], ";width:100%}\n.", [1], "info-view wx-image.", [1], "data-v-a5c8eaf0{border-radius:50%;height:", [0, 280], ";width:", [0, 280], "}\n.", [1], "info-view wx-view.", [1], "data-v-a5c8eaf0{color:#000;font-size:16px;font-weight:700;margin-top:", [0, 22], "}\n.", [1], "info-view wx-text.", [1], "data-v-a5c8eaf0{color:#000;font-size:14px;margin-top:", [0, 16], "}\n.", [1], "pannel.", [1], "data-v-a5c8eaf0{background-color:#fff;border-radius:", [0, 12], ";box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;margin-top:", [0, 30], ";padding:", [0, 50], " ", [0, 40], "}\n.", [1], "pannel .", [1], "title.", [1], "data-v-a5c8eaf0{color:#000;font-size:16px;font-weight:700;margin-bottom:", [0, 30], "}\n.", [1], "pannel .", [1], "rictContent.", [1], "data-v-a5c8eaf0{color:#000;font-size:15px;line-height:30px;white-space:pre-wrap}\n.", [1], "bigImage.", [1], "data-v-a5c8eaf0{border-radius:", [0, 12], ";width:100%}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/celebrity/detail.wxss:1:422)", {
        path: "./pages/celebrity/detail.wxss"
    });
}