import { describe, it } from 'vitest';
import { formatDate } from '../format-date';

describe('formatDate', () => {
  it('文字列の日付を "yyyy/MM/dd" 形式でフォーマットできること', ({
    expect,
  }) => {
    const date = '2024-03-20';
    expect(formatDate(date)).toBe('2024/03/20');
  });

  it('文字列の日付を 指定のフォーマットでフォーマットできること', ({
    expect,
  }) => {
    const date = '2024-03-20';
    expect(formatDate(date, 'yyyy年MM月dd日')).toBe('2024年03月20日');
  });

  it('無効な日付の場合は空文字を返すこと', ({ expect }) => {
    expect(formatDate(null)).toBe('');

    expect(formatDate(undefined)).toBe('');

    expect(formatDate('invalid date')).toBe('');
  });
});
