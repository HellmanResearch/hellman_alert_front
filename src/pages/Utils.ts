export const getStr = (value: string) :string=> { 
    return value.length > 10
            ? value.slice(0, 6) + "..." + value.slice(-4)
            : value;
}

export function getCookie(name:string) {
  var arr = document.cookie.split(";");
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split("=");
    if (arr2[0] == name) {
      return arr2[1];
    }
  }
  return "";
}

//首字母大写
export function setStrUpLower(str:string ='') { 
    return str.slice(0, 1).toUpperCase()+ str.slice(1).toLowerCase()
}