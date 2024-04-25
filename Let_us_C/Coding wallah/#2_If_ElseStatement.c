#include <stdio.h> // Header files
#include <string.h>

int OddEven()
{
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    if (n % 2 == 0)
    {
        printf("%d is Even.", n);
    }
    else
    {
        printf("%d is Odd.", n);
    }
}
int LeapYear()
{
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    if (n % 4 == 0)
    {
        printf("%d is Leap Year.", n);
    }
    else
    {
        printf("%d is not Leap Year.", n);
    }
}
int AbsoluteNumber()
{
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    if (n < 0)
    {
        n = n * (-1);
    }
    printf("Absolute Number is: %d", n);
}
int SPCP()
{
    int sp, cp;
    printf("Enter selling price: ");
    scanf("%d", &sp);
    printf("Enter cost price: ");
    scanf("%d", &cp);
    if (sp > cp)
    {
        printf("Your Profit is: %d", sp - cp);
    }
    if (cp > sp)
    {
        printf("Your Loss is: %d", cp - sp);
    }
    if (sp == cp)
    {
        printf("Your Price is same");
    }
}
int RectangleArea()
{
    int length, width, parameter, area;
    printf("Enter the length and width of rectangle: ");
    scanf("%d %d", &length, &width);
    area = length * width;
    parameter = 2 * (length + width);
    if (area > parameter)
    {
        printf("Area(%d) is greater than parameter(%d)", area, parameter);
    }
    if (area < parameter)
    {
        printf("Area(%d) less than parameter(%d)", area, parameter);
    }
    if (area == parameter)
    {
        printf("Area(%d) equal is parameter(%d)", area, parameter);
    }
    return 0;
}
int MultipleCondition()
{
    int n;
    printf("Enter three digit number: ");
    scanf("%d", &n);
    if (n > 99 && n < 1000)
    {
        printf("%d is three digit number.", n);
    }
    else
    {
        printf("%d is not three digit number.", n);
    }
}
int ConditionDivisible()
{
    int n;
    printf("Enter three digit number: ");
    scanf("%d", &n);
    if (n % 5 == 0 && n % 3 == 0)
    {
        printf("%d is divisible by 5 and 3", n);
    }
    else
    {
        printf("%d is not divisible by 5 and 3", n);
    }
    return 0;
}
int ConditionGreatest()
{
    int a, b, c;
    printf("Enter three number: ");
    scanf("%d %d %d", &a, &b, &c);
    if (a > b && a > c)
    {
        printf("%d is greatest", a);
    }
    if (b > a && b > c)
    {
        printf("%d is greatest", b);
    }
    if (c > a && c > b)
    {
        printf("%d is greatest", c);
    }
}
int SidesOfTriangle()
{
    int a, b, c;
    printf("Enter three number: ");
    scanf("%d %d %d", &a, &b, &c);
    if ((a + b) > c && (b + c) > c && (a + c) > c)
    {
        printf("Valid Triangle");
    }
    else
    {
        printf("Invalid Triangle");
    }
}
int NestedIfElseDivisible()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    if (num < 0)
    {
        num = num * (-1);
    }
    if (num % 5 == 0)
    {
        if (num % 3 == 0)
        {
            printf("%d is divisible by 5 and 3", num);
        }
        else
        {
            printf("%d is not divisible by 3", num);
        }
    }
    else
    {
        printf("%d is not divisible by 5", num);
    }
}
int NestedIfElse2()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    // First Method
    /*
    if(num % 5 == 0 || num % 3 == 0 ){
        if(num % 15 != 0){
            printf("%d is divisible by 5 or 3 but not 15",num);
        }else{
            printf("%d is divisible by 15",num);
        }
    }else{
        printf("%d is not divisible by 5 or 3",num);
    }
    */
    // Second Method
    if ((num % 5 == 0 || num % 3 == 0) && num % 15 == 0)
    {
        printf("%d is divisible by 5 or 3 but not 15", num);
    }
    else
    {
        printf("%d is not matching the required condition", num);
    }
}
int NestedIfElseGreatest()
{
    int a, b, c;
    printf("Enter three number: ");
    scanf("%d%d%d", &a, &b, &c);
    if (a > b)
    {
        if (a > c)
        {
            printf("%d is greatest", a);
        }
        else
        {
            printf("%d is greatest", c);
        }
    }
    else
    {
        if (b > c)
        {
            printf("%d is greatest", b);
        }
        else
        {
            printf("%d is greatest", c);
        }
    }
}
int NestedIfElseAge()
{
    int Ram, Shyam, Ajay;
    printf("Enter age of Ram, Shyam, Ajay");
    scanf("%d%d%d", &Ram, &Shyam, &Ajay);
    if (Ram < Shyam)
    {
        if (Ram < Ajay)
        {
            printf("Ram is youngest");
        }
        else
        {
            printf("Ajay is youngest");
        }
    }
    else
    {
        if (Shyam < Ajay)
        {
            printf("Shyam is youngest");
        }
        else
        {
            printf("Ajay is youngest");
        }
    }
}
int MarksElseIf()
{
    int marks;
    printf("Enter marks: ");
    scanf("%d", &marks);
    if (marks >= 80)
    { // more than 80 -> A
        printf("A grade\n");
    }
    else if (marks >= 60)
    { // more than 60 -> B
        printf("B grade\n");
    }
    else if (marks >= 40)
    { // more than 40 -> C
        printf("C grade\n");
    }
    else
    { // Less than 40 -> D
        printf("D grade\n");
    }
    return 0;
}
int SlopePoint()
{
    double a1 = 3, b1 = 3;
    double a2 = 4, b2 = 4;
    double a3 = 5, b3 = 5;
    double m1, m2;
    m1 = (a2 - a1) / (b2 - b1);
    m2 = (a3 - a2) / (b3 - b2);
    printf("%lf\n%lf\n", m1, m2);
    if (m1 = m2)
    {
        printf("Straight line");
    }
    else
    {
        printf("Wrong");
    }
}
int PointLocation()
{
    int x, y;
    printf("Enter the coordinates: ");
    scanf("%d%d", &x, &y);
    if (x == 0 && y == 0)
    {
        printf("The point is origin");
    }
    else if (x == 0)
    {
        printf("Lies on Y-axis");
    }
    else if (y == 0)
    {
        printf("Lies on X-axis");
    }
    else
    {
        printf("The point does not lies on x or y axis");
    }
}
int TernaryOperator()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    // ternary operator
    //  exp1 ? exp2 : exp3
    num < 0 ? printf("%d is negative", num) : printf("%d is positive", num);

    // if(num < 0){
    //     printf("%d is negative",num);
    // }else{
    //     printf("%d is positive",num);
    // }
}
int PredictTheQ1()
{
    int x = 5, y = 7;
    if (x == 5)
    {
        printf("\n%d", x);
    }
    else
        ;
    printf("\n%d", y);
}
int PredictTheQ2()
{
    int x = 5;
    float y = 5.00;
    if (y == x)
    { // condition is true
        printf("Equal Number %d %f", x, y);
    }
    else
    {
        printf("Not Equal %d %f", x, y);
    }
}
int PredictTheQ3()
{
    int x = 3, y, z = 4;
    y = x = 10;                                   // assign value
    z = x < 11;                                   // condition check
    printf("y=%d x=%d z=%d", y, x, z);            // y=10 x=10 z=1
    printf("\ny=%d x=%d z=%d", y, x = 11, z = 6); // y=10 x=11 z=6
    printf("\ny=%d x=%d z=%d", y, x == 11, z);    // y=10 x=1 z=6
}
int PredictTheQ4()
{
    int k = 35, l = 35, x = 15;
    printf("%d %d %d %d", k == 35, k = 50, k > 40, k); // 0 50 0 50
    printf("\n%d %d", l == 35, l);
    printf("\n%d %d %d", l = 40, l > 35, l);
    printf("\n%d %d %d", x != 15, x = 20, x < 30);
}
int PredictTheQ5()
{
    int i = 65;
    char A = 'A';
    if (i == A)
    {
        printf("C is Wow %d %d", i, A);
    }
    else
    {
        printf("C is headache");
    }
}
int PredictTheQ6()
{
    int a;
    char ch = 'a';
    if (3 + 2 % 5 == 5)
    { // 5 change other number
        printf("This works");
    }
    if (a = 10)
    { // assinging
        printf("\nEven This work");
    }
    if (1)
    { // number check by 0(zero) and 1
        printf("\nNumber Zero");
    }
    if (ch == 97)
    { // check for change any number
        printf("\nCharacter Value\n");
    }
}

void main(){
    PredictTheQ6();
}