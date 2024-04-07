int i,j,plus;
void main()
{
    for(i=0; i<10; i++)
    {
        printf("Outer Loop I %d ",i);
        for(int j=1; j<8; j++)
        {
            printf("Inner Loop J %d ", j);
        }
    }
    forloop();
    subforloop();
    printf("Bye!");

    getch();
}
int forloop()
{
    printf("Enter new number ");
    scanf("%d",&j);
    for(i=j; i<10; i++)
    {
        printf("Print by User Loop %d\n", i);
    }
    for(i=j; i>10; i--)
    {
        printf("Print by user Other %d\n",i);
    }
}
int subforloop()
{
    for(i=-1; i>-10; i--)
    {
        printf("Outer Loop I %d ",i);
        for(int j=-7; j<0; j++)
        {
            printf("Inner Loop J %d ", j);
        }
        for(int j=-7; j<0; j++)
        {
            plus++;
            printf("Inner Loop J %d ", j);
        }
    }
    printf("%d",plus);
}
