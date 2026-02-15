A closure in JS is **a function that remembers and has access to variables from its outer scope, even after the outer function has finished executing.**

### Key Properties of Closures

Lexical Scoping

    - Inner function uses **where variables were declared**, not where called

Remembers outer scope

    - Even after outer function returns

Creates private variables

    - No direct access from outside (data hiding / encapsulation)

Lives as long as reference exists

    - Memory leak risk if not careful

Created on every call

    - Each call to outer -> new closure instance (new memory for captured vars)
