const limit = 5;
let counter = 0;

function getElements(startFrom) {
    return fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${startFrom}&_limit=${limit}`
    ).then((response) => {
        return response.json();
    });
}

function loadPosts() {
    getElements(counter).then((posts) => {
        posts.forEach((item) => {
            document.querySelector(".list").insertAdjacentHTML(
                "beforeend",
                `<div class="list__item">
                    <h2 class="title">${item.id}</h2>
                    <p class="text">${item.body}</p>
                </div>`
            );
        });
    });
}
loadPosts();
window.addEventListener("scroll", () => {
    if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight) {
        counter += limit;
        loadPosts();
    }
});
