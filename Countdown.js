const updateCountdown = () => {
    const targetDate = new Date("2025-02-22T20:30:00"); // Cambia al día y hora exactos de la boda
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
  
    const countdownContainer = document.getElementById("countdown-container");
  
    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);
  
      countdownContainer.innerHTML = `
        Faltan <strong>${days}</strong> días y <br/> 
        <strong>${hours}</strong>: 
        <strong>${minutes}</strong>: 
        <strong>${seconds}</strong> segundos.
      `;
    } else {
      countdownContainer.innerHTML = "¡Es el gran día! 💍🎉";
    }
  };
  
  // Ejecuta la función inmediatamente y establece un intervalo para actualizar cada segundo
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  