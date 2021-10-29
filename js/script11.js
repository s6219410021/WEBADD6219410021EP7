//สร้างตัวแปรเพื่ออ้างอิงไปยังตำแหน่งคอนเทนต์ในเอกสาร HTML
let money = document.getElementById('money');
let person = document.getElementById('person');
let btnCal = document.getElementById('btnCal');
let btnCancal = document.getElementById('btnCancal');
let result = document.getElementById('result');

//event click ของปุ่ม btnCal

btnCal.addEventListener('click', () => {
    //alert('money,value')
    //result.innerHTML = 'Wow Wow Wow'
    if (money.value.trim().length == 0) {
        alert('ป้อนเงินด้วย')
    } else if (person.value.trim().length == 0) {
        alert('ป้อนคนด้วย')
    } else {
        //พร้อมจะคำนวณ
        let moneyshare = Number(money.value) / Number(person.value)
        result.innerHTML = moneyshare.toFixed(2)
    }
})

//event clicl ของปุ่ม btnCancal
btnCancal.addEventListener('click', () => {
    //alert('person,value')
})