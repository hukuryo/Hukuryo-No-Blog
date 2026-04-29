type CategoryKey = 'tech' | 'hobby' | 'books';

type CategoryConfig = {
  title: string;
  description: string;
};

export const CATEGORY_CONFIG: Record<CategoryKey, CategoryConfig> = {
  tech: {
    title: '技術記事',
    description: '技術記事一覧',
  },
  hobby: {
    title: '趣味',
    description: '趣味の記事一覧',
  },
  books: {
    title: '読んだ本',
    description: '読んだ本',
  },
};

export const VALID_CATEGORIES: CategoryKey[] = ['tech', 'hobby', 'books'];

export function isValidCategory(category: string): category is CategoryKey {
  return VALID_CATEGORIES.includes(category as CategoryKey);
}
