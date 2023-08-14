import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptions {
    value?: string
    content?: string
}

interface SelectProps {
  className?: string;
  label?: string
  value?: string
  onChange?: (value: string) => void
  options?: SelectOptions[]
  readOnly?: boolean
}
export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        value,
        onChange,
        options,
        readOnly,
    } = props;

    const mods: Mods = {
        [cls.readonly]: readOnly,
    };

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            value={opt.value}
            key={opt.value}
            className={cls.option}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div
            className={classNames(cls.Wrapper, mods, [className])}
        >
            {label
            && (
                <span
                    className={cls.label}
                >
                    {`${label} >`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readOnly}
            >
                {optionsList}
            </select>
        </div>
    );
});
