interface RegisterState {
  userLogin: string
}

const registerState: RegisterState = {
  userLogin: ''
}

const handleRegister = (state = registerState, action: any) => {
  // console.log('store里:',action)
  switch (action.type) {
    case 'VALIDATE_CODE':
      // return { ...state, token: action.token }
      return { ...state, userLogin: action.phone }
    case 'HANDLE_LOGOUT':
      return { ...state, userLogin: '' }
    default:
      return state
  }
}

export default handleRegister
