function openFlexbox() {
    const flexboxContainer = document.getElementById('flexboxContainer');
    flexboxContainer.classList.remove('hidden');
}

function closeFlexbox() {
    const flexboxContainer = document.getElementById('flexboxContainer');
    flexboxContainer.classList.add('hidden');
}
window.addEventListener('load', () => {
    const body = document.body;
    const toggle_btn = document.getElementById('toggle-mode');

    toggle_btn.addEventListener('click', () => {
        body.classList.toggle('lightmode');
        body.classList.toggle('darkmode');
    });
});


   function incrementLikes(likeCountId) {
            let currentLikes = parseInt(localStorage.getItem(likeCountId)) || 0;
            currentLikes++;
            document.getElementById(likeCountId).textContent = currentLikes;
            localStorage.setItem(likeCountId, currentLikes);
        }

function saveComment(commentId) {
    let commentInput = document.getElementById(commentId);
    let commentsDiv = document.getElementById('displayComments' + commentId.slice(-1));
    let existingComments = JSON.parse(localStorage.getItem(commentId)) || [];
    existingComments.push(commentInput.value);
    localStorage.setItem(commentId, JSON.stringify(existingComments));
    displayComments(commentId, commentsDiv);
}

function loadLikesAndComments(likeCountId, commentId) {

    let likes = localStorage.getItem(likeCountId);
    if (likes !== null) {
        document.getElementById(likeCountId).textContent = likes;
    }
   let commentsDiv = document.getElementById('displayComments' + commentId.slice(-1));
    displayComments(commentId, commentsDiv);
}

function displayComments(commentId, commentsDiv) {
    let comments = JSON.parse(localStorage.getItem(commentId)) || [];

    commentsDiv.innerHTML = '';
    comments.forEach(function (comment, index) {
        commentsDiv.innerHTML += `<p>Comment ${index + 1}: "${comment}"</p>`;
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const movingDiv = document.getElementById('movingDiv');
  
    movingDiv.addEventListener('animationend', function() {
     
      movingDiv.style.animation = 'moveLeft 2s linear';
      movingDiv.style.animationFillMode = 'forwards';
    });
  });
  