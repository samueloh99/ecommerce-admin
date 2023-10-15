"use client";
import { useEffect } from "react";

import { Modal } from "@/components/modals/modal";
import { useStoreModal } from "@/hooks/useStoreModal";

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      <Modal title="Test" description="TEst" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
}
