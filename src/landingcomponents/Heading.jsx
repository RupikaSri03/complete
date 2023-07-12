import Form from 'react-bootstrap/Form';

function InputSizesExample() {
  return (
    <div className='text-black'>
    <br />
      <Form.Control size="lg" type="text" placeholder="EDUCATION" />
      <br />
      {/* <Form.Control type="text" placeholder="Normal text" />
      <br />
      <Form.Control size="sm" type="text" placeholder="Small text" /> */}
    </div>
  );
}

export default InputSizesExample;