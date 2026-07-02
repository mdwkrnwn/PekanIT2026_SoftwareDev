export interface PopularProduct {
  rank: number;
  name: string;
  views: number;
  percent: number;
  image: string;
}

export const popularProducts: PopularProduct[] = [
  {
    rank: 1,
    name: "Nasi Ayam Geprek",
    views: 324,
    percent: 42,
    image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
  },
  {
    rank: 2,
    name: "Es Teh Manis",
    views: 210,
    percent: 27,
    image: "/assets/umkm/makanan/dapurnona/esteh.jpeg",
  },
  {
    rank: 3,
    name: "Ayam Penyet",
    views: 145,
    percent: 18,
    image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
  },
  {
    rank: 4,
    name: "Sambal Terasi",
    views: 132,
    percent: 9,
    image: "/assets/umkm/makanan/dapurnona/sambalcumi.jpeg",
  },
  {
    rank: 5,
    name: "Ayam Penyet",
    views: 145,
    percent: 6,
    image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
  },
  {
    rank: 6,
    name: "Ayam Penyet",
    views: 145,
    percent: 4,
    image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
  },
];