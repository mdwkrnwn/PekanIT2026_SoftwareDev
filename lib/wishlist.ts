const WISHLIST_KEY = "tm_wishlist_items";

let cachedWishlist: number[] = [];

function readWishlist(): number[] {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY);

    if (!raw) return [];

    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function updateCache() {
  cachedWishlist = readWishlist();
}

if (typeof window !== "undefined") {
  updateCache();
}

function emitChange() {
  updateCache();

  window.dispatchEvent(new Event("tmWishlist:changed"));
}

export function getWishlistSnapshot() {
  return cachedWishlist;
}

export function subscribeWishlist(callback: () => void) {
  const handler = () => callback();

  const storageHandler = (e: StorageEvent) => {
    if (e.key === WISHLIST_KEY) {
      updateCache();
      callback();
    }
  };

  window.addEventListener("tmWishlist:changed", handler);
  window.addEventListener("storage", storageHandler);

  return () => {
    window.removeEventListener("tmWishlist:changed", handler);
    window.removeEventListener("storage", storageHandler);
  };
}

export function addToWishlist(id: number) {
  const list = getWishlistSnapshot();

  if (!list.includes(id)) {
    localStorage.setItem(
      WISHLIST_KEY,
      JSON.stringify([...list, id]),
    );

    emitChange();
  }
}

export function removeFromWishlist(id: number) {
  const list = getWishlistSnapshot().filter(
    (item) => item !== id,
  );

  localStorage.setItem(
    WISHLIST_KEY,
    JSON.stringify(list),
  );

  emitChange();
}

export function clearWishlist() {
  localStorage.removeItem(WISHLIST_KEY);

  emitChange();
}