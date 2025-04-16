# Adam Asmaca Oyunu 🎯

🎮 [Canlı Demo](https://hangman-game-liart-three.vercel.app/)

Bu proje, React ve Vite kullanılarak geliştirilmiş modern bir Adam Asmaca oyunudur. Oyun, farklı kategorilerde kelimeler içerir ve kullanıcı dostu bir arayüz sunar.

## 🎮 Oyun Özellikleri

- **Zengin Kategori Seçenekleri**: 6 farklı kategori (Filmler, Diziler, Ülkeler, Başkentler, Hayvanlar, Sporlar)
- **Dil Desteği**: Tam Türkçe karakter desteği ile yerel oyun deneyimi
- **Modern Tasarım**:
  - Responsive ve mobil uyumlu arayüz
  - Görsel can göstergesi ve ilerleme çubuğu
  - Dinamik oyun durumu modalları (Kazanma, Kaybetme, Duraklat)
  - Kelime uzunluğuna göre otomatik boyutlandırma
- **Kullanıcı Deneyimi**:
  - Kolay anlaşılır arayüz
  - Anlık geri bildirimler
  - Oyun istatistikleri

## 💻 Kullanılan Teknolojiler

- React
- Vite

## 📁 Dosya Yapısı

```
├── public/
│   └── images/          # Oyun içi görseller
├── src/
│   ├── components/      # React bileşenleri
│   ├── data/           # Oyun verileri
│   ├── App.jsx         # Ana uygulama bileşeni
│   └── main.jsx        # Uygulama giriş noktası
└── screenshot/         # Ekran görüntüleri
```

## 🛠️ Kurulum

1. Projeyi klonlayın:

```bash
git clone https://github.com/MrDemirtas/hangman-game.git
```

2. Proje dizinine gidin:

```bash
cd hangman-game
```

3. Bağımlılıkları yükleyin:

```bash
npm install
```

4. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

## 📦 Dağıtım

Projeyi derlemek için:

```bash
npm run build
```

Derlenen dosyalar `dist` klasöründe oluşturulacaktır.
