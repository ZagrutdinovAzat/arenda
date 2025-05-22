import { Router } from "express";
import {
  createOffer,
  getAllOffers,
  getFullOffer,
} from "../controllers/offerController.js";
import { upload } from "../middleware/upload.js";

const offerRouter = new Router();

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
