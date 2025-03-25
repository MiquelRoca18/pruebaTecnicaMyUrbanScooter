import { Product } from "@/types/product";
import Image from "next/image";
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

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductDetails(params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Volver al catálogo
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Imagen del producto */}
            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              {product.thumbnail ? (
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  priority
                  className="object-contain p-4"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400">Sin imagen</p>
                </div>
              )}
            </div>

            {/* Detalles del producto */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              
              {product.variants?.[0]?.prices?.[0]?.amount && (
                <p className="text-3xl font-bold text-blue-600 mb-6">
                  {(product.variants[0].prices[0].amount / 100).toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'EUR'
                  })}
                </p>
              )}

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Descripción</h2>
                <div className="text-gray-600 whitespace-pre-line">
                  {product.description}
                </div>
              </div>

              {/* Características del producto */}
              {product.variants?.[0] && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Características</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {product.variants[0].options?.map((option: any) => (
                      <div key={option.id} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">{option.option.title}</p>
                        <p className="font-medium text-gray-900">{option.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 