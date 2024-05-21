'use client'
import { useEffect, useState } from "react";
import getBtc from "../api/getBtc";
import getExRate from "../api/getExRate";
import btcLogo from "../../public/btcLogo.png"
import Image from "next/image";
export default function NavBar() {
  //Price Formatter
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    //BTC Price
    const [btcPrice, setBTCPrice] = useState("");
    useEffect (() => {
        async function fetchData() {
        const price = await getBtc();
        const rate = await getExRate();
        const format = formatter.format(price*rate);
        setBTCPrice(format);
        }
        fetchData();
    }, []);
    //End BTC Price
    return  (
    <header className="p-4 bg-gradient-to-r from-indigo-400 to-orange-400">
        <div className="navbar rounded-xl bg-white">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" target="_blank" href="https://www.coingecko.com/en/coins/bitcoin">
                    <Image src={btcLogo} alt="BTC Logo" width="25" />
                    {btcPrice !== "" ? (<h1>{btcPrice} CAD</h1>) : (<h1>Loading...</h1>)}
                </a>
            </div>
        </div>
    </header>
    )
}