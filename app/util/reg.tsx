const reg = {
  checkPwd(pwd:string) {
    let reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[_.@]){5,13}$/
    return reg.test(pwd)
  },
  checkPhone(phone:string) {
    // let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    let reg = /^[1][3,4,5,7,8][0-9]{9}$/
    // console.log(reg.test(phone))
    return reg.test(phone)
  }
}

export default reg
