<template>
  <div class="container mx-auto px-4 py-8 space-y-10">
    <!-- Judul BAB 4 -->
    <div class="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg p-6">
      <h1 class="text-3xl font-bold mb-4">
        <i class="fa-solid fa-book-open mr-2"></i> BAB 4: Kearifan Lokal
      </h1>
      <p class="text-lg">
        Kearifan lokal adalah pengetahuan dan kebijaksanaan yang diwariskan oleh masyarakat dan memiliki pengaruh besar terhadap kebudayaan lokal. Pada BAB 4 ini, kita akan mempelajari pentingnya kearifan lokal dalam kehidupan sehari-hari.
      </p>
    </div>

    <!-- Pendalaman Materi -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold text-blue-800 mb-4">
        <i class="fa-solid fa-play-circle mr-2"></i> Pendalaman Materi
      </h2>
      <p class="text-gray-600 mb-4">
        Tonton video berikut untuk memahami lebih dalam mengenai kearifan lokal yang ada di Indonesia dan bagaimana dampaknya terhadap masyarakat.
      </p>
      <div class="aspect-w-16 aspect-h-9 mb-4">
        <iframe class="rounded-lg" src="https://www.youtube.com/embed/example_video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>

    <!-- Tugas Bagian 1 -->
    <div class="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <h2 class="text-2xl font-bold text-blue-800 mb-4">
        <i class="fa-solid fa-clipboard-list mr-2"></i> Tugas BAB 4
      </h2>

      <!-- Tugas 1 -->
      <div class="p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 class="text-xl font-bold text-blue-600 mb-2">Tugas 1: Buat Desain Canva</h3>
        <p class="text-gray-600 mb-4">
          Buat desain visual mengenai konsep kearifan lokal di Indonesia menggunakan Canva.
        </p>
        <a href="/kirim-jawaban/tugas-canva" 
           class="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition">
          <i class="fa-solid fa-upload mr-2"></i> Kirim Desain Canva
        </a>
      </div>

      <!-- Tugas 2 -->
      <div class="p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 class="text-xl font-bold text-blue-600 mb-2">Tugas 2: Individu</h3>
        <p class="text-gray-600 mb-4">
          Jelaskan dalam esai pendek mengenai penerapan kearifan lokal di berbagai daerah Indonesia.
        </p>
        <a href="/kirim-jawaban/tugas-individu" 
           class="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition">
          <i class="fa-solid fa-upload mr-2"></i> Kirim Jawaban Individu
        </a>
      </div>

      <!-- Tugas 3 -->
      <div class="p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 class="text-xl font-bold text-blue-600 mb-2">Tugas 3: Kelompok</h3>
        <p class="text-gray-600 mb-4">
          Diskusikan dalam kelompok mengenai dampak kearifan lokal terhadap lingkungan dan sosial masyarakat, lalu buat laporan kelompok.
        </p>
        <a href="/kirim-jawaban/tugas-kelompok" 
           class="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition">
          <i class="fa-solid fa-upload mr-2"></i> Kirim Laporan Kelompok
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Bab4Component"
}
</script>

<style scoped>
/* Styling untuk komponen Bab 4 */
</style>
