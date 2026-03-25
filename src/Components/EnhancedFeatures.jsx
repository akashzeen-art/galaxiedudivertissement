import TiltCard from './TiltCard';
import AnimatedTitle from './AnimatedTitle';
import comedyImage from '../assets/image.png';

const EnhancedFeatures = ({ onSelectCategory }) => {
  const features = [
    {
      id: 1,
      title: 'DESSINS ANIMÉS',
      description: 'Des aventures animées pour toute la famille',
      size: 'large',
      page: 'Dessin Animé',
    },
    {
      id: 2,
      title: 'COMÉDIE',
      description: 'Des fous rires et du stand-up à tout moment',
      size: 'small',
      page: 'Comédie',
    },
    {
      id: 3,
      title: 'GASTRONOMIE',
      description: 'Recettes gourmandes et idées faciles à reproduire',
      size: 'small',
      page: 'Cuisine',
    },
    {
      id: 4,
      title: 'STYLE',
      description: 'Style, beauté et inspirations du moment',
      size: 'small',
      page: 'Mode',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <AnimatedTitle
          title="CATÉGORIES DE CONTENUS"
          className="font-zentry text-4xl md:text-6xl font-black text-white text-center mb-16 uppercase"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <TiltCard
              key={feature.id}
              onClick={onSelectCategory ? () => onSelectCategory(feature.page) : undefined}
              className={`${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } bg-blue-75 rounded-3xl p-8 border border-white/20 backdrop-blur-md h-96 md:h-[65vh] flex flex-col justify-end relative overflow-hidden`}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-violet-300/20 to-transparent"
                style={
                  index === 0
                    ? {
                        backgroundImage:
                          'url(https://api.ameora.fun/content/vas_cartoon/thumnbnail/TOMANDJERRY/3.png)',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }
                    : index === 1
                      ? {
                          backgroundImage:
                            `url(${comedyImage})`,
                          backgroundSize: '100% 100%',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : index === 2
                        ? {
                            backgroundImage:
                              'url(https://api.ameora.fun/content/GalaxiWebsite/COOKING/i16.jpg)',
                            backgroundSize: '100% 100%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }
                        : index === 3
                          ? {
                              backgroundImage:
                                'url(https://api.ameora.fun/content/GalaxiWebsite/FASHION-24/i18.jpg)',
                              backgroundSize: '100% 100%',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                            }
                          : {}
                }
              />
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
