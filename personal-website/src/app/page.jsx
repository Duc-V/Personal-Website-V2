import Navbar from './Navbar'
import Homepage from './Homepage'
import Work  from './Work'
import About from './About'
import Footer from './Footer'
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

      {/* about me */}  
      <About/>
      
      <Footer/>

    </div>
  );
}
