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

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    //连接数据库
    mysql::init_db_pool().await?;
    // 日志系统
    log::start_logs();
    let app = routers();
    let addr = SocketAddr::from_str("127.0.0.1:5050").unwrap();
    // axum::Server::bind(&"0.0.0.0:5000".parse().unwrap()) 与上相同
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
    Ok(())
}
