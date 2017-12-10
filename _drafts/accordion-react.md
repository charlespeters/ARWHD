---
title: 'An Accordion Component in React'
date: 2017-06-03
layout: post
---

I needed to setup some sort of accordion based UI, and I wasn't sure how to get started. When you break apart the UI accordion, it's a parent with an unknown number of children with the children being either open or closed and one child being opened a time. Sounds like it could be easily managed with a simple amount state.

We end up with a result like [this](https://codepen.io/charlespeters/full/bRGqwE/).

In React, when you start nesting JSX each nest component is a child of the parent component. And provided that what you're nesting isn't in the [child as function pattern](http://reactpatterns.com/#function-as-children) (a great topic but for a different time), the children you're passing into the parent component get returned as an normal JavaScript array. This is an array that we could use the `.map()` function on, and that's what we're going to do. So ideally we want a structure that looks like this:

```javascript
<Accordion>
  <AccordionItem>
    // content
  </AccordionItem>
  <AccordionItem>
    // content
  </AccordionItem>
  <AccordionItem>
    // content
  </AccordionItem>
</Accordion>
```

And we want the parent components to pass down state to their children and the children to decide what to show whether their opened or closed.

### Designing the Accordion Item

The `<AccordionItem />` can be represented as a [stateless function](http://reactpatterns.com/#stateless-function), there's not a lot of logic happening and we don't want this component managing it's own state because the it's state change wouldn't effect the other instances of `<AccordionItem />`.

Now the component takes 4 props, `title` (the thing we click on), an `onClick` function (what happens when we click on it), `open` (to show or hide the content inside) and `children` (the content inside). The only thing special going on here is that we're going to show or hide the `children` if the `open` is true or false.

```javascript
const AccordionItem = ({ onClick, title, open, children }) =>
  <div className='Accordion__item'>
    <h4 onClick={onClick}>{title}</h4>
    {open && <div className='Accordion__content' children={children}>}
  </div>
```

### Managing the State

So if we get the children of `<Accordion />` in an array, they're each going to have a position in the array. We should probably have the state in the parent component of `open` be an array to match. For instance if we have 3 children we're going to want an array of `[false, false, false]`. Then map over the state to my child components.


```javascript
class Accordion extends Component {
  state = {
    open: [0, 0, 0, 0]
  }

  render () {
    return (
      <div>
        {children.map((child, i) => React.createElement(child, { open: open[i] },c.props.children))}
      </div>
    )
  }
}
```
