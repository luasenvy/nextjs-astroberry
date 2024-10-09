"use client";

import classnames from "classnames";
import Image from "next/image";

import ViewTransitionLink from "./ViewTransitionLink";

import AvatarImage from "@/public/assets/avatar.jpg";

export interface AvatarProps {
  className?: string;
}

export default function Avatar({ className }: AvatarProps) {
  return (
    <ViewTransitionLink href="/">
      <Image
        id="avatar"
        src={AvatarImage}
        alt="avatar"
        className={classnames(className, "w-24 h-24 rounded-full cursor-pointer")}
      />
    </ViewTransitionLink>
  );
}
