// import {Button} from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { UserButton } from '@clerk/nextjs';

const SetupPage = () => {
  return (
    <div className='p-4'>
     <UserButton />
     
     <Modal title="test" description="test description" isOpen onClose={() => {}}>
      children
     </Modal>
    </div>
  );
}

export default SetupPage;
         
