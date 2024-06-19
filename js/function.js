function printTime() {
    console.log('test');
    var clock = document.getElementById("clock");
    var now = new Date(); // 현재시간
    var nowTime = now.getFullYear() + "년" + (now.getMonth() + 1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";
    clock.innerHTML = nowTime; // 현재시간을 출력
    setTimeout("printTime()", 1000);// setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000
}
window.onload = function () {// 페이지가 로딩되면 실행
    printTime();
}
