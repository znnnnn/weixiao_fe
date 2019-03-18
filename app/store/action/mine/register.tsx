const register = {
  validateCode(phone: string) {
    return {
      type: 'VALIDATE_CODE',
      phone
    }
  },
  handleLogout() {
    return {
      type: 'HANDLE_LOGOUT'
    }
  }
}

export default register