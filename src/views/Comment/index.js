import { useState, useEffect } from 'react';
import img from '../../avator.png'
import './index.css';

function App() {

  const [actived, setActived] = useState('hot')
  const [comment, setComment] = useState('')
  const [commentList, setConmmentList] = useState([
    {
      commentId: 1,
      name: '张三',
      content: '11111111',
      time: '2023-02-07',
    },
    {
      commentId: 2,
      name: '李四',
      content: '2222222222',
      time: '2023-02-06',
    },
  ])

  useEffect(() => {
    // console.log(commentList);
  });

  function commentChange(e) {
    setComment(e.target.value)
  }

  function confirmAdd() {
    if (!comment) {
      alert('不能提交空内容！');
      return
    }
    setConmmentList([...commentList, {
      commentId: commentList.length + 1,
      name: '我',
      content: comment,
      time: new Date().toLocaleString()
    }])
    setComment('')
  }

  function delComment(id) {
    console.log(id)
    setConmmentList(commentList.filter(item => item.commentId !== id))
  }

  return (
    <div className="App">
      <div className='total'>{commentList.length}条评论</div>
      <div className='tab'>
        <span className={actived === 'hot' ? 'actived' : ''} onClick={() => setActived('hot')}>按热度排序</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span className={actived === 'time' ? 'actived' : ''} onClick={() => setActived('time')}>按时间排序</span>
      </div>
      <div className='addComment'>
        <div className='img'>
          <img src={img} alt='' />
        </div>
        <textarea className='addCommentContent' value={comment} onChange={commentChange}></textarea>
        <button className='confirmAdd' onClick={confirmAdd}>提交</button>
      </div>
      <div className='commentWrapper'>
        {commentList.map((item) =>
          <div className='commentList' key={item.commentId}>
            <div className='img'>
              <img src={img} alt='' />
            </div>
            <div className='right'>
              <div className='commentName'>{item.name}</div>
              <div className='commentContent'>{item.content}</div>
              <div className='commentFooter'>
                <div className='commentTime'>{item.time}</div>
                <div className='commentTime'>👍</div>
                <div className='commentTime'>👎</div>
                <div className='commentDelete' onClick={() => delComment(item.commentId)}>删除</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
