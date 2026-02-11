 
import React, { useState, useEffect } from "react";
import "./ChatPage.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function ChatPage() {
  const [history, setHistory] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Fetch history from backend
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/history`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      }
    })
      .then(res => res.json())
      .then(data => {
        setHistory(Array.isArray(data) ? data : []);
      })
      .catch(err => console.error(err));
  }, []);

  // Send message
  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, newMessage]);

    const res = await fetch(`${BACKEND_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`  
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages(prev => [...prev, { sender: "bot", text: data.reply }]);

    if (data.chat) {
      setHistory(prev => [...prev, data.chat]);
    } else {
      const historyRes = await fetch(`${BACKEND_URL}/api/history`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const historyData = await historyRes.json();
      setHistory(Array.isArray(historyData) ? historyData : []);
    }

    setInput("");
  };

  // Delete history item
  const handleDelete = async (id) => {
    await fetch(`${BACKEND_URL}/api/history/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    setHistory(prev => prev.filter(chat => chat._id !== id));
  };

  // Clear all history
  const clearAll = async () => {
    await fetch(`${BACKEND_URL}/api/history`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    setHistory([]);
  };

  return (
    <div className="chat-container">
       
      <div className="chat-history">
        <h2>History</h2>
        <button className="clear-btn" onClick={clearAll}>Clear All</button>
        <ul>
          {Array.isArray(history) && history.map(chat => (
            <li key={chat._id}>
              {chat.title}
              <button className="delete-btn" onClick={() => handleDelete(chat._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

       
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        
        <div className="input-box">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
