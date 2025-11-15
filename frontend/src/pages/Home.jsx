import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import axios from "axios";
import React, {useState} from 'react';
import * as htmlToImage from "html-to-image";



function Home() {
  const [userInput, setUserInput] = useState("")
  const [result, setResult] = useState(null)

  const handlePlaylistGenerate = async () => {
    if  (!userInput) {
      return alert("Please enter something ...")
    }

    setResult(null)

    try {
        const res = await axios.post("http://localhost:5000/api/user/playlist", {userInput})
        setResult(res.data)
        setUserInput("");
    } catch (error) {
        console.error(error)
        alert("Failed to generate a playlist")
    } 
  }


  return (
    <div className='min-h-screen bg-gradient-lg items-center'>
        < Navigation/>
        <Logo/>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end space-y-10 lg:space-x-30 pt-10">
          
            <section className="flex flex-col items-center space-y-6 lg:space-y-10">
                <article className="flex flex-row space-x-2">
                  <p className="w-8 h-8 border rounded-full p-1 bg-linear-to-t from-neonGreen to-lightWhite"></p>
                  <p className="text-sm italic border rounded-full px-4 py-1 bg-linear-to-t from-neonGreen to-lightWhite">What playlist theme are we going for?</p>
                </article>
                <article className="flex space-x-2">
                  
                  <input type="text" 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)} 
                    placeholder="e.g. relapse playlist"
                    className="text-sm w-full border rounded-lg py-2 px-4"/>

                  <button type="submit" onClick={handlePlaylistGenerate} >
                    <img src="src/assets/send.png" alt="Send Button" className="w-12 h-auto cursor-pointer" />
                  </button>
                </article>
            </section>

            <section>
              {result ? (<>
                <div className="border rounded-lg flex flex-col p-3 space-y-2 w-100 h-80 lg:w-110 lg:h-90">
                    <div className="flex items-center space-x-3">
                      <h1 className="font-heading lg:text-lg bg-linear-to-t from-neonGreen to-lightWhite rounded-full px-2 py-1 border whitespace-nowrap">Your Playlist</h1>
                      <p className="font-semibold">{result.playlistName}</p>
                    </div>
                    {/* Songs List */}
                    <div className="flex flex-col overflow-y-auto hide-scrollbar">
                      <ul className="mt-1 space-y-3">
                        {result.songs?.map((song, index) => (
                          <li
                            key={index}
                            className="border mx-3 lg:mx-4 lg:m-2 rounded-md bg-lightWhite shadow-sm hover:bg-linear-to-t from-neonPink to-lightWhite hover:shadow-md hover:scale-105 duration-200 transition-all"
                          >
                            <div className="grid grid-cols-9 gap-2 p-2 items-center">
                              <p className="col-span-1 font-pixel text-lg">{song.id}</p>
                              <p className="col-span-5 lg:col-span-6 font-heading text-lg">{song.title}</p>
                              <p className="col-span-3 lg:col-span-2 font-heading text-sm text-smokyBlack">{song.artist}</p>
                              
                              
                            </div>
                            
                          </li>
                        ))}
                      </ul>
                    </div>
                </div>
              </>): (
                <div className="border rounded-lg flex flex-col items-center justify-center p-3 space-y-2 w-90 h-80 lg:w-100 lg:h-90">
                  <p className="font-heading lg:text-lg">Your playlist will generate here!</p>
                </div>
              )}
            </section>
        </div>
        
        <Footer/>

    
        
    </div>
  )
}

export default Home