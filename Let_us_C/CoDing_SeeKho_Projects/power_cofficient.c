void main()
{
    int x,y,i,s=1;
    printf("Enter a coefficient: ");
    scanf("%d",&x);

    printf("Enter a power: ");
    scanf("%d",&y);

    for(i=1;i<=y;i++)
    {
        s=s*x;
    }
    printf("Result is %d",s);
}
