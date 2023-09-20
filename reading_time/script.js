let list = document.querySelectorAll('.vue-table-store-action');

console.log(list);
let links = [];
if (list && list.length) {
    links = list.map((item) => {
        return item.querySelector('a').href;
    });
}

// prepare JSON data with page title & first h1 tag
let data = JSON.stringify({ title: links, h1: 'Ngoc Dong' });

// send message back to popup script
chrome.runtime.sendMessage(null, data);
