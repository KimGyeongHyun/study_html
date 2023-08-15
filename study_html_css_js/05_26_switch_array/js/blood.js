var blood = prompt("혈액형을 입력해주세요");

switch(blood) {
    case "a": blood_info.innerHTML = "a"; break;
    case "b": blood_info.innerHTML = "b"; break;
    case "ab": blood_info.innerHTML = "ab"; break;
    case "o": blood_info.innerHTML = "o"; break;
    default: blood_info.innerHTML = "nothing";
};