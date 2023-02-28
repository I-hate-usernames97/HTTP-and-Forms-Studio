  setSearchEngine function(){
    const actions = {
    google: "https://www.google.com/search",
    duckDuckGo: "https://duckduckgo.com/",
    }
    const form = document.getElementById('searchForm');
    const selectedEngine = document.getElementById('input[name=engine]:checked');
    const action = actions[selectedEngine];
    form.setAttribute('action', action)
  };

    window.addEventListener("load", function(){
    const form = document.getElementById('searchForm');
    form.addEventListener('submit', setSearchEngine)
    });