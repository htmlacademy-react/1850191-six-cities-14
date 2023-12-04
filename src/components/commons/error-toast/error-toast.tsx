import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../../store/configure-store';
import { selectErrorMessage } from '../../../store/features/errors/selectors';
import { clearError } from '../../../store/features/errors';
import { useAppDispatch, useAppSelector } from '../../../hooks/use-store-hooks';

const ErrorToast = (): JSX.Element => {
  const errorMessage = useAppSelector((state: RootState) => selectErrorMessage(state));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 5000,
        onClose: () => dispatch(clearError()),
      });
    }
  }, [errorMessage, dispatch]);

  return <ToastContainer />;
};

export default ErrorToast;
