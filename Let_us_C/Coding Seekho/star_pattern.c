
void main()
{
    pattern1();
//    pattern2();
//    pattern3();
}
void pattern1()
{

}
void pattern2(int a,int b,int c,int d)
{
    int i,j,num,p=1;
    printf("Press 1: 2 of 3\n");
    printf("Press 2: 3 of 5\n");
    printf("Press 3: 4 of 7\n");
    printf("Press 4: 5 of 9\n");
    printf("Press 5: Enter number\n");
    printf("Press 6: Enter number\n");
    printf("Press 7: Enter number\n");
    printf("Press 8: Enter number\n");
    printf("Press 9: Enter number\n");
    printf("Press 10: Exit !\n");
    while(1)
    {
        printf("Press above any number: ");
        scanf("%d", &num);

        switch(num)
        {
        case 1:
        {
            for(i=1; i<=2; i++)
            {
                for(j=1; j<=3; j++)
                {
                    if(j>=3-i && j<=1+i)
                    {
                        printf("*");
                    }
                    else
                    {
                        printf(" ");
                    }
                }
                printf("\n");
            }
            break;
        }
        case 2:
        {
            for(i=1; i<=3; i++)
            {
                for(j=1; j<=5; j++)
                {
                    if(j>=4-i && j<=2+i)
                    {
                        printf("*");
                    }
                    else
                    {
                        printf(" ");
                    }
                }
                printf("\n");
            }
            break;
        }
        case 3:
        {
            for(i=1; i<=4; i++)
            {
                for(j=1; j<=7; j++)
                {
                    if(j>=5-i && j<=3+i)
                    {
                        printf("*");
                    }
                    else
                    {
                        printf(" ");
                    }
                }
                printf("\n");
            }
            break;
        }
        case 4:
        {
            for(i=1; i<=5; i++)
            {
                for(j=1; j<=9; j++)
                {
                    if(j>=6-i && j<=4+i)
                    {
                        printf("*");
                    }
                    else
                    {
                        printf(" ");
                    }
                }
                printf("\n");
            }
            break;
        }
        case 5:
        {
            printf("Enter a number: ");
            scanf("%d",&a);
            for(i=1; i<=a; i++)
            {
                for(j=1; j<=a; j++)
                {
                    if(j<=i)
                    {
                        printf("*");
                    }
                    else
                    {
                        printf(" ");
                    }
                }
                printf("\n");
            }
            break;
        }
        case 6:
        {
            printf("Enter a number: ");
            scanf("%d",&a);
            for(i=1; i<=a; i++)
            {
                for(j=1; j<=a; j++)
                {
                    if(j<=(a+1)-i)
                    {
                        printf("*");
                    }
                    else
                    {
                        printf(" ");
                    }
                }
                printf("\n");
            }
            break;
        }
        case 7:
        {
            printf("Enter a number: ");
            scanf("%d",&a);
            for(i=1; i<=a; i++)
            {
                for(j=1; j<=a; j++)
                {
                    if(i<=j)
                    {
                        printf("*");
                    }
                    else
                    {
                        printf(" ");
                    }
                }
                printf("\n");
            }
            break;
        }
        case 8:
        {
            pattern3(a);
            break;
        }
        case 9:
        {
            printf("Enter a number");
            scanf("%d",&a);
            for(i=1; i<=a; i++)
            {
                for(j=1; j<=a; j++)
                {
                    if(j<=i)
                    {
                        printf("%d",p);
                        p++;
                    }
                    else
                    {
                        printf(" ");
                    }
                }
                printf("\n");
                p=1;
            }
        }
        case 10:
        {
            exit(0);
        }
        default :
        {
            printf("Wrong input\n");
        }
        }
    }
}
void pattern3()
{
    int a,i,j;
    printf("Enter a number: ");
    scanf("%d",&a);
    for(i=1; i<=a; i++)
    {
        for(j=1; j<=a; j++)
        {
            if(j<=i)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    for(i=1; i<=a; i++)
    {
        for(j=1; j<=a; j++)
        {
            if(j<=(a+1)-i)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    for(i=1; i<=a; i++)
    {
        for(j=1; j<=a; j++)
        {
            if(i<=j)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    for(i=1; i<=a; i++)
    {
        for(j=1; j<=a; j++)
        {
            if(i>=(a+1)-j)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
}
