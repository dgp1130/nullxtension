chrome.devtools.network.onRequestFinished.addListener((connection) => {
  connection.getContent((data) => {
    // Limit to 10 characters to not blow up the console.
    if (!data) {
      console.log('Got bad data', data);
    } else {
      const [content, encoding] = data;
      if (content === null || content === undefined) {
        console.log('Got bad content ', content);
      }
    }
  });
});
