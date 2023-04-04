import { ToastContainer, toast } from 'react-toastify';
import observable from './Observable';

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}
function toastify(data) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
  const handleClick = () => observable.notify('User clicked button!!');
  const handleToggle = () => observable.notify('User toggled switch');
  return (
    <div className="App">
      <Button onClick={handleClick}>Click me!!</Button>
      <FormControlLabel control={<Switch onChange={handleToggle} />} />
      <ToastContainer />
    </div>
  );
}
