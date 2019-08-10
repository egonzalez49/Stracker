import React from 'react';

const StoreItem = ({ item }) => {
  const rarity = item.rarity;

  return (
    <div className="item-image-container">
      <img
        className={`item-image ${rarity}`}
        src={item.imageUrl}
        alt="store item"
      />

      <div className="image-overlay">
        <div className="item-background">
          <p className="item-name">{item.name}</p>
          <p className="item-price">
            <img src="https://image.fnbr.co/price/icon_vbucks_50x.png" />
            {item.vBucks}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
