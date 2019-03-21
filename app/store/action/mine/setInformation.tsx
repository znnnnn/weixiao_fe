interface Information {
  avatar: string
  nickName: string
  trueName: string
  sex: string
}

const setInformation = {
  handleSetInformation(information: Information) {
    return {
      type: 'HANDLE_SETINFORMATION',
      information
    }
  }
}

export default setInformation
