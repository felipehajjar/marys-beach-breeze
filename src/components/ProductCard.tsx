
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-[4/5] overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-montserrat font-semibold text-lg truncate">{product.name}</h3>
          <p className="text-ocean font-bold mt-1">{formatCurrency(product.price)}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <span className="text-sm text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded-full">
            {product.category.replace('-', ' ')}
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
