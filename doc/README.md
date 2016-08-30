# notex-doc

## 文档

### spring-boot

http://docs.spring.io/spring-boot/docs/1.4.0.RELEASE/reference/htmlsingle/

### spring-security

http://docs.spring.io/spring-security/site/docs/4.1.3.RELEASE/reference/htmlsingle/

### spring-data-mongodb

http://docs.spring.io/spring-data/data-mongo/docs/1.9.2.RELEASE/reference/html/

## API

|url|method|body|ret|说明|
|---|---|---|---|---|
|/api/note|get|---|[{userId,text,title,url,noteId,tags,time},{},{}]|获取note列表|
|/note/<noteId>|get|---|{userId,text,title,url,noteId,tags,time}|获取note|
|/note|post|{userId,text,title,url,tags,time}|{userId,text,title,url,tags，noteId,time}|创建note|
|/note/<noteId>|put|{userId,text,title,url,tags,time,noteId}|{userId,text,title,url,tags，noteId,time}|修改note|
|/note/<noteId>|delete|---|---|删除note|
|/query?userId=x&text=y|get|---|[{userId,text,title,url,noteId,tags,time},{},{}]|搜索|
|/user/register|post|{username,password,rePassword}|{status:(true,false)}|用户注册|
|/user/login|post|{username,password}|{status:(true,false),userId}|用户登录|
|/user/username|get|---|已登录{userId}，未登录{}|用户登录|
