import Form from 'react-bootstrap/Form';

function CheckExample({type="checkbox",onChange,label,value}) {
  return (
    <Form>
      <Form.Check onChange={onChange} type={type} label={label} value={value} />
    </Form>
  );
}

export default CheckExample;