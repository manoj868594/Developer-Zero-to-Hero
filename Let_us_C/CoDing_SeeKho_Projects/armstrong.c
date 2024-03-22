void main()
{

    int a,b,c,x,y,d;
    printf("Armstrong Number is: 407, 153, 370, 371 \n");
    printf("Enter number: ");
    scanf("%d",&x);

    a=x%10;
    y=x/10;
    b=y%10;
    c=y/10;

    d=(a*a*a)+(b*b*b)+(c*c*c);

    if(d==x)
    {
        printf("It is Armstrong: %d\n",x);
    }
    else
    {
        printf("It is not Armstrong: %d\n",x);
    }
    getch();
}
