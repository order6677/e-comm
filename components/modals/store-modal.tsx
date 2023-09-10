"use  client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal =() => {

    const StoreModal= useStoreModal();
    return (

   <Modal
   
   title="create store"
   description="add a new store to manage"
   isOpen={StoreModal.isOpen}
   onClose={StoreModal.onClose}

   >

    
     Future create store form
   </Modal>
    );
};
