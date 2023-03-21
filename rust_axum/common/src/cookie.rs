use axum::http::HeaderMap;

const COOKIE_NAME: &str = "MERGE_TOKEN";

pub fn get_cookie(headers: &HeaderMap, cookie_name: &str) -> Option<String> {
    let cookie = headers
        .get(axum::http::header::COOKIE)
        .and_then(|value| value.to_str().ok())
        .map(|value| value.to_string());
    match cookie {
        Some(cookie) => {
            let cookie = cookie.as_str();
            let cs: Vec<&str> = cookie.split(';').collect();
            for item in cs {
                let item: Vec<&str> = item.split('=').collect();
                if item.len() != 2 {
                    continue;
                }
                let key = item[0];
                let val = item[1];
                let key = key.trim();
                let val = val.trim();
                if key == cookie_name {
                    return Some(val.to_string());
                }
            }
            None
        }
        None => None,
    }
}
pub fn set_cookie(value: &str) -> HeaderMap {
    let c = format!("{}={}", COOKIE_NAME, value);
    let mut hm = HeaderMap::new();
    hm.insert(axum::http::header::SET_COOKIE, (&c).parse().unwrap());
    hm
}
