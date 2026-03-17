import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';

const BASE = 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32';
const VAS = 'https://api.ameora.fun/content/vas_cartoon';

const dragonBallZ = [
  { id: 'd1', title: 'Dragon Ball Z – Méga Compilation Saga Boo',   thumbnail: `${VAS}/thumnbnail/DRAGONBALLZ/1.png`, videoUrl: `${VAS}/video/dragonballZ/DragonBallZ-MégaCompilation-RésuméCompletSagaBoo.mp4` },
  { id: 'd2', title: 'Méga Compilation – Résumé Comp',               thumbnail: `${VAS}/thumnbnail/DRAGONBALLZ/2.png`, videoUrl: `${VAS}/video/dragonballZ/MégaCompilation-RésuméComp.mp4` },
  { id: 'd3', title: 'Méga Compilation – Résumé Complet',            thumbnail: `${VAS}/thumnbnail/DRAGONBALLZ/3.png`, videoUrl: `${VAS}/video/dragonballZ/MégaCompilation-RésuméComplet.mp4` },
  { id: 'd4', title: 'Méga Compilation – Résumé Complet Saga',       thumbnail: `${VAS}/thumnbnail/DRAGONBALLZ/4.png`, videoUrl: `${VAS}/video/dragonballZ/MégaCompilation-RésuméCompletSaga.mp4` },
  { id: 'd5', title: 'Résumé Complet Saga Babidi',                   thumbnail: `${VAS}/thumnbnail/DRAGONBALLZ/5.png`, videoUrl: `${VAS}/video/dragonballZ/RésuméCompletSagaBabidi.mp4` },
];

const heyArnold = [
  { id: 'h1', title: 'Hé Arnold – Canicule !',          thumbnail: `${VAS}/thumnbnail/HEYARNOLD/1.png`, videoUrl: `${VAS}/video/HEYARNOLD/HéArnold_Canicule!.mp4` },
  { id: 'h2', title: 'Hé Arnold – La soirée de filles', thumbnail: `${VAS}/thumnbnail/HEYARNOLD/2.png`, videoUrl: `${VAS}/video/HEYARNOLD/HéArnold_Lasoiréedefilles.mp4` },
  { id: 'h3', title: 'Hé Arnold – Le samedi parfait',   thumbnail: `${VAS}/thumnbnail/HEYARNOLD/3.png`, videoUrl: `${VAS}/video/HEYARNOLD/HéArnold_Lesamediparfait.mp4` },
  { id: 'h4', title: 'Hé Arnold – Le petit carnet rose', thumbnail: `${VAS}/thumnbnail/HEYARNOLD/4.png`, videoUrl: `${VAS}/video/HEYARNOLD/HéArnoldLepetitcarnetrose.mp4` },
  { id: 'h5', title: 'Hé Arnold – Monsieur Smith',      thumbnail: `${VAS}/thumnbnail/HEYARNOLD/5.png`, videoUrl: `${VAS}/video/HEYARNOLD/HéArnoldMonsieurSmith.mp4` },
];

const inspectorGadget = [
  { id: 'g1', title: 'Conférence de presse de Gadget', thumbnail: `${VAS}/thumnbnail/INSPECTORGADGET/1.png`, videoUrl: `${VAS}/video/inspectorgadget/ConférencedepressedeGadget.mp4` },
  { id: 'g2', title: 'Gadget et le Lama',              thumbnail: `${VAS}/thumnbnail/INSPECTORGADGET/2.png`, videoUrl: `${VAS}/video/inspectorgadget/GadgetetleLama.mp4` },
  { id: 'g3', title: 'Gadget et le Nain',              thumbnail: `${VAS}/thumnbnail/INSPECTORGADGET/3.png`, videoUrl: `${VAS}/video/inspectorgadget/GadgetetleNain.mp4` },
  { id: 'g4', title: 'Gadget le somnambule',           thumbnail: `${VAS}/thumnbnail/INSPECTORGADGET/4.png`, videoUrl: `${VAS}/video/inspectorgadget/Gadgetlesomnambule.mp4` },
  { id: 'g5', title: 'Gadget magique',                 thumbnail: `${VAS}/thumnbnail/INSPECTORGADGET/5.png`, videoUrl: `${VAS}/video/inspectorgadget/Gadgetmagique.mp4` },
];

const pokemon = [
  { id: 'p1', title: 'Le Maître Pokémon Évolutions – Épisode 1',  thumbnail: `${VAS}/thumnbnail/POKEMON/1.png`, videoUrl: `${VAS}/video/POKEMON/LeMaîtrePokémonÉvolutions_Épisode1.mp4` },
  { id: 'p2', title: 'Pokémon Évolutions – Bande-annonce 2',      thumbnail: `${VAS}/thumnbnail/POKEMON/2.png`, videoUrl: `${VAS}/video/POKEMON/PokémonÉvolutions_Bande-annonce2.mp4` },
  { id: 'p3', title: "L'éclipse – Pokémon Évolutions – Épisode 2", thumbnail: `${VAS}/thumnbnail/POKEMON/3.png`, videoUrl: `${VAS}/video/POKEMON/L'éclipse_PokémonÉvolutions–Épisode2.mp4` },
  { id: 'p4', title: 'Le visionnaire – Pokémon Évolutions – Épisode 3', thumbnail: `${VAS}/thumnbnail/POKEMON/4.png`, videoUrl: `${VAS}/video/POKEMON/Levisionnaire_PokémonÉvolutions_Épisode3.mp4` },
  { id: 'p5', title: 'Le plan – Pokémon Évolutions – Épisode 4',  thumbnail: `${VAS}/thumnbnail/POKEMON/5.png`, videoUrl: `${VAS}/video/POKEMON/Leplan_PokémonÉvolutions_Épisode4.mp4` },
];

const smurfs = [
  { id: 's1', title: 'Le Pouvoir du Sourire ! Les Schtroumpfs',              thumbnail: `${VAS}/thumnbnail/THESMURFS/1.png`, videoUrl: `${VAS}/video/thesmurfs/ePouvoirduSourire!LesSchtroumpfs.mp4` },
  { id: 's2', title: 'Le Problème du Schtroumpf Paresseux !',                thumbnail: `${VAS}/thumnbnail/THESMURFS/2.png`, videoUrl: `${VAS}/video/thesmurfs/LeProblèmeduSchtroumpfParesseux!.mp4` },
  { id: 's3', title: 'Le Retour des Schtroumpfs ! – Clip Exclusif',          thumbnail: `${VAS}/thumnbnail/THESMURFS/3.png`, videoUrl: `${VAS}/video/thesmurfs/LeRetourdesSchtroumpfs!_CLIPEXCLUSIF!.mp4` },
  { id: 's4', title: 'Les deux bêtas font la paire – Les Schtroumpfs 3D',    thumbnail: `${VAS}/thumnbnail/THESMURFS/4.png`, videoUrl: `${VAS}/video/thesmurfs/LesdeuxbêtasfontlapaireLesSchtroumpfs3D.mp4` },
  { id: 's5', title: 'Qui a cassé le télescope du Grand Schtroumpf ?',       thumbnail: `${VAS}/thumnbnail/THESMURFS/5.png`, videoUrl: `${VAS}/video/thesmurfs/QuiacasséletélescopeduGrandSchtroumpf-LesSchtroumpfs.mp4` },
  { id: 's6', title: 'Un Anniversaire EXPLOSIF !',                           thumbnail: `${VAS}/thumnbnail/THESMURFS/6..png`, videoUrl: `${VAS}/video/thesmurfs/UnAnniversaireEXPLOSIF!.mp4` },
];

const tomAndJerry = [
  { id: 't1', title: 'Folie martienne',                                    thumbnail: `${VAS}/thumnbnail/TOMANDJERRY/1.png`, videoUrl: `${VAS}/video/tomandjerryfr/Foliemartienne.mp4` },
  { id: 't2', title: 'Le chat & la souris détectives',                     thumbnail: `${VAS}/thumnbnail/TOMANDJERRY/2.png`, videoUrl: `${VAS}/video/tomandjerryfr/Lechat&lasourisdétectives.mp4` },
  { id: 't3', title: 'Les GRANDES aventures fantasy de Tom et Jerry',      thumbnail: `${VAS}/thumnbnail/TOMANDJERRY/3.png`, videoUrl: `${VAS}/video/tomandjerryfr/LesGRANDESaventuresfantasydeTometJerry.mp4` },
  { id: 't4', title: 'Tom & Jerry deviennent des RATS DE BIBLIOTHÈQUE',    thumbnail: `${VAS}/thumnbnail/TOMANDJERRY/4.png`, videoUrl: `${VAS}/video/tomandjerryfr/Tom&JerrydeviennentdesRATSDEBIBLIOTHÈQUE.mp4` },
  { id: 't5', title: 'Un Jerry IMMENSE vs un Tom MINUSCULE',               thumbnail: `${VAS}/thumnbnail/TOMANDJERRY/5.png`, videoUrl: `${VAS}/video/tomandjerryfr/UnJerryIMMENSEvsunTomMINUSCULE.mp4` },
];

const CartoonPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [slide11, setSlide11] = useState(0);
  const [slide5, setSlide5] = useState(0);
  const [slideDBZ, setSlideDBZ] = useState(0);
  const [slideHA, setSlideHA] = useState(0);
  const [slideIG, setSlideIG] = useState(0);
  const [slidePK, setSlidePK] = useState(0);
  const [slideSM, setSlideSM] = useState(0);
  const [slideTJ, setSlideTJ] = useState(0);

  // CARTOONS-11 — Totally Spies
  const cartoons11 = [
    { id: 1,  title: 'Silicon Valley Girls',          thumbnail: `${BASE}/CARTOONS-11/i1.jpg`,  videoUrl: `${BASE}/CARTOONS-11/v1.mp4` },
    { id: 2,  title: 'A Thing For Musicians',         thumbnail: `${BASE}/CARTOONS-11/i2.jpg`,  videoUrl: `${BASE}/CARTOONS-11/v2.mp4` },
    { id: 3,  title: 'Mandy Book',                    thumbnail: `${BASE}/CARTOONS-11/i3.jpg`,  videoUrl: `${BASE}/CARTOONS-11/v3.mp4` },
    { id: 4,  title: 'Baddies On A Blimp',            thumbnail: `${BASE}/CARTOONS-11/i4.jpg`,  videoUrl: `${BASE}/CARTOONS-11/v4.mp4` },
    { id: 5,  title: 'Danger TV',                     thumbnail: `${BASE}/CARTOONS-11/i5.jpg`,  videoUrl: `${BASE}/CARTOONS-11/v5.mp4` },
    { id: 6,  title: 'Une Vie De Chat',               thumbnail: `${BASE}/CARTOONS-11/i6.jpg`,  videoUrl: `${BASE}/CARTOONS-11/v6.mp4` },
    { id: 7,  title: 'Jeux Vidéo Zéro',              thumbnail: `${BASE}/CARTOONS-11/i7.jpg`,  videoUrl: `${BASE}/CARTOONS-11/v7.mp4` },
    { id: 8,  title: 'Super Méga Danse Show',         thumbnail: `${BASE}/CARTOONS-11/i8.jpg`,  videoUrl: `${BASE}/CARTOONS-11/v8.mp4` },
    { id: 9,  title: 'Mariage Et Sabotages',          thumbnail: `${BASE}/CARTOONS-11/i9.jpg`,  videoUrl: `${BASE}/CARTOONS-11/v9.mp4` },
    { id: 10, title: 'Les Délices De Grand-Mère',     thumbnail: `${BASE}/CARTOONS-11/i10.jpg`, videoUrl: `${BASE}/CARTOONS-11/v10.mp4` },
    { id: 11, title: 'Célébrité Volée',               thumbnail: `${BASE}/CARTOONS-11/i11.jpg`, videoUrl: `${BASE}/CARTOONS-11/v11.mp4` },
  ];

  // CARTOONS-16 — Les Enquêtes de Mirette
  const cartoons16 = [
    { id: 12, title: 'Chap Kollé',                              thumbnail: `${BASE}/CARTOONS-16/i1.jpg`,  videoUrl: `${BASE}/CARTOONS-16/v1.mp4` },
    { id: 13, title: 'Dansez Petits Rats',                      thumbnail: `${BASE}/CARTOONS-16/i2.jpg`,  videoUrl: `${BASE}/CARTOONS-16/v2.mp4` },
    { id: 14, title: 'Deux Mirette',                            thumbnail: `${BASE}/CARTOONS-16/i3.jpg`,  videoUrl: `${BASE}/CARTOONS-16/v3.mp4` },
    { id: 15, title: 'Faux Pas Sur La Place Rouge',             thumbnail: `${BASE}/CARTOONS-16/i4.jpg`,  videoUrl: `${BASE}/CARTOONS-16/v4.mp4` },
    { id: 16, title: 'Jean Patonaute',                          thumbnail: `${BASE}/CARTOONS-16/i5.jpg`,  videoUrl: `${BASE}/CARTOONS-16/v5.mp4` },
    { id: 17, title: 'La Griffe Du Caire',                      thumbnail: `${BASE}/CARTOONS-16/i6.jpg`,  videoUrl: `${BASE}/CARTOONS-16/v6.mp4` },
    { id: 18, title: 'La Trahison Du Bortsch',                  thumbnail: `${BASE}/CARTOONS-16/i7.jpg`,  videoUrl: `${BASE}/CARTOONS-16/v7.mp4` },
    { id: 19, title: 'Le Monstre De La Tamise',                 thumbnail: `${BASE}/CARTOONS-16/i8.jpg`,  videoUrl: `${BASE}/CARTOONS-16/v8.mp4` },
    { id: 20, title: "L'Invasion Des Potiches Tournantes",      thumbnail: `${BASE}/CARTOONS-16/i9.jpg`,  videoUrl: `${BASE}/CARTOONS-16/v9.mp4` },
    { id: 21, title: 'Le Sphinx Se Démonte',                    thumbnail: `${BASE}/CARTOONS-16/i10.jpg`, videoUrl: `${BASE}/CARTOONS-16/v10.mp4` },
    { id: 22, title: 'Paris Photo Express',                     thumbnail: `${BASE}/CARTOONS-16/i11.jpg`, videoUrl: `${BASE}/CARTOONS-16/v11.mp4` },
    { id: 23, title: "Pour L'Amour Du Sphinx",                  thumbnail: `${BASE}/CARTOONS-16/i12.jpg`, videoUrl: `${BASE}/CARTOONS-16/v12.mp4` },
    { id: 24, title: 'Rap À Plondres',                          thumbnail: `${BASE}/CARTOONS-16/i13.jpg`, videoUrl: `${BASE}/CARTOONS-16/v13.mp4` },
    { id: 25, title: 'Rome Mise À Neuf',                        thumbnail: `${BASE}/CARTOONS-16/i14.jpg`, videoUrl: `${BASE}/CARTOONS-16/v14.mp4` },
    { id: 26, title: 'Taxi Iii Yi Iii Ha',                      thumbnail: `${BASE}/CARTOONS-16/i15.jpg`, videoUrl: `${BASE}/CARTOONS-16/v15.mp4` },
    { id: 27, title: 'Un Gorille À New York',                   thumbnail: `${BASE}/CARTOONS-16/i16.jpg`, videoUrl: `${BASE}/CARTOONS-16/v16.mp4` },
  ];

  // CARTOONS-5 — Totally Spies Season 6 extras (hover slider)
  const cartoons5 = [
    { id: 28, title: 'La Chute',                          thumbnail: `${BASE}/CARTOONS-5/i1.jpg`, videoUrl: `${BASE}/CARTOONS-5/v1.mp4` },
    { id: 29, title: 'La Loi De La Jungle',               thumbnail: `${BASE}/CARTOONS-5/i2.jpg`, videoUrl: `${BASE}/CARTOONS-5/v2.mp4` },
    { id: 30, title: 'Miss À Tous Les Prix',              thumbnail: `${BASE}/CARTOONS-5/i3.jpg`, videoUrl: `${BASE}/CARTOONS-5/v3.mp4` },
    { id: 31, title: 'Such Is Taken',                     thumbnail: `${BASE}/CARTOONS-5/i4.jpg`, videoUrl: `${BASE}/CARTOONS-5/v4.mp4` },
    { id: 32, title: 'Les Espionnes De La Silicon Valley',thumbnail: `${BASE}/CARTOONS-5/i5.jpg`, videoUrl: `${BASE}/CARTOONS-5/v5.mp4` },
  ];

  const sliderVideos11 = cartoons11.slice(0, 7);
  const gridVideos11   = cartoons11.slice(7);

  const nextSlide11 = () => setSlide11(p => (p + 1) % sliderVideos11.length);
  const prevSlide11 = () => setSlide11(p => (p - 1 + sliderVideos11.length) % sliderVideos11.length);
  const nextSlide5  = () => setSlide5(p => (p + 1) % cartoons5.length);
  const prevSlide5  = () => setSlide5(p => (p - 1 + cartoons5.length) % cartoons5.length);

  const VideoModal = () => (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
      <div className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
        <button onClick={() => setSelectedVideo(null)} className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <video src={selectedVideo.videoUrl} controls controlsList="nodownload" autoPlay className="w-full aspect-video" />
        <div className="p-4"><h3 className="text-xl font-bold text-white">{selectedVideo.title}</h3></div>
      </div>
    </div>
  );

  const Slider = ({ videos, slide, onPrev, onNext, onSetSlide, darkBg = true }) => (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${slide * (100 / 3)}%)` }}>
          {videos.map(video => (
            <div key={video.id} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2">
              <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(video)}>
                <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full aspect-video object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 rounded-lg flex items-center justify-center transition-all">
                  <Play className="w-16 h-16 text-white" fill="white" />
                </div>
                <p className={`${darkBg ? 'text-white' : 'text-white'} text-center mt-2 font-semibold`}>{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full z-10">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full z-10">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      <div className="flex justify-center gap-2 mt-6">
        {videos.map((_, idx) => (
          <button key={idx} onClick={() => onSetSlide(idx)} className={`w-2 h-2 rounded-full transition-all ${slide === idx ? 'bg-white w-8' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  );

  const mk = (videos, slide, setSlide) => ({ videos, slide, prev: () => setSlide(p => (p - 1 + videos.length) % videos.length), next: () => setSlide(p => (p + 1) % videos.length), set: setSlide });
  const tj  = mk(tomAndJerry,    slideTJ,  setSlideTJ);
  const dbz = mk(dragonBallZ,    slideDBZ, setSlideDBZ);
  const ha  = mk(heyArnold,      slideHA,  setSlideHA);
  const ig  = mk(inspectorGadget,slideIG,  setSlideIG);
  const pk  = mk(pokemon,        slidePK,  setSlidePK);
  const sm  = mk(smurfs,         slideSM,  setSlideSM);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden pt-20 md:pt-24">

      {/* Tom & Jerry */}
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(https://api.ameora.fun/content/vas_cartoon/thumnbnail/TOMANDJERRY/3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Tom & Jerry" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          <Slider videos={tj.videos} slide={tj.slide} onPrev={tj.prev} onNext={tj.next} onSetSlide={tj.set} />
        </div>
      </div>

      {/* Dragon Ball Z */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Dragon Ball Z" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          <Slider videos={dbz.videos} slide={dbz.slide} onPrev={dbz.prev} onNext={dbz.next} onSetSlide={dbz.set} />
        </div>
      </div>

      {/* Hé Arnold */}
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(https://api.ameora.fun/content/vas_cartoon/thumnbnail/HEYARNOLD/3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Hé Arnold" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          <Slider videos={ha.videos} slide={ha.slide} onPrev={ha.prev} onNext={ha.next} onSetSlide={ha.set} />
        </div>
      </div>

      {/* Inspector Gadget */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Inspector Gadget" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          <Slider videos={ig.videos} slide={ig.slide} onPrev={ig.prev} onNext={ig.next} onSetSlide={ig.set} />
        </div>
      </div>

      {/* Pokémon */}
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(https://api.ameora.fun/content/vas_cartoon/thumnbnail/POKEMON/3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Pokémon Évolutions" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          <Slider videos={pk.videos} slide={pk.slide} onPrev={pk.prev} onNext={pk.next} onSetSlide={pk.set} />
        </div>
      </div>

      {/* The Smurfs */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Les Schtroumpfs" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          <Slider videos={sm.videos} slide={sm.slide} onPrev={sm.prev} onNext={sm.next} onSetSlide={sm.set} />
        </div>
      </div>

      {/* Section 1: Totally Spies — Hero Slider */}
      <div className="relative bg-black py-16 md:py-24" style={{ backgroundImage: 'url(https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32/CARTOONS-11/i1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="DESSIN ANIMÉ – Épisodes en Vedette" className="text-white mb-8 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
          <Slider videos={sliderVideos11} slide={slide11} onPrev={prevSlide11} onNext={nextSlide11} onSetSlide={setSlide11} />
        </div>
      </div>

      {/* Section 2: Totally Spies — Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <AnimatedTitle title="Plus d'Épisodes Totally Spies" className="font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {gridVideos11.map(video => (
            <div key={video.id} className="relative group cursor-pointer transform hover:scale-105 transition-transform" onClick={() => setSelectedVideo(video)}>
              <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-12 h-12 text-white" fill="white" />
              </div>
              <p className="text-gray-800 font-semibold mt-2">{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Promo Banner */}
      <div className="relative bg-black py-16 md:py-20" style={{ backgroundImage: 'url(https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32/CARTOONS-16/i1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <AnimatedTitle title="Explorez Plus d'Aventures en Dessin Animé" className="text-white mb-6 font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
        </div>
      </div>

      {/* Section 4: Les Enquêtes de Mirette — Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <AnimatedTitle title="Les Enquêtes de Mirette" className="font-zentry text-4xl md:text-6xl font-black text-center uppercase" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {cartoons16.map(video => (
            <div key={video.id} className="relative group cursor-pointer transform hover:scale-105 transition-transform" onClick={() => setSelectedVideo(video)}>
              <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-12 h-12 text-white" fill="white" />
              </div>
              <p className="text-gray-800 font-semibold mt-2">{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Totally Spies Season 6 Extras */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedTitle title="Totally Spies – Saison 6 Extras" className="text-white mb-8 font-zentry text-3xl md:text-6xl font-black text-center uppercase" />
          <Slider videos={cartoons5} slide={slide5} onPrev={prevSlide5} onNext={nextSlide5} onSetSlide={setSlide5} />
        </div>
      </div>

      {selectedVideo && <VideoModal />}
    </div>
  );
};

export default CartoonPage;
