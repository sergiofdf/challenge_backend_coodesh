import fetch from "node-fetch";

import { mailer } from "../providers/MailProvider/MailProvider";
import { mongoConnection } from "./mongo";
import { ArticleModel } from "./schemas/articleSchema";

export default async function getArticlesUpdatedList() {
  try {
    const response = await fetch(
      "https://api.spaceflightnewsapi.net/v3/articles"
    );

    const data = await response.json();

    const apiLastId = data[0].id;

    await mongoConnection();

    const result = await ArticleModel.find({})
      .sort({
        id: -1,
      })
      .limit(1);

    const mongoLastId = result[0].id;

    const toUpdate = apiLastId - mongoLastId;

    if (toUpdate < 1) {
      console.log(
        "Não existem novos artigos para atualizar no banco de dados!"
      );
      return null;
    }

    const responseToUpdate = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=${toUpdate}`
    );

    const updateJson = await responseToUpdate.json();

    const filteredArticlesToUpdate = updateJson.filter(
      (article) => article.id > mongoLastId
    );

    filteredArticlesToUpdate.map((article) => new ArticleModel(article).save());

    const numeroAtualizado = filteredArticlesToUpdate.length;

    console.log(`Banco de dados atualizado com ${numeroAtualizado} artigos!`);
    return null;
  } catch (error) {
    mailer();
    return null;
  }
}
