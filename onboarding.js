//When submit is clicked, save the data to chrome's sync storage
document.getElementById("home-text5").addEventListener("click", saveData);

//Save the data and update the UI to tell the user they are all set
function saveData() {
  chrome.storage.sync.set(
    { id: document.getElementById("ida").value },
    function () {
      document.getElementById("rect").remove();
      const header = document.getElementById("home");
      const node = create();
      const after = document.getElementById("after");
      header.insertBefore(node, after);
    }
  );
}

function link() {
  window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSd_F4psuMJen_-MrD4oucfcE9eA8ZB3sMX-cp2JxRqiIJ8NXg/viewform?usp=sf_link";
}

//Creates the Try Button so the user can try out the SIDF for themselves
function create() {
  const allGood = document.createElement("div");
  allGood.classList.add("goodText", "home-rectangle2");
  allGood.textContent = "You're all set! Try it out below";

  const but = document.createElement("div");
  but.classList.add("butText", "home-rectangle4");
  but.textContent = "Try";
  allGood.appendChild(but);
  but.addEventListener("click", link);

  return allGood;
}
