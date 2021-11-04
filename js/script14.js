let weight = document.getElementById('weight')
let height = document.getElementById('height')
let calBMI = document.getElementById('calBMI')
let bmiValue = document.getElementById('bmiValue')
let bmiResult = document.getElementById('bmiResult')

function calculateBMI() {
    if (weight.value.length == 0) {
        alert('ป้อนน้ำหนักด้วย')
    } else if (height.value.length == 0) {
        alert('ป้อนส่วนสูงด้วย')
    } else {
        //คำนวณ
        let bmiValueShow = Number(weight.value) / ((Number(height.value) / 100) ** 2)

        bmiValue.innerHTML = bmiValueShow.toFixed(2)

        //เอาค่า BMI มาแปลผล
        if (bmiValueShow < 18.50) {
            bmiResult.innerHTML = 'น้ำน้อย / ผอม'
        } else if (bmiValueShow <= 22.90) {
            bmiResult.innerHTML = 'ปกติ (สุขภาพดี)'
        } else if (bmiValueShow <= 24.90) {
            bmiResult.innerHTML = 'ท้วม / โรคอ้วนระดับ 1'
        } else if (bmiValueShow <= 29.90) {
            bmiResult.innerHTML = 'อ้วน / โรคอ้วนระดับ 2'
        } else {
            bmiResult.innerHTML = 'อ้วน / โรคอ้วนระดับ 3'
        }
    }
}

calBMI.addEventListener('click', calculateBMI)

calBMI.addEventListener('mouseover', ()=>{
    bmiResult.innerHTML = 'SAU Iot DTI'
})