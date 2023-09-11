import Home from './components/Home';
import Menu from './components/Menu';
import HoursLocations from './components/HoursLocations';
import Social from './components/Social';
import Nav from './components/Nav';

const query = `query {

  asset(id: "53P5COIBqjaoMwXSIcGz8Z") {
    url
  }

	pagesCollection {
    items {
      name
      headline
      image {
        url
      }
    }
  }
  
  contentTypeLocationCollection{
    items{
      coordinate {
        lat
        lon
        __typename
      }
      locationContent {
        json
      }
    }
  }
  
  menuCollection (order: name_ASC) {
    items{
      name
      helper
      menuContent {
        json
      }
    }
  }
  
  socialMediaCollection{
    items{
    	name
      link
      icon {
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

export default async function Main() {
  const { data: { pagesCollection, asset, menuCollection, contentTypeLocationCollection, socialMediaCollection } } = await getData();
  const [ contact, home , locationPage, menuPage ] = pagesCollection.items;

  return (
    <main className="flex min-h-screen flex-col justify-start items-center">
      <Nav navLinks={pagesCollection.items}/>
      <Home name={home.name} headline={home.headline} image={home.image.url} />
      <Menu name={menuPage.name} menus={menuCollection.items} />
      <HoursLocations name={locationPage.name} locations={contentTypeLocationCollection.items}/>
      <Social name={contact.name} image={contact.image.url} socialCollection={socialMediaCollection.items}/>
    </main>
  )
}

