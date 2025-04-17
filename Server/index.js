require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const connectDB = require("./config/db");
const Feedback = require("./models/Feedback");
const Product = require("./models/Product");

const app = express();
const port = process .env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB Connection
connectDB();

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

// Feedback Submission + Email
app.post("/submit-feedback", async (req, res) => {
  const { name, email, feedback } = req.body;
  try {
    const feedbackEntry = new Feedback({ name, email, feedback });
    await feedbackEntry.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thank you for your feedback, ${name}!`,
      text: `Hi ${name},\n\nWe have received your feedback: "${feedback}".\nWe will get back to you soon!\n\nBest Regards,\nYour Team`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Feedback submitted successfully and email sent!" });
  } catch (error) {
    console.error("Feedback Error:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
});

// QR Code for Product
app.get("/product/:id/qrcode", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const data = JSON.stringify({
      name: product.name,
      description: product.description || "",
      errorCode: product.errorCode || "",
    });

    const qrCode = await QRCode.toDataURL(data);
    res.json({ qrCode });
  } catch (error) {
    console.error("QR Code Error:", error);
    res.status(500).json({ message: "QR generation failed" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
