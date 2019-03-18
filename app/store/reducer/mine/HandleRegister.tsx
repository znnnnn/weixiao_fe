interface RegisterState {
  phone: string
}

const registerState: RegisterState = {
  phone: ''
}

const handleRegister = (state = registerState, action: any) => {
  // console.log('store里:',action)
  switch (action.type) {
    case 'VALIDATE_CODE':
      // return { ...state, token: action.token }
      return { ...state, phone: action.phone }
    case 'HANDLE_LOGOUT':
      return { ...state, phone: '' }
    default:
      return state
  }
}

export default handleRegister
