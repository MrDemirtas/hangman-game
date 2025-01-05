function StartMenu({ handleHowToPlay, handlePickCategory }) {
  return (
    <div className="start-menu">
      <img className="logo" src="./images/logo.svg" alt="logo" />
      <div className="start-menu-container">
        <button className="play-btn" onClick={handlePickCategory}>
          <img src="./images/play-btn.svg" alt="Play Button" />
        </button>
        <button className="howtoplay-btn blue-btn" onClick={handleHowToPlay}>NASIL OYNANIR?</button>
      </div>
    </div>
  );
}

export default StartMenu;
