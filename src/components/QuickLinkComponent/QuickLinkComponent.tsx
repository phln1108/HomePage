import { MouseEvent, useContext, useEffect, useState } from "react";
import { CloseIcon, CrossIcon } from "../../assets/Icons";
import { QuickLink } from "../../Utils/DataStructure"
import { QuickLinkStyle } from "./QuickLinkComponent.style";
import axios from "axios";
import { ModalContext } from "../../context/ModalContext";

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

        const response = await axios.get(faviconUrl, {
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

  const mouseDownHandler = (event: MouseEvent) => {
    switch(event.button) {
      case 0:
        location.href = quickLink.link;
        break;

      case 1:
        window.open(quickLink.link);
        break;
    }
  }

  return (
    <QuickLinkStyle
      onMouseDown={mouseDownHandler}
    >
      {favicon ?
        <img src={favicon} />
        :
        <CrossIcon />
      }
      <label>{quickLink.name}</label>
      <button 
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => { e.stopPropagation(); onRemove() }}
      >
        <CloseIcon />
      </button>
    </QuickLinkStyle>
  )
}

export const QuickLinkEmpty = () => {

  const {
    setQuickLinkModal
  } = useContext(ModalContext)
  return (
    <QuickLinkStyle onClick={() => setQuickLinkModal(true)}>
      <CrossIcon />
      <label></label>
    </QuickLinkStyle>
  )
}