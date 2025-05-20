
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="bg-white h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {testimonial.imageUrl ? (
            <img 
              src={testimonial.imageUrl} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-ocean flex items-center justify-center mr-4">
              <span className="text-white font-semibold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-sand' : 'text-gray-200'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-700 italic">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
