
console.log('[Webextension Test] start');

browser.webRequest.onBeforeRequest.addListener((details) => {
  console.log('[webrequest] tabId is: ', details.tabId);
}, { urls: ['<all_urls>']}, []);

browser.tabs.onCreated.addListener((tab) => {
  console.log('[tabs] onCreated', tab);
});

browser.tabs.onRemoved.addListener((tab) => {
  console.log('[tabs] onCreated', tab);
});

browser.tabs.onUpdated.addListener((tab) => {
  console.log('[tabs] onUpdated', tab);
});

browser.runtime.onMessage.addListener((m, sender) => {
  console.log('[background] Message from tab', m, sender);
});