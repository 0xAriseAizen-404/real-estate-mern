import express from "express";
import {
  createUser,
  bookVisit,
  getAllBookings,
  cancelBooking,
  addResidencyToFavourites,
  getAllFavourites,
} from "../controllers/userControllers.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.route("/register").post(jwtCheck, createUser);
router.route("/book-visit/:id").post(jwtCheck, bookVisit);
router.route("/removeBooking/:id").post(jwtCheck, cancelBooking);
router.route("/allbookings").get(getAllBookings);
router.route("/toFav/:rid").post(jwtCheck, addResidencyToFavourites);
router.route("/allFavs").get(jwtCheck, getAllFavourites);

export default router;
