import { describe, it } from 'vitest';
import { Efforts, zEfforts } from '../types';

describe('zEffort validation', () => {
  it('有効なデータを正しくパースできる', ({ expect }) => {
    const validData = [
      {
        fieldId: 'effort',
        title: 'title',
        issue: 'issue',
        devise: 'devise',
      },
      {
        fieldId: 'effort',
        title: 'title2',
        issue: 'issue2',
        devise: 'devise2',
      },
    ] satisfies Efforts;

    const result = zEfforts.parse(validData);
    expect(result).toEqual(validData);
  });

  it('空配列を正しくパースできる', ({ expect }) => {
    const validData = [] satisfies Efforts;
    const result = zEfforts.parse(validData);
    expect(result).toEqual(validData);
  });

  it('fieldIdが"effort"以外の場合エラーを投げる', ({ expect }) => {
    const invalidData = [
      {
        fieldId: 'invalid',
        title: 'title',
        issue: 'issue',
        devise: 'devise',
      },
    ];

    expect(() => zEfforts.parse(invalidData)).toThrow();
  });

  it('titleが文字列でない場合エラーを投げる', ({ expect }) => {
    const invalidData = [
      {
        fieldId: 'effort',
        title: null,
        issue: 'issue',
        devise: 'devise',
      },
    ];

    expect(() => zEfforts.parse(invalidData)).toThrow();
  });

  it('issueが文字列でない場合エラーを投げる', ({ expect }) => {
    const invalidData = [
      {
        fieldId: 'effort',
        title: 'title',
        issue: null,
        devise: 'devise',
      },
    ];

    expect(() => zEfforts.parse(invalidData)).toThrow();
  });

  it('deviseが文字列でない場合エラーを投げる', ({ expect }) => {
    const invalidData = [
      {
        fieldId: 'effort',
        title: 'title',
        issue: 'issue',
        devise: null,
      },
    ];

    expect(() => zEfforts.parse(invalidData)).toThrow();
  });

  it('配列でない場合エラーを投げる', ({ expect }) => {
    const invalidData = {
      fieldId: 'effort',
      title: 'title',
      issue: 'issue',
      devise: 'devise',
    };

    expect(() => zEfforts.parse(invalidData)).toThrow();
  });
});
