
$(function () {
    $("#userName").focus(function () {


        if ($("#user_Error").hasClass("r_s_error")) {
            $("#user_Error").removeClass("r_s_error").addClass("r_s_tips");
            $("#user_Error").text("*用户名由5-15个字符（A-Z ,a-z,0-9）组成");

        }
         $(this).parent().next('.r_s_box').slideDown()
            });
    $("#userName").keyup(function () {
        var reg = new RegExp("^[A-Za-z0-9]{5,15}$");
        var MemberName = $(this).val();
        var vlname = reg.test($(this).val());
        if (vlname) {
            $.ajax({
                type: "post",
                url: "Registered.aspx/MemberNameChk",
                contentType: "application/json; charset=utf-8",
                data: "{'MemberName':'" + MemberName + "'}",
                dataType: "json",
                success: function (datas) {
                    var obj = eval('(' + datas.d + ')');
                    if (obj.status.code == 0) {
                        $("#user_Error").show();
                        $("#user_Error").html('<div class="e_ok"></div>');
                    } else if (obj.status.code == 1) {
                        $("#user_Error").show();
                        Singletips("user_Error", '用户名已存在！')
                    }
                },
                error: function (err) {
                }
            }, 'json');
        } else {
            $("#user_Error").removeClass("r_s_error").addClass("r_s_tips");
            $("#user_Error").text("*用户名由5-15个字符（A-Z ,a-z,0-9）组成");
        }
    });
    $("#Password").focus(function () {
        if ($("#password_Error").hasClass("r_s_error")) {
            $("#password_Error").removeClass("r_s_error").addClass("r_s_tips");
            $("#password_Error").text("*密码由8-20个字符组成,区分大小写");
        }
        $(this).parent().next('.r_s_box').slideDown()
    });

    $("#Password").keyup(function () {
        var Password = $(this).val();
        var pwdreg = new RegExp("^.{8,20}$");
        if (pwdreg.test(Password)) {
            $("#password_Error").html('<div class="e_ok"></div>');
        } else {
            $("#password_Error").removeClass("r_s_error").addClass("r_s_tips");
            $("#password_Error").text("*密码由8-20个字符组成,区分大小写");
        }
    });

    $("#Passwordcof").keyup(function () {
        var Password = $("#Password").val();
        var Passwordcof = $(this).val();
        var pwdreg = new RegExp("^.{8,20}$");
        if (pwdreg.test(Passwordcof)) {
            if (Password == Passwordcof){
                $("#passwordcof_Error").html('<div class="e_ok"></div>');
            } else {
                if (Password.length <= Passwordcof.length) {
                    Singletips("passwordcof_Error", "两次输入的密码不一致！");
                } else {
                    $("#passwordcof_Error").removeClass("r_s_error").addClass("r_s_tips");
                    $("#passwordcof_Error").text("*密码由8-20个字符组成,区分大小写");
                }
            }
        } else {
            $("#passwordcof_Error").removeClass("r_s_error").addClass("r_s_tips");
            $("#passwordcof_Error").text("*密码由8-20个字符组成,区分大小写");
        }
    });

    $("#Passwordcof").focus(function () {
        if ($("#passwordcof_Error").hasClass("r_s_error")) {
            $("#passwordcof_Error").removeClass("r_s_error").addClass("r_s_tips");
            $("#passwordcof_Error").text("*请再次输入密码");
        }
        $(this).parent().next('.r_s_box').slideDown()
    });
    $("#code").focus(function () {
        if ($("#code_Error").hasClass("r_s_error")) {
            $("#code_Error").removeClass("r_s_error").addClass("r_s_tips");
            $("#code_Error").text("");
        }
        if (!$(this).parent().next('.r_s_box').is(":hidden")) {
            $(this).parent().next('.r_s_box').slideDown();
        }        
    });

    $('#code').keyup(function () {

        if(  $(this).val()==''){
            $("#codeor").html('<div class="e_ok"></div>');
            $("#codeor").text("*请输入验证码");


        }

    })

});

function onclicks() {
    $("#codeImg").attr("src", "http://www.beplay.lol/zh-cn/publicView/captcha.aspx?" + Date.now());
}


$(document).keyup(function(event){
    
    switch(event.keyCode) {
        case 13:
            if( $(event.target).attr("type")=='text' || $(event.target).attr("type")=='password' || $(event.target).val().length>0 ){

            $("#submit_rg").click();
            }

    }
});


var handlerEmbed = function (captchaObj) {
    $("#submit_rg").click(function () {
        var MemberName = $("#userName").val();
        var Password = $("#Password").val();
        var Passwordcof = $("#Passwordcof").val();
        var $submit_rg = $("#submit_rg");
        var Result = Verification(MemberName, Password, Passwordcof);
        var challenge = $("input[name='geetest_challenge']").val();
        var validate = $("input[name='geetest_validate']").val();
        var seccode = $("input[name='geetest_seccode']").val();
        if (Result) {
            $.ajax({
                headers: { 
                    Referer : "http://www.beplay.lol/zh-cn/member/Registered.aspx"
                },
                type: "post",
                url: "Registered.aspx/MemberRegistered",
                contentType: "application/json; charset=utf-8",
                data: "{'MemberName':'" + MemberName + "','Password':'" + Password + "','challenge':'" + challenge + "','validate':'" + validate + "','seccode':'" + seccode + "'}",
                dataType: "json",
                beforeSend: function () {   //触发ajax请求开始时执行
                    $submit_rg.text('提交中...').attr("disabled", "disabled");
                },
                success: function (datas) {
                    var obj = eval('(' + datas.d + ')');
                    if (obj.status.code == 88) {
                        cookiesEdit(MemberName);
                        captchaObj.reset();
                        window.location.href = '/zh-cn/member/Registeredok.aspx';
                    } else if (obj.status.code == 1) {
                        swal({ title: "", text: obj.status.Message, type: "warning" });
                        captchaObj.reset();
                    } else if (obj.status.code == 2) {
                        Singletips("user_Error", obj.status.Message);
                        $("#Password").val("");
                        $("#Passwordcof").val("");
                        captchaObj.reset();
                    }
                    else if (obj.status.code == 404) {
                        swal({ title: "", text: obj.status.Message, type: "warning" });
                        $("#Password").val("");
                        $("#Passwordcof").val("");
                        captchaObj.reset();
                    }
                    $submit_rg.text('注 册').removeAttr("disabled");
                },
                error: function (err) {
                    $submit_rg.text('注 册').removeAttr("disabled");
                }
            }, 'json');
        }
    });

    captchaObj.appendTo("#embed-captcha");

};
$.ajax({

    url: "http://www.beplay.lol/zh-cn/publicView/getcaptcha.aspx?t=" + (new Date()).getTime(), // 加随机数防止缓存
    type: "get",
    dataType: "json",
    success: function (data) {
        initGeetest({
            gt: data.gt,
            challenge: data.challenge,
            product: "embed", // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
            offline: !data.success, 
            new_captcha: data.new_captcha
        }, handlerEmbed);
    }
});




//单个错误提醒
function Singletips(tag, message) {
    $("#" + tag).removeClass("r_s_tips").addClass("r_s_error");
    $("#" + tag).html('<div class="e_icon"></div>' + message);

}
function Verification(MemberName, Password, Passwordcof, code) {

    if ((MemberName == "" || MemberName == null)) {
        Singletips("user_Error", "用户名不能为空！");
        return false;
    }

    var reg = new RegExp("^[A-Za-z0-9]{5,15}$");
    var vlname = reg.test(MemberName);
    if (vlname == false) {
        Singletips("user_Error", "用户名请输入5-15个字符（A-Z ,a-z,0-9）");
        return false;
    }

    if ((Password == "" || Password == null)) {
        Singletips("password_Error", "密码不能为空！");
        return false;
    }
    

    var pwdreg = new RegExp("^.{8,20}$");
    if (!pwdreg.test(Password)) {
        Singletips("password_Error", "密码请输入8-20个字符");
        return false;
    }
    if ((Passwordcof == "" || Passwordcof == null)) {
        Singletips("passwordcof_Error", "确认密码不能为空！");
        return false;
    }
    if (Password != Passwordcof) {
        Singletips("passwordcof_Error", "两次输入的密码不一致！");
        return false;
    }
    return true;
}
