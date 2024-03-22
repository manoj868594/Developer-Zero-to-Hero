#include <stdio.h>  // Standard Input/Output functions
int main()
{

    int a,b;
    printf("Press 1, Table Number  \nPress 2, Amrstrong_while_loop \nPress 3, Armstrong_while \nPress 4, Marks_Arrays \nPress 5, ArmStrong  \nPress 6, ASCII \nPress 7, Call_by_refrence  \nPress 8, dowhile_loop \nPress 9, Even_odd  \nPress 10, Factorial \nPress 11, Fibonacci  \nPress 12, for_loop1 \nPress 13, for_usr_loop   \nPress 14, for_loop3 \nPress 15, function  \nPress 16, added \nPress 17, address_define   \nPress 18, Header_Files \nPress 19, if_else   \nPress 20, HCF_Num \nPress 21, LCM_Num   \nPress 22, Matrix_Solution \nPress 23, Max_three_Num  \nPress 24, Palindrome_Num \nPress 25, Power_Num  \nPress 26, Reverse_Num \nPress 27, Interest_Rate  \nPress 28, ");
    printf("\nEnter Press number: ");
    scanf("%d",&a);
    switch(a)
    {
    case 1:
    {
        printf("Press 1, Table Range Number \nPress 2, Table Array");
        printf("\nEnter Press number: ");
        scanf("%d",&b);
        switch(b)
        {
        case 1:
        {
            TableRangeArray();
            break;
        }
        case 2:
        {
            table_array();
            break;
        }
        }
        break;
    }
    case 2:
    {
        amrstrong_while_loop();
        break;
    }
    case 3:
    {
        armstrong_while();
        break;
    }
    case 4:
    {
        Marks_Arrays();
        break;
    }
    case 5:
    {
        armstrong();
        break;
    }
    case 6:
    {
        ascii();
        break;
    }
    case 7:
    {
        call_by_refrence();
        break;
    }
    case 8:
    {
        dowhile_loop();
        break;
    }
    case 9:
    {
        even_odd();
        break;
    }
    case 10:
    {
        factorial();
        break;
    }
    case 11:
    {
        fibonacci();
        break;
    }
    case 12:
    {
        for_loop1();
        break;
    }
    case 13:
    {
        for_loop2();
        break;
    }
    case 14:
    {
        for_loop3();
        break;
    }
    case 15:
    {
        function();
        break;
    }
    case 16:
    {
        added();
        break;
    }
    case 17:
    {
        address_define();
        break;
    }
    case 18:
    {
        header_files();
        break;
    }
    case 19:
    {
        if_else();
        break;
    }
    case 20:
    {
        HCF_num();
        break;
    }
    case 21:
    {
        LCM_num();
        break;
    }
    case 22:
    {
        matrix_sol();
        break;
    }
    case 23:
    {
        max_three_num();
        break;
    }
    case 24:
    {
        palindrome_num();
        break;
    }
    case 25:
    {
        power_num();
        break;
    }
    case 26:
    {
        reverse_num();
        break;
    }
    case 27:
    {
        Interest_Rate();
        break;
    }
    case 28:
    {
        abc();
        break;
    }
    case 29:
        {
            break;
        }
    }

    //getch(); // getch() Pre-defined function
}
void Operators()
{
    int operat
    char ch;
    float num1,num2,result=0;
    printf("\nEnter the operation to perform: ");
    scanf("%c",&ch);
    printf("Enter the numbers: ");
    scanf("%f%f",&num1,&num2);
    switch(operat)
    {
    case '+':
        resilt = num1+num2;
        break

    }
}
void reverse_num()
{
    int a,b,c=0;
    printf("Enter numbers: ");
    scanf("%u",&a);
    while(a!=0)
    {
        b=a%10;
        c=(c*10)+b;
        a=a/10;
    }
    printf("Reverse Number is: %u",c);
}
void power_num()
{
    int a,b,c=1,i;
    printf("Enter a coefficient: ");
    scanf("%d", &a);
    printf("Enter a power number: ");
    scanf("%d", &b);

    for(i=1; i<=b; i++)
    {
        c=c*a;
    }
    printf("Result is: %d ",c);

}
void pointer()
{
    int x,*y,**z;
    y = &x; // & symbal represent is address
    printf("Enter the X number: ");
    scanf("%d", &x);
    printf("x: %d\n", x); // output is given input
    printf("&x: %d\n", &x); // o/p is the address of x
    printf("&y: %d\n", &y); // o/p is the address of y
    printf("*y: %u\n", *y); // Here %u is unsigned integers
    printf("*(&y): %u\n", *(&y));
    printf("y: %d\n", y); // Pointer to an integer

    z = &y;
    printf("z: %d\n", z); // Double pointer to an integer
    printf("**z: %d", **z);
}
void palindrome_num()
{
    int originalNum, num, reversNum=0, rem;
    printf("Enter numbers: ");
    scanf("%d",&originalNum);
    num=originalNum;
    while(num!=0)
    {
        rem= num%10;
        reversNum= reversNum*10+rem;
        num/=10;
    }
    if(originalNum==reversNum)
    {
        printf("This is Palindrone");
    }
    else
    {
        printf("Reverse Number is: %u",reversNum);
    }
}
void max_three_num()
{
    int a, b, c;
    printf("Enter the a number: ");
    scanf("%d", &a);
    printf("Enter the b number: ");
    scanf("%d", &b);
    printf("Enter the c number: ");
    scanf("%d", &c);
    if(a>b && a>c)
    {
        printf("%d is greater number: ", a);
    }
    else if(b>a && b>c)
    {
        printf("%d id greater number: ",b);
    }
    else if(c>a && c>b)
    {
        printf("%d id greater number: ",c);
    }
}
void matrix_sol()
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
HCF_num()
{
    int x,y,i;
    printf("Enter 2 number ");
    scanf("%d%d",&x,&y);
    for(i=x<y?x:y; i>0; i--)
    {
        if(x%i==0 && y%i==0)
        {
            printf("GCD is %d",i);
            break;
        }
    }
}
int LCM_num()
{
    int x,y,i;
    printf("Enter 2 number ");
    scanf("%d%d",&x,&y);
    for(i=x>y?x:y; i<=x*y; i++)
    {
        if(i%x==0 && i%y==0)
        {
            printf("LCM is: %d",i);
            break;
        }
    }
}
void if_else()
{
    int x,y;
    printf("Enter two number: ");
    scanf("%d %d", &x,&y);
    if(x>y)
    {
        printf("%d is Greater than %d : %d\n", x,y, x-y);
    }
    else if(x<y)
    {
        printf("%d is Greater than %d : %d\n", y,x,y-x);
    }
    else
    {
        printf("Both are equal\n");
    }
}
void header_files()
{
    // #include<manoj.txt>  // Custom Header file
#define pi 3.14
    int r,x;
    printf("Enter a number: ");
    scanf("%d", &r);
    printf("%f \n", pi*r*r ); // pi कि  value print होगी  3.14
    printf("Header Files\n");
}
void address_define()
{
    int e,f;
    char g,h;
    float i,j;
    printf("%i\n%i\n%u\n%u\n%u\n%u\n",&e,&f,&g,&h,&i,&j);
}
void added()
{
    int a=10,b,c;
    printf("A value is: %d\n", a);
    printf("B value is: ");
    scanf("%d", &b);
    c = a+b;
    printf("C value a+b is: %d\n", c);
}
//int z; // function के बाहर  Global Variable कहते हैं
void function() // Pre-defined function
{
    int z,y,add,first,sec; // function के अन्दर Local Variable कहते हैं
    printf("Enter the z value: ");
    scanf("%d", &z); //scanf() Pre-defined function
    printf("value is z: %d\n", z); // printf() Pre-defined function
    printf("address is z: %d\n", &z);

    printf("Enter the first number: ");
    scanf("%d", &first);
    printf("Enter the second number: ");
    scanf("%d", &sec);
    add=addition(first,sec);
    printf("First and Second number addition is: %d\n", add);
    printf("First and Second number Address is: %d\n", &add);

    hello(y); // function calling, actual arguments
    printf("address is y: %d\n", &y); // address print
}
void hello(int y) //hello is User defined function // y,z is formal arguments
{
    printf("Enter the y value: ");
    scanf("%i", &y);
    printf("value of y: %d\n", y); // value print
}
void addition(int a,int b)
{
    int add;
    add = a+b;
    return add;
}
int for_loop2()
{
    int i,j;
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
    printf("Bye!");
}
int for_loop3()
{
    int i,j,plus;
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
    printf("Bye!");
}
void for_loop1()
{
    int i,j;
    for(i=0; i<10; i++)
    {
        printf("Outer Loop I %d ",i);
        for(int j=1; j<8; j++)
        {
            printf("Inner Loop J %d ", j);
        }
    }
    printf("Bye!");
}



