import './App.css';
import gptLogo from './assets/LumenAI.png';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/blankUser2.png';
import gptImgLogo from './assets/chatLogo.png';
import { useEffect, useState, useRef } from 'react';
import { sendMsgToOpenAI } from './openai';


function App() {
    const msgEnd = useRef(null);

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
      {
        text: "I am LumenAI, What may I assist you with?",
        isBot: true, 
      }
  ]);

  useEffect(() => { 
    msgEnd.current.scrollIntoView();
  }, [messages]);

    const handleSend = async () => {
      const text = input;
      setInput('');
      setMessages([
        ...messages,
        {text, isBot: false}
      ]);

    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text: res, isBot: true }
    ]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleQuery = async (query) => {
    setInput(query);
      setMessages([
        ...messages,
        {text: query, isBot: false },
      ]);

    const res = await sendMsgToOpenAI(query);

    setInput('');

    setMessages([
      ...messages,
      { text: query, isBot: false },
      { text: res, isBot: true }
    ]);
  }

  return (
    <div className="App">
        <div className='sideBar'>
          <div className='upperSide'>
            <div className='upperSideTop'> <img src={gptLogo} alt='Logo' className='logo' /><span className='brand'>LumenAI</span></div>
            <button className='midBtn' onClick={()=>{window.location.reload()}}><img src={addBtn} alt='new chat' className='addBtn' />New Chat</button>
            <div className='upperSideBottom'>
              <button className='query' onClick={() => handleQuery("What is Programming?")}><img src={msgIcon} alt='Query' />What is Programming?</button>
              <button className='query' onClick={() => handleQuery("Population of California?")}><img src={msgIcon} alt='Query' />Population of California?</button>
            </div>
          </div>
          <div className='lowerSide'>
            <div className='listItems'><img src={home} alt='Home' className='listItemsImg' />Welcome to LumenAI - Home. Just ask anything you need answered and LumenAI will try to assist you. </div>
            {/* <div className='listItems'><img src={saved} alt='Saved' className='listItemsImg' />Saved</div>
            <div className='listItems'><img src={rocket} alt='Upgrade' className='listItemsImg' />Upgrade to Pro</div> */}
          </div>
        </div>
        <div className='main'>
          <div className='chats'>
            {messages.map((message, i) => 
                <div key={i} className={message.isBot?'chat bot':'chat'}>
                  <img className='chatImg' src={message.isBot?gptImgLogo:userIcon} alt='' /><p className='txt'>{ message.text }</p>
                </div>
            )}
            <div ref={msgEnd}/>
          </div>
          <div className='chatFooter'>
            <div className='inp'>
              <input type='text' placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyPress={handleKeyPress}/><button className='send' onClick={handleSend}><img src={sendBtn} alt='Send' /></button>
            </div>
          <p>LumenAI may produce inaccurate results</p>
        </div>
     </div>
    </div>
  );
}

export default App;


