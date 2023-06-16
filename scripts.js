// getting the elements for users info from index page
const container = document.getElementById("users-container");

const insertId = document.getElementById("postId");

const getUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  for (let i = 0; i < 6; i++) {
    const userBox = document.createElement("div");
    const userName = document.createElement("h3");
    const userInfo = document.createElement("div");
    const userId = document.createElement("p");
    const userEmail = document.createElement("p");
    const userPhone = document.createElement("p");
    // insert info to the elements
    userName.innerHTML = data[i].name;
    userId.innerHTML = `ID : ${data[i].id}`;
    userEmail.innerHTML = `Email : ${data[i].email}`;
    userPhone.innerHTML = `Phone : ${data[i].phone}`;

    // button
    const userButton = document.createElement("button");

    userButton.innerText = "select user";

    // button onclick
    userButton.addEventListener("click",()=>{
        insertId.value = data[i].id;
    })

    // add classes to the elements

    userBox.classList.add("item");
    userInfo.classList.add("user-info");

    // append children

    userInfo.appendChild(userId);
    userInfo.appendChild(userEmail);
    userInfo.appendChild(userPhone);

    userBox.appendChild(userName);
    userBox.appendChild(userInfo);
    userBox.appendChild(userButton);

    container.appendChild(userBox);
  }
};

getUser();

async function addPost(form){
    const title = form.postTitle.value;
    const body = form.postBody.value;

    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title,
            body
        })
    })
    console.log(title + " ---- " + body)
}

// make gallery

const gallery = document.getElementById("img-container");

const getImages = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    for (let i = 0; i<10; i++){
        const singleImage = document.createElement("img");
        singleImage.setAttribute("src",`${data[i].url}`)
        gallery.appendChild(singleImage);
    }

}

getImages();


// mobile menu
const navbar = document.querySelector(".nav-items");
const menuIcon = document.querySelector('.menu-btn')
function mobileNavbar(){
    menuIcon.classList.toggle("openMenu")
    navbar.classList.toggle("navbar-active")
}