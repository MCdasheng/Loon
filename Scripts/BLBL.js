/*
自用备份 BiliBili 🔐4K
#!url = https://raw.githubusercontent.com/MCdasheng/Module/main/Scripts/BLBL.js
# From https://raw.githubusercontent.com/WeiRen0/Scripts/main/blbl.js
-----------------------------------------------------------------------------------------------------------------------------------------------------
QX:
[rewrite_local]
#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/MCdasheng/Module/main/Scripts/BLBL.js
[Mitm]
hostname = *.biliapi.*, *.bilibili.*
-----------------------------------------------------------------------------------------------------------------------------------------------------
*/

var encode_version = "jsjiami.com.v5",
  lsonn = "__0xf048c",
  __0xf048c = [
    "c8KYDsOww47Cjzo=",
    "wrFEwpBFw7Z4",
    "RsOQwowdEcOHwqgyHnNgSsOdbsKbaXxfw57CjD7DnlTCqsKFacKTw7F0IsO0PcKhwpzCuMOSw4dWFFDChic2wpwaBcOHwp3DiMKrZEUfwp7CicKsEsKmw6nDp8OLR2VTwqDDhy88RigBfsKUwplALSopcsKcw7MEXVzCoBtDAFjCmQAzDMOSfX8aw45WaivCsydXw5cjI8Ktwp0GLDQ7w7TDu8ONTMOhw6zDpSNRVTUcw6/DqcONbmzDscKYbMOZwphQRMOvKMK5dsKAw5TCpsOswo8Lwplqw6bDhMOAN8OYw7HCo8OKwp4IS8ONw7VuVwbCnsOWwphuw53Cuyo6wprDnwlbbcOdw79Kwo5QwrFmw7jDrcK6JMKswoHDtiQrw5/Ct8KRw5zCuMKhwr7DjX5gGHLDksO4YgUkYsOOw5wOc8K/w5dxwqNAKcOpw4HCpsKQbkd3w4nDgsKkNcO8dcO6w65LasK9w4JSXkXDpcOGKULCoWHDrid5woMBJsKIO8K4wpcPOmfDk8KQw74uwr59w6cHDMODw6x5w5MCw4rDssK9ccOpwqhdw7N5w73Di1jDqMKgw7kWwrNSHgsMwrfCphLCuxAIO8KGN2wNaMOWw6Y/w51mwrvCpg==",
    "dMOkXi7DjsKoQ2vDhsOLw4zCrAZXEjzDn8KSwo8UaTnDvUJuI8O6cBXClMOrw7ooEsO2R8OoD3bDsQNxw51Ow7ELR1/Cp17Di8OCJcOLw5w3QMKpX8OiIX/Cp8OZQi8Rw7zCpFvDpHzDhcKZeMKbOsKgw6xhwrXCg8Kkw4zCgMOrw4NnwphpCsKkGiXDmgVqMcKVw4/DrAJqw6YNw6TDgzVXPwM/Ez4fXF8FCsO2woTDrMO7wqw1w7YQwoNEJMKmw5jDqCPDkcKeDcKKwr/Cm8KSwqTDi0vCmMOAwpbDh27Cpj3DhAYyWcK+a2pZCcKgCTnDrQBswozDgsOtd8K1w57DuWV7w4goZsOLCsOeWjR/fsOFWGfChMO9wrHCpTI5WMOefMKPJcO2w6TDgAlfbUfDoklfeQDDu8Kiw7gbTxPDr8KiwpcGwqbDrznDvU7ClcK/wqR5L8O/wpUFwpYqwpAdalk=",
    "LgzDtsOpwoDDrsOsw7J5GsKaw6zDnUzCv8Kzw4PDpMOyw7kuwqbDqMKLbcK8w555YMK1w7t2PMOCwp3DnMKBdsKhwovDiRIdw6E=",
    "wrxMwpjDmMK9QV9Yw7Uw",
    "WB5ycRQ2esKRwr7CvsKPwovCo8KLw4rCji/DsznCmmDDjUBzamAmUMKmwqTCn3LCm3vCgks6wpRuwobCvS56KsOzX2sORyDDnEDCnMOGw6XDqRfDjcKaKnNdUjBMEAddQxTDumLDq8K8csKbOUtgBkwbw4zCpA==",
    "VcOQbRbCnw==",
    "w7lMS3fDjA1/elbDjgICX8Kew77DmMKkwplhw7c6wqPChcKpecOjXW0gLsOaDsOywr3CjlA=",
    "Sxd6wo/DgsO9w7rCl8KRPUXChcONwrVOw4A8",
    "PTPDhznDvsOIw4ZNNMOtWg9uUwUbw4oOwqPDoMKC",
    "TxxEKMO5wpVzw6IdGMOBflrCnRNewp/DvA==",
    "5L6/5Lq35o6v6Yan5oGTe+erp+S8ouWQv+WJpeiDieW3geWlluaXp8Kd6KyZ6IOE57Ga5L256IOH",
    "ewrClDZHFhDClsOWwqvCklXCik8=",
    "54uD5p2M5YyT77yzw6LDueS8puWsuuaepeW/ruepju+8tui8muivvOaWvOaMj+aJpeS5s+eZqOW3rOS9uA==",
    "5YmO6Zqo54u35pyC5Y21776Ha2DkvKLlroHmnrnlvLvnqrk=",
    "wq9XwpDDj8OD",
    "BR0+XMKvHMKxwpA8",
    "w6QswolEaw==",
    "EU7DlznDng==",
  ];
(function (_0x305301, _0x2e7ce7) {
  var _0x582427 = function (_0x3ddc97) {
    while (--_0x3ddc97) {
      _0x305301["push"](_0x305301["shift"]());
    }
  };
  _0x582427(++_0x2e7ce7);
})(__0xf048c, 0x64);
var _0x2501 = function (_0x461422, _0x508937) {
  _0x461422 = _0x461422 - 0x0;
  var _0x570ada = __0xf048c[_0x461422];
  if (_0x2501["initialized"] === undefined) {
    (function () {
      var _0x2dd2e2 =
        typeof window !== "undefined"
          ? window
          : typeof process === "object" &&
            typeof require === "function" &&
            typeof global === "object"
          ? global
          : this;
      var _0x1eb054 =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0x2dd2e2["atob"] ||
        (_0x2dd2e2["atob"] = function (_0x595d74) {
          var _0x5c8a0d = String(_0x595d74)["replace"](/=+$/, "");
          for (
            var _0x446348 = 0x0,
              _0x49155a,
              _0x2b6251,
              _0x3e20a7 = 0x0,
              _0x53e0e1 = "";
            (_0x2b6251 = _0x5c8a0d["charAt"](_0x3e20a7++));
            ~_0x2b6251 &&
            ((_0x49155a =
              _0x446348 % 0x4 ? _0x49155a * 0x40 + _0x2b6251 : _0x2b6251),
            _0x446348++ % 0x4)
              ? (_0x53e0e1 += String["fromCharCode"](
                  0xff & (_0x49155a >> ((-0x2 * _0x446348) & 0x6))
                ))
              : 0x0
          ) {
            _0x2b6251 = _0x1eb054["indexOf"](_0x2b6251);
          }
          return _0x53e0e1;
        });
    })();
    var _0x461706 = function (_0x1aa3b0, _0x5724e6) {
      var _0x3cf38c = [],
        _0x41e7e8 = 0x0,
        _0x1b39b5,
        _0x149632 = "",
        _0xc3a399 = "";
      _0x1aa3b0 = atob(_0x1aa3b0);
      for (
        var _0x2daf68 = 0x0, _0x157cec = _0x1aa3b0["length"];
        _0x2daf68 < _0x157cec;
        _0x2daf68++
      ) {
        _0xc3a399 +=
          "%" +
          ("00" + _0x1aa3b0["charCodeAt"](_0x2daf68)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      _0x1aa3b0 = decodeURIComponent(_0xc3a399);
      for (var _0x507fd9 = 0x0; _0x507fd9 < 0x100; _0x507fd9++) {
        _0x3cf38c[_0x507fd9] = _0x507fd9;
      }
      for (_0x507fd9 = 0x0; _0x507fd9 < 0x100; _0x507fd9++) {
        _0x41e7e8 =
          (_0x41e7e8 +
            _0x3cf38c[_0x507fd9] +
            _0x5724e6["charCodeAt"](_0x507fd9 % _0x5724e6["length"])) %
          0x100;
        _0x1b39b5 = _0x3cf38c[_0x507fd9];
        _0x3cf38c[_0x507fd9] = _0x3cf38c[_0x41e7e8];
        _0x3cf38c[_0x41e7e8] = _0x1b39b5;
      }
      _0x507fd9 = 0x0;
      _0x41e7e8 = 0x0;
      for (var _0x615c7f = 0x0; _0x615c7f < _0x1aa3b0["length"]; _0x615c7f++) {
        _0x507fd9 = (_0x507fd9 + 0x1) % 0x100;
        _0x41e7e8 = (_0x41e7e8 + _0x3cf38c[_0x507fd9]) % 0x100;
        _0x1b39b5 = _0x3cf38c[_0x507fd9];
        _0x3cf38c[_0x507fd9] = _0x3cf38c[_0x41e7e8];
        _0x3cf38c[_0x41e7e8] = _0x1b39b5;
        _0x149632 += String["fromCharCode"](
          _0x1aa3b0["charCodeAt"](_0x615c7f) ^
            _0x3cf38c[(_0x3cf38c[_0x507fd9] + _0x3cf38c[_0x41e7e8]) % 0x100]
        );
      }
      return _0x149632;
    };
    _0x2501["rc4"] = _0x461706;
    _0x2501["data"] = {};
    _0x2501["initialized"] = !![];
  }
  var _0x3d6252 = _0x2501["data"][_0x461422];
  if (_0x3d6252 === undefined) {
    if (_0x2501["once"] === undefined) {
      _0x2501["once"] = !![];
    }
    _0x570ada = _0x2501["rc4"](_0x570ada, _0x508937);
    _0x2501["data"][_0x461422] = _0x570ada;
  } else {
    _0x570ada = _0x3d6252;
  }
  return _0x570ada;
};
var modifiedHeaders = $request[_0x2501("0x0", "CWsw")];
modifiedHeaders[_0x2501("0x1", "qQU)")] = _0x2501("0x2", "$svB");
modifiedHeaders["x-bili-device-bin"] = _0x2501("0x3", "#jku");
modifiedHeaders["Authorization"] = _0x2501("0x4", "zQP%");
modifiedHeaders[_0x2501("0x5", "*JUo")] = _0x2501("0x6", "wtQ$");
modifiedHeaders[_0x2501("0x7", "#jku")] = _0x2501("0x8", "HS0V");
modifiedHeaders["x-bili-metadata-bin"] =
  "CiBjYTk4OGZkODE3YzYxZjgzMWZlZDE0NjE4ZjkxYjdiMRIGaXBob25lGgVwaG9uZSDku7AhKgVhcHBsZTIkWUE0Qjc0QUIxNDYxODFCNjQ4RDU5NDAwMDNCNjVGQ0NBQUVBOgNpb3M=";
modifiedHeaders[_0x2501("0x9", "Tk*&")] = "";
modifiedHeaders["x-bili-network-bin"] = "";
modifiedHeaders[_0x2501("0xa", "q@w9")] = "";
modifiedHeaders["x-bili-trace-id"] = "";
modifiedHeaders["x-bili-exps-bin"] = "";
modifiedHeaders[_0x2501("0xb", "HSUY")] = "";
$notify(_0x2501("0xc", "HS0V"));
$done({ headers: modifiedHeaders });
(function (_0x74ccdc, _0x180654, _0x56c538) {
  var _0xe1a381 = {
    FhmeS: "ert",
    nipwM: function _0x193160(_0x3c36d3, _0x2bc39c) {
      return _0x3c36d3 === _0x2bc39c;
    },
    cuQWE: _0x2501("0xd", "uKnH"),
    pToHR: function _0x395d9f(_0x9bc312, _0x455cf7) {
      return _0x9bc312 + _0x455cf7;
    },
    wlLRo: _0x2501("0xe", "0(Jl"),
    TPriL: _0x2501("0xf", "nDWK"),
  };
  _0x56c538 = "al";
  try {
    _0x56c538 += _0xe1a381[_0x2501("0x10", "*JUo")];
    _0x180654 = encode_version;
    if (
      !(
        typeof _0x180654 !== _0x2501("0x11", "DRNN") &&
        _0xe1a381[_0x2501("0x12", "YXuR")](_0x180654, _0xe1a381["cuQWE"])
      )
    ) {
      _0x74ccdc[_0x56c538](_0xe1a381["pToHR"]("删除", _0xe1a381["wlLRo"]));
    }
  } catch (_0x3484ff) {
    _0x74ccdc[_0x56c538](_0xe1a381[_0x2501("0x13", "q@w9")]);
  }
})(window);
encode_version = "jsjiami.com.v5";
