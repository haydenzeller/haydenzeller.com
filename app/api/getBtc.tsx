'use server'
export default async function getBtc() {
  const url = "https://api.coincap.io/v2/assets/bitcoin"
  const options = {
    method: "GET",
    headers: {
      'Accept-Encoding': 'gzip',
      'Content-Type': 'application/json',
      'Authorization': '99430d7b-f619-4466-9516-94489df71410'
    }
  }
  try {
    const response = await fetch(url,options);
    if (!response.ok) {
      throw new Error('Fetch failed!?');
    }
    const data = await response.json();
    return data.data; // return the price value
  } catch (error) {
    console.error('Error: ', error);
    return null; // return null or handle error properly
  }
}