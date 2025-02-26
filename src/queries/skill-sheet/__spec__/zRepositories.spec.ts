import { describe, it } from 'vitest';
import { Repositories, zRepositories } from '../types';

describe('zRepositories validation', () => {
  it('有効なデータを正しくパースできる', ({ expect }) => {
    const validData = [
      {
        fieldId: 'repository',
        description: 'description',
        repository: 'https://github.com/example/repository',
      },
    ] satisfies Repositories;

    const result = zRepositories.parse(validData);
    expect(result).toEqual(validData);
  });

  it('空配列を正しくパースできる', ({ expect }) => {
    const validData = [] satisfies Repositories;
    const result = zRepositories.parse(validData);
    expect(result).toEqual(validData);
  });

  it('fieldIdが"repository"以外の場合エラーを投げる', ({ expect }) => {
    const invalidData = [
      {
        fieldId: 'invalid',
        description: 'description',
        repository: 'https://github.com/example/repository',
      },
    ];

    expect(() => zRepositories.parse(invalidData)).toThrow();
  });

  it('descriptionが文字列でない場合エラーを投げる', ({ expect }) => {
    const invalidData = [
      {
        fieldId: 'repository',
        description: null,
        repository: 'https://github.com/example/repository',
      },
    ];

    expect(() => zRepositories.parse(invalidData)).toThrow();
  });

  it('repositoryがURLでない場合エラーを投げる', ({ expect }) => {
    const invalidData = [
      {
        fieldId: 'repository',
        description: 'description',
        repository: 'invalid-url',
      },
    ];

    expect(() => zRepositories.parse(invalidData)).toThrow();
  });

  it('配列でない場合エラーを投げる', ({ expect }) => {
    const invalidData = {
      fieldId: 'repository',
      description: 'description',
      repository: 'https://github.com/example/repository',
    };

    expect(() => zRepositories.parse(invalidData)).toThrow();
  });
});
