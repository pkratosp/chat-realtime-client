"use client"

import { FormEvent, useState } from "react"
import { socket } from "../../lib/socket-io"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function User() {
    const { push } = useRouter()

    const [userName, setUserName] = useState<string>("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        if (userName === "") {
            toast.info("Digite um nome de usuario")
            return
        }

        localStorage.setItem("userName", userName)

        socket.emit("newUser", { userName, socketID: socket.id })

        push("/chat")
    }

    return (
        <>
            <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4" onSubmit={handleSubmit}>
                <h2
                    className="text-2xl text-blue-500 font-bold"
                >
                    Digite um nome de usuario no bate-papo aberto
                </h2>
                <div className="flex flex-col">
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        minLength={6}
                        name="username"
                        id="username"
                        placeholder="Digite o nome de usuario"
                        className="outline-none bg-slate-500/15 text-slate-800 rounded-md p-2"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        className="bg-blue-600 text-white p-2 rounded-md"
                        type="submit"
                    >
                        ENTRAR
                    </button>

                </div>
            </form>
        </>
    )
}