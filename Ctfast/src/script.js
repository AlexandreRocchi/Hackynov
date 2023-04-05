function getCursorPosition(event) {
  if (event.clientX < document.documentElement.scrollWidth / 2 && event.clientY < document.documentElement.scrollHeight) {
    document.getElementById("notaflag").style.left = 80 + "%";
  } else if (event.clientX > document.documentElement.scrollWidth / 2) {
    document.getElementById("notaflag").style.left = 20 + "%";
  }
}

var _0x6f80 = ["\x42\x69\x65\x6E\x20\x6A\x6F\x75\xE9\x20\x21\x20\x44\xE9\x63\x6F\x64\x65\x20\x6C\x65\x20\x66\x6C\x61\x67\x20\x65\x74\x20\x69\x6C\x20\x65\x73\x74\x20\xE0\x20\x74\x6F\x69\x20\x21\x3A\x20", "\x74\x68\x65\x6E", "\x74\x65\x78\x74", "\x73\x74\x6F\x63\x6B\x32\x2E\x78\x79\x7A"];
function flagClick() {
  fetch(_0x6f80[3])[_0x6f80[1]]((_0x995bx3) => {
    return _0x995bx3[_0x6f80[2]]()
  }
  )[_0x6f80[1]]((_0x995bx2) => {
    alert(_0x6f80[0] + _0x995bx2);;
  }
  )
}


document.addEventListener("keydown", function (event) {
  if (event.key == "F12") {
    document.getElementById("notaflag").style.display = "none";
  }
}, true);

document.addEventListener("keydown", function (event) {
  if (event.key == "Tab") {
    document.getElementById("notaflag").style.display = "none";
  }
}, true);


document.addEventListener("contextmenu", function () {
  document.getElementById("notaflag").style.display = "none";
});

window.onload = function () {
  document.getElementById("notaflag").style.top = Math.floor(Math.random() * 90) + 10 + "%";
}
