import { Link, useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import newsList from '../../../resources/news.json'
import { NotFoundView } from '../../notFound'
import { BaseViewLayout } from '../../../layouts/BaseViewLayout'

export const NewsDetailView = () => {
  const newsId = useParams()
  const newsIndex = newsList.findIndex((news) => news.id === Number(newsId.newsId))
  const newsData = newsList[newsIndex]
  if (newsData) {
    return (
      <BaseViewLayout>
        <Container maxWidth='md' className='pt-12'>
          <div className='pb-2 pt-6'>{newsData.date}</div>
          <div className='font-sans text-lg'>{newsData.title}</div>
          <div className='p-4'>
            {Object.values(newsData.context).map((text, index) => {
              return text ? <div key={index}>{text}</div> : <br></br>
            })}
            {Object.values(newsData.urls).map((url, index) => {
              return (
                <div className='url-area' key={index}>
                  <div className='url-title'>●{url.title}</div>
                  <Link target='_blank' to={url.url}>
                    {url.url}
                  </Link>
                </div>
              )
            })}
          </div>
          {Object.values(newsData.img).map((img, index) => {
            return (
              <div className='news-img-area' key={index}>
                <img src={img} alt='' />
              </div>
            )
          })}
          <div className='py-6 text-center'>
            <Link to='/news' className='rounded-xl border border-cyan-600 bg-white px-6 py-3'>
              ニュース一覧
            </Link>
          </div>
        </Container>
      </BaseViewLayout>
    )
  } else {
    return <NotFoundView />
  }
}
