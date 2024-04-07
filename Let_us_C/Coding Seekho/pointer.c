void main()
{
    int x,*y,**z;
    y = &x; // & symbal represent is address
    printf("Enter the X number: ");
    scanf("%d", &x);
    printf("x: %d\n", x); // output is given input
    printf("&x: %d\n", &x); // o/p is the address of x
    printf("&y: %d\n", &y); // o/p is the address of y
    printf("*y: %u\n", *y); // Here %u is unsigned integers
    printf("*(&y): %u\n", *(&y));
    printf("y: %d\n", y); // Pointer to an integer

    z = &y;
    printf("z: %d\n", z); // Double pointer to an integer
    printf("**z: %d", **z);

    abc();
    getch();
}
abc()
{
    int *x,*y,**z;
    x=5;
    y=&x;
    z=&y;
    printf("%u %u %u\n", x, y, z);
    printf("&x: %d\n", &x);
    printf("&y: %u\n", &y);
    printf("&z: %u\n", &z);
    printf("*y: %u\n",*y);
    printf("**z: %u\n",**z);
    printf("*(&y): %u\n", *(&y));
    printf("*(&z)%u", *(&z));
}
