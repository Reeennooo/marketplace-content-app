import {useEffect, useState} from 'react';
import {SquircleWrap} from '../SquircleWrap/SquircleWrap.tsx';
import {Icon} from '../Icon/Icon.tsx';

export type InputProps = {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: 'text' | 'number' | 'date';
  maxLength?: number;
  showError?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
};

const defaultStyles = 'bg-surface';
const errorStyles = 'bg-red-500/[0.12] border-b-2 border-red-500';

export const Input = (props: InputProps) => {
  const {
    className = '',
    placeholder = '',
    value,
    onChange,
    showError,
    required,
    inputMode,
    type = 'text',
    maxLength,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length > maxLength) return;
    if (type === 'number' && e.target.value !== '' && !/^[0-9]*$/.test(e.target.value)) return;
    onChange(e.target.value);
  };

  useEffect(() => {
    setHasValue(value?.length > 0);
  }, [value]);

  const showFloatingLabel = isFocused || hasValue;

  return (
    <SquircleWrap
      cornerRadius={16}
      className={`w-full h-16 px-4 relative transition-all ease-in-out duration-200 ${
        showError ? errorStyles : defaultStyles
      }`}
    >
      <label
        className={`absolute text-text left-4 transition-all duration-200 pointer-events-none
					${showFloatingLabel ? 'top-[11px] text-[11px] leading-[16px]' : 'top-1/2 -translate-y-1/2'}
				`}
      >
        {placeholder}
        {required && '*'}
      </label>
      <input
        className={`bg-transparent outline-none w-full h-full pt-4 placeholder-transparent ${className}`}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        inputMode={inputMode}
      />
      {maxLength && type !== 'date' && (
        <div
          className={`absolute z-20 right-4 transition-all duration-200 ease-in-out top-[11px] ${
            hasValue ? '-translate-x-8' : 'translate-x-0'
          } text-[11px] leading-[16px] text-primary`}
        >
          {value.length}/{maxLength}
        </div>
      )}
      {hasValue && type !== 'date' && (
        <button
          type={'button'}
          className="
            bg-transparent
            outline-none
            w-6
            h-6
            p-0.5
            absolute z-20 right-4 top-1/2 -translate-y-1/2 size-5
            cursor-pointer
          "
          onClick={(e) => {
            e.stopPropagation();
            onChange('');
          }}
        >
          <Icon
            name='cross'
            properties={{className: "w-full h-full fill-primary"}}
          />
        </button>
      )}
    </SquircleWrap>
  );
};