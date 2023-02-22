import React from 'react'
import Chatcontainer from './Chatcontainer'
import "./ChatPage.css"
import Sidebar from './Sidebar'

function ChatPage() {
  return (
    <div className="chatPage">
      <div className="chatpage-container">
      <Sidebar/>
      <Chatcontainer/>
      </div>
    </div>
  )
}

export default ChatPage