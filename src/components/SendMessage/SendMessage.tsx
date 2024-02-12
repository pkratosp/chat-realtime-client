"use client"

import { socket } from "@/lib/socket-io"
import { FormEvent, useState } from "react"
import { toast } from "sonner"

export function SendMessage() {
    const [message, setMessage] = useState("")
    const handleTyping = () => socket.emit("typing", `${localStorage.getItem("userName")} is typing`)

    function handleSendMessage(event: FormEvent) {
        event.preventDefault()

        if (message === "") {
            toast.info("Digite uma mensagem para enviar no chat")
            return
        }

        if (message.trim() && localStorage.getItem("userName")) {
            const data = {
                text: message,
                name: localStorage.getItem("userName"),
                id: `${socket.id}${Math.random()}`,
                socketId: socket.id
            }
            socket.emit("message", data)
            setMessage("")
        }
    }

    return (
        <>
            <div className="p-2 bg-slate-200 h-[10vh]">
                <form className="w-full h-full flex items-center justify-between" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        placeholder="Escreva a mensagem"
                        className="w-full outline-none rounded-md bg-slate-500 p-2"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onKeyDown={handleTyping}
                    />
                    <button className="bg-blue-500 text-white p-2 rounded-md">Enviar</button>
                </form>
            </div>
        </>
    )
}