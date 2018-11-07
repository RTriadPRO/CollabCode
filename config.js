const tenantName    = //rtriadbiz>;
const clientID      = //1c517d26-a965-4a8e-bb5c-2a9381861c0f;
const serverPort    = 3000;

module.exports.serverPort = serverPort;

module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`, 
  clientID: clientID
};
