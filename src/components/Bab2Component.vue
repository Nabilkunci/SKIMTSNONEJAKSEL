<template>
  <div class="container mx-auto px-4 py-8 space-y-10">

    <!-- Title Section -->
      <div class="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold mb-4">
          <i class="fa-solid fa-book-open mr-2"></i> BAB 2: Kerajaan Islam
        </h1>
        <p class="text-lg">
          Kerajaan Islam di Indonesia memiliki sejarah panjang dan beragam perkembangan. Dari kedatangan Islam melalui jalur perdagangan hingga penyebaran agama ini yang membentuk kerajaan-kerajaan besar. Mari kita pelajari lebih lanjut!
        </p>
      </div>

      <!-- Pendalaman Materi Section -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-green-800 mb-4">
          <i class="fa-solid fa-play-circle mr-2"></i> Pendalaman Materi
        </h2>
        <p class="text-gray-600 mb-4">
          Tonton video berikut untuk memahami sejarah dan perkembangan kerajaan Islam di Indonesia.
        </p>
        <div class="aspect-w-16 aspect-h-9 mb-4">
          <iframe class="rounded-lg" src="https://www.youtube.com/embed/example_video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>

      <!-- Tugas Section -->
      <div class="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h2 class="text-2xl font-bold text-green-800 mb-4">
          <i class="fa-solid fa-clipboard-list mr-2"></i> Tugas BAB 2
        </h2>

        <!-- Tugas Canva -->
        <div class="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-green-600 mb-2">Tugas 1: Buat Desain Canva</h3>
          <p class="text-gray-600 mb-4">
            Buat desain visual yang menjelaskan sejarah dan perkembangan kerajaan Islam di Indonesia menggunakan Canva.
          </p>
          <a href="/kirim-jawaban/tugas-canva" 
             class="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition">
            <i class="fa-solid fa-upload mr-2"></i> Kirim Desain Canva
          </a>
        </div>

        <!-- Tugas Individu -->
        <div class="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-green-600 mb-2">Tugas 2: Individu</h3>
          <p class="text-gray-600 mb-4">
            Jelaskan dalam esai pendek mengenai sejarah dan perkembangan kerajaan Islam di Indonesia.
          </p>
          <a href="/kirim-jawaban/tugas-individu" 
             class="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition">
            <i class="fa-solid fa-upload mr-2"></i> Kirim Jawaban Individu
          </a>
        </div>

        <!-- Tugas Kelompok -->
        <div class="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-green-600 mb-2">Tugas 3: Kelompok</h3>
          <p class="text-gray-600 mb-4">
            Diskusikan dalam kelompok mengenai pengaruh kerajaan Islam terhadap perkembangan budaya dan politik di Indonesia, lalu buat laporan kelompok.
          </p>
          <a href="/kirim-jawaban/tugas-kelompok" 
             class="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition">
            <i class="fa-solid fa-upload mr-2"></i> Kirim Laporan Kelompok
          </a>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Bab2Component',
};
</script>

<style scoped>
/* Tambahkan styling khusus jika diperlukan */
</style>
