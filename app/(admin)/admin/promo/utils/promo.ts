export function getPromoStatus(startDate: string, endDate: string) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);

  if (today < start) {
    return "Akan Datang";
  }

  if (today > end) {
    return "Selesai";
  }

  return "Aktif";
}