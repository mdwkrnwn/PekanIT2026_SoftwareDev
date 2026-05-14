export interface typeUMKM {
  id: number
  name: string
  category: string
  description: string
  location: string
  rating: number
  reviews: number
  distance: string
  status: string
  openHours: string
  lat: number
  lng: number
  tags: string[]
  about: string
  gallery: string[]
  featuredMenus: typeFeaturedMenu[]
}

export interface typeFeaturedMenu {
  name: string
  price: number
  image: string
}
