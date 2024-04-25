#### Q1:-  Write a program to check whether a given number is prime or not ?
Sol:- Check the number is prime or not:-
```c
#include <stdio.h>
int main(){
	int i,j=2;
	printf("Enter a Number for checking is prime number or not: ");
	scanf("%d",&i);
	while(j<= i-1)
	{
		if(i % j == 0){
			printf("%d not a prime number\n",i);
			break;
		}
		j++;
	}
	if(j == i){
		printf("%d is prime number\n",i);
	}else if(i<= 1){
		printf("%d not a prime number\n",i);
	}
return 0;
}
```
```
OUTPUT:- Enter a Number for checking is prime number or not: 5
        5 is prime number
```


#### Q2:-  Write a program to check palindrome numbers.
Sol:- A palindrome is a sequence of characters that reads the same forward and backward. This definition encapsulates the essence of a palindrome, where the order of characters is the same when read from left to right and right to left. Example:-
```c
#include<stdio.h>
int main()
{
    int originalNum, num, reversNum = 0, rem;
    printf("Enter numbers: ");
    scanf("%d", &originalNum);
    num = originalNum;
    while (num != 0)
    {
        rem = num % 10;
        reversNum = reversNum * 10 + rem;
        num /= 10;
    }
    if (originalNum == reversNum)
    {
        printf("%d a Palindrome number",originalNum);
    }
    else
    {
        printf("Not Palindrome Number is: %d", reversNum);
    }
}
```
```
OUTPUT:- 	Enter numbers: 666
            666 a Palindrome number
```
#### Q3:-  Write a program to print Fibonacci series without any using recursion & recursion.
Sol:- The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence typically looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.  
Example without recursion:-
```c
#include <stdio.h>
int main(){
    int n, first = 0, second = 1, next;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    printf("Fibonacci Series: ");
    for (int i = 0; i < n; i++){
        if (i <= 1)
            next = i;
        else{
            next = first + second;
            first = second;
            second = next;
        }
        printf("%d ", next);
    }
}
```
```
OUTPUT:- 	Enter the number of terms: 6
            Fibonacci Series: 0 1 1 2 3 5
```
With recursion:-     
```c
#include <stdio.h>
int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
int main() {
    int n;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    printf("Fibonacci Series: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", fibonacci(i));
    }
}
```
```
With recursion:-
OUTPUT:-	Enter the number of terms: 6
            Fibonacci Series: 0 1 1 2 3 5
```
#### Q4:-  Write a program to print the factorial of a number.
Sol:- Factorial is the product of all positive integers less than or equal to a given positive integer.     
Example:-
```c
#include <stdio.h>
int main()
{
    int a, i, s = 1;
    printf("Enter a number for factorial: ");
    scanf("%d", &a);
    if (a < 0)
    {
        printf("Factorial is not defined for negative numbers.\n");
    }
    else
    {
        for (i = 1; i <= a; i++)
        {
            s = s * i;
        }
        printf("Factorial of %d is: %d ",a,s);
    }
}
```
```
OUTPUT:- 	Enter a number for factorial: 6
            Factorial of 6 is: 720 
```
#### Q5. Write a program to check Armstrong's number .
Sol:- An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits in the number.        
Example:-
```c
#include <stdio.h>
int main(){
    int x, y, t, s = 0, a, i;
    printf("Armstrong Number is: 407, 153, 370, 371 \n");
    printf("Enter number: ");
    scanf("%d", &x);
    y = x;
    while (y != 0){
        t = y % 10;
        s = s + (t * t * t);
        y = y / 10;
    }
    if (x == s){
        printf("It is Armstrong: %d\n", s);
    }
 else{
        printf("It is Not Armstrong: %d\n", s);
    }
}
```
```
OUTPUT:-	Armstrong Number is: 407, 153, 370, 371 
            Enter number: 407
            It is Armstrong: 407
```
#### Q6. Write a program to reverse a given number .
Sol :- 
```c
#include <stdio.h>
int main()
{
    int a,b,c=0;
    printf("Enter numbers: ");
    scanf("%d",&a);
    while(a!=0)
    {
        b=a%10;
        c=(c*10)+b;
        a=a/10;
    }
    printf("Reverse Number is: %u\n",c);
}
```
```
OutPut:-	Enter numbers: 3456
            Reverse Number is: 6543
```
#### Q7. Swap two numbers without using the third variable & using the third variable.
Sol:-
```c
#include <stdio.h>
int main() {
    int a = 5, b = 10;
    printf("Before swapping: a = %d, b = %d\n", a, b);
    a = a + b;
    b = a - b;
    a = a - b;
    printf("After swapping without third variable: a = %d, b = %d\n", a, b);
    return 0;
}
```
```
OutPut:- 	Before swapping: a = 5, b = 10
            After swapping without third variable: a = 10, b = 5
```
#### Q8. Write a program to print multiplication of 2 matrices.
Sol:-
```c
#include <stdio.h>
int main()
{
    int row=2, col=3;
    int i, j, a[10][10], b[10][10], c[10][10];
    printf("Enter 1st Matrix:");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }
    printf("Enter 2nd Matrix:");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            scanf("%d", &b[i][j]);
        }
    }
     printf("Multiply 2 matrix is:\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            c[i][j] = a[i][j] * b[i][j];
            printf("%d ", c[i][j]);
        }
        printf("\n");
    }
}
```
```
OutPut:- 	Enter 1st Matrix: 1 2 3 4 5 6
            Enter 2nd Matrix: 1 2 3 4 5 6
            Multiply 2 matrix is:
            1 4 9 
            16 25 36 
```
#### Q9. Write a program to print transpose of a matrix.
Sol:- The transpose of a matrix is obtained by interchanging rows and columns.      
Example:-
```c
#include <stdio.h>
int main() {
	int mat[2][2],trans[2][2],i,j;
	printf("Enter Matrix Elements: ");
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			scanf("%d",&mat[i][j]);
		}
	}
	printf("Matrix Elements:\n");
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			printf("%d ",mat[i][j]);
		}
		printf("\n");
	}
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			trans[i][j] = mat[j][i];
		}
	}
	printf("Transpose Elements:\n");
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			printf("%d ",trans[i][j]);
		}
		printf("\n");
	}
    return 0;
}
```
```
OutPut:-  	Enter Matrix Elements: 1 2 3 4
            Matrix Elements:
            1 2 
            3 4 
            Transpose Elements:
            1 3 
            2 4 
```
#### Q10. Write a program to print the sum of the 2 matrices.
Sol:-
```c
#include <stdio.h>
int main()
{
    int row=2, col=3;
    int i, j, a[10][10], b[10][10], c[10][10];
    printf("Enter 1st Matrix:");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }
    printf("Enter 2nd Matrix:");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            scanf("%d", &b[i][j]);
        }
    }
     printf("Addition 2 matrix is:\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            c[i][j] = a[i][j] + b[i][j];
            printf("%d ", c[i][j]);
        }
        printf("\n");
    }
}
```
```
OutPut:- 	Enter 1st Matrix: 1 2 3 4 5 6 
            Enter 2nd Matrix: 1 2 3 4 5 6 
            Addition 2 matrix is: 
            2 4 6 
            8 10 12
```
#### Q11. Write a program to convert decimal no. to binary.
Sol:-
```c
#include <stdio.h>
int main() {
	int n,r,b=0,base=1;
	printf("Enter Decimal No.: ");
	scanf("%d",&n);
	while(n>0){
		r = n%2;
		b = b+r*base;
		n = n/2;
		base = base*10;
	}
	printf("Binary No. %d",b);
    return 0;
}
```
```
OutPut:- 	Enter Decimal No.: 10
Binary No. 1010
```
#### Q12. Write a program to check given no. is even or odd.
Sol:- Even: A number divisible by 2 without a remainder.
Odd: A number not divisible by 2 without a remainder.
Example:- 
#include <stdio.h>
int main()
{
    int num;
    printf("Enter a Number: ");
    scanf("%d",&num);
    if(num%2 == 0){
        printf("Even number is: %d\n",num);
    }else{
        printf("Odd number is: %d\n",num);
    }
}

OutPut:- 	Enter a Number: 4
Even number is: 4



13. Calculate the simple interest for 5 sets of values.
Sol:-
#include <stdio.h>
int main() {
    float principal, rate, time;
    for (int i = 1; i <= 5; i++) {
        printf("Enter principal, rate, and time for set %d: ", i);
        scanf("%f %f %f", &principal, &rate, &time);
        float simple_interest = (principal * rate * time) / 100;
        printf("Simple interest for set %d: %.2f\n\n", i, simple_interest);
    }
    return 0;
}

OutPut:-  	Enter principal, rate, and time for set 1: 1.2 2.3 3.4
Simple interest for set 1: 0.09

Enter principal, rate, and time for set 2: 1.2 2.3 3.4
Simple interest for set 2: 0.09

Enter principal, rate, and time for set 3: 1.0 2.0 3.0 
Simple interest for set 3: 0.06

Enter principal, rate, and time for set 4: 1.5 2.5 3.5
Simple interest for set 4: 0.13

Enter principal, rate, and time for set 5: 1.3 2.4 3.5
Simple interest for set 5: 0.11




14. Swap two numbers using 3 variables.
Sol:-
#include <stdio.h>
int main() {
    int num1, num2, temp;
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    temp = num1;
    num1 = num2;
    num2 = temp;
    printf("After swapping, num1 = %d and num2 = %d\n", num1, num2);
    return 0;
}

OutPut:- 	Enter two numbers: 20 52
After swapping, num1 = 52 and num2 = 20



15. Write a program to print alphabet triangle 
        A
       ABA
      ABCBA
     ABCDCBA
    ABCDEDCBA
Sol:- 
#include <stdio.h>
int main() {
    int i, j, k, space, n;
    printf("Enter the number of lines: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        for (space = 1; space <= n - i; space++) {
            printf(" ");
        }
        for (j = 1; j <= i; j++) {
            printf("%c", 'A' + j - 1);
        }
        for (k = i - 1; k >= 1; k--) {
            printf("%c", 'A' + k - 1);
        }
        printf("\n");
    }
    return 0;
}

OutPut:- Enter the number of lines: 5
        A
       ABA
      ABCBA
     ABCDCBA
    ABCDEDCBA




16. Write a program to print number triangle 
        1
       121
      12321
     1234321
    123454321
   12345654321
Sol:- 
#include <stdio.h>
int main() {
    int i, j, k, space, n;
    printf("Enter the number of lines: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        for (space = 1; space <= n - i; space++) {
            printf(" ");
        }
        for (j = 1; j <= i; j++) {
            printf("%c", '1' + j - 1);
        }
        for (k = i - 1; k >= 1; k--) {
            printf("%c", '1' + k - 1);
        }
        printf("\n");
    }
    return 0;
}
OutPut:- Enter the number of lines: 6
        1
       121
      12321
     1234321
    123454321
   12345654321




17. Write a program to print the pattern 
    *
    **
    ***
    ****
Sol:- 
#include <stdio.h>
int main(){
    int i, j;
    for (i = 1; i <= 4; i++){
        for (j = 1; j <= 4; j++){
            if (j <= i){
                printf("*");
            }
            else{
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}

OutPut:- 	
        *   
        **  
        *** 
        ****



18. Write a program to implement the concept of all  operators.
Sol:- Operators in programming are symbols or constructs that perform operations on operands to produce results, such as arithmetic, logical, assignment, comparison, and bitwise operations.
Arithmetic Operator:- Performs mathematical operations such as addition, subtraction, multiplication, division, and modulus on operands.
Example:-
#include <stdio.h>
int main() {
    int a=3,b=6,add,sub,mul,div,mod;
	add = a+b;
	printf("Addition is: %d",add);
	sub = a-b;
	printf("\nSubtraction is: %d",sub);
	mul = a*b;
	printf("\nMultiple is: %d",mul);
	div = a/b;
	printf("\nDivide is:%d",div);
	mod = a%b;
	printf("\nModulus is: %d",mod);
	return 0;
}

Arithmetic Operator:- 
OutPut:- 	Addition is: 9
Subtraction is: -3
Multiple is: 18
Divide is:0
Modulus is: 3



Logical Operator:-
Sol:- Performs logical operations such as AND (&&), OR (||), and NOT (!), returning true or false based on the evaluation of expressions.
Example:-
#include<stdio.h>
void main() {
    int num1 = 5, num2 = 8, age = 23;
    int isRainy = 1;
    if (num1 > 0 && num2 > 0){
        printf("Both numbers are positive.\n");
    }else{
        printf("one number is not positive.\n");
    }if (age < 18 || age > 65){
        printf("You are either too young or too old for this.\n");
    }else{
        printf("You are in the eligible age range.\n");
    }if (!isRainy){
        printf("It's not rainy today.\n");
    }else{
        printf("It's rainy today.\n");
    }
}

Logical Operator:-
OutPut:- 	Both numbers are positive.
Enter Your Age: 22
You are in the eligible age range.
It's rainy today.



Assignment Operator:- 
Sol:- Assigns a value to a variable. For example, = assigns the value on its right to the variable on its left.
Example:-
#include<stdio.h>
void main() {
    int x; 
    x = 5; 
    printf("The value of x is: %d\n", x);
    x += 1; 
    printf("The value of x is: %d\n", x);
    x -= 2; 
    printf("The value of x is: %d\n", x);
    x *= 3;
    printf("The value of x is: %d\n", x);
    x /= 4; 
    printf("The value of x is: %d\n", x);
    x %= 5;
    printf("The value of x is: %d\n", x);
}

Assignment Operator:- 
OutPut:- 	The value of x is: 6
The value of x is: 4
The value of x is: 12
The value of x is: 3
The value of x is: 3



Relational Operator:-
Sol:- Compares two values and returns true if the relationship holds; otherwise, returns false. Examples include equal to (==), not equal to (!=), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).
Example:-
#include<stdio.h>
void main() {
    int a, b;
    printf("Enter Two number: ");
    scanf("%d%d", &a, &b);
    if (a == b){
        printf("%d is equal to %d\n", a, b);
    } if (a != b) {
        printf("%d is not equal to %d\n", a, b);
    } if (a < b){
        printf("%d is less than %d\n", a, b);
    }  if (a > b){
        printf("%d is not less than %d\n", a, b);
    } if (a >= b){
        printf("%d is greater than or equal to %d\n", a, b);
    } if (a <= b){
        printf("%d is less than or equal to %d\n", a, b);
    }
}

Relational Operator:-
OutPut:- 	Enter Two number: 1 9
1 is not equal to 9
1 is less than 9
1 is less than or equal to 9




Bitwise Operator:-
Sol:- Performs operations on individual bits of operands. Examples include bitwise AND (&), bitwise OR (|), bitwise XOR (^), bitwise left shift (<<), and bitwise right shift (>>).
Example:-
#include<stdio.h>
void main() {
    int num1 = 7, num2 = 1;
    printf("Bitwise AND %d", num1 & num2);
    printf("\nBitwise OR %d", num1 | num2);
    printf("\nBitwise Right Shift %d", num1 >> num2);
    printf("\nBitwise Left Shift %d", num1 << num2);
    printf("\nBitwise XOR %d", num1 ^ num2);
    printf("\nBitwise NOT %d", ~num1);
}

OutPut:- 	Bitwise AND 1
Bitwise OR 7
Bitwise Right Shift 3
Bitwise Left Shift 14
Bitwise XOR 6
Bitwise NOT -8




19. Write a  program to find the L.C.M of two numbers .
Sol:- LCM (Least Common Multiple) is the smallest positive integer that is divisible by both of the given integers.
Example:-
#include <stdio.h>
int main()
{
    int x, y, i;
    printf("Enter 2 number ");
    scanf("%d%d", &x, &y);
    for (i = x > y ? x : y; i <= x * y; i++)
    {
        if (i % x == 0 && i % y == 0)
        {
            printf("LCM is: %d\n", i);
        }
    }
}

OutPut :- 	Enter 2 number 3 9
LCM is: 9
LCM is: 18
LCM is: 27



20. Write a program to find the GCD of two numbers.
Sol :- GCD (Greatest Common Divisor) is the largest positive integer that divides two given integers without leaving a remainder.
Example:-
#include <stdio.h>
int main()
{
    int x, y, i;
    printf("Enter two numbers: ");
    scanf("%d %d", &x, &y);
    for (i = x < y ? x : y; i > 0; i--) {
        if (x % i == 0 && y % i == 0) {
            printf("GCD is %d\n", i);
            break; // Exit the loop after finding the GCD
        }
    }
    return 0;
}

OutPut:- 	Enter two numbers: 3 9
GCD is 3




21. Write a program to identify whether the given year is a Leap Year.
Sol:-
#include <stdio.h>
int main()
{
    int n;
    printf("Enter a number: ");
    scanf("%d",&n);
    if(n % 4 == 0){
        printf("%d is Leap Year.",n);
    }else{
        printf("%d is not Leap Year.",n);
    }
}

OutPut :- 	Enter a number: 2024
2024 is Leap Year.




22. Write a program to implement the strlen() function.
Sol:- strlen() is a function in C that calculates the length of a null-terminated string.
Example:-
#include <stdio.h>
#include<string.h>
int main() {
    char ch[50];
	int length;
	printf("Enter student's name: ");
	scanf("%s",&ch);
	length = strlen(ch);
	printf("No. of Characters: %d",length);
	return 0;
}

OutPut:- 	Enter student's name: Harsh
No. of Characters: 5



23. Write a program to implement the strcpy() function.
Sol:- The strcpy() function in C is used to copy a string from one location to another, including the null-terminating character.
Example:-
#include <stdio.h>
#include<string.h>
int main() {
    char stname[40],emname[40];
	printf("Enter Name: ");
	gets(stname);
	strcpy(emname, stname);
	printf("Student Name: %s",stname);
	printf("\nEmployee Name: %s",emname);
	return 0;
}

OutPut:- 	Enter Name: Harsh Yadav
Student Name: Harsh Yadav
Employee Name: Harsh Yadav



24. Write a program to implement the strcmp() function.
Sol:- strcmp() is a C function used to compare two strings, returning an integer value indicating their relationship: negative if the first string is less than the second, zero if they are equal, or positive if the first string is greater than the second.
Example:-
#include <stdio.h>
#include<string.h>
int main() {
    char firstname[40], secname[40];
	int check;
	printf("Enter First Name: ");
	gets(firstname);
	printf("Enter Second Name: ");
	gets(secname);
	check = strcmp(firstname, secname);
	
	if(check == 0){
		printf("Both String are equal");
	}else if(check < 0){
		printf("First string is smaller than other");
	}else{
		printf("First string is greater.");
	}
	return 0;
}

OutPut:- 	Enter First Name: Harsh
Enter Second Name: Akash
First string is greater.




25. Write a program to implement the strcat() function.
Sol:- The strcat() function in C is used to concatenate (append) one string to the end of another.
Example:-
#include <stdio.h>
#include<string.h>
int main() {
    char firstname[40], secname[40];
	printf("Enter First Name: ");
	gets(firstname);
	printf("Enter Second Name: ");
	gets(secname);
	strcat(firstname, secname);
	printf("Your Full name: %s",firstname);
	return 0;
}

OutPut:- 	Enter First Name: Harsh 
Enter Second Name: Yadav
Your Full name: Harsh Yadav





26. Write a program to implement the strrev() function.
Sol:- The strrev() function in C reverses the characters in a string in-place.
Example:-
#include<stdio.h>
#include<str
void main() {
    int l,j;
	char si[30];
	printf("Enter name: ");
	gets(si);
	strrev(si);
	printf("%s",si);
	//getch();
}

OutPut:- 	Enter name: harsh yadav
		    vaday hsrah



27. Write a program to implement the strupr() function.
Sol:- strupr() is a C library function used to convert all lowercase characters in a string to uppercase characters, in place.
Example:-
#include<stdio.h>
#include<string.h>
void main() {
    char name[40];
	printf("Enter Your Name: ");
	gets(name);
	strupr(name);
	printf("Name in capital is: %s",name);
	strlwr(name);
	printf("Name in lower is: %s",name);
	return 0;
}

OutPut:- 	Enter Your Name: Harsh yadav
Name in capital is: HARSH YADAV
Name in lower is: harsh yadav



28. Write a program to implement the concept of Structure.
Sol:- A structure in C is a user-defined data type that groups together variables of different data types under a single name.
Example:-
#include<stdio.h>
#include<string.h>
struct emp{
    int eid;
    char ename[20];
    float esal;
};
int main(){
    struct emp e;
    e.eid = 10;
    strcpy(e.ename,"Harsh");
    e.esal = 200000.5;
    printf("Emp ID %d",e.eid);
    printf("\nEmp name %s",e.ename);
    printf("\nEmp salary %lf",e.esal);
	return 0;
}

OutPut:- 	Emp ID 10
Emp name Harsh
Emp salary 200000.500000



29. Write a program to implement the concept of Union.
Sol:- A union in C is a user-defined data type that allows storage of different data types in the same memory location, with only one member accessible at a time.
Example:-
#include<stdio.h>
#include<string.h>
union stu{
    int a;
    char b;
};
int main(){
    union stu e;
    e.a = 65;
    printf("%c",e.b);
	return 0;
}

OutPut:- A



30. Write a program to implement the static storage class.
Sol:- Static storage class in C defines variables with a lifespan throughout the program execution, retaining their values between function calls.
Example:-
#include<stdio.h>
int main(){
    StaticStorage();
    StaticStorage();
    StaticStorage();
	return 0;
}
void StaticStorage(){
    int a = 1;
    static int b = 1;
    printf("%d %d",a,b);
    a++;
    b++;
    printf("\n");
}

OutPut:- 	1 1
		1 2
		1 3



31. Write a program to implement the concept of register storage class.
Sol:- The register storage class specifier in C is used to suggest to the compiler to store a variable in a CPU register for faster access.
Example:-
#include<stdio.h>
void main(){
    register int i,sum = 0;
    for(i=0;i<4;i++){
        sum = sum + i;
        printf("%d ",sum);
    }
}


OutPut:- 0 1 3 6 




32. Write a program to implement the concept of auto storage class.
Sol:- The auto storage class in C is the default storage class for local variables, implying automatic storage duration and scope limited to the block in which they are declared.
Example:-
#include<stdio.h>
int main(){
    auto int x = 27;
    {
        auto int x = 10;
        printf("Inner: %d",x);
    }
    printf("\nOuter: %d",x);
    return 0;
}

OutPut:- 	Inner: 10
            Outer: 27




33. Write a program to implement the concept of switch statement.
Sol:- Switch case is a control flow statement in programming used for selecting a choice from multiple options based on the value of an expression.
Example:-
#include <stdio.h>
int main()
{
    int num,a = 3, b = 9;
    printf("Press 1: Addition \nPress 2: Subtraction \nPress 3: Multiply\n");
    printf("Select a number: ");
    scanf("%d",&num);
    switch(num){
        case 1:
            printf("Addition is: %d",a+b);
            break;
        case 2:
            printf("Subtraction is: %d",a-b);
            break;
        case 3:
            printf("Multiply is: %d",a*b);
            break;
        default:
            printf("Entered a wrong key");
    }
    return 0;
}

OutPut:- 	Press 1: Addition 
Press 2: Subtraction 
Press 3: Multiply
Select a number: 2
Subtraction is: -6




34. Write a program to implement the concept of getche(), getchar() and putchar() function.
Sol:- getche() reads a single character from the standard input (keyboard) without requiring the user to press Enter.
getchar() reads a single character from the standard input (keyboard).
putchar() writes a single character to the standard output (console).
Example:-
#include <stdio.h>
int main() {
    char ch;
    printf("Enter a character using getche(): ");
    ch = getche();
    printf("\nCharacter entered: ");
    putchar(ch);

    printf("\n\nEnter another character using getchar(): ");
    ch = getchar();
    printf("\nCharacter entered: ");
    putchar(ch);
    return 0;
}

OutPut:- 	Enter a character using getche(): A
Character entered: A

Enter another character using getchar(): B
Character entered: B




35. Write a program to implement the concept of Loops.
a) for loop:-
Sol:- The for loop in C is a control flow statement used to execute a block of code repeatedly for a fixed number of times. It consists of three parts: initialization, condition, and increment/decrement.
Example:-
#include <stdio.h>
int main()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    for(int i=1;i<num; i++){
        printf(" %d",i+num);
    }
    return 0;
}

OutPut:- 	Enter a number: 5
 6 7 8 9



b) while loop:-
Sol:- The while loop is another control flow statement used to execute a block of code repeatedly as long as a specified condition is true. Unlike the for loop, the initialization and increment/decrement are handled manually within the loop.
Example:-
#include <stdio.h>
int main()
{
    int num;
    num = 1;
    while(num < 10){
        printf("%d ",num);
        num++;
    }
    return 0;
}

OutPut :-	1 2 3 4 5 6 7 8 9 




c) do while loop
Sol:- The do-while loop is similar to the while loop, but it guarantees that the code block is executed at least once before checking the condition. It is useful when you want to execute the code block first and then check the condition.
Example:-
#include <stdio.h>
int main()
{
    int num;
    num = 1;
    do{
        printf("%d ",num);
        num++;
    }while(num < 10);
    return 0;
}

OutPut:-  1 2 3 4 5 6 7 8 9 




36. Write a program to implement the Statements.
a) if :- 
Sol:- Conditional statement executing code based on a true condition.
Example:-
#include <stdio.h>
int main()
{
    int num = 5;
    if(num > 0){
        printf("Positive Number");
    }
    return 0;
}

OutPut:- 	Positive Number



b) if else:- 
Sol:- Conditional statement executing one block of code if true and another if false.
Example:-
#include <stdio.h>
int main()
{
    char ch;
    printf("Enter a character: ");
    scanf("%c",&ch);
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
        printf("%c is vowel.",ch);
    }else{
        printf("%c is consonant",ch);
    }
}

OutPut:- 	Enter a character: u
            u is a vowel.




c) nested if :-
Sol:- Nested if-else: Conditional statement with an if-else statement inside another if or else block.
Example:-
#include <stdio.h>
int main()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    if(num > 0){
        if(num%2 == 0){
            printf("Even Number");
        }else{
            printf("Odd Number");
        }
    }else{
        printf("Negative number entered");
    }
    return 0;
}

OutPut:- 	Enter a number: 32
Even Number



37. Write a program to check whether vowels or not.
Sol:- 
#include <stdio.h>
int main()
{
    char ch;
    printf("Enter a character: ");
    scanf("%c",&ch);
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
        printf("%c is vowel.",ch);
    }else{
        printf("%c is consonant",ch);
    }
}

OutPut:- 	Enter a character: u
u is a vowel.



38. Write a program to find the greatest no. between two numbers.
Sol:- 
#include <stdio.h>
int main()
{
    int a, b;
    printf("Enter three number: ");
    scanf("%d %d",&a,&b);
    if (a>b){
        printf("%d is greatest",a);
    }else{
        printf("%d is greatest",b);
    }
}

OutPut:- 	Enter three number: 32 54
54 is greatest