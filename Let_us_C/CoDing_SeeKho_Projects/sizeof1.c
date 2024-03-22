#include <stdio.h>

int main() {
    int integerVar;
    double doubleVar;
    char charVar;

    printf("Size of int: %lu bytes\n", sizeof(int));
    printf("Size of double: %lu bytes\n", sizeof(double));
    printf("Size of char: %lu byte\n", sizeof(char));

    printf("Size of integerVar: %lu bytes\n", sizeof(integerVar));
    printf("Size of doubleVar: %lu bytes\n", sizeof(doubleVar));
    printf("Size of charVar: %lu byte\n", sizeof(charVar));

    return 0;
}
