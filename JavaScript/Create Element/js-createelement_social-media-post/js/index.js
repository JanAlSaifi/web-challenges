console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const articleElement = document.createElement("article");
articleElement.classList.add("post");
document.body.append(articleElement);

const pElement = document.createElement("p");
pElement.classList.add("post__content");
pElement.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
articleElement.append(pElement);

const footerElement = document.createElement("footer");
footerElement.classList.add("post__footer");
articleElement.append(footerElement);

const spanElement = document.createElement("span");
spanElement.classList.add("post__username");
spanElement.textContent = "@username";
footerElement.append(spanElement);

const buttonElement = document.createElement("button");
buttonElement.classList.add("post__button");
buttonElement.setAttribute("type", "button");
buttonElement.textContent = " ♥ Like";
buttonElement.setAttribute("data-js", "like-button");
footerElement.append(buttonElement);
buttonElement.addEventListener("click", handleLikeButtonClick);
