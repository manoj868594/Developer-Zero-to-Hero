void main()
{
    int i,n;
    int a[10],j[10];
    for(i=0; i<7; i++)
    {
        a[i] = i+2;
        printf("%d ",a[i]);
    }
    printf("Enter A Number: ");
    scanf("%d",&n);
    for(i=1; i<=10; i++)
    {
        j[i] = n*i;
        printf("%d*%i %d \n", n, i, j[i]);
    }
}
