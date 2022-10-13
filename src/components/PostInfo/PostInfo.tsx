import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    comments,
    title,
    body,
  } = post;

  return (
    <article className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && (
          <p>
            {'Posted by '}
            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length
        ? <CommentList comments={comments} />
        : (
          <>
            <hr />
            <strong data-cy="NoCommentsMessage">
              No comments yet
            </strong>
          </>
        )}
    </article>
  );
};
