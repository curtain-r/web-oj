import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar, List } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const Comments = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  // 获取评论列表
  const data = [
    {
      actions: actions,
      avatar: 'https://th.wallhaven.cc/lg/8o/8ogod1.jpg',
      content: 'hhhhhhh',
    }
  ]
  return (
    <List
      className="comment-list"
      header={`${data.length} 评论`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => {
        <li>
          <Comment
            actions={item.actions}
            author={'sagnuine'}
            avatar={
              item.avatar
            }
            content={
              item.content
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </li>
      }}
    />
  );
};
export default Comments;