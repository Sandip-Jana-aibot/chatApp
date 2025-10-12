import React, { useState, useEffect, useRef } from 'react';

// Sample chat data
const initialMessages = [
    { id: 1, text: 'Hi there!', sender: 'other', timestamp: '10:01 AM' },
    { id: 2, text: 'Hello! How are you?', sender: 'me', timestamp: '10:02 AM' },
    { id: 3, text: 'I am doing well, thanks! I am building a chat app.', sender: 'other', timestamp: '10:03 AM' },
    { id: 4, text: 'That sounds like a fun project!', sender: 'me', timestamp: '10:04 AM' },
];

const ChatBox = ({ onMenuClick }) => {
    const [messages, setMessages] = useState(initialMessages);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim() !== '') {
            const newMessage = {
                id: messages.length + 1,
                text: inputMessage,
                sender: 'me',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages([...messages, newMessage]);
            setInputMessage('');
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Chat Header */}
            <div className="flex items-center p-4 py-2.5 bg-white shadow-md">
                <img
                    src="https://placehold.co/40x40/33C7FF/FFFFFF?text=b"
                    alt="Contact Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">Bob</h2>

                {/* Add this button */}
                <button
                    onClick={onMenuClick}
                    className="ml-auto p-2 hover:bg-gray-100 rounded"
                >
                    ☰
                </button>
            </div>
            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`p-2 max-w-xs sm:max-w-md rounded-2xl shadow-sm transition-all duration-300 transform ${msg.sender === 'me'
                                ? 'bg-blue-500 text-white rounded-br-none'
                                : 'bg-white text-gray-800 rounded-bl-none'
                                }`}
                        >
                            <div>{msg.text}</div>
                            <div className={`mt-1 text-xs ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-400'}`}>
                                {msg.timestamp}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white shadow-lg">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                    {/* Attach Button */}
                    <button
                        type="button"
                        className="p-3 text-gray-400 hover:text-blue-500 transition-colors duration-200"
                        title="Attach File"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13.5"
                            />
                        </svg>
                    </button>

                    {/* Camera Button */}
                    <button
                        type="button"
                        className="p-3 text-gray-400 hover:text-blue-500 transition-colors duration-200"
                        title="Open Camera"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.808-1.212A2 2 0 0110.74 4h2.52a2 2 0 011.664.89l.808 1.212A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </button>

                    <input
                        type="text"
                        className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                        placeholder="Type a message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button>
                        <img src="/send_button.png" alt="send" className="w-12" />
                    </button>
                </form>
            </div>
        </div>
    );
};


export default ChatBox;
