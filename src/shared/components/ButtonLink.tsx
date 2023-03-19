import React, { CSSProperties } from "react";
import Link from "next/link";

import type { RootNameKeys } from "@/common/utils/RootTypes";
import type { Url } from "next/dist/shared/lib/router/router";

type Props = {
  navigation: Url;
  name: string;
  className?: string;
  style?: CSSProperties | undefined;
};

const ButtonLink: React.FC<Props> = ({
  navigation,
  name,
  className,
  style,
  ...rest
}) => {
  return (
    <Link
      style={style}
      href={navigation}
      className={className ?? "btn btn-primary"}
      {...rest}
    >
      {name}
    </Link>
  );
};

export default ButtonLink;
