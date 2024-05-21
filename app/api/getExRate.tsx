import Freecurrencyapi from '@everapi/freecurrencyapi-js';
export default async function getExRate() {
    const currencyconvert = new Freecurrencyapi('fca_live_JmnimPaHhYNajShOoYktZUGwXfySCaVmJ4wqRKmf');
    sessionStorage
    try {
        const response = await currencyconvert.latest({
            base_currency: 'USD',
            currencies: 'CAD'
        });
        
        const data = await response;
        return data.data.CAD;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        throw error;
    }
}
