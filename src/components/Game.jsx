import gameData from "../data/data";
import { useEffect } from "react";
import { useState } from "react";

const categoryConverter = (category) => {
  const convert = {
    Filmler: "movies",
    Diziler: "series",
    Ülkeler: "countries",
    Başkentler: "capitals",
    Hayvanlar: "animals",
    Sporlar: "sports",
  };
  return convert[category];
};

function Game({ handleModal, category }) {
  const [words, setWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [splitWord, setSplitWord] = useState([]);
  const [health, setHealth] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    restartGame();
  }, [category]);

  useEffect(() => {
    if (splitWord.every((x) => x.guessed) && splitWord.length > 0) {
      if (wordIndex < words.length) {
        setTimeout(() => {
          hamdleShowModal("Kazandınız");
          setWordIndex(wordIndex + 1);
        }, 1000);
      } else {
        hamdleShowModal("Oyun Bitti");
      }
    }
  }, [splitWord]);

  useEffect(() => {
    if (words.length === 0) return;
    setSplitWord(words[wordIndex].split("").map((x) => ({ letter: x, guessed: false })));
  }, [words, wordIndex]);

  useEffect(() => {
    if (health === 0) {
      hamdleShowModal("Kaybettiniz");
      restartGame();
    }
  }, [health]);

  const restartGame = () => {
    const randomWords = gameData[categoryConverter(category)].sort(() => Math.random() - 0.5);
    setWords(randomWords);
    setHealth(10);
    setWordIndex(0);
    setSplitWord(randomWords[0].split("").map((x) => ({ letter: x, guessed: false })));
  };
  
  const handleKeyboardClick = (w) => {
    let isCorrect = false;
    splitWord.map((x) => {
      if (x.letter == w) {
        x.guessed = true;
        isCorrect = true;
      }
    });
    setSplitWord([...splitWord]);

    if (!isCorrect) {
      setHealth(health - 1);
    }
  };

  const hamdleShowModal = (status) => {
    setStatusMessage(status);
    setShowModal(true);
  };

  function handleModalBtns(type) {
    if (type === "continue") {
      setShowModal(false);
    } else {
      handleModal(type);
    }
  }

  return (
    <div className="game tab-container">
      {showModal && <Modal statusMessage={statusMessage} handleModalBtns={handleModalBtns} />}
      <div className="game-header">
        <div className="game-header-left">
          <button className="back-btn" onClick={() => hamdleShowModal("Paused")}>
            <img src="./images/menu.svg" alt="Back" />
          </button>
          <h1>{category}</h1>
        </div>
        <div className="game-header-right">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: 10 * health + "%" }}></div>
          </div>
          <img src="./images/health.svg" alt="Health" />
        </div>
      </div>
      <Word splitWord={splitWord} handleKeyboardClick={handleKeyboardClick} />
    </div>
  );
}

function Word({ splitWord, handleKeyboardClick }) {
  return (
    <div className="game-content">
      <div className="word">
        {splitWord.map((x, i) => (
          <span key={i} className={"word-box" + (x.letter.trim() === "" ? " space" : x.guessed ? " active" : "")}>
            {x.guessed ? x.letter : ""}
          </span>
        ))}
      </div>

      <div className="keyboard">
        {Array.from("ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ").map((w) => (
          <button
            key={w}
            className={"keyboard-btn" + (splitWord.find((x) => x.letter === w && x.guessed === true) ? " passive" : "")}
            onClick={() => handleKeyboardClick(w)}
            disabled={splitWord.find((x) => x.letter === w && x.guessed) ? true : false}
          >
            {w}
          </button>
        ))}
      </div>
    </div>
  );
}

function Modal({ statusMessage, handleModalBtns }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1 className="modal-title">{statusMessage}</h1>
        <button className="blue-btn" onClick={() => handleModalBtns("continue")}>
          DEVAM ET
        </button>
        <button className="blue-btn" onClick={() => handleModalBtns("backCategory")}>
          YENİ KATEGORİ
        </button>
        <button className="pink-btn" onClick={() => handleModalBtns("quit")}>
          ÇIK
        </button>
      </div>
    </div>
  );
}

export default Game;
