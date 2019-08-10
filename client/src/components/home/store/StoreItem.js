import React from 'react';

const StoreItem = ({ item }) => {
  const rarity = item.rarity;

  return (
    <div className={`item-image-container ${rarity}`}>
      <div className="image-overlay">
        <div className="item-background">
          <p className="item-name">{item.name}</p>
          <p className="item-price">
            <img
              src="https://image.fnbr.co/price/icon_vbucks_50x.png"
              alt="vbucks symbol"
            />
            {item.vBucks}
          </p>
        </div>
      </div>
      <img className={`item-image`} src={item.imageUrl} alt="store item" />
    </div>
  );
};

export default StoreItem;
