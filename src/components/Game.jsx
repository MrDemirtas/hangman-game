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
  const [wordIndex, setWordIndex] = useState(null);
  const [splitLetter, setSplitLetter] = useState([]);
  const [splitWord, setSplitWord] = useState([]);
  const [health, setHealth] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    restartGame();
  }, []);

  useEffect(() => {
    if (splitLetter.filter((x) => x.letter.trim() !== "").every((x) => x.guessed) && splitLetter.length > 0) {
      if (wordIndex < words.length) {
        setTimeout(() => {
          hamdleShowModal("Kazandınız");
          setWordIndex(wordIndex + 1);
        }, 1000);
      } else {
        hamdleShowModal("Oyun Bitti");
      }
    }
  }, [splitLetter]);

  useEffect(() => {
    if (words.length === 0 || wordIndex === null) return;
    setSplitWord(words[wordIndex].split(" ").map((x) => x));
    setSplitLetter(words[wordIndex].split("").map((x) => ({ letter: x, guessed: false })));
  }, [wordIndex, words]);

  useEffect(() => {
    if (health === 0) {
      hamdleShowModal("Kaybettiniz");
      restartGame();
    }
  }, [health]);

  useEffect(() => {
    if (words.length === 0) return;
    setWordIndex(0);
    setHealth(10);
  }, [words]);

  const restartGame = () => {
    const newWords = [...gameData[categoryConverter(category)]].sort(() => Math.random() - 0.5);
    setWords(newWords);
    setWordIndex(0); // Ensure wordIndex is reset after setting new words
  };

  const handleKeyboardClick = (w) => {
    let isCorrect = false;
    splitLetter.map((x) => {
      if (x.letter == w) {
        x.guessed = true;
        isCorrect = true;
      }
    });
    setSplitLetter([...splitLetter]);

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
      {splitWord.length > 0 && <Word splitWord={splitWord} splitLetter={splitLetter} handleKeyboardClick={handleKeyboardClick} />}
    </div>
  );
}

function Word({ splitWord, splitLetter, handleKeyboardClick }) {
  const getWordWidth = (word) => {
    if (word.length > 10) {
      return " thenTen";
    } else if (word.length > 8) {
      return " thenEight";
    } else if (word.length > 6) {
      return " thenSix";
    } else {
      return "";
    }
  };

  return (
    <div className="game-content">
      <div className="word-content">
        {splitWord.map((x, i) => (
          <div className="word" key={i}>
            {x.split("").map((y, j) => {
              const isGuessed = splitLetter.find((z) => z.letter === y && z.guessed === true);
              return (
                <span key={j} className={"word-box" + getWordWidth(x) + (isGuessed ? " active" : "")}>
                  {isGuessed ? y : ""}
                </span>
              );
            })}
            {
              (x.length > 3 || splitWord[i + 1]?.length > 3) && splitWord.length - 1 !== i ? 
              <span style={{ flexBasis: "100%" }}></span> 
              : 
              splitWord.length - 1 !== i && 
              <span className="word-box space"></span>}
          </div>
        ))}
      </div>

      <div className="keyboard">
        {Array.from("ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ").map((w) => (
          <button key={w} className={"keyboard-btn" + (splitLetter.find((x) => x.letter === w && x.guessed === true) ? " passive" : "")} onClick={() => handleKeyboardClick(w)} disabled={splitLetter.find((x) => x.letter === w && x.guessed) ? true : false}>
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
