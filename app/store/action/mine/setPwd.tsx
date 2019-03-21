const setPwd = {
  handleSetPwd(userPass: string) {
    return {
      type: 'HANDLE_SETPWD',
      userPass
    }
  }
}

export default setPwd