export function formatDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const options = { month: "short", day: "numeric", year: "numeric" };

  if (isToday) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // convert 0 to 12 for 12 AM
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  } else {
    return date.toLocaleDateString("en-US", options);
  }
}

export function getRandomColorAndInitials(name) {
  // Generate Random Color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Hex code

  // Get First Letters
  const initials = name?.split(" ").map((word) => word.charAt(0).toUpperCase()); // Get first letter of each word, capitalize.join(""); // Combine into a single string

  return { color: randomColor, initials: initials };
}
