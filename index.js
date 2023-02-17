const codes = [
  {
    awell: "the optmist sees opportunity.in every difficulty",
    author: "winston churchill",
  },
  {
    awell: "secons",
    author: "random",
  },
];
const btn = document.getElementById("submit");
const submit = document.getElementById("author");
const cwell = document.getElementById("awell");
const author = document.getElementById("author");
console.log(submit[3], Math.random());
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * codes.length);
  // console.log(codes.length);
  let generate = codes[random];
  console.log(generate);

  cwell.innerHTML = generate.awell;
  author.innerHTML = generate.author;
});
