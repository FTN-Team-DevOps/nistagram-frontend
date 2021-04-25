export interface IAvatarProps {
  src: string;
  size: 'tiny' | 'small' | 'medium' | 'big';
  skipSrcWrap?: boolean;
  className?: string;
}
