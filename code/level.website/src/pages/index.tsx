import * as React from "react"
import {HeadFC, PageProps} from "gatsby"
import {MyPage} from "../comps/MyPage";
import {useForm} from "@formspree/react";

import level_img from "../images/level.png"


const IndexPage: React.FC<PageProps> = () => {

    const [submitState, submitForm, reset] = useForm('mnqerldw');
    // useEffect(() => {
    //     document.cookie = "level-analytics-ga-consent=true";
    //     initializeAndTrack(useLocation())
    // }, []);
    //

    const validateForm = () => {
        const elem = document.getElementById("email") as HTMLInputElement;
        if(elem.value) {

        }
    }

    return (
        <MyPage className="bg-[url('')] sm:bg-[url('./os-overlay.png')] bg-no-repeat bg-auto bg-[right_top]">
            <div className="text-white pt-[120px] flex flex-col items-center sm:items-start">
                <div className="m-10 visible sm:hidden text-neutral-400 italic">For best viewing experience use computer screen.</div>
                <div><img src={level_img} className="object-none aspect-auto" /></div>
                <div
                    className="font-serif text-6xl bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text italic py-10 w-full text-center sm:text-left sm:w-2/5">
                    10x Your Productivity
                </div>
                <div className="font-sanchez text-2xl text-wrap text-neutral-400 w-full text-center sm:text-left sm:w-3/6">
                    An AI assistant that seamlessly integrates with macOS. Accessible anytime, anywhere at your fingertips.
                </div>
                <div className="mt-10 w-full text-center sm:text-left">
                    <form onSubmit={submitForm}>
                        <input id="email" type="email" name="email" placeholder="Your email" className="w-4/5 sm:w-1/4"></input>
                        <button type="submit"
                                className="ml-2 bg-gradient-to-br from-gray-600 to-gray-700 hover:from-gray-400 hover:to-gray-400 mt-2 sm:mt-0"
                                onClick={validateForm}
                        >
                            Request beta access
                        </button>
                        <input type="hidden" name="_subject" value="level | beta access request"/>
                    </form>
                    {submitState.succeeded && <div className=" italic">🎉 We will be in touch!</div>}
                </div>
            </div>
        </MyPage>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>Level - Your AI assistant</title>