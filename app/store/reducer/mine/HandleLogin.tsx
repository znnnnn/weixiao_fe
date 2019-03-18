interface LoginState {
  token: string
}

const loginState: LoginState = {
  token: ''
}

const handleLogin = (state = loginState, action: any) => {
  // console.log('store里:',action)
  switch (action.type) {
    case 'HANDLE_LOGIN':
      // return { ...state, token: action.token }
      return { ...state, token: action.token }
    case 'HANDLE_LOGOUT':
      return { ...state, token: '' }
    default:
      return state
  }
}

export default handleLogin
