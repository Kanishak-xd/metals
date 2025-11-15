# Metals

A React Native app built with Expo and NativeWind that displays real-time prices for precious metals (Gold, Silver, Platinum, and Palladium) using the GoldAPI.io service.

## Screenshots

### Home & Details Pages (Light & Dark)

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">

<img src="https://res.cloudinary.com/dykzzd9sy/image/upload/v1763230127/met-light_vxdp6r.jpg" width="250" />
<img src="https://res.cloudinary.com/dykzzd9sy/image/upload/v1763230109/met-dark_z1mvxt.jpg" width="250" />

<img src="https://res.cloudinary.com/dykzzd9sy/image/upload/v1763230110/det-light_feorib.jpg" width="250" />
<img src="https://res.cloudinary.com/dykzzd9sy/image/upload/v1763230109/det-dark_bkziqj.jpg" width="250" />

</div>

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Get your GoldAPI.io API Key
   - Go to [GoldAPI.io website](https://www.goldapi.io/)
   - Sign in or create an account
   - Navigate to your dashboard to get your API key
   - Open `services/prices.ts` in the metals folder
   - Replace the `GOLD_API_KEY` constant with your API key:
     ```typescript
     const GOLD_API_KEY = "your-api-key-here";
     ```

3. Start the app

   ```bash
   cd metals
   npx expo start
   ```

4. Run the app
   - **On your phone**: Scan the QR code with the Expo Go app (available on [iOS App Store](https://apps.apple.com/app/expo-go/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent))
   - **On web**: Press `w` in the terminal to open in your browser (localhost)
   - **On iOS Simulator**: Press `i` in the terminal (requires Xcode)
   - **On Android Emulator**: Press `a` in the terminal (requires Android Studio)

## Features

- Real-time metal prices (Gold, Silver, Platinum, Palladium)
- Dark mode support
- Detailed price information (Current, Open, Previous Close)
- Beautiful UI with NativeWind styling
- Responsive design for all screen sizes
