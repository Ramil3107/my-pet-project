const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const admin = require("firebase-admin");
admin.initializeApp()
const app = express();
app.use(cors());


app.get("/", async (req, res) => {
    const snapshot = await admin.firestore().collection("notes").get()

    let notes = [];
    snapshot.forEach(doc => {
        let id = doc.id
        let data = doc.data()

        notes.push({ id, ...data })
    })

    res.status(200).send(JSON.stringify(notes))
});

app.post('/', async (req, res) => {
    const note = req.body
    await admin.firestore().collection('notes').add(note)
    res.status(201).send()
});


app.delete("/:id", async (req, res) => {
    await admin.firestore().collection("notes").doc(req.params.id).delete()
    res.status(200).send()
})


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.notes = functions.https.onRequest(app);

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
