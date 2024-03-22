void main()
{
    int a=1;
    printf("Using do-while loop:\n");
    do  // do while ek bar print hoga
    {
        printf("%d ",a);
        a++;
    }
    while(a<5);
    printf("\n");

    a = 0; // Reset count for the next example
    printf("Using while loop:\n");
    while(a<5)
    {
        printf("%d ",a);
        a++;
    }
    printf("\n");

    return 0;
}
