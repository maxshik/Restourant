document.getElementById("data").min =
  String(new Date().getFullYear()) +
  "-0" +
  String(new Date().getMonth() + 1) +
  "-" +
  String(new Date().getDate());
document.getElementById("data").max =
  String(new Date().getFullYear()) +
  "-0" +
  String(new Date().getMonth() + 1) +
  "-" +
  String(new Date().getDate() + 2);
let tables_today = [
  [9, 11, 12, 14, 15, 19, 20, 21], // 1 столик
  [8, 11, 12, 14, 15, 18, 20], // 2 столик
  [11, 12, 13, 14, 15, 20, 21], // 3 столик
  [10, 11, 15, 16, 18, 20, 21], // 4 столик
  [9, 13, 14, 15, 16, 18, 19, 21], // 5 столик
  [9, 10, 11, 14, 15, 16, 18, 19, 20], // 6 столик
  [10, 11, 12, 13, 14, 15, 16, 20, 21], // 7 столик
  [9, 10, 12, 14, 15, 16, 18, 20, 21], // 8 столик
  [11, 12, 14, 15, 16, 17, 20, 21], // 9 столик
  [10, 11, 12, 14, 15, 18, 19, 20, 21], // 10 столик
  [12, 13, 14, 15, 16, 17, 18, 20, 21], // 11 столик
  [9, 10, 12, 14, 15, 16, 18, 19, 20, 21], // 12 столик
  [9, 10, 12, 13, 16, 17, 19, 20, 21], // 13 столик
];
document.addEventListener("click", function (e) {
  if (e.target.className == "lish") {
    document.getElementById("bronir").innerHTML =
      "Бронь столика №" + e.target.getAttribute("id");
    document.getElementById("errore").style.display = "none";
    document.getElementsByClassName("login-box")[0].style.display = "block";
    document.querySelector(".subm").onclick = function () {
      let a = false;
      for (
        let i = 0;
        i < tables_today[parseInt(e.target.getAttribute("id")) - 1].length;
        i++
      ) {
        if (
          tables_today[parseInt(e.target.getAttribute("id")) - 1][i] ==
          parseInt(document.querySelector("#vrem").value)
        ) {
          a = true;
        }
      }
      if (a) {
        document.getElementById("errore").style.display = "block";
      } else {
        alert("Поздравляем, столик забронирован");
        document.getElementById("imya").value = "";
        document.getElementsByClassName("login-box")[0].style.display = "none";
        tables_today[parseInt(e.target.getAttribute("id")) - 1].push(
          parseInt(document.querySelector("#vrem").value)
        );
      }
    };
  }
});
