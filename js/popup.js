console.log('popip.js1121121')

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = handleStateChange; // 在其他地方实现。
xhr.open("GET", chrome.extension.getURL('https://www.google.com.hk/complete/search?q&cp=0&client=gws-wiz-serp&xssi=t&hl=zh-CN&authuser=0&pq=11&psi=pt9XYpuANYe9mAWYmI7QCA.1649926057147&newwindow=1&nolsbt=1&dpr=2'), true);
xhr.send();

function handleStateChange(e){
    console.log('handleStateChange',e.target)
}
