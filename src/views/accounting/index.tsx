import { Container, Grid2 } from '@mui/material'
import { useState } from 'react'

export type ProductType = {
  name: string
  price: number
}

export const AccountingView = () => {

  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([])

  const handleClick = (product: ProductType) => {
    setSelectedProducts([...selectedProducts, product])
  }

  return (
    <div className='flex flex-col gap-6 font-mono py-8 bg-aime-base'>
      <Container maxWidth='sm' className='flex flex-col gap-4'>
        <div className='border border-aime-base bg-white h-40 p-2 flex flex-col gap-2'>
          <p className='text-xl'>合計</p>
          <div className='flex gap-2 w-full h-full items-end justify-end'>
            <div className='text-8xl'>{
              selectedProducts.reduce((pre, curr) => pre + curr.price, 0)
              }</div>
            <div className='text-5xl'>円</div>
          </div>
        </div>
        <div className='bg-white flex flex-col p-2'>
          {selectedProducts.map((product) => {
            return (
              <div className='flex border-1 border-b-black'>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            )
          })}
        </div>
      </Container>
      <Container maxWidth='lg'>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='flex flex-col p-4 bg-white border-arisa-pink border-4'>
              <p className='text-lg'>桜夢ありさ</p>
              <div className='flex gap-2 py-2 justify-between'>
                <button className='shrink-0 bg-white border-2 border-arisa-pink p-2'
                  onClick={() => handleClick({name: 'サインなし（桜夢ありさ）', price: 1000})}>サなし</button>
                <button className='shrink-0 bg-white border-2 border-arisa-pink p-2'
                onClick={() => handleClick({name: 'らくがき（桜夢ありさ）', price: 2000})}>らくがき</button>
                <button className='shrink-0 bg-white border-2 border-arisa-pink p-2'
                onClick={() => handleClick({name: '宿題（桜夢ありさ）', price: 3000})}>宿題</button>
              </div>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='flex flex-col p-4 bg-white border-yuzuki-white border-4'>
              <p className='text-lg'>成瀬ゆづき</p>
              <div className='flex gap-2 py-2 justify-between'>
                <button className='shrink-0 bg-white border-2 border-yuzuki-white p-2'
                onClick={() => handleClick({name: 'サインなし（成瀬ゆづき）', price: 1000})}>サなし</button>
                <button className='shrink-0 bg-white border-2 border-yuzuki-white p-2'
                onClick={() => handleClick({name: 'らくがき（成瀬ゆづき）', price: 2000})}>らくがき</button>
                <button className='shrink-0 bg-white border-2 border-yuzuki-white p-2'
                onClick={() => handleClick({name: '宿題（成瀬ゆづき）', price: 3000})}>宿題</button>
              </div>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='flex flex-col p-4 bg-white border-sara-blue border-4'>
              <p className='text-lg'>水羽さら</p>
              <div className='flex gap-2 py-2 justify-between'>
                <button className='shrink-0 bg-white border-2 border-sara-blue p-2'
                onClick={() => handleClick({name: 'サインなし（水羽さら）', price: 1000})}>サなし</button>
                <button className='shrink-0 bg-white border-2 border-sara-blue p-2'
                onClick={() => handleClick({name: 'らくがき（水羽さら）', price: 2000})}>らくがき</button>
                <button className='shrink-0 bg-white border-2 border-sara-blue p-2'
                onClick={() => handleClick({name: '宿題（水羽さら）', price: 3000})}>宿題</button>
              </div>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='flex flex-col p-4 bg-white border-nami-purple border-4'>
              <p className='text-lg'>鈴乃なみ</p>
              <div className='flex gap-2 py-2 justify-between'>
                <button className='shrink-0 bg-white border-2 border-nami-purple p-2'
                onClick={() => handleClick({name: 'サインなし（鈴乃なみ）', price: 1000})}>サなし</button>
                <button className='shrink-0 bg-white border-2 border-nami-purple p-2'
                onClick={() => handleClick({name: 'らくがき（鈴乃なみ）', price: 2000})}>らくがき</button>
                <button className='shrink-0 bg-white border-2 border-nami-purple p-2'
                onClick={() => handleClick({name: '宿題（鈴乃なみ）', price: 3000})}>宿題</button>
              </div>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='flex flex-col p-4 bg-white border-shion-red border-4'>
              <p className='text-lg'>夏井しおん</p>
              <div className='flex gap-2 py-2 justify-between'>
                <button className='shrink-0 bg-white border-2 border-shion-red p-2'
                onClick={() => handleClick({name: 'サインなし（夏井しおん）', price: 1000})}>サなし</button>
                <button className='shrink-0 bg-white border-2 border-shion-red p-2'
                onClick={() => handleClick({name: 'らくがき（夏井しおん）', price: 2000})}>らくがき</button>
                <button className='shrink-0 bg-white border-2 border-shion-red p-2'
                onClick={() => handleClick({name: '宿題（夏井しおん）', price: 3000})}>宿題</button>
              </div>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='flex flex-col p-4 bg-white border-aine-yellow border-4'>
              <p className='text-lg'>星宮あいね</p>
              <div className='flex gap-2 py-2 justify-between'>
                <button className='shrink-0 bg-white border-2 border-aine-yellow p-2'
                onClick={() => handleClick({name: 'サインなし（星宮あいね）', price: 1000})}>サなし</button>
                <button className='shrink-0 bg-white border-2 border-aine-yellow p-2'
                onClick={() => handleClick({name: 'らくがき（星宮あいね）', price: 2000})}>らくがき</button>
                <button className='shrink-0 bg-white border-2 border-aine-yellow p-2'
                onClick={() => handleClick({name: '宿題（星宮あいね）', price: 3000})}>宿題</button>
              </div>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='flex flex-col p-4 bg-white border-yuka-orange border-4'>
              <p className='text-lg'>愛月ゆうか</p>
              <div className='flex gap-2 py-2 justify-between'>
                <button className='shrink-0 bg-white border-2 border-yuka-orange p-2'
                onClick={() => handleClick({name: 'サインなし（愛月ゆうか）', price: 1000})}>サなし</button>
                <button className='shrink-0 bg-white border-2 border-yuka-orange p-2'
                onClick={() => handleClick({name: 'らくがき（愛月ゆうか）', price: 2000})}>らくがき</button>
                <button className='shrink-0 bg-white border-2 border-yuka-orange p-2'
                onClick={() => handleClick({name: '宿題（愛月ゆうか）', price: 3000})}>宿題</button>
              </div>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <div className='flex flex-col p-4 bg-white border-aime-base border-4'>
              <p className='text-lg'>その他</p>
              <div className='flex gap-2 py-2 justify-between'>
                <button className='shrink-0 bg-white border-2 border-aime-base p-2'
                onClick={() => handleClick({name: 'ランダムチェキ', price: 500})}>ランダム</button>
                <button className='shrink-0 bg-white border-2 border-aime-base p-2' disabled>その他</button>
                <button className='shrink-0 bg-white border-2 border-aime-base p-2' disabled>その他</button>
              </div>
            </div>
          </Grid2>
        </Grid2>
      </Container>
      <Container maxWidth='sm'>
        <div className='flex gap-4'>
        <button className='bg-slate-400 p-4'onClick={() => setSelectedProducts([])}>クリア</button>
        </div>
        
      </Container>
    </div>
  )
}
