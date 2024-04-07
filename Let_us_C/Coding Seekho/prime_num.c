void main()
{
    isPrime();
    //even_num();
    //odd_num();
    getch();
}
int even_num()
{
    int i,a;
    printf("Enter a table number: ");
    scanf("%d",&a);
    if(a>0)
    {
        for(i=1; i<=10; i++)
        {
            printf("%d\n",a*i);
        }
    }
    else
    {
        printf("Enter wrong number: %d",a);
    }
}
int odd_num() {}
int isPrime()
{
    int i,x,k,c,y;
    printf("Enter number: ");
    scanf("%d",&k);
    for(x=1; x<=k; x++)
    {
        for(i=2; i<x; i++)
        {
            if(x%i==0)
            {
                break;
            }
        }
        if(i==x)
        {
            printf("%d  ",x);
            c++;
        }
    }
    printf("\n");
    printf("Total numbers are: %d\n",c);
}
