import express from "express";
import {
  currentUser,
  addToCart,
  removeFromCart,
  getCart,
  addToWishlist,
  removeFromWishlist,
  getWishlist,
  checkout,
  getEnrolledCourses,
} from "../controllers/user.js";
import { authenticate } from "../middlewares/index.js";

const router = express.Router();

router.get("/user/current-user", authenticate, currentUser);
router.get("/user/cart", authenticate, getCart);
router.post("/user/cart", authenticate, addToCart);
router.delete("/user/cart/:id", authenticate, removeFromCart);
router.post("/checkout", authenticate, checkout);
router.get("/user/enrolled-courses", authenticate, getEnrolledCourses);
router.get("/user/wishlist", authenticate, getWishlist);
router.post("/user/wishlist", authenticate, addToWishlist);
router.delete("/user/wishlist/:id", authenticate, removeFromWishlist);

export default router;
