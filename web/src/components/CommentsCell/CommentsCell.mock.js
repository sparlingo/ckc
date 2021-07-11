// Define your own mock data here:
export const standard = () => /* vars, { ctx, req } */ ({
  comments: [
    {
      id: 1,
      name: 'Bob Smith',
      body: 'stupid crazy nonsense',
      createdAt: '2021-05-01T12:00:01Z',
    },
    {
      id: 2,
      name: 'Dave Smith',
      body: 'I am the more normal Smith brother, not like the other two',
      createdAt: '2021-05-01T12:01:00Z',
    },
    {
      id: 3,
      name: 'Doug Smith',
      body: 'I am nuts but I am way more nuts than Bob. I make him seem normal',
      createdAt: '2021-05-01T12:04:32Z',
    },
  ],
})
