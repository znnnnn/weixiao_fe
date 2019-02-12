interface DefaultCheckLogin {
  token: String
}

const defaultCheckLogin: DefaultCheckLogin = {
  token: ''
}

const changeLoginState = (state = defaultCheckLogin, action: any) => {
  switch (action.type) {
    case 'Login':
      return { ...state, token: action.token }
    case 'LOGOUT':
      return { ...state, token: '' }
    default:
      return state
  }
}

export default changeLoginState
