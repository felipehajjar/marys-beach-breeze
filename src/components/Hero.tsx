
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Banner } from '@/types';

interface HeroProps {
  banner: Banner;
}

const Hero = ({ banner }: HeroProps) => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${banner.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-4 z-10">
        <div className="max-w-xl bg-white/80 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ocean-dark">
            {banner.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            {banner.subtitle}
          </p>
          <Button asChild className="bg-coral hover:bg-coral-dark text-white px-8 py-6 text-lg">
            <Link to={banner.buttonLink}>{banner.buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
