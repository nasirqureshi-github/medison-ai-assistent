"use client";
import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "👋 Welcome to Medison AI Assistant. Kindly let me know how I can help you?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // Loader state
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");

    // Show user message immediately
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    setLoading(true); // start loader

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      // Show bot reply
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Something went wrong" },
      ]);
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <>
      {/* Floating Toggle Button (Always Visible) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-110 cursor-pointer"
      >
        {isOpen ? (
          <Icon icon="mdi:close" width="28" height="28" />
        ) : (
          <Icon icon="tabler:message-chatbot" width="28" height="28" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-22 right-6 w-80 h-110 bg-white border rounded-2xl border-[#167363] shadow-xl flex flex-col z-110">
          {/* Header */}
          <div className="flex items-center gap-2 bg-primary text-white px-4 py-4 rounded-t-2xl">
            <Icon icon="tabler:message-chatbot" width="22" height="22" />
            <h1 className="font-semibold">Medison AI Assistant</h1>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-base">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.role === "user"
                    ? "bg-blue-100 ml-auto text-gray-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Loader */}
            {loading && (
              <div className="p-2 rounded-lg max-w-[75%] bg-gray-200 text-gray-800 animate-pulse">
                Searching...
              </div>
            )}

            {/* Auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-2 border-t flex border-gray-300">
            <input
              className="flex-1 border border-gray-400 rounded-lg px-2 py-2 text-base outline-emerald-800"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-primary hover:bg-[#115b4f] text-white px-3 py-1 rounded-lg text-sm cursor-pointer"
            >
              <Icon icon="ic:sharp-send" width="24" height="24" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
