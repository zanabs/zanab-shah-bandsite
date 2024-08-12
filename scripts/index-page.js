let commentsForm = document.getElementsByClassName("comments__form");
let nameField = document.getElementsByClassName("name__input");
let commentField = document.getElementsByClassName("comment__input");


let commentsArray = [
  
]

function addComment(newComment) {
    
    commentsArray.push(newComment); 

    printComments();
    resetInputFields();
}


function resetInputFields() {
    nameField[0].value = '';
    commentField[0].value = '';
}

function createCommentDOMElement(comment) {
    const commentCardContainerDiv = document.createElement('div');
    commentCardContainerDiv.classList = "comment-card__container";

    const avatarPlaceHolderDiv = document.createElement('div');
    avatarPlaceHolderDiv.classList.add("avatar-placeholder");
    avatarPlaceHolderDiv.classList.add("avatar");

    const commentCardTextDiv = document.createElement('div');
    commentCardTextDiv.classList = "comment-card__text";

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
    commentTextDiv.append(commentText);

    commentName.innerText = comment.name;
    commentTimestamp.innerText = new Date(comment.timestamp).toDateString();

    return commentCardContainerDiv;
}


/*
commentsForm[0].addEventListener("submit", (event) => {
    
    event.preventDefault();
    if (nameField[0].value.length < 1 || commentField[0].value.length < 1) {
        alert("please fill out all required fields");       
    } else {
        
        let newComment= {
            name: nameField[0].value,
            comment: commentField[0].value,
            timestamp: Date.now()
        }
        addComment(newComment);
    }
});*/

function printComments() {
    let commentsContainer = document.getElementsByClassName("comments-container");

    commentsContainer[0].innerHTML = '';

    commentsArray.reverse();
    for (let i = 0; i < commentsArray.length; i++){
        const newCommentContainer = createCommentDOMElement(commentsArray[i]);
        commentsContainer[0].append(newCommentContainer);
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
                name: nameField[0].value,
                comment: commentField[0].value,

            }

        await populateAPI.postComment(comment);
        populateComments();

    }catch (error) {
        console.log(error);
    }
}



commentsForm[0].addEventListener("submit", (event) => {
    
    event.preventDefault();
    if (nameField[0].value.length < 1 || commentField[0].value.length < 1) {
        alert("please fill out all required fields");       
    } else {
        
        addPostedComment();
    }
});










