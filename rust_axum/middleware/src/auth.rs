use axum::{
    async_trait,
    extract::{
        FromRequestParts,
    },
    http::{
        StatusCode,
        request::Parts
    },
    Json
};
use super::jwt::KEYS;
use common::{
    response::RespVO,
    cookie::{
        get_cookie
    }
};

use jsonwebtoken::{decode, Validation};
use serde::{Deserialize, Serialize};
use sqlx::{Decode, Encode, Type};

// An extractor that performs authorization.
#[derive(Debug, Clone, Serialize, Deserialize, Decode, Encode, Type)]
pub struct Claims {
    pub username: String,
    pub password: String,
    pub exp: Option<i32>,
}


#[async_trait]
impl<S> FromRequestParts<S> for Claims
where
    S: Send + Sync,
{
    type Rejection = Json<RespVO<String>>;
    async fn from_request_parts(parts: &mut Parts, _state: &S) -> Result<Self, Self::Rejection> {
        // let TypedHeader(Authorization(bearer)) = parts
        //     .extract::<TypedHeader<Authorization<Bearer>>>()
        //     .await
        //     .map_err(|_| {
        //         Json(RespVO::<String>::from_error_info(
        //             StatusCode::UNAUTHORIZED,
        //             "未认证",
        //         ))
        //     })?;

        // Decode the user data
        // let token = bearer.token();
        // let token_data = decode::<Claims>(&token.to_string(), &KEYS.decoding, &Validation::default())
        //     .map_err(|_| {
        //     Json(RespVO::<String>::from_error_info(
        //         StatusCode::UNAUTHORIZED,
        //         "token无效",
        //     ))
        // })?;

        // Ok(token_data.claims)
        // 方式二，自动获取token
        let token = get_cookie(&parts.headers,"MERGE_TOKEN");
        // println!("{:#?}",token);
        // println!("{:#?}",bearer.token());
        match token {
            Some(token) => {
                let token_data = decode::<Claims>(&token.to_string(), &KEYS.decoding, &Validation::default())
                    .map_err(|_| {
                    Json(RespVO::<String>::from_error_info(
                        StatusCode::UNAUTHORIZED,
                        "token无效",
                    ))
                })?;
                Ok(token_data.claims)
            }
            _ => Err(
                Json(RespVO::<String>::from_error_info(
                    StatusCode::UNAUTHORIZED,
                    "未认证",
                ))
            ),
        }
    }
}
