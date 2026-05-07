const WISHLIST_KEY = 'tm_wishlist_items';

export function getWishlist(): number[] {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
  } catch {
    return [];
  }
}

export function addToWishlist(id: number) {
  const list = getWishlist();
  if (!list.includes(id)) {
    list.push(id);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
    window.dispatchEvent(new Event('tmWishlist:changed'));
  }
}

export function removeFromWishlist(id: number) {
  const list = getWishlist().filter((item) => item !== id);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event('tmWishlist:changed'));
}

export function clearWishlist() {
  localStorage.removeItem(WISHLIST_KEY);
  window.dispatchEvent(new Event('tmWishlist:changed'));
}
