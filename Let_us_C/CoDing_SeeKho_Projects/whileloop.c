void main()
{
    int a=6;
    while(a>0)
    {
        printf("Main%d ",a);
        a=a-2;
    }
//    loop2();
    loop3();
}
int loop2()
{
    int a=10;
    while(a>0)
    {
        printf("Loop%d ",a);
        a--;
        a=a-1;
    }
}
int loop3()
{
    int a=1;
    while(a!=10)
    {
        printf("loop%d ",a);
        a=a+2; // infinit looping
        a++;
    }
}
