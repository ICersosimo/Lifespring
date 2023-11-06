
import { Button } from 'antd';

interface Props{
  text: string,
  path: string
}

function LinkButton({text, path} : Props){
  return  <Button type='link' style={{ marginLeft: '70px', color:"#000000" }} href={path} >{text}</Button> 
}



export default LinkButton