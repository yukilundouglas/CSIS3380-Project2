// variable that store the reference to all contact items
const contacts = document.querySelectorAll('.contact-item');
// variable that store the current page number being display (default page number = 1)
let currentPage = 1;

createPagination();
displayContacts();
document.querySelectorAll('.pagination li a').forEach((link)=>{
    link.addEventListener('click', changePage);
});


// 1. function to create pagination at the bottom of the page based on number of contacts
function createPagination(){
    // variable that store the number of contact per page
    const ContactsPerPage = 10;
    // variable that calculate the number of pages required
    let numberOfPage = Math.ceil(contacts.length/ContactsPerPage);
    console.log("number of page = " + numberOfPage);
    // variable that store the ul element in Text for pagination to be added
    let paginationHTML = `<ul class="pagination">`;
    
    // A loop to add li element for each page to the paginationHTML variable
    for(let i=1; i<=numberOfPage; i++){
        if(i==currentPage){
            paginationHTML += `<li><a class='active'>${i}</a></li>`;
        }
        else{
            paginationHTML += `<li><a>${i}</a></li>`;
        }
    }
    // add the closing tag for the ul element for pagination
    paginationHTML += `</ul>`;
    console.log(paginationHTML);
    // insert the pagination ul element before end of div.page element
    document.querySelector('.page').insertAdjacentHTML('beforeend', paginationHTML);
}


//2. function to display contact items based on current page number
function displayContacts(){
    // variable that store the start index and end index for the contact items to be display based on current page number
    let startIndex = currentPage * 10 - 10;
    let endIndex = currentPage * 10 - 1;
    console.log(startIndex);
    console.log(endIndex);
    //loop through all contact items and set display = block for contact items to be displayed only (otherwise, set display = none)
    contacts.forEach((contact, index)=>{
        if(index<startIndex || index > endIndex){
            contact.style.display = "none";
        }
        else{
            contact.style.display = "block";
        }
    });

}

//3. function to be called when the page number link is being clicked
function changePage(e){
    // set current Page number to be the page number extracted from the link being clicked
    currentPage = parseInt(e.target.textContent);
    console.log("current page = " + currentPage);
    // variable that store the reference to all links
    const pagination = document.querySelectorAll('.pagination li a');

    // loop through all link and set only the page being clicked (current page number) with the class 'active'
    pagination.forEach((page)=>{
        if(page.textContent == currentPage){
            page.classList.add('active');
        }
        else{
            page.classList.remove('active');
        }  
    });

    // call the displayContacts function to display contact items based on the updated current page number
    displayContacts();
}

