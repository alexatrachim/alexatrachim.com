import React, { useState, useRef } from 'react';
import { 
  Star, 
  Heart, 
  Plus, 
  Minus, 
  Upload, 
  X,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  
  // Stan rozwijania FAQ (domyślnie wszystkie pytania zwinięte)
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false
  });

  const heroInputRef = useRef<HTMLInputElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const expandAllFaq = () => {
    setOpenFaq({
      0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true
    });
  };

  const collapseAllFaq = () => {
    setOpenFaq({
      0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false
    });
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: (val: string | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === 'string') {
          setter(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen text-[#16121C] selection:bg-[#C21F6B] selection:text-white">
      {/* SEKCJA 1: HERO Z MIEJSCEM NA ZDJĘCIE / GRAFIKĘ */}
      <section className="border-b-4 border-[#16121C] py-14 md:py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Tekst HERO */}
            <div className="lg:col-span-7">
              <h1 className="font-heading font-extrabold text-[27px] min-[360px]:text-[30px] min-[390px]:text-[34px] min-[430px]:text-[38px] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.14] mb-6 text-center lg:text-left">
                <span className="block sm:inline whitespace-nowrap">Stworzę Twój landing</span>{' '}
                <span className="block sm:inline whitespace-nowrap">page w 3 dni</span>
              </h1>

              <p className="text-base sm:text-xl md:text-2xl font-semibold mb-6 leading-snug">
                Dla trenerek EFT, które mają w głowie gotową ofertę, ale nie mają linka, który mogą wysłać klientowi, aby ją zobaczył.
              </p>

              <div className="border-3 border-[#16121C] shadow-neo bg-[#B79FD4] p-5 sm:p-6 text-base sm:text-lg md:text-xl font-bold mb-8">
                W trzy dni dostajesz stronę w Twojej estetyce i pod Twoją domeną, z podpiętym koszykiem płatności.
              </div>

              <div className="flex justify-center lg:justify-start">
                <a 
                  id="hero-cta-btn"
                  href="https://alexa-trachim.neetocal.com/spotkanie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg sm:text-xl font-tag font-bold border-3 border-[#16121C] shadow-neo bg-[#C21F6B] text-white hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none transition-all text-center"
                >
                  <span>Umów rozmowę</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* GRAFIKA W HERO */}
            <div className="lg:col-span-5">
              <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] p-3 sm:p-4">
                <div className="border-2 border-[#16121C] bg-[#F2ECE3] overflow-hidden relative group">
                  <img 
                    src={heroImage || "/landing.jpg"} 
                    alt="Landing page dla trenerek EFT - landing.jpg" 
                    className="w-full h-auto object-cover block"
                  />
                  {heroImage && (
                    <button
                      onClick={() => setHeroImage(null)}
                      className="absolute top-2 right-2 px-2.5 py-1 bg-red-100 text-red-700 border border-red-400 font-tag text-xs font-bold flex items-center gap-1 shadow-sm hover:bg-red-200"
                      title="Przywróć domyślne landing.jpg"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Przywróć landing.jpg</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEKCJA 2: AKAPIT EMPATYCZNY */}
      <section className="border-b-4 border-[#16121C] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6 text-base sm:text-lg md:text-xl">
            <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug flex items-start gap-3">
              <Heart className="w-5 h-5 md:w-6 md:h-7 fill-[#C21F6B] text-[#C21F6B] flex-shrink-0 mt-1" />
              <span>Od pięciu tygodni obiecujesz sobie, że siądziesz do stworzenia strony sprzedażowej Twojej oferty. Nawet zablokowałaś sobie miejsce w kalendarzu.</span>
            </h3>
            <p>
              A potem klientka napisała w DMach z prośbą o sesję, dziecko się rozchorowało albo otworzyłaś komputer i poczułaś zmęczenie na samą myśl o klikaniu.
            </p>
            <p>
              Masz gotową ofertę i żadnego miejsca, w którym jest widoczna. Wiesz, że mając link mogłabyś więcej sprzedawać, umieścić go w bio albo wysłać w wiadomości zamiast po raz kolejny opisywać szczegóły oferty ręcznie.
            </p>
            <div className="border-3 border-[#16121C] shadow-neo bg-[#632A7A] text-white p-6 font-bold text-xl md:text-2xl mt-4">
              Przestań liczyć, że znajdzie się wolne popołudnie. Twój czas należy do klientek - oddaj stronę komuś, kto to ogarnia.
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 3: PO NASZEJ WSPÓŁPRACY */}
      <section className="border-b-4 border-[#16121C] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 fill-[#C21F6B] text-[#C21F6B] flex-shrink-0" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Po naszej współpracy:
            </h2>
          </div>
          
          <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] p-8 mb-14">
            <ul className="space-y-4 text-lg md:text-xl">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#B79FD4] text-[#16121C] border-2 border-[#16121C] shadow-neo-sm font-tag text-xs font-bold flex-shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </span>
                <span>Wysyłasz jeden link zamiast siódmy raz robić screena starego posta z ofertą</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#B79FD4] text-[#16121C] border-2 border-[#16121C] shadow-neo-sm font-tag text-xs font-bold flex-shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </span>
                <span>Klientka płaci o 23:40, kiedy Ty śpisz</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#B79FD4] text-[#16121C] border-2 border-[#16121C] shadow-neo-sm font-tag text-xs font-bold flex-shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </span>
                <span>Zapisy na sesje dzieją się bez wymiany kilkunastu wiadomości</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#B79FD4] text-[#16121C] border-2 border-[#16121C] shadow-neo-sm font-tag text-xs font-bold flex-shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </span>
                <span>PDF z rundkami wreszcie na automacie wpada do skrzynki klienta</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#B79FD4] text-[#16121C] border-2 border-[#16121C] shadow-neo-sm font-tag text-xs font-bold flex-shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </span>
                <span>Skupiasz się na tym, co kochasz, czyli na pomaganiu ludziom</span>
              </li>
            </ul>
          </div>

          {/* DLACZEGO AKURAT JA? */}
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 fill-[#C21F6B] text-[#C21F6B]" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Dlaczego akurat ja?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="border-3 border-[#16121C] shadow-neo bg-[#D590B2] p-5 sm:p-6 text-base sm:text-lg font-medium relative">
              <div className="w-8 h-8 bg-[#16121C] text-[#F2ECE3] flex items-center justify-center font-tag font-bold text-sm mb-3 border border-[#16121C] shadow-neo-sm">
                01
              </div>
              Trzy dni zamiast trzech Twoich weekendów, po których nadal strona nie powstała i których nikt Ci nie zwróci.
            </div>
            <div className="border-3 border-[#16121C] shadow-neo bg-[#D590B2] p-5 sm:p-6 text-base sm:text-lg font-medium relative">
              <div className="w-8 h-8 bg-[#16121C] text-[#F2ECE3] flex items-center justify-center font-tag font-bold text-sm mb-3 border border-[#16121C] shadow-neo-sm">
                02
              </div>
              Jestem trenerką EFT, więc nie tłumaczysz mi, czym jest punkt karate albo dlaczego Twoi klienci potrzebują opukiwania.
            </div>
            <div className="border-3 border-[#16121C] shadow-neo bg-[#D590B2] p-5 sm:p-6 text-base sm:text-lg font-medium relative">
              <div className="w-8 h-8 bg-[#16121C] text-[#F2ECE3] flex items-center justify-center font-tag font-bold text-sm mb-3 border border-[#16121C] shadow-neo-sm">
                03
              </div>
              Wdrażam stronę od A do Z zamiast wysłać Ci kod i zostawić z tematem domeny, hostingu czy przyjmowania płatności od klientów.
            </div>
          </div>

          {/* OPINIA SANDRY */}
          <div className="border-3 border-[#16121C] shadow-neo bg-[#B79FD4] p-6 sm:p-8 text-base sm:text-lg md:text-xl italic leading-relaxed relative">
            <div className="absolute -top-3.5 right-6 bg-[#632A7A] text-white border-2 border-[#16121C] shadow-neo-sm px-3 py-0.5 font-tag text-xs font-bold rotate-3 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-current text-[#D590B2]" />
              <span>Opinia klientki</span>
            </div>
            <p>
              Dzięki współpracy z Alexą moja nowa przestrzeń, czyli Self-Guidance Space, stała się rzeczywistością - dokładnie w takiej formie, jaką sobie wyobrażałam. Alexa wdrożyła dla mnie stronę sprzedażową z designem, który nawet przekroczył moje oczekiwania. Mam ochotę wysyłać tę stronę każdemu i to chyba pierwszy raz, gdy po wdrożeniu nie mam potrzeby, żeby cokolwiek jeszcze poprawiać i dopracowywać - wszystko jest w punkt. Mam poczucie, że bez Alexy ten projekt dalej byłby blokiem tekstu na moim dysku Google, bo jego samodzielna realizacja trwałaby wieki. A tak pierwsze osoby już korzystają z tej przestrzeni i transformują swoje życie.
            </p>
            <div className="mt-5 font-tag font-bold text-sm md:text-base text-[#16121C] not-italic">
              Sandra Folta • trenerka EFT i Matrix Reimprinting
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 4: CO DOKŁADNIE OTRZYMUJESZ? */}
      <section className="border-b-4 border-[#16121C] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 fill-[#C21F6B] text-[#C21F6B] flex-shrink-0" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Co dokładnie otrzymujesz?
            </h2>
          </div>

          <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] p-6 sm:p-8 md:p-10">
            <ul className="space-y-5 sm:space-y-6 text-base sm:text-lg md:text-xl">
              <li className="flex items-start gap-4">
                <span className="w-7 h-7 bg-[#D590B2] text-[#16121C] border-2 border-[#16121C] shadow-neo-sm font-tag font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                  1
                </span>
                <span><strong className="font-bold">Teksty</strong>, które mówią o problemach i pragnieniach klienta, aby pomyślał “To coś dla mnie!” zamiast wyjść ze strony po pierwszych 3 sekundach</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-7 h-7 bg-[#D590B2] text-[#16121C] border-2 border-[#16121C] shadow-neo-sm font-tag font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                  2
                </span>
                <span><strong className="font-bold">Design</strong> w Twoich kolorach i Twoim stylu, projektowany w Google AI Studio, więc pierwszy podgląd widzisz bez długiego czekania</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-7 h-7 bg-[#D590B2] text-[#16121C] border-2 border-[#16121C] shadow-neo-sm font-tag font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                  3
                </span>
                <span><strong className="font-bold">Wdrożenie</strong> pod Twoją domeną, żeby link wyglądał jak Twój, a nie jak adres z kreatora</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-7 h-7 bg-[#D590B2] text-[#16121C] border-2 border-[#16121C] shadow-neo-sm font-tag font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                  4
                </span>
                <span>Podpięty <strong className="font-bold">koszyk i kalendarz</strong>, żeby płatność i zapis działy się bez Ciebie</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-7 h-7 bg-[#D590B2] text-[#16121C] border-2 border-[#16121C] shadow-neo-sm font-tag font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                  5
                </span>
                <span><strong className="font-bold">Feedback</strong> na każdym etapie, żeby strona brzmiała jak Ty, a nie jak ja</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEKCJA 5: DLACZEGO WARTO MI ZAUFAĆ? Z MIEJSCEM NA ZDJĘCIE ALEXA */}
      <section className="border-b-4 border-[#16121C] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 fill-[#C21F6B] text-[#C21F6B] flex-shrink-0" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Dlaczego warto mi zaufać?
            </h2>
          </div>
          
          {/* JEDEN BOKS: O MNIE ZE ZDJĘCIEM */}
          <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] p-6 sm:p-8 md:p-10 mb-12">
            
            {/* Górna część: nagłówek i pierwsze 2 akapity obok zdjęcia */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-6">
              <div className="md:col-span-7 space-y-4 text-base sm:text-lg md:text-xl">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#632A7A] flex items-center gap-2">
                  <span>Hej, z tej strony Alexa Trachim 💜</span>
                </h3>
                <p>
                  Jestem trenerką EFT, która ogarnia biznes. Od 10 lat pracuję w marketingu, a od 2020 roku prowadzę firmę online.
                </p>
                <p>
                  Stworzyłam dziesiątki landing pages dla siebie i swoich klientek. Wiem doskonale, że techniczna strona biznesu zazwyczaj nie jest tą ulubioną - zwłaszcza u kobiet, które specjalizują się w pomaganiu ludziom.
                </p>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-sm border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] p-2.5 sm:p-3">
                  <div className="border-2 border-[#16121C] overflow-hidden bg-white">
                    <img 
                      src="/omnie.png" 
                      alt="Alexa Trachim" 
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dolna część: na całą szerokość boksu */}
            <div className="space-y-4 text-base sm:text-lg md:text-xl pt-2">
              <p className="font-bold">
                Moją misją jest wspierać trenerki EFT w budowaniu i rozwijaniu biznesów, aby metoda opukiwania weszła do mainstreamu!
              </p>
              <p>
                Łączę zrozumienie tego, jak pracuje się z klientami i moją ogromną wrażliwość z pasją do technikaliów, marketingu i tworzenia systemów w biznesie. Dlatego teraz zapraszam Cię do skorzystania z moich supermocy, abyś mogła skupić się na pracy ze swoimi klientkami.
              </p>
            </div>

          </div>

          {/* OPINIA WIKTORII */}
          <div className="border-3 border-[#16121C] shadow-neo bg-[#B79FD4] p-6 sm:p-8 text-base sm:text-lg md:text-xl italic leading-relaxed mb-14 relative">
            <div className="absolute -top-3.5 right-6 bg-[#632A7A] text-white border-2 border-[#16121C] px-3 py-0.5 font-tag text-xs font-bold rotate-2 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-current text-[#D590B2]" />
              <span>Opinia klientki</span>
            </div>
            <p>
              „Bardzo polecam współpracę z Alexą, szybko zrealizowana strona, wystarczyło rzucić pomysł i został zrealizowany bez większego mojego wkładu. Wysokie wyczucie estetyki, co jest dla mnie szczególnie ważne, szybko, konkretnie i bezproblemowo! Cenię sobie profesjonalizm i to, że działa w podobnej branży i zna się na rzeczy.”
            </p>
            <div className="mt-5 font-tag font-bold text-sm md:text-base text-[#16121C] not-italic">
              Wiktoria Fahner • trenerka EFT, psycholożka, hipnoterapeutka
            </div>
          </div>

          {/* REALIZACJE */}
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 fill-[#C21F6B] text-[#C21F6B] flex-shrink-0" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Realizacje:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 0, title: "Self-Guidance Space", bg: "bg-[#B79FD4]", textColor: "text-[#16121C]", imageBorder: "border-[#16121C]", image: "/realizacja1.jpeg" },
              { id: 1, title: "365 dni z EFT", bg: "bg-[#D590B2]", textColor: "text-[#16121C]", imageBorder: "border-[#16121C]", image: "/realizacja2.jpeg" },
              { id: 2, title: "Wystartuj z tym biznesem EFT", bg: "bg-[#B79FD4]", textColor: "text-[#16121C]", imageBorder: "border-[#16121C]", image: "/realizacja3.PNG" },
              { id: 3, title: "Wiktoria Fahner", bg: "bg-[#D590B2]", textColor: "text-[#16121C]", imageBorder: "border-[#16121C]", image: "/realizacja4.jpeg" },
              { id: 4, title: "Alexa Trachim", bg: "bg-[#B79FD4]", textColor: "text-[#16121C]", imageBorder: "border-[#16121C]", image: "/realizacja5.jpeg" },
              { id: 5, title: "Miejsce na Twoją stronę", bg: "bg-[#D590B2]", textColor: "text-[#16121C]", noImage: true }
            ].map((item) => (
              <div 
                key={item.id} 
                className={`border-3 border-[#16121C] shadow-neo ${item.bg} p-5 flex flex-col justify-between hover:-translate-y-1 transition-transform relative`}
              >
                {item.noImage ? (
                  /* Ostatnia realizacja bez zdjęcia */
                  <div className="flex-1 flex items-center justify-center my-6 min-h-[240px] text-center p-4">
                    <h3 className={`font-body font-extrabold text-xl sm:text-2xl ${item.textColor} uppercase tracking-wide leading-tight`}>
                      {item.title}
                    </h3>
                  </div>
                ) : (
                  <>
                    {/* Miejsce na grafikę / screen */}
                    <div className={`border-2 ${item.imageBorder} bg-[#F2ECE3] h-60 mb-3 relative overflow-hidden shadow-neo-sm`}>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Tytuł kafelka */}
                    <div className="pt-1">
                      <h3 className={`font-body font-bold text-xs sm:text-[13px] ${item.textColor} uppercase tracking-normal leading-snug`} title={item.title}>
                        {item.title}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCJA 6: DLA KOGO JEST TA OFERTA? */}
      <section className="border-b-4 border-[#16121C] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 fill-[#C21F6B] text-[#C21F6B]" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Dla kogo jest ta oferta?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* DLA CIEBIE */}
            <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] p-6 lg:p-8">
              <h3 className="font-heading font-bold text-base sm:text-lg md:text-[1.08rem] lg:text-[1.22rem] xl:text-[1.28rem] tracking-tight mb-6 md:whitespace-nowrap">
                Ta oferta jest dla Ciebie, jeżeli:
              </h3>
              <ul className="space-y-4 text-base sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#B79FD4] text-[#16121C] border-2 border-[#16121C] flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span>Wiesz, co chcesz sprzedawać i masz choćby ramowo określoną ofertę</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#B79FD4] text-[#16121C] border-2 border-[#16121C] flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span>Chcesz mieć stronę gotową w kilka dni zamiast w kilka tygodni czy miesięcy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#B79FD4] text-[#16121C] border-2 border-[#16121C] flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span>Szukasz kogoś, kto rozumie, czym jest EFT i komu nie musisz tłumaczyć metody</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#B79FD4] text-[#16121C] border-2 border-[#16121C] flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                  <span>Jesteś gotowa na to, aby oddelegować stworzenie landinga i szczegółowo wypełnić brief dotyczący Twojego biznesu</span>
                </li>
              </ul>
            </div>

            {/* NIE DLA CIEBIE */}
            <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] p-6 lg:p-8">
              <h3 className="font-heading font-bold text-base sm:text-lg md:text-[1.08rem] lg:text-[1.22rem] xl:text-[1.28rem] tracking-tight mb-6 md:whitespace-nowrap">
                Ta oferta NIE jest dla Ciebie, jeżeli:
              </h3>
              <ul className="space-y-4 text-base sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D590B2] text-[#16121C] border-2 border-[#16121C] flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">✕</span>
                  <span>Nie masz jeszcze konkretnej oferty i musisz ją najpierw stworzyć</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D590B2] text-[#16121C] border-2 border-[#16121C] flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">✕</span>
                  <span>Chcesz nauczyć się robić strony samodzielnie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D590B2] text-[#16121C] border-2 border-[#16121C] flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">✕</span>
                  <span>Potrzebujesz witryny Twojego biznesu z kilkoma podstronami i sklepem - w tym też mogę pomóc, ale to osobna wycena</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D590B2] text-[#16121C] border-2 border-[#16121C] flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">✕</span>
                  <span>Nie potrafisz zaufać na tyle, aby oddelegować pracę komuś innemu</span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOX */}
          <div className="border-3 border-[#16121C] shadow-neo bg-[#632A7A] text-white p-6 md:p-8 font-bold text-lg md:text-xl">
            Pst… Jesteś hipnoterapeutką, specjalistką od Human Design lub w inny sposób pomagasz ludziom w rozwoju? Tobie też chętnie pomogę - umów się na rozmowę!
          </div>
        </div>
      </section>

      {/* SEKCJA 7: JAK TO DZIAŁA? */}
      <section className="border-b-4 border-[#16121C] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 fill-[#C21F6B] text-[#C21F6B] flex-shrink-0" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Jak to działa?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base sm:text-lg">
            <div className="border-3 border-[#16121C] shadow-neo bg-[#D590B2] p-6 min-h-[170px] flex flex-col justify-start">
              <span className="font-tag font-bold text-[#16121C] block mb-2 text-xl">Krok 1.</span>
              Umawiasz rozmowę, która trwa 30 minut - rozmawiamy o Twoim biznesie, klientach i potrzebach.
            </div>
            <div className="border-3 border-[#16121C] shadow-neo bg-[#B79FD4] p-6 min-h-[170px] flex flex-col justify-start">
              <span className="font-tag font-bold text-[#16121C] block mb-2 text-xl">Krok 2.</span>
              Wypełniasz brief - opisujesz ofertę, wybierasz interesujący Cię styl i czego dodatkowo potrzebujesz.
            </div>
            <div className="border-3 border-[#16121C] shadow-neo bg-[#D590B2] md:bg-[#B79FD4] p-6 min-h-[170px] flex flex-col justify-start">
              <span className="font-tag font-bold text-[#16121C] block mb-2 text-xl">Krok 3.</span>
              Zaczynam pracę - dostajesz tekst, a potem design do feedbacku.
            </div>
            <div className="border-3 border-[#16121C] shadow-neo bg-[#B79FD4] md:bg-[#D590B2] p-6 min-h-[170px] flex flex-col justify-start">
              <span className="font-tag font-bold text-[#16121C] block mb-2 text-xl">Krok 4.</span>
              Po 3 dniach strona jest gotowa.
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 8: OFERTA */}
      <section className="border-b-4 border-[#16121C] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] p-8 md:p-12 mb-12">
            <h3 className="font-heading font-bold text-2xl mb-3">
              W cenie dostajesz:
            </h3>
            <p className="text-xl md:text-2xl font-bold max-w-xl mx-auto mb-6">
              teksty, design, wdrożenie pod Twoją domeną
            </p>

            <div className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl text-[#632A7A] leading-none mb-4">
              688 PLN
            </div>

            <p className="font-medium text-[11px] sm:text-xs text-[#332A3D] mb-8">
              + ewentualny koszt domeny, jeżeli nie masz (mam tanią opcję do polecenia!)
            </p>

            <div className="inline-flex items-center justify-center border-3 border-[#16121C] bg-[#D590B2] px-4 sm:px-6 py-2.5 sm:py-3 font-tag font-bold text-xs sm:text-base md:text-lg mb-8 shadow-neo-sm text-center leading-tight">
              <span>
                <span className="block sm:inline">Dostępne miejsca </span>
                <span className="block sm:inline">w tym miesiącu: 4</span>
              </span>
            </div>

            <div className="flex justify-center">
              <a 
                id="pricing-cta-btn"
                href="https://alexa-trachim.neetocal.com/spotkanie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg sm:text-xl font-tag font-bold border-3 border-[#16121C] shadow-neo bg-[#C21F6B] text-white hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none transition-all text-center"
              >
                <span>Umów rozmowę</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* OPINIA PAULINY */}
          <div className="text-left">
            <div className="border-3 border-[#16121C] shadow-neo bg-[#B79FD4] p-6 sm:p-8 text-base sm:text-lg md:text-xl italic leading-relaxed relative">
              <div className="absolute -top-3.5 right-6 bg-[#632A7A] text-white border-2 border-[#16121C] shadow-neo-sm px-3 py-0.5 font-tag text-xs font-bold rotate-2 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current text-[#D590B2]" />
                <span>Opinia klientki</span>
              </div>
              <p>
                Hej Alexa! Wow ten landing page jest po prostu piękniejszy niż mogłam to sobie wyobrazić! Nie wierzę, że ogarnęłaś to dosłownie w tydzień i to na takim poziomie. Wizualnie petarda, ale ten tekst? Ja nie wiem, jak to jest możliwe, że w taki sposób odzwierciedliłaś to, co miałam w głowie. Już wiem, kto będzie tworzył moje kolejne strony! Dziękuję także za wszystkie wskazówki co do sklepów i platform kursowych - już działam w tym temacie! Jestem mega zadowolona z naszej współpracy i z największą przyjemnością będę polecała Cię moim klientkom!
              </p>
              <div className="mt-5 font-tag font-bold text-sm md:text-base text-[#16121C] not-italic">
                Paulina Kudła • trenerka EFT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 9: ODPOWIEDZI NA TWOJE PYTANIA (Z AKORDIONEM - ROZWIJANIE / ZWIJANIE) */}
      <section className="border-b-4 border-[#16121C] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 fill-[#C21F6B] text-[#C21F6B]" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Odpowiedzi na Twoje pytania
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Pytanie 1 */}
            <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] transition-all">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#E5DDD2] transition-colors"
              >
                <h3 className="font-heading font-bold text-xl md:text-2xl">
                  W czym tworzysz strony?
                </h3>
                <div className="w-8 h-8 bg-[#D590B2] border-2 border-[#16121C] shadow-neo-sm flex items-center justify-center flex-shrink-0">
                  {openFaq[0] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaq[0] && (
                <div className="px-6 pb-6 pt-2 border-t-2 border-[#16121C] text-base sm:text-lg leading-relaxed bg-[#E5DDD2]/50">
                  <p>
                    Design projektuję w Google AI Studio. W ten sposób mogę stworzyć estetyczną stronę szybko i bez długiego wdrażania. Dbam o to, aby projekt nie wyglądał jak każda kolejna strona wygenerowana w AI - stąd pytania w briefie o Twój branding, preferowany styl i inne szczegóły wizualne.
                  </p>
                </div>
              )}
            </div>

            {/* Pytanie 2 */}
            <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] transition-all">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#E5DDD2] transition-colors"
              >
                <h3 className="font-heading font-bold text-xl md:text-2xl">
                  Mam własne grafiki, użyjesz ich?
                </h3>
                <div className="w-8 h-8 bg-[#D590B2] border-2 border-[#16121C] shadow-neo-sm flex items-center justify-center flex-shrink-0">
                  {openFaq[1] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaq[1] && (
                <div className="px-6 pb-6 pt-2 border-t-2 border-[#16121C] text-base sm:text-lg leading-relaxed bg-[#E5DDD2]/50">
                  <p>
                    Oczywiście! O to też dostaniesz pytanie w briefie, a ja poproszę Cię o przesłanie potrzebnych zdjęć i grafik na etapie tworzenia designu.
                  </p>
                </div>
              )}
            </div>

            {/* Pytanie 3 */}
            <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] transition-all">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#E5DDD2] transition-colors"
              >
                <h3 className="font-heading font-bold text-xl md:text-2xl">
                  Nie mam hostingu ani domeny. Co wtedy?
                </h3>
                <div className="w-8 h-8 bg-[#D590B2] border-2 border-[#16121C] shadow-neo-sm flex items-center justify-center flex-shrink-0">
                  {openFaq[2] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaq[2] && (
                <div className="px-6 pb-6 pt-2 border-t-2 border-[#16121C] text-base sm:text-lg leading-relaxed bg-[#E5DDD2]/50">
                  <p>
                    Wdrożę Ci stronę na Cloudflare. Pamiętaj, że jeżeli nie masz domeny, będziesz musiała ją kupić - to dodatkowy koszt, natomiast na Cloudflare są to groszowe sprawy.
                  </p>
                </div>
              )}
            </div>

            {/* Pytanie 4 */}
            <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] transition-all">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#E5DDD2] transition-colors"
              >
                <h3 className="font-heading font-bold text-xl md:text-2xl">
                  Mam swój hosting i domenę. Co wtedy?
                </h3>
                <div className="w-8 h-8 bg-[#D590B2] border-2 border-[#16121C] shadow-neo-sm flex items-center justify-center flex-shrink-0">
                  {openFaq[3] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaq[3] && (
                <div className="px-6 pb-6 pt-2 border-t-2 border-[#16121C] text-base sm:text-lg leading-relaxed bg-[#E5DDD2]/50">
                  <p>
                    Wdrożę stronę tak, abyś miała ją widoczną w swojej domenie. Techniczną stronę zostaw mnie - będę musiała jednak mieć dostęp do Twoich kont u dostawcy hostingu i domeny, aby odpowiednio podpiąć stronę.
                  </p>
                </div>
              )}
            </div>

            {/* Pytanie 5 */}
            <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] transition-all">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#E5DDD2] transition-colors"
              >
                <h3 className="font-heading font-bold text-xl md:text-2xl">
                  Czy ten landing da się potem rozbudować?
                </h3>
                <div className="w-8 h-8 bg-[#D590B2] border-2 border-[#16121C] shadow-neo-sm flex items-center justify-center flex-shrink-0">
                  {openFaq[4] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaq[4] && (
                <div className="px-6 pb-6 pt-2 border-t-2 border-[#16121C] text-base sm:text-lg leading-relaxed bg-[#E5DDD2]/50">
                  <p className="mb-3">
                    Pewnie, że tak! Landing to strona jednej konkretnej ceny. Jeżeli będziesz chciała stworzyć kolejną stronę sprzedażową, stronę główną Twojego biznesu albo sklep - dołożymy je do istniejącej infrastruktury.
                  </p>
                  <p className="font-semibold text-inherit">
                    Kiedy będziesz chciała stronę główną albo sklep, dokładamy kolejne podstrony do tej samej infrastruktury.
                  </p>
                </div>
              )}
            </div>

            {/* Pytanie 6 */}
            <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] transition-all">
              <button
                onClick={() => toggleFaq(5)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#E5DDD2] transition-colors"
              >
                <h3 className="font-heading font-bold text-xl md:text-2xl">
                  Podpinasz koszyk płatności i kalendarz?
                </h3>
                <div className="w-8 h-8 bg-[#D590B2] border-2 border-[#16121C] shadow-neo-sm flex items-center justify-center flex-shrink-0">
                  {openFaq[5] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaq[5] && (
                <div className="px-6 pb-6 pt-2 border-t-2 border-[#16121C] text-base sm:text-lg leading-relaxed bg-[#E5DDD2]/50">
                  <p>
                    Jasne! Podpowiem Ci, jakie rozwiązania najlepiej się sprawdzają do przyjmowania płatności i umawiania sesji.
                  </p>
                </div>
              )}
            </div>

            {/* Pytanie 7 */}
            <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] transition-all">
              <button
                onClick={() => toggleFaq(6)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#E5DDD2] transition-colors"
              >
                <h3 className="font-heading font-bold text-xl md:text-2xl">
                  Ile czasu to zajmie po mojej stronie?
                </h3>
                <div className="w-8 h-8 bg-[#D590B2] border-2 border-[#16121C] shadow-neo-sm flex items-center justify-center flex-shrink-0">
                  {openFaq[6] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaq[6] && (
                <div className="px-6 pb-6 pt-2 border-t-2 border-[#16121C] text-base sm:text-lg leading-relaxed bg-[#E5DDD2]/50">
                  <p>
                    Rozmowa 30 minut, wypełnienie briefu i feedback na dwóch pierwszych etapach. Resztę robię ja.
                  </p>
                </div>
              )}
            </div>

            {/* Pytanie 8 */}
            <div className="border-3 border-[#16121C] shadow-neo bg-[#F2ECE3] transition-all">
              <button
                onClick={() => toggleFaq(7)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#E5DDD2] transition-colors"
              >
                <h3 className="font-heading font-bold text-xl md:text-2xl">
                  Czy dostanę fakturę?
                </h3>
                <div className="w-8 h-8 bg-[#D590B2] border-2 border-[#16121C] shadow-neo-sm flex items-center justify-center flex-shrink-0">
                  {openFaq[7] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openFaq[7] && (
                <div className="px-6 pb-6 pt-2 border-t-2 border-[#16121C] text-base sm:text-lg leading-relaxed bg-[#E5DDD2]/50">
                  <p>
                    Oczywiście, wystawiam faktury.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* SEKCJA 10: OSTATNIE CTA */}
      <section className="border-b-4 border-[#16121C] py-20 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
            Jeszcze w tym miesiącu możesz wysłać jeden link zamiast tłumaczyć swoją ofertę w dziesiątej wiadomości.
          </p>

          <div className="flex justify-center mb-6">
            <a 
              id="final-cta-btn"
              href="https://alexa-trachim.neetocal.com/spotkanie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg sm:text-xl font-tag font-bold border-3 border-[#16121C] shadow-neo bg-[#C21F6B] text-white hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none transition-all text-center"
            >
              <span>Umów rozmowę</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-[11px] sm:text-xs leading-relaxed">
            Nie znalazłaś dogodnego terminu albo masz dodatkowe pytanie? Napisz na{' '}
            <a 
              href="mailto:alexa.trachim@gmail.com" 
              className="font-bold underline text-[#16121C] hover:text-[#632A7A]"
            >
              alexa.trachim@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* STOPKA */}
      <footer className="py-5 sm:py-6 bg-[#16121C] text-[#F2ECE3] text-center font-body text-[8px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-xs px-2 sm:px-6">
        <p className="flex items-center justify-center gap-1.5 sm:gap-3 whitespace-nowrap overflow-hidden">
          <span>© Alexa Trachim 2026</span>
          <span>•</span>
          <a 
            href="https://app.easy.tools/policies/alexatrachim" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#D590B2] underline hover:text-white"
          >
            Polityka prywatności
          </a>
          <span>•</span>
          <a 
            href="https://app.easy.tools/terms/alexatrachim" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#D590B2] underline hover:text-white"
          >
            Regulamin
          </a>
        </p>
      </footer>
    </div>
  );
}
