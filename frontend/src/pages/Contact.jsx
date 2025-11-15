import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

function Contact() {
  return (
    <div className='min-h-screen bg-gradient-lg'>
        < Navigation/>
        <div className="flex flex-col items-center space-y-10 px-10">
            <Logo/>

            <div className="border rounded-lg flex flex-col items-center px-5 py-4 mb-15 space-y-5 w-full lg:max-w-140">
              <h1 className="font-heading text-lg lg:text-xl bg-linear-to-t from-neonGreen to-lightWhite rounded-full px-2 py-1 border whitespace-nowrap">Contact Me</h1>
              <p>Got a question, a suggestion, or just want to share your favorite playlist vibes? Hit me up!</p>
              <div className="flex space-x-10">
                <a href="https://github.com/iverene" className="icons">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:causapiniverenegrace@email.com" className="icons">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
              
            </div>
        </div>
        
        <Footer/>

    
        
    </div>
  )
}

export default Contact