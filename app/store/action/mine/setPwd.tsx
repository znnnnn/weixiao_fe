const setPwd = {
  handleSetPwd(loginPass: string) {
    return {
      type: 'HANDLE_SETPWD',
      loginPass
    }
  }
}

export default setPwd