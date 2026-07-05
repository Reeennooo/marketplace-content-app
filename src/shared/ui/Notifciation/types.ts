export interface INotificationProps {
  text: string;
  type: 'success' | 'error' | 'warning';
  duration: number;
  className?: string;
  onClose?: () => void;
}