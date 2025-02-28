import MicroCMSBaseRepository from './microcms-base';

export default class SkillSheetRepository extends MicroCMSBaseRepository {
  async getSkillSheets() {
    const data = await this.client.getList({
      endpoint: 'skill-sheets',
    });

    return data;
  }

  async getSkillSheet(id: string) {
    const data = await this.client.get({
      endpoint: 'skill-sheets',
      contentId: id,
    });

    return data;
  }
}
