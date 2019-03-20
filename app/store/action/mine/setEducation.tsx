export interface Education {
    school: string,
    major: string,
    edu: string,
    work: string,
    admission: string
}

const setEducation = {
  handleSetEducation(education: Education) {
    return {
      type: 'HANDLE_SETEDUCATION',
      education
    }
  }
}

export default setEducation
