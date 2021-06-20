import JSEncrypt from 'jsencrypt';
 
// 公钥加密
function encrypt(text,PUB_KEY) {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(PUB_KEY);
  const encrypted = encrypt.encrypt(text);
  return encrypted;
}
 
// // 私钥解密
// function decrypt(text) {
//   const decrypt = new JSEncrypt();
//   decrypt.setPrivateKey(PRIV_KEY);
//   const decrypted = decrypt.decrypt(text);
//   return decrypted;
// }

export {
  encrypt
}