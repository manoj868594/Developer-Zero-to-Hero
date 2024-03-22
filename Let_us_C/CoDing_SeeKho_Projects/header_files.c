// #include<manoj.txt>  // Custom Header file
#include <stdio.h>  // Standard Input/Output functions
#define pi 3.14
#define x 1 // value change 0 to 1 , 1 to 0

void main()
{
    int r;
    printf("Enter a number: ");
    scanf("%f", &r);
    printf("%f \n", pi*r*r ); // pi कि  value print होगी  3.14
    printf("Header Files\n");
    if(x){
    printf("Hello");}
    else{
    printf("Bye");}
    getch();
}
