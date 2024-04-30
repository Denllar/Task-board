import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKvuYkHzbw2u8kCFhCR04jkF1SmCCXEcY",
  authDomain: "task-board-53b4f.firebaseapp.com",
  projectId: "task-board-53b4f",
  storageBucket: "task-board-53b4f.appspot.com",
  messagingSenderId: "887006167448",
  appId: "1:887006167448:web:f383c42cf492f2d25dabed"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
