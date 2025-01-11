const howToPlayData = [
  {
    id: "01",
    title: "Bir kategori seçin",
    desc: "Öncelikle, hayvanlar veya filmler gibi bir kelime kategorisi seçin. Bilgisayar daha sonra o konudan rastgele bir gizli kelime seçer ve kelimenin her harfi için boşluklar gösterir.",
  },
  {
    id: "02",
    title: "Harf tahmin edin",
    desc: "Sırasıyla harf tahmin edin. Tahmininiz doğruysa, bilgisayar ilgili boşlukları doldurur. Yanlışsa, sağlık kaybedersiniz ve 10 yanlış tahminden sonra sağlık tamamen tükenir.",
  },
  {
    id: "03",
    title: "Kazanın veya kaybedin",
    desc: "Sağlığınız tükenmeden önce kelimedeki tüm harfleri tahmin ederek kazanırsınız. Sağlık çubuğu kelimeyi tahmin etmeden önce tükenirse, kaybedersiniz.",
  },
];

function HowToPlay({ handleHowToPlay }) {
  return (
    <div className="how-to-play tab-container">
      <div className="how-to-play-header tab-header">
        <button className="back-btn" onClick={handleHowToPlay}>
          <img src="./images/back.svg" alt="Back" />
        </button>
        <h1 className="tab-header-title">Nasıl Oynanır?</h1>
      </div>
      <ul className="how-to-play-list">
        {howToPlayData.map((item) => (
          <li key={item.id} className="how-to-play-list-item">    
            <h2><span>{item.id}</span>{item.title}</h2>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HowToPlay;
