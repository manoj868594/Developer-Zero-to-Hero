void main()
{
    char ch;
    printf("Enter the alphabets: ");
    scanf("%c", &ch);

    if(ch=='a' ||ch=='i' ||ch=='e' ||ch=='o' ||ch=='u')
    {
        printf("%c is vowels",ch);
    }
    else
    {
        printf("%c is consonent",ch);
    }
}
