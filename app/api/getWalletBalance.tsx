export default async function getWalletBalance(address:string) {
    const API_KEY = "E1U2FXJVVCJVCPKFBD13RSAEHD3ZBHWRFY"

    const url = "https://api.etherscan.io/api?module=account&action=balance&address=" + address + "&tag=latest&apikey=" + API_KEY
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error("API Fetch Failed");
        }
        const data = await response.json();
        console.log(data.status);
        console.log(Number(data.result)*10**-18)
        return data;
    } catch (error) {
        console.error('Error: ', error);
        return null; // return null or handle error properly
    }    
}