chrome.devtools.network.onRequestFinished.addListener((connection) => {
  connection.getContent((content, encoding) => {
    if (content === null || content === undefined) {
      console.log(`Got bad content (${content}) for URL: ${connection.request.url}`);
    }
  });
});
