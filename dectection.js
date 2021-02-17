// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata:
//   title: Cloud Vision Face Detection
//   description: Identify faces in an image using the Cloud Vision API.
//   usage: node vision-face-detection.js <fileName>

// My hope in creating this file is to then use the image URL as the
// file name and have the google API print out the likelihoods for each
// emotion


/*
 * I did not get the chance to properly implement this so I will explain
 * how I think it should be done.
 * 
 * I believe that similar to the yelp api it will be called in the oscars.js
 * file i have created. But in this case it might be best to reorganize
 * my code with async functions and have a few functions like this one
 * await for the yelp api, when that occurs we can then call this function
 * to then analyze our image URLs, and print that information out with the 
 * json objects we created earlier
*/
function googleAPIFaceDetection(fileName) {
  // [START vision_face_detection]
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  async function detectFaces(fileName) {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    const fileName = fileName;

    const [result] = await client.faceDetection(fileName);
    const faces = result.faceAnnotations;
    console.log('Faces:');
    faces.forEach((face, i) => {
      console.log(`  Face #${i + 1}:`);
      console.log(`    Joy: ${face.joyLikelihood}`);
      console.log(`    Anger: ${face.angerLikelihood}`);
      console.log(`    Sorrow: ${face.sorrowLikelihood}`);
      console.log(`    Surprise: ${face.surpriseLikelihood}`);
    });
  }
  detectFaces();
  // [END vision_face_detection]

}

module.exports = googleAPIFaceDetection;