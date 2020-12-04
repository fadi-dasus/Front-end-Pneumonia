const express = require("express");
const multer = require('multer');
const upload = multer();
require("dotenv").config();
const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint
const fetch = require("node-fetch");
const app = express();
var FormData = require('form-data');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// const bodyParser = require('body-parser');



const urlSubmit = 'http://localhost:8081/bachelor/image/saubmitImage'
const urlNikname = 'http://localhost:8081/bachelor/queue/registerQueue'
const imageUploadURL = 'http://localhost:8080/uploadFile'

const checkJwt = jwt({
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
  algorithms: ["RS256"]
});

app.post("/postImage", checkJwt, function (req, res) {
  saveImage(req.body).then((body) => {
    res.status(201)
    res.send(body)
  }

  )
});

app.post("/upload", checkJwt, upload.any(), (req, res) => {
  const { headers, files } = req;
  const { buffer, originalname: filename } = files[0];
  headers['Content-Type'] = 'multipart/form-data';

  const formFile = new FormData();
  formFile.append('file', buffer, { filename });

  uploadImage(formFile).then((body) => {
    res.status(201)
    res.send(body)


  })
});

app.post("/rigisterQueue", checkJwt, (req, res) => {
  rigisterQueue(req.body.nickname).then(res.status(201).send())
    .catch(res.status(500).send());
});

function rigisterQueue(body) {
  return fetch(urlNikname, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  })
}

function saveImage(image) {
  return fetch(urlSubmit, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      physicalPath: image.physicalPath,
      status: image.status,
      issuer: image.issuer
    })
  }).then(handleResponse)
    .catch(handleError);
}

function uploadImage(data) {
  return fetch(imageUploadURL, {
    method: "POST",
    body: data
  }).then(handleResponse)
    .catch(handleError);
}

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
console.log("The gateway  server listening on " + process.env.REACT_APP_AUTH0_AUDIENCE);
