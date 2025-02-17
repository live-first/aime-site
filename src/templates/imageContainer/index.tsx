import { PropsWithChildren } from 'react'
import { Image } from '@phosphor-icons/react'
import './index.scss'

type ImageProp = {
  imgUrl?: string
  width?: string
  height?: string
  iconSize?: string
  fontSize?: string
  borderRadius?: string
  childrenHeight?: string
}

export const ImageContainer = (props: PropsWithChildren<ImageProp>) => {
  const { children, imgUrl, width, height, iconSize, borderRadius, fontSize, childrenHeight } =
    props

  const imgHeight = () => {
    return `calc(100% - ${childrenHeight}`
  }

  return (
    <div
      className='img-area'
      style={{
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${borderRadius ? borderRadius : ''}`,
      }}
    >
      {imgUrl ? (
        <>
          <img
            className='event-card-back-img'
            src={imgUrl}
            alt=''
            style={{ height: imgHeight() }}
          />
          <img className='event-card-img' src={imgUrl} alt='' style={{ height: imgHeight() }} />
        </>
      ) : (
        <div className='no-image' style={{ height: imgHeight() }}>
          <div className='img-content' style={{ fontSize: `${fontSize}` }}>
            <Image size={iconSize ? iconSize : 20} />
            No Image
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
