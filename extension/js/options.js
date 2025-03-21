document.getElementById("saveSettings").addEventListener("click", () => {
    const sensitivity = document.getElementById("sensitivity").value;
    chrome.storage.sync.set({ sensitivity }, () => {
        alert("Settings saved successfully!");
    });
});
