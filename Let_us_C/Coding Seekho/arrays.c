
void main()
{
    float a[5],s=0, per ;
    int i;
    printf("Enter marks of 5 sub ");
    for(i=0; i<5; i++)
    {
        scanf("%f ", &a[i]);
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
        printf("%f \n", per);
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
    else if(per<40 && per>34 && a[0]>33 && a[1]>33
            && a[2]>33 && a[3]>33 && a[4]>33 )
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

    // printf("%d %d %d %d %d ",a[0],a[1],a[2],a[3],a[4],a[5]);
}
