import { RequestHandler } from "express";
import { ContactFormData, ContactFormResponse } from "@shared/api";
import nodemailer from "nodemailer";

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, businessName, message } = req.body as ContactFormData;

    // Validate input
    if (!name || !email || !businessName || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      } as ContactFormResponse);
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const htmlContent = `
      <h2>New Contact Form Submission from sitebetter</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Business Name:</strong> ${businessName}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>This email was sent from your sitebetter website contact form.</small></p>
    `;

    // Send email to your address
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "sitebetter.net@gmail.com",
      subject: `New Demo Request from ${businessName}`,
      html: htmlContent,
      replyTo: email,
    });

    // Optional: Send confirmation email to visitor
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message - sitebetter",
      html: `
        <h2>Thank you for your interest, ${name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our services at sitebetter.ca</p>
        <p>Best regards,<br>The sitebetter Team</p>
      `,
    });

    res.json({
      success: true,
      message: "Message sent successfully! We'll be in touch soon.",
    } as ContactFormResponse);
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    } as ContactFormResponse);
  }
};
