/*you can use an array to store comments, and a function that generate html list of comments based on the array
on submit and clear you should use event.preventDefault(); to prevent the form from submitting to another page
on submit and clear you can manipulate the array and call the html generation function to recreate the commets-box content.


const field = document.querySelector('textarea');
const backUp = field.getAttribute('placeholder')
const btn = document.querySelector('.btn');
const clear = document.getElementById('clear')
const submit = document.querySelector('#submit')
// const comments = document.querySelector('#comment-box')
const comments = document.getElementById('comment-box');

// array to store the comments
const comments_arr = [];

// to generate html list based on comments array
const display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

clear.onclick = function(event){
  event.preventDefault();
  // reset the array  
   comments_arr.length = 0;
  // re-genrate the comment html list
  display_comments();
}

submit.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){ // if there is content
      // add the comment to the array
      comments_arr.push(content);
      // re-genrate the comment html list
      display_comments();
      // reset the textArea content 
      field.value = '';
    }
}
*/




//submitting comments via comments form
let commentsForm=document.getElementsByClassName("comments__form")
let submitButton=document.getElementsByName("submit-button");
let nameField=document.getElementsByClassName("name-field__input");
let commentField=document.getElementsByClassName("comment-field__input");


//

class Comment {
    constructor(name, comment) {
        this.name=name; 
        this.timestamp= Date.now();
        this.comment = comment;
    }
}

commentsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newComment = new Comment(nameField.value, commentField.value);

    if (nameField.value.length<1 && commentField.value.length<1){
        submitButton.addEventListener("onClick", (event) => {
            event.alert("please fill out all required fields");
        });
    } else{
        event.target.submit();
        commentsArray.push(newComment); 
    }

})

function addComment(comment) {

}

/*You must have an array in JavaScript with 3 default comment objects to start. Comments must have a name, a timestamp, and the comment text.
You must have a function that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.*/

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


/*All dynamic HTML should be added to DOM via DOM Methods for individual elements. Avoid bulk assigning stringified HTML using innerHTML
You must use an HTML Form with the following functionality:
That submits using the addEventListener
Prevents the page from reloading when submitting a new comment
Constructs a new comment object
Pushes a new comment object to an array of comments
Clears all comments from the page
Re-renders to the page all comments from the comment array
Clears the input fields after submitting a new comment*/


