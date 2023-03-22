use jsonwebtoken::{DecodingKey, EncodingKey};
use once_cell::sync::Lazy;
use std::env;

///环境变量密钥，
pub static KEYS: Lazy<Keys> = Lazy::new(|| {
    let secret = env::var("JWT_SECRET").expect("JWT_SECRET must be set");
    // Keys::new(secret.as_bytes())
    Keys::new(secret.as_ref())
});

///认证错误类型
#[derive(Debug)]
pub enum AuthError {
    WrongCredentials,   //错误的凭据
    MissingCredentials, //丢失凭据
    TokenCreation,      //令牌创建
    InvalidToken,       //无效令牌
}
pub struct Keys {
    pub encoding: EncodingKey,
    pub decoding: DecodingKey,
}
impl Keys {
    fn new(secret: &[u8]) -> Self {
        Self {
            encoding: EncodingKey::from_secret(secret),
            decoding: DecodingKey::from_secret(secret),
        }
    }
}
