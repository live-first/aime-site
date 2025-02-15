import { Alert, Container, Grid2 } from '@mui/material'
import { BaseViewLayout } from '../../layouts/BaseViewLayout'
import { Link } from 'react-router-dom'

export const ShopView = () => {
  return (
    <BaseViewLayout>
      <div className='w-full px-2 py-16'>
        <Container maxWidth='lg'>
          <h2 className='py-8 text-center font-mono text-[48px]'>SHOP</h2>
          <Container maxWidth='md' className='py-4'>
            <Alert severity='info'>
              本ページに記載されているものは会場販売時の基本レギュレーションとなります。
            </Alert>
          </Container>
          <div className='mb-8 flex flex-col gap-4'>
            <h3 className='py-8 text-center font-mono text-[30px]'>チェキ券</h3>
            <Grid2 container spacing={4}>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <div className='flex flex-col gap-4 rounded-lg border-2 border-[#2945c1] p-8'>
                  <div className='flex justify-between font-mono text-lg'>
                    <h4>サインなしチェキ券</h4>
                    <span>¥1,000</span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div>日付のみ / トーク30秒</div>
                    <div>ソロorツーショット選択可</div>
                  </div>
                </div>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <div className='flex flex-col gap-4 rounded-lg border-2 border-[#2945c1] p-8'>
                  <div className='flex justify-between font-mono text-lg'>
                    <h4>らくがきチェキ券</h4>
                    <span>¥2,000</span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div>らくがき / トーク60秒</div>
                    <div>ソロorツーショット選択可</div>
                  </div>
                </div>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <div className='flex flex-col gap-4 rounded-lg border-2 border-[#2945c1] p-8'>
                  <div className='flex justify-between font-mono text-lg'>
                    <h4>宿題チェキ券</h4>
                    <span>¥3,000</span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div>らくがき / トークなし</div>
                    <div>ソロorツーショット選択可 / 後日お渡し</div>
                  </div>
                </div>
              </Grid2>
            </Grid2>
          </div>

          <div className='mb-8 flex flex-col gap-4'>
            <h3 className='py-8 text-center font-mono text-[30px]'>
              その他
              <span className='pl-3 text-right text-sm'>販売有無は日によって異なります。</span>
            </h3>
            <Grid2 container spacing={4}>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <div className='flex flex-col gap-4 rounded-lg border-2 border-[#2945c1] p-8'>
                  <div className='flex justify-between font-mono text-lg'>
                    <h4>ランダムチェキ券</h4>
                    <span>¥500</span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div>全員集合チェキや私服チェキやコスプレなど</div>
                    <div>普段手に入らないチェキがゲットできます。</div>
                  </div>
                </div>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <div className='flex flex-col gap-4 rounded-lg border-2 border-[#2945c1] p-8'>
                  <div className='flex justify-between font-mono text-lg'>
                    <h4>ブロマイド</h4>
                    <span>¥1,000</span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div>さまざまなブロマイドをご用意しております。</div>
                  </div>
                </div>
              </Grid2>
            </Grid2>
          </div>

          <div className='mb-8 flex flex-col gap-4'>
            <h3 className='py-8 text-center font-mono text-[30px]'>まとめ購入特典</h3>
            <div className='flex flex-col gap-4 rounded-lg border-2 border-[#2945c1] p-8'>
              <div className='flex justify-between font-mono text-lg'>
                <h4>全員集合チェキ or 写メ</h4>
              </div>
              <div className='flex flex-col gap-1'>
                <div>一度のお会計合計が1万円以上で集合チェキor写メ券をプレゼント</div>
              </div>
            </div>
          </div>

          <div className='mb-8 flex flex-col gap-4'>
            <h3 className='py-8 text-center font-mono text-[30px]'>ご新規様特典</h3>
            <div className='flex flex-col gap-1 rounded-lg border-2 border-[#2945c1] p-8'>
              <div>メンバー全員と写メが撮れます！</div>
              <div>
                全員とは混雑時にはご要望に添えない場合があります。また、当日いるメンバーに限ります。あらかじめご了承ください。
              </div>
            </div>
          </div>

          <div className='mb-8 flex flex-col gap-4'>
            <h3 className='py-8 text-center font-mono text-[30px]'>aiMe お目当て入場特典</h3>
            <div className='flex flex-col gap-1 rounded-lg border-2 border-[#2945c1] p-8'>
              <div>当日の入場特典は公式Xまたは物販のスタッフにお尋ねください。</div>
            </div>
          </div>

          <Container maxWidth='sm' className='flex flex-col px-2 py-4 text-center'>
            <Link to='/shop/online' className='rounded bg-aime-base py-4'>
              オンラインショップへ
            </Link>
          </Container>
        </Container>
      </div>
    </BaseViewLayout>
  )
}
