const series = [
  "GAME OF THRONES", "BREAKING BAD", "STRANGER THINGS", "THE CROWN", "THE OFFICE", "FRIENDS", "THE MANDALORIAN", "DARK", "MONEY HEIST", "THE WITCHER", 
  "NARCOS", "SHERLOCK", "PEAKY BLINDERS", "THE WALKING DEAD", "BETTER CALL SAUL", "BLACK MIRROR", "VIKINGS", "HOUSE OF CARDS", "WESTWORLD", "PRISON BREAK", 
  "TRUE DETECTIVE", "DEXTER", "THE BOYS", "FARGO", "THE UMBRELLA ACADEMY", "CHERNOBYL", "STRANGER THINGS", "OZARK", "RICK AND MORTY", "ARROW", "THE FLASH", 
  "SUPERNATURAL", "NARCOS MEXICO", "DARK CRYSTAL AGE OF RESISTANCE", "BROOKLYN NINE-NINE", "THE X FILES", "LOST", "HOW I MET YOUR MOTHER", "THE BIG BANG THEORY", 
  "SILICON VALLEY", "THE EXPANSE", "NARCOS MEKSİKA", "HANNIBAL", "MINDHUNTER", "BLACK SAILS", "LUTHER", "SONS OF ANARCHY"
];

const sports = [
  "FUTBOL", "BASKETBOL", "VOLEYBOL", "TENİS", "MASA TENİSİ", "BADMİNTON", "YÜZME", "KOŞU", "BİSİKLET", "GÜREŞ", "BOKS", "KARATE", "CİRİT", "OKÇULUK", "GOLF", 
  "RAGBİ", "HOKEY", "BUZ HOKEYİ", "KAYAK", "RÜZGAR SÖRFÜ", "YELKEN", "KÜREK", "HALTER", "JİMNASTİK", "ÜÇLÜ YARIŞ", "BİNİCİLİK", "HENTBOL", "PLAJ VOLEYBOLU", 
  "SATRANÇ", "KAYKAY", "ATLETİZM", "DAĞCILIK", "TRAMBOLİN", "YOGA", "PİLATES"
];

const movies = [
  "ESARETİN BEDELİ", "BABA", "KARA ŞÖVALYE", "UCUZ ROMAN", "FORREST GUMP", "BAŞLANGIÇ", "DÖVÜŞ KULÜBÜ", "MATRİX", "YÜZÜKLERİN EFENDİSİ KRALIN DÖNÜŞÜ", 
  "GLADYATÖR", "YILDIZ SAVAŞLARI İMPARATOR", "TİTANİK", "JURASSIC PARK", "AVATAR", "KUZULARIN SESSİZLİĞİ", "SCHINDLER'İN LİSTESİ", "PRESTİJ", "KÖSTEBEK", 
  "GEÇMİŞE YOLCULUK", "ASLAN KRAL", "CASABLANCA", "YEŞİL YOL", "YENİLMEZLER", "YILDIZLARARASI", "ÇENE", "YILDIZ SAVAŞLARI YENİ BİR UMUT", "CİNNET", "SIKI DOSTLAR", 
  "YEDİ", "SOSYAL AĞ", "OZ BÜYÜCÜSÜ", "İNANILMAZ AİLE", "TRUMAN SHOW", "ÖRÜMCEK ADAM EVE DÖNÜŞ YOK", "MUHTEŞEM GATSBY", "KARA ŞÖVALYE YÜKSELİYOR", "COCO", 
  "AŞIKLAR ŞEHRİ", "BÜYÜK LEBOWSKİ", "MATRİX YÜKLENİYOR", "BİR CASUS VARSAYALIM", "JOKER", "DEADPOOL", "ÇILGIN MAX ÖFKELİ YOLLAR", "DİRİLİŞ", "GALAKSİNİN KORUYUCULARI", 
  "WHIPLASH"
];

const countries = [
  "TÜRKİYE", "AMERİKA BİRLEŞİK DEVLETLERİ", "ALMANYA", "FRANSA", "İNGİLTERE", "İTALYA", "İSPANYA", "KANADA", "BREZİLYA", "AVUSTRALYA", "ARJANTİN", "RUSYA", 
  "HİNDİSTAN", "ÇİN", "JAPONYA", "GÜNEY KORE", "MEKSİKA", "ENDONEZYA", "NİJERYA", "KUZEY KORE", "PAKİSTAN", "SUUDİ ARABİSTAN", "KIRGIZİSTAN", "UKRAYNA", "İRAN", 
  "IRAK", "SURİYE", "YUNANİSTAN", "HOLLANDA", "BELÇİKA", "POLONYA", "DANİMARKA", "İSVEÇ", "NORVEÇ", "FİNLANDİYA", "ÇEK CUMHURİYETİ", "MACARİSTAN", "ROMANYA", 
  "BULGARİSTAN", "SIRBİSTAN", "KARADAĞ", "KOSOVA", "ARNAVUTLUK", "MISIR", "TUNUS", "FAS", "KENYA", "TANZANYA", "GANA", "ZAMBİYA", "YENİ ZELANDA", "İSVİÇRE", 
  "AVUSTURYA", "SLOVAKYA", "SLOVENYA", "LÜKSEMBURG", "PORTEKİZ", "İRLANDA", "MALTA", "LİTVANYA", "LATVİA", "ESTONYA", "UZAKİSTAN", "TACİKİSTAN", "TÜRKMENİSTAN", 
  "AFGANİSTAN", "BANGLADEŞ", "NEPAL", "SRİ LANKA", "FİLİPİNLER", "VİETNAM", "TAYLAND", "MALEZYA", "SİNGAPUR", "BAHAMALAR", "JAMAİKA", "BARBADOS", "SAINT LUCIA", 
  "SAINT KITTS VE NEVIS", "GRENADA", "ANTİGUA VE BARBUDA", "DOMİNİKA", "SAINT VINCENT VE GRENADİNLER", "HAİTİ", "JAPONYA", "MONGOLİSTAN", "KAMBOÇYA", "LAOS", 
  "BRUNEY", "MALAVİ", "MOZAMBİK", "BOTSVANA", "LESOTHO", "ESWATİNİ", "NAMİBYA", "ZİMBABVE", "SEYŞELLER", "KOMORLAR", "MADAGASKAR", "MAURİTİUS", "RUANDA", "BURUNDİ", 
  "GABON", "GİNE-BİSSAU", "SAO TOME VE PRİNCIPE", "BENİN", "TOGO", "FİLDİŞİ SAHİLİ", "LİBERİYA", "SİERRA LEONE", "ÇAD", "ORTA AFRİKA CUMHURİYETİ", "GÜNEY SUDAN", 
  "ZAMBİYA", "MALAVİ", "KAMERUN", "GİNE", "BURKİNA FASO"
];

const capitals = [
  "ANKARA", "WASHINGTON DC", "BERLİN", "PARİS", "LONDRA", "ROMA", "MADRİD", "OTTAWA", "BRASİLİYA", "CANBERRA", "BUENOS AİRES", "MOSKOVA", "YENİ DELHİ", "PEKİN", 
  "TOKYO", "SEUL", "MEXICO CITY", "CAKARTA", "ABUJA", "PYONGYANG", "İSLAMABAD", "RİYAD", "BIŞKEK", "KİEV", "TAHRAN", "BAĞDAT", "ŞAM", "ATİNA", "AMSTERDAM", 
  "BRÜKSEL", "VARŞOVA", "KOPENHAG", "STOCKHOLM", "OSLO", "HELSİNKİ", "PRAG", "BÜKREŞ", "SOFYA", "BELGRAD", "KAHİRE", "TUNUS", "RABAT", "NAİROBİ", "DARÜSSELAM", 
  "LUSAKA", "WELLINGTON", "VİYANA", "LİZBON", "DUBLİN", "VİLNİUS", "RİGA", "MANİLA"
];

const animals = [
  "ASLAN", "KAPLAN", "FİL", "ZÜRAFA", "ZEBRA", "KURT", "TİLKİ", "AYI", "GEYİK", "TAVŞAN", "KANGURU", "KOALA", "PANDA", "GERGEDAN", "SU AYGIRI", "TİMSAH", 
  "TAVUS KUŞU", "LEOPAR", "ÇİTA", "JAGUAR", "MAYMUN", "GORİL", "ŞEMPANZE", "ORANGUTAN", "TEMBEL HAYVAN", "KİRPİ", "PORSUK", "SİNCAP", "KUNDUZ", "SU SAMURU", 
  "AYI BALIĞI", "GELİNCİK", "RAKUN", "ANTİLOP", "BUFALO", "BİZON", "YAK", "GEYİK", "DEVE", "LAMA", "ALPAKA", "EŞEK", "AT", "KATIR", "KOYUN", "KEÇİ", "İNEK", 
  "DOMUZ", "KÖPEK", "KEDİ", "FARE", "SIÇAN", "HAMSTER", "KOBAY", "GELİNCİK", "MİNK", "SİNCAP", "FOK", "MORS", "YUNUS", "BALİNA", "KÖPEK BALIĞI", "AHTAPOT", 
  "KALAMAR", "YENGEÇ", "ISTAKOZ", "KARİDES", "DENİZANASI", "DENİZYILDIZI", "DENİZATI", "PENGUEN", "DEVE KUŞU", "EMU", "ŞAHİN", "KARTAL", "ATMACA", "BAYKUŞ", 
  "PAPAĞAN", "SERÇE", "GÜVERCİN", "TAVUS KUŞU", "FLAMİNGO", "LEYLEK", "KUĞU", "HİNDİ", "ÖRDEK", "KAZ", "YARASA", "KURBAĞA", "SALAMANDER", "KAPLUMBAĞA", 
  "TOSBAĞA", "KERTENKELE", "GEKKO", "YILAN", "İGUANA", "BUKALEMUN", "KARINCA", "ARI", "KELEBEK"
];

export default { series, sports, movies, countries, capitals, animals };