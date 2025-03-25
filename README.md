Below is a sample **README.md** file you can create in your project root. It includes all the steps you mentioned—from pulling the repo, installing dependencies, setting up Firebase, and running the app.

```markdown
# IoT Mobile Application

A mobile application project for IoT group 8.

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/IOT-group8/iot-mobile-application.git
cd iot-mobile-application
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Firebase Realtime Database & API Key
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project (or use an existing one).
3. Set up a **Realtime Database**.
4. Get your **baseURL** (Database URL) and **apiKey** from the Firebase project settings.

### 4. Create the `config` Folder & Firebase Config File
```bash
mkdir config
touch config/firebase.js
```
Then open `config/firebase.js` and paste your Firebase credentials in the following format:

```js
export const firebaseConfig = {
  baseURL: 'YOUR_FIREBASE_DATABASE_URL',
  apiKey: 'YOUR_FIREBASE_API_KEY',
};
```

### 5. Start the App
```bash
npm start
```
This command should launch the development environment for your mobile application.

---

## Folder Structure (Simplified)
```
iot-mobile-application/
├── config/
│   └── firebase.js
├── src/
├── package.json
└── README.md
```

---

## Contributing
1. **Fork** the repo (if needed).
2. Create your **feature branch** (`git checkout -b feature/some-feature`).
3. **Commit** your changes (`git commit -m 'Add some feature'`).
4. **Push** to the branch (`git push origin feature/some-feature`).
5. Open a **Pull Request**.

---

## License
This project is licensed under [MIT](LICENSE) – feel free to modify and re-use. 

---

**Happy coding!**
```

### How to Create This README Locally
1. In your project directory, run:
   ```bash
   touch README.md
   ```
2. Open `README.md` in a text editor and paste the above content.
3. Commit and push:
   ```bash
   git add README.md
   git commit -m "Add README"
   git push origin main
   ```
4. You’ll now see the README displayed on the GitHub repository page.