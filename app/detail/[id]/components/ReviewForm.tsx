"use client";

import { BaseSyntheticEvent, useState } from "react";
import Image from "next/image";
import { discussionAndReviews } from "@/data/DiscussionAndReviews";
import { BiX } from "react-icons/bi";
interface ReviewFormProps {
  onSubmit: (review: typeof discussionAndReviews[number]['reviews'][number] & {
    verified: boolean,
    timeago: string,
    likes: number,
    images: string[],
  }) => void;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [image, setImages] = useState<string[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: "Guest User",
      comment,
      rating,
      verified: true,
      timeago: "Baru saja",
      likes: 0,
      images: image,
    };

    onSubmit(newReview);

    setRating(0);
    setComment("");
    setImages([]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <h3 className="font-semibold text-lg flex items-center gap-2">
          Tulis Ulasanmu <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full">Verified Visit</span>
        </h3>
        <p className="text-sm text-muted-foreground">Bagikan pengalamanmu setelah berkunjung.</p>
      </div>

      <div>
        <label className="text-sm font-medium">Rating</label>
        <div className="flex gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Tulis ulasan</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Ceritakan pengalamanmu tentang makanan, suasana, dan pelayanan..."
          className="w-full mt-1 p-3 border rounded-lg resize-none h-24 text-sm outline-none focus:ring-1 focus:ring-primary"
          maxLength={500}
        />
        <div className="text-right text-xs text-muted-foreground mt-1">
          {comment.length}/500
        </div>
      </div>
      {/* Comment */}
      <div>
        <p className="text-sm font-medium mb-2">Tambah Foto (opsional)</p>
        <p className="text-sm mb-2">Upload Foto Makanan Atau Tempat (maks. 5 foto)</p>
        <div className="flex gap-4 w-full">
          <button type="button" className="h-16 w-18 border-2 border-dashed rounded-lg text-primary hover:bg-primary/5 max-w-25 transition">
            <label htmlFor="inputPhoto" className="size-full text-3xl flex items-center cursor-pointer justify-center">
              +
            </label>
            <input onChange={(e: BaseSyntheticEvent) => { setImages((prev) => [...prev, URL.createObjectURL(e.target.files[0])]) }
            } type="file" id="inputPhoto" accept="image/*" className="hidden" />
          </button>
          <div className="w-full grid grid-cols-5 gap-4">
            {/* preview image */}
            {image.length > 0 && image.map((item, index) =>
              <div key={index} className="relative">
                <button onClick={() => { setImages((prev) => prev.filter((_, i) => i !== index)); }} className="hover:bg-muted/80 right-[-5%] top-[-7.5%] absolute bg-muted rounded-full">
                  <BiX className="size-6" />
                </button>
                <Image key={index} src={item ?? null} className="max-h-full max-w-full w-auto rounded-lg" width={50} height={50} alt="skibidi" />
              </div>
            )
            }
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={!rating || !comment}
        className="bg-primary size-fit text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50 hover:bg-blue-700 transition place-self-end"
      >
        Kirim Ulasan
      </button>
    </form>
  );
}