let ID = "0";
//gets number that corresponds to the id input field
const getNumber = (str) => {
  brack = 0;
  comma = 0;
  ans = "";
  for (i = 0; i < str.length; i++) {
    if (brack == 3) {
      if (str[i] == ",") {
        comma++;
      } else {
        ans += str[i];
      }
    }

    if (str[i] == "[") {
      brack++;
    }

    if (comma == 1) {
      //console.log(ans)
      return ans;
    }
  }
  return 1;
};

const inputID = (element) => {
  inputField = element.getElementsByClassName("whsOnd zHQkBf")[0];
  inputField.value = ID;
};

//checks which fields of the google form has an ID elements, and for each one inputs the ID
const hasID = (element) => {
  if (element.innerText.includes("ID") || element.innerText.includes("id?")) {
    dataParamElem = element.children[0];
    id = getNumber(dataParamElem.getAttribute("data-params"));

    inputID(element);
    element.getElementsByClassName("ndJi5d snByac")[0].remove();

    upDiv = form.querySelector("div[jsname='o6bZLc']");

    s = `input[name='entry.${id}']`;

    inputField = upDiv.querySelector(s);
    inputField.value = ID;
  }
};

//gets a reference to the form element
form = document.getElementsByClassName("Uc2NEf")[0];

//gets a reference to the questions in the form
questions = document.getElementsByClassName("Qr7Oae");

//sets a delay to 0.5s in order to ensure the entire form is loaded before checking
setTimeout(function () {
  chrome.storage.sync.get(["id"], function (result) {
    ID = result.id;
    Array.from(questions).forEach((e) => {
      hasID(e);
    });
  });
}, 500);
