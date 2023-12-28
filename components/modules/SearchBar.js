import { useState } from 'react';
import styles from './SearchBar.module.css';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SearchBar() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const router = useRouter();
  const valueError = () =>
    toast.error('Enter Min and Max Prices!!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      valueError();
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div>
          <input
            placeholder="enter min-price"
            value={min}
            onChange={(e) => {
              setMin(e.target.value);
            }}
          />
          <input
            placeholder="enter max-price"
            value={max}
            onChange={(e) => {
              setMax(e.target.value);
            }}
          />
        </div>
        <button onClick={searchHandler}>Search</button>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default SearchBar;
