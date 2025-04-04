
# 🎸 IoT-Enabled Ukulele Player (Multi-Modal Controlled)

This project implements a smart, IoT-based ukulele player that can be controlled via:
- 🧤 A glove-based **gesture recognition system**
- 📱 A cross-platform **mobile app** built with React Native

It leverages two ESP32 microcontrollers and Firebase Realtime Database for real-time communication and orchestration, along with Over-the-Air (OTA) firmware updates via GitHub Actions.

---

## 📂 Project Structure

```bash
IOT/
├── mobile/
│   └── node-backend/
│       └── MyReactApp/        # React Native app source
```

---

## 🚀 Features

- **Gesture Control** using a glove with flex sensors to detect chord shapes and strumming gestures.
- **Mobile App Control** with React Native to trigger chord selection, strumming, and song playback.
- **Servo Motors** for strumming the ukulele strings.
- **Solenoid Actuators** for accurate fret pressing.
- **ESP32 Microcontrollers** (x2): One handles input (glove/app), the other handles actuation (strum/fret).
- **Firebase Realtime Database** for synchronized communication between input and actuation.
- **Over-The-Air Updates** via GitHub Actions for seamless firmware upgrades.

---

## 🛠️ Technologies Used

- **React Native** (Frontend mobile app)
- **Node.js / Express** (Backend setup)
- **ESP32** (C++ using Arduino framework)
- **Firebase Realtime Database**
- **GitHub Actions** (CI/CD for OTA updates)
- **Hardware**: Flex sensors, servo motors, solenoids

---

## 📱 Mobile App (MyReactApp)

Located at:

```
IOT/mobile/node-backend/MyReactApp
```

### Setup

1. Navigate to the app directory:
   ```bash
   cd IOT/mobile/node-backend/MyReactApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app (via Expo):
   ```bash
   npx expo start
   ```

> Ensure your Firebase credentials and configuration are correctly set in the app's source code.

---

## 🔌 ESP32 Firmware

- One ESP32 handles glove gesture input or mobile commands.
- The second ESP32 interprets Firebase updates to strum and fret the ukulele.

### OTA Update Flow

- New firmware is pushed to GitHub.
- GitHub Actions compiles and attaches binaries to a release.
- ESP32 devices check the manifest periodically and update if newer firmware is available.

---

## 📷 Demo (Coming Soon)

We'll include video demonstrations and GIFs of:
- Glove-based chord selection
- Real-time strumming
- App-based song playback

---

## 📈 Performance

- **Latency**: < 200ms average round-trip
- **Strum Accuracy**: ±2° deviation from target angle
- **Fret Press Success Rate**: 98%
- **OTA Success Rate**: 100% over 20+ test deployments

---

## 👨‍💻 Contributors

- Zhaocun Sun
- Xinqi Cai
- Sibin George
- Pratyush Gaurav
- Abhishek Zade
- Venkata Manda

---

## 📄 License

This project is for academic and research purposes. Licensing will be updated upon final publication.

---

## 🌐 Resources

- [ESP32 Docs](https://www.espressif.com/en/products/socs/esp32/resources)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)
- [React Native Docs](https://reactnative.dev/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## 🙌 Acknowledgements

Thanks to Prof Weber from Trinity College Dublin for their guidance and resources during this project.


