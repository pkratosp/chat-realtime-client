"use client"

import { ChatMessage } from "@/components/ChatMessage/ChatMessage";
import { SendMessage } from "@/components/SendMessage/SendMessage";
import { socket } from "@/lib/socket-io";
import { useEffect, useRef, useState } from "react";

type Messages = Array<{
    id: string
    name: string
    text: string
}>

export default function Chat() {

    const [messages, setMessages] = useState<Messages>([])
    const [typingStatus, setTypingStatus] = useState<string>("")
    const lastMessageRef = useRef<any>(null);

    useEffect(() => {
        socket.on("messageResponse", data => setMessages([...messages, data]))
    }, [socket, messages])

    useEffect(() => {
        socket.on("typingResponse", data => setTypingStatus(data))
    }, [socket])

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>

            <ChatMessage lastMessageRef={lastMessageRef} messages={messages} typingStatus={typingStatus} />

            <SendMessage />


        </>
    )
}