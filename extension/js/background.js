chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1],
        addRules: [
            {
                id: 1,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "*phishing*",
                    resourceTypes: ["main_frame"]
                }
            }
        ]
    });

    console.log("[AI Phishing Detector] Blocking rules initialized.");
});

// Show Notification for Blocked Sites
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("phishing")) {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon48.png",
            title: "Phishing Alert!",
            message: `Blocked potential phishing site: ${tab.url}`
        });
    }
});
