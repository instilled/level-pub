import * as React from "react"
import {Link} from "gatsby";

type Props = {
    className?: string
    children: React.ReactNode
}

export function MyPage({className, children}: Props) {
    return (
        <main className="flex h-screen w-screen">
            <div
                className={"m-auto " + (className || "")}
            >
                <div className="flex-grow">
                    {children}
                </div>
                <div
                    className="flex-shrink bg-transparent text-[10pt] text-neutral-500 flex flex-row align-middle justify-center gap-6 pb-4 mt-[200px]"
                    >
                    <div><Link to="/imprint">Imprint</Link></div>
                    <div><Link to="/privacy">Privacy Policy</Link></div>
                </div>
            </div>
        </main>
    )
}