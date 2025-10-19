let isPreviewEnabled = false

function togglePreview(btn) {
  isPreviewEnabled = !isPreviewEnabled
  btn.innerHTML = isPreviewEnabled ? 'Disable Preview' : 'Preview Email'
  document.body.classList.toggle('veeva-approved-email-previewer-enabled')
}

function createPreviewBtn() {
  const btnPreview = document.createElement('button')
  btnPreview.innerHTML = 'Preview Email'
  btnPreview.className = 'btn-preview-veeva-approved-email'
  btnPreview.addEventListener('click', () => togglePreview(btnPreview))
  document.body.appendChild(btnPreview)
}

(() => {
  if (!window.location.href.includes('file://')) return

  createPreviewBtn()

  const veevaTokens = getVeevaTokens(document.body)
  determineTokenCategory(veevaTokens)
  wrapVeevaTokens(veevaTokens)
  console.log(veevaTokens)
})()