import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { useState } from 'react';
import { sendMsgToOpenAI } from './openai';


function App() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState({
      text: "I am LumenAI, an AI language model designed to provide information.",
      isBot: true, 
    });

    const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }

  return (
    <div className="App">
        <div className='sideBar'>
          <div className='upperSide'>
            <div className='upperSideTop'> <img src={gptLogo} alt='Logo' className='logo' /><span className='brand'>LumenAI</span></div>
            <button className='midBtn'><img src={addBtn} alt='new chat' className='addBtn' />New Chat</button>
            <div className='upperSideBottom'>
              <button className='query'><img src={msgIcon} alt='Query' />What is Programming?</button>
              <button className='query'><img src={msgIcon} alt='Query' />How to use an API?</button>
            </div>
          </div>
          <div className='lowerSide'>
            <div className='listItems'><img src={home} alt='Home' className='listItemsImg' />Home</div>
            <div className='listItems'><img src={saved} alt='Saved' className='listItemsImg' />Saved</div>
            <div className='listItems'><img src={rocket} alt='Upgrade' className='listItemsImg' />Upgrade to Pro</div>
          </div>
        </div>
        <div className='main'>
          <div className='chats'>
            <div className='chat'>
              <img className='chatImg' src={userIcon} alt='' /><p className='txt'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum</p>
            </div>
            <div className='chat bot'>
              <img className='chatImg' src={gptImgLogo} alt='' /><p className='txt'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum</p>
            </div>
          </div>
          <div className='chatFooter'>
            <div className='inp'>
              <input type='text' placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}}/><button className='send' onClick={handleSend}><img src={sendBtn} alt='Send' /></button>
            </div>
          <p>LumenAI may produce incorrect results</p>
        </div>
     </div>
    </div>
  );
}

export default App;


