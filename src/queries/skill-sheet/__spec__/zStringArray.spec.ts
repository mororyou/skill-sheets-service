import { describe, it } from 'vitest';
import { zStringArray } from '../types';

describe('zStringArray validation', () => {
  it('有効な文字列配列を正しく検証できること', ({ expect }) => {
    const result = zStringArray.parse(['a', 'b', 'c']);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('空配列を正しく検証できること', ({ expect }) => {
    const result = zStringArray.parse([]);
    expect(result).toEqual([]);
  });

  it('無効なデータ型の場合にエラーを投げる', ({ expect }) => {
    expect(() => zStringArray.parse('not an array')).toThrow();
    expect(() => zStringArray.parse(1)).toThrow();
    expect(() => zStringArray.parse({})).toThrow();

    expect(() => zStringArray.parse(null)).not.toThrow();
    expect(() => zStringArray.parse(undefined)).not.toThrow();
  });

  it('配列内に文字列以外のデータが含まれる場合にエラーを投げる', ({
    expect,
  }) => {
    expect(() => zStringArray.parse(['valid', 123, 'valid'])).toThrow();
    expect(() => zStringArray.parse(['valid', null, 'valid'])).toThrow();
  });
});
