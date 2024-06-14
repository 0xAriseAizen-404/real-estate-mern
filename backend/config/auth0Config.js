import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "this is an unique identifier",
  issuerBaseURL: "https://dev-qpulsxw80eb4z4qe.uk.auth0.com/",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
