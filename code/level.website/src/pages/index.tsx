import * as React from "react"
import {HeadFC, PageProps} from "gatsby"
import {MyPage} from "../comps/MyPage";

const IndexPage: React.FC<PageProps> = () => {

    // useEffect(() => {
    //     document.cookie = "level-analytics-ga-consent=true";
    //     initializeAndTrack(useLocation())
    // }, []);
    //
    return (
        <MyPage className="bg-[url('./os-overlay.png')] bg-no-repeat bg-left-top bg-auto">
            <div className="text-white pl-[225px] pt-[120px]">
                <div
                    className="font-serif text-6xl bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text italic w-2/5 py-10">
                    10x Your Productivity
                </div>
                <div className="font-sanchez text-2xl w-3/6 text-wrap text-neutral-400">
                    Seamlessly integrated with macOS. Accessible anytime, anywhere at your fingertips.
                </div>
                <div className="mt-10">
                    <form action="https://formspree.io/f/mnqerldw" method="POST">
                        <input type="email" name="email" placeholder="Your email" className="w-2/6"></input>
                        <button type="submit"
                                className="ml-2 bg-gradient-to-br from-gray-600 to-gray-700 hover:from-gray-400 hover:to-gray-400">
                            Request beta access
                        </button>
                        <input type="hidden" name="_subject" value="level | beta access request"/>
                    </form>
                </div>
            </div>
        </MyPage>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>Level - Your AI assistant</title>