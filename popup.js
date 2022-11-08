//When submit is clicked, save the data to chrome's sync storage
document.getElementById("submitButton").addEventListener("click", saveData);

function saveData() {
  chrome.storage.sync.set(
    { id: document.getElementById("textInput").value },
    function () {
      document.getElementById("submitButton").remove();
      document.getElementById("textInput").remove();
      document.getElementById("titleText").remove();
      const header = document.getElementById("h1");
      const node = document.createTextNode("You're all set!");
      header.appendChild(node);
    }
  );
}

// TODO:--> bam another color (you should install better comments extension on vs code)
// ? below is the function that should allow the copy text button to work but doesn't
// function myFunction() {
  // Get the text field
  // var copyText = document.getElementById("showID");

  // Select the text field
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  // navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  // alert("Copied the text: " + copyText.value);
// } 



  chrome.storage.sync.get(["id"], function (result) {
    document.getElementById("shownID").innerHTML = result.id;
    });


    