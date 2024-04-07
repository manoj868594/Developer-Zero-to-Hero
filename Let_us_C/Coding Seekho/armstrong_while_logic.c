void main()
{
    //arms();
    arms1();
}
int arms()
{
    int x,y,t,s=0,a,i;
    printf("Enter number: ");
    scanf("%d",&i);
    for(x=1; x<=i; x++)
    {
        s=0;
        y=x;
        while(y!=0)
        {
            t=y%10;
            s= s+(t*t*t);
            y=y/10;
        }
        if(x==s)
        {
            printf("It is Armstrong: %d\n",s);
        }
    }
}
void arms1()
{
    int x,y,t,s=0,a,i;
    printf("Armstrong Number is: 407, 153, 370, 371 \n");
    printf("Enter number: ");
    scanf("%d",&x);
        y=x;
        while(y!=0)
        {
            t=y%10;
            s= s+(t*t*t);
            y=y/10;
        }
        if(x==s)
        {
            printf("It is Armstrong: %d\n",s);
        }
        else
        {
            printf("It is Not Armstrong: %d\n",s);
        }
}
