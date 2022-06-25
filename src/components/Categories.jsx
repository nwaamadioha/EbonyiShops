import styled from "styled-components"
import { categories, categories2 } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
`


const Categories = () => {
  return (
    <>
      <Container>
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
      </Container>
      <Container>
      {categories2.map(item=>(
        <CategoryItem item={item} key={item.id}/>
        ))}
      </Container>
    </>
  )
}

export default Categories