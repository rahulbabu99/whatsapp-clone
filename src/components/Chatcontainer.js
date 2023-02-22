import React from 'react'
import MoreVert from '@mui/icons-material/MoreVert';
import { InsertEmoticon } from '@mui/icons-material';
import { AttachFile } from '@mui/icons-material';
import SendIcon from "@mui/icons-material/Send";
import "./Chatcontainer.css";
import ChatMessage from './ChatMessage';
function Chatcontainer() {
  return (
    <div className="chat-container">
        <div className="chat-container-header">
            <div className="chat-user-info">
              <div className='chat-user-img'>
                <img src="./user.png" alt=""/>
              </div>
              <p>nikhil</p>
            </div>
            <div className="chat-container-header-btn">
              <MoreVert/>
            </div>
        </div>
        <div className='chat-display'>
          <ChatMessage message="hi evidaa" date="14-12-2023"/>
          <ChatMessage message="entha ppd" date="14-12-2023"/>
          <ChatMessage message="veetil aano" date="14-12-2023"/>
          <ChatMessage message="ohh" date="14-12-2023"/>

        </div>

        <div className='chat-input'>
          
          <div className='chat-input-btn'>
            <InsertEmoticon/>
            <AttachFile/>
          </div>
          <form>
            <input type="text" placeholder='Type a Message'/>
          </form>
          <div className='chat-input-sent'>
            <SendIcon/>
          </div>

        </div>

    
    </div>
  )
}

export default Chatcontainer