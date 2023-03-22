use super::handler::{
    authorize,
    get_user_list as get_user_lists,
    login as user_login,
    // update_user as update_user_info,
};
use crate::init::handle_router;
use axum::{
    routing::{get, post},
    Router,
};

//注册
pub fn register() -> Router {
    //构建注册路由
    handle_router("/register", post(authorize))
}

//登录
pub fn login() -> Router {
    //构建登录路由
    handle_router("/login", post(user_login))
}

//查询用户信息列表
pub fn get_user_list() -> Router {
    //构建登录路由
    handle_router("/user-list", get(get_user_lists))
}
