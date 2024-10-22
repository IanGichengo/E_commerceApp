import Product from '../components/Product';

function Home() {
  const featuredProducts = [
    { id: 1, name: 'Product 1', price: '$10', imageUrl: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', imageUrl: '/images/product2.jpg' },
  ];

  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>
      <div className="products">
        {featuredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;

