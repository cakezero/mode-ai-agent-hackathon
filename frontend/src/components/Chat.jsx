import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage = { sender: 'ai', text: "Thinking..." };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto border border-gray-300 rounded-lg overflow-hidden">
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 my-2 rounded-md max-w-[75%] ${
              message.sender === 'user' ? 'ml-auto bg-blue-100' : 'mr-auto bg-orange-100'
            }`}
          >
            {message.text}
          </div>
        ))}
        {loading && <div className="italic text-gray-500 mt-2">AI is thinking...</div>}
      </div>

      <div className="flex items-center p-4 border-t border-gray-300 bg-white">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
