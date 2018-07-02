import React from 'react'
import renderer from 'react-test-renderer'
import App from './../../client/app'

test('App component renders with h1 text', () => {
    const component = renderer.create(<App />)
    let tree = component.toJSON()
    console.log(tree)
    expect(tree).toMatchSnapshot()
})
