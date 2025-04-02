document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('startVerification');

  if (button) {
    button.addEventListener('click', function () {
      Incode.init({
        accessToken: 'TU_API_KEY_AQUI', // Reemplázalo con tu accessToken real
        environment: 'sandbox', // o 'production'
        onComplete: function (result) {
          console.log('✅ Verificación completada:', result);
          alert('Verificación completada con éxito.');
        },
        onError: function (error) {
          console.error('❌ Error durante la verificación:', error);
          alert('Ocurrió un error durante la verificación.');
        }
      });
    });
  }
});
