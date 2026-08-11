<p align="center">
  <img src="Extension/icons/girl.png" alt="PatPlacer Dragon" width="120" height="120" style="image-rendering: pixelated;">
</p>

<h1 align="center">🎮 OpenPlace-Pat-Placer</h1>

<p align="center">
  <strong>A precision pixel art placement tool for openplace.live based on <a href="https://github.com/Patricklumowa/Pat-Placer">Pat-Placer</a></strong>
</p>

<p align="center">
  <strong>Consider donating to <a href="https://github.com/Patricklumowa">Patricklumowa</a>, the original author of PatPlacer:</strong><br>
  <a href="https://ko-fi.com/S6S51LLDMK"><img src="https://cdn.prod.website-files.com/5c14e387dab576fe667689cf/670f5a0172b90570b1c21dab_kofi_logo.avif" alt="ko-fi"></a>
</p>

---

## ⚔️ What is PatPlacer for OpenPlace?

PatPlacer for OpenPlace is a Browser extension designed for artists and communities who want to place pixel art on [openplace.live](https://openplace.live) with surgical precision. Whether you're defending territory, collaborating on massive murals, or just want your art placed *exactly* where you want it—PatPlacer has your back.

**This is not a bot.** PatPlacer is a template overlay and batch drafting tool that helps you visualize and queue pixel placements efficiently.

---

## ✨ Features

### 🖼️ Advanced Image Processing
- **Smart Resizing** — Nearest neighbor, bilinear, bicubic, and Lanczos resampling
- **Color Correction** — Brightness, contrast, saturation, hue, and gamma controls
- **Dithering Algorithms** — Floyd-Steinberg, Atkinson, Ordered (Bayer), and more
- **Edge Detection** — Sobel, Prewitt, and Roberts cross operators
- **Post-Processing** — Posterize, mode filter, simplify, and erosion

### 🎯 Precision Placement
- **Anchor System** — Click anywhere on the canvas to set your placement origin
- **Template Overlay** — See exactly where your art will go before placing
- **Draft Overlay** — Visualize queued pixels in real-time
- **Tile-Accurate Positioning** — Works with wplace's tile coordinate system

### ⚡ Batch Operations
- **Smart Batching** — Queue hundreds of pixels at once
- **Progress Tracking** — Real-time stats on placed vs. remaining pixels
- **Auto-Save** — Never lose your progress with automatic local storage backup
- **Import/Export** — Save and share your projects as JSON files

### 🎨 Retro Cyberpunk UI
- **Pixel-Perfect Design** — Custom pixel art icons and decorations
- **Floating Characters** — Dragon, wizard, alien, and more watching over your work
- **Info Panel** — Live preview, stats, and progress at a glance

---

## 🚀 Installation

1. **Download** the latest release from the [Releases](https://github.com/Patricklumowa/Pat-Placer/releases) section

2. **Extract** the ZIP file to a folder on your computer

3. **Open Chrome Extensions**
   - Navigate to `chrome://extensions/`
   - Enable **Developer mode** (toggle in top-right)

4. **Load the Extension**
   - Click **Load unpacked**
   - Select the extracted `extension` folder

5. **Navigate to wplace.live**
   - The PatPlacer panel will appear automatically
   - Or click the extension icon to toggle

---

## 📖 Usage Guide

### Quick Start

1. **Upload an Image** — Drag & drop or click to browse
2. **Process** — Open the processing panel to resize, dither, and optimize
3. **Set Anchor** — Click "Capture Anchor" then click your target location on the canvas
4. **Preview** — Toggle template overlay to see placement preview
5. **Place** — Click "Place Drafts" to queue your pixels

### Processing Pipeline

```
Original Image
     ↓
Color Corrections (brightness, contrast, saturation, hue, gamma)
     ↓
Blur/Sharpen (optional)
     ↓
Resize (with chosen resampling method)
     ↓
Edge Detection (optional)
     ↓
Post-Processing (posterize, mode filter, simplify, erode)
     ↓
Quantization/Dithering (map to wplace palette)
     ↓
Ready to Place!
```

---

## ⚠️ Disclaimer

PatPlacer is a **visualization and drafting tool**. It does not bypass any rate limits or automate actual pixel placement beyond what the wplace.live interface allows. Use responsibly and respect community guidelines.

---

## 📜 License

Apache License 2.0 — See [LICENSE](LICENSE) for details.

---

<p align="center">
  <sub>Built by <a href="https://github.com/Patricklumowa">Patricklumowa</a> with 💜 and way too much caffeine</sub>
</p>

<p align="center">
  <img src="Extension/icons/wizard.png" width="62" style="image-rendering: pixelated;">
  <img src="Extension/icons/alien.png" width="62" style="image-rendering: pixelated;">
  <img src="Extension/icons/dragon.png" width="62" style="image-rendering: pixelated;">
  <img src="Extension/icons/robot.png" width="62" style="image-rendering: pixelated;">
  <img src="Extension/icons/monster.png" width="62" style="image-rendering: pixelated;">
</p>
