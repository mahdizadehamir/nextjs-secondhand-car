import { useState } from 'react';
import styles from './SearchBar.module.css';
import { useRouter } from 'next/router';
function SearchBar() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const router = useRouter();
  const searchHandler = () => {
    if ( min && max){
      router.push(`/filter/${min}/${max}`)
    }else
    {
      alert("Enter Min and Max Values!!!")
    }
  }
  return (
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
  );
}

export default SearchBar;
