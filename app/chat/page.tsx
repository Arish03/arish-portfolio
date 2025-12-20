"use client";

import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { MessageCircle, Lock, Github } from "lucide-react";
import { useState } from "react";

type Message = {
  sender: "me" | "user";
  text: string;
  time: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "me",
      text: "Hi 👋 Feel free to start a private conversation with me here.",
      time: "10:00",
    },
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    const newMessage: Message = {
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  }

  return (
    <PageWrapper>
      {/* HEADER */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            Private Chat
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s{" "}
            <span className="text-blue-600 dark:text-blue-400">Talk</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Have a private 1:1 conversation with me.  
            This space is designed for secure, direct communication.
          </p>
        </motion.div>

        {/* Info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            Private & Secure
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Github className="h-4 w-4" />
            GitHub-ready
          </div>
        </motion.div>
      </div>

      {/* CHAT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card max-w-4xl mx-auto"
      >
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          Chat Conversation
        </h2>

        {/* Messages */}
        <div className="mt-6 space-y-4 max-h-[400px] overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 text-sm max-w-[70%] ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-neutral-800"
                }`}
              >
                <p>{msg.text}</p>
                <span className="block text-xs opacity-70 mt-1">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="mt-6 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border px-3 py-2 text-sm bg-transparent
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="rounded-lg bg-black text-white dark:bg-white dark:text-black
                       px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Send
          </button>
        </div>
      </motion.div>

      {/* EMAIL FALLBACK */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <div className="card inline-block">
          <h3 className="font-semibold">Prefer email?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            You can also reach out directly via email.
          </p>
          <a
            href="mailto:arishsrinivasan@outlook.com"
            className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
          >
            Send Email
          </a>
        </div>
      </motion.div>
    </PageWrapper>
  );
}
