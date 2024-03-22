void main()
{
    int a,b,c=1,i;
    printf("Enter a coefficient: ");
    scanf("%d", &a);
    printf("Enter a power number: ");
    scanf("%d", &b);

    for(i=1;i<=b;i++)
    {
        c=c*a;
    }
        printf("Result is: %d ",c);


    getch();
}
