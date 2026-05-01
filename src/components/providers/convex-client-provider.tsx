"use client";

import type { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

const client = convexUrl ? new ConvexReactClient(convexUrl) : null;

type ConvexClientProviderProps = {
  children: ReactNode;
};

export function ConvexClientProvider({
  children,
}: ConvexClientProviderProps) {
  if (!client) {
    return <>{children}</>;
  }

  return <ConvexProvider client={client}>{children}</ConvexProvider>;
}
