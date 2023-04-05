
// Vous pouvez résoudre le CTF en utilisant uniquement le code ci-dessus.

let duration = Math.floor(Math.random() * 3);
let multiplication = Math.floor(Math.random() * (5)) + 5
let addition = Math.floor(Math.random() * (5)) + 25;
let random = Math.floor(Math.random() * (5)) + 2;
function startTimer() {
  setInterval(function () {
    duration = duration + random;
    addition = addition + random * 2;
    document.getElementById("time").innerHTML = "Le code c'est " + duration + " * " + multiplication + " + " + addition;
  }, 1000);
}

// Néanmoins, si vous voulez tricher et ne pas gagner de temps, vous pouvez utiliser ce code ci-dessous.


var _0x12416f = _0x4cf3; (function (_0x3a12e8, _0x32c1fb) { var _0x1649e3 = _0x4cf3, _0x56d5d2 = _0x3a12e8(); while (!![]) { try { var _0x21c65b = parseInt(_0x1649e3(0x118)) / 0x1 * (parseInt(_0x1649e3(0x10f)) / 0x2) + -parseInt(_0x1649e3(0x117)) / 0x3 + parseInt(_0x1649e3(0x112)) / 0x4 + parseInt(_0x1649e3(0x10e)) / 0x5 + -parseInt(_0x1649e3(0x111)) / 0x6 + -parseInt(_0x1649e3(0x110)) / 0x7 + -parseInt(_0x1649e3(0x10c)) / 0x8; if (_0x21c65b === _0x32c1fb) break; else _0x56d5d2['push'](_0x56d5d2['shift']()); } catch (_0x17a907) { _0x56d5d2['push'](_0x56d5d2['shift']()); } } }(_0x520a, 0xb734b), window[_0x12416f(0x113)] = startTimer); function Redirect() { var _0xa426f6 = _0x12416f; document[_0xa426f6(0x10d)]('input')['value'] == duration * multiplication + addition ? window[_0xa426f6(0x114)] = _0xa426f6(0x10b) : window[_0xa426f6(0x114)] = _0xa426f6(0x116); } function _0x4cf3(_0x145b4e, _0x4d593b) { var _0x520a19 = _0x520a(); return _0x4cf3 = function (_0x4cf3b8, _0x2ca2fa) { _0x4cf3b8 = _0x4cf3b8 - 0x10b; var _0x1fafbc = _0x520a19[_0x4cf3b8]; return _0x1fafbc; }, _0x4cf3(_0x145b4e, _0x4d593b); } function _0x520a() { var _0x41753c = ['2215894DBKNZJ', '5024425uCWSrf', '2111520RpqkbS', '5347372XoxsTP', 'onload', 'location', 'log', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', '3436962UrXVlq', '1YFlTpa', 'apply', 'main4264.html', '6312568PPIDRH', 'getElementById', '6550205AvKnci']; _0x520a = function () { return _0x41753c; }; return _0x520a(); } (function () { var _0x56ab91 = _0x12416f, _0x2cfed3 = console[_0x56ab91(0x115)]; console['log'] = function (..._0x3b9656) { var _0xcf2ecc = _0x56ab91; _0x3b9656 = ['Tricheur'], _0x2cfed3[_0xcf2ecc(0x119)](console, _0x3b9656); }; }());