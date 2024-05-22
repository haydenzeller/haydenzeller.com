import { useEffect, useState } from "react";
import getWalletBalance from "../api/getWalletBalance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
export default function WalletScan() {
    const [walletAddr, setWalletAddr] = useState("");
    const [walletBalance, setWalletBalance] = useState(0);
    const [showDetail, setShowDetail] = useState(false);
    const [showError, setShowError] = useState(false);
    const handleClick = async () => {
        setShowDetail(false);
        setShowError(false);
        const balance = await getWalletBalance(walletAddr)
        if (balance.status == 1) {
            const val = String(Number(balance.result)*10**-18);
            const formatted = val.match(/^\d+\.0*\d{0,4}/);
            if (formatted) {
                setWalletBalance(Number(formatted[0]))
                setShowDetail(true);
            }
            else {
                setShowError(true);
            }
        } else {
            setShowError(true);
        }
    }
    return (
    <>
        <div className="flex flex-col justify-center place-items-center md:flex-row md:align-baseline md:place-items-baseline">
            <input className="input bg-white border-4 border-white bg-opacity-50  w-96" placeholder="Ethereum Address" onChange={e => setWalletAddr(e.target.value)}></input>
            <button className="btn w-32 mt-2 justify-center bg-opacity-50 bg-white text-black hover:bg-white hover:bg-opacity-100 border-4 border-white hover:border-white ml-1 md:mt-0 md:pt-0" onClick={handleClick}>Search</button>
        </div>
        { showDetail ? (
            <div className="flex flex-col mt-5 bg-white bg-opacity-50 backdrop-contrast-200 p-2 border-4 border-white rounded-lg">
                <h1 className="font-bold">Balance:</h1>
                <h1><FontAwesomeIcon icon={faEthereum} /> {walletBalance} ETH</h1>
            </div>
        ) : (<></>) }
        { showError ? (
            <div className="flex flex-col mt-5 text-red-600  bg-white backdrop-opacity-50 backdrop-contrast-200 p-2 border-4 border-white rounded-lg">
                <h1 className="text-center font-bold">API Error or Incorrect Address.</h1>
            </div> 
        ) : (<h1></h1>)}
    </>
    )
}