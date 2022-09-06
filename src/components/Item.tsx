import { ShopItem } from '../data/data';
import { ChangeEvent, useState } from 'react';
import styles from '../styles/item.module.css';

type InputProps = {
  name?: string;
  value: string | number;
  type?: string;
  min?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

function InputElement(props: InputProps) {
  return <input type={props.type} value={props.value} min={props.min}></input>;
}

export const Item = ({ name, image, price }: ShopItem) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity((prevState) => (prevState = parseInt(e.target.value)));
    e.preventDefault();
  };

  const increment = (): void => {
    setQuantity((prevState) => {
      return prevState + 1;
    });
  };

  const decrement = (): void => {
    setQuantity((prevState) => {
      return prevState ? prevState - 1 : 0;
    });
  };

  return (
    <div className={styles.item_container}>
      <img src={image} alt={name} />
      <div className={styles.details}>
        <p>{name}</p>
        <span>{price}</span>
      </div>
      <form>
        <button type="button" onClick={increment}>
          {' '}
          +{' '}
        </button>{' '}
        <InputElement
          onChange={handleChange}
          type="number"
          value={quantity}
          min="1"
        />
        <button type="button" onClick={decrement}>
          {' '}
          -{' '}
        </button>
      </form>
    </div>
  );
};
