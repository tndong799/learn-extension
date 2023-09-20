// const article = document.querySelector('article');

// // `document.querySelector` may return null if the selector doesn't match anything.
// if (article) {
//     const text = article.textContent;
//     const wordMatchRegExp = /[^\s]+/g; // Regular expression
//     const words = text.matchAll(wordMatchRegExp);
//     // matchAll returns an iterator, convert to array to get word count
//     const wordCount = [...words].length;
//     const readingTime = Math.round(wordCount / 200);
//     const badge = document.createElement('p');
//     // Use the same styling as the publish information in an article's header
//     badge.classList.add('color-secondary-text', 'type--caption');
//     badge.textContent = `⏱️ ${readingTime} min read`;

//     // Support for API reference docs
//     const heading = article.querySelector('h1');
//     // Support for article docs with date
//     const date = article.querySelector('time')?.parentNode;

//     (date ?? heading).insertAdjacentElement('afterend', badge);
// }

const button = document.createElement('button');
button.style.cssText =
    'position: fixed; top: 0;right: 0; width: 20px; height: 20px; background-color: red; z-index: 9999';
button.addEventListener('click', () => {
    crawlData();
});
document.body.appendChild(button);

const crawlData = () => {
    const page =
        window.location.pathname.split('/')[2] == '' ? 'store' : 'detail';

    if (page === 'store') {
        const list = document.querySelectorAll('.vue-table-store-action');

        list.forEach((item) => {
            const link = item.querySelector('a').href;
            chrome.runtime.sendMessage({
                total_elements: link, // or whatever you want to send
            });
            // window.open(link, '_blank');
        });
    } else {
    }
};

const result = [];

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.total_elements);
});
