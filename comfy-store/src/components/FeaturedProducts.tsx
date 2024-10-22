import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

import React from 'react';

const FeaturedProducts = () => {
  return (
    <section className="pt-24 ">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  );
};

export default FeaturedProducts;
