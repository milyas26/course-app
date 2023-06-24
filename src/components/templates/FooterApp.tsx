'use client';

import { Footer } from 'flowbite-react';

export default function FooterApp() {
  return (
    <Footer container className='px-0'>
      <div className="w-full text-center">
        <Footer.Divider />
        <Footer.Copyright
          by="Kelompok 9"
          href="#"
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  )
}


