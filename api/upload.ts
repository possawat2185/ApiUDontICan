import express from "express";
import multer from "multer";

export const router = express.Router();

const firebaseConfig = {
    apiKey: "AIzaSyCBqjLX3FN-9vH_Mi22C3omFxix6Vjxjfc",
    authDomain: "udontican-delivery.firebaseapp.com",
    projectId: "udontican-delivery",
    storageBucket: "udontican-delivery.appspot.com",
    messagingSenderId: "304107332797",
    appId: "1:304107332797:web:7731cdfa7da3f531af03d4",
    measurementId: "G-K4CT5JT1RT"
  };

import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
initializeApp(firebaseConfig);

const storage = getStorage();

class FileMiddleware {
    filename = "";
    //create multer object to save file in disk
    public readonly diskLoader = multer({
      //diskStorage = save to disk
      storage: multer.memoryStorage(),
      // กำหนดความใหญ่ของ file
      limits: {
        fileSize: 67108864, // 64 MByte
      },
    });
  }

router.get('/', (req, res)=>{
    res.send('Upload worked')
});

const fileupload = new FileMiddleware();

router.post('/image', fileupload.diskLoader.single("file"), (req, res)=>{
    const filename = Date()
})