interface User {
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  id: number;
}

export function userCard(
  userList: HTMLUListElement,
  searchInput: HTMLInputElement,
  users: User[]
): void {
  let filterText = "";

  searchInput.addEventListener("input", () => {
    filterText = searchInput.value.trim();
    render();
  });

  function render(): void {
    const filteredUsers = filterUsers(users, filterText);
    userList.innerHTML = "";
    filteredUsers.forEach((user) => {
      const card = createCard(user);
      userList.appendChild(card);
    });
  }

  render();
}

function createCard(user: User): HTMLDivElement {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = `https://robohash.org/${user.id}`;
  img.alt = `Avatar for ${user.name}`;
  card.appendChild(img);

  const name = document.createElement("h2");
  name.textContent = user.name;
  card.appendChild(name);

  const company = document.createElement("p");
  company.textContent = user.company.name;
  card.appendChild(company);

  const position = document.createElement("p");
  position.textContent = user.company.catchPhrase;
  card.appendChild(position);

  const phone = document.createElement("p");
  phone.textContent = `Phone: ${user.phone}`;
  card.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = `Email: ${user.email}`;
  card.appendChild(email);

  const website = document.createElement("p");
  website.innerHTML = `Website: <a href="https://${user.website}">${user.website}</a>`;
  card.appendChild(website);

  return card;
}

function filterUsers(users: User[], filterText: string): User[] {
  if (!filterText) {
    return users;
  }

  const filterLower = filterText.toLowerCase();
  return users.filter((user) => user.name.toLowerCase().includes(filterLower));
}
