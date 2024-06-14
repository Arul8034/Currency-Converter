let select = document.querySelectorAll('.currency');
let btn = document.getElementById('btn')
let input = document.getElementById('input')
let result =document.getElementById('result')


fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
// json format il ulla result ah res il store pannikirom atha next method ku anuppurom
.then(res => displaydropdown(res))

function displaydropdown(res){
   // console.log(Object.entries(res)[0][0])  // json format ah array mathuvatharku Object.entries(res) code use pantrom
   let curr = Object.entries(res)
   for(let i=0;i<curr.length;i++){
     let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
   // console.log(curr[i][0]) this code is checking purpose before use 
   select[0].innerHTML += opt
   select[1].innerHTML += opt
   }
}
btn.addEventListener('click',() =>{
   let curr1 = select[0].value 
   let curr2 = select[1].value 
   let inputVal = input.value
   if(curr1 === curr2){
    alert("Choose different Currency")
   }
   else
   convert(curr1,curr2,inputVal)

})
function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
      .then(resp => resp.json())
      .then((data) => {
        document.getElementById('result').value =Object.values(data.rates)[0]
        
        // console.log(Object.values(data.rates)[0])
        //console.log(Object.entries(data.rates)[0]) this method give the answer but in array type
      });
      //alert(`10 GBP = ${data.rates.USD} USD`);
      

}
