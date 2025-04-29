if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_uduk());
}
function Keyboard_uduk()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_uduk";
  this.KN="Official Uduk Keyboard";
  this.KMINVER="15.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={
    "default": ["`","1","2","3","4","5","6","7","8","9","0","-","","","","","q","w","e","r","t","y","u","i","o","p","[","]","\\","","","","a","s","d","f","g","h","j","k","l",";","'","","","","","","\\","z","x","c","v","b","n","m",",",".","/","","","","","",""],
    "shift": ["~","!","@","#","$","%","^","&","*","(",")","_","+","","","","Q","W","E","R","T","Y","U","I","O","P","{","}","|","","","","A","S","D","F","G","H","J","K","L",":","\"","","","","","","|","Z","X","C","V","B","N","M","<",">","?","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=0 /* 0x0000 */;
  this.KVKL={
  "phone": {
    "font": "Tahoma",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "q"
              },
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "text": "è",
                    "id": "U_00E8"
                  },
                  {
                    "text": "ē",
                    "id": "U_0113"
                  },
                  {
                    "text": "é",
                    "id": "U_00E9"
                  },
                  {
                    "text": "ê",
                    "id": "U_00EA"
                  },
                  {
                    "text": "ě",
                    "id": "U_011B"
                  },
                  {
                    "id": "U_00EB"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t",
                "sk": [
                  {
                    "text": "ṯ",
                    "id": "U_0074_0331"
                  },
                  {
                    "text": "t͟h",
                    "id": "U_0074_035F_0068"
                  },
                  {
                    "text": "ʼt",
                    "id": "U_02BC_0074"
                  },
                  {
                    "text": "ʼth",
                    "id": "U_02BC_0074_0068"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "y"
              },
              {
                "id": "K_U",
                "text": "u",
                "sk": [
                  {
                    "text": "ù",
                    "id": "U_00F9"
                  },
                  {
                    "text": "ū",
                    "id": "U_016B"
                  },
                  {
                    "text": "ú",
                    "id": "U_00FA"
                  },
                  {
                    "text": "û",
                    "id": "U_00FB"
                  },
                  {
                    "text": "ǔ",
                    "id": "U_01D4"
                  },
                  {
                    "id": "U_00FC"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "text": "ì",
                    "id": "U_00EC"
                  },
                  {
                    "text": "ī",
                    "id": "U_012B"
                  },
                  {
                    "text": "í",
                    "id": "U_00ED"
                  },
                  {
                    "text": "î",
                    "id": "U_00EE"
                  },
                  {
                    "text": "ǐ",
                    "id": "U_01D0"
                  },
                  {
                    "id": "U_00EF"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "text": "ò",
                    "id": "U_00F2"
                  },
                  {
                    "text": "ō",
                    "id": "U_014D"
                  },
                  {
                    "text": "ó",
                    "id": "U_00F3"
                  },
                  {
                    "text": "ô",
                    "id": "U_00F4"
                  },
                  {
                    "text": "ǒ",
                    "id": "U_01D2"
                  },
                  {
                    "id": "U_00F6"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p",
                "sk": [
                  {
                    "text": "p̱",
                    "id": "U_0070_0331"
                  },
                  {
                    "text": "ʼp",
                    "id": "U_02BC_0070"
                  }
                ]
              },
              {
                "id": "U_10462",
                "text": "𐑢"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "text": "a",
                "pad": "50",
                "sk": [
                  {
                    "text": "à",
                    "id": "U_00E0"
                  },
                  {
                    "text": "ā",
                    "id": "U_0101"
                  },
                  {
                    "text": "á",
                    "id": "U_00E1"
                  },
                  {
                    "text": "â",
                    "id": "U_00E2"
                  },
                  {
                    "text": "ǎ",
                    "id": "U_01CE"
                  },
                  {
                    "id": "U_00E4"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "s",
                "sk": [
                  {
                    "text": "ʼs",
                    "id": "U_02BC_0073"
                  },
                  {
                    "text": "ʼsh",
                    "id": "U_02BC_0073_0068"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "d",
                "sk": [
                  {
                    "text": "ʼd",
                    "id": "U_02BC_0064"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "f"
              },
              {
                "id": "K_G",
                "text": "g"
              },
              {
                "id": "K_H",
                "text": "h",
                "sk": [
                  {
                    "text": "ẖ",
                    "id": "U_0068_0331"
                  }
                ]
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k",
                "sk": [
                  {
                    "text": "ḵ",
                    "id": "U_006B_0331"
                  },
                  {
                    "text": "ʼk",
                    "id": "U_02BC_006B"
                  }
                ]
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "id": "U_014B",
                "text": "ŋ",
                "sk": [
                  {
                    "text": "ŋ̀",
                    "id": "U_014B_0300"
                  },
                  {
                    "text": "ŋ̄",
                    "id": "U_014B_0304"
                  },
                  {
                    "text": "ŋ́",
                    "id": "U_014B_0301"
                  },
                  {
                    "text": "ŋ̂",
                    "id": "U_014B_0302"
                  },
                  {
                    "text": "ŋ̌",
                    "id": "U_014B_030C"
                  }
                ]
              },
              {
                "id": "U_02BC",
                "text": "ʼ"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "110",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "K_Z",
                "text": "z",
                "sk": [
                  {
                    "text": "zh",
                    "id": "U_007A_0068"
                  }
                ]
              },
              {
                "id": "K_X",
                "text": "x"
              },
              {
                "id": "K_C",
                "text": "c",
                "sk": [
                  {
                    "text": "c̱",
                    "id": "U_0063_0331"
                  },
                  {
                    "text": "ʼc",
                    "id": "U_02BC_0063"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_B",
                "text": "b",
                "sk": [
                  {
                    "text": "ʼb",
                    "id": "U_02BC_0062"
                  }
                ]
              },
              {
                "id": "K_N",
                "text": "n",
                "sk": [
                  {
                    "text": "ǹ",
                    "id": "U_01F9"
                  },
                  {
                    "text": "n̄",
                    "id": "U_006E_0304"
                  },
                  {
                    "text": "ń",
                    "id": "U_0144"
                  },
                  {
                    "text": "n̂",
                    "id": "U_006E_0302"
                  },
                  {
                    "text": "ň",
                    "id": "U_0148"
                  },
                  {
                    "id": "U_00F1"
                  }
                ]
              },
              {
                "id": "K_M",
                "text": "m",
                "sk": [
                  {
                    "text": "m̀",
                    "id": "U_006D_0300"
                  },
                  {
                    "text": "m̄",
                    "id": "U_006D_0304"
                  },
                  {
                    "text": "ḿ",
                    "id": "U_1E3F"
                  },
                  {
                    "text": "m̂",
                    "id": "U_006D_0302"
                  },
                  {
                    "text": "m̌",
                    "id": "U_006D_030C"
                  }
                ]
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "text": ",",
                    "id": "U_002C"
                  },
                  {
                    "text": "!",
                    "id": "U_0021"
                  },
                  {
                    "text": "?",
                    "id": "U_003F"
                  },
                  {
                    "text": "'",
                    "id": "U_0027"
                  },
                  {
                    "text": "\"",
                    "id": "U_0022"
                  },
                  {
                    "text": "\\",
                    "id": "U_005C"
                  },
                  {
                    "text": ":",
                    "id": "U_003A"
                  },
                  {
                    "text": ";",
                    "id": "U_003B"
                  },
                  {
                    "text": "/",
                    "id": "U_002F"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "140",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "630"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "Q"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "text": "È",
                    "id": "U_00C8"
                  },
                  {
                    "text": "Ē",
                    "id": "U_0112"
                  },
                  {
                    "text": "É",
                    "id": "U_00C9"
                  },
                  {
                    "text": "Ê",
                    "id": "U_00CA"
                  },
                  {
                    "text": "Ě",
                    "id": "U_011A"
                  },
                  {
                    "text": "Ë",
                    "id": "U_00CB"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T",
                "sk": [
                  {
                    "text": "Ṯ",
                    "id": "U_0054_0331"
                  },
                  {
                    "text": "T͟h",
                    "id": "U_0054_035F_0068"
                  },
                  {
                    "text": "ʼT",
                    "id": "U_02BC_0054"
                  },
                  {
                    "text": "ʼTh",
                    "id": "U_02BC_0054_0068"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U",
                "sk": [
                  {
                    "text": "Ù",
                    "id": "U_00D9"
                  },
                  {
                    "text": "Ū",
                    "id": "U_016A"
                  },
                  {
                    "text": "Ú",
                    "id": "U_00DA"
                  },
                  {
                    "text": "Û",
                    "id": "U_00DB"
                  },
                  {
                    "text": "Ǔ",
                    "id": "U_01D3"
                  },
                  {
                    "text": "Ü",
                    "id": "U_00DC"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "text": "Ì",
                    "id": "U_00CC"
                  },
                  {
                    "text": "Ī",
                    "id": "U_012A"
                  },
                  {
                    "text": "Í",
                    "id": "U_00CD"
                  },
                  {
                    "text": "Î",
                    "id": "U_00CE"
                  },
                  {
                    "text": "Ǐ",
                    "id": "U_01CF"
                  },
                  {
                    "text": "Ï",
                    "id": "U_00CF"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "text": "Ò",
                    "id": "U_00D2"
                  },
                  {
                    "text": "Ō",
                    "id": "U_014C"
                  },
                  {
                    "text": "Ó",
                    "id": "U_00D3"
                  },
                  {
                    "text": "Ô",
                    "id": "U_00D4"
                  },
                  {
                    "text": "Ǒ",
                    "id": "U_00D2"
                  },
                  {
                    "text": "Ö",
                    "id": "U_00D6"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "P",
                "sk": [
                  {
                    "text": "P̱",
                    "id": "U_0050_0331"
                  },
                  {
                    "text": "ʼP",
                    "id": "U_02BC_0050"
                  }
                ]
              },
              {
                "id": "U_10462",
                "text": "𐑢"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "text": "A",
                "pad": "50",
                "sk": [
                  {
                    "text": "À",
                    "id": "U_00C0"
                  },
                  {
                    "text": "Ā",
                    "id": "U_0100"
                  },
                  {
                    "text": "Á",
                    "id": "U_00C1"
                  },
                  {
                    "text": "Â",
                    "id": "U_00C2"
                  },
                  {
                    "text": "Ǎ",
                    "id": "U_01CD"
                  },
                  {
                    "text": "Ä",
                    "id": "U_00C4"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "S",
                "sk": [
                  {
                    "text": "ʼS",
                    "id": "U_02BC_0053"
                  },
                  {
                    "text": "ʼSh",
                    "id": "U_02BC_0053_0068"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "D",
                "sk": [
                  {
                    "text": "ʼD",
                    "id": "U_02BC_0044"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H",
                "sk": [
                  {
                    "text": "H̱",
                    "id": "U_0048_0331"
                  }
                ]
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K",
                "sk": [
                  {
                    "text": "Ḵ",
                    "id": "U_004B_0331"
                  },
                  {
                    "text": "ʼK",
                    "id": "U_02BC_004B"
                  }
                ]
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "id": "U_014A",
                "text": "Ŋ",
                "sk": [
                  {
                    "text": "Ŋ̀",
                    "id": "U_014A_0300"
                  },
                  {
                    "text": "Ŋ̄",
                    "id": "U_014A_0304"
                  },
                  {
                    "text": "Ŋ́",
                    "id": "U_014A_0301"
                  },
                  {
                    "text": "Ŋ̂",
                    "id": "U_014A_0302"
                  },
                  {
                    "text": "Ŋ̌",
                    "id": "U_014A_030C"
                  }
                ]
              },
              {
                "id": "U_02BC",
                "text": "ʼ"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "120",
                "sp": "2",
                "nextlayer": "default"
              },
              {
                "id": "K_Z",
                "text": "Z",
                "sk": [
                  {
                    "text": "Zh",
                    "id": "U_005A_0068"
                  }
                ]
              },
              {
                "id": "K_X",
                "text": "X"
              },
              {
                "id": "K_C",
                "text": "C",
                "sk": [
                  {
                    "text": "C̱",
                    "id": "U_0043_0331"
                  },
                  {
                    "text": "ʼC",
                    "id": "U_02BC_0043"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B",
                "sk": [
                  {
                    "text": "ʼB",
                    "id": "U_02BC_0042"
                  }
                ]
              },
              {
                "id": "K_N",
                "text": "N",
                "sk": [
                  {
                    "text": "Ǹ",
                    "id": "U_01F8"
                  },
                  {
                    "text": "N̄",
                    "id": "U_004E_0304"
                  },
                  {
                    "text": "Ń",
                    "id": "U_0143"
                  },
                  {
                    "text": "N̂",
                    "id": "U_004E_0302"
                  },
                  {
                    "text": "Ň",
                    "id": "U_0147"
                  },
                  {
                    "text": "Ñ",
                    "id": "U_00D1"
                  }
                ]
              },
              {
                "id": "K_M",
                "text": "M",
                "sk": [
                  {
                    "text": "M̀",
                    "id": "U_004D_0300"
                  },
                  {
                    "text": "M̄",
                    "id": "U_004D_0304"
                  },
                  {
                    "text": "Ḿ",
                    "id": "U_1E3E"
                  },
                  {
                    "text": "M̂",
                    "id": "U_004D_0302"
                  },
                  {
                    "text": "M̌",
                    "id": "U_004D_030C"
                  }
                ]
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "text": ",",
                    "id": "U_002C"
                  },
                  {
                    "text": "!",
                    "id": "U_0021"
                  },
                  {
                    "text": "?",
                    "id": "U_003F"
                  },
                  {
                    "text": "'",
                    "id": "U_0027"
                  },
                  {
                    "text": "\"",
                    "id": "U_0022"
                  },
                  {
                    "text": "\\",
                    "id": "U_005C"
                  },
                  {
                    "text": ":",
                    "id": "U_003A"
                  },
                  {
                    "text": ";",
                    "id": "U_003B"
                  },
                  {
                    "text": "/",
                    "id": "U_002F"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "140",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "630"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_4",
                "layer": "shift",
                "pad": "50",
                "text": "$"
              },
              {
                "id": "K_2",
                "layer": "shift",
                "text": "@"
              },
              {
                "id": "K_3",
                "layer": "shift",
                "text": "#"
              },
              {
                "id": "K_5",
                "layer": "shift",
                "text": "%"
              },
              {
                "id": "K_7",
                "layer": "shift",
                "text": "&"
              },
              {
                "id": "K_HYPHEN",
                "layer": "shift",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "layer": "default",
                "text": "="
              },
              {
                "id": "K_BKSLASH",
                "layer": "shift",
                "text": "|"
              },
              {
                "id": "K_BKSLASH",
                "layer": "default",
                "text": "\\"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_SYMBOLS",
                "text": "§",
                "width": "110",
                "sp": "1",
                "nextlayer": "symbol"
              },
              {
                "id": "K_LBRKT",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "«"
                  },
                  {
                    "id": "U_003C",
                    "text": "<"
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  }
                ],
                "text": "["
              },
              {
                "id": "K_9",
                "layer": "shift",
                "text": "("
              },
              {
                "id": "K_0",
                "layer": "shift",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "»"
                  },
                  {
                    "id": "U_003E",
                    "text": ">"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  }
                ],
                "text": "]"
              },
              {
                "id": "K_EQUAL",
                "layer": "shift",
                "text": "+"
              },
              {
                "id": "K_HYPHEN",
                "layer": "default",
                "text": "-"
              },
              {
                "id": "K_8",
                "layer": "shift",
                "text": "*"
              },
              {
                "id": "K_SLASH",
                "layer": "default",
                "text": "/"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_LOWER",
                "text": "*abc*",
                "width": "140",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "630"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "symbol",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0060",
                "text": "`"
              },
              {
                "id": "U_007E",
                "text": "~"
              },
              {
                "id": "U_005E",
                "text": "^"
              },
              {
                "id": "U_00A8",
                "text": "¨"
              },
              {
                "id": "U_00B4",
                "text": "´"
              },
              {
                "id": "U_00B8",
                "text": "¸"
              },
              {
                "id": "U_00AF",
                "text": "¯"
              },
              {
                "id": "U_00BF",
                "text": "¿"
              },
              {
                "id": "U_00A1",
                "text": "¡"
              },
              {
                "id": "U_00AC",
                "text": "¬"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_00AA",
                "text": "ª",
                "pad": "50"
              },
              {
                "id": "U_00BA",
                "text": "º"
              },
              {
                "id": "U_00B6",
                "text": "¶"
              },
              {
                "id": "U_00A7",
                "text": "§"
              },
              {
                "id": "U_00B1",
                "text": "±"
              },
              {
                "id": "U_00D7",
                "text": "×"
              },
              {
                "id": "U_00F7",
                "text": "÷"
              },
              {
                "id": "U_00A6",
                "text": "¦"
              },
              {
                "id": "U_00B0",
                "text": "°"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "110",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "U_00B5",
                "text": "µ"
              },
              {
                "id": "U_00A9",
                "text": "©"
              },
              {
                "id": "U_00AE",
                "text": "®"
              },
              {
                "id": "U_00A3",
                "text": "£"
              },
              {
                "id": "U_20AC",
                "text": "€"
              },
              {
                "id": "U_00A5",
                "text": "¥"
              },
              {
                "id": "U_2022",
                "text": "•"
              },
              {
                "id": "U_00B7",
                "text": "·"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_LOWER",
                "text": "*abc*",
                "width": "140",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "630"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ],
    "displayUnderlying": false
  }
};
  this.KVER="18.0.235.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    return r;
  };
}
