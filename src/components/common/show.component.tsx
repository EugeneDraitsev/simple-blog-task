import React from 'react'

interface IShow {
  children?: React.ReactChild
  if: any
}

export const Show: React.SFC<IShow> = (props): any => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.if) {
    return props.children
  }
  return null
}
