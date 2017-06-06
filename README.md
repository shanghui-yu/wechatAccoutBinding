# Unfield
微信账号授权与绑定登录，切换原站登录
## 提纲
- 卡车之家账号登录
- 手机号码绑定

- 状态初始化 

```
bindUserid
BindStatus	账号绑定状态
mode: 'binding || signin'
OAuthStatus 授权状态
unionid			微信unionid
```

- checkBind (检查绑定状态)
	//sso.360che.com/index.php
	parameter: {
		c: 'user'	
	}

- checkOAuth (微信授权)
	//sso.360che.com/index.php
	parameter: {
		c: 'weChatOauthUrl',
		m: 'getAuthUrl'
	}
	response


- show (显示绑定/登录弹层)


- hide (隐藏绑定/登录弹层)

- switch (切换绑定/登录)
mode

- modal (状态提示)
	- alert
	- toast

- vcode (获取验证码)
	://sso.360che.com/index.php
	parameter: {
		c: 'phone',
		m: 'getPhoneCodeByLogin',
		tel: 
	}

- countdown (倒计时)

- onInputHandle
	输入检测，en(dis)abled submitButton

- submit (提交)
	原站登录
	//sso.360che.com/index.php?c=login&m=login&cookietime=1
	mod:logging
	loginsubmit:yes
	getjson:1
	username
	password		须做MD5加密

	手机号绑定
	//sso.360che.com/index.php?c=login&m=login
	mod: register
	getjson: 1
	loginsubmit: yes
	regsubmit: yes
	tel: 
	yzm: 
	pattern: ^1(([38]\d)|(4[57])|(5[012356789])|(7[012356789]))\d{8}$
