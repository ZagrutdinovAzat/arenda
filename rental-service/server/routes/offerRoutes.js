import { Router } from "express";
import {
  createOffer,
  getAllOffers,
  getFullOffer,
  getFavoriteOffers,
  toggleFavorite,
} from "../controllers/offerController.js";
import upload from "../middleware/upload.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const offerRouter = new Router();

offerRouter.post(
  "/favorite/:offerId/:status",
  authenticateToken,
  toggleFavorite
);
offerRouter.get("/favorite", getFavoriteOffers);

offerRouter.get("/offers", getAllOffers);
offerRouter.post(
  "/offers",
  upload.fields([
    { name: "previewImage", maxCount: 1 },
    { name: "photos", maxCount: 6 },
  ]),
  createOffer
);

offerRouter.get("/offers/:id", getFullOffer);

export default offerRouter;
