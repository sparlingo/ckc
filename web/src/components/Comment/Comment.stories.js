import Comment from './Comment'

export const generated = () => {
  return (
    <div className="m-4">
      <Comment
        comment={{
          name: 'Joe Smith',
          body: 'I am Joe Smith and I have crazy political views that I will repeat ad naseum. Blah blah blah.',
          createdAt: '2021-05-01T12:00:43Z',
        }}
      />
    </div>
  )
}

export default { title: 'Components/Comment' }
