// "use client";

// import { LuStore } from "react-icons/lu";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
// } from "@/components/ui/select";
// import { categoryIcons } from "@/lib/category-icons";

// export interface Category {
//   id: number;
//   name: string;
//   icon: string;
// }

// interface Props {
//   formData: {
//     name: string;
//     category_id: string;
//     description: string;
//   };
//   setFormData: React.Dispatch<
//     React.SetStateAction<{
//       name: string;
//       category_id: string;
//       description: string;
//       address: string;
//       city: string;
//       phone: string;
//       instagram: string;
//       open_time: string;
//       close_time: string;
//     }>
//   >;
//   categories: Category[];
// }

// export default function UMKMInformationForm({
//   formData,
//   setFormData,
//   categories,
// }: Props) {
//   const selectedCategory = categories.find(
//     (item) => String(item.id) === formData.category_id,
//   );

//   const SelectedIcon =
//     selectedCategory &&
//     categoryIcons[selectedCategory.icon as keyof typeof categoryIcons];

//   return (
//     <div className="flex flex-col gap-6">
//       <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
//         <LuStore className="text-[#15803d]" /> Informasi UMKM
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="flex flex-col gap-2">
//           <label className="font-bold text-slate-900">
//             Nama UMKM <span className="text-rose-500">*</span>
//           </label>
//           <input
//             type="text"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name: e.target.value,
//               })
//             }
//             className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]"
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <label className="font-bold text-slate-900">
//             Kategori UMKM <span className="text-rose-500">*</span>
//           </label>
//           <Select
//             value={formData.category_id}
//             onValueChange={(value) =>
//               setFormData({
//                 ...formData,
//                 category_id: value,
//               })
//             }
//           >
//             <SelectTrigger
//               className="w-full h-15 border border-slate-200 rounded-xl
//                       px-4
//                       text-slate-800
//                       font-medium
//                       bg-white
//                       focus:outline-none
//                       focus:border-[#15803d]"
//             >
//               {selectedCategory ? (
//                 <div className="flex w-full items-center gap-4">
//                   {SelectedIcon && (
//                     <SelectedIcon size={26} className="text-[#667085]" />
//                   )}

//                   <span className="text-[15px] font-semibold text-[#667085]">
//                     {selectedCategory.name}
//                   </span>
//                 </div>
//               ) : (
//                 <span className="text-[#98A2B3]">Pilih kategori UMKM</span>
//               )}
//             </SelectTrigger>

//             <SelectContent position="popper" className="w-125 rounded-2xl">
//               {categories.map((item) => {
//                 const Icon =
//                   categoryIcons[item.icon as keyof typeof categoryIcons];

//                 return (
//                   <SelectItem
//                     key={item.id}
//                     value={String(item.id)}
//                     className="h-12 cursor-pointer bg-white"
//                   >
//                     <div className="flex items-center gap-3">
//                       {Icon && <Icon size={20} className="text-[#667085]" />}

//                       <span className="font-medium">{item.name}</span>
//                     </div>
//                   </SelectItem>
//                 );
//               })}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>
//       <div className="flex flex-col gap-2">
//         <label className="font-bold text-slate-900">
//           Deskripsi Singkat <span className="text-rose-500">*</span>
//         </label>
//         <textarea
//           rows={3}
//           value={formData.description}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               description: e.target.value,
//             })
//           }
//           className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d] resize-none"
//         />
//       </div>
//     </div>
//   );
// }
