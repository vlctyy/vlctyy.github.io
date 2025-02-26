function copyToClipboard() {
    const codeSnippet = document.getElementById("code-snippet").innerText;
    navigator.clipboard.writeText(codeSnippet).then(() => {
        alert("Copied!");
    });
}

function showTab(tabName) {
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.style.display = "none";
    });
    document.getElementById(tabName).style.display = "block";

    document.querySelectorAll(".tab-button").forEach(button => {
        button.classList.remove("active");
    });
    event.target.classList.add("active");
}

/* Show first tab by default */
document.getElementById("bloxstrap").style.display = "block";
