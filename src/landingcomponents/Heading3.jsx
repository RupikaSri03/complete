import Form from 'react-bootstrap/Form';

function InputSizesExample3() {
  return (
    <div className='text-primary'>
    <br />
      <Form.Control size="lg" type="text" placeholder="CONTACT US" />
      <br />
      {/* <Form.Control type="text" placeholder="Normal text" />
      <br />
      <Form.Control size="sm" type="text" placeholder="Small text" /> */}
    </div>
  );
}

export default InputSizesExample3;