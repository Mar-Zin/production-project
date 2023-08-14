import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect, Currency } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

export enum validKeyboardKeys {
    BACKSPACE = 'Backspace',
    ARROWRIGHT = 'ArrowRight',
    ARROWLEFT = 'ArrowLeft',
}

interface ProfileCardProps {
  className?: string;
  data?: Profile
  error?: string
  readonly?: boolean
  isLoading?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}
export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        data,
        isLoading,
        error,
        readonly,
        className,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const onKeyPress = (event: React.KeyboardEvent) => {
        if (
            !/[0-9]/.test(event.key)
        && !(Object.values(validKeyboardKeys).some((v) => v === event.key))
        ) {
            event.preventDefault();
        }
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loader])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            src={data?.avatar}
                        />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Введите имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Введите фамилию')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Введите возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readonly}
                    onKeyPress={onKeyPress}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Введите город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Установите аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readOnly={readonly}
                />
            </div>
        </div>
    );
};
