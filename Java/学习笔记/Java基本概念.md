# Java 基本概念

## Java 的三个版本

- Java SE: Standard Edition
- Java EE: Enterprise Edition
- Java ME: Micro Edition

Java SE (标准版)，包含标准的JVM和标准库  
Java EE (企业版)，在Java SE的基础上加入了大量的API和库，以便开发Web应用、数据库、消息服务等程序，Java EE使用的虚拟机和Java SE完全相同  
Java ME (微小版)，针对嵌入式设备，其标准库和虚拟机都与Java SE不同  

## 名词解释

**JVM**  
Java Virtual Machine (虚拟机)，一个虚构出来的计算机，用于将Java编译程序生成的字节码解释成具体平台上的机器指令，任何平台只需装有针对该平台的JVM，Java即可在该平台运行，这就是Java能做到一次编译，多平台运行的原因  

**Javac**  
Java compiler (编译器)

**JRE**  
Java Runtime Environment (运行环境)，包含JVM和Runtime Class Library (基础类库)  

**JDK**  
Java Development Kit (开发工具包)，包含JRE、Compiler (编译器)、debugger (调试器) 等开发工具  