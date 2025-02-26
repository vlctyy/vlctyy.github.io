function openTab(evt, tabName) {
    let tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
}

function copyToClipboard() {
    let codeSnippet = document.getElementById("code-snippet").innerText;
    navigator.clipboard.writeText(codeSnippet).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
