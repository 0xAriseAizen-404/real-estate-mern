import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");

  const { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } else {
    res.status(401).json({ message: "User already registered" }); // Change status to 401 for unauthorized
  }
});

export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;
  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      return res.status(400).json({ message: "Already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      return res
        .status(201)
        .json({ message: "Residency is booked successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  try {
    const userBookings = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });
    const index = userBookings.bookedVisits.findIndex(
      (visit) => visit.id === id
    );
    if (index === -1)
      return res.status(404).json({ message: "Booking not found" });
    else {
      userBookings.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: userBookings.bookedVisits,
        },
      });
    }
    res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const addResidencyToFavourites = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user.favResidenciesId.includes(rid)) {
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesId: {
            set: user.favResidenciesId.filter((id) => id !== rid),
          },
        },
      });
      return res.status(201).json({
        message: "Removed from favourites successfully",
        user: updatedUser,
      });
    } else {
      const updatedUser = await prisma.user.update({
        where: { email: email },
        data: {
          favResidenciesId: { push: rid },
        },
      });
      return res.status(201).json({
        message: "Residency added to favourites successfully",
        user: updatedUser,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const getAllFavourites = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    const favRes = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesId: true },
    });
    res.status(200).json(favRes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
