// var username = "wail";

// switch(username){
//     case "mohammed":
//         console.log("welcome mr mohammed");
//         break;
//     case "ahmed":
//         console.log("welcome mr ahmed");
//         break;
//     case "wail":
//         console.log("welcome mr wail");
//         break;
//     default:
//         console.log("Thank You!!")
    
// }

// var sign = "*"
// var n1 = 4
// var n2 = 20
// switch(sign){
//     case "+":
//         console.log(n1+n2)
//     break;
//     case "-":
//         console.log(n1-n2)
//     break;
//     case "*":
//         console.log(n1*n2)
//     break;
//     case "/":
//         console.log(n1/n2)
//     break;
//     default:
//         console.log("Error!")

// }

// var numbers = [1,2,3,4,5,6,7,8,9]
// var x = 0 
// while(x<numbers.length){
//     console.log(numbers[x])
//     x++
// }


// var names = ['A','B','C','D']

// for(i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// function calc(n1,n2,o){
//  switch(o){
//      case "+":
//          console.log(n1+n2)
//      break;
//      case "-":
//          console.log(n1-n2)
//      break;
//      case "*":
//          console.log(n1*n2)
//      break;
//      case "/":
//          console.log(n1/n2)
//      break;
//      default:
//          console.log("Error!")

//  }
// }

// console.log(calc(4,6,"*"))

// function calc(x){
//     if((x%3==0)&(x%4==0)){
//         return "yes"
//     }
//     else
//     return "No!"
// }

// console.log(calc(12))


// function max(x,y){
//     if(x>y){
//         return x
//     }
//     else
//     return y
// }
// console.log(max(10,2))


// function calc(x){
//     if((x>0)&(x%2==0 || x%3==0)){
//         return "+ve integer"
//     }
//     else if((x<0)&(x%2==0 || x%3==0))
//         return "-ve integer";
//     else 
//     return "Zero Integer"
// }
// console.log(calc(0))



function compare(x){
    let max = 0
    let min = 0
    x.map((num)=>{
        let now=num
        if(now>max){
            return max=num
        }
        else if(now<=min){
            return min=num
        }
    
    })
    if(min===max){
        console.log("numbers are equal")
    }else{
        console.log("max is "+max )
        console.log("min is "+ min)
    }
    
}
compare([0,0,1])


// function oe(x){
//     if(x%2===0){
//         return "Even"
//     }
//     else
//     return "Odd"
// }

// console.log(oe(4))


// function name(x){
//     if((("a"||"e"||"i"||"o"||"u")||("A"||"E"||"I"||"O"||"U")) === x){
//         return "Vowel"
//     }
//     else{
//         return "Constant"
//     }
    
// }
// console.log(name("Wail"[0]))

// function count(x){
//    for(i=0;i<=12;i++){
//     console.log(x*i)
//    }
// }

// count(2)

// function even(x){
//     for(i=1;i<=x;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }

// even(20)