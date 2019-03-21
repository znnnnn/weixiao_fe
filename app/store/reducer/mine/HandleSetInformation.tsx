interface Information {
  information: {
    avatar: string
    nickName: string
    trueName: string
    sex: string
  }
}

let information: Information = {
  information: {
    avatar: '',
    nickName: '',
    trueName: '',
    sex: '1'
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
