import React from "react";
import { navigate } from "gatsby";
import { RouteComponentProps } from "@reach/router";
import { isLoggedIn } from "../util/auth";

interface Props extends RouteComponentProps {
  component: React.FC;
}

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  location,
  ...rest
}) => {
  if (!isLoggedIn() && location && location.pathname !== `/app/login`) {
    navigate("/app/login");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
