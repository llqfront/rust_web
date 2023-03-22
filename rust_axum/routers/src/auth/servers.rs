use super::dto::{AuthPayload, LianxXiPayload};
use db::mysql;
use sqlx::{self, Error};
pub async fn create(user: AuthPayload) -> Result<u64, Error> {
    let sql = "insert into user(email, username, cred, password) values (?, ?, ?, ?)";
    let pool = mysql::get_pool().unwrap();
    let affect_rows = sqlx::query(sql)
        .bind(&user.email)
        .bind(&user.username)
        .bind(&user.cred)
        .bind(&user.password)
        // .bind(password::hash(&user.password))
        .execute(pool)
        .await?
        .rows_affected();
    Ok(affect_rows)
}

/**
 * 测试接口: 查 列表
 */
// pub async fn list() -> Result<Vec<AuthPayload>, Error> {
//     let pool = mysql::get_pool().unwrap();
//     let sql =
//         "select email, username, cred, password from user";
//     let list = sqlx::query_as::<_, AuthPayload>(sql)
//         .fetch_all(pool)
//         .await?;
//     Ok(list)
// }
/**
 * 测试接口: 查 列表
 */
pub async fn list() -> Result<Vec<LianxXiPayload>, Error> {
    let pool = mysql::get_pool().unwrap();
    let sql = "select name, age, create_date, update_date from lianxi_user";
    let list = sqlx::query_as::<_, LianxXiPayload>(sql)
        .fetch_all(pool)
        .await?;
    Ok(list)
}

/**
 * 测试接口: 查
 */
pub async fn show(username: &str) -> Result<AuthPayload, Error> {
    let sql = "select email, username, cred, password from user where username = ?";
    let pool = mysql::get_pool().unwrap();
    let res = sqlx::query_as::<_, AuthPayload>(sql)
        .bind(username)
        .fetch_one(pool)
        .await?;
    Ok(res)
}
