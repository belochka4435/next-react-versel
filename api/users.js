export async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
  }
  
  export async function fetchUser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await res.json();
  }

