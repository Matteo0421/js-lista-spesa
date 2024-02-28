const listaSpesa = [
  'pane',
  'acqua',
  'pollo',
  'manzo',
  'sale',
  'pepe',
  'vino',
  'olio'
];


const output = document.getElementById('output')
const btn = document.getElementById('estrai')
let counter = 0;

btn.addEventListener('click', function () {
  while(counter < listaSpesa.length){
    console.log(listaSpesa[counter]);
    output.innerHTML =listaSpesa[counter];
  
    counter++;
  }
})



// const cibiEstratti = [];

// btn.addEventListener('click', function(){
//   btn.innerHTML = 'poi';
//   let estrazioneCiboValida = false;


//   while(!estrazioneCiboValida){
//     const randomNumber = Math.floor(Math.random() * listaSpesa.length)
//     const ciboEstratto = listaSpesa[randomNumber];


//     estrazioneCiboValida = !cibiEstratti.includes(ciboEstratto);

//     if(estrazioneCiboValida){
//       cibiEstratti.push(ciboEstratto)
//       output.innerHTML = ciboEstratto;
//     }


//     if(cibiEstratti.length === listaSpesa.length && !estrazioneCiboValida){
//       output.innerHTML = 'RIPETI';
//       btn.innerHTML = 'La spesa è finita';
//       console.log(output);

//       cibiEstratti.splice(0)
//       estrazioneValida = true;
//     }

//   }

// })


