export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const getImagePlaceholder = (width = 400, height = 300) => {
  return `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=${width}&h=${height}&fit=crop`;
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
