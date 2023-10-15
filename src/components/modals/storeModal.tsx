"use client";

import { useStoreModal } from "@/hooks/useStoreModal";
import { Modal } from "@/components/modal";

export function StoreModal() {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage procuts and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
}
