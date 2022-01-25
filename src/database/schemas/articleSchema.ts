import { Schema, model, now } from "mongoose";

interface IArticle {
  id: string;
  featured?: boolean;
  title?: string;
  url?: string;
  imageUrl?: string;
  newsSite?: string;
  summary?: string;
  publishedAt?: string;
  updatedAt?: string;
  launches?: [
    {
      id: string;
      provider?: string;
    }
  ];
  events?: [
    {
      id: string;
      provider?: string;
    }
  ];
}

const articleSchema = new Schema<IArticle>({
  id: Number,
  featured: {
    type: Boolean,
    default: false,
  },
  title: String,
  url: String,
  imageUrl: String,
  newsSite: String,
  summary: String,
  publishedAt: String,
  updatedAt: String,
  launches: [
    {
      id: String,
      provider: String,
    },
  ],
  events: [
    {
      id: String,
      provider: String,
    },
  ],
});

const ArticleModel = model<IArticle>("Article", articleSchema);

export { ArticleModel };
