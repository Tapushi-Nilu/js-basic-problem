//add button event hendler
document.getElementById('submit-comment').addEventListener('click', function(){

    //get user comment
    const commentText = document.getElementById('new-comment');

    const newComment = document.createElement('p');
    newComment.innerText = commentText.value;

    //appent the comment
   const userContainer = document.getElementById('comment-container');
   userContainer.appendChild(newComment);

   //clean the input
   commentText.value = '';
})









