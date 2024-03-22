int x,y,z;
void main()
{

        int ch;
        printf("\nPress 1, Addition");
        printf("\nPress 2, Substraction");
        printf("\nPress 3, Multiplication");
        printf("\nPress 4, Exit");
        while(1)
    {
        printf("\nEnter Your choice: ");
        scanf("%d", &ch);
        switch(ch)
        {
        case 1:
        {
            add();
            break;
        }
        case 2:
        {
            sub();
            break;
        }
        case 3:
        {
            mul();
            break;
        }
        case 4:
        {
            exit(0);
        }
        default:
        {
            printf("Wrong Input");
        }
        }
    }
    getch();
}
int add()
{
    printf("Enter 2 numbers: ");
    scanf("%d %d", &x,&y);
    z=x+y;
    printf("Addition is %d",z);
}
int sub()
{
    printf("Enter 2 numbers: ");
    scanf("%d %d", &x,&y);
    z=x-y;
    printf("Substract is %d",z);
}
int mul()
{
    printf("Enter 2 numbers: ");
    scanf("%d %d", &x,&y);
    z=x*y;
    printf("Multiple is %d",z);
}
