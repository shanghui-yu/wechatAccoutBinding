!function(){
    // 寻找祖先元素
    if(!HTMLElement.prototype.parents){
        HTMLElement.prototype.parents=function(b){for(var c,a=this;(a=a.parentNode)&&9!==a.nodeType;)if(1===a.nodeType)if(a.tagName.toLowerCase()===b){c=a;break}else if(b.startsWith(".")&&a.classList.contains(b.replace(/\./,""))){c=a;break}else if(b.startsWith("#")&&"#"+a.id===b){c=a;break}return c};
    };
    function accountBinding(){
        define(function(require,exports){
            var style = document.createElement('style'),
                weui = document.createElement('link');
                weui.rel = 'stylesheet';
                weui.href = 'https://res.wx.qq.com/open/libs/weui/0.4.2/weui.min.css';
            document.head.appendChild(weui);
            style.innerText = '.truckhome-account-binding{position: fixed;left:0;top:0;width:100%;height:100%;overflow: hidden;background-color: #fbf9fe;z-index: 1001;visibility: hidden;opacity:0;pointer-events: none;-webkit-transform: translate3d(0,100%,0);transform: translate3d(0,100%,0);-webkit-transition: all .2s ease-out;transition: all .2s ease-out}.truckhome-account-binding.visible{-webkit-transform: translate3d(0,0,0);transform: translate3d(0,0,0);opacity: 1;visibility: visible;pointer-events: all;}.weui_vcode .weui_cell_ft .vcode{margin-left: 5px;width:107px;height: 44px;line-height:44px;vertical-align: middle;display:inline-block;color:#fff;font-size: 14px;text-align: center;background:rgba(4,190,2,1)}.weui_vcode .weui_cell_ft .vcode.disabled{color:#999;background: #f5f5f5}.truckhome-account-binding .weui_btn_area{display: -webkit-box;display: -webkit-flex;display: flex;}.truckhome-account-binding .weui_btn_area > *{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1}.truckhome-account-binding .weui_btn_area input[type="submit"]{margin:0 0 0 10px;border-radius: 5px;}.truckhome-account-binding .weui_btn_area input[disabled]{opacity: 1}.truckhome-account-binding .weui_label{width:80px}';
            document.head.appendChild(style);
            var tel_signin = '<form method="POST" action="https:///sso.360che.com/index.php?c=login&m=login" autocomplete="off">\
                <div class="weui_cells_title">\u5361\u8f66\u4e4b\u5bb6\u8d26\u53f7\u767b\u5f55</div>\
                <div class="weui_cells weui_cells_form">\
                    <div class="weui_cell">\
                        <div class="weui_cell_hd"><label class="weui_label">\u7528\u6237\u540d</label></div>\
                        <div class="weui_cell_bd weui_cell_primary">\
                            <input class="weui_input" type="text" name="username" placeholder="\u8bf7\u8f93\u5165\u60a8\u7684\u7528\u6237\u540d/\u624b\u673a\u53f7">\
                        </div>\
                        <div class="weui_cell_ft">\
                            <i class="weui_icon_warn"></i>\
                        </div>\
                    </div>\
                    <div class="weui_cell">\
                        <div class="weui_cell_hd"><label class="weui_label">\u5bc6\u7801</label></div>\
                        <div class="weui_cell_bd weui_cell_primary">\
                            <input class="weui_input" type="password" name="password" placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801">\
                        </div>\
                        <div class="weui_cell_ft">\
                            <i class="weui_icon_warn"></i>\
                        </div>\
                    </div>\
                </div>\
                <input type="hidden" name="referer" value="\'+ document.referrer ? document.referrer : location.href +\'" />\
                <div class="weui_btn_area">\
                    <a href="javascript:;" class="weui_btn weui_btn_default">\u53d6\u6d88</a>\
                    <input type="submit" class="weui_btn weui_btn_primary weui_btn_disabled" value="\u767b\u5f55" disabled />\
                </div>\
            </form>\
            <div class="weui_msg">\
                <div class="weui_extra_area">\
                    <a href="javascript:;" class="account_switch">\u624b\u673a\u53f7\u7801\u7ed1\u5b9a</a>\
                </div>\
            </div>';

            var tel_binding = '<form method="POST" action="https://sso.360che.com/index.php?c=login&m=login&auth=1" autocomplete="off">\
                <div class="weui_cells_title">\u624b\u673a\u53f7\u7801\u7ed1\u5b9a</div>\
                <div class="weui_cells weui_cells_form">\
                    <div class="weui_cell">\
                        <div class="weui_cell_hd"><label class="weui_label">\u624b\u673a\u53f7</label></div>\
                        <div class="weui_cell_bd weui_cell_primary">\
                            <input class="weui_input" type="tel" name="phone" placeholder="\u8bf7\u8f93\u5165\u624b\u673a\u53f7" maxlength="11" />\
                        </div>\
                        <div class="weui_cell_ft">\
                            <i class="weui_icon_warn"></i>\
                        </div>\
                    </div>\
                    <div class="weui_cell weui_vcode">\
                        <div class="weui_cell_hd"><label class="weui_label">\u9a8c\u8bc1\u7801</label></div>\
                        <div class="weui_cell_bd weui_cell_primary">\
                            <input class="weui_input" type="tel" name="phonecode" placeholder="\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801" value="" maxlength="4" />\
                        </div>\
                        <div class="weui_cell_ft">\
                            <i class="weui_icon_warn"></i>\
                            <span class="vcode">\u83b7\u53d6\u9a8c\u8bc1\u7801</span>\
                        </div>\
                    </div>\
                </div>\
                <input type="hidden" name="referer" value="\'+ document.referrer ? document.referrer : location.href +\'" />\
                <div class="weui_btn_area">\
                    <a href="javascript:;" class="weui_btn weui_btn_default">\u53d6\u6d88</a>\
                    <input type="submit" class="weui_btn weui_btn_disabled weui_btn_primary" value="\u7ed1\u5b9a" disabled />\
                </div>\
            </form>\
            <div class="weui_msg">\
                <div class="weui_extra_area">\
                    <a href="javascript:;" class="account_switch">\u5361\u8f66\u4e4b\u5bb6\u8d26\u53f7\u767b\u5f55</a>\
                </div>\
            </div>';
            var container = document.querySelector('#truckhome_account_binding');
            var unionid = document.cookie.match(/AbcfN_unionid=([^;$]+)/);
            if(unionid && unionid[1]){
                Object.defineProperty(window,'unionid',{
                    writable:false,
                    value:unionid[1]
                });
            };

            if(!container){
                container = document.createElement('div');
                container.className = 'truckhome-account-binding';
                container.addEventListener('touchmove',function(e){
                    e.preventDefault();
                });
                document.body.appendChild(container);
            };

            var truckhomeAccountBinding = {
                init:function(){            // 初始化
                    if(window.bindUserid){
                        this.BindStatus = true;
                    }else{
                        this.mode = 'binding';
                        container.classList.contains('visible') && container.classList.remove('visible');
                        this.checkOAuth();
                        this.onInputHandle();
                    }
                },
                checkBind:function(){        // 检查绑定状态
                    var me = this;
                    $.ajax({
                        url: 'https://sso.360che.com/?c=user',
                        dataType: 'jsonp',
                        success: function(res){
                            if(res.status == 'err'){
                                me.BindStatus = false;
                                try{
                                    var saveData = localStorage.getItem('truckhomeAccountBinding');
                                    if(saveData){
                                        saveData = JSON.parse(saveData);
                                        me.show(saveData['callback'] || '');   
                                    }
                                }catch(err){}
                            }else{
                                me.BindStatus = true;    
                            }
                        }
                    });
                },
                checkOAuth: function(){        // 微信授权
                    var me = this;   
                    if(!window.unionid){
                        $.ajax({
                            url: 'https://sso.360che.com/index.php?c=weChatOauthUrl&m=getAuthUrl',
                            dataType: 'jsonp',
                            success: function(res){
                                if(res.status == 'err'){    // 已授权
                                    me.OAuthStatus = true;
                                    me.checkBind();
                                }else{                      // 未授权
                                    me.OAuthStatus = false;
                                    me.OAuthUrl = res.info['url'];
                                }
                            }
                        })
                    }else{
                        this.OAuthStatus = true;
                        this.checkBind();
                    }
                },
                show: function(callback){                    // 显示
                    if(!this.OAuthStatus){
                        var saveData = {
                            "truckhomeAccountBinding":1  
                        };
                        callback && (saveData['callback'] = callback);
                        localStorage.setItem('truckhomeAccountBinding',JSON.stringify(saveData));
                        setTimeout(function(){
                            location.href = truckhomeAccountBinding.OAuthUrl;
                        },20);
                    }else{
                        try{
                            localStorage.getItem('truckhomeAccountBinding') && localStorage.removeItem('truckhomeAccountBinding');
                        }catch(err){};
                        if(!this.BindStatus){
                            container.classList.add('visible');
                            location.hash = '#' + this.mode;
                            if(!container.innerHTML)
                            container.innerHTML = tel_binding;
                            callback && (this.submitCallback = callback);
                        }else{
                            if(callback && Function.isFunction(callback))
                            callback();
                        }
                        window.ga && ga('\u767b\u5f55\u6d41\u7a0b','\u8df3\u51fa\u624b\u673a\u53f7\u7ed1\u5b9a\u5f39\u5c42')
                    }
                },
                hide: function(){                    // 隐藏
                    container.classList.remove('visible');
                    location.hash = '';
                },
                switch: function(){                  // 切换绑定/登录
                    switch (this.mode) {
                        case 'binding':
                            container.innerHTML = tel_signin;
                            this.mode = 'signin';
                            break;
                        case 'signin':
                            container.innerHTML = tel_binding;
                            this.mode = 'binding';
                            break;
                    }
                },
                error: function(s,ele){                   // 错误提示
                    var me = this;
                    if (!this.toptips) {
                        this.toptips = document.createElement('div');
                        this.toptips.className = 'weui_toptips weui_warn js_tooltips';
                        this.toptips.style.zIndex = '1002';
                        document.body.appendChild(this.toptips);
                    }
                    this.toptips.innerHTML = s;
                    this.toptips.style.display = 'block';
                    this.errorTimer && clearTimeout(this.errorTimer);
                    this.errorTimer = setTimeout(function() {
                        me.toptips.style.display = 'none';
                    }, 2e3);
                    if(ele){
                        var cell = ele.parents('.weui_cell');
                        cell && cell.classList.add('weui_cell_warn');
                    }
                },
                toast: function(type, status, msg){      // Toast
                    function toastContent(s) {
                        return '<p class="weui_toast_content">' + s + '</p>';
                    };
                    var loading = '<div class="weui_loading"><div class="weui_loading_leaf weui_loading_leaf_0"></div><div class="weui_loading_leaf weui_loading_leaf_1"></div><div class="weui_loading_leaf weui_loading_leaf_2"></div><div class="weui_loading_leaf weui_loading_leaf_3"></div><div class="weui_loading_leaf weui_loading_leaf_4"></div><div class="weui_loading_leaf weui_loading_leaf_5"></div><div class="weui_loading_leaf weui_loading_leaf_6"></div><div class="weui_loading_leaf weui_loading_leaf_7"></div><div class="weui_loading_leaf weui_loading_leaf_8"></div><div class="weui_loading_leaf weui_loading_leaf_9"></div><div class="weui_loading_leaf weui_loading_leaf_10"></div><div class="weui_loading_leaf weui_loading_leaf_11"></div></div>'
                    var infor = '<i class="weui_icon_toast"></i>';
                    if (!this._toast) {
                        this._toast = document.createElement('div');
                        this._toast.innerHTML = '<div class="weui_mask_transparent"></div><div class="weui_toast"></div>';
                        document.body.appendChild(this._toast);
                    };
                    if (status) {
                        var content = this._toast.querySelector('.weui_toast');
                        switch (type) {
                            case 'loading':
                                this._toast.className = 'weui_loading_toast';
                                content.innerHTML = loading + toastContent(msg);
                            break;
                            default:
                                this._toast.className = '';
                                content.innerHTML = infor + toastContent(msg);
                                var _toast = this._toast;
                                setTimeout(function(){
                                _toast.style.display = 'none';
                                },1e3);
                            break;
                        };
                        this._toast.style.display = 'block';
                    } else {
                     this._toast.style.display = 'none';
                    }
                },
                vcode: function(button){             // 获取验证码
                    var me = this,form = container.querySelector('form'),phone = form.elements['phone'],value = form.data['phone'],pattern = new RegExp('^1(([38]\\d)|(4[57])|(5[012356789])|(7[01678]))\\d{8}$');
                    if(!value){
                        this.error('\u8bf7\u586b\u5199\u624b\u673a\u53f7',phone) // 请填写手机号
                        return;
                    }else if(!pattern.test(value)){
                        this.error('\u624b\u673a\u53f7\u7801\u683c\u5f0f\u9519\u8bef',phone) // 手机号码格式错误
                        return;
                    }
                    this.speed = 61;
                    $.ajax({
                        url: 'https://sso.360che.com/index.php?c=phone&m=getPhoneCodeByLogin',
                        data:{tel: form.data['phone']},
                        dataType: 'jsonp',
                        success: function(res){
                            if(res.status == 'err'){
                                me.error(res.msg);
                            }else{
                                button.classList.add('disabled');
                                me.countdown(button);   
                            }
                        },
                        error:function(){
                            me.error('\u7f51\u7edc\u4e0d\u7ed9\u529b\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'); 
                        }
                    });
                },
                countdown: function(button){
                    var me = this;
                    this.countdownTimer && clearTimeout(this.countdownTimer);
                    if(this.speed == 1){
                        button.classList.remove('disabled');
                        button.innerHTML = '\u91cd\u65b0\u83b7\u53d6';
                    }else{
                        this.speed -= 1;
                        var speed = this.speed + '';
                        speed = speed.length == 1 ? '0'+ speed : speed;
                        button.innerHTML = '\u91cd\u65b0\u83b7\u53d6('+ speed +')'; // 重新获取
                        this.countdownTimer = setTimeout(function(){
                            me.countdown(button);
                        },1e3);
                    }
                },
                onInputHandle: function(){
                    var me = this;
                    container.addEventListener('input',function(e){
                        var target = e.target;
                        if(target.tagName == 'INPUT' && (target.type == 'tel' || target.type == 'password' || target.type == 'text')){
                            var cell = target.parents('.weui_cell');
                            cell && cell.classList.contains('weui_cell_warn') && cell.classList.remove('weui_cell_warn');
                            me.checkSubmit();
                        }
                    });
                },
                checkSubmit: function(){                 // 更改按钮状态
                    var form = container.querySelector('form');
                    var submit = form.querySelector('form input[type="submit"]');
                    switch (this.mode) {
                        case 'binding':
                            if(form.data['phone'] && form.data['phone'].length == 11 && form.data['phonecode'] && form.data['phonecode'].length == 4){
                                this.enabled(submit);
                            }else{
                                this.disabled(submit);
                            }
                            break;
                        case 'signin':
                            if(form.data['username'] && form.data['password']){
                                this.enabled(submit);
                            }else{
                                this.disabled(submit);
                            }
                            break;
                    };
                },
                enabled: function(submit){
                    submit.disabled = false;
                    submit.classList.remove('weui_btn_disabled');
                },
                disabled: function(submit){
                    submit.disabled = true;
                    submit.classList.add('weui_btn_disabled');
                },
                submit: function(e,form){            // 提交
                    e.preventDefault();
                    var submit = form.querySelector('input[type="submit"]'),me = this;
                    this.disabled(submit);
                    this.toast('loading',true,'\u63d0\u4ea4\u4e2d\uff0c\u8bf7\u7a0d\u540e...'); // 提交中，请稍后
                    $.ajax({
                        url: form.action,
                        data: form.data,
                        dataType: 'jsonp',
                        success: function(res){
                            if(res.status == 'ok'){
                                me.hide();
                                me.toast('infor',true,res.msg);
                                // 同步登录
                               /* res.info && res.info['ucsynlogin'] && res.info['ucsynlogin'].forEach(function(url){
                                    var img = new Image();
                                    img.src = url;
                                });*/
                                window.location.reload();
                            }else{
                                me.enabled(submit);
                                me.error(res.msg);
                            };
                            me.toast('loading',false);
                            window.ga && ga('\u767b\u5f55\u6d41\u7a0b','\u7ed1\u5b9a\u6210\u529f')
                        },
                        error:function(){
                            me.enabled(submit);
                            me.error('\u7f51\u7edc\u4e0d\u7ed9\u529b\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'); // 网络不给力
                            me.toast('loading',false);
                        }
                    });
                },
                cancel:function(){                  // 取消绑定
                    if(!location.hash)
                    truckhomeAccountBinding.hide()
                }
            };
            truckhomeAccountBinding.init();
            container.addEventListener('submit',function(e){
                var form = e.target;
                if(form.tagName == 'FORM')
                truckhomeAccountBinding.submit(e,form);
            });
            container.addEventListener('click',function(e){
                var target = e.target;
                if(target.tagName == 'A'){
                    if(target.className == 'account_switch')
                    truckhomeAccountBinding.switch()
                    if(target.className == 'weui_btn weui_btn_default')
                    truckhomeAccountBinding.hide();
                }
                if(target.tagName == 'SPAN' && target.className == 'vcode')
                truckhomeAccountBinding.vcode(target);
            });
            window.addEventListener('hashchange',function(){
                truckhomeAccountBinding.cancel();
            });
            window.truckhomeAccountBinding = truckhomeAccountBinding;
        });
    };
    if(!window.define){
        var tjs = document.createElement('script');
        tjs.src = 'https://s.kcimg.cn/public/m/js/t.min.js';
        tjs.onload = function(){
            accountBinding();
        };
        document.body.appendChild(tjs);
    }else{
        accountBinding();
    }
}();
