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

// 枚举 —— 一组有名字的常量集合 —— 只读属性，定义了不可修改
// 1、数字枚举 —— 反向映射 键值对互为key/value
enum Role{
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log('数字枚举，值会递增：',Role);

// 2、字符串枚举 —— 没有反向映射
enum Message{
  Success = '成功',
  Fail = '失败'
}
console.log('字符串枚举：',Message);

// 异构枚举 —— 数字和字符串的混用 【不推荐】
enum Answer{
  N,
  Y = 'yes'
}
console.log('异构枚举：', Answer);

// 枚举成员
enum Char{
  // const —— 常量 —— 编译阶段就有值了
  a,
  b = Char.a,
  c = 1 + 3,
  // computed —— 计算 —— 保留到执行阶段才得到值 —— 后面的要有赋值
  d = Math.random(),
  e = '123'.length
}
console.log('枚举成员：', Char);

// 常量枚举 —— 编译完了会被移除 —— 不需要对象，只需要对象的值，减少编译阶段的代码
const enum Month{
  Jan,
  Feb,
  Mar,
}
console.log('常量枚举：', [Month.Feb, Month.Jan, Month.Mar]);

enum TypeList{
  'tab1' = 1,
  'tab2' = 2
}
console.log('测试tab：',TypeList,TypeList.tab1);

/** 枚举类型 —— 和数字类型兼容，可互相赋值 —— 【常用来定义常量，方便硬编码】
 * 1、数字枚举
 *    1.1、没有初始值的：enum A { a, b }
 *    1.2、有初始数字值的：enum B { a = 0, b = 1 }
 * 2、字符串枚举：enum C { a = 'a', b = 'b' }
 */

// 接口 —— 约束类、对象、函数……
// 获取list数据 —— 模拟获取list 
interface List{
  id: number,
  name: string
}
interface Result{
  data:List[]
}
function render(result: Result) {
  result.data.forEach(val => {
    console.log(val);
  })
}
let result = {
  data: [
    { id: 1, name: 'a', sex: 1 }, // 传入的数据要有必需的信息，可以多
    { id: 2, name: 'b' }
  ]
}
render(result)
// 直接传数据 —— 不能多传数据，除非用 as 类型断言，绕过类型检查
render({
  data: [
    { id: 1, name: 'a', sex: 1 }, 
    { id: 2, name: 'b' }
  ]
} as Result)
render(<Result>{
  data: [
    { id: 1, name: 'a', sex: 1 }, 
    { id: 2, name: 'b' }
  ]
})
