#include <stdio.h> // Header files
#include <string.h>

int Backslash_n()
{
    printf("nn\n\nnn\n"); // \n is for new line and non printable character
    printf("nn/n/nnn/n"); // /n printable character
    printf("   Manoj");   // three spaces also print
}
int Variables()
{
    int x;  // x is varibles and this is declaration
    x = 5;  // value initilize
    x = 10; // value initilize
    printf("%d\n", x);
    printf("x\n"); // here x is character
    x = x + 5;
    printf("%d\n", x);
}
int arithmeticOperator()
{
    int x = 5, y = 7;
    float a = 5, b = 2, c;
    c = a / b;
    // printf("x+y: %d",x+y);
    // printf(" x-y: %d",x-y);
    // printf(" x*y: %d",x*y);
    // printf(" x/y: %d",x/y);
    // printf(" x%y: %d",x%y);

    // printf("\na/b: %f",c);
    // printf("\n5.0/2 %f",5.0/2);
    // printf("\n5/2.0 %f",5/2.0);
    // printf("\n5.0/2.0 %f",5.0/2.0);
    // printf("\n%f",5/2); //got error integer error
    // printf("\n5/2 %d",5/2); // correct integer
}
float VolumeOfSphere()
{
    float pi = 3.1415, result;
    int r;
    printf("Enter Volume of a sphere: ");
    scanf("%d", &r);
    result = 4 * pi * r * r * r / 3;
    printf("Your Result is: %f", result);
}
float SimpleInterest()
{
    float p, r, t, si; // Simple_Interest = principle * rate * time / 100
    p = 120;
    r = 10;
    t = 2;
    si = p * r * t / 100;
    printf("%f", si);
}
float AreaOfCircleInput()
{
    float radius, pi = 3.1415, area;
    printf("Enter Radius number: ");
    scanf("%f", &radius);
    area = pi * radius * radius;
    printf("The area of Circle; %f", area);
}
int Remainder()
{
    int a, b, q, r;
    printf("Enter Dividend: ");
    scanf("%d", &a);
    printf("Enter Divisor: ");
    scanf("%d", &b);
    q = a / b; // a > b
    r = a - b * q;
    printf("The Remainder when %d is dividend by %d is: Q: %d, R: %d\n", a, b, q, r);
    /*  Practice set
        a = -7 , b = 3 , q = -2 , r = -1
        a = 7 , b = -3 , q = -2 , r = 1
        a = 3 , b = -7 , q = 0 , r = 3
        a = -3 , b = 7 , q = 0 , r = -3
    */
}
float Fractional()
{
    float first, sec;
    int third;
    printf("Enter Yur Real Number: ");
    scanf("%f", &first);
    third = first;
    sec = first - third;
    printf("Your Fractional number is: %f", sec);
    return 0;
}
int Hierarchy()
{
    int i = 2 * 3 / 4 + 4 / 4 + 8 - 2 + 5 / 8; // BODMAS = B , O , D/M , A/S
    int a = 2, b = 3, c, d;
    float e, f;
    float Decimal = 22.3 / 7; // float 6 decimal digits output
    // printf("%d",i);
    c = a / b * b;
    d = b / a * a;
    e = a / b * b;
    f = b / a * a;
    printf("c: %d d: %d e: %f f: %f", c, d, e, f);
    printf("%f", Decimal);
    return 0;
}
char CharacterBasic()
{
    char ch1 = 'a';
    char ch[20] = {'C', ' ', 'L', 'A', 'N', 'G', 'U', 'A', 'G', 'E'};
    printf("%c", ch1); // %c store single character or in word last character in one word
    printf("\n%s", ch);
}
void ASCIIValue()
{
    char chA = 'A', chZ = 'Z';
    char cha = 'a', chz = 'z';
    printf("A: %d, Z: %d, a: %d, z: %d", chA, chZ, cha, chz);
}
int Modulus()
{
    int x = 4 + 2 % -8;
    int d = 4 + 2 / -8;
    float f = 2 / 7.0;
    printf("%d %d %f", x, d, f);
}

void main(){
    Modulus();
}