import { createClient } from "contentful";
import { config } from "dotenv";
import { IPageFields } from "../@types/contentful";

/*
 * We tell TypeScript that those environment variables are always defined.
 * If you want to learn more about this madness, read:
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */  
config();

export default class ContentService {
  static get instance() {
    return new ContentService();
  }

  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
   
  async getPageBySlug(slug: string) {
    return (
      await this.client.getEntries<IPageFields>({
        content_type: "page",
        "fields.slug": slug,
      })
    ).items[0];
  }

  async getEntriesByType<T>(type: string) {
    return (
      await this.client.getEntries<T>({
        content_type: type,
        include: 10
      })
    ).items;
  }
}