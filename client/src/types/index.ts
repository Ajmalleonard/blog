export interface CodeBlock {
  language: string;
  code: string;
  title?: string;
  highlightedLines?: number[];
  showLineNumbers: boolean;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  overview: string;
  content: string;
  author: string; // This would be the User _id
  tags: string[];
  comments: string[]; // These would be Comment _ids
  likes: number;
  codeBlocks?: CodeBlock[];
  series?: string;
  publishedAt?: Date;
  lastModified?: Date;
  createdAt: Date;
  updatedAt: Date;
}
