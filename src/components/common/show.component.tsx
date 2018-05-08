import * as React from 'react'

interface IShow {
  children?: React.ReactChild
  if: boolean
}

export const Show: React.SFC<IShow> = (props): any => {
  if (props.if) {
    return props.children
  }
  return null
}
