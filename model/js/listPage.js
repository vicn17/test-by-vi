//*Tạo cấu trúc các biến phân trang
let thisPage = 1;
let limitProduct = 9;
if (screen.width <= 768) limitProduct = 6;
let listCard = document.querySelectorAll(".card-item");

function loadItem(index) {
  //* Logic phân trang theo giới hạn sản phẩm show ra (limitProduct)
  let beginGetPage = limitProduct * (thisPage - 1);
  let endGetPage = limitProduct * thisPage - 1;

  //* Lọc các item product để kiểm tra theo logic ở trên
  listCard.forEach((item, key) => {
    if (key >= beginGetPage && key <= endGetPage) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage(index);
}
loadItem();

//*Kiểm tra tổng số trang
function listPage(index) {
  let tatolPage = Math.ceil(listCard.length / limitProduct);

  if (index > 1) {
    let prev = document.createElement("a");
    prev.innerText = "<";
    document.querySelector("#listPage").append(prev);
    prev.setAttribute("href", "#first-title-home");
    prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
  }

  for (let index = 1; index <= tatolPage; index++) {
    let newPage = document.createElement("a");
    newPage.innerText = index;
    if (index == thisPage) {
      newPage.classList.add("active");
    }
    document.querySelector("#listPage").appendChild(newPage);
    newPage.setAttribute("onclick", "changePage(" + index + ")");
    newPage.setAttribute("href", "#first-title-home");
  }

  if (index != tatolPage) {
    let next = document.createElement("a");
    next.innerText = ">";
    document.querySelector("#listPage").append(next);
    next.setAttribute("href", "#first-title-home");
    next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
  }
}

//* Đổi trang
function changePage(index) {
  thisPage = index;
  document.querySelector("#listPage").innerHTML = "";
  loadItem(index);
}
