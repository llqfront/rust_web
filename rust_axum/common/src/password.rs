

use password_hash::{PasswordHash};
// use argon2::Argon2;
// use pbkdf2::Pbkdf2;
// use scrypt::Scrypt;
pub fn password_hash() {
    let hash_string = "$argon2i$v=19$m=65536,t=1,p=1$c29tZXNhbHQAAAAAAAAAAA$+r0d29hqEB0yasKr55ZgICsQGSkl0v0kgwhd+U3wyRo";
    let password_hash = PasswordHash::new(&hash_string).expect("invalid password hash");
    let salt = password_hash.salt;
    println!("{:#?}",salt);
}
