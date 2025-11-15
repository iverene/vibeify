import logo from '../assets/logo.png';

function Logo() {
  return (
    <div className="flex flex-col items-center">
        <img src={logo} alt="Vibeify Logo" className="w-auto h-20 lg:h-25" />
        <h1 className="lg:text-lg">Playlist Generator</h1>
    </div>
  )
}

export default Logo