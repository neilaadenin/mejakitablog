'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  return (
    <nav className="max-w-[1680px] w-full mx-auto flex justify-between items-center p-4 shadow-md bg-white font-nunito text-[20px] font-normal">
      
      <div className="flex items-center">
        <Image src="/logo.png" alt="MejaKita Logo" width={200} height={30} />
      </div>

      <div className="hidden md:flex space-x-6 text-gray-700">
        <Link href="/" className="hover:text-gray-900">Beranda</Link>
        <Link href="/blog" className="hover:text-gray-900">Blog</Link>
        <Link href="/smartkitty" className="hover:text-gray-900">SmartKitty</Link>
      </div>

      <div className="flex items-center space-x-2">
        <Image
          src="/user-avatar.png"
          alt="User Avatar"
          width={50}
          height={32}
          className="rounded-full border border-gray-300"
        />
        <span className="text-gray-800">Username</span>
      </div>
    </nav>
  );
}
