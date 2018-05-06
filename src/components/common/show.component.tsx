import * as React from 'react'

interface IShow {
  children?: React.ReactChild
  if: boolean
}

export const Show: React.SFC<IShow> = (props) => {
  if (props.if) {
    return <div>{props.children}</div>
  }
  return null
}
