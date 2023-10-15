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

  return null;
}
