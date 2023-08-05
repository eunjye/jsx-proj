import { Toast, toastState } from '@stores/toast';
import { getRandomID } from '@utils/etc';
import { useRecoilState } from 'recoil';

export function useToast() {
  const [toasts, setToasts] = useRecoilState(toastState);

  const removeToast = (toastID) =>
    setToasts((prev) => prev.filter((toast) => toast.id !== toastID));

  const fireToast = (toast) => {
    setToasts((prev) => [...prev, { ...toast, id: getRandomID() }]);
    setTimeout(() => removeToast(toast.id), 600 + (toast.duration ?? 1000));
  };

  return { toasts, fireToast };
}
