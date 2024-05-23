
/****************Iterview**********************/
class ABC {
	int display(int a){
	return a*10;
	}void display(int a){
	System.out.println(a+5);
	}
}
class Test1{
	public static void main(String args[]){
	int x;
	ABC A=new ABC();
	x=A.display(5);
	System.out.println(x);
	}
}// error in code because display in int and void

/****************Iterview**********************/
class Test{
    public static void main(String args[]){
        int a = 10,b;
        if(a>5)
        b=10;
        System.out.println(a);
        System.out.println(b);
    }
} // error b is not initialized

/****************Iterview**********************/
cass Test{
    public static coid main(String args[]){
        String s="Hello";
        s.concat("Data Flaar");
        System.out.println(s);
    }
} // output Hello

/****************Iterview**********************/
class Abc1{
    static{
        System.out.println("Hello Static");
    }
    Abc1(){
        System.out.println("Hello Constructor");
    }
}
clas Test2{
    public static void main(String arg[]){
        Abc1 A=new Abc1();
    }
} // Hello static and Hello Constructor

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/

/****************Iterview**********************/