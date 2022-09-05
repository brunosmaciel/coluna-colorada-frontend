export type PostsResponse = {
  data: PostData;
  meta: PostMeta;
};

export type PostData = {
  id: number;
  attributes: PostAttributes;
};
export type PostAttributes = {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: PostCover;
  author: PostAuthor;
  category: PostCategory;
};
export type PostMeta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};
export type PostCover = {
  data: PostCoverData;
};
export type PostCoverData = {
  id: number;
  attributes: PostCoverAttributes;
};
export type PostCoverAttributes = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: PostCoverFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
};
export type PostCoverFormats = {
  large: PostCoverSize;
  small: PostCoverSize;
  medium: PostCoverSize;
  thumbnail: PostCoverSize;
};
export type PostCoverSize = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostAuthor = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};

export type PostCategory = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};
