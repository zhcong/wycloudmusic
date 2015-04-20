chrome.app.runtime.onLaunched.addListener(function() {
  //新建窗口用的
  chrome.app.window.create('index.html', {
    'bounds': {
      'width': 320,
      'height': 450
    }
  });
});
