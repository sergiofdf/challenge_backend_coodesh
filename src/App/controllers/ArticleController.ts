import { Request, Response } from "express";

import { AppError } from "../middlewares/AppError";
import { ArticlesRepositoryInst } from "../repositories/ArticlesRepository";

class ArticleController {
  async index(request: Request, response: Response): Promise<Response> {
    return response
      .status(200)
      .json("Back-end Challenge 2021 🏅 - Space Flight News");
  }

  async showAll(request: Request, response: Response): Promise<Response> {
    const articles = await ArticlesRepositoryInst.findAll();

    if (articles.length < 1) {
      throw new AppError(
        "Erro no acesso ao banco de dados. Tente novamente após um momento!",
        500
      );
    }

    return response.json(articles);
  }

  async showById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const article = await ArticlesRepositoryInst.findById(id);

    if (article.length < 1) {
      throw new AppError(
        "Não encontrado artigo cadastrado com o ID informado!",
        404
      );
    }

    return response.json(article);
  }

  async createNewArticle(
    request: Request,
    response: Response
  ): Promise<Response> {
    const {
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
    } = request.body;

    if (!title && !url && !imageUrl && !newsSite && !publishedAt) {
      throw new AppError(
        "Campo obrigatório não preenchido: título, url, imageUrl, newsSite ou publishedAt!"
      );
    }

    const newArticle = await ArticlesRepositoryInst.insertNewArticle({
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
    });

    return response.json(newArticle);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
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
    } = request.body;

    const updatedArticle = await ArticlesRepositoryInst.updateArticle(id, {
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
    });

    return response.json(updatedArticle);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const article = await ArticlesRepositoryInst.findById(id);

    if (article.length < 1) {
      throw new AppError(
        "Não foi possível apagar o artigo, pois não foi encontrado nenhum com o ID informado!",
        404
      );
    }

    await ArticlesRepositoryInst.deleteById(id);

    return response.sendStatus(204);
  }
}

const InstArticleController = new ArticleController();

export { InstArticleController };
