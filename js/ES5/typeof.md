## typeof 

### typeof

```
 简单数据类型：除了null其余都能判断出来
    1.consolog( 
      typeof 12   //Number
      typeof'12' //String
      typeof undefined    
      typeof null  object
      typeof boolean布尔值(不灵)
      typeof Symbol  //Symbol
    
    )
    
    复合数据类型：除了funtin其余都判断为object
    
      2.consolog( 
      typeof function   //function
      typeof {} //Object
      typeof [] //Object   
      
    )

```

### instanceof
```
   1.简单数据类型:除了null其余都失效
   
   缺点：类型申明只要不是构造函数(new)声明方式,instanceof将失效
   优点：复合类型能判断

    let obj = new Object();
    let arr = new Array();
    let date = new Date();
    let regexp = new RegExp();
    console.log(
        obj instanceof Object, //truan 说明左实例和右构造函数同一条原型链上
        arr instanceof Array, //truan
        date instanceof Date, //truan
        regexp instanceof RegExp //truan
    );

```
