import React, { useEffect, useState } from "react"
import { BsFillQuestionCircleFill } from "react-icons/bs"
import Header from "../../Common/Header";

import { getParamsFromUrl } from "../../utilities";

const MainPage = () => {
    const [productKey, setProductKey] = useState('')
    useEffect(() => {
        const queryInfo = {active: true, lastFocusedWindow: true};
         // eslint-disable-next-line no-undef
        chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
            const url = tabs[0].url;
            const productKey = getParamsFromUrl(url);
            setProductKey(productKey);
        });
    }, [])

    return (
        <div className="w-[1165px] h-full">
            <Header />
            <div className="flex gap-5 w-full justify-center">
                <div className="block p-6 w-[215px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                    <div className="mb-2 text-base tracking-tight text-gray-900 ">Average Monthly Sales</div>
                    <p className="font-bold text-4xl text-gray-700 ">2,008</p>
                </div>
                <div className="block p-6 w-[215px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                    <div className="mb-2 text-base tracking-tight text-gray-900 ">Average Sales Rank</div>
                    <p className="font-bold text-4xl text-gray-700 ">93</p>
                </div>
                <div className="block p-6 w-[215px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                    <div className="mb-2 text-base tracking-tight text-gray-900 ">Average Price</div>
                    <p className="font-bold text-4xl text-gray-700 ">$197.74</p>
                </div>
                <div className="block p-6 w-[215px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                    <div className="mb-2 text-base tracking-tight text-gray-900 ">Average Rating Number</div>
                    <p className="font-bold text-4xl text-gray-700 ">59,025</p>
                </div>
                <div className="block p-6 w-[215px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                    <div className="mb-2 text-base tracking-tight text-gray-900 flex items-center gap-2">Opportunity Score <BsFillQuestionCircleFill className="text-gray-400" /></div>
                    <div className="flex items-center gap-2">
                        <div className="rounded-full border-red-500 border-2 w-8 h-8 text-red-500 flex items-center justify-center text-xl font-bold">
                            3
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold text-base">
                                High Demand
                            </div>
                            <div className="text-xs">
                                with high comp.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage