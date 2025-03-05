
    let a =Number(prompt("Nhập số a "));
    let b =Number(prompt("Nhập số b "));
    let c =Number(prompt("Nhập số c "));
let delta = b*b-4*a*c;
let x1 ,x2 ;
switch(delta){
    case 0:
     x1 = x2 = -b/2*a;
    console.log("giá trị 1 :",x1);
    document.write("giá trị 1 :" ,x1);
    console.log("giá trị 2 :" ,x2);
    document.write("giá trị 2 :",x2);
    break;
    case delta > 0:
     x1 = -b+Math.sqrt(delta)/2*a;
     x1 = -b-Math.sqrt(delta)/2*a;
     console.log("giá trị 1 :",x1);
     document.write("giá trị 1 :" ,x1);
     console.log("giá trị 2 :" ,x2);
     document.write("giá trị 2 :",x2);
     break;
    case delta<0:
     document.write('phương trình không có nghiệm');
     break;
}
