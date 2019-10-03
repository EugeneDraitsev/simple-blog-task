import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react'

import { Card } from '../components/card'
import { StoryInfo } from '../components/stories'
import { SingleStory } from '../components/stories/single-post.component'

const StoriesWrapper = styled.div`
  min-height: calc(100vh - 20px);
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// eslint-disable-next-line max-len
const text = '<p>Laborum Lorem duis eiusmod minim irure sit reprehenderit esse ea nisi duis nostrud mollit. Sit sunt commodo labore quis elit incididunt veniam culpa Lorem dolore labore culpa. Voluptate dolore adipisicing dolore sint id id anim cupidatat nulla pariatur exercitation laborum irure. Excepteur sit dolor qui pariatur anim eu esse.</p><p>Ipsum aute labore culpa laboris laborum. Tempor velit incididunt fugiat laboris culpa amet aliqua ad est elit do laboris nulla Lorem. Est magna eiusmod irure duis Lorem culpa nostrud do cupidatat exercitation.</p><p>Laborum amet laborum eiusmod officia tempor laborum culpa Lorem dolore sit. Eiusmod quis aliquip ea labore minim nisi culpa sit ullamco quis in velit. Occaecat aliquip fugiat sint dolore in et dolor ad. Esse minim pariatur sit ea ullamco proident. Ipsum et amet excepteur qui aliqua qui aliqua laboris sit amet anim nisi exercitation exercitation. Lorem labore qui velit laborum ex irure dolore adipisicing.</p><p>Nostrud exercitation occaecat nisi officia ipsum et nisi incididunt ad. Ex nostrud occaecat proident eiusmod anim culpa officia aute. Dolor nostrud ex aliquip sunt. Commodo esse voluptate sit quis excepteur aliquip ea eu pariatur.</p><p>Laboris mollit eiusmod labore ullamco non mollit incididunt ullamco voluptate anim id adipisicing. Tempor eu occaecat aliquip nostrud eiusmod ipsum magna labore aute. Dolor proident amet excepteur Lorem deserunt consectetur sit in officia id mollit excepteur. Veniam occaecat adipisicing anim consectetur enim magna excepteur elit in ex Lorem est qui. Anim officia in reprehenderit exercitation in nisi cillum Lorem tempor velit excepteur anim. Excepteur adipisicing exercitation nulla commodo duis cillum quis dolor culpa nostrud esse. In ullamco sint elit velit id ut elit fugiat pariatur exercitation do esse adipisicing veniam.</p><p>Deserunt occaecat anim ipsum ex. Ullamco ea ullamco nulla dolor elit incididunt voluptate ex anim voluptate minim. Occaecat minim in pariatur ex enim elit deserunt dolor magna sit amet velit dolor commodo. Proident veniam sit aute ipsum veniam ipsum consectetur dolor eiusmod proident.</p><p>Ipsum exercitation ut non nulla. Lorem voluptate amet ad quis est velit fugiat exercitation reprehenderit. Et ut minim esse aliquip enim proident incididunt amet. Nulla qui ad eu deserunt aliquip.</p><p>Minim duis nisi voluptate elit cillum minim officia id proident nostrud aliqua quis. Voluptate mollit Lorem dolore nulla reprehenderit. Magna cillum proident sint mollit duis duis consectetur labore laborum dolor. Duis anim do esse dolore non velit in adipisicing est proident dolore mollit. Culpa labore cupidatat est excepteur Lorem consequat pariatur consectetur qui anim.</p><p>In exercitation cillum exercitation elit do non commodo culpa sint sunt nostrud est aute ea. Duis fugiat reprehenderit duis occaecat irure occaecat consequat nostrud culpa fugiat commodo dolore voluptate. Ipsum occaecat enim cupidatat exercitation. Enim anim consectetur exercitation eu labore fugiat labore nostrud proident nostrud amet in. Cupidatat labore veniam duis nulla ad aute quis eiusmod. Laboris sunt sint sint nostrud sit magna eu sit dolore.</p><p>Dolor irure laboris ad reprehenderit aute id non non aute anim officia. Id reprehenderit nostrud nulla culpa occaecat nulla exercitation reprehenderit laborum sunt culpa velit duis eu. Nostrud in velit in excepteur ex eiusmod. Quis laboris deserunt consectetur commodo quis nulla est sunt eu qui enim in.</p><p>Tempor ea mollit magna nulla aute sunt labore ea qui sunt sunt do aute. Reprehenderit id nostrud pariatur dolore ut et in ut est id fugiat duis id est. Sint do quis culpa amet commodo ad sit voluptate eiusmod nisi id laborum qui. Consequat culpa fugiat pariatur duis eu aute reprehenderit aliqua irure.</p><p>Sint ullamco exercitation sit veniam enim reprehenderit aliqua ut laborum cillum deserunt. Incididunt velit sint nulla veniam reprehenderit voluptate culpa voluptate qui ipsum nulla. Occaecat esse do exercitation tempor do eu nostrud aute enim veniam dolor ullamco et. Dolor excepteur labore occaecat ea. Enim enim laboris culpa in aute anim. Labore amet duis ex est. Qui officia consequat non ad.</p>'

export default () => storiesOf('Story', module)
  .add('Story info', () => {
    const StyledWrapper = styled(StoriesWrapper)`
      width: 400px;
    `
    const StyledCard = styled(Card)`
      padding: 20px;
    `

    return (
      <StyledWrapper>
        <StyledCard>
          <StoryInfo
            user={{ id: 1 }}
            story={{
              author: {
                id: 1,
                name: 'Author',
                avatar: '🌿',
              },
              comments: [1, 2, 3],
              views: 14,
              formattedDate: '09.05.2018 03:17',
            }}
          />
        </StyledCard>
      </StyledWrapper>
    )
  })
  .add('Single story', () => (
    <StoriesWrapper>
      <SingleStory
        user={{ id: 1 }}
        story={{
          author: {
            id: 1,
            name: 'Author',
            avatar: '🌿',
          },
          comments: [1, 2, 3],
          views: 14,
          formattedDate: '09.05.2018 03:17',
          title: 'Sint Excepteur Duis',
          text,
        }}
        comments={[]}
      />
    </StoriesWrapper>
  ))
