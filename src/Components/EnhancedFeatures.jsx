import TiltCard from './TiltCard';
import AnimatedTitle from './AnimatedTitle';

const EnhancedFeatures = () => {
  const features = [
    {
      id: 1,
      title: 'DESSIN ANIMÉ',
      description: 'Aventures animées pour tous les âges',
      size: 'large',
    },
    {
      id: 2,
      title: 'COMÉDIE',
      description: 'Rire aux éclats chaque jour',
      size: 'small',
    },
    {
      id: 3,
      title: 'CUISINE',
      description: 'Délicieuses recettes du monde entier',
      size: 'small',
    },
    {
      id: 4,
      title: 'MODE',
      description: 'Style, beauté et tendances',
      size: 'small',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <AnimatedTitle
          title="CATÉGORIES DE CONTENU"
          className="font-zentry text-4xl md:text-6xl font-black text-white text-center mb-16 uppercase"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <TiltCard
              key={feature.id}
              className={`${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } bg-blue-75 rounded-3xl p-8 border border-white/20 backdrop-blur-md h-96 md:h-[65vh] flex flex-col justify-end relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-300/20 to-transparent" style={index === 0 ? { backgroundImage: 'url(https://api.ameora.fun/content/vas_cartoon/thumnbnail/TOMANDJERRY/3.png)', backgroundSize: 'cover', backgroundPosition: 'center' } : index === 1 ? { backgroundImage: 'url(https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50/i5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' } : index === 2 ? { backgroundImage: 'url(https://api.ameora.fun/content/GalaxiWebsite/COOKING/i16.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' } : index === 3 ? { backgroundImage: 'url(https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i18.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' } : {}} />
              <div className="relative z-10">
                <h3 className="font-zentry text-3xl md:text-5xl font-black text-white mb-2 uppercase">
                  {feature.title}
                </h3>
                <p className="font-circular-web text-blue-50 text-lg">
                  {feature.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeatures;
