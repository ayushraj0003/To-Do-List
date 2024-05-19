let newnote=document.querySelector("#newnote")
let addb=document.querySelector("#add");
let group=document.querySelector(".group");
let addbtn=document.querySelector("#addbtn");
let remove=document.querySelector("#remove");

addb.addEventListener("click",()=>{
    newnote.style.display = "block";
    textarea.focus();
})

// addbtn.addEventListener("click",()=>{
//     let newp=document.createElement("p");
//     let msg=document.getElementById("textarea").value;
//     newp.innerHTML = `<input type="checkbox" class="check"> ${msg}`;
//     newp.classList="notes"
//     group.appendChild(newp);
//     newnote.style.display = "none";
// })

// addbtn.addEventListener("click", () => {
//     // Create a new paragraph element
//     let newp = document.createElement("p");
    
//     // Create a new checkbox element
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.classList.add("check");
    
//     // Get the message from the textarea
//     let msg = document.getElementById("textarea").value;
    
//     // Append the checkbox to the paragraph element
//     newp.appendChild(checkbox);

//     // Set the text content of the paragraph element
//     newp.textContent = msg;

//     // Add the class "notes" to the paragraph element
//     newp.classList.add("notes");
    
//     // Append the paragraph element to the container
//     group.appendChild(newp);
    
//     // Hide the newnote section
//     newnote.style.display = "none";
// });

// addbtn.addEventListener("click", () => {
//     // Create a new paragraph element
//     let newp = document.createElement("p");
    
//     // Create a new checkbox element
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.classList.add("check");
    
//     // Append the checkbox to the paragraph element
//     newp.appendChild(checkbox);
    
//     // Get the message from the textarea
//     let msg = document.getElementById("textarea").value;
    
//     // Create a text node for the message
//     let textNode = document.createTextNode(msg);
    
//     // Append the message text node to the paragraph element
//     newp.appendChild(textNode);
    
//     // Add the class "notes" to the paragraph element
//     newp.classList.add("notes");
    
//     // Append the paragraph element to the container
//     group.appendChild(newp);
    
//     // Hide the newnote section
//     newnote.style.display = "none";
// });

// Get the text area element
let textarea = document.getElementById("textarea");

// Add event listener for key press
function createNote() {
        // Get the message from the textarea
        let msg = textarea.value.trim();

        if(msg!=="")
        {
        
        // Create a new paragraph element
        let newp = document.createElement("p");
        
        // Create a new checkbox element
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("check");
        
        // Append the checkbox to the paragraph element
        newp.appendChild(checkbox);
        
        //Create a textNode to store the msg
        let textNode=document.createTextNode(msg);
        newp.appendChild(textNode);
        
        // Add the class "notes" to the paragraph element
        newp.classList.add("notes");
        
        // Append the paragraph element to the container
        group.appendChild(newp);
        
        // Clear the textarea
        textarea.value = "";

        newnote.style.display = "none";
        group.style.display="block"
        newp.addEventListener("click", function() {
            checkbox.checked = !checkbox.checked; // Toggle checkbox state
        });               
    }
}

textarea.addEventListener("keypress", function(event){
// Check if the pressed key is Enter (keycode 13)
    if (event.key === "Enter") {
    // Prevent the default action of the Enter key (which is usually to add a new line)
    event.preventDefault();
    createNote();
    }
})

addbtn.addEventListener("click",createNote);


// remove.addEventListener("click",()=>{
//     let lastChild=group.lastElementChild;
//     if (lastChild) {
//         group.removeChild(lastChild);
//      }
// })

// remove.addEventListener("click", () => {
//     let children = group.children;
//     for (let i = children.length - 1; i >= 0; i--) {
//         let child = children[i];
//         let checkbox = child.querySelector('.check');
//         if (checkbox.checked) {
//             group.removeChild(child);
//         }
//     }
// });

remove.addEventListener("click", () => {
    // Check if any checkbox is checked
    let checkedItems = group.querySelectorAll('.check:checked');
    
    // If no checkbox is checked, return without further action
    if (checkedItems.length === 0) {
        return;
    }
    
    // Ask for confirmation
    let confirmDelete = window.confirm(`Are you sure you want to delete the ${checkedItems.length} items?`);
    
    // If user confirms deletion, proceed with deletion
    if (confirmDelete) {
        let children = group.children;
        for (let i = children.length - 1; i >= 0; i--) {
            let child = children[i];
            let checkbox = child.querySelector('.check');
            if (checkbox.checked) {
                group.removeChild(child);
            }
        }
    }
    if(group.childNodes.length===0) group.style.display="none";
});



let closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener("click", function() {
    newnote.style.display = "none";
    textarea.value = "";
});

window.addEventListener("click", function(event) {
    if (event.target == newnote) {
        newnote.style.display = "none";
        textarea.value = "";
    }
});