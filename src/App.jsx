import { useState, useEffect } from 'react'
import './App.css'
import VeevaTokens from './components/VeevaTokens'

function App() {
  const [veevaTokens, setVeevaTokens] = useState([])

  useEffect(async () => {
    let [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    })
    
    if (!tab.url.includes('file://')) return

    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const REGEX_VEEVA_TOKEN = /\{\{([^}]+)\}\}/g
        return document.body.innerHTML.match(REGEX_VEEVA_TOKEN) || []
      }
    })

    setVeevaTokens(results[0].result || [])
  }, [])

  return (
    <>
      <h1>Veeva Approved Email Preview Extension</h1>
      
      <VeevaTokens tokens={veevaTokens} />

      List of Veeva <a href="https://crmhelp.veeva.com/doc/Content/CRM_topics/Multichannel/ApprovedEmail/ManageCreateContent/CreatingContent/ConfigTokens.htm">tokens</a>.
    </>
  )
}

export default App
