import { Message } from 'element-ui'
export function ShowMessage (code, msg) {
  if (code === 200) {
    Message({
      showClose: true,
      message: msg,
      type: 'success'
    })
  } else {
    Message({
      showClose: true,
      message: msg,
      type: 'error'
    })
  }
}
