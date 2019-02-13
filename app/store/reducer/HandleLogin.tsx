interface LoginState {
  token: String
}

const loginState: LoginState = {
  token: ''
}

const handleLogin = (state = loginState, action: any) => {
  switch (action.type) {
    case 'HANDLE_LOGIN':
      return { ...state, token: action.token }
    case 'HANDLE_LOGOUT':
      return { ...state, token: '' }
    default:
      return state
  }
}

export default handleLogin
