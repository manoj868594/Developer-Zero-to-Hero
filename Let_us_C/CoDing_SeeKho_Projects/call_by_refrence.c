void main()
{
    int z = 5;
    amit(z);
    amit1(&z);
    printf("z: %d\n", z);
    printf("&z: %d\n", &z); //6422044
}
amit(int y)
{
    printf("y: %d\n", y);
    printf("&y: %d\n", &y); //6422000 6421980
    y = 7;
    printf("y2: %d\n", y);
}
amit1(int *x) //This is call by reference
{
    printf("x: %d\n", x);
    printf("&x: %d\n", &x); //6422000 6421980
    printf("*x: %d\n", *x);
    *x = 7;
    printf("*x: %d\n", *x);
}
