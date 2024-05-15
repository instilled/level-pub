import React from "react"
import type {PageProps} from "gatsby"
import {MyPage} from "../comps/MyPage";

const Privacy = (props: PageProps) => {
    return (
        <MyPage>
            <div className="w-full text-center">
                <h1>Privacy Policy</h1>
            </div>
        </MyPage>
    );
}

export default Privacy;