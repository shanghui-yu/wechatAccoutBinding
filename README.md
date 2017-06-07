# Unfield
微信账号授权与绑定登录，切换原站登录
## 提纲
- 卡车之家账号登录
- 手机号码绑定

### 状态初始化 

状态名称 | 取值范围 | 状态说明
---|---|---
bindStatus | 0,1 | 账号绑定状态
mode | 'binding,'signin' | 当前选择模式 绑定或登录
OAuthStatus | 0,1 | 授权状态

### checkBind (检查绑定状态)

	```
	Action: //sso.360che.com/?c=user
	Method: GET
	```
	后端curl该接口需要把当前cookir和User-Agent模拟传入

	#### Response
	```
    status: 'ok',                  //登录状态： ok已登录、err未登录
    info: {                        //登录用户信息，未登录为false
        uid: '392484',             //用户uid
        username: 'username',      //用户名
        nickname: 'nickname'       //昵称
    },
    msg: "Already logged in"       //已登录Already logged in、未登录Not logged in
		
	```

### checkOAuth (微信授权)
	```
	Action: //sso.360che.com/index.php?c=weChatOauthUrl&m=getAuthUrl
	Method: GET
	```

	#### Response

	##### 已授权
	```
		status: 'err', // 错误
		info: '', 
		msg: '已授权'
	```
	##### 未授权
	```
		status: 'ok', // 错误
		info: {
			url: 'https://open....'
		},
		msg: '未授权'
	```


### show (显示绑定/登录弹层)

### hide (隐藏绑定/登录弹层)

### switch (切换绑定/登录)
switch mode

### modal (状态提示)
	- alert
	- toast

### vcode (获取验证码)
	```
	Action：//sso.360che.com/index.php?c=phone&m=getPhoneCodeByLogin
	Method：POST
	Pattern: ^1(([38]\d)|(4[57])|(5[012356789])|(7[012356789]))\d{8}$
	```

	#### parameter
	参数名称 | 参数类型 | 是否必选 | 备注
	---|---
	tel | string | 1 | 手机号



	#### Response
	##### ERROR
	```
		status: 'err', // 错误
		info: 'tel', // 错误参数的名称 例如：手机号格式错误
		msg: '提交参数错误！'
	```
	##### SUCCESS
	```
		status: 'ok', // 错误
		info: '',
		msg: '验证码已成功发送，请注意查收'
	```
	

### countdown (倒计时)
	60S

### onInputHandle
	输入检测，用于激活提交按钮 
	en(dis)abled submitButton

### submit (提交)
	#### 原站登录

	```
	Action：//sso.360che.com/index.php?c=login&m=login
	Method：POST
	```

	#### parameter
	参数名称 | 参数类型 | 是否必选 | 备注
	---|---
	username | string | 1 | 用户名或手机号
	password | string | 1 | 密码
	referer | string | 1 | 来源
	
	#### Response
	##### ERROR
	```
		status: 'err', // 错误
		info: 'field', // 错误参数的名称
		msg: '提交参数错误！'	// 提交参数错误！| 用户名或密码错误 
	```
	##### SUCCESS
	```
		status: 'ok',
		info: {
	    location: '//www.360che.com/',       //登陆成功跳转链接
	    uid: '392484'         							//登陆成功uid
	  },
		msg: '登录成功'
	```


	#### 手机号绑定
	

	```
	Action：//sso.360che.com/index.php?c=login&m=login
	Method：POST
	```
	#### parameter
	参数名称 | 参数类型 | 是否必选 | 备注
	---|---
	phone | string | 1 | 手机号
	phonecode | string | 1 | 验证码
	referer | string | 1 | 来源

	#### Response
	##### ERROR
	```
		status: 'err', // 错误
		info: 'field', // 错误参数的名称
		msg: '提交参数错误！'	// 提交参数错误！| 手机号或验证码错误 
	```
	##### SUCCESS
	```
		status: 'ok',
		info: {
	    uid: '34432',       // 用户id
	    auth: '344fsdadfs'    
	  },
		msg: '绑定成功'
	```

	
