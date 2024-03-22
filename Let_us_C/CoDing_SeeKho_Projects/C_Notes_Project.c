#include <stdio.h>
//#include <conio.h>
void main()
{
    int choice,table_choice,ArmStrong,forloop,operator;
    printf("Press 1: Interest Rate  \nPress 2: ASCII Value \nPress 3: Number Table Array \nPress 4: Marks Array Calculation \nPress 5: Arm Strong \nPress 6:");
    printf("\nEnter Press number: ");
    scanf("%d",&choice);
    switch(choice)
    {
    case 1:
    {
        Interest_Rate();
        break;
    }
    case 2:
    {
        ASCII_Value();
        break;
    }
    case 3:
    {
        printf("Press 1: Table Range Number \nPress 2: Table Array \n\n");
        printf("Enter a Table number: ");
        scanf("%d",&table_choice);
        switch(table_choice)
        {
        case 1:
        {
            Table_Range_Num();
            break;
        }
        case 2:
        {
            Num_Table_Array();
            break;
        }
        default:
        {
            return 0;
        }
        }
    }
    case 4:
    {
        Marks_Arrays();
        break;
    }
    case 5:
    {
        printf("Press 1: Arm Strong While Loop Number \nPress 2: ArmStrong Loop \nPress 3: A ArmStrong Number\n");
        printf("Enter a Table number: ");
        scanf("%d",&ArmStrong);
        switch(ArmStrong)
        {
        case 1:
        {
            ArmStrong_While();
            break;
        }
        case 2:
        {
            AmrStrong_for_loop();
            break;
        }
        case 3:
        {
            Arm_Strong();
            break;
        }
        default:
        {
            return 0;
        }
        }
    }
    case 6:
    {
        dowhile_loop();
        break;
    }
    case 7:
    {
        even_odd();
        break;
    }
    case 8:
    {
        factorial();
        break;
    }
    case 9:
    {
        fibonacci();
        break;
    }
    case 10:
    {
        printf("Press 1: First For Loop \nPress 2: Second For Loop \nPress 3: Third For Loop \n");
        printf("Enter a number: ");
        scanf("%d",&forloop);
        switch(forloop)
        {
        case 1:
        {
            for_loop1();
            break;
        }
        case 2:
        {
            for_loop2();
            break;
        }
        case 3:
        {
            for_loop3();
            break;
        }
        }
    }
    case 11:
    {
        Operators();
        break;
    }
    case 12:
    {
        address_define();
        break;
    }
    }
    //getch(); // getch() Pre-defined function
}
void address_define()
{
    int e,f;
    char g,h;
    float i,j;
    printf("Difference of 4 for integer value \n%i\n%i\n",&e,&f);
    printf("Difference of 1 for char value \n%u\n%u\n",&g,&h);
    printf("Difference of 4 for float value \n%u\n%u\n",&i,&j);
}
void Interest_Rate()
{
    int p,n;
    float r,si;
    printf("Output for Interest rate\n");
    printf("Enter first number: ");
    scanf("%d", &p);
    printf("Enter second number: ");
    scanf("%d", &n);
    printf("Enter third real number: ");
    scanf("%f", &r);
    si=p*n*r/100;
    printf("%f\n",si);
}
void ASCII_Value()
{
    int i;
    for(i=1; i<=256; i++)
    {
        printf("%d = %c \n",i,i);
    }
}
void Num_Table_Array()
{
    int i,n;
    int j[10]; //Array
    printf("Enter A Number: ");
    scanf("%d",&n);
    for(i=1; i<=10; i++)
    {
        j[i] = n*i;
        printf("%d*%i %d \n", n, i, j[i]);
    }
}
void Table_Range_Num()
{
    int start,end;
    printf("Enter the starting range: ");
    scanf("%d",&start);
    printf("Enter the ending range: ");
    scanf("%d",&end);
    for(int i=start; i<=end; i++)
    {
        for(int j=1; j<=10; j++)
        {
            printf("%d * %d = %d",i,j,i*j);
            printf("\n");
        }
        printf("\n");
    }
}
void Marks_Arrays()
{
    float a[5],s=0, per ;
    int i,j[5];
    printf("Enter marks of 5 sub ");
    for(i=0; i<5; i++)
    {
        scanf("%f", &a[i]);
        j[i]=a[i];
    }
    for(i=0; i<5; i++)
    {
        s=s+a[i];
    }
    printf("Total Marks is %f\n",s);
    per = (s/500)*100;
    if(per<=100 && per>80 && a[0]>33 && a[1]>33
            && a[2]>33 && a[3]>33 && a[4]>33 && a[0]<=100 &&
            a[1]<=100 && a[2]<=100 && a[3]<=100 && a[4]<=100)
    {
        printf("Congratulations Distinct ");
        printf("%f\n", per);
    }
    else if(per<=80 && per>=70 && a[0]>33 && a[1]>33
            && a[2]>33 && a[3]>33 && a[4]>33 && a[0]<=100 &&
            a[1]<=100 && a[2]<=100 && a[3]<=100 && a[4]<=100)
    {
        printf("Perfect ");
        printf("%f \n", per);
    }
    else if(per<70 && per>=50 && a[0]>33 && a[1]>33
            && a[2]>33 && a[3]>33 && a[4]>33 && a[0]<=100 &&
            a[1]<=100 && a[2]<=100 && a[3]<=100 && a[4]<=100)
    {
        printf("Very Good ");
        printf("%f \n", per);
    }
    else if(per<50 && per>=40 && a[0]>33 && a[1]>33
            && a[2]>33 && a[3]>33 && a[4]>33 )
    {
        printf("Good ");
        printf("%f \n", per);
    }
    else if(per<40 && per>34 && a[0]>33 && a[1]>33 && a[2]>33 && a[3]>33 && a[4]>33 )
    {
        printf("Pass ");
        printf("%f \n", per);
    }
    else if(per>0 && per<27 || a[0]<33 || a[1]<33
            || a[2]<33 || a[3]<33 || a[4]<33 )
    {
        printf("Good Luck Next Time ");
        printf("%f \n", per);
    }
    else if(a[0]>100 || a[1]>100 || a[2]>100 || a[3]>100 || a[4]>100)
    {
        printf("Type wrong marks ");
        if(a[0]>100)
        {
            printf(" %f", a[0]);
        }
        else if(a[1]>100)
        {
            printf(" %f", a[1]);
        }
        else if(a[2]>100)
        {
            printf(" %f", a[2]);
        }
        else if(a[3]>100)
        {
            printf(" %f", a[3]);
        }
        else if(a[4]>100)
        {
            printf(" %f", a[4]);
        }
    }
    else
    {
        printf(" ");
    }

    printf("%d %d %d %d %d",j[0],j[1],j[2],j[3],j[4]);
}
void ArmStrong_While()
{
    int x,y,t,s=0,a,i;
    printf("Armstrong Number is: 407, 153, 370, 371 \n");
    printf("Enter number: ");
    scanf("%d",&x);
    y=x;
    while(y!=0)
    {
        t=y%10;
        s= s+(t*t*t);
        y=y/10;
    }
    if(x==s)
    {
        printf("It is Armstrong: %d\n",s);
    }
    else
    {
        printf("It is Not Armstrong: %d\n",s);
    }
}
void AmrStrong_for_loop()
{
    int x,y,t,s=0,a,i;
    printf("Armstrong Number is: 407, 153, 370, 371 \n");
    printf("Enter a range number: ");
    scanf("%d",&i);
    for(x=1; x<=i; x++)
    {
        s=0;
        y=x;
        while(y!=0)
        {
            t=y%10;
            s= s+(t*t*t);
            y=y/10;
        }
        if(x==s)
        {
            printf("It is Armstrong: %d\n",s);
        }
    }
}
void Arm_Strong()
{
    int a,b,c,x,y,d;
    printf("Armstrong Number is: 407, 153, 370, 371 \n");
    printf("Enter number: ");
    scanf("%d",&x);
    a=x%10;
    y=x/10;
    b=y%10;
    c=y/10;
    d=(a*a*a)+(b*b*b)+(c*c*c);
    if(d==x)
    {
        printf("It is Armstrong: %d\n",x);
    }
    else
    {
        printf("It is not Armstrong: %d\n",x);
    }
}
void dowhile_loop()
{
    int a=1;
    printf("Using 0-5 do-while loop:\n");
    do  // do while ek bar print hoga
    {
        printf("%d ",a);
        a++;
    }
    while(a<5);
    printf("\n");
    a = 0; // Reset count for the next example
    printf("Using 0-5 while loop:\n");
    while(a<5)
    {
        printf("%d ",a);
        a++;
    }
    printf("\n");
}
void even_odd()
{
    int a;
    printf("Enter a number: ");
    scanf("%d", &a);
    if(a%2 == 0)
    {
        printf("%d is Even.",a);
    }
    else
    {
        printf("%d is Odd.",a);
    }
}
void factorial()
{
    int a,i,s=1;
    printf("Enter a number for factorial: ");
    scanf("%d", &a);

    for(i=1; i<=a; i++)
    {
        s=s*i;
    }
    printf("%d*%d: %d ",a,i,s);
}
void fibonacci()
{
    int a,b=0,c=1,d,i;
    printf("Enter the number of range for the Fibonacci sequence: ");
    scanf("%d",&a);
    for(i=0; i<a; i++)
    {
        printf("%d ", d);
        d=b+c;
        b = c;
        c = d;
    }
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
int for_loop2()
{
    int i,j;
    printf("Enter new number ");
    scanf("%d",&j);
    for(i=j; i<10; i++)
    {
        printf("Print Increament Loop %d\n", i);
    }
    for(i=j; i>10; i--)
    {
        printf("Print Decreament Loop %d\n",i);
    }
    printf("Bye!");
}
int for_loop3()
{
    int i,j,plus;
    for(i=-1; i>-10; i--)
    {
        printf("\nOuter Loop I %d ",i);
        printf("\n");
        for(int j=-7; j<0; j++)
        {
            plus++;
            printf("Decreament Loop J %d ", j);
        }
    }
    printf("\n%d",plus);
    printf("\nBye!");
}
int Operators()
{
    int operator;
    printf("Press 1: Arithmetic Operator \nPress 2: Bitwise Operator \nPress 3: Relational Operator \nPress 4: Logical Operator \nPress 5: Assignment Operator \nPress 6: Increament/Decreament Operator \n");
    printf("Enter a number: ");
    scanf("%d",&operator);
    switch(operator)
    {
    case 1:
    {
        Arithmetic();
        break;
    }
    case 2:
    {
        Bitwise();
        break;
    }
    case 3:
    {
        Relational();
        break;
    }
    case 4:
    {
        Logical();
        break;
    }
    case 5:
    {
        Assignment();
        break;
    }
    case 6:
    {
        Prefix_Postfix();
        break;
    }
    }
}
int Arithmetic()
{
    int num1,num2,sum,sub,mul,div,mod;
    printf("Enter first number: ");
    scanf("%d",&num1);
    printf("Enter second number: ");
    scanf("%d",&num2);
    sum = num1 + num2;
    printf("\nValue Addition is: %d",sum);
    sub = num1 - num2;
    printf("\nValue Substraction is: %d",sub);
    mul = num1 * num2;
    printf("\nValue Multiplication is: %d",mul);
    div = num1 / num2;
    printf("\nValue Divide is: %d",div);
    mod = num1 % num2;
    printf("\nValue Modulus is: %d",mod);
}
int Bitwise()
{
    // symbols => & | >> << ~ ^
    int num1,num2;
    printf("Enter first number: ");
    scanf("%d",&num1);
    printf("Enter second number: ");
    scanf("%d",&num2);
    printf("Bitwise AND %d",num1&num2);
    printf("\nBitwise OR %d",num1|num2);
    printf("\nBitwise Right Shift %d",num1>>num2);
    printf("\nBitwise Left Shift %d",num1<<num2);
    printf("\nBitwise XOR %d",num1^num2);
    printf("\nBitwise NOT %d",~num1);
}
int Relational()
{
    // Symbols == != < > <= >=
    int a,b;
    // Relational operators in if statements
    printf("Enter Two number: ");
    scanf("%d%d",&a,&b);
    if (a == b)
    {
        printf("%d is equal to %d\n",a,b);
    }
    if(a != b)
    {
        printf("%d is not equal to %d\n",a,b);
    }
    if (a < b)
    {
        printf("%d is less than %d\n",a,b);
    }
    if(a > b)
    {
        printf("%d is not less than %d\n",a,b);
    }
    if(a >= b)
    {
        printf("%d is greater than or equal to %d\n",a,b);
    }
    if(a <= b)
    {
        printf("%d is less than or equal to %d\n",a,b);
    }
}
int Logical()
{
    //Symbols && || !
    // Logical AND (&&) example
    int num1 = 5, num2 = 8;
    if (num1 > 0 && num2 > 0)
    {
        printf("Both numbers are positive.\n");
    }
    else
    {
        printf("one number is not positive.\n");
    }
    // Logical OR (||) example
    int age = 14;
    if (age < 18 || age > 65)
    {
        printf("You are either too young or too old for this.\n");
    }
    else
    {
        printf("You are in the eligible age range.\n");
    }
    // Logical NOT (!) example
    int isRainy = 1; // 0 represents false/true
    if (!isRainy)
    {
        printf("It's not rainy today.\n");
    }
    else
    {
        printf("It's rainy today.\n");
    }
}
int Assignment()
{
    //Symbols = += -= *= /= %=
    int x; // Declaration
    x = 5; // Assignment
    printf("The value of x is: %d\n", x);
    x += 1; // Equivalent to x = x + 1; (addition assignment)
    printf("The value of x is: %d\n", x);
    x -= 2; // Equivalent to x = x - 2; (subtraction assignment)
    printf("The value of x is: %d\n", x);
    x *= 3; // Equivalent to x = x * 3; (multiplication assignment)
    printf("The value of x is: %d\n", x);
    x /= 4; // Equivalent to x = x / 4; (Division assignment)
    printf("The value of x is: %d\n", x);
    x %= 5; // Equivalent to x = x % 5; (Modulus assignment)
    printf("The value of x is: %d\n", x);
}
int Prefix_Postfix()
{
    //Symbols ++ --
    int a;
    printf("\n%d",a);
    printf("\n%d",++a);
    printf("\n%d",--a);
    printf("\n%d",a++);
    printf("\n%d",a--);
}







