import React from "react"
import type {PageProps} from "gatsby"
import {MyPage} from "../comps/MyPage";

const Imprint = (props: PageProps) => {
    return (
        <MyPage>
            <div className="w-full text-center">
                <h1>Imprint</h1>
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="mt-10 w-5/6 sm:w-3/6">
                        <h2>Contact</h2>
                        <p>
                            levelai.app<br/>
                            8000 Zurich, Switzerland<br/>
                            info@levelai.app
                        </p>
                    </div>
                    <div className="w-5/6 sm:w-3/6"><h2>Disclaimer</h2>
                        <p>The author assumes no responsibility for the correctness, accuracy, timeliness, reliability,
                            or
                            completeness of the information provided. Liability claims against the author for material
                            or
                            immaterial damages resulting from access to, use, or non-use of the published information,
                            misuse of
                            the connection, or technical failures are excluded. All offers are non-binding. The author
                            expressly
                            reserves the right to change, supplement, delete parts of the pages or the entire offer
                            without
                            prior notice, or to temporarily or permanently cease publication.</p>

                    </div>
                    <div className="w-5/6 sm:w-3/6">
                        <h2>Liability for Links</h2>
                        <p>References and links to third-party websites lie outside our area of responsibility. Any
                            responsibility for such websites is rejected. Access and use of such websites are at the
                            user's
                            own
                            risk.</p>
                    </div>
                    <div className="w-5/6 sm:w-3/6">
                        <h2>Copyrights</h2>
                        <p>The copyrights and all other rights to content, images, photos, or other files on the website
                            belong
                            exclusively to the company levelai.app or the specifically named rights holders. Written
                            permission
                            from the copyright holders must be obtained in advance for the reproduction of any
                            elements.</p>
                    </div>
                </div>
            </div>
        </MyPage>
    );
}

export default Imprint;
