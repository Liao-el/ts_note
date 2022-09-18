// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'string'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, '3']

// 元组
let tuple: [number, string] = [0, '1']
// 元组越界
tuple.push(2)
console.log('元组越界：',tuple);


// 函数
let addFn = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b
console.log('函数：', compute(1, 2));

// 对象
// let obj: object = { x: 1, y: 2 }
let obj: { x: number, y: string } = { x: 1, y: '2' }
obj.x = 2
console.log('对象：', obj);

// symbol
let sym1: symbol = Symbol()
let sym2 = Symbol()
console.log('symbol 值唯一：', sym1 == sym2);

// undefine 、 null —— 为其他值的子类
let un: undefined = undefined // 不能赋值
let nu: null = null
// 将undefined、null 赋值给其他值，需要设置 "strictNullChecks": false, 或者使用联合类型

// void —— 无返回值 —— 可以让任何类型返回 undefined
let noReturn = () => { }

// any —— 不指定类型，和js一样了 —— 可以任意赋值
let anyP

// never —— 永远不会有返回值
let err = () => { // 抛出异常
  throw new Error('error')
}
let endless = () => { // 死循环
  while (true) { }
}

// 枚举 —— 一组有名字的常量集合
// 1、数字枚举
enum Role{
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log('数字枚举，值会递增：',Role);


// 2、字符串枚举
enum Message{
  Success = '成功',
  Fail = '失败'
}

