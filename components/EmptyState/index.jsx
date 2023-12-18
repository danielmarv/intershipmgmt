import Button from '@components/Button';
import Image from 'next/image';
import BuLogo from '@public/assets/images/bugema.png';

const EmptyState = () => (
  <div
    className='flex justify-center items-center flex-col mx-auto py-20'
    data-testid='collocate-empty-state'
  >
    <Image 
      src={BuLogo} 
      width={200}
      height={200}
    />
    <div className='flex flex-col justify-center text-center mt-10'>
      <h4 className='text-xl font-normal mb-6'>
        This is where you will monitor all Students Activities
      </h4>
      <div>
        <p className='text-grey-300 text-sm font-light'>
          You can you can edit, update, delete and add new students
        </p>
      </div>
      <div className='flex justify-center items-center mt-6'>
        <Button
          className={
            'rounded-none text-white bg-blue-500 border border-blue-500 hover:bg-dark-blue hover:border-dark-blue font-medium'
          }
          path='/'
        >
          <div className='mr-[10px]'>
            {/* <BoxedAddIcon /> */}
          </div>
          Add monitors
        </Button>
        <div className='mr-[14px]'></div>
        <Button
          className={
            'bg-white text-black-600 border border-black-600 opacity-30 hover:cursor-not-allowed font-medium'
          }
        >
          <div className='mr-[10px]'>
            {/* <UploadIcon /> */}
          </div>
          Home | Administration
        </Button>
      </div>
    </div>
  </div>
);

export default EmptyState;