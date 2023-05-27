import { CloseIcon } from '@/assets/icons/CloseIcon';
import GithubIcon from '@/assets/icons/GithubIcon';
import { RocketIcon } from '@/assets/icons/RocketIcon';
import { useModal } from '@/hooks/useModal';
import { FC, ReactElement, useMemo, useRef } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  pageUrl?: string;
  topics?: string[];
  open: boolean;
  onClose: () => void;
}

const Project: FC<ProjectProps> = ({ title, description, imageUrl, githubUrl, pageUrl, topics, open, onClose }): ReactElement => {
  const modalRef = useRef<HTMLDialogElement>(null)
  useModal({ modalRef, open })

  const renderUrls = useMemo(() => {
    if(!githubUrl && !pageUrl) return null
    return (
      <div className='flex justify-between items-center gap-2 font-bold'>
        {githubUrl && <a href={githubUrl} className='flex items-center justify-center gap-4 border-t-2 border-[#25262E] bg-[#0f1115] px-6 py-3 text-[#E6E6E6] rounded-full w-full'>
          Github
          <GithubIcon width={24} height={24} />
        </a>}
        {pageUrl && <a href={pageUrl} className='flex items-center justify-center gap-4 border-t-2 border-[#25262E] bg-[#0f1115] px-6 py-3 text-[#E6E6E6] rounded-full'>
          Ver
          <RocketIcon width={24} height={24} />
        </a>}
      </div>
    )
  }, [githubUrl, pageUrl])


  return (
    <dialog ref={modalRef} className='fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-between gap-4 max-w-2xl w-full px-8 py-4 bg-[#06080A] backdrop:bg-[#00000040] rounded-2xl'>
      <section className='flex justify-between items-center w-full'>
        <h3 className='font-bold text-[32px] text-transparent bg-clip-text bg-gradient-to-b from-[#138EFF] to-[#1DD7F0] w-max'>
          {title}
        </h3>
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </section>
      <section className='flex justify-between gap-4 w-full'>
        <div className='flex flex-col gap-4 w-full'>
          <img className='aspect-square rounded-2xl' src={imageUrl} alt='project'/>
          {renderUrls}
        </div>
        <div className='w-full'>
          <p className='text-[20px] text-[#C7CCD7]'>
            {description}
          </p>
        </div>
      </section>
      {topics && <section className='flex flex-wrap justify-evenly gap-4'>
        {/* TODO - Add map using topics and icons */}
      </section>}
    </dialog>
  )
}

export default Project;