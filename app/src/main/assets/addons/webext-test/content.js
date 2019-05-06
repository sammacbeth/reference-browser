
console.log('[content-script] running');

chrome.runtime.onMessage.addListener((m) => {
  console.log('[content-script] Message from background', m);
  return Promise.resolve('response from content script');
})

chrome.runtime.sendMessage('message from content-script')