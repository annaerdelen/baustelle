export const useCurrentX = () => useState('currentX', () => 0);

export const useMenuState = () => {
  const isMenuOpen = useState('isMenuOpen', () => false);

  return {
    isMenuOpen,
    openMenu: () => (isMenuOpen.value = true),
    closeMenu: () => (isMenuOpen.value = false),
    toggleMenu: () => (isMenuOpen.value = !isMenuOpen),
  };
};
