import { Router } from "express";

import { InstArticleController } from "./App/controllers/ArticleController";

const router = Router();

router.get("/", InstArticleController.index);
router.get("/articles/", InstArticleController.showAll);
router.get("/articles/:id", InstArticleController.showById);
router.post("/articles/", InstArticleController.createNewArticle);
router.put("/articles/:id", InstArticleController.update);
router.delete("/articles/:id", InstArticleController.delete);

export { router };
