import Item from './Item'

function List({ data, modal }) {
  return data.map((it) => <Item key={it.id} {...it} />)
}

export default List
