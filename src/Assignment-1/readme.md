Question 1 : 
TypeScript is a superset of JavaScript that adds static typing and other advanced features.

question 2: 
Interfaces define the shape of an object and can be extended, while types can define any valid type and are more versatile.

question 3: 


const reverseArray = <T> (...peram: T[]): T[] =>{
    return peram.reverse();

}


question 4 : 
"unknown" and "any" types both represent a lack of type safety, but "unknown" requires explicit type checking before operations, while "any" allows any value without type checking.


question 6 : 
The "as" keyword is used for type assertions, allowing you to manually override the inferred type of a value.

question 7:
Type guards with "in" and "typeof" operators allow you to narrow down the type of a variable based on its properties or its primitive type.
