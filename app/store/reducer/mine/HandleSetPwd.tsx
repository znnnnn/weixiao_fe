interface RegisterState {
  userPass: string
}

const registerState: RegisterState = {
  userPass: ''
}

const handleSetPwd = (state = registerState, action: any) => {
  // console.log('store里:',action)
  switch (action.type) {
    case 'HANDLE_SETPWD':
      // return { ...state, token: action.token }
      return { ...state, userPass: action.userPass }
    default:
      return state
  }
}

export default handleSetPwd
