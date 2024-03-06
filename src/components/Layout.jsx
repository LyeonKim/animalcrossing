export default function Layout (props){
  return (
    <>
    <header>헤더</header>
      {props.children}
    <footer>푸터</footer>
    </>
  )
}