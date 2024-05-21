'use client'
import { useEffect, useState } from "react";
import getBtc from "../api/getBtc";
import getExRate from "../api/getExRate";
import btcLogo from "../../public/btcLogo.png"
import ethLogo from "../../public/ethLogo.png"
import redTriangle from "../../public/triangleRed.png"
import greenTriangle from "../../public/triangleGreen.png"
import Image from "next/image";
import getEth from "../api/getEth";

export default function CryptoPrices() {
    //BTC Price
    const [btcPrice, setBTCPrice] = useState("");
    const [btcIsGreen, setbtcIsGreen] = useState(-1)
    const [BtcPercentChange, setBTCPercentChange] = useState("")
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
        setBTCPercentChange(percentFormat);
        setBTCPrice(priceFormat);
        setbtcIsGreen(price.changePercent24Hr > 0 ? 1 : 0);
        }
        fetchData();
    }, []);
    //End BTC Price
    //ETH Price
    const [ethPrice, setETHPrice] = useState("");
    const [ethIsGreen, setEthIsGreen] = useState(-1)
    const [ethPercentChange, setETHPercentChange] = useState("")
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
        const price = await getEth();
        const rate = await getExRate();
        const priceFormat = dollarFormatter.format(price.priceUsd*rate);
        const percentFormat = percentFormatter.format(price.changePercent24Hr/100);
        setETHPercentChange(percentFormat);
        setETHPrice(priceFormat);
        setEthIsGreen(price.changePercent24Hr > 0 ? 1 : 0);
        }
        fetchData();
    }, []);
    return  (
    <div className="p-4">
        <div className="rounded-xl backdrop-contrast-200 bg-white bg-opacity-50 border-white border-4 overflow-hidden md:flex md:flex-row">
            <div>
                <a className="btn btn-ghost text-xl" target="_blank" href="https://www.coingecko.com/en/coins/bitcoin">
                    <Image src={btcLogo} alt="BTC Logo" width="25" />
                    {btcPrice !== "" ? (<h1>{btcPrice} CAD</h1>) : (<h1>Loading...</h1>)}
                    {btcIsGreen !== -1 ? btcIsGreen == 1 ? (<Image src={greenTriangle} width="15" alt="green triangle"/>) : (<Image src={redTriangle} width="15" className="rotate-180" alt="red triangle"/>) : (<h1></h1>)}
                    {BtcPercentChange !== "" ? btcIsGreen == 1 ? (<h1 className="text-green-600">{BtcPercentChange}</h1>) : (<h1 className="text-red-600">{BtcPercentChange}</h1>) : <h1></h1>}
                </a>
            </div>
            <div>
                <a className="btn btn-ghost text-xl" target="_blank" href="https://www.coingecko.com/en/coins/ethereum">
                    <Image src={ethLogo} alt="ETH Logo" width="18" className="m-1"/>
                    {ethPrice !== "" ? (<h1>{ethPrice} CAD</h1>) : (<h1>Loading...</h1>)}
                    {ethIsGreen !== -1 ? ethIsGreen == 1 ? (<Image src={greenTriangle} width="15" alt="green triangle"/>) : (<Image src={redTriangle} width="15" className="rotate-180" alt="red triangle"/>) : (<h1></h1>)}
                    {ethPercentChange !== "" ? ethIsGreen == 1 ? (<h1 className="text-green-600">{ethPercentChange}</h1>) : (<h1 className="text-red-600">{BtcPercentChange}</h1>) : <h1></h1>}
                </a>
            </div>
        </div>
    </div>
    )
}