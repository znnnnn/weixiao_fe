interface RegisterState {
  loginPass: string
}

const registerState: RegisterState = {
  loginPass: ''
}

const handleSetPwd = (state = registerState, action: any) => {
  // console.log('store里:',action)
  switch (action.type) {
    case 'HANDLE_SETPWD':
      // return { ...state, token: action.token }
      return { ...state, loginPass: action.loginPass }
    default:
      return state
  }
}

export default handleSetPwd
