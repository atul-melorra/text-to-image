import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MultipleInputsExample({value , setValue,generateImage,loading}) {
  console.log("🚀 ~ file: Input.js ~ line 5 ~ MultipleInputsExample ~ value", value)
  return (
    <InputGroup className=" w-50 " style={{margin:"auto"}}>
      <Form.Control  value={value} onChange={(e)=>{setValue(e.target.value)}} className='p-2 text-center' aria-label="Text to Image"  placeholder='Text to Image'/>
      {/* <InputGroup.Text onClick={()=>{generateImage()}}>Search</InputGroup.Text> */}
      <Button style={{background:"#ff8d6d" ,color:"black" ,border:"none"}}  disabled={loading} color='#ff8d6d' onClick={()=>{generateImage()}}>Search</Button>
      
    </InputGroup>
  );
}

export default MultipleInputsExample;