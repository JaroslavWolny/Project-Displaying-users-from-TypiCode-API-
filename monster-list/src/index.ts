import { userCard } from "./user-card";

const searchInput = document.getElementById("search-input") as HTMLInputElement;
const userList = document.getElementById("user-list") as HTMLUListElement;

async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  userCard(userList, searchInput, users);
}

loadUsers();
