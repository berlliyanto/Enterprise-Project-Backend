const urlOrder = "https://ena.aplikasipms.com/api/order";
const urlKurangi = "https://ena.aplikasipms.com/api/produk?method=kurangi";
const urlStok = "https://ena.aplikasipms.com/api/produk";

async function stokRoti() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    await fetch(urlStok, requestOptions)
        .then(response => response.json())
        .then(result => {
            const data = result['data'];
            var stokCoklat = data[0].stok;
            var stokKeju = data[1].stok;
            var stokStroberi = data[2].stok;

            var stokCoklatElement = document.getElementById('stokCoklat');
            var stokKejuElement = document.getElementById('stokKeju');
            var stokStroberiElement = document.getElementById('stokStroberi');

            stokCoklatElement.innerHTML = stokCoklat;
            stokKejuElement.innerHTML = stokKeju;
            stokStroberiElement.innerHTML = stokStroberi;
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
}

function sendEmail(namaPembeli, alamat, jenisroti, jumlah, email) {
    const text = `Halo ${namaPembeli} \n\nKami senang untuk memberitahu Anda bahwa pesanan Anda telah berhasil diterima dan sedang diproses. Berikut adalah rincian pesanan Anda:\n\nDetail Pesanan: \nAlamat Pengiriman: ${alamat}\nNama Penerima: ${namaPembeli}\nJenis Pesanan: ${jenisroti}\nJumlah Pesanan: ${jumlah}
    \n\nKami akan segera mengirimkan pesanan Anda dan memberikan informasi tentang nomor pelacakan begitu tersedia.\n\nJika Anda memiliki pertanyaan atau ada perubahan yang perlu dilakukan terhadap pesanan Anda, silakan hubungi kami melalui email ini atau nomor layanan pelanggan kami di 08663619321.\n\nTerima kasih telah berbelanja dengan kami!\n\nSalam Hangat, PT Cerita Rasa`;

    const data = {
        "to": email,
        "subject": "Konfirmasi Pesanan",
        "text": text,
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Tentukan tipe konten sesuai kebutuhan
        },
        body: JSON.stringify(data) // Konversi objek data menjadi format JSON
    }
    fetch("https://ena.aplikasipms.com/send-email", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('Respon:', result); // Respon dari API
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    var rotiOptions = document.getElementById('rotiOptions');
    rotiOptions.addEventListener('click', function () {
        jenisRoti = rotiOptions.value;
        console.log(jenisRoti);
    });
});

var jenisRoti;
async function beliRoti() {
    var name = document.getElementById('name').value;
    var alamat = document.getElementById('alamat').value;
    var email = document.getElementById('email').value;
    var jumlah = document.getElementById('jumlah').value;

    sendEmail(name, alamat, jenisRoti, jumlah, email);
    kurangiStok(jenisRoti, jumlah);
    const data = {
        "namaPembeli": name,
        "email": email,
        "alamat": alamat,
        "produk": jenisRoti,
        "jumlah": jumlah
    }

    console.log(data);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(urlOrder, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert('Berhasil beli silahkan cek email anda');
            window.location.href = '/product';
            console.log('Respon:', result);
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
}

async function kurangiStok(jenisRoti, jumlah) {
    const data = {
        "produk": jenisRoti,
        "stok": jumlah
    }
    const requestOptionsKurangi = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(urlKurangi, requestOptionsKurangi)
        .then(response => response.json())
        .then(result => {
            console.log('Kurangi Stok:', result);
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
}