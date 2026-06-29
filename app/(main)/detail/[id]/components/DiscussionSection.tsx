"use client";

import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

interface Reply {
  id: number;
  name: string;
  comment: string;
}

interface DiscussionItem {
  id: number;
  name: string;
  comment: string;
  replies: Reply[];
}

interface DiscussionSectionProps {
  discussion: DiscussionItem[];
  onUpdate: (discussion: DiscussionItem[]) => void;
}

export default function DiscussionSection({
  discussion,
  onUpdate,
}: DiscussionSectionProps) {
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const [replyTarget, setReplyTarget] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replyName, setReplyName] = useState("");

  const handleAddComment = () => {
    if (!newComment.name || !newComment.comment) return;

    const commentToAdd: DiscussionItem = {
      id: discussion.length + 1,
      ...newComment,
      replies: [],
    };

    onUpdate([commentToAdd, ...discussion]);
    setNewComment({ name: "", comment: "" });

    Swal.fire({
      icon: "success",
      title: "Komentar berhasil dikirim!",
      timer: 1500,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
      background: "#f0fdf4",
      color: "#065f46",
    });
  };

  const handleReply = (commentId: number) => {
    if (!replyName || !replyText) return;

    onUpdate(
      discussion.map((d) =>
        d.id === commentId
          ? {
            ...d,
            replies: [
              ...d.replies,
              {
                id: d.replies?.length + 1,
                name: replyName,
                comment: replyText,
              },
            ],
          }
          : d
      )
    );

    setReplyTarget(null);
    setReplyName("");
    setReplyText("");
  };

  return (
    <div className="space-y-5">
      {/* Discussion List */}
      {discussion?.length === 0 ? (
        <div className="rounded-3xl p-6 text-center bg-white border border-gray-100 shadow-sm">
          <p className="text-muted-foreground text-sm">
            Belum ada diskusi untuk produk ini.
          </p>
        </div>
      ) : (
        discussion?.map((d) => (
          <div
            key={d.id}
            className="rounded-3xl p-5 bg-white border border-gray-100 shadow-sm"
          >
            {/* Main Comment */}
            <div className="flex gap-4">
              <Image
                width={100}
                height={100}
                src="/products/user.jpg"
                alt={d.name}
                className="size-12 object-cover rounded-full"
              />

              <div className="flex-1">
                <h4 className="font-semibold">{d.name}</h4>

                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {d.comment}
                </p>

                <button
                  className="text-primary hover:underline mt-3 text-sm"
                  onClick={() => setReplyTarget(d.id)}
                >
                  Reply
                </button>

                {/* Reply Form */}
                {replyTarget === d.id && (
                  <div className="bg-gray-50 rounded-2xl p-4 mt-4 border border-gray-100">
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Nama"
                        value={replyName}
                        onChange={(e) => setReplyName(e.target.value)}
                        className="rounded-xl focus:border-primary w-full px-4 py-2 bg-white border border-gray-200 outline-none"
                      />

                      <textarea
                        placeholder="Balasan"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="rounded-xl focus:border-primary min-h-25 w-full px-4 py-3 bg-white border border-gray-200 outline-none"
                      />

                      <button
                        onClick={() => handleReply(d.id)}
                        className="bg-primary hover:bg-primary/90 rounded-xl px-5 py-2 text-white transition-all"
                      >
                        Kirim Balasan
                      </button>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {d.replies && (
                  <>
                    {d.replies.length > 0 && (
                      <div className="border-primary/10 pl-5 mt-5 space-y-4 border-l-2">
                        {d.replies.map((r) => (
                          <div key={r.id} className="flex gap-3">
                            <Image
                              width={100}
                              height={100}
                              src="/products/user.jpg"
                              alt={r.name}
                              className="object-cover w-10 h-10 rounded-full"
                            />

                            <div>
                              <h5 className="text-sm font-medium">{r.name}</h5>

                              <p className="text-muted-foreground text-sm">
                                {r.comment}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))
      )}

      {/* Add Discussion */}
      <div className="rounded-3xl p-6 bg-white border border-gray-100 shadow-sm">
        <h4 className="mb-5 text-lg font-bold">Tambahkan Komentar</h4>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nama"
            value={newComment.name}
            onChange={(e) =>
              setNewComment({
                ...newComment,
                name: e.target.value,
              })
            }
            className="rounded-2xl bg-gray-50 focus:border-primary w-full px-4 py-3 border border-gray-200 outline-none"
          />

          <textarea
            placeholder="Komentar"
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({
                ...newComment,
                comment: e.target.value,
              })
            }
            className="rounded-2xl bg-gray-50 focus:border-primary min-h-30 w-full px-4 py-3 border border-gray-200 outline-none"
          />

          <button
            onClick={handleAddComment}
            className="bg-primary hover:bg-primary/90 rounded-2xl w-full px-6 py-3 font-semibold text-white transition-all shadow-md"
          >
            Kirim Komentar
          </button>
        </div>
      </div>
    </div>
  );
}
