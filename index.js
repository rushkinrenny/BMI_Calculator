function getBMI(){
    var height,weight;
    height =document.getElementById("height").value;
    weight = document.getElementById("weight").value;
    var BMI=weight/(height*height);
    BMI=BMI.toFixed(3);
    document.getElementById('result').innerHTML='Your BMI is '+BMI;
}