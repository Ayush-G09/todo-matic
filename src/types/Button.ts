export type ButtonProps = {
  title?: string;
  icon?: string;
  width: string;
  height: string;
  variant: 'primary' | 'icon' | 'error';
  iconPosition?: 'left' | 'right';
  active?: boolean;
  onClick: () => void;
};
