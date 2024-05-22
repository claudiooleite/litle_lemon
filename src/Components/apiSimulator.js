const availability = {
  "2024-05-23": ["19:00", "21:00"],
  "2024-05-24": ["17:00", "19:00", "20:00"],
  "2024-05-25": ["18:00", "20:00", "22:00"],
  "2024-05-26": ["19:00", "21:00"],
  "2024-05-27": ["17:00", "20:00", "22:00"],
  "2024-05-28": ["18:00", "19:00", "21:00"],
  "2024-05-29": ["17:00", "20:00", "22:00"],
  "2024-05-30": ["18:00", "19:00", "21:00"],
  "2024-05-31": ["17:00", "20:00", "22:00"],
  "2024-06-01": ["18:00", "19:00", "21:00"],
};

const fetchAPI = (date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const availableTimes = availability[date] || []; // Return empty array if no times available
      resolve(availableTimes);
    }, 1000);
  });
};

const submitAPI = (formData) => {
  availability[formData.date] = availability[formData.date].filter(
    (time) => time !== formData.time
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI };
