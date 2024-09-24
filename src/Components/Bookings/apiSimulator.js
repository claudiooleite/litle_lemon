const availability = {
  "2024-06-03": ["19:00", "21:00"],
  // ... predefined availability or empty
};

const generateRandomAvailability = () => {
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const numberOfSlots = Math.floor(Math.random() * 3) + 2; // 2 to 4 slots per day
  const randomSlots = [];

  while (randomSlots.length < numberOfSlots) {
    const randomIndex = Math.floor(Math.random() * times.length);
    const randomTime = times[randomIndex];

    if (!randomSlots.includes(randomTime)) {
      randomSlots.push(randomTime);
    }
  }

  return randomSlots.sort(); // Sort to maintain order
};

const fetchAPI = (date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const availableTimes = availability[date] || generateRandomAvailability();
      resolve(availableTimes);
    }, 1000);
  });
};

const submitAPI = (formData) => {
  if (availability[formData.date]) {
    availability[formData.date] = availability[formData.date].filter(
      (time) => time !== formData.time,
    );
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true);
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000);
  });
};

export { fetchAPI, submitAPI };
