export interface IConfirmationDialogProps {
  title?: string;
  message?: string;
  onDeny?: () => void;
  onConfirm: () => void;
}
