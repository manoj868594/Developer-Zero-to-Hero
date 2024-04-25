#include<stdio.h>
int factorial(int n){
    if(n==0 || n==0) return 1;
    int recursion = n*factorial(n-1);
    return recursion;
}
void greeting(int n){
    if(n==0) return;
    printf("Good Morning\n");
    greeting(n-1);
    return;
}
void sum(int n, int s){
    if(n==0){
        printf("%d",s);
        return;
    }
    sum(n-1,s+n);
    return;
}
int returnType(int n){
    if(n==1 || n==0) return n;
    int returT = n+returnType(n-1);
    return returT;
}
int power(int a, int b){
    if(b==0) return 1;
    int po = a*power(a,b-1);
    return po;
}
int fibonacci(int n){
    if(n==1 || n==2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
int stair(int n){
    if(n<=2) return n;
    return stair(n-1) + stair(n-2);
}
int powerlog(int a, int b){
    if(b==0) return 1;
    int x = powerlog(a,b/2);
    if(b%2==0) return x*x;
    else return x*x*a;
}
// 2:30:00 video 6 

int main(){
    
    int a = 2, b = 5;
    int p = powerlog(a,b);
    printf("%d raised to the power %d is %d",a,b,p);
    /*

    int n;
    printf("Enter a number: ");
    scanf("%d",&n);
    int ways = stair(n);
    printf("%d",ways);

    int n = 4;
    printf("%d",fibonacci(n));

    int a,b;
    printf("Enter base number: ");
    scanf("%d",&a);
    printf("Enter power number: ");
    scanf("%d",&b);
    int p = power(a,b);
    printf("%d raised to the power %d is %d",a,b,p);

    int n = 4;
    int rt = returnType(n);
    printf("%d",rt);
    
    int n;
    printf("Enter a number: ");
    scanf("%d",&n);
    sum(n,0);
    
    int n;
    printf("Enter a number: ");
    scanf("%d",&n);
    greeting(n);

    int n = 5;
    int fact = factorial(n);
    printf("%d",fact);
    */
    return 0;
}