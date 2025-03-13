export default function Footer() {
  return (
    <footer className="bg-white w-full border-t border-gray-200 px-[74px]">
      <div className="max-w-[1680px] mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="MejaKita Logo" width={200} height={30} />
          </div>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            Bergabunglah dengan MejaKita dan ikut serta dalam revolusi pembelajaran bersama demi pendidikan Indonesia yang lebih baik!
          </p>
        </div>

        {/* Tentang Kami */}
        <div>
          <h4 className="text-xl font-semibold text-black">Tentang Kami</h4>
          <ul className="mt-3 space-y-2 text-gray-600 text-lg">
            <li>MejaKita</li>
            <li>Blog MejaKita</li>
            <li>MejaKita Academy</li>
            <li>Term & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Fitur Belajar */}
        <div>
          <h4 className="text-xl font-semibold text-black">Fitur Belajar</h4>
          <ul className="mt-3 space-y-2 text-gray-600 text-lg">
            <li>Langganan</li>
            <li>TO SNBT</li>
            <li>Diskusi PR</li>
            <li>Berbagi Catatan</li>
            <li>Materi</li>
            <li>Rumus</li>
          </ul>
        </div>

        {/* Ikuti Kami */}
        <div>
          <h4 className="text-xl font-semibold text-black">Ikuti Kami</h4>
          <p className="text-lg text-gray-600 mt-3">Jangan ketinggalan! Lihat serunya MejaKita di Sini</p>
          <div className="flex space-x-4 mt-4">
            <img src="/youtube.svg" alt="YouTube" className="w-7 h-7" />
            <img src="/twitter.svg" alt="Twitter" className="w-7 h-7" />
            <img src="/instagram.svg" alt="Instagram" className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-lg py-6 border-t border-gray-200">
        © 2016 - 2024 PT MejaKita Edunusa Mandiri
      </div>
    </footer>
  );
}