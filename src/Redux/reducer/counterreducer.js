
export default (state = {counter:0}, { type }) => {
  switch (type) {
    case 'INCREMENT':
    return  {counter: state.counter + 1}

    case 'DECREMENT':
    return {counter: state.counter -1}
    case 'RESET':
        return {counter:0}
  default:
    return state
  }
}