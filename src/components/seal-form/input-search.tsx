import { Form, Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { useEffect, useRef, useState } from 'react';
import Wrapper from './components/wrapper';
import { SealFormItemProps } from './types';

type OnSearch = (
  value: string,
  event?:
    | React.ChangeEvent<HTMLInputElement>
    | React.MouseEvent<HTMLElement>
    | React.KeyboardEvent<HTMLInputElement>,
  info?: {
    source?: 'clear' | 'input';
  }
) => void;

const SealInputSearch: React.FC<SearchProps & SealFormItemProps> = (props) => {
  const { label, placeholder, ...rest } = props;
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<any>(null);
  const { status } = Form.Item.useStatus();

  useEffect(() => {
    if (props.value) {
      setIsFocus(true);
    }
  }, [props.value]);

  const handleClickWrapper = () => {
    if (!props.disabled && !isFocus) {
      inputRef.current?.focus?.();
      setIsFocus(true);
    }
  };

  const handleChange = (e: any) => {
    props.onChange?.(e);
  };

  const handleOnFocus = (e: any) => {
    setIsFocus(true);
    props.onFocus?.(e);
  };

  const handleOnBlur = (e: any) => {
    if (!inputRef.current?.input?.value) {
      setIsFocus(false);
      props.onBlur?.(e);
    }
  };

  const handleSearch: OnSearch = (...args) => {
    props.onSearch?.(...args);
  };

  return (
    <Wrapper
      status={status}
      label={label || (placeholder as string)}
      isFocus={isFocus}
      disabled={props.disabled}
      onClick={handleClickWrapper}
    >
      <Input.Search
        {...rest}
        ref={inputRef}
        autoComplete="off"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onSearch={handleSearch}
        onChange={handleChange}
      ></Input.Search>
    </Wrapper>
  );
};

export default SealInputSearch;
