import { useEffect, useState } from 'react';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

export default function Home() {
  const [recomendedProducts, setRecomendedProducts] = useState<IProduct[]>([]);


  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecomendedProducts(data);
      })
    })
  }, [])

  return (
    <div>
      <section>
        <Title>Products</Title>

        <ul>
          {recomendedProducts.map(recomendedProduct => {
            return (
              <li key={recomendedProduct.id}>
                {recomendedProduct.title}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
