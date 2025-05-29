import Router from "express";
import {
  addReview,
  getReviewsByOfferId,
} from "../controllers/reviewController.js";

const router = new Router();

router.post("/:offerId", addReview);
router.get("/:offerId", getReviewsByOfferId);
export default router;
