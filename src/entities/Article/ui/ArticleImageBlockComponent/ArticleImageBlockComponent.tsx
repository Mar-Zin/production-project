import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = memo(({ className }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            {t('ArticleImageBlockComponent')}
        </div>
    );
});
