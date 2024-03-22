void main()
{
    int a, b, c;
    printf("Enter the a number: ");
    scanf("%d", &a);
    printf("Enter the b number: ");
    scanf("%d", &b);
    printf("Enter the c number: ");
    scanf("%d", &c);
    if(a>b && a>c)
    {
        printf("%d is greater number: ", a);
    }
    else if(b>a && b>c)
    {
        printf("%d id greater number: ",b);
    }
    else if(c>a && c>b)
    {
        printf("%d id greater number: ",c);
    }
}
