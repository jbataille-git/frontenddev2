
/* 
for ( age = 0; age < 10; age++ )

    console.log("For loop: Your age is " + age + ", less than 10");

}

document.write("You are now over 10 years of age"); 
*/

var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++ ) {

    console.log("this is link number" + i) ;

}

document.write("all links now looped");