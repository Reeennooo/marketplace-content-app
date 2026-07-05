import {Navigate} from "react-router-dom";
import type {FC, ReactNode} from 'react';

interface Props {
  isRegistered: boolean,
  children: ReactNode,
}

export const ProtectedRoute: FC<Props> = (props) => {
  const {isRegistered, children} = props;
  if (!isRegistered) {
    return <Navigate to="/welcome" replace />;
  }
  return children;
};
