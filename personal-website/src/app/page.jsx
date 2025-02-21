import Image from "next/image";
import Navbar from './Navbar'
import Homepage from './Homepage'
import Work  from './Work'
export default function Home() {

  return (
    <div className="min-h-screen">
      {/* nav-bar */}
      <Navbar/>
      {/* landing page */}
      <Homepage/>

      {/* Work section */}
      <Work/>
      {/* footer */}
      {/* <footer className="fixed bottom-10 z-50 w-full px-4">
        <div>
          test
        </div>
      </footer> */}
    </div>
  );
}
