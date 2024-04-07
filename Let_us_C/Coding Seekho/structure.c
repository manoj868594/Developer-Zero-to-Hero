struct student
{
    int roll; //4
    char name; //1
    float per; //4
    int marks;
};

void main()
{
    //struct student s1;
    //printf("%d",sizeof(s1));
    size_of();


    getch();
}
void size_of()
{
    char a;
    int b;
    float c;
    int d;
    char e[2];
    printf("%d %d %d %d %d",sizeof(a),sizeof(b),sizeof(c),sizeof(d),sizeof(e));

}
