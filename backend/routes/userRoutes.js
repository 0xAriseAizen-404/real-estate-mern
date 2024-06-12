import express from "express";
import {
  createUser,
  bookVisit,
  getAllBookings,
  cancelBooking,
  addResidencyToFavourites,
  getAllFavourites,
} from "../controllers/userControllers.js";
const router = express.Router();

router.route("/register").post(createUser);
router.route("/book-visit/:id").post(bookVisit).delete(cancelBooking);
router.route("/allbookings").get(getAllBookings);
router.route("/toFav/:rid").post(addResidencyToFavourites);
router.route("/allFavs").get(getAllFavourites);

export default router;
