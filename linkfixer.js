var x = document.links.length;
  for (i = 0; i < x; i++) {
    var thisHREF = document.links[i].href;
    if (thisHREF.indexOf(window.location.hostname) > -1) thisHREF = thisHREF.replace(".md",".html").replace("/index/","/");
    document.links[i].setAttribute('href', thisHREF);
  }