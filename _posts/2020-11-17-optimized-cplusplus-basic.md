---
layout: post
title:  "Optimizing C/C++ Basic"
date:   2020-11-17 11:04:17 +0700
author: Minh-Thanh Hoang
categories: tutorial
---

{: class="table-of-content"}
* TOC
{:toc}

Using perf to profiling in linux : (perf)[(http://www.brendangregg.com/perf.html)]

# 1. Variable storage

### 1.1 Static storage

* Version 1 : 7.1 cycles

  ```c++
  int main(){
    int n = 10000000;
    for (int i = 0; i < n; i++){
    }
    return 0;
  }
  ```

* Version 2 : 6.1 B cycles

  ```c++
  int main(){
    static int nStatic = 10000000;
    for (int i = 0; i < n; i++){
    }
    return 0;
  }
  ```

> `static` : replace calculation result by storing the value in static storage, where possible

### 1.2 Register storage

* Version 1 : 2.2 B cycles

  ```c++
  int main(){
    static int nStatic = 3;
    long res = 0;
    for (int i = 0; i < 10000000; i++){
      res += i * nStatic;
    }
    cout << res << endl;
    return 0;
  }
  ```
* Version 2 : 1 B cycles

  ```c++
  int main(){
    register int nRegister = 3;
    long res = 0;
    for (int i = 0; i < 10000000; i++){
      res += i * nRegister;
    }
    cout << res << endl;
    return 0;
  }
  ```

> `register` : variables stored in register are accessed in a flash, and number of registers is strictly limited

# 2. Operators

### 2.1 Initializations

* Version 1 : 17.7 B cycles

  ```c++
  int main(){
    for (int i = 0; i < 10000000; i++){
      string s;
      s = "Hello World";
    }
    return 0;
  }
  ```

* Version 2 : 17 B cycles

  ```c++
  int main(){
    for (int i = 0; i < 10000000; i++){
      string s("Hello World");
    }
    return 0;
  }
  ```

> Using initializations instead of assignments. In particular, in contructors, use initialization list

### 2.2 Contructor

```c++
demoClass(const T& t){
  _data = t;
}
```

-> 

```c++
demoClass(const T& t) : _data(t){}
```

### 2.3 Assignment composite

* Version 1 : 8.8 B cycles

  ```c++
  int main(){
    string hello = "Hello";
    string world = "World";

    for (int i = 0; i < 10000000; i++){
      string result = hello + " " + hello + "," + world;
    }
    return 0;
  }
  ```

* Version 2 : 4.7 B cycles

  ```c++
  int main(){
    string hello = "Hello";
    string world = "World";

    for (int i = 0; i < 10000000; i++){
      string result = hello;
      result += " ";
      result += hello;
      result += ",";
      result += world;
    }
    return 0;
  }
  ```

> Use the assignment composite operators instead of simple operators combined with assignment operators

### 2.4 Operator rule

> * Using prefix operator (`++obj`) instead of the postfix operator (`obj++`) in object; postfix operator will create a spectre copy

> * Use shift operations `>>` and `<<` instead of integer multiplication and division if possible

> * Should use the same type of variables for processing, type conversion must be avoid

> * Replace integer division with multiplication when there are multiple divisions in an expression. Example : `x = a / b / c;`  => `x = a/(b * c);`

# 3. Booleans

### 3.1 and

* Version 1 : 1.5 B cycles

```c++
int main(){
  long res = 0;
  for (int i = 0; i < 10000000; i++){
    bool a = true;
    if (a && i%2 == 0){
      res++;
    }
  }

  cout << res << endl;
}
```

* Version 2 : 1.2 B cycles

```c++
int main(){
  long res = 0;
  for (int i = 0; i < 10000000; i++){
    bool a = true;
    if (i%2 == 0 && a){
      res++;
    }
  }

  cout << res << endl;
}
```

> * If one operator `and` is more predictable than the other, then put it first

> * If one operator `and` is faster to calculate than the other then put it first

> * The one operator `and` of the Boolean operators `&&` is evaluated in the following way

> * If the first operand of `&&` is false, then the seconds operand is not evaluated at all because the result is known to be false regardless of the value of the second operand.

# 4. Functions

### Macro

Use macros instead of functions

* Version 1

```c++
int findMax(int a, int b){
  return (a > b) ? a : b;
}

int main(){
  long res = 0;
  for (int i = 0; i < 1000000; i++){
    int t = findMax(i, 10000);
  }
}
```

* Version 2 : 3 times faster

```c++
#define FINDMAX(a, b) (a > b ? a : b)

int main(){
  long res = 0;
  for (int i = 0; i < 1000000; i++){
    int t = FINDMAX(i, 10000);
  }
}
```

### Parameter

* Version 1 : 7 B cycles

```c++
int res = 0;
void sum(vector<int> arr){
  for (int i = 0; i < arr.size(); i++)
    res += arr[i];
}

int main(){
  vector<int> v(10, 1);
  for (int i = 0; i < 10000000; i++){
    sum(v);
  }
  cout << res << endl;
  return 0;
}
```

* Version 2 : 2 B cycles

```c++
int res = 0;
void sum(vector<int> &arr){
  for (int i = 0; i < arr.size(); i++)
    res += arr[i];
}

int main(){
  vector<int> v(10, 1);
  for (int i = 0; i < 10000000; i++){
    sum(v);
  }
  cout << res << endl;
  return 0;
}
```

> Pass structures or classes by reference, not by value

> Using C `scanf` or `printf` instead of C++ `cin` or `cout`

### Function rule

> * Return objects via reference parameters
  (The return value of a function will be stored in a register. If this return data has no intened usage, time and space are wasted in storing this information)

```c++
template <class T> T funcReturn(){
  T res;
  ...
  return res;
}
```
=>
```c++
template <class T> T funcReturn(T& res){
  res = ...
}
```

# 5. Arrays

> Accessing in continuous memory is faster than discrete memory or random memory

# 6. Loops

### Unrolling

* Version 1 : 13 B cycles

```c++
void functionA(){};
void functionB(){};
void functionC(){};

int main(){
  for (int i = 0; i < 10000000; i++){
    int funcIdx = i % 3;
    switch(funcIdx){
      default: case 0: functionA(); break;
      case 1: functionB(); break;
      case 2: functionC(); break;
    }
  }

  return 0;
}
```

* Version 2 : 6.1 B cycles

```c++
void functionA(){};
void functionB(){};
void functionC(){};

int main(){
  for (int i = 0; i < 10000000; i += 3){
    functionA();
    functionB();
    functionC();
  }

  return 0;
}
```

> Using unrolling

### Copy and clearing arrays

* Version 1 : 15B cycles

```c++
int main(){
  int a[1000], b[1000];
  for (int i = 0; i < 10000000; i++){
    int value = i % 100;
    for (int j = 0; j < 1000; j++)
      a[j] = value;

    for (int j = 0; j < 1000; j++)
      b[j] = a[j];
  }

  return 0;
}
```

* Version 2 : 1B cycles (15 times faster)

```c++
#include <stdio.h>
#include <string>
int main(){
  int a[1000], b[1000];
  for (int i = 0; i < 10000000; i++){
    int value = i % 100;
    memset(a, value, sizeof(a));
    memcpy(b, a, sizeof(a));
  }

  return 0;
}
```

> Using `memcpy`, `memset` is often faster

### Move loops inside function call

* Version 1 : 8.3 B cycles

```c++
int res = 0;
void functionA(){
  res++;
}
int main(){
  for (int i = 0; i < 10000000; i++){
    functionA();
  }
  cout << res << endl;
  return 0;
}
```


* Version 2 : 7.6 B cycles

```c++
int res = 0;
void functionA(){
  for (int i = 0; i < 10000000; i++)
    res++;
}
int main(){
  functionA();
  cout << res << endl;
  return 0;
}
```

> Using for loop inside function call

### Fuction rule

> It is faster to compare to zero rather than compare with difference number

> Prefix (`++i`) is better than postfix(`i++`)

> Avoid calculation in condition of loop

# 7. Statements

### Using table lookup

* Version 1 : 1B cycles

```c++
int main(){
  vector<int> a = vector<int>(4, 0);
  vector<bool> b = vector<bool>{true, false, true, false};
  for (int i = 0; i < 10000000; i++){
    a[i] = b[i] ? 100 : 200;
  }
  return 0;
}
```

* Version 2 : 0.7B cycles

```c++
int main(){
  vector<int> a = vector<int>(4, 0);
  vector<bool> b = vector<bool>{true, false, true, false};
  int value[2] = {200, 100};
  for (int i = 0; i < 10000000; i++){
    a[i] = value[b[i]];
  }
  return 0;
}
```

### Switch and table

* Version 1 : 7B cycles

```c++
void functionA(){};
void functionB(){};
void functionC(){};

int main(){
  for (int i = 0; i < 10000000; i++){
    int funcIdx = i % 3;
    switch(funcIdx){
      default: case 0: functionA(); break;
      case 1: functionB(); break;
      case 2: functionC(); break;
    }
  }

  return 0;
}
```

* Version 2 : 3.2B cycles

```c++
void functionA(){};
void functionB(){};
void functionC(){};

typedef void(*func)(void);

int main(){
  static func functions[] = {functionA, functionB, functionC};
  for (int i = 0; i < 10000000; i++){
    functions[i % 3]();
  }

  return 0;
}
```

> Switch can be replace by a function table

> Using `switch` instead of `if`

# 8. Input/Output

> Read file on the buffer and read and write multiple time on buffer to avoid access multiple time read write on disk.