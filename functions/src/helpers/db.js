"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readUserData = readUserData;
exports.getUserVideos = getUserVideos;
exports.getVideo = getVideo;

var _firebase = require("../services/firebase");

function readUserData(uid) {
  var res = [];

  _firebase.db.collection("users").doc(uid).get().then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });

  return res;
}

function getUserVideos(uid) {
  return _firebase.db.collection("users").doc(uid).collection("videos");
}

function getVideo(uid, videoId) {
  return _firebase.db.collection("users").doc(uid).collection("videos").doc(videoId);
}