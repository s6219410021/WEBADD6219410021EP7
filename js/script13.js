let weight = document.querySelector('=weight')
let heihht = document.getElementById('height')
let calBMI = document.getElementById('calBMI')
let bmiValue = document.getElementById('bmiValue')
let bmiResult = document.getElementById('bmiResult')

function calculateBMI(){
    if( weight.Value.trim().length == 0 ){
        alert('ป้อนน้ำหนัก')
    }else if(innerHeight.Value.trim().length == 0){
        alert('ป้อนส่วนสูงด้วย')
    }else{
        //คำนวณ
        let bmivaleShow =Number(weight.Value) / ((Number(height.Value)/100) ** 2)

        bmiValue.innerHTML = bmivaleShow.toFixed(2)

        //เอาค่า BMI มาแปลกผล
        if(bmivaleShow < 18.50){
            bmiResult.innerHTML = 'น้ำหนัก / ผอม'
        }else if (bmivaleShow <= 22.90){
            bmiResult.innerHTML ='ปกติ (สุขภาพดี)'
        }else if (bmivaleShow <= 24.90){
            bmiResult.innerHTML = 'ท้วม /โรคอ้วนระดับ 1'
        }else if (bmivaleShow <= 29.90 ){
            bmiResult.innerHTML ='อ้วน / โรคอ้วนระดับ 2'
        }else{
            bmiResult.innerHTML ='อ้วนมาก / โรคอ้วนระดับ 3'
        }
    }
}

calBMI.addEventListener('click', calculateBMI)

calBMI.addEventListener('mouseover',()=>{
    bmiResult.innerHTML ='SAU IOT DTI'
})