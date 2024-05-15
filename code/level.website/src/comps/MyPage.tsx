import * as React from "react"
import {Link} from "gatsby";

type Props = {
    children: React.ReactNode
}

export function MyPage({children}: Props) {
    return (
        <main className="flex h-svh w-svw">
            <div className="m-auto">
                <div className="w-[1200px] h-[920px]">
                    <div className="h-full">
                        {children}
                    </div>
                    <div
                        className="absolute bg-transparent text-[10pt] text-neutral-500 w-[1200px] flex flex-row align-middle justify-center gap-6"
                        style={{marginTop: "-40px"}}>
                        <div><Link to="/imprint">Imprint</Link></div>
                        <div><Link to="/privacy">Privacy Policy</Link></div>
                    </div>
                </div>
            </div>
        </main>
    )
}