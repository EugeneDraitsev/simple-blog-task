import * as React from 'react'

interface IShow {
  children?: React.ReactChild
  if: any
}

export const Show: React.SFC<IShow> = (props): any => {
  if (Boolean(props.if)) {
    return props.children
  }
  return null
}
