import React, { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-12-12T21:00:00"); // Cambia al día y hora exactos de la boda

    const updateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Si ya pasó la fecha
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown(); // Ejecutar inmediatamente
    const timer = setInterval(updateCountdown, 1000); // Actualizar cada segundo

    return () => clearInterval(timer); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div style={{ textAlign: "center", fontSize: "18px", marginTop: "20px" }}>
      <h4>Cuenta regresiva 💍</h4>
      <p>
        Faltan <strong>{timeLeft.days}</strong> días,{" "}
        <strong>{timeLeft.hours}</strong> horas,{" "}
        <strong>{timeLeft.minutes}</strong> minutos y{" "}
        <strong>{timeLeft.seconds}</strong> segundos para el gran día.
      </p>
    </div>
  );
}

export default Countdown;
