import { useEffect, useState } from "react";

export default function CountdownToEvent() {
  const eventDate = new Date("2025-10-10T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = eventDate.getTime() - new Date().getTime();

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining();
      setTimeLeft(remaining);

      if (remaining.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.total <= 0) {
    return (
      <div className="text-center text-green-500 text-3xl font-bold mt-10">
        🎉 The big meeting has arrived!
      </div>
    );
  }

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Countdown to the meeting:
      </h2>
      <div className="flex justify-center gap-6 text-yellow-400 text-3xl font-bold">
        <div>
          {timeLeft.days} <span className="text-sm block">days</span>
        </div>
        <div>
          {timeLeft.hours} <span className="text-sm block">hours</span>
        </div>
        <div>
          {timeLeft.minutes} <span className="text-sm block">minutes</span>
        </div>
        <div>
          {timeLeft.seconds} <span className="text-sm block">seconds</span>
        </div>
      </div>
    </div>
  );
}
