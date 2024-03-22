void main()
{
//    relational_op();
//    arithmetic_op();

    getch();
}
int arithmetic_op()
{
    int a,b,add,sub,mul,div,rem;
    printf("Enter first number: ");
    scanf("%d",&a);
    printf("Enter second number: ");
    scanf("%d",&b);
    add=a+b;
    printf("\nValue Addition is: %d",add);
    sub=a-b;
    printf("\nValue Substract is: %d",sub);
    mul=a*b;
    printf("\nValue Multiplication is: %d",mul);
    div=a/b;
    printf("\nValue Divided is: %d",div);
    rem=a%b;
    printf("\nValue Modulus is: %d",rem);
}
int relational_op()
{
    // == , != , < , > , <= , >=
    int a,b;
    printf("Enter first number: ");
    scanf("%d",&a);
    printf("Enter second number: ");
    scanf("%d",&b);
    printf("\nGreater than check a==b: %d",a==b);
    printf("\nNot Equal to check a!=b: %d",a!=b);
    printf("\nLess than to check a<b: %d",a<b);
    printf("\nGreater than to check a>b: %d",a>b);
    printf("\nLess than or equal to check a<=b: %d",a<=b);
    printf("\nGreater than or equal to check a>=b: %d",a>=b);

    getch();
}
