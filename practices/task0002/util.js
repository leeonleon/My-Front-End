//task2.1
/************************************************************************************************/

//判断arr是否为一个数组
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

/************************************************************************************************/

//判断fn是否为一个函数
function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
}

/************************************************************************************************/

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var clone;

    if(src instanceof Date) {
        clone = new Date(src.getTime());
        return clone;
    } else if(src instanceof Array) {
        clone = src.concat();
        return clone;
    } else if(src instanceof Object) {
        clone = {};
        for(var key in src) {
            clone[key] = cloneObject(src[key]);
        }
        return clone;
    } else {
        clone = src;
        return clone;
    }

}

// 测试用例：
/*
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"
*/

/************************************************************************************************/

//学习数组、字符串、数字等相关方法，在util.js中实现以下函数
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var uniqArr = [],
        count = 0;
    for(var key in arr) {
        if(uniqArr.length == 0) {
            uniqArr.push(arr[key]);
        } else {
            for(var key2 in uniqArr) {
                if(arr[key] === uniqArr[key2]) {
                    count++;
                }
            }
            if(count === 0) {
                uniqArr.push(arr[key]);
            }
            count = 0;
        }
    }
    return uniqArr;
}
// 使用示例
/*
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]
*/

/************************************************************************************************/

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var str_ = '',
        strArr = [];
    for(var i=0; i<str.length; i++) {
        strArr.push(str[i]);
    }
    for(var i=0; i<strArr.length; i++) {
        if(strArr[i] === ' ') {
            strArr.slice(i, i+1);
        }
    }
    return strArr;
}

console.log(simpleTrim('   fdsf   dad       '));