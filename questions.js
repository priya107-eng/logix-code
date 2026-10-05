const RAW_QUESTIONS = [
  // ========================== C PROGRAMMING (1-17) ==========================
  {
    lang: "C Programming",
    q: "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n    int x = 5;\n    int y = x++ + ++x;\n    printf(\"%d %d\", x, y);\n    return 0;\n}",
    options: ["7 12", "7 13", "Undefined Behavior (Sequence Point Violation)", "6 12"],
    answer: 2
  },
  {
    lang: "C Programming",
    q: "What is the output of the following snippet?\n\n#include <stdio.h>\nint main() {\n    int a = 10, b = 20;\n    printf(\"%d\", a < b ? a++ : b++);\n    printf(\" %d\", a);\n    return 0;\n}",
    options: ["10 11", "10 10", "11 11", "20 10"],
    answer: 0
  },
  {
    lang: "C Programming",
    q: "What does this pointer arithmetic print?\n\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    printf(\"%d \", *(ptr + 3));\n    printf(\"%d\", *ptr++);\n    return 0;\n}",
    options: ["40 10", "40 20", "30 10", "30 20"],
    answer: 0
  },
  {
    lang: "C Programming",
    q: "What is the output of sizeof operator on array parameter?\n\nvoid func(int arr[10]) {\n    printf(\"%lu\", sizeof(arr));\n}\n// Assuming a 64-bit architecture",
    options: ["40", "8", "4", "Compilation Error"],
    answer: 1
  },
  {
    lang: "C Programming",
    q: "What does printf return in C?\n\n#include <stdio.h>\nint main() {\n    int c = printf(\"LOGIX2026\");\n    printf(\" %d\", c);\n    return 0;\n}",
    options: ["LOGIX2026 9", "LOGIX2026 0", "LOGIX2026 1", "LOGIX2026 8"],
    answer: 0
  },
  {
    lang: "C Programming",
    q: "What is the value of ptr2 - ptr1?\n\nint arr[5] = {1, 2, 3, 4, 5};\nint *ptr1 = &arr[1];\nint *ptr2 = &arr[4];\nprintf(\"%td\", ptr2 - ptr1);",
    options: ["12", "3", "6", "Depends on architecture"],
    answer: 1
  },
  {
    lang: "C Programming",
    q: "What is the behavior of modifying a string literal?\n\nchar *str = \"Hello\";\nstr[0] = 'M';",
    options: ["Modifies string to Mello", "Compilation error", "Undefined Behavior (Segmentation Fault at runtime)", "Warning and ignored"],
    answer: 2
  },
  {
    lang: "C Programming",
    q: "What does the following macro evaluate to?\n\n#define SQUARE(x) x * x\nint res = SQUARE(2 + 3);",
    options: ["25", "11", "13", "10"],
    answer: 1
  },
  {
    lang: "C Programming",
    q: "What will this recursion output?\n\nvoid count(int n) {\n    if (n <= 0) return;\n    count(n - 1);\n    printf(\"%d \", n);\n    count(n - 1);\n}\ncount(3);",
    options: ["1 2 1 3 1 2 1", "3 2 1 1 2 3", "1 2 3 2 1", "3 2 1 2 3"],
    answer: 0
  },
  {
    lang: "C Programming",
    q: "What is the size of the following structure on a standard 64-bit system with structure padding?\n\nstruct Node {\n    char a;\n    int b;\n    char c;\n};",
    options: ["6 bytes", "8 bytes", "12 bytes", "16 bytes"],
    answer: 2
  },
  {
    lang: "C Programming",
    q: "What will happen here?\n\nint main() {\n    static int x = 3;\n    if (--x) {\n        main();\n        printf(\"%d \", x);\n    }\n    return 0;\n}",
    options: ["0 0", "1 2", "0 1 2", "Infinite recursion"],
    answer: 0
  },
  {
    lang: "C Programming",
    q: "What is the output of the bitwise operation?\n\nint x = 8;\nprintf(\"%d\", (x & (x - 1)));",
    options: ["8", "7", "0", "1"],
    answer: 2
  },
  {
    lang: "C Programming",
    q: "What is the meaning of: `int (*fp)(int, int);`?",
    options: [
      "A function returning a pointer to an integer array",
      "A pointer to a function taking two ints and returning an int",
      "A function taking two pointers and returning int",
      "A syntax error"
    ],
    answer: 1
  },
  {
    lang: "C Programming",
    q: "What is output of the switch statement?\n\nint x = 2;\nswitch(x) {\n    case 1: printf(\"A\");\n    case 2: printf(\"B\");\n    case 3: printf(\"C\");\n    default: printf(\"D\");\n}",
    options: ["B", "BCD", "BC", "B C D"],
    answer: 1
  },
  {
    lang: "C Programming",
    q: "What happens when free() is called twice on the same allocated pointer?\n\nint *p = (int*)malloc(sizeof(int));\nfree(p);\nfree(p);",
    options: ["No effect", "Memory is cleaned better", "Undefined Behavior (Double Free)", "Compiler Error"],
    answer: 2
  },
  {
    lang: "C Programming",
    q: "What will this output?\n\nint x = -1;\nunsigned int y = 1;\nif (x < y) printf(\"LESS\");\nelse printf(\"GREATER\");",
    options: ["LESS", "GREATER", "Compilation Error", "Undefined"],
    answer: 1
  },
  {
    lang: "C Programming",
    q: "What will `printf(\"%d\", 5[\"abcdef\"]);` print?",
    options: ["Compilation Error", "f", "102 (ASCII of f)", "Garbage Value"],
    answer: 2
  },

  // ========================== C++ PROGRAMMING (18-34) ==========================
  {
    lang: "C++ (OOP & Memory)",
    q: "What happens if a base class destructor is NOT virtual and we delete derived object via base pointer?\n\nBase *b = new Derived();\ndelete b;",
    options: [
      "Derived destructor is called first, then Base destructor",
      "Undefined behavior; Derived destructor is skipped causing memory leaks",
      "Compile-time error",
      "Both destructors execute correctly"
    ],
    answer: 1
  },
  {
    lang: "C++ (Polymorphism)",
    q: "What is the output of the following C++ code?\n\nclass A {\npublic:\n    virtual void show() { cout << \"A\"; }\n};\nclass B : public A {\npublic:\n    void show() { cout << \"B\"; }\n};\nint main() {\n    A *a = new B();\n    a->show();\n    return 0;\n}",
    options: ["A", "B", "AB", "Compile Error"],
    answer: 1
  },
  {
    lang: "C++ (Pointers & References)",
    q: "Which of the following statements about C++ references is FALSE?",
    options: [
      "References cannot be NULL",
      "References can be reseated to point to another object after initialization",
      "References share the same memory address as the aliased variable",
      "A reference must be initialized when declared"
    ],
    answer: 1
  },
  {
    lang: "C++ (Constructors)",
    q: "What is the output?\n\nclass Sample {\npublic:\n    Sample() { cout << \"1 \"; }\n    Sample(const Sample &s) { cout << \"2 \"; }\n};\nint main() {\n    Sample a;\n    Sample b = a;\n    return 0;\n}",
    options: ["1 1", "1 2", "2 1", "1"],
    answer: 1
  },
  {
    lang: "C++ (Modern C++)",
    q: "What is the difference between `std::unique_ptr` and `std::shared_ptr`?",
    options: [
      "unique_ptr cannot be moved",
      "shared_ptr maintains a reference count; unique_ptr enforces single ownership",
      "shared_ptr is faster with zero overhead",
      "unique_ptr can be copied to multiple pointers"
    ],
    answer: 1
  },
  {
    lang: "C++ (Templates & Types)",
    q: "What is the return type of `decltype(auto)` when deduced from `(x)` (where `int x = 10;`)?",
    options: ["int", "int&", "const int", "int&&"],
    answer: 1
  },
  {
    lang: "C++ (Diamond Problem)",
    q: "In C++, how is the diamond problem solved in multiple inheritance?",
    options: [
      "Using `virtual` base classes",
      "Using `abstract` classes only",
      "Using `friend` inheritance",
      "Multiple inheritance is prohibited in C++"
    ],
    answer: 0
  },
  {
    lang: "C++ (Operator Overloading)",
    q: "Which of the following operators CANNOT be overloaded in C++?",
    options: ["+", "[]", "::", "()"],
    answer: 2
  },
  {
    lang: "C++ (Static Members)",
    q: "Where is a static member variable of a class in C++ stored and initialized?",
    options: [
      "In Stack memory inside constructor",
      "In Heap memory dynamically",
      "In Data Segment, defined outside the class declaration",
      "Inside the VTable"
    ],
    answer: 2
  },
  {
    lang: "C++ (Standard Template Library)",
    q: "What is the average time complexity of insertion and search in `std::unordered_map`?",
    options: ["O(log N)", "O(1)", "O(N)", "O(N log N)"],
    answer: 1
  },
  {
    lang: "C++ (Exceptions)",
    q: "What happens if an exception is thrown inside a class destructor during stack unwinding?",
    options: [
      "The exception is caught by main()",
      "std::terminate is invoked immediately",
      "The program skips the destructor and continues",
      "It produces a compile error"
    ],
    answer: 1
  },
  {
    lang: "C++ (Const & Mutable)",
    q: "What does the `mutable` keyword allow in C++?",
    options: [
      "Allows a variable to change types dynamically",
      "Allows a class member variable to be modified inside a const member function",
      "Prevents a variable from being optimized out",
      "Makes a variable thread-safe"
    ],
    answer: 1
  },
  {
    lang: "C++ (Move Semantics)",
    q: "What does `std::move(obj)` actually do under the hood?",
    options: [
      "Physically moves data blocks in memory",
      "Casts `obj` to an rvalue reference (`T&&`)",
      "Destroys `obj` and clones it",
      "Clears heap allocation of `obj`"
    ],
    answer: 1
  },
  {
    lang: "C++ (Memory Model)",
    q: "What is the size of an empty class in C++ (`class Empty {}; sizeof(Empty);`)?",
    options: ["0 bytes", "1 byte", "4 bytes", "8 bytes"],
    answer: 1
  },
  {
    lang: "C++ (Inline & Vtable)",
    q: "Can a virtual function be declared `inline` in C++?",
    options: [
      "No, compiler generates error",
      "Yes, but inlining is ignored when called polymorphically via base pointer/reference",
      "Yes, and it is always inlined at runtime",
      "Only if it is declared private"
    ],
    answer: 1
  },
  {
    lang: "C++ (Lambda Expressions)",
    q: "What does `[&]` capture inside a C++ lambda expression?",
    options: [
      "All automatic variables in scope by reference",
      "All variables by value",
      "Only global variables by reference",
      "Nothing, syntax error"
    ],
    answer: 0
  },
  {
    lang: "C++ (Namespaces)",
    q: "What is the primary benefit of an unnamed (anonymous) namespace in C++?",
    options: [
      "Global access across all files",
      "Internal linkage restricted to that translation unit (replaces C `static`)",
      "Faster compile times",
      "Automatic thread locking"
    ],
    answer: 1
  },

  // ========================== PYTHON (35-50) ==========================
  {
    lang: "Python",
    q: "What is the output of the following Python code?\n\ndef func(val, lst=[]):\n    lst.append(val)\n    return lst\n\nprint(func(1))\nprint(func(2))",
    options: ["[1] then [2]", "[1] then [1, 2]", "[1] then [[1], [2]]", "TypeError"],
    answer: 1
  },
  {
    lang: "Python",
    q: "What is printed by this code?\n\nx = [1, 2, 3]\ny = x\ny += [4]\nprint(x is y, x)",
    options: ["True [1, 2, 3, 4]", "False [1, 2, 3, 4]", "False [1, 2, 3]", "True [1, 2, 3]"],
    answer: 0
  },
  {
    lang: "Python",
    q: "What is printed when using `+` instead of `+=` on lists?\n\nx = [1, 2, 3]\ny = x\ny = y + [4]\nprint(x is y, x)",
    options: ["True [1, 2, 3, 4]", "False [1, 2, 3]", "False [1, 2, 3, 4]", "True [1, 2, 3]"],
    answer: 1
  },
  {
    lang: "Python",
    q: "What is the output of closure evaluation?\n\nfuncs = [lambda x: x + i for i in range(3)]\nprint([f(1) for f in funcs])",
    options: ["[1, 2, 3]", "[2, 3, 4]", "[3, 3, 3]", "[4, 4, 4]"],
    answer: 2
  },
  {
    lang: "Python",
    q: "What does the expression `(1, 2, [3, 4])` do when doing `tup[2].append(5)`?",
    options: [
      "Raises TypeError because tuples are immutable",
      "Appends 5 successfully to the list inside the tuple",
      "Creates a new tuple",
      "Generates syntax warning"
    ],
    answer: 1
  },
  {
    lang: "Python",
    q: "What will happen here?\n\nt = (1, 2, [3, 4])\nt[2] += [5]",
    options: [
      "Executes normally without error",
      "Raises TypeError, but [5] is still appended to the list",
      "Raises TypeError and list remains unchanged",
      "SyntaxError"
    ],
    answer: 1
  },
  {
    lang: "Python",
    q: "What is the output of dict key hashing with booleans and integers?\n\nd = {}\nd[1] = 'A'\nd[True] = 'B'\nd[1.0] = 'C'\nprint(len(d), d[1])",
    options: ["3 C", "1 C", "2 B", "1 A"],
    answer: 1
  },
  {
    lang: "Python",
    q: "What is Python's Method Resolution Order (MRO) based on?",
    options: ["Depth First Search (DFS)", "Breadth First Search (BFS)", "C3 Linearization algorithm", "Random order"],
    answer: 2
  },
  {
    lang: "Python",
    q: "What is the GIL (Global Interpreter Lock) in CPython?",
    options: [
      "A mutex that prevents multiple native threads from executing Python bytecodes simultaneously",
      "A lock on global variables only",
      "A mechanism to prevent race conditions in I/O operations",
      "A garbage collection supervisor"
    ],
    answer: 0
  },
  {
    lang: "Python",
    q: "What will `print(''.join(reversed('logix')))` output?",
    options: ["xigol", "logix", "TypeError", "['x', 'i', 'g', 'o', 'l']"],
    answer: 0
  },
  {
    lang: "Python",
    q: "What is the difference between `@classmethod` and `@staticmethod`?",
    options: [
      "@classmethod receives the class (`cls`) as first argument; @staticmethod receives neither `self` nor `cls`",
      "@staticmethod can modify class state, @classmethod cannot",
      "@classmethod cannot be called on instances",
      "There is no functional difference"
    ],
    answer: 0
  },
  {
    lang: "Python",
    q: "What will this output?\n\na = (1)\nb = (1,)\nprint(type(a), type(b))",
    options: [
      "<class 'tuple'> <class 'tuple'>",
      "<class 'int'> <class 'tuple'>",
      "<class 'tuple'> <class 'int'>",
      "<class 'int'> <class 'int'>"
    ],
    answer: 1
  },
  {
    lang: "Python",
    q: "What does the `__slots__` attribute in a class do?",
    options: [
      "Restricts valid method names",
      "Prevents the creation of `__dict__` per instance, saving memory",
      "Allows thread-safe attribute assignment",
      "Makes all attributes automatically private"
    ],
    answer: 1
  },
  {
    lang: "Python",
    q: "What is the output of this generator expression?\n\ngen = (x**2 for x in range(3))\nprint(list(gen))\nprint(list(gen))",
    options: [
      "[0, 1, 4] then [0, 1, 4]",
      "[0, 1, 4] then []",
      "[0, 1, 4] then None",
      "GeneratorError"
    ],
    answer: 1
  },
  {
    lang: "Python",
    q: "What is printed by string intern caching?\n\na = 256\nb = 256\nc = 257\nd = 257\n# (Evaluated in standard interactive CPython session)\nprint(a is b, c is d)",
    options: ["True True", "True False", "False False", "False True"],
    answer: 1
  },
  {
    lang: "Python",
    q: "What is the output of `bool('False')` in Python?",
    options: ["False", "True", "None", "ValueError"],
    answer: 1
  }
];