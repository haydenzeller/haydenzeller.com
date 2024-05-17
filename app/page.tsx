import githublogo from "../public/github-mark-white.png"
import Link from "next/link";
import x from "../public/x-logo.png"
import ens from "../public/ens_mark_light.png"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-2 pl-5 pr-5 bg-gradient-to-r from-indigo-400 to-orange-400">
      <div className="rounded-lg p-5 mt-5 backdrop-contrast-200 backdrop-blur-3xl border-4">
        <h1 className="text-3xl font-bold ">Hi👋</h1>
        <p className="text-2xl font-bold">I&apos;m Hayden Zeller,</p>
        <p className="text-2xl font-bold">Computer Science Student and <span className="bg-gradient-to-r from-indigo-500 via-green-500 to-violet-600 text-transparent bg-clip-text">Web 3.0</span> advocate.</p>
      </div>
      <div className="rounded-lg p-5 mt-5 backdrop-contrast-200 backdrop-blur-3xl border-4">
        <div>
          <h1 className="text-3xl font-bold underline text-center">Find me here</h1>
          <div id="github" className="flex flex-row items-center p-2">
            <Link href="https://github.com/haydenzeller" className="flex" target="_blank">
              <Image src={githublogo} alt="githublogo" width={50}/>
              <p className="text-2xl p-2 hover:text-violet-500 cursor-pointer hover:underline">haydenzeller</p>
            </Link>
          </div>
          <div id="x" className="flex flex-row items-center p-2">
            <Link href="https://x.com/haydendevs" className="flex" target="_blank">
              <Image src={x} alt="x logo (twitter)" width={50}/>
              <p className="text-2xl p-2 hover:text-violet-500 cursor-pointer hover:underline">@haydendevs</p>
            </Link>
          </div>
          <div id="ens" className="p-2">
            <Link href="https://app.ens.domains/haydenzeller.eth" className="flex" target="_blank">
              <Image src={ens} alt="ens logo (twitter)" width={50}/>
              <p className="text-2xl p-2 hover:text-violet-500 cursor-pointer hover:underline">haydenzeller.eth</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
