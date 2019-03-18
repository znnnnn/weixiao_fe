const login = {
  handleLogin(token: string) {
    return {
      type: 'HANDLE_LOGIN',
      token
    }
  },
  handleLogout() {
    return {
      type: 'HANDLE_LOGOUT'
    }
  }
}

export default login