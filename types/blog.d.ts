
// types/blog.d.ts or types/blog.ts
import type { z } from 'zod';
import { blogSchema } from '../content.config'; // adjust path as needed

export type BlogCollectionItem = z.infer<typeof blogSchema>;

// export interface BlogCollectionItem {
//   title: string;
//   date: string;
//   description?: string;
//   tags?: string[];
//   author?: string;
//   path: string;
//   // Add any other custom fields you use in your blog frontmatter
// } 