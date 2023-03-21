use axum::{
    routing::{
        get,
        post
    },
    Router,
    response::{
        IntoResponse
    },
    extract::{
        Query
    },
    Json
};
use std::{
    collections::{
        HashMap
    }
};
use crate::init::{
    handle_router
};
use common::response::RespVO;
// use super::handler::{
//     authorize,
//     get_user_list as get_user_lists,
//     login as user_login,
//     // update_user as update_user_info,
// };
async fn all_query(Query(args): Query<HashMap<String, String>>) -> String {
    format!("regi3ster{:?}", args)
}

pub async fn update_user() -> impl IntoResponse {
     let msg = "更新3成功！".to_string();
     Json(RespVO::<String>::from_result(&msg))
}

pub async fn get_user_lists() -> impl IntoResponse {
     let msg = "测试更3新成功！".to_string();
     Json(RespVO::<String>::from_result(&msg))
}

//注册
pub fn register() -> Router {
    //构建注册路由
    // handle_router("/register", post(authorize))
    handle_router("/register", get(all_query))
}

//登录
pub fn login() -> Router {
    //构建登录路由
    // handle_router("/login", post(user_login))
    handle_router("/login", post(update_user))
}

//查询用户信息列表
pub fn get_user_list() -> Router {
    //构建登录路由
    handle_router("/user-list", get(get_user_lists))
}
