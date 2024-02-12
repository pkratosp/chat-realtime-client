import { socket } from "@/lib/socket-io"
import { useEffect, useState } from "react"

export function ChatBar() {
    const [users, setUsers] = useState<Array<{
        socketID: string
        userName: string
    }>>([])

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

    return (
        <>
            <div className="h-full w-[280px] flex flex-col fixed bg-slate-400 text-white p-5 top-0 left-0 max-md:hidden">
                <h2 className="text-2xl text-white font-semibold">Chat aberto</h2>

                <div className="flex flex-col text-left font-bold space-y-4">

                    {
                        users.map((user) => (
                            <div
                                key={user.socketID}
                                className="flex items-center"
                            >
                                <span className="size-2 bg-blue-100 rounded-full mx-2" /><p className="">{user.userName}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}