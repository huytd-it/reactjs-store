import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CollectionItem from '@/components/collection-item/collection-item.component';
import { selectCollection } from '@/redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(state => selectCollection(collectionId)(state));

  if (!collection) {
    return <h2>Collection not found</h2>;  // Tránh lỗi nếu collection undefined
  }

  const { title, items } = collection;
  
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
