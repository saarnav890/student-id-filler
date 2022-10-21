
document.getElementById("home-text5").addEventListener("click", saveData)

function saveData() {
    console.log(" HERE")
    chrome.storage.sync.set({id: document.getElementById("ida").value}, function() {
    document.getElementById('rect').remove()
    const header = document.getElementById("home")
    const node = document.createTextNode("You're all set!")
    header.appendChild(node)
    
}) 
}
