var style = document.createElement('style'),
     weui = document.createElement('link');
    weui.rel = 'stylesheet';
    weui.href = 'https://res.wx.qq.com/open/libs/weui/0.4.2/weui.min.css';
    document.head.appendChild(weui);
    style.innerText = '.truckhome-account-binding{position: fixed;left:0;top:0;width:100%;\
                    height:100%;overflow: hidden;background-color: #fbf9fe;z-index: 1001;\
                    visibility: hidden;opacity:0;pointer-events: none;-webkit-transform: translate3d(0,100%,0);\
                    transform: translate3d(0,100%,0);-webkit-transition: all .2s ease-out;transition: all .2s ease-out}\
                    .truckhome-account-binding.visible{-webkit-transform: translate3d(0,0,0);transform: translate3d(0,0,0);\
                    opacity: 1;visibility: visible;pointer-events: all;}.weui_vcode .weui_cell_ft .vcode{margin-left: 5px;\
                    width:107px;height: 44px;line-height:44px;vertical-align: middle;display:inline-block;color:#fff;\
                    font-size: 14px;text-align: center;background:rgba(4,190,2,1)}.weui_vcode .weui_cell_ft .vcode.disabled{color:#999;background: #f5f5f5}\
                    .truckhome-account-binding .weui_btn_area{display: -webkit-box;display: -webkit-flex;display: flex;}\
                    .truckhome-account-binding .weui_btn_area > *{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1}\
                    .truckhome-account-binding .weui_btn_area input[type="submit"]{margin:0 0 0 10px;border-radius: 5px;}\
                    .truckhome-account-binding .weui_btn_area input[disabled]{opacity: 1}.truckhome-account-binding .weui_label{width:80px}';
    document.head.appendChild(style);