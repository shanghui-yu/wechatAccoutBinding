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
                <input type="hidden" name="referer" value="\'+ location.href +\'" />\
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
export default tel_binding