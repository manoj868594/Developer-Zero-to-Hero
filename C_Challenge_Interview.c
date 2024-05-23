/****************Iterview**********************/
// Technical example of Stack
// Function calling is the best example of stack
int main(){
    one();
}
void one(){
    two();
    printf("Hello one");
}
void two(){
    printf("Hello Two");
}
// Stack follow Last in first out // funstion terminate two, one and than main

/****************Iterview**********************/
// Actual Object and Refrence Object different
// constructor call for actual object not refrence object

/****************Iterview**********************/
void main(){
    register int a;
    printf("Enter a number");
    scanf("%d",&a);
} // error: address of register variable 'a' requested

/****************Iterview**********************/
void main(){
    printf("%d",5<<3); //40 left-shift operator
}

/****************Iterview**********************/
// Empty class ki size 1 Byte hoti hai

/****************Iterview**********************/
void display();
void main(){
    display(); // 0
    display(); // 1
    display(); // 2
}
void display(){
    static int a;
    printf("\n%d",a);
    ++a;
}

/****************Iterview**********************/
int main(){
int i;
for(i=1;i<=3;i++); // ; semicolon breaks loop
printf("Hello %d",i);
} // Hello 4

/****************Iterview**********************/
void main(){
    int a =10,b =10, c = 10;
    if(a==b==c){ // 10==10 = 1(true)==10 = false
        printf("Hello");
    }else{
        printf("Bye");
    }
} // Bye

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/