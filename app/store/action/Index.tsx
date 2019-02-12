// 初始化 CHECK_LOGIN 对象
export const login = (token: string) => {
  return {
    type: 'LOGIN',
    token
  }
}

export const logOut = () => {
  return {
    type: 'LOGOUT'
  }
}
