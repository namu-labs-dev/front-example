export const timeAgo = (invertPeriod = false) => {
  const currentTime = new Date();
  const timeAgo = new Date(currentTime.getTime() - 6 * 60 * 60 * 1000);

  let randomTimeAgo = timeAgo.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (invertPeriod) {
    const [time, period] = randomTimeAgo.split(" ");
    const invertedPeriod = period === "AM" ? "PM" : "AM";
    randomTimeAgo = `${time} ${invertedPeriod}`;
  }

  return randomTimeAgo;
};
