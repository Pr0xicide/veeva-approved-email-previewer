const setContentTypePreviewTag = (veevaToken) => {

  veevaToken.previewTag = `<span data-formatted-token data-category="${veevaToken.category}">`
  
  if (veevaToken.token.indexOf('{{accTitle}}') === 0) {
    veevaToken.previewTag += `[HCP Title]`
  }
  else if (veevaToken.token.indexOf('{{accFname}}') === 0) {
    veevaToken.previewTag += `[HCP First Name]`
  }
  else if (veevaToken.token.indexOf('{{accLname}}') === 0) {
    veevaToken.previewTag += `[HCP Last Name]`
  }
  else if (veevaToken.token.indexOf('{{accCredentials}}') === 0) {
    veevaToken.previewTag += `[HCP Credentials]`
  }

  else if (veevaToken.token.indexOf('{{userEmailAddress}}') === 0) {
    veevaToken.previewTag += `[Sales Rep email address]`
  }
  else if (veevaToken.token.indexOf('{{userName}}') === 0) {
    veevaToken.previewTag += `[Sales Rep name]`
  }
  else if (veevaToken.token.indexOf('{{User.Phone}}') === 0) {
    veevaToken.previewTag += `[Sales Rep phone]`
  }
  else if (veevaToken.token.indexOf('{{User.MobilePhone}}') === 0) {
    veevaToken.previewTag += `[Sales Rep mobile phone]`
  }
  
  veevaToken.previewTag += `</span>`
}