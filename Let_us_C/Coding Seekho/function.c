//int z; // function के बाहर  Global Variable कहते हैं
main() // Pre-defined function
{
    int z,y,add,first,sec; // function के अन्दर Local Variable कहते हैं

    printf("Enter the z value: ");
    scanf("%d", &z); //scanf() Pre-defined function
    printf("value is z: %d\n", z); // printf() Pre-defined function
    printf("address is z: %d\n", &z);

    printf("Enter the first number: ");
    scanf("%d", &first);
    printf("Enter the second number: ");
    scanf("%d", &sec);
    add=addition(first,sec);
    printf("First and Second number addition is: %d\n", add);
    printf("First and Second number Address is: %d\n", &add);

    hello(y); // function calling, actual arguments
    printf("address is y: %d\n", &y); // address print
    //addressdefine();
    //added();
    getch(); // getch() Pre-defined function
}
void hello(int y) //hello is User defined function // y,z is formal arguments
{
    printf("Enter the y value: ");
    scanf("%i", &y);
    printf("value of y: %d\n", y); // value print
}
void addition(int a,int b)
{
    int add;
    add = a+b;
    return add;
}
void addressdefine()
{
    int e,f;
    char g,h;
    float i,j;
    printf("%i %i %u %u %u %u\n", &e, &f, &g, &h, &i, &j);
}
void added()
{
    int a=10,b,c;
    printf("A value is: %d\n", a);
    printf("B value is: ");
    scanf("%d", &b);
    c = a+b;
    printf("C value a+b is: %d\n", c);
}
