import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

function About() {
  return (
    <div className='min-h-screen bg-gradient-lg'>
        < Navigation/>
        <div className="flex flex-col items-center space-y-10 px-10">
            <Logo/>

            <div className="border rounded-lg flex flex-col items-center px-5 py-4 mb-15 space-y-2 w-full lg:max-w-140">
              <h1 className="font-heading text-lg lg:text-xl bg-linear-to-t from-neonGreen to-lightWhite rounded-full px-2 py-1 border whitespace-nowrap">About</h1>
              <p>Welcome to <span className="font-bold">Vibeify</span> — your personal soundtrack generator. Ever wished your life had a playlist for every moment? That feeling when you’re walking through city lights, sipping coffee, or staring out the window on a rainy day… that’s what we capture.</p>
              <p>Vibeify turns whatever you type — your thoughts, your vibes, even your wildest mood descriptions — into a playlist that fits like it was written just for your scene. Think of it as your life’s cinematic score, curated with a little AI magic and a lot of heart.</p>
              <p>Whether you’re feeling like the hero of a rom-com, the star of an indie drama, or just vibing on your own, Vibeify is here to soundtrack your moments.</p>
              <p className="italic">Main character energy? Always included.</p>
            </div>
        </div>
        
        <Footer/>

    
        
    </div>
  )
}

export default About