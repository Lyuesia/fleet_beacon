import { initializeApp } from "firebase"


const app = initializeApp ({
  apiKey: "AIzaSyD_LwhJo7Azwd2Ysi7ljif4Rq4crGRk5To",
  authDomain: "fleet-beacon.firebaseapp.com",
  databaseURL: "https://fleet-beacon.firebaseio.com",
  projectId: "fleet-beacon",
  storageBucket: "fleet-beacon.appspot.com",
  messagingSenderId: "956972768354"
})

export const db = app.database()
