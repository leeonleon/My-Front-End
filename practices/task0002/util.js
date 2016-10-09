//task2.1
//判断arr是否为一个数组
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

//判断fn是否为一个函数
function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    
}