import { describe, it } from 'vitest';
import { zTeam } from '../types';

describe('zTeam validation', () => {
  it('有効なデータを正しくパースできる', ({ expect }) => {
    const validData = {
      fieldId: 'teams',
      director: 1,
      engineer: 2,
      programmer: 3,
      designer: 4,
    };

    const result = zTeam.parse(validData);
    expect(result).toEqual(validData);
  });

  it('フィールドが欠けていた場合エラーを投げる', ({ expect }) => {
    const partialData = {
      fieldId: 'teams',
    };

    expect(() => zTeam.parse(partialData)).toThrow();
  });

  it('fieldIdが"teams"以外の場合エラーを投げる', ({ expect }) => {
    const invalidData = {
      fieldId: 'invalid',
      director: 1,
      engineer: 2,
      programmer: 3,
      designer: 4,
    };

    expect(() => zTeam.parse(invalidData)).toThrow();
  });

  it('director が 無効なデータの場合エラーを投げる', ({ expect }) => {
    const invalidData = {
      fieldId: 'teams',
      director: 'invalid',
      engineer: 2,
      programmer: 3,
      designer: 4,
    };

    expect(() => zTeam.parse(invalidData)).toThrow();
  });

  it('engineer が 無効なデータの場合エラーを投げる', ({ expect }) => {
    const invalidData = {
      fieldId: 'teams',
      director: 1,
      engineer: 'invalid',
      programmer: 3,
      designer: 4,
    };

    expect(() => zTeam.parse(invalidData)).toThrow();
  });

  it('programmer が 無効なデータの場合エラーを投げる', ({ expect }) => {
    const invalidData = {
      fieldId: 'teams',
      director: 1,
      engineer: 2,
      programmer: 'invalid',
      designer: 4,
    };

    expect(() => zTeam.parse(invalidData)).toThrow();
  });

  it('designer が 無効なデータの場合エラーを投げる', ({ expect }) => {
    const invalidData = {
      fieldId: 'teams',
      director: 1,
      engineer: 2,
      programmer: 3,
      designer: 'invalid',
    };

    expect(() => zTeam.parse(invalidData)).toThrow();
  });
});
