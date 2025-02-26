import { describe, expect, it } from 'vitest';
import { zTechnologies } from '../types';

describe('zTechnologies', () => {
  it('有効なデータを正しくパースできる', () => {
    const validData = {
      fieldId: 'frameworks',
      frontend: ['React', 'Vue'],
      backend: ['Node.js'],
      ui: ['Material-UI'],
      styles: ['CSS', 'Sass'],
      testing: ['Jest'],
      other: ['Git'],
      cms: ['WordPress'],
    };

    const result = zTechnologies.parse(validData);
    expect(result).toEqual(validData);
  });

  it('フィールドが欠けていてもnullishとして受け入れる', () => {
    const partialData = {
      fieldId: 'frameworks',
    };

    expect(() => zTechnologies.parse(partialData)).not.toThrow();
  });

  it('fieldIdが"frameworks"以外の場合はエラーを投げる', () => {
    const invalidData = {
      fieldId: 'invalid',
      frontend: [],
      backend: [],
      ui: [],
      styles: [],
      testing: [],
      other: [],
      cms: [],
    };

    expect(() => zTechnologies.parse(invalidData)).toThrow();
  });

  it('nullish配列を受け入れる', () => {
    const validData = {
      fieldId: 'frameworks',
      frontend: null,
      backend: undefined,
      ui: [],
      styles: null,
      testing: undefined,
      other: [],
      cms: null,
    };

    expect(() => zTechnologies.parse(validData)).not.toThrow();
  });
});
