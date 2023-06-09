import require$$0 from "../dayjs.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn) {
    var module = {
        exports: {}
    };
    return fn(module, module.exports),
    module.exports;
}
var __VIRTUAL_FILE = createCommonjsModule(function(module, exports) {
    !function(e, _) {
        module.exports = _(require$$0);
    }(commonjsGlobal, function(e) {
        function _(e2) {
            return e2 && typeof e2 == "object" && "default"in e2 ? e2 : {
                default: e2
            };
        }
        var t = _(e)
          , d = {
            name: "zh-cn",
            weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
            weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),
            weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
            months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
            monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
            ordinal: function(e2, _2) {
                return _2 === "W" ? e2 + "\u5468" : e2 + "\u65E5";
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY\u5E74M\u6708D\u65E5",
                LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",
                LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",
                l: "YYYY/M/D",
                ll: "YYYY\u5E74M\u6708D\u65E5",
                lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
                llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm"
            },
            relativeTime: {
                future: "%s\u5185",
                past: "%s\u524D",
                s: "\u51E0\u79D2",
                m: "1 \u5206\u949F",
                mm: "%d \u5206\u949F",
                h: "1 \u5C0F\u65F6",
                hh: "%d \u5C0F\u65F6",
                d: "1 \u5929",
                dd: "%d \u5929",
                M: "1 \u4E2A\u6708",
                MM: "%d \u4E2A\u6708",
                y: "1 \u5E74",
                yy: "%d \u5E74"
            },
            meridiem: function(e2, _2) {
                var t2 = 100 * e2 + _2;
                return t2 < 600 ? "\u51CC\u6668" : t2 < 900 ? "\u65E9\u4E0A" : t2 < 1100 ? "\u4E0A\u5348" : t2 < 1300 ? "\u4E2D\u5348" : t2 < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
            }
        };
        return t.default.locale(d, null, true),
        d;
    });
});
export default __VIRTUAL_FILE;
