import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import sampleRoutes from "./routes/sample.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", sampleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
