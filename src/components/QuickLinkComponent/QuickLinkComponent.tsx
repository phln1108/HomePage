import { useEffect, useState } from "react";
import { CloseIcon, CrossIcon } from "../../assets/Icons";
import { QuickLink } from "../../Utils/DataStructure"
import { QuickLinkStyle } from "./QuickLinkComponent.style";
import axios from "axios";

interface QuickLinkProps {
  quickLink: QuickLink;
  onRemove: () => void;
}

export const QuickLinkComponent = ({ quickLink, onRemove }: QuickLinkProps) => {
  const [favicon, setFavicon] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavicon = async () => {
      try {
        const domain = new URL(quickLink.link).hostname;
        const faviconUrl = `https://logo.clearbit.com/${domain}`;

        const response = await axios.get(faviconUrl,{
          responseType: "arraybuffer",
        });
        if (response.status !== 200) {
          setFavicon(null);
          return
        }

        setFavicon(faviconUrl);

      } catch (error) {
        console.error("Error fetching favicon:", error);
        setFavicon(null);
      }
    };

    fetchFavicon();
  }, [quickLink]);

  return (
    <QuickLinkStyle onClick={() => {location.href =  quickLink.link}}>
      {favicon ?
        <img src={favicon} />
        :
        <CrossIcon />
      }
      <label>{quickLink.name}</label>
      <button onClick={(e) => {e.stopPropagation(); onRemove()}}>
        <CloseIcon/>
      </button>
    </QuickLinkStyle>
  )
}

export const QuickLinkEmpty = () => {
  return (
    <QuickLinkStyle>
      <CrossIcon />
      <label></label>
    </QuickLinkStyle>
  )
}