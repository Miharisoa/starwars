import React from "react";
import { useNavigate } from "react-router-dom";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

// import Icon from "awesome-react-icons";
import "./Header.css";

import { useSelector, useDispatch } from "react-redux";
import { setTitle } from "../../redux/actions";

function Header() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div id="sidenav">
      <h3 className="text-white px-4" style={{ textAlign: "left" }}>
        Star wars
      </h3>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // maybe push to the route
          console.log("itemId >>> ", itemId);
          let route = "/";
          let title = ""
          if (itemId !== "/" && itemId !== "/c") {
            route = "../listing?category="+ itemId;
            title = itemId;
          }
          dispatch(setTitle(title));
          navigate(route, { replace: true });
        }}
        items={[
          {
            title: "Home",
            itemId: "/",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="star" />,
          },
          {
            title: "Categories",
            itemId: "/c",
            // elemBefore: () => <Icon name="briefcase" />,
            subNav: [
              {
                title: "Films",
                itemId: "films",
              },
              {
                title: "People",
                itemId: "people",
              },
              {
                title: "Planets",
                itemId: "planets",
              },
              {
                title: "Species",
                itemId: "species",
              },
              {
                title: "Starships",
                itemId: "starships",
              },
              {
                title: "Vehicles",
                itemId: "vehicles",
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
