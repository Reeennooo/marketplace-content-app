
import {Input, type InputProps} from './Input';
import {formatPhoneNumber, handlePhoneNumberChange} from 'shared/helpers';
import {useRequestPhoneFromTelegram} from 'shared/hooks/useRequestPhoneFromTelegram.ts';

export const PhoneNumberInput = (props: InputProps) => {
  const { requestPhoneFromTelegram } = useRequestPhoneFromTelegram();

  const handleClick = async () => {
    if (props.value) return;
    try {
      const phone = await requestPhoneFromTelegram();
      if (phone) {
        props.onChange(formatPhoneNumber(phone));
      } else {
        console.info('Пользователь отменил выбор номера');
      }
    } catch (err) {
      console.info('Ошибка при получении номера:', err);
    }
  };

  return (
    <div onClick={handleClick}>
      <Input
        {...props}
        inputMode="tel"
        onChange={handlePhoneNumberChange(props.onChange)}
      />
    </div>
  );
};
