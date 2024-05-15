import * as React from "react"
import {Link} from "gatsby";

type Props = {
    className?: string
    children: React.ReactNode
}

export function MyPage({className, children}: Props) {
    return (
        <main className="flex h-svh w-svw ">
            <div
                className={"m-auto w-[1200px] h-[920px] flex flex-col " + (className || "")}
            >
                <div className="flex-grow">
                    {children}
                </div>
                <div
                    className="flex-shrink bg-transparent text-[10pt] text-neutral-500 w-[1200px] flex flex-row align-middle justify-center gap-6 pb-4"
                    style={{marginTop: "-40px"}}>
                    <div><Link to="/imprint">Imprint</Link></div>
                    <div><Link to="/privacy">Privacy Policy</Link></div>
                </div>
            </div>
        </main>
    )
}