'use client';

import Image from 'next/image';

const articles = [
  {
    title: 'MejaKita: Platform Belajar Kolaboratif untuk Semua Pelajar',
    date: '13 Okt 2024',
    category: 'Edukasi',
    image: '/article1.png',
    description: 'Dengan fitur statistik, diskusi PR, dan catatan bersama, MejaKita hadir untuk membuat belajar lebih efektif dan interaktif.',
  },
  {
    title: 'Mengenal MejaKita: Cara Baru Belajar dengan Diskusi',
    date: '13 Okt 2024',
    category: 'Edukasi',
    image: '/article2.jpg',
    description: 'MejaKita memungkinkan berdiskusi dengan teman, dan berbagi catatan dalam komunitas pendidikan.',
  },
  {
    title: 'Inovasi Teknologi Pendidikan: Mengoptimalkan Pembelajaran dengan MejaKita',
    date: '13 Okt 2024',
    category: 'Teknologi',
    image: '/article3.jpg',
    description: 'MejaKita memanfaatkan teknologi untuk menciptakan lingkungan interaktif yang memungkinkan siswa berbagi ilmu.',
  },
  {
    title: 'Pengalaman Berharga: Program Magang di MejaKita',
    date: '13 Okt 2024',
    category: 'Edukasi',
    image: '/article4.jpg',
    description: 'MejaKita menawarkan program magang yang memberikan kesempatan untuk talent lokal.',
  },
  {
    title: 'Bersama Membangun Komunitas Belajar: Peran MejaKita dalam Pendidikan Indonesia',
    date: '13 Okt 2024',
    category: 'Edukasi',
    image: '/article5.jpg',
    description: 'Melalui fitur kolaboratif, MejaKita menciptakan ruang bagi siswa di seluruh Indonesia.',
  },
  {
    title: 'Tingkatkan Keterampilanmu dengan Fitur Interaktif di MejaKita',
    date: '13 Okt 2024',
    category: 'Teknologi',
    image: '/article6.jpg',
    description: 'Dari diskusi PR hingga TryOut UTBK, MejaKita menghadirkan fitur interaktif.',
  },
  {
    title: 'Membangun Karier di Industri EdTech: Kesempatan di MejaKita',
    date: '13 Okt 2024',
    category: 'Edukasi',
    image: '/article7.jpg',
    description: 'MejaKita membuka peluang karier bagi profesional yang ingin berkembang.',
  },
  {
    title: 'MejaKita: Inovasi dalam Pembelajaran dengan Fitur Berbagi Catatan dan Diskusi',
    date: '13 Okt 2024',
    category: 'Edukasi',
    image: '/article8.jpg',
    description: 'Fitur diskusi PR dan catatan bersama membuat belajar lebih efektif.',
  },
  {
    title: 'Strategi Efektif Menghadapi UTBK dengan Bantuan MejaKita',
    date: '13 Okt 2024',
    category: 'Teknologi',
    image: '/article9.png',
    description: 'Manfaatkan fitur TryOut UTBK dan materi pembelajaran dari MejaKita.',
  }
];

export default function RecommendationSection() {
  return (
    <section className="w-full max-w-[1680px] mx-auto px-[74px] mt-15 mb-20">
      <h2 className="text-4xl font-bold mb-4 flex items-center text-black">
        <span className="mr-2">🐱</span> Kitty ada rekomendasi nih buat kamu!
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden max-w-[6000px] h-[600px] mx-auto">
            <Image
              src={article.image}
              alt={article.title}
              width={384}
              height={250}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4">
              <div className="text-xs text-gray-500 mb-1 flex items-center space-x-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-3xl font-semibold text-black">{article.title}</h3>
              <p className="text-gray-600 text-lg mt-4 text-[#424040]">{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 mb-16">
        <button className="bg-gradient-to-b from-[#E36559] to-[#C34141] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition">
          Lihat Semua
        </button>
      </div>
    </section>
  );
}
