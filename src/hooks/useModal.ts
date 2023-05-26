import { RefObject, useEffect } from 'react';

export interface UseModalProps {
	modalRef: RefObject<HTMLDialogElement>;
	open: boolean;
}

export const useModal = ({ modalRef, open }: UseModalProps) => {
	const modal = modalRef.current;

	useEffect(() => {
		if (!modal) return;
		open ? modal.showModal() : modal.close();

		return () => {
			modal.close();
		};
	}, [modal, open]);
};
