#include <stdio.h> //standard input/output
// #include <conio.h> //console input/output
#include <string.h>

int AssignmentOperator()
{
    // Symbols = += -= *= /= %=
    int x; // Declaration
    x = 5; // Assignment
    printf("The value of x is: %d\n", x);
    x += 1; // Equivalent to x = x + 1; (addition assignment)
    printf("The value of x is: %d\n", x);
    x -= 2; // Equivalent to x = x - 2; (subtraction assignment)
    printf("The value of x is: %d\n", x);
    x *= 3; // Equivalent to x = x * 3; (multiplication assignment)
    printf("The value of x is: %d\n", x);
    x /= 4; // Equivalent to x = x / 4; (Division assignment)
    printf("The value of x is: %d\n", x);
    x %= 5; // Equivalent to x = x % 5; (Modulus assignment)
    printf("The value of x is: %d\n", x);
}
int LogicalOperator()
{ // need modification
    // Symbols && || !  // Logical AND (&&) example
    int num1 = 5, num2 = 8, age;
    printf("Enter Your Age: ");
    scanf("%d", &age);
    int isRainy = 1; // 0 represents false/true
    if (num1 > 0 && num2 > 0)
    {
        printf("Both numbers are positive.\n");
    }
    else
    {
        printf("one number is not positive.\n");
    }
    // Logical OR (||) example
    if (age < 18 || age > 65)
    {
        printf("You are either too young or too old for this.\n");
    }
    else
    {
        printf("You are in the eligible age range.\n");
    }
    // Logical NOT (!) example
    if (!isRainy)
    {
        printf("It's not rainy today.\n");
    }
    else
    {
        printf("It's rainy today.\n");
    }
}
int RelationalOperator()
{
    // Symbols == != < > <= >=
    int a, b;
    // Relational operators in if statements
    printf("Enter Two number: ");
    scanf("%d%d", &a, &b);
    if (a == b)
    {
        printf("%d is equal to %d\n", a, b);
    }
    if (a != b)
    {
        printf("%d is not equal to %d\n", a, b);
    }
    if (a < b)
    {
        printf("%d is less than %d\n", a, b);
    }
    if (a > b)
    {
        printf("%d is not less than %d\n", a, b);
    }
    if (a >= b)
    {
        printf("%d is greater than or equal to %d\n", a, b);
    }
    if (a <= b)
    {
        printf("%d is less than or equal to %d\n", a, b);
    }
}
int BitwiseOperator()
{
    // symbols => & | >> << ~ ^
    int num1, num2;
    printf("Enter first number: ");
    scanf("%d", &num1);
    printf("Enter second number: ");
    scanf("%d", &num2);
    printf("Bitwise AND %d", num1 & num2);
    printf("\nBitwise OR %d", num1 | num2);
    printf("\nBitwise Right Shift %d", num1 >> num2);
    printf("\nBitwise Left Shift %d", num1 << num2);
    printf("\nBitwise XOR %d", num1 ^ num2);
    printf("\nBitwise NOT %d", ~num1);
}
int ArithmeticOperator()
{
    int num1, num2, sum, sub, mul, div, mod;
    printf("Enter first number: ");
    scanf("%d", &num1);
    printf("Enter second number: ");
    scanf("%d", &num2);
    sum = num1 + num2;
    printf("\nValue Addition is: %d", sum);
    sub = num1 - num2;
    printf("\nValue Substraction is: %d", sub);
    mul = num1 * num2;
    printf("\nValue Multiplication is: %d", mul);
    div = num1 / num2;
    printf("\nValue Divide is: %d", div);
    mod = num1 % num2;
    printf("\nValue Modulus is: %d", mod);
}
int Prefix_PostfixNumber()
{
    // Symbols ++ --
    int a;
    printf("\n%d", a);
    printf("\n%d", ++a);
    printf("\n%d", --a);
    printf("\n%d", a++);
    printf("\n%d", a--);
}
int IterationNestedForLoop()
{
    int i, j, plus;
    for (i = -1; i > -6; i--)
    {
        printf("\nOuter Loop I %d ", i);
        printf("\n");
        for (int j = -3; j < 0; j++)
        {
            plus++;
            printf("Decreament Loop J %d ", j);
        }
    }
    printf("\nTotal number of loop running%d", plus);
    printf("\nBye!");
}
int IterationForLoop()
{
    int i, j;
    printf("Enter new number ");
    scanf("%d", &j);
    for (i = j; i <= 10; i++)
    {
        printf("Print Increament Loop %d\n", i);
    }
    for (i = j; i >= 11; i--)
    {
        printf("Print Decreament Loop %d\n", i);
    }
    printf("Bye!");
}
int fibonacciWithoutRecursion()
{
    int n, first = 0, second = 1, next;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    printf("Fibonacci Series: ");
    for (int i = 0; i < n; i++)
    {
        if (i <= 1)
            next = i;
        else
        {
            next = first + second;
            first = second;
            second = next;
        }
        printf("%d ", next);
    }
    return 0;
}
int fibonacci(int n)
{
    if (n <= 1)
    {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
int fibonacciWithRecursion()
{
    int n;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    printf("Fibonacci Series: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", fibonacci(i));
    }
    return 0;
}
int factorial()
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
        printf("Factorial of %d is: %d ", a, s);
    }
}
int EvenOdd()
{
    int a;
    printf("Enter a number: ");
    scanf("%d", &a);
    if (a % 2 == 0)
    {
        printf("%d is Even.", a);
    }
    else
    {
        printf("%d is Odd.", a);
    }
}
int DoWhileLoop()
{
    int a = 1;
    printf("Using 0-5 number print in do-while loop:\n");
    do // do while ek bar print hoga
    {
        printf("%d ", a);
        a++;
    } while (a < 5);
    printf("\n");
    a = 0; // Reset count for the next example
    printf("Using 0-5 number print in while loop:\n");
    while (a < 5)
    {
        printf("%d ", a);
        a++;
    }
    printf("\n");
}
int ArmStrongIfElse()
{
    int a, b, c, x, y, d;
    printf("An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits in the number.\n");
    printf("Example:- Armstrong Number is: 407, 153, 370, 371 \n");
    printf("Enter number: ");
    scanf("%d", &x);
    a = x % 10;
    y = x / 10;
    b = y % 10;
    c = y / 10;
    d = (a * a * a) + (b * b * b) + (c * c * c);
    if (d == x)
    {
        printf("It is Armstrong: %d\n", x);
    }
    else
    {
        printf("It is not Armstrong: %d\nTotal sum is: %d\n", x, d);
    }
}
int AmrStrongForLoop()
{
    int x, y, t, s = 0, a, i;
    printf("An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits in the number.\n");
    printf("Enter a range number: ");
    scanf("%d", &i);
    for (x = 1; x <= i; x++)
    {
        s = 0;
        y = x;
        while (y != 0)
        {
            t = y % 10;
            s = s + (t * t * t);
            y = y / 10;
        }
        if (x == s)
        {
            printf("%d is Armstrong: %d\n", x, s);
        }
    }
}
int ArmStrongWhile() // n power of 3
{
    int x, y, t, s = 0, a, i;
    printf("Armstrong Number is: 407, 153, 370, 371 \n");
    printf("Enter number: ");
    scanf("%d", &x);
    y = x;
    while (y != 0)
    {
        t = y % 10;
        s = s + (t * t * t);
        y = y / 10;
    }
    if (x == s)
    {
        printf("It is Armstrong: %d\n", s);
    }
    else
    {
        printf("It is Not Armstrong: %d\n", s);
    }
}
int MarksNumberArrays() // need improvement
{
    float a[5], s = 0, per;
    int i, j[5];
    printf("Enter marks of 5 sub ");
    for (i = 0; i < 5; i++)
    {
        scanf("%f", &a[i]);
        j[i] = a[i];
    }
    for (i = 0; i < 5; i++)
    {
        s = s + a[i];
    }
    printf("Total Marks is %f\n", s);
    per = (s / 500) * 100;
    if (per <= 100 && per > 80 && a[0] > 33 && a[1] > 33 && a[2] > 33 && a[3] > 33 && a[4] > 33 && a[0] <= 100 &&
        a[1] <= 100 && a[2] <= 100 && a[3] <= 100 && a[4] <= 100)
    {
        printf("Congratulations Distinct ");
        printf("%f\n", per);
    }
    else if (per <= 80 && per >= 70 && a[0] > 33 && a[1] > 33 && a[2] > 33 && a[3] > 33 && a[4] > 33 && a[0] <= 100 &&
             a[1] <= 100 && a[2] <= 100 && a[3] <= 100 && a[4] <= 100)
    {
        printf("Perfect ");
        printf("%f \n", per);
    }
    else if (per < 70 && per >= 50 && a[0] > 33 && a[1] > 33 && a[2] > 33 && a[3] > 33 && a[4] > 33 && a[0] <= 100 &&
             a[1] <= 100 && a[2] <= 100 && a[3] <= 100 && a[4] <= 100)
    {
        printf("Very Good ");
        printf("%f \n", per);
    }
    else if (per < 50 && per >= 40 && a[0] > 33 && a[1] > 33 && a[2] > 33 && a[3] > 33 && a[4] > 33)
    {
        printf("Good ");
        printf("%f \n", per);
    }
    else if (per < 40 && per > 34 && a[0] > 33 && a[1] > 33 && a[2] > 33 && a[3] > 33 && a[4] > 33)
    {
        printf("Pass ");
        printf("%f \n", per);
    }
    else if (per > 0 && per < 27 || a[0] < 33 || a[1] < 33 || a[2] < 33 || a[3] < 33 || a[4] < 33)
    {
        printf("Good Luck Next Time ");
        printf("%f \n", per);
    }
    else if (a[0] > 100 || a[1] > 100 || a[2] > 100 || a[3] > 100 || a[4] > 100)
    {
        printf("Type wrong marks ");
        if (a[0] > 100)
        {
            printf(" %f", a[0]);
        }
        else if (a[1] > 100)
        {
            printf(" %f", a[1]);
        }
        else if (a[2] > 100)
        {
            printf(" %f", a[2]);
        }
        else if (a[3] > 100)
        {
            printf(" %f", a[3]);
        }
        else if (a[4] > 100)
        {
            printf(" %f", a[4]);
        }
    }
    else
    {
        printf(" ");
    }
    printf("You Entered Marks: %d %d %d %d %d\n", j[0], j[1], j[2], j[3], j[4]);
}
int TableNumberRange()
{
    int start, end;
    printf("Enter the starting range: ");
    scanf("%d", &start);
    printf("Enter the ending range: ");
    scanf("%d", &end);
    for (int i = start; i <= end; i++)
    {
        for (int j = 1; j <= 10; j++)
        {
            printf("%d * %d = %d", i, j, i * j);
            printf("\n");
        }
        printf("\n");
    }
}
int FirstNumberTable()
{
    int i, n;
    int j; // Array
    printf("Enter A Number: ");
    scanf("%d", &n);
    for (i = 1; i <= 10; i++)
    {
        j = n * i;
        printf("%d*%i %d \n", n, i, j);
    }
    return 0;
}
int ASCII_Value()
{
    int i;
    for (i = 1; i <= 256; i++)
    {
        printf("%d = %c \n", i, i);
    }
}
int Interest_Rate()
{
    int p, n;
    float r, si;
    printf("Output for Interest rate\n");
    printf("Enter first number: ");
    scanf("%d", &p);
    printf("Enter second number: ");
    scanf("%d", &n);
    printf("Enter third real number: ");
    scanf("%f", &r);
    si = p * n * r / 100;
    printf("%f\n", si);
}
int address_define()
{
    int e, f;
    char g, h;
    float i, j;
    printf("Difference of 4bit for integer value \n%i\n%i\n", &e, &f);
    printf("Difference of 1bit for char value \n%u\n%u\n", &g, &h);
    printf("Difference of 4bit for float value \n%u\n%u\n", &i, &j);
}
int if_else()
{
    int x, y;
    printf("Enter two number: ");
    scanf("%d %d", &x, &y);
    if (x > y)
    {
        printf("%d is Greater than %d: \nTotal difference number is: %d\n", x, y, y - x);
    }
    else if (x < y)
    {
        printf("%d is Less than %d: \nTotal difference number is: %d\n", x, y, y - x);
    }
    else
    {
        printf("Both numbers are equal\n");
    }
    return 0;
}
int LCM_Num()
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
int HCF_Num()
{
    int x, y, i;
    printf("Enter 2 same number ");
    scanf("%d%d", &x, &y);
    for (i = x < y ? x : y; i > 0; i--)
    {
        if (x % i == 0 && y % i == 0)
        {
            printf("GCD is %d\n", i);
        }
    }
}
int SumOfMatrix()
{
    int row, col, m;
    printf("Enter a row: ");
    scanf("%d", &row);
    printf("Enter a column: ");
    scanf("%d", &col);
    m = row * col;
    printf("Type %d matrix numbers\n", m);
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
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            c[i][j] = a[i][j] + b[i][j]; // here can subtrat, multiply, divide
        }
    }
    printf("Addition 2 matrix is:\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            printf("%d ", c[i][j]);
        }
        printf("\n");
    }
}
int palindrome_num()
{
    int originalNum, num, reversNum = 0, rem;
    printf("A palindrome is a sequence of characters that reads the same forward and backward. This definition encapsulates the essence of a palindrome, where the order of characters is the same when read from left to right and right to left.\n");
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
        printf("Not a palindrome number");
    }
    else
    {
        printf("Reverse Number is: %u", reversNum);
    }
}
int pointer()
{
    int x, *y, **z;
    y = &x; // & symbal represent is address
    printf("Enter the X number: ");
    scanf("%d", &x);
    printf("x: %d\n", x);   // output is given input
    printf("&x: %d\n", &x); // o/p is the address of x
    printf("&y: %d\n", &y); // o/p is the address of y
    printf("*y: %d\n", *y); // Here %u is unsigned integers
    printf("*(&y): %d\n", *(&y));
    printf("y: %d\n", y); // Pointer to an integer

    z = &y;
    printf("z: %d\n", z); // Double pointer to an integer
    printf("**z: %d", **z);
}
int power_num()
{
    int a, b, c = 1, i;
    printf("Enter a coefficient number: ");
    scanf("%d", &a);
    printf("Enter a power number: ");
    scanf("%d", &b);
    for (i = 1; i <= b; i++)
    {
        c = c * a;
    }
    printf("Result is: %d ", c);
}
int reverse_num()
{
    int a, b, c = 0;
    printf("Enter numbers: ");
    scanf("%d", &a);
    while (a != 0)
    {
        b = a % 10;
        c = (c * 10) + b;
        a = a / 10;
    }
    printf("Reverse Number is: %u\n", c);
}
int isPrime()
{
    int i, j = 2;
    printf("Enter a Number for checking is prime number or not: ");
    scanf("%d", &i);
    while (j <= i - 1)
    {
        if (i % j == 0)
        {
            printf("%d not a prime number\n", i);
            break;
        }
        j++;
    }
    if (j == i)
    {
        printf("%d is prime number\n", i);
    }
    else if (i <= 1)
    {
        printf("%d not a prime number\n", i);
    }
    return 0;
}
int ThreeSwappingVariables()
{
    int num1, num2, temp;
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    temp = num1;
    num1 = num2;
    num2 = temp;
    printf("After swapping, num1 = %d and num2 = %d\n", num1, num2);
    return 0;
}
int Interest5set()
{
    float principal, rate, time;
    for (int i = 1; i <= 5; i++)
    {
        printf("Enter principal, rate, and time for set %d: ", i);
        scanf("%f %f %f", &principal, &rate, &time);
        float simple_interest = (principal * rate * time) / 100;
        printf("Simple interest for set %d: %.2f\n\n", i, simple_interest);
    }
    return 0;
}
int TransposeMatrix(){
    int mat[2][2], trans[2][2], i, j;
    printf("Enter Matrix Elements: ");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            scanf("%d", &mat[i][j]);
        }
    }
    printf("Matrix Elements:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("%d ", mat[i][j]);
        }
        printf("\n");
    }
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            trans[i][j] = mat[j][i];
        }
    }
    printf("Transpose Elements:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("%d ", trans[i][j]);
        }
        printf("\n");
    }
    return 0;
}
int SumOfSeries()
{
    int n, sum = 0, sub = 0;
    printf("Enter a number range: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        if (i % 2 != 0)
        {
            sum = sum + i;
        }
        else
        {
            sub = sub - i;
        }
    }
    // 1 - 2 + 3 - 4 + 5 - 6 + 7....n terms
    printf("The Sum is: %d", sum);
    printf("\nThe Sub is: %d", sub);
    return 0;
}
int ReverseSumNumber()
{
    int num, r = 0, sum = 0, number;
    printf("Enter a Nuumber: ");
    scanf("%d", &num);
    number = num;
    while (num > 0)
    {
        r = r * 10;
        r = r + (num % 10);
        num = num / 10;
    }
    sum = number + r;
    printf("Revers Number is: %d", r);
    printf("\nSum of Original & Reverse Number: %d\n", sum);
}
char StringProperty()
{
    int i;
    char a[20] = {"amit"}, e[20] = {"Amit"};
    int x = strcmp(a, e); // check value is equal or not
    printf("%d ", x);     // ascii code A=65, a=97
    // strrev(a); //string reverse
    strlen(a);           // for check string length
    strcpy(a, "Manoj "); // string copy
    strcat(a, "Kumar");  // concatination
    printf("%s", a);
    return 0;
}
char StringForLoop()
{
    int i;
    char a[] = {"amit"}, b[] = {'a', 'm', 'r', 'i', 't', '\0'};
    char c[7] = {"Ashish"};
    char d[20];
    printf("Enter your name: ");
    scanf("%s", d);
    printf("%s %s %s %s ", a, b, c, d);

    for (i = 0; d[i] != '\0'; i++); // if don't use strlen(); function
    printf("Length of %s: %d", d, i);
}
char String_strcmp()
{
    char firstname[40], secname[40];
    int check;
    printf("Enter First Name: ");
    gets(firstname);
    printf("Enter Second Name: ");
    gets(secname);
    check = strcmp(firstname, secname);

    if (check == 0)
    {
        printf("Both String are equal");
    }
    else if (check < 0)
    {
        printf("First string is smaller than other");
    }
    else
    {
        printf("First string is greater.");
    }
    return 0;
}
char StringWithoutstrrev()
{
    int l, j, i;
    char si[30], c;
    printf("Enter name: ");
    gets(si);
    l = strlen(si);
    /*for(j=0;j<l/2;j++){
        c = si[j];
        si[j] = si[l-1-j];
        si[l-1-j] = c;
    }*/
    for (j = 0, i = l - 1; j < i; j++, i--)
    {
        c = si[j];
        si[j] = si[i];
        si[i] = c;
    }
    printf("%s", si);
    return 0;
}
union stu
{
    int a;
    char b;
};
int Union()
{
    union stu e;
    e.a = 65;
    printf("%c", e.b);
    return 0;
}
struct emp
{
    int eid;
    char ename[20];
    float esal;
};
int Structure()
{
    struct emp e;
    e.eid = 10;
    strcpy(e.ename, "Harsh");
    e.esal = 200000.5;
    printf("Emp ID %d", e.eid);
    printf("\nEmp name %s", e.ename);
    printf("\nEmp salary %lf", e.esal);
    return 0;
}
int StaticStorage()
{
    int a = 1;
    static int b = 1;
    printf("%d %d", a, b);
    a++;
    b++;
    printf("\n");
}
int StaticStorageCall()
{
    StaticStorage();
    StaticStorage();
    StaticStorage();
    return 0;
}
char strupr(char *str)
{
    while (*str)
    {
        *str = (*str >= 'a' && *str <= 'z') ? *str - 32 : *str;
        str++;
    }
}
char strlwr(char *str)
{
    while (*str)
    {
        *str = (*str >= 'A' && *str <= 'Z') ? *str + 32 : *str;
        str++;
    }
}
char StringUpperLowercase()
{
    char name[40];
    printf("Enter Your Name: ");
    scanf("%s", name);
    strupr(name);
    printf("Name in capital is: %s", name);
    strlwr(name);
    printf("\nName in lower is: %s", name);
    return 0;
}
int RegisterStorageClass()
{
    register int i, sum = 0;
    for (i = 0; i < 4; i++)
    {
        sum = sum + i;
        printf("%d ", sum);
    }
}
int AlphabeticTrianglePattern()
{
    int i, j, k, space, n;
    printf("Enter the number of lines: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        // Print spaces
        for (space = 1; space <= n - i; space++)
        {
            printf(" ");
        }
        // Print left half of the pattern
        for (j = 1; j <= i; j++)
        {
            printf("%c", 'A' + j - 1);
        }
        // Print right half of the pattern
        for (k = i - 1; k >= 1; k--)
        {
            printf("%c", 'A' + k - 1);
        }
        printf("\n");
    }
    return 0;
}
int NumericPattern()
{
    int i, j, k, space, n;
    printf("Enter the number of lines: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        // Print spaces
        for (space = 1; space <= n - i; space++)
        {
            printf(" ");
        }
        // Print left half of the pattern
        for (j = 1; j <= i; j++)
        {
            printf("%c", '1' + j - 1);
        }
        // Print right half of the pattern
        for (k = i - 1; k >= 1; k--)
        {
            printf("%c", '1' + k - 1);
        }
        printf("\n");
    }
    return 0;
}
int Calculator()
{
    char ch;
    float num1, num2, result = 0;
    printf("Enter the Operation: ");
    scanf("%c", &ch);
    printf("Enter the numbers: ");
    scanf("%f %f", &num1, &num2);
    switch (ch)
    {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        printf("Invalid option");
        break;
    }
    printf("%.2f", result);
}
char GetcharPutchar()
{
    char a;
    printf("Enter name: ");
    a = getchar();
    putchar(a);
}
int WhileDoWhile() {
    int num1, num2, result = 0,i = 0;
    printf("Enter the first number: ");
    scanf("%d", &num1);
    printf("Enter the second number: ");
    scanf("%d", &num2);
    while (i < num2) {
        result += num1;
        i++;
    }
    printf("Product (using while loop): %d\n", result);

    result = 0; // Reset result
    i = 0; // Reset counter
    do {
        result += num1;
        i++;
    } while (i < num2);
    printf("Product (using do-while loop): %d\n", result);
    return 0;
}
void main()
{
    int choice, operators, fabonacci, loop, decision, array, math, string, storageclass, pattern;
    printf("Press 1: Opertors \nPress 2: Loop Control Structure \nPress 3: Decision Control Structure \nPress 4: Arrays \nPress 5: Fabonacci Number \nPress 6: Math Equation \nPress 7: String \nPress 8: Storage Classes \nPress 9: Patterns \n");
    printf("\nPress Choice Your Number: ");
    scanf("%d", &choice);
    switch (choice)
    {
    case 1:
        // clrscr();
        printf("\nPress 1: Assignment Operator \nPress 2: Logical Operator \nPress 3: Relational Operator \nPress 4: Bitwise Operator \nPress 5: Arithmetic Operator \nPress 6: Increament/Decreament Operator \n");
        printf("\nPress Choose Your Number: ");
        scanf("%d", &operators);
        switch (operators)
        {
        case 1:
            AssignmentOperator();
            break;
        case 2:
            LogicalOperator();
            break;
        case 3:
            RelationalOperator();
            break;
        case 4:
            BitwiseOperator();
            break;
        case 5:
            ArithmeticOperator();
            break;
        case 6:
            Prefix_PostfixNumber();
            break;
        }
        break;
    case 2:
        printf("\nPress 1: Iteration Nested For Loop \nPress 2: Iteration For Loop \nPress 3: Do while  \nPress 4: Armstrong number using for loop \nPress 5: Armstrong using while loop \nPress 6: Table number range using for loop \nPress 7: Table number using for loop \nPress 8: ASCII value \nPress 9: LCM number \nPress 10: HCF number \nPress 11: Addition of Matrix \nPress 12: Palindrome using while loop \nPress 13: Cofficient Number \nPress 14: Revers Number \nPress 15: Prime Number \nPress 16: Interest 5 set using for loop \nPress 17: Transpose Matrix using for loop \nPress 18: Series of Addition \nPress 19: Reverse Sum Number using while loop \nPress 20: Using While & Do-while multiply two numbers \n");
        printf("\nPress Choose Your Number: ");
        scanf("%d", &loop);
        switch (loop)
        {
        case 1:
            IterationNestedForLoop();
            break;
        case 2:
            IterationForLoop();
            break;
        case 3:
            DoWhileLoop();
            break;
        case 4:
            AmrStrongForLoop();
            break;
        case 5:
            ArmStrongWhile();
            break;
        case 6:
            TableNumberRange();
            break;
        case 7:
            FirstNumberTable();
            break;
        case 8:
            ASCII_Value();
            break;
        case 9:
            LCM_Num();
            break;
        case 10:
            HCF_Num();
            break;
        case 11:
            SumOfMatrix();
            break;
        case 12:
            palindrome_num();
            break;
        case 13:
            power_num();
            break;
        case 14:
            reverse_num();
            break;
        case 15:
            isPrime();
            break;
        case 16:
            Interest5set();
            break;
        case 17:
            TransposeMatrix();
            break;
        case 18:
            SumOfSeries();
            break;
        case 19:
            ReverseSumNumber();
            break;
        case 20:
            WhileDoWhile();
            break;
        }
        break;
    case 3:
        printf("\nPress 1: Armstrong Number \nPress 2: IF Else \nPress 3: Factorial \nPress 4: Even Odd Number \n");
        printf("\nPress Choice Your Number: ");
        scanf("%d", &decision);
        switch (decision)
        {
        case 1:
            ArmStrongIfElse();
            break;
        case 2:
            if_else();
            break;
        case 3:
            factorial();
            break;
        case 4:
            EvenOdd();
            break;
        }
        break;
    case 4:
        printf("Press 1: Marks in array \n");
        printf("\nPress Choice Your Number: ");
        scanf("%d", &array);
        switch (array)
        {
        case 1:
            MarksNumberArrays();
            break;
        }
        break;
    case 5:
        printf("Press 1: fibonacci Without Recursion \nPress 2: fibonacci With Recursion");
        printf("\nPress Choice Your Number: ");
        scanf("%d", &fabonacci);
        switch (fabonacci)
        {
        case 1:
            fibonacciWithoutRecursion();
            break;
        case 2:
            fibonacciWithRecursion();
            break;
        }
        break;
    case 6:
        printf("Press 1: Interest Rate \nPress 2: Address of value \n");
        printf("\nPress Choice Your Number: ");
        scanf("%d", &math);
        switch (math)
        {
        case 1:
            Interest_Rate();
            break;
        case 2:
            address_define();
            break;
        case 3:
            pointer();
            break;
        case 4:
            ThreeSwappingVariables();
            break;
        case 5:
            Calculator();
            break;
        }
        break;
    case 7:
        printf("Press 1: String Property \nPress 2: String for loop \nPress 3: String strcmp \nPress 4: String without using strrev \nPress 5: Union \nPress 6: Structure \nPress 7: String Upper Lower case \nPress 8: Getchar/Putchar");
        printf("\nPress Choice Your Number: ");
        scanf("%d", &string);
        switch (string)
        {
        case 1:
            StringProperty();
            break;
        case 2:
            StringForLoop();
            break;
        case 3:
            String_strcmp();
            break;
        case 4:
            StringWithoutstrrev();
            break;
        case 5:
            Union();
            break;
        case 6:
            Structure();
            break;
        case 7:
            StringUpperLowercase();
            break;
        case 8:
            GetcharPutchar();
            break;
        }
        break;
    case 8:
        printf("Press 1: Static Storage class \nPress 2: Register Storage class \n");
        printf("\nPress Choice Your Number: ");
        scanf("%d", &storageclass);
        switch (storageclass)
        {
        case 1:
            StaticStorageCall();
            break;
        case 2:
            RegisterStorageClass();
            break;
        }
        break;
    case 9:
        printf("Press 1: Alphabatic Triangle Pattern \nPress 2: Number Triangle Pattern \n");
        printf("\nPress Choice Your Number: ");
        scanf("%d", &pattern);
        switch (pattern)
        {
        case 1:
            AlphabeticTrianglePattern();
            break;
        case 2:
            NumericPattern();
            break;
        }
        break;
    }
    // getch(); // getch() Pre-defined function
}
