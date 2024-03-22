void main()
{
    char a[51],t;
    int i,l;
    //puts("Enter your name: ");
    //gets(a);
    printf("Enter your name: ");
    scanf("%s",a); //donot use & when print string
    l=strlen(a);
    for(i=0;i<l/2;i++)
    {
        t=a[i];
        a[i]=a[l-1-i];
        a[l-1-i]=t;
    }
    printf("Reverse Name is %s",a);

    getch();
}
