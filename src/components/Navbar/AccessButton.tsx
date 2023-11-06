
import { Button } from 'antd';

interface Props{
  text: string,
  path: string
}

function AccessButton({text, path} : Props){
  return  (
  (text=='LOG IN') ? <Button type='primary' style={{ marginLeft: '70px', background: '#386BEA', color:"black" }} href={path} >{text}</Button> :
  <Button type='primary' style={{ marginLeft: '10px', background: '#e3e1e1', color:"#386BEA" }} href={path} >{text}</Button> 
  )
}



export default AccessButton