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
    var strArr = [],
        strArr_trimFront = [],
        strArr_trimBack = []
        str_trim = '';
    for(var i=0; i<str.length; i++) {
        strArr.push(str[i]);
    }
    for(var i=0; i<strArr.length; i++) {
        if(/\s/.test(strArr[i])) {
           continue;
        } else {
            for(var y=i; y<strArr.length; y++) {
                strArr_trimFront.push(strArr[y]);
            }
            break;
        }
    }
    strArr_trimFront.reverse();
    for(var i=0; i<strArr_trimFront.length; i++) {
        if(/\s/.test(strArr_trimFront[i])) {
            continue;
        } else {
            for(var y=i; y<strArr_trimFront.length; y++) {
                strArr_trimBack.push(strArr_trimFront[y]);
            }
            break;
        }
    }
    strArr_trimBack.reverse();
    for(var i in strArr_trimBack) {
        str_trim += strArr_trimBack[i];
    }
    return str_trim;
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

// 使用示例
/*
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'
*/

/************************************************************************************************/

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i in arr) {
        fn(arr[i], i);
    }
}

// 其中fn函数可以接受两个参数：item和index
/*
// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html
*/

/************************************************************************************************/

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var count = 0;
    for(var i in obj) {
        count++;
    }
    return count;
}
/*
// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3
*/

/************************************************************************************************/

// 判断是否为邮箱地址
function isEmail(emailStr) {
    return /^[a-z0-9]+[\.-]?[a-z0-9]+@[a-z]+\.com$/i.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    return /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(phone);
}

/************************************************************************************************/
//task2.2