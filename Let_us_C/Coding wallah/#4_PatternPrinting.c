#include<stdio.h>

int StarPattern(){
    int n,m;
    // * * * 
    // * * * 
    // * * * 
    printf("Enter number of rows: ");
    scanf("%d",&n);
    printf("Enter number of column: ");
    scanf("%d",&m);
    for(int i=1;i<=n;i++){
        for(int i=1;i<=m;i++){
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
int NumberOfSquare(){
    int n,i,j;
    // 1 2 3 
    // 1 2 3 
    // 1 2 3 
    printf("Enter no. of n: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            printf("%d ",j);
        }
        printf("\n");
    }
    return 0;
}
int StarTriangle(){
    int n,i,j;
    // * 
    // * * 
    // * * * 
    printf("Enter no. of n: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){ // no. of rows = i
        for(j=1;j<=i;j++){ // no. of column = j
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
int StarTriangleLeftUlta(){
    int n,i,j;
    // * * * 
    // * * 
    // * 
    printf("Enter no. of n: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){ // no. of rows = i
        for(j=1;j<=n+1-i;j++){ // no. of column = j
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
int StarTriangleLeftUltaExtraVariable(){
    int n,i,j,a;
    // * * * 
    // * * 
    // * 
    printf("Enter no. of n: ");
    scanf("%d",&n);
    a = n; // using extra variable 
    for(i=1;i<=n;i++){ // no. of rows = i
        for(j=1;j<=a;j++){ // no. of column = j
            printf("* ");
        }
        a--;
        printf("\n");
    }
    return 0;
}
int NumberTriangle(){
    int n,i,j;
    // 1
    // 1 2
    // 1 2 3
    printf("Enter a number: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf("%d ",j);
        }
        printf("\n");
    }
    return 0;
}
int NumberTriangleUlta(){
    int n,i,j;
    // 1 2 3 
    // 1 2 
    // 1 
    printf("Enter a number: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=n+1-i;j++){
            printf("%d ",j);
        }
        printf("\n");
    }
    return 0;
}
int OddNumberTriangle(){ // not solve this class
    int n,i,j;
    printf("Enter a number: ");
    scanf("%d",&n);
    // n = 4 -> 1 3 5 7
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf("%d ",j);
        }
        printf("\n");
    }
    return 0;
}
int OddNumberTriangle_UsingExtraVariable(){
    int n,i,j,a;
    // 1 
    // 1 3 
    // 1 3 5 
    printf("Enter a number: ");
    scanf("%d",&n);
    // n = 4 -> 1 3 5 7
    for(i=1;i<=n;i++){
        a = 1;
        for(j=1;j<=i;j++){
            printf("%d ",a);
            a = a + 2;
        }
        printf("\n");
    }
    return 0;
}
char AlphabetSquare(){
    int i,j,n,a;
    char ch;
    // A B C
    // A B C
    // A B C
    printf("Enter a range no.: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        a=65;
        for(j=1;j<=n;j++){
            ch = (char)a;
            printf("%c ",ch);
            a++;
        }
        printf("\n");
    }
}
char AlphabetTriangle(){
    int i,j,n,a;
    char ch;
    // A 
    // A B 
    // A B C
    printf("Enter a range no.: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        a=65;
        for(j=1;j<=i;j++){
            ch = (char)a;
            printf("%c ",ch);
            a++;
        }
        printf("\n");
    }
}
char AlphabetNumberTriangle(){
    int n,i,j,a;
    char ch;
    // 1 
    // A B 
    // 1 2 3 
    // A B C D
    printf("Enter a range no.: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        a = 65;
        for(j=1;j<=i;j++){
            if(i%2 != 0){
                printf("%d ",j);
            }else{
                ch = (char)a;
                printf("%c ",ch);
                a++;
            }
        }
        printf("\n");
    }
}
int StarPlusPattern(){
    int n,i,j,a;
    //   *   
    // * * * 
    //   *  
    printf("Enter a odd range no.: ");
    scanf("%d",&n);
    a = n/2+1;
    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            if(j == a || i == a){
                printf("* ");
            }else{
                printf("  ");
            }
        }
        printf("\n");
    }
}
int HollowRectangle(){
    int n,i,j;
    // * * * * * 
    // *       * 
    // * * * * *
    printf("Enter a range no.: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=n+2;j++){
            if(j<=1 || j>=n+2 || i<=1 || i>=n){
                printf("* ");
            }else{
                printf("  ");
            }
        }
        printf("\n");
    }
}
int StarCrossPattern(){
    int n,i,j;
    // *   * 
    //   *   
    // *   * 
    printf("Enter a odd no.: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            if(j==i || i+j == n+1){
                printf("* ");
            }else{
                printf("  ");
            }
        }
        printf("\n");
    }
}
int FloydTriangle(){
    int n,i,j,a=1;
    // 1 
    // 2 3 
    // 4 5 6 
    printf("Enter a odd no.: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf("%d ",a);
            a++;
        }
        printf("\n");
    }
}
int OddNumbersTriangle(){
    int n,i,j,a=1;
    // 1 
    // 3 5 
    // 7 9 11 
    printf("Enter a odd no.: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf("%d ",a);
            a = a+2;
        }
        printf("\n");
    }
}
int Zero_OneTriangle(){
    int n,j,i,a=1,b=0;
    // 1 
    // 0 1 
    // 1 0 1 
    printf("Enter a range number: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        if(i%2 != 0) a = 1;
        else a = 0;
        for(j=1;j<=i;j++){
            printf("%d ",a);
            if(a == 0) a =1;
            else a = 0;
        }
        printf("\n");
    }
}
int Zero_OneSimpleTriangle(){
    int n,j,i;
    // 1 
    // 0 1 
    // 1 0 1
    printf("Enter a range number: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            if((i+j)%2 == 0){
                printf("1 ");
            }else{
                printf("0 ");
            }
        }
        printf("\n");
    }
}
int StartTriangleMast(){
    int n,j,i,k;
    //     * 
    //   * * 
    // * * * 
    printf("Enter a range number: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
            printf("  ");
        }
        for(k=1;k<=i;k++){
            printf("* ");
        }
        printf("\n");
    }
}
int RhombusPattern(){
    int n,j,i,k,a;
    //       * * * * 
    //     * * * *   
    //   * * * *     
    // * * * *       
    printf("Enter a range number: ");
    scanf("%d",&n); //4
    for(i=1;i<=n;i++){ //1
        for(j=1;j<=n+3;j++){ //4
            if(j>=(n+1)-i && j<=n+4-i){
                printf("* ");
            }else{
                printf("  ");
            }
        }
        printf("\n");
    }
}
char AlphabetTrianglePattern(){
    int n,i,j,k,a=65;
    //       A 
    //     A B 
    //   A B C
    char ch;
    printf("Enter a range no. ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        ch = (char)a;
        for(k=1;k<=n-i;k++){
            printf("  ");
        }
        for(j=1;j<=i;j++){
            printf("%c ",ch);
            ch++;
        }
        printf("\n");
    }
}
int StarPyramidUsingIfElse(){
    int n,i,j,a;
    printf("Enter a range no. ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=n+(n-1);j++){
            if(j>=(n+1)-i && j<=(n-1)+i){
                printf("* ");
            }else{
                printf("  ");
            }
        }
        printf("\n");
    }
}
int StarPyramidUsingFor(){
    int n,i,j,a,nst=1;
    //     * 
    //   * * * 
    // * * * * * 
    printf("Enter a range no. ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(a=1;a<=n-i;a++){
            printf("  ");
        }
        for(j=1;j<=nst;j++){
            printf("* ");
        }
        nst = nst + 2;
        printf("\n");
    }
}
int NumberPyramidUsingFor(){
    int n,i,j,a,nst=1,num;
    //       1 
    //     1 2 3 
    //   1 2 3 4 5 
    printf("Enter a range no. ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        num = 1;
        for(a=1;a<=n-i;a++){
            printf("  ");
        }
        for(j=1;j<=nst;j++){
            printf("%d ",num);
            num++;
        }
        nst = nst + 2;
        printf("\n");
    }
}
char AlphabetPyramidUsingFor(){
    int n,i,j,a,nst=1,num=65;
    //       A 
    //     A B C 
    //   A B C D E 
    char ch;
    printf("Enter a range no. ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        ch = (char)num;
        for(a=1;a<=n-i;a++){
            printf("  ");
        }
        for(j=1;j<=nst;j++){
            printf("%c ",ch);
            ch++;
        }
        nst = nst + 2;
        printf("\n");
    }
}
int NumberPyramidMastUsingFor(){
    int n,i,j,k,s,a;
    //     1 
    //   1 2 1 
    // 1 2 3 2 1 
    printf("Enter a range no. ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(s=1;s<=n-i;s++){
            printf("  ");
        }
        for(j=1;j<=i;j++){
            printf("%d ",j);
        }
        a = i - 1;
        for(k=1;k<=i-1;k++){
            printf("%d ",a);
            a--;
        }
        printf("\n");
    }
}
char AlphabetPyramidMastUsingFor(){
    int n,i,j,k,s,a,num=65;
    //     A 
    //   A B A 
    // A B C B A 
    char ch;
    printf("Enter a range no. ");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(s=1;s<=n-i;s++){
            printf("  ");
        }
        ch = (char)num;
        for(j=1;j<=i;j++){
            printf("%c ",ch);
            ch++;
        }
        ch--;
        for(k=1;k<=i-1;k++){
            ch--;
            printf("%c ",ch);
        }
        printf("\n");
    }
}
int StarDiamondPattern(){
    int n,i,j,k,nst,nsp;
    //     * 
    //   * * * 
    // * * * * * 
    //   * * * 
    //     * 
    printf("Enter a odd no. ");
    scanf("%d",&n);
    nsp = n/2;
    nst = 1;
    for(i=1;i<=n;i++){
        for(j=1;j<=nsp;j++){
            printf("  ");
        }
        for(k=1;k<=nst;k++){
            printf("* ");
        }
        if(i < n/2+1){
            nsp--;
            nst += 2;
        }else{
            nsp++;
            nst -= 2;
        }
        printf("\n");
    }
}
int StarPyramidMast(){
    int n,i,j,k,nst,nsp=1;
    // * * * * * * * 
    // * * *   * * * 
    // * *       * * 
    // *           * 
    printf("Enter a odd no. ");
    scanf("%d",&n);
    nst = n;
    for(i=1;i<=2*n+1;i++){
        printf("* ");
    }
    printf("\n");
    for(i=1;i<=n;i++){
        for(j=1;j<=nst;j++){
            printf("* ");
        }
        for(k=1;k<=nsp;k++){
            printf("  ");
        }
        for(j=1;j<=nst;j++){
            printf("* ");
        }
        nst--;
        nsp+=2;
        printf("\n");
    }
}
int NumberPyramidMast(){
    int n,i,j,k,nst,nsp=1,num=1;
    // 1 2 3 4 5 6 7 
    // 1 2 3   5 6 7 
    // 1 2       6 7 
    // 1           7 
    printf("Enter a odd no. ");
    scanf("%d",&n);
    nst = n;
    for(i=1;i<=2*n+1;i++){
        printf("%d ",num);
        num++;
    }
    printf("\n");
    for(i=1;i<=n;i++){
        num = 1;
        for(j=1;j<=nst;j++){
            printf("%d ",num);
            num++;
        }
        for(k=1;k<=nsp;k++){
            printf("  ");
            num++;
        }
        for(j=1;j<=nst;j++){
            printf("%d ",num);
            num++;
        }
        nst--;
        nsp+=2;
        printf("\n");
    }
}
int AlphabetPyramidMastPattern(){
    int n,i,j,k,nst,nsp=1,num=65;
    char ch = (char)num;
    // A B C D E F G 
    // A B C   E F G 
    // A B       F G 
    // A           G 
    printf("Enter a odd no. ");
    scanf("%d",&n);
    nst = n;
    for(i=1;i<=2*n+1;i++){
        printf("%c ",ch);
        ch++;
    }
    printf("\n");
    for(i=1;i<=n;i++){
        ch = (char)num;
        for(j=1;j<=nst;j++){
            printf("%c ",ch);
            ch++;
        }
        for(k=1;k<=nsp;k++){
            printf("  ");
            ch++;
        }
        for(j=1;j<=nst;j++){
            printf("%c ",ch);
            ch++;
        }
        nst--;
        nsp+=2;
        printf("\n");
    }
}
int NumberPyramidMastPatternUlta(){ // Pending for later
    int n,i,j,k,nst,nsp=1,num=1;
    // 1 2 3 4 3 2 1 
    // 1 2 3   3 2 1 
    // 1 2       2 1 
    // 1           1 
    printf("Enter a odd no. ");
    scanf("%d",&n);
    nst = n;
    for(i=1;i<=n+1;i++){
        printf("%d ",num);
        num++;
    }
    num--;
    for(i=1;i<=n;i++){
        num--;
        printf("%d ",num);
    }
    printf("\n");
    for(i=1;i<=n;i++){
        num = 1;
        for(j=1;j<=nst;j++){
            printf("%d ",num);
            num++;
        }
        for(k=1;k<=nsp;k++){
            printf("  ");
            num--;
        }
        for(j=1;j<=nst;j++){
            printf("%d ",num);
            num--;
        }
        nst--;
        nsp+=2;
        printf("\n");
    }
}
int NumberPyramidMastSquareMinimum(){
    int n,i,j,min,a,b;
    // 1 1 1 1 1 
    // 1 2 2 2 1 
    // 1 2 3 2 1 
    // 1 2 2 2 1 
    // 1 1 1 1 1 
    printf("Enter a odd no. ");
    scanf("%d",&n);
    min = 0;
    for(i=1;i<=2*n-1;i++){
        for(j=1;j<=2*n-1;j++){
            a = i;
            if(i>n) a = 2*n - i;
            b = j;
            if(b>n) b = 2*n - j;
            if(a<b) min = a;
            else min = b;
            printf("%d ",min);
        }
        printf("\n");
    }
    return 0;
}
int minimum(int a, int b){
    int c = a;
    if(b<a) c = b;
    return c;
}
int NumberPyramidMastSquarePattern(){
    int n,i,j,min,a,b;
    // 3 3 3 3 3 
    // 3 2 2 2 3 
    // 3 2 1 2 3 
    // 3 2 2 2 3 
    // 3 3 3 3 3 
    printf("Enter a odd no. ");
    scanf("%d",&n);
    min = 0;
    for(i=1;i<=2*n-1;i++){
        for(j=1;j<=2*n-1;j++){
            a = i;
            if(i>n) a = 2*n - i;
            b = j;
            if(b>n) b = 2*n - j;
            
            // min = minimum(a,b);
            if(a<b) min = a;
            else min = b;

            printf("%d ",n+1-min);
        }
        printf("\n");
    }
    return 0;
}
int factorial(int x){
    int fact = 1;
    for(int i=2;i<=x;i++){
        fact = fact*i;
    }
    return fact;
}
int PascalTriangle(){
    //      1 
    //     1 1 
    //    1 2 1 
    //   1 3 3 1 
    //  1 4 6 4 1 
    int rows = 5;
    int coef = 1;

    for (int i = 0; i < rows; i++) {
        for (int space = 1; space <= rows - i; space++) {
            printf(" ");
        }
        for (int j = 0; j <= i; j++) {
            if (j == 0 || i == 0) {
                coef = 1;
            } else {
                coef = coef * (i - j + 1) / j;
            }
            printf("%d ", coef);
        }
        printf("\n");
    }
    return 0;
}

void main(){
    PascalTriangle();
}