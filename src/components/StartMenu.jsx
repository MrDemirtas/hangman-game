import { ReactComponent as LogoSvg } from "./images/logo.svg";

function StartMenu() {
  return (
    <div className="start-menu">
      <LogoSvg />
      <div className="start-menu-container">
        <button>▶️</button>
        <button>HOW TO PLAY</button>
      </div>
    </div>
  );
}

export default StartMenu;