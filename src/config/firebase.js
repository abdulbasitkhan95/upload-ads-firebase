import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDS5nZ4sSmPoDGkUAqjc--7rvWcYODt6io",
    authDomain: "olxapp-9627e.firebaseapp.com",
    projectId: "olxapp-9627e",
    storageBucket: "olxapp-9627e.appspot.com",
    messagingSenderId: "315252637701",
    appId: "1:315252637701:web:a79550019e08e928871c6c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const storage = firebase.storage()

function RegisterUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('User Added Successfully')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}

function registerAd(fullName, email, phoneNumber, title, price, images, description) {
    db.collection('addetail').add({fullName, email, phoneNumber, title, price, images, description})
        .then(() => {
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

function getAllAds() {
    return db.collection('addetail').get()
}

function getSpecificAd(id) {
    return db.collection('addetail').where('email', '==', id).get()
}

async function storeImage (files) {
    const allFiles = []
    for (let i=0; i< files.length; i++) {
        let file = files[i]
        const storageRef = storage.ref(`images/${file.name}`)
        await storageRef.put(file)
        const  url = await storageRef.getDownloadURL()
        allFiles.push(url)
    }
    await db.collection('allImages').add({imageUrls: allFiles})
    alert('Image Uploaded Successfully')
}

export {
    RegisterUser,
    getAllAds,
    registerAd,
    getSpecificAd,
    storeImage
}