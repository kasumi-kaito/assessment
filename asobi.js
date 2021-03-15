function jump(){
    const pp = document.getElementById('pp')
    if (pp.value === '名駅'){
        location.href ="https://kasumi-kaito.github.io/assessment/assessment.html"
    }
    else if(pp.value ===''){
        document.getElementById('hazu').innerHTML = "パスワードが入力されていません"
    }
 else {
    document.getElementById('hazu').innerHTML = "パスワードが間違っています";
}
}
const div = document.querySelector('div')
div.animate({
  opacity: [0, 1]
}, 1500)
