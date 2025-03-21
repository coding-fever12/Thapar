chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scanURL") {
        const url = window.location.href;

        if (url.includes("phishing")) {
            alert("[WARNING] This site may be a phishing attempt!");
        } else {
            alert("✅ Safe site detected.");
        }
    }
});
