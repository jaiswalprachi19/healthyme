import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());


app.use("/api/chat",chatBot);
app.use("/api/user",userRouter);
app.use("/api/admin",adminRouter);
app.use("/api/doctor",doctorRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server running on port ${port}`);
});