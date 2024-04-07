void main()
{
//    Four Function of Dynamic memory allocation:
//        malloc() calloc() realloc() free()

    int *g=5,*x,y;
    printf("Enter how many memory you want allocate: ");
    scanf("%d",&y);
/*
    printf("%d\n",sizeof(g));
    g=(int *)malloc(sizeof(g));
    *g=4;
    printf("%d ",g); // malloc address print
    printf("%d ",*g); //value of *g
*/

    x=(int *)calloc(y,sizeof(int));
    *x=22; // value change to *(x+0)
    *(x+3) = 21;
    *(x+1) = 11;
    *(x+0) = 1;
    printf("%d %d %d %d\n",*x,*(x+0),*(x+2),*(x+3),*(x+1)); // print only 4 Byte o/p is 1 1 0 21

    x=(int *)realloc(x,9);
    *(x+7) = 11;
    *(x+9) = 13;
    printf("%d %d ",*(x+7),*(x+9)); // output 11 13

    free(x); //clean memmoty //address change
    free(g);
}
