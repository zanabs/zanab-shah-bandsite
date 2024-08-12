let commentsForm = document.querySelector(".comments__form");
let nameField = document.querySelector(".name__input");
let commentField = document.querySelector(".comment__input");


let commentsArray = [
  
]




function createCommentDOMElement(comment) {
    const commentCardContainerDiv = document.createElement('div');
    commentCardContainerDiv.classList = "comment-card__container";

    const avatarPlaceHolderDiv = document.createElement('div');
    avatarPlaceHolderDiv.classList.add("avatar-placeholder");
    avatarPlaceHolderDiv.classList.add("avatar");

    const commentCardTextDiv = document.createElement('div');
    commentCardTextDiv.classList = "comment-card__text";


    const deleteButtonDiv=document.createElement('div');
    deleteButtonDiv.classList="comment-card__delete-button-container";

    const deleteButton=document.createElement('button');
    deleteButton.classList="comment-card__delete-button";

    const commentNameTimestampDiv = document.createElement('div');
    commentNameTimestampDiv.classList = "name__timestamp";

    const commentName = document.createElement('p');
    commentName.classList.add('comment-name')
    const commentTimestamp = document.createElement('p');

    const commentTextDiv = document.createElement('div');
    commentTextDiv.classList = 'comment-text';

    const commentText = document.createElement('p');
    commentText.innerText = comment.comment;

    commentCardContainerDiv.append(avatarPlaceHolderDiv);
    commentCardContainerDiv.append(commentCardTextDiv);
    commentCardTextDiv.append(commentNameTimestampDiv);
    commentNameTimestampDiv.append(commentName);
    commentNameTimestampDiv.append(commentTimestamp);
    commentCardTextDiv.append(commentTextDiv);
    commentCardTextDiv.append(deleteButtonDiv);
    deleteButtonDiv.append(deleteButton);
    commentTextDiv.append(commentText);

    
    
    deleteButton.innerText="DELETE";
    commentName.innerText = comment.name;
    commentTimestamp.innerText = new Date(comment.timestamp).toDateString();
    

    deleteButton.addEventListener("click", async () =>  {
        console.log("this works")
        try {
        await populateAPI.deleteComment(comment.id);
        populateComments();
        }catch(error) {
            console.log(error);
        }
    })



    return commentCardContainerDiv;
}


function printComments() {
    let commentsContainer = document.querySelector(".comments-container");

    commentsContainer.innerHTML = '';

    commentsArray.reverse();
    for (let i = 0; i < commentsArray.length; i++){
        const newCommentContainer = createCommentDOMElement(commentsArray[i]);
        commentsContainer.append(newCommentContainer);
    }
    commentsArray.reverse();
}

printComments();



//use API to populate comments, shows


const API_KEY="4b619585-4ee8-43f0-8390-31e316e5ad60"; 

let populateAPI= new BandSiteApi(API_KEY);

let populateComments = async () => {
    try {
        let retrievedComments = await populateAPI.getComments();
        commentsArray = retrievedComments;
        printComments();
    } catch (error) {
        console.log(error);
    }


}

populateComments();

let addPostedComment = async () => {
    try {
        let comment = 
            {
                name: nameField.value,
                comment: commentField.value,

            }

        await populateAPI.postComment(comment);
        populateComments();

    }catch (error) {
        console.log(error);
    }
}



commentsForm.addEventListener("submit", (event) => {
    
    event.preventDefault();
    if (nameField.value.length < 1 || commentField.value.length < 1) {
        alert("please fill out all required fields");       
    } else {
        
        addPostedComment();
        commentsForm.reset();
    }
});











