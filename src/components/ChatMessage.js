import React from 'react';
import { MessageOutlined, UserOutlined } from '@ant-design/icons'

export default function ChatMessage(props) {

    return (
        <div className='d-flex'>
            {
                props.user ? (
                    <span className='message-right'>
                        <span className='message-text'>{props.message}</span>
                        <img src='' className='message-icon' />
                    </span>
                ) :
                    <span className='message-left'>
                        <MessageOutlined className='message-icon' />
                        <span className='message-text'>{props.message}</span>
                    </span>
            }
        </div>

    )

}