import React from 'react';
import FlashCard from '../../components/flashDeals/FlashCard';
import { Data } from '../../constants/Data';

const index = () => {
  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1>Tous les Articles</h1>
        </div>
        <div className="d_flex">
          {Data.allProducts.map((item) => (
            <FlashCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
