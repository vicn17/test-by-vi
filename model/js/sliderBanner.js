document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("lists-banner").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("lists-banner").prepend(lists[lists.length - 1]);
};
setInterval(() => {
  let lists = document.querySelectorAll(".item");
  document.getElementById("lists-banner").appendChild(lists[0]);
}, 5000);
