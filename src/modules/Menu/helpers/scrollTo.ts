export const scrollToBrand = (toId: string): void => {
  setTimeout(() => {
    const brandElement = document.getElementById(`${toId}`);
    if (brandElement) {
      brandElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};