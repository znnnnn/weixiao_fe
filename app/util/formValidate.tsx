import {Toast} from 'native-base'
import reg from './reg'

export function showError( msg : string){
  Toast.show({
    text: msg,
    type: 'danger',
    position:'top'
  })
}

export function phoneValidate(phone:string) {
  let purePhoneNumber = phone.replace(/\s*/g, '')
    if (purePhoneNumber === '') {
      showError('手机号不能为空')
    } else if (!reg.checkPhone(purePhoneNumber)) {
      // InputItem的phone类型，value中会自带空格，判断时需要去除，否则会一直错误！
      showError('手机号格式错误')
    }
}