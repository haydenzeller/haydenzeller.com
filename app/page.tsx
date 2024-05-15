import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="rounded-lg p-5 bg-indigo-700">
        <h1 className="text-5xl font-bold ">Hello World.</h1>
        <p className="text-3xl">This is on the blockchain!</p>
      </div>
    </main>
  );
}
