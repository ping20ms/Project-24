//While Loop

let count = 0;
let total = 0;
let arr = []
let choice = prompt("Enter 1 if to use while any other value to use for loop: ")
if(value = 1){
    document.write("We are using the while loop now"+"<br>")
    while(count<5){
        arr[count]=parseInt(prompt("Enter the Value:"))
        total = parseInt(total+arr[count])
        count++
    }
    document.write(arr)
    document.write("<br>"+total)
}
else{
    document.write("We are using the for loop now")
    for(count = 0; count < 5; count++){
        arr[count]=parseInt(prompt("Enter the Value:"))
        total = parseInt(total+arr[count])
        count++
    }
    document.write(arr)
    document.write("<br>"+total)
    
}