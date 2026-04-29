type BaseContent = {
  id: number;
  title: string;
  publishedAt: string;
  body: string;
  category: string;
  kinds: string;
};

type ImageUrl = { url: string };

export type ArticleContent = BaseContent & {
  imageUrl: ImageUrl;
  pass: string;
};

type BlogContent = BaseContent & {
  imageUrl: ImageUrl;
};

export type BlogIdProps = {
  blog: BlogContent;
};
