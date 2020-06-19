# foreach

foreach 能遍历数组和对象

## 语法格式

```php
// 格式一
foreach (array_expression as $value) {
  statement
}

// 格式二
foreach (array_expression as $key => $value) {
  statement
}
```

第一种格式遍历数组时，每次循环将数组的值赋给 $value; 第二种遍历不仅将数组值赋给 $value, 还将健名赋给 $key。

## php7 与 php5 的区别

在 PHP 5 版本中，当 foreach 开始循环执行时，每次数组内部指针都会自动向后移动一个单元，php7 中则会拷贝该数组，再执行循环，与原数组互不影响  

例如：
```php
$arr = [0, 1, 2];
foreach ($arr as $val) {
  var_dump(current($arr));
}

// php5: int(0) int(1) int(2)
// php7: int(0) int(0) int(0)
```

```php
$arr = [0, 1, 2];
foreach ($arr as $val) {
  var_dump($val);
  unset($array[1]);
}

// php5: int(0) int(2)
// php7: int(0) int(1) int(2)
```