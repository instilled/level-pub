import React from "react"
import type {PageProps} from "gatsby"
import {MyPage} from "../comps/MyPage";
import {useLocation} from "@reach/router";

const Imprint = (props: PageProps) => {
    return (
        <MyPage>
            <div className="w-full text-center">
                <h1>Imprint</h1>
            </div>
        </MyPage>
    );
}

export default Imprint;