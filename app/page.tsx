const query = `query {
  postCollection {
    items{
      title
      coverImage {
        url
      }
    }
  }
  authorCollection{
    items{
      name
      picture {
        url
      }
    }
  }
}`;
export async function getData() {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }
   ).then((response) => response.json())

   return response;
}

export default async function Home() {
  const { data } = await getData();
  const { postCollection, authorCollection } = data;
  console.log(authorCollection)
  const list = authorCollection.items.map((author, i) => {
    return (
      <div key={i}>
        <h1>{author.name}</h1>
        <img src={author?.picture?.url} width={500} height={500} />
      </div>
    );
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {list}
    </main>
  )
}

