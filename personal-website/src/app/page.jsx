import Image from "next/image";

import Navbar from './Navbar'


export default function Home() {

  return (
    <div className="min-h-screen">
      {/* nav-bar */}
      <Navbar/>
      {/* landing page */}
      <div className="min-h-screen flex items-center px-4">
        <div className="max-w-6xl mx-auto w-full">
        </div>
      </div>

      {/* footer */}
      <footer className="fixed bottom-10 z-50 w-full px-4">
        <div>
          test
        </div>
      </footer>
    </div>
  );
}
