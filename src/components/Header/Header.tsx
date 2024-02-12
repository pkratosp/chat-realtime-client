import { useRouter } from "next/navigation"

export function Header() {

    const { push } = useRouter()

    function SingOut() {
        localStorage.removeItem("userName")
        push("/user")
    }

    return (
        <>
            <header className="bg-white shadow-2xl py-4 md:pt-1 px-1 mt-0 h-auto fixed w-[calc(100%-280px)] top-0 right-0 max-md:w-full">
                <div className="flex justify-end">
                    <button onClick={SingOut} className="bg-blue-500 rounded-md p-2 text-white">Sair do chat</button>
                </div>
            </header>
        </>
    )
}