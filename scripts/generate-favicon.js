// This is a script to help you generate favicon files from your profile picture
// You would run this locally with Node.js after installing the 'sharp' package

import fs from "fs"
import path from "path"
import sharp from "sharp"

// Path to your profile picture
const inputImagePath = "profile-picture.jpg" // Replace with your image path

// Output directory (public folder)
const outputDir = "public"

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Generate favicon.ico (multiple sizes in one .ico file)
async function generateFavicon() {
  try {
    // Generate 16x16 PNG
    await sharp(inputImagePath).resize(16, 16).toFile(path.join(outputDir, "favicon-16x16.png"))

    // Generate 32x32 PNG
    await sharp(inputImagePath).resize(32, 32).toFile(path.join(outputDir, "favicon-32x32.png"))

    // Generate 180x180 Apple Touch Icon
    await sharp(inputImagePath).resize(180, 180).toFile(path.join(outputDir, "apple-touch-icon.png"))

    // For favicon.ico, you would typically use a tool like 'ico-convert'
    // or an online converter as sharp doesn't directly support .ico format

    console.log("Favicon files generated successfully!")
  } catch (error) {
    console.error("Error generating favicon files:", error)
  }
}

generateFavicon()

