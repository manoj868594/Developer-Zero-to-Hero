int i;
void static_num()
{
    for(i=1;i<5;i++)
    {
    static int a=5;
    a=a-7;
    printf("%d",a+a);
    }
}
void auto_num()
{
    for(i=1;i<5;i++)
    {
    auto int a=5;
    a=a-7;
    printf("%d",a+a);
    }
}
void register_num()
{
    for(i=1;i<5;i++)
    {
    register int a=5;
    a=a-7;
    printf("%d",a+a);
    }
}
void extern_num()
{
    for(i=1;i<5;i++)
    {
    extern int a=5;
    a=a-7;
    printf("%d",a+a);
    }
}
void main()
{
    static_num();
    printf("\n");
    auto_num();
    printf("\n");
    register_num();
    printf("\n");
    extern_num

    getch();
}
