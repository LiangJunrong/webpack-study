import _ from 'lodash';
import '../css/index.css';
import Gif1 from '../images/1.png';
import Image1 from '../images/3.jpg';
import Data from '../data/data.xml';

function component() {
    var element = document.createElement('div');

    // 调用Lodash的_全局变量
    element.innerHTML = _.join(['Hello', 'webpack', '，我叫梁峻荣。'], ' ');
    element.classList.add('hello');

    // 将图片添加到div中
    var myGif = new Image();
    var myImage = new Image();
    myGif.src = Gif1;
    myImage.src = Image1;

    element.appendChild(myGif);
    element.appendChild(myImage);

    console.log(Data);

    return element;
}

document.body.appendChild(component());