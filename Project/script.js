const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    console.log("bar")
     bar.addEventListener('click' , () => {
        console.log("bar")
          nav.classlist.add('active');
     })
}

if (close) {
    console.log("close");  
      bar.addEventListener('click' , () => {
        console.log("bar")
         nav.classlist.remove('active');
    })
}