const categoryData = [
  {
    id: 1,
    name: "Filmler",
  },
  {
    id: 2,
    name: "Diziler",
  },
  {
    id: 3,
    name: "Ülkeler",
  },
  {
    id: 4,
    name: "Başkentler",
  },
  {
    id: 5,
    name: "Hayvanlar",
  },
  {
    id: 6,
    name: "Sporlar",
  },
];

function PickCategory({ handlePickCategory, handleShowGame }) {
  return (
    <div className="pick-category tab-container">
      <div className="pick-category-header tab-header">
        <button className="back-btn" onClick={handlePickCategory}>
          <img src="./images/back.svg" alt="Back" />
        </button>
        <h1 className="tab-header-title">Kategori Seç</h1>
      </div>
      <ul className="category-list">
        {categoryData.map((item) => (
          <li key={item.id} className="category-list-item">
            <button onClick={() => handleShowGame(item.name)}>{item.name.toLocaleUpperCase("tr")}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PickCategory;
