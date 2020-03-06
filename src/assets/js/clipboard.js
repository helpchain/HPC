import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess() {
  console.log('success')
  // Vue.prototype.$message({
  //   message: '复制成功',
  //   type: 'success',
  //   duration: 1500
  // })
}

function clipboardError() {
  console.log('error')
  // Vue.prototype.$message({
  //   message: 'Copy failed',
  //   type: 'error'
  // })
}

export default function handleClipboard(text, event, doSuccess) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', (res) => {
    // clipboardSuccess()
	console.log('res',res)
	clipboard.off('error')
	clipboard.off('success')
	clipboard.destroy()
	if (typeof doSuccess == "function") {
		doSuccess(res);
	}
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}