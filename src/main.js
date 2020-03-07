let html = document.querySelector("#htmlText");
let style = document.querySelector("#styleText");

let originalString = `你好，我是一个前端小白
接下来我将演示一下我的所学
首先准备一个div
#div1{
    width: 200px;
    height: 200px;
    border: 1px solid black;
}
接下来将把div变成一个太极图
瞧好了

太极谓天地未分之前，元气混而为一
#div1{
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    border: none;
}
太极生两仪
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);  
}
动者为阴，静者为阳
黑色为阴，白色为阳
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
}
两仪生四象
是为太阳、太阴、少阳、少阴
#div1::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;

let showString = "";
let styleString = "";
let tempString = "";

let writeIntoStyle = false;

let n = 0;
let step = () => {
    html.innerHTML = showString;
    style.innerHTML = styleString;
    setTimeout(() => {
        // 删去无用字符
        if (originalString[n] === "\n") {
            showString += "<br>";
        } else if (originalString[n] === " ") {
            showString += "&nbsp;";
        } else {
            showString += originalString[n];
        }

        // 判断何时输入到style中
        if (originalString[n] === "#") {
            writeIntoStyle = true;
        } else if (originalString[n] === "}") {
            writeIntoStyle = false
            tempString += "}\n"
            styleString += tempString;
            console.log(tempString)
        }
        if (writeIntoStyle === true) {
            tempString += originalString[n];
        }

        // 没病滚一下
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        // 判断到没到头
        if (n < originalString.length) {
            n += 1;
            step();
        }
    }, 50)

}

step();