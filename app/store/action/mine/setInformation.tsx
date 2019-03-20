interface Information {
  avatarbase64: string
  nickName: string
  trueName: string
  sex: boolean
}

const setInformation = {
  handleSetInformation(information: Information) {
    return {
      type: 'HANDLE_SETPWD',
      information
    }
  }
}

export default setInformation
