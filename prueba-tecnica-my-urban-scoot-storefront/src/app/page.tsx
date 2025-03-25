import { Product } from "@/types/product";
import Image from "next/image";
import ErrorMessage from "@/components/ErrorMessage";
import Link from "next/link";

async function getProductDetails(productId: string) {
  try {
    const res = await fetch(`http://localhost:9000/store/products/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-publishable-api-key': process.env.NEXT_PUBLIC_MEDUSA_API_KEY || ''
      },
    });
    
    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.product;
  } catch (error) {
    console.error('Error al obtener detalles del producto:', error);
    return null;
  }
}

async function getProducts() {
  try {
    const res = await fetch('http://localhost:9000/store/products?limit=100', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-publishable-api-key': process.env.NEXT_PUBLIC_MEDUSA_API_KEY || ''
      },
    });
    
    if (!res.ok) {
      console.error('Error en la respuesta:', res.status, res.statusText);
      return null;
    }

    const data = await res.json();
    console.log('Lista de productos:', JSON.stringify(data, null, 2));
    return data.products;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return null;
  }
}

export default async function Home() {
  const products = await getProducts();
  
  // Obtener los detalles de todos los productos
  const productsWithDetails = await Promise.all(
    products?.map(async (product: Product) => {
      const details = await getProductDetails(product.id);
      return {
        ...product,
        price: details?.variants?.[0]?.prices?.[0]?.amount
      };
    }) || []
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Catálogo de Patinetes Eléctricos</h1>
        
        {productsWithDetails ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsWithDetails.map((product) => {
              console.log('Producto:', product.title);
              console.log('Precio:', product.price);
              
              return (
                <Link 
                  href={`/product/${product.id}`} 
                  key={product.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64 bg-gray-100">
                    {product.thumbnail ? (
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        priority
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-400">Sin imagen</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                    
                    {product.price && (
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-blue-600">
                          {(product.price / 100).toLocaleString('es-ES', {
                            style: 'currency',
                            currency: 'EUR'
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <ErrorMessage />
        )}
      </div>
    </div>
  );
}
