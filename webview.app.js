var __globalThis = (typeof __vd_version_info__ !== 'undefined' && typeof __vd_version_info__.globalThis !== 'undefined') ? __vd_version_info__.globalThis : window;
var __mainPageFrameReady__ = __globalThis.__mainPageFrameReady__ || function() {};
var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = __wxAppCode__ || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var __GWX_GLOBAL__ = __GWX_GLOBAL__ || {};; /*v0.5vv_20211229_syb_scopedata*/
__globalThis.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
__globalThis.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
var outerGlobal = typeof __globalThis === 'undefined' ? window : __globalThis;
$gwx = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx || [];
        __WXML_GLOBAL__.ops_set.$gwx = z;
        __WXML_GLOBAL__.ops_init.$gwx = true;
        var nv_require = function() {
            var nnm = {
                "m_./uni_modules/uview-ui/components/u-parse/node/node.wxml:handler": np_0,
            };
            var nom = {};
            return function(n) {
                if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
                return function() {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        f_['./uni_modules/uview-ui/components/u-parse/node/node.wxml'] = {};
        f_['./uni_modules/uview-ui/components/u-parse/node/node.wxml']['handler'] = nv_require("m_./uni_modules/uview-ui/components/u-parse/node/node.wxml:handler");

        function np_0() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_inlineTags = ({
                nv_abbr: true,
                nv_b: true,
                nv_big: true,
                nv_code: true,
                nv_del: true,
                nv_em: true,
                nv_i: true,
                nv_ins: true,
                nv_label: true,
                nv_q: true,
                nv_small: true,
                nv_span: true,
                nv_strong: true,
                nv_sub: true,
                nv_sup: true,
            });
            nv_module.nv_exports = ({
                nv_use: (function(nv_item) {
                    if (nv_inlineTags[((nt_0 = (nv_item.nv_name), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))] || (nv_item.nv_attrs.nv_style || '').nv_indexOf('display:inline') != -1) return (false);;
                    return (!nv_item.nv_c)
                }),
            });
            return nv_module.nv_exports;
        }

        var x = [];
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx";
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
if (__vd_version_info__.delayedGwx || true) $gwx();;
var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    var BASE_DEVICE_WIDTH = 750;
    var isIOS = navigator.userAgent.match("iPhone");
    var deviceWidth = window.screen.width || 375;
    var deviceDPR = window.devicePixelRatio || 2;
    var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
        var newDeviceWidth = window.screen.width || 375
        var newDeviceDPR = window.devicePixelRatio || 2
        var newDeviceHeight = window.screen.height || 375
        if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
        if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
            deviceWidth = newDeviceWidth
            deviceDPR = newDeviceDPR
        }
    }
    checkDeviceWidth()
    var eps = 1e-4;
    var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
        if (number === 0) return 0;
        number = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
        number = Math.floor(number + eps);
        if (number === 0) {
            if (deviceDPR === 1 || !isIOS) {
                return 1;
            } else {
                return 0.5;
            }
        }
        return number;
    }
    window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
    var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__ || {}

    var setCssToHead = function(file, _xcInvalid, info) {
        var Ca = {};
        var css_id;
        var info = info || {};
        var _C = __COMMON_STYLESHEETS__

        function makeup(file, opt) {
            var _n = typeof(file) === "string";
            if (_n && Ca.hasOwnProperty(file)) return "";
            if (_n) Ca[file] = 1;
            var ex = _n ? _C[file] : file;
            var res = "";
            for (var i = ex.length - 1; i >= 0; i--) {
                var content = ex[i];
                if (typeof(content) === "object") {
                    var op = content[0];
                    if (op == 0)
                        res = transformRPX(content[1], opt.deviceWidth) + (window.__convertRpxToVw__ ? "vw" : "px") + res;
                    else if (op == 1)
                        res = opt.suffix + res;
                    else if (op == 2)
                        res = makeup(content[1], opt) + res;
                } else
                    res = content + res
            }
            return res;
        }
        var styleSheetManager = window.__styleSheetManager2__
        var rewritor = function(suffix, opt, style) {
            opt = opt || {};
            suffix = suffix || "";
            opt.suffix = suffix;
            if (opt.allowIllegalSelector != undefined && _xcInvalid != undefined) {
                if (opt.allowIllegalSelector)
                    console.warn("For developer:" + _xcInvalid);
                else {
                    console.error(_xcInvalid);
                }
            }
            Ca = {};
            css = makeup(file, opt);
            if (styleSheetManager) {
                var key = (info.path || Math.random()) + ':' + suffix
                if (!style) {
                    styleSheetManager.addItem(key, info.path);
                    window.__rpxRecalculatingFuncs__.push(function(size) {
                        opt.deviceWidth = size.width;
                        rewritor(suffix, opt, true);
                    });
                }
                styleSheetManager.setCss(key, css);
                return;
            }
            if (!style) {
                var head = document.head || document.getElementsByTagName('head')[0];
                style = document.createElement('style');
                style.type = 'text/css';
                style.setAttribute("wxss:path", info.path);
                head.appendChild(style);
                window.__rpxRecalculatingFuncs__.push(function(size) {
                    opt.deviceWidth = size.width;
                    rewritor(suffix, opt, style);
                });
            }
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                if (style.childNodes.length == 0)
                    style.appendChild(document.createTextNode(css));
                else
                    style.childNodes[0].nodeValue = css;
            }
        }
        return rewritor;
    }
    setCssToHead([])();
    setCssToHead([".", [1], "u-line-1{-webkit-line-clamp:1}\n.", [1], "u-line-1,.", [1], "u-line-2{-webkit-box-orient:vertical!important;display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all}\n.", [1], "u-line-2{-webkit-line-clamp:2}\n.", [1], "u-line-3{-webkit-line-clamp:3}\n.", [1], "u-line-3,.", [1], "u-line-4{-webkit-box-orient:vertical!important;display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all}\n.", [1], "u-line-4{-webkit-line-clamp:4}\n.", [1], "u-line-5{-webkit-line-clamp:5;-webkit-box-orient:vertical!important;display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all}\n.", [1], "u-border{border-color:#dadbde!important;border-style:solid;border-width:.5px!important}\n.", [1], "u-border-top{border-color:#dadbde!important;border-top-style:solid;border-top-width:.5px!important}\n.", [1], "u-border-left{border-color:#dadbde!important;border-left-style:solid;border-left-width:.5px!important}\n.", [1], "u-border-right{border-color:#dadbde!important;border-right-style:solid;border-right-width:.5px!important}\n.", [1], "u-border-bottom{border-bottom-style:solid;border-bottom-width:.5px!important;border-color:#dadbde!important}\n.", [1], "u-border-top-bottom{border-bottom-style:solid;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-top-width:.5px!important}\n.", [1], "u-reset-button{background-color:initial;color:inherit;font-size:inherit;line-height:inherit;padding:0}\n.", [1], "u-reset-button::after{border:none}\n.", [1], "u-hover-class{opacity:.7}\n.", [1], "u-primary-light{color:#ecf5ff}\n.", [1], "u-warning-light{color:#fdf6ec}\n.", [1], "u-success-light{color:#f5fff0}\n.", [1], "u-error-light{color:#fef0f0}\n.", [1], "u-info-light{color:#f4f4f5}\n.", [1], "u-primary-light-bg{background-color:#ecf5ff}\n.", [1], "u-warning-light-bg{background-color:#fdf6ec}\n.", [1], "u-success-light-bg{background-color:#f5fff0}\n.", [1], "u-error-light-bg{background-color:#fef0f0}\n.", [1], "u-info-light-bg{background-color:#f4f4f5}\n.", [1], "u-primary-dark{color:#398ade}\n.", [1], "u-warning-dark{color:#f1a532}\n.", [1], "u-success-dark{color:#53c21d}\n.", [1], "u-error-dark{color:#e45656}\n.", [1], "u-info-dark{color:#767a82}\n.", [1], "u-primary-dark-bg{background-color:#398ade}\n.", [1], "u-warning-dark-bg{background-color:#f1a532}\n.", [1], "u-success-dark-bg{background-color:#53c21d}\n.", [1], "u-error-dark-bg{background-color:#e45656}\n.", [1], "u-info-dark-bg{background-color:#767a82}\n.", [1], "u-primary-disabled{color:#9acafc}\n.", [1], "u-warning-disabled{color:#f9d39b}\n.", [1], "u-success-disabled{color:#a9e08f}\n.", [1], "u-error-disabled{color:#f7b2b2}\n.", [1], "u-info-disabled{color:#c4c6c9}\n.", [1], "u-primary{color:#3c9cff}\n.", [1], "u-warning{color:#f9ae3d}\n.", [1], "u-success{color:#5ac725}\n.", [1], "u-error{color:#f56c6c}\n.", [1], "u-info{color:#909399}\n.", [1], "u-primary-bg{background-color:#3c9cff}\n.", [1], "u-warning-bg{background-color:#f9ae3d}\n.", [1], "u-success-bg{background-color:#5ac725}\n.", [1], "u-error-bg{background-color:#f56c6c}\n.", [1], "u-info-bg{background-color:#909399}\n.", [1], "u-main-color{color:#303133}\n.", [1], "u-content-color{color:#606266}\n.", [1], "u-tips-color{color:#909193}\n.", [1], "u-light-color{color:#c0c4cc}\n.", [1], "u-safe-area-inset-top{padding-top:env(safe-area-inset-top)}\n.", [1], "u-safe-area-inset-right{padding-right:env(safe-area-inset-right)}\n.", [1], "u-safe-area-inset-bottom{padding-bottom:env(safe-area-inset-bottom)}\n.", [1], "u-safe-area-inset-left{padding-left:env(safe-area-inset-left)}\n::-webkit-scrollbar{-webkit-appearance:none;background:transparent;display:none;height:0!important;width:0!important}\n.", [1], "jz-full-content{height:100%;left:0;position:absolute;top:0;width:100%}\n.", [1], "jz-block{display:block}\n.", [1], "jz-box,.", [1], "jz-col-box{display:-webkit-flex;display:flex}\n.", [1], "jz-col-box{-webkit-flex-direction:column;flex-direction:column}\n.", [1], "jz-inline-box{display:-webkit-inline-flex;display:inline-flex}\n.", [1], "jz-row{-webkit-flex-direction:row;flex-direction:row}\n.", [1], "jz-row-reverse{-webkit-flex-direction:row-reverse;flex-direction:row-reverse}\n.", [1], "jz-col{-webkit-flex-direction:column;flex-direction:column}\n.", [1], "jz-col-reverse{-webkit-flex-direction:column-reverse;flex-direction:column-reverse}\n.", [1], "jz-center{-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center}\n.", [1], "jz-wrap{-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.", [1], "jz-wrap-reverse{-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}\n.", [1], "jz-justify-start{-webkit-justify-content:flex-start;justify-content:flex-start}\n.", [1], "jz-justify-end{-webkit-justify-content:flex-end;justify-content:flex-end}\n.", [1], "jz-justify-center{-webkit-justify-content:center;justify-content:center}\n.", [1], "jz-justify-around{-webkit-justify-content:space-around;justify-content:space-around}\n.", [1], "jz-justify-between{-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "jz-align-start{-webkit-align-items:flex-start;align-items:flex-start}\n.", [1], "jz-align-end{-webkit-align-items:flex-end;align-items:flex-end}\n.", [1], "jz-align-center{-webkit-align-items:center;align-items:center}\n.", [1], "jz-align-baseline{-webkit-align-items:baseline;align-items:baseline}\n.", [1], "jz-align-stretch{-webkit-align-items:stretch;align-items:stretch}\n.", [1], "jz-align-content{-webkit-align-content:center;align-content:center}\n.", [1], "jz-lines-1{-webkit-line-clamp:1}\n.", [1], "jz-lines-1,.", [1], "jz-lines-2{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}\n.", [1], "jz-lines-2{-webkit-line-clamp:2}\n.", [1], "jz-underline{text-decoration:underline}\n.", [1], "jz-midline{text-decoration:line-through}\n.", [1], "color-333{color:#333}\n.", [1], "color-666{color:#666}\n.", [1], "color-999{color:#999}\n.", [1], "color-ccc{color:#ccc}\n.", [1], "jz-text-center{text-align:center}\n.", [1], "jz-text-right{text-align:right}\n.", [1], "jz-font-bold{font-weight:700}\n.", [1], "jz-font-10{font-size:10px}\n.", [1], "jz-font-11{font-size:11px}\n.", [1], "jz-font-12{font-size:12px}\n.", [1], "jz-font-13{font-size:13px}\n.", [1], "jz-font-14{font-size:14px}\n.", [1], "jz-font-15{font-size:15px}\n.", [1], "jz-font-16{font-size:16px}\n.", [1], "jz-font-18{font-size:18px}\n.", [1], "jz-font-20{font-size:20px}\n.", [1], "jz-font-24{font-size:24px}\n.", [1], "jz-color-white{color:#fff}\n.", [1], "jz-border-10{border-radius:10px}\n.", [1], "jz-wp-100{width:100%}\n.", [1], "jz-hp-100{height:100%}\n.", [1], "jz-h-16{height:16px}\n.", [1], "jz-h-20{height:20px}\n.", [1], "jz-h-28{height:28px}\n.", [1], "jz-h-40{height:40px}\n.", [1], "jz-h-50{height:50px}\n.", [1], "jz-h-100{height:100px}\n.", [1], "jz-mt-1{margin-top:1px}\n.", [1], "jz-mt-2{margin-top:2px}\n.", [1], "jz-mt-3{margin-top:3px}\n.", [1], "jz-mt-4{margin-top:4px}\n.", [1], "jz-mt-5{margin-top:5px}\n.", [1], "jz-mt-6{margin-top:6px}\n.", [1], "jz-mt-7{margin-top:7px}\n.", [1], "jz-mt-8{margin-top:8px}\n.", [1], "jz-mt-9{margin-top:9px}\n.", [1], "jz-mt-10{margin-top:10px}\n.", [1], "jz-mt-11{margin-top:11px}\n.", [1], "jz-mt-12{margin-top:12px}\n.", [1], "jz-mt-13{margin-top:13px}\n.", [1], "jz-mt-14{margin-top:14px}\n.", [1], "jz-mt-15{margin-top:15px}\n.", [1], "jz-mt-16{margin-top:16px}\n.", [1], "jz-mt-18{margin-top:18px}\n.", [1], "jz-mt-20{margin-top:20px}\n.", [1], "jz-mt-22{margin-top:22px}\n.", [1], "jz-mt-25{margin-top:25px}\n.", [1], "jz-mt-30{margin-top:30px}\n.", [1], "jz-mt-40{margin-top:40px}\n.", [1], "jz-mt-56{margin-top:56px}\n.", [1], "jz-mt-76{margin-top:76px}\n.", [1], "jz-ml-2{margin-left:2px}\n.", [1], "jz-ml-3{margin-left:3px}\n.", [1], "jz-ml-4{margin-left:4px}\n.", [1], "jz-ml-5{margin-left:5px}\n.", [1], "jz-ml-6{margin-left:6px}\n.", [1], "jz-ml-7{margin-left:7px}\n.", [1], "jz-ml-8{margin-left:8px}\n.", [1], "jz-ml-10{margin-left:10px}\n.", [1], "jz-ml-13{margin-left:13px}\n.", [1], "jz-ml-17{margin-left:17px}\n.", [1], "jz-mr-2{margin-right:2px}\n.", [1], "jz-mr-5{margin-right:5px}\n.", [1], "jz-mr-10{margin-right:10px}\n.", [1], "jz-mr-13{margin-right:13px}\n.", [1], "jz-flex-1{-webkit-flex:1;flex:1}\n.", [1], "jz-flex-2{-webkit-flex:2;flex:2}\n.", [1], "jz-flex-3{-webkit-flex:3;flex:3}\n.", [1], "jz-flex-4{-webkit-flex:4;flex:4}\n.", [1], "jz-flex-5{-webkit-flex:5;flex:5}\n.", [1], "jz-flex-6{-webkit-flex:6;flex:6}\n.", [1], "jz-flex-7{-webkit-flex:7;flex:7}\n.", [1], "jz-flex-8{-webkit-flex:8;flex:8}\n.", [1], "jz-flex-9{-webkit-flex:9;flex:9}\nbody{background-color:#f8f3e9;font-family:Source Han Serif SC}\n.", [1], "app{box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding-bottom:20px}\n.", [1], "app-space{margin-left:", [0, 24], ";margin-right:", [0, 24], ";margin-top:", [0, 24], "}\n.", [1], "app-tool{padding-bottom:90px}\n.", [1], "hidden{display:none!important}\n.", [1], "content{background-color:#f8f8f8;margin:0;padding:0;width:100%}\n.", [1], "big-button{background-color:#ae2529;border-radius:", [0, 10], ";color:#fff;font-size:", [0, 30], ";height:", [0, 90], ";line-height:90px}\n.", [1], "big-button,.", [1], "border-button{text-align:center;width:100%}\n.", [1], "border-button{background-color:#fff;border-radius:21px;border-style:solid;border-width:thin;color:#1bd69f;font-size:20px;height:43px;line-height:43px}\n.", [1], "bottom-button{bottom:30px;height:44px;left:30px;position:fixed;right:30px}\n.", [1], "cell-good-image{background-color:#f2f7f6;border-radius:10px;height:60px;width:60px}\n.", [1], "float-image{bottom:34px;height:40px;position:fixed;right:8px;width:40px}\n.", [1], "price-label{color:#ff463c;font-size:16px;font-weight:700}\n.", [1], "custom-container{background-image:url(https://kgtimage.kgtmall.com.cn/applet/bcyd/bg_ding@2x.png)}\n.", [1], "custom-container,.", [1], "spread-container{background-repeat:no-repeat;background-size:100% auto;min-height:200px}\n.", [1], "spread-container{background-image:url(https://kgtimage.kgtmall.com.cn/applet/bcyd/spread_banner.png)}\n.", [1], "custom-scroll{bottom:0;left:0;position:absolute;width:100%}\n.", [1], "white-box{background-color:#fff;border-radius:10px}\n.", [1], "theme-color{background-color:#1bd69f}\n.", [1], "color-price{color:#ff463c}\n.", [1], "color-green{color:#1bd69f}\n.", [1], "color-yellow{color:#dea11e}\n.", [1], "color-brown{color:#512b18}\n.", [1], "color-join{color:#dd9f53}\n.", [1], "white10-col,.", [1], "white10-row{background-color:#fff;border-radius:10px;display:-webkit-flex;display:flex}\n.", [1], "white10-col{-webkit-flex-direction:column;flex-direction:column}\n.", [1], "black-text-16b{font-weight:700}\n.", [1], "black-text-16,.", [1], "black-text-16b{color:#333;font-size:16px}\n.", [1], "black-text-14b{font-weight:700}\n.", [1], "black-text-14,.", [1], "black-text-14b{color:#333;font-size:14px}\n.", [1], "gray-text-16b{font-weight:700}\n.", [1], "gray-text-16,.", [1], "gray-text-16b{color:#666;font-size:16px}\n.", [1], "gray-text-14b{font-weight:700}\n.", [1], "gray-text-14,.", [1], "gray-text-14b{color:#666;font-size:14px}\nbody::after{-webkit-animation:shadow-preload .1s;-webkit-animation-delay:3s;animation:shadow-preload .1s;animation-delay:3s;content:\x22\x22;left:-1000px;position:fixed;top:-1000px}\n@-webkit-keyframes shadow-preload{0%{background-image:url(https://cdn1.dcloud.net.cn/4d4468464d6a6c435269556c643368694f4455774e7a4a6b4f4468695a6d45314d57526b/img/shadow-grey.png)}\n100%{background-image:url(https://cdn1.dcloud.net.cn/4d4468464d6a6c435269556c643368694f4455774e7a4a6b4f4468695a6d45314d57526b/img/shadow-grey.png)}\n}@keyframes shadow-preload{0%{background-image:url(https://cdn1.dcloud.net.cn/4d4468464d6a6c435269556c643368694f4455774e7a4a6b4f4468695a6d45314d57526b/img/shadow-grey.png)}\n100%{background-image:url(https://cdn1.dcloud.net.cn/4d4468464d6a6c435269556c643368694f4455774e7a4a6b4f4468695a6d45314d57526b/img/shadow-grey.png)}\n}[bind-data-custom-hidden\x3d\x22true\x22],[data-custom-hidden\x3d\x22true\x22]{display:none!important}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:1:9012)", {
        path: "./app.wxss"
    })();;;
}
__mainPageFrameReady__();
var __pageFrameEndTime__ = Date.now();