// Write a C program to search a number using linear search and create user defined function.

void LinearSearch(int a[],int r,int search)
{
    int k=0,i;
    for(i=0; i<r; i++)
    {
        if(a[i]==search)
        {
            printf("Number is found %d",search);
            k++;
            break;
        }
    }
    if(k==0)
    {
        printf("Number not found");
    }
}
void main()
{
    int a[100],i,search,k=0,r;
    printf("Enter a range num: ");
    scanf("%d",&r);
    printf("Enter %d numbers ",r);
    for(i=0; i<r; i++)
    {
        scanf("%d",&a[i]);
    }
    printf("Enter search number: ");
    scanf("%d",&search);

    LinearSearch(a,r,search);

    getch();
}
