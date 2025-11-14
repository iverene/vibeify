import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Logo from "../components/Logo";


function Home() {
  return (
    <div className='min-h-screen bg-gradient-lg'>
        < Navigation/>
        <div className="flex flex-col items-center">
            <Logo/>
        </div>
        
        <Footer/>

    
        
    </div>
  )
}

export default Home