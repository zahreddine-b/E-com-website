import { ShoppingBag, Search, Zap } from 'lucide-react';
import { useSelector } from 'react-redux';
export default function Navbar({ search, setSearch, onOpenCart }) {
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return <header className="navbar"><a className="brand" href="#top"><span className="brand-icon"><Zap size={20} fill="currentColor" /></span><span>techno<span className="brand-dot">.</span></span></a><nav className="nav-links"><a href="#products">Shop</a><a href="#why-us">Why techno</a></nav><label className="search-box"><Search size={17}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." aria-label="Search products"/><kbd>⌘ K</kbd></label><button className="cart-button" onClick={onOpenCart} aria-label={`Open cart, ${count} items`}><ShoppingBag size={19}/><span className="cart-label">Cart</span><span className="cart-count">{count}</span></button></header>
}
