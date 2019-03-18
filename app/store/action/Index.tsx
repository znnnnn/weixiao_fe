// 初始化 CHECK_LOGIN 对象
export const handleLogin = (token: string) => {
  // console.log('token:',token)
  return {
    type: 'HANDLE_LOGIN',
    token
  }
}

export const handleLogout = () => {
  return {
    type: 'HANDLE_LOGOUT'
  }
}
