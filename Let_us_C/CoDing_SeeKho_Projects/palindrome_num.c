void main()
{
    int a,b,c=0,d,e;
    printf("Enter numbers: ");
    scanf("%d",&a);
    d=a;
    while(a!=0)
    {
        b=a%10;
        c=(c*10)+b;
        a=a/10;
    }
    if(c==d){
            printf("This is Palindrone");
    }else
    {
        printf("Reverse Number is: %u",c);
    }
    getch();
}
