let users = [
    {
        "firstName" : "alex",
        "lastName" : "guo",
        "age" : 18
    },
    {
        "firstName" : "fff",
        "lastName" : "LLL",
        "age" : 20
    },
    {
        "firstName" : "www",
        "lastName" : "zzz",
        "age" : 16
    },
    {
        "firstName" : "bbb",
        "lastName" : "ccc",
        "age" : 24
    }
];

// array.some() - 检查数组中是否有元素满足条件。某一元素为true，则为true，否则返回false
// 用于检测数组中是否有满足条件的元素。
// some如果遇到 true 就不在执行了。如果都为 false 返回false。不会改变原数组。
// some 英语翻译为一些，所以some方法 只要其中一个为true 就会返回true的。some:一真即真
let result1 = users.some(item => item.age > 20);
console.info(result1);
// array.every() - 检查数组中是否所有元素都满足条件。某一个为false，则返回false，否则返回true
// 用于检测数组中所有元素是否都满足该条件。
// every如果遇到 false 就不在执行了。如果都为 true 返回true。不会改变原数组。
// every 英语翻译为所有，所以every方法 必须所有都返回true才会返回true，哪怕有一个false，就会返回false。every:一假即假
let result2 = users.every(item => item.age > 20);
console.info(result2);
// array.map() - 对数组中的每一个元素进行操作。返回每一个元素执行后的结果
// 用于处理数组中的数据。产生新数组，不会改变原数组。foreach这是对原有数组进行操作，没有返回值。
// map()方法创建了一个新数组，但新数组并不是在遍历完array1后才被赋值的，而是每遍历一次就得到一个值。
// forEach适合于你并不打算改变数据的时候，而只是想用数据做一些事情 – 比如存入数据库或则打印出来。
let result3 = users.map(item => {
    return item.age*2;
});
console.info(result3);
console.info(users);
// map()适用于你要改变数据值的时候。不仅仅在于它更快，而且返回一个新的数组。这样的优点在于你可以使用复合(composition)(map(), filter(), reduce()等组合使用)来玩出更多的花样。
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10]
// 我们首先使用map将每一个元素乘以2，然后紧接着筛选出那些大于5的元素。最终结果赋值给arr2。