import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { Input } from 'antd';
import { analyze } from './utils';


export default function Chatbot() {
    const [messages, setMessages] = useState([
        {
            message: 'Hi, May I have your name?',
        },
    ]);

    const [text, setText] = useState('');

    const onSend = () => {
        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) {
            const reply = analyze(text)
            list = [
                ...messages,
                { message: reply }
            ]
        }
        else {
            list = [
                ...list,
                {
                    message: `Hi, ${text}`,
                },
                {
                    message: "How can I help you?",
                },
            ]
        }
        setMessages(list)
        setText("")
        setTimeout(() => {
            document.querySelector('#copyright').scrollIntoView();
        }, 1);
    };
    return (
        <div>
            <div className='logo-head'>
                <img src='./images/chatlogo.png' width="60"/>
                <h4 className='text-primary'>Ziya</h4>
            </div>
            <div className='chat-message'>
                {
                    messages.length > 0 && messages.map((data) => <ChatMessage {...data} />)
                }
                <div className='text-bar'>
                    <Input placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)} />
                    <button className='send-btn' onClick={ onSend }>Send</button>
                </div>
                <div className='copyrights' id='copyright'>copyrights reserved MDQuality apps solutions</div>
            </div>
        </div>
    )
}