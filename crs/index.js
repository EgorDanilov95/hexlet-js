import _ from 'lodash'
const heyLast = (hey, lastcharm) => {
  hey = 'Hello, Hexlet'
  lastcharm = _.last(['one', 'two'])
  return `${hey} ${lastcharm}`
}
export default heyLast
