# include和require

## include 语句

使用 include 语句包含外部文件时，只有代码执行到 include 语句时才会将外部文件包含进来。  

语法：

```php
include('filename') 或者 include 'filename'
```

其中 filename 为需要包含的文件路径（相对或绝对）

## include_once 语句

include_once 可以确保在脚本执行期间同一文件被包含一次，以避免函数重定义、变量重新赋值等问题。

## require 语句

在 PHP 文件执行之前，PHP 解析器会用被引用文件的全部内容替换 require 语句，然后与 require 语句之外的其他语句组成新的 PHP 文件，最后再按新 PHP 文件执行程序代码。  

require 语句使用方法与 include 类似  

语法：

```php
include('filename') 或者 include 'filename'
```

## include_once 语句

与 include_once 类似


## include 与 require 的区别

1. 当被包含文件不存在或者存在错误时，require 语句会发出一个 Fatal error 错误并终止程序执行，而 include 则会发出一个 Warining 警告但程序会接着执行下去。

2. 对 include 语句来说，在执行文件时每次都要进行读取和评估；对于 require 来说，文件只处理一次（实际上，文件内容替换 require 语句）这就意味着如果可能执行多次的代码，则使用 require 效率比较高。另外一方面，如果每次执行代码时是读取不同的文件，或者有通过一组文件迭代的循环，就使用 include 语句。