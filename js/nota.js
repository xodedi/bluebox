let lastGeneratedNota = '';

window.onload = () => {
  const lokasiInput = document.getElementById("lokasi");
  lokasiInput.focus();

  const driverInput = document.getElementById("driver");
  const savedDriver = localStorage.getItem("defaultDriver");
  if (savedDriver) driverInput.placeholder = savedDriver;

  const kodeUserInput = document.getElementById("kode_user");
  const savedKodeUser = localStorage.getItem("kodeUserDefault");
  if (savedKodeUser) {
    kodeUserInput.placeholder = savedKodeUser;
    kodeUserInput.value = savedKodeUser;
  }

  updatePreviewNota();
  kodeUserInput.addEventListener("input", updatePreviewNota);

  window.addEventListener("touchstart", function handler() {
    lokasiInput.focus();
    window.removeEventListener("touchstart", handler);
  });
};

document.getElementById("parkir").addEventListener("input", function () {
  if (this.value.length > 1) this.value = this.value.slice(0, 1);
});
document.getElementById("parkir").addEventListener("keydown", function (e) {
  if (e.key === "Enter") buatNota();
});

function capitalizeWords(str) {
  return str.replace(/\b\w+/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

function updatePreviewNota() {
  const kodeUser = ambilKodeUser();
  const tanggalStr = ambilTanggalStr();
  const nomorUrut = ambilUrutanNota(tanggalStr, false);
  document.getElementById("preview_nota").textContent = `${kodeUser}-${tanggalStr}-${nomorUrut}`;
}

function generateNotaNumber() {
  const tanggalStr = ambilTanggalStr();
  const kodeUser = ambilKodeUser(true);
  const nomorUrut = ambilUrutanNota(tanggalStr, true);
  return `_No.${kodeUser}-${tanggalStr}-${nomorUrut}_`;
}

function ambilTanggalStr() {
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');
  return `${now.getFullYear().toString().slice(-2)}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
}

function ambilKodeUser(simpan = false) {
  const input = document.getElementById("kode_user").value.trim();
  const kode = input || localStorage.getItem("kodeUserDefault") || "JS1";
  if (simpan) localStorage.setItem("kodeUserDefault", kode);
  return kode;
}

function ambilUrutanNota(tanggalStr, simpan) {
  const lastDate = localStorage.getItem("lastNotaDate");
  let urut = (lastDate === tanggalStr) ? (parseInt(localStorage.getItem("lastNotaUrut") || '0') + 1) : 1;
  if (simpan) {
    localStorage.setItem("lastNotaDate", tanggalStr);
    localStorage.setItem("lastNotaUrut", urut);
  }
  return urut.toString().padStart(3, '0');
}

function ambilOngkir(jarak, mode) {
  return mode === 'berdua'
    ? (jarak < 4 ? 15000 : Math.floor(jarak * 4000))
    : (jarak > 3.9 ? Math.floor(jarak * 2500) : 9000);
}

function buatNota() {
  const lokasi = ambilArrayInput("lokasi");
  const produkHargaRaw = ambilArrayInput("produk_harga");
  const jumlah_lokasi = parseInt(document.getElementById("jumlah_lokasi").value) || 1;
  const jarak = parseFloat(document.getElementById("jarak").value) || 3.9;
  const parkir = (parseInt(document.getElementById("parkir").value) || 0) * 1000;
  const driverInput = document.getElementById("driver").value.trim();
  const driver = driverInput || localStorage.getItem("defaultDriver") || "Dedy Styawan";
  localStorage.setItem("defaultDriver", driver);

  if (lokasi.length > jumlah_lokasi) {
    alert("Jumlah lokasi tidak sesuai dengan jumlah nama lokasi yang dimasukkan. Mohon cek ulang!");
    return;
  }

  const { produk, harga } = pecahProdukHarga(produkHargaRaw);
  const ongkirMode = document.querySelector('input[name="ongkir_mode"]:checked').value;
  const ongkirDasarFinal = ambilOngkir(jarak, ongkirMode);
  const tambahanLokasi = jumlah_lokasi > 1 ? 2000 + Math.max(0, jumlah_lokasi - 2) * 3000 : 0;
  const ongkirTotal = ongkirDasarFinal + tambahanLokasi;
  const subtotal = harga.reduce((a, b) => a + b, 0);
  const total = subtotal + parkir + ongkirTotal;

  const lokasiText = lokasi.length < jumlah_lokasi
    ? `${lokasi.map(capitalizeWords).join(", ")} (dan lainnya)`
    : lokasi.map(capitalizeWords).join(", ");
  const produkList = produk.map((p, i) => `- ${p.padEnd(19)}Rp${harga[i].toLocaleString()}`).join("\n");
  const jarakText = jarak > 3.9 ? `~${jarak} km` : "<4 km";
  const lokasiLine = jumlah_lokasi === 1 ? "" : `- Ambil di ${jumlah_lokasi} Lokasi Rp${tambahanLokasi.toLocaleString()}\n`;
  const ongkirLabel = ongkirMode === 'berdua' ? "Ongkir(berdua)" : "Ongkos Kirim";
  const notaNumber = generateNotaNumber();

  const nota = `*NOTA ELEKTRONIK || _jastar.id_*
- ${notaNumber}
============================
Pelanggan Yth. Kamu telah pesan delivery dari: ${lokasiText}
- _Rincian Pembayaran:_
${produkList}
- - - - - - - - - - - - - - -
- Subtotal        Rp${subtotal.toLocaleString()}
${lokasiLine}- ${ongkirLabel} ${jarakText} Rp${ongkirDasarFinal.toLocaleString()}
- Biaya parkir Rp${parkir.toLocaleString()}
*============================*
📌 **Total Harga : Rp${total.toLocaleString()}**
*============================*
Diantar oleh: ${driver}
_Dengan terbitnya nota ini berarti makanan / barang telah dibeli. Terimakasih_`;

  lastGeneratedNota = nota;
  const encodedMessage = encodeURIComponent(nota);
  const intentUrl = `intent://send/?text=${encodedMessage}#Intent;scheme=whatsapp;package=com.whatsapp.w4b;end`;

  try {
    window.location.href = intentUrl;
  } catch {
    alert("Gagal membuka WhatsApp. Silakan salin nota secara manual.");
  }
}

function clearInput() {
  ["lokasi", "produk_harga", "jumlah_lokasi", "jarak", "parkir", "driver", "kode_user"].forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("mode_biasa").checked = true;
  document.getElementById("lokasi").focus();
  updatePreviewNota();
}

function ambilArrayInput(id) {
  return document.getElementById(id).value.split(",").map(x => x.trim()).filter(Boolean);
}

function pecahProdukHarga(list) {
  const produk = [], harga = [];
  list.forEach(item => {
    const lastSpace = item.lastIndexOf(" ");
    if (lastSpace > 0) {
      produk.push(capitalizeWords(item.slice(0, lastSpace).trim()));
      harga.push(parseInt(item.slice(lastSpace + 1).trim()));
    }
  });
  return { produk, harga };
}