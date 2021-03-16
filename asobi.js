function jump(){
    const pp = document.getElementById('pp')
    if (pp.value === '名駅'){
        location.href ="https://kasumi-kaito.github.io/assessment/assessment.html"
    }
    else if(pp.value ===''){
        document.getElementById('hazu').innerHTML = "パスワードが入力されていません"
        if (hazu.className=="active") {
          hazu.className = "hazu";
        } else {
          hazu.className ="active";
        } }
    else if(pp.value ==='藤岡'){
        location.href ="https://www.google.com/search?q=n%E9%AB%98&oq=&aqs=chrome.0.69i59i450l8.575409440j0j15&sourceid=chrome&ie=UTF-8"
    }
 else {
    document.getElementById('hazu').innerHTML = "パスワードが間違っています";
    if (hazu.className=="hazu") {
      hazu.className = "active";
    } else {
      hazu.className = "hazu";
    }}}
const a = document.querySelector('div')
a.animate({
  opacity: [0, 1]
}, 1500)
