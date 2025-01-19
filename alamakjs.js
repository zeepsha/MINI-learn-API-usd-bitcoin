const btnEl = document.getElementById("123");
const btcPriceEl = document.getElementById("btc-price"); 
const btcChangeEl = document.getElementById("btc-price-C");
const btcVolumeEl = document.getElementById("btc-price-Volume")
const APIkey = "KwE4fYFYB5DZYQM3DxFzJA==GICagw6gky4saLCC"; //Key dari ninja api
var limit = 3; // Set limit



function fetchBTCPrice() {
    const btcUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'; //api usd btc
    console.log('Requesting BTC Price URL:', btcUrl); 

    fetch(btcUrl) //masuk ke url API
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status + ' ' + response.statusText);
        }
        return response.json();//return .json buat agar si js bisa baca file JSON, returnnya di pakai agar bisa di panggil di next
    })//then di pakai buat manggil url
    .then(data => {
    const price = data.bitcoin.usd; // Mengambil harga Bitcoin saat ini
    const priceChange = data['24h_price_change']; // Perubahan harga dalam 24 jam terakhir eror
    const volume = data['24h_volume']; // Volume transaksi dalam 24 jam terakhir erpr
    
    // Menampilkan data ke elemen HTML
    btcPriceEl.innerText = "Harga Sekarang: $" + price;
    btcChangeEl.innerText = "Perubahan Harga: $" + priceChange;
    btcVolumeEl.innerText = "Volume 24h: " + volume + " BTC";
    })
    .catch(error => {
        console.error('Error fetching BTC price: ', error);
        btcPriceEl.innerText = "Failed to fetch BTC price.";
    });
}

btnEl.addEventListener("click", () => {
    fetchBTCPrice(); 
});

/*Flow-nya seperti ini:
fetch(): Mengambil data dari API.
then(response => response.json()): Mengonversi response menjadi JSON.
then(data => { ... }): Memanipulasi atau menampilkan data yang sudah dikonversi.
catch(error => { ... }): Menangani error jika ada.*/