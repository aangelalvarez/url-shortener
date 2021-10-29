import express from "express";
const router = express.Router();

// Handle all the invalid routes
router.all("*", (req, res, next) => {
    return res.status(404).send("Invalid route or method");
});

export default router;