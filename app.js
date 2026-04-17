import express from "express";
import userRoutes from "./routes/userRoutes.js"
import { errorHandler } from "./middlewares/errorMiddeware.js";
import AppError from "./utils/appError.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRoutes);

// If a request reaches here, no route matched — treat it as 404
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Must be registered last — catches everything passed via next(error)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});