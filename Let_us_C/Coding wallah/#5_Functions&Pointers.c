#include<stdio.h> // header files
#include<math.h>

void greet(){ 
    printf("Good Morning\n");
    printf("How are u ?\n");
}
void australia(){
    printf("Australia\n");
    return;
}
void india(){
    printf("India\n");
    australia(); //calling australia
    return;
}
void Nepal(){
    printf("Nepal\n");
    india(); // calling india
    return;
}
int add(int x, int y){
    return x+y;
}
int factorial(int x){
    int fact = 1;
    for(int i=2;i<=x;i++){
        fact = fact*i;
    }
    return fact;
}
int combination(int x, int y){ // Pass by value
    return x+y;
}
int minimum(int a, int b){
    if(a<b) return a;
    else return b;
}
int gcd(int a, int b){
    int hcf;
    for(int i=minimum(a,b); i>=1;i--){
        if(a%i==0 && b%i==0){
            hcf = i;
            break;
        }
    }
    return hcf;
}
int main(){ // should have return type

    int a = 6, b = 9;
    int hcf = gcd(a,b);
    printf("The HCF of %d and %d is: %d",a,b,hcf);

/*
    int a = 5, *c = &a;
    int b = 5;
    int* x = &a; // for store address of a
    printf("%p",&a); //p se address print
    printf("\n%d",&b);
    printf("\n%p",x);
    printf("\n c is: %d",*c);

    int a=3,b=5;
    a = a+b;
    b = a-b;
    a = a-b;
    printf("%d %d",a,b);

    int i,j,n = 6,icj,k;
    for(i=0;i<=n;i++){
        for(k=1;k<=n-i;k++){
            printf("  ");
        }
        for(j=0;j<=i;j++){
            icj = factorial(i)/(factorial(j)*factorial(i-j));        
            printf("%d ",icj);
            if(i>=1) printf("  ");
        }
        printf("\n");
    }

    int n  = 7, r = 3;  // n!/(r!*(n-r)!) #6
    int ncr = factorial(n)/(factorial(r)*factorial(n-r));
    printf("%d",ncr);

    void fun(); // function prototype #5
    fun();

    int root = sqrt(49); // include in math.h #4
    int q = pow(2,5); // include in math.h
    printf("The square root is: %d",root);
    printf("\n%d",q); 

    int a,b;
    printf("Enter 2 add number: ");
    scanf("%d%d",&a,&b);
    int sum = add(a,b); #3
    printf("%d",sum);

    Nepal(); // calling a function #2

    greet(); // function calling
    greet(); // #1
*/
    return 0;
}
void fun(){ // if function use after main
    printf("Function Prototype");
}