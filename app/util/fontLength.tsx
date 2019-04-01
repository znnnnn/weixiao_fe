export default function(str:string) {
  return str.replace(/[\u0391-\uFFE5]/g,"aa").length;  // 先把中文替换成两个字节的英文，在计算长度
};