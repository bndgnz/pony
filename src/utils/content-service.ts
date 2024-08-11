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
    space: "dgdm78o9p3tb",
    accessToken: "9S2SpOEemYLtYlWCBeIRtKxFEmaUcNWG484otyL8wNU",
  });
   
  async getPageBySlug(slug: string) {
    return (
      await this.client.getEntries({
        content_type: "page",
        "fields.slug": slug,
      })
    ).items[0];
  }

  async getEntriesByType<T>(type: string) {
    
    return (
      await this.client.getEntries({
        content_type: type,
        include: 10
      })
    ).items;
  }
}