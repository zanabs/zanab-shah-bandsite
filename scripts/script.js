//submitting comments via comments form

let commentsForm=document.getElementsByClassName("comments__form")

let submitButton=document.getElementsByName("submit-button");


commentsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let requiredContent= event.target.querySelectorAll ("input", "textarea");
    let emptyContent = Array.from(requiredContent).find((element)=> {
        if (element.value.length<1) {return true}
        return false;
    })
    if (emptyContent){
        alert.emptyContent.element;
    }else{
        event.target.submit();
    }

})

function addComment(comment) {
    
}

/*You must have an array in JavaScript with 3 default comment objects to start. Comments must have a name, a timestamp, and the comment text.
You must have a function that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.
All dynamic HTML should be added to DOM via DOM Methods for individual elements. Avoid bulk assigning stringified HTML using innerHTML
You must use an HTML Form with the following functionality:
That submits using the addEventListener
Prevents the page from reloading when submitting a new comment
Constructs a new comment object
Pushes a new comment object to an array of comments
Clears all comments from the page
Re-renders to the page all comments from the comment array
Clears the input fields after submitting a new comment*/


