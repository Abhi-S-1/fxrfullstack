const pages = [
  { name: "alex setia", email: "test@gmail.com" },
  { name: "dave smith", email: "test2@gmail.com" },
  { name: "lisa doe", email: "test3@gmail.com" },
  { name: "jane field", email: "test4@gmail.com" },
  { name: "kyle hung", email: "test5@gmail.com" },
  { name: "shakti shrivasan", email: "test6@gmail.com" },
  { name: "michelle vu", email: "test7@gmail.com" },
  { name: "jason flemmington", email: "test8@gmail.com" },
];

function updatePages(name, email) {
  let found = false;
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].name == name) {
      pages[i].email = email;
      found = true;
      break;
    }
  }
  if (!found) {
    pages.push({ name: name, email: email });
  }
}
module.exports = { pages, updatePages };
