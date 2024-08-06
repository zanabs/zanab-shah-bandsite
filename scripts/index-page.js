let commentsForm = document.getElementsByClassName("comments__form");
let nameField = document.getElementsByClassName("name__input");
let commentField = document.getElementsByClassName("comment__input");


let commentsArray = [
    {
        name:"Victor Pinto",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.", 
        timestamp:"11/02/2023"
    },
    {
        name:"Christina Cabrera",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        timestamp:"10/28/2023"
    },
    {
        name:"Isaac Tadesse",
        comment: "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        timestamp:"10/20/2023"
    }
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
    commentTimestamp.innerText = timeSince(new Date(comment.timestamp));

    return commentCardContainerDiv;
}



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
});

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

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

printComments();