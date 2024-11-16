import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import newsData from '../../resources/news.json'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

type NewsListProps = {
  max?: number
  isPagination?: boolean
}

type NewsProps = {
  id: number
  date: string
  title: string
  context: string[]
  img : string[]
}

export const NewsList = (props: NewsListProps) => {
  const {max, isPagination} = props;
  const maxContent = max ? max : 10;
  const pageCount = Math.ceil(newsData.length / maxContent);
  const [page, setPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState(Array<NewsProps>);

  useEffect(() => {
    //表示データを抽出
    setDisplayedItems(newsData.slice(((page - 1) * maxContent), page * maxContent))
  }, [])

  const handleChange = (index: number) => {
    setPage(index);
    setDisplayedItems(newsData.slice(((index - 1) * maxContent), index * maxContent))
  }

  return (
    <div className='my-3'>
      <Container maxWidth='md'>
        <div className='flex flex-col gap-5'>
          {Object.values(displayedItems).map((data, index) => {
            return (
              <div className='p-2' key={index}>
                <Link to={`/news/${data.id}`} >
                  <div className=' font-sans font-bold'>{data.date}</div>
                  <div className='pl-2 font-sans'>{data.title}</div>
                </Link>
              </div>
              );
            })
          }
        </div>
        {isPagination ?
          <div className='relative h-[50px]'>
            <Pagination
              className='absolute left-1/2 -translate-x-1/2'
              count={pageCount < 1 ? 1 : pageCount}
              onChange={() => {handleChange(page)}}
              page={page}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: HiArrowLeft, next: HiArrowRight }}
                  {...item}
                />
              )}
            />
          </div> : <></>}
        </Container>
    </div>
  )
}
