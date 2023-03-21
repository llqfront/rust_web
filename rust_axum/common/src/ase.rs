use aes::cipher::{block_padding::Pkcs7, BlockDecryptMut, BlockEncryptMut, KeyIvInit};
// use aes::cipher::{block_padding::Pkcs7,KeyIvInit};
use rand_core::{OsRng, RngCore};
use cbc;
// use std::env;
type Aes128CbcEnc = cbc::Encryptor<aes::Aes128>;
type Aes128CbcDec = cbc::Decryptor<aes::Aes128>;

const KEY: &[u8; 16] = b"abcdedghijklmnop"; // 模拟密钥，请勿在实际程序中使用
// const KEY: &[u8; 16] = env::var("ASE_SECRET").expect("ASE_SECRET must be set");

/// 生成随机 iv
fn generate_iv() -> [u8; 16] {
    let mut rng = OsRng;
    let mut bytes = [0u8; 16];
    rng.fill_bytes(&mut bytes);

    bytes
}

/// 加密
pub fn encrypt(plain: &[u8]) -> (Vec<u8>, [u8; 16]) {
    // 随机值
    let iv = generate_iv();

    let mut buf = [0u8; 48];
    let pt_len = plain.len();
    buf[..pt_len].copy_from_slice(plain);
    let ct = Aes128CbcEnc::new(KEY.into(), &iv.into())
        .encrypt_padded_b2b_mut::<Pkcs7>(plain, &mut buf)
        .unwrap();

    (ct.to_vec(), iv)
}

/// 解密
pub fn decrypt(cipher: &[u8], iv: [u8; 16]) -> Vec<u8> {
    let cipher_len = cipher.len();
    let mut buf = [0u8; 48];
    buf[..cipher_len].copy_from_slice(cipher);

    let pt = Aes128CbcDec::new(KEY.into(), &iv.into())
        .decrypt_padded_b2b_mut::<Pkcs7>(cipher, &mut buf)
        .unwrap();

    pt.to_vec()
}
