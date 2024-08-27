import {
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  Linkedin,
  TwitchIcon,
  TwitterIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Link href={"www.facebook.com"}>
          <FacebookIcon />
        </Link>
        <Link href={"www.facebook.com"}>
          <InstagramIcon />
        </Link>
        <Link href={"www.facebook.com"}>
          <TwitchIcon/>
        </Link>
        <Link href={"www.facebook.com"}>
          <Linkedin />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
