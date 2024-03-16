import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the updates page");
});

router.post("/create-update", createUpdate);
router.get("/updates", getUpdates);
router.delete("/delete-update", deleteUpdate);
router.put("/update-update", updateUpdate);

export default router;
