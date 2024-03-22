
void main()
{
//    THis is recurtion function जब खुद को बार-बार call करता है उसे Recursion कहते है |
//    fact();
    //  sum();
    fact_without_recursion();

}
int fact_without_recursion()
{
    int n,i,s=1,d=0;
    printf("Enter a number: ");
    scanf("%d",&n);
    for(i=1; i<=n; i++)
    {
       s=s*i;
       d=d+i;
    }
    printf("Factorial is %d\n",s);
    printf("Sum is %d",d);
}
int sum()
{
    int r,num;
    printf("Enter a number: ");
    scanf("%d",&num);
    r=sum1(num);
    printf("Sum is %d",r);
}
int sum1(int n)
{
    if(n==1)
    {
        return 1;
    }
    else
    {
        return n+sum1(n-1);
    }
}
int fact()
{
    int r,num;
    printf("Enter a number: ");
    scanf("%d",&num);
    r=fact1(num);
    printf("Factorial is %d\n",r);
}
int fact1(int n)
{
    if(n==1)
    {
        return 1;
    }
    else
    {
        return n*fact1(n-1);
    }
}
