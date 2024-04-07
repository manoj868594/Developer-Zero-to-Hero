void main()
{
    int a,c,d=0;
    printf("Enter numbers: ");
    scanf("%d",&a);
    while(a!=0)
    {
        c=a%10;
        d= d+c;
        a=a/10;
    }
    printf("Sum of digit is: %d",d);
}
