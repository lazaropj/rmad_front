import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type IModal = {
  isOpen: boolean;
  isEdit?: boolean;
};

type IModalsData = {
  [x: string]: IModal;
};

type Context = {
  modal: IModalsData;
  toggleModal(params: IModalsData): void;
};

const ModalContext = createContext({} as Context);

export const ModalProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IModalsData>({} as IModalsData);

  const toggleModal = useCallback(
    (object: IModalsData) => {
      setData({
        ...data,
        ...object,
      });
    },
    [data],
  );

  const value = useMemo(
    () => ({
      modal: data,
      toggleModal,
    }),
    [data, toggleModal],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = (): Context => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('ModalProvider Error');
  }

  return context;
};
