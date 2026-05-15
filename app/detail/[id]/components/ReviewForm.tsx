"use client";

import { useState } from "react";

interface ReviewFormProps {
  onSubmit: (review: any) => void;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  // Image upload state handling omitted for brevity, implement as needed.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !comment.trim()) return;

    const newReview = {
      id: Date.now(), // Generate pseudo-ID
      name: "Guest User", // Replace with actual user context
      comment,
      rating,
      verified: true,
      timeago: "Baru saja",
      likes: 0,
      images: [], // Append uploaded image URLs here
    };

    onSubmit(newReview);

    // Reset form state
    setRating(0);
    setComment("");
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

      <div className="flex justify-between items-end">
        <div>
          <label className="text-sm font-medium block mb-2">Tambah Foto (opsional)</label>
          <button type="button" className="w-16 h-16 border-2 border-dashed rounded-lg flex items-center justify-center text-primary hover:bg-primary/5 transition">
            +
          </button>
        </div>
        <button
          type="submit"
          disabled={!rating || !comment}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50 hover:bg-blue-700 transition"
        >
          Kirim Ulasan
        </button>
      </div>
    </form>
  );
}