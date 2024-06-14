import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidencyById,
} from "../controllers/residencyControllers.js";
import jwtCheck from "../config/auth0Config.js";
const router = express.Router();

router.route("/create").post(jwtCheck, createResidency);
router.route("/all").get(getAllResidencies);
router.route("/:id").get(getResidencyById);

export default router;
