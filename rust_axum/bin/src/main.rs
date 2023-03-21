use axum;
use std::{net::SocketAddr, str::FromStr};
use routers::{
    init::routers
};
use db::{
    mysql
};
use common::{
    log
};
use password_hash::{PasswordHash};
// use argon2::Argon2;
// use pbkdf2::Pbkdf2;
// use scrypt::Scrypt;

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    //连接数据库
    mysql::init_db_pool().await?;
    // 日志系统
    log::start_logs();
    let hash_string = "$argon2i$v=19$m=65536,t=1,p=1$c29tZXNhbHQAAAAAAAAAAA$+r0d29hqEB0yasKr55ZgICsQGSkl0v0kgwhd+U3wyRo";

    let password_hash = PasswordHash::new(&hash_string).expect("invalid password hash");
    println!("{:#?}",password_hash);
    let app = routers();
    let addr = SocketAddr::from_str("127.0.0.1:5050").unwrap();
    // axum::Server::bind(&"0.0.0.0:5000".parse().unwrap()) 与上相同
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
    Ok(())
}
