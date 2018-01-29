//弹出框
!function (e, t) { function n() { var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">取消</button><button class="confirm" tabIndex="1">确定</button></div>', n = t.createElement("div"); n.innerHTML = e, t.body.appendChild(n) } function o(t) { var n = y(), o = n.querySelector("h2"), r = n.querySelector("p"), a = n.querySelector("button.cancel"), c = n.querySelector("button.confirm"); if (o.innerHTML = b(t.title).split("\n").join("<br>"), r.innerHTML = b(t.text || "").split("\n").join("<br>"), t.text && w(r), x(n.querySelectorAll(".icon")), t.type) { for (var l = !1, s = 0; s < f.length; s++) if (t.type === f[s]) { l = !0; break } if (!l) return e.console.error("Unknown alert type: " + t.type), !1; var u = n.querySelector(".icon." + t.type); switch (w(u), t.type) { case "success": g(u, "animate"), g(u.querySelector(".tip"), "animateSuccessTip"), g(u.querySelector(".long"), "animateSuccessLong"); break; case "error": g(u, "animateErrorIcon"), g(u.querySelector(".x-mark"), "animateXMark"); break; case "warning": g(u, "pulseWarning"), g(u.querySelector(".body"), "pulseWarningIns"), g(u.querySelector(".dot"), "pulseWarningIns") } } if (t.imageUrl) { var d = n.querySelector(".icon.custom"); d.style.backgroundImage = "url(" + t.imageUrl + ")", w(d); var p = 80, m = 80; if (t.imageSize) { var v = t.imageSize.split("x")[0], h = t.imageSize.split("x")[1]; v && h ? (p = v, m = h, d.css({ width: v + "px", height: h + "px" })) : e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize) } d.setAttribute("style", d.getAttribute("style") + "width:" + p + "px; height:" + m + "px") } n.setAttribute("data-has-cancel-button", t.showCancelButton), t.showCancelButton ? a.style.display = "inline-block" : x(a), t.cancelButtonText && (a.innerHTML = b(t.cancelButtonText)), t.confirmButtonText && (c.innerHTML = b(t.confirmButtonText)), c.style.backgroundColor = t.confirmButtonColor, i(c, t.confirmButtonColor), n.setAttribute("data-allow-ouside-click", t.allowOutsideClick); var S = t.doneFunction ? !0 : !1; n.setAttribute("data-has-done-function", S) } function r(e, t) { e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0; var n = "#", o, r; for (r = 0; 3 > r; r++) o = parseInt(e.substr(2 * r, 2), 16), o = Math.round(Math.min(Math.max(0, o + o * t), 255)).toString(16), n += ("00" + o).substr(o.length); return n } function a(e) { var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e); return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null } function i(e, t) { var n = a(t); e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)" } function c() { var e = y(); B(p(), 10), w(e), g(e, "showSweetAlert"), v(e, "hideSweetAlert"), I = t.activeElement; var n = e.querySelector("button.confirm"); n.focus(), setTimeout(function () { g(e, "visible") }, 500) } function l() { var n = y(); T(p(), 5), T(n, 5), v(n, "showSweetAlert"), g(n, "hideSweetAlert"), v(n, "visible"); var o = n.querySelector(".icon.success"); v(o, "animate"), v(o.querySelector(".tip"), "animateSuccessTip"), v(o.querySelector(".long"), "animateSuccessLong"); var r = n.querySelector(".icon.error"); v(r, "animateErrorIcon"), v(r.querySelector(".x-mark"), "animateXMark"); var a = n.querySelector(".icon.warning"); v(a, "pulseWarning"), v(a.querySelector(".body"), "pulseWarningIns"), v(a.querySelector(".dot"), "pulseWarningIns"), e.onkeydown = M, t.onclick = A, I && I.focus(), L = void 0 } function s() { var e = y(); e.style.marginTop = C(y()) } var u = ".sweet-alert", d = ".sweet-overlay", f = ["error", "warning", "info", "success"], y = function () { return t.querySelector(u) }, p = function () { return t.querySelector(d) }, m = function (e, t) { return new RegExp(" " + t + " ").test(" " + e.className + " ") }, g = function (e, t) { m(e, t) || (e.className += " " + t) }, v = function (e, t) { var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " "; if (m(e, t)) { for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " "); e.className = n.replace(/^\s+|\s+$/g, "") } }, b = function (e) { var n = t.createElement("div"); return n.appendChild(t.createTextNode(e)), n.innerHTML }, h = function (e) { e.style.opacity = "", e.style.display = "block" }, w = function (e) { if (e && !e.length) return h(e); for (var t = 0; t < e.length; ++t) h(e[t]) }, S = function (e) { e.style.opacity = "", e.style.display = "none" }, x = function (e) { if (e && !e.length) return S(e); for (var t = 0; t < e.length; ++t) S(e[t]) }, k = function (e, t) { for (var n = t.parentNode; null !== n;) { if (n === e) return !0; n = n.parentNode } return !1 }, C = function (e) { e.style.left = "-9999px", e.style.display = "block"; var t = e.clientHeight, n = parseInt(getComputedStyle(e).getPropertyValue("padding"), 10); return e.style.left = "", e.style.display = "none", "-" + parseInt(t / 2 + n) + "px" }, B = function (e, t) { t = t || 16, e.style.opacity = 0, e.style.display = "block"; var n = +new Date, o = function () { e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(o, t) }; o() }, T = function (e, t) { t = t || 16, e.style.opacity = 1; var n = +new Date, o = function () { e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(o, t) : e.style.display = "none" }; o() }, E = function (n) { if (MouseEvent) { var o = new MouseEvent("click", { view: e, bubbles: !1, cancelable: !0 }); n.dispatchEvent(o) } else if (t.createEvent) { var r = t.createEvent("MouseEvents"); r.initEvent("click", !1, !1), n.dispatchEvent(r) } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick() }, q = function (t) { "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0) }, I, A, M, L; e.sweetAlert = e.swal = function () { function n(e) { var t = e.keyCode || e.which; if (-1 !== [9, 13, 32, 27].indexOf(t)) { for (var n = e.target || e.srcElement, o = -1, r = 0; r < h.length; r++) if (n === h[r]) { o = r; break } 9 === t ? (n = -1 === o ? v : o === h.length - 1 ? h[0] : h[o + 1], q(e), n.focus(), i(n, u.confirmButtonColor)) : (n = 13 === t || 32 === t ? -1 === o ? v : void 0 : 27 !== t || b.hidden || "none" === b.style.display ? void 0 : b, void 0 !== n && E(n, e)) } } function a(e) { var t = e.target || e.srcElement, n = e.relatedTarget, o = m(d, "visible"); if (o) { var r = -1; if (null !== n) { for (var a = 0; a < h.length; a++) if (n === h[a]) { r = a; break } -1 === r && t.focus() } else L = t } } var u = { title: "", text: "", type: null, allowOutsideClick: !1, showCancelButton: !1, confirmButtonText: "确定", confirmButtonColor: "#AEDEF4", cancelButtonText: "Cancel", imageUrl: null, imageSize: null }; if (void 0 === arguments[0]) return e.console.error("sweetAlert expects at least 1 attribute!"), !1; switch (typeof arguments[0]) { case "string": u.title = arguments[0], u.text = arguments[1] || "", u.type = arguments[2] || ""; break; case "object": if (void 0 === arguments[0].title) return e.console.error('Missing "title" argument!'), !1; u.title = arguments[0].title, u.text = arguments[0].text || u.text, u.type = arguments[0].type || u.type, u.allowOutsideClick = arguments[0].allowOutsideClick || u.allowOutsideClick, u.showCancelButton = arguments[0].showCancelButton || u.showCancelButton, u.confirmButtonText = u.showCancelButton ? "Confirm" : u.confirmButtonText, u.confirmButtonText = arguments[0].confirmButtonText || u.confirmButtonText, u.confirmButtonColor = arguments[0].confirmButtonColor || u.confirmButtonColor, u.cancelButtonText = arguments[0].cancelButtonText || u.cancelButtonText, u.imageUrl = arguments[0].imageUrl || u.imageUrl, u.imageSize = arguments[0].imageSize || u.imageSize, u.doneFunction = arguments[1] || null; break; default: return e.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1 } o(u), s(), c(); for (var d = y(), f = function (e) { var t = e.target || e.srcElement, n = "confirm" === t.className, o = m(d, "visible"), a = u.doneFunction && "true" === d.getAttribute("data-has-done-function"); switch (e.type) { case "mouseover": n && (e.target.style.backgroundColor = r(u.confirmButtonColor, -.04)); break; case "mouseout": n && (e.target.style.backgroundColor = u.confirmButtonColor); break; case "mousedown": n && (e.target.style.backgroundColor = r(u.confirmButtonColor, -.14)); break; case "mouseup": n && (e.target.style.backgroundColor = r(u.confirmButtonColor, -.04)); break; case "focus": var i = d.querySelector("button.confirm"), c = d.querySelector("button.cancel"); n ? c.style.boxShadow = "none" : i.style.boxShadow = "none"; break; case "click": n && a && o && u.doneFunction(), l() } }, p = d.querySelectorAll("button"), g = 0; g < p.length; g++) p[g].onclick = f, p[g].onmouseover = f, p[g].onmouseout = f, p[g].onmousedown = f, p[g].onfocus = f; A = t.onclick, t.onclick = function (e) { var t = e.target || e.srcElement, n = d === t, o = k(d, e.target), r = m(d, "visible"), a = "true" === d.getAttribute("data-allow-ouside-click"); !n && !o && r && a && l() }; var v = d.querySelector("button.confirm"), b = d.querySelector("button.cancel"), h = d.querySelectorAll("button:not([type=hidden])"); M = e.onkeydown, e.onkeydown = n, v.onblur = a, b.onblur = a, e.onfocus = function () { e.setTimeout(function () { void 0 !== L && (L.focus(), L = void 0) }, 0) } }, function () { "complete" === t.readyState || "interactive" === t.readyState ? n() : t.addEventListener ? t.addEventListener("DOMContentLoaded", function e() { t.removeEventListener("DOMContentLoaded", arguments.callee, !1), n() }, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function () { "complete" === t.readyState && (t.detachEvent("onreadystatechange", arguments.callee), n()) }) }() }(window, document);

function setGACookie(name, value) {
    var Days = 3;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/"
}
function GetGACookie(cookieName) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        if (cookie.split('=')[0].toString().indexOf(cookieName) != -1) {
            return cookie.split('=')[1].toString();
        }
    }
}

function ChkUser() {
    $.ajaxSetup({ cache: false });
    $.get("/zh-cn/member/Login.aspx?action=chkuser", "", function (rescode) {
        if (rescode == "false") {
            swal({ title: "", text: "您的账号在其他地方登录，登陆失效。", type: "warning" }, function () {
                window.location.href = "/zh-cn/member/Login.aspx";
            });
        }
    });
}

var loginmembername = "";
$(function () {
    loginmembername = GetGACookie("n");
});

$(document).ready(function () {
    var formId = $('#Page').attr('formId');
    $('#Page i').each(function (i) {
        $(this).click(function () {
            $('#pageIndex').val($(this).html());
            $('#' + formId).submit();
        });
        //选择页为黑色
        if ($(this).html() == $('#pageIndex').val()) {
            $(this).parent().css('color', "#000");
            $(this).parent().css('font-weight', "bold");
        }

        //第一页
        if ($('#pageIndex').val() == 1) {
            $('#previousPage').css('display', "none");
 
        } else if ($('#pageIndex').val() == $('#Page i').size()) {//最后一页
            $('#nextPage').css('display', "none");
        } else {
            $('#previousPage').css('display', "inline");
            $('#nextPage').css('display', "inline");
        }
    });
        
    $('#previousPage').click(function () {
        $('#pageIndex').val($('#pageIndex').val() - 1);
        $('#' + formId).submit();
    });
    $('#nextPage').click(function () {
        $('#pageIndex').val(parseInt($('#pageIndex').val()) + 1);
        $('#' + formId).submit();
    });

    if ($('#Page i').size() <= 1) {
        $('#previousPage').css('display', "none");
        $('#nextPage').css('display', "none");
    }
});

function toProductPage(product, oddtype) {
    if (IsLogin == "True") {
        if (product == "agcasino") {
            var url = "/productintegration/ag/Ag_game.aspx?gametype=0" + "&oddtype=" + oddtype;
            window.open(url, "ag", "depended=yes,height=766,width=1290");
        } else if (product == "kipicasino") {
            window.open("/productintegration/agiledeal/login.aspx");
        } else if (product == "keno") {
            window.open("/productintegration/keno/keno.aspx");
        } else if (product == "agbuyu") {
            window.open("/productintegration/ag/Ag_game.aspx?gametype=6");
        } else if (product == "ebet") {
            window.open("/productintegration/ebet/login.aspx");
            //$.post("/Api/GetProductStatus.ashx", { clienttype: 1, action: 'EbetCasino' }, function (res) {
            //    if (res.errcode == 1) {
                    
            //    } else if (res.errcode == 2) {
            //        swal({ title: "", text: res.errmsg, type: "info" });
            //    }
            //});
        }
    } else {
        swal({ title: "", text: "请您先登录再进入游戏", type: "info" });
    }
}

function showCasinoMessage() {

    var url = "/zh-cn/Casino/info.html";
    $("#msgIframe").attr("src", url);
    $('#parentBorder').css({ width: '460px' })
    //  openMessage();

    $(".m_pop").click(function (e) {

        var _target = $(e.target);

        if (_target.closest(".m_pop").length == 1) {
            $(".m_pop").hide();
        }
    });

}

function cookiesEdit(membername) {
    var cookies = document.cookie.split(';');
    var cookieName = "beplaygu";
    var cValue = "";
    var cName = "";
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        if (cookie.indexOf(cookieName) != -1) {
            if (cookie.split('=')[1].toString() == membername) {
                cName = cookie.split('=')[0].toString();
            }
            cValue += cookie.split('=')[1].toString() + "+";
        }
    }
    if (cValue.toString().indexOf(membername) != -1) {
        cValue = cValue.replace(membername + "+", "");
        //setOldCookie(cName, membername.toString());
    } else {
        setCookie(cookieName, membername.toString());
    }
    if (cValue.toString().trim() != "") {
        $.post("/zh-cn/publicView/gu.aspx", { partnerCode: cValue.toString().trim() }, function (response) {
        });
    }
    function setCookie(name, value) {
        var num = RndNum(20);
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = num + name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
    function setOldCookie(name, value) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
    function RndNum(n) {
        var rnd = "";
        for (var i = 0; i < n; i++)
            rnd += Math.floor(Math.random() * 10);
        return rnd;
    }
}

function joinusaff() {
    window.open('/zh-cn/joinus/');
}


function vipArea() {
    swal({ title: "贵宾入口", text: "贵宾区需要申请" });
}


