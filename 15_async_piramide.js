setTimeout(function() {
  console.log('Primer bloque');
  setTimeout(function() {
     console.log('Siguiente bloque');
     setTimeout(function() {
        console.log('Último bloque');
     }, 100);
  }, 500);
}, 1000);

