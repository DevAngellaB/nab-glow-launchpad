export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - 20; // Add small offset for better visual spacing
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

export const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  smoothScrollTo(targetId);
};
