import jwt from 'jsonwebtoken'
import { ENV } from '../config/env.js'
import { User } from '../models/user.model.js'

export const protectRoute = async (req, res, next) => {
  try {
    let token;

    // 1️⃣ From cookies
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    // 2️⃣ From Authorization header (Postman)
    if (
      !token &&
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required - No token provided"
      });
    }

    const decode = jwt.verify(token, ENV.JWT_SECRET);

    const user = await User.findById(decode.userId).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found"
      });
    }

    req.user = user;
    next();

  } catch (error) {
    console.error("ProtectRoute error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Authentication failed",
      error: error.message
    });
  }
};


export const adminRoute = (req, res, next) => {
  try {
    // ✅ First, check if req.user exists
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    // ✅ Normalize emails to lowercase to avoid mismatch
    const adminEmail = ENV.ADMIN.toLowerCase();
    const userEmail = req.user.email.toLowerCase();

    if (userEmail === adminEmail) {
      return next(); // User is admin
    }

    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    });

  } catch (error) {
    console.error('AdminRoute error:', error);
    return res.status(500).json({
      success: false,
      message: 'Authorization failed',
      error: error.message
    });
  }
};
