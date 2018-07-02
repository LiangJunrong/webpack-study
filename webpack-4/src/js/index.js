import _ from 'lodash';
import '../css/index.css';
import Gif1 from '../images/1.png';
import Image1 from '../images/3.jpg';
import Data from '../data/data.xml';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');

    // 调用Lodash的_全局变量
    element.innerHTML = _.join(['Hello', 'webpack', '，我叫jsliang.<br>'], ' ');
    element.classList.add('hello');

    // 将图片添加到div中
    var myGif = new Image();
    var myImage = new Image();
    myGif.src = Gif1;
    myImage.src = Image1;
    element.appendChild(myGif);
    element.appendChild(myImage);

    // 输出数据
    console.log(Data);

    // 新增print.js
    var br = document.createElement('br');
    element.appendChild(br);
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());