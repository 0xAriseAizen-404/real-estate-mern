import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body.data;
  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: {
          connect: {
            email: userEmail,
          },
        },
      },
    });
    res
      .status(201)
      .json({ message: "Residency created successfully", residency });
  } catch (error) {
    if (error.code == "P2002")
      throw new Error("A residency with address already there");
    throw new Error(error.message);
  }
});

export const getAllResidencies = asyncHandler(async (req, res) => {
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(residencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const getResidencyById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const residency = await prisma.residency.findUnique({
      where: { id: id.toString() },
    });
    if (!residency)
      return res.status(404).json({ message: "Residency not found" });
    res.status(200).json(residency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
