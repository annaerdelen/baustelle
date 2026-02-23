export const useShowPreviewBanner = () => useState('showPreviewBanner', () => false);
export const useCurrentX = () => useState('currentX', () => 0);
export const useIsMenuOpen = () => useState('isMenuOpen', () => false);

export const useMenuState = () => {
  const isMenuOpen = useState('isMenuOpen', () => false);

  return {
    isMenuOpen,
    openMenu: () => (isMenuOpen.value = true),
    closeMenu: () => (isMenuOpen.value = false),
    toggleMenu: () => (isMenuOpen.value = !isMenuOpen),
  };
};

export const useIndexStore = () => {
  const activeItem = useState('activeItem', () => 0);
  return { activeItem };
};
