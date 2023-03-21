use serde::{Deserialize, Serialize};
use sqlx::{Decode, Encode, FromRow, Type};

//token结构体
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct AuthToken {
    pub access_token: String,
    pub token_type: String,
}

impl AuthToken {
    pub fn new(access_token: String) -> Self {
        Self {
            access_token,
            token_type: "Bearer".to_string(),
        }
    }
}

//注册请求体
#[derive(Debug, Clone, Deserialize, Serialize, Decode, Encode, Type, FromRow)]
pub struct AuthPayload {
    pub password: String,
    pub username: String,
    pub cred: String,
    pub email: String,
}

// 信息列表请求体
#[derive(Debug, Clone, Deserialize, Serialize, Decode, Encode, Type, FromRow)]
pub struct LianxXiPayload {
    pub name: String,
    pub age: i32,
    pub create_date: String,
    pub update_date: String,
}

//Token 生成
#[derive(Debug, Clone, Deserialize, Serialize, Decode, Encode, Type, FromRow)]
pub struct AuthPayToken {
    pub password: String,
    pub username: String,
    pub exp: Option<i32>,
}
//登录请求体
#[derive(Debug, Clone, Deserialize, Serialize, Decode, Encode, Type, FromRow)]
pub struct LoginPayload {
    pub username: String,
    pub password: String,
}

//登录响应体
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct LoginResponse {
    pub username: String,
    pub access_token: String,
    pub token_type: String,
}
