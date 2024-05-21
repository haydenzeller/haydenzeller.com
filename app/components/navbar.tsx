'use client'
import { useEffect, useState } from "react";
import getBtc from "../api/getBtc";
import getExRate from "../api/getExRate";
import btcLogo from "../../public/btcLogo.png"
import redTriangle from "../../public/triangleRed.png"
import greenTriangle from "../../public/triangleGreen.png"
import Image from "next/image";
export default function NavBar() {


    //BTC Price
    const [btcPrice, setBTCPrice] = useState("");
    const [isGreen, setIsGreen] = useState(-1)
    const [percentChange, setPercentChange] = useState("")
    useEffect (() => {
        const dollarFormatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })
        const percentFormatter = new Intl.NumberFormat('en-US', {
            style: 'percent',
            maximumFractionDigits: 2,
            minimumIntegerDigits: 1
        })
        async function fetchData() {
        const price = await getBtc();
        const rate = await getExRate();
        const priceFormat = dollarFormatter.format(price.priceUsd*rate);
        const percentFormat = percentFormatter.format(price.changePercent24Hr/100);
        setPercentChange(percentFormat);
        setBTCPrice(priceFormat);
        setIsGreen(price.changePercent24Hr > 0 ? 1 : 0);
        }
        fetchData();
    }, []);
    console.log(isGreen);
    //End BTC Price
    return  (
    <header className="p-4 bg-gradient-to-r from-indigo-400 to-orange-400">
        <div className="hidden md:block navbar rounded-xl bg-white bg-opacity-60 border-white border-4 overflow-hidden">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" target="_blank" href="https://www.coingecko.com/en/coins/bitcoin">
                    <Image src={btcLogo} alt="BTC Logo" width="25" />
                    {btcPrice !== "" ? (<h1>{btcPrice} CAD</h1>) : (<h1>Loading...</h1>)}
                    {isGreen !== -1 ? isGreen == 1 ? (<Image src={greenTriangle} width="15" alt="green triangle"/>) : (<Image src={redTriangle} width="15" className="rotate-180" alt="red triangle"/>) : (<h1></h1>)}
                    {percentChange !== "" ? isGreen == 1 ? (<h1 className="text-green-600">{percentChange}</h1>) : (<h1 className="text-red-600">{percentChange}</h1>) : <h1></h1>}
                </a>
            </div>
        </div>
    </header>
    )
}