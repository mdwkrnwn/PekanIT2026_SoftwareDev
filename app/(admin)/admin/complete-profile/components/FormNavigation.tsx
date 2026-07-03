import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

interface FormNavigationProps {
  onPrevious?: () => void;
  onNext: () => void;
  nextLabel?: string;
  previousLabel?: string;
  showPrevious?: boolean;
}

export default function FormNavigation({
  onPrevious,
  onNext,
  nextLabel = "Simpan & Masuk Dashboard",
  previousLabel = "Sebelumnya",
  showPrevious = true,
}: FormNavigationProps) {
  return (
    <div className="flex justify-between items-center border-t border-border pt-8 mt-4">
      {showPrevious ? (
        <button
          type="button"
          onClick={onPrevious}
          className="border border-slate-200 text-slate-700 font-bold px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-colors"
        >
          <LuArrowLeft size={20} />
          {previousLabel}
        </button>
      ) : (
        <div />
      )}

      <button
        type="button"
        onClick={onNext}
        className="bg-[#15803d] text-white font-bold px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-[#166534] transition-colors shadow-xs"
      >
        {nextLabel}
        <LuArrowRight size={20} />
      </button>
    </div>
  );
}