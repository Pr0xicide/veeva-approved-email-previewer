const setEmailFragmentPreviewTag = (veevaToken) => {
  veevaToken.previewTag = `<span data-formatted-token data-category="${veevaToken.category}">[Email Fragment(s) Section]</span>`
}