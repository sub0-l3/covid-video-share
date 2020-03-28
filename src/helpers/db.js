import { db } from "../services/firebase";

export function readUserData(uid) {
  let res = [];

  db.collection("users")
    .doc(uid)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });

  return res;
}

export function getUserVideos(uid) {
  let videos = {};
  db.collection("users")
    .doc(uid)
    .collection("videos")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        videos = doc.data()
        // return doc.data()
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
    return videos;
}
