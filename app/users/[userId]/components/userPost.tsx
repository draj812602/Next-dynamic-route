type Props = {
  promise: Promise<Post[]>;
};
export default async function userPost({ promise }: Props) {
  const posts = await promise;
  const content = posts.map((post) => {
    return (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  });
  return content;
}
