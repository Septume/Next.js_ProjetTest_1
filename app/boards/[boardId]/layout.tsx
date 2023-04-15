import { Children, PropsWithChildren } from "react";

export default function LayoutBoard ({
    params,
    children,
}: PropsWithChildren <{
  params: { boardId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}>) {
  return <div>
    LayoutBoard 
    <h2>({params.boardId})</h2>
    {children}
    </div>;
}

