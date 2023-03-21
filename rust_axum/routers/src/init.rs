use axum::{
    // middleware::from_extractor,
    routing::MethodRouter,
    Router
};
// api
use super::auth;

//构建路由公共方法
pub fn handle_router(path: &str, method_router: MethodRouter) -> Router {
    let _path = format!("/api{}", path); // 统一api 路径
    Router::new().route(&_path, method_router)
}

//api 路由入口
pub fn routers() -> Router {
    auth_init_router().merge(init_router())
}


//需要权限认证的路由
fn auth_init_router() -> Router {
    let app = Router::new()
        .merge(auth::get_user_list());
    return app;
}

//不需要权限认证的路由
fn init_router() -> Router {
    let app = Router::new()
    .merge(auth::login()) //登录
    .merge(auth::register()); //注册
    return app;
}
