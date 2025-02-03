import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    isLoading?: boolean
    comments: Comment[]
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation('article-details');

    return (
        <div className={classNames('', {}, [className])}>
            {comments.length
                ? comments.map((comment) => (
                    <CommentCard comment={comment} key={comment.id} isLoading={isLoading} />
                ))
                : <Text text={t('Пока нет комментариев')} />}
        </div>
    );
});
