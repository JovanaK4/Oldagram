let post = document.querySelector(".post")

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        post.innerHTML +=
        `
        <div class="container">
        <div class="post-header padding">
        <img class="post-header-profilepicture" src=${posts[i].avatar}>
         <div class="name-location">
          <p>${posts[i].name}</p>
          <p>${posts[i].location}</p>
         </div>
         </div>
         <img class="post-picture" src="${posts[i].post}">
         <img class="heart interactions" src="images/icon-heart.png">
         <img class="interactions" src="images/icon-comment.png">
         <img class="interactions" src="images/icon-dm.png">
         <p class="likes padding">${posts[i].likes} likes </p>
         <div class="username-comment">
            <p>${posts[i].username}</p>
            <p>${posts[i].comment}</p>          
         </div>
         </div>
         `
    }

}

renderPosts();


