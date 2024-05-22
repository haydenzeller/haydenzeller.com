'use client'
import { useEffect, useState } from "react";
import githublogo from "../public/github-mark-white.png"
import Link from "next/link";
import x from "../public/x-logo.png"
import ens from "../public/ens_mark_light.png"
import Image from "next/image";
import InfoModal from "./components/infoModal";
import CryptoPrices from "./components/cryptoPrices"
import WalletScan from "./components/WalletScan";

export default function Home() {
  //Modal 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  //End Modal
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-400 to-orange-400">
        <InfoModal isOpen={isModalOpen} onClose={closeModal}></InfoModal>
        <button className="m-2 btn hover:border-white hover:bg-white border-4 border-white backdrop-contrast-200 bg-white bg-opacity-50" onClick={openModal}>
          <p className="text-black font-bold text-lg">Site Info</p>
        </button>
      </div>
      <main className="flex min-h-screen max-w-screen flex-col items-center md:flex bg-gradient-to-r from-indigo-400 to-orange-400">
        <div className="rounded-lg p-5 mt-5 mr-2 ml-2 backdrop-contrast-200 bg-white bg-opacity-50 border-4 border-white">
          <h1 className="text-3xl font-bold ">Hi👋</h1>
          <p className="text-2xl font-bold ">I&apos;m <span className="bg-gradient-to-r from-indigo-500 via-green-500 to-violet-600 text-transparent bg-clip-text">Hayden Zeller</span>,</p>
          <p className="text-2xl font-bold">Computer Science Student and <span className="bg-gradient-to-r from-indigo-500 via-green-500 to-violet-600 text-transparent bg-clip-text">Web 3.0</span> advocate.</p>
        </div>
        <div className="rounded-lg p-5 mt-5 backdrop-contrast-200 border-white bg-white bg-opacity-50 border-4">
          <div>
            <h1 className="text-3xl font-bold underline text-center">Find me here</h1>
            <div id="github" className="flex flex-row items-center p-2">
              <Link href="https://github.com/haydenzeller" className="flex flex-row items-center" target="_blank">
                <Image src={githublogo} alt="githublogo" width={50}/>
                <p className="text-2xl p-2 hover:text-violet-500 cursor-pointer hover:underline">haydenzeller</p>
              </Link>
            </div>
            <div id="x" className="flex flex-row items-center p-2">
              <Link href="https://x.com/haydendevs" className="flex flex-row items-center" target="_blank">
                <Image src={x} alt="x logo (twitter)" width={50}/>
                <p className="text-2xl p-2 hover:text-violet-500 cursor-pointer hover:underline">@haydendevs</p>
              </Link>
            </div>
            <div id="ens" className="flex flex-row items-center p-2">
              <Link href="https://app.ens.domains/haydenzeller.eth" className="flex flex-row items-center" target="_blank">
                <Image src={ens} alt="ens logo (twitter)" width={50}/>
                <p className="text-2xl p-2 hover:text-violet-500 cursor-pointer hover:underline">haydenzeller.eth</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <h1 className="font-bold text-2xl text-center">API Tests:</h1>
          <CryptoPrices/>
          <WalletScan />
        </div>
      </main>
  </>
  );
}
