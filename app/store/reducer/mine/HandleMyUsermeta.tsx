interface MyUsermetaState {
  myUsermeta: any
}

const myUsermetaState: MyUsermetaState = {
  myUsermeta: {}
}

const handleMyUsermeta = (state = myUsermetaState, action: any) => {
  switch (action.type) {
    case 'HANDLE_GET_USERMETA':
      // return { ...state, token: action.token }
      return { ...state, myUsermeta: action.myUsermeta }
    case 'CLEAN_GET_USERMETA':
      return { ...state, myUsermeta: '' }
    // return state
    default:
      return state
  }
}

export default handleMyUsermeta
