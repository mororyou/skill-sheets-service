import { format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';

export const formatDate = (
  date: string | null | undefined,
  formatString: string = 'yyyy/MM/dd',
) => {
  try {
    if (!date) return '';
    const parsedDate = parseISO(date);
    return format(parsedDate, formatString, {
      locale: ja,
    });
  } catch {
    return '';
  }
};
