import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

// import Icon from "awesome-react-icons";
import './Header.css';

function Header() {
    return (
      <div id="sidenav">
        <h3 className='text-white px-4' style={{textAlign: 'left'}}>Star wars</h3>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              // maybe push to the route
              console.log("itemId >>> ", itemId)
            }}
            items={[
              {
                title: 'Accueil',
                itemId: '/',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="star" />,
              },
              {
                title: 'Catégories',
                itemId: '/category',
                // elemBefore: () => <Icon name="briefcase" />,
                subNav: [
                  {
                    title: 'Films',
                    itemId: '/category/films',
                  },
                  {
                    title: 'Personnages',
                    itemId: '/category/people',
                  },
                  {
                    title: 'Planètes',
                    itemId: '/category/planets',
                  },
                  {
                    title: 'Espèces',
                    itemId: '/category/species',
                  },
                  {
                    title: 'Vaisseaux spatiaux',
                    itemId: '/category/starships',
                  },
                  {
                    title: 'Véhicules',
                    itemId: '/category/vehicles',
                  },
                ],
              },
            //   {
            //     title: 'My favourites',
            //     itemId: '/another',
            //     // elemBefore: () => <Icon name="thumbs-up" />,
            //     subNav: [
            //       {
            //         title: 'Teams',
            //         itemId: '/management/teams',
            //       },
            //     ],
            //   },
            ]}
          />
      </div>
    );
}

export default Header;