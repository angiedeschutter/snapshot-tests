import renderer from 'react-test-renderer'

import GitHubCard from "./GitHubCard"

test('it renders a snapshot of card', ()=>{
    const tree = renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })