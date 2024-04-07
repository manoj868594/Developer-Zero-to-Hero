void main()
{
    ifelse();
    int x;
    printf("Enter the number: ");
    scanf("%d", &x);

    if(x>0)
    {
        printf("It is Positive Number");
    }
    else if(x<0)
    {
        printf("It is Negative Number");
    }
    else
    {
        printf("Neither negative nor positive");
    }
    getch();
}

void ifelse()
{
    int x,y;
    printf("Enter the X number: ");
    scanf("%d", &x);
    printf("Enter the Y number: ");
    scanf("%d", &y);
    if(x>y)
    {
        printf("%d is greater %d : %d\n", x,y, x-y);
    }
    else if(x<y)
    {
        printf("%d is Greater %d : %d\n", y,x,y-x);
    }
    else if(x == y)
    {
        printf("Both are equal\n");
    }

}
