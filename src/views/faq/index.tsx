import { Accordion, AccordionDetails, AccordionSummary, Container } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { IoMdArrowDown } from 'react-icons/io'

export const FaqView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full py-16 px-2'>
        <Container maxWidth='md'>
          <div className='text-center font-mono text-[48px] py-8'>FAQ</div>
          <div className='flex flex-col gap-8'>
            <Accordion>
              <AccordionSummary
                expandIcon={<IoMdArrowDown />}
                style={{backgroundColor: '#e9fcff'}}
                className='font-bold'
              >
                  プレゼントを渡すことはできますか？
              </AccordionSummary>
              <AccordionDetails>
                <div className='flex flex-col gap-8'>
                  <div>
                    ・プレゼントやお手紙はメンバーに直接お渡し頂くことも可能ですが、スタッフが中身を確認させていただきます。また、お客様のお名前とお渡ししたいメンバーの名前のご記入をお願い致します。
                  </div>
                  <div>
                    ・プレゼントに関しまして、いかに該当するものはお受け取りできかねますので予めご了承ください。
                  </div>
                  <ul className='pl-4'>
                    <li>私物、開封済みの物</li>
                    <li>手作り、開封済みの食べ物</li>
                    <li>動植物、虫など</li>
                    <li>金券、15000円を超える高価な物</li>
                    <li>その他運営が受け取れないと判断する物</li>
                  </ul>
                  <div>
                    ・お手紙に関しまして、ネガティブな内容や活動と関係のない物、個人的な内容のお手紙はこちらで処分させていただく場合がございます。
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<IoMdArrowDown />}
                style={{backgroundColor: '#d1faff'}}
                className='font-bold'
              >
                プレゼントを送ることはできますか？
              </AccordionSummary>
              <AccordionDetails>
                現在は送ることができません。会場に来てお持ちいただく形のみとなります。ご了承ください。今後、レギュレーションが変わる可能性もありますので、その際にご案内させていただきます。
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<IoMdArrowDown />}
                style={{backgroundColor: '#d1faff'}}
                className='font-bold'
              >
                物販はどのようなレギュレーションですか？
              </AccordionSummary>
              <AccordionDetails>
                <img src='https://aime-official.info/static/pictures/shop_20241105.jpeg' alt='aiMeの物販レギュレーション' />
              </AccordionDetails>
            </Accordion>
          </div>
          
        </Container>
        
      </div>
    </BaseViewLayout>
  )
} 
