
let number , sum  = 0  ;
for(let i = 1 ; i <= 5 ; i++){
    number = Number(prompt("mời bạn nhập số :" ));
    if(Number.isInteger(number)){
        if(number % 2 != 0 ){
            sum += number ;
        }
    }
    else{
        alert("bạn nhập không đúng định dạng");
    }
} 
document.write("tổng các số lẻ là : " , sum);