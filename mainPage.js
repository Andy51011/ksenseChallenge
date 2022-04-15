let users;
let posts;
let userId;
let reset = 0;
// api
const getUserData = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => displayUserTable(data));

const getUserPosts = fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => posts = data)
.then(() => console.log(posts));


  const userTable = document.getElementById("user-table");
  const tableBody = document.getElementById("table-body");
  const selector = document.getElementById("selectItem");
  const postContainer = document.getElementById("post-container");


  const displayUserTable = (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let header = document.createElement("th");
      header.innerHTML = `User ID: ${data[i].id}`;
      let row = document.createElement("tr");
      let option = document.createElement("option");
      option.value = `${data[i].id}`;
      option.innerHTML = `${data[i].name}`;
      selector.appendChild(option);
      row.innerHTML = data[i].name;
      header.appendChild(row);
      tableBody.appendChild(header);
    }
  }

  selectItem.addEventListener("change", (event) => {
    if (reset == 1) {
      postContainer.innerHTML = "";
      reset = 0;
    };
    displayPosts(posts, event.target.value);
  })
  // grab id and data from ip,, if match display something
  const displayPosts = (postData, id) => {
    for (let j = 0; j < postData.length; j++) {
      if (postData[j].userId == id) {
        let post = document.createElement("div");
        let postTitle = document.createElement("h2");
        let postBody = document.createElement("p");
        post.classList.add("post-div");
        postTitle.classList.add("post-title");
        postBody.classList.add("post-body");
        postTitle.innerHTML = `${postData[j].title}`;
        postBody.innerHTML = `${postData[j].body}`;
        post.appendChild(postTitle);
        post.appendChild(postBody);
        postContainer.appendChild(post);
        reset = 1;
        //postContainer.appendChild(post)
      }
    }
  }