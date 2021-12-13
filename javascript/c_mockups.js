let api = require('./z_utils')

// API request mockup
// For the following arguments set ("2020-11-01", "EUR", "USD,JPY")
// The response should be
// { status: 200, data: {"rates":{"JPY":122.36,"USD":1.1698},"base":"EUR","date":"2020-10-30"} }
async function getCurrencyRatesFromCustomJs(date, base_currency, currencies){
    const URL = "https://api.exchangeratesapi.io/"
    let url = `${URL}${date}?base=${base_currency}&symbols=${currencies}`
    let resp = await api.get(url)
    if (resp.status == 200){
        return resp.data
    }
    return {}
}

module.exports = {
    getCurrencyRatesFromCustomJs
}