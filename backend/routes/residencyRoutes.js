import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidencyById,
} from "../controllers/residencyControllers.js";
const router = express.Router();

router.route("/create").post(createResidency);
router.route("/all").get(getAllResidencies);
router.route("/:id").get(getResidencyById);

export default router;
