define(["jquery", "form", "cookie"], function($){
    $("#login-form").submit(function(){

        $(this).ajaxSubmit({
            url: "/api/login",
            type: "post",
            success: function(data){
                if(data.code == 200){
                    $.cookie("userinfo", JSON.stringify(data.result), {path: "/",expires:20});
                    location.href = "/";
                }
            }
        });
        return false;
    })  
})
