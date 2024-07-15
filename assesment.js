// program 1

// for(i=1;i<=100;i++){
//     if(i%3==0 && i%5==0)
//         console.log("FizzBuzz")
//     else if(i%3==0)
//         console.log("Fizz")
//     else if(i%5==0)
//         console.log("Buzz")
//     else
//         console.log(i)
// }
// -----------------------------------------------

// program 2

// function palindrome(str){
//     let n=str.length-1;
//     let str1="";
//     for(i=0;i<=n;i++){
//        str1+=str.charAt(n-i);
//     }
//     if(str==str1)
//         return true
//     else
//         return false
// }
// let str="mom";
// console.log(palindrome(str))
// ------------------------------------------------

// program 3

// function max(nums){
//     let res=0;
//     for(i=0;i<nums.length;i++){
//         res=Math.max(nums[i],res);
//     }
//     return res;
// }
// let arr=[23,434,45,32,27,58,14,986]
// console.log(max(arr))
//-------------------------------------------------

//program 4

// function repeat(str){
//     var res = {};
// 		for(i = 0; i < str.length; i++){
// 			if(res[str[i]]){
// 				res[str[i]]++;

// 			}
//             else{
// 				res[str[i]] = 1;
// 			}
// 		}
// 		console.log(res);
// }
// let str="veeramanikandan"
// repeat(str);

// program 5

// function max_word(str){
//     let res={},temp={}
//     let max=0,cnt=0;
//     for(i=0;i<str.length;i++){
//         if(str.charAt(i)==" "){
//             if(cnt>max){
//                 max=cnt;
//                 cnt=0;
//                 res=temp;
//             }
//                 cnt=0
//                 temp="";
//         }
//         else{
//             temp+=str.charAt(i)
//             cnt++;
//         }
//     }
//     console.log(res)
// }
// let str="Lorem ipsum dolor sit amet consectetur adipisicing elit."
// max_word(str)

//program 6

// function fact(num){
//     let res=1;
//     for(i=1;i<=num;i++){
//         res*=i;
//     }
//     return res;
// }
// let n=5;
// console.log(fact(n));

//program 7

// function farenheit(num){
//     let res;
//     res=(num*1.8)+32;
//     return res;
// }
// let c=35
// console.log(farenheit(c));

// program 8

let arr=[1,2,3,4,5,7,8,9,10]
for(i=0;i<arr.length-1;i++){
    if(arr[i]+1!=arr[i+1]){
        console.log(arr[i]+1)
        break;
    }
}