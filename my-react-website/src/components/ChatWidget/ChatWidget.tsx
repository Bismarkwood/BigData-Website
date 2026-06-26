import { useState } from 'react'
import chatVideo from '../../assets/Chat Widget/Chat Widget animated.mp4'
import './ChatWidget.css'

function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      <button
        className={`chat-widget ${open ? 'chat-widget--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Contact us"
      >
        <svg className="chat-widget__ring-text" viewBox="0 0 100 100">
          <defs>
            <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text>
            <textPath href="#circlePath" className="chat-widget__text-path">
              contact · contact · contact · 
            </textPath>
          </text>
        </svg>
        <div className="chat-widget__avatar">
          <video
            src={chatVideo}
            className="chat-widget__video"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="chat-panel">
          <div className="chat-panel__header">
            <span className="chat-panel__title">Chat with us</span>
            <button className="chat-panel__close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chat-panel__body">
            <div className="chat-panel__msg chat-panel__msg--bot">
              <p>Hi there! 👋 How can we help you today?</p>
            </div>
          </div>
          <div className="chat-panel__input-wrap">
            <input
              type="text"
              className="chat-panel__input"
              placeholder="Type a message..."
            />
            <button className="chat-panel__send" aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="#2ea872"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatWidget
