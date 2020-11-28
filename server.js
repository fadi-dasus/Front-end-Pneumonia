const express = require("express");
require("dotenv").config();
const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint
const fetch = require("node-fetch");

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header
  // and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true, // cache the signing key
    rateLimit: true,
    jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
    jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN
      }/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

  // This must match the algorithm selected in the Auth0 dashboard under your app's advanced settings under the OAuth tab
  algorithms: ["RS256"]
});

const app = express();

app.get("/private", checkJwt, function (req, res) {
  saveImage('HI').then(
    res.json({
      message: "Hello from a private API!"
    })
  )
});


// const imageUploadURL = 'http://localhost:8080/uploadFile'
const urlSubmit = 'http://localhost:8081/bachelor/image/saubmitImage'



function saveImage(image) {
  console.log('hello from the message')
  return fetch(urlSubmit, {

    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      physicalPath: 'name',
      status: 'Normal'
    })
  }).then(handleResponse)
    .catch(handleError);
}


//  function uploadImage(data) {
//   fetch(imageUploadURL, {
//       method: "POST",
//       body: data
//   }).then(handleResponse)
//       .catch(handleError);
// }

async function handleResponse(response) {
  if (response.ok) return response.text();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not created." + response.status);
}

function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}







app.listen(3001);
console.log("API server listening on " + process.env.REACT_APP_AUTH0_AUDIENCE);
