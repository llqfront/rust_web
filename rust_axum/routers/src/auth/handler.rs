use super::{
    dto::{AuthPayToken, AuthPayload, AuthToken, LianxXiPayload, LoginPayload, LoginResponse},
    servers,
};
use axum::{
    http::header::{HeaderMap, SET_COOKIE},
    response::IntoResponse,
    Json,
};
use common::response::RespVO;
use jsonwebtoken::{encode, Header};
use middleware::jwt::KEYS;
const COOKIE_NAME: &'static str = "MERGE_TOKEN";

//注册
pub async fn authorize(Json(payload): Json<AuthPayload>) -> impl IntoResponse {
    // 检查用户名
    if payload.username.is_empty() {
        return Json(RespVO::<AuthToken>::from_error("用户名不能为空！"));
    } else if payload.password.is_empty() {
        return Json(RespVO::<AuthToken>::from_error("密码不能为空！"));
    }
    // 查询用户是否注册过
    let search_result = servers::show(&payload.username).await;
    match search_result {
        Ok(res) => {
            // 查询用户存
            if payload.username == res.username {
                return Json(RespVO::<AuthToken>::from_result_tip("用户名已注册！"));
            };
        }
        Err(_err) => {
            // 查询用户不存在
        }
    }

    let result = servers::create(payload.clone()).await;
    match result {
        Ok(res) => {
            if res == 1 {
                Json(RespVO::<AuthToken>::from_result_tip("注册成功！"))
            } else {
                Json(RespVO::<AuthToken>::from_error("写入数据库失败！"))
            }
        }
        Err(err) => {
            let info = err.to_string();
            Json(RespVO::<AuthToken>::from_error(&info))
        }
    }
}

//创建token
fn init_token(payload: AuthPayload) -> String {
    let claims = AuthPayToken {
        username: payload.username.to_owned(),
        password: payload.password.to_owned(),
        exp: Some(2000000000),
    };
    //创建token， Create the authorization token
    let token = encode(&Header::default(), &claims, &KEYS.encoding)
        .map_err(|_| Json(RespVO::<AuthToken>::from_error("token创建失败！")))
        .unwrap();
    token
}
//登录
pub async fn login(Json(body): Json<LoginPayload>) -> (HeaderMap, Json<RespVO<LoginResponse>>) {
    let mut headers = HeaderMap::new();
    let result = servers::show(&body.username).await;
    match result {
        Ok(res) => {
            if body.password != res.password {
                return (
                    headers,
                    Json(RespVO::<LoginResponse>::from_error("密码错误！")),
                );
            }
            let token = init_token(res.clone());
            // 3、把token写入cookie
            // response.addHeader("Set-Cookie", "uid=112; Path=/; Secure; HttpOnly");
            let cookie = format!("{}={};HTTPOnly", COOKIE_NAME, &token);
            headers.insert(SET_COOKIE, cookie.as_str().parse().unwrap()); // 设置Cookie
                                                                          // 4、token 返回给用户
            let arg = AuthToken::new(token);
            let params = LoginResponse {
                username: res.username,
                access_token: arg.access_token,
                token_type: arg.token_type,
            };
            (headers, Json(RespVO::<LoginResponse>::from_result(&params)))
        }
        Err(_err) => (
            headers,
            Json(RespVO::<LoginResponse>::from_error("用户名无效！")),
        ),
    }
}
//查询用户信息列表
pub async fn get_user_list() -> impl IntoResponse {
    let result = servers::list().await;
    match result {
        Ok(res) => Json(RespVO::<Vec<LianxXiPayload>>::from_result(&res)),
        Err(err) => {
            let info = err.to_string();
            Json(RespVO::<Vec<LianxXiPayload>>::from_error(&info))
        }
    }
}
