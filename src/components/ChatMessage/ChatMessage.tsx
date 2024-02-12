interface Props {
    messages: Array<{
        id: string
        name: string
        text: string
    }>
    typingStatus: string
    lastMessageRef: any
}

export function ChatMessage({ messages, lastMessageRef, typingStatus }: Props) {
    return (
        <div className="w-full h-[80vh] bg-slate-300 p-5 overflow-y-scroll">
            {messages.map(message => (
                message.name === localStorage.getItem("userName") ? (
                    <div className="text-sm space-y-1" key={message.id}>
                        <p className="text-right">Voce</p>
                        <div className="bg-lime-500 max-w-72 p-3 rounded-md ml-auto text-sm">
                            <p>{message.text}</p>
                        </div>
                    </div>
                ) : (
                    <div className="text-sm space-y-1" key={message.id}>
                        <p>{message.name}</p>
                        <div className="bg-white max-w-72 p-3 rounded-md text-sm">
                            <p>{message.text}</p>
                        </div>
                    </div>
                )
            ))}

            {/* <div className="fixed bottom-12 text-sm italic">
                <p>{typingStatus}</p>
            </div> */}

            <div ref={lastMessageRef} />
        </div>
    )
}