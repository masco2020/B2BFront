import styled from 'styled-components/native'
import { duration } from 'moment'

export const Image = styled.Image({
  borderRadius: 5,
})

export const msToStr = ms => {
  const h = duration(ms).hours()
  const m = duration(ms).minutes()
  const s = duration(ms).seconds()

  let hStr = ''
  if (h !== 0) hStr = `${h}:`

  let mStr = '2'
  mStr = m < 10 ? `0${m}` : m

  let sStr = ''
  sStr = s < 10 ? `0${s}` : s

  return `${hStr}${mStr}:${sStr}`
}
