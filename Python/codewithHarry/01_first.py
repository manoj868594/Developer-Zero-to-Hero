import flask
import pyjokes
import pyttsx3

joke = pyjokes.get_joke()
# print(joke)

'''Hi This is multi line comment
This is abc '''
# Single line comment


speak = '''Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.
When the blazing sun is gone,
When he nothing shines upon,
Then you show your little light,
Twinkle, twinkle, all the night.
Then the trav'ller in the dark,
Thanks you for your tiny spark,
He could not see which way to go,
If you did not twinkle so.
In the dark blue sky you keep,
And often thro' my curtains peep,
For you never shut your eye,
Till the sun is in the sky.
'Tis your bright and tiny spark,
Lights the trav'ller in the dark:
Tho' I know not what you are,
Twinkle, twinkle, little star.'''
# engine = pyttsx3.init()
# engine.say(speak)
# engine.runAndWait()

a = 5=="5"
# print(a) # false

# Truth Table of "or"
# print("True or False is: ",True or False) # True
# print("True or True is:",True or True) # True
# print("False or True is:",False or True) # True
# print("Flase or False is: ",False or False) # False

# Truth Table of "and"
# print("True and False is: ",True and False) # False
# print("True and True is:",True and True) # True
# print("False and True is:",False and True) # False
# print("Flase and False is: ",False and False) # False

t = "Abc"
typec = type(t) # class str
# print(typec)
num = "3434"
numtype = int(num)
# print(type(numtype))

# a1 = input("Enter number: ")
# a2 = int(a1)
# a3 = int(input("Enter sec number: "))
# print(type(a2))
# print("Sum is: ",a2+a3)
# print("Sum is: ",a2%a3)

b2 = 34
b3 = 80
b3 = "Manoj"
# print(b3[0:-1])
# print(b3[-4:-1])
# print(b2>b3)
# print("The average is: ",(b2+b3)/2)

a = "0123456789"
# print(a[0:-1:2]) # 2 character skip in string

a = "   Manoj   "
# print(len(a)) # length check
# print(a.endswith("oj")) # kya string end kar rhi h "oj" se
# print(a.startswith("ma")) # case sensitive of Ma
# print(a.capitalize()) # first character capital
# print(a.strip()) # removes leading and trailing whitespace.
# print(a.lstrip()) # remove starting whitespaces
# print(a.zfill(20)) # starting adding some character 00000
# print(a.find("M"))
# print(a.replace("Manoj", "Harry"))
# print(a)