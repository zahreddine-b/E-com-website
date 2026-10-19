import { useState } from 'react';
import { Heart, Plus, Star } from 'lucide-react';
import { formatPrice } from '../products.js';
export default function ProductCard({ product, onAdd }) {
  const [favorite, setFavorite] = useState(false);
  return <article className="product-card"><div className="product-image" style={{ background: product.color }}><img src={product.image} alt={product.name} loading="lazy"/>{product.tag && <span className={`product-tag ${product.tag === 'SALE' ? 'sale' : ''}`}>{product.tag}</span>}<button className={`favorite ${favorite ? 'is-favorite' : ''}`} onClick={() => setFavorite(!favorite)} aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}><Heart size={17} fill={favorite ? 'currentColor' : 'none'}/></button><button className="quick-add" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}><Plus size={20}/></button></div><div className="product-info"><div className="product-meta"><span>{product.category}</span><span className="rating"><Star size={13} fill="currentColor"/> {product.rating}</span></div><h3>{product.name}</h3><p>{product.description}</p><div className="product-price"><strong>{formatPrice(product.price)}</strong>{product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}</div><button className="add-button" onClick={() => onAdd(product)}><Plus size={16}/> Add to cart</button></div></article>
}
