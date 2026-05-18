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
  const addComment = (comment: string) => {
    if (comment.length > 500) {
      return null;
    } setComment(comment)
  }
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
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          Tulis Ulasanmu <span className="dark:text-emerald-100 dark:bg-green-950 px-2 py-1 text-xs text-green-600 bg-green-100 rounded-full">Verified Visit</span>
        </h3>
        <p className="text-muted-foreground text-sm">Bagikan pengalamanmu setelah berkunjung.</p>
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
          onChange={({ target: { value } }) => addComment(value)}
          placeholder="Ceritakan pengalamanmu tentang makanan, suasana, dan pelayanan..."
          className="focus:ring-1 focus:ring-primary w-full h-24 p-3 mt-1 text-sm border rounded-lg outline-none resize-none"
          maxLength={500}
        />
        <div className="text-muted-foreground mt-1 text-xs text-right">
          {comment.length}/500
        </div>
      </div>
      {/* Comment */}
      <div>
        <p className="mb-2 text-sm font-medium">Tambah Foto (opsional)</p>
        <p className="mb-2 text-sm">Upload Foto Makanan Atau Tempat (maks. 5 foto)</p>
        <div className="flex w-full gap-4">
          <button type="button" className="w-18 text-primary hover:bg-primary/5 max-w-25 h-16 transition border-2 border-dashed rounded-lg">
            <label htmlFor="inputPhoto" className="size-full flex items-center justify-center text-3xl cursor-pointer">
              +
            </label>
            <input onChange={(e: BaseSyntheticEvent) => { setImages((prev) => [...prev, URL.createObjectURL(e.target.files[0])]) }
            } type="file" id="inputPhoto" accept="image/*" className="hidden" />
          </button>
          <div className="grid w-full grid-cols-5 gap-4">
            {/* preview image */}
            {image.length > 0 && image.map((item, index) =>
              <div key={index} className="relative">
                <button onClick={() => { setImages((prev) => prev.filter((_, i) => i !== index)); }} className="hover:bg-muted/80 right-[-5%] top-[-7.5%] absolute bg-muted rounded-full">
                  <BiX className="size-6" />
                </button>
                <Image key={index} src={item ?? null} className="w-auto max-w-full max-h-full rounded-lg" width={50} height={50} alt={"Preview Image" + index} />
              </div>
            )
            }
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={!rating || !comment}
        className="bg-primary size-fit disabled:opacity-50 hover:bg-blue-700 place-self-end disabled:cursor-not-allowed! px-6 py-2 font-medium text-white transition rounded-lg"
      >
        Kirim Ulasan
      </button>
    </form>
  );
}