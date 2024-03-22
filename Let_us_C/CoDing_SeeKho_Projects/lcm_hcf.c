void main ()
{
    //LCM_num();
    HCF_num();
}
HCF_num()
{
    int x,y,i;
    printf("Enter 2 number ");
    scanf("%d%d",&x,&y);
    for(i=x<y?x:y;i>0;i--)
    {
        if(x%i==0 && y%i==0)
        {
            printf("GCD is %d",i);
            break;
        }
    }
}
int LCM_num()
{
    int x,y,i;
    printf("Enter 2 number ");
    scanf("%d%d",&x,&y);
    for(i=x>y?x:y;i<=x*y;i++)
    {
        if(i%x==0 && i%y==0)
        {
            printf("LCM is: %d",i);
            break;
        }
    }
}
