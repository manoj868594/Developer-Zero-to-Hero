void main()
{
    int i;
    char a[] = {"amit"},e[]= {"Amit"};
    int x=strcmp(a,e); //check value is equal or not
    printf("%d ",x); //ascii code A=65, a=97
    strrev(a); //string reverse
    strlen(a); //for check string length
    strcpy(a, "Manoj "); //string copy
    strcat(a,"Kumar"); //concatination
    printf("%s",a);
    /*
    char b[] = {'a','m','r','i','t','\0'};
    char c[7] = {"Ashish"};
    char d[20];
    printf("Enter your name: ");
    scanf("%s",d);
    printf("%s %s %s %s ",a,b,c,d);

    for(i=0; d[i]!='\0'; i++); //if don't use strlen(); function
    printf("Length of %s: %d",d,i);
    */



    getch();
}
