let incode;
let session;
const incodeContainer = document.querySelector("#incode-container");

async function app(){
  alert("Incode Web SDK Demo");
	incode = await window.OnBoarding.create({
    apiURL: "https://demo-api.incodesmile.com/0" // API URL provided by Incode
  });  

  //Store the session object in a variable for later use
  session = {
  token:"eyJhbGciOiJIUzI1NiJ9.eyJleHRlcm5hbFVzZXJJZCI6IjY3ZWQxNWY0ZjdkMmQzOWMxYTRiNzc3NSIsInJvb14GUiOiJBQ0NFU1MiLCJUIjoiSSIsImtleVJlZiI6IjY2MTg2NTJkYzA1ZDY2MTgzZmQwNDg2MiIsImV4cCI6MTc1MTQ1MzMwMCwiaWF0IjoxNzQzNTkwOTAwfQ.mR7ibJRr_FSiNIlNkTdKBBVQMvGH0P8GI26gFnj7iZE86",
  interviewId:"67ed15f4f7d2d39c1a4b7775"
  } // Retrieved from backend

  //Start the flow!
  captureIdFrontSide();
}

document.addEventListener("DOMContentLoaded", app);

function captureIdFrontSide() {
  incode.renderCamera("front", incodeContainer, {
    token: session,
    numberOfTries: 3,
    onSuccess: captureIdBackSide,
    onError: console.log,
    showTutorial: true,
  });
}

function captureIdBackSide() {
  incode.renderCamera("back", incodeContainer, {
    token: session,
    numberOfTries: 3,
    onSuccess: validateId,
    onError: console.log,
    showTutorial: true,
  });
}

function validateId() {
  return incode.processId({ token: session.token })
    .then(() => {
      captureSelfie();
    })
    .catch((error) => {
      console.log(error);
    });
}

function captureSelfie() {
  incode.renderCamera("selfie", incodeContainer, {
    token: session,
    numberOfTries: 3,
    onSuccess: () => mySessionFinishMethod(session.token),
    onError: console.log,
    showTutorial: true,
  });
}
