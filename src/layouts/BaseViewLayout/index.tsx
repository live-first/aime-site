import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type Props = {
  header?: React.ReactNode
  footer?: React.ReactNode
  semiModal?: React.ReactNode
}

export const BaseViewLayout = (props: PropsWithChildren<Props>) => {
  const {header, footer, semiModal, children} = props

  const pageTransition = {
    duration: 1,
    opacity: { ease: 'easeOut', duration: 1 }
  };
  
  return (
    <div className='base-view' id='base-view-id'>
      <div className='header-space' />
      <header>
        {header}
      </header>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={pageTransition}
        >
        {children}
        </motion.div>
      </main>
      <footer>
        {footer}
      </footer>
      {semiModal}
    </div>
  );
}
