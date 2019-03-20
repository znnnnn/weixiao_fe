interface Information {
  information: {
    avatarbase64: string
    nickName: string
    trueName: string
    sex: boolean
  }
}

let information: Information = {
  information: {
    avatarbase64: '',
    nickName: '',
    trueName: '',
    sex: true
  }
}

const handleSetInformation = (state = information, action: any) => {
  // console.log('store里:',action)
  switch (action.type) {
    case 'HANDLE_SETINFORMATION':
      // return { ...state, token: action.token }
      return { ...state, information: action.information }
    default:
      return state
  }
}

export default handleSetInformation
