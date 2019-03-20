interface Education {
  education: {
    school: string
    major: string
    edu: string
    // pickerValue: [],
    work: string
    admission: string
  }
}

let education: Education = {
  education: {
    school: '',
    major: '',
    edu: '',
    work: '',
    admission: ''
  }
}

const handleSetEducation = (state = education, action: any) => {
  // console.log('store里:',action)
  switch (action.type) {
    case 'HANDLE_SETEDUCATION':
      // return { ...state, token: action.token }
      return { ...state, education: action.education }
    default:
      return state
  }
}

export default handleSetEducation
