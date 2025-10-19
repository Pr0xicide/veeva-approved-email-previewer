const getDropdownOptions = (dropdown) => {
  if (typeof dropdown !== 'string') return false

  const start = dropdown.indexOf('[') + 1
  const end = dropdown.indexOf(']')
  return dropdown.substring(start, end).split('|')
}

const setUserInputPreviewTag = (veevaToken) => {
  // If veevaToken.token is a dropdown token, render as a <select>, otherwise as <input type="text">
  // Dropdown tokens are in the format: {{customText[Option1|Option2|Option3]}}
  // Text field tokens are like: {{customText}} or {{customText:Required}}
  if (
    veevaToken.token.indexOf('{{customText[') === 0 &&
    veevaToken.token.indexOf(']}}') === veevaToken.token.length - 3 // ends with ]}}
  ) {
    // Dropdown syntax detected
    const dropdownOptions = getDropdownOptions(veevaToken.token);
    veevaToken.previewTag = `<select data-formatted-token data-category="${veevaToken.category}">${dropdownOptions
      .map((option) => `<option value="${option}">${option}</option>`)
      .join('')}</select>`
  }
  
  else if (veevaToken.token.indexOf('{{customText(') === 0 || veevaToken.token.indexOf('{{customText:') === 0) {
    veevaToken.previewTag = `<input type="text" data-formatted-token data-category="${veevaToken.category}">`
  }
}