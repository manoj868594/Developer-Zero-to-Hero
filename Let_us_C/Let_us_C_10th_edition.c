#include <stdio.h> //
#include <math.h>  //sqrt()
int Array1()
{
	int m = 4;
	int a, sum = 0, i, marks[4]; // any declaration
	for (i = 0; i <= 3; i++)
	{
		printf("Enter Marks ");
		scanf("%d", &marks[i]); // store data in array
	}
	for (i = 0; i <= 3; i++)
	{
		sum = sum + marks[i]; // read data from a array
	}
	printf("Total Sum is %d\n", sum);
	a = sum / 4;
	printf("Average Marks: %d\n", a);
	return 0;
}
int Array2()
{
	int marks[5], i;
	int add = 0;
	printf("Enter Your 5 Subjects Marks: ");
	for (i = 0; i <= 4; i++)
	{
		scanf("%d", &marks[i]);
		printf("%d", marks[i]);
		add = add + marks[i];
		printf("marks[%d] %d", marks[i], add);
	}
	printf("Total marks %d", add);
	return 0;
}
int Bonous()
{
	int bonous, cyear, pyear, yos;
	printf("Enter current year and year of joining");
	scanf("%d%d", &cyear, &pyear);
	yos = cyear - pyear;
	if (yos > 3)
	{
		bonous = 2500;
		printf("Bonous= Rs. %d\n", bonous);
	}
	else
	{
		printf("You miss bonous");
	}
	return 0;
}
int isPrime()
{
	int i, j = 2;
	printf("Enter a Number for checking is prime number or not: ");
	scanf("%d", &i);
	while (j <= i - 1)
	{
		if (i % j == 0)
		{
			printf("%d not a prime number\n", i);
			break;
		}
		j++;
	}
	if (j == i)
	{
		printf("%d is prime number\n", i);
	}
	else if (i <= 1)
	{
		printf("%d not a prime number\n", i);
	}
	return 0;
}
int interest_rate()
{
	int p, n, count = 1;
	float si, r;
	while (count < 3)
	{
		printf("Enter number p,n,r ");
		scanf("%d%d%f", &p, &n, &r);
		si = p * n * r / 100;
		printf("%f\n", si);
		count++;
	}
	printf("While Loop Executed");
	return 0;
}
int do_while_loop()
{
	int i = 6;
	do
	{
		printf("%d", i);
	} while (i <= 3);
	return 0;
}
int while_loop()
{
	int i = 6;
	while (i >= 3)
	{
		printf("%d", i);
		i--;
	}
	return 0;
}
int for_loop()
{
	int i;
	for (i = 1; i < 6; i++)
	{
		printf("%d", i);
	}
	return 0;
}
int continue1()
{
	int a, b, i;
	for (a = 1; a <= 2; a++)
	{
		printf("a loop %d\n", a);
		for (b = 1; b <= 2; b++)
		{
			printf("b loop %d\n", b);
			if (a == b)
			{
				printf("Continue %d %d\n", a, b);
				continue;
			}
			else if (a < b)
			{
				for (i = 1; i <= b; i++)
				{
					printf("i For Loop\n");
				}
			}
			printf("Both Loop %d %d %d\n", a, b, i);
		}
	}
	return 0;
}
int goto_sqrt()
{
	int i, result;
start:
	printf("Enter as number for find square root ");
	scanf("%d", &i);
	if (i <= 0)
	{
		goto start;
	}
	else
	{
		// result = sqrt(i);
	}
	printf("Result is %d", result);
	return 0;
}
int if_else()
{
	int a = 0, b = 3, c;
	if (a <= b)
	{
		if (b == c)
		{
			printf("Value is Equal b==c");
		}
		if (b == 3)
		{
			printf("b==3");
		}
	}
	return 1;
}
int if_state()
{
	int a, b;
	float per;
	printf("Enter your Two subject marks ");
	scanf("%d%d", &a, &b);
	per = (a + b) * 100 / 200;
	if (per >= 60)
	{
		printf("%f Excellent", per);
	}
	else if (per >= 40)
	{
		printf("%f Pass", per);
	}
	else if (per < 40)
	{
		printf("%f Fail", per);
	}
	return 1;
}
int Switch_math()
{
	int a, b, c;
	printf("Enter a Number in 1,2,3 for add,sub,multiply\n");
	scanf("%d", &a);
	printf("Enter Two Number for Calculation ");
	scanf("%d%d", &b, &c);
	switch (a)
	{
	case 1:
		printf("Addition is: %d", b + c);
		break;
	case 2:
		printf("Substraction is: %d", b - c);
		break;
	case 3:
		printf("Multiple is: %d", b * c);
		break;
	default:
		printf("Wrong");
	}
	return 0;
}
int Switch_case()
{
	char a;
	printf("Enter Your Grade in A,B,C,D: ");
	scanf("%c", &a);
	switch (a)
	{
	case 'A':
		printf("Excellent Pass");
		break;
	case 'B':
		printf("Good Pass");
		break;
	case 'C':
		printf("Pass");
		break;
	default:
		printf("Fail");
	}
	return 0;
}
int palindrome()
{
	int originalNum, num, reversNum = 0, rem;
	printf("A palindrome is a sequence of characters that reads the same forward and backward. This definition encapsulates the essence of a palindrome, where the order of characters is the same when read from left to right and right to left.\n");
	printf("Enter numbers: ");
	scanf("%d", &originalNum);
	num = originalNum;
	while (num != 0)
	{
		rem = num % 10;
		reversNum = reversNum * 10 + rem;
		num /= 10;
	}
	if (originalNum == reversNum)
	{
		printf("Not a Palindrome number");
	}
	else
	{
		printf("Reverse Number is: %u", reversNum);
	}
}
int MatrixArayLoop()
{
	int m, n, i, j;
	printf("Enter two matrix ");
	scanf("%d%d", &m, &n);
	int a[m][n], b[m][n], sum[m][n];
	printf("Enter first matrix\n ");
	for (i = 0; i < m; i++)
	{
		for (j = 0; j < n; j++)
		{
			scanf("%d", &a[i][j]);
		}
	}
	for (i = 0; i < m; i++)
	{
		for (j = 0; j < n; j++)
		{
			printf("a[%d][%d]\n", i, j);
		}
	}
	printf("Enter second matri\n ");
	for (i = 0; i < m; i++)
	{
		for (j = 0; j < n; j++)
		{
			scanf("%d", &b[i][j]);
		}
	}
	printf("\nSum matrix is\n");
	for (i = 0; i < m; i++)
	{
		for (j = 0; j < n; j++)
		{
			sum[i][j] = a[i][j] + b[i][j];
			printf(" %d", sum[i][j]);
		}
		printf("\n");
	}
	return 0;
}
int main()
{
	//	clrscr();
	// Array1(); Array2(); Bonous(); isPrime(); interest_rate(); do_while_loop(); while_loop(); for_loop(); continue1(); goto_sqrt(); if_else(); if_state(); Switch_math(); Switch_case(); palindrome(); MatrixArayLoop();
	// getch();
	return 0;
}
