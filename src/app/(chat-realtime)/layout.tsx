"use client";

import { ChatBar } from "@/components/ChatBar/ChatBar";
import { Header } from "@/components/Header/Header";

export default function LayoutMenu({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>


            <div className="flex justify-end">
                <ChatBar />
                <Header />
                <div
                    id="content"
                    className="w-[calc(100%-280px)] mt-20 p-2 duration-300 max-md:w-full"
                >
                    {children}
                </div>
            </div>

        </>
    );
}
