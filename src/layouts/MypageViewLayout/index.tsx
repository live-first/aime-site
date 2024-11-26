import React, { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@mui/material'

type Props = {
  semiModal?: React.ReactNode
}

export const MypageViewLayout = (props: PropsWithChildren<Props>) => {
  const {semiModal, children} = props

  const pageTransition = {
    duration: 1,
    opacity: { ease: 'easeOut', duration: 1 }
  };
  
  return (
    <div className='base-view' id='base-view-id'>
      <header>
        aiMe マイページ
      </header>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={pageTransition}
        >
          <Container maxWidth='md'>
            {children}
          </Container>
        </motion.div>
      </main>
      {semiModal}
    </div>
  )
}
