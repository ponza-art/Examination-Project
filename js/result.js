import { Cookie } from "./cookies.js";
console.log(JSON.parse(Cookie.getCookie("userData")));
let obj = JSON.parse(Cookie.getCookie("userData"));
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
userName.textContent += ` ${obj[0]["firstName"]} ${obj[0]["lastName"]}`;
userEmail.textContent += ` ${obj[0]["email"]}`;
document.querySelector("caption span").textContent = obj[0].degree;
obj[0].result.forEach((e) => {
  let tbody = document.querySelector("tbody");
  let tr = document.createElement("tr");
  e.forEach((x, i) => {
    let td = document.createElement("td");
    td.textContent = x;
    tr.append(td);
  });
  tbody.append(tr);
});
