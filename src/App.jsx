import Game from './components/Game';
import HowToPlay from './components/HowToPlay';
import PickCategory from './components/PickCategory';
import StartMenu from './components/StartMenu';
import { useState } from 'react';

function App() {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showPickCategory, setShowPickCategory] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [selectCategory, setSelectCategory] = useState("");

  const handleHowToPlay = () => setShowHowToPlay(!showHowToPlay);
  const handlePickCategory = () => setShowPickCategory(!showPickCategory);
  
  const handleShowGame = (category) => {
    setSelectCategory(category);
    setShowPickCategory(false);
    setShowGame(true);
  };

  const handleModal = (type) => { 
    if (type === "backCategory") {
      setShowGame(false)
      setShowPickCategory(true);
    }else if (type === "quit") {
      setShowGame(false)
    }
  }

  return (
    <div className="container">
      {
        showHowToPlay ?
        <HowToPlay handleHowToPlay={handleHowToPlay} />
        :
        showPickCategory ? 
        <PickCategory handlePickCategory={handlePickCategory} handleShowGame={handleShowGame}/>  
        :
        showGame ?
        <Game handleModal={handleModal} category={selectCategory}/>
        :
        <StartMenu handleHowToPlay={handleHowToPlay} handlePickCategory={handlePickCategory}/>
      }
    </div>
  )
}

export default App
