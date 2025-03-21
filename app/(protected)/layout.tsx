import ProtectedRoutes from "@/providers/ProtectedRoutes";
import React, { ReactNode } from "react";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return <ProtectedRoutes>{children}</ProtectedRoutes>;
};

export default ProtectedLayout;
