void main() //matrix solution
{
    int row,col,m;
    printf("Enter a row: ");
    scanf("%d",&row);
    printf("Enter a column: ");
    scanf("%d",&col);
    m=row*col;
    printf("Type %d number\n",m);

    int i, j, a[10][10], b[10][10], c[10][10];

    printf("Enter 1st Matrix:");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            scanf("%d",&a[i][j]);
        }
    }
    printf("Enter 2nd Matrix:");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            scanf("%d",&b[i][j]);
        }
    }
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    printf("Addition 2 matrix is:\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            printf("%d ",c[i][j]);
        }
        printf("\n");
    }
}
