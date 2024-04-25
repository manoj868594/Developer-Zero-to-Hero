#include <stdio.h> // Header files
#include <string.h>

int ForLoop1()
{
    int i, num;
    printf("Enter a number: ");
    scanf("%d", &num);
    for (i = 1; i <= num; i = i + 1)
    {
        printf("Hello World\n");
    }
    printf("%d\n", i);
    for (i = 1; i <= num; i = i + 3)
    {
        printf("%d ", i);
    }
    printf("\n%d", i);
}
int Odd_EvenLoop()
{
    int i;
    for (i = 1; i <= 100; i++)
    {
        if (i % 2 == 0)
        { // Even number
            printf("%d ", i);
        }
    }
    printf("\n\n");
    for (i = 1; i <= 100; i++)
    {
        if (i % 2 != 0)
        { // Odd number
            printf(" %d", i);
        }
    }
}
int NestedForLoop()
{
    int i;
    for (i = 1; i <= 100; i++)
    {
        if (i % 2 == 0)
        {
            if (i % 3 == 0)
            {
                printf("%d ", i);
            }
        }
    }
}
int UserNumberTable()
{
    int num, i;
    printf("Enter a number: ");
    scanf("%d", &num);
    for (i = 1; i <= 10; i++)
    {
        printf("%dx%d= %d\n", num, i, num * i);
    }
    // for(i=17;i<=170;i=i+17){ // not good program
    //     printf("%d\n",i);
    // }
}
int OddAPMath()
{
    int n, i; // n baar loop chlega
    printf("Enter a range number: ");
    scanf("%d", &n);
    for (i = 1; i <= 2 * n - 1; i = i + 2)
    {
        printf("%d ", i);
    }
    printf("\n\n");
    for (i = 4; i <= 3 * n + 1; i = i + 3)
    {
        printf("%d ", i);
    }
}
int AP_Math_Result()
{
    int n, i, a; // n baar loop chlega
    printf("Enter a range number: ");
    scanf("%d", &n);
    // 4 7 10 13 16 19 ... upto n number of terms
    //  we are going  to use extra variables
    a = 4;
    for (i = 1; i <= n; i++)
    {
        printf("%d", a);
        a = a + 3;
    }
}
int GP_Math_Result()
{
    int a = 1, i, n;
    printf("Enter a range number: ");
    scanf("%d", &n);
    // 1 2 4 8 16 32 ...
    for (i = 1; i <= n; i++)
    {
        printf("%d ", a);
        a = a * 2;
    }
}
int AP_Negative_Number()
{
    int n;
    int a, i;
    printf("Enter a starting number: ");
    scanf("%d", &n);
    a = n;
    for (i = 1; a > 0; i++)
    {
        printf("%d ", a);
        a = a - 3;
    }
    return 0;
}
int isPrimeNumber()
{
    int n, a = 0;
    printf("Enter a number: ");
    scanf("%d", &n);
    for (int i = 2; i <= n - 1; i++)
    {
        if (n % i == 0)
        {
            a = 1;
            break;
        }
    }
    if (n < 2)
    {
        printf("neither prime nor composite");
    }
    else if (a == 0)
    {
        printf("Number is prime.");
    }
    else
    {
        printf("Number is composite.");
    }
    return 0;
}
int EvenOddNumberRange()
{
    int i, num;
    printf("Enter a range number: ");
    scanf("%d", &num);
    printf("Even Number is: ");
    for (i = 1; i <= num; i++)
    {
        if (i % 2 != 0)
        {             // odd number
            continue; // output skip karna
        }
        printf("%d ", i);
    }
    printf("\n\n");
    printf("Odd number is: ");
    for (i = 1; i <= num; i++)
    {
        if (i % 2 == 0)
        {             // even number
            continue; // output skip karna
        }
        printf("%d ", i);
    }
}
int WhileLoop1()
{
    int i = 1;
    while (i < 100 + 1)
    { // condition likhi hoti hai, jb hme jyada cheeze nhi pta ho
        printf("%d ", i);
        i++;
    }
}
int PredictTheQ7()
{
    int j;
    printf("%d ", j);
    while (j <= 10)
    {
        printf("%d ", j);
        j = j + 1;
    }
    return 0;
}
int PredictTheQ8()
{
    int i = 1;
    printf("%d ", i);
    while (i <= 10)
        ;
    {
        printf("%d ", i);
        i++;
    }
}
int PredictTheQ9()
{
    int x = 1;
    while (x == 1)
    {
        x = x - 1;
        printf("\n%d", x);
    }
}
int PredictTheQ10()
{
    int x = 4, y, z;
    y = --x;
    z = x--;
    printf("%d %d %d", x, y, z);
}
int PrePostIncreament()
{
    int a, b, c, d;
    a = 1;
    printf(" %d", a++); // Post increament means first use than increament
    b = 1;
    printf(" %d", ++b); // Pre increament means first increament than use
    c = 1;
    printf(" %d", c--); // Post increament means first use than increament
    d = 1;
    printf(" %d", --d); // Pre increament means first increament than use
}
int PredictTheQ11()
{
    int x = 4, y = 3, z, a = 4, b;
    z = x-- - y;
    b = --a - y;
    printf("%d %d %d ", x, y, z);
    printf("\n%d %d", a, b);
}
int PredictTheQ12()
{
    // while('a' < 'b'){ // infinite loop
    //     printf("\nmalayalam is a palindrome");
    // }
    while ('a' > 'b')
    {
        printf("\nmalayalam is a palindrome");
    }
}
int PredictTheQ13()
{
    int i = 10;
    while (i = 20)
    { // infinite loop
        printf("A computer buff!");
    }
}
int PredictTheQ14()
{
    int i;
    while (i = 10)
    { // infinite loop because condition not set
        printf("%d", i);
        i = i + 1;
    }
}
int PredictTheQ15()
{
    int x = 4, y = 0;
    while (x >= 0)
    {
        x--;
        y++;
        if (x == y)
        {
            printf("\n Continue: %d %d\n", x, y);
            continue;
        }
        else
        {
            printf("%d %d\n", x, y);
        }
    }
}
int PredictTheQ16()
{
    int x = 4, y = 0;
    while (x >= 0)
    {
        if (x == y)
        {
            printf("\n Break: %d %d\n", x, y);
            break;
        }
        else
        {
            printf("\n%d %d", x, y);
            x--;
            y++;
        }
    }
    return 0;
}
int DoWhileLoop()
{
    int i = 10, j = 10;
    while (i < 10)
    { // Here while loop never print
        printf("Hello %d While Loop\n", i);
        i++;
    }
    do
    { // Do while at least once run before checking condition
        printf("Hello %d Do While Loop", j);
        j++;
    } while (j < 10);
    return 0;
}
int DOWhileCountDigits()
{
    int num, count = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    while (num != 0)
    {
        num = num / 10;
        count++;
    }
    printf("The No. of digits : %d", count);
    return 0;
}
int SumOfAllDigits()
{
    int num, sum = 0, lastDigits = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    while (num != 0)
    {
        lastDigits = num % 10;
        sum = sum + lastDigits;
        num = num / 10;
    }
    printf("%d", sum);
}
int SumOfEvenDigits()
{
    int num, sum = 0, lastDigits = 0, sumodd = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    while (num != 0)
    {
        lastDigits = num % 10;
        if (lastDigits % 2 == 0)
        {
            sum = sum + lastDigits;
        }
        else
        {
            sumodd = sumodd + lastDigits;
        }
        num = num / 10;
    }
    printf("The total sum of even No.: %d", sum);
    printf("\nThe total sum of odd No.: %d", sumodd);
}
int ReverseTheNumber()
{
    int num, r = 0;
    printf("Enter a Nuumber: ");
    scanf("%d", &num);
    while (num > 0)
    {
        r = r * 10;
        r = r + (num % 10);
        num = num / 10;
    }
    printf("Revers Number is: %d", r);
}
int Factorial()
{
    int num, fact = 1;
    // 5! = 1x2x3x4x5
    printf("Enter a number: ");
    scanf("%d", &num);
    for (int i = 1; i <= num; i++)
    {
        fact = fact * i;
        printf("\nThe factorial %d is: %d", i, fact);
    }
    return 0;
}
int fibonacci()
{
    int n, a = 1, b = 1, i, sum = 1;
    // 1 1 2 3 5 8 13 21 34 .... n term
    printf("Enter a range fibonacci number: ");
    scanf("%d", &n);
    for (i = 1; i <= n - 2; i++)
    {
        sum = a + b;
        a = b;
        b = sum;
    }
    printf("\nThe Fibonacci %dth is: %d", n, sum);
    return 0;
}
int PowerOfNumber()
{
    int power = 1, a, b, i;
    printf("Enter a base number: ");
    scanf("%d", &a);
    printf("Enter the power number: ");
    scanf("%d", &b);
    for (i = 1; i <= b; i++)
    {
        power = power * a;
    }
    printf("%d is power of %d is: %d", a, b, power);
    return 0;
}
char CapitalAlphabet()
{
    char a;
    for (int i = 65; i <= 90; i++)
    {
        a = (char)i;
        printf("\n%c is: %d", a, i);
    }
    return 0;
}
int ArmstrongNumber()
{
    int a, b, c, x, y, d, e, f;
    printf("Enter 4 digit number: ");
    scanf("%d", &x);
    a = x % 10;
    y = x / 10;
    b = y % 10;
    c = y / 10;
    e = c % 10;
    f = c / 10;
    printf("a: %d \ny: %d \nb: %d \nc: %d \ne: %d \nf: %d\n", a, y, b, c, e, f);
    d = (a * a * a) + (b * b * b) + (e * e * e) + (f * f * f);
    if (d == x)
    {
        printf("It is Armstrong: %d\n", x);
    }
    else
    {
        printf("It is not Armstrong: %d\nTotal sum is: %d\n", x, d);
    }
    return 0;
}

void main()
{
    ArmstrongNumber();
}