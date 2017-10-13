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
                <input type="hidden" name="referer" value="\'+ location.href +\'" />\
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
export default tel_signin