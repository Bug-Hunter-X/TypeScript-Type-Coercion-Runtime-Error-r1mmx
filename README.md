# TypeScript Type Coercion Runtime Error

This example demonstrates a common issue in TypeScript where type coercion can lead to runtime errors that aren't caught by the compiler.  The `add` function is declared to accept two numbers, but it's called with a string and a number.  TypeScript's type system doesn't prevent this, leading to an unexpected result during execution.

The solution involves using type guards or stricter input validation to prevent type coercion issues and ensure that the function receives the correct types at runtime.