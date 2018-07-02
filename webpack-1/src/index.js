import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    // 调用Lodash的_全局变量
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());