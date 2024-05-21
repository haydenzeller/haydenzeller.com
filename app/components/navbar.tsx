'use client'
import { useEffect, useState } from "react";
import getBtc from "../api/getBtc";
import getExRate from "../api/getExRate";
import btcLogo from "../../public/btcLogo.png"
import redTriangle from "../../public/triangleRed.png"
import greenTriangle from "../../public/triangleGreen.png"
import Image from "next/image";
export default function NavBar() {
    //Price Formatter
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    //End Price Formatter

    //BTC Price
    const [btcPrice, setBTCPrice] = useState("");
    const [isGreen, setIsGreen] = useState(() => Boolean(undefined))
    useEffect (() => {
        async function fetchData() {
        const price = await getBtc();
        const rate = await getExRate();
        const format = formatter.format(price.priceUsd*rate);
        setIsGreen(price.changePercent24Hr > 0 ? true : false);
        setBTCPrice(format);
        }
        fetchData();
    }, [formatter]);
    //End BTC Price
    return  (
    <header className="p-4 bg-gradient-to-r from-indigo-400 to-orange-400">
        <div className="navbar rounded-xl bg-white">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" target="_blank" href="https://www.coingecko.com/en/coins/bitcoin">
                    <Image src={btcLogo} alt="BTC Logo" width="25" />
                    {btcPrice !== "" ? (<h1>{btcPrice} CAD</h1>) : (<h1>Loading...</h1>)}
                    {isGreen !== Boolean(undefined) ? isGreen ? (<Image src={greenTriangle} width="15" alt="green triangle"/>) : (<Image src={redTriangle} width="15" alt="red triangle"/>) : (<h1></h1>)}
                </a>
            </div>
        </div>
    </header>
    )
}