let directQuery = document.querySelectorAll('[direct]');

for (let i = 0; i < directQuery.length; i++) {
    directQuery[i].onclick = function () {
        window.open(directQuery[i].getAttribute('direct'));
    }
}