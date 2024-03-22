void main()
{
    int a,i,s=1;
    printf("Enter a number for factorial: ");
    scanf("%d", &a);

    for(i=1; i<=a; i++)
    {
        s=s*i;
    }
    printf("%d*%d: %d ",a,i,s);
}
