const myUsermeta = {
  handleUsermeta(myUsermeta: any) {
    return {
      type: 'HANDLE_GET_USERMETA',
      myUsermeta
    }
  },
  cleanUsermeta() {
    return {
      type: 'CLEAN_GET_USERMETA',
    }
  },
}

export default myUsermeta