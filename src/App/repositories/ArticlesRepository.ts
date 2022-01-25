import { mongoConnection } from "../../database/mongo";
import { ArticleModel } from "../../database/schemas/articleSchema";

class ArticlesRepository {
  async findAll() {
    await mongoConnection();

    const result = await ArticleModel.find({})
      .sort({
        id: -1,
      })
      .limit(10);

    return result;
  }

  async findById(id: string) {
    await mongoConnection();

    const result = await ArticleModel.find({
      id,
    });

    return result;
  }

  async insertNewArticle({
    featured,
    title,
    url,
    imageUrl,
    newsSite,
    summary,
    publishedAt,
    updatedAt,
    launches,
    events,
  }: any) {
    await mongoConnection();

    const result = await ArticleModel.find({})
      .sort({
        id: -1,
      })
      .limit(1);

    const resultId = result[0].id;

    const newArticleId = resultId + 1;

    const newArticle = {
      id: newArticleId,
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      updatedAt,
      launches,
      events,
    };

    await new ArticleModel(newArticle).save();
  }

  async updateArticle(
    id: string,
    {
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      updatedAt,
      launches,
      events,
    }: any
  ) {
    await mongoConnection();

    await ArticleModel.findOneAndUpdate(
      { id },
      {
        featured,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        updatedAt,
        launches,
        events,
      },
      {
        upsert: false,
      }
    );
  }

  async deleteById(id: string): Promise<any> {
    await mongoConnection();

    const deleteOp = await ArticleModel.deleteOne({
      id,
    });

    return deleteOp;
  }
}

const ArticlesRepositoryInst = new ArticlesRepository();

export { ArticlesRepositoryInst };
