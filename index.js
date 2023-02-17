var closeBtn = document.getElementById("close");
//console.log(closeBtn);
closeBtn.addEventListener("click", () => {
  // console.log(closeBtn.parentElement.parentElement.parentElement);

  const close = closeBtn.parentElement.parentElement.parentElement;
  console.log(closeBtn.parentElement.parentElement.parentElement);
  //close.style.display = "none";
  console.log("closed");
});
