const firebase = require('firebase');
const { link } = require('fs');
const data = require('./data.json')
var firebaseConfig = {
    apiKey: "AIzaSyAve9SFpbBZeS40BMYwD4KNzMoht1SyxnI",
    authDomain: "sanganaka-f8486.firebaseapp.com",
    databaseURL: "https://sanganaka-f8486.firebaseio.com",
    projectId: "sanganaka-f8486",
    storageBucket: "sanganaka-f8486.appspot.com",
    messagingSenderId: "891657383270",
    appId: "1:891657383270:web:8c5be227feed61ed8aeca7",
    measurementId: "G-VLFG4CWX78"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const addData = ()=> {
    i=1;
    data.Sheet1.forEach(async (dat)=> {
        await db.collection("articles").add({
            id: Math.random().toString(36).substring(2, 15) + Date.now(),
            category: dat.Category,
            topic: dat.Topic,
            content: dat.Content,
            article_link: dat["Article Link"],
            credits: dat["Credits"],
            interest: dat.Interest,
            images: [dat.Image],
            videos: dat["Video Link"],
            subBy: 'Team Sangnaka',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        console.log("data added"+ i++);
    })
}

addData();